// Les 20 acides aminés protéinogènes. Classification fonctionnelle fidèle à la
// fiche de cours (Chapitre 2 — Composition et structure des protéines, MedByJes /
// Berg, Biochemistry 9e éd.) : 4 classes selon la charge au pH physiologique,
// + un indicateur "aromatique" transversal (Phe/Tyr/Trp) utile pour varier les
// distracteurs du quiz d'identification.
export type AminoAcidCategory = "hydrophobe" | "polaire" | "charge_positif" | "charge_negatif";

export interface AminoAcidDef {
  code3: string;
  code1: string;
  name_fr: string;
  name_en: string;
  category: AminoAcidCategory;
  aromatic?: boolean;
  rGroupFormula: string;
  note_fr: string;
  note_en: string;
}

export const AMINO_ACIDS: AminoAcidDef[] = [
  { code3: "Gly", code1: "G", name_fr: "Glycine", name_en: "Glycine", category: "hydrophobe", rGroupFormula: "-H", note_fr: "Le plus petit acide aminé — pas de carbone chiral, grande flexibilité de la chaîne.", note_en: "The smallest amino acid — no chiral carbon, great chain flexibility." },
  { code3: "Ala", code1: "A", name_fr: "Alanine", name_en: "Alanine", category: "hydrophobe", rGroupFormula: "-CH₃", note_fr: "Chaîne latérale méthyle, simple et peu encombrante.", note_en: "Methyl side chain, simple and not bulky." },
  { code3: "Val", code1: "V", name_fr: "Valine", name_en: "Valine", category: "hydrophobe", rGroupFormula: "-CH(CH₃)₂", note_fr: "Acide aminé ramifié (branched-chain), typique des cœurs hydrophobes.", note_en: "Branched-chain amino acid, typical of hydrophobic cores." },
  { code3: "Leu", code1: "L", name_fr: "Leucine", name_en: "Leucine", category: "hydrophobe", rGroupFormula: "-CH₂CH(CH₃)₂", note_fr: "Acide aminé ramifié, très fréquent dans les hélices α.", note_en: "Branched-chain amino acid, very common in α-helices." },
  { code3: "Ile", code1: "I", name_fr: "Isoleucine", name_en: "Isoleucine", category: "hydrophobe", rGroupFormula: "-CH(CH₃)CH₂CH₃", note_fr: "Acide aminé ramifié, possède un second centre chiral sur le Cβ.", note_en: "Branched-chain amino acid with a second chiral centre on Cβ." },
  { code3: "Pro", code1: "P", name_fr: "Proline", name_en: "Proline", category: "hydrophobe", rGroupFormula: "cyclique (imino-acide)", note_fr: "Le seul imino-acide : la chaîne latérale reboucle sur l'azote de la fonction amine, ce qui rigidifie le squelette et rompt les hélices α.", note_en: "The only imino acid: the side chain loops back onto the amine nitrogen, which stiffens the backbone and breaks α-helices." },
  { code3: "Met", code1: "M", name_fr: "Méthionine", name_en: "Methionine", category: "hydrophobe", rGroupFormula: "-CH₂CH₂SCH₃", note_fr: "Contient un soufre thioéther ; premier acide aminé de toute chaîne polypeptidique (codon START).", note_en: "Contains a thioether sulfur; first amino acid of every polypeptide chain (START codon)." },
  { code3: "Phe", code1: "F", name_fr: "Phénylalanine", name_en: "Phenylalanine", category: "hydrophobe", aromatic: true, rGroupFormula: "-CH₂-C₆H₅", note_fr: "Cycle aromatique (phényle) sans groupe hydroxyle.", note_en: "Aromatic (phenyl) ring without a hydroxyl group." },
  { code3: "Trp", code1: "W", name_fr: "Tryptophane", name_en: "Tryptophan", category: "hydrophobe", aromatic: true, rGroupFormula: "-CH₂-(indole)", note_fr: "Le plus volumineux des 20 acides aminés ; sa chaîne latérale contient un groupe indole.", note_en: "The bulkiest of the 20 amino acids; its side chain contains an indole group." },
  { code3: "Ser", code1: "S", name_fr: "Sérine", name_en: "Serine", category: "polaire", rGroupFormula: "-CH₂OH", note_fr: "Groupe hydroxyle, souvent phosphorylé (régulation) ou impliqué dans la triade catalytique des sérine-protéases.", note_en: "Hydroxyl group, often phosphorylated (regulation) or part of the catalytic triad of serine proteases." },
  { code3: "Thr", code1: "T", name_fr: "Thréonine", name_en: "Threonine", category: "polaire", rGroupFormula: "-CH(OH)CH₃", note_fr: "Groupe hydroxyle sur un carbone chiral supplémentaire.", note_en: "Hydroxyl group on an additional chiral carbon." },
  { code3: "Tyr", code1: "Y", name_fr: "Tyrosine", name_en: "Tyrosine", category: "polaire", aromatic: true, rGroupFormula: "-CH₂-C₆H₄OH", note_fr: "Cycle aromatique avec groupe hydroxyle phénolique ; site fréquent de phosphorylation.", note_en: "Aromatic ring with a phenolic hydroxyl group; a frequent phosphorylation site." },
  { code3: "Cys", code1: "C", name_fr: "Cystéine", name_en: "Cysteine", category: "polaire", rGroupFormula: "-CH₂SH", note_fr: "Groupe thiol capable de former un pont disulfure (–S–S–) avec une autre cystéine.", note_en: "Thiol group able to form a disulfide bridge (–S–S–) with another cysteine." },
  { code3: "Asn", code1: "N", name_fr: "Asparagine", name_en: "Asparagine", category: "polaire", rGroupFormula: "-CH₂CONH₂", note_fr: "Amide de l'acide aspartique, chaîne latérale non chargée mais polaire.", note_en: "Amide of aspartic acid; uncharged but polar side chain." },
  { code3: "Gln", code1: "Q", name_fr: "Glutamine", name_en: "Glutamine", category: "polaire", rGroupFormula: "-CH₂CH₂CONH₂", note_fr: "Amide de l'acide glutamique, chaîne latérale non chargée mais polaire.", note_en: "Amide of glutamic acid; uncharged but polar side chain." },
  { code3: "Asp", code1: "D", name_fr: "Acide aspartique", name_en: "Aspartate", category: "charge_negatif", rGroupFormula: "-CH₂COO⁻", note_fr: "Carboxyle latéral déprotoné (COO⁻) au pH physiologique.", note_en: "Side-chain carboxyl deprotonated (COO⁻) at physiological pH." },
  { code3: "Glu", code1: "E", name_fr: "Acide glutamique", name_en: "Glutamate", category: "charge_negatif", rGroupFormula: "-CH₂CH₂COO⁻", note_fr: "Carboxyle latéral déprotoné (COO⁻) au pH physiologique.", note_en: "Side-chain carboxyl deprotonated (COO⁻) at physiological pH." },
  { code3: "Lys", code1: "K", name_fr: "Lysine", name_en: "Lysine", category: "charge_positif", rGroupFormula: "-(CH₂)₄NH₃⁺", note_fr: "Groupe amine primaire protoné au pH physiologique.", note_en: "Primary amine group protonated at physiological pH." },
  { code3: "Arg", code1: "R", name_fr: "Arginine", name_en: "Arginine", category: "charge_positif", rGroupFormula: "-(CH₂)₃NH-C(NH₂)=NH₂⁺", note_fr: "Porte un groupe guanidinium, chargé positivement.", note_en: "Carries a guanidinium group, positively charged." },
  { code3: "His", code1: "H", name_fr: "Histidine", name_en: "Histidine", category: "charge_positif", rGroupFormula: "-CH₂-(imidazole)", note_fr: "Groupe imidazole avec un pKa voisin de 6, proche du pH physiologique — rôle catalytique fréquent (accepte/cède un proton facilement).", note_en: "Imidazole group with a pKa near 6, close to physiological pH — frequent catalytic role (easily accepts/donates a proton)." },
];

export const CATEGORY_LABEL_FR: Record<AminoAcidCategory, string> = {
  hydrophobe: "Hydrophobe",
  polaire: "Polaire non chargé",
  charge_positif: "Chargé positivement",
  charge_negatif: "Chargé négativement",
};

export const CATEGORY_LABEL_EN: Record<AminoAcidCategory, string> = {
  hydrophobe: "Hydrophobic",
  polaire: "Polar, uncharged",
  charge_positif: "Positively charged",
  charge_negatif: "Negatively charged",
};

export const CATEGORY_COLOR: Record<AminoAcidCategory, string> = {
  hydrophobe: "#f4a94e",
  polaire: "#4eb0f4",
  charge_positif: "#5b6ee1",
  charge_negatif: "#e15b6e",
};
