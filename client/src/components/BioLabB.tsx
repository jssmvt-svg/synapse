import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Card, dash } from "./PhysCardio";
import { Box, arrow } from "./PhysRespEndo";

// Biochimie — labos du semestre 2 : schémas des sous-parties.

// ─── États métaboliques : nourri, jeûne, famine ──────────────────────────
export function MetabolicStatesDiagram() {
  const ph: [string, string, string[], string][] = [
    ["Postprandial précoce", "0 – 2 h", ["glycémie ↑ → insuline", "translocation GLUT4", "glycogenèse foie / muscle", "lipogenèse (glucose → TAG)"], C.green],
    ["Jeûne", "> 4 h", ["glycémie ↓ → insuline ↓", "1re source : glycogénolyse", "(glucagon)", "puis néoglucogenèse"], C.amber],
    ["Jeûne prolongé", "famine", ["lipolyse, cétogenèse (foie)", "corps cétoniques : carburant", "alternatif, jusqu'à 60-70 %", "des besoins du cerveau"], C.red],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Les états métaboliques : du repas au jeûne prolongé" caption="Après un repas l'insuline domine (stockage) ; à distance du repas les hormones hyperglycémiantes prennent le relais : glycogénolyse d'abord, néoglucogenèse ensuite (lactate du cycle de Cori, glycérol, acides aminés glucoformateurs), puis cétogenèse en jeûne prolongé ; à l'exercice, phosphocréatine et glycolyse anaérobie puis oxydation des acides gras">
      <path d="M40,60 L700,60" stroke="currentColor" strokeWidth={3} markerEnd="url(#fig-arrow)" /><Txt x={370} y={44} bold size={11.5}>temps après le repas →</Txt>
      {ph.map(([n, t, lines, c], i) => (
        <g key={n}>
          <rect x={20 + i * 235} y={84} width={225} height={168} rx={12} fill={c} fillOpacity={0.12} stroke={c} strokeWidth={2} />
          <Txt x={132 + i * 235} y={108} bold size={12.5}>{n}</Txt><Txt x={132 + i * 235} y={124} size={10} bold color={c}>{t}</Txt>
          {lines.map((l, k) => <Txt key={k} x={34 + i * 235} y={150 + k * 18} anchor="start" size={10.5} color={C.grey}>{l}</Txt>)}
        </g>
      ))}
      <Txt x={370} y={284} bold size={12} color={DEEP.violet}>Sources de glucose à jeun</Txt>
      {[["Glycogénolyse hépatique", C.amber], ["Lactate (cycle de Cori)", C.blue], ["Glycérol (lipolyse)", C.green], ["Acides aminés glucoformateurs", C.red]].map(([t, c], i) => (
        <g key={String(t)}><rect x={30 + i * 172} y={298} width={162} height={40} rx={8} fill={String(c)} fillOpacity={0.25} stroke={String(c)} strokeWidth={1.8} /><Txt x={111 + i * 172} y={322} bold size={9.8}>{String(t)}</Txt></g>
      ))}
      {arrow("M370,340 L370,366")}
      <Box x={230} y={368} w={280} h={44} t="Néoglucogenèse" s="glycémie maintenue" c={C.violet} size={12} />
      <Card x={20} y={424} w={700} h={40} color={DEEP.blue} title="Exercice : phosphocréatine + glycolyse anaérobie au début · acides gras si effort modéré prolongé" lines={[]} />
    </Figure>
  );
}

// ─── G6PD et test de Brewer ──────────────────────────────────────────────
export function G6PDBrewerDiagram() {
  const tube = (x: number, label: string, color: string, sub: string) => (
    <g key={label}>
      <path d={`M${x},250 L${x},330 C${x},350 ${x + 46},350 ${x + 46},330 L${x + 46},250 Z`} fill={color} fillOpacity={0.6} stroke="currentColor" strokeOpacity={0.5} strokeWidth={2} />
      <rect x={x - 3} y={244} width={52} height={8} rx={3} fill="currentColor" fillOpacity={0.25} />
      <Txt x={x + 23} y={372} bold size={10.5}>{label}</Txt><Txt x={x + 23} y={386} size={9} color={C.grey}>{sub}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 476" title="Voie des pentoses phosphates dans le globule rouge et test de Brewer" caption="Le globule rouge n'a pas de mitochondrie : la PPP est sa seule source de NADPH, nécessaire à la régénération du glutathion ; un déficit en G6PD expose à l'hémolyse oxydative ; test de Brewer : le NADPH réduit le bleu de méthylène qui réduit la méthémoglobine (rouge si normal, brun si déficit)">
      <Box x={20} y={20} w={150} h={46} t="Glucose-6-P" c={C.blue} size={12} />
      {arrow("M170,43 L216,43")}<Txt x={193} y={32} size={9.5} bold color={DEEP.red}>G6PD</Txt>
      <Box x={218} y={20} w={190} h={46} t="Voie des pentoses phosphates" s="phase oxydative" c={C.amber} size={11} />
      {arrow("M408,43 L452,43")}
      <Box x={454} y={20} w={110} h={46} t="NADPH" c={C.violet} size={12.5} />
      {arrow("M564,43 L598,43")}
      <Box x={600} y={20} w={120} h={46} t="GSH régénéré" c={C.green} size={11.5} />
      <Txt x={660} y={86} size={10} color={C.grey}>glutathion peroxydase :</Txt><Txt x={660} y={100} size={10} bold color={DEEP.green}>H₂O₂ détoxifié</Txt>
      <Card x={20} y={96} w={330} h={122} color={DEEP.red} title="Déficit en G6PD (enzymopathie la plus fréquente)" lines={["↓ NADPH → ↓ GSH → stress oxydatif", "peroxydation membranaire, corps de Heinz", "hémolyse ; déclencheurs : infection, médicaments", "résistance partielle au paludisme"]} />
      <Txt x={560} y={224} bold size={12}>Test de Brewer (3 h à 37 °C)</Txt>
      {tube(420, "1. Sang", C.red, "témoin rouge")}
      {tube(500, "2. + nitrite", "#8b5a2b", "témoin brun")}
      {tube(580, "3. + bleu méth.", C.red, "normal : rouge")}
      {tube(660, "3. déficit G6PD", "#8b5a2b", "reste brun")}
      <Card x={20} y={240} w={380} h={132} color={DEEP.blue} title="Principe" lines={["nitrite de sodium : Hb → méthémoglobine (Fe³⁺, brune)", "bleu de méthylène : accepteur d'électrons réduit par", "le NADPH → réduit la MetHb en Hb fonctionnelle", "tube 3 rouge : PPP fonctionnelle · brun : G6PD suspecté"]} />
      <Card x={20} y={402} w={700} h={62} color={DEEP.green} title="Intérêt" lines={["dépistage du déficit en G6PD (populations méditerranéennes, africaines, asiatiques)", "avant prescription de médicaments oxydants"]} />
    </Figure>
  );
}

// ─── Dosage des triglycérides ────────────────────────────────────────────
export function TriglycerideAssayDiagram() {
  const step = (x: number, y: number, w: number, a: string, enz: string, b: string, c: string) => (
    <g>
      <Box x={x} y={y} w={w} h={44} t={a} c={c} size={10.5} />
      {arrow(`M${x + w},${y + 22} L${x + w + 74},${y + 22}`)}<Txt x={x + w + 37} y={y + 14} size={9} bold color={DEEP.red}>{enz}</Txt>
      <Box x={x + w + 76} y={y} w={w} h={44} t={b} c={c} size={10.5} />
    </g>
  );
  return (
    <Figure viewBox="0 0 740 460" title="Dosage des triglycérides : on mesure le glycérol libéré" caption="Les triglycérides n'ont pas de méthode de reconnaissance directe : la lipase libère le glycérol, dosé soit par la voie pyruvate kinase / LDH (baisse du NADH à 340 nm), soit par la voie glycérol-3-phosphate oxydase (colorant quinonéimine rouge lu à 546 nm)">
      <Box x={20} y={16} w={220} h={44} t="Triglycérides (sérum)" c={C.amber} size={12} />
      {arrow("M240,38 L300,38")}<Txt x={270} y={28} size={9.5} bold color={DEEP.red}>lipase</Txt>
      <Box x={302} y={16} w={220} h={44} t="Glycérol + acides gras" c={C.green} size={12} />
      {arrow("M412,62 L412,92")}<Txt x={470} y={82} anchor="start" size={9.5} bold color={DEEP.red}>glycérol kinase (+ ATP)</Txt>
      <Box x={302} y={94} w={220} h={44} t="Glycérol-3-phosphate + ADP" c={C.blue} size={11} />
      <path d="M302,116 C240,116 200,150 150,176" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <path d="M522,116 C580,116 620,150 640,176" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Txt x={110} y={168} bold size={11.5} color={DEEP.violet}>Voie pyruvate kinase (UV)</Txt>
      <Txt x={640} y={168} bold size={11.5} color={DEEP.red}>Voie G3P oxydase (colorimétrie)</Txt>
      <Box x={20} y={182} w={250} h={48} t="ADP + PEP → ATP + pyruvate" s="pyruvate kinase" c={C.violet} size={10.5} />
      {arrow("M145,232 L145,256")}
      <Box x={20} y={258} w={250} h={48} t="Pyruvate + NADH → lactate + NAD⁺" s="LDH" c={C.violet} size={10.5} />
      {arrow("M145,308 L145,332")}
      <Box x={20} y={334} w={250} h={44} t="A340 nm ↓ ∝ triglycérides" c={C.green} size={11} />
      <Box x={470} y={182} w={250} h={48} t="G3P + O₂ → DHAP + H₂O₂" s="G3P oxydase" c={C.red} size={10.5} />
      {arrow("M595,232 L595,256")}
      <Box x={470} y={258} w={250} h={48} t="H₂O₂ + chlorophénol + 4-AAP" s="peroxydase" c={C.red} size={10.5} />
      {arrow("M595,308 L595,332")}
      <Box x={470} y={334} w={250} h={44} t="Quinonéimine rouge : A546 nm" c={C.green} size={11} />
      <Txt x={370} y={430} size={10.5} color={C.grey}>voie G3P oxydase : méthode utilisée en pratique au TP</Txt>
    </Figure>
  );
}

// ─── Cétogenèse pathologique et test de Rothera ──────────────────────────
export function KetosisRotheraDiagram() {
  const st = (y: number, n: number, t: string, c: string) => (
    <g key={n}>
      <rect x={20} y={y} width={340} height={56} rx={10} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={2} />
      <circle cx={44} cy={y + 28} r={11} fill={c} /><Txt x={44} y={y + 32} bold size={11} color="#fff">{n}</Txt>
      <Txt x={64} y={y + 25} anchor="start" size={10.5} bold>{t.split("|")[0]}</Txt><Txt x={64} y={y + 42} anchor="start" size={10} color={C.grey}>{t.split("|")[1]}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Acidocétose et test de Rothera" caption="Quand la production hépatique de corps cétoniques dépasse leur utilisation périphérique : cétonémie puis cétonurie ; le test de Rothera (nitroprussiate + ammoniaque) donne un anneau violet en 2 minutes avec l'acétoacétate et l'acétone, mais pas avec le β-hydroxybutyrate">
      <Txt x={190} y={22} bold size={12} color={DEEP.red}>Mécanisme (déficit insulinique, jeûne)</Txt>
      {st(36, 1, "Lipolyse libérée|↑ acides gras libres et glycérol", C.red)}
      {arrow("M190,94 L190,106")}
      {st(108, 2, "β-oxydation hépatique|acides gras → acétyl-CoA", C.amber)}
      {arrow("M190,166 L190,178")}
      {st(180, 3, "↓ oxaloacétate|Krebs ralenti → acétyl-CoA s'accumule", C.blue)}
      {arrow("M190,238 L190,250")}
      {st(252, 4, "Cétogenèse|excès d'acétyl-CoA → corps cétoniques", C.violet)}
      <Txt x={190} y={334} size={10.5} bold color={DEEP.violet}>cétonémie → cétonurie (au-delà du seuil rénal)</Txt>
      <Txt x={545} y={22} bold size={12} color={DEEP.violet}>Test de Rothera</Txt>
      <path d="M470,44 L470,210 C470,236 520,236 520,210 L520,44 Z" fill={C.grey} fillOpacity={0.12} stroke="currentColor" strokeOpacity={0.5} strokeWidth={2.4} />
      <rect x={472} y={110} width={46} height={98} fill={C.amber} fillOpacity={0.35} /><rect x={472} y={72} width={46} height={38} fill={C.blue} fillOpacity={0.25} />
      <rect x={472} y={106} width={46} height={7} fill={C.violet} /><Txt x={600} y={112} anchor="start" bold size={10.5} color={DEEP.violet}>anneau violet</Txt><Txt x={600} y={126} anchor="start" size={9.5} color={C.grey}>en 2 min</Txt>
      <Txt x={528} y={90} anchor="start" size={9.5} color={C.grey}>NH₄OH saturé</Txt><Txt x={528} y={170} anchor="start" size={9.5} color={C.grey}>urine + (NH₄)₂SO₄</Txt><Txt x={528} y={184} anchor="start" size={9.5} color={C.grey}>+ nitroprussiate</Txt>
      <Card x={380} y={262} w={340} h={112} color={DEEP.violet} title="Interprétation" lines={["anneau violet : corps cétoniques (1+ à 4+)", "détecte l'acétoacétate et l'acétone,", "pas le β-hydroxybutyrate", "seuil : 1-2 mg/dL d'acétoacétate, 10 mg/dL d'acétone"]} />
      <Card x={20} y={388} w={340} h={70} color={DEEP.blue} title="Contextes" lines={["diabète de type 1 non contrôlé", "jeûne prolongé"]} />
      <Card x={380} y={388} w={340} h={70} color={DEEP.green} title="Urine normale" lines={["pas d'anneau : pas de corps cétoniques"]} />
    </Figure>
  );
}

// ─── Séparation des lipoprotéines ────────────────────────────────────────
export function LipoproteinSeparationDiagram() {
  const fr: [string, string, string][] = [["Chylomicrons", "d ≤ 0,96", C.amber], ["VLDL", "0,96 – 1,006", C.red], ["LDL", "1,006 – 1,063", C.blue], ["HDL", "1,063 – 1,21", C.green]];
  return (
    <Figure viewBox="0 0 740 470" title="Séparer les lipoprotéines : ultracentrifugation, électrophorèse, précipitation" caption="Ultracentrifugation (≈ 100 000 g) : 4 fractions selon la densité en g/cm³ ; électrophorèse à pH 8,6 : chylomicrons quasi immobiles, β = LDL, pré-β = VLDL, α = HDL ; précipitation : phosphotungstate (HDL) ou SDS (HDL + LDL)">
      <Txt x={130} y={22} bold size={12}>Ultracentrifugation</Txt>
      <rect x={60} y={36} width={140} height={220} rx={14} fill="currentColor" fillOpacity={0.05} stroke="currentColor" strokeOpacity={0.5} strokeWidth={2.4} />
      {fr.map(([n, d, c], i) => (
        <g key={n}>
          <rect x={62} y={40 + i * 54} width={136} height={50} fill={String(c)} fillOpacity={0.4} />
          <Txt x={130} y={62 + i * 54} bold size={11}>{n}</Txt><Txt x={130} y={78 + i * 54} size={9.5} color={C.grey}>{d}</Txt>
        </g>
      ))}
      <path d="M210,60 L250,60" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" /><Txt x={256} y={64} anchor="start" size={9.5} color={C.grey}>plus léger</Txt>
      <Txt x={256} y={240} anchor="start" size={9.5} color={C.grey}>plus dense</Txt>
      <Txt x={490} y={22} bold size={12}>Électrophorèse (pH 8,6)</Txt>
      <rect x={340} y={38} width={380} height={64} rx={6} fill={C.blue} fillOpacity={0.06} stroke={C.blue} strokeWidth={1.8} />
      {[["α · HDL", 360, C.green], ["pré-β · VLDL", 440, C.red], ["β · LDL", 530, C.blue], ["origine · chylo.", 640, C.amber]].map(([t, x, c]) => (
        <g key={String(t)}><rect x={Number(x)} y={54} width={50} height={32} rx={5} fill={String(c)} fillOpacity={0.6} /><Txt x={Number(x) + 25} y={118} bold size={9.5} color={String(c)}>{String(t)}</Txt></g>
      ))}
      <Card x={340} y={140} w={380} h={116} color={DEEP.violet} title="Précipitation chimique" lines={["cations divalents, polyanions, tensioactifs", "réactif phosphotungstique : isole les HDL", "SDS : précipite HDL + LDL"]} />
      <Card x={20} y={280} w={340} h={84} color={DEEP.blue} title="Sérum normal à jeun" lines={["chylomicrons absents à jeun", "LDL = principal transporteur du cholestérol"]} />
      <Card x={380} y={280} w={340} h={84} color={DEEP.amber} title="Indicateurs du risque cardiovasculaire" lines={["IMC ≥ 25 surpoids · ≥ 30 obésité", "tour de taille > 94 cm (H) / > 80 cm (F)"]} />
      <Card x={20} y={378} w={700} h={80} color={DEEP.green} title="Choix de la méthode" lines={["ultracentrifugation : référence selon la densité · électrophorèse : profil qualitatif", "précipitation : base du dosage du cholestérol HDL en routine"]} />
    </Figure>
  );
}

// ─── Phénylalanine et tyrosine ───────────────────────────────────────────
export function PheTyrDiagram() {
  const blockMark = (x: number, y: number, t: string) => <g><rect x={x} y={y} width={112} height={26} rx={7} fill={C.red} fillOpacity={0.3} stroke={C.red} strokeWidth={2} /><Txt x={x + 56} y={y + 17} bold size={9.5} color={DEEP.red}>{t}</Txt></g>;
  return (
    <Figure viewBox="0 0 740 490" title="Phénylalanine et tyrosine : voies et blocs enzymatiques" caption="La phénylalanine hydroxylase (BH₄, O₂, NADPH) forme la tyrosine ; son déficit cause la phénylcétonurie ; la tyrosine donne catécholamines, mélanine et hormones thyroïdiennes, ou est catabolisée en fumarate (glucoformateur) et acétoacétate (cétogène) ; déficit en tyrosinase : albinisme ; en homogentisate oxydase : alcaptonurie">
      <Box x={20} y={20} w={150} h={46} t="Phénylalanine" s="essentielle, mixte" c={C.blue} size={12} />
      {arrow("M170,43 L226,43")}<Txt x={198} y={32} size={9} bold color={DEEP.red}>PAH</Txt>
      {blockMark(140, 74, "PAH → PCU")}
      <Box x={228} y={20} w={150} h={46} t="Tyrosine" s="non essentielle" c={C.green} size={12} />
      <path d="M303,68 L303,110" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><path d="M378,43 L430,43 L430,110" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><path d="M250,68 L150,112" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Box x={20} y={114} w={200} h={54} t="Catécholamines" s="Tyr → L-DOPA → dopamine → NA → A" c={C.violet} size={11} />
      <Box x={230} y={114} w={150} h={54} t="Mélanine" s="tyrosinase" c={C.amber} size={12} />
      {blockMark(249, 176, "tyrosinase → albinisme")}
      <Box x={390} y={114} w={160} h={54} t="T3 / T4" s="iodation, thyroglobuline" c={C.red} size={12} />
      <path d="M600,66 L600,110" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <path d="M378,30 L600,30 L600,66" fill="none" stroke="currentColor" strokeWidth={2.2} />
      <Box x={560} y={114} w={160} h={54} t="Catabolisme" s="transamination" c={C.green} size={12} />
      {arrow("M640,170 L640,196")}
      <Box x={520} y={198} w={200} h={40} t="p-hydroxyphénylpyruvate" c={C.green} size={10.5} />
      {arrow("M620,240 L620,262")}
      <Box x={520} y={264} w={200} h={40} t="Homogentisate" c={C.green} size={11} />
      {blockMark(408, 268, "HGD → alcaptonurie")}
      {arrow("M620,306 L620,328")}
      <Box x={520} y={330} w={200} h={40} t="Maleylacétoacétate → fumarylacétoacétate" c={C.green} size={9.5} />
      {arrow("M580,372 L540,396")}{arrow("M660,372 L700,396")}
      <Box x={470} y={398} w={130} h={40} t="Fumarate" s="glucoformateur" c={C.blue} size={11} />
      <Box x={610} y={398} w={120} h={40} t="Acétoacétate" s="cétogène" c={C.amber} size={10.5} />
      <Card x={20} y={210} w={330} h={92} color={DEEP.red} title="Phénylcétonurie (déficit en PAH)" lines={["↑ Phe et acide phénylpyruvique", "myéline, sérotonine perturbées → retard mental", "manque de Tyr → hypopigmentation"]} />
      <Card x={20} y={314} w={330} h={124} color={DEEP.amber} title="Alcaptonurie et albinisme" lines={["alcaptonurie : homogentisate oxydase ↓, urine noircit", "à l'air, ochronose (cartilages) et arthrose", "albinisme : tyrosinase ↓, pas de mélanine,", "photophobie, risque de cancer cutané"]} />
      <Txt x={370} y={470} size={10} color={C.grey}>tests du TP : acide phénylpyruvique (hyperphénylalaninémie)</Txt>
    </Figure>
  );
}

// ─── Acides aminés ramifiés ──────────────────────────────────────────────
export function BCAADiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Acides aminés ramifiés : catabolisme et leucinose" caption="Valine, leucine et isoleucine sont essentielles et catabolisées surtout hors du foie (muscle, rein, cerveau) : transamination par la BCAT (vitamine B6) puis décarboxylation par le complexe BCKD ; le déficit en BCKD cause la leucinose (maple syrup urine disease)">
      <Box x={20} y={20} w={190} h={54} t="Valine · Leucine · Isoleucine" s="BCAA" c={C.blue} size={11.5} />
      {arrow("M210,47 L262,47")}<Txt x={236} y={36} size={9} bold color={DEEP.red}>BCAT (B6)</Txt>
      <Box x={264} y={20} w={190} h={54} t="Cétoacides ramifiés (BCKA)" c={C.green} size={11} />
      {arrow("M454,47 L506,47")}<Txt x={480} y={36} size={9} bold color={DEEP.red}>BCKD</Txt>
      <Box x={508} y={20} w={212} h={54} t="Acyl-CoA correspondants" s="décarboxylation oxydative" c={C.amber} size={11} />
      <rect x={508} y={80} width={212} height={26} rx={7} fill={C.red} fillOpacity={0.3} stroke={C.red} strokeWidth={2} /><Txt x={614} y={97} bold size={10} color={DEEP.red}>BCKD ↓ = leucinose</Txt>
      {arrow("M614,76 L614,78")}
      <Txt x={370} y={130} bold size={12}>Voies divergentes</Txt>
      {[["Valine", "succinyl-CoA", "glucoformatrice", C.green], ["Isoleucine", "acétyl-CoA + succinyl-CoA", "mixte", C.violet], ["Leucine", "acétyl-CoA + acétoacétate", "exclusivement cétogène", C.amber]].map(([a, b, s, c], i) => (
        <g key={String(a)}>
          <Box x={30 + i * 235} y={148} w={210} h={44} t={String(a)} s={String(s)} c={String(c)} size={11.5} />
          {arrow(`M${135 + i * 235},194 L${135 + i * 235},214`)}
          <Box x={30 + i * 235} y={216} w={210} h={44} t={String(b)} c={String(c)} size={10.5} />
        </g>
      ))}
      <Card x={20} y={286} w={340} h={150} color={DEEP.red} title="Leucinose (MSUD)" lines={["accumulation des BCAA et de leurs cétoacides", "nourrisson normal à la naissance, puis avec", "l'apport protéique : acidocétose aiguë,", "vomissements, léthargie", "test du TP : dépistage de la leucinose"]} />
      <Card x={380} y={286} w={340} h={150} color={DEEP.blue} title="Lien avec la vitamine B12" lines={["propionyl-CoA → succinyl-CoA dépend de B12", "carence en B12 : dégradation de la valine et de", "l'isoleucine altérée", "→ acide méthylmalonique accumulé", "(acidémie méthylmalonique)"]} />
    </Figure>
  );
}

// ─── Tryptophane ─────────────────────────────────────────────────────────
export function TryptophanDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Le tryptophane : sérotonine, mélatonine, kynurénine, niacine" caption="Le tryptophane (essentiel, mixte) alimente la voie de la kynurénine (catabolisme principal, vers l'alanine et l'acétoacétyl-CoA et vers l'acide quinolinique puis la niacine et le NAD⁺) et la voie de la sérotonine / mélatonine ; le déficit en vitamine B6 accumule kynurénine et acide xanthurénique">
      <Box x={280} y={16} w={180} h={50} t="Tryptophane" s="essentiel, mixte" c={C.blue} size={13} />
      {arrow("M300,68 L150,120")}{arrow("M460,42 L560,42 L560,120")}{arrow("M370,68 L370,120")}
      <Box x={20} y={122} w={260} h={62} t="Voie sérotonine" s="Trp → 5-HTP (Trp hydroxylase, BH₄)" c={C.violet} size={11.5} />
      {arrow("M150,186 L150,212")}
      <Box x={20} y={214} w={260} h={44} t="Sérotonine → mélatonine (pinéale)" c={C.violet} size={10.5} />
      <Txt x={150} y={276} size={9.5} color={C.grey}>humeur, appétit, motilité intestinale · déchet : 5-HIAA</Txt>
      <Box x={290} y={122} w={160} h={62} t="Voie kynurénine" s="tryptophane dioxygénase" c={C.green} size={11.5} />
      {arrow("M370,186 L370,212")}
      <Box x={290} y={214} w={160} h={44} t="Kynurénine" c={C.green} size={11.5} />
      {arrow("M330,260 L280,300")}{arrow("M410,260 L470,300")}
      <Box x={150} y={302} w={190} h={44} t="Alanine + acétoacétyl-CoA" c={C.amber} size={10.5} />
      <Box x={420} y={302} w={190} h={44} t="Acide quinolinique" c={C.red} size={11} />
      {arrow("M515,348 L515,372")}
      <Box x={420} y={374} w={190} h={44} t="Niacine (B3) → NAD⁺ / NADP⁺" c={C.red} size={10} />
      <Box x={470} y={122} w={250} h={62} t="Flore intestinale" s="dérivés indoliques → foie → urine" c={C.grey} size={11} />
      <Txt x={515} y={436} size={9.5} color={C.grey}>≈ 60 mg de Trp → 1 mg de niacine (réaction dépendante de B6)</Txt>
      <Card x={20} y={358} w={280} h={104} color={DEEP.red} title="Carence en vitamine B6" lines={["kynurénase B6-dépendante", "accumulation de kynurénine et", "d'acide xanthurénique :", "urine jaune-verdâtre (signe diagnostique)"]} />
      <Card x={620} y={302} w={110} h={116} color={DEEP.blue} title="TP" lines={["dosage du", "5-HIAA", "(métabolite", "de la", "sérotonine)"]} />
    </Figure>
  );
}

// ─── Transport de l'ammoniac ─────────────────────────────────────────────
export function AmmoniaTransportDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Transport de l'ammoniac : cycle glucose-alanine et glutamine" caption="Les groupes amine sont transférés à l'α-cétoglutarate (glutamate) puis libérés par désamination oxydative pour l'urée ; en périphérie ils voyagent sous forme non toxique : alanine (cycle glucose-alanine du muscle au foie) et glutamine (glutamine synthétase ; glutaminase du rein et de l'intestin)">
      <rect x={20} y={20} width={330} height={210} rx={14} fill={C.red} fillOpacity={0.08} stroke={C.red} strokeWidth={2} /><Txt x={185} y={42} bold size={12.5} color={DEEP.red}>Muscle</Txt>
      <Box x={40} y={56} w={130} h={44} t="Glycolyse" s="glucose → pyruvate" c={C.amber} size={11} />
      {arrow("M105,102 L105,128")}<Txt x={200} y={118} size={9.5} bold color={DEEP.green}>+ NH₂ (transamination)</Txt>
      <Box x={40} y={130} w={130} h={44} t="Alanine" c={C.green} size={12.5} />
      <Box x={200} y={130} w={130} h={44} t="Glutamine" s="glutamine synthétase" c={C.violet} size={11} />
      <Txt x={185} y={206} size={9.5} color={C.grey}>Glu + NH₃ → Gln (détoxification locale)</Txt>
      <path d="M170,138 C200,104 300,88 408,80" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><Txt x={300} y={84} size={9.5} bold color={DEEP.green}>par le sang</Txt>
      {arrow("M265,176 L265,260")}
      <rect x={390} y={20} width={330} height={210} rx={14} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} /><Txt x={555} y={42} bold size={12.5} color={DEEP.blue}>Foie</Txt>
      <Box x={410} y={56} w={130} h={44} t="Alanine → pyruvate" c={C.green} size={10.5} />
      <Box x={570} y={56} w={130} h={44} t="Glucose (néoglucogenèse)" c={C.amber} size={10} />
      {arrow("M540,78 L568,78")}
      <Box x={410} y={130} w={130} h={44} t="Glutamate" s="GDH → NH₃" c={C.red} size={11.5} />
      {arrow("M540,152 L570,152")}
      <Box x={570} y={130} w={130} h={44} t="Cycle de l'urée" c={C.violet} size={11.5} />
      <Txt x={555} y={206} size={9.5} color={C.grey}>le groupe amine de l'alanine rejoint l'urée</Txt>
      <Box x={90} y={262} w={240} h={56} t="Rein et intestin" s="glutaminase : Gln → Glu + NH₃" c={C.amber} size={11.5} />
      <Txt x={210} y={334} size={10} color={C.grey}>stimulée par l'acidose → excrétion de NH₄⁺</Txt>
      <Card x={20} y={356} w={340} h={98} color={DEEP.blue} title="Transamination puis désamination" lines={["acide aminé + α-cétoglutarate → glutamate", "glutamate → α-cétoglutarate + NH₃ (GDH)", "l'ammoniac libre est détoxifié en urée"]} />
      <Card x={380} y={356} w={340} h={98} color={DEEP.green} title="Cycle glucose-alanine" lines={["pyruvate musculaire → alanine → sang → foie", "→ pyruvate → glucose : renvoie du glucose", "et amène l'azote vers l'urée"]} />
    </Figure>
  );
}

// ─── Créatinine ──────────────────────────────────────────────────────────
export function CreatinineClearanceDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Créatinine : limites du dosage et clairance" caption="La créatinine sérique dépend de la masse musculaire, de l'âge, du sexe et de l'apport carné ; la clairance de la créatinine (95-150 mL/min) estime le DFG et baisse avant que la créatinine sérique n'augmente ; l'équation MDRD estime le DFG à partir de la créatinine, de l'âge et du sexe">
      <Box x={20} y={20} w={200} h={54} t="Créatine musculaire" s="phosphocréatine" c={C.amber} size={11.5} />
      {arrow("M220,47 L270,47")}
      <Box x={272} y={20} w={190} h={54} t="Créatinine" s="production stable" c={C.blue} size={12.5} />
      {arrow("M462,47 L512,47")}
      <Box x={514} y={20} w={206} h={54} t="Élimination rénale" s="filtration glomérulaire" c={C.green} size={11.5} />
      <Card x={20} y={96} w={340} h={132} color={DEEP.red} title="Limites de la créatinine sérique" lines={["masse musculaire : culturiste ≠ patient cachectique", "âge (↓ masse musculaire) et sexe (femme plus basse)", "viande : jusqu'à + 30 % de façon transitoire", "effort intense : élévation modérée transitoire"]} />
      <Card x={380} y={96} w={340} h={132} color={DEEP.blue} title="Dosage : réaction de Jaffé" lines={["variante Popper-Mandel-Mayer", "créatinine + acide picrique en milieu alcalin", "→ complexe coloré, lu au spectrophotomètre", "valeurs de référence selon âge et sexe"]} />
      <rect x={20} y={246} width={700} height={92} rx={12} fill={C.violet} fillOpacity={0.1} stroke={C.violet} strokeWidth={2} />
      <Txt x={370} y={272} bold size={13} color={DEEP.violet}>Ccr (mL/min) = (U × V) / (P × 1 440)</Txt>
      <Txt x={370} y={294} size={10.5} color={C.grey}>U = créatinine urinaire · V = volume urinaire des 24 h (mL) · P = créatinine plasmatique · 1 440 = minutes en 24 h</Txt>
      <Txt x={370} y={316} size={10.5} bold color={DEEP.green}>valeur normale : 95 – 150 mL/min (recueil urinaire de 24 h)</Txt>
      <Card x={20} y={352} w={340} h={92} color={DEEP.green} title="Marqueur précoce" lines={["la clairance baisse avant que la créatinine", "sérique n'augmente (néphropathie aiguë ou chronique)"]} />
      <Card x={380} y={352} w={340} h={92} color={DEEP.amber} title="Estimer le DFG par le calcul" lines={["équation MDRD (4 variables) : créatinine, âge,", "sexe (± origine ethnique) · dépistage du DFG réduit"]} />
    </Figure>
  );
}

// ─── Biosynthèse de l'hème ───────────────────────────────────────────────
export function HemeSynthesisDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Biosynthèse de l'hème : mitochondrie, cytosol, mitochondrie" caption="Glycine + succinyl-CoA forment l'ALA par l'ALA synthase (PLP), étape limitante inhibée par l'hème ; les étapes intermédiaires sont cytosoliques ; la ferrochélatase insère le fer dans la porphyrine ; plomb (porphobilinogène synthase), carence en B6 et déficits enzymatiques (porphyries) perturbent la voie">
      <rect x={20} y={14} width={700} height={100} rx={12} fill={C.amber} fillOpacity={0.08} stroke={C.amber} strokeWidth={1.8} /><Txt x={60} y={32} bold size={11} color={DEEP.amber}>Mitochondrie</Txt>
      <Box x={30} y={44} w={180} h={54} t="Glycine + succinyl-CoA" c={C.blue} size={11} />
      {arrow("M210,71 L282,71")}<Txt x={246} y={38} size={9} bold color={DEEP.red}>ALA synthase (PLP)</Txt>
      <Box x={284} y={44} w={160} h={54} t="δ-aminolévulinate (ALA)" s="étape limitante" c={C.green} size={10.5} />
      <path d="M444,71 L470,71 L470,138" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <rect x={20} y={126} width={700} height={104} rx={12} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={1.8} /><Txt x={50} y={144} bold size={11} color={DEEP.blue}>Cytosol</Txt>
      <Box x={330} y={150} w={210} h={54} t="Porphobilinogène (PBG)" s="PBG synthase (plomb ✕)" c={C.violet} size={10.5} />
      {arrow("M330,177 L268,177")}
      <Box x={60} y={150} w={206} h={54} t="Uroporphyrinogène → coproporphyrinogène" c={C.violet} size={9.5} />
      <path d="M160,206 L160,246" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <rect x={20} y={240} width={700} height={104} rx={12} fill={C.red} fillOpacity={0.08} stroke={C.red} strokeWidth={1.8} /><Txt x={60} y={258} bold size={11} color={DEEP.red}>Mitochondrie</Txt>
      <Box x={40} y={266} w={170} h={54} t="Protoporphyrine IX" c={C.red} size={11.5} />
      {arrow("M210,293 L330,293")}<Txt x={270} y={284} size={9} bold color={DEEP.red}>ferrochélatase + Fe²⁺</Txt>
      <Box x={332} y={266} w={130} h={54} t="HÈME" c={C.red} size={14} />
      <path d="M462,290 C560,290 560,240 470,66" fill="none" stroke={C.red} strokeWidth={2.4} strokeDasharray="6 4" />
      <circle cx={470} cy={70} r={5} fill={C.red} />
      <Txt x={572} y={190} anchor="start" size={10} bold color={DEEP.red}>rétro-inhibition de</Txt><Txt x={572} y={204} anchor="start" size={10} bold color={DEEP.red}>l'ALA synthase</Txt>
      <Card x={20} y={358} w={340} h={98} color={DEEP.red} title="Perturbations de la voie" lines={["porphyries : déficits enzymatiques héréditaires", "carence en B6 : ALA synthase inhibée", "plomb : inhibe la PBG synthase", "carence en fer : pas d'insertion de Fe²⁺"]} />
      <Card x={380} y={358} w={340} h={98} color={DEEP.blue} title="Dosage de l'hémoglobine" lines={["méthode à la cyanméthémoglobine", "Hb → méthémoglobine → complexe cyané", "lu au spectrophotomètre"]} />
    </Figure>
  );
}

// ─── Ictères ─────────────────────────────────────────────────────────────
export function JaundiceDiagram() {
  const rows: [string, string, string, string, string, string, string][] = [
    ["Pré-hépatique", "hémolyse excessive", "indirecte ↑", "absente", "augmenté", "normales", C.red],
    ["Hépatique", "hépatite, alcool, cirrhose", "directe et indirecte ↑", "présente (foncée)", "généralement ↑", "± pâles", C.amber],
    ["Post-hépatique", "calculs, tumeurs, sténoses", "directe ↑↑", "présente (foncée)", "absent / très bas", "décolorées", C.blue],
  ];
  const heads = ["Type", "Cause", "Bilirubine plasmatique", "Bilirubine urinaire", "Urobilinogène urinaire", "Selles"];
  const xs = [40, 150, 285, 410, 530, 660];
  return (
    <Figure viewBox="0 0 740 470" title="Les ictères : classification et désordres génétiques" caption="Toute perturbation de la production, de la conjugaison ou de l'excrétion de la bilirubine cause un ictère ; pré-hépatique (bilirubine indirecte, urines claires), hépatique (les deux formes) et post-hépatique (directe, selles décolorées) ; désordres génétiques : Gilbert, Crigler-Najjar (UGT1A1)">
      <rect x={20} y={14} width={700} height={40} rx={8} fill={C.grey} fillOpacity={0.15} stroke={C.grey} strokeWidth={1.6} />
      {heads.map((h, i) => <Txt key={h} x={xs[i]} y={38} anchor="start" bold size={10}>{h}</Txt>)}
      {rows.map((r, k) => (
        <g key={r[0]}>
          <rect x={20} y={62 + k * 64} width={700} height={56} rx={8} fill={r[6]} fillOpacity={0.12} stroke={r[6]} strokeWidth={1.6} />
          <rect x={20} y={62 + k * 64} width={7} height={56} rx={3.5} fill={r[6]} />
          {r.slice(0, 6).map((cell, i) => <Txt key={i} x={xs[i]} y={94 + k * 64} anchor="start" bold={i === 0} size={i === 0 ? 11 : 10} color={i === 0 ? undefined : C.grey}>{cell}</Txt>)}
        </g>
      ))}
      <Card x={20} y={262} w={340} h={100} color={DEEP.violet} title="Syndrome de Gilbert" lines={["autosomique récessif, fréquent", "hyperbilirubinémie non conjuguée légère,", "intermittente, pronostic excellent"]} />
      <Card x={380} y={262} w={340} h={100} color={DEEP.red} title="Syndrome de Crigler-Najjar" lines={["mutations du gène UGT1A1", "type I : UDP-glucuronosyltransférase absente", "type II : activité très réduite"]} />
      <Card x={20} y={376} w={700} h={82} color={DEEP.amber} title="Ictère néonatal" lines={["très fréquent (jusqu'à 60 % des nouveau-nés à terme, 80 % des prématurés), le plus souvent physiologique", "hémolyse accrue + conjugaison immature : hyperbilirubinémie non conjuguée"]} />
    </Figure>
  );
}
