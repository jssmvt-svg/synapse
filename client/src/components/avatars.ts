import {
  DEFAULT_AVATAR_CODE,
  ELEMENTS,
  OUTFITS,
  parseAvatar,
  type AvatarConfig,
} from "./avatarSprite";

export interface AvatarPreset {
  name: string;
  gender: "m" | "f";
  code: string;
}

// Personnages prêts à jouer : 2 femmes et 2 hommes, peaux et coiffures variées.
// Tous les autres styles (voile, tresses, chignon, etc.) restent dans l'éditeur.
export const PRESETS: AvatarPreset[] = [
  { name: "Kaito", gender: "m", code: "1-spiky-5-0-p-0" },
  { name: "Sakura", gender: "f", code: "0-twin-4-3-s-3" },
  { name: "Malik", gender: "m", code: "4-short-0-6-p-1" },
  { name: "Amara", gender: "f", code: "5-afro-0-7-s-2" },
];

export interface AvatarInfo {
  code: string;
  config: AvatarConfig;
  // Noms des attaques : coup (série 1), spéciale (série 2-3), ultime (série 4+).
  attacks: readonly [string, string, string];
  // Couleurs des projectiles et de l'aura.
  color: string;
  glow: string;
  // Couleur de la tenue (sert aussi de couleur de voiture).
  outfitColor: string;
  outfitDark: string;
  outfitAccent: string;
}

export function avatarInfo(code: string | null | undefined): AvatarInfo {
  const config = parseAvatar(code);
  const element = ELEMENTS[config.element];
  const outfit = OUTFITS[config.outfit];
  return {
    code: code && /^\d-[a-z]+-\d-\d-[ps]-\d$/.test(code) ? code : DEFAULT_AVATAR_CODE,
    config,
    attacks: element.attacks as unknown as readonly [string, string, string],
    color: element.color,
    glow: element.glow,
    outfitColor: outfit.O,
    outfitDark: outfit.o,
    outfitAccent: outfit.A,
  };
}

const STORAGE_KEY = "synapse_duel_avatar";

export function loadAvatarCode(): string {
  try {
    return avatarInfo(localStorage.getItem(STORAGE_KEY)).code;
  } catch {
    return DEFAULT_AVATAR_CODE;
  }
}

export function saveAvatarCode(code: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour cette session.
  }
}

// Même règle que le serveur : 1 = coup, 2-3 = spéciale, 4+ = ultime.
export function attackTierForStreak(streak: number): number {
  if (streak <= 0) return 0;
  if (streak === 1) return 1;
  return streak >= 4 ? 3 : 2;
}
