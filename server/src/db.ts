import pg from "pg";

const { Pool, types } = pg;

// node-postgres renvoie les colonnes BIGINT sous forme de chaînes par défaut
// (pour ne jamais perdre de précision au-delà de Number.MAX_SAFE_INTEGER).
// Tous nos BIGINT stockent des timestamps epoch en millisecondes — largement
// dans la plage sûre — donc on les récupère directement en nombres : sinon
// `new Date(valeur)` échoue silencieusement ("Invalid Date") côté client.
types.setTypeParser(20, (value: string) => parseInt(value, 10));

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
  connectionTimeoutMillis: 10_000,
  query_timeout: 15_000,
});

const DATABASE_CONNECTION_ERROR_CODES = new Set([
  "08000",
  "08001",
  "08003",
  "08004",
  "08006",
  "08007",
  "08P01",
  "57P01",
  "57P02",
  "57P03",
  "53300",
  "53400",
  "ECONNREFUSED",
  "ECONNRESET",
  "EAI_AGAIN",
  "ENETUNREACH",
  "ETIMEDOUT",
]);

type QueryExecutor = (
  text: string,
  params: unknown[],
) => Promise<{ rows: any[]; rowCount: number | null }>;

export type DatabaseExecutor = {
  prepare(sql: string): {
    get(...params: unknown[]): Promise<any>;
    all(...params: unknown[]): Promise<any[]>;
    run(...params: unknown[]): Promise<{ rowCount: number | null }>;
  };
};

function toPositional(sql: string): string {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

function statement(
  sql: string,
  execute: QueryExecutor = (text, params) => pool.query(text, params),
) {
  const text = toPositional(sql);
  return {
    async get(...params: unknown[]) {
      let result;
      try {
        result = await execute(text, params);
      } catch (error) {
        if (isConnectionError(error)) {
          throw new DatabaseUnavailableError(error);
        }
        throw error;
      }
      return result.rows[0] ?? null;
    },
    async all(...params: unknown[]) {
      let result;
      try {
        result = await execute(text, params);
      } catch (error) {
        if (isConnectionError(error)) {
          throw new DatabaseUnavailableError(error);
        }
        throw error;
      }
      return result.rows;
    },
    async run(...params: unknown[]) {
      let result;
      try {
        result = await execute(text, params);
      } catch (error) {
        if (isConnectionError(error)) {
          throw new DatabaseUnavailableError(error);
        }
        throw error;
      }
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
    role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
    first_name TEXT NOT NULL DEFAULT '',
    last_name TEXT NOT NULL DEFAULT '',
    phone_country_code TEXT,
    phone_number TEXT,
    track TEXT CHECK (track IN ('medecine', 'dentaire')),
    -- Essai gratuit de 48h : jamais auto-accordé à l'inscription — l'étudiant
    -- doit explicitement le demander, puis Jessica valide depuis /admin.
    trial_status TEXT NOT NULL DEFAULT 'none' CHECK (trial_status IN ('none', 'requested', 'granted', 'expired', 'denied')),
    trial_requested_at BIGINT,
    trial_granted_at BIGINT,
    trial_ends_at BIGINT,
    subscription_status TEXT NOT NULL DEFAULT 'inactive',
    subscription_period_end BIGINT,
    pending_checkout_key TEXT,
    pending_checkout_expires_at BIGINT,
    created_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS email_deliveries (
    dedupe_key TEXT PRIMARY KEY,
    recipient TEXT NOT NULL,
    subject TEXT NOT NULL,
    html TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent')),
    attempts INTEGER NOT NULL DEFAULT 0,
    last_attempt_at BIGINT,
    sent_at BIGINT
  );

  CREATE TABLE IF NOT EXISTS study_semesters (
    id SERIAL PRIMARY KEY,
    year_number INTEGER NOT NULL,
    semester_number INTEGER NOT NULL CHECK (semester_number IN (1, 2)),
    title_fr TEXT NOT NULL,
    title_en TEXT NOT NULL,
    description_fr TEXT NOT NULL,
    description_en TEXT NOT NULL,
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE (year_number, semester_number)
  );

  INSERT INTO study_semesters (
    year_number, semester_number, title_fr, title_en, description_fr, description_en, is_published
  ) VALUES
    (
      1, 1, 'Semestre 1', 'Semester 1',
      'Découvre les fondations médicales et les premières matières de la première année.',
      'Discover the medical foundations and the first subjects of year one.',
      TRUE
    ),
    (
      1, 2, 'Semestre 2', 'Semester 2',
      'Poursuis ton parcours avec les contenus, révisions et entraînements du second semestre.',
      'Continue your path with second-semester courses, revisions, and practice.',
      FALSE
    )
  ON CONFLICT (year_number, semester_number) DO NOTHING;

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

  -- Bibliothèque de contenu officiel (pré-rédigé), distincte des documents
  -- uploadés par les utilisateurs. Organisée annee > semestre > matiere >
  -- chapitre, sur le modèle dénormalisé utilisé par Medbyjes (grille_chapitres) :
  -- pas de tables de lookup séparées pour annee/semestre/matiere, ce sont de
  -- simples colonnes portées par le chapitre.
  CREATE TABLE IF NOT EXISTS library_chapters (
    id SERIAL PRIMARY KEY,
    annee INTEGER NOT NULL,
    semestre INTEGER NOT NULL,
    matiere TEXT NOT NULL,
    ordre INTEGER NOT NULL DEFAULT 0,
    titre_fr TEXT NOT NULL,
    titre_en TEXT NOT NULL,
    description_fr TEXT NOT NULL DEFAULT '',
    description_en TEXT NOT NULL DEFAULT '',
    icone TEXT NOT NULL DEFAULT '',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at BIGINT NOT NULL,
    UNIQUE (annee, semestre, matiere, ordre)
  );

  CREATE TABLE IF NOT EXISTS library_flashcards (
    id SERIAL PRIMARY KEY,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    ordre INTEGER NOT NULL DEFAULT 0,
    question_fr TEXT NOT NULL,
    question_en TEXT NOT NULL,
    answer_fr TEXT NOT NULL,
    answer_en TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at BIGINT NOT NULL,
    CONSTRAINT library_flashcards_chapter_ordre_key UNIQUE (chapter_id, ordre)
  );

  -- Ressources de cours officielles. Le contenu français est toujours stocké
  -- séparément : l'interface peut être en anglais sans jamais masquer la
  -- source pédagogique fournie en français.
  CREATE TABLE IF NOT EXISTS library_course_resources (
    id SERIAL PRIMARY KEY,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    ordre INTEGER NOT NULL DEFAULT 0,
    resource_type TEXT NOT NULL CHECK (resource_type IN ('course', 'revision')),
    titre_fr TEXT NOT NULL,
    titre_en TEXT NOT NULL DEFAULT '',
    content_fr TEXT NOT NULL,
    content_en TEXT NOT NULL DEFAULT '',
    source_label TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at BIGINT NOT NULL,
    UNIQUE (chapter_id, resource_type)
  );

  CREATE TABLE IF NOT EXISTS library_qcm_questions (
    id SERIAL PRIMARY KEY,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    resource_id INTEGER REFERENCES library_course_resources(id) ON DELETE SET NULL,
    ordre INTEGER NOT NULL,
    prompt_fr TEXT NOT NULL,
    prompt_en TEXT NOT NULL DEFAULT '',
    explanation_fr TEXT NOT NULL,
    explanation_en TEXT NOT NULL DEFAULT '',
    multiple_answers BOOLEAN NOT NULL DEFAULT FALSE,
    source_label TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at BIGINT NOT NULL,
    UNIQUE (chapter_id, ordre)
  );

  CREATE TABLE IF NOT EXISTS library_qcm_options (
    id SERIAL PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES library_qcm_questions(id) ON DELETE CASCADE,
    option_key TEXT NOT NULL,
    label_fr TEXT NOT NULL,
    label_en TEXT NOT NULL DEFAULT '',
    is_correct BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at BIGINT NOT NULL,
    UNIQUE (question_id, option_key)
  );

  -- Une configuration d'examen référence les QCM du chapitre par ordre.
  -- La liste JSON conserve la configuration sans dupliquer les questions.
  CREATE TABLE IF NOT EXISTS library_chapter_exams (
    id SERIAL PRIMARY KEY,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    titre_fr TEXT NOT NULL,
    titre_en TEXT NOT NULL DEFAULT '',
    duration_seconds INTEGER NOT NULL CHECK (duration_seconds > 0),
    question_count INTEGER NOT NULL CHECK (question_count > 0),
    question_orders TEXT NOT NULL,
    source_label TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at BIGINT NOT NULL,
    UNIQUE (chapter_id, titre_fr)
  );

  CREATE TABLE IF NOT EXISTS student_course_progress (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    resource_id INTEGER NOT NULL REFERENCES library_course_resources(id) ON DELETE CASCADE,
    completed_at BIGINT,
    updated_at BIGINT NOT NULL,
    PRIMARY KEY (user_id, resource_id)
  );

  CREATE TABLE IF NOT EXISTS student_flashcard_mastery (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    flashcard_id INTEGER NOT NULL REFERENCES library_flashcards(id) ON DELETE CASCADE,
    mastery INTEGER NOT NULL DEFAULT 0 CHECK (mastery BETWEEN 0 AND 5),
    review_count INTEGER NOT NULL DEFAULT 0,
    last_reviewed_at BIGINT NOT NULL,
    PRIMARY KEY (user_id, flashcard_id)
  );

  -- Cartes strictement personnelles : elles ne partagent jamais les tables
  -- officielles de bibliothèque, même lorsque leur état de révision est similaire.
  CREATE TABLE IF NOT EXISTS user_flashcards (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER REFERENCES library_chapters(id) ON DELETE SET NULL,
    notion_slug TEXT,
    front TEXT NOT NULL,
    back TEXT NOT NULL,
    front_key TEXT NOT NULL,
    source TEXT NOT NULL DEFAULT 'ai_import' CHECK (source IN ('ai_import', 'manual')),
    source_model TEXT,
    status TEXT NOT NULL DEFAULT 'private' CHECK (status IN ('private', 'proposed')),
    created_at BIGINT NOT NULL,
    UNIQUE (user_id, chapter_id, front_key)
  );

  CREATE INDEX IF NOT EXISTS user_flashcards_user_chapter_idx
    ON user_flashcards (user_id, chapter_id);
  CREATE INDEX IF NOT EXISTS user_flashcards_user_notion_idx
    ON user_flashcards (user_id, notion_slug);

  CREATE TABLE IF NOT EXISTS student_personal_flashcard_mastery (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    user_flashcard_id INTEGER NOT NULL REFERENCES user_flashcards(id) ON DELETE CASCADE,
    mastery INTEGER NOT NULL DEFAULT 0 CHECK (mastery BETWEEN 0 AND 5),
    review_count INTEGER NOT NULL DEFAULT 0,
    last_reviewed_at BIGINT NOT NULL,
    PRIMARY KEY (user_id, user_flashcard_id)
  );

  -- Un import doit obligatoirement être analysé avant de pouvoir être sauvegardé.
  CREATE TABLE IF NOT EXISTS personal_deck_previews (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    expires_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS student_qcm_attempts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    question_id INTEGER NOT NULL REFERENCES library_qcm_questions(id) ON DELETE CASCADE,
    selected_option_keys TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    score NUMERIC(5,2) NOT NULL,
    attempted_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS student_exam_attempts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    exam_id INTEGER NOT NULL REFERENCES library_chapter_exams(id) ON DELETE CASCADE,
    answers_json TEXT NOT NULL,
    score NUMERIC(5,2) NOT NULL,
    started_at BIGINT NOT NULL,
    completed_at BIGINT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS student_exam_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    exam_id INTEGER NOT NULL REFERENCES library_chapter_exams(id) ON DELETE CASCADE,
    started_at BIGINT NOT NULL,
    expires_at BIGINT NOT NULL,
    submitted_at BIGINT
  );

  WITH ranked_exam_sessions AS (
    SELECT
      id,
      expires_at,
      ROW_NUMBER() OVER (
        PARTITION BY user_id, chapter_id, exam_id
        ORDER BY
          CASE
            WHEN expires_at > (EXTRACT(EPOCH FROM clock_timestamp()) * 1000)::BIGINT THEN 0
            ELSE 1
          END,
          started_at DESC
      ) AS session_rank
    FROM student_exam_sessions
    WHERE submitted_at IS NULL
  )
  UPDATE student_exam_sessions AS session
  SET submitted_at = LEAST(
    session.expires_at,
    (EXTRACT(EPOCH FROM clock_timestamp()) * 1000)::BIGINT
  )
  FROM ranked_exam_sessions AS ranked
  WHERE session.id = ranked.id
    AND (
      ranked.session_rank > 1
      OR session.expires_at <= (EXTRACT(EPOCH FROM clock_timestamp()) * 1000)::BIGINT
    );

  CREATE UNIQUE INDEX IF NOT EXISTS student_exam_sessions_one_active_per_exam
    ON student_exam_sessions (user_id, chapter_id, exam_id)
    WHERE submitted_at IS NULL;

  ALTER TABLE library_chapters ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;
  ALTER TABLE library_chapters ADD COLUMN IF NOT EXISTS widget_key TEXT;
  ALTER TABLE library_chapters ADD COLUMN IF NOT EXISTS section TEXT NOT NULL DEFAULT 'cours';
  ALTER TABLE library_flashcards ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;
  ALTER TABLE library_flashcards ADD COLUMN IF NOT EXISTS visual_key TEXT;
  ALTER TABLE library_qcm_questions ADD COLUMN IF NOT EXISTS visual_key TEXT;
  ALTER TABLE library_course_resources ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;
  ALTER TABLE library_qcm_questions ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;
  ALTER TABLE library_qcm_options ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;
  ALTER TABLE library_chapter_exams ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'student';
  ALTER TABLE users ADD COLUMN IF NOT EXISTS first_name TEXT NOT NULL DEFAULT '';
  ALTER TABLE users ADD COLUMN IF NOT EXISTS last_name TEXT NOT NULL DEFAULT '';
  ALTER TABLE users ADD COLUMN IF NOT EXISTS phone_country_code TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS phone_number TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS track TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_status TEXT NOT NULL DEFAULT 'none';
  ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_requested_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_granted_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_ends_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_status TEXT NOT NULL DEFAULT 'inactive';
  ALTER TABLE users ADD COLUMN IF NOT EXISTS first_name TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS last_name TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS country_code TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS phone TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS track TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS access_requested_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS access_processed_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_started_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_ends_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_used BOOLEAN NOT NULL DEFAULT FALSE;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS access_revoked_at BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS access_granted_by INTEGER REFERENCES users(id);
  UPDATE users
  SET trial_used = TRUE
  WHERE trial_used = FALSE
    AND (trial_ends_at IS NOT NULL OR access_granted_by IS NOT NULL OR subscription_status = 'trialing');
  ALTER TABLE email_deliveries ADD COLUMN IF NOT EXISTS html TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_period_end BIGINT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS pending_checkout_key TEXT;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS pending_checkout_expires_at BIGINT;

  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_constraint WHERE conname = 'library_flashcards_chapter_ordre_key'
    ) THEN
      ALTER TABLE library_flashcards
        ADD CONSTRAINT library_flashcards_chapter_ordre_key UNIQUE (chapter_id, ordre);
    END IF;
  END $$;

  -- Les inscriptions/connexions comparaient l'email tel quel : "Marie@Gmail.com"
  -- et "marie@gmail.com" créaient deux comptes distincts, l'un pouvant recevoir
  -- un accès (essai 48h, abonnement) que l'autre ne voit jamais. On uniformise
  -- ici les emails déjà en base — en sautant toute paire qui entrerait en
  -- collision, pour ne jamais fusionner deux comptes sans validation humaine.
  UPDATE users AS u
  SET email = lower(trim(u.email))
  WHERE lower(trim(u.email)) <> u.email
    AND NOT EXISTS (
      SELECT 1 FROM users AS u2
      WHERE u2.id <> u.id AND lower(trim(u2.email)) = lower(trim(u.email))
    );

  DO $$
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'users_track_check') THEN
      ALTER TABLE users ADD CONSTRAINT users_track_check CHECK (track IN ('medecine', 'dentaire'));
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'users_trial_status_check') THEN
      ALTER TABLE users ADD CONSTRAINT users_trial_status_check
        CHECK (trial_status IN ('none', 'requested', 'granted', 'expired', 'denied'));
    END IF;
  END $$;

  -- Octroi manuel, chapitre par chapitre, en plus de l'essai/abonnement standard
  -- (ex : donner ponctuellement accès à un contenu hors du cadre habituel).
  CREATE TABLE IF NOT EXISTS admin_chapter_grants (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES library_chapters(id) ON DELETE CASCADE,
    granted_by INTEGER REFERENCES users(id),
    created_at BIGINT NOT NULL,
    UNIQUE(user_id, chapter_id)
  );

  -- Progression du duel en arène : XP, or et bilan des matchs.
  CREATE TABLE IF NOT EXISTS duel_profiles (
    user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    xp INTEGER NOT NULL DEFAULT 0,
    gold INTEGER NOT NULL DEFAULT 0,
    wins INTEGER NOT NULL DEFAULT 0,
    losses INTEGER NOT NULL DEFAULT 0,
    draws INTEGER NOT NULL DEFAULT 0,
    updated_at BIGINT NOT NULL
  );
`;

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000;

export const db = {
  prepare(sql: string) {
    return statement(sql);
  },
  async checkHealth() {
    try {
      await pool.query("SELECT 1");
      return true;
    } catch (error) {
      if (isConnectionError(error)) {
        throw new DatabaseUnavailableError(error);
      }
      throw error;
    }
  },
  async transaction<T>(work: (transaction: DatabaseExecutor) => Promise<T>): Promise<T> {
    const client = await pool.connect();
    const transaction: DatabaseExecutor = {
      prepare(sql: string) {
        return statement(sql, (text, params) => client.query(text, params));
      },
    };
    try {
      await client.query("BEGIN");
      const result = await work(transaction);
      await client.query("COMMIT");
      return result;
    } catch (error) {
      try {
        await client.query("ROLLBACK");
      } catch (rollbackError) {
        console.error("Database rollback failed.", rollbackError);
      }
      throw error;
    } finally {
      client.release();
    }
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

function isConnectionError(error: unknown): boolean {
  const code = errorCode(error);
  if (code && DATABASE_CONNECTION_ERROR_CODES.has(code)) {
    return true;
  }

  return /(?:connection|connect|socket|network|timeout|unreachable|terminat)/i.test(
    errorMessage(error),
  );
}

export class DatabaseUnavailableError extends Error {
  constructor(cause: unknown) {
    super("The database is currently unavailable", { cause });
    this.name = "DatabaseUnavailableError";
  }
}

export function isDatabaseUnavailableError(error: unknown): boolean {
  return error instanceof DatabaseUnavailableError || isConnectionError(error);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function errorCode(error: unknown): string | undefined {
  if (typeof error !== "object" || error === null || !("code" in error)) {
    return undefined;
  }
  const code = (error as { code?: unknown }).code;
  return typeof code === "string" ? code : undefined;
}

pool.on("error", (error) => {
  console.error(
    "Unexpected PostgreSQL pool error. Database requests may be temporarily unavailable.",
    error,
  );
});
