import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Ax, Card, dash } from "./PhysCardio";
import { Box, arrow } from "./PhysRespEndo";

// Biochimie S1 — enzymes, glucides, protéines : schémas des sous-parties.

// ─── Enzymes §2 : thermodynamique ────────────────────────────────────────
export function GibbsDiagram() {
  const prof = (x0: number, yA: number, yB: number, yTS: number, yEnz: number, label: string, c: string) => (
    <g>
      <Ax x={x0} y={250} w={290} h={200} xl="Coordonnée de réaction" yl="Énergie libre" />
      <path d={`M${x0 + 10},${yA} C${x0 + 60},${yA} ${x0 + 80},${yTS} ${x0 + 140},${yTS} C${x0 + 200},${yTS} ${x0 + 220},${yB} ${x0 + 280},${yB}`} fill="none" stroke={c} strokeWidth={3.2} />
      <path d={`M${x0 + 10},${yA} C${x0 + 60},${yA} ${x0 + 80},${yEnz} ${x0 + 140},${yEnz} C${x0 + 200},${yEnz} ${x0 + 220},${yB} ${x0 + 280},${yB}`} fill="none" stroke={C.green} strokeWidth={2.4} strokeDasharray="7 4" />
      <line x1={x0 + 10} y1={yA} x2={x0 + 60} y2={yA} {...dash} /><line x1={x0 + 230} y1={yB} x2={x0 + 290} y2={yB} {...dash} />
      <path d={`M${x0 + 262},${yA} L${x0 + 262},${yB}`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Txt x={x0 + 270} y={(yA + yB) / 2 + 4} anchor="start" bold size={11} color={c}>ΔG</Txt>
      <Txt x={x0 + 36} y={yA - 8} anchor="start" size={10} bold>A + B</Txt><Txt x={x0 + 230} y={yB + 16} anchor="start" size={10} bold>C + D</Txt>
      <Txt x={x0 + 140} y={yTS - 8} size={9.5} color={C.grey}>état de transition</Txt>
      <Txt x={x0 + 140} y={yEnz + 16} size={9.5} bold color={DEEP.green}>avec enzyme</Txt>
      <Txt x={x0 + 145} y={22} bold size={12} color={c}>{label}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Thermodynamique enzymatique : spontanéité et vitesse" caption="Le ΔG dit si une réaction est spontanée, jamais à quelle vitesse ; l'enzyme abaisse la barrière d'activation mais ne change ni le ΔG ni l'équilibre">
      {prof(58, 90, 200, 50, 130, "ΔG < 0 : exergonique (spontanée)", DEEP.red)}
      {prof(426, 200, 100, 60, 140, "ΔG > 0 : endergonique", DEEP.blue)}
      <Card x={40} y={286} w={330} h={84} color={DEEP.violet} title="ΔG = ΔG°′ + RT·ln([C][D] / [A][B])" lines={["ΔG°′ : énergie libre standard à pH 7", "à l'équilibre : ΔG°′ = −RT·ln K′eq", "K′eq grand ⇒ très exergonique · petit ⇒ très endergonique"]} />
      <Card x={380} y={286} w={320} h={84} color={DEEP.green} title="Le ΔG réel dépend des concentrations" lines={["DHAP ↔ GAP : endergonique en standard,", "exergonique in vivo si [DHAP] est élevée"]} />
      <Card x={40} y={382} w={660} h={70} color={DEEP.amber} title="Ce que fait l'enzyme" lines={["↓ énergie d'activation → ↑ vitesse pour atteindre l'équilibre", "ne modifie ni ΔG global ni la constante d'équilibre K′eq"]} />
    </Figure>
  );
}

// ─── Enzymes §6 : réactions à plusieurs substrats ────────────────────────
export function MultiSubstrateDiagram() {
  const line = (x1: number, x2: number, y: number) => <line x1={x1} y1={y} x2={x2} y2={y} stroke="currentColor" strokeWidth={2.4} />;
  const inn = (x: number, y: number, t: string, c: string) => (<g><path d={`M${x},${y - 34} L${x},${y - 4}`} stroke={c} strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><Txt x={x} y={y - 40} bold size={11} color={c}>{t}</Txt></g>);
  const out = (x: number, y: number, t: string, c: string) => (<g><path d={`M${x},${y + 4} L${x},${y + 34}`} stroke={c} strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><Txt x={x} y={y + 50} bold size={11} color={c}>{t}</Txt></g>);
  return (
    <Figure viewBox="0 0 740 470" title="Réactions à plusieurs substrats : séquentielles et ping-pong" caption="Séquentielle : les deux substrats se lient avant que le premier produit parte (complexe ternaire), en ordre fixe (lactate déshydrogénase) ou aléatoire (créatine kinase) ; ping-pong (double déplacement) : un produit part avant la fixation du 2e substrat, via une enzyme substituée (transaminases)">
      <Txt x={20} y={24} anchor="start" bold size={12} color={DEEP.blue}>1. Séquentielle ordonnée</Txt><Txt x={20} y={38} anchor="start" size={9.5} color={C.grey}>ex. lactate déshydrogénase (NADH puis pyruvate)</Txt>
      {line(60, 700, 100)}
      {inn(150, 100, "A", C.blue)}{inn(280, 100, "B", C.green)}{out(420, 100, "P", C.amber)}{out(580, 100, "Q", C.red)}
      {["E", "EA", "EAB ⇌ EPQ", "EQ", "E"].map((t, i) => <Txt key={i} x={[90, 215, 350, 500, 660][i]} y={92} bold size={11}>{t}</Txt>)}
      <Txt x={350} y={128} size={9.5} color={C.grey}>complexe ternaire</Txt>
      <Txt x={20} y={196} anchor="start" bold size={12} color={DEEP.green}>2. Séquentielle aléatoire</Txt><Txt x={20} y={210} anchor="start" size={9.5} color={C.grey}>ex. créatine kinase (ordre de fixation indifférent)</Txt>
      <rect x={110} y={222} width={520} height={70} rx={10} fill={C.green} fillOpacity={0.08} stroke={C.green} strokeWidth={1.8} />
      <Txt x={160} y={262} bold size={11}>E</Txt><path d="M176,258 L226,240" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><path d="M176,262 L226,282" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Txt x={250} y={244} bold size={11}>EA</Txt><Txt x={250} y={290} bold size={11}>EB</Txt>
      <path d="M270,244 L330,260" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><path d="M270,286 L330,270" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Txt x={380} y={268} bold size={11}>EAB ⇌ EPQ</Txt><path d="M426,264 L500,264" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><Txt x={560} y={268} bold size={11}>E + P + Q</Txt>
      <Txt x={20} y={330} anchor="start" bold size={12} color={DEEP.red}>3. Double déplacement (ping-pong)</Txt><Txt x={20} y={344} anchor="start" size={9.5} color={C.grey}>ex. transamination Asp / α-cétoglutarate : pas de complexe ternaire</Txt>
      {line(60, 700, 400)}
      {inn(150, 400, "A", C.blue)}{out(250, 400, "P", C.amber)}{inn(400, 400, "B", C.green)}{out(560, 400, "Q", C.red)}
      {["E", "EA ⇌ FP", "F (enzyme substituée)", "FB ⇌ EQ", "E"].map((t, i) => <Txt key={i} x={[90, 200, 330, 480, 660][i]} y={392} bold size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Enzymes §5 : anhydrase carbonique ───────────────────────────────────
export function CarbonicAnhydraseDiagram() {
  const step = (x: number, y: number, n: number, t: string, s: string, c: string) => (
    <g>
      <rect x={x} y={y} width={230} height={92} rx={12} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={2} />
      <circle cx={x + 22} cy={y + 24} r={11} fill={c} /><Txt x={x + 22} y={y + 28} bold size={11} color="#fff">{n}</Txt>
      <Txt x={x + 42} y={y + 28} anchor="start" bold size={11}>{t}</Txt>
      <Txt x={x + 16} y={y + 52} anchor="start" size={10} color={C.grey}>{s.split("|")[0]}</Txt>
      <Txt x={x + 16} y={y + 68} anchor="start" size={10} color={C.grey}>{s.split("|")[1] ?? ""}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 450" title="L'anhydrase carbonique : le zinc active l'eau" caption="CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺ : le Zn²⁺, lié à 3 histidines (His94, His96, His119) et à une molécule d'eau, abaisse le pKa de l'eau de ≈ 15,7 à ≈ 7 et génère l'ion OH⁻, nucléophile puissant ; pH optimal ≈ 8">
      <circle cx={370} cy={190} r={54} fill={C.violet} fillOpacity={0.14} stroke={C.violet} strokeWidth={2.4} />
      <Txt x={370} y={182} bold size={16} color={DEEP.violet}>Zn²⁺</Txt><Txt x={370} y={200} size={10} color={C.grey}>3 histidines</Txt><Txt x={370} y={214} size={10} color={C.grey}>+ H₂O / OH⁻</Txt>
      {step(20, 40, 1, "Le Zn²⁺ ionise l'eau", "Zn–OH₂ → Zn–OH⁻ + H⁺|(pKa de l'eau ≈ 7)", C.blue)}
      {step(490, 40, 2, "Le CO₂ se fixe", "CO₂ entre dans la poche|hydrophobe du site actif", C.green)}
      {step(490, 250, 3, "Attaque nucléophile", "OH⁻ attaque le CO₂|→ HCO₃⁻ lié au zinc", C.amber)}
      {step(20, 250, 4, "Site régénéré", "H₂O déplace HCO₃⁻|→ enzyme prête pour un cycle", C.red)}
      {arrow("M250,88 L300,150")}{arrow("M440,150 L490,88")}{arrow("M600,134 L600,248")}{arrow("M490,296 L250,296")}
      <Txt x={370} y={352} bold size={11}>Physiologie</Txt>
      <Txt x={370} y={370} size={10} color={C.grey}>poumons : réaction inversée (exhalation du CO₂) · œil : humeur aqueuse</Txt>
      <Txt x={370} y={386} size={10} color={C.grey}>déficit : ostéopétrose, déficit intellectuel · première enzyme à zinc découverte</Txt>
    </Figure>
  );
}

// ─── Enzymes §7 : myosine ────────────────────────────────────────────────
export function MyosinCycleDiagram() {
  const node = (x: number, y: number, t: string, s: string, c: string) => (
    <g>
      <rect x={x} y={y} width={200} height={78} rx={12} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={2} />
      <Txt x={x + 100} y={y + 30} bold size={11.5}>{t}</Txt><Txt x={x + 100} y={y + 50} size={10} color={C.grey}>{s}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 440" title="Les myosines : l'hydrolyse de l'ATP produit du mouvement" caption="ATP + H₂O ⇌ ADP + Pi (l'ATP doit être lié à Mg²⁺) ; sans ATP la myosine reste immobile sur l'actine, avec ATP elle avance par pas d'environ 74 nm ; la structure en boucle P est partagée par toute une famille de NTPases">
      {node(270, 30, "Myosine liée à l'actine", "état sans nucléotide (rigor)", C.grey)}
      {node(500, 150, "① ATP se fixe", "myosine se détache de l'actine", C.blue)}
      {node(500, 290, "② Hydrolyse", "ATP → ADP·Pi, tête « armée »", C.amber)}
      {node(270, 350, "③ Fixation + Pi libéré", "tête se rattache à l'actine", C.green)}
      {node(40, 220, "④ Coup de force", "libère ADP : déplacement de l'actine", C.red)}
      {arrow("M470,68 L560,146")}{arrow("M600,230 L600,286")}{arrow("M500,340 L474,372")}{arrow("M270,382 L180,300")}{arrow("M140,218 L290,106")}
      <Card x={30} y={30} w={200} h={100} color={DEEP.violet} title="À retenir" lines={["Mg²⁺ (ou Mn²⁺) est requis", "boucle P : feuillet β central", "+ hélices α (NTPases)", "pas ≈ 74 nm par ATP"]} />
    </Figure>
  );
}

// ─── Enzymes : protéine kinase A ─────────────────────────────────────────
export function PKADiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Activation de la protéine kinase A (PKA) par l'AMPc" caption="PKA inactive = R₂C₂ : un pseudo-substrat de R bloque le site actif de C ; 4 AMPc se lient aux sous-unités R, qui libèrent 2 sous-unités catalytiques actives ; une mutation qui rend C insensible à R active PKA en permanence (syndrome de Cushing)">
      <Box x={20} y={20} w={150} h={46} t="Adrénaline" s="« combat ou fuite »" c={C.red} size={11.5} />
      {arrow("M170,43 L200,43")}
      <Box x={202} y={20} w={150} h={46} t="Récepteur β" s="protéine G" c={C.blue} size={11.5} />
      {arrow("M352,43 L382,43")}
      <Box x={384} y={20} w={150} h={46} t="Adénylate cyclase" s="ATP → AMPc" c={C.green} size={11.5} />
      {arrow("M534,43 L564,43")}
      <Box x={566} y={20} w={154} h={46} t="AMPc ↑" s="second messager" c={C.amber} size={12} />
      {/* R2C2 */}
      <rect x={60} y={120} width={250} height={130} rx={16} fill={C.grey} fillOpacity={0.12} stroke={C.grey} strokeWidth={2.2} />
      {[0, 1].map((i) => (<g key={i}><rect x={80 + i * 116} y={140} width={94} height={44} rx={10} fill={C.violet} fillOpacity={0.45} stroke={C.violet} strokeWidth={2} /><Txt x={127 + i * 116} y={168} bold size={12}>R</Txt><rect x={80 + i * 116} y={190} width={94} height={44} rx={10} fill={C.blue} fillOpacity={0.35} stroke={C.blue} strokeWidth={2} /><Txt x={127 + i * 116} y={218} bold size={12}>C</Txt></g>))}
      <Txt x={185} y={112} bold size={11.5}>PKA inactive : R₂C₂</Txt>
      <Txt x={185} y={268} size={9.5} color={C.grey}>pseudo-substrat de R dans le site actif de C</Txt>
      {arrow("M312,185 L410,185")}
      <Txt x={360} y={176} bold size={10.5} color={DEEP.amber}>+ 4 AMPc</Txt>
      <rect x={420} y={120} width={130} height={130} rx={16} fill={C.violet} fillOpacity={0.12} stroke={C.violet} strokeWidth={2} />
      <rect x={436} y={148} width={98} height={40} rx={10} fill={C.violet} fillOpacity={0.45} stroke={C.violet} strokeWidth={2} /><Txt x={485} y={173} bold size={11}>R₂(AMPc)₄</Txt>
      <Txt x={485} y={112} bold size={11.5}>R libérées</Txt>
      {[0, 1].map((i) => (<g key={i}><rect x={580 + i * 74 - 30} y={140} width={66} height={44} rx={10} fill={C.blue} fillOpacity={0.6} stroke={C.blue} strokeWidth={2.4} /><Txt x={583 + i * 74} y={168} bold size={12}>C</Txt></g>))}
      <Txt x={640} y={112} bold size={11.5} color={DEEP.blue}>2 C actives</Txt>
      {arrow("M640,190 L640,254")}
      <Box x={520} y={256} w={200} h={54} t="Phosphoryle Ser / Thr" s="des protéines cibles (+ ATP)" c={C.green} size={11.5} />
      <Card x={30} y={310} w={330} h={124} color={DEEP.red} title="Importance clinique" lines={["C ne se liant plus à R : PKA constitutivement active", "→ syndrome de Cushing (cortisol incontrôlé)", "phosphoprotéomique : l'exercice modifie > 1 000 sites", "sur ≈ 600 protéines (PKA, AMPK…)"]} />
      <Card x={380} y={310} w={340} h={124} color={DEEP.green} title="Régulation par phosphorylation réversible" lines={["kinase : ajoute un phosphate (ATP → ADP)", "phosphatase : le retire (hydrolyse)", "→ interrupteur marche / arrêt rapide", "et réversible d'une activité enzymatique"]} />
    </Figure>
  );
}

// ─── Enzymes : classes de protéases ──────────────────────────────────────
export function ProteaseClassesDiagram() {
  const cls: [string, string, string, string, string][] = [
    ["Sérine protéase", "Ser–OH activée par His (triade Ser-His-Asp)", "chymotrypsine, trypsine, élastase", C.blue, "Ser"],
    ["Cystéine protéase", "Cys–SH activée par une histidine", "papaïne", C.green, "Cys"],
    ["Protéase aspartique", "H₂O activée par un aspartate", "rénine", C.amber, "H₂O"],
    ["Métalloprotéase", "H₂O activée par un métal (souvent Zn²⁺)", "thermolysine, carboxypeptidase", C.violet, "Zn²⁺"],
  ];
  return (
    <Figure viewBox="0 0 740 420" title="Les protéases : quel nucléophile est activé ?" caption="Hydrolyser une liaison peptidique est difficile ; chaque classe active un nucléophile différent : hydroxyle de sérine, thiol de cystéine, ou molécule d'eau activée par un aspartate ou un métal">
      {cls.map(([n, m, e, c, s], i) => {
        const x = 20 + (i % 2) * 360, y = 20 + Math.floor(i / 2) * 190;
        return (
          <g key={n}>
            <rect x={x} y={y} width={340} height={170} rx={14} fill={c} fillOpacity={0.1} stroke={c} strokeWidth={2} />
            <Txt x={x + 170} y={y + 26} bold size={13}>{n}</Txt>
            <circle cx={x + 70} cy={y + 96} r={34} fill={c} fillOpacity={0.35} stroke={c} strokeWidth={2.4} /><Txt x={x + 70} y={y + 101} bold size={14}>{s}</Txt>
            <path d={`M${x + 106},${y + 96} L${x + 150},${y + 96}`} stroke="currentColor" strokeWidth={2.4} markerEnd="url(#fig-arrow)" />
            <Txt x={x + 158} y={y + 90} anchor="start" size={10.5} bold>attaque C=O</Txt><Txt x={x + 158} y={y + 104} anchor="start" size={10.5} bold>du peptide</Txt>
            <Txt x={x + 170} y={y + 138} size={10} color={C.grey}>{m}</Txt>
            <Txt x={x + 170} y={y + 156} size={10} bold color={c}>ex. {e}</Txt>
          </g>
        );
      })}
    </Figure>
  );
}

// ─── Enzymes : cascade pancréatique ──────────────────────────────────────
export function PancreaticCascadeDiagram() {
  const z: [string, string][] = [["Chymotrypsinogène", "Chymotrypsine"], ["Proélastase", "Élastase"], ["Procarboxypeptidase", "Carboxypeptidase"], ["Prolipase", "Lipase"]];
  return (
    <Figure viewBox="0 0 740 500" title="Cascade d'activation des zymogènes pancréatiques" caption="L'entéropeptidase de la bordure intestinale active le trypsinogène ; la trypsine active alors tous les autres zymogènes (et s'auto-active) ; l'inhibiteur pancréatique de la trypsine protège le pancréas contre l'auto-digestion, l'α1-antitrypsine protège les poumons contre l'élastase">
      <Box x={20} y={20} w={200} h={54} t="Entéropeptidase" s="intestin (duodénum)" c={C.green} size={12} />
      {arrow("M120,76 L120,120")}
      <Box x={20} y={122} w={200} h={54} t="Trypsinogène" s="inactif (pancréas)" c={C.grey} size={12} />
      {arrow("M120,178 L120,220")}
      <Box x={20} y={222} w={200} h={54} t="TRYPSINE" s="active · auto-activation" c={C.red} size={13} />
      <path d="M232,249 C260,180 250,120 232,150" fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#fig-arrow)" />
      {z.map(([a, b], i) => (
        <g key={a}>
          <Box x={300} y={40 + i * 86} w={170} h={50} t={a} c={C.grey} size={11} />
          {arrow(`M472,${65 + i * 86} L510,${65 + i * 86}`)}
          <Box x={512} y={40 + i * 86} w={200} h={50} t={b} c={C.blue} size={12} />
          <path d={`M222,249 L298,${65 + i * 86}`} stroke={C.red} strokeWidth={1.8} fill="none" markerEnd="url(#fig-arrow)" />
        </g>
      ))}
      <Card x={20} y={366} w={340} h={124} color={DEEP.red} title="Pancréatite aiguë" lines={["trypsine activée trop tôt dans le pancréas", "→ cascade prématurée, auto-digestion", "protection : inhibiteur pancréatique de la trypsine", "(se lie très fortement à la trypsine active)"]} />
      <Card x={380} y={366} w={340} h={124} color={DEEP.blue} title="α1-antitrypsine et emphysème" lines={["protège les poumons de l'élastase", "déficit génétique → emphysème", "tabac : oxyde une méthionine essentielle", "→ inactive l'inhibiteur, aggrave le risque"]} />
    </Figure>
  );
}

// ─── Glucides §2 : sucres réducteurs ─────────────────────────────────────
export function ReducingSugarsDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Sucres réducteurs : mutarotation et test de Fehling/Benedict" caption="Un sucre dont le carbone anomérique est libre peut s'ouvrir (aldéhyde libre) et réduire Cu²⁺ en Cu₂O (bleu → précipité rouge brique) ; le saccharose, dont les deux carbones anomériques sont engagés dans la liaison, n'est pas réducteur">
      <Txt x={130} y={24} bold size={12}>Mutarotation du glucose</Txt>
      <path d="M40,90 L70,70 L100,90 L100,124 L70,144 L40,124 Z" fill={C.blue} fillOpacity={0.15} stroke={C.blue} strokeWidth={2.2} /><Txt x={70} y={112} bold size={10}>α</Txt><Txt x={70} y={166} size={10} bold>forme cyclique α</Txt>
      <path d="M164,66 L164,150" stroke={C.red} strokeWidth={3} /><Txt x={186} y={78} anchor="start" size={10.5} bold color={DEEP.red}>CHO libre</Txt><Txt x={164} y={166} size={10} bold>chaîne ouverte</Txt>
      <path d="M220,90 L250,70 L280,90 L280,124 L250,144 L220,124 Z" fill={C.green} fillOpacity={0.15} stroke={C.green} strokeWidth={2.2} /><Txt x={250} y={112} bold size={10}>β</Txt><Txt x={250} y={166} size={10} bold>forme cyclique β</Txt>
      <path d="M104,104 L156,104 M156,110 L104,110" stroke="currentColor" strokeWidth={1.8} markerEnd="url(#fig-arrow)" /><path d="M172,104 L214,104 M214,110 L172,110" stroke="currentColor" strokeWidth={1.8} markerEnd="url(#fig-arrow)" />
      <Txt x={164} y={196} size={10} color={C.grey}>seule la forme ouverte réduit l'oxydant</Txt>
      <Txt x={510} y={24} bold size={12}>Test de Fehling / Benedict</Txt>
      <rect x={370} y={44} width={110} height={130} rx={10} fill={C.blue} fillOpacity={0.4} stroke={C.blue} strokeWidth={2.4} /><Txt x={425} y={118} bold size={12}>Cu²⁺</Txt><Txt x={425} y={136} size={10} color={C.grey}>bleu</Txt>
      {arrow("M486,110 L560,110")}<Txt x={523} y={100} size={10} bold color={DEEP.red}>+ sucre réducteur</Txt>
      <rect x={568} y={44} width={110} height={130} rx={10} fill={C.red} fillOpacity={0.55} stroke={C.red} strokeWidth={2.4} /><Txt x={623} y={112} bold size={12}>Cu₂O ↓</Txt><Txt x={623} y={130} size={10} color={C.grey}>rouge brique</Txt>
      <Card x={20} y={240} w={350} h={112} color={DEEP.green} title="Sucres réducteurs (C anomérique libre)" lines={["glucose", "maltose (α1→4 : un anomère reste libre)", "lactose (β1→4 : un anomère reste libre)"]} />
      <Card x={380} y={240} w={340} h={112} color={DEEP.red} title="Non réducteur" lines={["saccharose : glucose α1→β2 fructose", "les deux carbones anomériques sont engagés", "dans la liaison → aucune forme ouverte possible"]} />
      <path d="M20,376 L720,376" {...dash} />
      <Txt x={370} y={402} size={10.5} color={C.grey}>Cyclisation : le C1 (aldéhyde) réagit avec un hydroxyle du même sucre → hémiacétal cyclique (anomères α et β)</Txt>
    </Figure>
  );
}

// ─── Glucides §7 : seuil rénal du glucose ────────────────────────────────
export function RenalGlucoseDiagram() {
  const X = (g: number) => 90 + g * 100;
  const Y = (v: number) => 340 - v * 100;
  return (
    <Figure viewBox="0 0 740 470" title="Réabsorption rénale du glucose et seuil de glycosurie" caption="Le glucose filtré est normalement entièrement réabsorbé dans le tubule proximal ; au-delà du seuil rénal (≈ 1,80 g/L, soit ≈ 10 mmol/L) la capacité de réabsorption est dépassée et du glucose apparaît dans l'urine (glycosurie), comme dans le diabète non contrôlé">
      <Ax x={X(0)} y={Y(0)} w={480} h={Y(0) - 40} xl="Glycémie (g/L)" yl="Glucose (unités relatives)" />
      {[0, 1, 1.8, 3, 4].map((g) => <g key={g}><line x1={X(g)} y1={Y(0)} x2={X(g)} y2={Y(0) + 4} stroke="currentColor" /><Txt x={X(g)} y={Y(0) + 15} size={9.5}>{String(g).replace(".", ",")}</Txt></g>)}
      <line x1={X(1.8)} y1={Y(0)} x2={X(1.8)} y2={Y(2.8)} {...dash} /><Txt x={X(1.8)} y={Y(2.8) - 6} bold size={10.5} color={DEEP.red}>seuil rénal ≈ 1,8 g/L (10 mmol/L)</Txt>
      <path d={`M${X(0)},${Y(0)} L${X(4)},${Y(2.6)}`} fill="none" stroke={C.blue} strokeWidth={3} /><Txt x={X(4) + 6} y={Y(2.6)} anchor="start" bold size={10.5} color={DEEP.blue}>filtré</Txt>
      <path d={`M${X(0)},${Y(0)} L${X(1.8)},${Y(1.17)} L${X(4)},${Y(1.17)}`} fill="none" stroke={C.green} strokeWidth={3} /><Txt x={X(4) + 6} y={Y(1.17) + 14} anchor="start" bold size={10.5} color={DEEP.green}>réabsorbé (plateau)</Txt>
      <path d={`M${X(1.8)},${Y(0)} L${X(4)},${Y(1.43)}`} fill="none" stroke={C.red} strokeWidth={3} strokeDasharray="8 4" /><Txt x={X(4) + 6} y={Y(1.43) - 4} anchor="start" bold size={10.5} color={DEEP.red}>excrété</Txt>
      <Card x={30} y={392} w={330} h={66} color={DEEP.green} title="Glycémie normale : glycosurie nulle" lines={["tout le glucose filtré est réabsorbé (tubule proximal)"]} />
      <Card x={370} y={392} w={340} h={66} color={DEEP.red} title="Diabète non contrôlé" lines={["capacité de réabsorption dépassée → glycosurie"]} />
    </Figure>
  );
}

// ─── Protéines §4 : glutathion ───────────────────────────────────────────
export function GlutathioneDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Le glutathion : un tripeptide antioxydant recyclé par le NADPH" caption="Le glutathion (γ-Glu–Cys–Gly) est oxydé en GSSG par la glutathion peroxydase (qui réduit le peroxyde), puis régénéré par la glutathion réductase grâce au NADPH issu de la voie des pentoses phosphates">
      {[["γ-Glu", C.blue], ["Cys", C.amber], ["Gly", C.green]].map(([t, c], i) => (<g key={String(t)}><rect x={20 + i * 96} y={30} width={86} height={44} rx={10} fill={String(c)} fillOpacity={0.3} stroke={String(c)} strokeWidth={2} /><Txt x={63 + i * 96} y={58} bold size={12}>{String(t)}</Txt></g>))}
      <Txt x={150} y={22} bold size={11.5}>GSH : γ-Glu–Cys–Gly (SH sur la cystéine)</Txt>
      <Box x={40} y={150} w={160} h={54} t="2 GSH" s="forme réduite" c={C.green} size={13} />
      <Box x={330} y={150} w={160} h={54} t="GSSG" s="pont disulfure" c={C.red} size={13} />
      <path d="M204,168 C240,140 290,140 326,168" fill="none" stroke="currentColor" strokeWidth={2.4} markerEnd="url(#fig-arrow)" />
      <Txt x={265} y={130} bold size={10.5} color={DEEP.red}>glutathion peroxydase</Txt>
      <Txt x={265} y={116} size={10} color={C.grey}>H₂O₂ → 2 H₂O</Txt>
      <path d="M326,190 C290,222 240,222 204,190" fill="none" stroke="currentColor" strokeWidth={2.4} markerEnd="url(#fig-arrow)" />
      <Txt x={265} y={236} bold size={10.5} color={DEEP.green}>glutathion réductase</Txt>
      <Box x={330} y={264} w={160} h={44} t="NADPH → NADP⁺" c={C.violet} size={11.5} />
      <path d="M410,264 L290,226" stroke={C.violet} strokeWidth={2} fill="none" strokeDasharray="5 4" />
      <Box x={330} y={340} w={200} h={50} t="Voie des pentoses phosphates" s="phase oxydative (G6PD)" c={C.amber} size={11} />
      {arrow("M430,338 L430,310")}
      <Card x={540} y={20} w={180} h={116} color={DEEP.blue} title="Hormones peptidiques" lines={["ocytocine : 9 acides aminés", "vasopressine : 9 acides aminés", "→ notion de peptide biologique"]} />
      <Card x={560} y={264} w={160} h={90} color={DEEP.red} title="Déficit en G6PD" lines={["↓ NADPH → ↓ GSH", "hémolyse oxydative"]} />
    </Figure>
  );
}

// ─── Protéines §4 : expérience d'Anfinsen ────────────────────────────────
export function AnfinsenDiagram() {
  const blob = (cx: number, cy: number, coil: boolean, c: string) => (
    <g>
      {coil ? (
        <path d={`M${cx - 50},${cy} C${cx - 40},${cy - 40} ${cx - 20},${cy + 40} ${cx - 10},${cy - 30} C${cx},${cy - 50} ${cx + 10},${cy + 40} ${cx + 24},${cy - 20} C${cx + 34},${cy - 40} ${cx + 44},${cy + 30} ${cx + 54},${cy}`} fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" />
      ) : (
        <g>
          <path d={`M${cx - 44},${cy + 10} C${cx - 44},${cy - 44} ${cx + 44},${cy - 44} ${cx + 44},${cy + 10} C${cx + 44},${cy + 40} ${cx - 44},${cy + 40} ${cx - 44},${cy + 10} Z`} fill={c} fillOpacity={0.3} stroke={c} strokeWidth={2.6} />
          <path d={`M${cx - 22},${cy - 8} C${cx - 8},${cy - 26} ${cx + 8},${cy + 10} ${cx + 22},${cy - 4}`} fill="none" stroke={c} strokeWidth={3} />
          <path d={`M${cx - 20},${cy - 6} L${cx + 20},${cy + 14}`} stroke="#f59e0b" strokeWidth={3} />
        </g>
      )}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 420" title="L'expérience d'Anfinsen sur la ribonucléase" caption="L'urée détruit les interactions non covalentes et le β-mercaptoéthanol réduit les ponts disulfure ; après retrait contrôlé des réactifs, la ribonucléase retrouve sa structure et son activité : la séquence primaire contient l'information du repliement et la forme native est la plus stable">
      {blob(110, 110, false, C.green)}<Txt x={110} y={190} bold size={12} color={DEEP.green}>Ribonucléase native</Txt><Txt x={110} y={206} size={10} color={C.grey}>active · ponts disulfure intacts</Txt>
      {arrow("M180,110 L280,110")}
      <Txt x={230} y={92} bold size={10.5} color={DEEP.red}>+ urée</Txt><Txt x={230} y={106} bold size={10.5} color={DEEP.red}>+ β-mercaptoéthanol</Txt>
      {blob(370, 110, true, C.red)}<Txt x={370} y={190} bold size={12} color={DEEP.red}>Pelote dénaturée</Txt><Txt x={370} y={206} size={10} color={C.grey}>inactive · désordonnée</Txt>
      {arrow("M440,110 L540,110")}
      <Txt x={490} y={92} bold size={10.5} color={DEEP.blue}>retrait des réactifs</Txt><Txt x={490} y={106} bold size={10.5} color={DEEP.blue}>(contrôlé)</Txt>
      {blob(630, 110, false, C.green)}<Txt x={630} y={190} bold size={12} color={DEEP.green}>Repliement spontané</Txt><Txt x={630} y={206} size={10} color={C.grey}>activité retrouvée</Txt>
      <Card x={30} y={250} w={210} h={90} color={DEEP.red} title="Urée" lines={["détruit les interactions", "non covalentes"]} />
      <Card x={265} y={250} w={210} h={90} color={DEEP.amber} title="β-mercaptoéthanol" lines={["réduit les ponts", "disulfure (S–S → 2 SH)"]} />
      <Card x={500} y={250} w={210} h={90} color={DEEP.green} title="Conclusion" lines={["la séquence primaire dicte", "le repliement (état le plus stable)"]} />
      <Txt x={370} y={372} size={10.5} color={C.grey}>Le mauvais repliement, lui, est à l'origine des amyloïdoses et des maladies à prions</Txt>
    </Figure>
  );
}

// ─── Protéines §6 : mauvais repliement ───────────────────────────────────
export function MisfoldingDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Mauvais repliement : prions et amyloïdoses" caption="Les amyloïdoses viennent d'agrégats riches en feuillets β ; dans les maladies à prions, un noyau de PrPSc recrute et convertit la PrP normale (PrPC, riche en hélices α) en une forme riche en feuillets β qui s'agrège">
      <Txt x={185} y={22} bold size={12} color={DEEP.blue}>Maladies à prions</Txt>
      <rect x={20} y={40} width={110} height={100} rx={16} fill={C.green} fillOpacity={0.15} stroke={C.green} strokeWidth={2.4} /><Txt x={75} y={84} bold size={12}>PrP<tspan baselineShift="sub" fontSize={8}>C</tspan></Txt><Txt x={75} y={102} size={10} color={C.grey}>normale</Txt><Txt x={75} y={116} size={10} color={C.grey}>hélices α</Txt>
      <path d="M46,150 C60,172 90,172 104,150" fill="none" stroke={C.green} strokeWidth={3} />
      <rect x={240} y={40} width={110} height={100} rx={6} fill={C.red} fillOpacity={0.2} stroke={C.red} strokeWidth={2.4} /><Txt x={295} y={84} bold size={12}>PrP<tspan baselineShift="sub" fontSize={8}>Sc</tspan></Txt><Txt x={295} y={102} size={10} color={C.grey}>anormale</Txt><Txt x={295} y={116} size={10} color={C.grey}>feuillets β</Txt>
      {arrow("M134,90 L236,90")}<Txt x={185} y={78} size={10} bold color={DEEP.red}>conversion</Txt><Txt x={185} y={108} size={9} color={C.grey}>recrutée par PrPSc</Txt>
      <path d="M295,144 C295,170 150,170 76,148" fill="none" stroke={C.red} strokeWidth={2.2} strokeDasharray="6 4" markerEnd="url(#fig-arrow)" />
      <Txt x={185} y={190} size={10} bold color={DEEP.red}>boucle auto-entretenue (le noyau de PrPSc converti d'autres PrPC)</Txt>
      <Txt x={540} y={22} bold size={12} color={DEEP.amber}>Amyloïdose</Txt>
      {[0, 1, 2].map((i) => <ellipse key={i} cx={430 + i * 50} cy={80} rx={18} ry={26} fill={C.green} fillOpacity={0.3} stroke={C.green} strokeWidth={2} />)}
      {arrow("M580,80 L620,80")}
      <path d="M630,44 L630,120 M646,44 L646,120 M662,44 L662,120 M678,44 L678,120" stroke={C.red} strokeWidth={3} /><Txt x={654} y={140} bold size={10} color={DEEP.red}>fibrilles en feuillets β</Txt>
      <Txt x={490} y={50} size={9.5} color={C.grey}>monomères</Txt>
      <Card x={30} y={240} w={330} h={90} color={DEEP.blue} title="Repliement normal" lines={["chaperons : aident au bon repliement", "état natif = structure la plus stable"]} />
      <Card x={380} y={240} w={340} h={90} color={DEEP.red} title="Agrégats" lines={["riches en feuillets β, insolubles", "résistants à la dégradation → dépôts"]} />
      <Card x={30} y={344} w={690} h={70} color={DEEP.amber} title="À distinguer (piège classique)" lines={["hélice α : liaisons H i → i+4, intra-chaîne · feuillet β : liaisons H inter-brins · coude β : i → i+3", "collagène ≠ hélice α"]} />
    </Figure>
  );
}
