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

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("JWT_SECRET is required in production");
    }
    return "dev-only-insecure-secret";
  }
  return secret;
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
