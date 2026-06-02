const express = require('express');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = Number(process.env.PORT || 3000);
const JWT_SECRET = process.env.JWT_SECRET || 'qpr-local-dev-secret-change-me';
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/qpr';
const DATABASE_SSL = process.env.DATABASE_SSL === 'true';
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');
const LEGACY_DB_FILE = path.join(__dirname, '..', 'database', 'backend-data', 'db.json');
const SCHEMA_FILE = path.join(__dirname, '..', 'database', 'schema.sql');
const APPLICANT_COOKIE_NAME = 'qpr_applicant_session';
const ADMIN_COOKIE_NAME = 'qpr_admin_session';
const DEFAULT_ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL || 'admin@qpr.al';
const DEFAULT_ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123';
const DEFAULT_ADMIN_NAME = process.env.DEFAULT_ADMIN_NAME || 'Administrator QPR';

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: DATABASE_SSL ? { rejectUnauthorized: false } : false
});

const DEFAULT_BENEFITS = [
    {
        title: 'Përse duhet të bëheni pjesë e FA',
        items: [
            'Karrierë prestigjioze dhe e paguar mirë',
            'Sigurim shëndetësor i plotë për ty dhe familjen',
            'Mundësi për edukim dhe trajnime të vazhdueshme',
            'Pension i garantuar pas shërbimit',
            'Respekt dhe nderim nga shoqëria',
            'Komunitet i fortë dhe mbështetës',
            'Mundësi për zhvillim profesional dhe personal',
            'Kontribut për sigurinë dhe mbrojtjen e vendit'
        ]
    },
    {
        title: 'Paga',
        items: [
            'Paga konkurruese që rritet me kohën dhe eksperiencën',
            'Shtesa për shërbim në misione dhe operacione',
            'Bonuse për performancë të shkëlqyer',
            'Paga e garantuar çdo muaj',
            'Rritje automatike bazuar në gradë dhe vite shërbimi',
            'Paga shtesë për detyra speciale',
            'Kompenzim për orët jashtë orarit'
        ]
    },
    {
        title: 'Trajtimi',
        items: [
            'Trajtim shëndetësor falas në spitalet ushtarake',
            'Kontrollime mjekësore periodike',
            'Trajtim për familjen nëpërmjet sigurimeve',
            'Akses në specialistë mjekësorë',
            'Medikamente dhe ilaçe të mbuluara',
            'Trajtim dentar i plotë',
            'Programe parandaluese dhe kontrolli shëndetësor',
            'Mbështetje psikologjike dhe konsultime'
        ]
    },
    {
        title: 'Statusi i ushtarakut',
        items: [
            'Status i veçantë dhe i respektuar në shoqëri',
            'Përfitime ligjore dhe privilegje të veçanta',
            'Prioritet në shërbimet publike',
            'Mundësi për promovim dhe karrierë',
            'Njohje zyrtare e statusit ushtarak',
            'Mundësi për pjesëmarrje në misione ndërkombëtare',
            'Dekorata dhe medalje për shërbim të shkëlqyer',
            'Respekt dhe nderim nga komandat dhe kolegët'
        ]
    },
    {
        title: 'Edukim dhe Trajnime',
        items: [
            'Akses në Akademinë e Forcave të Armatosura',
            'Mundësi për studime universitare me bursë',
            'Trajnime specializuese në teknologji dhe strategji',
            'Kurse në gjuhë të huaja (anglisht, gjuhë të tjera)',
            'Certifikime profesionale të njohura',
            'Mundësi për studime jashtë vendit',
            'Zhvillim i vazhdueshëm i njohurive dhe aftësive'
        ]
    },
    {
        title: 'Pension dhe Sigurime',
        items: [
            'Pension i garantuar pas shërbimit',
            'Sigurime shëndetësore për jetën e plotë',
            'Sigurime për familjen pas vdekjes',
            'Fond pensioni ushtarak i veçantë',
            'Mundësi për pension të hershëm në raste të veçanta',
            'Mbështetje financiare për familjen',
            'Sigurime për invaliditet dhe aksidente'
        ]
    }
];

function createToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '12h' });
}

function parseCookies(req) {
    const header = req.headers.cookie || '';
    return header.split(';').reduce((cookies, part) => {
        const trimmed = part.trim();
        if (!trimmed) {
            return cookies;
        }

        const separatorIndex = trimmed.indexOf('=');
        if (separatorIndex === -1) {
            return cookies;
        }

        const name = trimmed.slice(0, separatorIndex).trim();
        const value = trimmed.slice(separatorIndex + 1).trim();
        cookies[name] = decodeURIComponent(value);
        return cookies;
    }, {});
}

function setSessionCookie(res, cookieName, token) {
    const isSecure = process.env.NODE_ENV === 'production';
    const parts = [
        `${cookieName}=${encodeURIComponent(token)}`,
        'Path=/',
        'HttpOnly',
        'SameSite=Lax',
        'Max-Age=43200'
    ];

    if (isSecure) {
        parts.push('Secure');
    }

    res.append('Set-Cookie', parts.join('; '));
}

function clearSessionCookie(res, cookieName) {
    const isSecure = process.env.NODE_ENV === 'production';
    const parts = [
        `${cookieName}=`,
        'Path=/',
        'HttpOnly',
        'SameSite=Lax',
        'Max-Age=0'
    ];

    if (isSecure) {
        parts.push('Secure');
    }

    res.append('Set-Cookie', parts.join('; '));
}

function createId(prefix = 'APP') {
    return `${prefix}-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`;
}

function sanitizeUser(user, applicationIds = []) {
    if (!user) {
        return null;
    }

    return {
        email: user.email,
        createdAt: user.createdAt,
        applications: applicationIds
    };
}

function sanitizeAdmin(admin) {
    if (!admin) {
        return null;
    }

    return {
        email: admin.email,
        name: admin.name,
        role: admin.role || 'admin'
    };
}

function mapUser(row) {
    if (!row) {
        return null;
    }

    return {
        email: row.email,
        passwordHash: row.password_hash,
        createdAt: row.created_at,
        updatedAt: row.updated_at
    };
}

function mapAdmin(row) {
    if (!row) {
        return null;
    }

    return {
        email: row.email,
        passwordHash: row.password_hash,
        name: row.name,
        role: row.role,
        createdAt: row.created_at
    };
}

function mapApplication(row) {
    if (!row) {
        return null;
    }

    return {
        id: row.id,
        type: row.type,
        email: row.email,
        submittedDate: row.submitted_date,
        status: row.status,
        personalData: row.personal_data || {},
        educationData: row.education_data || {},
        preferredUnit: row.preferred_unit || '',
        motivation: row.motivation || '',
        signature: row.signature || '',
        formData: row.form_data || {},
        documents: Array.isArray(row.documents) ? row.documents : [],
        comments: row.comments || '',
        createdAt: row.created_at,
        updatedAt: row.updated_at
    };
}

function mapBenefit(row) {
    return {
        title: row.title,
        items: Array.isArray(row.items) ? row.items : []
    };
}

function normalizeApplicationPayload(payload) {
    const formData = payload.formData || {};
    const personalData = payload.personalData || {};
    const educationData = payload.educationData || {};

    return {
        ...payload,
        type: payload.type || 'Aplikim',
        email: payload.email,
        status: payload.status || 'pending',
        submittedDate: payload.submittedDate || new Date().toISOString().slice(0, 10),
        personalData,
        educationData,
        preferredUnit: payload.preferredUnit || formData.reparti || '',
        motivation: payload.motivation || formData.motivi || '',
        signature: payload.signature || formData.firma || '',
        formData,
        documents: Array.isArray(payload.documents) ? payload.documents : [],
        comments: payload.comments || ''
    };
}

async function query(text, params = []) {
    return pool.query(text, params);
}

async function withTransaction(callback) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const result = await callback(client);
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}

async function getUserByEmail(email) {
    const normalizedEmail = String(email).trim().toLowerCase();
    const result = await query('SELECT * FROM users WHERE LOWER(email) = $1', [normalizedEmail]);
    return mapUser(result.rows[0]);
}

async function getAdminByEmail(email) {
    const normalizedEmail = String(email).trim().toLowerCase();
    const result = await query('SELECT * FROM admins WHERE LOWER(email) = $1', [normalizedEmail]);
    return mapAdmin(result.rows[0]);
}

async function getApplicationsByEmail(email) {
    const normalizedEmail = String(email).trim().toLowerCase();
    const result = await query('SELECT * FROM applications WHERE LOWER(email) = $1 ORDER BY created_at DESC', [normalizedEmail]);
    return result.rows.map(mapApplication);
}

async function getAllApplications() {
    const result = await query('SELECT * FROM applications ORDER BY created_at DESC');
    return result.rows.map(mapApplication);
}

async function getBenefits() {
    const result = await query('SELECT * FROM benefits ORDER BY sort_order ASC');
    return result.rows.map(mapBenefit);
}

async function seedBenefits(client, benefits) {
    await client.query('DELETE FROM benefits');
    for (const [index, benefit] of benefits.entries()) {
        await client.query(
            'INSERT INTO benefits (sort_order, title, items) VALUES ($1, $2, $3::jsonb)',
            [index + 1, benefit.title, JSON.stringify(Array.isArray(benefit.items) ? benefit.items : [])]
        );
    }
}

async function seedDefaultAdmin(client) {
    const existingAdmin = await client.query('SELECT email FROM admins WHERE email = $1', [DEFAULT_ADMIN_EMAIL]);
    if (existingAdmin.rowCount > 0) {
        return;
    }

    const passwordHash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
    await client.query(
        'INSERT INTO admins (email, password_hash, name, role, created_at) VALUES ($1, $2, $3, $4, $5)',
        [DEFAULT_ADMIN_EMAIL, passwordHash, DEFAULT_ADMIN_NAME, 'admin', new Date().toISOString()]
    );
}

async function importLegacyDataIfNeeded(client) {
    const counts = [
        await client.query('SELECT COUNT(*)::int AS count FROM users'),
        await client.query('SELECT COUNT(*)::int AS count FROM admins'),
        await client.query('SELECT COUNT(*)::int AS count FROM applications'),
        await client.query('SELECT COUNT(*)::int AS count FROM benefits')
    ];

    const hasExistingData = counts.some(result => result.rows[0].count > 0);
    if (hasExistingData || !fs.existsSync(LEGACY_DB_FILE)) {
        return;
    }

    const raw = await fsp.readFile(LEGACY_DB_FILE, 'utf8');
    const legacy = JSON.parse(raw);

    for (const user of legacy.users || []) {
        await client.query(
            `INSERT INTO users (email, password_hash, created_at, updated_at)
             VALUES ($1, $2, $3, $4)
             ON CONFLICT (email) DO NOTHING`,
            [
                user.email,
                user.passwordHash,
                user.createdAt || new Date().toISOString(),
                user.updatedAt || user.createdAt || new Date().toISOString()
            ]
        );
    }

    for (const admin of legacy.admins || []) {
        await client.query(
            `INSERT INTO admins (email, password_hash, name, role, created_at)
             VALUES ($1, $2, $3, $4, $5)
             ON CONFLICT (email) DO NOTHING`,
            [
                admin.email,
                admin.passwordHash,
                admin.name || 'Administrator',
                admin.role || 'admin',
                admin.createdAt || new Date().toISOString()
            ]
        );
    }

    for (const application of legacy.applications || []) {
        await client.query(
            `INSERT INTO applications (
                id, type, email, submitted_date, status, personal_data, education_data,
                preferred_unit, motivation, signature, form_data, documents, comments,
                created_at, updated_at
            ) VALUES (
                $1, $2, $3, $4, $5, $6::jsonb, $7::jsonb,
                $8, $9, $10, $11::jsonb, $12::jsonb, $13,
                $14, $15
            ) ON CONFLICT (id) DO NOTHING`,
            [
                application.id,
                application.type || 'Aplikim',
                application.email,
                application.submittedDate || new Date().toISOString().slice(0, 10),
                application.status || 'pending',
                JSON.stringify(application.personalData || {}),
                JSON.stringify(application.educationData || {}),
                application.preferredUnit || '',
                application.motivation || '',
                application.signature || '',
                JSON.stringify(application.formData || {}),
                JSON.stringify(Array.isArray(application.documents) ? application.documents : []),
                application.comments || '',
                application.createdAt || new Date().toISOString(),
                application.updatedAt || application.createdAt || new Date().toISOString()
            ]
        );
    }

    if (Array.isArray(legacy.benefits) && legacy.benefits.length > 0) {
        await seedBenefits(client, legacy.benefits);
    }
}

function extractBearerToken(req) {
    const header = req.headers.authorization || '';
    if (!header.startsWith('Bearer ')) {
        return null;
    }

    return header.slice('Bearer '.length);
}

function extractAuthToken(req, role) {
    const bearerToken = extractBearerToken(req);
    if (bearerToken) {
        return bearerToken;
    }

    const cookies = parseCookies(req);
    if (role === 'admin') {
        return cookies[ADMIN_COOKIE_NAME] || null;
    }

    if (role === 'applicant') {
        return cookies[APPLICANT_COOKIE_NAME] || null;
    }

    return cookies[APPLICANT_COOKIE_NAME] || cookies[ADMIN_COOKIE_NAME] || null;
}

function authRequired(role) {
    return async (req, res, next) => {
        try {
            const token = extractAuthToken(req, role);
            if (!token) {
                return res.status(401).json({ error: 'Kërkohet autentikim.' });
            }

            const payload = jwt.verify(token, JWT_SECRET);
            if (role && payload.role !== role) {
                return res.status(403).json({ error: 'Nuk keni akses në këtë burim.' });
            }

            req.auth = payload;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Sesioni ka skaduar ose token-i është i pavlefshëm.' });
        }
    };
}

async function initializeDatabase() {
    const schemaSql = await fsp.readFile(SCHEMA_FILE, 'utf8');
    await query(schemaSql);

    await withTransaction(async client => {
        await seedDefaultAdmin(client);

        const benefitsCount = await client.query('SELECT COUNT(*)::int AS count FROM benefits');
        if (benefitsCount.rows[0].count === 0) {
            await seedBenefits(client, DEFAULT_BENEFITS);
        }

        await importLegacyDataIfNeeded(client);
    });
}

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/api/health', async (req, res) => {
    await query('SELECT 1');
    res.json({ ok: true, database: 'postgresql' });
});

app.get('/api/benefits', async (req, res) => {
    const benefits = await getBenefits();
    res.json({ benefits: benefits.length > 0 ? benefits : DEFAULT_BENEFITS });
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ error: 'Email dhe fjalëkalimi janë të detyrueshëm.' });
    }

    const user = await getUserByEmail(email);
    if (!user) {
        return res.status(404).json({ error: 'Email nuk u gjet.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
        return res.status(401).json({ error: 'Fjalëkalimi është i gabuar.' });
    }

    const applications = await getApplicationsByEmail(user.email);
    const token = createToken({ role: 'applicant', email: user.email });
    setSessionCookie(res, APPLICANT_COOKIE_NAME, token);
    clearSessionCookie(res, ADMIN_COOKIE_NAME);

    return res.json({
        token,
        user: sanitizeUser(user, applications.map(item => item.id)),
        applications
    });
});

app.post('/api/auth/admin/login', async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ error: 'Email dhe fjalëkalimi janë të detyrueshëm.' });
    }

    const admin = await getAdminByEmail(email);
    if (!admin) {
        return res.status(404).json({ error: 'Administratori nuk u gjet.' });
    }

    const passwordMatches = await bcrypt.compare(password, admin.passwordHash);
    if (!passwordMatches) {
        return res.status(401).json({ error: 'Fjalëkalimi është i gabuar.' });
    }

    const token = createToken({ role: 'admin', email: admin.email, name: admin.name || 'Administrator' });
    const [applications, benefits] = await Promise.all([getAllApplications(), getBenefits()]);
    setSessionCookie(res, ADMIN_COOKIE_NAME, token);
    clearSessionCookie(res, APPLICANT_COOKIE_NAME);

    return res.json({
        token,
        admin: sanitizeAdmin(admin),
        applications,
        benefits: benefits.length > 0 ? benefits : DEFAULT_BENEFITS
    });
});

app.post('/api/auth/forgot-password', async (req, res) => {
    const { email } = req.body || {};
    if (!email) {
        return res.status(400).json({ error: 'Email është i detyrueshëm.' });
    }

    const user = await getUserByEmail(email);
    if (!user) {
        return res.status(404).json({ error: 'Email nuk u gjet në sistem.' });
    }

    const tempPassword = `QPR-${crypto.randomBytes(3).toString('hex')}`;
    const passwordHash = await bcrypt.hash(tempPassword, 10);
    await query('UPDATE users SET password_hash = $1, updated_at = $2 WHERE email = $3', [passwordHash, new Date().toISOString(), user.email]);

    return res.json({
        message: 'Është krijuar një fjalëkalim i përkohshëm.',
        temporaryPassword: tempPassword
    });
});

app.post('/api/auth/logout', (req, res) => {
    clearSessionCookie(res, APPLICANT_COOKIE_NAME);
    res.json({ ok: true });
});

app.post('/api/auth/admin/logout', (req, res) => {
    clearSessionCookie(res, ADMIN_COOKIE_NAME);
    res.json({ ok: true });
});

app.post('/api/auth/change-password', authRequired('applicant'), async (req, res) => {
    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: 'Fjalëkalimi aktual dhe i ri janë të detyrueshëm.' });
    }

    if (String(newPassword).length < 6) {
        return res.status(400).json({ error: 'Fjalëkalimi i ri duhet të ketë të paktën 6 karaktere.' });
    }

    const user = await getUserByEmail(req.auth.email);
    if (!user) {
        return res.status(404).json({ error: 'Përdoruesi nuk u gjet.' });
    }

    const passwordMatches = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!passwordMatches) {
        return res.status(401).json({ error: 'Fjalëkalimi aktual është i gabuar.' });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await query('UPDATE users SET password_hash = $1, updated_at = $2 WHERE email = $3', [passwordHash, new Date().toISOString(), user.email]);
    const applications = await getApplicationsByEmail(user.email);

    return res.json({
        message: 'Fjalëkalimi u ndryshua me sukses.',
        user: sanitizeUser(user, applications.map(item => item.id))
    });
});

app.get('/api/applications/me', authRequired('applicant'), async (req, res) => {
    const [user, applications] = await Promise.all([
        getUserByEmail(req.auth.email),
        getApplicationsByEmail(req.auth.email)
    ]);

    return res.json({
        user: sanitizeUser(user, applications.map(item => item.id)),
        applications
    });
});

app.post('/api/applications', async (req, res) => {
    const { application, accountPassword } = req.body || {};
    const payload = normalizeApplicationPayload(application || {});

    if (!payload.email) {
        return res.status(400).json({ error: 'Email është i detyrueshëm për aplikimin.' });
    }

    const token = extractAuthToken(req, 'applicant');
    let auth = null;
    if (token) {
        try {
            auth = jwt.verify(token, JWT_SECRET);
        } catch (error) {
            auth = null;
        }
    }

    if (!auth && (!accountPassword || String(accountPassword).length < 6)) {
        return res.status(400).json({ error: 'Duhet një fjalëkalim me të paktën 6 karaktere për llogarinë e re.' });
    }

    if (auth && auth.role === 'applicant' && auth.email !== payload.email) {
        return res.status(403).json({ error: 'Nuk mund të dërgoni aplikim për një email tjetër.' });
    }

    const result = await withTransaction(async client => {
        let userResult = await client.query('SELECT * FROM users WHERE LOWER(email) = $1', [payload.email.toLowerCase()]);
        let user = mapUser(userResult.rows[0]);
        const now = new Date().toISOString();

        if (!user) {
            const passwordHash = await bcrypt.hash(accountPassword, 10);
            userResult = await client.query(
                `INSERT INTO users (email, password_hash, created_at, updated_at)
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`,
                [payload.email, passwordHash, now, now]
            );
            user = mapUser(userResult.rows[0]);
        }

        const applicationId = payload.id || createId('APP');
        const insertResult = await client.query(
            `INSERT INTO applications (
                id, type, email, submitted_date, status, personal_data, education_data,
                preferred_unit, motivation, signature, form_data, documents, comments,
                created_at, updated_at
            ) VALUES (
                $1, $2, $3, $4, $5, $6::jsonb, $7::jsonb,
                $8, $9, $10, $11::jsonb, $12::jsonb, $13,
                $14, $15
            ) RETURNING *`,
            [
                applicationId,
                payload.type,
                user.email,
                payload.submittedDate,
                payload.status,
                JSON.stringify(payload.personalData || {}),
                JSON.stringify(payload.educationData || {}),
                payload.preferredUnit || '',
                payload.motivation || '',
                payload.signature || '',
                JSON.stringify(payload.formData || {}),
                JSON.stringify(payload.documents || []),
                payload.comments || '',
                now,
                now
            ]
        );

        await client.query('UPDATE users SET updated_at = $1 WHERE email = $2', [now, user.email]);

        return {
            user,
            application: mapApplication(insertResult.rows[0])
        };
    });

    const applications = await getApplicationsByEmail(result.user.email);
    const applicantToken = createToken({ role: 'applicant', email: result.user.email });

    return res.status(201).json({
        token: applicantToken,
        user: sanitizeUser(result.user, applications.map(item => item.id)),
        application: result.application,
        applications
    });
});

app.get('/api/admin/applications', authRequired('admin'), async (req, res) => {
    const [applications, benefits] = await Promise.all([getAllApplications(), getBenefits()]);
    const admin = await getAdminByEmail(req.auth.email);
    return res.json({
        admin: sanitizeAdmin(admin),
        applications,
        benefits: benefits.length > 0 ? benefits : DEFAULT_BENEFITS
    });
});

app.patch('/api/admin/applications/:id/status', authRequired('admin'), async (req, res) => {
    const { status } = req.body || {};
    const allowedStatuses = new Set(['pending', 'reviewed', 'approved', 'rejected']);
    if (!allowedStatuses.has(status)) {
        return res.status(400).json({ error: 'Status i pavlefshëm.' });
    }

    const updated = await query(
        'UPDATE applications SET status = $1, updated_at = $2 WHERE id = $3 RETURNING *',
        [status, new Date().toISOString(), req.params.id]
    );

    if (updated.rowCount === 0) {
        return res.status(404).json({ error: 'Aplikimi nuk u gjet.' });
    }

    return res.json({ application: mapApplication(updated.rows[0]) });
});

app.patch('/api/admin/applications/:id/comment', authRequired('admin'), async (req, res) => {
    const { comment } = req.body || {};
    const updated = await query(
        'UPDATE applications SET comments = $1, updated_at = $2 WHERE id = $3 RETURNING *',
        [String(comment || '').trim(), new Date().toISOString(), req.params.id]
    );

    if (updated.rowCount === 0) {
        return res.status(404).json({ error: 'Aplikimi nuk u gjet.' });
    }

    return res.json({ application: mapApplication(updated.rows[0]) });
});

app.put('/api/admin/benefits', authRequired('admin'), async (req, res) => {
    const { benefits } = req.body || {};
    if (!Array.isArray(benefits) || benefits.length === 0) {
        return res.status(400).json({ error: 'Përfitimet duhet të jenë një listë jo bosh.' });
    }

    await withTransaction(async client => {
        await seedBenefits(client, benefits);
    });

    return res.json({ benefits: await getBenefits() });
});

app.use(express.static(FRONTEND_DIR));

app.get('*', (req, res) => {
    res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

initializeDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`QPR server running on http://localhost:${PORT}`);
            console.log(`PostgreSQL: ${DATABASE_URL}`);
        });
    })
    .catch(error => {
        console.error('Failed to initialize QPR backend:', error);
        process.exit(1);
    });
