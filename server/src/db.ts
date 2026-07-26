import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required — set it in .env or Replit Secrets");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

function toPositional(sql: string): string {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

function statement(sql: string) {
  const text = toPositional(sql);
  return {
    async get(...params: unknown[]) {
      const result = await pool.query(text, params);
      return result.rows[0] ?? null;
    },
    async all(...params: unknown[]) {
      const result = await pool.query(text, params);
      return result.rows;
    },
    async run(...params: unknown[]) {
      const result = await pool.query(text, params);
      return { rowCount: result.rowCount };
    },
  };
}

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    session_token TEXT,
    lang_pref TEXT NOT NULL DEFAULT 'fr',
    created_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS documents (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    filename TEXT NOT NULL,
    extracted_text TEXT NOT NULL,
    uploaded_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS decks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    document_id INTEGER NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    title_fr TEXT NOT NULL,
    title_en TEXT NOT NULL,
    created_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS flashcards (
    id SERIAL PRIMARY KEY,
    deck_id INTEGER NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
    question_fr TEXT NOT NULL,
    question_en TEXT NOT NULL,
    answer_fr TEXT NOT NULL,
    answer_en TEXT NOT NULL,
    created_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS course_syntheses (
    id SERIAL PRIMARY KEY,
    document_id INTEGER NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    content_fr TEXT NOT NULL,
    content_en TEXT NOT NULL,
    created_at BIGINT NOT NULL
  );
`;

export const db = {
  prepare(sql: string) {
    return statement(sql);
  },
  async init() {
    await pool.query(SCHEMA);
  },
};
