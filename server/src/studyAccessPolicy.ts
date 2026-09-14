export type MembershipStatus = "active" | "trialing" | "inactive" | string | null | undefined;
export type AccessRole = "student" | "admin" | string | null | undefined;

export function canOpenStudyContent({
  role,
  subscriptionStatus,
  yearNumber,
  semesterNumber,
  semesterPublished,
}: {
  role: AccessRole;
  subscriptionStatus: MembershipStatus;
  yearNumber: number;
  semesterNumber: number;
  semesterPublished: boolean;
}): boolean {
  if (role === "admin") return true;
  return (
    yearNumber === 1 &&
    (semesterNumber === 1 || semesterNumber === 2) &&
    semesterPublished &&
    (subscriptionStatus === "active" || subscriptionStatus === "trialing")
  );
}
export function isTrialActive(status: MembershipStatus, trialEndsAt: number | null | undefined): boolean {
  if (status !== "trialing") return false;
  return typeof trialEndsAt === "number" && trialEndsAt > Date.now();
}

export function effectiveSubscriptionStatus(
  status: MembershipStatus,
  trialEndsAt: number | null | undefined,
): MembershipStatus {
  if (status === "trialing" && !isTrialActive(status, trialEndsAt)) return "inactive";
  return status;
}
