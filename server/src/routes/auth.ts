import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { publicRegistrationRole } from "../authPolicy.js";
import { db } from "../db.js";
import { sendWelcomeEmail } from "../email.js";
import { authMiddleware, signSession, type AuthedRequest } from "../middleware/auth.js";
import {
  isPasswordStrongEnough,
  isValidEmail,
  isValidPhoneCountryCode,
  isValidPhoneNumber,
  isValidTrack,
  normalizeEmail,
  normalizeName,
} from "../validation.js";
import { TRIAL_DURATION_MS } from "../studyAccessPolicy.js";
import { recordActivity, touchUser } from "../activity.js";

const SUPPORTED_LANGS = ["fr", "en", "ar", "it"] as const;
const isSupportedLang = (value: unknown): value is (typeof SUPPORTED_LANGS)[number] => SUPPORTED_LANGS.some((lang) => lang === value);
const normalizeLang = (value: unknown) => (isSupportedLang(value) ? value : "fr");

export const authRouter = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

// Hash bcrypt factice : comparé quand l'email n'existe pas, pour que le temps de
// réponse ne révèle pas quelles adresses ont un compte.
const DUMMY_PASSWORD_HASH = bcrypt.hashSync(randomUUID(), 12);

// Verrouillage par adresse, en plus de la limite par IP : 8 mots de passe faux
// en 15 min bloquent cette adresse 15 min, même si l'attaquant change d'IP.
const LOGIN_FAILURE_WINDOW_MS = 15 * 60 * 1000;
const MAX_LOGIN_FAILURES = 8;
const loginFailures = new Map<string, { count: number; firstAt: number }>();

function isEmailLocked(email: string, now: number): boolean {
  const entry = loginFailures.get(email);
  if (!entry) return false;
  if (now - entry.firstAt > LOGIN_FAILURE_WINDOW_MS) {
    loginFailures.delete(email);
    return false;
  }
  return entry.count >= MAX_LOGIN_FAILURES;
}

function noteLoginFailure(email: string, now: number): void {
  const entry = loginFailures.get(email);
  if (!entry || now - entry.firstAt > LOGIN_FAILURE_WINDOW_MS) {
    loginFailures.set(email, { count: 1, firstAt: now });
  } else {
    entry.count += 1;
  }
  if (loginFailures.size > 10_000) {
    for (const [key, value] of loginFailures) {
      if (now - value.firstAt > LOGIN_FAILURE_WINDOW_MS) loginFailures.delete(key);
    }
  }
}

authRouter.post("/register", authLimiter, async (req, res) => {
  const {
    email,
    password,
    langPref,
    firstName,
    lastName,
    phoneCountryCode,
    phoneNumber,
    track,
    studyLang,
  } = req.body as {
    email?: string;
    password?: string;
    langPref?: string;
    firstName?: string;
    lastName?: string;
    phoneCountryCode?: string;
    phoneNumber?: string;
    track?: string;
    studyLang?: string;
  };

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: "Adresse email invalide" });
  }
  const cleanEmail = normalizeEmail(email);
  if (!password || !isPasswordStrongEnough(password)) {
    return res.status(400).json({
      error: "Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre",
    });
  }
  if (!firstName || !lastName || normalizeName(firstName).length === 0 || normalizeName(lastName).length === 0) {
    return res.status(400).json({ error: "Nom et prénom requis" });
  }
  if (!phoneCountryCode || !isValidPhoneCountryCode(phoneCountryCode)) {
    return res.status(400).json({ error: "Indicatif téléphonique invalide" });
  }
  if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
    return res.status(400).json({ error: "Numéro de téléphone invalide" });
  }
  if (!track || !isValidTrack(track)) {
    return res.status(400).json({ error: "Merci de préciser ta filière : médecine ou dentaire" });
  }

  const existing = await db.prepare("SELECT id FROM users WHERE email = ?").get(cleanEmail);
  if (existing) {
    return res.status(409).json({ error: "Un compte existe déjà avec cet email" });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const sessionToken = randomUUID();
  const lang = normalizeLang(langPref);
  // Langue d'études déclarée (fr/en/ro) — le roumain n'a pas de contenu dédié, l'interface reste en `lang`.
  const cleanStudyLang = studyLang === "fr" || studyLang === "en" || studyLang === "ro" ? studyLang : lang;
  const role = publicRegistrationRole();
  const cleanFirstName = normalizeName(firstName);
  const cleanLastName = normalizeName(lastName);
  const cleanPhoneNumber = phoneNumber.replace(/[\s.-]/g, "");

  // L'essai gratuit de 8 jours (semestre 1) est accordé immédiatement à l'inscription — plus
  // besoin qu'un étudiant le demande ni que Jessica valide chaque demande.
  const now = Date.now();
  const trialEndsAt = now + TRIAL_DURATION_MS;

  const inserted = await db
    .prepare(
      `INSERT INTO users (
         email, password_hash, session_token, lang_pref, role,
         first_name, last_name, phone_country_code, phone_number, study_lang, track,
         trial_status, trial_granted_at, trial_ends_at, subscription_status, subscription_period_end,
         created_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'granted', ?, ?, 'trialing', ?, ?) RETURNING id`,
    )
    .get(
      cleanEmail,
      passwordHash,
      sessionToken,
      lang,
      role,
      cleanFirstName,
      cleanLastName,
      phoneCountryCode,
      cleanPhoneNumber,
      cleanStudyLang,
      track,
      now,
      trialEndsAt,
      trialEndsAt,
      now,
    );

  const token = signSession(inserted.id, sessionToken);
  recordActivity(inserted.id, "register", { userAgent: req.get("user-agent") });
  await db.prepare("UPDATE users SET last_seen_at = ? WHERE id = ?").run(now, inserted.id);
  sendWelcomeEmail({ id: inserted.id, email: cleanEmail, langPref: lang, firstName: cleanFirstName }, trialEndsAt);
  res.status(201).json({
    token,
    user: {
      id: inserted.id,
      email: cleanEmail,
      langPref: lang,
      role,
      firstName: cleanFirstName,
      lastName: cleanLastName,
      track,
      trialStatus: "granted",
      trialEndsAt,
      subscriptionStatus: "trialing",
    },
  });
});

authRouter.post("/login", authLimiter, async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis" });
  }
  const cleanEmail = normalizeEmail(email);
  const now = Date.now();
  if (isEmailLocked(cleanEmail, now)) {
    return res.status(429).json({ error: "Trop de tentatives sur ce compte. Réessaie dans 15 minutes." });
  }

  const user = await db
    .prepare(
      `SELECT id, password_hash, lang_pref, role, first_name, last_name, track,
              trial_status, trial_ends_at, subscription_status
       FROM users WHERE email = ?`,
    )
    .get(cleanEmail);

  const valid = await bcrypt.compare(password, user?.password_hash ?? DUMMY_PASSWORD_HASH);
  if (!user || !valid) {
    noteLoginFailure(cleanEmail, now);
    return res.status(401).json({ error: "Email ou mot de passe incorrect" });
  }

  const sessionToken = randomUUID();
  loginFailures.delete(cleanEmail);
  await db.prepare("UPDATE users SET session_token = ?, last_seen_at = ? WHERE id = ?").run(sessionToken, now, user.id);
  recordActivity(user.id, "login", { userAgent: req.get("user-agent") });

  const token = signSession(user.id, sessionToken);
  res.json({
    token,
    user: {
      id: user.id,
      email: cleanEmail,
      langPref: user.lang_pref,
      role: user.role,
      firstName: user.first_name,
      lastName: user.last_name,
      track: user.track,
      trialStatus: user.trial_status,
      trialEndsAt: user.trial_ends_at,
      subscriptionStatus: user.subscription_status,
    },
  });
});

authRouter.get("/me", authMiddleware, async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      `SELECT id, email, lang_pref, role, first_name, last_name, track,
              trial_status, trial_ends_at, subscription_status, subscription_period_end, stripe_customer_id
       FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) {
    return res.status(404).json({ error: "Utilisateur introuvable" });
  }
  // /me est appelé à chaque ouverture de l'app : c'est lui qui compte les visites.
  touchUser(user.id, req.get("user-agent"));
  res.json({
    id: user.id,
    email: user.email,
    langPref: user.lang_pref,
    role: user.role,
    firstName: user.first_name,
    lastName: user.last_name,
    track: user.track,
    trialStatus: user.trial_status,
    trialEndsAt: user.trial_ends_at,
    subscriptionStatus: user.subscription_status,
    subscriptionPeriodEnd: user.subscription_period_end,
    formerSubscriber: Boolean(user.stripe_customer_id) && user.subscription_status !== "active",
  });
});

authRouter.patch("/lang", authMiddleware, async (req: AuthedRequest, res) => {
  const { langPref } = req.body as { langPref?: string };
  if (!isSupportedLang(langPref)) {
    return res.status(400).json({ error: "langPref doit être 'fr', 'en', 'ar' ou 'it'" });
  }
  await db.prepare("UPDATE users SET lang_pref = ? WHERE id = ?").run(langPref, req.userId);
  res.json({ langPref });
});

/** Déconnexion réelle : le jeton en cours (et toute copie volée) devient invalide. */
authRouter.post("/logout", authMiddleware, async (req: AuthedRequest, res) => {
  await db.prepare("UPDATE users SET session_token = ? WHERE id = ?").run(randomUUID(), req.userId);
  recordActivity(req.userId!, "logout", { userAgent: req.get("user-agent") });
  res.json({ ok: true });
});

/** Historique de connexion de l'étudiant lui-même (page Mon compte). */
authRouter.get("/activity", authMiddleware, async (req: AuthedRequest, res) => {
  const rows = await db
    .prepare(
      `SELECT kind, device, created_at FROM user_activity
       WHERE user_id = ? AND kind IN ('register', 'login', 'logout', 'visit')
       ORDER BY created_at DESC LIMIT 15`,
    )
    .all(req.userId);
  res.json(rows.map((r: any) => ({ kind: r.kind, device: r.device, at: r.created_at })));
});
