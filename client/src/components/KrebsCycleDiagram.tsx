// Schema anime du cycle de Krebs : 8 reactions disposees en cercle, avec un
// point lumineux qui parcourt le cycle en continu pour illustrer sa nature
// cyclique (le produit d'une reaction devient le substrat de la suivante).
const STEPS = [
  { label: "Citrate synthase", short: "1", angle: -90 },
  { label: "Aconitase", short: "2", angle: -45 },
  { label: "Isocitrate DH", short: "3", angle: 0 },
  { label: "α-cétoglutarate DH", short: "4", angle: 45 },
  { label: "Succinyl-CoA synthétase", short: "5", angle: 90 },
  { label: "Succinate DH", short: "6", angle: 135 },
  { label: "Fumarase", short: "7", angle: 180 },
  { label: "Malate DH", short: "8", angle: -135 },
];

const CENTER = 150;
const RADIUS = 110;

function pointOnCircle(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

export function KrebsCycleDiagram() {
  return (
    <svg viewBox="0 0 300 300" width="300" height="300" role="img" aria-label="Cycle de Krebs animé, 8 réactions">
      <style>{`
        @keyframes krebs-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .krebs-orbit-group {
          transform-origin: ${CENTER}px ${CENTER}px;
          animation: krebs-orbit 8s linear infinite;
        }
      `}</style>

      <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />

      {STEPS.map((step, i) => {
        const p = pointOnCircle(step.angle, RADIUS);
        const labelP = pointOnCircle(step.angle, RADIUS + 34);
        return (
          <g key={step.short}>
            <circle cx={p.x} cy={p.y} r="15" fill="#5b6ee1" opacity="0.85" />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
              {step.short}
            </text>
            <text
              x={labelP.x}
              y={labelP.y}
              textAnchor="middle"
              fontSize="10.5"
              fill="currentColor"
              opacity="0.85"
            >
              {step.label}
            </text>
          </g>
        );
      })}

      <g className="krebs-orbit-group">
        <circle cx={CENTER + RADIUS} cy={CENTER} r="6" fill="#e15b6e">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      <text x={CENTER} y={CENTER - 6} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">
        Cycle de Krebs
      </text>
      <text x={CENTER} y={CENTER + 12} textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        2 tours / glucose
      </text>
    </svg>
  );
}
