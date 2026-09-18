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

import { OsmolarityLabDiagram, IonogramLabDiagram, HematogramLabDiagram, AcidBaseLabDiagram, AcidBaseMixedLabDiagram, HemostasisLabDiagram, HemostasisPatternsLabDiagram, ProteinogramLabDiagram, ProteinPatternsLabDiagram, RenalFormulasLabDiagram, GfrStagesLabDiagram, LeukogramLabDiagram, LeukogramPatternsLabDiagram, AnemiaDifferentialLabDiagram, RenalPatternsLabDiagram, ReferenceValuesLabDiagram } from "../components/PhysLab";

import { AminoAcidStructureDiagram, AminoAcidClassesDiagram, PeptideBondDiagram, ProteinStructureLevelsDiagram, SecondaryStructureDiagram, ProteinFoldingDiagram, HemeDiagram, HbCooperativityDiagram, BohrEffectDiagram, SickleCellDiagram } from "../components/BioProteins";
import { EnergyProfileDiagram, EnzymeSubstrateModelsDiagram, MichaelisMentenDiagram, EnzymeInhibitionDiagram, EcClassesDiagram, CatalyticStrategiesDiagram, SerineProteaseDiagram, AtcaseDiagram, CovalentModificationDiagram, ZymogenDiagram } from "../components/BioEnzymes";
import { MonosaccharidesDiagram, GlycosidicBondsDiagram, PolysaccharidesDiagram, FattyAcidsDiagram, MembraneLipidsDiagram, LipidAssemblyDiagram, WaterVitaminsDiagram, FatVitaminsDiagram } from "../components/BioMacro";

import { LabMeasuresDiagram, LabDilutionDiagram, LabIsotonicDiagram, LabTitrationDiagram, LabPhScaleDiagram, LabIsoelectricDiagram, LabBufferDiagram, LabCentrifugeDiagram, LabChromatographyDiagram, LabElectrophoresisDiagram, LabSpectroDiagram, LabLdhDiagram, LabIodometryDiagram } from "../components/BioLab";

import { GlycolysisDiagram, GlycolysisRegulationDiagram, PdhComplexDiagram, PdhRegulationDiagram, KrebsDetailedDiagram, EtcDiagram, AtpSynthaseDiagram, GlycogenesisDiagram, GlycogenolysisDiagram, GlycogenRegulationDiagram } from "../components/BioMetabolismA";
import { GluconeogenesisDiagram, GlycolysisGluconeogenesisSwitchDiagram, FattyAcidShuttleDiagram, FasCycleDiagram, TriglycerideDiagram, BetaOxidationDiagram, AminoAcidMetabolismDiagram, UreaCycleDiagram, KetoneBodiesDiagram, PentosePhosphateDiagram, CholesterolSynthesisDiagram, LipoproteinsDiagram, NucleotideSynthesisDiagram, MetabolicMapCarbs, MetabolicMapLipids, MetabolicMapProteins } from "../components/BioMetabolismB";

import { LabGlucoseTransportersDiagram, LabOgttDiagram, LabHba1cDiagram, LabLipidPanelDiagram, LabTransaminasesDiagram, LabUreaDiagram, LabCreatinineDiagram, LabBilirubinDiagram, LabUricAcidDiagram } from "../components/BioLabS2";

// Schémas insérables dans un cours via [[visual:clé]] (cf. MarkdownContent).
const COURSE_FIGURES: Record<string, () => ReactNode> = {
  "bio/lab-glucose-transporters": () => <LabGlucoseTransportersDiagram />,
  "bio/lab-ogtt": () => <LabOgttDiagram />,
  "bio/lab-hba1c": () => <LabHba1cDiagram />,
  "bio/lab-lipid-panel": () => <LabLipidPanelDiagram />,
  "bio/lab-transaminases": () => <LabTransaminasesDiagram />,
  "bio/lab-urea": () => <LabUreaDiagram />,
  "bio/lab-creatinine": () => <LabCreatinineDiagram />,
  "bio/lab-bilirubin": () => <LabBilirubinDiagram />,
  "bio/lab-uric-acid": () => <LabUricAcidDiagram />,
  "bio/glycolysis": () => <GlycolysisDiagram />,
  "bio/glycolysis-regulation": () => <GlycolysisRegulationDiagram />,
  "bio/pdh": () => <PdhComplexDiagram />,
  "bio/pdh-regulation": () => <PdhRegulationDiagram />,
  "bio/krebs-detailed": () => <KrebsDetailedDiagram />,
  "bio/etc": () => <EtcDiagram />,
  "bio/atp-synthase": () => <AtpSynthaseDiagram />,
  "bio/glycogenesis": () => <GlycogenesisDiagram />,
  "bio/glycogenolysis": () => <GlycogenolysisDiagram />,
  "bio/glycogen-regulation": () => <GlycogenRegulationDiagram />,
  "bio/gluconeogenesis": () => <GluconeogenesisDiagram />,
  "bio/glucose-switch": () => <GlycolysisGluconeogenesisSwitchDiagram />,
  "bio/fa-shuttle": () => <FattyAcidShuttleDiagram />,
  "bio/fas-cycle": () => <FasCycleDiagram />,
  "bio/triglyceride": () => <TriglycerideDiagram />,
  "bio/beta-oxidation": () => <BetaOxidationDiagram />,
  "bio/aa-metabolism": () => <AminoAcidMetabolismDiagram />,
  "bio/urea-cycle": () => <UreaCycleDiagram />,
  "bio/ketone-bodies": () => <KetoneBodiesDiagram />,
  "bio/ppp": () => <PentosePhosphateDiagram />,
  "bio/cholesterol-synthesis": () => <CholesterolSynthesisDiagram />,
  "bio/lipoproteins": () => <LipoproteinsDiagram />,
  "bio/nucleotides": () => <NucleotideSynthesisDiagram />,
  "bio/map-carbs": () => <MetabolicMapCarbs />,
  "bio/map-lipids": () => <MetabolicMapLipids />,
  "bio/map-proteins": () => <MetabolicMapProteins />,
  "bio/lab-measures": () => <LabMeasuresDiagram />,
  "bio/lab-dilution": () => <LabDilutionDiagram />,
  "bio/lab-isotonic": () => <LabIsotonicDiagram />,
  "bio/lab-titration": () => <LabTitrationDiagram />,
  "bio/lab-ph-scale": () => <LabPhScaleDiagram />,
  "bio/lab-isoelectric": () => <LabIsoelectricDiagram />,
  "bio/lab-buffer": () => <LabBufferDiagram />,
  "bio/lab-centrifuge": () => <LabCentrifugeDiagram />,
  "bio/lab-chromatography": () => <LabChromatographyDiagram />,
  "bio/lab-electrophoresis": () => <LabElectrophoresisDiagram />,
  "bio/lab-spectro": () => <LabSpectroDiagram />,
  "bio/lab-ldh": () => <LabLdhDiagram />,
  "bio/lab-iodometry": () => <LabIodometryDiagram />,
  "bio/amino-acid": () => <AminoAcidStructureDiagram />,
  "bio/amino-acid-classes": () => <AminoAcidClassesDiagram />,
  "bio/peptide-bond": () => <PeptideBondDiagram />,
  "bio/protein-levels": () => <ProteinStructureLevelsDiagram />,
  "bio/secondary-structure": () => <SecondaryStructureDiagram />,
  "bio/protein-folding": () => <ProteinFoldingDiagram />,
  "bio/heme": () => <HemeDiagram />,
  "bio/hb-cooperativity": () => <HbCooperativityDiagram />,
  "bio/bohr-effect": () => <BohrEffectDiagram />,
  "bio/sickle-cell": () => <SickleCellDiagram />,
  "bio/energy-profile": () => <EnergyProfileDiagram />,
  "bio/enzyme-models": () => <EnzymeSubstrateModelsDiagram />,
  "bio/michaelis-menten": () => <MichaelisMentenDiagram />,
  "bio/enzyme-inhibition": () => <EnzymeInhibitionDiagram />,
  "bio/ec-classes": () => <EcClassesDiagram />,
  "bio/catalytic-strategies": () => <CatalyticStrategiesDiagram />,
  "bio/serine-protease": () => <SerineProteaseDiagram />,
  "bio/atcase": () => <AtcaseDiagram />,
  "bio/covalent-regulation": () => <CovalentModificationDiagram />,
  "bio/zymogen": () => <ZymogenDiagram />,
  "bio/monosaccharides": () => <MonosaccharidesDiagram />,
  "bio/glycosidic-bonds": () => <GlycosidicBondsDiagram />,
  "bio/polysaccharides": () => <PolysaccharidesDiagram />,
  "bio/fatty-acids": () => <FattyAcidsDiagram />,
  "bio/membrane-lipids": () => <MembraneLipidsDiagram />,
  "bio/lipid-assembly": () => <LipidAssemblyDiagram />,
  "bio/water-vitamins": () => <WaterVitaminsDiagram />,
  "bio/fat-vitamins": () => <FatVitaminsDiagram />,
  "phys/lab-osmolarity": () => <OsmolarityLabDiagram />,
  "phys/lab-ionogram": () => <IonogramLabDiagram />,
  "phys/lab-hematogram": () => <HematogramLabDiagram />,
  "phys/lab-abb": () => <AcidBaseLabDiagram />,
  "phys/lab-abb-mixed": () => <AcidBaseMixedLabDiagram />,
  "phys/lab-hemostasis": () => <HemostasisLabDiagram />,
  "phys/lab-hemostasis-patterns": () => <HemostasisPatternsLabDiagram />,
  "phys/lab-proteinogram": () => <ProteinogramLabDiagram />,
  "phys/lab-protein-patterns": () => <ProteinPatternsLabDiagram />,
  "phys/lab-renal-formulas": () => <RenalFormulasLabDiagram />,
  "phys/lab-gfr-stages": () => <GfrStagesLabDiagram />,
  "phys/lab-leukogram": () => <LeukogramLabDiagram />,
  "phys/lab-leukogram-patterns": () => <LeukogramPatternsLabDiagram />,
  "phys/lab-anemia-diff": () => <AnemiaDifferentialLabDiagram />,
  "phys/lab-renal-patterns": () => <RenalPatternsLabDiagram />,
  "phys/lab-reference": () => <ReferenceValuesLabDiagram />,
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
