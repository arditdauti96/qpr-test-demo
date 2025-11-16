// Pyetësori questions
const pyetësoriQuestions = [
    "A keni ndryshuar emrin apo mbiemrin më parë?",
    "A keni shtetësi tjetër përveç asaj shqiptare?",
    "A keni shërbyer më parë në radhët e Forcave të Armatosura të Republikës së Shqipërisë?",
    "A keni aplikuar ndonjëherë tjetër për të shërbyer në Forcat e Armatosura?",
    "A jeni këshilluar ndonjëherë me psikolog apo mjek psikiatër?",
    "A jeni në marrëdhënie pune?",
    "A keni qenë herë tjetër në marrëdhënie pune?",
    "A keni njohuri në ndonjë gjuhë të huaj?",
    "A jeni i gatshëm të pranoni për të shërbyer brenda territorit të Republikës së Shqipërisë dhe jashtë saj në operacione ushtarake ndërkombëtare?",
    "A do të dëshironit ta zhvillonit më tej karrierën tuaj, duke shërbyer si nënoficer ose oficer në të ardhmen?",
    "A keni qenë ndonjëherë i dëbuar me \"expulse\" nga vendet e tjera?"
];

// Formulari shëndetësor questions
const shendetesorQuestions = [
    "A keni marrë goditje në kokë këto 5 vitet e fundit?",
    "A keni patur ndonjë tronditje në kokë këto 5 vitet e fundit?",
    "A keni patur ndërhyrje kirurgjikale dentare brenda muajit të fundit?",
    "A keni kryer ndërhyrje kirurgjikale në trupin tuaj?",
    "A keni pasur thyerje të kockave të ndryshme të trupit brenda 1 viti?",
    "A keni marrë apo jeni duke marrë mjekim kundër përdorimit të alkolit apo substancave narkotike të ndryshme?",
    "A keni ndonjë shqetësim neurologjik apo psikologjik që lidhet me mirëfunksionimin e organizmit tuaj?",
    "A keni pasur ndonjë shqetësim shëndetësor në zemër apo të tensionit arterial?",
    "A keni pasur apo keni ndonjë çrregullim apo infeksion të organeve të dëgjimit (veshit) dhe frymëmarrjes (hundës) në muajin e fundit?",
    "A keni pasur problem të tjera shëndetësore?"
];

// Generate table rows for pyetësori
function generatePyetësoriTable() {
    const table = document.getElementById('pyetësoriTable');
    if (!table) return;
    pyetësoriQuestions.forEach((question, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${question}</td>
            <td>
                <select name="pyetësori[${index}]" required>
                    <option value="">---------</option>
                    <option value="po">po</option>
                    <option value="jo">jo</option>
                </select>
            </td>
            <td>
                <input type="text" name="pyetësori_koment[${index}]">
            </td>
        `;
        table.appendChild(row);
    });
}

// Generate table rows for shendetësor
function generateShendetesorTable() {
    const table = document.getElementById('shendetesorTable');
    if (!table) return;
    shendetesorQuestions.forEach((question, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${question}</td>
            <td>
                <select name="shendetesor[${index}]" required>
                    <option value="">---------</option>
                    <option value="po">po</option>
                    <option value="jo">jo</option>
                </select>
            </td>
            <td>
                <input type="text" name="shendetesor_koment[${index}]">
            </td>
        `;
        table.appendChild(row);
    });
}

// Signature canvas
let canvas, ctx;
let isDrawing = false;

function initSignature() {
    canvas = document.getElementById('signatureCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    
    // Update hidden input
    const firmaInput = document.getElementById('firma');
    if (firmaInput) {
        firmaInput.value = canvas.toDataURL();
    }
}

function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        const firmaInput = document.getElementById('firma');
        if (firmaInput) {
            firmaInput.value = canvas.toDataURL();
        }
    }
}

function clearSignature() {
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const firmaInput = document.getElementById('firma');
        if (firmaInput) {
            firmaInput.value = '';
        }
    }
}

// Show/hide conditional fields
function toggleDenimDetails() {
    const denuar = document.getElementById('denuar');
    const details = document.getElementById('denimDetails');
    if (denuar && details) {
        details.style.display = denuar.value === 'po' ? 'block' : 'none';
    }
}

function toggleMasaSiguriseDetails() {
    const masaSigurise = document.getElementById('masaSigurise');
    const details = document.getElementById('masaSiguriseDetails');
    if (masaSigurise && details) {
        details.style.display = masaSigurise.value === 'po' ? 'block' : 'none';
    }
}

// Form Submission - Create Account and Save Application
document.addEventListener('DOMContentLoaded', function() {
    // Generate tables first
    generatePyetësoriTable();
    generateShendetesorTable();
    initSignature();
    
    // Setup conditional fields
    const denuarField = document.getElementById('denuar');
    const masaSiguriseField = document.getElementById('masaSigurise');
    if (denuarField) {
        denuarField.addEventListener('change', toggleDenimDetails);
    }
    if (masaSiguriseField) {
        masaSiguriseField.addEventListener('change', toggleMasaSiguriseDetails);
    }
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('applicantLoggedIn');
    const loggedInEmail = localStorage.getItem('applicantEmail');
    
    if (isLoggedIn && loggedInEmail) {
        // User is logged in - prefill email and hide password fields
        const emailField = document.getElementById('accountEmail');
        const passwordGroup = document.getElementById('passwordGroup');
        const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
        const loggedInInfo = document.getElementById('loggedInInfo');
        const accountSectionTitle = document.getElementById('accountSectionTitle');
        const accountSectionDescription = document.getElementById('accountSectionDescription');
        const submitButton = document.getElementById('submitButton');
        
        if (emailField) {
            emailField.value = loggedInEmail;
            emailField.readOnly = true;
            emailField.style.backgroundColor = '#f0f0f0';
            emailField.style.cursor = 'not-allowed';
        }
        
        if (passwordGroup) {
            passwordGroup.style.display = 'none';
            const passwordInput = document.getElementById('accountPassword');
            if (passwordInput) {
                passwordInput.removeAttribute('required');
            }
        }
        
        if (confirmPasswordGroup) {
            confirmPasswordGroup.style.display = 'none';
            const confirmPasswordInput = document.getElementById('confirmPassword');
            if (confirmPasswordInput) {
                confirmPasswordInput.removeAttribute('required');
            }
        }
        
        if (loggedInInfo) {
            loggedInInfo.style.display = 'block';
            document.getElementById('loggedInEmail').textContent = loggedInEmail;
        }
        
        if (accountSectionTitle) {
            accountSectionTitle.textContent = 'Informacion i Llogarisë';
        }
        
        if (accountSectionDescription) {
            accountSectionDescription.textContent = 'Aplikimi do të lidhet me llogarinë tuaj ekzistuese.';
        }
        
        if (submitButton) {
            submitButton.textContent = 'Apliko';
        }
    }
    
    // Form submission
    const form = document.getElementById('ushtarForm') || document.querySelector('form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get email - use logged in email if available
    const email = isLoggedIn && loggedInEmail ? loggedInEmail : document.getElementById('accountEmail').value;
    
    // Validate password only if user is not logged in or creating new account
    let password = '';
    if (!isLoggedIn) {
        password = document.getElementById('accountPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (!password || password.length < 6) {
            alert('Fjalëkalimi duhet të ketë të paktën 6 karaktere!');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Fjalëkalimet nuk përputhen! Ju lutem kontrolloni.');
            return;
        }
    } else {
        // User is logged in - get password from existing account
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            password = existingUser.password; // Në prodhim, nuk duhet të ruajmë password në plain text
        }
    }
    
    if (!email) {
        alert('Email është i detyrueshëm!');
        return;
    }
    
    // Collect all form data
    const formData = new FormData(this);
    const applicationData = {
        id: Date.now().toString(), // Generate unique ID
        type: 'Ushtar ose Detar Aktiv',
        email: email,
        password: password, // Në prodhim, duhet të hash-ojmë
        submittedDate: new Date().toLocaleDateString('sq-AL'),
        status: 'pending',
        personalData: {
            firstName: formData.get('emri') || '',
            lastName: formData.get('mbiemri') || '',
            birthDate: formData.get('datelindja') || '',
            placeOfBirth: formData.get('vendlindja') || '',
            address: formData.get('adresa') || '',
            phone: formData.get('telefoni') || '',
            email: email
        },
        educationData: {
            level: formData.get('niveli_arsimit') || '',
            institution: formData.get('institucioni') || '',
            graduationYear: formData.get('viti_graduimit') || ''
        },
        preferredUnit: formData.get('njesia_preferuar') || '',
        motivation: formData.get('motivimi') || '',
        signature: formData.get('firma') || ''
    };
    
    // Get all form fields and add to applicationData
    const formElements = this.elements;
    for (let element of formElements) {
        if (element.name && element.name !== 'accountEmail' && element.name !== 'accountPassword' && element.name !== 'confirmPassword') {
            if (!applicationData.formData) {
                applicationData.formData = {};
            }
            applicationData.formData[element.name] = element.value || element.checked || '';
        }
    }
    
    // Save application to localStorage
    let applications = JSON.parse(localStorage.getItem('applications') || '[]');
    applications.push(applicationData);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    // Handle user account
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(u => u.email === email);
    
    if (userExists) {
        // User already exists - just add application to their list
        userExists.applications = userExists.applications || [];
        if (!userExists.applications.includes(applicationData.id)) {
            userExists.applications.push(applicationData.id);
        }
        users = users.map(u => u.email === email ? userExists : u);
        
        // Show success message for existing user
        alert('Aplikimi juaj u dërgua me sukses!\n\nAplikimi është i lidhur me llogarinë tuaj: ' + email + '\n\nJu do të ridrejtoheni në dashboard...');
    } else {
        // Create new user account
        users.push({
            email: email,
            password: password, // Në prodhim, duhet të hash-ojmë
            createdAt: new Date().toISOString(),
            applications: [applicationData.id]
        });
        
        // Auto-login new user
        localStorage.setItem('applicantEmail', email);
        localStorage.setItem('applicantLoggedIn', 'true');
        
        // Show success message with credentials for new user
        alert('Aplikimi juaj u dërgua me sukses!\n\nKredencialet tuaja:\nEmail: ' + email + '\nFjalëkalim: ' + password + '\n\nJu do të ridrejtoheni në dashboard...');
    }
    
    localStorage.setItem('users', JSON.stringify(users));
    
    // Ensure user is logged in
    localStorage.setItem('applicantEmail', email);
    localStorage.setItem('applicantLoggedIn', 'true');
    
    // Redirect to dashboard
    setTimeout(() => {
        window.location.href = 'applicant-dashboard.html';
    }, 2000);
    });
    
    // Add password confirmation validation
    const confirmPasswordField = document.getElementById('confirmPassword');
    if (confirmPasswordField) {
        confirmPasswordField.addEventListener('input', function() {
            const password = document.getElementById('accountPassword').value;
            const confirmPassword = this.value;
            
            if (password && confirmPassword) {
                if (password !== confirmPassword) {
                    this.setCustomValidity('Fjalëkalimet nuk përputhen!');
                    this.style.borderColor = '#DC3545';
                } else {
                    this.setCustomValidity('');
                    this.style.borderColor = '#28A745';
                }
            }
        });
    }
});
