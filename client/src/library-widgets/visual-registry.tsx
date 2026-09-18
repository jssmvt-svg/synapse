import type { ReactNode } from "react";
import { AMINO_ACIDS } from "../library-data/amino-acids";
import { AminoAcidStructure } from "../components/AminoAcidStructure";
import { HemoglobinSchematic } from "../components/HemoglobinSchematic";
import { VITAMINS } from "../library-data/vitamins";
import { VitaminStructure } from "../components/VitaminStructure";
import { AnatomicalPlanes, LimbTerms, JointMovements, BoneLandmarks } from "../components/AnatomyDiagrams";
import {
  DevelopmentTimeline,
  ReproductiveSystems,
  MenstrualCycle,
  Gametogenesis,
  Fertilization,
  Cleavage,
  Implantation,
  Gastrulation,
  Neurulation,
} from "../components/EmbryologyDiagrams";

// Schémas insérables dans un cours via [[visual:clé]] (cf. MarkdownContent).
const COURSE_FIGURES: Record<string, () => ReactNode> = {
  "anatomy/planes": () => <AnatomicalPlanes />,
  "anatomy/limb-terms": () => <LimbTerms />,
  "anatomy/joint-movements": () => <JointMovements />,
  "anatomy/bone-landmarks": () => <BoneLandmarks />,
  "embryo/timeline": () => <DevelopmentTimeline />,
  "embryo/reproductive": () => <ReproductiveSystems />,
  "embryo/menstrual-cycle": () => <MenstrualCycle />,
  "embryo/gametogenesis": () => <Gametogenesis />,
  "embryo/fertilization": () => <Fertilization />,
  "embryo/cleavage": () => <Cleavage />,
  "embryo/implantation": () => <Implantation />,
  "embryo/gastrulation": () => <Gastrulation />,
  "embryo/neurulation": () => <Neurulation />,
};

// Résout une carte.visual_key (slug texte stocké en base) vers son composant SVG
// interne. Les clés paramétrées ("amino/ALA", "vitamin/B1") pointent vers une
// entrée d'une source de données ; les clés fixes ("hb-quaternary") vers un
// composant dédié. Aucune clé inconnue -> rendu texte inchangé (retourne null).
export function resolveVisualKey(key: string): ReactNode | null {
  const figure = COURSE_FIGURES[key];
  if (figure) return figure();

  if (key.startsWith("amino/")) {
    const code3 = key.slice("amino/".length);
    const aa = AMINO_ACIDS.find((a) => a.code3 === code3);
    return aa ? <AminoAcidStructure aa={aa} /> : null;
  }

  if (key.startsWith("vitamin/")) {
    const code = key.slice("vitamin/".length);
    const vitamin = VITAMINS.find((v) => v.code === code);
    return vitamin ? <VitaminStructure vitamin={vitamin} /> : null;
  }

  if (key === "hb-quaternary") {
    return <HemoglobinSchematic />;
  }

  return null;
}
