import { useEffect, useState } from "react";
import { useLang } from "../i18n";

export type GameMode = "combat" | "race" | "surgery" | "tug";

interface Bilingual {
  fr: string;
  en: string;
}

export interface ModeInfo {
  id: GameMode;
  icon: string;
  name: Bilingual;
  tagline: Bilingual;
  // Noms des 3 niveaux d'attaque (le combat utilise ceux de l'élément de l'avatar).
  moves: [Bilingual, Bilingual, Bilingual] | null;
  // Texte de l'indice « prochaine attaque ».
  nextLabel: Bilingual;
}

export const MODES: ModeInfo[] = [
  {
    id: "combat",
    icon: "⚔️",
    name: { fr: "Combat", en: "Fight" },
    tagline: {
      fr: "Chaque bonne réponse blesse l'adversaire. Le premier K.O. gagne.",
      en: "Every correct answer hurts your opponent. First K.O. wins.",
    },
    moves: null,
    nextLabel: { fr: "Prochaine attaque", en: "Next attack" },
  },
  {
    id: "race",
    icon: "🏎️",
    name: { fr: "Course de voitures", en: "Car race" },
    tagline: {
      fr: "Chaque bonne réponse fait avancer ta voiture. Les séries donnent turbo et nitro.",
      en: "Every correct answer moves your car. Streaks unlock turbo and nitro.",
    },
    moves: [
      { fr: "Accélération", en: "Acceleration" },
      { fr: "Turbo", en: "Turbo" },
      { fr: "Nitro", en: "Nitro" },
    ],
    nextLabel: { fr: "Prochain boost", en: "Next boost" },
  },
  {
    id: "surgery",
    icon: "🩺",
    name: { fr: "Bloc opératoire", en: "Operating room" },
    tagline: {
      fr: "Opère ton patient étape par étape. Chaque erreur est une complication : ses constantes chutent.",
      en: "Operate step by step. Every mistake is a complication: vitals drop.",
    },
    moves: [
      { fr: "Geste précis", en: "Precise move" },
      { fr: "Suture experte", en: "Expert suturing" },
      { fr: "Chef-d'œuvre", en: "Masterpiece" },
    ],
    nextLabel: { fr: "Prochain geste", en: "Next move" },
  },
  {
    id: "tug",
    icon: "🪢",
    name: { fr: "Tir à la corde", en: "Tug of war" },
    tagline: {
      fr: "Une seule corde : chaque bonne réponse tire ton adversaire vers la boue.",
      en: "One rope: every correct answer drags your opponent toward the mud.",
    },
    moves: [
      { fr: "Traction", en: "Pull" },
      { fr: "Grande traction", en: "Heavy pull" },
      { fr: "Force titanesque", en: "Titan strength" },
    ],
    nextLabel: { fr: "Prochaine traction", en: "Next pull" },
  },
];

export function modeInfo(id: string | null | undefined): ModeInfo {
  return MODES.find((mode) => mode.id === id) ?? MODES[0];
}

const STORAGE_KEY = "synapse_duel_mode";

export function loadMode(): GameMode {
  try {
    return modeInfo(localStorage.getItem(STORAGE_KEY)).id;
  } catch {
    return "combat";
  }
}

export function saveMode(mode: GameMode): void {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Stockage indisponible : le choix vaut pour cette session.
  }
}

export function useCopy() {
  const { tx } = useLang();
  return tx;
}

// Délai avant que l'adversaire encaisse le coup : le temps que l'attaque
// « arrive » (coup direct, projectile ou faisceau ultime).
export function hitDelayFor(tier: number): number {
  if (tier >= 3) return 1000;
  if (tier === 2) return 900;
  return 350;
}

// La valeur affichée baisse quand le coup touche, pas dès que le serveur répond.
export function useLaggedHp(hp: number, delayMs: number): number {
  const [shown, setShown] = useState(hp);
  useEffect(() => {
    if (hp >= shown) {
      setShown(hp);
      return;
    }
    const id = setTimeout(() => setShown(hp), delayMs);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hp, delayMs]);
  return shown;
}
