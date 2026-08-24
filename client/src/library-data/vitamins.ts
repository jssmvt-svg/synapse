// Sous-ensemble de vitamines représentatif (voir plan : B12 omise, structure
// corrine trop complexe pour un rendu simplifié fidèle). Formules et notes
// tirées de la fiche "Les vitamines" (Chapitres MedByJes, Lect10/Lect12).
export type VitaminSolubility = "hydrosoluble" | "liposoluble";

export interface VitaminDef {
  code: string;
  name_fr: string;
  name_en: string;
  formula: string;
  solubility: VitaminSolubility;
  note_fr: string;
}

export const VITAMINS: VitaminDef[] = [
  {
    code: "C",
    name_fr: "Vitamine C (acide ascorbique)",
    name_en: "Vitamin C (ascorbic acid)",
    formula: "C₆H₈O₆",
    solubility: "hydrosoluble",
    note_fr: "Agent réducteur ; cofacteur de l'hydroxylation de la proline pour la synthèse du collagène.",
  },
  {
    code: "B1",
    name_fr: "Vitamine B1 (thiamine)",
    name_en: "Vitamin B1 (thiamine)",
    formula: "C₁₂H₁₇N₄OS⁺",
    solubility: "hydrosoluble",
    note_fr: "Forme active : pyrophosphate de thiamine (TPP), cofacteur des décarboxylations oxydatives.",
  },
  {
    code: "B7",
    name_fr: "Vitamine B7 (biotine)",
    name_en: "Vitamin B7 (biotin)",
    formula: "C₁₀H₁₆N₂O₃S",
    solubility: "hydrosoluble",
    note_fr: "Cofacteur des réactions de carboxylation (transfert de CO₂).",
  },
  {
    code: "B3",
    name_fr: "Vitamine B3 (niacine)",
    name_en: "Vitamin B3 (niacin)",
    formula: "C₆H₅NO₂",
    solubility: "hydrosoluble",
    note_fr: "Précurseur du NAD⁺/NADP⁺ ; une carence sévère cause la pellagre.",
  },
  {
    code: "A",
    name_fr: "Vitamine A (rétinol)",
    name_en: "Vitamin A (retinol)",
    formula: "C₂₀H₃₀O",
    solubility: "liposoluble",
    note_fr: "Précurseur du rétinal (vision) et de l'acide rétinoïque (signalisation cellulaire).",
  },
  {
    code: "E",
    name_fr: "Vitamine E (tocophérol)",
    name_en: "Vitamin E (tocopherol)",
    formula: "C₂₉H₅₀O₂",
    solubility: "liposoluble",
    note_fr: "Antioxydant protégeant les acides gras polyinsaturés membranaires de la peroxydation.",
  },
  {
    code: "K",
    name_fr: "Vitamine K (phylloquinone)",
    name_en: "Vitamin K (phylloquinone)",
    formula: "C₃₁H₄₆O₂",
    solubility: "liposoluble",
    note_fr: "Cofacteur de la gamma-carboxylation des résidus glutamate, essentielle à la coagulation.",
  },
];

export const SOLUBILITY_COLOR: Record<VitaminSolubility, string> = {
  hydrosoluble: "#4eb0f4",
  liposoluble: "#f4a94e",
};
