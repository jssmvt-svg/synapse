import { Figure, C, Txt, Dot } from "./Figure";
import { RED, OK, DEEP, arrow, box, Axes } from "./FigKit";

// Biochimie — travaux pratiques du semestre 2 (glycémie, lipides, protéines, hème, acide urique).

// ─── 1. Transporteurs du glucose ─────────────────────────────────────────
export function LabGlucoseTransportersDiagram() {
  const rows: [string, string, string, string, string][] = [
    ["SGLT1", "cotransport Na⁺/glucose", "intestin (bordure en brosse), rein distal", "actif secondaire", C.violet],
    ["SGLT2", "cotransport Na⁺/glucose", "tube proximal du rein (S1) : seuil rénal ≈ 180 mg/dL", "actif secondaire", C.violet],
    ["GLUT1", "diffusion facilitée", "globules rouges, barrière hémato-encéphalique", "insulino-indépendant", C.blue],
    ["GLUT2", "diffusion facilitée (forte capacité)", "foie, cellules β, entérocyte (pôle basal), rein", "insulino-indépendant", C.blue],
    ["GLUT3", "diffusion facilitée (forte affinité)", "neurones", "insulino-indépendant", C.blue],
    ["GLUT4", "diffusion facilitée", "muscle strié, tissu adipeux", "insulino-DÉPENDANT", RED],
    ["GLUT5", "diffusion facilitée du fructose", "intestin, testicule", "insulino-indépendant", C.amber],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Transporteurs du glucose : GLUT et SGLT" caption="SGLT : transport actif secondaire (gradient de Na⁺) ; GLUT : diffusion facilitée ; GLUT4 est le seul insulino-dépendant : l'insuline provoque son insertion dans la membrane">
      {rows.map(([n, m, t, k, c], i) => (
        <g key={n} transform={`translate(0 ${10 + i * 50})`}>
          <rect x={10} y={0} width={720} height={42} rx={8} fill={c} fillOpacity={0.08} stroke={c} strokeWidth={1.8} />
          <rect x={10} y={0} width={80} height={42} rx={8} fill={c} fillOpacity={0.85} /><Txt x={50} y={26} bold size={14} color="#fff">{n}</Txt>
          <Txt x={100} y={18} anchor="start" bold size={11}>{m}</Txt><Txt x={100} y={34} anchor="start" size={10} color={C.grey}>{t}</Txt>
          <rect x={570} y={9} width={150} height={24} rx={12} fill={c} fillOpacity={0.2} /><Txt x={645} y={25} bold size={10} color={c === RED ? RED : "currentColor"}>{k}</Txt>
        </g>
      ))}
      <rect x={10} y={366} width={720} height={64} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={388} bold size={11.5}>Insuline → récepteur → vésicules GLUT4 fusionnent avec la membrane → ↑ entrée de glucose</Txt>
      <Txt x={370} y={408} size={10.5} color={C.grey}>résistance à l'insuline : ↓ recrutement de GLUT4 → hyperglycémie (diabète de type 2)</Txt>
      <Dot path="M100,400 L600,400" dur={6} r={5} color={C.green} />
    </Figure>
  );
}

// ─── 2. HGPO ─────────────────────────────────────────────────────────────
export function LabOgttDiagram() {
  const X = (t: number) => 90 + (t / 120) * 470;
  const Y = (g: number) => 340 - ((g - 60) / 200) * 280;
  const curves: [string, [number, number][], string][] = [
    ["Normal", [[0, 90], [30, 140], [60, 130], [90, 110], [120, 95]], OK],
    ["Intolérance au glucose", [[0, 120], [30, 190], [60, 190], [90, 170], [120, 160]], C.amber],
    ["Diabète sucré", [[0, 140], [30, 230], [60, 250], [90, 240], [120, 230]], RED],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Hyperglycémie provoquée par voie orale (HGPO)" caption="Glycémie après 75 g de glucose : normal < 140 mg/dL à 120 min ; intolérance : 140-200 ; diabète > 200 ; à jeun > 126 mg/dL : diabète déjà établi, test inutile">
      <Axes x={90} y={60} w={470} h={280} xl="temps après la charge en glucose (min)" yl="glycémie (mg/dL)" />
      {[0, 30, 60, 90, 120].map((t) => <g key={t}><line x1={X(t)} y1={340} x2={X(t)} y2={346} stroke="currentColor" /><Txt x={X(t)} y={360} size={10.5}>{String(t)}</Txt></g>)}
      {[75, 115, 140, 180, 200, 250].map((g) => <g key={g}><line x1={84} y1={Y(g)} x2={90} y2={Y(g)} stroke="currentColor" /><Txt x={78} y={Y(g) + 4} anchor="end" size={10}>{String(g)}</Txt></g>)}
      <line x1={90} y1={Y(180)} x2={560} y2={Y(180)} stroke={C.violet} strokeDasharray="6 4" strokeWidth={2} />
      <Txt x={556} y={Y(180) - 5} anchor="end" size={10} bold color="#6a45b0">seuil rénal ≈ 180 mg/dL (glycosurie)</Txt>
      <line x1={X(120)} y1={Y(140)} x2={X(120) + 24} y2={Y(140)} stroke="currentColor" strokeWidth={2} /><line x1={X(120)} y1={Y(200)} x2={X(120) + 24} y2={Y(200)} stroke="currentColor" strokeWidth={2} />
      {curves.map(([t, pts, c]) => {
        const d = pts.map((p, i) => `${i ? "L" : "M"}${X(p[0])},${Y(p[1])}`).join(" ");
        return (
          <g key={t}>
            <path d={d} fill="none" stroke={c} strokeWidth={4} strokeLinejoin="round" />
            {pts.map((p, i) => <circle key={i} cx={X(p[0])} cy={Y(p[1])} r={4.5} fill={c} />)}
            <Dot path={d} dur={6} r={6} color={c} />
          </g>
        );
      })}
      <rect x={590} y={60} width={140} height={296} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={660} y={82} bold size={11.5}>Interprétation</Txt>
      {[["Normal", "à jeun 75–115", "2 h < 140", OK], ["Intolérance", "à jeun 115–126", "2 h 140–200", C.amber], ["Diabète", "à jeun > 126", "2 h > 200", RED]].map(([t, a, b, c], i) => (
        <g key={String(t)}><rect x={600} y={96 + i * 82} width={120} height={72} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} /><Txt x={660} y={116 + i * 82} bold size={11} color={String(c)}>{String(t)}</Txt><Txt x={660} y={136 + i * 82} size={9.5}>{String(a)}</Txt><Txt x={660} y={152 + i * 82} size={9.5}>{String(b)}</Txt></g>
      ))}
      <rect x={20} y={378} width={700} height={50} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={398} size={10.5}>contre-indications : diabète connu, maladie fébrile aiguë, trouble de l'absorption digestive • cétonurie et glycosurie négatives</Txt>
      <Txt x={370} y={416} size={10} color={C.grey}>mesures : à jeun, 30, 60, 90 et 120 min ; valeurs normales de la glycémie à jeun : 75-115 mg/dL (4,16-6,38 mmol/L)</Txt>
    </Figure>
  );
}

// ─── 3. HbA1c ────────────────────────────────────────────────────────────
export function LabHba1cDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Hémoglobine glyquée (HbA1c)" caption="Glycation non enzymatique de l'hémoglobine : base de Schiff (réversible) puis réarrangement d'Amadori (stable) ; l'HbA1c reflète la glycémie moyenne des 2-3 derniers mois ; eAG = 28,7 × HbA1c − 46,7">
      {box(20, 30, 130, 50, "Glucose", "sang", C.amber, 13)}
      <Txt x={168} y={62} bold size={20}>+</Txt>
      {box(186, 30, 160, 50, "HbA (valine N-term.)", "chaîne β", C.red, 12)}
      {arrow("M350,54 L410,54", true)}<Txt x={380} y={42} size={10} bold color="#6a45b0">non enzymatique</Txt>
      {box(414, 30, 130, 50, "Base de Schiff", "aldimine, labile", C.violet, 12)}
      {arrow("M548,54 L590,54", true)}<Txt x={569} y={42} size={9.5} bold color={C.grey}>Amadori</Txt>
      {box(594, 30, 130, 50, "HbA1c", "cétoamine, stable", C.red, 13)}
      <Txt x={370} y={112} size={10.5} color={C.grey}>la base de Schiff dépend de la glycémie du moment ; l'HbA1c stable est celle qui est mesurée</Txt>
      <rect x={20} y={130} width={330} height={150} rx={10} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={2} />
      <Txt x={185} y={152} bold size={12} color={C.blue}>Mémoire de 2 à 3 mois</Txt>
      {Array.from({ length: 8 }).map((_, i) => <ellipse key={i} cx={56 + i * 36} cy={200} rx={14} ry={11} fill="#d9414f" fillOpacity={0.4 + i * 0.07} stroke="#8f2530" strokeWidth={1.5} />)}
      <line x1={44} y1={232} x2={330} y2={232} stroke="currentColor" strokeWidth={1.5} markerEnd="url(#fig-arrow)" />
      <Txt x={60} y={250} size={9.5} color={C.grey} anchor="start">globules jeunes</Txt><Txt x={330} y={250} size={9.5} color={C.grey} anchor="end">âgés (120 jours)</Txt>
      <Txt x={185} y={270} size={10} bold>plus un globule est âgé, plus il est glyqué</Txt>
      <rect x={370} y={130} width={350} height={150} rx={10} fill={C.green} fillOpacity={0.07} stroke={C.green} strokeWidth={2} />
      <Txt x={545} y={152} bold size={12} color="#2a7a55">Interprétation</Txt>
      {[["< 7 %", "diabète bien contrôlé", OK], ["> 7 %", "contrôle insuffisant", C.amber], ["jusqu'à 20 %", "mauvais contrôle prolongé", RED]].map(([v, t, c], i) => (
        <g key={String(v)}><rect x={384} y={166 + i * 36} width={100} height={28} rx={14} fill={String(c)} /><Txt x={434} y={185 + i * 36} bold size={12} color="#fff">{String(v)}</Txt><Txt x={496} y={185 + i * 36} anchor="start" size={11}>{String(t)}</Txt></g>
      ))}
      <rect x={20} y={298} width={700} height={112} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={200} y={320} bold size={11.5}>Glycémie moyenne estimée (eAG)</Txt>
      <Txt x={200} y={340} size={10.5}>HbA1c 6 % → 126 mg/dL</Txt><Txt x={200} y={358} size={10.5}>HbA1c 9 % → 212 mg/dL</Txt>
      <Txt x={520} y={320} bold size={11.5}>Surveillance</Txt>
      <Txt x={520} y={340} size={10.5}>diabète de type 1 : tous les 3-4 mois</Txt><Txt x={520} y={358} size={10.5}>diabète de type 2 stable : tous les 6 mois</Txt>
      <Txt x={370} y={392} size={10} color={C.grey}>limites : peu fiable en cas d'anémie hémolytique ou ferriprive (renouvellement anormal des globules rouges)</Txt>
    </Figure>
  );
}

// ─── 4. Bilan lipidique ──────────────────────────────────────────────────
export function LabLipidPanelDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Bilan lipidique et équation de Friedewald" caption="LDL = cholestérol total − (HDL + VLDL) avec VLDL ≈ triglycérides / 5 (mg/dL) ; LDL < 150 : pas de traitement, 150-190 : risque modéré, > 190 : risque élevé ; indices athérogènes : CT/HDL > 5, LDL/HDL > 3,5 (H) ou 2,5 (F)">
      <rect x={20} y={20} width={330} height={100} rx={10} fill={C.amber} fillOpacity={0.09} stroke={C.amber} strokeWidth={2} />
      <Txt x={185} y={44} bold size={12} color="#a3701a">Cholestérol total (CT)</Txt>
      <rect x={40} y={58} width={290} height={34} fill="none" stroke="currentColor" strokeWidth={2} />
      <rect x={40} y={58} width={110} height={34} fill={C.green} fillOpacity={0.6} /><Txt x={95} y={80} bold size={11}>HDL</Txt>
      <rect x={150} y={58} width={50} height={34} fill={C.violet} fillOpacity={0.6} /><Txt x={175} y={80} bold size={10}>VLDL</Txt>
      <rect x={200} y={58} width={130} height={34} fill={C.red} fillOpacity={0.6} /><Txt x={265} y={80} bold size={11}>LDL</Txt>
      <Txt x={185} y={110} size={10} color={C.grey}>CT = HDL + VLDL + LDL</Txt>
      <rect x={370} y={20} width={350} height={100} rx={10} fill={C.blue} fillOpacity={0.09} stroke={C.blue} strokeWidth={2} />
      <Txt x={545} y={46} bold size={15}>LDL = CT − HDL − TG / 5</Txt>
      <Txt x={545} y={70} size={11}>VLDL ≈ TG / 5 (mg/dL)</Txt>
      <Txt x={545} y={92} size={10} color={C.grey}>valable pour TG modérés, à jeun</Txt>
      <Txt x={370} y={152} bold size={12.5}>Interprétation du LDL (mg/100 mL)</Txt>
      {[[20, 250, "< 150", "aucun traitement nécessaire", OK], [250, 500, "150 – 190", "risque modéré d'athérosclérose", C.amber], [500, 720, "> 190", "risque élevé : traitement nécessaire", RED]].map(([a, b, v, t, c]) => (
        <g key={String(v)}>
          <rect x={Number(a)} y={166} width={Number(b) - Number(a)} height={44} fill={String(c)} fillOpacity={0.55} stroke="#fff" strokeWidth={2} />
          <Txt x={(Number(a) + Number(b)) / 2} y={186} bold size={13} color="#fff">{String(v)}</Txt>
          <Txt x={(Number(a) + Number(b)) / 2} y={202} size={10} color="#fff">{String(t)}</Txt>
        </g>
      ))}
      <rect x={20} y={230} width={700} height={180} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={254} bold size={12}>Indices athérogènes et facteurs de risque</Txt>
      {[["CT / HDL", "prédictif si > 5", C.violet], ["LDL / HDL", "> 3,5 (homme) • > 2,5 (femme)", C.red], ["Obésité", "IMC ≥ 30 kg/m² + tour de taille", C.amber], ["Athérosclérose", "LDL oxydé → macrophages spumeux → plaque", C.blue]].map(([t, s, c], i) => (
        <g key={String(t)} transform={`translate(${30 + (i % 2) * 346} ${272 + Math.floor(i / 2) * 64})`}>
          <rect x={0} y={0} width={334} height={54} rx={8} fill={String(c)} fillOpacity={0.09} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={167} y={22} bold size={11.5} color={String(c)}>{String(t)}</Txt><Txt x={167} y={40} size={10.5}>{String(s)}</Txt>
        </g>
      ))}
      <Txt x={370} y={400} size={10} color={C.grey}>une baisse de 10 % du cholestérol total réduit le risque coronarien • score EURO : intégration de plusieurs facteurs</Txt>
    </Figure>
  );
}

// ─── 5. Transaminases : test optique ─────────────────────────────────────
export function LabTransaminasesDiagram() {
  const X = (t: number) => 480 + (t / 5) * 230;
  const Y = (a: number) => 300 - a * 180;
  return (
    <Figure viewBox="0 0 740 440" title="ALAT / ASAT : réaction de transamination et test optique" caption="Alanine + α-cétoglutarate ⇌ pyruvate + glutamate (ALAT) ; aspartate + α-cétoglutarate ⇌ oxaloacétate + glutamate (ASAT) ; le produit est réduit par la LDH (ou MDH) avec consommation de NADH : la baisse de l'absorbance à 340 nm mesure l'activité">
      {box(20, 24, 100, 40, "Alanine", "(ALAT)", C.blue, 12)}<Txt x={130} y={50} bold size={16}>+</Txt>{box(146, 24, 110, 40, "α-cétoglutarate", undefined, C.amber, 11)}
      {arrow("M262,44 L330,44")}{arrow("M330,58 L262,58")}<Txt x={296} y={34} size={9.5} bold color="#6a45b0">ALAT • PLP</Txt>
      {box(336, 24, 100, 40, "Pyruvate", undefined, C.green, 12)}<Txt x={446} y={50} bold size={16}>+</Txt>{box(462, 24, 110, 40, "Glutamate", undefined, C.violet, 12)}
      {arrow("M386,68 L386,100")}<Txt x={396} y={90} anchor="start" size={10} bold color={RED}>LDH + NADH → lactate + NAD⁺</Txt>
      <Txt x={640} y={40} bold size={11} color={C.grey}>ASAT : aspartate → oxaloacétate</Txt><Txt x={640} y={58} size={10} color={C.grey}>(réduit par la MDH)</Txt>
      <Axes x={70} y={130} w={330} h={170} xl="temps" yl="A340" />
      <path d="M70,150 L400,290" stroke={C.amber} strokeWidth={4} /><Dot path="M70,150 L400,290" dur={4} r={6} color={RED} />
      <Txt x={200} y={196} anchor="start" size={10.5} bold color="#a3701a">NADH consommé : l'absorbance diminue</Txt>
      <line x1={420} y1={120} x2={420} y2={320} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <rect x={440} y={124} width={280} height={190} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={580} y={146} bold size={11.5}>Comparaison</Txt>
      {[["", "ALAT", "ASAT"], ["Localisation", "cytoplasme", "cytoplasme + mitochondrie"], ["Tissus", "quasi hépatique", "foie, cœur, muscle, rein"], ["Spécificité", "plus spécifique du foie", "↑ aussi : infarctus, muscle"]].map(([a, b, c], i) => (
        <g key={i}><Txt x={456} y={172 + i * 34} anchor="start" size={10} bold color={C.grey}>{a}</Txt><Txt x={548} y={172 + i * 34} anchor="start" size={10} bold={i === 0}>{b}</Txt><Txt x={640} y={172 + i * 34} anchor="start" size={10} bold={i === 0}>{c}</Txt></g>
      ))}
      <rect x={20} y={334} width={700} height={92} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={356} bold size={11.5}>Signification clinique</Txt>
      <Txt x={370} y={376} size={10.5}>ALAT ↑↑ : atteinte hépatique (hépatite, cytolyse) • ASAT ↑ : foie mais aussi cœur, muscle, hémolyse</Txt>
      <Txt x={370} y={396} size={10.5}>atteinte hépatique légère : forme cytoplasmique ; atteinte sévère : forme mitochondriale libérée</Txt>
      <Txt x={370} y={414} size={10} color={C.grey}>dosage cinétique : suivre la variation d'absorbance dans le temps</Txt>
    </Figure>
  );
}

// ─── 6. Dosage de l'urée ─────────────────────────────────────────────────
export function LabUreaDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Dosage enzymatique de l'urée (uréase et glutamate déshydrogénase)" caption="Urée + H₂O → 2 NH₃ + CO₂ (uréase) ; NH₃ + α-cétoglutarate + NADH → glutamate + NAD⁺ (GLDH) : la baisse d'absorbance à 340 nm est proportionnelle à l'urée ; norme sérique 15-45 mg/dL">
      {box(20, 30, 100, 44, "Urée", undefined, C.amber, 13)}{arrow("M124,52 L200,52")}<Txt x={162} y={40} size={10} bold color={RED}>uréase + H₂O</Txt>
      {box(204, 30, 150, 44, "2 NH₃ + CO₂", undefined, C.blue, 13)}{arrow("M358,52 L420,52")}<Txt x={389} y={40} size={10} bold color={RED}>GLDH</Txt>
      {box(424, 30, 140, 44, "Glutamate", "+ NAD⁺", C.violet, 12)}
      <Txt x={389} y={96} size={10.5} color={C.grey}>+ α-cétoglutarate + NADH</Txt>
      {box(590, 30, 130, 44, "NADH ↓", "A340 diminue", C.red, 12)}
      <Dot path="M120,52 L204,52 L354,52 L424,52 L564,52 L590,52" dur={5} r={7} color={C.amber} />
      <Axes x={70} y={130} w={300} h={140} xl="temps" yl="A340" />
      <path d="M70,150 L370,255" stroke={C.red} strokeWidth={4} />
      <Txt x={200} y={192} anchor="start" size={10.5} bold color={RED}>plus il y a d'urée, plus l'absorbance chute</Txt>
      <rect x={410} y={130} width={310} height={140} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={152} bold size={11.5}>Valeurs et échantillons</Txt>
      {["sérum : 15-45 mg/dL (1,7-7,5 mmol/L)", "urine de 24 h : 20-36 g", "plasma hépariné (pas de fluorure : inhibe l'uréase)", "≈ 90 % de l'urée est excrétée par le rein"].map((t, i) => <Txt key={t} x={565} y={176 + i * 22} size={10.5}>{t}</Txt>)}
      <rect x={20} y={300} width={700} height={88} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={322} bold size={11.5}>Signification clinique</Txt>
      <Txt x={370} y={342} size={10.5}>↑ urée : insuffisance rénale, déshydratation, régime hyperprotéique, catabolisme • ↓ : insuffisance hépatique, hémodilution</Txt>
      <Txt x={370} y={362} size={10} color={C.grey}>l'urée (BUN) a été le premier marqueur de la fonction rénale ; moins spécifique que la créatinine</Txt>
    </Figure>
  );
}

// ─── 7. Créatinine ───────────────────────────────────────────────────────
export function LabCreatinineDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Créatine, créatinine et clairance de la créatinine" caption="La créatine (foie, rein, muscle) est convertie en phosphocréatine puis, spontanément, en créatinine éliminée par filtration glomérulaire ; Ccr = (U × V) / (P × 1440), norme 95-150 mL/min">
      {box(20, 30, 120, 44, "Arg + Gly + Met", "reins, foie", C.blue, 11)}{arrow("M144,52 L184,52")}
      {box(188, 30, 100, 44, "Créatine", undefined, C.green, 12.5)}{arrow("M292,52 L332,52")}<Txt x={312} y={40} size={9.5} bold color={C.grey}>muscle</Txt>
      {box(336, 30, 130, 44, "Phosphocréatine", "réserve d'énergie", C.amber, 11)}{arrow("M470,52 L510,52")}<Txt x={490} y={40} size={9.5} bold color={C.grey}>spontané</Txt>
      {box(514, 30, 110, 44, "Créatinine", "≈ constante", C.violet, 12)}{arrow("M628,52 L668,52")}
      {box(672, 30, 56, 44, "Rein", undefined, C.red, 12)}
      <Txt x={370} y={100} size={10.5} color={C.grey}>production proportionnelle à la masse musculaire • filtrée librement (une faible sécrétion tubulaire)</Txt>
      <rect x={20} y={124} width={340} height={130} rx={10} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={2} />
      <Txt x={190} y={146} bold size={12} color={C.blue}>Clairance de la créatinine</Txt>
      <Txt x={190} y={172} bold size={15}>Ccr = (U × V) / (P × 1440)</Txt>
      {["U : créatinine urinaire", "V : volume des urines de 24 h (mL)", "P : créatinine plasmatique • 1440 = min/24 h"].map((t, i) => <Txt key={t} x={190} y={196 + i * 18} size={10.5}>{t}</Txt>)}
      <rect x={380} y={124} width={340} height={130} rx={10} fill={C.green} fillOpacity={0.07} stroke={C.green} strokeWidth={2} />
      <Txt x={550} y={146} bold size={12} color="#2a7a55">Valeurs normales</Txt>
      {[["Créatinine sérique", "0,4 – 1,5 mg/dL (45-95 µmol/L)"], ["Créatinine urinaire", "1 – 1,8 g / 24 h"], ["Clairance de la créatinine", "95 – 150 mL/min"]].map(([a, b], i) => <g key={a}><Txt x={550} y={172 + i * 26} size={10.5} bold>{a}</Txt><Txt x={550} y={186 + i * 26} size={10} color={C.grey}>{b}</Txt></g>)}
      <rect x={20} y={272} width={700} height={138} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={294} bold size={11.5}>Dosage : réaction de Jaffé</Txt>
      <Txt x={370} y={314} size={10.5}>créatinine + acide picrique (milieu alcalin) → complexe rouge-orangé, lecture photométrique</Txt>
      <Txt x={370} y={334} bold size={11} color={RED}>Limites comme marqueur du DFG</Txt>
      <Txt x={370} y={354} size={10.5}>dépend de la masse musculaire • sécrétion tubulaire • interférences (Jaffé) • ↑ tardive : ne monte qu'après perte importante du DFG</Txt>
      <Txt x={370} y={378} size={10} color={C.grey}>sérum : A échantillon / A étalon × 2 mg/dL — urine : × 2 g/L (formules du TP)</Txt>
    </Figure>
  );
}

// ─── 8. Hème et bilirubine ───────────────────────────────────────────────
export function LabBilirubinDiagram() {
  return (
    <Figure viewBox="0 0 740 500" title="Catabolisme de l'hème et bilirubine : ictères" caption="Hème → biliverdine → bilirubine indirecte (liée à l'albumine) → conjuguée dans le foie (bilirubine directe) → bile → urobilinogène ; classification : pré-hépatique, hépatique, post-hépatique">
      {box(20, 20, 110, 44, "Hème", "globules rouges âgés", C.red, 11.5)}{arrow("M134,42 L168,42")}
      {box(172, 20, 110, 44, "Biliverdine", "vert", C.green, 12)}{arrow("M286,42 L320,42")}
      {box(324, 20, 150, 44, "Bilirubine indirecte", "non conjuguée + albumine", C.amber, 10.5)}{arrow("M478,42 L512,42")}
      {box(516, 20, 110, 44, "Foie", "glucuronyl-transférase", C.violet, 10.5)}{arrow("M630,42 L664,42")}
      {box(668, 20, 62, 44, "Directe", "conjuguée", C.blue, 10)}
      <Txt x={75} y={84} size={9.5} bold color={C.grey}>macrophages (rate)</Txt>
      {arrow("M700,68 L700,110")}
      {box(590, 114, 140, 40, "Bile → intestin", undefined, C.green, 11.5)}{arrow("M660,158 L660,186")}
      {box(590, 190, 140, 40, "Urobilinogène", "flore intestinale", C.amber, 11)}
      <Txt x={520} y={186} anchor="end" size={10} color={C.grey}>→ stercobiline (selles)</Txt><Txt x={520} y={204} anchor="end" size={10} color={C.grey}>→ urobiline (urines)</Txt>
      <Dot path="M130,42 L172,42 L282,42 L324,42 L474,42 L516,42 L626,42 L668,42 L700,68 L700,134 L660,150 L660,210" dur={9} r={7} color={C.amber} />
      <Txt x={300} y={128} bold size={12} color={C.grey}>Valeurs normales</Txt>
      {[["Bilirubine totale", "< 1,0 mg/dL"], ["Directe", "< 0,2 mg/dL"], ["Indirecte", "< 0,8 mg/dL"]].map(([a, b], i) => <g key={a}><rect x={20 + i * 170} y={142} width={160} height={54} rx={8} fill={C.amber} fillOpacity={0.12} stroke={C.amber} strokeWidth={1.8} /><Txt x={100 + i * 170} y={164 + 0} bold size={11}>{a}</Txt><Txt x={100 + i * 170} y={184} bold size={12} color="#2a7a55">{b}</Txt></g>)}
      <Txt x={370} y={236} bold size={12.5}>Classification de l'ictère</Txt>
      {[["Pré-hépatique", "hémolyse : bilirubine indirecte ↑", "urines normales, selles foncées", C.amber], ["Hépatique", "hépatite, cirrhose : indirecte et directe ↑", "urines foncées, selles pâles ou normales", C.violet], ["Post-hépatique", "obstruction biliaire : directe ↑", "urines foncées, selles décolorées", C.blue]].map(([t, a, b, c], i) => (
        <g key={String(t)} transform={`translate(${6 + i * 246} 250)`}>
          <rect x={0} y={0} width={236} height={124} rx={10} fill={String(c)} fillOpacity={0.08} stroke={String(c)} strokeWidth={2} />
          <Txt x={118} y={24} bold size={12.5} color={String(c)}>{String(t)}</Txt><Txt x={118} y={54} size={10.5}>{String(a).slice(0, 34)}</Txt><Txt x={118} y={70} size={10.5}>{String(a).slice(34).trim()}</Txt><Txt x={118} y={96} size={10} color={C.grey}>{String(b).slice(0, 36)}</Txt><Txt x={118} y={110} size={10} color={C.grey}>{String(b).slice(36).trim()}</Txt>
        </g>
      ))}
      <rect x={20} y={388} width={700} height={100} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={410} bold size={11.5}>Désordres génétiques de la bilirubine</Txt>
      <Txt x={370} y={430} size={10.5}>déficit de conjugaison (glucuronyl-transférase) : syndromes de Gilbert et de Crigler-Najjar → bilirubine indirecte ↑</Txt>
      <Txt x={370} y={450} size={10.5}>dosage : méthode diazoïque de Jendrassik-Grof (bilirubine directe et totale)</Txt>
      <Txt x={370} y={470} size={10} color={C.grey}>hémoglobine : dosage par la méthode à la cyanméthémoglobine</Txt>
    </Figure>
  );
}

// ─── 9. Acide urique ─────────────────────────────────────────────────────
export function LabUricAcidDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Catabolisme des purines, acide urique et goutte" caption="Purines → hypoxanthine → xanthine → acide urique (xanthine oxydase) ; valeur normale 1-7 mg/100 mL ; l'urate monosodique cristallise au-delà de 6 mg/dL (goutte) ; l'allopurinol inhibe la xanthine oxydase">
      {box(20, 30, 130, 44, "AMP, GMP", "acides nucléiques", C.blue, 12)}{arrow("M154,52 L194,52")}
      {box(198, 30, 120, 44, "Hypoxanthine", undefined, C.green, 11.5)}{arrow("M322,52 L362,52")}<Txt x={342} y={40} size={9} bold color={RED}>xanthine oxydase</Txt>
      {box(366, 30, 100, 44, "Xanthine", undefined, C.amber, 12)}{arrow("M470,52 L510,52")}<Txt x={490} y={40} size={9} bold color={RED}>xanthine oxydase</Txt>
      {box(514, 30, 120, 44, "Acide urique", "urate", C.red, 12.5)}{arrow("M638,52 L676,52")}
      {box(680, 30, 50, 44, "Rein", undefined, C.violet, 11)}
      <Dot path="M150,52 L198,52 L322,52 L366,52 L466,52 L514,52 L634,52 L680,52" dur={7} r={7} color={C.amber} />
      <rect x={344} y={96} width={140} height={28} rx={14} fill={C.green} fillOpacity={0.9} /><Txt x={414} y={115} bold size={11} color="#fff">allopurinol : ↓ urate</Txt>
      <path d="M414,96 L414,78" stroke={C.green} strokeWidth={3} markerEnd="url(#fig-arrow)" />
      <Txt x={130} y={130} size={10.5} color={C.grey}>production surtout hépatique (purines endogènes et exogènes)</Txt>
      <Txt x={130} y={148} size={10.5} color={C.grey}>≈ 2/3 excrété par le rein, 1/3 par l'intestin</Txt>
      <rect x={20} y={172} width={340} height={120} rx={10} fill={C.green} fillOpacity={0.07} stroke={C.green} strokeWidth={2} />
      <Txt x={190} y={194} bold size={12} color="#2a7a55">Valeurs de référence</Txt>
      {[["Uricémie normale", "1 – 7 mg/100 mL"], ["Seuil de solubilité", "≈ 6 mg/dL (urate monosodique)"], ["Dosage colorimétrique", "réduction de l'acide phosphotungstique, 710 nm"]].map(([a, b], i) => <g key={a}><Txt x={190} y={218 + i * 24} size={10.5} bold>{a}</Txt><Txt x={190} y={232 + i * 24} size={10} color={C.grey}>{b}</Txt></g>)}
      <rect x={380} y={172} width={340} height={120} rx={10} fill={C.red} fillOpacity={0.07} stroke={C.red} strokeWidth={2} />
      <Txt x={550} y={194} bold size={12} color={RED}>Hyperuricémie et goutte</Txt>
      {[[470, 250], [520, 240], [560, 262], [600, 246], [650, 256]].map(([x, y], i) => <g key={i}><line x1={x} y1={y} x2={x + 16} y2={y - 26} stroke={C.red} strokeWidth={3} /><line x1={x + 4} y1={y} x2={x + 20} y2={y - 22} stroke={C.red} strokeWidth={2} /></g>)}
      <Txt x={550} y={278} size={10.5}>cristaux d'urate dans l'articulation → crise de goutte</Txt>
      <rect x={20} y={308} width={700} height={120} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={330} bold size={11.5}>Causes</Txt>
      <Txt x={200} y={352} bold size={11} color={RED}>↑ uricémie</Txt><Txt x={200} y={370} size={10.5}>surproduction (turn-over cellulaire, chimiothérapie)</Txt><Txt x={200} y={388} size={10.5}>↓ élimination rénale • alimentation riche en purines</Txt>
      <Txt x={540} y={352} bold size={11} color={C.blue}>↓ uricémie</Txt><Txt x={540} y={370} size={10.5}>déficit en xanthine oxydase</Txt><Txt x={540} y={388} size={10.5}>traitements hypo-uricémiants</Txt>
      <Txt x={370} y={416} size={10} color={C.grey}>syndrome de Lesch-Nyhan (déficit en HGPRT) : surproduction majeure d'urate</Txt>
    </Figure>
  );
}
