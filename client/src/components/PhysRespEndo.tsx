import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Ax, Card, dash, dot, grid } from "./PhysCardio";

// Physiologie S1 — respiration et endocrinologie : un schéma par sous-partie du cours.

export const arrow = (d: string, c = "currentColor") => <path d={d} fill="none" stroke={c} strokeWidth={2.2} markerEnd="url(#fig-arrow)" />;
const inhib = (x1: number, y1: number, x2: number, y2: number, c = DEEP.red) => (
  <g>
    <path d={`M${x1},${y1} L${x2},${y2}`} stroke={c} strokeWidth={2.2} strokeDasharray="6 4" fill="none" />
    <circle cx={x2} cy={y2} r={4.5} fill={c} />
  </g>
);

export function Box({ x, y, w, h, t, s, c, size = 11.5 }: { x: number; y: number; w: number; h: number; t: string; s?: string; c: string; size?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={2} />
      <Txt x={x + w / 2} y={y + (s ? h / 2 - 2 : h / 2 + 4)} bold size={size}>{t}</Txt>
      {s && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 2} color={C.grey}>{s}</Txt>}
    </g>
  );
}

// ─── Respiration : spirogramme ───────────────────────────────────────────
export function SpirogramDiagram() {
  const Y = (v: number) => 380 - v * 0.055;
  const X = (t: number) => 90 + t;
  const q = (t: number, lo: number, hi: number) => `C${X(t + 10)},${Y(hi + 60)} ${X(t + 20)},${Y(hi + 60)} ${X(t + 30)},${Y(hi)} C${X(t + 40)},${Y(lo - 60)} ${X(t + 50)},${Y(lo - 60)} ${X(t + 60)},${Y(lo)}`;
  const trace = `M${X(0)},${Y(2400)} ${q(0, 2400, 2900)} ${q(60, 2400, 2900)} ${q(120, 2400, 2900)} C${X(190)},${Y(2900)} ${X(210)},${Y(5900)} ${X(240)},${Y(5900)} C${X(262)},${Y(5900)} ${X(268)},${Y(1200)} ${X(300)},${Y(1200)} C${X(330)},${Y(1200)} ${X(340)},${Y(2400)} ${X(360)},${Y(2400)} ${q(360, 2400, 2900)}`;
  const brace = (x: number, v0: number, v1: number, label: string, sub: string, c: string) => (
    <g key={label}>
      <path d={`M${x},${Y(v0)} L${x},${Y(v1)}`} stroke={c} strokeWidth={3} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
      <Txt x={x + 8} y={Y((v0 + v1) / 2) - 2} anchor="start" bold size={10.5} color={c}>{label}</Txt>
      <Txt x={x + 8} y={Y((v0 + v1) / 2) + 11} anchor="start" size={9} color={C.grey}>{sub}</Txt>
    </g>
  );
  const cap = (x: number, v0: number, v1: number, label: string, c: string) => (
    <g key={label}>
      <path d={`M${x},${Y(v0)} L${x},${Y(v1)}`} stroke={c} strokeWidth={3} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
      <text transform={`translate(${x - 7} ${Y((v0 + v1) / 2)}) rotate(-90)`} textAnchor="middle" fontSize={10} fontWeight={700} fill={c}>{label}</text>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 480" title="Spirogramme : volumes et capacités pulmonaires" caption="Volumes : TV ≈ 500 mL, VRI ≈ 3 000 mL, VRE ≈ 1 200 mL, VR ≈ 1 200 mL (non mesurable par spirométrie) ; capacités : CI = TV + VRI, CV = VRI + TV + VRE, CRF = VRE + VR, CPT = CV + VR ≈ 6 000 mL">
      <Ax x={X(0)} y={Y(0)} w={470} h={Y(0) - 40} xl="Temps" yl="Volume pulmonaire (mL)" />
      {[1200, 2400, 2900, 5900].map((v) => <line key={v} x1={X(0)} y1={Y(v)} x2={X(452)} y2={Y(v)} {...dash} />)}
      {[0, 1200, 2400, 4000, 6000].map((v) => <g key={v}><line x1={X(0)} y1={Y(v)} x2={X(0) - 4} y2={Y(v)} stroke="currentColor" /><Txt x={X(0) - 8} y={Y(v) + 3} anchor="end" size={9}>{v}</Txt></g>)}
      <path d={trace} fill="none" stroke={C.red} strokeWidth={3} />
      <Txt x={X(90)} y={Y(2900) - 16} bold size={9.5} color={DEEP.blue}>respiration calme (TV)</Txt>
      <Txt x={X(240)} y={Y(5900) - 8} bold size={9.5} color={DEEP.red}>inspiration max.</Txt>
      <Txt x={X(300)} y={Y(1200) + 16} bold size={9.5} color={DEEP.red}>expiration max.</Txt>
      {brace(X(470), 5900, 2900, "VRI", "≈ 3 000 mL", C.blue)}
      {brace(X(470), 2900, 2400, "TV", "≈ 500 mL", C.violet)}
      {brace(X(470), 2400, 1200, "VRE", "≈ 1 200 mL", C.green)}
      {brace(X(470), 1200, 0, "VR", "≈ 1 200 mL", C.grey)}
      {cap(X(596), 5900, 2400, "CI ≈ 3 600", C.blue)}
      {cap(X(626), 5900, 1200, "CV ≈ 4 500", C.violet)}
      {cap(X(656), 2400, 0, "CRF ≈ 2 500", C.green)}
      {cap(X(686), 5900, 0, "CPT ≈ 6 000", C.amber)}
      <Card x={30} y={420} w={170} h={44} color={DEEP.blue} title="CI = TV + VRI" lines={[]} />
      <Card x={210} y={420} w={200} h={44} color={DEEP.violet} title="CV = VRI + TV + VRE" lines={[]} />
      <Card x={420} y={420} w={140} h={44} color={DEEP.green} title="CRF = VRE + VR" lines={[]} />
      <Card x={570} y={420} w={150} h={44} color={DEEP.amber} title="CPT = CV + VR" lines={[]} />
    </Figure>
  );
}

// ─── Respiration : cascade des pressions partielles ──────────────────────
export function GasCascadeDiagram() {
  const stations = ["Air ambiant", "Air alvéolaire", "Sang artériel", "Interstitium", "Cellule", "Mitochondrie"];
  const xs = stations.map((_, i) => 110 + i * 118);
  const Y = (p: number) => 340 - p * 1.7;
  const po2 = [160, 100, 95, 40, 23, 1];
  const pco2 = [0.2, 40, 40, 46, 46, 46];
  const line = (arr: number[]) => arr.map((p, i) => `${i ? "L" : "M"}${xs[i]},${Y(p)}`).join(" ");
  return (
    <Figure viewBox="0 0 740 450" title="La cascade de l'O₂ et du CO₂ : de l'air à la mitochondrie" caption="L'O₂ descend un gradient de pression partielle (160 → 100 → 95 → 40 → 23 → 1 mmHg) ; le CO₂ suit le gradient inverse mais diffuse ≈ 20 fois plus vite grâce à sa solubilité, malgré un gradient faible (≈ 46 vs 40 mmHg)">
      <Ax x={70} y={Y(0)} w={640} h={Y(0) - 50} xl="" yl="Pression partielle (mmHg)" />
      {[0, 50, 100, 150].map((p) => <g key={p}><line x1={70} y1={Y(p)} x2={700} y2={Y(p)} {...grid} /><Txt x={62} y={Y(p) + 3} anchor="end" size={9}>{p}</Txt></g>)}
      <path d={line(po2)} fill="none" stroke={C.red} strokeWidth={3.4} />
      <path d={line(pco2)} fill="none" stroke={C.blue} strokeWidth={3.4} />
      {xs.map((x, i) => (
        <g key={stations[i]}>
          <line x1={x} y1={50} x2={x} y2={Y(0)} {...grid} />
          <circle cx={x} cy={Y(po2[i])} r={6} fill={C.red} /><circle cx={x} cy={Y(pco2[i])} r={6} fill={C.blue} />
          <Txt x={x} y={Y(po2[i]) - 12} bold size={11} color={DEEP.red}>{po2[i]}</Txt>
          <Txt x={x} y={Y(pco2[i]) + (i === 0 ? -10 : 22)} bold size={11} color={DEEP.blue}>{String(pco2[i]).replace(".", ",")}</Txt>
          <Txt x={x} y={Y(0) + 16} bold size={10}>{stations[i]}</Txt>
        </g>
      ))}
      <Txt x={xs[0]} y={Y(0) + 30} size={9} color={C.grey}>conditionné à 37 °C, saturé en vapeur d'eau</Txt>
      <Txt x={620} y={64} anchor="end" bold size={11} color={DEEP.red}>● PO₂</Txt><Txt x={700} y={64} anchor="end" bold size={11} color={DEEP.blue}>● PCO₂</Txt>
      <Card x={70} y={392} w={310} h={46} color={DEEP.red} title="O₂ : ΔP alvéole → sang veineux = 60 mmHg" lines={["temps de saturation 0,3 s < transit 0,7 s"]} />
      <Card x={390} y={392} w={320} h={46} color={DEEP.blue} title="CO₂ : diffuse ≈ 20 × plus vite que l'O₂" lines={["coefficient ≈ 0,6 (CO₂) contre 0,03 (O₂)"]} />
    </Figure>
  );
}

// ─── Respiration : V/Q ───────────────────────────────────────────────────
export function VQZonesDiagram() {
  const zones: [string, string, string, number, number, string, string][] = [
    ["Apex", "zone 1", "PA > Pa > Pv", 0.4, 0.1, "V/Q > 0,8 (→ ∞ : espace mort)", C.amber],
    ["Milieu", "zone 2", "Pa > PA > Pv", 0.64, 0.8, "V/Q = 0,8 (idéal)", C.green],
    ["Base", "zone 3", "Pa > Pv > PA", 0.9, 1.4, "V/Q < 0,8 (→ 0 : shunt)", C.blue],
  ];
  return (
    <Figure viewBox="0 0 740 450" title="Rapport ventilation / perfusion selon les zones du poumon (debout)" caption="Au repos VA ≈ 4 L/min et Q ≈ 5 L/min : V/Q idéal = 0,8 ; la gravité rend la perfusion beaucoup plus inégale que la ventilation : l'apex est hyperventilé et hypoperfusé, la base hypoventilée et hyperperfusée">
      <path d="M100,40 C40,60 30,300 70,400 C110,430 190,420 210,380 C226,240 200,80 150,40 Z" fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2.4} />
      {[[52, 130], [182, 270], [312, 400]].map(([a, b], i) => <rect key={i} x={40} y={a} width={200} height={b - a} fill={zones[i][6]} fillOpacity={0.16} />)}
      <Txt x={140} y={30} bold size={11}>Poumon (debout)</Txt>
      {zones.map(([n, z, p, v, q, r, c], i) => {
        const y0 = 52 + i * 130;
        return (
          <g key={n}>
            <Txt x={140} y={y0 + 24} bold size={12}>{n}</Txt><Txt x={140} y={y0 + 40} size={9.5} color={C.grey}>{z}</Txt>
            <Txt x={140} y={y0 + 56} size={9.5} color={C.grey}>{p}</Txt>
            <Txt x={262} y={y0 + 30} anchor="start" size={9.5} bold color={DEEP.blue}>Ventilation</Txt>
            <rect x={262} y={y0 + 36} width={v * 140} height={13} rx={4} fill={C.blue} />
            <Txt x={262} y={y0 + 68} anchor="start" size={9.5} bold color={DEEP.red}>Débit sanguin</Txt>
            <rect x={262} y={y0 + 74} width={q * 140} height={13} rx={4} fill={C.red} />
            <rect x={470} y={y0 + 24} width={260} height={62} rx={9} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={2} />
            <Txt x={600} y={y0 + 50} bold size={11.5}>{r.split(" (")[0]}</Txt>
            {r.includes("(") && <Txt x={600} y={y0 + 68} size={10} color={C.grey}>{"(" + r.split(" (")[1]}</Txt>}
          </g>
        );
      })}
      <Txt x={262} y={432} anchor="start" size={9.5} color={C.grey}>longueur des barres proportionnelle : le débit sanguin varie bien plus que la ventilation</Txt>
    </Figure>
  );
}

// ─── Respiration : membrane alvéolo-capillaire ───────────────────────────
export function AlveolarMembraneDiagram() {
  const X = (t: number) => 450 + t * 320;
  const Y = (p: number) => 320 - p * 2.3;
  return (
    <Figure viewBox="0 0 740 460" title="La membrane alvéolo-capillaire et l'hématose" caption="Épaisseur < 1 µm et surface de 40 à 100 m² : les gaz diffusent selon leur gradient ; le globule rouge (7 µm) se déforme dans un capillaire de 5 µm ; l'O₂ est saturé en 0,3 s alors que le sang reste 0,7 s au repos (0,3 s à l'effort)">
      <rect x={30} y={40} width={360} height={100} rx={14} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} />
      <Txt x={210} y={70} bold size={12} color={DEEP.blue}>Alvéole</Txt><Txt x={210} y={88} size={10} color={C.grey}>PO₂ 100 · PCO₂ 40 mmHg</Txt>
      {[["Surfactant", C.violet], ["Épithélium alvéolaire", C.green], ["Membrane basale alvéolaire", C.amber], ["Interstitium très fin", C.grey], ["Endothélium capillaire", C.pink]].map(([n, c], i) => (
        <g key={String(n)}>
          <rect x={30} y={146 + i * 22} width={360} height={18} fill={String(c)} fillOpacity={0.4} stroke={String(c)} />
          <Txt x={210} y={159 + i * 22} size={9.5} bold>{String(n)}</Txt>
        </g>
      ))}
      <rect x={30} y={266} width={360} height={82} rx={14} fill={C.red} fillOpacity={0.08} stroke={C.red} strokeWidth={2} />
      <ellipse cx={100} cy={308} rx={26} ry={13} fill={C.red} fillOpacity={0.7} /><ellipse cx={180} cy={308} rx={22} ry={11} fill={C.red} fillOpacity={0.7} transform="rotate(-20 180 308)" />
      <Txt x={300} y={296} bold size={11.5} color={DEEP.red}>Capillaire</Txt><Txt x={300} y={312} size={9.5} color={C.grey}>5 µm &lt; globule rouge 7 µm</Txt><Txt x={300} y={326} size={9.5} color={C.grey}>PO₂ 40 · PCO₂ 46 mmHg (veineux)</Txt>
      <path d="M150,132 L150,276" stroke={C.red} strokeWidth={4} markerEnd="url(#fig-arrow)" /><Txt x={160} y={128} anchor="start" size={10} bold color={DEEP.red}>O₂</Txt>
      <path d="M260,276 L260,132" stroke={C.blue} strokeWidth={6} markerEnd="url(#fig-arrow)" /><Txt x={272} y={128} anchor="start" size={10} bold color={DEEP.blue}>CO₂ (≈ 20 × plus vite)</Txt>
      {/* graphique */}
      <Ax x={X(0)} y={Y(0)} w={300} h={Y(0) - 50} xl="Temps de transit dans le capillaire (s)" yl="PO₂ (mmHg)" />
      <path d={`M${X(0)},${Y(40)} C${X(0.1)},${Y(78)} ${X(0.2)},${Y(92)} ${X(0.3)},${Y(97)} L${X(0.8)},${Y(99)}`} fill="none" stroke={C.red} strokeWidth={3.4} />
      <line x1={X(0.3)} y1={Y(0)} x2={X(0.3)} y2={Y(110)} {...dash} /><Txt x={X(0.3)} y={Y(0) + 14} size={9} bold color={DEEP.amber}>0,3</Txt>
      <line x1={X(0.7)} y1={Y(0)} x2={X(0.7)} y2={Y(110)} {...dash} /><Txt x={X(0.7)} y={Y(0) + 14} size={9} bold color={DEEP.blue}>0,7</Txt>
      <Txt x={X(0.3) - 4} y={Y(110) - 4} anchor="end" size={9.5} bold color={DEEP.amber}>saturation 0,3 s</Txt><Txt x={X(0.7) + 4} y={Y(110) + 8} anchor="start" size={9.5} bold color={DEEP.blue}>repos 0,7 s</Txt>
      <Txt x={X(0) - 8} y={Y(100) + 4} anchor="end" size={9}>100</Txt><Txt x={X(0) - 8} y={Y(40) + 4} anchor="end" size={9}>40</Txt>
      <Card x={30} y={366} w={200} h={80} color={DEEP.green} title="Surface 40-100 m²" lines={["↓ (emphysème, résection)", "échanges touchés si ⅓-¼ du normal"]} />
      <Card x={240} y={366} w={230} h={80} color={DEEP.amber} title="Épaisseur < 1 µm" lines={["↑ (œdème, fibrose) : sévère", "si épaisseur × 2-3"]} />
      <Card x={480} y={366} w={250} h={80} color={DEEP.violet} title="Gradient et solubilité" lines={["O₂ : ΔP 60 mmHg", "CO₂ : diffuse plus vite que O₂", "O₂ diffuse ≈ 2 × plus vite que N₂"]} />
    </Figure>
  );
}

// ─── Respiration : centres nerveux ───────────────────────────────────────
export function RespiratoryCentersDiagram() {
  return (
    <Figure viewBox="0 0 740 490" title="Le contrôle nerveux de la ventilation" caption="Le rythme automatique naît dans le bulbe (groupe dorsal inspiratoire, groupe ventral expiratoire) ; le pont l'ajuste (pneumotaxique : limite l'inspiration ; apneustique : la prolonge) ; le cortex, le système limbique et l'hypothalamus modulent, et la moelle exécute par les nerfs phrénique, intercostaux et abdominaux">
      <Box x={200} y={14} w={150} h={40} t="Néocortex" s="contrôle volontaire" c={C.violet} />
      <Box x={366} y={14} w={150} h={40} t="Système limbique" s="émotions" c={C.pink} />
      <Box x={532} y={14} w={180} h={40} t="Hypothalamus" s="température (polypnée)" c={C.amber} />
      {arrow("M275,56 L275,84")}{arrow("M441,56 L400,84")}{arrow("M622,56 L440,84")}
      <Box x={200} y={86} w={300} h={130} t="" c={C.blue} />
      <Txt x={350} y={104} bold size={11.5} color={DEEP.blue}>Pont (centres non vitaux)</Txt>
      <Box x={214} y={114} w={130} h={90} t="Pneumotaxique" s="⅓ supérieur" c={C.green} size={11} />
      <Txt x={279} y={188} size={9} color={C.grey}>limite l'inspiration</Txt>
      <Box x={356} y={114} w={130} h={90} t="Apneustique" s="⅓ inférieur" c={C.red} size={11} />
      <Txt x={421} y={188} size={9} color={C.grey}>prolonge l'inspiration</Txt>
      <Box x={200} y={246} w={300} h={110} t="" c={C.red} />
      <Txt x={350} y={264} bold size={11.5} color={DEEP.red}>Bulbe (centres vitaux, automatiques)</Txt>
      <Box x={214} y={274} w={130} h={70} t="GRD" s="inspiratoire" c={C.blue} size={12} />
      <Box x={356} y={274} w={130} h={70} t="GRV" s="expiratoire (effort)" c={C.amber} size={12} />
      <path d="M344,309 L356,309" stroke="currentColor" strokeWidth={2} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
      <Txt x={350} y={362} size={9} color={C.grey}>inhibition réciproque</Txt>
      {arrow("M350,216 L350,244")}
      {/* afférences */}
      <Box x={20} y={100} w={150} h={64} t="Chémorécepteurs" s="périphériques (IX, X) et centraux" c={C.green} size={11} />
      <Box x={20} y={196} w={150} h={64} t="Mécanorécepteurs" s="pulmonaires (X) · Hering-Breuer" c={C.violet} size={11} />
      <path d="M170,132 L186,132 L186,300 L212,300" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <path d="M170,228 L186,228" fill="none" stroke="currentColor" strokeWidth={2.2} />
      {/* efférences */}
      {arrow("M279,346 L279,392")}{arrow("M421,346 L421,392")}
      <Box x={200} y={394} w={300} h={44} t="Moelle : motoneurones" s="" c={C.grey} size={11} />
      {arrow("M279,440 L200,462")}{arrow("M350,440 L350,462")}{arrow("M421,440 L520,462")}
      <Txt x={150} y={476} size={10} bold color={DEEP.blue}>Phrénique C2-C4 → diaphragme</Txt>
      <Txt x={350} y={480} size={10} bold color={DEEP.green}>Intercostaux T1-T7</Txt>
      <Txt x={600} y={476} size={10} bold color={DEEP.amber}>Abdominaux T7-T12</Txt>
      <Card x={532} y={110} w={190} h={110} color={DEEP.red} title="Sections du tronc" lines={["au-dessus du pont : rien", "+ vagotomie : cycles rares, amples", "médio-pontique : apneusis", "pont / bulbe : cycles fréquents"]} />
      <Card x={532} y={246} w={190} h={110} color={DEEP.green} title="Eupnée" lines={["inspiration active", "(diaphragme)", "expiration passive", "(recul élastique)"]} />
    </Figure>
  );
}

// ─── Endocrinologie : axes hypothalamo-hypophysaires ─────────────────────
export function HypothalamicAxesDiagram() {
  const rows: [string, string, string, string, string][] = [
    ["TRH", "TSH", "Thyroïde", "T3 / T4", C.amber],
    ["CRH", "ACTH", "Cortex surrénalien", "cortisol", C.red],
    ["GnRH", "FSH · LH", "Gonades", "testostérone · œstrogènes", C.violet],
    ["GHRH (GHIH)", "GH", "Foie, tissus", "IGF-1 (somatomédines)", C.green],
    ["Dopamine (PIH)", "PRL", "Glande mammaire", "lactation", C.pink],
  ];
  return (
    <Figure viewBox="0 0 740 500" title="L'axe hypothalamo-hypophysaire" caption="L'hypothalamus commande l'adénohypophyse par des libérines et des statines via le système porte ; les hormones de la glande cible freinent l'axe par rétrocontrôle négatif (long) ; l'ADH et l'ocytocine, synthétisées dans l'hypothalamus, sont libérées par la posthypophyse">
      <Box x={20} y={14} w={700} h={46} t="Hypothalamus : aire intégrative (stress, émotions, température, stimuli sensoriels)" c={C.blue} />
      {[["Hormone de libération", 40], ["Hormone hypophysaire", 210], ["Glande cible", 380], ["Hormone finale", 550]].map(([t, x]) => <Txt key={String(t)} x={Number(x) + 70} y={86} bold size={10.5} color={C.grey}>{String(t)}</Txt>)}
      {rows.map(([rh, h, g, e, c], i) => {
        const y = 98 + i * 66;
        return (
          <g key={h}>
            <Box x={40} y={y} w={140} h={46} t={rh} c={DEEP.blue} size={11} />
            {arrow(`M180,${y + 23} L206,${y + 23}`)}
            <Box x={210} y={y} w={140} h={46} t={h} c={c} size={11.5} />
            {arrow(`M350,${y + 23} L376,${y + 23}`)}
            <Box x={380} y={y} w={140} h={46} t={g} c={c} size={11} />
            {arrow(`M520,${y + 23} L546,${y + 23}`)}
            <Box x={550} y={y} w={170} h={46} t={e} c={c} size={10.5} />
          </g>
        );
      })}
      <Box x={20} y={430} w={330} h={56} t="Posthypophyse (neurohypophyse)" s="ADH (vasopressine) · ocytocine : voie axonale" c={C.pink} size={11.5} />
      <Box x={390} y={430} w={330} h={56} t="Rétrocontrôle négatif long" s="hormone finale → freine libérine + hormone hypophysaire" c={C.red} size={11.5} />
      {inhib(636, 424, 636, 400, DEEP.red)}
    </Figure>
  );
}

// ─── Endocrinologie : thyroïde ───────────────────────────────────────────
export function ThyroidDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="La thyroïde : biosynthèse et régulation des hormones thyroïdiennes" caption="Toutes les étapes dépendent de la TSH (AMPc) : captage de l'iode, iodation des tyrosines de la thyroglobuline, puis clivage et libération de T4 (93 %) et T3 (7 %, 4 fois plus active) ; T3/T4 agissent sur des récepteurs nucléaires et freinent la TRH et la TSH">
      <ellipse cx={170} cy={170} rx={150} ry={130} fill={C.amber} fillOpacity={0.1} stroke={C.amber} strokeWidth={2.4} />
      <ellipse cx={170} cy={170} rx={90} ry={72} fill={C.amber} fillOpacity={0.3} stroke={C.amber} strokeWidth={1.8} strokeDasharray="6 4" />
      <Txt x={170} y={160} bold size={12}>Colloïde</Txt><Txt x={170} y={176} size={9.5} color={C.grey}>thyroglobuline iodée</Txt>
      <Txt x={170} y={46} bold size={11.5} color={DEEP.amber}>Follicule thyroïdien (thyréocytes)</Txt>
      {/* sang */}
      <rect x={20} y={318} width={300} height={34} rx={8} fill={C.red} fillOpacity={0.12} stroke={C.red} strokeWidth={1.8} /><Txt x={170} y={340} bold size={11} color={DEEP.red}>Sang : I⁻ (150 µg/jour)</Txt>
      {arrow("M170,316 L170,292")}
      <Txt x={200} y={306} anchor="start" size={9.5} color={C.grey}>captage actif (≈ ⅕ de l'iode)</Txt>
      <Txt x={170} y={100} size={10} bold color={DEEP.violet}>iodation des tyrosines → MIT, DIT</Txt>
      <Txt x={170} y={114} size={9.5} color={C.grey}>couplage → T3 et T4 sur la thyroglobuline</Txt>
      <path d="M262,240 C300,260 330,290 330,320" fill="none" stroke={C.green} strokeWidth={2.4} markerEnd="url(#fig-arrow)" />
      <Txt x={210} y={272} anchor="start" size={9.5} bold color={DEEP.green}>clivage → libération de T4 / T3</Txt>
      <Box x={20} y={372} w={140} h={44} t="T4 · 93 %" s="thyroxine" c={C.amber} size={11.5} />
      <Box x={180} y={372} w={140} h={44} t="T3 · 7 %" s="4 × plus active" c={C.red} size={11.5} />
      <Txt x={170} y={438} size={9.5} color={C.grey}>T4 → T3 dans les cellules cibles · récepteurs nucléaires → transcription génique</Txt>
      {/* boucle */}
      <Box x={430} y={20} w={270} h={50} t="Hypothalamus" s="TRH" c={C.blue} />
      {arrow("M565,72 L565,110")}
      <Box x={430} y={112} w={270} h={50} t="Adénohypophyse" s="TSH (via AMPc)" c={C.violet} />
      {arrow("M565,164 L565,200")}
      <Box x={430} y={202} w={270} h={50} t="Thyroïde" s="trophicité, captage I⁻, synthèse, libération" c={C.amber} />
      {arrow("M565,254 L565,290")}
      <Box x={430} y={292} w={270} h={50} t="T3 / T4 circulantes" c={C.red} />
      <path d="M700,316 C724,316 724,140 700,140" fill="none" stroke={DEEP.red} strokeWidth={2.4} strokeDasharray="6 4" markerEnd="url(#fig-arrow)" />
      <path d="M700,316 C734,316 734,44 700,44" fill="none" stroke={DEEP.red} strokeWidth={2.4} strokeDasharray="6 4" markerEnd="url(#fig-arrow)" />
      <Txt x={565} y={364} bold size={10.5} color={DEEP.red}>rétrocontrôle négatif (pointillés)</Txt>
      <Card x={430} y={382} w={270} h={84} color={DEEP.amber} title="Effets" lines={["croissance, développement du SNC", "métabolisme (BMR 33-40 kcal/m²/h)", "↑ glycogénolyse, lipolyse, activation sympathique"]} />
    </Figure>
  );
}

// ─── Endocrinologie : surrénale et axe du cortisol ───────────────────────
export function AdrenalDiagram() {
  const zones: [string, string, string, number, string][] = [
    ["Zone glomérulée", "aldostérone", "SRAA, K⁺ · Na⁺/K⁺, volémie", 122, C.blue],
    ["Zone fasciculée", "cortisol (95 %)", "ACTH · glucose, stress, anti-inflammatoire", 94, C.red],
    ["Zone réticulée", "androgènes", "ACTH (rôle réduit)", 66, C.violet],
    ["Médullosurrénale", "adrénaline · noradrénaline", "stimulation sympathique", 38, C.amber],
  ];
  return (
    <Figure viewBox="0 0 740 480" title="La surrénale : zones et axe hypothalamo-hypophyso-surrénalien" caption="Le cortex sécrète trois familles de stéroïdes (glomérulée : aldostérone ; fasciculée : cortisol, sous contrôle de l'ACTH ; réticulée : androgènes) et la médullosurrénale les catécholamines ; l'ACTH a un rythme circadien (maximum le matin), suivi par le cortisol, avec rétrocontrôle négatif">
      {zones.map(([n, , , r, c]) => <circle key={n} cx={150} cy={170} r={r} fill={c} fillOpacity={0.3} stroke={c} strokeWidth={2} />)}
      <Txt x={150} y={174} bold size={10.5}>Médulla</Txt>
      <Txt x={150} y={28} bold size={12} color={DEEP.amber}>Surrénale (coupe schématique)</Txt>
      {zones.map(([n, h, reg, , c], i) => (
        <g key={n}>
          <rect x={310} y={20 + i * 76} width={420} height={64} rx={10} fill={c} fillOpacity={0.13} stroke={c} strokeWidth={2} />
          <Txt x={326} y={42 + i * 76} anchor="start" bold size={11.5}>{n} : {h}</Txt>
          <Txt x={326} y={60 + i * 76} anchor="start" size={10} color={C.grey}>{reg}</Txt>
          <rect x={310} y={20 + i * 76} width={10} height={64} rx={4} fill={c} />
        </g>
      ))}
      {/* axe */}
      <Box x={30} y={358} w={150} h={40} t="Hypothalamus" s="CRH" c={C.blue} size={11} />
      {arrow("M180,378 L220,378")}
      <Box x={222} y={358} w={150} h={40} t="Hypophyse" s="ACTH (AMPc)" c={C.violet} size={11} />
      {arrow("M372,378 L412,378")}
      <Box x={414} y={358} w={150} h={40} t="Cortex : fasciculée" s="cortisol" c={C.red} size={11} />
      {arrow("M564,378 L600,378")}
      <Box x={602} y={358} w={128} h={40} t="Tissus" s="↑ glycémie · anti-inflammatoire" c={C.green} size={10.5} />
      <path d="M490,356 C490,326 300,326 300,356" fill="none" stroke={DEEP.red} strokeWidth={2.2} strokeDasharray="6 4" /><Txt x={395} y={330} size={9.5} bold color={DEEP.red}>rétrocontrôle négatif</Txt>
      <Txt x={30} y={424} anchor="start" size={10} color={C.grey}>Rythme circadien : ACTH et cortisol maximaux le matin, minimaux le soir</Txt>
      <Txt x={30} y={442} anchor="start" size={10} color={C.grey}>Cortisol : néoglucogenèse, lipolyse, catabolisme protéique, rétention Na⁺/eau, déminéralisation osseuse (excès)</Txt>
      <Txt x={30} y={460} anchor="start" size={10} color={C.grey}>Aldostérone : hormone de survie — sa carence tue en quelques jours par choc</Txt>
    </Figure>
  );
}

// ─── Endocrinologie : glycémie ───────────────────────────────────────────
export function GlucoseDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Régulation de la glycémie : insuline et glucagon" caption="Insuline (cellules β, « hormone de l'abondance ») : ↓ glycémie ; glucagon (cellules α) : ↑ glycémie entre les repas ; la glycémie elle-même est le principal rétrocontrôle de leur sécrétion ; le tissu nerveux est insulino-indépendant">
      <Box x={270} y={16} w={200} h={58} t="Glycémie" s="≈ 110 mg/dL (seuil)" c={C.amber} size={13} />
      {/* signal glycémie → cellules */}
      <path d="M270,45 L135,45 L135,118" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Txt x={144} y={38} anchor="start" size={10} bold color={DEEP.red}>↑ &gt; 110 mg/dL</Txt>
      <path d="M470,45 L605,45 L605,118" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Txt x={596} y={38} anchor="end" size={10} bold color={DEEP.blue}>↓ glycémie</Txt>
      <Box x={20} y={120} w={230} h={56} t="Cellules β" s="INSULINE (récepteur tyrosine kinase)" c={C.blue} size={12} />
      <Box x={490} y={120} w={230} h={56} t="Cellules α" s="GLUCAGON (AMPc)" c={C.red} size={12} />
      <Card x={20} y={188} w={230} h={88} color={DEEP.blue} title="Effets de l'insuline" lines={["captage cellulaire du glucose", "glycolyse · glycogénogenèse · lipogenèse", "↓ néoglucogenèse et glycogénolyse"]} />
      <Card x={490} y={188} w={230} h={88} color={DEEP.red} title="Effets du glucagon" lines={["glycogénolyse hépatique (principal)", "néoglucogenèse (acides aminés)", "lipolyse · cétogenèse"]} />
      {/* retours */}
      <path d="M250,232 L350,232 L350,76" fill="none" stroke={C.blue} strokeWidth={2.6} markerEnd="url(#fig-arrow)" />
      <Txt x={344} y={252} anchor="end" bold size={10.5} color={DEEP.blue}>↓ glycémie</Txt>
      <path d="M490,232 L390,232 L390,76" fill="none" stroke={C.red} strokeWidth={2.6} markerEnd="url(#fig-arrow)" />
      <Txt x={396} y={252} anchor="start" bold size={10.5} color={DEEP.red}>↑ glycémie</Txt>
      {/* modulateurs */}
      <Txt x={370} y={306} bold size={12}>Modulateurs de la sécrétion d'insuline</Txt>
      <Card x={20} y={318} w={170} h={112} color={C.green} title="↑ insuline" lines={["vague (parasympathique)", "gastrine, sécrétine, CCK, GIP", "acides aminés (arginine)", "glucagon, corps cétoniques"]} />
      <Card x={200} y={318} w={170} h={112} color={C.red} title="↓ insuline" lines={["sympathique (récepteurs α)", "somatostatine (cellules δ)", "acides gras libres", "glycémie < 110 mg/dL"]} />
      <Card x={380} y={318} w={170} h={112} color={C.amber} title="Hyperglycémiants" lines={["GH, cortisol, T3", "adrénaline (β) → glucagon", "→ ↑ glycémie", "→ ↑ insuline secondaire"]} />
      <Card x={560} y={318} w={160} h={112} color={C.violet} title="Pathologies" lines={["↓ insuline : diabète sucré", "↑ insuline : hypoglycémie", "(insulinome)"]} />
    </Figure>
  );
}

// ─── Endocrinologie : calcium et phosphate ───────────────────────────────
export function CalciumDiagram() {
  return (
    <Figure viewBox="0 0 740 490" title="Homéostasie phosphocalcique : PTH, calcitriol et calcitonine" caption="Calcémie ≈ 10 mg % (50 % ionisé actif) : une hypocalcémie stimule la PTH (os, rein, activation de la vitamine D, absorption intestinale), une hypercalcémie stimule la calcitonine ; 99 % du calcium est dans l'os">
      <Box x={270} y={200} w={200} h={70} t="Ca²⁺ plasmatique" s="≈ 10 mg % · 50 % ionisé" c={C.amber} size={12.5} />
      {/* PTH */}
      <Box x={20} y={30} w={230} h={60} t="Parathyroïdes" s="PTH (↑ si Ca²⁺ ↓)" c={C.red} size={12} />
      {arrow("M135,92 L135,130")}
      <Card x={20} y={132} w={230} h={94} color={DEEP.red} title="PTH : ↑ calcémie" lines={["os : déminéralisation (Ca²⁺, phosphate)", "rein : ↑ réabsorption Ca²⁺, ↑ excrétion", "de phosphate ; active la vitamine D"]} />
      {arrow("M250,190 L268,220")}
      {/* calcitonine */}
      <Box x={490} y={30} w={230} h={60} t="Thyroïde (cellules C)" s="calcitonine (↑ si Ca²⁺ ↑)" c={C.blue} size={12} />
      {arrow("M605,92 L605,130")}
      <Card x={490} y={132} w={230} h={94} color={DEEP.blue} title="Calcitonine : ↓ calcémie" lines={["inhibe l'ostéolyse, stimule l'ostéogenèse", "enfant, grossesse, allaitement :", "protection du squelette"]} />
      {arrow("M490,190 L472,220")}
      {/* vitamine D */}
      <Txt x={370} y={306} bold size={12} color={DEEP.green}>Vitamine D → calcitriol (forme active)</Txt>
      <Box x={20} y={320} w={130} h={54} t="Peau + UV" s="cholestérol → vit. D" c={C.amber} size={11} />
      {arrow("M150,347 L190,347")}
      <Box x={192} y={320} w={130} h={54} t="Foie" s="1re hydroxylation" c={C.green} size={11} />
      {arrow("M322,347 L362,347")}
      <Box x={364} y={320} w={150} h={54} t="Rein" s="2e hydroxylation (PTH)" c={C.green} size={11} />
      {arrow("M514,347 L554,347")}
      <Box x={556} y={320} w={164} h={54} t="Calcitriol" s="inhibe sa propre activation" c={C.violet} size={11} />
      {arrow("M638,376 L638,404")}
      <Card x={20} y={410} w={240} h={70} color={DEEP.green} title="Intestin" lines={["↑ absorption active de Ca²⁺", "(≈ 35 % du calcium ingéré)"]} />
      <Card x={270} y={410} w={220} h={70} color={DEEP.amber} title="Rein" lines={["↑ réabsorption de Ca²⁺", "et de phosphate (95 % du Ca²⁺)"]} />
      <Card x={500} y={410} w={220} h={70} color={DEEP.violet} title="Os" lines={["Ca²⁺ normal : minéralisation", "Ca²⁺ bas : ressemble à la PTH"]} />
    </Figure>
  );
}
