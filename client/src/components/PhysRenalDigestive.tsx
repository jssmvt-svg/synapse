import { Figure, C, Txt, Dot, Seq } from "./Figure";

// Physiologie rénale et digestive (semestre 1).

const RED = "#d9414f";
const MEM = "#e0a030";
const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;
const arrow = (d: string, flow = false) => (
  <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={flow ? "fig-flow" : undefined} markerEnd="url(#fig-arrow)" />
);
const box = (x: number, y: number, w: number, h: number, t: string, sub: string | undefined, c: string, size = 11.5) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={8} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={1.8} />
    <Txt x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} bold size={size}>{t}</Txt>
    {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 2} color={C.grey}>{sub}</Txt>}
  </g>
);

// ─── 1. Le néphron ───────────────────────────────────────────────────────
export function NephronDiagram() {
  const tube = { fill: "none", strokeWidth: 12, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const pathAll = "M150,110 C120,110 120,150 150,150 C180,150 180,190 150,190 C120,190 130,230 170,236 L240,236 L240,420 C240,440 300,440 300,420 L300,236 L390,236 L390,120 C420,90 470,120 470,150 L470,430";
  return (
    <Figure viewBox="0 0 760 500" title="Organisation du néphron" caption="Néphron : corpuscule rénal, tube contourné proximal, anse de Henlé, tube contourné distal et tube collecteur ; le filtrat est modifié tout le long du tube">
      <rect x={0} y={20} width={760} height={230} fill={C.amber} fillOpacity={0.09} />
      <rect x={0} y={250} width={760} height={240} fill={C.red} fillOpacity={0.06} />
      <Txt x={10} y={40} anchor="start" bold size={12} color="#a3701a">CORTEX</Txt>
      <Txt x={10} y={270} anchor="start" bold size={12} color={RED}>MÉDULLA</Txt>
      {/* glomérule */}
      <circle cx={120} cy={80} r={42} fill="#fff" fillOpacity={0.6} stroke={C.blue} strokeWidth={5} />
      <path d="M100,74 c10,-14 26,-6 20,8 c-6,14 -22,6 -14,-6 c8,-8 18,0 12,8" fill="none" stroke={RED} strokeWidth={4} />
      <path d="M40,60 L84,70 M40,100 L84,90" stroke={RED} strokeWidth={6} markerEnd="url(#fig-arrow)" />
      <Txt x={10} y={48} anchor="start" size={10} bold color={RED}>afférente</Txt><Txt x={10} y={122} anchor="start" size={10} bold color={RED}>efférente</Txt>
      {/* tube */}
      <path d="M150,110 C120,110 120,150 150,150 C180,150 180,190 150,190 C120,190 130,230 170,236" {...tube} stroke={C.green} />
      <path d="M170,236 L240,236 L240,420 C240,440 300,440 300,420 L300,236" {...tube} stroke={C.blue} strokeWidth={8} />
      <path d="M300,236 L390,236 L390,120" {...tube} stroke={C.violet} strokeWidth={10} />
      <path d="M390,120 C420,90 470,120 470,150" {...tube} stroke={C.amber} />
      <path d="M470,150 L470,430" {...tube} stroke={RED} strokeWidth={16} />
      <Dot path={pathAll} dur={9} r={7} color="#fff" />
      <Dot path={pathAll} dur={9} delay={4.5} r={7} color="#fff" />
      {/* légendes */}
      <Txt x={236} y={70} bold size={12} color={C.blue}>Corpuscule rénal</Txt><Txt x={236} y={85} size={10} color={C.grey}>glomérule + capsule de Bowman :</Txt><Txt x={236} y={99} size={10} color={C.grey}>filtration (120 mL/min)</Txt>
      <line x1={166} y1={80} x2={178} y2={80} {...leader} />
      <Txt x={212} y={150} anchor="start" bold size={12} color="#2a7a55">Tube contourné proximal</Txt><Txt x={212} y={166} anchor="start" size={10} color={C.grey}>65 % du filtrat : Na⁺, eau, glucose 100 %</Txt>
      <line x1={186} y1={150} x2={208} y2={150} {...leader} />
      <Txt x={40} y={332} anchor="start" bold size={12} color={C.blue}>Anse de Henlé</Txt>
      <Txt x={40} y={348} anchor="start" size={10} color={C.grey}>branche descendante : eau (15-20 %)</Txt><Txt x={40} y={362} anchor="start" size={10} color={C.grey}>branche ascendante : ions (20-25 %)</Txt>
      <line x1={190} y1={336} x2={236} y2={336} {...leader} />
      <Txt x={312} y={262} anchor="start" bold size={12} color="#6a45b0">Branche large ascendante</Txt>
      <Txt x={500} y={120} anchor="start" bold size={12} color="#a3701a">Tube contourné distal</Txt><Txt x={500} y={136} anchor="start" size={10} color={C.grey}>aldostérone : Na⁺ / K⁺</Txt><Txt x={500} y={150} anchor="start" size={10} color={C.grey}>1er tiers : segment de dilution</Txt>
      <Txt x={500} y={300} anchor="start" bold size={12} color={RED}>Tube collecteur</Txt><Txt x={500} y={316} anchor="start" size={10} color={C.grey}>ADH : aquaporines-2 (8-14 % du filtrat)</Txt>
      <Txt x={500} y={330} anchor="start" size={10} color={C.grey}>urine finale : 1 % du filtrat (1,5-2 L/j)</Txt>
      <line x1={484} y1={300} x2={496} y2={300} {...leader} />
      <Txt x={520} y={470} anchor="start" size={10.5} bold color={RED}>→ vers le bassinet</Txt>
      <rect x={70} y={410} width={150} height={60} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.3} />
      <Txt x={145} y={430} bold size={10.5}>Néphrons</Txt><Txt x={145} y={446} size={10}>corticaux (anse courte) 70-80 %</Txt><Txt x={145} y={460} size={10}>juxtamédullaires (anse longue)</Txt>
    </Figure>
  );
}

// ─── 2. Filtration glomérulaire ──────────────────────────────────────────
export function GlomerularFiltrationDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Filtration glomérulaire et pressions de filtration" caption="Pression nette de filtration = Ph − (Ponc + Pcaps) = 60 − (32 + 18) = 10 mmHg ; débit de filtration glomérulaire 120 mL/min">
      <path d="M40,150 L200,150 C240,150 250,110 300,110 C380,110 400,150 420,180 C440,210 400,240 340,240 C260,240 240,200 200,210 L40,210" fill={RED} fillOpacity={0.2} stroke={RED} strokeWidth={4} />
      <Txt x={112} y={138} size={10.5} bold color={RED}>artériole afférente</Txt><Txt x={112} y={232} size={10.5} bold color={RED}>artériole efférente</Txt>
      <path d="M40,150 L40,210" stroke="none" />
      <path d="M200,150 L200,210" stroke="none" />
      <rect x={20} y={172} width={22} height={8} fill={RED} />
      <path d="M254,150 C300,66 470,60 520,140 C560,210 490,290 380,290 C280,290 230,240 254,150z" fill="none" stroke={C.blue} strokeWidth={6} />
      <Txt x={400} y={72} bold size={12} color={C.blue}>Capsule de Bowman</Txt>
      {[0, 1, 2, 3].map((d) => <Dot key={d} path={`M${300 + d * 30},${160 + (d % 2) * 12} C${330 + d * 20},${140} 470,120 600,${200 + d * 6}`} dur={3.4} delay={d * 0.8} r={5} color={C.blue} />)}
      {/* barrière */}
      <g transform="translate(560 90)">
        <rect x={0} y={0} width={160} height={200} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
        <Txt x={80} y={20} bold size={11}>Barrière de filtration</Txt>
        <rect x={20} y={34} width={120} height={22} fill={RED} fillOpacity={0.35} /><Txt x={80} y={49} size={10} bold>endothélium fenestré</Txt>
        <rect x={20} y={62} width={120} height={22} fill={C.amber} fillOpacity={0.4} /><Txt x={80} y={77} size={10} bold>membrane basale</Txt>
        <rect x={20} y={90} width={120} height={22} fill={C.blue} fillOpacity={0.35} /><Txt x={80} y={105} size={10} bold>podocytes</Txt>
        <Txt x={80} y={136} size={10} color={C.grey}>filtre l'eau et les petites</Txt><Txt x={80} y={150} size={10} color={C.grey}>molécules ; retient protéines</Txt><Txt x={80} y={164} size={10} color={C.grey}>et cellules sanguines</Txt>
        <Txt x={80} y={188} size={10} bold color={C.blue}>filtrat isotonique, sans protéines</Txt>
      </g>
      {/* forces */}
      <rect x={20} y={300} width={700} height={88} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <g fontSize={11}>
        <Txt x={130} y={324} bold color="#2a7a55">Force favorable</Txt><Txt x={130} y={342} size={11}>Ph capillaire</Txt><Txt x={130} y={360} bold size={14} color="#2a7a55">60 mmHg</Txt>
        <Txt x={310} y={324} bold color={RED}>Forces défavorables</Txt><Txt x={310} y={342} size={11}>Ponc (32) + Pcaps (18)</Txt><Txt x={310} y={360} bold size={14} color={RED}>50 mmHg</Txt>
        <Txt x={500} y={324} bold color={C.blue}>Pression nette</Txt><Txt x={500} y={342} size={11}>60 − (32 + 18)</Txt><Txt x={500} y={360} bold size={14} color={C.blue}>10 mmHg</Txt>
        <Txt x={660} y={324} bold>DFG</Txt><Txt x={660} y={342} size={11}>120 mL/min</Txt><Txt x={660} y={360} bold size={14}>180 L/jour</Txt>
      </g>
      <Txt x={370} y={380} size={9.5} color={C.grey}>Ph : pression hydrostatique capillaire • Ponc : pression oncotique • Pcaps : pression hydrostatique capsulaire</Txt>
    </Figure>
  );
}

// ─── 3. Transport tubulaire (cellule du TCP et branche ascendante) ───────
export function TubularCellsDiagram() {
  const cell = (x: number, title: string, sub: string, c: string, body: React.ReactNode) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={6} width={350} height={408} rx={10} fill={c} fillOpacity={0.05} stroke={c} strokeOpacity={0.5} />
      <Txt x={175} y={28} bold size={13} color={c}>{title}</Txt>
      <Txt x={175} y={44} size={10.5} color={C.grey}>{sub}</Txt>
      <Txt x={38} y={80} size={10} bold color={C.grey}>LUMIÈRE</Txt><Txt x={312} y={80} size={10} bold color={C.grey}>SANG</Txt>
      <rect x={70} y={90} width={210} height={230} rx={14} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={3} />
      {body}
    </g>
  );
  const ion = (cx: number, cy: number, t: string, c: string) => (
    <g><circle cx={cx} cy={cy} r={11} fill={c} /><Txt x={cx} y={cy + 4} size={t.length > 2 ? 8 : 10} bold color="#fff">{t}</Txt></g>
  );
  return (
    <Figure viewBox="0 0 720 420" title="Transport tubulaire : cellule du tube proximal et de la branche large ascendante" caption="TCP : cotransport Na⁺/glucose (SGLT), échangeur Na⁺/H⁺, aquaporine-1. Branche large ascendante : cotransporteur Na⁺/K⁺/2Cl⁻ (bloqué par le furosémide)">
      {cell(5, "Tube contourné proximal", "réabsorption isotonique (≈ 65 %)", C.green, (
        <>
          <rect x={64} y={150} width={12} height={40} fill={C.violet} /><Txt x={66} y={146} size={9} bold color={C.violet}>SGLT</Txt>
          <rect x={64} y={230} width={12} height={40} fill={C.blue} /><Txt x={66} y={226} size={9} bold color={C.blue}>Na⁺/H⁺</Txt>
          <rect x={274} y={150} width={12} height={40} fill={C.amber} /><Txt x={280} y={144} size={9} bold color="#a3701a">Na⁺/K⁺-ATPase</Txt>
          <rect x={274} y={230} width={12} height={40} fill={C.pink} /><Txt x={280} y={224} size={9} bold color="#b0507a">GLUT2</Txt>
          {[0, 1].map((d) => <Dot key={d} path="M20,170 L170,170 L300,170" dur={3} delay={d * 1.5} r={8} color={C.amber} label="Na" />)}
          {[0, 1].map((d) => <Dot key={d} path="M20,180 L170,182 L300,250" dur={3} delay={d * 1.5 + 0.7} r={8} color={C.pink} label="G" />)}
          <Dot path="M20,250 L64,250 L130,250" dur={3.2} r={7} color={C.red} label="H" />
          {[0, 1, 2].map((d) => <Dot key={d} path="M170,300 L170,110 L250,80" dur={3.6} delay={d * 1.2} r={5} color={C.blue} />)}
          <Txt x={175} y={342} size={10.5} bold>eau : aquaporine-1 + solvent drag</Txt>
          <Txt x={175} y={360} size={10.5} color={C.grey}>glucose et protéines : 100 % (Tmax)</Txt>
          <Txt x={175} y={378} size={10.5} color={C.grey}>Na⁺ 65 % • HCO₃⁻ 90 % • sécrétion de H⁺</Txt>
        </>
      ))}
      {cell(365, "Branche large ascendante", "segment de dilution, imperméable à l'eau", C.violet, (
        <>
          <rect x={64} y={170} width={12} height={60} fill={C.violet} /><Txt x={66} y={164} size={9} bold color={C.violet}>Na⁺/K⁺/2Cl⁻</Txt>
          <rect x={274} y={150} width={12} height={40} fill={C.amber} /><Txt x={280} y={144} size={9} bold color="#a3701a">Na⁺/K⁺-ATPase</Txt>
          <rect x={274} y={230} width={12} height={40} fill={C.green} /><Txt x={280} y={224} size={9} bold color="#2a7a55">Cl⁻</Txt>
          {[["Na", C.amber], ["K", C.green], ["Cl", C.blue], ["Cl", C.blue]].map(([t, c], i) => <Dot key={i} path="M20,200 L64,200 L170,200" dur={3.4} delay={i * 0.8} r={8} color={String(c)} label={String(t)} />)}
          <Txt x={175} y={342} size={10.5} bold>furosémide : bloque le cotransporteur</Txt>
          <Txt x={175} y={360} size={10.5} color={C.grey}>réabsorption de 20-25 % des ions</Txt>
          <Txt x={175} y={378} size={10.5} color={C.grey}>urine sortante hypotonique ≈ 150 mOsm/L</Txt>
        </>
      ))}
    </Figure>
  );
}

// ─── 4. Mécanisme multiplicateur à contre-courant ────────────────────────
export function CountercurrentDiagram() {
  const grads = [300, 500, 700, 900, 1200];
  return (
    <Figure viewBox="0 0 740 470" title="Mécanisme multiplicateur à contre-courant" caption="Anse de Henlé : la branche descendante perd de l'eau, la branche ascendante perd des ions ; gradient cortico-papillaire de 300 à 1200 mOsm/L ; l'ADH concentre l'urine dans le collecteur">
      <defs>
        <linearGradient id="cc-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={C.amber} stopOpacity="0.05" /><stop offset="1" stopColor={RED} stopOpacity="0.45" /></linearGradient>
      </defs>
      <rect x={20} y={60} width={700} height={380} fill="url(#cc-grad)" rx={10} />
      {grads.map((g, i) => <Txt key={g} x={24} y={84 + i * 84} anchor="start" size={12} bold color={i > 2 ? RED : "#a3701a"}>{`${g}`}</Txt>)}
      <Txt x={24} y={52} anchor="start" size={10.5} color={C.grey}>mOsm/L</Txt>
      <Txt x={350} y={26} bold size={13}>Gradient cortico-papillaire</Txt>
      {/* anse */}
      <path d="M180,70 L180,400 C180,440 260,440 260,400 L260,70" fill="none" stroke={C.blue} strokeWidth={14} strokeLinecap="round" />
      <path d="M180,70 L180,400" stroke={C.blue} strokeWidth={14} strokeLinecap="round" opacity={0.55} />
      <path d="M260,70 L260,400" stroke={C.violet} strokeWidth={14} strokeLinecap="round" />
      <Txt x={150} y={230} anchor="end" bold size={11} color={C.blue}>branche</Txt><Txt x={150} y={244} anchor="end" bold size={11} color={C.blue}>descendante</Txt>
      <Txt x={150} y={260} anchor="end" size={10} color={C.grey}>perméable à l'eau</Txt>
      <Txt x={296} y={230} anchor="start" bold size={11} color="#6a45b0">branche</Txt><Txt x={296} y={244} anchor="start" bold size={11} color="#6a45b0">ascendante</Txt>
      <Txt x={296} y={260} anchor="start" size={10} color={C.grey}>perméable aux ions</Txt>
      {/* flux */}
      <Dot path="M180,60 L180,410" dur={6} r={6} color="#fff" />
      <Dot path="M180,60 L180,410" dur={6} delay={3} r={6} color="#fff" />
      <Dot path="M260,410 L260,60" dur={6} delay={1.5} r={6} color="#fff" />
      {/* eau qui sort de la descendante */}
      {[140, 230, 320].map((y, i) => <Dot key={y} path={`M186,${y} L214,${y}`} dur={2} delay={i * 0.6} r={4} color={C.blue} />)}
      {/* ions qui sortent de l'ascendante */}
      {[140, 230, 320].map((y, i) => <Dot key={y} path={`M266,${y} L300,${y}`} dur={2} delay={i * 0.6 + 0.3} r={4} color={C.amber} />)}
      <Txt x={215} y={116} size={10} bold color={C.blue}>H₂O →</Txt>
      <Txt x={286} y={116} anchor="start" size={10} bold color="#a3701a">← ions</Txt>
      {/* collecteur */}
      <path d="M560,70 L560,400" stroke={RED} strokeWidth={20} strokeLinecap="round" opacity={0.7} />
      {[120, 200, 280, 350].map((y, i) => <Dot key={y} path={`M552,${y} L500,${y}`} dur={2.4} delay={i * 0.5} r={4} color={C.blue} />)}
      <Txt x={590} y={200} anchor="start" bold size={11.5} color={RED}>Tube collecteur</Txt>
      <Txt x={590} y={218} anchor="start" size={10} color={C.grey}>ADH → aquaporines-2</Txt>
      <Txt x={590} y={232} anchor="start" size={10} color={C.grey}>eau réabsorbée : urine</Txt>
      <Txt x={590} y={246} anchor="start" size={10} color={C.grey}>concentrée (jusqu'à 1200)</Txt>
      {/* vasa recta */}
      <path d="M420,70 L420,380 C420,410 450,410 450,380 L450,70" fill="none" stroke={RED} strokeWidth={5} strokeDasharray="3 3" />
      <Txt x={435} y={430} size={10} bold color={RED}>vasa recta</Txt>
      <Txt x={435} y={444} size={10} color={C.grey}>maintiennent le gradient</Txt>
      <Txt x={370} y={460} size={10} color={C.grey}>cortex (haut) → papille (bas) : concentration progressive du liquide interstitiel</Txt>
    </Figure>
  );
}

// ─── 5. Système rénine-angiotensine-aldostérone ──────────────────────────
export function RaasDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Système rénine-angiotensine-aldostérone (SRAA)" caption="↓ PA, ↓ volume sanguin ou ↓ Na⁺ → rénine → angiotensine II → vasoconstriction, aldostérone (rétention de Na⁺) → ↑ PA">
      {box(20, 20, 210, 46, "↓ PA, ↓ volume, ↓ Na⁺", "stimulus (macula densa, barorécepteurs)", C.red, 12)}
      {arrow("M125,68 L125,100", true)}
      {box(20, 102, 210, 50, "Cellules granulaires", "appareil juxtaglomérulaire → RÉNINE", C.amber, 12)}
      {arrow("M125,154 L125,186", true)}
      {box(20, 188, 210, 46, "Angiotensinogène (foie)", "→ angiotensine I", C.blue, 12)}
      {arrow("M125,236 L125,268", true)}
      {box(20, 270, 210, 46, "Enzyme de conversion", "angiotensine I → ANGIOTENSINE II", C.violet, 12)}
      {arrow("M232,292 L300,292 L300,150 L340,120", true)}{arrow("M232,292 L340,292", true)}{arrow("M232,292 L300,292 L300,430 L340,392", true)}
      {box(342, 90, 230, 60, "Vasoconstriction", "↑ résistance périphérique → ↑ PA", C.red, 12)}
      {box(342, 262, 230, 60, "Aldostérone (surrénale)", "↑ réabsorption de Na⁺ (et eau), sécrétion de K⁺", C.green, 12)}
      {box(342, 370, 230, 46, "Rein : ↑ réabsorption de Na⁺", "ADH : ↑ eau", C.blue, 12)}
      {arrow("M574,120 L640,120 L640,60", true)}{arrow("M574,292 L640,292 L640,60", true)}
      {box(600, 20, 130, 42, "↑ PA, ↑ volume", "rétablis", C.green, 12)}
      <path d="M690,60 L690,10 L125,10 L125,18" fill="none" stroke={C.green} strokeWidth={2} strokeDasharray="6 4" className="fig-flow" markerEnd="url(#fig-arrow)" />
      <Txt x={410} y={6} size={10} bold color="#2a7a55">rétrocontrôle négatif : la rénine diminue</Txt>
    </Figure>
  );
}

// ─── 6. Miction ──────────────────────────────────────────────────────────
export function MicturitionDiagram() {
  return (
    <Figure viewBox="0 0 820 440" title="Réflexe de la miction" caption="Remplissage vésical → réflexe d'étirement → centres sacrés S2-S3 → contraction du détrusor ; le sphincter externe est sous contrôle volontaire">
      {/* moelle */}
      <rect x={60} y={60} width={40} height={280} rx={16} fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={3} />
      <rect x={52} y={250} width={56} height={46} rx={12} fill={C.violet} fillOpacity={0.5} stroke={C.violet} strokeWidth={3} />
      <Txt x={80} y={318} bold size={10.5} color="#6a45b0">S2 – S3</Txt>
      <Txt x={80} y={50} bold size={11}>Cortex</Txt>
      <Txt x={80} y={366} size={10} color={C.grey}>moelle épinière</Txt>
      {/* vessie */}
      <path d="M380,110 C300,110 280,200 300,270 C320,330 440,330 460,270 C480,200 460,110 380,110z" fill={C.amber} fillOpacity={0.3} stroke={C.amber} strokeWidth={5} />
      <Txt x={380} y={210} bold size={13}>Vessie</Txt><Txt x={380} y={228} size={10.5}>détrusor</Txt>
      {[[320, 170], [430, 170], [310, 250], [450, 250]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={5} fill={RED} className="fig-pulse" />)}
      <Txt x={476} y={150} anchor="start" size={10} bold color={RED}>récepteurs d'étirement</Txt>
      <rect x={366} y={324} width={28} height={16} fill={C.grey} /><Txt x={380} y={358} size={10} bold color={C.grey}>sphincter interne</Txt>
      <rect x={366} y={366} width={28} height={16} fill={C.violet} /><Txt x={380} y={400} size={10} bold color="#6a45b0">sphincter externe (strié)</Txt>
      {/* voies */}
      <path d="M300,170 C230,170 200,190 130,262" fill="none" stroke={RED} strokeWidth={4} className="fig-flow" markerEnd="url(#fig-arrow)" />
      <Txt x={200} y={190} size={10.5} bold color={RED}>1. voie afférente</Txt>
      <path d="M130,280 C210,300 260,270 306,250" fill="none" stroke={C.green} strokeWidth={4} className="fig-flow" markerEnd="url(#fig-arrow)" />
      <Txt x={210} y={310} size={10.5} bold color="#2a7a55">2. parasympathique : contraction</Txt>
      <path d="M130,296 C200,380 300,392 362,376" fill="none" stroke={C.violet} strokeWidth={3} strokeDasharray="5 4" markerEnd="url(#fig-arrow)" />
      <Txt x={230} y={412} size={10.5} bold color="#6a45b0">nerfs pudendaux : sphincter externe</Txt>
      <path d="M80,70 L80,250" fill="none" stroke="currentColor" strokeWidth={2.5} strokeDasharray="4 4" markerEnd="url(#fig-arrow)" />
      <Txt x={128} y={84} anchor="start" size={10.5} bold>3. contrôle cortical :</Txt><Txt x={128} y={100} anchor="start" size={10.5}>inhibe le réflexe (volontaire)</Txt>
      {/* étapes */}
      {["Remplissage", "Réflexe d'étirement", "Contraction du détrusor", "Relâchement du sphincter externe"].map((s, i) => (
        <Seq key={s} i={i} n={4}>
          <circle cx={560} cy={110 + i * 50} r={13} fill={RED} /><Txt x={560} y={115 + i * 50} bold size={13} color="#fff">{String(i + 1)}</Txt>
          <Txt x={582} y={115 + i * 50} anchor="start" size={11} bold>{s}</Txt>
        </Seq>
      ))}
      <Txt x={650} y={70} bold size={12}>Séquence</Txt>
    </Figure>
  );
}

// ─── 7. Sécrétion gastrique de HCl ───────────────────────────────────────
export function GastricSecretionDiagram() {
  return (
    <Figure viewBox="0 0 760 460" title="Mécanisme de la sécrétion gastrique de HCl et sa régulation" caption="Cellule pariétale : anhydrase carbonique, pompe H⁺/K⁺-ATPase apicale, échangeur HCO₃⁻/Cl⁻ basal ; régulation par l'ACh (M3), la gastrine et l'histamine (H2)">
      <Txt x={110} y={26} bold size={12}>LUMIÈRE GASTRIQUE</Txt><Txt x={620} y={26} bold size={12}>SANG</Txt>
      <rect x={230} y={50} width={300} height={280} rx={30} fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={4} />
      <Txt x={380} y={72} bold size={12} color={RED}>Cellule pariétale</Txt>
      {/* pôle apical */}
      <rect x={222} y={150} width={16} height={60} fill={C.red} /><Txt x={214} y={144} anchor="end" size={10} bold color={RED}>H⁺/K⁺-ATPase</Txt>
      <rect x={222} y={250} width={16} height={40} fill={C.blue} /><Txt x={214} y={244} anchor="end" size={10} bold color={C.blue}>canal Cl⁻</Txt>
      {/* pôle basal */}
      <rect x={522} y={130} width={16} height={50} fill={C.blue} /><Txt x={546} y={126} anchor="start" size={10} bold color={C.blue}>HCO₃⁻/Cl⁻</Txt>
      <rect x={522} y={220} width={16} height={50} fill={C.amber} /><Txt x={546} y={216} anchor="start" size={10} bold color="#a3701a">Na⁺/K⁺-ATPase</Txt>
      {/* réactions */}
      {box(290, 96, 170, 32, "CO₂ + H₂O", undefined, C.violet, 11)}
      <Txt x={475} y={116} anchor="start" size={9.5} bold color={C.violet}>anhydrase carbonique</Txt>
      {arrow("M375,130 L375,150")}
      {box(290, 152, 170, 32, "H₂CO₃ → H⁺ + HCO₃⁻", undefined, C.violet, 11)}
      {arrow("M330,186 L250,190")}{arrow("M420,186 L505,150")}
      <Dot path="M320,190 L230,190 L120,190" dur={3} r={9} color={C.red} label="H" />
      <Dot path="M120,270 L230,270 L300,270" dur={3.4} delay={1} r={9} color={C.blue} label="Cl" />
      <Dot path="M300,270 L230,270 L120,270" dur={3.4} delay={2.2} r={9} color={C.blue} label="Cl" />
      <Dot path="M420,190 L500,150 L620,150" dur={3} delay={0.4} r={9} color={C.blue} label="HCO₃" />
      <Txt x={110} y={216} anchor="start" size={11} bold color={RED}>H⁺ + Cl⁻ → HCl</Txt>
      <Txt x={548} y={100} anchor="start" size={10} bold color={C.blue}>« marée alcaline »</Txt>
      {/* stimuli */}
      <g>
        {[["ACh", "récepteur M3 (Gq)", C.green, 230], ["Gastrine", "récepteur CCK-B", C.amber, 290], ["Histamine", "récepteur H2 (Gs, AMPc)", C.violet, 350]].map(([t, s, c, y]) => (
          <g key={String(t)}>
            <rect x={560} y={Number(y)} width={180} height={48} rx={8} fill={String(c)} fillOpacity={0.16} stroke={String(c)} strokeWidth={1.8} />
            <Txt x={650} y={Number(y) + 20} bold size={11.5} color={String(c)}>{`+ ${t}`}</Txt>
            <Txt x={650} y={Number(y) + 37} size={10} color={C.grey}>{String(s)}</Txt>
          </g>
        ))}
      </g>
      {/* inhibiteurs */}
      <rect x={30} y={350} width={300} height={90} rx={8} fill="none" stroke={RED} strokeOpacity={0.5} />
      <Txt x={180} y={372} bold size={11.5} color={RED}>Inhibiteurs</Txt>
      <Txt x={46} y={392} anchor="start" size={10.5}>somatostatine • sécrétine • PGE₂ (inhibe la pompe)</Txt>
      <Txt x={46} y={410} anchor="start" size={10.5}>pH acide • atropine (bloque M3) • cimétidine (bloque H2)</Txt>
      <Txt x={46} y={428} anchor="start" size={10.5}>AINS : ↓ PGE₂ → hyperacidité gastrique</Txt>
      <Txt x={380} y={352} size={10.5} color={C.grey}>Phases : céphalique 40 % • gastrique 50 % • intestinale 10 %</Txt>
    </Figure>
  );
}

// ─── 8. Absorption intestinale ───────────────────────────────────────────
export function IntestinalAbsorptionDiagram() {
  return (
    <Figure viewBox="0 0 760 470" title="Absorption intestinale : glucides et lipides dans l'entérocyte" caption="Glucose : cotransport Na⁺/glucose (SGLT1) puis GLUT2 ; lipides : micelles, resynthèse, chylomicrons, voie lymphatique">
      <Txt x={90} y={26} bold size={12}>LUMIÈRE INTESTINALE</Txt><Txt x={660} y={26} bold size={12}>CIRCULATION</Txt>
      {/* microvillosités */}
      {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={166 + i * 22} y={62} width={10} height={44} rx={5} fill={C.blue} fillOpacity={0.5} stroke={C.blue} />)}
      <rect x={160} y={106} width={440} height={330} rx={26} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={4} />
      <Txt x={380} y={126} bold size={12} color={C.blue}>Entérocyte</Txt><Txt x={380} y={140} size={10} color={C.grey}>bordure en brosse (pôle apical)</Txt>
      {/* glucose */}
      <rect x={196} y={106} width={44} height={14} fill={C.violet} /><Txt x={218} y={100} size={9.5} bold color={C.violet}>SGLT1</Txt>
      {[0, 1].map((d) => <Dot key={d} path="M90,30 L218,108 L218,200 L380,250" dur={4} delay={d * 2} r={8} color={C.pink} label="G" />)}
      {[0, 1].map((d) => <Dot key={d} path="M110,30 L228,108 L228,180 L260,200" dur={4} delay={d * 2 + 0.6} r={7} color={C.amber} label="Na" />)}
      <rect x={592} y={196} width={18} height={44} fill={C.pink} /><Txt x={606} y={190} size={9.5} bold color="#b0507a">GLUT2</Txt>
      <Dot path="M380,250 L592,218 L700,218" dur={3} delay={1} r={8} color={C.pink} label="G" />
      <rect x={592} y={270} width={18} height={44} fill={C.amber} /><Txt x={606} y={264} size={9.5} bold color="#a3701a">Na⁺/K⁺</Txt>
      {/* lipides */}
      <g>
        {[0, 1, 2].map((d) => <Dot key={d} path="M90,60 L300,140 L330,330" dur={4.4} delay={d * 1.4} r={7} color={C.amber} />)}
        <Txt x={110} y={72} size={10} anchor="start" bold color="#a3701a">micelles</Txt>
        <Txt x={110} y={86} size={9.5} anchor="start" color={C.grey}>sels biliaires + lipides</Txt>
      </g>
      {box(300, 330, 120, 34, "Réticulum : resynthèse", undefined, C.amber, 10)}
      {arrow("M380,366 L380,384")}
      {box(320, 386, 120, 34, "Golgi → chylomicrons", undefined, C.red, 10)}
      <Dot path="M440,400 L540,400 L700,420" dur={4} r={9} color={RED} label="CM" />
      <path d="M540,330 L740,330" stroke={C.green} strokeWidth={0} />
      <Txt x={620} y={410} anchor="start" size={10.5} bold color={RED}>lymphatique central</Txt>
      <Txt x={620} y={426} anchor="start" size={10} color={C.grey}>de la villosité</Txt>
      <Txt x={380} y={456} size={10.5} color={C.grey}>voie sanguine directe : acides gras à chaîne courte • voie lymphatique : chylomicrons (TG 90 %, apoprotéine B-48)</Txt>
    </Figure>
  );
}

// ─── 9. Motilité : péristaltisme et segmentation ─────────────────────────
export function GiMotilityDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Motilité intestinale : péristaltisme et segmentation" caption="Péristaltisme : onde contractile en amont et relâchement en aval (loi de Starling) ; segmentation : contractions alternées pour le mélange">
      <Txt x={14} y={22} anchor="start" bold size={13} color={C.blue}>Mouvements péristaltiques (propulsion)</Txt>
      <path d="M40,74 L700,74 M40,146 L700,146" stroke={C.grey} strokeWidth={6} />
      <path d="M40,74 L280,74 C310,74 320,90 340,90 C370,90 380,130 420,130 C450,130 460,146 480,146 L700,146" fill="none" stroke="none" />
      <g className="fig-slide" style={{ ["--dx" as string]: "90px" }}>
        <path d="M150,74 C170,74 178,98 210,98 C240,98 250,74 270,74 M150,146 C170,146 178,122 210,122 C240,122 250,146 270,146" fill="none" stroke={C.red} strokeWidth={6} />
        <rect x={172} y={100} width={76} height={20} rx={10} fill={C.amber} />
        <Txt x={210} y={114} size={10} bold color="#fff">bol</Txt>
      </g>
      <Txt x={90} y={176} size={10.5} bold color={C.red}>onde contractile (ACh, substance P)</Txt>
      <Txt x={90} y={192} size={10} color={C.grey}>en amont du bol</Txt>
      <Txt x={420} y={176} size={10.5} bold color={C.blue}>relâchement réceptif (NO, VIP)</Txt>
      <Txt x={420} y={192} size={10} color={C.grey}>en aval</Txt>
      <path d="M40,60 L120,60" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Txt x={620} y={60} size={10} color={C.grey}>sens crânio-caudal</Txt>
      <line x1={30} y1={214} x2={710} y2={214} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />

      <Txt x={14} y={240} anchor="start" bold size={13} color="#2a7a55">Mouvements de segmentation (mélange)</Txt>
      {[0, 1].map((k) => (
        <g key={k} className="fig-pulse" style={{ animationDelay: `${k}s` }}>
          {[80, 200, 320, 440, 560].map((x, i) => (
            <g key={x}>
              {(i + k) % 2 === 0
                ? <path d={`M${x - 30},${300 - 34} C${x - 10},${300 - 10} ${x + 10},${300 - 10} ${x + 30},${300 - 34} M${x - 30},${300 + 34} C${x - 10},${300 + 10} ${x + 10},${300 + 10} ${x + 30},${300 + 34}`} fill="none" stroke={C.green} strokeWidth={7} opacity={k === 0 ? 1 : 0} />
                : <ellipse cx={x} cy={300} rx={44} ry={34} fill={C.amber} fillOpacity={0.35} stroke={C.amber} strokeWidth={3} opacity={k === 0 ? 1 : 0} />}
            </g>
          ))}
        </g>
      ))}
      <path d="M30,260 L710,260 M30,340 L710,340" stroke={C.grey} strokeWidth={3} opacity={0.5} />
      <Txt x={370} y={372} size={10.5} bold>contractions concentriques suivies de relâchement, puis nouvelle contraction entre les précédentes</Txt>
      <Txt x={370} y={390} size={10} color={C.grey}>fragmentation du contenu, propulsion bidirectionnelle limitée — fréquence propre à chaque segment (pacemaker local)</Txt>
      <Txt x={370} y={408} size={10} color={C.grey}>coordination : plexus myentérique d'Auerbach (système nerveux entérique)</Txt>
    </Figure>
  );
}

