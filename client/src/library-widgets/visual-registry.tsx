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

import { CellMembraneDiagram, LipidClassesDiagram, LipidMessengersDiagram, MembraneProteinsDiagram } from "../components/PhysMembraneA";
import { SpecializedStructuresDiagram, PassiveTransportDiagram, IonChannelsDiagram, ActiveTransportDiagram, EndoExocytosisDiagram } from "../components/PhysMembraneB";
import { ReceptorTypesDiagram, LigandReceptorDiagram, GProteinCycleDiagram, GProteinTypesDiagram, SignalCascadeDiagram, FeedbackDiagram, ReflexArcDiagram } from "../components/PhysSignaling";
import { NerveTissueCellsDiagram, CnsPnsDiagram, RestingPotentialDiagram, ActionPotentialDiagram, ExcitabilityPeriodsDiagram, ConductionDiagram, SynapseDiagram } from "../components/PhysNeuro";
import { MuscleFiberDiagram, SarcomereDiagram, NeuromuscularJunctionDiagram, ExcitationContractionDiagram, CrossBridgeCycleDiagram, SmoothMuscleCellDiagram, SmoothMuscleCouplingDiagram } from "../components/PhysMuscle";

import { RedBloodCellDiagram, AnemiaDiagram, RbcLifecycleDiagram, Co2TransportDiagram, BloodVolumeDiagram, HematopoiesisDiagram, LeukocytesDiagram, HemostasisDiagram, CoagulationCascadeDiagram } from "../components/PhysBlood";
import { NephronDiagram, GlomerularFiltrationDiagram, TubularCellsDiagram, CountercurrentDiagram, RaasDiagram, MicturitionDiagram, GastricSecretionDiagram, IntestinalAbsorptionDiagram, GiMotilityDiagram } from "../components/PhysRenalDigestive";

// Schémas insérables dans un cours via [[visual:clé]] (cf. MarkdownContent).
const COURSE_FIGURES: Record<string, () => ReactNode> = {
  "phys/rbc": () => <RedBloodCellDiagram />,
  "phys/anemia": () => <AnemiaDiagram />,
  "phys/rbc-lifecycle": () => <RbcLifecycleDiagram />,
  "phys/co2-transport": () => <Co2TransportDiagram />,
  "phys/blood-volume": () => <BloodVolumeDiagram />,
  "phys/hematopoiesis": () => <HematopoiesisDiagram />,
  "phys/leukocytes": () => <LeukocytesDiagram />,
  "phys/hemostasis": () => <HemostasisDiagram />,
  "phys/coagulation": () => <CoagulationCascadeDiagram />,
  "phys/nephron": () => <NephronDiagram />,
  "phys/glomerular-filtration": () => <GlomerularFiltrationDiagram />,
  "phys/tubular-cells": () => <TubularCellsDiagram />,
  "phys/countercurrent": () => <CountercurrentDiagram />,
  "phys/raas": () => <RaasDiagram />,
  "phys/micturition": () => <MicturitionDiagram />,
  "phys/gastric-secretion": () => <GastricSecretionDiagram />,
  "phys/intestinal-absorption": () => <IntestinalAbsorptionDiagram />,
  "phys/gi-motility": () => <GiMotilityDiagram />,
  "phys/membrane": () => <CellMembraneDiagram />,
  "phys/lipid-classes": () => <LipidClassesDiagram />,
  "phys/lipid-messengers": () => <LipidMessengersDiagram />,
  "phys/membrane-proteins": () => <MembraneProteinsDiagram />,
  "phys/specialized-structures": () => <SpecializedStructuresDiagram />,
  "phys/passive-transport": () => <PassiveTransportDiagram />,
  "phys/ion-channels": () => <IonChannelsDiagram />,
  "phys/active-transport": () => <ActiveTransportDiagram />,
  "phys/endo-exocytosis": () => <EndoExocytosisDiagram />,
  "phys/receptor-types": () => <ReceptorTypesDiagram />,
  "phys/ligand-receptor": () => <LigandReceptorDiagram />,
  "phys/g-protein-cycle": () => <GProteinCycleDiagram />,
  "phys/g-protein-types": () => <GProteinTypesDiagram />,
  "phys/signal-cascade": () => <SignalCascadeDiagram />,
  "phys/feedback": () => <FeedbackDiagram />,
  "phys/reflex-arc": () => <ReflexArcDiagram />,
  "phys/nerve-cells": () => <NerveTissueCellsDiagram />,
  "phys/cns-pns": () => <CnsPnsDiagram />,
  "phys/resting-potential": () => <RestingPotentialDiagram />,
  "phys/action-potential": () => <ActionPotentialDiagram />,
  "phys/excitability": () => <ExcitabilityPeriodsDiagram />,
  "phys/conduction": () => <ConductionDiagram />,
  "phys/synapse": () => <SynapseDiagram />,
  "phys/muscle-fiber": () => <MuscleFiberDiagram />,
  "phys/sarcomere": () => <SarcomereDiagram />,
  "phys/nmj": () => <NeuromuscularJunctionDiagram />,
  "phys/excitation-contraction": () => <ExcitationContractionDiagram />,
  "phys/cross-bridge": () => <CrossBridgeCycleDiagram />,
  "phys/smooth-cell": () => <SmoothMuscleCellDiagram />,
  "phys/smooth-coupling": () => <SmoothMuscleCouplingDiagram />,
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
