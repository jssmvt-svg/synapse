import type { ComponentType } from "react";
import { AminoAcidQuiz } from "../components/AminoAcidQuiz";
import { OxygenSaturationChart } from "../components/OxygenSaturationChart";

interface WidgetEntry {
  label_fr: string;
  label_en: string;
  Component: ComponentType;
}

// Résout chapter.widget_key vers l'onglet interactif à afficher à côté du deck
// de flashcards. Un chapitre sans widget_key n'affiche aucun onglet.
export const WIDGET_REGISTRY: Record<string, WidgetEntry> = {
  "amino-acid-quiz": { label_fr: "Quiz", label_en: "Quiz", Component: AminoAcidQuiz },
  "hb-o2-curve": { label_fr: "Courbe O₂", label_en: "O₂ curve", Component: OxygenSaturationChart },
};
