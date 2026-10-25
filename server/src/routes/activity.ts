import { Router } from "express";
import rateLimit from "express-rate-limit";
import { recordActivity, sanitizeActivityPath, touchUser } from "../activity.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

export const activityRouter = Router();

const pageViewLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

// Même page renvoyée deux fois de suite en moins de 10 s (double rendu,
// rechargement) : on ne la compte qu'une fois.
const PAGE_DEDUPE_MS = 10_000;
const lastPageByUser = new Map<number, { path: string; at: number }>();

activityRouter.post("/page", pageViewLimiter, authMiddleware, (req: AuthedRequest, res) => {
  const path = sanitizeActivityPath((req.body as { path?: unknown } | undefined)?.path);
  if (!path) return res.status(400).json({ error: "Chemin invalide" });

  const userId = req.userId!;
  const now = Date.now();
  const last = lastPageByUser.get(userId);
  if (!last || last.path !== path || now - last.at > PAGE_DEDUPE_MS) {
    lastPageByUser.set(userId, { path, at: now });
    if (lastPageByUser.size > 5_000) lastPageByUser.clear();
    recordActivity(userId, "page", { path });
    touchUser(userId, req.get("user-agent"));
  }
  res.status(204).end();
});
