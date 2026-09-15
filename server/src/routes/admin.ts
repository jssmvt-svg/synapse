import { Router } from "express";
import { db } from "../db.js";
import { sendEmailOnce, accessGrantedEmailHtml } from "../email.js";
import { effectiveSubscriptionStatus } from "../studyAccessPolicy.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

export const adminRouter = Router();
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
adminRouter.get("/students", async (_req, res) => {
  const students = await db
    .prepare(
      `SELECT id, email, first_name, last_name, country_code, phone, track, subscription_status,
              trial_started_at, trial_ends_at, trial_used, access_requested_at,
              access_processed_at, access_revoked_at, created_at
       FROM users WHERE role = 'student' ORDER BY created_at DESC`,
    )
    .all();
  const withEffectiveStatus = (students as any[]).map((student) => ({
    ...student,
    effective_status: effectiveSubscriptionStatus(student.subscription_status, student.trial_ends_at),
  }));
  res.json({ total: withEffectiveStatus.length, students: withEffectiveStatus });
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

adminRouter.post("/students/:id/trial", async (req: AuthedRequest, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });
  const student = await db
    .prepare(
      `SELECT id, email, first_name, role, subscription_status, trial_used, access_requested_at
       FROM users WHERE id = ?`,
    )
    .get(userId);
  if (!student) return res.status(404).json({ error: "Etudiant introuvable." });
  if (student.role !== "student") return res.status(400).json({ error: "Le compte cible n'est pas un etudiant." });
  if (student.subscription_status === "active") {
    return res.status(409).json({ error: "Cet etudiant possede deja un abonnement actif." });
  }
  if (student.trial_used) {
    return res.status(409).json({ error: "L'essai gratuit de cet etudiant a deja ete utilise." });
  }
  if (!student.access_requested_at) {
    return res.status(409).json({ error: "Cet etudiant n'a pas demande d'essai gratuit." });
  }

  const trialStartedAt = Date.now();
  const trialEndsAt = trialStartedAt + 48 * 60 * 60 * 1000;
  const approval = await db
    .prepare(
      `UPDATE users
       SET subscription_status = 'trialing', trial_started_at = ?, trial_ends_at = ?,
           trial_used = TRUE, access_processed_at = ?, access_revoked_at = NULL,
           access_granted_by = ?
       WHERE id = ? AND trial_used = FALSE AND access_requested_at IS NOT NULL`,
    )
    .run(trialStartedAt, trialEndsAt, trialStartedAt, req.userId, userId);
  if (approval.rowCount !== 1) {
    return res.status(409).json({ error: "L'essai gratuit a deja ete traite." });
  }

  void sendEmailOnce(
    `trial-granted:${userId}`,
    student.email,
    "Ton acces Synapse est ouvert",
    accessGrantedEmailHtml(student.first_name || "", trialEndsAt),
  );

  res.json({ ok: true, trialEndsAt });
});

adminRouter.post("/students/:id/revoke", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });
  const student = await db.prepare("SELECT id, subscription_status FROM users WHERE id = ? AND role = 'student'").get(userId);
  if (!student) return res.status(404).json({ error: "Etudiant introuvable." });
  if (student.subscription_status === "active") {
    return res.status(409).json({ error: "Un abonnement payant doit etre gere depuis Stripe." });
  }

  const revokedAt = Date.now();
  await db
    .prepare(
      `UPDATE users
       SET subscription_status = 'inactive', trial_ends_at = NULL, access_requested_at = NULL,
           access_processed_at = ?, access_revoked_at = ?
       WHERE id = ?`,
    )
    .run(revokedAt, revokedAt, userId);

  res.json({ ok: true });
});
