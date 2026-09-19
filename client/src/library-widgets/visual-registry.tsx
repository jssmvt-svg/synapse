import type { ReactNode } from "react";
import { MembraneProteinTypesDiagram, MembraneFluidityDiagram, TertiaryQuaternaryDiagram, DisaccharidesDiagram, GlycoconjugatesDiagram, RestrictionEnzymeDiagram } from "../components/BioMore";
import { DistalTubuleCellsDiagram, RenalAcidBaseDiagram, AmmoniumTrappingDiagram, PancreaticSecretionDiagram, EnterohepaticCycleDiagram, BilirubinMetabolismDiagram, SwallowingStagesDiagram, FibrinolysisDiagram, PlateletPlugDiagram } from "../components/PhysMore";
import { UpperLimbVeinsDiagram, ThighCompartmentsDiagram, GlutealMusclesDiagram, ThighMusclesDiagram, LowerLimbVeinsDiagram, InguinalRegionDiagram, PeritonealCompartmentsDiagram, RetroperitonealOrgansDiagram, SpleenViewsDiagram, BiliaryTreeDiagram, PortalSystemDiagram, AnatNephronDiagram, FallopianTubeDiagram, BroadLigamentDiagram, ProstateZonesDiagram, TestisEpididymisDiagram } from "../components/AnatMore";
import { ScapulaReliefsSheet, ForearmBonesSheet, CarpusDiagram, HipBoneReliefsSheet, LegBonesSheet, FootBonesDiagram, RectumAnalDiagram, BladderUrethraDiagram, MaleGenitalDiagram, CoeliacTrunkDiagram } from "../components/AnatRest";
import { HumerusLandmarksDiagram, FemurLandmarksDiagram } from "../components/AnatBonesTP";
import { ForearmBonesDiagram, WristJointDiagram, HipBoneDiagram, LegBonesDiagram, AnkleJointDiagram, FootMedialBonesDiagram } from "../components/AnatBonesTP2";
import { PeritoneumSagittalDiagram, DuodenumPancreasDiagram, StomachPartsDiagram, LiverViewsDiagram, KidneySectionDiagram, UterusAdnexaDiagram } from "../components/AnatViscera";
import { HipJointDiagram, KneeJointDiagram, LegCompartmentsDiagram, LowerLimbArteriesDiagram, LowerLimbNervesDiagram, AbdominalWallDiagram } from "../components/AnatLowerTrunk";
import { ArmCompartmentsDiagram, ForearmCompartmentsDiagram, ForearmInnervationDiagram, JointTypesDiagram, ShoulderJointDiagram, ElbowJointDiagram, HandInnervationDiagram, ShoulderMusclesDiagram, GirdleMusclesDiagram, UpperLimbArteriesDiagram, BrachialPlexusDiagram, UpperLimbNervesCourseDiagram } from "../components/AnatUpperLimb";
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
  "anat/arm-compartments": () => <ArmCompartmentsDiagram />,
  "anat/forearm-compartments": () => <ForearmCompartmentsDiagram />,
  "anat/forearm-innervation": () => <ForearmInnervationDiagram />,
  "anat/joint-types": () => <JointTypesDiagram />,
  "anat/shoulder-joint": () => <ShoulderJointDiagram />,
  "anat/elbow-joint": () => <ElbowJointDiagram />,
  "anat/hand-innervation": () => <HandInnervationDiagram />,
  "anat/shoulder-muscles": () => <ShoulderMusclesDiagram />,
  "anat/girdle-muscles": () => <GirdleMusclesDiagram />,
  "anat/upper-limb-arteries": () => <UpperLimbArteriesDiagram />,
  "anat/brachial-plexus": () => <BrachialPlexusDiagram />,
  "anat/upper-limb-nerves": () => <UpperLimbNervesCourseDiagram />,
  "anat/hip-joint": () => <HipJointDiagram />,
  "anat/knee-joint": () => <KneeJointDiagram />,
  "anat/leg-compartments": () => <LegCompartmentsDiagram />,
  "anat/lower-limb-arteries": () => <LowerLimbArteriesDiagram />,
  "anat/lower-limb-nerves": () => <LowerLimbNervesDiagram />,
  "anat/abdominal-wall": () => <AbdominalWallDiagram />,
  "anat/peritoneum-sagittal": () => <PeritoneumSagittalDiagram />,
  "anat/duodenum-pancreas": () => <DuodenumPancreasDiagram />,
  "anat/stomach-parts": () => <StomachPartsDiagram />,
  "anat/liver-views": () => <LiverViewsDiagram />,
  "anat/kidney-section": () => <KidneySectionDiagram />,
  "anat/uterus-adnexa": () => <UterusAdnexaDiagram />,
  "anat/tp-humerus": () => <HumerusLandmarksDiagram />,
  "anat/tp-scapula": () => <ScapulaReliefsSheet />,
  "anat/tp-femur": () => <FemurLandmarksDiagram />,
  "anat/tp-hip-bone": () => <HipBoneReliefsSheet />,
  "anat/tp-forearm-bones": () => <ForearmBonesSheet />,
  "anat/tp-carpus": () => <CarpusDiagram />,
  "anat/tp-leg-bones": () => <LegBonesSheet />,
  "anat/tp-foot": () => <FootBonesDiagram />,
  "anat/tp-forearm-drawing": () => <ForearmBonesDiagram />,
  "anat/tp-wrist": () => <WristJointDiagram />,
  "anat/tp-hip-drawing": () => <HipBoneDiagram />,
  "anat/tp-leg-drawing": () => <LegBonesDiagram />,
  "anat/tp-ankle": () => <AnkleJointDiagram />,
  "anat/tp-foot-medial": () => <FootMedialBonesDiagram />,
  "anat/rectum-anal": () => <RectumAnalDiagram />,
  "anat/bladder-urethra": () => <BladderUrethraDiagram />,
  "anat/male-genital": () => <MaleGenitalDiagram />,
  "anat/coeliac-trunk": () => <CoeliacTrunkDiagram />,
  "anat/upper-limb-veins": () => <UpperLimbVeinsDiagram />,
  "anat/thigh-compartments": () => <ThighCompartmentsDiagram />,
  "anat/gluteal-muscles": () => <GlutealMusclesDiagram />,
  "anat/thigh-muscles": () => <ThighMusclesDiagram />,
  "anat/lower-limb-veins": () => <LowerLimbVeinsDiagram />,
  "anat/inguinal-region": () => <InguinalRegionDiagram />,
  "anat/peritoneal-compartments": () => <PeritonealCompartmentsDiagram />,
  "anat/retroperitoneal-organs": () => <RetroperitonealOrgansDiagram />,
  "anat/spleen-views": () => <SpleenViewsDiagram />,
  "anat/biliary-tree": () => <BiliaryTreeDiagram />,
  "anat/portal-system": () => <PortalSystemDiagram />,
  "anat/nephron": () => <AnatNephronDiagram />,
  "anat/fallopian-tube": () => <FallopianTubeDiagram />,
  "anat/broad-ligament": () => <BroadLigamentDiagram />,
  "anat/prostate-zones": () => <ProstateZonesDiagram />,
  "anat/testis-epididymis": () => <TestisEpididymisDiagram />,
  "phys/distal-tubule-cells": () => <DistalTubuleCellsDiagram />,
  "phys/renal-acid-base": () => <RenalAcidBaseDiagram />,
  "phys/ammonium-trapping": () => <AmmoniumTrappingDiagram />,
  "phys/pancreatic-secretion": () => <PancreaticSecretionDiagram />,
  "phys/enterohepatic-cycle": () => <EnterohepaticCycleDiagram />,
  "phys/bilirubin": () => <BilirubinMetabolismDiagram />,
  "phys/swallowing": () => <SwallowingStagesDiagram />,
  "phys/fibrinolysis": () => <FibrinolysisDiagram />,
  "phys/platelet-plug": () => <PlateletPlugDiagram />,
  "bio/membrane-protein-types": () => <MembraneProteinTypesDiagram />,
  "bio/membrane-fluidity": () => <MembraneFluidityDiagram />,
  "bio/tertiary-quaternary": () => <TertiaryQuaternaryDiagram />,
  "bio/disaccharides": () => <DisaccharidesDiagram />,
  "bio/glycoconjugates": () => <GlycoconjugatesDiagram />,
  "bio/restriction-enzyme": () => <RestrictionEnzymeDiagram />,
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
