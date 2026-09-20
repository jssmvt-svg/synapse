import { MOLECULES } from "../library-data/molecules";
import { SOLUBILITY_COLOR, type VitaminDef } from "../library-data/vitamins";
import { MoleculeStructure } from "./MoleculeStructure";

interface VitaminStructureProps {
  vitamin: VitaminDef;
}

// Molécule de référence de chaque vitamine (forme dessinée : la vitamine ou sa
// forme alimentaire courante).
const MOLECULE_OF: Record<string, string> = {
  C: "ascorbate",
  B1: "thiamine",
  B3: "niacin",
  B7: "biotin",
  A: "retinol",
  E: "tocopherol",
  K: "phylloquinone",
};

export function VitaminStructure({ vitamin }: VitaminStructureProps) {
  const color = SOLUBILITY_COLOR[vitamin.solubility];
  const structure = MOLECULES[MOLECULE_OF[vitamin.code] ?? ""];

  return (
    <div className="vitamin-structure">
      {structure && <MoleculeStructure smiles={structure.smiles} label={vitamin.name_fr} />}
      <p className="vitamin-caption" style={{ color }}>
        {vitamin.name_fr} · {vitamin.formula} · {vitamin.solubility === "hydrosoluble" ? "hydrosoluble" : "liposoluble"}
      </p>
    </div>
  );
}
