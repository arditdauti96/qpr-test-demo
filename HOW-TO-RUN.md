# Si të Ekzekutoni Projektin QPR

## Metoda e saktë

Ky projekt nuk është më static-only. Për funksionalitet të plotë duhet të nisni backend-in Node.js.

Struktura tani është e ndarë në `frontend/`, `backend/` dhe `database/`.

### 1. Instaloni varësitë e backend-it

```bash
npm --prefix backend install
```

### 2. Konfiguroni variablat e ambientit

Krijoni një file `backend/.env` nga `backend/.env.example`:

```text
PORT=3000
JWT_SECRET=change-this-in-production
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/qpr
DATABASE_SSL=false
```

Sigurohuni që databaza `qpr` ekziston në PostgreSQL përpara `npm --prefix backend start`.

### 3. Nisni serverin

```bash
npm --prefix backend start
```

### 4. Hapni aplikacionin

```text
http://localhost:3000
```

## Kredencialet fillestare

### Për administratorin QPR

- Email: `DEFAULT_ADMIN_EMAIL` nga `backend/.env`
- Password: `DEFAULT_ADMIN_PASSWORD` nga `backend/.env`

### Për aplikantët

- Nuk ka më llogari hardcoded në frontend.
- Një aplikant krijon llogarinë e vet në momentin që dërgon aplikimin e parë.

## Çfarë nuk duhet përdorur më

Këto mënyra mund të shfaqin vetëm HTML/CSS/JS, por nuk japin backend-in dhe do të sjellin gabime në API:

- hapja direkte e `frontend/index.html`
- `npx serve`
- `python -m http.server`
- Live Server pa një backend të veçantë Node në punë

## Troubleshooting

### `/api/health` kthen `404`

Po përdorni një static server në vend të backend-it.

Zgjidhja:

```bash
npm --prefix backend start
```

### Serveri dështon me gabim PostgreSQL

Kontrolloni që:

- PostgreSQL është ndezur
- `DATABASE_URL` është e saktë
- databaza ekziston
- përdoruesi ka të drejta `CREATE`, `SELECT`, `INSERT`, `UPDATE`, `DELETE`

### Porta 3000 është e zënë

Ndryshoni `PORT` në `backend/.env`, p.sh.:

```text
PORT=4000
```

Pastaj niseni përsëri me `npm --prefix backend start`.

### Session/login nuk funksionon

- Sigurohuni që faqja po hapet nga i njëjti host ku po punon backend-i.
- Bëni refresh pas një deploy të ri.
- Nëse cookie-t e sesionit janë nga një version i vjetër, bëni logout dhe login përsëri.

## Deploy në host tjetër

Ky projekt mund të zhvendoset lehtë në një host tjetër që mbështet Node.js:

1. Kopjoni projektin.
2. Ekzekutoni `npm --prefix backend install`.
3. Vendosni `backend/.env`.
4. Nisni me `npm --prefix backend start`.
5. Bëni backup të databazës PostgreSQL.

Për hostim të qëndrueshëm rekomandohet përdorimi i PM2, systemd ose Docker.

## Deploy live me Render

Rruga më e shpejtë për ta hedhur live është Render, sepse mban bashkë Node.js dhe PostgreSQL.

1. Shtyjeni projektin në një repo GitHub.
2. Në Render krijoni një `Blueprint` nga repo-ja.
3. Render do të krijojë automatikisht:
	- web service për backend + frontend statik
	- PostgreSQL database
4. Vendosni env vars këto vlera:

```text
NODE_ENV=production
JWT_SECRET=<sekret i fortë>
DEFAULT_ADMIN_EMAIL=admin@qpr.al
DEFAULT_ADMIN_PASSWORD=<fjalekalim i fortë>
DEFAULT_ADMIN_NAME=Administrator QPR
```

5. `DATABASE_URL` dhe `PORT` merren automatikisht nga Render blueprint.
6. Pasi deploy të mbarojë, Render do t'ju japë linkun live `https://...onrender.com`.

## Shënim për GitHub Pages

GitHub Pages mund të shërbejë vetëm versionin statik të UI-së. Nuk mund të ekzekutojë `server.js` ose PostgreSQL, prandaj nuk është më mjedis i mjaftueshëm për versionin me backend.






