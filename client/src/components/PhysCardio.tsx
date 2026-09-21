import type { ReactNode } from "react";
import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";

// Physiologie S1 — cardiologie : un schéma par sous-partie du cours (valeurs alignées sur le texte).

export const grid = { stroke: "currentColor", strokeOpacity: 0.12, strokeWidth: 1 } as const;
export const dash = { stroke: "currentColor", strokeOpacity: 0.4, strokeWidth: 1, strokeDasharray: "5 4" } as const;

// Repère fléché : origine (x, y) en bas à gauche, largeur w, hauteur h.
export function Ax({ x, y, w, h, xl, yl }: { x: number; y: number; w: number; h: number; xl?: string; yl?: string }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x} y2={y - h} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
      <line x1={x} y1={y} x2={x + w} y2={y} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
      {xl && <Txt x={x + w / 2} y={y + 32} size={10.5} bold>{xl}</Txt>}
      {yl && <text transform={`translate(${x - 38} ${y - h / 2}) rotate(-90)`} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="currentColor">{yl}</text>}
    </g>
  );
}

export function Card({ x, y, w, h, title, lines, color }: { x: number; y: number; w: number; h?: number; title: string; lines: string[]; color: string }) {
  const height = h ?? 26 + lines.length * 14;
  return (
    <g>
      <rect x={x} y={y} width={w} height={height} rx={9} fill={color} fillOpacity={0.13} stroke={color} strokeWidth={1.8} />
      <rect x={x} y={y} width={7} height={height} rx={3.5} fill={color} />
      <Txt x={x + 16} y={y + 17} anchor="start" bold size={11.5}>{title}</Txt>
      {lines.map((l, i) => <Txt key={i} x={x + 16} y={y + 32 + i * 14} anchor="start" size={9.8} color={C.grey}>{l}</Txt>)}
    </g>
  );
}

export const dot = (x: number, y: number, n: string | number, c: string): ReactNode => (
  <g key={`${x}-${y}`}>
    <circle cx={x} cy={y} r={9} fill={c} />
    <Txt x={x} y={y + 3.5} bold size={10} color="#fff">{n}</Txt>
  </g>
);

// ─── 2. Le myocyte ───────────────────────────────────────────────────────
export function MyocyteDiagram() {
  const zs = Array.from({ length: 12 }, (_, i) => 60 + i * 30);
  return (
    <Figure viewBox="0 0 740 470" title="Le myocyte cardiaque : structure et équipement membranaire" caption="Cellule striée d'environ 25 µm × 100 µm : myofibrilles (½ du volume), mitochondries très nombreuses, tubules T (surtout ventriculaires), réticulum sarcoplasmique peu développé (double source de Ca²⁺), disque intercalaire avec jonctions communicantes">
      <rect x={30} y={60} width={450} height={170} rx={30} fill={C.red} fillOpacity={0.08} stroke={C.red} strokeWidth={2.4} />
      <rect x={488} y={80} width={130} height={130} rx={26} fill={C.red} fillOpacity={0.05} stroke={C.red} strokeWidth={2} strokeDasharray="6 4" />
      {/* sarcomères */}
      {zs.map((z, i) => <line key={z} x1={z + 4} y1={78} x2={z + 4} y2={212} stroke={DEEP.blue} strokeWidth={2.4} opacity={i > 9 ? 0 : 0.85} />)}
      {zs.slice(0, 10).map((z) => <rect key={z} x={z + 9} y={98} width={20} height={94} fill={C.violet} fillOpacity={0.22} />)}
      {/* noyau */}
      <ellipse cx={230} cy={145} rx={30} ry={22} fill={C.blue} fillOpacity={0.35} stroke={C.blue} strokeWidth={2} />
      {/* mitochondries */}
      {[[108, 88], [168, 202], [290, 88], [350, 202], [410, 90]].map(([mx, my]) => <ellipse key={`${mx}${my}`} cx={mx} cy={my} rx={14} ry={7} fill={C.amber} fillOpacity={0.6} stroke={C.amber} strokeWidth={1.6} />)}
      {/* tubules T et RS */}
      {[94, 184, 274, 364].map((tx) => (
        <g key={tx}>
          <path d={`M${tx},60 L${tx},130`} stroke={C.green} strokeWidth={4.5} strokeLinecap="round" />
          <ellipse cx={tx - 9} cy={150} rx={5} ry={17} fill="none" stroke={C.pink} strokeWidth={2.4} />
          <ellipse cx={tx + 9} cy={150} rx={5} ry={17} fill="none" stroke={C.pink} strokeWidth={2.4} />
        </g>
      ))}
      {/* disque intercalaire */}
      <path d="M480,64 L468,86 L492,108 L468,130 L492,152 L468,174 L492,196 L480,226" fill="none" stroke={C.violet} strokeWidth={4.5} />
      <circle cx={480} cy={108} r={5} fill={C.amber} /><circle cx={480} cy={152} r={5} fill={C.amber} /><circle cx={480} cy={196} r={5} fill={C.amber} />
      <line x1={480} y1={230} x2={520} y2={262} {...dash} /><Txt x={526} y={272} anchor="start" bold size={10.5} color={DEEP.violet}>Disque intercalaire</Txt>
      <Txt x={526} y={286} anchor="start" size={9.5} color={C.grey}>jonctions communicantes : le cœur</Txt>
      <Txt x={526} y={299} anchor="start" size={9.5} color={C.grey}>fonctionne en syncytium</Txt>
      {/* légendes */}
      <line x1={94} y1={60} x2={94} y2={38} {...dash} /><Txt x={94} y={30} bold size={10} color={DEEP.green}>Tubule T</Txt>
      <line x1={230} y1={123} x2={230} y2={38} {...dash} /><Txt x={230} y={30} bold size={10} color={DEEP.blue}>Noyau</Txt>
      <line x1={342} y1={150} x2={342} y2={38} {...dash} opacity={0} />
      <Txt x={350} y={30} bold size={10} color={DEEP.pink}>RS (tubules L)</Txt><line x1={355} y1={132} x2={370} y2={38} {...dash} />
      <line x1={410} y1={98} x2={470} y2={38} {...dash} /><Txt x={474} y={30} anchor="start" bold size={10} color={DEEP.amber}>Mitochondries</Txt>
      <Txt x={40} y={252} anchor="start" size={9.5} color={C.grey}>bleu : lignes Z · violet : bande A (actine + myosine) · sarcomère 1,6 à 2,2-2,4 µm</Txt>
      {/* fiche sarcolemme */}
      <Txt x={30} y={324} anchor="start" bold size={12}>Sarcolemme : canaux et pompes</Txt>
      <Card x={30} y={334} w={215} h={112} color={C.blue} title="Canaux" lines={["Na⁺ rapides : phase 0", "Ca²⁺ type L : phase 2 (plateau)", "K⁺ (Ito, IK, IK1) : phases 1 et 3", "Fibres lentes : canaux funny (If),", "Ca²⁺ type T"]} />
      <Card x={262} y={334} w={215} h={112} color={C.green} title="Pompes et échangeur" lines={["Na⁺/K⁺-ATPase : 3 Na⁺ dehors,", "2 K⁺ dedans (phase 4)", "Échangeur Na⁺/Ca²⁺ : 1 Ca²⁺ dehors,", "3 Na⁺ dedans", "Ca²⁺-ATPase"]} />
      <Card x={494} y={334} w={216} h={112} color={C.red} title="Digitaliques" lines={["Bloquent la pompe Na⁺/K⁺", "→ ↑ Na⁺ intracellulaire", "→ échangeur Na⁺/Ca²⁺ freiné", "→ ↑ Ca²⁺ : inotrope positif"]} />
    </Figure>
  );
}

// ─── 5. Potentiel d'action ventriculaire ─────────────────────────────────
export function VentricularAPDiagram() {
  const px = (t: number) => 80 + t * 1.4;
  const py = (mv: number) => 40 + (30 - mv) * 2.05;
  const d = `M${px(0)},${py(-85)} L${px(20)},${py(-85)} L${px(21.5)},${py(-55)} L${px(24)},${py(25)} C${px(27)},${py(14)} ${px(29)},${py(7)} ${px(34)},${py(6)} C${px(100)},${py(9)} ${px(150)},${py(0)} ${px(190)},${py(-22)} C${px(215)},${py(-52)} ${px(235)},${py(-78)} ${px(250)},${py(-85)} L${px(300)},${py(-85)}`;
  return (
    <Figure viewBox="0 0 740 470" title="Potentiel d'action d'une fibre à réponse rapide (ventriculaire)" caption="Cinq phases : 0 (Na⁺ entrant), 1 (Ito), 2 (plateau Ca²⁺ / K⁺), 3 (IK, IK1), 4 (repos) ; durée ≈ 250 ms ; la période réfractaire effective, très longue, empêche la tétanie cardiaque">
      <line x1={px(0)} y1={py(0)} x2={px(300)} y2={py(0)} {...dash} /><Txt x={px(0) - 8} y={py(0) + 4} anchor="end" size={9.5}>0</Txt>
      <line x1={px(0)} y1={py(-55)} x2={px(300)} y2={py(-55)} {...dash} /><Txt x={px(0) - 8} y={py(-55) + 4} anchor="end" size={9.5} color={DEEP.red}>−55</Txt><Txt x={px(300)} y={py(-55) - 5} anchor="end" size={9.5} bold color={DEEP.red}>seuil</Txt>
      <Txt x={px(0) - 8} y={py(-85) + 4} anchor="end" size={9.5}>−85</Txt>
      <Txt x={px(0) - 8} y={py(25) + 4} anchor="end" size={9.5}>+25</Txt>
      <Ax x={px(0)} y={py(-95)} w={430} h={py(-95) - 30} xl="Temps (ms)" yl="Potentiel de membrane (mV)" />
      {[0, 100, 200, 300].map((t) => <g key={t}><line x1={px(t)} y1={py(-95)} x2={px(t)} y2={py(-95) + 4} stroke="currentColor" /><Txt x={px(t)} y={py(-95) + 15} size={9}>{t}</Txt></g>)}
      <path d={d} fill="none" stroke={C.red} strokeWidth={3.4} />
      {dot(px(8), py(-20), 0, DEEP.red)}{dot(px(38), py(30), 1, DEEP.amber)}{dot(px(105), py(20), 2, DEEP.green)}{dot(px(214), py(-24), 3, DEEP.blue)}{dot(px(275), py(-72), 4, DEEP.violet)}
      {/* périodes réfractaires */}
      <rect x={px(21)} y={340} width={px(214) - px(21)} height={20} rx={6} fill={C.red} fillOpacity={0.5} /><Txt x={(px(21) + px(214)) / 2} y={354} bold size={10}>PRE : inexcitable (phase 0 → ½ phase 3)</Txt>
      <rect x={px(214)} y={340} width={px(250) - px(214)} height={20} rx={6} fill={C.amber} fillOpacity={0.6} /><Txt x={(px(214) + px(250)) / 2} y={376} size={9.5} bold color={DEEP.amber}>PRR</Txt>
      <rect x={px(250)} y={340} width={px(300) - px(250)} height={20} rx={6} fill={C.green} fillOpacity={0.5} /><Txt x={(px(250) + px(300)) / 2} y={376} size={9.5} bold color={DEEP.green}>PNE (phase 4)</Txt>
      <Txt x={px(0)} y={400} anchor="start" size={9.5} color={C.grey}>PSN (Purkinje) : courte période hyperexcitable en fin de phase 3 = sommet de l'onde T</Txt>
      <Txt x={px(0)} y={418} anchor="start" size={9.5} color={C.grey}>Repos : −85 mV (K⁺, pompe Na⁺/K⁺) · Phase 0 : 1-2 ms jusqu'à +20 / +30 mV · Plateau ≈ 220 ms</Txt>
      <Card x={520} y={30} w={210} color={DEEP.red} title="0 · Dépolarisation" lines={["Na⁺ rapide entrant", "seuil −55 → +20/+30 mV"]} />
      <Card x={520} y={92} w={210} color={DEEP.amber} title="1 · Encoche" lines={["K⁺ sortant transitoire (Ito)"]} />
      <Card x={520} y={140} w={210} color={DEEP.green} title="2 · Plateau" lines={["Ca²⁺ entrant (type L)", "= K⁺ sortant lent", "Ca²⁺ → libération du RS"]} />
      <Card x={520} y={210} w={210} color={DEEP.blue} title="3 · Repolarisation" lines={["K⁺ sortant (IK)", "puis IK1 entrant"]} />
      <Card x={520} y={266} w={210} color={DEEP.violet} title="4 · Repos" lines={["pompes Na⁺/K⁺ et Ca²⁺,", "échangeur Na⁺/Ca²⁺"]} />
    </Figure>
  );
}

// ─── 6. Potentiel d'action pacemaker ─────────────────────────────────────
export function PacemakerAPDiagram() {
  const px = (t: number) => 90 + t * 0.44;
  const py = (mv: number) => 50 + (10 - mv) * 3.1;
  const cycle = (o: number) => `M${px(o)},${py(-60)} C${px(o + 200)},${py(-58)} ${px(o + 400)},${py(-50)} ${px(o + 470)},${py(-40)} C${px(o + 500)},${py(-25)} ${px(o + 520)},${py(-5)} ${px(o + 540)},${py(0)} C${px(o + 555)},${py(2)} ${px(o + 570)},${py(-15)} ${px(o + 590)},${py(-40)} C${px(o + 600)},${py(-52)} ${px(o + 605)},${py(-58)} ${px(o + 610)},${py(-60)}`;
  return (
    <Figure viewBox="0 0 740 470" title="Potentiel d'action pacemaker (nœud sino-atrial, fibre lente)" caption="Pas de potentiel de repos stable : le potentiel diastolique maximal (−60 mV) dérive lentement vers le seuil (−40 mV) grâce à la dépolarisation diastolique lente (DDL) ; la pente de la DDL fixe la fréquence cardiaque">
      <line x1={px(0)} y1={py(0)} x2={px(960)} y2={py(0)} {...dash} /><Txt x={px(0) - 8} y={py(0) + 4} anchor="end" size={9.5}>0</Txt>
      <line x1={px(0)} y1={py(-40)} x2={px(960)} y2={py(-40)} {...dash} /><Txt x={px(0) - 8} y={py(-40) + 4} anchor="end" size={9.5} color={DEEP.red}>−40</Txt><Txt x={px(960)} y={py(-40) - 5} anchor="end" size={9.5} bold color={DEEP.red}>seuil</Txt>
      <Txt x={px(0) - 8} y={py(-60) + 4} anchor="end" size={9.5} color={DEEP.blue}>−60</Txt><Txt x={px(30)} y={py(-60) + 14} anchor="start" size={9} bold color={DEEP.blue}>PDM</Txt>
      <Ax x={px(0)} y={py(-75)} w={430} h={py(-75) - 34} xl="Temps (ms)" yl="Potentiel de membrane (mV)" />
      <path d={`${cycle(0)} C${px(810)},${py(-58)} ${px(900)},${py(-52)} ${px(960)},${py(-45)}`} fill="none" stroke={C.red} strokeWidth={3.4} />
      {/* effets autonomes */}
      <path d={`M${px(0)},${py(-60)} L${px(300)},${py(-40)}`} stroke={C.amber} strokeWidth={2.4} strokeDasharray="6 4" fill="none" />
      <path d={`M${px(0)},${py(-70)} C${px(300)},${py(-66)} ${px(650)},${py(-55)} ${px(760)},${py(-40)}`} stroke={C.blue} strokeWidth={2.4} strokeDasharray="6 4" fill="none" />
      <Txt x={px(20)} y={py(-28)} anchor="start" bold size={9.5} color={DEEP.amber}>sympathique : DDL plus raide</Txt>
      <Txt x={px(250)} y={py(-73)} anchor="start" bold size={9.5} color={DEEP.blue}>vagal : hyperpolarisé, DDL plus lente</Txt>
      {dot(px(240), py(-51) + 12, 4, DEEP.violet)}{dot(px(470) - 14, py(-22), 0, DEEP.red)}{dot(px(575) + 12, py(-22), 3, DEEP.blue)}
      <Txt x={px(240)} y={py(-51) + 34} size={9.5} bold color={DEEP.violet}>DDL</Txt>
      <Txt x={px(0)} y={py(-75) + 48} anchor="start" size={9.5} color={C.grey}>Ondes 1 et 2 non définies · durée du potentiel ≈ 150 ms (contre ≈ 250 ms pour une fibre rapide)</Txt>
      <Card x={530} y={30} w={200} color={DEEP.violet} title="Phase 4 : DDL (automatisme)" lines={["Na⁺ lent (canaux funny, If)", "Ca²⁺ type T", "↓ fuite de K⁺ (fin de phase 3)"]} />
      <Card x={530} y={106} w={200} color={DEEP.red} title="Phase 0 (lente)" lines={["Ca²⁺ type L → vers 0 mV"]} />
      <Card x={530} y={154} w={200} color={DEEP.blue} title="Phase 3" lines={["K⁺ sortant ; l'acétylcholine", "ouvre des canaux K⁺ (Ach)"]} />
      <Card x={530} y={216} w={200} color={DEEP.amber} title="Catécholamines" lines={["β → AMPc → canaux funny", "→ DDL plus raide → ↑ FC"]} />
      <Card x={530} y={280} w={200} color={C.grey} title="Fibre rapide, pour comparer" lines={["Repos −85 · seuil −55 mV", "Phase 0 par Na⁺ rapide", "Pas d'automatisme"]} />
    </Figure>
  );
}

// ─── Système excito-conducteur ───────────────────────────────────────────
export function ConductionSystemDiagram() {
  const steps: [string, string, string, string][] = [
    ["Nœud sino-atrial", "100-110 /min · pacemaker actif", "détermine la fréquence cardiaque", C.red],
    ["Voies internodales", "Bachmann · Wenckebach · Thorel", "NSA → NAV (et OD → OG)", C.amber],
    ["Nœud atrio-ventriculaire", "40-50 /min · délai 0,12-0,20 s", "seule connexion, filtre électrique", C.green],
    ["Faisceau de His et branches", "25-35 /min", "conduit vers les ventricules", C.blue],
    ["Réseau de Purkinje", "20-30 /min · ≈ 4 m/s", "active le myocarde ventriculaire", C.violet],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Le système excito-conducteur du cœur" caption="Le nœud sino-atrial, à la pente de DDL la plus raide, commande le rythme ; les autres étages sont des pacemakers latents, freinés par la suppression par « overdrive » et prêts à prendre le relais si le NSA est défaillant">
      <path d="M100,60 C100,40 160,34 250,44 C340,34 400,40 400,60 L404,170 L96,170 Z" fill={C.blue} fillOpacity={0.1} stroke={C.blue} strokeWidth={2} />
      <path d="M96,178 L400,178 C408,300 350,410 260,430 L250,190 L240,190 C230,300 210,380 150,400 C100,360 92,260 96,178 Z" fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={2} />
      <line x1={250} y1={44} x2={250} y2={178} stroke={C.grey} strokeWidth={2} />
      <Txt x={172} y={110} bold size={11} color={C.grey}>OD</Txt><Txt x={330} y={110} bold size={11} color={C.grey}>OG</Txt>
      <Txt x={165} y={330} bold size={11} color={C.grey}>VD</Txt><Txt x={340} y={330} bold size={11} color={C.grey}>VG</Txt>
      {/* voies */}
      <path d="M130,70 C150,100 200,140 238,172" fill="none" stroke={C.amber} strokeWidth={3} />
      <path d="M134,64 C180,60 280,60 340,80" fill="none" stroke={C.amber} strokeWidth={3} />
      <path d="M138,76 C160,130 200,150 232,176" fill="none" stroke={C.amber} strokeWidth={3} opacity={0.7} />
      {/* His et branches */}
      <path d="M244,182 L248,232" stroke={C.blue} strokeWidth={6} strokeLinecap="round" />
      <path d="M248,232 C220,300 190,350 160,392" fill="none" stroke={C.blue} strokeWidth={4} />
      <path d="M248,232 C290,300 320,350 340,396" fill="none" stroke={C.blue} strokeWidth={4} />
      {[[160, 392, 130, 350], [160, 392, 190, 405], [340, 396, 370, 350], [340, 396, 320, 410], [200, 320, 170, 300], [300, 320, 330, 300]].map(([a, b, c, d2], i) => <line key={i} x1={a} y1={b} x2={c} y2={d2} stroke={C.violet} strokeWidth={2.2} />)}
      <circle cx={130} cy={68} r={11} fill={C.red} /><circle cx={242} cy={176} r={10} fill={C.green} />
      <Txt x={112} y={52} anchor="end" bold size={10} color={DEEP.red}>NSA</Txt><Txt x={226} y={196} anchor="end" bold size={10} color={DEEP.green}>NAV</Txt>
      <Txt x={282} y={222} anchor="start" bold size={10} color={DEEP.blue}>His</Txt>
      {/* chaîne à droite */}
      {steps.map(([t, s1, s2, c], i) => (
        <g key={t}>
          <rect x={440} y={20 + i * 88} width={290} height={70} rx={10} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={2} />
          {dot(462, 55 + i * 88, i + 1, c)}
          <Txt x={482} y={42 + i * 88} anchor="start" bold size={11.5}>{t}</Txt>
          <Txt x={482} y={58 + i * 88} anchor="start" size={10} color={C.grey}>{s1}</Txt>
          <Txt x={482} y={73 + i * 88} anchor="start" size={10} color={C.grey}>{s2}</Txt>
          {i < 4 && <path d={`M585,${90 + i * 88} L585,${108 + i * 88}`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />}
        </g>
      ))}
    </Figure>
  );
}

// ─── ECG normal ──────────────────────────────────────────────────────────
export function ECGDiagram() {
  const beat = "M40,250 L60,250 C66,232 90,232 100,250 L140,250 L146,262 L158,106 L170,286 L180,250 L240,250 C262,196 320,196 340,250 L360,250 C368,240 390,240 398,250 L460,250";
  return (
    <Figure viewBox="0 0 740 470" title="ECG normal : ondes, segments et intervalles" caption="1 mm = 0,04 s en abscisse et 0,1 mV en ordonnée ; P = dépolarisation atriale, QRS = dépolarisation ventriculaire, T = repolarisation ventriculaire ; à 75 /min l'intervalle RR vaut 0,80 s">
      {Array.from({ length: 36 }, (_, i) => <line key={`v${i}`} x1={40 + i * 20} y1={70} x2={40 + i * 20} y2={310} {...grid} />)}
      {Array.from({ length: 13 }, (_, i) => <line key={`h${i}`} x1={40} y1={70 + i * 20} x2={740 - 20} y2={70 + i * 20} {...grid} />)}
      <path d={beat} fill="none" stroke={C.red} strokeWidth={3} strokeLinejoin="round" />
      <path d={beat} fill="none" stroke={C.red} strokeWidth={3} strokeLinejoin="round" transform="translate(400 0)" />
      <line x1={60} y1={250} x2={600} y2={250} stroke="currentColor" strokeOpacity={0.3} />
      {[["P", 80, 218], ["Q", 143, 276], ["R", 158, 98], ["S", 170, 300], ["T", 290, 190], ["U", 379, 232]].map(([l, x, y]) => <Txt key={String(l)} x={Number(x)} y={Number(y)} bold size={13} color={DEEP.red}>{l}</Txt>)}
      {/* intervalles */}
      <g>
        <path d="M60,326 L140,326" stroke={DEEP.green} strokeWidth={3} /><Txt x={100} y={344} bold size={10} color={DEEP.green}>PR</Txt><Txt x={100} y={357} size={9} color={C.grey}>0,12-0,21 s</Txt>
        <path d="M140,326 L180,326" stroke={DEEP.red} strokeWidth={3} /><Txt x={160} y={344} bold size={10} color={DEEP.red}>QRS</Txt><Txt x={160} y={357} size={9} color={C.grey}>0,08-0,10</Txt>
        <path d="M180,326 L240,326" stroke={DEEP.amber} strokeWidth={3} /><Txt x={225} y={370} bold size={10} color={DEEP.amber}>ST</Txt><Txt x={225} y={383} size={9} color={C.grey}>0,05-0,15 s</Txt>
        <path d="M140,392 L340,392" stroke={DEEP.blue} strokeWidth={3} /><Txt x={240} y={410} bold size={10} color={DEEP.blue}>QT : 0,35-0,45 s (systole électrique)</Txt>
        <path d="M158,58 L558,58" stroke={DEEP.violet} strokeWidth={2} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" /><Txt x={358} y={50} bold size={10.5} color={DEEP.violet}>RR = 0,80 s à 75 /min · FC = 60 / RR (s) = 1500 / RR (mm)</Txt>
      </g>
      <Txt x={80} y={100} size={9.5} color={C.grey}>dépol. atriale</Txt>
      <Txt x={224} y={100} anchor="start" size={9.5} color={C.grey}>dépol. ventriculaire</Txt>
      <Txt x={290} y={162} size={9.5} color={C.grey}>repol. ventriculaire</Txt>
      <Card x={420} y={330} w={310} color={DEEP.red} title="Valeurs de l'onde" lines={["P : 0,06-0,10 s · 0,10-0,25 mV", "QRS : 0,08-0,10 s · 1-1,5 mV", "T : 0,13-0,30 s · < ⅓ du QRS", "U : < ⅓ de T (muscles papillaires)"]} />
    </Figure>
  );
}

// ─── Dérivations ─────────────────────────────────────────────────────────
export function LeadsDiagram() {
  const cx = 560, cy = 130, r = 96;
  const ang = (deg: number, k = 1) => [cx + r * k * Math.cos((deg * Math.PI) / 180), cy + r * k * Math.sin((deg * Math.PI) / 180)] as const;
  const axes: [string, number, string][] = [["I", 0, DEEP.blue], ["II", 60, DEEP.blue], ["III", 120, DEEP.blue], ["aVF", 90, DEEP.green], ["aVL", -30, DEEP.green], ["aVR", -150, DEEP.green]];
  const chest = (a: number) => [560 + 110 * Math.cos((a * Math.PI) / 180), 376 - 58 * Math.sin((a * Math.PI) / 180)] as const;
  return (
    <Figure viewBox="0 0 740 470" title="Les dérivations de l'ECG : Einthoven, Goldberger et Wilson" caption="Dérivations bipolaires I, II, III (triangle d'Einthoven) ; unipolaires aVR, aVL, aVF qui bissectent le triangle ; précordiales V1-V6 dans le plan horizontal ; les membres explorent le plan frontal">
      <Txt x={200} y={20} bold size={12}>Triangle d'Einthoven</Txt>
      <polygon points="80,60 320,60 200,270" fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2.4} />
      <path d="M200,110 C170,90 176,140 200,170 C224,140 230,90 200,110 Z" fill={C.red} fillOpacity={0.6} stroke={C.red} strokeWidth={2} />
      {[[80, 60, "−", "Bras droit (RA)"], [320, 60, "+", "Bras gauche (LA)"], [200, 270, "+", "Jambe gauche (LL)"]].map(([x, y, s, l]) => (
        <g key={String(l)}><circle cx={Number(x)} cy={Number(y)} r={12} fill="currentColor" fillOpacity={0.12} stroke="currentColor" /><Txt x={Number(x)} y={Number(y) + 4} bold size={13}>{String(s)}</Txt></g>
      ))}
      <Txt x={80} y={42} size={10} bold>Bras droit</Txt><Txt x={320} y={42} size={10} bold>Bras gauche</Txt><Txt x={200} y={296} size={10} bold>Jambe gauche</Txt>
      <Txt x={200} y={52} bold size={12} color={DEEP.blue}>I</Txt><Txt x={118} y={168} bold size={12} color={DEEP.blue}>II</Txt><Txt x={286} y={168} bold size={12} color={DEEP.blue}>III</Txt>
      <Card x={30} y={318} w={340} color={DEEP.blue} title="Bipolaires (Einthoven, 1903)" lines={["I : bras droit (−) → bras gauche (+)", "II : bras droit (−) → jambe gauche (+)", "III : bras gauche (−) → jambe gauche (+)"]} />
      <Card x={30} y={398} w={340} h={58} color={DEEP.green} title="Unipolaires (Goldberger) : aVR, aVL, aVF" lines={["une électrode exploratrice + référence = les deux autres"]} />
      {/* hexaxial */}
      <Txt x={cx} y={16} bold size={12}>Plan frontal (membres)</Txt>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      {axes.map(([n, a, c]) => {
        const [x, y] = ang(a);
        const [lx, ly] = ang(a, 1.16);
        return (<g key={n}><line x1={cx} y1={cy} x2={x} y2={y} stroke={c} strokeWidth={2.4} markerEnd="url(#fig-arrow)" /><Txt x={lx} y={ly + 4} bold size={11} color={c}>{n}</Txt></g>);
      })}
      <Txt x={cx + r + 32} y={cy + 16} size={9} color={C.grey}>0°</Txt><Txt x={cx} y={cy + r + 26} size={9} color={C.grey}>+90°</Txt>
      {/* précordiales */}
      <Txt x={cx} y={282} bold size={12}>Plan horizontal (précordiales de Wilson)</Txt>
      <ellipse cx={560} cy={376} rx={110} ry={58} fill="currentColor" fillOpacity={0.05} stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} />
      <circle cx={566} cy={376} r={28} fill={C.red} fillOpacity={0.4} stroke={C.red} strokeWidth={2} />
      {[["V1", 100], ["V2", 80], ["V3", 65], ["V4", 50], ["V5", 35], ["V6", 20]].map(([n, a]) => {
        const [x, y] = chest(Number(a));
        return (<g key={String(n)}><circle cx={x} cy={y} r={6} fill={DEEP.violet} /><Txt x={x + (Number(a) < 90 ? 14 : -14)} y={y - 8} bold size={10.5} color={DEEP.violet}>{String(n)}</Txt></g>);
      })}
      <Txt x={560} y={448} size={9.5} color={C.grey}>sternum en haut · V1-V2 droites, V5-V6 gauches</Txt>
      <Txt x={560} y={462} size={9.5} color={C.grey}>QRS : rS en V1-V2 → zone de transition V3-V4 → Rs en V5-V6</Txt>
    </Figure>
  );
}

// ─── Cycle cardiaque (Wiggers) ───────────────────────────────────────────
export function CardiacCycleDiagram() {
  const X = (t: number) => 100 + t * 750;
  const seg: [string, number, number, string, string][] = [
    ["CIV", 0, 0.05, C.red, "Contraction isovolumétrique 0,05 s"],
    ["ER", 0.05, 0.15, DEEP.red, "Éjection rapide 0,10 s (70 % du VES)"],
    ["EL", 0.15, 0.35, C.amber, "Éjection lente 0,20 s (30 %)"],
    ["RIV", 0.35, 0.4, C.blue, "Relaxation isovolumétrique 0,05 s"],
    ["RR", 0.4, 0.5, DEEP.blue, "Remplissage rapide 0,10 s (70 %)"],
    ["D", 0.5, 0.7, C.green, "Diastasis 0,20 s (10 %)"],
    ["SA", 0.7, 0.8, C.violet, "Systole auriculaire 0,10 s (20 %)"],
  ];
  const P = (p: number) => 240 - p * 1.1;
  const V = (v: number) => 340 - v * 0.9;
  const lv = `M${X(0)},${P(8)} L${X(0.05)},${P(80)} C${X(0.08)},${P(112)} ${X(0.11)},${P(126)} ${X(0.16)},${P(126)} C${X(0.24)},${P(126)} ${X(0.3)},${P(120)} ${X(0.35)},${P(104)} C${X(0.37)},${P(60)} ${X(0.385)},${P(20)} ${X(0.4)},${P(4)} L${X(0.7)},${P(4)} C${X(0.74)},${P(7)} ${X(0.77)},${P(9)} ${X(0.8)},${P(8)}`;
  const ao = `M${X(0)},${P(80)} L${X(0.05)},${P(80)} C${X(0.08)},${P(112)} ${X(0.11)},${P(122)} ${X(0.16)},${P(124)} C${X(0.24)},${P(124)} ${X(0.3)},${P(119)} ${X(0.35)},${P(110)} L${X(0.36)},${P(104)} C${X(0.365)},${P(108)} ${X(0.37)},${P(110)} ${X(0.38)},${P(108)} C${X(0.5)},${P(97)} ${X(0.65)},${P(88)} ${X(0.8)},${P(80)}`;
  const la = `M${X(0)},${P(9)} C${X(0.05)},${P(10)} ${X(0.1)},${P(6)} ${X(0.2)},${P(6)} C${X(0.3)},${P(10)} ${X(0.36)},${P(14)} ${X(0.4)},${P(12)} C${X(0.42)},${P(4)} ${X(0.5)},${P(4)} ${X(0.6)},${P(5)} C${X(0.68)},${P(6)} ${X(0.7)},${P(11)} ${X(0.75)},${P(11)} C${X(0.78)},${P(11)} ${X(0.79)},${P(9)} ${X(0.8)},${P(9)}`;
  const vol = `M${X(0)},${V(100)} L${X(0.05)},${V(100)} C${X(0.1)},${V(80)} ${X(0.14)},${V(50)} ${X(0.2)},${V(42)} C${X(0.28)},${V(34)} ${X(0.32)},${V(31)} ${X(0.35)},${V(30)} L${X(0.4)},${V(30)} C${X(0.44)},${V(60)} ${X(0.47)},${V(82)} ${X(0.5)},${V(86)} C${X(0.58)},${V(90)} ${X(0.65)},${V(91)} ${X(0.7)},${V(91)} C${X(0.74)},${V(94)} ${X(0.78)},${V(99)} ${X(0.8)},${V(100)}`;
  const E = 396;
  const ecg = `M${X(0)},${E} L${X(0.005)},${E + 5} L${X(0.02)},${E - 44} L${X(0.036)},${E + 12} L${X(0.05)},${E} L${X(0.2)},${E} C${X(0.24)},${E - 20} ${X(0.31)},${E - 20} ${X(0.36)},${E} L${X(0.64)},${E} C${X(0.66)},${E - 10} ${X(0.7)},${E - 10} ${X(0.72)},${E} L${X(0.8)},${E}`;
  const bursts = (t0: number, amp: number, n: number, y0: number) => {
    let d = `M${X(t0)},${y0}`;
    for (let i = 1; i <= n; i++) d += ` L${X(t0 + i * 0.008)},${y0 + (i % 2 ? -1 : 1) * amp * (1 - i / (n + 2))}`;
    return d;
  };
  return (
    <Figure viewBox="0 0 740 520" title="Le cycle cardiaque : pressions, volume ventriculaire, ECG et bruits" caption="Un cycle de 0,80 s (75 /min) : systole ventriculaire 0,35 s puis diastole ; l'ouverture et la fermeture des valves (Mc, Ao, Ac, Mo) suivent les différences de pression ; VES ≈ 70 mL, VTS ≈ 30 mL">
      {seg.map(([a, t0, t1, c]) => (
        <g key={a}><rect x={X(t0)} y={20} width={X(t1) - X(t0)} height={28} fill={c} fillOpacity={0.5} stroke={c} /><Txt x={(X(t0) + X(t1)) / 2} y={38} bold size={9.5}>{a}</Txt></g>
      ))}
      <Txt x={20} y={38} anchor="start" size={9.5} bold>Phases</Txt>
      {[0.05, 0.35, 0.4, 0].map((t, i) => (
        <g key={i}><line x1={X(t)} y1={50} x2={X(t)} y2={408} {...dash} /><Txt x={X(t) + (i === 3 ? 12 : 0)} y={62} size={9.5} bold color={DEEP.red}>{["Ao", "Ac", "Mo", "Mc"][i]}</Txt></g>
      ))}
      {/* pressions */}
      <Txt x={20} y={110} anchor="start" size={9.5} bold>Pression</Txt><Txt x={20} y={123} anchor="start" size={9.5} bold>(mmHg)</Txt>
      {[0, 40, 80, 120].map((p) => <g key={p}><line x1={96} y1={P(p)} x2={700} y2={P(p)} {...grid} /><Txt x={90} y={P(p) + 3} anchor="end" size={8.5}>{p}</Txt></g>)}
      <path d={ao} fill="none" stroke={C.red} strokeWidth={2.4} /><path d={lv} fill="none" stroke={C.blue} strokeWidth={2.8} /><path d={la} fill="none" stroke={C.green} strokeWidth={2.4} />
      <Txt x={X(0.26)} y={P(126) - 16} size={9.5} bold color={DEEP.blue}>Ventricule gauche</Txt>
      <Txt x={X(0.56)} y={P(97) - 10} size={9.5} bold color={DEEP.red}>Aorte (incisure dicrote)</Txt>
      <Txt x={X(0.6)} y={P(14) - 4} size={9.5} bold color={DEEP.green}>Oreillette gauche</Txt>
      {/* volume */}
      <Txt x={20} y={290} anchor="start" size={9.5} bold>Volume VG</Txt><Txt x={20} y={303} anchor="start" size={9.5} bold>(mL)</Txt>
      {[30, 100].map((v) => <g key={v}><line x1={96} y1={V(v)} x2={700} y2={V(v)} {...grid} /><Txt x={90} y={V(v) + 3} anchor="end" size={8.5}>{v}</Txt></g>)}
      <path d={vol} fill="none" stroke={C.amber} strokeWidth={2.8} />
      <Txt x={X(0.02)} y={V(100) - 8} anchor="start" size={9} bold color={DEEP.amber}>VTD 100</Txt><Txt x={X(0.36)} y={V(30) + 14} anchor="start" size={9} bold color={DEEP.amber}>VTS 30 (VES ≈ 70)</Txt>
      {/* ECG */}
      <Txt x={20} y={396} anchor="start" size={9.5} bold>ECG</Txt>
      <path d={ecg} fill="none" stroke={C.red} strokeWidth={2.4} />
      <Txt x={X(0.68)} y={E - 16} size={9.5} bold color={DEEP.red}>P</Txt><Txt x={X(0.025)} y={E - 50} size={9.5} bold color={DEEP.red}>QRS</Txt><Txt x={X(0.28)} y={E - 26} size={9.5} bold color={DEEP.red}>T</Txt>
      {/* bruits */}
      <Txt x={20} y={448} anchor="start" size={9.5} bold>Bruits</Txt>
      <path d={bursts(0.0, 14, 12, 448)} fill="none" stroke={C.violet} strokeWidth={1.6} /><Txt x={X(0.05)} y={432} size={9.5} bold color={DEEP.violet}>B1</Txt>
      <path d={bursts(0.35, 9, 9, 448)} fill="none" stroke={C.violet} strokeWidth={1.6} /><Txt x={X(0.385)} y={432} size={9.5} bold color={DEEP.violet}>B2</Txt>
      <path d={bursts(0.45, 3.5, 6, 448)} fill="none" stroke={C.violet} strokeWidth={1.2} opacity={0.6} /><Txt x={X(0.475)} y={432} size={9} color={C.grey}>B3</Txt>
      <path d={bursts(0.66, 2.5, 6, 448)} fill="none" stroke={C.violet} strokeWidth={1.2} opacity={0.5} /><Txt x={X(0.685)} y={432} size={9} color={C.grey}>B4</Txt>
      <line x1={96} y1={470} x2={700} y2={470} stroke="currentColor" />
      {[0, 0.2, 0.4, 0.6, 0.8].map((t) => <g key={t}><line x1={X(t)} y1={470} x2={X(t)} y2={475} stroke="currentColor" /><Txt x={X(t)} y={488} size={9}>{t.toString().replace(".", ",")} s</Txt></g>)}
      <Txt x={400} y={506} size={9.5} color={C.grey}>CIV, ER, EL : systole · RIV, RR, D (diastasis), SA (systole auriculaire) : diastole · Mc / Mo : mitrale · Ao / Ac : aortique</Txt>
    </Figure>
  );
}

// ─── Boucle pression-volume ──────────────────────────────────────────────
export function PVLoopDiagram() {
  const X = (v: number) => 90 + v * 3;
  const Y = (p: number) => 340 - p * 2;
  const loop = `M${X(30)},${Y(5)} C${X(45)},${Y(3)} ${X(85)},${Y(5)} ${X(100)},${Y(10)} L${X(100)},${Y(80)} C${X(99)},${Y(120)} ${X(90)},${Y(128)} ${X(80)},${Y(126)} C${X(55)},${Y(122)} ${X(38)},${Y(112)} ${X(30)},${Y(100)} Z`;
  return (
    <Figure viewBox="0 0 740 440" title="Boucle pression-volume du ventricule gauche" caption="Remplissage (A→B), contraction isovolumétrique (B→C), éjection (C→D), relaxation isovolumétrique (D→A) ; l'aire de la boucle représente le travail cardiaque ; largeur de la boucle = volume d'éjection systolique (VES)">
      <Ax x={X(0)} y={Y(0)} w={X(140) - X(0) + 10} h={Y(0) - Y(140)} xl="Volume ventriculaire gauche (mL)" yl="Pression VG (mmHg)" />
      {[30, 100].map((v) => <g key={v}><line x1={X(v)} y1={Y(0)} x2={X(v)} y2={Y(0) + 5} stroke="currentColor" /><Txt x={X(v)} y={Y(0) + 17} size={9.5}>{v}</Txt></g>)}
      {[0, 40, 80, 120].map((p) => <g key={p}><line x1={X(0)} y1={Y(p)} x2={X(0) - 5} y2={Y(p)} stroke="currentColor" /><Txt x={X(0) - 9} y={Y(p) + 3} anchor="end" size={9.5}>{p}</Txt></g>)}
      <path d={loop} fill={C.blue} fillOpacity={0.16} stroke={C.blue} strokeWidth={3.2} />
      {/* variantes */}
      <path d={`M${X(30)},${Y(5)} C${X(60)},${Y(3)} ${X(105)},${Y(8)} ${X(120)},${Y(14)} L${X(120)},${Y(80)} C${X(118)},${Y(122)} ${X(100)},${Y(128)} ${X(88)},${Y(126)} C${X(60)},${Y(122)} ${X(40)},${Y(112)} ${X(30)},${Y(100)}`} fill="none" stroke={DEEP.green} strokeWidth={2} strokeDasharray="7 4" />
      <path d={`M${X(100)},${Y(80)} L${X(100)},${Y(106)} C${X(98)},${Y(134)} ${X(86)},${Y(138)} ${X(76)},${Y(136)} C${X(60)},${Y(132)} ${X(48)},${Y(122)} ${X(44)},${Y(108)}`} fill="none" stroke={DEEP.red} strokeWidth={2} strokeDasharray="7 4" />
      <path d={`M${X(100)},${Y(80)} C${X(99)},${Y(122)} ${X(88)},${Y(130)} ${X(78)},${Y(128)} C${X(50)},${Y(122)} ${X(26)},${Y(110)} ${X(20)},${Y(90)}`} fill="none" stroke={DEEP.amber} strokeWidth={2} strokeDasharray="7 4" />
      {[["A", 30, 5, -12, 14], ["B", 100, 10, 12, 14], ["C", 100, 80, 14, 4], ["D", 30, 100, -14, 4]].map(([n, v, p, dx, dy]) => (
        <g key={String(n)}><circle cx={X(Number(v))} cy={Y(Number(p))} r={5} fill={C.blue} /><Txt x={X(Number(v)) + Number(dx)} y={Y(Number(p)) + Number(dy)} bold size={12} color={DEEP.blue}>{String(n)}</Txt></g>
      ))}
      <Txt x={X(65)} y={Y(38)} bold size={11} color={DEEP.blue}>travail</Txt>
      <path d={`M${X(30)},${Y(152)} L${X(100)},${Y(152)}`} stroke="currentColor" strokeWidth={1.5} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
      <Txt x={X(65)} y={Y(152) - 6} bold size={10}>VES ≈ 70 mL (VTD 100 − VTS 30)</Txt>
      <Card x={470} y={30} w={260} color={DEEP.green} title="↑ Précharge (pointillé vert)" lines={["B → B' : VTD plus grand", "↑ VES (Frank-Starling)", "VTS et fraction d'éjection constants"]} />
      <Card x={470} y={112} w={260} color={DEEP.red} title="↑ Postcharge (pointillé rouge)" lines={["CIV prolongée (C → C')", "↓ VES, ↑ VTS, VTD constant"]} />
      <Card x={470} y={176} w={260} color={DEEP.amber} title="↑ Inotropisme (pointillé orange)" lines={["D → D' : ↓ VTS, ↑ VES et FE", "SNS, catécholamines, Ca²⁺"]} />
      <Card x={470} y={240} w={260} color={C.grey} title="Inotropes négatifs" lines={["Acétylcholine, β-bloquants,", "inhibiteurs calciques, K⁺"]} />
    </Figure>
  );
}

// ─── Frank-Starling ──────────────────────────────────────────────────────
export function FrankStarlingDiagram() {
  const lx = (l: number) => 80 + (l - 1.4) * 170;
  const ly = (f: number) => 320 - f * 2.4;
  const rx = (v: number) => 440 + v * 2.6;
  const ry = (v: number) => 320 - v * 2.6;
  const active = `M${lx(1.4)},${ly(20)} C${lx(1.7)},${ly(45)} ${lx(1.95)},${ly(85)} ${lx(2.2)},${ly(100)} C${lx(2.3)},${ly(101)} ${lx(2.35)},${ly(96)} ${lx(2.4)},${ly(88)} C${lx(2.5)},${ly(66)} ${lx(2.6)},${ly(48)} ${lx(2.7)},${ly(30)}`;
  const passive = `M${lx(1.4)},${ly(3)} C${lx(2)},${ly(4)} ${lx(2.3)},${ly(8)} ${lx(2.4)},${ly(16)} C${lx(2.5)},${ly(34)} ${lx(2.6)},${ly(56)} ${lx(2.7)},${ly(80)}`;
  return (
    <Figure viewBox="0 0 740 450" title="Loi de Frank-Starling : de la fibre au ventricule entier" caption="Entre 1,8 et 2,2 µm la tension active augmente avec l'étirement (plus de ponts actine-myosine) ; au-delà de 2,4 µm elle chute et la tension passive explose ; au niveau du cœur, plus le retour veineux remplit le ventricule, plus le VES augmente">
      <Txt x={210} y={22} bold size={12}>Fibre myocardique</Txt>
      <Ax x={lx(1.4)} y={ly(0)} w={300} h={ly(0) - 40} xl="Longueur du sarcomère (µm)" yl="Tension" />
      {[1.6, 1.8, 2.0, 2.2, 2.4, 2.6].map((l) => <g key={l}><line x1={lx(l)} y1={ly(0)} x2={lx(l)} y2={ly(0) + 4} stroke="currentColor" /><Txt x={lx(l)} y={ly(0) + 15} size={9}>{l.toString().replace(".", ",")}</Txt></g>)}
      <rect x={lx(1.8)} y={40} width={lx(2.2) - lx(1.8)} height={ly(0) - 40} fill={C.green} fillOpacity={0.1} />
      <path d={active} fill="none" stroke={C.red} strokeWidth={3.2} /><path d={passive} fill="none" stroke={C.blue} strokeWidth={3.2} />
      <Txt x={lx(2.72)} y={ly(30) - 4} anchor="start" bold size={10.5} color={DEEP.red}>active</Txt><Txt x={lx(2.72)} y={ly(80)} anchor="start" bold size={10.5} color={DEEP.blue}>passive</Txt>
      <Txt x={(lx(1.8) + lx(2.2)) / 2} y={56} bold size={9.5} color={DEEP.green}>plage physiologique</Txt>
      {/* cœur entier */}
      <Txt x={560} y={22} bold size={12}>Ventricule entier</Txt>
      <Ax x={rx(0)} y={ry(0)} w={160} h={ry(0) - 40} xl="Volume télédiastolique / précharge" yl="VES (débit cardiaque)" />
      <path d={`M${rx(0)},${ry(4)} C${rx(20)},${ry(30)} ${rx(40)},${ry(58)} ${rx(60)},${ry(70)}`} fill="none" stroke={C.green} strokeWidth={3.2} />
      <path d={`M${rx(0)},${ry(8)} C${rx(20)},${ry(48)} ${rx(40)},${ry(80)} ${rx(60)},${ry(95)}`} fill="none" stroke={C.red} strokeWidth={3} strokeDasharray="7 4" />
      <path d={`M${rx(0)},${ry(2)} C${rx(20)},${ry(15)} ${rx(40)},${ry(30)} ${rx(60)},${ry(38)}`} fill="none" stroke={C.grey} strokeWidth={3} strokeDasharray="7 4" />
      <Txt x={rx(61)} y={ry(95)} anchor="start" size={9.5} bold color={DEEP.red}>inotrope +</Txt><Txt x={rx(61)} y={ry(70)} anchor="start" size={9.5} bold color={DEEP.green}>normal</Txt><Txt x={rx(61)} y={ry(38)} anchor="start" size={9.5} bold color={C.grey}>inotrope −</Txt>
      <Txt x={rx(0)} y={ry(0) + 48} anchor="start" size={9.5} color={C.grey}>↑ retour veineux → ↑ VTD → ↑ force → ↑ VES</Txt>
      <Txt x={rx(0)} y={ry(0) + 62} anchor="start" size={9.5} color={C.grey}>= « réserve diastolique » du cœur</Txt><Txt x={rx(0)} y={ry(0) + 76} anchor="start" size={9.5} color={C.grey}>PTDV du VG élevée → œdème pulmonaire</Txt><Txt x={rx(0)} y={ry(0) + 90} anchor="start" size={9.5} color={C.grey}>PTDV du VD élevée → œdèmes déclives</Txt>
      <Txt x={80} y={ly(0) + 48} anchor="start" size={9.5} color={C.grey}>Sarcomère : ↔ VTD (longueur), tension active ↔ force, tension passive ↔ PTDV</Txt>
    </Figure>
  );
}

// ─── Hémodynamique de l'arbre vasculaire ─────────────────────────────────
export function VascularBedDiagram() {
  const cats = ["Aorte", "Grosses artères", "Artérioles", "Capillaires", "Veinules", "Veines", "Veines caves"];
  const xs = cats.map((_, i) => 130 + i * 92);
  const lg = (v: number, lo: number, hi: number, y0: number, y1: number) => y1 + ((Math.log10(hi) - Math.log10(v)) / (Math.log10(hi) - Math.log10(lo))) * (y0 - y1);
  const curve = (ys: number[]) => ys.map((y, i) => `${i === 0 ? "M" : "L"}${xs[i]},${y}`).join(" ");
  const pressure = [100, 95, 60, 25, 12, 8, 2].map((p) => 150 - p * 1.05);
  const vel = [33, 20, 4, 0.03, 0.5, 6, 14].map((v) => lg(v, 0.02, 40, 290, 190));
  const area = [2.5, 15, 400, 2500, 500, 60, 8].map((a) => lg(a, 2, 3000, 430, 330));
  return (
    <Figure viewBox="0 0 740 490" title="L'arbre vasculaire : pression, vélocité et surface de section" caption="La pression chute surtout au niveau des artérioles (résistance) ; la surface de section est maximale (≈ 2 500 cm²) et la vélocité minimale (≈ 0,3 mm/s) dans les capillaires, ce qui favorise les échanges">
      <Txt x={20} y={30} anchor="start" bold size={11} color={DEEP.red}>Pression (mmHg)</Txt>
      <line x1={90} y1={40} x2={90} y2={150} stroke="currentColor" /><Txt x={84} y={48} anchor="end" size={8.5}>100</Txt><Txt x={84} y={150} anchor="end" size={8.5}>0</Txt>
      <path d={curve(pressure)} fill="none" stroke={C.red} strokeWidth={3.2} />
      <rect x={xs[0] - 10} y={150 - 130 * 1.05} width={20} height={(130 - 80) * 1.05} fill={C.red} fillOpacity={0.25} /><Txt x={xs[0] + 16} y={150 - 130 * 1.05 + 10} anchor="start" size={8.5} color={C.grey}>120 / 80 (pulsatile)</Txt>
      <Txt x={20} y={186} anchor="start" bold size={11} color={DEEP.blue}>Vélocité (cm/s, échelle log.)</Txt>
      <line x1={90} y1={190} x2={90} y2={290} stroke="currentColor" /><Txt x={84} y={196} anchor="end" size={8.5}>33</Txt><Txt x={84} y={290} anchor="end" size={8.5}>0,03</Txt>
      <path d={curve(vel)} fill="none" stroke={C.blue} strokeWidth={3.2} />
      <Txt x={xs[3]} y={vel[3] - 10} size={9} bold color={DEEP.blue}>0,3 mm/s</Txt><Txt x={xs[0] + 16} y={vel[0] + 6} anchor="start" size={9} bold color={DEEP.blue}>33 cm/s</Txt>
      <Txt x={20} y={326} anchor="start" bold size={11} color={DEEP.green}>Surface de section (cm², échelle log.)</Txt>
      <line x1={90} y1={330} x2={90} y2={430} stroke="currentColor" /><Txt x={84} y={336} anchor="end" size={8.5}>2500</Txt><Txt x={84} y={430} anchor="end" size={8.5}>2,5</Txt>
      <path d={curve(area)} fill="none" stroke={C.green} strokeWidth={3.2} />
      <Txt x={xs[3]} y={area[3] - 10} size={9} bold color={DEEP.green}>≈ 2 500 cm²</Txt><Txt x={xs[0] + 16} y={area[0] + 6} anchor="start" size={9} bold color={DEEP.green}>2,5 cm²</Txt>
      {xs.map((x, i) => (<g key={cats[i]}><line x1={x} y1={40} x2={x} y2={430} {...grid} /><Txt x={x} y={452} size={9.5} bold>{cats[i]}</Txt></g>))}
      <rect x={xs[3] - 40} y={36} width={80} height={396} rx={10} fill={C.amber} fillOpacity={0.1} />
      <Txt x={xs[3]} y={472} size={9.5} bold color={DEEP.amber}>zone d'échanges</Txt>
    </Figure>
  );
}

// ─── Forces de Starling ──────────────────────────────────────────────────
export function StarlingForcesDiagram() {
  const X = (t: number) => 110 + t * 520;
  const Y = (p: number) => 330 - p * 5.2;
  return (
    <Figure viewBox="0 0 740 470" title="Échanges capillaires : équation de Starling" caption="Qf = K [(Phc − Phi) − (πc − πi)] : côté artériel la pression hydrostatique capillaire (≈ 35 mmHg) dépasse la pression oncotique (≈ 28 mmHg) → filtration ; côté veineux (≈ 15 mmHg) elle est inférieure → réabsorption ; l'excès est drainé par les lymphatiques">
      <path d={`M${X(0)},52 L${X(1)},52 L${X(1)},92 L${X(0)},92 Z`} fill={C.red} fillOpacity={0.18} stroke={C.red} strokeWidth={2.4} />
      <Txt x={X(0) + 10} y={76} anchor="start" bold size={10.5} color={DEEP.red}>extrémité artérielle</Txt><Txt x={X(1) - 10} y={76} anchor="end" bold size={10.5} color={DEEP.blue}>extrémité veineuse</Txt>
      {[0.05, 0.15, 0.25, 0.35].map((t) => <path key={t} d={`M${X(t) + 10},50 L${X(t) + 10},22`} stroke={DEEP.red} strokeWidth={2.4} markerEnd="url(#fig-arrow)" />)}
      {[0.65, 0.75, 0.85, 0.95].map((t) => <path key={t} d={`M${X(t) - 10},22 L${X(t) - 10},50`} stroke={DEEP.blue} strokeWidth={2.4} markerEnd="url(#fig-arrow)" />)}
      <Txt x={X(0.22)} y={14} bold size={10.5} color={DEEP.red}>FILTRATION</Txt><Txt x={X(0.78)} y={14} bold size={10.5} color={DEEP.blue}>RÉABSORPTION</Txt>
      <Ax x={X(0)} y={Y(0)} w={540} h={Y(0) - Y(45)} xl="Position le long du capillaire" yl="Pression (mmHg)" />
      {[0, 15, 28, 35].map((p) => <g key={p}><line x1={X(0)} y1={Y(p)} x2={X(0) - 4} y2={Y(p)} stroke="currentColor" /><Txt x={X(0) - 8} y={Y(p) + 3} anchor="end" size={9}>{p}</Txt></g>)}
      <path d={`M${X(0)},${Y(35)} L${X(1)},${Y(15)}`} stroke={C.red} strokeWidth={3.4} /><Txt x={X(0.08)} y={Y(35) - 8} anchor="start" bold size={10.5} color={DEEP.red}>Phc : 35 → 15 mmHg</Txt>
      <path d={`M${X(0)},${Y(28)} L${X(1)},${Y(28)}`} stroke={C.blue} strokeWidth={3.4} strokeDasharray="8 5" /><Txt x={X(0.68)} y={Y(28) - 8} anchor="start" bold size={10.5} color={DEEP.blue}>πc ≈ 28 (25-30)</Txt>
      <path d={`M${X(0)},${Y(35)} L${X(0.35)},${Y(28)} L${X(0)},${Y(28)} Z`} fill={C.red} fillOpacity={0.3} />
      <path d={`M${X(0.35)},${Y(28)} L${X(1)},${Y(15)} L${X(1)},${Y(28)} Z`} fill={C.blue} fillOpacity={0.3} />
      <circle cx={X(0.35)} cy={Y(28)} r={5} fill="currentColor" />
      <Txt x={X(0.35)} y={Y(28) + 20} size={9.5} bold>équilibre</Txt>
      <Card x={X(0)} y={384} w={250} h={68} color={DEEP.red} title="Extrémité artérielle" lines={["35 − 28 = +7 mmHg → filtration", "(Phi et πi ≈ 0)"]} />
      <Card x={X(0) + 270} y={384} w={250} h={68} color={DEEP.blue} title="Extrémité veineuse" lines={["15 − 28 = −13 mmHg → réabsorption", "πc : principale force contre la filtration"]} />
    </Figure>
  );
}

// ─── Réflexe barorécepteur ───────────────────────────────────────────────
export function BaroreflexDiagram() {
  const box = (x: number, y: number, w: number, h: number, t: string, s: string, c: string) => (
    <g key={t}>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={2} />
      <Txt x={x + w / 2} y={y + 20} bold size={11.5}>{t}</Txt>
      <Txt x={x + w / 2} y={y + 36} size={9.5} color={C.grey}>{s}</Txt>
    </g>
  );
  const arr = (d: string) => <path d={d} fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />;
  return (
    <Figure viewBox="0 0 740 490" title="Le réflexe dépresseur des barorécepteurs" caption="Une hausse de PA étire le sinus carotidien et la crosse aortique : les influx (IX et X) gagnent le noyau du tractus solitaire, qui stimule la zone dépressive (vague, ↓ FC) et inhibe la zone pressive (↓ tonus sympathique, vasodilatation) → ↓ PA ; les chémorécepteurs (↓ PO₂, ↑ PCO₂, ↑ H⁺) déclenchent le réflexe presseur inverse">
      {box(30, 30, 200, 52, "↑ Pression artérielle", "étirement de la paroi", C.red)}
      {arr("M230,56 L262,56")}
      {box(264, 30, 210, 52, "Barorécepteurs", "sinus carotidien · crosse aortique", C.amber)}
      {arr("M474,56 L506,56")}
      {box(508, 30, 210, 52, "Voies afférentes", "IX (carotide) · X (crosse)", C.violet)}
      {arr("M612,84 L612,120")}
      {box(480, 122, 240, 56, "Noyau du tractus solitaire", "bulbe · stimule dépressive, inhibe pressive", C.blue)}
      {arr("M540,180 L400,214")}{arr("M660,180 L640,214")}
      {box(220, 216, 250, 70, "Zone dépressive (bulbe)", "noyau dorsal du vague, noyau ambigu", C.green)}
      {box(510, 216, 210, 70, "Zone pressive", "inhibée", C.red)}
      {arr("M340,288 L190,330")}{arr("M615,288 L560,330")}
      {box(60, 332, 260, 70, "↑ tonus vagal (SNP)", "↓ FC (chronotrope −) · ↓ DC", C.green)}
      {box(420, 332, 300, 70, "↓ tonus sympathique", "vasodilatation · ↓ RPT · ↓ contractilité", C.blue)}
      {arr("M190,404 L190,436 L370,436")}{arr("M570,404 L570,436 L400,436")}
      {box(280, 424, 180, 40, "↓ PA (retour à la normale)", "", C.green)}
      <path d="M30,436 C4,300 4,150 26,84" fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="6 4" markerEnd="url(#fig-arrow)" />
      <Txt x={44} y={250} anchor="start" size={9.5} bold color={C.grey}>rétro-contrôle négatif</Txt>
      <Txt x={20} y={482} anchor="start" size={9.5} color={C.grey}>Barorécepteurs carotidiens plus sensibles que les aortiques · HTA chronique : recalibrage (resetting)</Txt>
    </Figure>
  );
}
