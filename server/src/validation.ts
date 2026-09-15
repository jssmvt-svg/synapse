export type Track = "medecine" | "dentaire";

/**
 * Règle affichée à l'inscription : au moins 8 caractères, une majuscule,
 * un chiffre. Revalidée ici côté serveur — jamais faire confiance au client.
 */
export function isPasswordStrongEnough(password: string): boolean {
  return (
    typeof password === "string" &&
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password)
  );
}

export function isValidEmail(email: string): boolean {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Indicatif pays : "+33", "+40", etc. */
export function isValidPhoneCountryCode(code: string): boolean {
  return typeof code === "string" && /^\+[1-9][0-9]{0,3}$/.test(code);
}

/** Numéro local, sans l'indicatif : chiffres, espaces et tirets tolérés. */
export function isValidPhoneNumber(number: string): boolean {
  if (typeof number !== "string") return false;
  const digitsOnly = number.replace(/[\s.-]/g, "");
  return /^[0-9]{6,14}$/.test(digitsOnly);
}

export function isValidTrack(track: string): track is Track {
  return track === "medecine" || track === "dentaire";
}

export function normalizeName(name: string): string {
  return name.trim().replace(/\s+/g, " ").slice(0, 100);
}
