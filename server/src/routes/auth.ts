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

export const authRouter = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

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
  } = req.body as {
    email?: string;
    password?: string;
    langPref?: string;
    firstName?: string;
    lastName?: string;
    phoneCountryCode?: string;
    phoneNumber?: string;
    track?: string;
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
  const lang = langPref === "en" ? "en" : "fr";
  const role = publicRegistrationRole();
  const cleanFirstName = normalizeName(firstName);
  const cleanLastName = normalizeName(lastName);
  const cleanPhoneNumber = phoneNumber.replace(/[\s.-]/g, "");

  const inserted = await db
    .prepare(
      `INSERT INTO users (
         email, password_hash, session_token, lang_pref, role,
         first_name, last_name, phone_country_code, phone_number, track, created_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
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
      track,
      Date.now(),
    );

  const token = signSession(inserted.id, sessionToken);
  sendWelcomeEmail({ email: cleanEmail, langPref: lang, firstName: cleanFirstName });
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
    },
  });
});

authRouter.post("/login", authLimiter, async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis" });
  }
  const cleanEmail = normalizeEmail(email);

  const user = await db
    .prepare(
      "SELECT id, password_hash, lang_pref, role, first_name, last_name, track FROM users WHERE email = ?",
    )
    .get(cleanEmail);

  const valid = user ? await bcrypt.compare(password, user.password_hash) : false;
  if (!user || !valid) {
    return res.status(401).json({ error: "Email ou mot de passe incorrect" });
  }

  const sessionToken = randomUUID();
  await db.prepare("UPDATE users SET session_token = ? WHERE id = ?").run(sessionToken, user.id);

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
    },
  });
});

authRouter.get("/me", authMiddleware, async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      "SELECT id, email, lang_pref, role, first_name, last_name, track FROM users WHERE id = ?",
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
