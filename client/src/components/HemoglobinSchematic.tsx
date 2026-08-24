// Schéma pédagogique stylisé de la structure quaternaire de l'hémoglobine
// (tétramère α2β2, un groupe hème par sous-unité) — volontairement abstrait,
// pas une structure cristallographique exacte. Cf. Chapitre 7 (MedByJes).
const SUBUNITS = [
  { cx: 80, cy: 70, label: "α₁", color: "#5b6ee1" },
  { cx: 180, cy: 70, label: "β₁", color: "#4eb0f4" },
  { cx: 80, cy: 170, label: "β₂", color: "#4eb0f4" },
  { cx: 180, cy: 170, label: "α₂", color: "#5b6ee1" },
];

export function HemoglobinSchematic() {
  return (
    <svg viewBox="0 0 260 240" width="240" height="220" role="img" aria-label="Structure quaternaire de l'hémoglobine">
      {SUBUNITS.map((s) => (
        <g key={s.label}>
          <circle cx={s.cx} cy={s.cy} r="42" fill={s.color} opacity="0.18" stroke={s.color} strokeWidth="2" />
          <circle cx={s.cx} cy={s.cy} r="8" fill="#e15b6e" />
          <text x={s.cx} y={s.cy - 52} textAnchor="middle" fontSize="14" fontWeight="600" fill="currentColor">
            {s.label}
          </text>
        </g>
      ))}
      <line x1="122" y1="70" x2="138" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="80" y1="112" x2="80" y2="128" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="180" y1="112" x2="180" y2="128" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="122" y1="170" x2="138" y2="170" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <text x="130" y="228" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">
        Tétramère α₂β₂ — point rouge = groupe hème
      </text>
    </svg>
  );
}
