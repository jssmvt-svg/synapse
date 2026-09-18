import type { ReactNode } from "react";
import { Figure, C, Txt, Dot, Seq } from "./Figure";

// Physiologie générale — Lecture 3 : le neurone, potentiels et conduction.

const MEM = "#e0a030";
const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;
const arrow = (d: string, flow = false) => (
  <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={flow ? "fig-flow" : undefined} markerEnd="url(#fig-arrow)" />
);

// ─── 1. Les deux types cellulaires du tissu nerveux ──────────────────────
export function NerveTissueCellsDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Les deux types cellulaires du tissu nerveux : neurone et cellules gliales" caption="Neurone (génération et conduction de l'excitation) et cellules gliales (rôle trophique et protecteur)">
      <Txt x={230} y={22} bold size={14} color={C.blue}>Le neurone</Txt>
      {/* dendrites */}
      {[[-1, -30], [-1, 10], [-1, 50]].map(([, dy], i) => (
        <path key={i} d={`M120,${170 + dy} C90,${150 + dy * 1.4} 60,${130 + dy * 1.5} 40,${110 + dy * 2}  M80,${140 + dy * 1.3} l-24,-6 M80,${140 + dy * 1.3} l-10,-24`} fill="none" stroke={C.blue} strokeWidth={4} strokeLinecap="round" />
      ))}
      <path d="M118,190 C90,205 70,236 40,250 M74,224 l-24,-4" fill="none" stroke={C.blue} strokeWidth={4} strokeLinecap="round" />
      {/* soma */}
      <path d="M120,150 C150,128 200,140 196,178 C194,212 150,224 124,206 C104,192 104,166 120,150z" fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={2.5} />
      <circle cx={156} cy={178} r={17} fill={C.violet} fillOpacity={0.6} stroke="#6a45b0" strokeWidth={2} />
      <circle cx={156} cy={178} r={5} fill="#3b2870" />
      {/* cône axonique + axone */}
      <path d="M196,170 L222,180" stroke={C.blue} strokeWidth={9} strokeLinecap="round" />
      <path d="M222,180 L520,180" stroke={C.blue} strokeWidth={5} strokeLinecap="round" />
      {[236, 306, 376, 446].map((x) => <rect key={x} x={x} y={166} width={52} height={28} rx={12} fill={C.green} fillOpacity={0.55} stroke="#2a7a55" strokeWidth={2} />)}
      {/* terminaisons */}
      <path d="M520,180 C540,160 552,146 566,136 M520,180 C548,180 560,180 572,180 M520,180 C540,200 552,214 566,224" fill="none" stroke={C.blue} strokeWidth={4} strokeLinecap="round" />
      {[[572, 134], [578, 180], [572, 226]].map(([x, y]) => <circle key={y} cx={x} cy={y} r={9} fill={C.blue} fillOpacity={0.5} stroke={C.blue} strokeWidth={2} />)}
      {/* légendes */}
      <line x1={70} y1={124} x2={56} y2={62} {...leader} /><Txt x={56} y={54} bold size={11}>Dendrites</Txt>
      <line x1={160} y1={150} x2={160} y2={80} {...leader} /><Txt x={160} y={72} bold size={11}>Péricaryon</Txt>
      <line x1={210} y1={172} x2={262} y2={100} {...leader} /><Txt x={280} y={92} bold size={11}>Cône axonique</Txt>
      <line x1={400} y1={166} x2={400} y2={130} {...leader} /><Txt x={400} y={124} bold size={11} color="#2a7a55">Gaine de myéline</Txt>
      <line x1={302} y1={190} x2={302} y2={222} {...leader} /><Txt x={302} y={236} bold size={11}>Nœud de Ranvier</Txt>
      <line x1={572} y1={150} x2={580} y2={100} {...leader} /><Txt x={600} y={92} bold size={11}>Boutons terminaux</Txt>
      <Txt x={370} y={262} size={10} color={C.grey}>dendrites : conduction afférente avec décrément • axone : conduction efférente sans décrément</Txt>

      <line x1={40} y1={286} x2={700} y2={286} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={312} bold size={14} color={C.green}>Les cellules gliales</Txt>
      {/* astrocyte */}
      <g transform="translate(110 350)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <line key={a} x1={0} y1={0} x2={Math.cos((a * Math.PI) / 180) * 36} y2={Math.sin((a * Math.PI) / 180) * 36} stroke={C.violet} strokeWidth={3.5} strokeLinecap="round" />)}
        <circle r={12} fill={C.violet} fillOpacity={0.6} stroke="#6a45b0" strokeWidth={2} />
      </g>
      <Txt x={110} y={398} bold size={10.5}>Astrocyte</Txt><Txt x={110} y={410} size={9} color={C.grey}>{"soutien, métabolisme"}</Txt>
      {/* oligodendrocyte */}
      <g transform="translate(300 350)">
        <circle r={13} fill={C.green} fillOpacity={0.6} stroke="#2a7a55" strokeWidth={2} />
        {[[-40, -14], [-40, 18], [40, -10], [40, 20]].map(([x, y], i) => <g key={i}><line x1={0} y1={0} x2={x} y2={y} stroke="#2a7a55" strokeWidth={2} /><rect x={x - (x > 0 ? 0 : 16)} y={y - 8} width={16} height={16} rx={6} fill={C.green} fillOpacity={0.55} stroke="#2a7a55" /></g>)}
      </g>
      <Txt x={300} y={398} bold size={10.5}>Oligodendrocyte</Txt><Txt x={300} y={410} size={9} color={C.grey}>myéline du SNC</Txt>
      {/* Schwann */}
      <g transform="translate(490 350)">
        <rect x={-44} y={-12} width={88} height={24} rx={11} fill={C.green} fillOpacity={0.55} stroke="#2a7a55" strokeWidth={2} />
        <line x1={-70} y1={0} x2={70} y2={0} stroke={C.blue} strokeWidth={4} />
        <circle cx={-10} cy={-12} r={7} fill={C.violet} fillOpacity={0.7} />
      </g>
      <Txt x={490} y={398} bold size={10.5}>Cellule de Schwann</Txt><Txt x={490} y={410} size={9} color={C.grey}>myéline du SNP</Txt>
      {/* microglie */}
      <g transform="translate(660 350)">
        <circle r={10} fill={C.red} fillOpacity={0.6} stroke="#b03a4a" strokeWidth={2} />
        {[0, 60, 120, 180, 240, 300].map((a) => <path key={a} d={`M0,0 q${Math.cos((a * Math.PI) / 180) * 20},${Math.sin((a * Math.PI) / 180) * 12} ${Math.cos(((a + 20) * Math.PI) / 180) * 30},${Math.sin(((a + 20) * Math.PI) / 180) * 26}`} fill="none" stroke="#b03a4a" strokeWidth={2} />)}
      </g>
      <Txt x={660} y={398} bold size={10.5}>Microglie</Txt><Txt x={660} y={410} size={9} color={C.grey}>défense, phagocytose</Txt>
    </Figure>
  );
}

// ─── 2. SNC et SNP ───────────────────────────────────────────────────────
export function CnsPnsDiagram() {
  const box = (x: number, y: number, w: number, h: number, t: string, sub: string | undefined, c: string) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={9} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={1.8} />
      <Txt x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} bold size={11.5}>{t}</Txt>
      {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={9.5} color={C.grey}>{sub}</Txt>}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 420" title="Système nerveux central et périphérique" caption="SNC : encéphale et moelle épinière. SNP : 12 nerfs crâniens, 31 nerfs rachidiens et ganglions annexés">
      {/* encéphale */}
      <path d="M110,120 C70,90 80,30 140,24 C190,14 232,40 230,84 C232,124 200,150 160,150 C140,150 124,138 110,120z" fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={2.5} />
      <path d="M100,70 C130,60 140,90 168,76 M120,110 C150,96 170,120 200,100 M150,40 C160,60 190,50 200,60" fill="none" stroke={C.blue} strokeWidth={2} />
      <Txt x={170} y={12} bold size={11} color={C.blue}>Encéphale</Txt>
      {/* moelle */}
      <rect x={158} y={150} width={20} height={230} rx={9} fill={C.blue} fillOpacity={0.45} stroke={C.blue} strokeWidth={2} />
      <Txt x={130} y={270} anchor="end" bold size={11} color={C.blue}>Moelle</Txt>
      <Txt x={130} y={284} anchor="end" bold size={11} color={C.blue}>épinière</Txt>
      {/* nerfs rachidiens */}
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i}>
          <path d={`M178,${170 + i * 20} C210,${166 + i * 20} 232,${180 + i * 20} 250,${176 + i * 20}`} fill="none" stroke={C.green} strokeWidth={2.5} />
          <path d={`M158,${170 + i * 20} C126,${166 + i * 20} 104,${180 + i * 20} 86,${176 + i * 20}`} fill="none" stroke={C.green} strokeWidth={2.5} />
          <circle cx={200} cy={172 + i * 20} r={3.5} fill={C.amber} /><circle cx={136} cy={172 + i * 20} r={3.5} fill={C.amber} />
        </g>
      ))}
      {/* nerfs crâniens */}
      {[[100, 116], [104, 100], [200, 130], [216, 110]].map(([x, y], i) => <path key={i} d={`M${x},${y} L${x + (x < 150 ? -30 : 30)},${y + 24}`} stroke={C.green} strokeWidth={2.5} />)}
      <Txt x={330} y={170} anchor="start" bold size={11} color={C.green}>31 nerfs rachidiens</Txt>
      <line x1={252} y1={176} x2={324} y2={166} {...leader} />
      <Txt x={330} y={62} anchor="start" bold size={11} color={C.green}>12 nerfs crâniens</Txt>
      <line x1={232} y1={120} x2={324} y2={58} {...leader} />
      <circle cx={250} cy={396} r={4} fill={C.amber} /><Txt x={260} y={400} anchor="start" size={10.5}>ganglions annexés</Txt>
      {/* arbre de classification */}
      {box(430, 20, 150, 40, "SNC", "commande et intégration", C.blue)}
      {box(430, 120, 150, 40, "SNP", "relie le SNC au corps", C.green)}
      {box(330, 200, 150, 44, "Voie afférente", "sensitive (récepteurs → SNC)", C.amber)}
      {box(500, 200, 150, 44, "Voie efférente", "motrice (SNC → effecteurs)", C.red)}
      {box(430, 286, 130, 50, "Somatique", "muscle strié — ACh", C.red)}
      {box(580, 286, 140, 50, "Autonome", "muscle lisse, cœur, glandes", C.violet)}
      {box(572, 356, 150, 44, "Sympathique", "T1-L2 — noradrénaline", C.amber)}
      {box(420, 356, 140, 44, "Parasympathique", "S2-S4, nerfs crâniens", C.green)}
      {arrow("M505,62 L505,116")}
      {arrow("M505,162 L430,198", true)}{arrow("M505,162 L575,198", true)}
      {arrow("M575,246 L495,284", true)}{arrow("M600,246 L650,284", true)}
      {arrow("M650,338 L650,352")}{arrow("M620,338 L520,352")}
    </Figure>
  );
}

// ─── 3. Potentiel de repos ───────────────────────────────────────────────
export function RestingPotentialDiagram() {
  const plus = (x: number, y: number) => <Txt key={`p${x}${y}`} x={x} y={y} bold size={13} color={C.red}>+</Txt>;
  const minus = (x: number, y: number) => <Txt key={`m${x}${y}`} x={x} y={y} bold size={15} color={C.blue}>−</Txt>;
  return (
    <Figure viewBox="0 0 720 400" title="Potentiel de repos neuronal" caption="Repos : intérieur négatif, extérieur positif, environ -70 mV ; fuite de K⁺ (50 à 100 fois > Na⁺), pompe Na⁺/K⁺ et anions protéiques">
      <rect x={30} y={70} width={430} height={250} rx={30} fill={C.blue} fillOpacity={0.07} stroke={MEM} strokeWidth={10} />
      <Txt x={245} y={20} bold size={12}>Milieu extracellulaire</Txt>
      <Txt x={245} y={36} size={10} color={C.grey}>Na⁺ élevé, K⁺ faible</Txt>
      <Txt x={245} y={190} bold size={12}>Milieu intracellulaire</Txt>
      <Txt x={245} y={206} size={10} color={C.grey}>K⁺ élevé, Na⁺ faible, anions protéiques A⁻ (65 mEq/L)</Txt>
      {/* charges */}
      {[70, 130, 190, 250, 310, 370, 430].map((x) => plus(x, 58))}
      {[70, 130, 190, 250, 310, 370, 430].map((x) => plus(x, 340))}
      {[64, 140, 216, 292].map((y) => plus(20, y + 36))}
      {[64, 140, 216, 292].map((y) => plus(470, y + 36))}
      {[90, 150, 210, 270, 330, 390].map((x) => minus(x, 108))}
      {[90, 150, 210, 270, 330, 390].map((x) => minus(x, 300))}
      {[62, 100, 244, 282].map((y) => <g key={y}>{minus(66, y + 60)}{minus(426, y + 60)}</g>)}
      {/* K+ fuite / Na+ fuite */}
      {[0, 1, 2].map((d) => <Dot key={d} path="M300,236 L300,86" dur={2.4} delay={d * 0.8} r={6} color={C.green} label="K" />)}
      {[0].map((d) => <Dot key={d} path="M340,96 L340,236" dur={5} delay={d} r={6} color={C.amber} label="Na" />)}
      <Txt x={300} y={266} size={10} bold color={C.green}>fuite K⁺ (rapide)</Txt>
      <Txt x={340} y={280} size={10} bold color={C.amber}>fuite Na⁺ (lente)</Txt>
      {/* pompe */}
      <rect x={130} y={303} width={34} height={34} rx={8} fill={C.violet} fillOpacity={0.6} stroke="#6a45b0" strokeWidth={2} />
      <Txt x={147} y={324} size={10} bold color="#fff">P</Txt>
      {[0, 1, 2].map((d) => <Dot key={d} path={`M${132 + d * 8},300 L${132 + d * 8},338`} dur={3} delay={d * 0.6} r={4} color={C.amber} />)}
      <Txt x={147} y={362} size={10} bold color={C.violet}>Pompe Na⁺/K⁺ : 3 Na⁺ dehors, 2 K⁺ dedans</Txt>
      {/* voltmètre */}
      <g transform="translate(520 100)">
        <circle cx={90} cy={60} r={62} fill="#fff" fillOpacity={0.9} stroke="#333" strokeWidth={3} />
        <path d="M90,60 L58,38" stroke={C.red} strokeWidth={3} strokeLinecap="round" className="fig-pulse" />
        <Txt x={90} y={90} bold size={20} color="#222">−70</Txt>
        <Txt x={90} y={106} size={11} color="#444">mV</Txt>
        <path d="M-2,-6 L60,-6 L60,52" fill="none" stroke={C.red} strokeWidth={3} />
        <path d="M-2,180 L60,180 L60,66" fill="none" stroke={C.blue} strokeWidth={3} />
        <Txt x={20} y={-12} size={10} color={C.red} bold>électrode externe</Txt>
        <Txt x={20} y={198} size={10} color={C.blue} bold>électrode interne</Txt>
      </g>
      <Txt x={610} y={310} size={10.5} color={C.grey}>plage : −60 à −90 mV</Txt>
      <Txt x={610} y={326} size={10.5} color={C.grey}>pompe : contribue −4 mV</Txt>
    </Figure>
  );
}

// ─── 4. Potentiel d'action et canaux ─────────────────────────────────────
function Gate({ x, y, open, color = "#333" }: { x: number; y: number; open: boolean; color?: string }) {
  return open ? <rect x={x - 2} y={y - 6} width={4} height={12} fill={color} opacity={0.6} /> : <rect x={x - 8} y={y - 2} width={16} height={4} fill={color} />;
}

function MiniChannels({ x, phase }: { x: number; phase: 0 | 1 | 2 | 3 }) {
  const naM = phase === 1 || phase === 2, naH = phase !== 2, kOpen = phase === 2 || phase === 3;
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={44} width={150} height={26} fill={MEM} fillOpacity={0.3} />
      <rect x={24} y={32} width={14} height={50} rx={5} fill={C.blue} fillOpacity={0.6} /><rect x={54} y={32} width={14} height={50} rx={5} fill={C.blue} fillOpacity={0.6} />
      <Gate x={46} y={36} open={naM} color={C.red} /><Gate x={46} y={78} open={naH} color={C.green} />
      <rect x={94} y={32} width={12} height={50} rx={5} fill={C.violet} fillOpacity={0.6} /><rect x={116} y={32} width={12} height={50} rx={5} fill={C.violet} fillOpacity={0.6} />
      <Gate x={111} y={57} open={kOpen} color="#333" />
      <Txt x={46} y={24} size={9} color={C.blue} bold>Na⁺</Txt><Txt x={111} y={24} size={9} color={C.violet} bold>K⁺</Txt>
      {phase === 1 && [0, 1].map((d) => <Dot key={d} path="M46,6 L46,110" dur={1.6} delay={d * 0.8} r={4} color={C.amber} />)}
      {(phase === 2 || phase === 3) && [0, 1].map((d) => <Dot key={d} path="M111,110 L111,6" dur={2} delay={d} r={4} color={C.green} />)}
    </g>
  );
}

export function ActionPotentialDiagram() {
  const curve = "M60,216 L140,216 C165,216 178,205 190,191 C200,150 206,80 220,47 C236,47 240,52 252,92 C275,170 300,216 320,216 C345,240 360,236 380,233 C420,232 450,218 480,216 L660,216";
  const phases = [
    { x0: 140, x1: 190, c: C.blue, t: "1. Prépotentiel" },
    { x0: 190, x1: 222, c: C.red, t: "2. Dépolarisation" },
    { x0: 222, x1: 322, c: C.green, t: "3. Repolarisation" },
    { x0: 322, x1: 480, c: C.violet, t: "4. Post-potentiel" },
  ];
  const info = [
    ["Repos : Na⁺ m fermée, h ouverte", "K⁺ fermé — seuil −55 mV à atteindre"],
    ["Dépolarisation : m ouverte", "influx de Na⁺ (×600) → +30 mV"],
    ["Repolarisation : h fermée", "inactivation Na⁺ ; efflux K⁺ (×300)"],
    ["Hyperpolarisation (−80 mV)", "K⁺ lents encore ouverts + pompe Na⁺/K⁺"],
  ];
  return (
    <Figure viewBox="0 0 720 470" title="Potentiel d'action neuronal avec ses phases et les canaux impliqués" caption="Phases du potentiel d'action : seuil −55 mV, pic +30 mV, amplitude 100 mV, durée 2 ms. Sous chaque phase : l'état des portes des canaux Na⁺ (m, h) et K⁺">
      {phases.map((p) => <rect key={p.t} x={p.x0} y={30} width={p.x1 - p.x0} height={220} fill={p.c} fillOpacity={0.1} />)}
      <line x1={60} y1={30} x2={60} y2={252} stroke="currentColor" strokeWidth={1.5} />
      <line x1={60} y1={252} x2={680} y2={252} stroke="currentColor" strokeWidth={1.5} markerEnd="url(#fig-arrow)" />
      {[[47, "+30"], [98, "0"], [191, "−55"], [216, "−70"], [233, "−80"]].map(([y, l]) => (
        <g key={String(l)}><line x1={55} y1={Number(y)} x2={60} y2={Number(y)} stroke="currentColor" /><Txt x={52} y={Number(y) + 4} anchor="end" size={10}>{String(l)}</Txt></g>
      ))}
      <Txt x={14} y={140} size={10} color={C.grey}>mV</Txt>
      <Txt x={672} y={268} size={10} color={C.grey} anchor="end">temps (ms)</Txt>
      <line x1={60} y1={98} x2={660} y2={98} stroke="currentColor" strokeOpacity={0.3} strokeDasharray="3 4" />
      <line x1={60} y1={191} x2={660} y2={191} stroke={C.red} strokeOpacity={0.7} strokeDasharray="6 4" />
      <Txt x={664} y={188} anchor="start" size={10} color={C.red} bold>seuil</Txt>
      <line x1={60} y1={216} x2={660} y2={216} stroke="currentColor" strokeOpacity={0.4} strokeDasharray="3 4" />
      <Txt x={664} y={220} anchor="start" size={10} color={C.grey}>repos</Txt>
      <path d={curve} fill="none" stroke="#1f3d99" strokeWidth={4} strokeLinejoin="round" />
      <Dot path={curve} dur={5} r={6} color={C.red} />
      {phases.map((p) => <Txt key={p.t} x={p.t.startsWith("2") ? 168 : (p.x0 + p.x1) / 2} y={p.t.startsWith("2") ? 12 : 24} bold size={p.t.startsWith("2") ? 10 : 11} color={p.c}>{p.t}</Txt>)}
      <Txt x={236} y={44} anchor="start" size={10} bold>pic</Txt>

      {phases.map((p, i) => (
        <g key={p.t} transform={`translate(${20 + i * 172} 282)`}>
          <rect x={0} y={0} width={166} height={174} rx={9} fill={p.c} fillOpacity={0.07} stroke={p.c} strokeOpacity={0.6} />
          <g transform="translate(8 6)"><MiniChannels x={0} phase={i as 0 | 1 | 2 | 3} /></g>
          <Txt x={83} y={130} bold size={10.5} color={p.c}>{p.t.slice(3)}</Txt>
          <Txt x={83} y={146} size={9}>{info[i][0]}</Txt>
          <Txt x={83} y={160} size={9} color={C.grey}>{info[i][1]}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 5. Périodes d'excitabilité ──────────────────────────────────────────
export function ExcitabilityPeriodsDiagram() {
  const curve = "M60,116 L140,116 C165,116 178,105 190,91 C200,50 206,-20 220,-53 C236,-53 240,-48 252,-8 C275,70 300,116 320,116 C345,140 360,136 380,133 C420,132 450,118 480,116 L660,116";
  return (
    <Figure viewBox="0 0 720 420" title="Périodes d'excitabilité neuronale" caption="Période réfractaire absolue (inexcitable), relative (hypoexcitable) et normoexcitable, en fonction de la dynamique des portes du canal Na⁺">
      <g transform="translate(0 110)">
        <rect x={190} y={-80} width={90} height={230} fill={C.red} fillOpacity={0.13} />
        <rect x={280} y={-80} width={200} height={230} fill={C.amber} fillOpacity={0.13} />
        <rect x={480} y={-80} width={180} height={230} fill={C.green} fillOpacity={0.1} />
        <rect x={60} y={-80} width={130} height={230} fill={C.green} fillOpacity={0.1} />
        <line x1={60} y1={-80} x2={60} y2={150} stroke="currentColor" strokeWidth={1.5} />
        <line x1={60} y1={150} x2={670} y2={150} stroke="currentColor" strokeWidth={1.5} markerEnd="url(#fig-arrow)" />
        <line x1={60} y1={91} x2={660} y2={91} stroke={C.red} strokeOpacity={0.7} strokeDasharray="6 4" />
        <path d={curve} fill="none" stroke="#1f3d99" strokeWidth={4} />
        <Dot path={curve} dur={5} r={6} color={C.red} />
        <Txt x={235} y={-60} bold size={11} color={C.red}>PRA</Txt>
        <Txt x={380} y={-60} bold size={11} color="#a3701a">PRR</Txt>
        <Txt x={570} y={-60} bold size={11} color="#2a7a55">PNE</Txt>
        <Txt x={125} y={-60} bold size={11} color="#2a7a55">PNE</Txt>
        <Txt x={20} y={35} size={10} color={C.grey}>Vm</Txt>
      </g>
      <g transform="translate(0 300)">
        <line x1={60} y1={0} x2={60} y2={90} stroke="currentColor" strokeWidth={1.5} />
        <line x1={60} y1={90} x2={670} y2={90} stroke="currentColor" strokeWidth={1.5} />
        <Txt x={54} y={12} anchor="end" size={9.5}>stimulus</Txt><Txt x={54} y={24} anchor="end" size={9.5}>requis</Txt>
        <path d="M60,70 L190,70 L190,0 M280,0 C300,20 340,40 380,52 C420,62 460,70 480,70 L660,70" fill="none" stroke={C.violet} strokeWidth={3.5} />
        <line x1={60} y1={70} x2={660} y2={70} stroke="currentColor" strokeOpacity={0.3} strokeDasharray="3 4" />
        <Txt x={240} y={16} size={9.5} color={C.red} bold>∞</Txt>
        <Txt x={125} y={62} size={9.5} color={C.grey}>seuil normal</Txt>
      </g>
      <g fontSize={10}>
        <Txt x={235} y={412} size={10} bold color={C.red}>inexcitable</Txt>
        <Txt x={380} y={412} size={10} bold color="#a3701a">stimulus supraliminaire</Txt>
        <Txt x={570} y={412} size={10} bold color="#2a7a55">réponse « tout ou rien »</Txt>
      </g>
    </Figure>
  );
}

// ─── 6. Conduction continue et saltatoire ────────────────────────────────
export function ConductionDiagram() {
  return (
    <Figure viewBox="0 0 720 400" title="Conduction de l'influx : fibre amyélinique et fibre myélinisée" caption="Fibre amyélinique : propagation continue et lente (courants de Hermann). Fibre myélinisée : conduction saltatoire de nœud en nœud (courants de Stämpfli)">
      <Txt x={14} y={22} anchor="start" bold size={13} color={C.blue}>Fibre amyélinique (type C) — conduction continue</Txt>
      <rect x={30} y={60} width={660} height={44} rx={20} fill={C.blue} fillOpacity={0.12} stroke={C.blue} strokeWidth={2} />
      {Array.from({ length: 12 }).map((_, i) => (
        <path key={i} d={`M${68 + i * 52},52 q26,-30 52,0`} fill="none" stroke={C.red} strokeWidth={1.8} strokeDasharray="3 3" />
      ))}
      <Dot path="M40,82 L680,82" dur={6} r={11} color={C.red} label="PA" />
      {Array.from({ length: 12 }).map((_, i) => <Txt key={i} x={94 + i * 52} y={46} size={9} color={C.red}>+</Txt>)}
      <Txt x={360} y={128} size={11} color={C.grey}>courants locaux de Hermann — propagation lente (0,5-2 m/s), forte consommation d'énergie</Txt>

      <line x1={30} y1={150} x2={690} y2={150} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />

      <Txt x={14} y={176} anchor="start" bold size={13} color="#2a7a55">Fibre myélinisée (types A et B) — conduction saltatoire</Txt>
      <rect x={30} y={226} width={660} height={20} rx={8} fill={C.green} fillOpacity={0.14} stroke={C.green} />
      {[70, 200, 330, 460, 590].map((x) => <rect key={x} x={x} y={208} width={110} height={56} rx={22} fill={C.green} fillOpacity={0.45} stroke="#2a7a55" strokeWidth={2} />)}
      {[180, 310, 440, 570].map((x) => <g key={x}><rect x={x} y={222} width={20} height={28} fill={C.blue} fillOpacity={0.6} /><Txt x={x + 10} y={280} size={9} color={C.blue} bold>nœud</Txt></g>)}
      {[190, 320, 450, 580].map((x) => <path key={x} d={`M${x},204 q65,-48 130,0`} fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="4 3" />)}
      <Dot path="M40,236 L190,236 Q255,170 320,236 Q385,170 450,236 Q515,170 580,236 L680,236" dur={5} r={11} color={C.red} label="PA" />
      <Txt x={360} y={306} size={11} color={C.grey}>le courant « saute » d'un nœud de Ranvier au suivant — rapide, peu coûteux en énergie</Txt>

      <rect x={40} y={322} width={640} height={68} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={130} y={342} bold size={10.5}>Fibre</Txt><Txt x={280} y={342} bold size={10.5}>Diamètre</Txt><Txt x={430} y={342} bold size={10.5}>Vitesse</Txt><Txt x={580} y={342} bold size={10.5}>Conduction</Txt>
      <Txt x={130} y={358} size={10}>C amyélinique</Txt><Txt x={280} y={358} size={10}>0,5-1 µm</Txt><Txt x={430} y={358} size={10}>0,5-2 m/s</Txt><Txt x={580} y={358} size={10}>continue</Txt>
      <Txt x={130} y={372} size={10}>B myélinisée</Txt><Txt x={280} y={372} size={10}>1-3 µm</Txt><Txt x={430} y={372} size={10}>3-15 m/s</Txt><Txt x={580} y={372} size={10}>saltatoire</Txt>
      <Txt x={130} y={386} size={10}>A myélinisée</Txt><Txt x={280} y={386} size={10}>3-20 µm</Txt><Txt x={430} y={386} size={10}>5-120 m/s</Txt><Txt x={580} y={386} size={10}>V = 6 × diamètre</Txt>
    </Figure>
  );
}

// ─── 7. Synapse chimique ─────────────────────────────────────────────────
export function SynapseDiagram() {
  const step = (i: number, x: number, y: number, t: string) => (
    <Seq i={i} n={4}>
      <circle cx={x} cy={y} r={13} fill={C.red} /><Txt x={x} y={y + 5} bold size={14} color="#fff">{String(i + 1)}</Txt>
      <Txt x={x + 20} y={y + 4} anchor="start" size={10.5} bold>{t}</Txt>
    </Seq>
  );
  return (
    <Figure viewBox="0 0 720 470" title="Fonctionnement d'une synapse chimique" caption="Synapse chimique : potentiel d'action, entrée de Ca²⁺, exocytose du neurotransmetteur, action sur les récepteurs postsynaptiques, inactivation (délai synaptique 0,4-0,7 ms)">
      {/* présynaptique */}
      <path d="M120,20 C120,20 380,20 380,20 C420,20 440,60 440,110 C440,150 420,170 380,170 L120,170 z" fill={C.blue} fillOpacity={0.12} stroke={C.blue} strokeWidth={3} />
      <Txt x={130} y={36} anchor="start" bold size={12} color={C.blue}>Bouton présynaptique</Txt>
      {/* canaux Ca2+ */}
      {[160, 240].map((x) => <g key={x}><rect x={x} y={160} width={10} height={20} fill={C.violet} /><rect x={x + 18} y={160} width={10} height={20} fill={C.violet} /></g>)}
      {[0, 1.2].map((d) => <Dot key={d} path="M199,120 L199,250" dur={2.4} delay={d} r={5} color={C.violet} label="Ca" />)}
      <Txt x={214} y={196} anchor="start" size={9.5} color={C.violet} bold>canaux Ca²⁺ voltage-dépendants</Txt>
      {/* vésicules */}
      {[[170, 70], [220, 90], [280, 66], [320, 100], [370, 130], [330, 140]].map(([x, y], i) => (
        <g key={i}><circle cx={x} cy={y} r={14} fill="#fff" fillOpacity={0.7} stroke={C.green} strokeWidth={2.5} />{[-4, 3].map((d) => <circle key={d} cx={x + d} cy={y + d / 2} r={2.5} fill={C.green} />)}</g>
      ))}
      <Txt x={300} y={54} size={9.5} color="#2a7a55" bold>vésicules de neurotransmetteur</Txt>
      {/* neurotransmetteurs */}
      {[0, 1, 2, 3].map((d) => <Dot key={d} path={`M${290 + d * 16},170 L${300 + d * 30},296`} dur={2.8} delay={d * 0.7} r={4} color={C.green} />)}
      {/* fente */}
      <rect x={100} y={190} width={480} height={108} fill={C.grey} fillOpacity={0.08} />
      <Txt x={600} y={244} anchor="start" bold size={11} color={C.grey}>Fente</Txt><Txt x={600} y={258} anchor="start" size={11} color={C.grey}>synaptique</Txt>
      {/* postsynaptique */}
      <path d="M120,300 L440,300 C480,300 500,310 500,340 L500,460 L120,460z" fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={3} />
      <Txt x={130} y={456} anchor="start" bold size={12} color={C.red}>Neurone / cellule postsynaptique</Txt>
      {[300, 340, 380].map((x) => <g key={x}><rect x={x} y={300} width={14} height={30} rx={4} fill={C.red} fillOpacity={0.6} /><rect x={x + 22} y={300} width={14} height={30} rx={4} fill={C.red} fillOpacity={0.6} /></g>)}
      <Txt x={340} y={350} size={9.5} bold color={C.red}>récepteurs postsynaptiques</Txt>
      {[0, 1].map((d) => <Dot key={d} path="M355,310 L355,420" dur={2.2} delay={d + 1} r={4.5} color={C.amber} />)}
      <Txt x={372} y={396} anchor="start" size={10} color="#a3701a" bold>Na⁺ (PPSE)</Txt>
      <Txt x={372} y={410} anchor="start" size={10} color={C.blue} bold>ou Cl⁻ (PPSI)</Txt>
      {/* inactivation */}
      <rect x={180} y={302} width={26} height={22} rx={6} fill={C.amber} fillOpacity={0.7} stroke="#a3701a" />
      <Txt x={193} y={342} size={9.5} bold color="#a3701a">AChE, COMT</Txt>
      <path d="M118,150 C100,150 100,260 118,260" fill="none" stroke={C.grey} strokeWidth={2} strokeDasharray="4 3" markerEnd="url(#fig-arrow)" />
      <Txt x={96} y={210} size={9} color={C.grey}>recapture</Txt>
      {/* PA arrivée */}
      <path d="M20,96 L110,96" stroke={C.red} strokeWidth={6} strokeLinecap="round" />
      <Dot path="M20,96 L110,96" dur={2.4} r={7} color={C.red} label="PA" />
      {step(0, 520, 50, "PA → Ca²⁺ entre")}
      {step(1, 520, 84, "Exocytose du NT")}
      {step(2, 520, 118, "NT sur récepteurs")}
      {step(3, 520, 152, "Inactivation du NT")}
      <Txt x={620} y={190} size={9.5} color={C.grey}>enzymes, recapture, glie</Txt>
    </Figure>
  );
}

