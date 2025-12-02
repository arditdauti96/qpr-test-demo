// Carousel functionality
let currentSlide = 0;
const totalSlides = 2;

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

// Auto-advance carousel
let carouselInterval;

function startCarousel() {
    carouselInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCarousel();
    startCarousel();
    
    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarousel);
        carouselContainer.addEventListener('mouseleave', startCarousel);
    }
    
    // Login link now goes to login.html page (no modal needed)
    // The checkLoginStatus function handles redirecting logged-in users to dashboard
});

// Application modal functionality
function openApplication() {
    const applicationModal = document.getElementById('applicationModal');
    if (applicationModal) {
        applicationModal.style.display = 'block';
    }
}

function closeApplication() {
    const applicationModal = document.getElementById('applicationModal');
    if (applicationModal) {
        applicationModal.style.display = 'none';
    }
}

// Close application modal when clicking outside
window.addEventListener('click', function(event) {
    const applicationModal = document.getElementById('applicationModal');
    if (event.target == applicationModal) {
        closeApplication();
    }
});

// Application form submission
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(applicationForm);
        const data = Object.fromEntries(formData);
        console.log('Application submitted:', formData);
        alert('Aplikimi juaj u dërgua me sukses! Do të kontaktoheni së shpejti.');
        closeApplication();
        document.getElementById('applicationForm').reset();
    });
}

// Navigation to application forms
function openApplicationForm(type) {
    const formPages = {
        'ushtar': 'form-ushtar.html',
        'ushtar-detar': 'form-ushtar.html',
        'oficer-akademi': 'form-oficer-akademi.html',
        'oficer-jasht': 'form-oficer-jasht.html',
        'ushtar-rezervist': 'form-ushtar-rezervist.html',
        'nenoficer-rezervist': 'form-nenoficer-rezervist.html',
        'oficer-rezervist': 'form-oficer-rezervist.html',
        'civil': 'form-civil.html'
    };
    
    const formPage = formPages[type];
    if (formPage) {
        window.location.href = formPage;
    } else {
        alert(`Aplikimi për ${type} do të hapet së shpejti. Ky funksion do të implementohet me formularë të plotë.`);
    }
}

// Make it available globally
window.openApplicationForm = openApplicationForm;

// Benefit Modal Data
window.benefitData = [
    {
        icon: '💼',
        title: 'Benefitet Kompetitive',
        description: 'Paga e mirë, sigurime shëndetësore, pension dhe përfitime të tjera që garantojnë stabilitet financiar për ty dhe familjen tënde.',
        details: [
            'Paga konkurruese që rritet me kohën dhe eksperiencën',
            'Sigurime shëndetësore të plota për ty dhe familjen',
            'Sistem pensioni i garantuar pas shërbimit',
            'Shtesë për veprime të veçanta dhe detyra speciale',
            'Mundësi për bonuse dhe stimulime financiare',
            'Ndihmë për strehim dhe transport',
            'Përfitime për familjen (shkollim, shëndetësi)'
        ]
    },
    {
        icon: '📈',
        title: 'Zhvillim Profesional',
        description: 'Mundësi për trajnime të vazhdueshme, avancim në karrierë, dhe zhvillim të aftësive që të ndihmojnë edhe jashtë ushtrisë.',
        details: [
            'Trajnime specializuese në fusha të ndryshme',
            'Avancim në gradë dhe pozicione më të larta',
            'Zhvillim i aftësive liderimi dhe menaxhimi',
            'Mundësi për certifikime dhe kualifikime',
            'Eksperiencë që vlerësohet në tregun e punës',
            'Rrjet profesional dhe kontakte',
            'Zhvillim i aftësive teknike dhe teknologjike'
        ]
    },
    {
        icon: '🌍',
        title: 'Anëtarësimi në NATO',
        description: 'Pjesë e një aleance të fuqishme dhe prestigjioze. Shqipëria është anëtare e NATO-s që nga viti 2009.',
        details: [
            'Pjesë e aleancës më të fuqishme ushtarake në botë',
            'Mundësi për operacione dhe trajnime ndërkombëtare',
            'Eksperiencë me standardet e larta të NATO-s',
            'Kontakte profesionale me kolegë nga vende të tjera',
            'Mundësi për shkëmbime dhe trajnime jashtë vendit',
            'Prestigj dhe njohje ndërkombëtare',
            'Pjesë e misioneve paqësore dhe humanitare'
        ]
    },
    {
        icon: '🎓',
        title: 'Edukim dhe Trajnime',
        description: 'Akses në programe edukative, kurset specializuese, dhe mundësi për studime në institucione prestigjioze.',
        details: [
            'Akses në Akademinë e Forcave të Armatosura',
            'Mundësi për studime universitare me bursë',
            'Trajnime specializuese në teknologji dhe strategji',
            'Kurse në gjuhë të huaja',
            'Certifikime profesionale të njohura',
            'Mundësi për studime jashtë vendit',
            'Zhvillim i vazhdueshëm i njohurive'
        ]
    },
    {
        icon: '👥',
        title: 'Krijim Familje dhe Komunitet',
        description: 'Pjesë e një komuniteti të fortë ushtarak që mbështet dhe inkurajon zhvillimin personal dhe profesional.',
        details: [
            'Komunitet i fortë dhe mbështetës',
            'Mundësi për të njohur njerëz të reja',
            'Ndihmë për familjen dhe të dashurit',
            'Aktivitetet dhe eventet e komunitetit',
            'Mbështetje për probleme personale',
            'Krijim miqësish të qëndrueshme',
            'Kultivim i vlerave të përbashkëta'
        ]
    },
    {
        icon: '🏆',
        title: 'Prestigj dhe Respekt',
        description: 'Shërbej vendin tënd me krenari dhe fito respektin e shoqërisë si pjesë e Forcave të Armatosura.',
        details: [
            'Respekt dhe nderim nga shoqëria',
            'Krenari për shërbimin ndaj vendit',
            'Njohje publike dhe dekorata',
            'Pozicion i rëndësishëm në shoqëri',
            'Traditë e lavdishme ushtarake',
            'Kontribut për sigurinë dhe mbrojtjen e vendit',
            'Legjitimitet dhe besim i shoqërisë'
        ]
    }
];

// Benefit Modal Functions - Make them global
window.openBenefitModal = function(index) {
    const modal = document.getElementById('benefitModal');
    if (!modal) {
        console.error('benefitModal not found');
        return;
    }
    
    if (!window.benefitData || !window.benefitData[index]) {
        console.error('benefitData not found or index invalid:', index);
        return;
    }
    
    const benefit = window.benefitData[index];
    
    document.getElementById('benefitModalIcon').textContent = benefit.icon;
    document.getElementById('benefitModalTitle').textContent = benefit.title;
    document.getElementById('benefitModalDescription').textContent = benefit.description;
    
    const detailsContainer = document.getElementById('benefitModalDetails');
    detailsContainer.innerHTML = '<ul>';
    benefit.details.forEach(detail => {
        detailsContainer.querySelector('ul').innerHTML += `<li>${detail}</li>`;
    });
    detailsContainer.innerHTML += '</ul>';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

window.closeBenefitModal = function() {
    const modal = document.getElementById('benefitModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('benefitModal');
    if (event.target == modal) {
        window.closeBenefitModal();
    }
    
    const whyApplyModal = document.getElementById('whyApplyModal');
    if (event.target == whyApplyModal) {
        window.closeWhyApplyModal();
    }
});

// Benefit Accordion Toggle Function
window.toggleBenefit = function(element) {
    const isActive = element.classList.contains('active');
    const allBenefits = document.querySelectorAll('.benefit-item');
    
    // Close all other benefits
    allBenefits.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current benefit
    element.classList.toggle('active', !isActive);
};

// Load Benefits from localStorage
function loadBenefitsFromStorage() {
    const defaultBenefits = [
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

    const savedBenefits = JSON.parse(localStorage.getItem('benefitsData') || 'null');
    const benefits = savedBenefits || defaultBenefits;
    
    const benefitsList = document.querySelector('.benefits-list-footer');
    if (!benefitsList) return;
    
    benefitsList.innerHTML = '';
    
    benefits.forEach((benefit, index) => {
        const li = document.createElement('li');
        li.className = 'benefit-item';
        li.setAttribute('onclick', 'toggleBenefit(this)');
        li.innerHTML = `
            <div class="benefit-header">
                <span class="benefit-title">${benefit.title}</span>
                <span class="benefit-arrow">►</span>
            </div>
            <div class="benefit-content">
                <ul>
                    ${benefit.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
        benefitsList.appendChild(li);
    });
}

// Load benefits when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBenefitsFromStorage);
} else {
    loadBenefitsFromStorage();
}

// Why Apply Modal Functions
window.openWhyApplyModal = function() {
    console.log('openWhyApplyModal called');
    const modal = document.getElementById('whyApplyModal');
    if (!modal) {
        console.error('whyApplyModal not found in DOM');
        alert('Modal nuk u gjet. Kontrollo HTML-in.');
        return;
    }
    console.log('Opening whyApplyModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

window.closeWhyApplyModal = function() {
    const modal = document.getElementById('whyApplyModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// FAQ Modal Data - Make sure this is defined before the functions and in global scope
window.faqData = {
    kerkesat: {
        title: 'Kërkesat Bazë',
        subtitle: 'Të gjitha kërkesat bazë për aplikim në Forcat e Armatosura',
        questions: [
            {
                question: 'Cilat janë kërkesat bazë për aplikim?',
                answer: 'Kërkesat bazë përfshijnë moshë minimale, arsim, gjendje shëndetësore dhe plotësimi i testeve.',
                details: [
                    'Moshë minimale 18 vjeç',
                    'Arsim i mesëm i plotë',
                    'Gjendje shëndetësore e mirë',
                    'Plotësimi i testeve fizike dhe psikologjike',
                    'Shtetas shqiptar',
                    'Të mos kesh probleme me ligjin'
                ]
            },
            {
                question: 'A ka kufizime për moshën maksimale?',
                answer: 'Po, kufiri i moshës maksimale varet nga pozicioni për të cilin aplikon.',
                details: [
                    'Për ushtar aktiv: 28-30 vjeç',
                    'Për oficer: më e lartë',
                    'Kontakto Qendrën e Rekrutimit për detaje specifike'
                ]
            },
            {
                question: 'Çfarë dokumentesh duhen për aplikim?',
                answer: 'Dokumentet e nevojshme përfshijnë identitetin, diplomën, certifikatën e shëndetit dhe të tjera.',
                details: [
                    'Kopje e letrës së identitetit',
                    'Diplomë e arsimit',
                    'Certifikatë e shëndetit',
                    'Dokumente të tjera sipas pozicionit',
                    'Të gjitha dokumentet duhet të jenë të vlefshme dhe të verifikuara'
                ]
            },
            {
                question: 'Çfarë kërkesa ka për gjendjen fizike?',
                answer: 'Gjendja fizike duhet të jetë e mirë dhe të mos kesh probleme shëndetësore.',
                details: [
                    'Teste fizike (vrapim, ngritje, tërheqje)',
                    'Teste mjekësore',
                    'Matje e forcës dhe qëndrueshmërisë',
                    'Gjendje shëndetësore e mirë për shërbim'
                ]
            },
            {
                question: 'A ka kufizime për gjininë?',
                answer: 'Jo, të dy gjinitë janë të mirëpritura për të aplikuar.',
                details: [
                    'Gra dhe meshkuj të mirëpritur',
                    'Pozicione të disponueshme për të dy gjinitë',
                    'Barazi e plotë në procesin e rekrutimit'
                ]
            },
            {
                question: 'Çfarë niveli arsimimi kërkohet?',
                answer: 'Niveli minimal i arsimimit është arsimi i mesëm i plotë.',
                details: [
                    'Diplomë e shkollës së mesme',
                    'Për pozicione speciale: arsim i lartë',
                    'Trajnime të veçanta sipas pozicionit'
                ]
            }
        ]
    },
    procedurat: {
        title: 'Procedurat e Aplikimit',
        subtitle: 'Informacion i plotë rreth procedurave të aplikimit',
        questions: [
            {
                question: 'Si mund të aplikoj për rekrutim?',
                answer: 'Mund të aplikosh online ose në mënyrë fizike në Qendrën e Rekrutimit.',
                details: [
                    'Aplikim online përmes portali',
                    'Plotësimi i formularit të aplikimit',
                    'Aplikim fizik në Qendrën e Personel Rekrutimit',
                    'Adresa: Rr. Kongresi i Manastirit, Garnizoni "Skënderbej", Tiranë'
                ]
            },
            {
                question: 'Sa kohë zgjat procesi i aplikimit?',
                answer: 'Procesi zakonisht zgjat 2-4 muaj nga momenti i paraqitjes deri në rezultatin final.',
                details: [
                    'Testim fizik',
                    'Ekzaminim mjekësor',
                    'Testim psikologjik',
                    'Intervistë'
                ]
            },
            {
                question: 'Çfarë përfshin testimin fizik?',
                answer: 'Testimi fizik përfshin teste që matin forcën dhe qëndrueshmërinë fizike.',
                details: [
                    'Vrapim',
                    'Ngritje të trupit',
                    'Tërheqje në shirit',
                    'Teste të tjera që matin forcën dhe qëndrueshmërinë',
                    'Kërkesat ndryshojnë sipas pozicionit dhe gjinisë'
                ]
            },
            {
                question: 'Kur mund të filloj trajnimin pasi të pranohem?',
                answer: 'Pas pranimit, trajnimi bazë fillon brenda 1-2 muajve.',
                details: [
                    'Informim për datën e fillimit',
                    'Trajnim bazë pas konfirmimit',
                    'Instruksione për dokumentet e nevojshme',
                    'Përgatitje për ditën e fillimit'
                ]
            },
            {
                question: 'Çfarë dokumentesh duhet të paraqes?',
                answer: 'Duhet të paraqesësh dokumentet e nevojshme për aplikim.',
                details: [
                    'Kopje e letrës së identitetit',
                    'Diplomë e arsimit',
                    'Certifikatë e shëndetit',
                    'Dokumente të tjera sipas pozicionit'
                ]
            },
            {
                question: 'Si bëhet procesi i testimit mjekësor?',
                answer: 'Testimi mjekësor përfshin ekzaminim të plotë fizik dhe teste laboratorike.',
                details: [
                    'Ekzaminim i plotë fizik',
                    'Teste laboratorike',
                    'Vlerësim i gjendjes shëndetësore',
                    'Gjendje shëndetësore e mirë për shërbim'
                ]
            },
            {
                question: 'Çfarë ndodh gjatë intervistës?',
                answer: 'Gjatë intervistës, do të pyetet për motivimin, eksperiencën dhe përkushtimin tënd.',
                details: [
                    'Pyetje për motivimin',
                    'Diskutim për eksperiencën',
                    'Arsyet për aplikim',
                    'Mundësi për të treguar përgjegjësinë dhe përkushtimin'
                ]
            }
        ]
    },
    procesi: {
        title: 'Procesi i Rekrutimit',
        subtitle: 'Informacion rreth procesit të plotë të rekrutimit',
        questions: [
            {
                question: 'Si mund të kontrolloj statusin e aplikimit tim?',
                answer: 'Mund të kontrollosh statusin e aplikimit tënd në portal ose duke kontaktuar Qendrën.',
                details: [
                    'Kyçje në portal me kredencialet',
                    'Kontakt telefon: +355686074676',
                    'Email: rekrutimit.qpr@aaf.mil.al'
                ]
            },
            {
                question: 'A mund të aplikoj për më shumë se një pozicion?',
                answer: 'Po, mund të aplikosh për më shumë se një pozicion.',
                details: [
                    'Formular i veçantë për secilin pozicion',
                    'Rekomandim për pozicionet që përshtaten me aftësitë',
                    'Aplikim për pozicione të ndryshme'
                ]
            },
            {
                question: 'Çfarë ndodh nëse aplikimi im refuzohet?',
                answer: 'Nëse aplikimi refuzohet, do të informohesh për arsyet dhe mund të aplikosh përsëri.',
                details: [
                    'Informim për arsyet e refuzimit',
                    'Mundësi për aplikim përsëri pas një periudhe',
                    'Korrigjim i arsyet të refuzimit',
                    'Përmirësim i gjendjes fizike ose të tjera'
                ]
            },
            {
                question: 'Sa kohë duhet të pres për përgjigje pas aplikimit?',
                answer: 'Përgjigja zakonisht merret brenda 2-4 muajve pas paraqitjes së aplikimit.',
                details: [
                    'Periudha e pritjes: 2-4 muaj',
                    'Kontakt nga Qendra e Rekrutimit nëse nevojitet',
                    'Informacion shtesë nëse kërkohet'
                ]
            },
            {
                question: 'A mund të anuloj aplikimin tim?',
                answer: 'Po, mund të anulosh aplikimin tënd në çdo moment.',
                details: [
                    'Kontakt me Qendrën e Rekrutimit',
                    'Anulim në çdo moment',
                    'Rekomandim për vendim para fillimit të testimit'
                ]
            },
            {
                question: 'Çfarë ndodh pas pranimit?',
                answer: 'Pas pranimit, do të informohesh për datën e fillimit të trajnimit bazë.',
                details: [
                    'Informim për datën e fillimit',
                    'Instruksione për dokumentet e nevojshme',
                    'Përgatitje për ditën e fillimit',
                    'Të gjitha detajet e nevojshme'
                ]
            },
            {
                question: 'Si mund të kontaktoj Qendrën e Rekrutimit?',
                answer: 'Mund të kontaktojsh Qendrën e Personel Rekrutimit në mënyra të ndryshme.',
                details: [
                    'Telefon: +355686074676',
                    'Email: rekrutimit.qpr@aaf.mil.al',
                    'Adresë: Rr. Kongresi i Manastirit, Garnizoni "Skënderbej", Tiranë'
                ]
            }
        ]
    }
};

// Helper function to get icons for FAQ items
window.getFaqIcon = function(category, index) {
    const icons = {
        kerkesat: ['📋', '📅', '📄', '💪', '👥', '🎓'],
        procedurat: ['📝', '⏱️', '🏃', '📅', '📋', '🏥', '💬'],
        procesi: ['📊', '📝', '❌', '⏳', '🔄', '✅', '📞']
    };
    return icons[category] && icons[category][index] ? icons[category][index] : '📌';
};

// FAQ Modal Functions - Make sure these are in global scope
window.openFaqModal = function(category) {
    console.log('openFaqModal called with category:', category);
    const modal = document.getElementById('faqModal');
    if (!modal) {
        console.error('faqModal not found in DOM');
        alert('Modal nuk u gjet. Kontrollo HTML-in.');
        return;
    }
    
    if (!window.faqData || !window.faqData[category]) {
        console.error('faqData not found or category does not exist:', category);
        alert('Informacioni për këtë kategori nuk u gjet.');
        return;
    }
    
    const data = window.faqData[category];
    
    const titleEl = document.getElementById('faqModalTitle');
    const subtitleEl = document.getElementById('faqModalSubtitle');
    const bodyEl = document.getElementById('faqModalBody');
    
    if (!titleEl || !subtitleEl || !bodyEl) {
        return;
    }
    
    titleEl.textContent = data.title;
    subtitleEl.textContent = data.subtitle;
    
    // Create grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'why-apply-grid';
    
    data.questions.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'why-apply-item';
        
        // Check if item has details array
        let detailsHTML = '';
        if (item.details && Array.isArray(item.details) && item.details.length > 0) {
            detailsHTML = '<div class="why-apply-item-details"><ul>';
            item.details.forEach(detail => {
                detailsHTML += `<li>${detail}</li>`;
            });
            detailsHTML += '</ul></div>';
        }
        
        faqItem.innerHTML = `
            <div class="why-apply-item-icon">${window.getFaqIcon(category, index)}</div>
            <h3 class="why-apply-item-title">${item.question}</h3>
            <p class="why-apply-item-description">${item.answer}</p>
            ${detailsHTML}
        `;
        gridContainer.appendChild(faqItem);
    });
    
    bodyEl.innerHTML = '';
    bodyEl.appendChild(gridContainer);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

window.closeFaqModal = function() {
    const modal = document.getElementById('faqModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

window.toggleFaqModalItem = function(button) {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-modal-answer');
    const icon = button.querySelector('.faq-modal-icon');
    const isActive = button.classList.contains('active');
    
    // Close all other items in this modal
    const allItems = item.parentElement.querySelectorAll('.faq-modal-item');
    allItems.forEach(i => {
        if (i !== item) {
            const q = i.querySelector('.faq-modal-question');
            const a = i.querySelector('.faq-modal-answer');
            const ic = i.querySelector('.faq-modal-icon');
            q.classList.remove('active');
            a.classList.remove('active');
            if (ic) ic.textContent = '+';
        }
    });
    
    // Toggle current item
    if (isActive) {
        button.classList.remove('active');
        answer.classList.remove('active');
        if (icon) icon.textContent = '+';
    } else {
        button.classList.add('active');
        answer.classList.add('active');
        if (icon) icon.textContent = '−';
    }
}

// Close FAQ modal when clicking outside
document.addEventListener('click', function(event) {
    const faqModal = document.getElementById('faqModal');
    if (event.target == faqModal) {
        window.closeFaqModal();
    }
});

// Check login status and redirect accordingly
function checkLoginStatus(event) {
    const isLoggedIn = localStorage.getItem('applicantLoggedIn');
    const email = localStorage.getItem('applicantEmail');
    
    if (isLoggedIn && email) {
        // User is already logged in - redirect to dashboard
        event.preventDefault();
        window.location.href = 'applicant-dashboard.html';
    }
    // If not logged in, let the default link behavior work (goes to login.html)
}

// Update login button text if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        const isLoggedIn = localStorage.getItem('applicantLoggedIn');
        const email = localStorage.getItem('applicantEmail');
        
        if (isLoggedIn && email) {
            // User is logged in - change button text
            loginButton.innerHTML = 'Dashboard <span class="login-arrow">→</span>';
            loginButton.onclick = function(e) {
                e.preventDefault();
                window.location.href = 'applicant-dashboard.html';
            };
        }
    }
});
