import { SOLUBILITY_COLOR, type VitaminDef } from "../library-data/vitamins";

interface VitaminStructureProps {
  vitamin: VitaminDef;
}

// Rendu simplifié (formule + solubilité), pas une structure topologique exacte
// — même choix de scope que AminoAcidStructure. Un badge "hydro/liposoluble"
// signale visuellement la famille.
export function VitaminStructure({ vitamin }: VitaminStructureProps) {
  const color = SOLUBILITY_COLOR[vitamin.solubility];

  return (
    <svg viewBox="0 0 260 140" width="220" height="118" role="img" aria-label={vitamin.name_fr}>
      <rect x="8" y="8" width="244" height="124" rx="12" fill={color} opacity="0.12" stroke={color} strokeWidth="1.5" />
      <text x="130" y="45" textAnchor="middle" fontSize="15" fontWeight="700" fill={color}>
        {vitamin.formula}
      </text>
      <text x="130" y="70" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">
        {vitamin.solubility === "hydrosoluble" ? "Hydrosoluble" : "Liposoluble"}
      </text>
      <text x="130" y="105" textAnchor="middle" fontSize="12" fill="currentColor">
        {vitamin.name_fr}
      </text>
    </svg>
  );
}
