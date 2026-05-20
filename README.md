# Sistemi i Rekrutimit - Forcat e Armatosura të Shqipërisë

Sistem modern për rekrutimin e personelit në Forcat e Armatosura të Shqipërisë.

## Karakteristika

- **Faqja kryesore** me informacion mbi rekrutimin
- **Formular aplikimi** për kandidatët
- **Sistem login** për administratorët
- **Karousel interaktiv** me mesazhe motivuese
- **Dizajn modern dhe responsive** që funksionon në të gjitha pajisjet
- **Tema me ngjyrë të gjelbër** që simbolizon Forcat e Armatosura

## Teknologjitë e Përdorura

- HTML5
- CSS3 (me Grid dhe Flexbox)
- JavaScript (Vanilla JS)

## Si të Përdoret

1. **Hapni faqen:**
   - Thjesht hapni `index.html` në shfletuesin tuaj
   - Ose përdorni një server lokal (p.sh. Live Server në VS Code)

2. **Funksionalitetet kryesore:**
   - Klikoni butonin "Apliko për t'u bërë pjesë e Forcave të Armatosura" për të hapur formularin e aplikimit
   - Klikoni "Please log in" për të hapur formularin e login
   - Karousel-i ndryshon automatikisht çdo 5 sekonda

## GitHub Pages

Repo-ja është përgatitur për deploy testues në GitHub Pages.

1. Hapni `Settings > Pages` në GitHub.
2. Te `Source`, zgjidhni `GitHub Actions`.
3. Pas push-it të radhës në `main`, workflow `Deploy GitHub Pages` do ta publikojë faqen.

URL-ja zakonisht do të jetë në formatin:

```text
https://USERNAME.github.io/REPO/
```

Shënim i rëndësishëm:
- Projekti përdor `localStorage`, prandaj aplikimet ruhen vetëm në browser-in e përdoruesit.
- GitHub Pages është i përshtatshëm për testim të UI/rrjedhës statike, jo për ndarje reale të të dhënave mes pajisjeve ose përdoruesve të ndryshëm.

## Struktura e Projektit

```
QPR/
├── index.html          # Faqja kryesore
├── styles.css          # Stilizimi i faqes
├── script.js           # Funksionaliteti JavaScript
└── README.md           # Dokumentacioni
```

## Përmirësime të Mundshme

- Integrim me backend API për ruajtjen e të dhënave
- Sistem autentifikimi të plotë
- Dashboard për administratorët
- Shfaqja e imazheve reale në vend të placeholder-ave
- Integrim me sistem email për njoftimet
- Mbështetje për shumë gjuhë

## Shënime

- Formularët aktualisht shfaqin vetëm alert-e. Për funksionalitet të plotë, duhet integruar me një backend.
- Imazhet aktualisht janë placeholder-e. Zëvendësojini me imazhe reale kur të keni.
- Për GitHub Pages nuk nevojitet server lokal ose backend, por të dhënat nuk sinkronizohen mes shfletuesve.

## Autor

Sistemi është krijuar për Forcat e Armatosura të Shqipërisë.

