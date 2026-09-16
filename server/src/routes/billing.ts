import { Router } from "express";
import { db } from "../db.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

export const billingRouter = Router();
billingRouter.use(authMiddleware);

function hasActiveSubscription(status: string | null | undefined): boolean {
  return status === "active" || status === "trialing";
}

// Le paiement Stripe est retiré pour l'instant (compte Stripe live non
// connecté sur Replit) : seul l'essai gratuit de 48h, accordé automatiquement
// à l'inscription, ouvre l'accès pour le moment.
billingRouter.get("/status", async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      `SELECT role, subscription_status, subscription_period_end, trial_status, trial_ends_at
       FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });
  const trialActive =
    user.trial_status === "granted" &&
    user.subscription_status === "trialing" &&
    (user.trial_ends_at == null || Date.now() < Number(user.trial_ends_at));
  res.json({
    role: user.role,
    subscriptionStatus: user.subscription_status,
    subscriptionPeriodEnd: user.subscription_period_end,
    hasYearOneAccess: user.role === "admin" || hasActiveSubscription(user.subscription_status),
    trialStatus: user.trial_status,
    trialEndsAt: user.trial_ends_at,
    trialActive,
    billingAvailable: false,
    billingMessage: "Les abonnements payants arrivent bientôt.",
  });
});
