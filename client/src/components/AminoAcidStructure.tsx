import { CATEGORY_COLOR, type AminoAcidDef } from "../library-data/amino-acids";

interface AminoAcidStructureProps {
  aa: AminoAcidDef;
}

// Squelette zwitterion commun à tous les acides aminés (H3N+-Cα(H)-COO-), dessiné
// en notation semi-développée, avec le groupement R affiché comme étiquette de
// formule colorée selon la catégorie. Pas une structure topologique exacte —
// choix de scope assumé pour un rendu propre et lisible sur les 20 acides aminés.
export function AminoAcidStructure({ aa }: AminoAcidStructureProps) {
  const color = CATEGORY_COLOR[aa.category];

  return (
    <svg viewBox="0 0 260 140" width="220" height="118" role="img" aria-label={aa.name_fr}>
      <line x1="40" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="2" />
      <line x1="90" y1="70" x2="130" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="90" y1="70" x2="130" y2="100" stroke="currentColor" strokeWidth="2" />
      <line x1="130" y1="100" x2="170" y2="70" stroke="currentColor" strokeWidth="2" />
      <line x1="90" y1="70" x2="90" y2="20" stroke={color} strokeWidth="2" />

      <text x="30" y="74" textAnchor="end" fontSize="14" fill="currentColor">
        H₃N⁺
      </text>
      <text x="90" y="86" textAnchor="middle" fontSize="12" fill="currentColor">
        Cα
      </text>
      <text x="132" y="36" textAnchor="start" fontSize="14" fill="currentColor">
        COO⁻
      </text>
      <text x="172" y="74" textAnchor="start" fontSize="12" fill="currentColor" opacity="0.6">
        H
      </text>
      <text x="90" y="14" textAnchor="middle" fontSize="13" fill={color} fontWeight="600">
        R
      </text>

      <rect x="8" y="98" width="244" height="34" rx="8" fill={color} opacity="0.15" />
      <text x="130" y="120" textAnchor="middle" fontSize="13" fill={color} fontWeight="600">
        R = {aa.rGroupFormula}
      </text>
    </svg>
  );
}
