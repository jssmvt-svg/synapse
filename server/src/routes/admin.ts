import { Router } from "express";
import { db } from "../db.js";
import { buildReengagementEmail, sendReengagementEmail, sendTrialGrantedEmail } from "../email.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";
import { TRIAL_DURATION_MS } from "../studyAccessPolicy.js";

export const adminRouter = Router();

const DAY_MS = 24 * 60 * 60 * 1000;
adminRouter.use(authMiddleware);

async function isAdmin(userId: number | undefined): Promise<boolean> {
  if (!userId) return false;
  const user = await db.prepare("SELECT role FROM users WHERE id = ?").get(userId);
  return user?.role === "admin";
}

adminRouter.use(async (req: AuthedRequest, res, next) => {
  if (!(await isAdmin(req.userId))) return res.status(403).json({ error: "Accès administrateur requis." });
  next();
});

adminRouter.get("/semesters", async (_req, res) => {
  const semesters = await db
    .prepare(
      `SELECT id, year_number, semester_number, title_fr, title_en, description_fr, description_en, is_published
       FROM study_semesters WHERE year_number = 1 ORDER BY semester_number ASC`,
    )
    .all();
  res.json(semesters);
});

adminRouter.patch("/semesters/:number", async (req, res) => {
  const semesterNumber = Number(req.params.number);
  const isPublished = req.body?.isPublished;
  if (!Number.isInteger(semesterNumber) || ![1, 2].includes(semesterNumber) || typeof isPublished !== "boolean") {
    return res.status(400).json({ error: "Semestre ou état de publication invalide." });
  }
  const updated = await db
    .prepare(
      `UPDATE study_semesters SET is_published = ?
       WHERE year_number = 1 AND semester_number = ?
       RETURNING id, year_number, semester_number, title_fr, title_en, description_fr, description_en, is_published`,
    )
    .get(isPublished, semesterNumber);
  if (!updated) return res.status(404).json({ error: "Semestre introuvable." });
  res.json(updated);
});
adminRouter.get("/users", async (_req, res) => {
  const users = await db
    .prepare(
      `SELECT id, email, first_name, last_name, phone_country_code, phone_number, study_lang, track, role,
              trial_status, trial_requested_at, trial_granted_at, trial_ends_at,
              subscription_status, subscription_period_end, stripe_customer_id, stripe_subscription_id, users.created_at,
              last_seen_at, COALESCE(a.visits_7d, 0) AS visits_7d, COALESCE(a.visits_30d, 0) AS visits_30d
       FROM users
       LEFT JOIN (
         SELECT user_id,
                COUNT(*) FILTER (WHERE created_at >= ?) AS visits_7d,
                COUNT(*) AS visits_30d
         FROM user_activity
         WHERE kind IN ('register', 'login', 'visit') AND created_at >= ?
         GROUP BY user_id
       ) a ON a.user_id = users.id
       ORDER BY users.created_at DESC`,
    )
    .all(Date.now() - 7 * DAY_MS, Date.now() - 30 * DAY_MS);
  // Paiement Stripe : « paid » = abonnement Stripe en cours, « past_due » = échec
  // de prélèvement en cours de relance, « cancelled » = a déjà payé mais n'est
  // plus abonné, « none » = n'a jamais payé (essai ou accès offert).
  const paymentOf = (u: any) => {
    if (u.stripe_subscription_id && u.subscription_status === "active") return "paid";
    if (u.stripe_subscription_id && u.subscription_status === "past_due") return "past_due";
    if (u.stripe_customer_id && u.subscription_status !== "active") return "cancelled";
    return "none";
  };
  res.json(
    users.map((u: any) => ({
      payment: paymentOf(u),
      id: u.id,
      email: u.email,
      firstName: u.first_name,
      lastName: u.last_name,
      phoneCountryCode: u.phone_country_code,
      phoneNumber: u.phone_number,
      studyLang: u.study_lang,
      track: u.track,
      role: u.role,
      trialStatus: u.trial_status,
      trialRequestedAt: u.trial_requested_at,
      trialGrantedAt: u.trial_granted_at,
      trialEndsAt: u.trial_ends_at,
      subscriptionStatus: u.subscription_status,
      subscriptionPeriodEnd: u.subscription_period_end,
      createdAt: u.created_at,
      lastSeenAt: u.last_seen_at,
      visits7d: Number(u.visits_7d),
      visits30d: Number(u.visits_30d),
    })),
  );
});

/** Chiffres d'ensemble : combien d'étudiants sont venus sur 24 h / 7 jours / 30 jours. */
adminRouter.get("/activity/overview", async (_req, res) => {
  const now = Date.now();
  const row = await db
    .prepare(
      `SELECT
         COUNT(DISTINCT a.user_id) FILTER (WHERE a.created_at >= ?) AS active_today,
         COUNT(DISTINCT a.user_id) FILTER (WHERE a.created_at >= ?) AS active_7d,
         COUNT(DISTINCT a.user_id) AS active_30d,
         COUNT(*) FILTER (WHERE a.kind IN ('register', 'login', 'visit') AND a.created_at >= ?) AS visits_today,
         COUNT(*) FILTER (WHERE a.kind IN ('register', 'login', 'visit') AND a.created_at >= ?) AS visits_7d,
         COUNT(*) FILTER (WHERE a.kind = 'page' AND a.created_at >= ?) AS pages_7d
       FROM user_activity a
       JOIN users u ON u.id = a.user_id AND u.role = 'student'
       WHERE a.created_at >= ?`,
    )
    .get(
      now - DAY_MS,
      now - 7 * DAY_MS,
      now - DAY_MS,
      now - 7 * DAY_MS,
      now - 7 * DAY_MS,
      now - 30 * DAY_MS,
    );
  res.json({
    activeToday: Number(row?.active_today ?? 0),
    active7d: Number(row?.active_7d ?? 0),
    active30d: Number(row?.active_30d ?? 0),
    visitsToday: Number(row?.visits_today ?? 0),
    visits7d: Number(row?.visits_7d ?? 0),
    pages7d: Number(row?.pages_7d ?? 0),
  });
});

/** Fiche d'activité d'un étudiant : connexions, pages vues et travail réalisé. */
adminRouter.get("/users/:id/activity", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });
  const user = await db.prepare("SELECT id, last_seen_at FROM users WHERE id = ?").get(userId);
  if (!user) return res.status(404).json({ error: "Étudiant introuvable." });

  const now = Date.now();
  const [counts, daily, topPages, recent, qcm, exams, courses, flashcards, duel] = await Promise.all([
    db
      .prepare(
        `SELECT
           COUNT(*) FILTER (WHERE kind IN ('register', 'login', 'visit')) AS visits,
           COUNT(*) FILTER (WHERE kind IN ('register', 'login')) AS logins,
           COUNT(*) FILTER (WHERE kind = 'page') AS pages
         FROM user_activity WHERE user_id = ?`,
      )
      .get(userId),
    db
      .prepare(
        `SELECT (created_at / ?)::bigint AS day, COUNT(*) AS n
         FROM user_activity
         WHERE user_id = ? AND kind IN ('register', 'login', 'visit', 'page') AND created_at >= ?
         GROUP BY day`,
      )
      .all(DAY_MS, userId, now - 14 * DAY_MS),
    db
      .prepare(
        `SELECT path, COUNT(*) AS n, MAX(created_at) AS last_at
         FROM user_activity WHERE user_id = ? AND kind = 'page' AND path IS NOT NULL
         GROUP BY path ORDER BY n DESC, last_at DESC LIMIT 12`,
      )
      .all(userId),
    db
      .prepare(
        `SELECT kind, path, device, created_at FROM user_activity
         WHERE user_id = ? ORDER BY created_at DESC LIMIT 60`,
      )
      .all(userId),
    db
      .prepare(
        `SELECT COUNT(*) AS n, COUNT(*) FILTER (WHERE is_correct) AS correct, MAX(attempted_at) AS last_at
         FROM student_qcm_attempts WHERE user_id = ?`,
      )
      .get(userId),
    db
      .prepare(
        `SELECT COUNT(*) AS n, AVG(score) AS avg_score, MAX(completed_at) AS last_at
         FROM student_exam_attempts WHERE user_id = ?`,
      )
      .get(userId),
    db
      .prepare(
        `SELECT COUNT(*) FILTER (WHERE completed_at IS NOT NULL) AS n, MAX(updated_at) AS last_at
         FROM student_course_progress WHERE user_id = ?`,
      )
      .get(userId),
    db
      .prepare(
        `SELECT COUNT(*) AS n, COALESCE(SUM(review_count), 0) AS reviews, MAX(last_reviewed_at) AS last_at
         FROM student_flashcard_mastery WHERE user_id = ?`,
      )
      .get(userId),
    db.prepare("SELECT wins, losses, draws FROM duel_profiles WHERE user_id = ?").get(userId),
  ]);

  // /library/chapter/:id → titre du chapitre, pour que Jessica lise « Le rein » et pas « /library/chapter/42 ».
  const chapterIds = new Set<number>();
  for (const row of [...topPages, ...recent] as any[]) {
    const match = /^\/library\/chapter\/(\d+)/.exec(row.path ?? "");
    if (match) chapterIds.add(Number(match[1]));
  }
  const chapters = chapterIds.size
    ? await db
        .prepare("SELECT id, matiere, titre_fr, titre_en FROM library_chapters WHERE id = ANY(?::int[])")
        .all([...chapterIds])
    : [];
  const chapterById = new Map(chapters.map((c: any) => [c.id, c]));
  const chapterOf = (path: string | null) => {
    const match = /^\/library\/chapter\/(\d+)/.exec(path ?? "");
    const chapter = match ? chapterById.get(Number(match[1])) : undefined;
    return chapter ? { matiere: chapter.matiere, titleFr: chapter.titre_fr, titleEn: chapter.titre_en } : null;
  };

  res.json({
    lastSeenAt: user.last_seen_at,
    visits: Number(counts?.visits ?? 0),
    logins: Number(counts?.logins ?? 0),
    pageViews: Number(counts?.pages ?? 0),
    daily: (daily as any[]).map((d) => ({ day: Number(d.day) * DAY_MS, count: Number(d.n) })),
    topPages: (topPages as any[]).map((p) => ({ path: p.path, count: Number(p.n), lastAt: p.last_at, chapter: chapterOf(p.path) })),
    recent: (recent as any[]).map((r) => ({ kind: r.kind, path: r.path, device: r.device, at: r.created_at, chapter: chapterOf(r.path) })),
    study: {
      qcm: { count: Number(qcm?.n ?? 0), correct: Number(qcm?.correct ?? 0), lastAt: qcm?.last_at ?? null },
      exams: {
        count: Number(exams?.n ?? 0),
        avgScore: exams?.avg_score == null ? null : Number(exams.avg_score),
        lastAt: exams?.last_at ?? null,
      },
      courses: { completed: Number(courses?.n ?? 0), lastAt: courses?.last_at ?? null },
      flashcards: { cards: Number(flashcards?.n ?? 0), reviews: Number(flashcards?.reviews ?? 0), lastAt: flashcards?.last_at ?? null },
      duel: duel ? { wins: duel.wins, losses: duel.losses, draws: duel.draws } : null,
    },
  });
});

/** Coupe manuellement l'accès d'un étudiant. */
adminRouter.post("/users/:id/revoke", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });
  const student = await db
    .prepare("SELECT id, subscription_status FROM users WHERE id = ? AND role = 'student'")
    .get(userId);
  if (!student) return res.status(404).json({ error: "Étudiant introuvable." });
  await db
    .prepare(
      `UPDATE users
       SET subscription_status = 'inactive', trial_status = 'expired', trial_ends_at = NULL,
           subscription_period_end = NULL
       WHERE id = ?`,
    )
    .run(userId);

  res.json({ ok: true });
});

/**
 * Octroi manuel d'un essai de 8 jours (semestre 1), en plus de l'octroi automatique à l'inscription --
 * utile pour compenser un étudiant après une panne du site, ou prolonger un
 * essai déjà expiré.
 */
adminRouter.post("/users/:id/trial/grant", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });

  const now = Date.now();
  const trialEndsAt = now + TRIAL_DURATION_MS;
  const updated = await db
    .prepare(
      `UPDATE users
       SET trial_status = 'granted',
           trial_granted_at = ?,
           trial_ends_at = ?,
           subscription_status = 'trialing',
           subscription_period_end = ?
       WHERE id = ? AND role = 'student'
       RETURNING id, email, lang_pref, first_name`,
    )
    .get(now, trialEndsAt, trialEndsAt, userId);
  if (!updated) return res.status(404).json({ error: "Étudiant introuvable." });

  sendTrialGrantedEmail(
    { id: updated.id, email: updated.email, langPref: updated.lang_pref, firstName: updated.first_name },
    trialEndsAt,
  );

  res.json({ trialStatus: "granted", trialEndsAt });
});

adminRouter.get("/chapters", async (_req, res) => {
  const chapters = await db
    .prepare(
      `SELECT id, annee, semestre, matiere, titre_fr, titre_en, ordre
       FROM library_chapters WHERE is_active = true AND annee = 1 ORDER BY annee ASC, semestre ASC, matiere ASC, ordre ASC`,
    )
    .all();
  res.json(chapters);
});

adminRouter.get("/students/:id/grants", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });
  const grants = await db
    .prepare("SELECT chapter_id FROM admin_chapter_grants WHERE user_id = ?")
    .all(userId);
  res.json({ chapterIds: grants.map((g: any) => g.chapter_id) });
});

adminRouter.post("/students/:id/grants", async (req: AuthedRequest, res) => {
  const userId = Number(req.params.id);
  const { chapterId, grant } = req.body as { chapterId?: number; grant?: boolean };
  if (!Number.isInteger(userId) || !Number.isInteger(chapterId) || typeof grant !== "boolean") {
    return res.status(400).json({ error: "Requete invalide." });
  }
  const student = await db.prepare("SELECT id FROM users WHERE id = ?").get(userId);
  if (!student) return res.status(404).json({ error: "Etudiant introuvable." });
  if (grant) {
    await db
      .prepare(
        `INSERT INTO admin_chapter_grants (user_id, chapter_id, granted_by, created_at)
         VALUES (?, ?, ?, ?)
         ON CONFLICT (user_id, chapter_id) DO NOTHING`,
      )
      .run(userId, chapterId, req.userId, Date.now());
  } else {
    await db
      .prepare("DELETE FROM admin_chapter_grants WHERE user_id = ? AND chapter_id = ?")
      .run(userId, chapterId);
  }
  res.json({ ok: true });
});

/** Étudiants dont l'essai gratuit est terminé sans abonnement actif : cibles de la relance. */
adminRouter.get("/reengagement/candidates", async (_req, res) => {
  const rows = await db
    .prepare(
      `SELECT id, email, first_name, lang_pref, trial_ends_at
       FROM users
       WHERE role = 'student' AND trial_status = 'expired' AND subscription_status != 'active'
       ORDER BY trial_ends_at DESC NULLS LAST
       LIMIT 200`,
    )
    .all();
  res.json(
    rows.map((u: any) => ({
      id: u.id,
      email: u.email,
      firstName: u.first_name,
      langPref: u.lang_pref,
      trialEndedAt: u.trial_ends_at,
    })),
  );
});

adminRouter.get("/reengagement/preview/:id", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });
  const user = await db
    .prepare("SELECT id, email, lang_pref, first_name FROM users WHERE id = ?")
    .get(userId);
  if (!user) return res.status(404).json({ error: "Étudiant introuvable." });
  const { subject, html } = buildReengagementEmail({
    id: user.id,
    email: user.email,
    langPref: user.lang_pref,
    firstName: user.first_name,
  });
  res.json({ subject, html });
});

adminRouter.post("/reengagement/send/:id", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });
  const user = await db
    .prepare("SELECT id, email, lang_pref, first_name FROM users WHERE id = ? AND role = 'student'")
    .get(userId);
  if (!user) return res.status(404).json({ error: "Étudiant introuvable." });
  sendReengagementEmail({ id: user.id, email: user.email, langPref: user.lang_pref, firstName: user.first_name });
  res.json({ ok: true });
});
