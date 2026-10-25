import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

export interface AuthedRequest extends Request {
  userId?: number;
}

interface JwtPayload {
  userId: number;
  sessionToken: string;
}

// `npm start` (Replit) ne fixe pas NODE_ENV : le secret de repli n'est donc
// accepté qu'en développement/test explicite. Sinon, sans JWT_SECRET, n'importe
// qui pourrait forger un jeton de session valide.
function isLocalDevOrTest(): boolean {
  return (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test" ||
    Boolean(process.env.NODE_TEST_CONTEXT)
  );
}

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    if (!isLocalDevOrTest()) {
      throw new Error("JWT_SECRET est obligatoire — à définir dans Replit Secrets");
    }
    return "dev-only-insecure-secret";
  }
  return secret;
}

/** Vérifié au démarrage pour signaler tout de suite un secret absent ou trop court. */
export function checkJwtSecretAtBoot(): void {
  const secret = process.env.JWT_SECRET;
  if (!secret && !isLocalDevOrTest()) {
    console.error("[sécurité] JWT_SECRET absent : aucune connexion ne fonctionnera. Ajoute-le dans Replit Secrets.");
  } else if (secret && secret.length < 32) {
    console.warn("[sécurité] JWT_SECRET fait moins de 32 caractères : utilise une longue chaîne aléatoire.");
  }
}

export function signSession(userId: number, sessionToken: string): string {
  return jwt.sign({ userId, sessionToken } satisfies JwtPayload, getJwtSecret(), {
    expiresIn: "30d",
  });
}

export async function authMiddleware(req: AuthedRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) {
    return res.status(401).json({ error: "Non authentifié" });
  }

  let payload: JwtPayload;
  try {
    payload = jwt.verify(token, getJwtSecret()) as JwtPayload;
  } catch {
    return res.status(401).json({ error: "Session invalide ou expirée" });
  }

  const user = await db
    .prepare("SELECT id, session_token FROM users WHERE id = ?")
    .get(payload.userId);

  if (!user || user.session_token !== payload.sessionToken) {
    return res.status(401).json({ error: "Session invalidée (connexion sur un autre appareil)" });
  }

  req.userId = payload.userId;
  next();
}
