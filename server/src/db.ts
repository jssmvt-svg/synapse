import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required — set it in .env or Replit Secrets");
}

// DATABASE_URL must use the Supabase Transaction Pooler (port 6543,
// host *.pooler.supabase.com). The direct connection host
// (db.*.supabase.co, port 5432) requires IPv6 and will fail on Replit.
// Get the pooler URL from: Supabase dashboard → Connect → Transaction pooler.
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

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000;

export const db = {
  prepare(sql: string) {
    return statement(sql);
  },
  async init() {
    let lastError: unknown;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        await pool.query(SCHEMA);
        if (attempt > 1) {
          console.log(`Database connected successfully on attempt ${attempt}.`);
        }
        return;
      } catch (err) {
        lastError = err;
        const delay = RETRY_DELAY_MS * attempt;
        console.error(
          `Database connection attempt ${attempt}/${MAX_RETRIES} failed. Retrying in ${delay / 1000}s…`,
          err instanceof Error ? err.message : err,
        );
        if (attempt < MAX_RETRIES) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }
    throw lastError;
  },
};
