import { Figure, C, Txt, Dot, Seq } from "./Figure";
import { RED, OK, DEEP, leader, arrow, box, Axes, fnPath } from "./FigKit";

// Biochimie S1 — chapitres 5 à 7 : enzymes, catalyse, régulation.

// ─── 1. Profil énergétique d'une réaction ────────────────────────────────
export function EnergyProfileDiagram() {
  const unc = "M70,240 C130,240 150,236 200,150 C230,96 250,84 280,84 C310,84 330,96 360,150 C400,236 440,300 520,300";
  const cat = "M70,240 C130,240 160,236 200,200 C230,176 250,170 280,170 C310,170 330,176 360,210 C400,270 440,300 520,300";
  return (
    <Figure viewBox="0 0 740 400" title="Profil énergétique d'une réaction enzymatique" caption="L'enzyme abaisse l'énergie d'activation ΔG‡ en stabilisant l'état de transition ; elle ne modifie ni la variation d'énergie libre ΔG° ni l'équilibre">
      <Axes x={70} y={50} w={470} h={290} xl="Coordonnée de réaction" yl="Énergie libre (G)" />
      <path d={unc} fill="none" stroke={RED} strokeWidth={4} />
      <path d={cat} fill="none" stroke={C.green} strokeWidth={4} />
      <Dot path={cat} dur={5} r={8} color={C.green} />
      <Dot path={unc} dur={7} r={8} color={RED} />
      <line x1={70} y1={240} x2={290} y2={240} stroke="currentColor" strokeOpacity={0.4} strokeDasharray="4 3" />
      <line x1={470} y1={300} x2={520} y2={300} stroke="currentColor" strokeOpacity={0.4} strokeDasharray="4 3" />
      <path d="M470,240 L470,300" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Txt x={478} y={274} anchor="start" size={11} bold>ΔG° (identique)</Txt>
      <path d="M296,240 L296,88" stroke={RED} strokeWidth={2} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
      <Txt x={306} y={166} anchor="start" size={11} bold color={RED}>ΔG‡ sans enzyme</Txt>
      <path d="M250,240 L250,174" stroke="#2a7a55" strokeWidth={2} markerEnd="url(#fig-arrow)" markerStart="url(#fig-arrow)" />
      <Txt x={112} y={208} size={11} bold color="#2a7a55" anchor="start">ΔG‡ avec enzyme</Txt>
      <Txt x={280} y={72} bold size={11}>état de transition ‡</Txt>
      <Txt x={90} y={262} size={11} bold>Substrat (S)</Txt><Txt x={510} y={322} size={11} bold>Produit (P)</Txt>
      <rect x={570} y={60} width={160} height={280} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={650} y={86} bold size={12}>L'enzyme</Txt>
      {["↓ énergie d'activation", "accélère la réaction", "stabilise l'état de transition", "ne change pas ΔG°", "ne déplace pas l'équilibre", "n'est pas consommée"].map((t, i) => <Txt key={t} x={650} y={116 + i * 34} size={10.5}>{t}</Txt>)}
      <Txt x={650} y={330} size={10} color={C.grey}>{"ΔG < 0 : réaction spontanée"}</Txt>
    </Figure>
  );
}

// ─── 2. Modèles de liaison enzyme-substrat ───────────────────────────────
export function EnzymeSubstrateModelsDiagram() {
  const enzyme = (x: number, y: number, open: boolean, c = C.blue) => (
    <path d={open ? `M${x - 50},${y} L${x - 50},${y + 60} Q${x},${y + 80} ${x + 50},${y + 60} L${x + 50},${y} L${x + 24},${y} L${x + 24},${y + 24} Q${x},${y + 34} ${x - 24},${y + 24} L${x - 24},${y}z` : `M${x - 50},${y} L${x - 50},${y + 60} Q${x},${y + 80} ${x + 50},${y + 60} L${x + 50},${y} L${x + 20},${y} L${x + 20},${y + 30} L${x - 20},${y + 30} L${x - 20},${y}z`} fill={c} fillOpacity={0.35} stroke={c} strokeWidth={3} />
  );
  return (
    <Figure viewBox="0 0 740 420" title="Modèles de liaison enzyme-substrat et complexe ES" caption="Clé-serrure (site rigide) et ajustement induit (le site s'adapte au substrat) ; E + S ⇌ ES → E + P">
      {[["Clé-serrure", "site actif rigide et complémentaire", false, 130], ["Ajustement induit", "le site actif se remodèle à la liaison", true, 370], ["État de transition", "le site est complémentaire de l'état ‡", true, 610]].map(([t, s, ind, x], i) => (
        <g key={String(t)}>
          <rect x={Number(x) - 110} y={8} width={220} height={210} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.2} />
          <Txt x={Number(x)} y={30} bold size={12.5}>{String(t)}</Txt><Txt x={Number(x)} y={46} size={10} color={C.grey}>{String(s)}</Txt>
          {enzyme(Number(x), 96, i > 0)}
          <Dot path={`M${Number(x) - 76},64 C${Number(x) - 40},70 ${Number(x) - 12},86 ${Number(x)},104`} dur={3} delay={i * 0.4} r={i === 2 ? 10 : 12} color={i === 2 ? C.amber : C.green} />
          <Txt x={Number(x)} y={198} size={10} color={C.grey}>{i === 0 ? "substrat = clé" : i === 1 ? "E change de forme (ES)" : "ES‡ : liaison maximale"}</Txt>
        </g>
      ))}
      <line x1={20} y1={236} x2={720} y2={236} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={262} bold size={12.5}>Réaction enzymatique</Txt>
      {box(40, 280, 60, 40, "E", undefined, C.blue, 15)}
      <Txt x={122} y={306} bold size={18}>+</Txt>
      {box(140, 280, 60, 40, "S", undefined, C.green, 15)}
      {arrow("M214,292 L286,292")}{arrow("M286,308 L214,308")}
      <Txt x={250} y={280} size={10} bold color="#2a7a55">k₁</Txt><Txt x={250} y={330} size={10} bold color={RED}>k₋₁</Txt>
      {box(296, 280, 90, 40, "ES", "complexe", C.violet, 14)}
      {arrow("M400,300 L472,300")}
      <Txt x={436} y={288} size={10} bold color="#6a45b0">k_cat</Txt>
      {box(482, 280, 60, 40, "E", undefined, C.blue, 15)}
      <Txt x={562} y={306} bold size={18}>+</Txt>
      {box(580, 280, 60, 40, "P", undefined, C.amber, 15)}
      <Txt x={370} y={366} size={11} bold>Km = (k₋₁ + k_cat) / k₁ • k_cat = nombre de renouvellements par seconde</Txt>
      <Txt x={370} y={386} size={10.5} color={C.grey}>site actif : faible partie du volume de l'enzyme, poche tridimensionnelle où se lient le substrat et les résidus catalytiques</Txt>
    </Figure>
  );
}

// ─── 3. Michaelis-Menten et Lineweaver-Burk ──────────────────────────────
export function MichaelisMentenDiagram() {
  const X = (s: number) => 70 + (s / 10) * 290;
  const Y = (v: number) => 290 - v * 220;
  const mm = (s: number) => s / (2 + s);
  const X2 = (t: number) => 470 + ((t + 1) / 3) * 240;
  const Y2 = (v: number) => 290 - ((v + 0.2) / 3.2) * 240;
  return (
    <Figure viewBox="0 0 740 420" title="Cinétique de Michaelis-Menten et double inverse de Lineweaver-Burk" caption="v₀ = Vmax [S] / (Km + [S]) ; Km = [S] pour v₀ = Vmax/2 ; en double inverse : 1/v₀ = (Km/Vmax)(1/[S]) + 1/Vmax">
      <Axes x={70} y={60} w={290} h={230} xl="[S]" yl="v₀" />
      <line x1={70} y1={Y(1)} x2={360} y2={Y(1)} stroke={RED} strokeDasharray="6 4" strokeWidth={2} />
      <Txt x={78} y={Y(1) - 6} anchor="start" size={11} bold color={RED}>Vmax</Txt>
      <line x1={70} y1={Y(0.5)} x2={X(2)} y2={Y(0.5)} stroke="currentColor" strokeOpacity={0.5} strokeDasharray="4 3" />
      <line x1={X(2)} y1={Y(0.5)} x2={X(2)} y2={290} stroke="currentColor" strokeOpacity={0.5} strokeDasharray="4 3" />
      <Txt x={80} y={Y(0.5) - 6} anchor="start" size={10.5}>Vmax/2</Txt><Txt x={X(2)} y={310} size={11} bold color={C.violet}>Km</Txt>
      <path d={fnPath(mm, 0, 10, 60, X, Y)} fill="none" stroke={C.blue} strokeWidth={4} />
      <Dot path={fnPath(mm, 0, 10, 60, X, Y)} dur={5} r={6} color={RED} />
      <Txt x={X(6.4)} y={Y(0.64) + 26} size={10.5} bold color={C.blue} anchor="start">hyperbole</Txt>
      <Txt x={215} y={340} size={10} color={C.grey}>ordre 1 à faible [S] → ordre 0 à forte [S] (saturation)</Txt>
      <line x1={420} y1={40} x2={420} y2={390} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Axes x={470} y={60} w={240} h={230} xl="1/[S]" yl="1/v₀" />
      <line x1={X2(0)} y1={60} x2={X2(0)} y2={290} stroke="currentColor" strokeOpacity={0.25} />
      <path d={`M${X2(-0.5)},${Y2(0)} L${X2(1.05)},${Y2(2 * 1.05 + 1)}`} stroke={C.blue} strokeWidth={4} fill="none" />
      <circle cx={X2(-0.5)} cy={Y2(0)} r={5} fill={C.violet} /><circle cx={X2(0)} cy={Y2(1)} r={5} fill={RED} />
      <Txt x={X2(-0.5)} y={Y2(0) + 22} size={10.5} bold color={C.violet}>−1/Km</Txt>
      <Txt x={X2(0) + 10} y={Y2(1) + 4} anchor="start" size={10.5} bold color={RED}>1/Vmax</Txt>
      <Txt x={X2(0.2)} y={Y2(2.6)} size={10.5} bold color={C.blue} anchor="start">pente = Km / Vmax</Txt>
      <rect x={40} y={352} width={660} height={56} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={200} y={374} bold size={12}>v₀ = Vmax [S] / (Km + [S])</Txt>
      <Txt x={200} y={392} size={10} color={C.grey}>Km : affinité apparente (faible Km = forte affinité)</Txt>
      <Txt x={520} y={374} bold size={12}>k_cat = Vmax / [E]t</Txt>
      <Txt x={520} y={392} size={10} color={C.grey}>efficacité catalytique = k_cat / Km</Txt>
    </Figure>
  );
}

// ─── 4. Inhibiteurs enzymatiques ─────────────────────────────────────────
export function EnzymeInhibitionDiagram() {
  const lb = (kind: number) => {
    const X = (t: number) => 40 + ((t + 2.4) / 6.4) * 150;
    const Y = (v: number) => 110 - ((v + 0.5) / 6.5) * 90;
    const line = (b: number, a: number, c: string, dash?: string) => <path d={`M${X(-2.2)},${Y(b + a * -2.2)} L${X(1.6)},${Y(b + a * 1.6)}`} stroke={c} strokeWidth={2.6} fill="none" strokeDasharray={dash} />;
    const [b, a] = kind === 0 ? [1, 2] : kind === 1 ? [2, 2] : [2, 1];
    return (
      <g>
        <line x1={40} y1={Y(0)} x2={196} y2={Y(0)} stroke="currentColor" strokeWidth={1} /><line x1={X(0)} y1={16} x2={X(0)} y2={112} stroke="currentColor" strokeWidth={1} />
        {line(1, 1, C.blue, "4 3")}{line(b, a, RED)}
        <Txt x={116} y={128} size={9} color={C.grey}>1/[S]</Txt><Txt x={30} y={30} size={9} color={C.grey} anchor="end">1/v₀</Txt>
      </g>
    );
  };
  const cols: [string, string, string, string, string][] = [
    ["Compétitif", "l'inhibiteur occupe le site actif", "Km ↑ • Vmax inchangée", "droites se coupant sur l'axe 1/v₀", C.red],
    ["Non compétitif", "l'inhibiteur se lie ailleurs (E et ES)", "Km inchangé • Vmax ↓", "droites se coupant sur l'axe 1/[S]", C.violet],
    ["Anti-compétitif", "l'inhibiteur se lie au complexe ES", "Km ↓ • Vmax ↓", "droites parallèles", C.amber],
  ];
  return (
    <Figure viewBox="0 0 740 420" title="Inhibition enzymatique : compétitive, non compétitive, anti-compétitive" caption="Les trois types d'inhibition réversible et leurs signatures en double inverse (bleu : sans inhibiteur, rouge : avec inhibiteur)">
      {cols.map(([t, s, e, f, c], i) => (
        <g key={t} transform={`translate(${6 + i * 246} 0)`}>
          <rect x={0} y={6} width={236} height={408} rx={10} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={2} />
          <Txt x={118} y={30} bold size={13} color={c}>{t}</Txt>
          <Txt x={118} y={46} size={10} color={C.grey}>{s}</Txt>
          <path d="M40,90 L40,150 Q118,175 196,150 L196,90 L152,90 L152,116 L84,116 L84,90z" fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={3} />
          {i === 0 && <circle cx={118} cy={104} r={11} fill={C.red} />}
          {i === 1 && <circle cx={210} cy={130} r={11} fill={C.violet} />}
          {i === 2 && <><circle cx={118} cy={104} r={11} fill={C.green} /><circle cx={118} cy={140} r={9} fill={C.amber} /></>}
          <Dot path="M40,70 C70,80 100,90 118,100" dur={3} delay={i * 0.5} r={7} color={C.green} />
          <Txt x={118} y={196} size={10.5} bold>{e}</Txt>
          <g transform="translate(20 210)">{lb(i)}</g>
          <Txt x={118} y={366} size={10} color={C.grey}>{f}</Txt>
          <Txt x={118} y={386} size={10} bold color={c}>{i === 0 ? "surmontable par ↑ [S]" : i === 1 ? "non surmontable par ↑ [S]" : "surtout enzymes à 2 substrats"}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 5. Classification EC ────────────────────────────────────────────────
export function EcClassesDiagram() {
  const cards: [string, string, string, string, string][] = [
    ["EC 1", "Oxydoréductases", "AH₂ + B ⇌ A + BH₂", "transfert d'électrons ou d'H", "lactate déshydrogénase"],
    ["EC 2", "Transférases", "A–X + B ⇌ A + B–X", "transfert d'un groupe fonctionnel", "kinases, transaminases"],
    ["EC 3", "Hydrolases", "A–B + H₂O → A–OH + B–H", "coupure par l'eau", "protéases, lipases"],
    ["EC 4", "Lyases", "A–B → A + B", "coupure non hydrolytique", "aldolase, anhydrase carbonique"],
    ["EC 5", "Isomérases", "A → A' (isomère)", "réarrangement interne", "phosphoglucose isomérase"],
    ["EC 6", "Ligases", "A + B + ATP → A–B + ADP + Pi", "synthèse couplée à l'ATP", "ADN ligase, pyruvate carboxylase"],
    ["EC 7", "Translocases", "X (côté 1) → X (côté 2)", "transport à travers une membrane", "ATP synthase, Na⁺/K⁺-ATPase"],
  ];
  const cols = [C.red, C.blue, C.green, C.amber, C.violet, C.pink, "#4b8f9e"];
  return (
    <Figure viewBox="0 0 740 440" title="Classification internationale des enzymes (EC)" caption="Les 7 classes d'enzymes selon la réaction catalysée, avec le schéma de réaction et un exemple">
      {cards.map(([n, t, f, s, ex], i) => {
        const x = 6 + (i % 2) * 366;
        const y = 6 + Math.floor(i / 2) * 106;
        const w = i === 6 ? 728 : 356;
        return (
          <g key={n} transform={`translate(${i === 6 ? 6 : x} ${y})`}>
            <rect x={0} y={0} width={w} height={98} rx={10} fill={cols[i]} fillOpacity={0.08} stroke={cols[i]} strokeWidth={2} />
            <rect x={0} y={0} width={64} height={98} rx={10} fill={cols[i]} fillOpacity={0.85} />
            <Txt x={32} y={46} bold size={16} color="#fff">{n}</Txt>
            <Txt x={w / 2 + 32} y={24} bold size={13}>{t}</Txt>
            <Txt x={w / 2 + 32} y={50} bold size={12} color={cols[i]}>{f}</Txt>
            <Txt x={w / 2 + 32} y={70} size={10.5}>{s}</Txt>
            <Txt x={w / 2 + 32} y={87} size={10} color={C.grey}>{`ex. ${ex}`}</Txt>
          </g>
        );
      })}
    </Figure>
  );
}

// ─── 6. Stratégies catalytiques ──────────────────────────────────────────
export function CatalyticStrategiesDiagram() {
  const card = (x: number, y: number, n: string, t: string, s: string, c: string, body: React.ReactNode, foot: string) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={0} width={356} height={200} rx={10} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={2} />
      <circle cx={26} cy={26} r={14} fill={c} /><Txt x={26} y={31} bold size={13} color="#fff">{n}</Txt>
      <Txt x={200} y={30} bold size={12.5} color={c}>{t}</Txt><Txt x={200} y={46} size={10} color={C.grey}>{s}</Txt>
      {body}
      <Txt x={178} y={186} size={10} bold>{foot}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 430" title="Les quatre stratégies catalytiques des enzymes" caption="Catalyse covalente, catalyse acide-base générale, catalyse par ion métallique, catalyse par proximité et orientation">
      {card(6, 6, "1", "Catalyse covalente", "intermédiaire enzyme–substrat", C.red, (
        <>
          <rect x={30} y={72} width={90} height={60} rx={10} fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={2.5} /><Txt x={75} y={98} bold size={11}>Enzyme</Txt><Txt x={75} y={116} size={10} color={DEEP.red}>Ser–OH</Txt>
          <circle cx={170} cy={102} r={18} fill={C.green} /><Txt x={170} y={106} bold size={10} color="#fff">S</Txt>
          {arrow("M190,102 L228,102")}
          <rect x={240} y={72} width={100} height={60} rx={10} fill={C.red} fillOpacity={0.25} stroke={C.red} strokeWidth={2.5} /><Txt x={290} y={98} bold size={10.5}>Enzyme–S</Txt><Txt x={290} y={114} size={10} color={DEEP.red}>liaison covalente</Txt>
        </>
      ), "ex. chymotrypsine (Ser)")}
      {card(374, 6, "2", "Catalyse acide-base", "transfert de H⁺ par des résidus", C.amber, (
        <>
          <circle cx={100} cy={100} r={26} fill={C.amber} fillOpacity={0.4} stroke={C.amber} strokeWidth={2.5} /><Txt x={100} y={104} bold size={11}>His</Txt>
          <Dot path="M126,96 L200,96" dur={2.2} r={7} color={RED} label="H⁺" />
          <circle cx={240} cy={100} r={26} fill={C.green} fillOpacity={0.4} stroke={C.green} strokeWidth={2.5} /><Txt x={240} y={104} bold size={10.5}>Substrat</Txt>
          <Txt x={178} y={150} size={10.5} color={C.grey}>His : donneur ou accepteur de proton</Txt>
        </>
      ), "ex. His57 (chymotrypsine)")}
      {card(6, 216, "3", "Catalyse par ion métallique", "polarise ou active l'eau", C.violet, (
        <>
          <circle cx={100} cy={102} r={22} fill={C.violet} fillOpacity={0.7} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={100} y={107} bold size={12} color="#fff">Zn²⁺</Txt>
          {[[54, 72], [54, 132], [146, 132]].map(([x, y], i) => <g key={i}><line x1={100} y1={102} x2={x} y2={y} stroke={C.blue} strokeWidth={2} /><circle cx={x} cy={y} r={11} fill={C.blue} /></g>)}
          <circle cx={150} cy={70} r={14} fill={C.blue} fillOpacity={0.6} /><Txt x={150} y={74} size={9} bold color="#fff">H₂O</Txt>
          <line x1={118} y1={90} x2={140} y2={76} stroke={C.violet} strokeWidth={2.5} />
          {arrow("M180,100 L232,100")}
          <Txt x={286} y={96} bold size={11}>OH⁻ nucléophile</Txt><Txt x={286} y={114} size={10} color={C.grey}>pKa de l'eau abaissé</Txt>
        </>
      ), "ex. anhydrase carbonique")}
      {card(374, 216, "4", "Proximité et orientation", "rapproche et oriente les substrats", C.green, (
        <>
          <path d="M60,150 L60,84 Q178,60 296,84 L296,150" fill="none" stroke={C.blue} strokeWidth={4} />
          <circle cx={140} cy={104} r={16} fill={C.green} /><Txt x={140} y={108} bold size={10} color="#fff">A</Txt>
          <circle cx={200} cy={104} r={16} fill={C.amber} /><Txt x={200} y={108} bold size={10} color="#fff">B</Txt>
          {arrow("M162,104 L176,104")}
          <Dot path="M100,120 L140,108" dur={2.4} r={0} />
          <Txt x={178} y={144} size={10.5} color={C.grey}>↑ concentration effective, bonne orientation</Txt>
        </>
      ), "réaction bimoléculaire → quasi-monomoléculaire")}
      <Txt x={370} y={422} size={10.5} bold color="#2a7a55">Commun à toutes : stabilisation de l'état de transition (↓ ΔG‡)</Txt>
    </Figure>
  );
}

// ─── 7. Mécanisme des protéases à sérine ─────────────────────────────────
export function SerineProteaseDiagram() {
  const steps: [string, string][] = [
    ["Liaison du substrat", "poche de spécificité S1"],
    ["Attaque nucléophile", "Ser195 attaque C=O : intermédiaire tétraédrique"],
    ["Acyl-enzyme", "1ᵉʳ produit (amine) libéré"],
    ["Hydrolyse", "H₂O attaque, 2ᵉ produit libéré, enzyme régénérée"],
  ];
  return (
    <Figure viewBox="0 0 740 420" title="Chymotrypsine : triade catalytique et mécanisme en deux temps" caption="La triade Asp102–His57–Ser195 active la sérine ; l'intermédiaire tétraédrique est stabilisé par le trou oxyanion ; l'enzyme forme puis hydrolyse un acyl-enzyme">
      <Txt x={130} y={26} bold size={13}>Triade catalytique</Txt>
      {[["Asp102", "−", C.blue, 60], ["His57", "", C.amber, 150], ["Ser195", "–OH", C.red, 240]].map(([t, s, c, y]) => (
        <g key={String(t)}>
          <rect x={40} y={Number(y)} width={130} height={56} rx={10} fill={String(c)} fillOpacity={0.2} stroke={String(c)} strokeWidth={2.5} />
          <Txt x={105} y={Number(y) + 24} bold size={13}>{String(t)}</Txt><Txt x={105} y={Number(y) + 42} size={10} color={C.grey}>{t === "Asp102" ? "carboxylate" : t === "His57" ? "base / acide" : "nucléophile"}</Txt>
        </g>
      ))}
      <path d="M105,116 L105,150 M105,206 L105,240" stroke={RED} strokeWidth={3} strokeDasharray="5 3" />
      <Dot path="M105,236 L105,210" dur={2} r={6} color={RED} label="H" />
      <Txt x={150} y={136} anchor="start" size={9.5} color={C.grey}>liaison H</Txt><Txt x={150} y={226} anchor="start" size={9.5} color={C.grey}>H⁺ capté</Txt>
      <path d="M180,268 C230,268 240,300 260,300" fill="none" stroke={C.grey} strokeWidth={2} strokeDasharray="4 3" />
      <Txt x={130} y={338} bold size={11}>Trou oxyanion</Txt><Txt x={130} y={354} size={10} color={C.grey}>stabilise l'intermédiaire tétraédrique</Txt>
      <Txt x={130} y={384} size={10.5} bold color={DEEP.red}>Ser + His + Asp : « relais de charge »</Txt>
      <line x1={230} y1={30} x2={230} y2={400} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      {steps.map(([t, s], i) => (
        <Seq key={t} i={i} n={4}>
          <g transform={`translate(250 ${20 + i * 96})`}>
            <rect x={0} y={0} width={480} height={84} rx={10} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} />
            <circle cx={30} cy={42} r={16} fill={C.blue} /><Txt x={30} y={47} bold size={15} color="#fff">{String(i + 1)}</Txt>
            <Txt x={70} y={30} anchor="start" bold size={12.5}>{t}</Txt><Txt x={70} y={50} anchor="start" size={10.5} color={C.grey}>{s}</Txt>
            <Txt x={70} y={70} anchor="start" size={10.5} bold color={i < 2 ? DEEP.red : DEEP.green}>{["E + S → ES", "ES → intermédiaire tétraédrique", "→ acyl-enzyme + produit 1", "→ E + produit 2"][i]}</Txt>
          </g>
        </Seq>
      ))}
    </Figure>
  );
}

// ─── 8. ATCase : régulation allostérique ─────────────────────────────────
export function AtcaseDiagram() {
  const X = (s: number) => 460 + (s / 10) * 250;
  const Y = (v: number) => 230 - v * 170;
  const hill = (k: number, n: number, vmax = 1) => (s: number) => vmax * Math.pow(s, n) / (Math.pow(k, n) + Math.pow(s, n));
  return (
    <Figure viewBox="0 0 740 420" title="Aspartate transcarbamoylase : régulation allostérique par le produit final" caption="L'ATP stabilise l'état R (activateur), le CTP stabilise l'état T (inhibiteur par rétro-inhibition) ; la courbe est sigmoïde">
      {box(20, 30, 150, 46, "Carbamoyl-P + Asp", undefined, C.blue, 11.5)}
      {arrow("M175,53 L228,53")}
      {box(232, 30, 140, 46, "ATCase", "1ʳᵉ étape spécifique", C.violet, 12)}
      {arrow("M376,53 L420,53")}
      <Txt x={430} y={58} anchor="start" size={11} bold>carbamoyl-aspartate → … → CTP</Txt>
      <path d="M660,72 L660,110 L302,110 L302,80" fill="none" stroke={RED} strokeWidth={2.5} strokeDasharray="6 4" className="fig-flow" markerEnd="url(#fig-arrow)" />
      <Txt x={480} y={104} size={10.5} bold color={RED}>CTP : rétro-inhibition</Txt>
      {[["État T (tendu)", "faible affinité — CTP fixé", C.red, 70, 168], ["État R (relâché)", "forte affinité — substrats / ATP", C.green, 250, 168]].map(([t, s, c, x, y]) => (
        <g key={String(t)} transform={`translate(${x} ${y})`}>
          <rect x={0} y={0} width={150} height={140} rx={10} fill={String(c)} fillOpacity={0.08} stroke={String(c)} strokeWidth={2} />
          <Txt x={75} y={20} bold size={11.5} color={String(c)}>{String(t)}</Txt>
          {[[38, 62], [112, 62], [38, 108], [112, 108]].map(([px, py], k) => <circle key={k} cx={px} cy={py} r={t === "État R (relâché)" ? 22 : 17} fill={String(c)} fillOpacity={0.35} stroke={String(c)} strokeWidth={2.5} />)}
          <circle cx={75} cy={85} r={8} fill={t === "État R (relâché)" ? C.amber : C.pink} className="fig-pulse" />
          <Txt x={75} y={134} size={9.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      {arrow("M224,224 L246,224")}{arrow("M246,238 L224,238")}
      <Axes x={460} y={130} w={250} h={100} xl="[Asp]" yl="vitesse" />
      <path d={fnPath(hill(4, 2.6), 0, 10, 60, X, (v) => Y(v) - 4)} fill="none" stroke={C.blue} strokeWidth={3.5} transform="translate(0 0)" />
      <path d={fnPath(hill(2.4, 2.2, 1), 0, 10, 60, X, (v) => Y(v) - 4)} fill="none" stroke={C.green} strokeWidth={3} strokeDasharray="6 3" />
      <path d={fnPath(hill(7, 3, 1), 0, 10, 60, X, (v) => Y(v) - 4)} fill="none" stroke={C.red} strokeWidth={3} strokeDasharray="6 3" />
      <Txt x={468} y={150} anchor="start" size={10} bold color="#2a7a55">+ ATP (activateur)</Txt>
      <Txt x={640} y={210} size={10} bold color={RED} anchor="start">+ CTP</Txt><Txt x={580} y={176} size={10} bold color={C.blue} anchor="start">seule</Txt>
      <Txt x={370} y={368} size={11} bold>coopérativité : sigmoïde ; effecteurs positif (ATP) et négatif (CTP) déplacent l'équilibre T ⇌ R</Txt>
      <Txt x={370} y={388} size={10} color={C.grey}>site catalytique (substrats) et site régulateur (ATP, CTP) sur des sous-unités différentes</Txt>
    </Figure>
  );
}

// ─── 9. Modification covalente réversible ────────────────────────────────
export function CovalentModificationDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Régulation par phosphorylation réversible" caption="Une protéine kinase phosphoryle un résidu Ser, Thr ou Tyr (ATP → ADP) ; une phosphatase l'hydrolyse : l'enzyme passe de l'état inactif à l'état actif (ou l'inverse)">
      <Seq i={0} n={2}>
        <g transform="translate(60 130)">
          <path d="M0,60 Q0,0 70,0 Q140,0 140,60 Q140,110 70,110 Q0,110 0,60z" fill={C.grey} fillOpacity={0.25} stroke={C.grey} strokeWidth={3} />
          <path d="M60,4 L60,40 L86,40 L86,4" fill="#fff" fillOpacity={0.9} stroke={C.grey} strokeWidth={2} />
          <Txt x={70} y={70} bold size={12}>Enzyme</Txt><Txt x={70} y={88} size={10.5} bold color={C.grey}>inactive</Txt>
          <Txt x={70} y={130} size={10.5}>Ser–OH</Txt>
        </g>
      </Seq>
      <Seq i={1} n={2}>
        <g transform="translate(540 130)">
          <path d="M0,60 Q0,0 70,0 Q140,0 140,60 Q140,110 70,110 Q0,110 0,60z" fill={C.green} fillOpacity={0.3} stroke={C.green} strokeWidth={3} />
          <path d="M60,4 L60,60 L86,60 L86,4" fill={C.amber} fillOpacity={0.6} stroke={DEEP.green} strokeWidth={2} />
          <Txt x={70} y={80} bold size={12}>Enzyme</Txt><Txt x={70} y={98} size={10.5} bold color="#2a7a55">active</Txt>
          <circle cx={150} cy={30} r={15} fill={C.red} /><Txt x={150} y={34} bold size={11} color="#fff">P</Txt>
          <Txt x={70} y={130} size={10.5}>Ser–O–P</Txt>
        </g>
      </Seq>
      {arrow("M214,180 C280,150 360,150 424,180")}
      <Txt x={320} y={128} bold size={12} color={C.blue}>Protéine kinase</Txt>
      <Dot path="M300,80 C310,110 340,130 380,150" dur={4} r={9} color={C.amber} label="ATP" />
      <Dot path="M380,150 C440,120 480,100 500,80" dur={4} delay={2} r={9} color={C.grey} label="ADP" />
      {arrow("M424,230 C360,270 280,270 214,230")}
      <Txt x={320} y={284} bold size={12} color={RED}>Phosphatase</Txt>
      <Dot path="M300,330 L320,270 L340,250" dur={4} delay={1} r={9} color={C.blue} label="H₂O" />
      <Dot path="M214,230 L300,300 L360,340" dur={4} delay={3} r={9} color={C.red} label="Pi" />
      <rect x={40} y={334} width={660} height={56} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={200} y={356} bold size={11.5}>ATP → ADP : phosphorylation</Txt><Txt x={200} y={374} size={10} color={C.grey}>ajoute une charge négative (2 −)</Txt>
      <Txt x={520} y={356} bold size={11.5}>Ex. glycogène phosphorylase</Txt><Txt x={520} y={374} size={10} color={C.grey}>activée par phosphorylation (glucagon, adrénaline)</Txt>
      <Txt x={370} y={26} bold size={13}>Cycle de phosphorylation-déphosphorylation</Txt>
      <Txt x={370} y={44} size={10.5} color={C.grey}>rapide, réversible, amplifié (cascade) — chaque enzyme active en active de nombreuses autres</Txt>
    </Figure>
  );
}

// ─── 10. Activation par clivage protéolytique ────────────────────────────
export function ZymogenDiagram() {
  const cut = (x: number, y: number) => <Txt x={x} y={y} bold size={16} color={RED}>✂</Txt>;
  return (
    <Figure viewBox="0 0 740 420" title="Activation des zymogènes par clivage protéolytique" caption="Les enzymes digestives sont sécrétées inactives (zymogènes) puis activées par un clivage spécifique dans le duodénum ; la cascade de la coagulation fonctionne sur le même principe">
      <Txt x={180} y={24} bold size={13}>Pancréas</Txt><Txt x={180} y={40} size={10} color={C.grey}>zymogènes inactifs (protection de la glande)</Txt>
      <line x1={366} y1={30} x2={366} y2={240} stroke="currentColor" strokeOpacity={0.3} strokeDasharray="5 5" />
      <Txt x={540} y={24} bold size={13}>Lumière duodénale</Txt><Txt x={540} y={40} size={10} color={C.grey}>activation par clivage</Txt>
      {box(30, 60, 170, 44, "Trypsinogène", "inactif", C.grey, 12)}
      {arrow("M204,82 L420,82")}
      <Txt x={312} y={72} size={10.5} bold color={RED}>entéropeptidase</Txt>{cut(392, 96)}
      {box(430, 60, 150, 44, "Trypsine", "active", C.green, 12)}
      <path d="M505,104 C505,150 300,150 205,108" fill="none" stroke={C.green} strokeWidth={2} strokeDasharray="4 3" className="fig-flow" markerEnd="url(#fig-arrow)" />
      <Txt x={420} y={150} size={9.5} bold color="#2a7a55">autocatalyse (amplification)</Txt>
      {box(30, 176, 170, 44, "Chymotrypsinogène", "inactif", C.grey, 12)}
      {arrow("M204,198 L420,198")}
      <Txt x={312} y={188} size={10.5} bold color={RED}>trypsine (coupe Arg15–Ile16)</Txt>{cut(392, 212)}
      {box(430, 176, 150, 44, "π-chymotrypsine", "active", C.green, 12)}
      {arrow("M584,198 L630,198")}
      {box(634, 176, 96, 44, "α-chymotrypsine", "forme stable", C.green, 10.5)}
      <line x1={20} y1={250} x2={720} y2={250} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={274} bold size={12.5}>Même principe : la cascade de la coagulation</Txt>
      {[["XII", "XIIa"], ["XI", "XIa"], ["IX", "IXa"], ["X", "Xa"], ["II", "IIa (thrombine)"], ["I", "Ia (fibrine)"]].map(([a, b], i) => (
        <g key={a} transform={`translate(${28 + i * 116} 292)`}>
          <rect x={0} y={0} width={44} height={30} rx={6} fill={C.grey} fillOpacity={0.2} stroke={C.grey} />
          <Txt x={22} y={20} bold size={11}>{a}</Txt>
          {arrow("M48,15 L66,15")}
          <rect x={70} y={0} width={i > 3 ? 40 : 40} height={30} rx={6} fill={C.green} fillOpacity={0.3} stroke={C.green} strokeWidth={2} />
          <Txt x={90} y={20} bold size={i > 3 ? 8 : 10.5}>{i > 3 ? b.split(" ")[0] : b}</Txt>
        </g>
      ))}
      <Txt x={370} y={352} size={10.5} bold>clivage protéolytique irréversible : chaque enzyme activée en active plusieurs autres</Txt>
      <Txt x={370} y={372} size={10.5} color={C.grey}>rôle : éviter l'activité destructrice dans la cellule qui les fabrique, déclenchement rapide au bon endroit</Txt>
      <Txt x={370} y={392} size={10} color={C.grey}>autres exemples : pepsinogène → pepsine, procaspases, proinsuline → insuline</Txt>
    </Figure>
  );
}
