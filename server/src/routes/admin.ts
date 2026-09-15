import { Router } from "express";
import { db } from "../db.js";
import { sendTrialDeniedEmail, sendTrialGrantedEmail } from "../email.js";
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
       WHERE id = ?
       RETURNING id, email, lang_pref, first_name`,
    )
    .get(now, trialEndsAt, trialEndsAt, userId);
  if (!updated) return res.status(404).json({ error: "Utilisateur introuvable." });

  sendTrialGrantedEmail(
    { email: updated.email, langPref: updated.lang_pref, firstName: updated.first_name },
    trialEndsAt,
  );

  res.json({ trialStatus: "granted", trialEndsAt });
});

adminRouter.post("/users/:id/trial/deny", async (req, res) => {
  const userId = Number(req.params.id);
  if (!Number.isInteger(userId)) return res.status(400).json({ error: "Identifiant invalide." });

  const updated = await db
    .prepare(
      `UPDATE users SET trial_status = 'denied' WHERE id = ?
       RETURNING id, email, lang_pref, first_name`,
    )
    .get(userId);
  if (!updated) return res.status(404).json({ error: "Utilisateur introuvable." });

  sendTrialDeniedEmail({ email: updated.email, langPref: updated.lang_pref, firstName: updated.first_name });

  res.json({ trialStatus: "denied" });
});
