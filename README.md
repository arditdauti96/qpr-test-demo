# Sistemi i Rekrutimit - Forcat e Armatosura të Shqipërisë

Sistem rekrutimi me frontend, backend dhe asetet e databazës të ndara në folderë të veçantë, me autentikim, dashboard administrimi dhe ruajtje persistente në PostgreSQL.

## Çfarë përfshin

- Faqe kryesore informative dhe responsive
- 7 formularë aplikimi me ruajtje reale në backend
- Login për aplikantë dhe administratorë
- Dashboard aplikanti për statusin, historikun dhe ndryshimin e fjalëkalimit
- Dashboard admin për shqyrtim, komente, statuset dhe menaxhimin e përfitimeve
- Gjenerim PDF në frontend për aplikimin, kushtet e sigurisë, deklaratën dhe formularin shëndetësor

## Stack-u aktual

- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js + Express
- Auth: JWT
- Database: PostgreSQL
- Persistenca: tabela SQL me fusha `JSONB` për strukturat fleksibile të formularëve

Ky kombinim është zgjedhur sepse përshtatet me kodin ekzistues pa futur build-step ose frontend framework të ri, por jep databazë reale dhe hostim më të qëndrueshëm.

## Ngritja lokale

1. Instaloni varësitë e backend-it:

```bash
npm --prefix backend install
```

2. Krijoni `backend/.env` nga `backend/.env.example` dhe vendosni lidhjen PostgreSQL.

3. Nisni aplikacionin:

```bash
npm --prefix backend start
```

4. Hapni:

```text
http://localhost:3000
```

Shënim: tani `npx serve`, Live Server ose hapja direkte e `frontend/index.html` nuk mjaftojnë për funksionalitetin e plotë, sepse aplikacioni përdor endpoint-et `/api/*` të backend-it.

## Kredencialet fillestare

- Admin QPR:
  - Email: `DEFAULT_ADMIN_EMAIL` nga `backend/.env`
  - Password: `DEFAULT_ADMIN_PASSWORD` nga `backend/.env`

Aplikantët krijohen automatikisht kur dërgojnë aplikimin e parë.

## Deploy në host tjetër

Kërkesat minimale:

- Node.js 18+
- një instancë PostgreSQL

Hapat:

1. Kopjoni projektin në server.
2. Ekzekutoni `npm --prefix backend install`.
3. Vendosni `backend/.env` me `JWT_SECRET` të fortë, `PORT` sipas hostit dhe kredenciale admini që nuk janë default.
4. Krijoni databazën, p.sh. `qpr`.
5. Vendosni `DATABASE_URL`, `DATABASE_SSL` dhe `JWT_SECRET` në `backend/.env`.
6. Nisni me `npm --prefix backend start` ose menaxhojeni me PM2 / systemd / Docker sipas hostit.

### Opsioni më i thjeshtë: Render

Ky repo tani ka konfigurim gati për Render. Mund ta hostoni si web service me PostgreSQL të menaxhuar:

1. Shtyjeni repo-n në GitHub.
2. Në Render zgjidhni `New +` -> `Blueprint`.
3. Lidhni repo-n dhe Render do të lexojë `render.yaml`.
4. Vendosni vlerat reale për `JWT_SECRET`, `DEFAULT_ADMIN_PASSWORD` dhe, nëse doni, `DEFAULT_ADMIN_EMAIL`.
5. Pas deploy, hapni linkun live që Render gjeneron.

Shënim: në prodhim cookie-t e sesionit dalin automatikisht `Secure`, prandaj aplikacioni duhet të hapet me `https`.

Për hoste që japin vetëm static hosting si GitHub Pages, backend-i nuk mund të ekzekutohet. GitHub Pages mund të përdoret vetëm për UI statike, jo për funksionet reale të aplikimit.

## Struktura kryesore

```text
QPR/
├── frontend/
│   ├── index.html
│   ├── applicant-dashboard.html
│   ├── qpr-dashboard.html
│   ├── form-*.html
│   ├── form-ushtar.js
│   ├── script.js
│   └── api-client.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── database/
│   ├── schema.sql
│   └── backend-data/
└── README.md
```

## Shënime operative

- Të dhënat ruhen në PostgreSQL.
- `database/backend-data/db.json` përdoret vetëm si burim migrimi një herë nëse ekziston dhe databaza është bosh.
- PDF-të vazhdojnë të gjenerohen në browser, jo në server.
- Në prodhim duhet të përdoret një `JWT_SECRET` i personalizuar.
- Për backup përdorni dump të PostgreSQL, jo kopjim të skedarëve statikë.

