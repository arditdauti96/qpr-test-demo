// Script për të futur të dhëna test në localStorage
// Ekzekuto këtë në konsolën e browser-it ose në një faqe HTML

(function() {
    console.log('Duke shtuar të dhëna test...');
    
    // Të dhëna test për aplikime
    const testApplications = [
        {
            id: 'APP-001',
            type: 'Ushtar ose Detar Aktiv',
            email: 'test1@example.com',
            submittedDate: '15-11-2024',
            status: 'pending',
            personalData: {
                firstName: 'Arben',
                lastName: 'Krasniqi',
                birthDate: '15-05-1998',
                phone: '+355691234567',
                address: 'Rr. Dëshmorët e Kombit, Tiranë',
                email: 'test1@example.com'
            },
            educationData: {
                level: 'Arsim i mesëm i plotë',
                school: 'Shkolla e Mesme "Ismail Qemali"',
                graduationYear: '2016'
            },
            formData: {
                emri: 'Arben',
                mbiemri: 'Krasniqi',
                datelindja: '15-05-1998',
                vendlindja: 'Tiranë',
                shtetas: 'Shqiptar',
                gjinia: 'Mashkull',
                gjendja_civile: 'Beqar',
                adresa: 'Rr. Dëshmorët e Kombit, Tiranë',
                nrKontakti: '+355691234567',
                niveli_arsimit: 'Arsim i mesëm i plotë'
            },
            comments: ''
        },
        {
            id: 'APP-002',
            type: 'Oficer - Akademia e Forcave',
            email: 'test2@example.com',
            submittedDate: '20-11-2024',
            status: 'reviewed',
            personalData: {
                firstName: 'Elena',
                lastName: 'Gjoka',
                birthDate: '22-03-2000',
                phone: '+355692345678',
                address: 'Rr. Skënderbej, Durrës',
                email: 'test2@example.com'
            },
            educationData: {
                level: 'Arsim i lartë',
                school: 'Universiteti i Tiranës',
                graduationYear: '2022'
            },
            formData: {
                emri: 'Elena',
                mbiemri: 'Gjoka',
                datelindja: '22-03-2000',
                vendlindja: 'Durrës',
                shtetas: 'Shqiptar',
                gjinia: 'Femër',
                gjendja_civile: 'Beqar',
                adresa: 'Rr. Skënderbej, Durrës',
                nrKontakti: '+355692345678',
                niveli_arsimit: 'Arsim i lartë'
            },
            comments: 'Kandidatja ka arsim të lartë dhe është e përshtatshme për pozicionin.'
        },
        {
            id: 'APP-003',
            type: 'Ushtar Rezervist',
            email: 'test3@example.com',
            submittedDate: '25-11-2024',
            status: 'approved',
            personalData: {
                firstName: 'Marko',
                lastName: 'Hoxha',
                birthDate: '10-08-1995',
                phone: '+355693456789',
                address: 'Rr. Fan Noli, Shkodër',
                email: 'test3@example.com'
            },
            educationData: {
                level: 'Arsim i mesëm i plotë',
                school: 'Shkolla e Mesme "28 Nëntori"',
                graduationYear: '2013'
            },
            formData: {
                emri: 'Marko',
                mbiemri: 'Hoxha',
                datelindja: '10-08-1995',
                vendlindja: 'Shkodër',
                shtetas: 'Shqiptar',
                gjinia: 'Mashkull',
                gjendja_civile: 'I martuar',
                adresa: 'Rr. Fan Noli, Shkodër',
                nrKontakti: '+355693456789',
                niveli_arsimit: 'Arsim i mesëm i plotë'
            },
            comments: 'Aplikimi u aprovua me sukses. Kandidati ka plotësuar të gjitha kërkesat.'
        },
        {
            id: 'APP-004',
            type: 'Oficer - Studime Jashtë Vendit',
            email: 'test4@example.com',
            submittedDate: '28-11-2024',
            status: 'rejected',
            personalData: {
                firstName: 'Ana',
                lastName: 'Dervishi',
                birthDate: '05-12-1999',
                phone: '+355694567890',
                address: 'Rr. Kavajë, Vlorë',
                email: 'test4@example.com'
            },
            educationData: {
                level: 'Arsim i lartë',
                school: 'Universiteti Politeknik i Tiranës',
                graduationYear: '2021'
            },
            formData: {
                emri: 'Ana',
                mbiemri: 'Dervishi',
                datelindja: '05-12-1999',
                vendlindja: 'Vlorë',
                shtetas: 'Shqiptar',
                gjinia: 'Femër',
                gjendja_civile: 'Beqar',
                adresa: 'Rr. Kavajë, Vlorë',
                nrKontakti: '+355694567890',
                niveli_arsimit: 'Arsim i lartë'
            },
            comments: 'Aplikimi u refuzua për shkak të dokumenteve jo të plota.'
        },
        {
            id: 'APP-005',
            type: 'Ushtar ose Detar Aktiv',
            email: 'test5@example.com',
            submittedDate: '01-12-2024',
            status: 'pending',
            personalData: {
                firstName: 'Dritan',
                lastName: 'Berisha',
                birthDate: '18-07-1997',
                phone: '+355695678901',
                address: 'Rr. Elbasan, Korçë',
                email: 'test5@example.com'
            },
            educationData: {
                level: 'Arsim i mesëm i plotë',
                school: 'Shkolla e Mesme "Gjergj Kastrioti"',
                graduationYear: '2015'
            },
            formData: {
                emri: 'Dritan',
                mbiemri: 'Berisha',
                datelindja: '18-07-1997',
                vendlindja: 'Korçë',
                shtetas: 'Shqiptar',
                gjinia: 'Mashkull',
                gjendja_civile: 'Beqar',
                adresa: 'Rr. Elbasan, Korçë',
                nrKontakti: '+355695678901',
                niveli_arsimit: 'Arsim i mesëm i plotë'
            },
            comments: ''
        },
        {
            id: 'APP-006',
            type: 'Civil',
            email: 'test6@example.com',
            submittedDate: '03-12-2024',
            status: 'reviewed',
            personalData: {
                firstName: 'Blerta',
                lastName: 'Kulla',
                birthDate: '30-01-1996',
                phone: '+355696789012',
                address: 'Rr. Rilindasit, Gjirokastër',
                email: 'test6@example.com'
            },
            educationData: {
                level: 'Arsim i lartë',
                school: 'Universiteti i Gjirokastrës',
                graduationYear: '2018'
            },
            formData: {
                emri: 'Blerta',
                mbiemri: 'Kulla',
                datelindja: '30-01-1996',
                vendlindja: 'Gjirokastër',
                shtetas: 'Shqiptar',
                gjinia: 'Femër',
                gjendja_civile: 'I martuar',
                adresa: 'Rr. Rilindasit, Gjirokastër',
                nrKontakti: '+355696789012',
                niveli_arsimit: 'Arsim i lartë'
            },
            comments: 'Kandidatja është në shqyrtim për pozicionin civil.'
        }
    ];
    
    // Të dhëna test për përdoruesit
    const testUsers = [
        {
            email: 'test1@example.com',
            password: 'test123',
            createdAt: '2024-11-15T10:00:00.000Z',
            applications: ['APP-001']
        },
        {
            email: 'test2@example.com',
            password: 'test123',
            createdAt: '2024-11-20T10:00:00.000Z',
            applications: ['APP-002']
        },
        {
            email: 'test3@example.com',
            password: 'test123',
            createdAt: '2024-11-25T10:00:00.000Z',
            applications: ['APP-003']
        },
        {
            email: 'test4@example.com',
            password: 'test123',
            createdAt: '2024-11-28T10:00:00.000Z',
            applications: ['APP-004']
        },
        {
            email: 'test5@example.com',
            password: 'test123',
            createdAt: '2024-12-01T10:00:00.000Z',
            applications: ['APP-005']
        },
        {
            email: 'test6@example.com',
            password: 'test123',
            createdAt: '2024-12-03T10:00:00.000Z',
            applications: ['APP-006']
        }
    ];
    
    // Ruaj aplikimet
    const existingApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    const existingIds = existingApplications.map(app => app.id);
    
    // Shto vetëm aplikimet që nuk ekzistojnë
    const newApplications = testApplications.filter(app => !existingIds.includes(app.id));
    if (newApplications.length > 0) {
        const allApplications = [...existingApplications, ...newApplications];
        localStorage.setItem('applications', JSON.stringify(allApplications));
        console.log(`✅ U shtuan ${newApplications.length} aplikime të reja test.`);
    } else {
        console.log('ℹ️ Të gjitha aplikimet test ekzistojnë tashmë.');
    }
    
    // Ruaj përdoruesit
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingEmails = existingUsers.map(user => user.email);
    
    // Shto vetëm përdoruesit që nuk ekzistojnë
    const newUsers = testUsers.filter(user => !existingEmails.includes(user.email));
    if (newUsers.length > 0) {
        const allUsers = [...existingUsers, ...newUsers];
        localStorage.setItem('users', JSON.stringify(allUsers));
        console.log(`✅ U shtuan ${newUsers.length} përdorues të rinj test.`);
    } else {
        console.log('ℹ️ Të gjithë përdoruesit test ekzistojnë tashmë.');
    }
    
    console.log('✅ Të dhënat test u shtuan me sukses!');
    console.log('\n📋 Përmbledhje:');
    console.log(`   - Aplikime totale: ${JSON.parse(localStorage.getItem('applications') || '[]').length}`);
    console.log(`   - Përdorues total: ${JSON.parse(localStorage.getItem('users') || '[]').length}`);
    console.log('\n🔑 Kredencialet test:');
    testUsers.forEach(user => {
        console.log(`   Email: ${user.email} | Password: ${user.password}`);
    });
})();

