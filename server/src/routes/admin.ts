import { Router } from "express";
import { db } from "../db.js";
import { buildReengagementEmail, sendReengagementEmail, sendTrialGrantedEmail } from "../email.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

export const adminRouter = Router();
adminRouter.use(authMiddleware);

const TRIAL_DURATION_MS = 48 * 60 * 60 * 1000;

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
      `SELECT id, email, first_name, last_name, phone_country_code, phone_number, track, role,
              trial_status, trial_requested_at, trial_granted_at, trial_ends_at,
              subscription_status, subscription_period_end, created_at
       FROM users ORDER BY created_at DESC`,
    )
    .all();
  res.json(
    users.map((u: any) => ({
      id: u.id,
      email: u.email,
      firstName: u.first_name,
      lastName: u.last_name,
      phoneCountryCode: u.phone_country_code,
      phoneNumber: u.phone_number,
      track: u.track,
      role: u.role,
      trialStatus: u.trial_status,
      trialRequestedAt: u.trial_requested_at,
      trialGrantedAt: u.trial_granted_at,
      trialEndsAt: u.trial_ends_at,
      subscriptionStatus: u.subscription_status,
      subscriptionPeriodEnd: u.subscription_period_end,
      createdAt: u.created_at,
    })),
  );
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
 * Octroi manuel des 48h, en plus de l'octroi automatique à l'inscription --
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
       FROM library_chapters WHERE is_active = true ORDER BY annee ASC, semestre ASC, matiere ASC, ordre ASC`,
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

/** Étudiants dont l'essai 48h est terminé sans abonnement actif : cibles de la relance. */
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
