import { Figure, C, Txt } from "./Figure";
import { RED, DEEP } from "./FigKit";

// Physiologie S1 — schémas complémentaires (rein, digestif, sang), légendes en toutes lettres.

const chip = (x: number, y: number, w: number, h: number, t: string, c: string, size = 11, sub?: string) => (
  <g key={`${x}-${y}-${t}`}>
    <rect x={x} y={y} width={w} height={h} rx={9} fill={c} fillOpacity={0.16} stroke={c} strokeWidth={2} />
    <Txt x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} bold size={size}>{t}</Txt>
    {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 1.5} color={C.grey}>{sub}</Txt>}
  </g>
);
const down = (x: number, y1: number, y2: number) => <path d={`M${x},${y1} L${x},${y2}`} stroke="currentColor" strokeWidth={2.5} markerEnd="url(#fig-arrow)" />;
const right = (x1: number, x2: number, y: number) => <path d={`M${x1},${y} L${x2},${y}`} stroke="currentColor" strokeWidth={2.5} markerEnd="url(#fig-arrow)" />;

const split2 = (t: string, n: number): [string, string] => { if (t.length <= n) return [t, ""]; const i = t.lastIndexOf(" ", n); return [t.slice(0, i), t.slice(i + 1)]; };

// ─── Cellules du tube distal ─────────────────────────────────────────────
export function DistalTubuleCellsDiagram() {
  const cell = (x: number, title: string, c: string, rows: [string, string][], note: string) => (
    <g key={title}>
      <rect x={x} y={70} width={220} height={200} rx={12} fill={c} fillOpacity={0.12} stroke={c} strokeWidth={2.5} />
      <Txt x={x + 110} y={92} bold size={12.5} color={c === C.green ? DEEP.green : c === C.blue ? DEEP.blue : DEEP.violet}>{title}</Txt>
      <path d={`M${x},124 L${x + 220},124`} stroke={c} strokeWidth={1.5} strokeDasharray="4 3" />
      <Txt x={x + 12} y={116} anchor="start" size={9.5} color={C.grey}>lumière (urine)</Txt><Txt x={x + 12} y={140} anchor="start" size={9.5} color={C.grey}>sang</Txt>
      {rows.map(([a, b], i) => (
        <g key={a}><Txt x={x + 12} y={168 + i * 26} anchor="start" size={10.5} bold>{a}</Txt><Txt x={x + 208} y={168 + i * 26} anchor="end" size={10.5} color={C.grey}>{b}</Txt></g>
      ))}
      <Txt x={x + 110} y={258} size={9.5} color={C.grey}>{note}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 440" title="Tube distal : cellules principales et cellules intercalées" caption="Les deux derniers tiers du tube contourné distal et le tube collecteur finalisent l'urine : les cellules principales règlent Na⁺, K⁺ et l'eau ; les cellules intercalées règlent l'équilibre acido-basique">
      <Txt x={370} y={22} bold size={12}>Segment de finalisation de l'urine (≈ 15 % du filtrat)</Txt>
      {cell(10, "Cellule principale", C.blue, [["Na⁺", "réabsorbé"], ["K⁺", "sécrété"], ["Eau", "aquaporine-2"]], "aldostérone + hormone antidiurétique")}
      {cell(260, "Intercalée de type A", C.green, [["H⁺", "sécrété"], ["HCO₃⁻", "réabsorbé"], ["K⁺", "réabsorbé"]], "corrige l'acidose")}
      {cell(510, "Intercalée de type B", C.violet, [["HCO₃⁻", "sécrété"], ["H⁺", "réabsorbé"], ["K⁺", "réabsorbé"]], "corrige l'alcalose")}
      <rect x={10} y={290} width={720} height={140} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={312} bold size={12}>Hormones et médicaments</Txt>
      {[["Aldostérone", "active la pompe Na⁺/K⁺-ATPase basale : réabsorbe Na⁺, sécrète K⁺", C.blue], ["Hormone antidiurétique", "ouvre les aquaporines-2 : réabsorption d'eau (facultative, 8 à 14 % du filtrat)", C.amber], ["Spironolactone, amiloride", "diurétiques épargneurs de potassium : bloquent l'action sur Na⁺ / K⁺", C.red]].map(([a, b, c], i) => (
        <g key={String(a)}><rect x={22} y={324 + i * 34} width={696} height={28} rx={7} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.4} /><Txt x={34} y={343 + i * 34} anchor="start" bold size={10.5}>{String(a)}</Txt><Txt x={230} y={343 + i * 34} anchor="start" size={10}>{String(b)}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Rein et équilibre acido-basique ─────────────────────────────────────
export function RenalAcidBaseDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Équilibre acido-basique : trois lignes de défense" caption="Les tampons agissent en quelques secondes, la respiration en minutes, le rein en heures à jours ; le rein sécrète H⁺, réabsorbe et fabrique HCO₃⁻, acidifie les tampons urinaires (acidité titrable) et élimine l'ammonium">
      <Txt x={370} y={20} bold size={12}>pH sanguin normal : 7,40 ± 0,05</Txt>
      {[["1. Tampons", "immédiat", "bicarbonate (plasma), phosphate (urine), protéines (cellules)", C.blue], ["2. Respiration", "minutes", "ventilation ↑ → CO₂ ↓ (compense une acidose) ; ventilation ↓ → CO₂ ↑", C.green], ["3. Rein", "heures à jours", "lent, mais efficace et durable", C.amber]].map(([a, b, c, col], i) => (
        <g key={String(a)}><rect x={10 + i * 244} y={34} width={232} height={92} rx={10} fill={String(col)} fillOpacity={0.12} stroke={String(col)} strokeWidth={2} /><Txt x={126 + i * 244} y={56} bold size={12}>{String(a)}</Txt><Txt x={126 + i * 244} y={72} size={10} bold color={C.grey}>{String(b)}</Txt><Txt x={126 + i * 244} y={90} size={9.5}>{split2(String(c), 34)[0]}</Txt><Txt x={126 + i * 244} y={104} size={9.5}>{split2(String(c), 34)[1]}</Txt></g>
      ))}
      <Txt x={370} y={152} bold size={12} color={DEEP.amber}>Quatre mécanismes rénaux</Txt>
      {[["Sécrétion de H⁺", "tube contourné proximal : 80 à 90 % ; anse : 10 % ; tube distal et collecteur : 10 %", C.red], ["Réabsorption de HCO₃⁻", "100 % si le plasma est ≤ 27 mEq/L ; 80 à 90 % dans le tube proximal", C.blue], ["Acidité titrable", "H⁺ fixé sur les phosphates urinaires : ≈ 50 % de l'acide éliminé", C.violet], ["Excrétion d'ammonium", "NH₃ + H⁺ → NH₄⁺ piégé dans l'urine : ≈ 50 % de l'acide éliminé", C.green]].map(([a, b, c], i) => (
        <g key={String(a)}><rect x={10 + (i % 2) * 366} y={166 + Math.floor(i / 2) * 82} width={354} height={72} rx={10} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={2} /><Txt x={187 + (i % 2) * 366} y={190 + Math.floor(i / 2) * 82} bold size={11.5}>{String(a)}</Txt><Txt x={187 + (i % 2) * 366} y={208 + Math.floor(i / 2) * 82} size={9.5}>{split2(String(b), 56)[0]}</Txt><Txt x={187 + (i % 2) * 366} y={222 + Math.floor(i / 2) * 82} size={9.5}>{split2(String(b), 56)[1]}</Txt></g>
      ))}
      <rect x={10} y={340} width={720} height={110} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={362} bold size={12}>Quatre déséquilibres</Txt>
      {[["Acidose respiratoire", "CO₂ ↑ (ventilation ↓)", C.red], ["Acidose métabolique", "HCO₃⁻ ↓", C.red], ["Alcalose respiratoire", "CO₂ ↓ (ventilation ↑)", C.blue], ["Alcalose métabolique", "HCO₃⁻ ↑", C.blue]].map(([a, b, c], i) => (
        <g key={String(a)}><rect x={22 + i * 176} y={374} width={168} height={66} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.6} /><Txt x={106 + i * 176} y={396} bold size={10.5}>{String(a)}</Txt><Txt x={106 + i * 176} y={414} size={10}>{String(b)}</Txt><Txt x={106 + i * 176} y={430} size={9} color={C.grey}>{i < 2 ? "pH < 7,35" : "pH > 7,45"}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Ammoniogenèse ───────────────────────────────────────────────────────
export function AmmoniumTrappingDiagram() {
  return (
    <Figure viewBox="0 0 740 380" title="Ammonium : fabrication et piégeage dans l'urine acide" caption="La cellule du tube proximal fabrique de l'ammoniac (NH₃) à partir de la glutamine ; NH₃ traverse la membrane, capte un proton H⁺ dans l'urine acide et devient NH₄⁺, qui ne peut plus revenir : c'est le piégeage par diffusion">
      <rect x={30} y={20} width={330} height={250} rx={14} fill={C.amber} fillOpacity={0.1} stroke={C.amber} strokeWidth={2.5} /><Txt x={195} y={44} bold size={12} color={DEEP.amber}>Cellule du tube contourné proximal</Txt>
      {chip(60, 66, 270, 44, "Glutamine (venue du sang)", C.violet, 11.5)}
      {down(195, 110, 138)}
      {chip(60, 140, 270, 44, "Glutamate + NH₃", C.green, 11.5, "désamination")}
      {down(195, 184, 212)}
      {chip(60, 214, 270, 44, "NH₃ diffuse vers la lumière", C.blue, 11.5)}
      <rect x={370} y={20} width={340} height={250} rx={14} fill={C.red} fillOpacity={0.08} stroke={C.red} strokeWidth={2.5} /><Txt x={540} y={44} bold size={12} color={DEEP.red}>Lumière : urine acide</Txt>
      {right(330, 396, 236)}
      {chip(396, 214, 130, 44, "NH₃ + H⁺", C.red, 12)}
      {right(526, 566, 236)}
      {chip(566, 214, 128, 44, "NH₄⁺", C.red, 13, "piégé")}
      {chip(396, 66, 298, 60, "Sels d'ammonium (NH₄Cl)", C.green, 12, "éliminés dans l'urine")}
      {down(630, 214, 130)}
      <rect x={30} y={290} width={680} height={78} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={312} bold size={12}>Pourquoi c'est utile ?</Txt>
      <Txt x={370} y={332} size={10.5}>en acidose métabolique (par exemple acidocétose diabétique), le rein augmente la fabrication d'ammoniac</Txt>
      <Txt x={370} y={350} size={10.5}>pour éliminer l'excès de H⁺ : cela représente environ la moitié de l'acide éliminé chaque jour</Txt>
    </Figure>
  );
}

// ─── Sécrétion pancréatique ──────────────────────────────────────────────
export function PancreaticSecretionDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Sécrétion pancréatique exocrine : acini et canaux" caption="Les acini sécrètent les enzymes (stockées en granules de zymogène) sous l'effet de la cholécystokinine et de l'acétylcholine ; les canaux sécrètent l'eau et le bicarbonate sous l'effet de la sécrétine ; la trypsine active les autres enzymes">
      <rect x={10} y={10} width={350} height={200} rx={12} fill={C.violet} fillOpacity={0.08} stroke={C.violet} strokeWidth={2} />
      <Txt x={185} y={32} bold size={12.5} color={DEEP.violet}>Acinus : enzymes</Txt>
      {chip(24, 46, 322, 30, "Cholécystokinine + acétylcholine + gastrine", C.amber, 10.5)}
      {down(185, 78, 92)}
      {chip(24, 94, 322, 34, "Granules de zymogène → exocytose", C.violet, 11)}
      <Txt x={185} y={152} size={10.5}>enzymes protéolytiques, lipolytiques, glycolytique</Txt>
      <Txt x={185} y={170} size={10.5}>suc riche en enzymes, isotonique</Txt>
      <Txt x={185} y={196} size={9.5} color={C.grey}>{"stockage à l'état inactif (précurseurs)"}</Txt>
      <rect x={380} y={10} width={350} height={200} rx={12} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} />
      <Txt x={555} y={32} bold size={12.5} color={DEEP.blue}>Canal : eau et bicarbonate</Txt>
      {chip(394, 46, 322, 30, "Sécrétine + peptide intestinal vasoactif", C.amber, 10.5)}
      {down(555, 78, 92)}
      {chip(394, 94, 322, 34, "Anhydrase carbonique : CO₂ + H₂O → HCO₃⁻ + H⁺", C.blue, 10.5)}
      <Txt x={555} y={152} size={10.5}>HCO₃⁻ sécrété contre Cl⁻ au pôle apical</Txt>
      <Txt x={555} y={170} size={10.5}>suc clair et alcalin, pH ≈ 8 (1 500 mL/jour)</Txt>
      <Txt x={555} y={196} size={9.5} color={C.grey}>neutralise l'acide de l'estomac</Txt>
      <Txt x={370} y={240} bold size={12} color={DEEP.violet}>Activation en cascade dans l'intestin</Txt>
      {chip(10, 254, 168, 44, "Entérokinase", C.green, 11, "bordure en brosse")}
      {right(178, 210, 276)}
      {chip(210, 254, 150, 44, "Trypsinogène", C.violet, 11)}{right(360, 392, 276)}{chip(392, 254, 100, 44, "Trypsine", C.red, 12)}
      {right(492, 524, 276)}{chip(524, 254, 206, 44, "active les autres enzymes", C.amber, 11)}
      {chip(10, 322, 240, 60, "Protéolytiques", C.red, 12, "chymotrypsine, carboxypeptidase, élastase")}
      {chip(260, 322, 230, 60, "Lipolytiques", C.amber, 12, "lipase (avec les sels biliaires)")}
      {chip(500, 322, 230, 60, "Glycolytique", C.green, 12, "amylase pancréatique")}
      <Txt x={370} y={408} bold size={11}>Phases de la sécrétion</Txt>
      {[["Céphalique", "20 %", "nerveuse (acétylcholine)"], ["Gastrique", "10 %", "réflexe vagal + gastrine"], ["Intestinale", "70 %", "cholécystokinine + sécrétine"]].map(([a, b, c], i) => (
        <g key={a}><rect x={10 + i * 245} y={418} width={235} height={44} rx={8} fill={C.grey} fillOpacity={0.1} stroke={C.grey} strokeWidth={1.4} /><Txt x={127 + i * 245} y={437} bold size={10.5}>{`${a} : ${b}`}</Txt><Txt x={127 + i * 245} y={453} size={9.5}>{c}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Cycle entéro-hépatique ──────────────────────────────────────────────
export function EnterohepaticCycleDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Cycle entéro-hépatique des sels biliaires" caption="Le foie synthétise les acides biliaires primaires à partir du cholestérol ; conjugués, ils sont sécrétés dans la bile, participent à la digestion des lipides, puis 85 % sont réabsorbés dans l'iléon et reviennent au foie par la veine porte">
      <ellipse cx={150} cy={100} rx={120} ry={70} fill={C.pink} fillOpacity={0.4} stroke={DEEP.pink} strokeWidth={3} /><Txt x={150} y={86} bold size={12.5} color={DEEP.pink}>Foie</Txt><Txt x={150} y={104} size={10}>cholestérol → acides</Txt><Txt x={150} y={118} size={10}>biliaires primaires</Txt>
      {right(270, 330, 100)}
      {chip(332, 68, 150, 64, "Vésicule biliaire", C.green, 11.5, "bile concentrée 5-20 fois")}
      {right(482, 540, 100)}
      {chip(542, 68, 188, 64, "Duodénum", C.amber, 12, "émulsion, micelles, lipides")}
      <path d="M636,132 C636,190 560,214 470,214" fill="none" stroke="currentColor" strokeWidth={2.5} markerEnd="url(#fig-arrow)" />
      {chip(330, 194, 210, 44, "Iléon : 85 % réabsorbés", C.blue, 11.5)}
      <path d="M330,216 C250,216 200,190 170,170" fill="none" stroke={C.red} strokeWidth={3} markerEnd="url(#fig-arrow)" />
      <Txt x={216} y={236} bold size={10.5} color={RED}>veine porte</Txt>
      <path d="M636,132 C700,200 690,300 640,330" fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#fig-arrow)" />
      {chip(410, 300, 230, 60, "Côlon : 15 % → sels secondaires", C.violet, 11.5, "flore bactérienne : acides secondaires")}
      <rect x={10} y={286} width={380} height={140} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={200} y={308} bold size={12}>Chiffres à retenir</Txt>
      {["le cycle se répète 4 à 12 fois par jour", "primaires : cholique, chénodésoxycholique", "secondaires : désoxycholique, lithocholique", "conjugaison : glycine ou taurine + Na⁺ ou K⁺", "rôles : émulsification, micelles, absorption des lipides"].map((t, i) => <Txt key={t} x={200} y={332 + i * 20} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Métabolisme de la bilirubine ────────────────────────────────────────
export function BilirubinMetabolismDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Pigments biliaires : de l'hème à l'urobiline" caption="Trois étapes : préhépatique (macrophages, bilirubine indirecte liée à l'albumine), hépatique (conjugaison à l'acide glucuronique) et intestinale (urobilinogène par la flore, élimination fécale et urinaire)">
      {[{ x: 10, t: "Préhépatique", s: "macrophages (rate, foie, moelle)", c: C.blue, items: ["hème du fer", "→ biliverdine (hème-oxygénase)", "→ bilirubine indirecte", "liée à l'albumine, non conjuguée"] },
        { x: 254, t: "Hépatique", s: "hépatocyte", c: C.green, items: ["conjugaison à l'acide glucuronique", "(glucuronyl-transférase)", "→ bilirubine directe (conjuguée)", "sécrétée dans les canalicules biliaires"] },
        { x: 498, t: "Intestinale", s: "flore bactérienne", c: C.amber, items: ["bilirubine directe", "→ urobilinogène", "réabsorbé (veine porte) : urines", "sinon : stercobiline, selles brunes"] }].map((g) => (
        <g key={g.t}>
          <rect x={g.x} y={10} width={232} height={280} rx={12} fill={g.c} fillOpacity={0.08} stroke={g.c} strokeWidth={2} />
          <rect x={g.x} y={10} width={232} height={54} rx={12} fill={g.c} fillOpacity={0.85} />
          <Txt x={g.x + 116} y={34} bold size={13} color="#fff">{g.t}</Txt><Txt x={g.x + 116} y={52} size={10} color="#fff">{g.s}</Txt>
          {g.items.map((it, i) => <g key={it}><rect x={g.x + 12} y={76 + i * 52} width={208} height={42} rx={8} fill={g.c} fillOpacity={0.14} stroke={g.c} strokeWidth={1.4} /><Txt x={g.x + 116} y={102 + i * 52} size={10} bold>{it}</Txt></g>)}
        </g>
      ))}
      <path d="M242,150 L254,150 M486,150 L498,150" stroke="currentColor" strokeWidth={3} markerEnd="url(#fig-arrow)" />
      <rect x={10} y={306} width={720} height={84} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={328} bold size={12}>Pour l'interprétation biologique</Txt>
      <Txt x={370} y={348} size={10.5}>bilirubine indirecte ↑ : hémolyse (trop de destruction) · bilirubine directe ↑ : obstruction des voies biliaires</Txt>
      <Txt x={370} y={366} size={10.5}>selles décolorées + urines foncées : la bile n'arrive plus à l'intestin (ictère cholestatique)</Txt>
    </Figure>
  );
}

// ─── Déglutition ─────────────────────────────────────────────────────────
export function SwallowingStagesDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Déglutition : trois stades" caption="Stade buccal (volontaire, ≈ 0,3 s), pharyngé (automatique, 1 à 2 s : fermetures nasale, buccale et laryngée) et œsophagien (5 à 7 s : péristaltisme entre les sphincters œsophagiens supérieur et inférieur)">
      {[{ x: 10, t: "1. Buccal", s: "volontaire · 0,3 s", c: C.blue, items: ["la langue pousse le bol vers l'arrière", "isthme bucco-pharyngé élargi", "le bol arrive au pharynx"] },
        { x: 254, t: "2. Pharyngé", s: "automatique · 1 à 2 s", c: C.amber, items: ["fermeture de la cavité nasale", "fermeture du larynx (épiglotte)", "ouverture de l'œsophage · pression 70-100 cm d'eau"] },
        { x: 498, t: "3. Œsophagien", s: "involontaire · 5 à 7 s", c: C.green, items: ["sphincter œsophagien supérieur se relâche", "onde péristaltique primaire (vague)", "sphincter inférieur se relâche : entrée dans l'estomac"] }].map((g) => (
        <g key={g.t}>
          <rect x={g.x} y={10} width={232} height={250} rx={12} fill={g.c} fillOpacity={0.08} stroke={g.c} strokeWidth={2} />
          <rect x={g.x} y={10} width={232} height={54} rx={12} fill={g.c} fillOpacity={0.85} />
          <Txt x={g.x + 116} y={34} bold size={13} color="#fff">{g.t}</Txt><Txt x={g.x + 116} y={52} size={10} color="#fff">{g.s}</Txt>
          {g.items.map((it, i) => <g key={it}><rect x={g.x + 12} y={76 + i * 60} width={208} height={50} rx={8} fill={g.c} fillOpacity={0.14} stroke={g.c} strokeWidth={1.4} /><Txt x={g.x + 116} y={97 + i * 60} size={9.5} bold>{split2(it, 32)[0]}</Txt><Txt x={g.x + 116} y={111 + i * 60} size={9.5} bold>{split2(it, 32)[1]}</Txt></g>)}
        </g>
      ))}
      <rect x={10} y={276} width={356} height={150} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={188} y={298} bold size={12}>Les deux sphincters</Txt>
      {["supérieur : pression ≈ 50 mmHg", "empêche l'air d'entrer dans l'œsophage", "inférieur : pression ≈ 20 mmHg", "empêche le reflux gastro-œsophagien"].map((t, i) => <Txt key={t} x={188} y={322 + i * 22} size={10.5} bold={i % 2 === 0}>{t}</Txt>)}
      <rect x={376} y={276} width={354} height={150} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={553} y={298} bold size={12}>Régulation</Txt>
      {["centre de déglutition dans le bulbe", "onde primaire : déclenchée par le nerf vague", "onde secondaire : plexus myentérique d'Auerbach", "pendant la déglutition : la respiration est inhibée"].map((t, i) => <Txt key={t} x={553} y={322 + i * 22} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Fibrinolyse ─────────────────────────────────────────────────────────
export function FibrinolysisDiagram() {
  return (
    <Figure viewBox="0 0 740 380" title="Fibrinolyse : dissolution du caillot" caption="L'activateur tissulaire du plasminogène (t-PA), libéré par l'endothélium, transforme le plasminogène en plasmine, qui dégrade la fibrine en produits de dégradation (dont les D-dimères) ; l'inhibiteur PAI-1 et l'alpha-2 antiplasmine freinent le processus">
      {chip(20, 30, 210, 60, "Caillot de fibrine", C.red, 12, "réseau réticulé")}
      {chip(20, 170, 210, 60, "Plasminogène", C.violet, 12, "inactif, dans le caillot")}
      {chip(310, 170, 170, 60, "Plasmine", C.green, 13, "enzyme active")}
      {right(230, 308, 200)}
      <Txt x={270} y={186} size={9.5} bold color={DEEP.amber}>activé par</Txt>
      {chip(310, 60, 170, 60, "t-PA (endothélium)", C.amber, 11.5, "activateur du plasminogène")}
      <path d="M395,120 L395,168" stroke={C.amber} strokeWidth={3} markerEnd="url(#fig-arrow)" />
      <path d="M480,200 L540,200" stroke="currentColor" strokeWidth={3} markerEnd="url(#fig-arrow)" />
      {chip(542, 170, 188, 60, "Produits de dégradation", C.blue, 11.5, "dont les D-dimères")}
      <path d="M395,170 C395,120 200,100 130,92" stroke={C.green} strokeWidth={3} fill="none" strokeDasharray="6 4" markerEnd="url(#fig-arrow)" />
      <Txt x={270} y={106} size={9.5} bold color={DEEP.green}>dégrade la fibrine</Txt>
      {chip(310, 290, 170, 60, "Inhibiteurs", C.red, 12, "PAI-1 · alpha-2 antiplasmine")}
      <path d="M395,290 L395,236" stroke={C.red} strokeWidth={3} markerEnd="url(#fig-arrow)" />
      <rect x={510} y={270} width={220} height={90} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={620} y={292} bold size={11.5}>Intérêt clinique</Txt>
      <Txt x={620} y={312} size={10}>thrombolytiques (dissolvent un caillot)</Txt><Txt x={620} y={328} size={10}>D-dimères ↑ : caillot en cours de lyse</Txt>
    </Figure>
  );
}

// ─── Plaquettes ──────────────────────────────────────────────────────────
export function PlateletPlugDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Plaquettes : de la brèche au clou plaquettaire" caption="Adhésion (facteur de von Willebrand et collagène), activation (libération d'ADP et de thromboxane A₂), agrégation (fibrinogène) : le clou plaquettaire obture la brèche puis la coagulation le consolide">
      <path d="M0,300 L740,300" stroke="#b98c68" strokeWidth={6} /><Txt x={20} y={322} anchor="start" size={10} bold color={C.grey}>endothélium lésé : collagène exposé</Txt>
      {[80, 240, 400, 560].map((x, k) => (
        <g key={x}>
          <ellipse cx={x + 40} cy={240 - k * 14} rx={28} ry={14} fill={C.violet} fillOpacity={0.35 + k * 0.15} stroke={DEEP.violet} strokeWidth={2.5} />
          {k > 0 && [0, 1, 2].map((i) => <path key={i} d={`M${x + 20 + i * 20},${228 - k * 14} l${(i - 1) * 6},-14`} stroke={DEEP.violet} strokeWidth={2} />)}
        </g>
      ))}
      {[{ x: 10, t: "1. Adhésion", s: "von Willebrand + collagène", c: C.blue }, { x: 190, t: "2. Activation", s: "ADP + thromboxane A₂", c: C.amber }, { x: 370, t: "3. Agrégation", s: "fibrinogène relie", c: C.green }, { x: 550, t: "4. Clou hémostatique", s: "puis renforcé par la fibrine", c: C.red }].map((g) => chip(g.x, 20, 180, 76, g.t, g.c, 11.5, g.s))}
      <rect x={10} y={338} width={720} height={54} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={360} size={10.5}>plaquettes : fragments de mégacaryocytes (production sous contrôle de la thrombopoïétine), 150-400 g/L, durée de vie ≈ 10 jours</Txt>
      <Txt x={370} y={378} size={10.5}>l'aspirine bloque la synthèse de thromboxane A₂ : effet antiagrégant</Txt>
    </Figure>
  );
}
