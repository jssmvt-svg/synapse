import type { ReactNode } from "react";
import { Figure, C, Txt, Dot } from "./Figure";

// Physiologie générale — Lecture 1 (membrane cellulaire) : schémas originaux.

const HEAD = "#5b8def";
const TAIL = "#a07b3c";

// Bicouche phospholipidique : têtes hydrophiles vers l'extérieur, queues au centre.
function Bilayer({ x1, x2, ym, gaps = [], step = 13, half = 36 }: {
  x1: number; x2: number; ym: number; gaps?: [number, number][]; step?: number; half?: number;
}) {
  const items: ReactNode[] = [];
  for (let x = x1; x <= x2; x += step) {
    if (gaps.some(([a, b]) => x > a && x < b)) continue;
    const tail = (dx: number, s: number) => `M${x + dx},${ym + s * (half - 6)} q3,${-s * 7} 0,${-s * 13} q-3,${-s * 7} 0,${-s * 13}`;
    items.push(
      <g key={x}>
        <path d={tail(-2.5, -1)} fill="none" stroke={TAIL} strokeWidth={1.6} />
        <path d={tail(2.5, -1)} fill="none" stroke={TAIL} strokeWidth={1.6} />
        <circle cx={x} cy={ym - half} r={5.5} fill={HEAD} stroke="#2f56b8" strokeWidth={1} />
        <path d={tail(-2.5, 1)} fill="none" stroke={TAIL} strokeWidth={1.6} />
        <path d={tail(2.5, 1)} fill="none" stroke={TAIL} strokeWidth={1.6} />
        <circle cx={x} cy={ym + half} r={5.5} fill={HEAD} stroke="#2f56b8" strokeWidth={1} />
      </g>,
    );
  }
  return <>{items}</>;
}

const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;

// Chaîne glucidique (glycocalyx) : petits carrés verts ramifiés.
function Sugar({ x, y }: { x: number; y: number }) {
  return (
    <g fill={C.green} stroke="#2a7a55" strokeWidth={1}>
      <path d={`M${x},${y} l0,-12 l-8,-9 M${x},${y - 12} l8,-9`} fill="none" stroke="#2a7a55" strokeWidth={1.5} />
      <rect x={x - 3} y={y - 15} width={6} height={6} />
      <rect x={x - 12} y={y - 26} width={6} height={6} />
      <rect x={x + 6} y={y - 26} width={6} height={6} />
    </g>
  );
}

// ─── 1. Membrane cellulaire (mosaïque fluide) ────────────────────────────
export function CellMembraneDiagram() {
  const ym = 210;
  return (
    <Figure viewBox="0 0 720 410" title="Modèle de la mosaïque fluide de la membrane cellulaire" caption="Membrane cellulaire : bicouche de phospholipides, cholestérol, glycolipides, protéines intégrales et périphériques">
      <Txt x={20} y={24} anchor="start" bold size={13}>Milieu extracellulaire</Txt>
      <Txt x={20} y={398} anchor="start" bold size={13}>Cytoplasme (milieu intracellulaire)</Txt>
      <Bilayer x1={30} x2={600} ym={ym} gaps={[[186, 258], [314, 352], [424, 488]]} />

      {/* canal ionique */}
      <g fill={C.violet} fillOpacity={0.45} stroke="#6a45b0" strokeWidth={2}>
        <rect x={190} y={146} width={22} height={128} rx={9} />
        <rect x={232} y={146} width={22} height={128} rx={9} />
      </g>
      <Dot path="M222,110 L222,320" dur={2.6} r={4.5} color={C.amber} />
      <Dot path="M222,110 L222,320" dur={2.6} delay={1.3} r={4.5} color={C.amber} />

      {/* glycoprotéine */}
      <rect x={318} y={150} width={30} height={124} rx={12} fill={C.green} fillOpacity={0.45} stroke="#2a7a55" strokeWidth={2} />
      <Sugar x={333} y={150} />

      {/* transporteur */}
      <path d="M428,150 h56 q4,0 4,4 v42 q-10,12 0,22 v44 q0,4 -4,4 h-56 q-4,0 -4,-4 v-44 q10,-10 0,-22 v-42 q0,-4 4,-4z" fill={C.pink} fillOpacity={0.5} stroke="#b0507a" strokeWidth={2} />

      {/* glycolipide */}
      <Sugar x={78} y={ym - 44} />
      {/* cholestérol */}
      {[[268, 244], [372, 246], [520, 244]].map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y})`}>
          <polygon points="0,0 8,-5 16,0 16,10 8,15 0,10" fill={C.amber} fillOpacity={0.7} stroke="#a3701a" />
          <polygon points="16,0 24,-5 32,0 32,10 24,15 16,10" fill={C.amber} fillOpacity={0.7} stroke="#a3701a" />
          <path d="M32,5 l8,-2 l3,8 l8,-2" fill="none" stroke="#a3701a" strokeWidth={1.5} />
        </g>
      ))}
      {/* protéines périphériques */}
      <ellipse cx={560} cy={ym - 52} rx={28} ry={15} fill={C.amber} fillOpacity={0.7} stroke="#a3701a" strokeWidth={2} />
      <ellipse cx={392} cy={ym + 52} rx={30} ry={15} fill={C.amber} fillOpacity={0.7} stroke="#a3701a" strokeWidth={2} />

      {/* légendes du haut */}
      <line x1={78} y1={ym - 70} x2={78} y2={66} {...leader} />
      <Txt x={78} y={58} bold size={11}>Glycolipide</Txt>
      <Txt x={78} y={46} size={10} color={C.grey}>(glycocalyx)</Txt>
      <line x1={222} y1={146} x2={222} y2={66} {...leader} />
      <Txt x={222} y={58} bold size={11}>Canal ionique</Txt>
      <Txt x={222} y={46} size={10} color={C.grey}>protéine intégrale</Txt>
      <line x1={333} y1={124} x2={333} y2={66} {...leader} />
      <Txt x={333} y={58} bold size={11}>Glycoprotéine</Txt>
      <line x1={456} y1={150} x2={456} y2={66} {...leader} />
      <Txt x={456} y={58} bold size={11}>Transporteur</Txt>
      <Txt x={456} y={46} size={10} color={C.grey}>protéine intégrale</Txt>
      <line x1={560} y1={ym - 67} x2={560} y2={66} {...leader} />
      <Txt x={560} y={58} bold size={11}>Protéine périphérique</Txt>
      <Txt x={560} y={46} size={10} color={C.grey}>face externe</Txt>
      {/* légendes du bas */}
      <line x1={284} y1={262} x2={230} y2={340} {...leader} />
      <Txt x={230} y={356} bold size={11}>Cholestérol</Txt>
      <Txt x={230} y={370} size={10} color={C.grey}>flexibilité, stabilité</Txt>
      <line x1={392} y1={ym + 67} x2={440} y2={340} {...leader} />
      <Txt x={470} y={356} bold size={11}>Protéine périphérique</Txt>
      <Txt x={470} y={370} size={10} color={C.grey}>face interne (ex. adénylate cyclase)</Txt>

      <Txt x={612} y={ym - 30} anchor="start" size={11} color={HEAD} bold>Têtes</Txt>
      <Txt x={612} y={ym - 17} anchor="start" size={11} color={HEAD} bold>hydrophiles</Txt>
      <Txt x={612} y={ym + 4} anchor="start" size={11} color={TAIL} bold>Queues</Txt>
      <Txt x={612} y={ym + 17} anchor="start" size={11} color={TAIL} bold>hydrophobes</Txt>
    </Figure>
  );
}

// ─── 2. Classification des lipides membranaires ──────────────────────────
export function LipidClassesDiagram() {
  const col = (x: number, title: string, sub: string, lines: string[], color: string, icon: ReactNode) => (
    <g key={title}>
      <rect x={x} y={12} width={216} height={296} rx={12} fill={color} fillOpacity={0.08} stroke={color} strokeWidth={1.5} />
      <Txt x={x + 108} y={36} bold size={14} color={color}>{title}</Txt>
      <Txt x={x + 108} y={52} size={11} color={C.grey}>{sub}</Txt>
      {icon}
      {lines.map((l, i) => <Txt key={l} x={x + 12} y={196 + i * 16} anchor="start" size={11}>{l}</Txt>)}
    </g>
  );
  const phospho = (cx: number, sugar = false) => (
    <g transform={`translate(${cx} 70)`}>
      <circle cx={0} cy={20} r={13} fill={HEAD} stroke="#2f56b8" strokeWidth={1.5} />
      <path d="M-5,33 q-5,16 0,30 q5,16 0,30" fill="none" stroke={TAIL} strokeWidth={3} />
      <path d="M5,33 q5,16 0,30 q-5,16 0,30" fill="none" stroke={TAIL} strokeWidth={3} />
      <Txt x={0} y={24} size={9} color="#fff" bold>P</Txt>
      {sugar && (
        <g fill={C.green} stroke="#2a7a55">
          <path d="M0,7 l0,-8 l-9,-8 M0,-1 l9,-8" fill="none" strokeWidth={1.5} />
          <rect x={-3} y={-6} width={6} height={6} /><rect x={-13} y={-16} width={7} height={7} /><rect x={6} y={-16} width={7} height={7} />
        </g>
      )}
    </g>
  );
  return (
    <Figure viewBox="0 0 700 320" title="Classification des lipides membranaires" caption="Les trois grandes classes de lipides membranaires et leurs rôles">
      {col(10, "Phospholipides", "lipides majoritaires",
        ["▪ tête hydrophile + 2 queues hydrophobes", "▪ matrice de la bicouche : perméabilité", "  sélective", "▪ PIP₂ → IP₃ + DAG (messagers)", "▪ acide arachidonique → eicosanoïdes"], C.blue, phospho(108))}
      {col(242, "Cholestérol", "face interne de la bicouche",
        ["▪ noyau stéroïde rigide + queue courte", "▪ apporte flexibilité et stabilité", "▪ contribue à la sélectivité de la", "  membrane", "▪ précurseur des hormones stéroïdes"], C.amber, (
          <g transform="translate(350 72)">
            {[[-28, 30], [-4, 16], [20, 30], [-4, 44]].map(([x, y], i) => (
              <polygon key={i} points={`${x},${y - 12} ${x + 12},${y - 20} ${x + 24},${y - 12} ${x + 24},${y + 2} ${x + 12},${y + 10} ${x},${y + 2}`} fill={C.amber} fillOpacity={0.55} stroke="#a3701a" strokeWidth={1.5} />
            ))}
            <path d="M44,20 l14,-6 l4,14 l14,-6" fill="none" stroke="#a3701a" strokeWidth={2} />
            <circle cx={-30} cy={30} r={5} fill={C.red} /><Txt x={-30} y={52} size={9}>OH</Txt>
          </g>
        ))}
      {col(474, "Glycolipides", "face externe de la bicouche",
        ["▪ lipide + chaîne glucidique", "▪ forment le glycocalyx", "  (« atmosphère péricellulaire »)", "▪ contacts avec le milieu extra-", "  cellulaire, reconnaissance cellulaire"], C.green, phospho(582, true))}
    </Figure>
  );
}

// ─── 3. Messagers intra- et extracellulaires issus des lipides ───────────
export function LipidMessengersDiagram() {
  const box = (x: number, y: number, w: number, h: number, t: string, color: string, sub?: string) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={color} fillOpacity={0.16} stroke={color} strokeWidth={1.8} />
      <Txt x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} bold size={12}>{t}</Txt>
      {sub && <Txt x={x + w / 2} y={y + h / 2 + 13} size={10} color={C.grey}>{sub}</Txt>}
    </g>
  );
  const arrow = (d: string, cls = "fig-flow") => <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={cls} markerEnd="url(#fig-arrow)" />;
  return (
    <Figure viewBox="0 0 720 430" title="Cascades des messagers lipidiques" caption="Deux cascades issues de la membrane : messagers intracellulaires (PIP₂) et extracellulaires (acide arachidonique)">
      <rect x={0} y={0} width={720} height={18} fill={C.blue} fillOpacity={0.12} />
      <Txt x={10} y={13} anchor="start" size={10} color={C.grey}>MEMBRANE CELLULAIRE (face interne)</Txt>

      <Txt x={170} y={46} bold size={14} color={C.violet}>Messagers intracellulaires</Txt>
      {box(60, 60, 220, 40, "PIP₂", C.blue, "phosphatidylinositol-4,5-biphosphate")}
      <Txt x={170} y={128} size={11} color={C.violet} bold>phospholipase C</Txt>
      {box(20, 146, 100, 34, "IP₃", C.violet)}
      {box(220, 146, 100, 34, "DAG", C.amber)}
      {arrow("M170,104 L80,142")}
      {arrow("M170,104 L270,142")}
      {arrow("M70,184 L70,232")}
      {arrow("M270,184 L270,232")}
      {box(10, 236, 120, 48, "Réticulum", C.grey, "endoplasmique")}
      {box(210, 236, 120, 48, "Protéine kinase C", C.amber)}
      {arrow("M70,288 L70,326")}
      {arrow("M270,288 L270,326")}
      {box(10, 330, 120, 44, "↑ Ca²⁺ libéré", C.violet, "dans le cytosol")}
      {box(210, 330, 120, 44, "Phosphorylation", C.amber, "de protéines cibles")}

      <line x1={365} y1={40} x2={365} y2={415} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />

      <Txt x={540} y={46} bold size={14} color={C.red}>Messagers extracellulaires</Txt>
      {box(430, 60, 220, 40, "Acide arachidonique", C.blue, "issu des phospholipides membranaires")}
      {arrow("M480,104 L400,166")}
      {arrow("M600,104 L660,166")}
      <Txt x={380} y={140} anchor="end" size={11} color={C.red} bold>cyclo-oxygénase</Txt>
      <Txt x={678} y={140} anchor="end" size={11} color={C.red} bold>lipoxygénase</Txt>
      {box(376, 170, 104, 34, "Prostaglandines", C.pink)}
      {box(384, 226, 190, 44, "Prostacycline (PGI₂)", C.green, "vasodilatatrice, antiagrégante")}
      {box(384, 284, 190, 44, "Thromboxane (TxA₂)", C.red, "vasoconstricteur, proagrégant")}
      {arrow("M428,208 L428,224")}
      {arrow("M400,208 L368,208 L368,306 L382,306")}
      {box(590, 170, 122, 44, "Leucotriènes", C.violet)}
      <Txt x={651} y={240} size={11}>réponse inflammatoire</Txt>
      <Txt x={651} y={256} size={11}>bronchoconstriction</Txt>
      {arrow("M651,218 L651,228")}
      <Txt x={540} y={400} size={11} color={C.grey}>Sortent de la cellule : agissent sur les cellules voisines (paracrine)</Txt>
    </Figure>
  );
}

// ─── 4. Protéines membranaires ───────────────────────────────────────────
export function MembraneProteinsDiagram() {
  const ym = 178;
  const rect = (x: number, w: number, color: string, top = 112, bot = 244) => (
    <rect x={x} y={top} width={w} height={bot - top} rx={10} fill={color} fillOpacity={0.5} stroke={color} strokeWidth={2} />
  );
  return (
    <Figure viewBox="0 0 740 400" title="Protéines membranaires : intégrales et périphériques" caption="Les protéines occupent la moitié de la masse membranaire : intégrales (transmembranaires) et périphériques">
      <Txt x={14} y={20} anchor="start" size={11} color={C.grey} bold>EXTÉRIEUR</Txt>
      <Txt x={14} y={392} anchor="start" size={11} color={C.grey} bold>INTÉRIEUR</Txt>
      <Bilayer x1={20} x2={720} ym={ym} gaps={[[56, 100], [140, 184], [224, 292], [332, 376], [416, 460], [500, 544]]} step={12} half={32} />

      {/* intégrales */}
      {rect(60, 36, C.violet, 118, 240)}
      <path d="M78,124 v112" stroke="#fff" strokeWidth={9} strokeOpacity={0.7} />
      {rect(144, 36, C.pink, 118, 240)}
      <g transform="translate(228 110)">
        <rect x={0} y={0} width={64} height={136} rx={12} fill={C.amber} fillOpacity={0.45} stroke={C.amber} strokeWidth={2} />
        <path d="M14,-4 q18,-28 36,0" fill="none" stroke={C.amber} strokeWidth={4} />
      </g>
      {rect(336, 36, C.green, 118, 240)}
      <path d="M354,118 v-22 m0,10 l-8,-8 m8,8 l8,-8" fill="none" stroke={C.green} strokeWidth={2} />
      {rect(420, 36, C.blue, 118, 240)}
      {[0, 1, 2].map((i) => <line key={i} x1={438} y1={248 + i * 8} x2={438 + (i - 1) * 16} y2={292 + i * 6} stroke={C.blue} strokeWidth={2.5} />)}
      {rect(504, 36, C.red, 118, 240)}
      <circle cx={522} cy={102} r={9} fill={C.red} />
      {/* périphériques */}
      <ellipse cx={618} cy={ym - 52} rx={30} ry={16} fill={C.grey} fillOpacity={0.6} stroke={C.grey} strokeWidth={2} />
      <ellipse cx={664} cy={ym + 52} rx={32} ry={16} fill={C.grey} fillOpacity={0.6} stroke={C.grey} strokeWidth={2} />
      {/* cytosquelette */}
      <path d="M380,300 Q440,330 520,300 T680,320" fill="none" stroke={C.blue} strokeWidth={3} strokeDasharray="8 4" opacity={0.7} />

      {[
        [78, "Canal", "passage d'ions", C.violet],
        [162, "Transporteur", "pompe, échangeur", C.pink],
        [260, "Récepteur", "reçoit le ligand", C.amber],
        [354, "Enzyme", "catalyse", C.green],
        [438, "Ancrage", "cytosquelette", C.blue],
        [522, "Marqueur", "identité", C.red],
      ].map(([x, t, s, c]) => (
        <g key={String(t)}>
          <Txt x={Number(x)} y={340} bold size={11} color={String(c)}>{String(t)}</Txt>
          <Txt x={Number(x)} y={354} size={9.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      <Txt x={618} y={60} bold size={11}>Périphériques</Txt>
      <Txt x={618} y={73} size={9.5} color={C.grey}>liaison faible, mobiles :</Txt>
      <Txt x={618} y={85} size={9.5} color={C.grey}>enzymes, ancrage</Txt>
      <Txt x={200} y={60} bold size={12}>Protéines intégrales (transmembranaires)</Txt>
      <Txt x={200} y={75} size={10} color={C.grey}>traversent la bicouche, fortement glycosylées côté externe</Txt>
    </Figure>
  );
}
