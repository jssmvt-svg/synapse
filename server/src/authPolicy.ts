export type UserRole = "student" | "admin";

/**
 * Public registration never grants elevated permissions.
 * Administrator accounts are provisioned through a protected operational process.
 */
export function publicRegistrationRole(): UserRole {
  return "student";
}