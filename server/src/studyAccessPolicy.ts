export type MembershipStatus = "active" | "trialing" | "inactive" | string | null | undefined;
export type AccessRole = "student" | "admin" | string | null | undefined;

export function canOpenStudyContent({
  role,
  subscriptionStatus,
  subscriptionPeriodEnd,
  yearNumber,
  semesterNumber,
  semesterPublished,
  now = Date.now(),
}: {
  role: AccessRole;
  subscriptionStatus: MembershipStatus;
  // Échéance de la période en cours (ms epoch). Utilisée pour couper l'accès
  // à la fin d'un essai gratuit de 48h accordé manuellement — un abonnement
  // Stripe "active" classique n'est jamais coupé sur cette seule base : c'est
  // le webhook Stripe qui fait autorité sur son statut.
  subscriptionPeriodEnd?: number | null;
  yearNumber: number;
  semesterNumber: number;
  semesterPublished: boolean;
  now?: number;
}): boolean {
  if (role === "admin") return true;
  if (yearNumber !== 1 || (semesterNumber !== 1 && semesterNumber !== 2) || !semesterPublished) {
    return false;
  }
  if (subscriptionStatus === "active") return true;
  if (subscriptionStatus === "trialing") {
    return subscriptionPeriodEnd == null || now < subscriptionPeriodEnd;
  }
  return false;
}
