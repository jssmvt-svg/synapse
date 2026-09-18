import { Figure, C, Txt, Dot, Seq } from "./Figure";

// Physiologie générale — Lecture 4 : muscle strié et muscle lisse.

const MEM = "#e0a030";
const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;
const arrow = (d: string, flow = false) => (
  <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={flow ? "fig-flow" : undefined} markerEnd="url(#fig-arrow)" />
);

// ─── 1. Organisation de la fibre musculaire squelettique ─────────────────
export function MuscleFiberDiagram() {
  const period = 64;
  const start = 70;
  const count = 6;
  const rows = [112, 172, 232];
  return (
    <Figure viewBox="0 0 740 440" title="Organisation de la fibre musculaire squelettique" caption="Fibre musculaire : sarcolemme, noyaux périphériques, myofibrilles striées, tubules T et citernes du réticulum sarcoplasmique (triades)">
      {/* fibre */}
      <rect x={40} y={70} width={520} height={250} rx={40} fill={C.red} fillOpacity={0.06} stroke={C.red} strokeWidth={4} />
      {/* noyaux périphériques */}
      {[[120, 84], [330, 306], [480, 84]].map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx={24} ry={8} fill={C.violet} fillOpacity={0.6} stroke="#6a45b0" strokeWidth={1.5} />)}
      {/* myofibrilles */}
      {rows.map((y) => (
        <g key={y}>
          {Array.from({ length: count }).map((_, i) => {
            const x0 = start + i * period;
            return (
              <g key={i}>
                <rect x={x0 + 12} y={y - 18} width={40} height={36} fill="#3b2f5e" fillOpacity={0.55} />
                <rect x={x0 + 26} y={y - 18} width={12} height={36} fill="#3b2f5e" fillOpacity={0.3} />
                <line x1={x0} y1={y - 20} x2={x0} y2={y + 20} stroke="currentColor" strokeWidth={2} />
              </g>
            );
          })}
          <line x1={start + count * period} y1={y - 20} x2={start + count * period} y2={y + 20} stroke="currentColor" strokeWidth={2} />
        </g>
      ))}
      {/* réticulum sarcoplasmique et tubules T */}
      {Array.from({ length: count }).map((_, i) => {
        const xs = [start + i * period + 12, start + i * period + 52];
        return xs.map((x, k) => (
          <g key={`${i}${k}`}>
            <line x1={x} y1={70} x2={x} y2={318} stroke={C.blue} strokeWidth={5} opacity={0.75} />
            <rect x={x - 11} y={92} width={5} height={54} rx={2} fill={C.green} fillOpacity={0.8} />
            <rect x={x + 6} y={92} width={5} height={54} rx={2} fill={C.green} fillOpacity={0.8} />
            <rect x={x - 11} y={206} width={5} height={54} rx={2} fill={C.green} fillOpacity={0.8} />
            <rect x={x + 6} y={206} width={5} height={54} rx={2} fill={C.green} fillOpacity={0.8} />
          </g>
        ));
      })}
      {rows.map((y) => <path key={y} d={`M${start},${y + 24} q20,8 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0`} fill="none" stroke={C.green} strokeWidth={2} opacity={0.7} />)}
      {/* mitochondries */}
      {[[440, 150], [440, 250]].map(([x, y]) => <ellipse key={y} cx={x} cy={y} rx={22} ry={11} fill={C.amber} fillOpacity={0.6} stroke="#a3701a" strokeWidth={2} />)}
      <Dot path="M60,70 L500,70" dur={4} r={6} color={C.red} label="PA" />

      {/* légendes */}
      <line x1={40} y1={190} x2={604} y2={54} stroke="none" />
      <Txt x={578} y={78} anchor="start" bold size={11.5}>Sarcolemme</Txt><Txt x={578} y={92} anchor="start" size={9.5} color={C.grey}>membrane de la fibre</Txt>
      <line x1={562} y1={82} x2={572} y2={76} {...leader} />
      <Txt x={578} y={128} anchor="start" bold size={11.5} color="#6a45b0">Noyaux</Txt><Txt x={578} y={142} anchor="start" size={9.5} color={C.grey}>périphériques (multinucléée)</Txt>
      <line x1={504} y1={90} x2={572} y2={124} {...leader} />
      <Txt x={578} y={190} anchor="start" bold size={11.5}>Myofibrille</Txt><Txt x={578} y={204} anchor="start" size={9.5} color={C.grey}>80 % du volume, en sarcomères</Txt>
      <line x1={464} y1={172} x2={572} y2={186} {...leader} />
      <Txt x={578} y={250} anchor="start" bold size={11.5} color={C.blue}>Tubule T</Txt><Txt x={578} y={264} anchor="start" size={9.5} color={C.grey}>invagination du sarcolemme</Txt>
      <line x1={386} y1={260} x2={572} y2={246} {...leader} />
      <Txt x={578} y={310} anchor="start" bold size={11.5} color="#2a7a55">Citernes du RS</Txt><Txt x={578} y={324} anchor="start" size={9.5} color={C.grey}>stockage du Ca²⁺ (récepteurs RyR)</Txt>
      <line x1={384} y1={232} x2={572} y2={306} {...leader} />
      <Txt x={510} y={366} size={11} bold>Triade = 1 tubule T + 2 citernes — 2 par sarcomère</Txt>
      <Txt x={290} y={400} size={10} color={C.grey}>Fibre : cylindre de 1 à 300 mm de long, 10 à 150 µm de diamètre — bande I / A : jonction où plongent les tubules T</Txt>
      <Txt x={440} y={186} size={9.5} bold color="#a3701a" anchor="middle">{""}</Txt>
      <Txt x={436} y={282} size={9.5} bold color="#a3701a">mitochondrie</Txt>
    </Figure>
  );
}

// ─── 2. Sarcomère et filaments (animé) ───────────────────────────────────
export function SarcomereDiagram() {
  const thick = (x: number, w = 200) => <rect x={x} y={104} width={w} height={14} rx={6} fill={C.red} fillOpacity={0.7} stroke="#a03040" />;
  return (
    <Figure viewBox="0 0 720 460" title="Structure du sarcomère et glissement des myofilaments" caption="Sarcomère entre deux bandes Z : les filaments d'actine glissent entre ceux de myosine — la bande A reste constante, la bande I et la zone H raccourcissent">
      <g>
        {/* filaments fins gauche (glissent vers la droite) */}
        <g className="fig-slide" style={{ ["--dx" as string]: "26px" }}>
          <rect x={112} y={44} width={8} height={176} fill="currentColor" />
          {[70, 96, 122, 148, 174, 200].map((y) => <line key={y} x1={120} y1={y} x2={290} y2={y} stroke={C.blue} strokeWidth={3.5} />)}
          <Txt x={116} y={38} bold size={11}>Z</Txt>
        </g>
        {/* filaments fins droite (glissent vers la gauche) */}
        <g className="fig-slide" style={{ ["--dx" as string]: "-26px" }}>
          <rect x={588} y={44} width={8} height={176} fill="currentColor" />
          {[70, 96, 122, 148, 174, 200].map((y) => <line key={y} x1={430} y1={y} x2={588} y2={y} stroke={C.blue} strokeWidth={3.5} />)}
          <Txt x={592} y={38} bold size={11}>Z</Txt>
        </g>
        {/* filaments épais */}
        {[83, 109, 135, 161, 187].map((y) => <rect key={y} x={234} y={y - 5} width={246} height={10} rx={5} fill={C.red} fillOpacity={0.75} stroke="#a03040" />)}
        <line x1={357} y1={40} x2={357} y2={222} stroke="currentColor" strokeWidth={2} strokeDasharray="4 3" />
        <Txt x={357} y={36} bold size={11}>M</Txt>
      </g>
      {/* bandes */}
      <g fontSize={11}>
        <rect x={234} y={232} width={246} height={6} fill={C.red} fillOpacity={0.6} /><Txt x={357} y={254} bold color={C.red}>Bande A (myosine) — constante</Txt>
        <rect x={126} y={268} width={108} height={6} fill={C.blue} fillOpacity={0.6} /><Txt x={180} y={290} bold color={C.blue}>Demi-bande I</Txt>
        <rect x={480} y={268} width={108} height={6} fill={C.blue} fillOpacity={0.6} /><Txt x={534} y={290} bold color={C.blue}>Demi-bande I</Txt>
        <rect x={320} y={268} width={74} height={6} fill={C.amber} fillOpacity={0.7} /><Txt x={357} y={290} bold color="#a3701a">Zone H</Txt>
      </g>
      <Txt x={360} y={322} size={10.5} color={C.grey}>Sarcomère (2-2,25 µm au repos) : 1 bande A + 2 demi-bandes I, délimité par 2 bandes Z</Txt>

      {/* molécules */}
      <line x1={30} y1={340} x2={690} y2={340} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={140} y={362} bold size={12} color={C.red}>Myosine (filament épais)</Txt>
      <g transform="translate(30 376)">
        <path d="M0,20 q30,-14 60,0 t60,0 t60,0" fill="none" stroke={C.red} strokeWidth={4} />
        <path d="M0,28 q30,-14 60,0 t60,0 t60,0" fill="none" stroke={C.red} strokeWidth={4} />
        <ellipse cx={186} cy={20} rx={12} ry={8} fill={C.red} transform="rotate(-25 186 20)" /><ellipse cx={186} cy={30} rx={12} ry={8} fill={C.red} transform="rotate(25 186 30)" />
        <Txt x={90} y={56} size={9.5}>queue (LMM, hélice α)</Txt><Txt x={158} y={62} anchor="start" size={9.5}>tête (HMM) : ATPase, site actine</Txt>
      </g>
      <Txt x={520} y={362} bold size={12} color={C.blue}>Filament fin : actine + protéines régulatrices</Txt>
      <g transform="translate(420 376)">
        {Array.from({ length: 12 }).map((_, i) => <circle key={i} cx={10 + i * 15} cy={14 + (i % 2) * 6} r={7} fill={C.blue} fillOpacity={0.7} stroke="#2f56b8" />)}
        <path d="M6,26 C60,4 120,42 190,20" fill="none" stroke={C.green} strokeWidth={3} />
        {[40, 120].map((x) => <g key={x}><rect x={x} y={-2} width={24} height={14} rx={5} fill={C.amber} fillOpacity={0.8} stroke="#a3701a" /><Txt x={x + 12} y={9} size={8.5} bold>Tn</Txt></g>)}
        <Txt x={100} y={56} size={9.5}>F-actine, tropomyosine (vert), troponine (Tn)</Txt>
      </g>
    </Figure>
  );
}

// ─── 3. Plaque motrice ───────────────────────────────────────────────────
export function NeuromuscularJunctionDiagram() {
  const steps = ["PA nerveux : Ca²⁺ entre", "Exocytose de l'ACh", "ACh sur récepteurs nicotiniques", "Na⁺ entre : PPSE (potentiel de plaque)", "AChE hydrolyse l'ACh"];
  return (
    <Figure viewBox="0 0 900 470" title="Plaque motrice (jonction neuromusculaire)" caption="Plaque motrice : synapse chimique excitatrice entre le motoneurone et la fibre musculaire squelettique (ACh, récepteur nicotinique)">
      <path d="M200,20 L500,20 C540,20 560,50 560,90 C560,130 540,160 500,160 L200,160z" fill={C.blue} fillOpacity={0.12} stroke={C.blue} strokeWidth={3} />
      <path d="M40,90 L200,90" stroke={C.blue} strokeWidth={14} strokeLinecap="round" />
      <Txt x={210} y={38} anchor="start" bold size={12} color={C.blue}>Bouton terminal du motoneurone</Txt>
      {[[280, 70], [330, 100], [380, 66], [430, 104], [470, 76]].map(([x, y], i) => (
        <g key={i}><circle cx={x} cy={y} r={14} fill="#fff" fillOpacity={0.7} stroke={C.green} strokeWidth={2.5} />{[-4, 3].map((d) => <circle key={d} cx={x + d} cy={y + d / 2} r={2.5} fill={C.green} />)}</g>
      ))}
      <Txt x={380} y={52} size={9.5} color="#2a7a55" bold>vésicules d'ACh</Txt>
      {[300, 380].map((x) => <g key={x}><rect x={x} y={150} width={10} height={20} fill={C.violet} /><rect x={x + 16} y={150} width={10} height={20} fill={C.violet} /></g>)}
      {[0, 1].map((d) => <Dot key={d} path="M321,110 L321,230" dur={2.2} delay={d * 1.1} r={5} color={C.violet} label="Ca" />)}
      <rect x={180} y={180} width={400} height={72} fill={C.grey} fillOpacity={0.08} />
      <Txt x={600} y={220} anchor="start" bold size={11} color={C.grey}>Fente</Txt><Txt x={600} y={234} anchor="start" size={11} color={C.grey}>synaptique</Txt>
      {[0, 1, 2, 3].map((d) => <Dot key={d} path={`M${300 + d * 22},170 L${300 + d * 20},258`} dur={2.6} delay={d * 0.7} r={4} color={C.green} />)}
      {/* sarcolemme plissé */}
      <path d="M180,252 L260,252 q10,50 20,0 t40,0 t40,0 t40,0 t40,0 L580,252 L580,440 L180,440z" fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={3} />
      {[268, 308, 348, 388].map((x) => <g key={x}><rect x={x - 6} y={244} width={8} height={26} rx={3} fill={C.red} fillOpacity={0.7} /><rect x={x + 4} y={244} width={8} height={26} rx={3} fill={C.red} fillOpacity={0.7} /></g>)}
      <Txt x={330} y={296} size={9.5} bold color={C.red}>récepteurs nicotiniques (canaux Na⁺)</Txt>
      {[0, 1].map((d) => <Dot key={d} path="M290,262 L290,372" dur={2.2} delay={d * 1.1 + 1} r={4.5} color={C.amber} label="Na" />)}
      <Txt x={200} y={410} anchor="start" bold size={11.5} color={C.red}>Fibre musculaire squelettique</Txt>
      <rect x={432} y={256} width={26} height={22} rx={6} fill={C.amber} fillOpacity={0.7} stroke="#a3701a" /><Txt x={445} y={296} size={9.5} bold color="#a3701a">AChE</Txt>
      {/* pharmacologie */}
      {steps.map((st, i) => (
        <Seq key={st} i={i} n={5}>
          <circle cx={672} cy={60 + i * 44} r={13} fill={C.red} /><Txt x={672} y={65 + i * 44} bold size={13} color="#fff">{String(i + 1)}</Txt>
          <Txt x={694} y={64 + i * 44} anchor="start" size={10.5} bold>{st}</Txt>
        </Seq>
      ))}
      <Txt x={450} y={462} size={10.5} color={C.grey}>Blocage : curare (récepteur) • toxine botulique (exocytose de l'ACh) • succinylcholine (dépolarisation puis désensibilisation)</Txt>
    </Figure>
  );
}

// ─── 4. Couplage excitation-contraction ──────────────────────────────────
export function ExcitationContractionDiagram() {
  const steps: [string, string][] = [
    ["PA sur le sarcolemme", "et dans les tubules T"],
    ["DHPR activé", "canal Ca²⁺ lent du tubule T"],
    ["RyR s'ouvre", "Ca²⁺ libéré par la citerne"],
    ["Ca²⁺ ↑ (10⁻⁷ → 10⁻⁵ M)", "se lie à la troponine C"],
    ["Tropomyosine déplacée", "ponts actine-myosine"],
    ["Relaxation", "SERCA recapture le Ca²⁺"],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Couplage excitation-contraction du muscle strié" caption="Du potentiel d'action à la contraction : tubule T (DHPR), citerne du RS (RyR), libération de Ca²⁺, troponine, ponts transversaux, puis recapture par la pompe Ca²⁺">
      {/* sarcolemme + tubule T */}
      <rect x={20} y={20} width={440} height={16} fill={MEM} fillOpacity={0.5} stroke={MEM} />
      <Txt x={24} y={14} anchor="start" size={10} bold>Sarcolemme</Txt>
      <rect x={216} y={36} width={30} height={200} fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={2} />
      <Txt x={231} y={252} bold size={10.5} color={C.blue}>Tubule T</Txt>
      <Dot path="M40,28 L216,28 L231,120" dur={3} r={6} color={C.red} label="PA" />
      {/* DHPR */}
      <rect x={196} y={110} width={18} height={30} rx={5} fill={C.violet} /><Txt x={186} y={126} anchor="end" size={10} bold color={C.violet}>DHPR</Txt>
      {/* citernes */}
      <path d="M148,90 h44 v134 h-44 q-22,0 -22,-30 v-74 q0,-30 22,-30z" fill={C.green} fillOpacity={0.35} stroke="#2a7a55" strokeWidth={2} />
      <path d="M270,90 h-44 v134 h44 q22,0 22,-30 v-74 q0,-30 -22,-30z" fill={C.green} fillOpacity={0.35} stroke="#2a7a55" strokeWidth={2} />
      <rect x={192} y={100} width={12} height={22} fill={C.amber} /><Txt x={158} y={174} size={10} bold color="#2a7a55">Citerne du RS</Txt>
      <Txt x={158} y={187} size={9} color={C.grey}>Ca²⁺ + calséquestrine</Txt>
      <Txt x={186} y={98} anchor="end" size={9.5} color="#a3701a" bold>RyR</Txt>
      {[0, 1, 2, 3].map((d) => <Dot key={d} path={`M${132 + d * 4},${150} C${100 - d * 16},${190} ${90},${260} ${80 + d * 20},330`} dur={3.4} delay={d * 0.6} r={4.5} color={C.violet} label="Ca" />)}
      {/* myofilaments */}
      <rect x={30} y={320} width={420} height={80} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.2} />
      {[336, 356, 376].map((y) => <line key={y} x1={40} y1={y} x2={440} y2={y} stroke={C.blue} strokeWidth={4} />)}
      {[346, 366, 386].map((y) => <rect key={y} x={100} y={y - 4} width={240} height={8} rx={4} fill={C.red} fillOpacity={0.6} />)}
      <Txt x={240} y={414} size={10} bold color={C.red}>contraction (glissement)</Txt>
      {/* pompe */}
      <rect x={302} y={200} width={24} height={26} rx={6} fill={C.blue} /><Txt x={340} y={216} anchor="start" size={10} bold color={C.blue}>SERCA</Txt>
      <path d="M96,330 C60,290 110,240 130,216" fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="4 3" markerEnd="url(#fig-arrow)" />
      {/* étapes */}
      {steps.map((s, i) => (
        <Seq key={s[0]} i={i} n={6}>
          <g transform={`translate(490 ${40 + i * 66})`}>
            <circle cx={12} cy={16} r={13} fill={i === 5 ? C.blue : C.red} /><Txt x={12} y={21} bold size={13} color="#fff">{String(i + 1)}</Txt>
            <Txt x={34} y={14} anchor="start" size={11} bold>{s[0]}</Txt>
            <Txt x={34} y={29} anchor="start" size={10} color={C.grey}>{s[1]}</Txt>
          </g>
        </Seq>
      ))}
    </Figure>
  );
}

// ─── 5. Cycle des ponts transversaux (animé) ─────────────────────────────
export function CrossBridgeCycleDiagram() {
  const state = (i: number, angle: number, attached: boolean, shift: number, label: string, sub: string) => {
    const x = 6 + i * 178;
    const bx = 84;
    const rad = (angle * Math.PI) / 180;
    const headX = bx + Math.cos(rad) * 46, headY = 48 + Math.sin(rad) * 46;
    return (
      <Seq key={label} i={i} n={4}>
        <g transform={`translate(${x} 0)`}>
          <rect x={0} y={6} width={170} height={290} rx={10} fill={C.red} fillOpacity={0.05} stroke={C.red} strokeOpacity={0.45} />
          <Txt x={85} y={26} bold size={11.5}>{label}</Txt>
          <rect x={10} y={40} width={150} height={12} rx={5} fill={C.red} fillOpacity={0.7} />
          <line x1={bx} y1={50} x2={headX} y2={headY + 46 - 46 + 46 * 0} stroke={C.red} strokeWidth={5} />
          <ellipse cx={headX} cy={headY + 2} rx={14} ry={9} fill={C.red} stroke="#a03040" strokeWidth={2} transform={`rotate(${angle - 90} ${headX} ${headY + 2})`} />
          <g transform={`translate(${shift} 0)`}>
            {Array.from({ length: 9 }).map((_, k) => <circle key={k} cx={12 + k * 18} cy={150} r={8} fill={C.blue} fillOpacity={0.7} stroke="#2f56b8" />)}
          </g>
          {attached && <line x1={headX} y1={headY + 6} x2={headX} y2={144} stroke={C.green} strokeWidth={3} />}
          <Txt x={85} y={192} size={10.5} bold color={attached ? "#2a7a55" : C.grey}>{sub}</Txt>
        </g>
      </Seq>
    );
  };
  return (
    <Figure viewBox="0 0 730 340" title="Cycle des ponts transversaux acto-myosiniques" caption="Cycle des ponts transversaux : initiation, formation du pont et coup de force, décrochage par l'ATP, hydrolyse et repositionnement de la tête (tant que Ca²⁺ ≈ 10⁻⁵ M)">
      {state(0, 90, false, 0, "1. Initiation", "faible affinité — ADP + Pi")}
      {state(1, 65, true, -22, "2. Coup de force", "liaison forte, 90° → 45°")}
      {state(2, 65, false, -22, "3. Décrochage", "fixation d'ATP")}
      {state(3, 90, false, -22, "4. Redémarrage", "hydrolyse → 90°")}
      {[0, 1, 2, 3].map((i) => <Txt key={i} x={91 + i * 178} y={222} size={9.5} color={C.grey}>{["énergie stockée en « positionnement »", "actine glisse vers le centre", "sans ATP : rigor mortis", "tête repositionnée sur l'actine suivante"][i]}</Txt>)}
      <path d="M700,314 Q700,332 365,332 Q30,332 30,314" fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="6 4" className="fig-flow" markerEnd="url(#fig-arrow)" />
      <Txt x={365} y={322} size={10} color={C.grey} bold>cycle répété, non simultané sur tout le sarcomère</Txt>
      <g fontSize={10}>
        <text x={12} y={258} fill={C.blue} fontWeight={700}>● actine</text>
        <text x={96} y={258} fill={C.red} fontWeight={700}>▬ myosine</text>
        <text x={190} y={258} fill={C.green} fontWeight={700}>| liaison forte</text>
      </g>
    </Figure>
  );
}

// ─── 6. Muscle lisse ─────────────────────────────────────────────────────
export function SmoothMuscleCellDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Cellule musculaire lisse" caption="Fibre fusiforme à noyau central : cavéoles, corps denses, filaments non organisés en sarcomères, connexons entre cellules">
      {/* cellule relâchée */}
      <Txt x={60} y={26} anchor="start" bold size={12}>Relâchée</Txt>
      <path d="M50,100 C130,50 330,50 410,100 C330,150 130,150 50,100z" fill={C.green} fillOpacity={0.2} stroke="#2a7a55" strokeWidth={2.5} />
      <ellipse cx={230} cy={100} rx={36} ry={14} fill={C.violet} fillOpacity={0.6} stroke="#6a45b0" strokeWidth={2} />
      {[120, 180, 280, 340].map((x, i) => <ellipse key={x} cx={x} cy={i % 2 ? 84 : 116} rx={8} ry={5} fill="#3b2f5e" />)}
      {[[130, 78], [200, 70], [260, 128], [320, 122], [160, 124]].map(([x, y]) => <path key={x} d={`M${x},${y} q3,-6 6,0`} fill="none" stroke="#a3701a" strokeWidth={3} />)}
      {[[120, 100], [180, 92], [290, 108], [340, 100]].map(([x, y], i) => <g key={i}><line x1={x - 24} y1={y} x2={x + 24} y2={y + (i % 2 ? 8 : -8)} stroke={C.blue} strokeWidth={2} /><line x1={x - 22} y1={y + 6} x2={x + 22} y2={y - 4} stroke={C.red} strokeWidth={2.5} /></g>)}
      {/* cellule contractée */}
      <Txt x={60} y={186} anchor="start" bold size={12} color="#2a7a55">Contractée</Txt>
      <g className="fig-shrink">
        <path d="M50,260 C130,190 330,190 410,260 C330,330 130,330 50,260z" fill={C.green} fillOpacity={0.4} stroke="#2a7a55" strokeWidth={2.5} />
        <ellipse cx={230} cy={260} rx={34} ry={16} fill={C.violet} fillOpacity={0.6} stroke="#6a45b0" strokeWidth={2} />
        {[120, 180, 280, 340].map((x, i) => <ellipse key={x} cx={x} cy={i % 2 ? 236 : 284} rx={8} ry={5} fill="#3b2f5e" />)}
      </g>
      <Txt x={230} y={350} size={10.5} color={C.grey}>raccourcissement possible jusqu'aux 2/3 de la longueur initiale (pas de bande Z)</Txt>
      {/* connexons */}
      <path d="M414,130 L470,150 M414,240 L470,210" stroke={C.grey} strokeWidth={2} />
      <rect x={470} y={112} width={120} height={112} rx={50} fill={C.green} fillOpacity={0.15} stroke="#2a7a55" strokeWidth={2} />
      <rect x={440} y={166} width={40} height={10} fill={C.red} fillOpacity={0.6} />
      {/* légendes */}
      <g fontSize={10.5}>
        <line x1={230} y1={86} x2={230} y2={44} {...leader} /><Txt x={230} y={42} bold>Noyau unique central</Txt>
        <line x1={296} y1={60} x2={340} y2={20} {...leader} />
        <Txt x={640} y={34} anchor="end" bold color="#a3701a">Cavéoles</Txt><Txt x={640} y={48} anchor="end" size={9.5} color={C.grey}>remplacent les tubules T</Txt>
        <line x1={262} y1={71} x2={634} y2={38} {...leader} strokeOpacity={0.3} />
        <Txt x={630} y={84} anchor="end" bold color="#3b2f5e">Corps denses</Txt><Txt x={630} y={98} anchor="end" size={9.5} color={C.grey}>remplacent les bandes Z</Txt>
        <line x1={286} y1={118} x2={520} y2={92} {...leader} strokeOpacity={0.3} />
        <Txt x={640} y={140} anchor="end" bold color={C.red}>Connexons</Txt><Txt x={640} y={154} anchor="end" size={9.5} color={C.grey}>synapses électriques</Txt>
        <Txt x={560} y={252} bold>Forme fusiforme</Txt><Txt x={560} y={268} size={9.5} color={C.grey}>longueur 20-500 µm</Txt><Txt x={560} y={282} size={9.5} color={C.grey}>diamètre 2-10 µm</Txt>
      </g>
      <Txt x={560} y={320} size={9.5} color={C.blue} bold>— actine</Txt><Txt x={560} y={334} size={9.5} color={C.red} bold>— myosine (non organisés en sarcomères)</Txt>
      <Txt x={560} y={370} size={10} bold>Activité ATPase réduite :</Txt><Txt x={560} y={384} size={10} color={C.grey}>cycles lents, contraction soutenue</Txt>
    </Figure>
  );
}

// ─── 7. Couplage du muscle lisse ─────────────────────────────────────────
export function SmoothMuscleCouplingDiagram() {
  const box = (x: number, y: number, w: number, h: number, t: string, sub: string | undefined, c: string) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={c} fillOpacity={0.16} stroke={c} strokeWidth={1.8} />
      <Txt x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} bold size={11}>{t}</Txt>
      {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={9.5} color={C.grey}>{sub}</Txt>}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Couplage excitation-contraction du muscle lisse" caption="Trois types de couplage convergent vers ↑ Ca²⁺ → Ca²⁺-calmoduline → MLCK → contraction ; la relaxation passe par la MLCP">
      {box(10, 20, 200, 52, "Électro-mécanique", "influx nerveux → canaux Ca²⁺ type L", C.blue)}
      {box(270, 20, 200, 52, "Pharmaco-mécanique", "agoniste → Gq → PLC → IP₃ (RS)", C.violet)}
      {box(530, 20, 200, 52, "Mécano-mécanique", "étirement → canaux mécano-dépendants", C.green)}
      {arrow("M110,74 L110,110 L330,120", true)}{arrow("M370,74 L370,116", true)}{arrow("M630,74 L630,110 L410,120", true)}
      {box(220, 124, 300, 46, "↑ Ca²⁺ cytosolique", "entrée membranaire + libération du RS", C.amber)}
      {[0, 1, 2].map((d) => <Dot key={d} path={`M${300 + d * 60},60 L${300 + d * 60},150`} dur={2.4} delay={d * 0.7} r={5} color={C.violet} label="Ca" />)}
      {arrow("M370,172 L370,208")}
      {box(220, 212, 300, 46, "4 Ca²⁺ + calmoduline", "complexe Ca²⁺-calmoduline", C.violet)}
      {arrow("M370,260 L370,296")}
      {box(220, 300, 300, 46, "MLCK activée", "myosin light chain kinase", C.red)}
      {arrow("M370,348 L370,384")}
      {box(190, 388, 360, 56, "Phosphorylation des chaînes légères de myosine", "(ATP, Mg²⁺) → ponts transversaux → CONTRACTION", C.green)}
      {/* relaxation */}
      {box(600, 212, 130, 60, "Relaxation", "pompes Ca²⁺ : ↓ Ca²⁺", C.blue)}
      {arrow("M600,242 L522,236")}
      {box(600, 300, 130, 58, "MLCP", "myosin light chain phosphatase", C.blue)}
      {arrow("M664,274 L664,296")}
      {arrow("M598,340 L552,410")}
      <Txt x={664} y={382} size={10} color={C.blue} bold>déphosphoryle la myosine</Txt>
      <Txt x={664} y={396} size={10} color={C.blue} bold>→ relâchement</Txt>
      {box(10, 212, 170, 56, "Muscle lisse unitaire", "syncytium (connexons), automatisme", C.grey)}
      {box(10, 290, 170, 56, "Muscle lisse multiunitaire", "contrôle nerveux, individuel", C.grey)}
    </Figure>
  );
}
