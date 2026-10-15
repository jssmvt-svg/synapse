// Essai gratuit : 8 jours, semestre 1 uniquement (inscription et octroi admin).
export const TRIAL_DAYS = 8;
export const TRIAL_DURATION_MS = TRIAL_DAYS * 24 * 60 * 60 * 1000;

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
  // Échéance de l'accès en cours (ms epoch), utilisée pour couper
  // automatiquement un essai gratuit arrivé à sa fin.
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
  // L'essai gratuit n'ouvre que le semestre 1 ; le semestre 2 est réservé aux abonnés.
  if (subscriptionStatus === "trialing") {
    return semesterNumber === 1 && (subscriptionPeriodEnd == null || now < subscriptionPeriodEnd);
  }
  return false;
}
