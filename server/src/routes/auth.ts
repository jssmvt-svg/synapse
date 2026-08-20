import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { publicRegistrationRole } from "../authPolicy.js";
import { db } from "../db.js";
import { authMiddleware, signSession, type AuthedRequest } from "../middleware/auth.js";

export const authRouter = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

authRouter.post("/register", authLimiter, async (req, res) => {
  const { email, password, langPref } = req.body as {
    email?: string;
    password?: string;
    langPref?: string;
  };

  if (!email || !password || password.length < 8) {
    return res.status(400).json({ error: "Email et mot de passe (8 caractères min.) requis" });
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
      "INSERT INTO users (email, password_hash, session_token, lang_pref, role, created_at) VALUES (?, ?, ?, ?, ?, ?) RETURNING id",
    )
    .get(email, passwordHash, sessionToken, lang, role, Date.now());

  const token = signSession(inserted.id, sessionToken);
  res.status(201).json({ token, user: { id: inserted.id, email, langPref: lang, role } });
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
    .prepare("SELECT id, email, lang_pref, role FROM users WHERE id = ?")
    .get(req.userId);
  if (!user) {
    return res.status(404).json({ error: "Utilisateur introuvable" });
  }
  res.json({ id: user.id, email: user.email, langPref: user.lang_pref, role: user.role });
});

authRouter.patch("/lang", authMiddleware, async (req: AuthedRequest, res) => {
  const { langPref } = req.body as { langPref?: string };
  if (langPref !== "fr" && langPref !== "en") {
    return res.status(400).json({ error: "langPref doit être 'fr' ou 'en'" });
  }
  await db.prepare("UPDATE users SET lang_pref = ? WHERE id = ?").run(langPref, req.userId);
  res.json({ langPref });
});
