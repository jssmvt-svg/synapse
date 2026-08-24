import {
  COMPOSITION_PROTEINS_LEARNING,
  STRUCTURE_PROTEINS_LEARNING,
} from "./biochimie-proteines.js";
import { HEMOGLOBIN_LEARNING } from "./biochimie-hemoglobine.js";

// Contenu officiel pré-rédigé : Biochimie, Année 1, Semestre 1.
// Extrait du notebook NotebookLM "Lecture Biochem S1" (11 lectures / sources)
// de l'utilisateur — un chapitre par lecture, dans l'ordre du cours.

export interface LibraryCardSeed {
  question_fr: string;
  question_en: string;
  answer_fr: string;
  answer_en: string;
  // Référence vers un schéma SVG interne (résolu côté client via resolveVisualKey),
  // ex. "vitamin/B1". Absent = carte texte pure.
  visual_key?: string;
}

export interface LibraryChapterSeed {
  ordre: number;
  titre_fr: string;
  titre_en: string;
  description_fr: string;
  description_en: string;
  icone: string;
  cards: LibraryCardSeed[];
  learning?: LibraryLearningSeed;
  // Référence vers un widget interactif de chapitre (ex. "hb-o2-curve"),
  // affiché comme carte supplémentaire dans le hub du chapitre.
  widget_key?: string;
}

export interface LibraryQcmOptionSeed {
  key: string;
  label_fr: string;
  correct: boolean;
}

export interface LibraryQcmSeed {
  prompt_fr: string;
  explanation_fr: string;
  multiple_answers: boolean;
  options: LibraryQcmOptionSeed[];
  // Référence vers un schéma SVG interne affiché au-dessus de l'énoncé,
  // ex. "amino/Gly", "hb-quaternary".
  visual_key?: string;
}

export interface LibraryLearningSeed {
  resource: {
    resource_type: "course" | "revision";
    titre_fr: string;
    source_label: string;
    content_fr: string;
  };
  qcm: LibraryQcmSeed[];
  exam: {
    titre_fr: string;
    duration_seconds: number;
  };
}

export const BIOCHIMIE_S1: LibraryChapterSeed[] = [
  {
    ordre: 1,
    titre_fr: "La biochimie, une science en évolution",
    titre_en: "Biochemistry: An Evolving Science",
    description_fr: "Introduction à la biochimie, unité biochimique du vivant, liaisons chimiques et thermodynamique",
    description_en: "Introduction to biochemistry, biochemical unity of life, chemical bonds and thermodynamics",
    icone: "🧪",
    cards: [
      {
        question_fr: "Quelle est la définition de la biochimie ?",
        question_en: "What is the definition of biochemistry?",
        answer_fr: "L'étude de la chimie des processus de la vie",
        answer_en: "The study of the chemistry of life processes",
      },
      {
        question_fr: "Quels sont les trois domaines fondamentaux de la vie ?",
        question_en: "What are the three fundamental domains of life?",
        answer_fr: "Eukarya (eucaryotes), Bacteria et Archaea",
        answer_en: "Eukarya (eukaryotes), Bacteria, and Archaea",
      },
      {
        question_fr: "Quelles sont la longueur et l'énergie typiques d'une liaison simple C-C ?",
        question_en: "What are the typical length and energy of a C-C single bond?",
        answer_fr: "Longueur de 1,54 Å et énergie de 355 kJ/mol",
        answer_en: "Length of 1.54 Å and energy of 355 kJ/mol",
      },
      {
        question_fr: "Que stipule la première loi de la thermodynamique ?",
        question_en: "What does the First Law of Thermodynamics state?",
        answer_fr: "L'énergie totale d'un système et de son environnement est constante",
        answer_en: "The total energy of a system and its environment is constant",
      },
      {
        question_fr: "Comment évolue l'entropie totale de l'univers selon la deuxième loi de la thermodynamique ?",
        question_en: "How does total universe entropy evolve according to the Second Law of Thermodynamics?",
        answer_fr: "L'entropie totale d'un système plus celle de son environnement augmente toujours",
        answer_en: "The total entropy of a system plus that of its surroundings always increases",
      },
      {
        question_fr: "Quelle est la fonction principale d'un tampon (buffer) ?",
        question_en: "What is the primary function of a buffer?",
        answer_fr: "Résister aux changements de pH dans une solution",
        answer_en: "To resist changes in pH in a solution",
      },
    ],
  },
  {
    ordre: 2,
    titre_fr: "Composition et structure des protéines (partie 1)",
    titre_en: "Protein Composition and Structure (Part 1)",
    description_fr: "Les 20 acides aminés, liaison peptidique et structure primaire des protéines",
    description_en: "The 20 amino acids, peptide bond and primary protein structure",
    icone: "🧬",
    learning: COMPOSITION_PROTEINS_LEARNING,
    cards: [
      {
        question_fr: "De quels composants est constitué un acide alpha-aminé ?",
        question_en: "What components make up an alpha-amino acid?",
        answer_fr: "Un carbone alpha central lié à un groupe amino, un carboxyle, un H et une chaîne latérale R",
        answer_en: "A central alpha carbon linked to an amino group, a carboxyl, an H, and an R side chain",
      },
      {
        question_fr: "Quel type d'isomère d'acides aminés est exclusivement présent dans les protéines ?",
        question_en: "Which type of amino acid isomer is exclusively present in proteins?",
        answer_fr: "Seuls les isomères L constituent les protéines",
        answer_en: "Only L isomers make up proteins",
      },
      {
        question_fr: "Qu'est-ce qu'une liaison peptidique ?",
        question_en: "What is a peptide bond?",
        answer_fr: "Une liaison amide reliant le groupe alpha-carboxyle d'un acide aminé au groupe alpha-amino d'un autre",
        answer_en: "An amide bond linking the alpha-carboxyl group of one amino acid to the alpha-amino group of another",
      },
      {
        question_fr: "Quelle est la directionnalité de la synthèse d'une chaîne polypeptidique ?",
        question_en: "What is the directionality of polypeptide chain synthesis?",
        answer_fr: "De l'extrémité amino (N-terminale) vers l'extrémité carboxyle (C-terminale)",
        answer_en: "From the amino (N-terminal) end to the carboxyl (C-terminal) end",
      },
      {
        question_fr: "Quelles sont les caractéristiques géométriques de la liaison peptidique ?",
        question_en: "What are the geometric characteristics of the peptide bond?",
        answer_fr: "Elle est planaire, rigide et possède un caractère de double liaison partielle",
        answer_en: "It is planar, rigid, and has partial double-bond character",
      },
      {
        question_fr: "Définissez la forme zwitterion d'un acide aminé.",
        question_en: "Define the zwitterion form of an amino acid.",
        answer_fr: "Ion dipolaire avec le groupe amino protoné (-NH3+) et le groupe carboxyle déprotoné (-COO-)",
        answer_en: "Dipolar ion with protonated amino (-NH3+) and deprotonated carboxyl (-COO-) groups",
      },
    ],
  },
  {
    ordre: 3,
    titre_fr: "Composition et structure des protéines (partie 2)",
    titre_en: "Protein Composition and Structure (Part 2)",
    description_fr: "Structures secondaire, tertiaire et quaternaire, repliement et modifications post-traductionnelles",
    description_en: "Secondary, tertiary and quaternary structure, folding and post-translational modifications",
    icone: "🔗",
    learning: STRUCTURE_PROTEINS_LEARNING,
    cards: [
      {
        question_fr: "Quel type de liaison stabilise la structure secondaire en hélice alpha ?",
        question_en: "What type of bond stabilizes the alpha-helix secondary structure?",
        answer_fr: "Des liaisons hydrogène entre les groupes CO et NH du squelette peptidique",
        answer_en: "Hydrogen bonds between the CO and NH groups of the peptide backbone",
      },
      {
        question_fr: "Quelle est la conclusion majeure de l'expérience d'Anfinsen sur la ribonucléase ?",
        question_en: "What is the major conclusion of Anfinsen's experiment on ribonuclease?",
        answer_fr: "L'information nécessaire au repliement correct est inhérente à la structure primaire",
        answer_en: "The information required for proper folding is inherent in the primary structure",
      },
      {
        question_fr: "Qu'est-ce qu'un domaine protéique ?",
        question_en: "What is a protein domain?",
        answer_fr: "Une région d'une chaîne polypeptidique capable de se replier de manière indépendante",
        answer_en: "A region of a polypeptide chain capable of folding independently",
      },
      {
        question_fr: "Donnez un exemple de protéine fibreuse structurale.",
        question_en: "Give an example of a structural fibrous protein.",
        answer_fr: "L'alpha-kératine ou le collagène",
        answer_en: "Alpha-keratin or collagen",
      },
      {
        question_fr: "Définissez la structure quaternaire d'une protéine.",
        question_en: "Define the quaternary structure of a protein.",
        answer_fr: "L'assemblage spatial de plusieurs chaînes polypeptidiques appelées sous-unités",
        answer_en: "The spatial assembly of multiple polypeptide chains called subunits",
      },
      {
        question_fr: "Quelle est la force motrice principale du repliement des protéines globulaires ?",
        question_en: "What is the primary driving force for the folding of globular proteins?",
        answer_fr: "L'effet hydrophobe",
        answer_en: "The hydrophobic effect",
      },
    ],
  },
  {
    ordre: 4,
    titre_fr: "Hémoglobine : une protéine en action",
    titre_en: "Hemoglobin: Portrait of a Protein in Action",
    description_fr: "Transport de l'oxygène par la myoglobine et l'hémoglobine, effet Bohr, pathologies moléculaires",
    description_en: "Oxygen transport by myoglobin and hemoglobin, Bohr effect, molecular pathologies",
    icone: "🩸",
    learning: HEMOGLOBIN_LEARNING,
    widget_key: "hb-o2-curve",
    cards: [
      {
        question_fr: "Quelle protéine assure le stockage de l'oxygène dans les muscles ?",
        question_en: "Which protein ensures oxygen storage in muscles?",
        answer_fr: "La myoglobine",
        answer_en: "Myoglobin",
      },
      {
        question_fr: "Comment est la courbe de liaison à l'oxygène de l'hémoglobine ?",
        question_en: "What is the oxygen binding curve of hemoglobin like?",
        answer_fr: "Sigmoïde, indiquant une liaison coopérative",
        answer_en: "Sigmoid, indicating cooperative binding",
      },
      {
        question_fr: "Quel est l'effet du 2,3-bisphosphoglycérate (2,3-BPG) sur l'hémoglobine ?",
        question_en: "What is the effect of 2,3-bisphosphoglycerate (2,3-BPG) on hemoglobin?",
        answer_fr: "Il réduit l'affinité pour l'O2 en stabilisant l'état T (tendu)",
        answer_en: "It reduces O2 affinity by stabilizing the T (tense) state",
      },
      {
        question_fr: "Qu'est-ce que l'effet Bohr ?",
        question_en: "What is the Bohr effect?",
        answer_fr: "La régulation de la libération d'oxygène par les ions hydrogène (pH) et le CO2",
        answer_en: "Regulation of oxygen release by hydrogen ions (pH) and CO2",
      },
      {
        question_fr: "Quel changement structural subit l'ion fer lors de la liaison de l'O2 ?",
        question_en: "What structural change does the iron ion undergo upon O2 binding?",
        answer_fr: "Il se déplace dans le plan de l'anneau de protoporphyrine",
        answer_en: "It moves into the plane of the protoporphyrin ring",
      },
      {
        question_fr: "Différenciez les états T et R de l'hémoglobine.",
        question_en: "Differentiate between the T and R states of hemoglobin.",
        answer_fr: "État T (tendu, faible affinité) vs État R (relaxé, haute affinité)",
        answer_en: "T state (tense, low affinity) vs R state (relaxed, high affinity)",
      },
    ],
  },
  {
    ordre: 5,
    titre_fr: "Enzymes : concepts de base et cinétique",
    titre_en: "Enzymes: Basic Concepts and Kinetics",
    description_fr: "Catalyse enzymatique, énergie d'activation, cinétique de Michaelis-Menten",
    description_en: "Enzymatic catalysis, activation energy, Michaelis-Menten kinetics",
    icone: "⚗️",
    cards: [
      {
        question_fr: "Quel est l'effet d'une enzyme sur l'énergie d'activation (ΔG‡) d'une réaction ?",
        question_en: "What is the effect of an enzyme on the activation energy (ΔG‡) of a reaction?",
        answer_fr: "Elle l'abaisse pour accélérer la vitesse de réaction",
        answer_en: "It lowers it to accelerate the reaction rate",
      },
      {
        question_fr: "L'énergie libre de Gibbs (ΔG) fournit-elle des informations sur la vitesse d'une réaction ?",
        question_en: "Does Gibbs free energy (ΔG) provide information about the rate of a reaction?",
        answer_fr: "Non, elle indique seulement la spontanéité, pas la vitesse",
        answer_en: "No, it only indicates spontaneity, not rate",
      },
      {
        question_fr: "Définissez la constante de Michaelis (KM).",
        question_en: "Define the Michaelis constant (KM).",
        answer_fr: "La concentration de substrat pour laquelle la vitesse est égale à la moitié de Vmax",
        answer_en: "The substrate concentration at which the velocity is half of Vmax",
      },
      {
        question_fr: "Qu'est-ce qu'une holoenzyme ?",
        question_en: "What is a holoenzyme?",
        answer_fr: "Une enzyme catalytiquement active composée de l'apoenzyme et de son cofacteur",
        answer_en: "A catalytically active enzyme consisting of an apoenzyme and its cofactor",
      },
      {
        question_fr: "Décrivez le modèle de l'ajustement induit (induced fit).",
        question_en: "Describe the induced fit model.",
        answer_fr: "L'enzyme change de forme lors de la liaison du substrat pour devenir complémentaire à celui-ci",
        answer_en: "The enzyme changes shape upon substrate binding to become complementary to it",
      },
      {
        question_fr: "Quelle est la relation entre KM et l'affinité de l'enzyme (si k-1 >> k2) ?",
        question_en: "What is the relation between KM and enzyme affinity (if k-1 >> k2)?",
        answer_fr: "Un KM élevé indique une faible affinité, un KM bas indique une forte affinité",
        answer_en: "A high KM indicates low affinity, a low KM indicates high affinity",
      },
    ],
  },
  {
    ordre: 6,
    titre_fr: "Stratégies catalytiques",
    titre_en: "Catalytic Strategies",
    description_fr: "Mécanismes chimiques et classification des réactions enzymatiques",
    description_en: "Chemical mechanisms and classification of enzymatic reactions",
    icone: "🔬",
    cards: [
      {
        question_fr: "Quelle est la fonction des enzymes de la classe 7 (Translocases) ?",
        question_en: "What is the function of class 7 enzymes (Translocases)?",
        answer_fr: "Catalyser le mouvement des ions ou molécules à travers les membranes",
        answer_en: "Catalyze the movement of ions or molecules across membranes",
      },
      {
        question_fr: "Quel est le principe de la catalyse covalente ?",
        question_en: "What is the principle of covalent catalysis?",
        answer_fr: "Le site actif contient un nucléophile qui est brièvement modifié de façon covalente",
        answer_en: "The active site contains a nucleophile that is briefly covalently modified",
      },
      {
        question_fr: "Quel ion métallique est essentiel à l'activité de l'anhydrase carbonique ?",
        question_en: "Which metal ion is essential for carbonic anhydrase activity?",
        answer_fr: "L'ion zinc (Zn2+)",
        answer_en: "The zinc ion (Zn2+)",
      },
      {
        question_fr: "Comment les bactéries protègent-elles leur propre ADN des enzymes de restriction ?",
        question_en: "How do bacteria protect their own DNA from restriction enzymes?",
        answer_fr: "Par l'ajout de groupements méthyle sur les sites de reconnaissance (méthylation)",
        answer_en: "By adding methyl groups to recognition sites (methylation)",
      },
      {
        question_fr: "Pourquoi les enzymes de restriction nécessitent-elles du magnésium (Mg2+) ?",
        question_en: "Why do restriction enzymes require magnesium (Mg2+)?",
        answer_fr: "Pour activer la molécule d'eau qui attaque l'atome de phosphore lors du clivage",
        answer_en: "To activate the water molecule that attacks the phosphorus atom during cleavage",
      },
      {
        question_fr: "Qu'est-ce qu'un site de restriction palindromique ?",
        question_en: "What is a palindromic restriction site?",
        answer_fr: "Une séquence d'ADN possédant une symétrie de rotation d'ordre deux",
        answer_en: "A DNA sequence possessing twofold rotational symmetry",
      },
    ],
  },
  {
    ordre: 7,
    titre_fr: "Stratégies de régulation",
    titre_en: "Regulatory Strategies",
    description_fr: "Modes de régulation de l'activité enzymatique : allostérie, modification covalente, zymogènes",
    description_en: "Modes of enzyme activity regulation: allostery, covalent modification, zymogens",
    icone: "🎛️",
    cards: [
      {
        question_fr: "Quelle est la forme de la courbe de vitesse d'une enzyme allostérique ?",
        question_en: "What is the shape of the velocity curve for an allosteric enzyme?",
        answer_fr: "Une courbe sigmoïde (en forme de S)",
        answer_en: "A sigmoid (S-shaped) curve",
      },
      {
        question_fr: "Définissez l'inhibition par rétroaction (feedback inhibition).",
        question_en: "Define feedback inhibition.",
        answer_fr: "Le produit final d'une voie métabolique inhibe l'enzyme de l'étape initiale",
        answer_en: "The final product of a metabolic pathway inhibits the enzyme of the initial step",
      },
      {
        question_fr: "Qu'est-ce qu'une isozyme ?",
        question_en: "What is an isozyme?",
        answer_fr: "Des enzymes homologues qui catalysent la même réaction mais diffèrent par leur structure et régulation",
        answer_en: "Homologous enzymes that catalyze the same reaction but differ in structure and regulation",
      },
      {
        question_fr: "Quelles sont les enzymes responsables de l'ajout et du retrait de groupements phosphate ?",
        question_en: "Which enzymes are responsible for adding and removing phosphate groups?",
        answer_fr: "Les kinases (ajout) et les phosphatases (retrait)",
        answer_en: "Kinases (addition) and phosphatases (removal)",
      },
      {
        question_fr: "Qu'est-ce qu'un zymogène (ou proenzyme) ?",
        question_en: "What is a zymogen (or proenzyme)?",
        answer_fr: "Un précurseur inactif d'une enzyme activé par un clivage protéolytique spécifique",
        answer_en: "An inactive enzyme precursor activated by specific proteolytic cleavage",
      },
      {
        question_fr: "Quel est l'effet de la liaison du CTP sur l'ATCase ?",
        question_en: "What is the effect of CTP binding on ATCase?",
        answer_fr: "Il agit comme un inhibiteur allostérique stabilisant l'état T (tendu)",
        answer_en: "It acts as an allosteric inhibitor stabilizing the T (tense) state",
      },
    ],
  },
  {
    ordre: 8,
    titre_fr: "Glucides",
    titre_en: "Carbohydrates",
    description_fr: "Structure des monosaccharides, disaccharides, polysaccharides et glycoprotéines",
    description_en: "Structure of monosaccharides, disaccharides, polysaccharides and glycoproteins",
    icone: "🍬",
    cards: [
      {
        question_fr: "Quelle est la principale différence structurale entre l'amidon et la cellulose ?",
        question_en: "What is the main structural difference between starch and cellulose?",
        answer_fr: "Liaisons alpha-1,4 (amidon) vs liaisons bêta-1,4 (cellulose)",
        answer_en: "Alpha-1,4 linkages (starch) vs beta-1,4 linkages (cellulose)",
      },
      {
        question_fr: "Comment appelle-t-on les isomères qui diffèrent au niveau du nouveau carbone asymétrique formé lors de la cyclisation ?",
        question_en: "What are isomers called that differ at the new asymmetric carbon formed upon cyclization?",
        answer_fr: "Des anomères (alpha ou bêta)",
        answer_en: "Anomers (alpha or beta)",
      },
      {
        question_fr: "Définissez les lectines.",
        question_en: "Define lectins.",
        answer_fr: "Des protéines spécifiques qui se lient aux glucides sans les modifier",
        answer_en: "Specific carbohydrate-binding proteins that do not modify them",
      },
      {
        question_fr: "Quelle est la modification manquante dans la maladie à inclusions cellulaires (I-cell disease) ?",
        question_en: "What modification is missing in I-cell disease?",
        answer_fr: "Le marqueur mannose 6-phosphate sur les enzymes lysosomales",
        answer_en: "The mannose 6-phosphate marker on lysosomal enzymes",
      },
      {
        question_fr: "Quelles sont les deux formes cycliques possibles pour le fructose ?",
        question_en: "What are the two possible cyclic forms for fructose?",
        answer_fr: "Fructopyranose (cycle à 6) et fructofuranose (cycle à 5)",
        answer_en: "Fructopyranose (6-membered ring) and fructofuranose (5-membered ring)",
      },
      {
        question_fr: "Où s'attachent les glucides dans les glycoprotéines de type N-liées ?",
        question_en: "Where do carbohydrates attach in N-linked glycoproteins?",
        answer_fr: "Sur la chaîne latérale de l'asparagine (Asn)",
        answer_en: "On the side chain of asparagine (Asn)",
      },
    ],
  },
  {
    ordre: 9,
    titre_fr: "Lipides et membranes cellulaires",
    titre_en: "Lipids and Cell Membranes",
    description_fr: "Acides gras, lipides membranaires, architecture et dynamique des membranes",
    description_en: "Fatty acids, membrane lipids, membrane architecture and dynamics",
    icone: "🧈",
    cards: [
      {
        question_fr: "Quelle est l'épaisseur typique d'une membrane biologique ?",
        question_en: "What is the typical thickness of a biological membrane?",
        answer_fr: "Entre 60 Å (6 nm) et 100 Å (10 nm)",
        answer_en: "Between 60 Å (6 nm) and 100 Å (10 nm)",
      },
      {
        question_fr: "Comment l'insaturation cis affecte-t-elle la température de fusion (Tm) des lipides ?",
        question_en: "How does cis unsaturation affect the melting temperature (Tm) of lipids?",
        answer_fr: "Elle l'abaisse en empêchant l'empilement compact des chaînes carbonées",
        answer_en: "It lowers it by preventing the tight packing of carbon chains",
      },
      {
        question_fr: "Citez les trois types majeurs de lipides membranaires.",
        question_en: "Name the three major types of membrane lipids.",
        answer_fr: "Phospholipides, glycolipides et cholestérol",
        answer_en: "Phospholipids, glycolipids, and cholesterol",
      },
      {
        question_fr: "Qu'est-ce que le « flip-flop » dans une membrane ?",
        question_en: "What is \"flip-flop\" in a membrane?",
        answer_fr: "La diffusion transversale très lente d'un lipide d'un feuillet à l'autre",
        answer_en: "The very slow transverse diffusion of a lipid from one leaflet to the other",
      },
      {
        question_fr: "Quel est le rôle du cholestérol dans les membranes animales ?",
        question_en: "What is the role of cholesterol in animal membranes?",
        answer_fr: "Régulateur de fluidité empêchant une rigidité ou une fluidité excessive",
        answer_en: "Fluidity regulator preventing excessive rigidity or fluidity",
      },
      {
        question_fr: "Définissez une protéine membranaire intégrale.",
        question_en: "Define an integral membrane protein.",
        answer_fr: "Une protéine insérée dans la bicouche, la traversant souvent complètement",
        answer_en: "A protein embedded in the bilayer, often spanning it completely",
      },
    ],
  },
  {
    ordre: 10,
    titre_fr: "Vitamines hydrosolubles",
    titre_en: "Water-Soluble Vitamins",
    description_fr: "Propriétés, métabolisme et rôles des vitamines du groupe B et de la vitamine C",
    description_en: "Properties, metabolism and roles of B vitamins and vitamin C",
    icone: "💊",
    cards: [
      {
        question_fr: "Quel est le cofacteur actif de la vitamine B1 (thiamine) ?",
        question_en: "What is the active cofactor of vitamin B1 (thiamine)?",
        answer_fr: "Le pyrophosphate de thiamine (TPP)",
        answer_en: "Thiamin pyrophosphate (TPP)",
        visual_key: "vitamin/B1",
      },
      {
        question_fr: "Quelle maladie résulte d'une carence sévère en niacine (B3) ?",
        question_en: "What disease results from a severe niacin (B3) deficiency?",
        answer_fr: "La pellagre, caractérisée par les « 4 D » (Dermatite, Diarrhée, Dépression, Décès)",
        answer_en: "Pellagra, characterized by the \"4 D's\" (Dermatitis, Diarrhea, Depression, Death)",
        visual_key: "vitamin/B3",
      },
      {
        question_fr: "Quelle protéine gastrique est indispensable à l'absorption de la vitamine B12 ?",
        question_en: "Which gastric protein is essential for vitamin B12 absorption?",
        answer_fr: "Le facteur intrinsèque",
        answer_en: "Intrinsic factor",
      },
      {
        question_fr: "Qu'est-ce que le « piège à folate » (Folate Trap) ?",
        question_en: "What is the \"Folate Trap\"?",
        answer_fr: "Une carence en B12 bloquant le folate sous la forme inutilisable N5-méthyl-THF",
        answer_en: "B12 deficiency trapping folate in the unusable N5-methyl-THF form",
      },
      {
        question_fr: "Quelle est la fonction biochimique majeure de la vitamine C ?",
        question_en: "What is the major biochemical function of vitamin C?",
        answer_fr: "Agent réducteur et hydroxylation de la proline pour la synthèse du collagène",
        answer_en: "Reducing agent and hydroxylation of proline for collagen synthesis",
        visual_key: "vitamin/C",
      },
      {
        question_fr: "Quel est le rôle métabolique principal de la biotine (B7/H) ?",
        question_en: "What is the main metabolic role of biotin (B7/H)?",
        answer_fr: "Cofacteur pour les réactions de carboxylation (transfert de CO2)",
        answer_en: "Cofactor for carboxylation reactions (CO2 transfer)",
        visual_key: "vitamin/B7",
      },
    ],
  },
  {
    ordre: 11,
    titre_fr: "Vitamines liposolubles et cofacteurs apparentés",
    titre_en: "Fat-Soluble Vitamins and Vitamin-like Cofactors",
    description_fr: "Vitamines A, D, E, K et cofacteurs apparentés (CoQ10, carnitine)",
    description_en: "Vitamins A, D, E, K and related cofactors (CoQ10, carnitine)",
    icone: "🌞",
    cards: [
      {
        question_fr: "Quelles sont les trois formes actives de la vitamine A ?",
        question_en: "What are the three active forms of vitamin A?",
        answer_fr: "Rétinol, rétinal et acide rétinoïque",
        answer_en: "Retinol, retinal, and retinoic acid",
        visual_key: "vitamin/A",
      },
      {
        question_fr: "Quelle vitamine est une hormone synthétisée dans la peau via les rayons UV ?",
        question_en: "Which vitamin is a hormone synthesized in the skin via UV rays?",
        answer_fr: "La vitamine D (calciférols)",
        answer_en: "Vitamin D (calciferols)",
      },
      {
        question_fr: "Quelle est la fonction principale de la vitamine E (tocophérols) ?",
        question_en: "What is the primary function of vitamin E (tocopherols)?",
        answer_fr: "Antioxydant protégeant les acides gras polyinsaturés membranaires de la peroxydation",
        answer_en: "Antioxidant protecting membrane polyunsaturated fatty acids from peroxidation",
        visual_key: "vitamin/E",
      },
      {
        question_fr: "Pour quel processus la vitamine K est-elle un cofacteur essentiel ?",
        question_en: "For which process is vitamin K an essential cofactor?",
        answer_fr: "La gamma-carboxylation des résidus glutamate pour la coagulation",
        answer_en: "Gamma-carboxylation of glutamate residues for coagulation",
        visual_key: "vitamin/K",
      },
      {
        question_fr: "Quel est le rôle de l'ubiquinone (CoQ10) dans la mitochondrie ?",
        question_en: "What is the role of ubiquinone (CoQ10) in the mitochondria?",
        answer_fr: "Transporteur d'électrons entre les complexes I ou II et le complexe III",
        answer_en: "Electron transporter between complexes I or II and complex III",
      },
      {
        question_fr: "Quelle est la fonction de la L-carnitine ?",
        question_en: "What is the function of L-carnitine?",
        answer_fr: "Transport des acides gras à longue chaîne dans la matrice mitochondriale",
        answer_en: "Transport of long-chain fatty acids into the mitochondrial matrix",
      },
    ],
  },
];
