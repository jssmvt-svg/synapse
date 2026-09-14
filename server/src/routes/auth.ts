import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { publicRegistrationRole } from "../authPolicy.js";
import { db } from "../db.js";
import { sendEmail, welcomeEmailHtml } from "../email.js";
import { authMiddleware, signSession, type AuthedRequest } from "../middleware/auth.js";
import { effectiveSubscriptionStatus } from "../studyAccessPolicy.js";

export const authRouter = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

function isStrongPassword(password: string): boolean {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}

authRouter.post("/register", authLimiter, async (req, res) => {
  const { firstName, lastName, email, password, phone, track, langPref } = req.body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    track?: string;
    langPref?: string;
  };

  const cleanFirstName = firstName?.trim();
  const cleanLastName = lastName?.trim();
  const cleanPhone = phone?.trim();
  const cleanTrack = track === "dentaire" || track === "medecine" ? track : undefined;

  if (!cleanFirstName || !cleanLastName) {
    return res.status(400).json({ error: "Nom et prenom requis" });
  }
  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis" });
  }
  if (!isStrongPassword(password)) {
    return res.status(400).json({
      error: "Le mot de passe doit contenir au moins 8 caracteres, une majuscule et un chiffre",
    });
  }
  if (!cleanPhone) {
    return res.status(400).json({ error: "Numero de telephone requis" });
  }
  if (!cleanTrack) {
    return res.status(400).json({ error: "Filiere requise (dentaire ou medecine)" });
  }

  const existing = await db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existing) {
    return res.status(409).json({ error: "Un compte existe déjà avec cet email" });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const sessionToken = randomUUID();
  const lang = langPref === "en" ? "en" : "fr";
  const role = publicRegistrationRole();

  const inserted = await db
    .prepare(
      `INSERT INTO users (email, password_hash, session_token, lang_pref, role, first_name, last_name, phone, track, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
    )
    .get(email, passwordHash, sessionToken, lang, role, cleanFirstName, cleanLastName, cleanPhone, cleanTrack, Date.now());

  void sendEmail(email, "Bienvenue sur Synapse", welcomeEmailHtml(cleanFirstName));

  const token = signSession(inserted.id, sessionToken);
  res.status(201).json({
    token,
    user: {
      id: inserted.id,
      email,
      langPref: lang,
      role,
      firstName: cleanFirstName,
      lastName: cleanLastName,
      track: cleanTrack,
    },
  });
});

authRouter.post("/login", authLimiter, async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis" });
  }

  const user = await db
    .prepare("SELECT id, password_hash, lang_pref, role FROM users WHERE email = ?")
    .get(email);

  const valid = user ? await bcrypt.compare(password, user.password_hash) : false;
  if (!user || !valid) {
    return res.status(401).json({ error: "Email ou mot de passe incorrect" });
  }

  const sessionToken = randomUUID();
  await db.prepare("UPDATE users SET session_token = ? WHERE id = ?").run(sessionToken, user.id);

  const token = signSession(user.id, sessionToken);
  res.json({ token, user: { id: user.id, email, langPref: user.lang_pref, role: user.role } });
});

authRouter.get("/me", authMiddleware, async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      `SELECT id, email, lang_pref, role, first_name, last_name, track,
              subscription_status, trial_ends_at, access_requested_at
       FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) {
    return res.status(404).json({ error: "Utilisateur introuvable" });
  }
  res.json({
    id: user.id,
    email: user.email,
    langPref: user.lang_pref,
    role: user.role,
    firstName: user.first_name,
    lastName: user.last_name,
    track: user.track,
    subscriptionStatus: effectiveSubscriptionStatus(user.subscription_status, user.trial_ends_at),
    trialEndsAt: user.trial_ends_at,
    accessRequestedAt: user.access_requested_at,
  });
});

authRouter.patch("/lang", authMiddleware, async (req: AuthedRequest, res) => {
  const { langPref } = req.body as { langPref?: string };
  if (langPref !== "fr" && langPref !== "en") {
    return res.status(400).json({ error: "langPref doit être 'fr' ou 'en'" });
  }
  await db.prepare("UPDATE users SET lang_pref = ? WHERE id = ?").run(langPref, req.userId);
  res.json({ langPref });
});

authRouter.post("/request-access", authMiddleware, async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      `SELECT subscription_status, trial_ends_at, access_requested_at FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });

  const effectiveStatus = effectiveSubscriptionStatus(user.subscription_status, user.trial_ends_at);
  if (effectiveStatus === "active" || effectiveStatus === "trialing") {
    return res.json({ accessRequestedAt: user.access_requested_at, alreadyActive: true });
  }
  if (user.access_requested_at) {
    return res.json({ accessRequestedAt: user.access_requested_at, alreadyActive: false });
  }

  const now = Date.now();
  await db.prepare("UPDATE users SET access_requested_at = ? WHERE id = ?").run(now, req.userId);
  res.json({ accessRequestedAt: now, alreadyActive: false });
});
