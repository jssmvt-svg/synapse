import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Ax, Card, dash, grid } from "./PhysCardio";
import { Box, arrow } from "./PhysRespEndo";

// Physiologie S1 — labos : schémas des sous-parties (valeurs de référence du cours).

// ─── Osmolarité : pourquoi multiplier Na⁺ par 2 ──────────────────────────
export function OsmWhyDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Osmolarité plasmatique : pourquoi Na⁺ × 2 ?" caption="Chaque Na⁺ est associé à un anion (surtout Cl⁻) pour respecter l'électroneutralité : multiplier le sodium par 2 estime la contribution osmotique du sodium et de ses anions sans les doser ; ce n'est pas une conversion d'unité ; valeur normale : 285-295 mOsm/L">
      <Txt x={190} y={22} bold size={12}>Électroneutralité du plasma</Txt>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={100} cy={64 + i * 56} r={20} fill={C.blue} fillOpacity={0.35} stroke={C.blue} strokeWidth={2} /><Txt x={100} y={69 + i * 56} bold size={12}>Na⁺</Txt>
          <path d={`M124,${64 + i * 56} L156,${64 + i * 56}`} stroke="currentColor" strokeWidth={2.4} />
          <circle cx={182} cy={64 + i * 56} r={20} fill={C.red} fillOpacity={0.35} stroke={C.red} strokeWidth={2} /><Txt x={182} y={69 + i * 56} bold size={12}>Cl⁻</Txt>
        </g>
      ))}
      <Txt x={140} y={224} size={10} color={C.grey}>1 Na⁺ + 1 anion associé = 2 particules actives</Txt>
      <Txt x={475} y={22} bold size={12}>Cosm = [Na⁺ × 2] + glucose / 18 + urée / 6</Txt>
      {/* barre empilée : exemple du cours */}
      <Txt x={475} y={52} size={10} color={C.grey}>exemple : Na⁺ 140 mEq/L, glycémie 180 mg/dL, urée 30 mg/dL</Txt>
      <rect x={300} y={70} width={280 * 0.86} height={44} fill={C.blue} fillOpacity={0.45} stroke={C.blue} strokeWidth={2} /><Txt x={300 + 140 * 0.86} y={98} bold size={12}>280</Txt>
      <rect x={300 + 280 * 0.86} y={70} width={10 * 0.86} height={44} fill={C.amber} fillOpacity={0.6} stroke={C.amber} strokeWidth={1.6} />
      <rect x={300 + 290 * 0.86} y={70} width={5 * 0.86} height={44} fill={C.green} fillOpacity={0.6} stroke={C.green} strokeWidth={1.6} />
      <Txt x={300 + 142 * 0.86} y={132} bold size={10.5} color={DEEP.blue}>Na⁺ × 2 = 280 (Na⁺ + anions associés)</Txt>
      <path d="M544,112 L556,138" stroke={C.amber} strokeWidth={2} /><Txt x={568} y={152} anchor="middle" bold size={10.5} color={DEEP.amber}>glucose/18 = 10</Txt>
      <path d="M556,112 L640,166" stroke={C.green} strokeWidth={2} /><Txt x={655} y={180} anchor="middle" bold size={10.5} color={DEEP.green}>urée/6 = 5</Txt>
      <Txt x={475} y={210} bold size={13} color={DEEP.violet}>Cosm = 280 + 10 + 5 = 295 mOsm/L</Txt>
      <Txt x={475} y={234} size={10} bold color={DEEP.green}>normal : 285 – 295 mOsm/L</Txt>
      <Card x={30} y={268} w={220} h={100} color={DEEP.amber} title="Glucose ÷ 18" lines={["glycémie 70-110 mg/dL", "le diviseur convertit des", "mg/dL en mOsm/L"]} />
      <Card x={260} y={268} w={220} h={100} color={DEEP.green} title="Urée ÷ 6" lines={["urée 15-45 mg/dL", "même principe de conversion", "mg/dL → mOsm/L"]} />
      <Card x={490} y={268} w={220} h={100} color={DEEP.blue} title="Na⁺ × 2" lines={["contribution dominante", "compense les anions associés", "(≠ conversion d'unité)"]} />
      <Txt x={370} y={404} size={10.5} color={C.grey}>Le sodium est le principal cation extracellulaire : il domine l'osmolarité plasmatique</Txt>
    </Figure>
  );
}

// ─── Trou anionique urinaire ─────────────────────────────────────────────
export function UrineAnionGapDiagram() {
  return (
    <Figure viewBox="0 0 740 430" title="Trou anionique urinaire : AG = Na⁺ − (Cl⁻ + HCO₃⁻)" caption="Formule du cours : AG urinaire = Na⁺ − (Cl⁻ + HCO₃⁻), valeur normale 12 ± 2 mEq/L ; utile pour explorer les acidoses métaboliques hyperchlorémiques et différencier une cause rénale d'une cause digestive">
      <Txt x={165} y={22} bold size={12}>Cations</Txt><Txt x={455} y={22} bold size={12}>Anions</Txt>
      <rect x={90} y={40} width={150} height={250} rx={8} fill={C.blue} fillOpacity={0.4} stroke={C.blue} strokeWidth={2.4} />
      <Txt x={165} y={170} bold size={16}>Na⁺</Txt><Txt x={165} y={190} size={10} color={C.grey}>urinaire</Txt>
      <rect x={380} y={40} width={150} height={130} rx={8} fill={C.red} fillOpacity={0.4} stroke={C.red} strokeWidth={2.4} /><Txt x={455} y={110} bold size={15}>Cl⁻</Txt>
      <rect x={380} y={170} width={150} height={60} fill={C.green} fillOpacity={0.4} stroke={C.green} strokeWidth={2.4} /><Txt x={455} y={207} bold size={14}>HCO₃⁻</Txt>
      <rect x={380} y={230} width={150} height={60} fill={C.amber} fillOpacity={0.25} stroke={C.amber} strokeWidth={2.4} strokeDasharray="7 4" /><Txt x={455} y={256} bold size={12} color={DEEP.amber}>trou anionique</Txt><Txt x={455} y={272} size={10} color={C.grey}>12 ± 2 mEq/L</Txt>
      <path d="M545,230 L575,230 L575,290 L545,290" fill="none" stroke={C.amber} strokeWidth={2.4} />
      <Txt x={585} y={264} anchor="start" bold size={11.5} color={DEEP.amber}>AG</Txt>
      <line x1={240} y1={40} x2={380} y2={40} {...dash} /><line x1={240} y1={290} x2={380} y2={290} {...dash} />
      <Txt x={310} y={318} size={10.5} bold>Na⁺ = Cl⁻ + HCO₃⁻ + AG</Txt>
      <Card x={30} y={340} w={330} h={76} color={DEEP.blue} title="Utilité" lines={["évaluation de la clairance rénale", "acidoses métaboliques hyperchlorémiques"]} />
      <Card x={380} y={340} w={330} h={76} color={DEEP.violet} title="Interprétation" lines={["aide à différencier une cause rénale", "d'une cause digestive de l'acidose"]} />
    </Figure>
  );
}

// ─── Indices érythrocytaires et réticulocytes ────────────────────────────
export function IndicesMapDiagram() {
  const X = (v: number) => 110 + (v - 60) * 4.2;
  const Y = (v: number) => 340 - (v - 24) * 11;
  return (
    <Figure viewBox="0 0 740 470" title="Anémies : indices érythrocytaires et réticulocytes" caption="VGM 80-100 µm³, CCMH 32-36 g/dL, TCMH 27-32 pg, IDR 11,5-14,5 %, réticulocytes 0,5-1,5 % ; la carence en fer donne une anémie microcytaire hypochrome ; la carence en B12/folates une anémie macrocytaire normochrome ; l'aplasie une anémie normocytaire normochrome hypo-régénérative">
      <Ax x={X(60)} y={Y(24)} w={X(130) - X(60) + 10} h={Y(24) - Y(40)} xl="VGM (µm³)" yl="CCMH (g/dL)" />
      {[60, 80, 100, 120].map((v) => <g key={v}><line x1={X(v)} y1={Y(24)} x2={X(v)} y2={Y(24) + 4} stroke="currentColor" /><Txt x={X(v)} y={Y(24) + 16} size={9.5}>{v}</Txt></g>)}
      {[28, 32, 36].map((v) => <g key={v}><line x1={X(60)} y1={Y(v)} x2={X(60) - 4} y2={Y(v)} stroke="currentColor" /><Txt x={X(60) - 8} y={Y(v) + 3} anchor="end" size={9.5}>{v}</Txt></g>)}
      <rect x={X(80)} y={Y(36)} width={X(100) - X(80)} height={Y(32) - Y(36)} fill={C.green} fillOpacity={0.25} stroke={C.green} strokeWidth={2.4} />
      <Txt x={(X(80) + X(100)) / 2} y={Y(36) - 6} bold size={10.5} color={DEEP.green}>zone normale</Txt>
      <line x1={X(80)} y1={Y(24)} x2={X(80)} y2={Y(40)} {...grid} /><line x1={X(100)} y1={Y(24)} x2={X(100)} y2={Y(40)} {...grid} />
      <circle cx={X(70)} cy={Y(29)} r={26} fill={C.red} fillOpacity={0.35} stroke={C.red} strokeWidth={2.4} /><Txt x={X(70)} y={Y(29) - 2} bold size={10.5}>ferriprive</Txt><Txt x={X(70)} y={Y(29) + 12} size={9} color={C.grey}>VGM ↓ CCMH ↓</Txt>
      <circle cx={X(112)} cy={Y(34)} r={26} fill={C.amber} fillOpacity={0.4} stroke={C.amber} strokeWidth={2.4} /><Txt x={X(112)} y={Y(34) - 2} bold size={10.5}>B12 / folates</Txt><Txt x={X(112)} y={Y(34) + 12} size={9} color={C.grey}>VGM ↑</Txt>
      <circle cx={X(90)} cy={Y(34)} r={8} fill={C.violet} stroke={C.violet} /><Txt x={X(90)} y={Y(32) + 16} bold size={10} color={DEEP.violet}>aplasique : indices normaux</Txt>
      {/* réticulocytes */}
      <Txt x={555} y={26} bold size={12}>Réticulocytes (régénération)</Txt>
      <rect x={430} y={40} width={280} height={40} rx={8} fill={C.green} fillOpacity={0.2} stroke={C.green} strokeWidth={2} /><Txt x={570} y={64} bold size={11}>0,5 – 1,5 % : normal</Txt>
      {arrow("M570,82 L570,104")}
      <Box x={430} y={106} w={280} h={56} t="Élevés (1,5 – 4 % ou plus)" s="anémie régénérative : hémorragie, hémolyse" c={C.red} size={11.5} />
      <Box x={430} y={176} w={280} h={56} t="Normaux ou bas" s="ferriprive : normo-régénérative" c={C.amber} size={11.5} />
      <Box x={430} y={246} w={280} h={56} t="Bas" s="mégaloblastique, aplasique : hypo-régénérative" c={C.violet} size={11.5} />
      <Card x={30} y={380} w={330} h={80} color={DEEP.blue} title="Indices" lines={["TCMH 27-32 pg : Hb absolue par globule", "CCMH 32-36 g/dL : concentration d'Hb", "IDR 11,5-14,5 % : anisocytose"]} />
      <Card x={420} y={330} w={290} h={126} color={DEEP.red} title="À retenir" lines={["ferriprive : hypochrome microcytaire", "mégaloblastique : macrocytaire normochrome", "aplasique : normocytaire, réticulocytes bas", "les réticulocytes séparent régénérative / non"]} />
    </Figure>
  );
}

// ─── Équilibre acido-basique : troubles simples ──────────────────────────
export function SimpleAcidBaseDiagram() {
  const rows: [string, string, string, string, string, string][] = [
    ["Acidose métabolique", "↓", "↓ (compensation)", "↓ primaire", "HCO₃⁻ bas", C.red],
    ["Alcalose métabolique", "↑", "↑ (compensation)", "↑ primaire", "HCO₃⁻ haut", C.blue],
    ["Acidose respiratoire", "↓", "↑ primaire", "↑ (compensation)", "PCO₂ haute", C.amber],
    ["Alcalose respiratoire", "↑", "↓ primaire", "↓ (compensation)", "PCO₂ basse", C.green],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Les quatre troubles acido-basiques simples" caption="Valeurs de référence : pH 7,35-7,45, PCO₂ 38-42 mmHg (composante respiratoire), HCO₃⁻ 23-27 mEq/L (composante métabolique) ; un trouble simple = une variation isolée de PCO₂ ou de HCO₃⁻ qui fait sortir le pH de la norme">
      <rect x={20} y={20} width={700} height={44} rx={10} fill={C.grey} fillOpacity={0.12} stroke={C.grey} strokeWidth={1.8} />
      {[["Trouble", 130], ["pH", 300], ["PCO₂ (38-42 mmHg)", 430], ["HCO₃⁻ (23-27 mEq/L)", 600]].map(([t, x]) => <Txt key={String(t)} x={Number(x)} y={48} bold size={11.5}>{String(t)}</Txt>)}
      {rows.map(([n, ph, co2, hco3, key, c], i) => {
        const y = 76 + i * 66;
        return (
          <g key={n}>
            <rect x={20} y={y} width={700} height={56} rx={10} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} />
            <rect x={20} y={y} width={8} height={56} rx={4} fill={String(c)} />
            <Txt x={130} y={y + 27} bold size={11.5}>{n}</Txt><Txt x={130} y={y + 44} size={9.5} color={C.grey}>{key}</Txt>
            <Txt x={300} y={y + 36} bold size={22} color={String(c)}>{ph}</Txt>
            <Txt x={430} y={y + 34} bold size={12} color={co2.includes("primaire") ? DEEP.red : C.grey}>{co2}</Txt>
            <Txt x={600} y={y + 34} bold size={12} color={hco3.includes("primaire") ? DEEP.red : C.grey}>{hco3}</Txt>
          </g>
        );
      })}
      <Card x={20} y={350} w={340} h={78} color={DEEP.blue} title="Composante métabolique" lines={["HCO₃⁻ est LE marqueur métabolique", "acidose : HCO₃⁻ ↓ · alcalose : HCO₃⁻ ↑"]} />
      <Card x={380} y={350} w={340} h={78} color={DEEP.amber} title="Composante respiratoire" lines={["PCO₂ est LE marqueur respiratoire", "acidose : PCO₂ ↑ · alcalose : PCO₂ ↓"]} />
    </Figure>
  );
}

// ─── Hémostase primaire : tests du TP ────────────────────────────────────
export function HemostasisTestsDiagram() {
  const tests: [string, string, string, string, string][] = [
    ["Temps de Howell", "temps de coagulation d'un plasma recalcifié", "60 – 120 s (1 à 2 min)", "voies de la coagulation", C.blue],
    ["Test du lacet", "fragilité capillaire (pétéchies après stase)", "négatif chez le sujet sain", "positif : fragilité vasculaire (carence sévère en vitamine C) ou atteinte plaquettaire", C.red],
    ["Numération plaquettaire", "plaquettes par mm³ de sang", "150 000 – 350 000 /mm³", "hémostase primaire efficace", C.green],
    ["Temps de saignement (BT)", "durée du saignement d'une petite incision", "normal", "reflète le clou plaquettaire", C.amber],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Bilan de l'hémostase primaire au TP" caption="Howell : 60-120 s ; test du lacet négatif chez le sujet sain ; plaquettes 150 000-350 000/mm³ ; une thrombocytose accélère la formation du clou plaquettaire et raccourcit le temps de saignement (syndrome d'hypercoagulation)">
      {tests.map(([n, what, val, sens, c], i) => {
        const y = 16 + i * 84;
        return (
          <g key={n}>
            <rect x={20} y={y} width={700} height={74} rx={10} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} />
            <rect x={20} y={y} width={8} height={74} rx={4} fill={String(c)} />
            <Txt x={40} y={y + 24} anchor="start" bold size={12.5}>{n}</Txt><Txt x={40} y={y + 42} anchor="start" size={10} color={C.grey}>{what}</Txt>
            <Txt x={40} y={y + 60} anchor="start" size={9.5} color={C.grey}>{sens}</Txt>
            <rect x={480} y={y + 14} width={220} height={46} rx={8} fill={String(c)} fillOpacity={0.3} stroke={String(c)} strokeWidth={1.6} /><Txt x={590} y={y + 42} bold size={11.5}>{val}</Txt>
          </g>
        );
      })}
      <Txt x={370} y={368} bold size={12} color={DEEP.violet}>Syndrome d'hypercoagulation : thrombocytose</Txt>
      <Box x={40} y={382} w={190} h={52} t="Plaquettes ↑" s="numération augmentée" c={C.green} size={12} />
      {arrow("M230,408 L270,408")}
      <Box x={272} y={382} w={220} h={52} t="Clou plaquettaire plus rapide" c={C.amber} size={11} />
      {arrow("M492,408 L532,408")}
      <Box x={534} y={382} w={186} h={52} t="Temps de saignement ↓" s="raccourci" c={C.red} size={11.5} />
    </Figure>
  );
}

// ─── Cascade rénale : FSR, RPF, DFG, FF ──────────────────────────────────
export function RenalCascadeDiagram() {
  const bar = (y: number, w: number, label: string, val: string, c: string, sub: string) => (
    <g key={label}>
      <rect x={30} y={y} width={w} height={48} rx={8} fill={c} fillOpacity={0.4} stroke={c} strokeWidth={2} />
      <Txt x={40} y={y + 21} anchor="start" bold size={12}>{label}</Txt><Txt x={40} y={y + 38} anchor="start" size={10} color={C.grey}>{sub}</Txt>
      {val.split("|").map((line, i) => <Txt key={i} x={30 + w + 12} y={y + 22 + i * 15} anchor="start" bold size={11} color={c}>{line}</Txt>)}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="De la circulation rénale au filtrat : FSR, RPF, DFG et FF" caption="Le débit sanguin rénal (≈ 1 200 mL/min chez l'homme) contient les globules rouges ; le RPF total = Cl PAH / 0,9 (≈ 650 mL/min chez l'homme) ; la fraction de filtration FF = DFG / RPF × 100 ≈ 20 ± 2 % : environ un cinquième du plasma est filtré ; DFG normal > 90 mL/min/1,73 m²">
      {bar(20, 430, "Débit sanguin rénal total (FSR)", "1 200 ± 250 mL/min (H)|980 ± 180 mL/min (F)", C.red, "sang complet : plasma + globules rouges")}
      {arrow("M120,70 L120,92")}
      {bar(94, 300, "Débit plasmatique rénal total (RPF)", "650 ± 150 mL/min (H)|600 ± 150 mL/min (F)", C.blue, "RPF total = Cl PAH / 0,9")}
      {arrow("M120,144 L120,166")}
      {bar(168, 110, "DFG", "> 90 mL/min/1,73 m²|jusqu'à ≈ 150 · filtré vers la chambre de Bowman", C.green, "filtré")}
      <Card x={30} y={250} w={340} h={100} color={DEEP.blue} title="Clairance du PAH" lines={["épuré presque totalement en un passage", "(filtration + sécrétion tubulaire)", "RPF effectif ≈ 90 % du RPF total"]} />
      <Card x={380} y={250} w={330} h={100} color={DEEP.green} title="Fraction de filtration" lines={["FF = (DFG / RPF total) × 100", "normale : 20 ± 2 %", "≈ un cinquième du plasma entrant est filtré"]} />
      <Card x={30} y={362} w={340} h={92} color={DEEP.red} title="Maladie rénale chronique" lines={["DFG < 60 mL/min/1,73 m² pendant plus de 3 mois", "DFG < 15 : insuffisance rénale terminale"]} />
      <Card x={380} y={362} w={330} h={92} color={DEEP.amber} title="À ne pas confondre" lines={["FSR ≫ DFG : le débit sanguin mesure le sang", "qui traverse le rein, pas le volume filtré"]} />
    </Figure>
  );
}

// ─── Leucogramme : arbre d'interprétation ────────────────────────────────
export function LeukoTreeDiagram() {
  const leaf = (x: number, y: number, t: string, s: string, c: string) => <Box x={x} y={y} w={210} h={62} t={t} s={s} c={c} size={11.5} />;
  return (
    <Figure viewBox="0 0 740 470" title="Interpréter un leucogramme : quelle lignée est modifiée ?" caption="Infection bactérienne aiguë : WBC et % de neutrophiles ↑, lymphocytes ↓ (effet relatif) ; infection virale : schéma inverse (neutropénie relative, lymphocytose, monocytose) ; éosinophilie : parasitose, allergie, maladie dermatologique ; basophilie avec WBC normal : maladie contagieuse selon ce référentiel">
      <Box x={265} y={14} w={210} h={46} t="Leucogramme anormal" s="quelle formule est modifiée ?" c={C.grey} size={12} />
      {[[70, "Neutrophiles ↑"], [290, "Lymphocytes ↑ · monocytes ↑"], [510, "Éosinophiles ↑"]].map(([x, t]) => <g key={String(t)}>{arrow(`M370,62 L${Number(x) + 100},108`)}<Box x={Number(x)} y={110} w={200} h={46} t={String(t)} c={C.blue} size={11} /></g>)}
      {arrow("M170,158 L170,196")}{arrow("M390,158 L390,196")}{arrow("M610,158 L610,196")}
      {leaf(65, 198, "Infection bactérienne aiguë", "WBC ↑ · neutrophiles ↑ · lymphocytes ↓ relatifs", C.red)}
      {leaf(285, 198, "Infection virale aiguë", "neutropénie relative, lymphocytose, monocytose", C.green)}
      {leaf(505, 198, "Parasitose, allergie", "ou maladie dermatologique", C.amber)}
      <Box x={40} y={294} w={310} h={56} t="Mononucléose infectieuse, tuberculose" s="forme accentuée : neutropénie ↓↓, lymphocytose et monocytose ↑↑" c={C.violet} size={10.5} />
      {arrow("M390,262 L250,292")}
      <Box x={390} y={294} w={310} h={56} t="Basophilie (WBC total normal)" s="marqueur d'une maladie contagieuse (référentiel du cours)" c={C.pink} size={10.5} />
      <Card x={40} y={372} w={310} h={84} color={DEEP.blue} title="Monocytes isolés ↑" lines={["plutôt infections virales ou états chroniques", "(tuberculose) qu'infection bactérienne classique"]} />
      <Card x={380} y={372} w={320} h={84} color={DEEP.amber} title="À retenir" lines={["éosinophilie ≠ infection bactérienne", "toujours comparer aux valeurs adulte / enfant"]} />
    </Figure>
  );
}

// ─── Électrophorèse : principe ───────────────────────────────────────────
export function ElfoPrincipleDiagram() {
  const fr: [string, string, number, number, string][] = [
    ["Albumine", "50 – 60 %", 120, 210, C.green],
    ["α1", "4,2 – 7,2 %", 210, 232, C.amber],
    ["α2", "6,8 – 12 %", 280, 226, C.red],
    ["β", "9,3 – 15 %", 350, 224, C.blue],
    ["γ", "13 – 23 %", 440, 218, C.violet],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Électrophorèse des protéines : principe et fractions" caption="Les protéines sériques migrent dans un champ électrique selon leur mobilité et se séparent en 5 fractions ; l'albumine est toujours la plus abondante, les γ-globulines (immunoglobulines) sont la plus grande fraction parmi les globulines">
      <rect x={480} y={40} width={110} height={50} rx={6} fill={C.grey} fillOpacity={0.2} stroke={C.grey} strokeWidth={2} /><Txt x={535} y={62} bold size={11}>Dépôt</Txt><Txt x={535} y={78} size={9.5} color={C.grey}>sérum</Txt>
      <Txt x={40} y={30} bold size={12}>Migration dans le champ électrique</Txt>
      <rect x={30} y={100} width={560} height={64} rx={6} fill={C.blue} fillOpacity={0.06} stroke={C.blue} strokeWidth={1.8} />
      {fr.map(([n, , x, , c]) => <rect key={n} x={x} y={114} width={n === "Albumine" ? 70 : 46} height={36} rx={5} fill={String(c)} fillOpacity={0.6} />)}
      <Txt x={45} y={182} anchor="start" size={9.5} bold color={DEEP.blue}>+ anode (migration des protéines chargées −)</Txt><Txt x={585} y={182} anchor="end" size={9.5} bold color={DEEP.red}>cathode −</Txt>
      {fr.map(([n, , x, , c]) => <Txt key={n} x={x + (n === "Albumine" ? 35 : 23)} y={200} bold size={11} color={String(c)}>{n}</Txt>)}
      {/* densitogramme */}
      <Txt x={330} y={250} anchor="start" bold size={12}>Courbe densitométrique</Txt>
      <path d="M40,388 L100,386 C110,386 118,232 150,232 C182,232 190,388 200,386 L206,370 C214,340 226,330 234,364 C242,340 264,326 282,362 C292,340 308,336 322,360 C332,338 356,332 372,352 C390,300 420,290 448,304 C476,326 490,380 520,386 L590,388" fill="none" stroke={C.red} strokeWidth={3} />
      <line x1={40} y1={388} x2={590} y2={388} stroke="currentColor" strokeOpacity={0.4} />
      {[["Alb", 150, 224], ["α1", 222, 340], ["α2", 274, 326], ["β", 340, 322], ["γ", 418, 280]].map(([t, x, y]) => <Txt key={String(t)} x={Number(x)} y={Number(y)} bold size={10} color={DEEP.red}>{String(t)}</Txt>)}
      <Txt x={610} y={64} anchor="start" bold size={11.5}>Valeurs normales</Txt>
      {fr.map(([n, v, , , c], i) => (
        <g key={n}>
          <rect x={610} y={76 + i * 32} width={120} height={26} rx={6} fill={String(c)} fillOpacity={0.25} stroke={String(c)} strokeWidth={1.6} />
          <Txt x={618} y={93 + i * 32} anchor="start" bold size={9.5}>{n === "Albumine" ? "Alb." : n}</Txt><Txt x={724} y={93 + i * 32} anchor="end" size={9.5} color={C.grey}>{v}</Txt>
        </g>
      ))}
      <Card x={610} y={250} w={120} h={130} color={DEEP.blue} title="Unités" lines={["% → g/L :", "× 10", "5,5-8 % =", "55-80 g/L"]} />
    </Figure>
  );
}
