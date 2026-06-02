CREATE TABLE IF NOT EXISTS users (
    email TEXT PRIMARY KEY,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS admins (
    email TEXT PRIMARY KEY,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS applications (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    email TEXT NOT NULL REFERENCES users(email) ON DELETE CASCADE,
    submitted_date TEXT NOT NULL,
    status TEXT NOT NULL,
    personal_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    education_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    preferred_unit TEXT NOT NULL DEFAULT '',
    motivation TEXT NOT NULL DEFAULT '',
    signature TEXT NOT NULL DEFAULT '',
    form_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    documents JSONB NOT NULL DEFAULT '[]'::jsonb,
    comments TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

CREATE TABLE IF NOT EXISTS benefits (
    sort_order INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    items JSONB NOT NULL DEFAULT '[]'::jsonb
);