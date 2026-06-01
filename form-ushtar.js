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

const securityConditionQuestions = [
    {
        fieldId: 'kaPasurGjeneraliteteTjera',
        detailsId: 'kaPasurGjeneraliteteTjeraDetails',
        detailFieldId: 'kaPasurGjeneraliteteTjeraDetaje',
        question: 'A keni patur gjeneralitete të tjera?'
    },
    {
        fieldId: 'kaPasurShtetesiTjeter',
        detailsId: 'kaPasurShtetesiTjeterDetails',
        detailFieldId: 'kaPasurShtetesiTjeterDetaje',
        question: 'A keni ose keni patur shtetësi tjetër?'
    },
    {
        fieldId: 'kaPasurCertifikateSigurie',
        detailsId: 'kaPasurCertifikateSigurieDetails',
        detailFieldId: 'kaPasurCertifikateSigurieDetaje',
        question: 'A keni qenë i pajisur me certifikatë sigurie personeli?'
    },
    {
        fieldId: 'kaQeneIDenuarSiguri',
        detailsId: 'kaQeneIDenuarSiguriDetails',
        detailFieldId: 'kaQeneIDenuarSiguriDetaje',
        question: 'A jeni dënuar ndonjëherë për shkelje të ligjit brenda ose jashtë vendit?'
    },
    {
        fieldId: 'kaMasaSigurieShtese',
        detailsId: 'kaMasaSigurieShteseDetails',
        detailFieldId: 'kaMasaSigurieShteseDetaje',
        question: 'A ju janë caktuar masa sigurimi personal?'
    },
    {
        fieldId: 'kaQeneNenHetim',
        detailsId: 'kaQeneNenHetimDetails',
        detailFieldId: 'kaQeneNenHetimDetaje',
        question: 'A keni qenë ndonjëherë nën hetim ose gjykim?'
    },
    {
        fieldId: 'kaQeneNdaluarApoNeKerkim',
        detailsId: 'kaQeneNdaluarApoNeKerkimDetails',
        detailFieldId: 'kaQeneNdaluarApoNeKerkimDetaje',
        question: 'A jeni ndaluar, arrestuar ose shpallur në kërkim?'
    },
    {
        fieldId: 'kaVeprimtariKunderSigurise',
        detailsId: 'kaVeprimtariKunderSiguriseDetails',
        detailFieldId: 'kaVeprimtariKunderSiguriseDetaje',
        question: 'A keni qenë i përfshirë në veprimtari që cenojnë sigurinë kombëtare ose në veprimtari të paligjshme?'
    },
    {
        fieldId: 'iRefuzuarApoDebuarJashte',
        detailsId: 'iRefuzuarApoDebuarJashteDetails',
        detailFieldId: 'iRefuzuarApoDebuarJashteDetaje',
        question: 'A ju është refuzuar hyrja, qëndrimi ose jeni dëbuar nga një shtet i huaj?'
    },
    {
        fieldId: 'kaKerkuarAzil',
        detailsId: 'kaKerkuarAzilDetails',
        detailFieldId: 'kaKerkuarAzilDetaje',
        question: 'A keni kërkuar azil në një shtet të huaj?'
    },
    {
        fieldId: 'perdoruesSubstancash',
        detailsId: 'perdoruesSubstancashDetails',
        detailFieldId: 'perdoruesSubstancashDetaje',
        question: 'A jeni ose keni qenë përdorues i lëndëve narkotike, medikamenteve me varësi ose alkoolit?'
    },
    {
        fieldId: 'problemeShendetiMendor',
        detailsId: 'problemeShendetiMendorDetails',
        detailFieldId: 'problemeShendetiMendorDetaje',
        question: 'A keni ose keni patur probleme të shëndetit mendor?'
    }
];

const applicationStructureText = [
    "Ç) Struktura/Reparti Ushtarak ku dëshironi të shërbeni: (shëno me X).",
    "1.1 Forca Tokësore (sipas kërkesave të Forcave të Armatosura)",
    "Vendislokimi Tiranë: Reparti Ushtarak nr.1002; Reparti Ushtarak nr.1045 (Batalioni Komando); Reparti Ushtarak nr.1050 (Batalioni Forcave Speciale).",
    "Vendislokimi Shkodër/Malësi e Madhe: Reparti Ushtarak nr.1010; 1011.",
    "Vendislokimi Lezhë/Rrëshen: Reparti Ushtarak nr.1010; 1011.",
    "Vendislokimi Kukës/Has/Tropojë: Reparti Ushtarak nr.1012.",
    "Vendislokimi Durrës/Kavajë: Reparti Ushtarak nr.1020.",
    "Vendislokimi Elbasan/Gramsh: Reparti Ushtarak nr.1020.",
    "Vendislokimi Berat: Reparti Ushtarak nr.1030;1031.",
    "Vendislokimi Kuçovë/Dimal: Reparti Ushtarak nr.1031.",
    "Vendislokimi Korçë/Ersekë: Reparti Ushtarak nr.1033.",
    "Vendislokimi Burrel/Klos: Reparti Ushtarak nr.1013.",
    "Vendislokimi Gjirokastër: Reparti Ushtarak nr.1032.",
    "1.2 Forca Detare - Vendislokimi Vlorë: Reparti Ushtarak nr.2006 ; 2030 ; Vendislokimi Durrës/Kavajë: Reparti Ushtarak nr.2002 ; 2006; 2020 ; Vendislokimi Sarandë: Reparti Ushtarak nr.2006; 2030.",
    "1.3 Forca Ajrore - Vendislokimi Tiranë: Reparti Ushtarak nr.3002 ; 3006; 3007 ; Vendislokimi Pukë: Reparti Ushtarak nr.3003 ; Vendislokimi Berat: Reparti Ushtarak nr.3005 ; Vendislokimi Kuçovë/Dimal: Reparti Ushtarak nr.3005.",
    "1.4 Komanda e Mbështetjes - Vendislokimi Tiranë: Reparti Ushtarak nr.4002 ; 4006 ; 4007; 4030; 4040; Vendislokimi Durrës/Kavajë: Reparti Ushtarak nr.4006 ; Vendislokimi Poliçan: Reparti Ushtarak nr.4006 ; Vendislokimi Kuçovë/Dimal: Reparti Ushtarak nr.4006; 4031.",
    "1.5 Akademia e Forcave të Armatosura - Vendislokimi Vlorë: Reparti Ushtarak nr.5005.",
    "1.6 Policia Ushtarake - Vendislokimi Tiranë: Reparti Ushtarak nr.6620.",
    "1.7 Batalioni i Mbështetjes së Shtabit të Përgjithshëm - Vendislokimi Tiranë: Reparti Ushtarak nr.6630.",
    "1.8 Agjencia e Inteligjencës dhe Sigurisë së Mbrojtjes - Vendislokimi Tiranë: Reparti Ushtarak nr.6002.",
    "1.9 Agjencia e Sistemeve të Ndërlidhjes dhe Informacionit - Vendislokimi Tiranë: Reparti Ushtarak nr.6040.",
    "1.10 Qendra e Kulturës, Medies, Botimeve të Mbrojtjes dhe Muzeu i FA - Vendislokimi Tiranë: Reparti Ushtarak nr.6004 (Orkestra Simfonike).",
    "",
    "Lexoni me kujdes secilën pyetje dhe vendosni shenjën “X” në kolonën PO ose JO.",
    "",
    "D) MOTIVI QË JU SHTYN TË SHËRBENI NË FORCAT E ARMATOSURA.",
    "Shkruani me shkrim dore me rreth 100 fjalë përse dëshironi të shërbeni në Forcat e Armatosura, çfarë dini për Forcat e Armatosura, për Forcën, brigadën, repartin ku doni të shërbeni dhe për specialitetin që keni zgjedhur.",
    "",
    "Përsa më sipër, deklaroj nën përgjegjësinë time personale se informacioni që kam shënuar në këtë formular aplikimi është i vërtetë, i saktë dhe është dhënë me vullnetin tim të lirë. Jam i hapur ndaj autoriteteve kompetente për të bërë verifikimin e nevojshëm.",
    "Aplikanti (Emër, Atësi, Mbiemër, Nënshkrimi)"
];

// Utility helpers
function formatDateValue(value) {
    if (!value) return '';
    
    if (value instanceof Date) {
        const day = value.getDate().toString().padStart(2, '0');
        const month = (value.getMonth() + 1).toString().padStart(2, '0');
        const year = value.getFullYear();
        return `${day}-${month}-${year}`;
    }
    
    if (typeof value === 'string') {
        const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (isoMatch) {
            const [, year, month, day] = isoMatch;
            return `${day}-${month}-${year}`;
        }
        
        const displayMatch = value.match(/^(\d{2})-(\d{2})-(\d{4})$/);
        if (displayMatch) {
            return value;
        }
    }
    
    return value;
}

function formatDigitsToDate(digits) {
    if (!digits) return '';
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    return `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4, 8)}`;
}

function setupDateInputs() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.dataset.dateField = 'true';
        input.type = 'text';
        input.inputMode = 'numeric';
        input.placeholder = 'dd-mm-vv';
        input.maxLength = 10;
        input.addEventListener('input', handleDateInput);
        input.addEventListener('blur', handleDateBlur);
    });
}

function handleDateInput(event) {
    const input = event.target;
    const digits = input.value.replace(/\D/g, '').slice(0, 8);
    input.value = formatDigitsToDate(digits);
    input.setCustomValidity('');
}

function handleDateBlur(event) {
    const input = event.target;
    if (!input.value) {
        input.setCustomValidity('');
        return;
    }
    
    const digits = input.value.replace(/\D/g, '');

    if (digits.length !== 8) {
        input.setCustomValidity('Përdorni formatin dd-mm-vvvv');
        input.reportValidity();
        return;
    }
    
    const day = parseInt(digits.slice(0, 2), 10);
    const month = parseInt(digits.slice(2, 4), 10);
    const year = parseInt(digits.slice(4, 8), 10);
    const candidate = new Date(year, month - 1, day);
    
    const isValidDate = candidate.getFullYear() === year && 
        candidate.getMonth() === month - 1 && 
        candidate.getDate() === day;
    
    if (!isValidDate) {
        input.setCustomValidity('Data nuk është e vlefshme');
        input.reportValidity();
        return;
    }
    
    input.value = formatDigitsToDate(digits);
    input.setCustomValidity('');
}

function isValidGradeValue(value) {
    if (!value) return true;

    const normalizedValue = String(value).trim();
    if (!/^\d{1,2}([.,]\d{1,2})?$/.test(normalizedValue)) {
        return false;
    }

    const numericValue = Number(normalizedValue.replace(',', '.'));
    return !Number.isNaN(numericValue) && numericValue >= 0 && numericValue <= 10;
}

function handleGradeInput(event) {
    const input = event.target;
    input.setCustomValidity('');
}

function handleGradeBlur(event) {
    const input = event.target;
    const value = input.value.trim();

    if (!value) {
        input.setCustomValidity('');
        return;
    }

    if (!isValidGradeValue(value)) {
        input.setCustomValidity('Vendosni një notë nga 0 deri në 10, me maksimumi 2 shifra dhjetore.');
        input.reportValidity();
        return;
    }

    input.setCustomValidity('');
}

function setupGradeInputs() {
    const gradeInputs = document.querySelectorAll('#notaMesatareNente, #notaMesatareGjimnaz, #notaMesatareProfesionale');
    gradeInputs.forEach(input => {
        input.dataset.gradeField = 'true';
        input.addEventListener('input', handleGradeInput);
        input.addEventListener('blur', handleGradeBlur);
    });
}

function serializeFormData(formData) {
    const values = {};
    for (const [key, value] of formData.entries()) {
        if (values[key]) {
            if (!Array.isArray(values[key])) {
                values[key] = [values[key]];
            }
            values[key].push(value);
        } else {
            values[key] = value;
        }
    }
    return values;
}

function getFormValue(formValues, ...keys) {
    for (const key of keys) {
        const value = formValues[key];
        if (Array.isArray(value) ? value.length > 0 : value !== undefined && value !== null && value !== '') {
            return value;
        }
    }
    return '';
}

function getCurrentApplicationType() {
    const path = window.location.pathname.split('/').pop() || '';
    const typeByPage = {
        'form-ushtar.html': 'Ushtar ose Detar Aktiv',
        'form-ushtar-rezervist.html': 'Ushtar Rezervist',
        'form-nenoficer-rezervist.html': 'Nënoficer Rezervist',
        'form-oficer-rezervist.html': 'Oficer Rezervist',
        'form-oficer-akademi.html': 'Oficer, Studime në Akademinë e Forcave të Armatosura',
        'form-oficer-jasht.html': 'Oficer, Studime jashtë vendit',
        'form-civil.html': 'Civil në FA'
    };

    if (typeByPage[path]) {
        return typeByPage[path];
    }

    const title = document.title || '';
    return title.replace(/^QPR\s*-\s*Aplikimi për\s*/i, '').trim() || 'Ushtar ose Detar Aktiv';
}

function getApplicationPdfSubtitle(applicationType) {
    const subtitleByType = {
        'Ushtar ose Detar Aktiv': 'PËR USHTAR/DETARË AKTIVË NË FORCAT E ARMATOSURA',
        'Ushtar Rezervist': 'PËR USHTAR REZERVIST NË FORCAT E ARMATOSURA',
        'Nënoficer Rezervist': 'PËR NËNOFICER REZERVIST NË FORCAT E ARMATOSURA',
        'Oficer Rezervist': 'PËR OFICER REZERVIST NË FORCAT E ARMATOSURA',
        'Oficer, Studime në Akademinë e Forcave të Armatosura': 'PËR OFICER, STUDIME NË AKADEMINË E FORCAVE TË ARMATOSURA',
        'Oficer, Studime jashtë vendit': 'PËR OFICER, STUDIME JASHTË VENDIT',
        'Civil në FA': 'PËR CIVIL NË FORCAT E ARMATOSURA'
    };

    return subtitleByType[applicationType] || `PËR ${String(applicationType || 'APLIKIM NË FORCAT E ARMATOSURA').toUpperCase()}`;
}

function getSelectedValues(formValues, key) {
    const value = formValues[key];
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
}

function getIndexedFieldValue(values, prefixes, index) {
    for (const prefix of prefixes) {
        const value = values[`${prefix}[${index}]`];
        if (value !== undefined && value !== null && value !== '') {
            return value;
        }
    }
    return '';
}

function buildResponseRows(questions, values, answerPrefixes, commentPrefixes = []) {
    return questions.map((question, index) => {
        const answer = getIndexedFieldValue(values, answerPrefixes, index);
        const comment = getIndexedFieldValue(values, commentPrefixes, index);
        return {
            index,
            question,
            answer,
            comment
        };
    });
}

function buildHealthFormTableRows(rows) {
    return rows.map(row => {
        const answer = (row.answer || '').toUpperCase();
        return [
            row.index + 1,
            row.question,
            answer === 'PO' ? 'X' : '',
            answer === 'JO' ? 'X' : '',
            row.comment || ''
        ];
    });
}

function renderHealthFormPage(doc, formValues, rows, options = {}) {
    const { addPage = false } = options;

    if (addPage) {
        doc.addPage();
    }

    const applicantName = getApplicantFullName(formValues);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('FORMULAR VETËDEKLARIMI PËR GJENDJEN SHËNDETËSORE', 105, 15, { align: 'center' });
    doc.setFontSize(12);
    doc.text('TË KANDIDATIT PËR USHTARË/DETARË AKTIV', 105, 22, { align: 'center' });

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    let y = 32;
    y = addBlockText(doc, `Emri: ${formValues.emri || ''}    Atësia: ${formValues.atesia || ''}    Mbiemri: ${formValues.mbiemri || ''}`, y);
    y = addBlockText(doc, `Datëlindja: ${formatDateValue(formValues.datelindja)}`, y);

    doc.autoTable({
        startY: y + 4,
        head: [['Nr.', 'Probleme shëndetësore', 'Po', 'Jo', 'Koment']],
        body: buildHealthFormTableRows(rows),
        headStyles: { fillColor: [0, 102, 0] },
        styles: { fontSize: 9, halign: 'center' },
        columnStyles: {
            0: { cellWidth: 10 },
            1: { cellWidth: 95, halign: 'left' },
            2: { cellWidth: 15 },
            3: { cellWidth: 15 },
            4: { cellWidth: 55, halign: 'left' }
        }
    });

    y = doc.lastAutoTable.finalY + 12;
    y = addBlockText(doc, 'Shtetasi', y);
    y = addBlockText(doc, applicantName || '____________________________________', y + 2);
    y = addBlockText(doc, '(Emri     Atësia     Mbiemri)', y + 2);
    y = addSignatureToPdf(doc, options.signature || formValues.firma, y + 2, { x: 14, label: 'Firma:' });
}

function appendResponseTablePage(doc, title, rows, options = {}) {
    const filteredRows = rows.filter(row => row.answer || row.comment);
    if (!filteredRows.length) {
        return;
    }

    const headStyles = options.headStyles || { fillColor: [0, 51, 160] };
    const body = filteredRows.map(row => [
        row.index + 1,
        row.question,
        row.answer || '',
        row.comment || ''
    ]);

    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(title, 105, 18, { align: 'center' });

    doc.autoTable({
        startY: 26,
        head: [['Nr', 'Pyetja', 'Përgjigja', 'Koment']],
        body,
        headStyles,
        styles: { fontSize: 8.5, cellPadding: 2, overflow: 'linebreak', valign: 'middle' },
        columnStyles: {
            0: { cellWidth: 10, halign: 'center' },
            1: { cellWidth: 102 },
            2: { cellWidth: 25, halign: 'center' },
            3: { cellWidth: 48 }
        },
        margin: { left: 12, right: 12, top: 26, bottom: 16 }
    });
}

function assignFormElementValue(target, element) {
    if (!element || !element.name) {
        return;
    }

    if (element.dataset && element.dataset.dateField === 'true') {
        target[element.name] = formatDateValue(element.value);
        return;
    }

    if (element.type === 'checkbox') {
        if (element.name.endsWith('[]')) {
            const selectedValues = Array.from(document.querySelectorAll(`input[name="${element.name}"]:checked`)).map(input => input.value);
            if (selectedValues.length > 0) {
                target[element.name] = selectedValues;
            } else {
                delete target[element.name];
            }
        } else {
            target[element.name] = element.checked;
        }
        return;
    }

    target[element.name] = element.value || '';
}

function readFileAsDocumentData(file, metadata = {}) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            resolve({
                id: Date.now() + Math.random(),
                name: file.name,
                type: file.type,
                size: file.size,
                data: event.target.result,
                uploadDate: new Date().toISOString(),
                ...metadata
            });
        };
        reader.onerror = function() {
            reject(new Error(`Nuk u lexua dot skedari: ${file.name}`));
        };
        reader.readAsDataURL(file);
    });
}

async function collectRequiredDocuments() {
    const requiredFileFields = [
        { id: 'fotoPersonale', label: 'Foto personale' },
        { id: 'fotoKarte', label: 'Foto e kartës ID' }
    ];

    const selectedFiles = requiredFileFields
        .map(field => ({
            ...field,
            file: document.getElementById(field.id)?.files?.[0] || null
        }))
        .filter(entry => entry.file);

    return Promise.all(selectedFiles.map(entry => readFileAsDocumentData(entry.file, {
        fieldName: entry.id,
        category: entry.label
    })));
}

function getApplicantFullName(formValues) {
    return [formValues.emri, formValues.atesia, formValues.mbiemri].filter(Boolean).join(' ');
}

function addSignatureToPdf(doc, signatureData, y, options = {}) {
    if (!signatureData) {
        return y;
    }

    const { x = 14, width = 50, height = 18, label = 'Firma:' } = options;
    y = ensurePageSpace(doc, y, height + 10);
    doc.setFont('helvetica', 'bold');
    doc.text(label, x, y);
    doc.setFont('helvetica', 'normal');

    try {
        doc.addImage(signatureData, 'PNG', x + 18, y - 6, width, height);
        return y + height + 4;
    } catch (error) {
        console.warn('Could not add signature image to PDF.', error);
        return addBlockText(doc, 'Firma nuk mund të ngarkohej në PDF.', y + 4, { x });
    }
}

const educationFieldGroups = {
    nentevjecare: [
        'shkollaNenteGroup',
        'notaNenteGroup'
    ],
    mesmeBase: [
        'shkollaMesmeGroup',
        'emriShkollesGroup'
    ],
    mesmeGjimnaz: [
        'notaGjimnazGroup'
    ],
    mesmeProfesionale: [
        'notaProfesionaleGroup',
        'profiliShkollesGroup'
    ],
    larte: [
        'llojiUniversitetitGroup',
        'diplomaGroup',
        'emriShkollesLarteGroup',
        'dataFillimitGroup',
        'dataMbarimitGroup'
    ]
};

function setEducationVisibility(groupKey, isVisible) {
    const wrapperIds = educationFieldGroups[groupKey] || [];
    wrapperIds.forEach(wrapperId => {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;

        wrapper.style.display = isVisible ? '' : 'none';

        wrapper.querySelectorAll('input, select, textarea').forEach(field => {
            field.disabled = !isVisible;

            if (!isVisible) {
                if (field.tagName === 'SELECT') {
                    field.selectedIndex = 0;
                } else {
                    field.value = '';
                }

                field.setCustomValidity('');
            }
        });
    });
}

function updateEducationFields() {
    const select = document.getElementById('arsimi');
    if (!select) return;
    
    const value = select.value;
    
    if (!value) {
        setEducationVisibility('nentevjecare', false);
        setEducationVisibility('mesmeBase', false);
        setEducationVisibility('mesmeGjimnaz', false);
        setEducationVisibility('mesmeProfesionale', false);
        setEducationVisibility('larte', false);
        return;
    }
    
    const hasNineYear = value === '9-vjeçar' || value === 'I mesëm' || value === 'I lartë';
    const hasSecondary = value === 'I mesëm' || value === 'I lartë';
    const hasTertiary = value === 'I lartë';
    
    setEducationVisibility('nentevjecare', hasNineYear);
    setEducationVisibility('mesmeBase', hasSecondary);
    if (!hasSecondary) {
        setEducationVisibility('mesmeGjimnaz', false);
        setEducationVisibility('mesmeProfesionale', false);
    } else {
        updateHighSchoolFields();
    }
    setEducationVisibility('larte', hasTertiary);
}

function updateHighSchoolFields() {
    const arsimiField = document.getElementById('arsimi');
    const shkollaMesmeField = document.getElementById('shkollaMesme');
    if (!arsimiField || !shkollaMesmeField) return;
    
    const hasSecondary = arsimiField.value === 'I mesëm' || arsimiField.value === 'I lartë';
    if (!hasSecondary) {
        setEducationVisibility('mesmeGjimnaz', false);
        setEducationVisibility('mesmeProfesionale', false);
        return;
    }
    
    const selection = shkollaMesmeField.value;
    setEducationVisibility('mesmeGjimnaz', selection === 'Gjimnaz');
    setEducationVisibility('mesmeProfesionale', selection === 'Profesionale');
}

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

function toggleConditionalDetails(fieldId, detailsId) {
    const select = document.getElementById(fieldId);
    const details = document.getElementById(detailsId);
    if (!select || !details) {
        return;
    }

    const isVisible = select.value === 'po';
    details.style.display = isVisible ? '' : 'none';

    details.querySelectorAll('input, select, textarea').forEach(field => {
        field.disabled = !isVisible;

        if (field.dataset.requiredWhenVisible === 'true') {
            field.required = isVisible;
        }

        if (!isVisible) {
            if (field.tagName === 'SELECT') {
                field.selectedIndex = 0;
            } else if (field.type === 'checkbox' || field.type === 'radio') {
                field.checked = false;
            } else {
                field.value = '';
            }
            field.setCustomValidity('');
        }
    });
}

function buildSecurityConditionRows(formValues) {
    return securityConditionQuestions.map((item, index) => ({
        index,
        question: item.question,
        answer: formValues[item.fieldId] ? String(formValues[item.fieldId]).toUpperCase() : '',
        comment: formValues[item.detailFieldId] || ''
    })).filter(row => row.answer || row.comment);
}

const securityPersonalSectionQuestions = [
    {
        label: 'a.',
        fieldId: 'kaPasurGjeneraliteteTjera',
        detailFieldId: 'kaPasurGjeneraliteteTjeraDetaje',
        question: 'Keni patur gjeneralitete të tjera më parë?'
    },
    {
        label: 'b.',
        fieldId: 'kaPasurShtetesiTjeter',
        detailFieldId: 'kaPasurShtetesiTjeterDetaje',
        question: 'Keni apo keni patur shtetësi tjetër?'
    }
];

const securityMainSectionQuestions = [
    {
        number: 1,
        fieldId: 'kaPasurCertifikateSigurie',
        detailFieldId: 'kaPasurCertifikateSigurieDetaje',
        question: 'A keni qenë ndonjëherë i pajisur me Certifikatë të Sigurisë së Personelit?'
    },
    {
        number: 2,
        fieldId: 'kaQeneIDenuarSiguri',
        detailFieldId: 'kaQeneIDenuarSiguriDetaje',
        question: 'A jeni dënuar ndonjëherë për shkelje ligjore brenda apo jashtë vendit?'
    },
    {
        number: 3,
        fieldId: 'kaMasaSigurieShtese',
        detailFieldId: 'kaMasaSigurieShteseDetaje',
        question: 'A është caktuar ndonjëherë ndaj jush masë shtrënguese sigurie personale (detyrim paraqitje, ndalim dalje jashtë vendit, shtrim i përkohshëm në një spital psikiatrik, arrest shtëpie, apo arrest me burg), për ndonjë vepër penale, brenda apo jashtë vendit?'
    },
    {
        number: 4,
        fieldId: 'kaQeneNenHetim',
        detailFieldId: 'kaQeneNenHetimDetaje',
        question: 'A keni qenë ndonjëherë nën hetim ose gjykim brenda apo jashtë vendit, për shkelje ligjore?'
    },
    {
        number: 5,
        fieldId: 'kaQeneNdaluarApoNeKerkim',
        detailFieldId: 'kaQeneNdaluarApoNeKerkimDetaje',
        question: 'A keni qenë ndonjëherë i ndaluar, arrestuar brenda dhe jashtë vendit apo shpallur në kërkim kombëtar/ndërkombëtar?'
    },
    {
        number: 6,
        fieldId: 'kaVeprimtariKunderSigurise',
        detailFieldId: 'kaVeprimtariKunderSiguriseDetaje',
        question: 'A jeni përfshirë ose angazhuar ndonjëherë në veprimtari që cenojnë sigurinë kombëtare apo në aktivitete të kundërligjshme?'
    },
    {
        number: 7,
        fieldId: 'iRefuzuarApoDebuarJashte',
        detailFieldId: 'iRefuzuarApoDebuarJashteDetaje',
        question: 'A ju është refuzuar hyrja, qëndrimi apo jeni deportuar nga ndonjë shtet i huaj?'
    },
    {
        number: 8,
        fieldId: 'kaKerkuarAzil',
        detailFieldId: 'kaKerkuarAzilDetaje',
        question: 'A keni kërkuar ndonjëherë azil në ndonjë shtet të huaj?'
    },
    {
        number: 9,
        fieldId: 'perdoruesSubstancash',
        detailFieldId: 'perdoruesSubstancashDetaje',
        question: 'A keni qenë apo jeni përdorues i lëndëve narkotike, keni histori varësie ndaj medikamenteve mjekësore apo alkoolit?'
    },
    {
        number: 10,
        fieldId: 'problemeShendetiMendor',
        detailFieldId: 'problemeShendetiMendorDetaje',
        question: 'A keni apo keni patur probleme me shëndetin mendor?'
    }
];

function drawSecurityPdfFooter(doc, pageNumber, totalPages = 4) {
    doc.setDrawColor(150, 150, 150);
    doc.setLineWidth(0.3);
    doc.line(20, 286, 190, 286);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('I Kufizuar (pas plotësimit)', 105, 292, { align: 'center' });
    doc.text(`Faqe ${pageNumber} nga ${totalPages}`, 190, 292, { align: 'right' });
}

function drawSecurityPdfYesNo(doc, y, answer, x = 80) {
    const normalizedAnswer = String(answer || '').toLowerCase();
    const isYes = normalizedAnswer === 'po';
    const isNo = normalizedAnswer === 'jo';

    doc.setFont('helvetica', 'normal');
    doc.text('Po', x, y);
    doc.rect(x + 8, y - 4, 7, 6);
    if (isYes) {
        doc.text('X', x + 10.5, y + 0.5, { align: 'center' });
    }

    doc.text('Jo', x + 42, y);
    doc.rect(x + 50, y - 4, 7, 6);
    if (isNo) {
        doc.text('X', x + 52.5, y + 0.5, { align: 'center' });
    }
}

function drawSecurityPdfDetailLines(doc, y, detailText, x = 24, width = 156, minLines = 3) {
    doc.setFont('helvetica', 'normal');
    doc.text('Nëse po, ju lutem jepni detaje', x, y);

    const textX = x + 47;
    const safeDetail = detailText || '';
    const detailLines = safeDetail
        ? doc.splitTextToSize(safeDetail, width - 4)
        : [];
    const lineCount = Math.max(minLines, detailLines.length || 0);
    const detailStartY = y + 6;

    for (let index = 0; index < lineCount; index += 1) {
        const lineY = detailStartY + (index * 6);
        doc.line(textX, lineY + 0.5, textX + width, lineY + 0.5);
        if (detailLines[index]) {
            doc.text(detailLines[index], textX + 1.5, lineY);
        }
    }

    return detailStartY + (lineCount * 6) + 3;
}

function drawSecurityPdfQuestionBlock(doc, y, label, questionText, answer, detailText, options = {}) {
    const { x = 24, width = 156, detailLines = 3 } = options;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const questionLines = doc.splitTextToSize(`${label} ${questionText}`, width);
    questionLines.forEach(line => {
        doc.text(line, x, y);
        y += 6;
    });
    drawSecurityPdfYesNo(doc, y, answer, x + 40);
    y += 8;
    return drawSecurityPdfDetailLines(doc, y, detailText, x, width, detailLines);
}

function generateSecurityConditionPdf(applicationData, formValues) {
    const doc = createPdfDocument();
    if (!doc) return;

    const applicantName = getApplicantFullName(formValues);
    const submittedDate = applicationData.submittedDate || formatDateValue(new Date());

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text('FORMULARI I KUSHTIT TË SIGURISË', 105, 22, { align: 'center' });

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    let y = 40;
    y = addBlockText(doc, 'Ky dokument pranohet vetëm nëse:', y, { x: 24, maxWidth: 160 });
    y = addBlockText(doc, '- Është plotësuar nga vetë deklaruesi, në dorëshkrim, me shkronja kapitale dhe pa korrigjime.', y + 2, { x: 28, maxWidth: 156 });
    y = addBlockText(doc, '- Nuk ka rubrika të paplotësuara, ose vendosur shënimi “nuk aplikohet”, në rastet e nevojshme.', y, { x: 28, maxWidth: 156 });
    y = addBlockText(doc, '- Aplikanti ka shkruar emrin, mbiemrin dhe nënshkrimin, në fund të çdo faqeje.', y, { x: 28, maxWidth: 156 });

    doc.setFont('helvetica', 'bold');
    doc.text('PJESA I', 105, y + 8, { align: 'center' });
    doc.text('TË DHËNA PERSONALE:', 105, y + 16, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text('1. Gjeneralitet aktuale.', 24, y + 30);

    doc.autoTable({
        startY: y + 36,
        theme: 'grid',
        styles: { font: 'helvetica', fontSize: 10.5, cellPadding: 2.5, lineColor: [90, 90, 90], lineWidth: 0.2 },
        columnStyles: {
            0: { cellWidth: 52, fontStyle: 'bold' },
            1: { cellWidth: 96 }
        },
        body: [
            ['Emër / Mbiemër', `${formValues.emri || ''} ${formValues.mbiemri || ''}`.trim()],
            ['Atësi', formValues.atesia || ''],
            ['Amësi', formValues.emriNenes || ''],
            ['Gjinia', formValues.gjinia || ''],
            ['Datëlindja', formatDateValue(formValues.datelindja)],
            ['Vendlindja', formValues.vendlindja || ''],
            ['Shtetësia', formValues.shtetesia || ''],
            ['Numri Personal (ID)', formValues.nrPersonal || '']
        ],
        margin: { left: 28, right: 28 }
    });

    y = doc.lastAutoTable.finalY + 10;
    y = addBlockText(doc, `2. Adresa e plotë e banimit numër apartamenti/shtëpie, rruga, qyteti: ${formValues.adresa || ''}`, y, { x: 24, maxWidth: 160 });
    y = addBlockText(doc, `3. Numri i telefonit (Celularit): ${formValues.nrKontakti || ''}`, y + 2, { x: 24, maxWidth: 160 });
    y = addBlockText(doc, `4. Adresa e email: ${applicationData.email || formValues.email || ''}`, y + 2, { x: 24, maxWidth: 160 });
    y += 8;

    securityPersonalSectionQuestions.forEach((item, index) => {
        y = drawSecurityPdfQuestionBlock(doc, y, item.label, item.question, formValues[item.fieldId], formValues[item.detailFieldId], {
            x: 34,
            width: 146,
            detailLines: index === 0 ? 3 : 2
        });
        y += 2;
    });

    drawSecurityPdfFooter(doc, 1);

    doc.addPage();
    y = 22;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('PJESA II', 105, y, { align: 'center' });
    doc.text('TË DHËNA PËR SIGURINË:', 105, y + 12, { align: 'center' });
    y += 28;

    securityMainSectionQuestions.slice(0, 4).forEach(item => {
        y = drawSecurityPdfQuestionBlock(doc, y, `${item.number}.`, item.question, formValues[item.fieldId], formValues[item.detailFieldId], {
            detailLines: item.number === 3 ? 3 : 2
        });
        y += 2;
    });

    drawSecurityPdfFooter(doc, 2);

    doc.addPage();
    y = 22;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('PJESA II', 105, y, { align: 'center' });
    y += 18;

    securityMainSectionQuestions.slice(4).forEach(item => {
        y = drawSecurityPdfQuestionBlock(doc, y, `${item.number}.`, item.question, formValues[item.fieldId], formValues[item.detailFieldId], {
            detailLines: item.number >= 9 ? 3 : 2
        });
        y += 2;
    });

    drawSecurityPdfFooter(doc, 3);

    doc.addPage();
    y = 24;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('PJESA III', 105, y, { align: 'center' });
    doc.text('DEKLARATA E DHËNIES SË PËLQIMIT', 105, y + 12, { align: 'center' });
    doc.text('PËR', 105, y + 23, { align: 'center' });
    const consentTitle = doc.splitTextToSize('MBLEDHJEN E TË DHËNAVE, KRYERJEN E VERIFIKIMIT TË PLOTËSIMIT TË KUSHTIT TË SIGURISË DHE AKSESIN PËR NJOHJEN DHE ADMINISTRIMIN E TË DHËNAVE PERSONALE', 150);
    consentTitle.forEach((line, index) => {
        doc.text(line, 105, y + 34 + (index * 7), { align: 'center' });
    });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    y = y + 34 + (consentTitle.length * 7) + 12;
    y = addBlockText(doc, `Me vullnetin tim të lirë, sot më datë ${submittedDate}, duke qenë i vetëdijshëm se ky formular përbën dokument zyrtar, të dhënat e pasqyruara në këtë formular i nënshtrohen verifikimit të plotë brenda dhe jashtë vendit, deklaroj se:`, y, { x: 22, maxWidth: 168 });
    y = addBlockText(doc, '1. Jap pëlqimin që të mblidhen të dhëna dhe të kryhet procedura e verifikimit të kushtit të sigurisë.', y + 6, { x: 22, maxWidth: 168 });
    y = addBlockText(doc, '2. Jam dakort që të dhënat e pasqyruara në këtë formular, të trajtohen nga personat përgjegjës në përputhje me ligjin nr. 9887 datë 10.03.2008, “Për mbrojtjen e të dhënave personale”, i ndryshuar.', y + 4, { x: 22, maxWidth: 168 });
    y = addBlockText(doc, '3. Të dhënat e pasqyruara nga ana ime në “formularin e kushtit të sigurisë” janë të vërteta, të plota dhe të sakta.', y + 4, { x: 22, maxWidth: 168 });
    y = addBlockText(doc, '4. Jam i ndërgjegjshëm dhe i vetëdijshëm që pasqyrimi i të dhënave të pavërteta, të paplota dhe të pasakta në “Formularin e kushtit të sigurisë”, përbën shkak për ndërprerjen e procedurave dhe mos plotësimin e “kushtit të sigurisë”.', y + 4, { x: 22, maxWidth: 168 });

    doc.setFont('helvetica', 'bold');
    doc.text('DEKLARUESI', 105, 218, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.text(applicantName || 'Emër, Atësi, Mbiemër', 105, 244, { align: 'center' });
    doc.text('Emër, Atësi, Mbiemër', 105, 252, { align: 'center' });
    doc.text('Nënshkrimi', 105, 270, { align: 'center' });
    if (applicationData.signature || formValues.firma) {
        try {
            doc.addImage(applicationData.signature || formValues.firma, 'PNG', 78, 274, 54, 18);
        } catch (error) {
            console.warn('Could not add signature image to security PDF.', error);
        }
    }

    drawSecurityPdfFooter(doc, 4);
    doc.save(`Formulari_Kushtit_Sigurise_${applicationData.id}.pdf`);
}

function moveSecuritySectionBeforeAccount() {
    const accountSection = document.getElementById('accountSection');
    if (!accountSection || !accountSection.parentNode) {
        return;
    }

    const securitySectionTitle = Array.from(document.querySelectorAll('.form-section .section-title')).find(title =>
        title.textContent && title.textContent.trim() === 'Formulari i Kushtit të Sigurisë'
    );
    const securitySection = securitySectionTitle ? securitySectionTitle.closest('.form-section') : null;

    if (!securitySection || securitySection === accountSection) {
        return;
    }

    accountSection.parentNode.insertBefore(securitySection, accountSection);
}

// Form Submission - Create Account and Save Application
document.addEventListener('DOMContentLoaded', function() {
    // Generate tables first
    generatePyetësoriTable();
    generateShendetesorTable();
    initSignature();
    setupDateInputs();
    setupGradeInputs();
    
    // Setup conditional fields
    const denuarField = document.getElementById('denuar');
    const masaSiguriseField = document.getElementById('masaSigurise');
    const arsimiField = document.getElementById('arsimi');
    const shkollaMesmeField = document.getElementById('shkollaMesme');
    if (denuarField) {
        denuarField.addEventListener('change', toggleDenimDetails);
    }
    if (masaSiguriseField) {
        masaSiguriseField.addEventListener('change', toggleMasaSiguriseDetails);
    }
    securityConditionQuestions.forEach(item => {
        const select = document.getElementById(item.fieldId);
        if (!select) {
            return;
        }

        select.addEventListener('change', () => toggleConditionalDetails(item.fieldId, item.detailsId));
        toggleConditionalDetails(item.fieldId, item.detailsId);
    });

    moveSecuritySectionBeforeAccount();
    
    // Education visibility
    if (arsimiField) {
        arsimiField.addEventListener('change', updateEducationFields);
        updateEducationFields();
    }
    if (shkollaMesmeField) {
        shkollaMesmeField.addEventListener('change', updateHighSchoolFields);
    }
    
    // Document upload handling
    const documentUploadInput = document.getElementById('dokumentetArsimit');
    const uploadedDocumentsList = document.getElementById('uploadedDocumentsList');
    let uploadedDocuments = [];
    
    if (documentUploadInput && uploadedDocumentsList) {
        documentUploadInput.addEventListener('change', function(e) {
            const files = Array.from(e.target.files);
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            files.forEach(file => {
                if (file.size > maxSize) {
                    alert(`Skedari "${file.name}" është më i madh se 5MB. Ju lutem zgjidhni një skedar më të vogël.`);
                    return;
                }
                
                readFileAsDocumentData(file, {
                    fieldName: 'dokumentetArsimit',
                    category: 'Dokument i arsimit'
                }).then(documentData => {
                    uploadedDocuments.push(documentData);
                    updateDocumentsList();
                }).catch(error => {
                    console.error(error);
                    alert(error.message);
                });
            });
        });
    }
    
    function updateDocumentsList() {
        if (!uploadedDocumentsList) return;
        
        if (uploadedDocuments.length === 0) {
            uploadedDocumentsList.innerHTML = '';
            return;
        }
        
        uploadedDocumentsList.innerHTML = uploadedDocuments.map((doc, index) => {
            const sizeKB = (doc.size / 1024).toFixed(2);
            return `
                <div class="uploaded-document-item" data-index="${index}">
                    <span class="document-icon">📄</span>
                    <span class="document-name">${doc.name}</span>
                    <span class="document-size">(${sizeKB} KB)</span>
                    <button type="button" class="remove-document-btn" onclick="removeDocument(${index})" title="Hiq dokumentin">×</button>
                </div>
            `;
        }).join('');
    }
    
    window.removeDocument = function(index) {
        uploadedDocuments.splice(index, 1);
        updateDocumentsList();
        // Reset file input
        if (documentUploadInput) {
            documentUploadInput.value = '';
        }
    };
    
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
    
    form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const invalidGradeInput = Array.from(this.querySelectorAll('[data-grade-field="true"]')).find(input => !isValidGradeValue(input.value.trim()));
    if (invalidGradeInput) {
        invalidGradeInput.setCustomValidity('Vendosni një notë nga 0 deri në 10, me maksimumi 2 shifra dhjetore.');
        invalidGradeInput.reportValidity();
        invalidGradeInput.focus();
        return;
    }
    
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
    const formValues = serializeFormData(formData);
    const applicationData = {
        id: Date.now().toString(), // Generate unique ID
        type: getCurrentApplicationType(),
        email: email,
        password: password, // Në prodhim, duhet të hash-ojmë
        submittedDate: formatDateValue(new Date()),
        status: 'pending',
        personalData: {
            firstName: formData.get('emri') || '',
            lastName: formData.get('mbiemri') || '',
            birthDate: formatDateValue(formData.get('datelindja')) || '',
            placeOfBirth: formData.get('vendlindja') || '',
            address: formData.get('adresa') || '',
            phone: formData.get('nrKontakti') || '',
            email: email
        },
        educationData: {
            level: formData.get('arsimi') || '',
            shkollaMesme: formData.get('shkollaMesme') || '',
            emriShkollesNente: formData.get('emriShkollesNente') || '',
            notaMesatareNente: formData.get('notaMesatareNente') || '',
            emriShkolles: formData.get('emriShkolles') || '',
            notaMesatareGjimnaz: formData.get('notaMesatareGjimnaz') || '',
            notaMesatareProfesionale: formData.get('notaMesatareProfesionale') || '',
            profiliShkolles: formData.get('profiliShkolles') || '',
            llojiUniversitetit: formData.get('llojiUniversitetit') || '',
            diploma: formData.get('diploma') || '',
            emriShkollesLarte: formData.get('emriShkollesLarte') || '',
            dataFillimit: formatDateValue(formData.get('dataFillimit')) || '',
            dataMbarimit: formatDateValue(formData.get('dataMbarimit')) || '',
            institution: formData.get('emriShkollesLarte') || formData.get('emriShkolles') || formData.get('emriShkollesNente') || '',
            graduationYear: (formData.get('dataMbarimit') || '').split('-')[2] || ''
        },
        preferredUnit: formData.get('reparti') || '',
        motivation: formData.get('motivi') || '',
        signature: formData.get('firma') || ''
    };
    
    // Get all form fields and add to applicationData
    const formElements = this.elements;
    for (let element of formElements) {
        if (element.name && element.name !== 'accountEmail' && element.name !== 'accountPassword' && element.name !== 'confirmPassword') {
            if (!applicationData.formData) {
                applicationData.formData = {};
            }
            assignFormElementValue(applicationData.formData, element);
        }
    }
    
    // Add uploaded documents to applicationData
    const requiredDocuments = await collectRequiredDocuments();
    const allDocuments = [...requiredDocuments, ...uploadedDocuments];
    if (allDocuments.length > 0) {
        applicationData.documents = allDocuments;
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
    
    // Generate PDFs
    generateAllPdfs(applicationData, formValues);
    
    // Redirect to dashboard
    setTimeout(() => {
        window.location.href = 'applicant-dashboard.html';
    }, 3000);
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

function generateAllPdfs(applicationData, formValues) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        console.warn('jsPDF library is not available. Skipping PDF generation.');
        return;
    }
    
    try {
        // Generate and download PDFs one by one with delay
        generateApplicationPdf(applicationData, formValues);
        
        setTimeout(() => {
            generateSecurityConditionPdf(applicationData, formValues);
        }, 500);
        
        setTimeout(() => {
            generateDeclarationPdf(applicationData, formValues);
        }, 1000);
        
        setTimeout(() => {
            generateHealthPdf(applicationData, formValues);
        }, 1500);
        
        // Show info message
        setTimeout(() => {
            alert('4 dokumente PDF u gjeneruan dhe u shkarkuan:\n\n1. Formulari i Aplikimit\n2. Formulari i Kushtit të Sigurisë\n3. Formulari Vetëdeklarimi\n4. Formulari Vetëdeklarimi Shëndetësor');
        }, 2000);
    } catch (error) {
        console.error('Error while generating PDFs:', error);
        alert('Gabim në gjenerimin e PDF-ve. Ju lutem kontrolloni konsolën për më shumë detaje.');
    }
}

function createPdfDocument() {
    const { jsPDF } = window.jspdf;
    return new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
    });
}

function ensurePageSpace(doc, y, spaceNeeded = 8) {
    if (y + spaceNeeded > 285) {
        doc.addPage();
        return 20;
    }
    return y;
}

function addBlockText(doc, text, y, options = {}) {
    const { x = 14, maxWidth = 180, lineHeight = 6, fontStyle = 'normal' } = options;
    doc.setFont('helvetica', fontStyle);
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach(line => {
        y = ensurePageSpace(doc, y, lineHeight);
        doc.text(line, x, y);
        y += lineHeight;
    });
    return y;
}

function markOption(condition) {
    return condition ? '☒' : '☐';
}

function generateApplicationPdf(applicationData, formValues) {
    const doc = createPdfDocument();
    if (!doc) return;

    const applicationType = applicationData.type || getCurrentApplicationType();
    const selectedEducation = getFormValue(formValues, 'arsimi');
    const preferredUnit = getFormValue(formValues, 'reparti', 'njesia_preferuar');
    const recruitmentPhase = getFormValue(formValues, 'fazaRekrutimit');
    const applicantName = getApplicantFullName(formValues);
    const questionnaireRows = buildResponseRows(pyetësoriQuestions, formValues, ['pyetësori', 'pyetesori'], ['pyetësori_koment', 'pyetesori_koment']);
    const healthRows = buildResponseRows(shendetesorQuestions, formValues, ['shendetesor', 'shëndetesor'], ['shendetesor_koment', 'shëndetesor_koment']);
    const subtitleLines = doc.splitTextToSize(getApplicationPdfSubtitle(applicationType), 170);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('FORMULARI I APLIKIMIT', 105, 15, { align: 'center' });
    doc.setFontSize(12);
    subtitleLines.forEach((line, index) => {
        doc.text(line, 105, 22 + (index * 6), { align: 'center' });
    });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    let y = 32 + ((subtitleLines.length - 1) * 6);
    
    y = addBlockText(doc, 'A) TË DHËNAT PERSONALE:', y, { fontStyle: 'bold' });
    y = addBlockText(doc, `1. Emër: ${formValues.emri || ''}    Atësi: ${formValues.atesia || ''}    Mbiemër: ${formValues.mbiemri || ''}`, y);
    y = addBlockText(doc, `2. Nr. i Kartës së Identitetit: ${formValues.nrPersonal || ''}`, y);
    y = addBlockText(doc, `3. Gjinia: ${formValues.gjinia || ''}    Gjatësia: ${formValues.gjatësia || ''} cm`, y);
    y = addBlockText(doc, `4. Datëlindja: ${formatDateValue(formValues.datelindja)}    Vendlindja: ${formValues.vendlindja || ''}    Vendbanimi: ${formValues.vendbanimi || ''}`, y);
    y = addBlockText(doc, `5. Kombësia: ${formValues.kombesia || ''}    Shtetësia: ${formValues.shtetesia || ''}`, y);
    
    y = addBlockText(doc, 'B) ADRESA/KONTAKT:', y + 2, { fontStyle: 'bold' });
    y = addBlockText(doc, `1. Adresa e vendbanimit: ${formValues.adresa || ''}`, y);
    y = addBlockText(doc, `2. Nr kontakti: ${formValues.nrKontakti || ''}    Email: ${formValues.email || ''}`, y);
    
    y = addBlockText(doc, 'C) TË DHËNA MBI ARSIMIMIN:', y + 2, { fontStyle: 'bold' });
    y = addBlockText(doc, `1. Arsimi i kryer: ${selectedEducation}`, y);
    y = addBlockText(doc, `2. Arsimi 9-vjeçar - Shkolla: ${formValues.emriShkollesNente || ''} | Nota mesatare: ${formValues.notaMesatareNente || ''}`, y);
    y = addBlockText(doc, `3. Arsim i mesëm - Lloji: ${formValues.shkollaMesme || ''} | Emri: ${formValues.emriShkolles || ''}`, y);
    y = addBlockText(doc, `Nota mesatare gjimnaz: ${formValues.notaMesatareGjimnaz || ''} | Nota mesatare profesionale: ${formValues.notaMesatareProfesionale || ''}`, y);
    y = addBlockText(doc, `Profili profesional: ${formValues.profiliShkolles || ''}`, y);
    y = addBlockText(doc, `4. Lloji i arsimit të lartë: ${formValues.llojiUniversitetit || ''} | Diploma: ${formValues.diploma || ''}`, y);
    y = addBlockText(doc, `5. Universiteti/Fakulteti: ${formValues.emriShkollesLarte || ''}`, y);
    y = addBlockText(doc, `6. Koha e kryerjes së studimeve të larta: ${formatDateValue(formValues.dataFillimit)} - ${formatDateValue(formValues.dataMbarimit)}`, y);
    y = addBlockText(doc, `7. Reparti i preferuar: ${preferredUnit || '(Nuk është përzgjedhur)'}`, y);
    y = addBlockText(doc, `8. Faza e rekrutimit: ${recruitmentPhase || '(Nuk është plotësuar)'}`, y);
    y = addBlockText(doc, 'Ç) Struktura/Reparti Ushtarak ku dëshironi të shërbeni:', y + 4, { fontStyle: 'bold' });
    y = addBlockText(doc, preferredUnit || '(Nuk është përzgjedhur)', y);
    y = addBlockText(doc, 'Lexoni me kujdes secilën pyetje dhe vendosni shenjën “X” në kolonën PO ose JO.', y + 4);
    
    y = ensurePageSpace(doc, y, 10);
    doc.setFont('helvetica', 'bold');
    doc.text('Tabela e Pyetjeve - Lexoni me kujdes secilën pyetje dhe shënoni PO ose JO.', 14, y);
    doc.setFont('helvetica', 'normal');
    y += 4;
    
    doc.autoTable({
        startY: y,
        head: [['Nr', 'Pyetja', 'Përgjigje', 'Koment']],
        body: questionnaireRows.map(row => [row.index + 1, row.question, (row.answer || '').toUpperCase(), row.comment || '']),
        headStyles: { fillColor: [0, 51, 160] },
        styles: { fontSize: 9, cellWidth: 'wrap' },
        columnStyles: {
            0: { cellWidth: 10, halign: 'center' },
            1: { cellWidth: 100 },
            2: { cellWidth: 25, halign: 'center' },
            3: { cellWidth: 45 }
        }
    });
    
    y = doc.lastAutoTable.finalY + 6;
    y = addBlockText(doc, 'D) MOTIVI QË JU SHTYN TË SHËRBENI NË FORCAT E ARMATOSURA:', y, { fontStyle: 'bold' });
    y = addBlockText(doc, formValues.motivi || '(Nuk është plotësuar)', y);
    
    y = addBlockText(doc, 'Përsa më sipër, deklaroj nën përgjegjësinë time personale se informacioni që kam shënuar në këtë formular aplikimi është i vërtetë.', y + 4);
    y = addBlockText(doc, `Aplikanti: ${applicantName || '________________'}`, y + 4);
    y = addSignatureToPdf(doc, applicationData.signature || formValues.firma, y + 2);

    appendResponseTablePage(doc, 'PYETËSORI I APLIKIMIT', questionnaireRows.map(row => ({
        ...row,
        answer: (row.answer || '').toUpperCase()
    })));
    renderHealthFormPage(doc, formValues, healthRows, {
        addPage: true,
        signature: applicationData.signature || formValues.firma
    });
    
    doc.save(`Formulari_Aplikimit_${applicationData.id}.pdf`);
}

function generateDeclarationPdf(applicationData, formValues) {
    const doc = createPdfDocument();
    if (!doc) return;

    const convictionDetails = getSelectedValues(formValues, 'denim[]');
    const securityMeasureDetails = getSelectedValues(formValues, 'masaSigurise[]');
    const applicantName = getApplicantFullName(formValues);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('FORMULAR VETËDEKLARIMI', 105, 15, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    let y = 28;
    y = addBlockText(doc, 'Të dhënat e vetëdeklaruesit:', y, { fontStyle: 'bold' });
    y = addBlockText(doc, `Mbiemri, Emri: ${formValues.mbiemri || ''} ${formValues.emri || ''}`, y);
    y = addBlockText(doc, `Atësia/Amësia: ${formValues.atesia || ''} / ${formValues.emriNenes || ''}`, y);
    y = addBlockText(doc, `Datëlindja: ${formatDateValue(formValues.datelindja)}    Vendlindja: ${formValues.vendlindja || ''}`, y);
    y = addBlockText(doc, `Dokumenti i identifikimit: ${formValues.nrPersonal || ''}`, y);
    
    const denuarValue = (formValues.denuar || '').toLowerCase();
    const masaSigurise = (formValues.masaSigurise || '').toLowerCase();
    
    y = addBlockText(doc, 'Deklaroj me vullnetin tim të lirë se jam:', y + 4, { fontStyle: 'bold' });
    y = addBlockText(doc, `a) ${markOption(denuarValue !== 'po')} i/e padënuar.    ${markOption(denuarValue === 'po')} i/e dënuar.`, y);
    y = addBlockText(doc, `b) ${markOption(false)} i/e pandaluar apo arrestuar nga organet ligjzbatuese, për kryerjen e një vepre penale.    ${markOption(false)} i/e ndaluar apo arrestuar ...`, y);
    y = addBlockText(doc, `c) ${markOption(masaSigurise !== 'po')} pa masë shtrënguese të sigurisë personale,    ${markOption(masaSigurise === 'po')} me masë shtrënguese të sigurisë personale.`, y);

    if (convictionDetails.length > 0) {
        y = addBlockText(doc, `Lloji i dënimit të deklaruar: ${convictionDetails.join(', ')}`, y + 2);
    }

    if (securityMeasureDetails.length > 0) {
        y = addBlockText(doc, `Nëse po, specifiko: ${securityMeasureDetails.join(', ')}`, y);
    } else {
        y = addBlockText(doc, 'Nëse po, specifiko të dhënat e mëposhtme: _______________________________', y);
    }
    
    y = addBlockText(doc, '□ ndalim i daljes jashtë shtetit.    □ detyrim për t’u paraqitur në Policinë Gjyqësore.', y + 2);
    
    y = addBlockText(doc, 'DEKLARUESI                               MARRËSI I VETËDEKLARIMIT', y + 10);
    y = addBlockText(doc, `${applicantName || '_________________________'}               _____________________________`, y);
    y = addBlockText(doc, 'Emër, Mbiemër / Firmë                    Emër, Mbiemër / Firmë / Vulë', y + 2);
    y = addSignatureToPdf(doc, applicationData.signature || formValues.firma, y + 2, { x: 14, label: 'Firma e deklaruesit:' });
    
    y = addBlockText(doc, 'Autorizim: Deklaroj se të dhënat e paraqitura në këtë formular janë të vërteta dhe autorizoj kontrollin e vërtetësisë së tyre nga ________________________________.', y + 10);
    y = addBlockText(doc, `${applicantName || '_________________________'}               ${applicationData.submittedDate || '_____________________________'}`, y + 6);
    y = addBlockText(doc, 'Nënshkrimi i deklaruesit autorizues      Data e nënshkrimit', y + 2);
    
    y = addBlockText(doc, 'Shënim: Trajtimi i të dhënave personale në vijim të përdorimit të këtij autorizimi do të bëhet vetëm në përputhje me ligjin nr. 8517 datë 22.07.1999 “Për mbrojtjen e të dhënave personale”.', y + 8);
    y = addBlockText(doc, 'Deklarimi i rremë shkakton përgjegjësi penale sipas ligjit dhe sjell përjashtimin tuaj nga çdo procedurë e mëtejshme.', y);
    
    doc.save(`Formulari_Vetedeklarim_${applicationData.id}.pdf`);
}

function generateHealthPdf(applicationData, formValues) {
    const doc = createPdfDocument();
    if (!doc) return;
    const healthRows = buildResponseRows(shendetesorQuestions, formValues, ['shendetesor', 'shëndetesor'], ['shendetesor_koment', 'shëndetesor_koment']).map(row => {
        return {
            ...row,
            answer: (row.answer || '').toUpperCase()
        };
    });

    renderHealthFormPage(doc, formValues, healthRows, {
        signature: applicationData.signature || formValues.firma
    });
    
    doc.save(`Formulari_Shendetesor_${applicationData.id}.pdf`);
}
