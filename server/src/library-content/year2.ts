import type { LibraryChapterSeed } from "./biochimie-s1.js";
import { GENETIQUE_Y2 } from "./year2-genetique.js";

// Année 2, semestre 1 : contenu réservé à l'admin (révision personnelle).
// Clé = valeur « matiere » en base, identique à LIBRARY_SUBJECTS_Y2.
export const YEAR2_S1: Record<string, LibraryChapterSeed[]> = {
  "Génétique": GENETIQUE_Y2,
};
