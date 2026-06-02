(function() {
    let applicantState = {
        user: null,
        applications: []
    };
    let adminState = {
        admin: null,
        applications: [],
        benefits: []
    };

    function getJson(response) {
        return response.json().catch(() => ({}));
    }

    async function request(path, options = {}) {
        const settings = {
            method: options.method || 'GET',
            credentials: 'same-origin',
            headers: {
                ...(options.body ? { 'Content-Type': 'application/json' } : {}),
                ...(options.headers || {})
            }
        };

        if (options.token) {
            settings.headers.Authorization = `Bearer ${options.token}`;
        }

        if (options.body) {
            settings.body = JSON.stringify(options.body);
        }

        const response = await fetch(path, settings);
        const payload = await getJson(response);

        if (!response.ok) {
            const error = new Error(payload.error || 'Ndodhi një gabim gjatë komunikimit me serverin.');
            error.status = response.status;
            throw error;
        }

        return payload;
    }

    function storeApplicantSession(user, applications) {
        applicantState = {
            user: user || null,
            applications: Array.isArray(applications) ? applications : []
        };
    }

    function storeAdminSession(admin, applications, benefits) {
        adminState = {
            admin: admin || null,
            applications: Array.isArray(applications) ? applications : [],
            benefits: Array.isArray(benefits) ? benefits : []
        };
    }

    function resetApplicantSession() {
        applicantState = {
            user: null,
            applications: []
        };
    }

    function resetAdminSession() {
        adminState = {
            admin: null,
            applications: [],
            benefits: []
        };
    }

    window.QprApi = {
        getApplicantToken() {
            return null;
        },
        getAdminToken() {
            return null;
        },
        getApplicantSessionData() {
            return {
                user: applicantState.user,
                applications: [...applicantState.applications]
            };
        },
        getAdminSessionData() {
            return {
                admin: adminState.admin,
                applications: [...adminState.applications],
                benefits: [...adminState.benefits]
            };
        },
        clearApplicantSession() {
            resetApplicantSession();
        },
        clearAdminSession() {
            resetAdminSession();
        },
        async logoutApplicant() {
            try {
                await request('/api/auth/logout', { method: 'POST' });
            } catch (error) {
                console.warn('Applicant logout request failed.', error);
            }
            resetApplicantSession();
        },
        async logoutAdmin() {
            try {
                await request('/api/auth/admin/logout', { method: 'POST' });
            } catch (error) {
                console.warn('Admin logout request failed.', error);
            }
            resetAdminSession();
        },
        async fetchBenefits() {
            const payload = await request('/api/benefits');
            adminState.benefits = payload.benefits || [];
            return payload.benefits || [];
        },
        async loginApplicant(email, password) {
            const payload = await request('/api/auth/login', {
                method: 'POST',
                body: { email, password }
            });

            storeApplicantSession(payload.user, payload.applications);
            return payload;
        },
        async loginAdmin(email, password) {
            const payload = await request('/api/auth/admin/login', {
                method: 'POST',
                body: { email, password }
            });

            storeAdminSession(payload.admin, payload.applications, payload.benefits);
            return payload;
        },
        async forgotPassword(email) {
            return request('/api/auth/forgot-password', {
                method: 'POST',
                body: { email }
            });
        },
        async changeApplicantPassword(currentPassword, newPassword) {
            const payload = await request('/api/auth/change-password', {
                method: 'POST',
                body: { currentPassword, newPassword }
            });

            applicantState.user = payload.user || applicantState.user;
            return payload;
        },
        async fetchApplicantApplications() {
            const payload = await request('/api/applications/me');

            applicantState = {
                user: payload.user || null,
                applications: Array.isArray(payload.applications) ? payload.applications : []
            };
            return payload;
        },
        async submitApplication(application, accountPassword) {
            const payload = await request('/api/applications', {
                method: 'POST',
                body: { application, accountPassword }
            });

            storeApplicantSession(payload.user, payload.applications);
            return payload;
        },
        async fetchAdminApplications() {
            const payload = await request('/api/admin/applications');

            adminState.admin = payload.admin || adminState.admin;
            adminState.applications = Array.isArray(payload.applications) ? payload.applications : [];
            adminState.benefits = Array.isArray(payload.benefits) ? payload.benefits : [];
            return payload;
        },
        async updateApplicationStatus(applicationId, status) {
            return request(`/api/admin/applications/${encodeURIComponent(applicationId)}/status`, {
                method: 'PATCH',
                body: { status }
            });
        },
        async updateApplicationComment(applicationId, comment) {
            return request(`/api/admin/applications/${encodeURIComponent(applicationId)}/comment`, {
                method: 'PATCH',
                body: { comment }
            });
        },
        async saveBenefits(benefits) {
            const payload = await request('/api/admin/benefits', {
                method: 'PUT',
                body: { benefits }
            });

            adminState.benefits = Array.isArray(payload.benefits) ? payload.benefits : [];
            return payload;
        }
    };
})();