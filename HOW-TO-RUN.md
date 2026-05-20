# Si të Ekzekutoni Projektin QPR

## Metoda 1: Hapni direkt në Browser (Më e Thjeshtë)

1. Shkoni te folderi `QPR`
2. Klikoni dy herë në `index.html`
3. Faqja do të hapet në browser-in tuaj

**Ose:**
- Right-click në `index.html`
- Zgjidhni "Open with" → Zgjidhni browser-in tuaj (Chrome, Firefox, Edge, etj.)

## Metoda 2: Përdorni Server Lokal (Rekomanduar)

### Në Windows (PowerShell):
1. Hapni PowerShell në folderin `QPR`
2. Ekzekutoni:
   ```powershell
   .\start-server.ps1
   ```
   
   Ose nëse nuk punon:
   ```powershell
   python -m http.server 8000
   ```
   Pastaj hapni browser dhe shkoni te: `http://localhost:8000`

### Në Windows (Command Prompt):
1. Hapni Command Prompt në folderin `QPR`
2. Ekzekutoni:
   ```
   start-server.bat
   ```

### Nëse keni Python:
```bash
python -m http.server 8000
# Ose
python3 -m http.server 8000
```
Pastaj hapni: `http://localhost:8000`

## Metoda 3: Përdorni Live Server në VS Code

1. Instaloni extension-in "Live Server" në VS Code
2. Right-click në `index.html`
3. Zgjidhni "Open with Live Server"
4. Faqja do të hapet automatikisht në browser

## Metoda 4: Përdorni Node.js (nëse e keni)

```bash
npx http-server -p 8000
```

## Metoda 5: GitHub Pages (Për Testim Online)

Repo-ja është përgatitur për GitHub Pages me workflow automatik deploy.

1. Hapni repo-n në GitHub.
2. Shkoni te `Settings > Pages`.
3. Te `Source`, zgjidhni `GitHub Actions`.
4. Bëni një push në branch `main`.
5. Prisni që workflow `Deploy GitHub Pages` të përfundojë.

URL-ja e testimit zakonisht do të jetë:

```text
https://USERNAME.github.io/REPO/
```

### Kufizim i rëndësishëm

- Projekti përdor `localStorage`, prandaj të dhënat ruhen vetëm në browser-in e atij përdoruesi.
- Admini dhe aplikanti do të ndajnë të dhëna vetëm në të njëjtin browser/profil, jo mes pajisjeve të ndryshme.

## Shënime:

- **Nëse keni error me localhost:** Thjesht hapni `index.html` direkt në browser
- **Projekti është HTML statik:** Nuk ka nevojë për server të kompleks
- **localStorage funksionon:** Edhe pa server, localStorage punon në browser

## Troubleshooting:

### "localhost refused to connect"
- **Zgjidhje:** Hapni direkt `index.html` në browser
- Ose përdorni një server lokal (Metoda 2 ose 3)

### "Python not found"
- Instaloni Python nga: https://www.python.org/
- Ose përdorni Live Server në VS Code
- Ose hapni direkt `index.html`

### "Port already in use"
- Përdorni një port tjetër: `python -m http.server 8080`
- Ose mbyllni procesin që po përdor portin

## Struktura e Projektit:

```
QPR/
├── index.html              # Faqja kryesore - START HERE!
├── application.html        # Zgjedhja e aplikimit
├── login.html              # Login për aplikantët
├── applicant-dashboard.html # Dashboard i aplikantit
├── qpr-login.html          # Login për administratorët
├── qpr-dashboard.html      # Dashboard QPR
├── form-*.html             # Formularët e aplikimit
└── styles.css              # Stilizimi
```

## Kredencialet e Test:

### Për Aplikantët:
- Email: `test@qpr.al`
- Password: `test123`

### Për Administratorët QPR:
- Email: `admin@qpr.al`
- Password: `admin123`

---

**Më e thjeshtë:** Thjesht klikoni dy herë në `index.html` dhe hapet në browser! 🚀






