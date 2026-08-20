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