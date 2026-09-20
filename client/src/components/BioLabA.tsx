import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Ax, Card, dash, grid } from "./PhysCardio";
import { Box, arrow } from "./PhysRespEndo";

// Biochimie — labos du semestre 1 : schémas des sous-parties.

// ─── Densité urinaire ────────────────────────────────────────────────────
export function UrineDensityDiagram() {
  const X = (g: number) => 60 + ((g - 1.0) / 0.03) * 620;
  const zones: [number, number, string, string, string][] = [
    [1.0, 1.015, "Hyposthénurie", "< 1,015", C.blue],
    [1.015, 1.025, "Normosthénurie", "1,015 – 1,025", C.green],
    [1.025, 1.03, "Hypersthénurie", "> 1,025", C.red],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Densité urinaire : de l'hyposthénurie à l'hypersthénurie" caption="La densité urinaire (SG) est la densité relative à l'eau pure (1,000) ; l'isosthénurie (≈ 1,010, proche du plasma) signe la perte de la capacité du rein à concentrer ou diluer l'urine">
      <Txt x={370} y={22} bold size={12}>Densité relative (eau pure = 1,000)</Txt>
      {zones.map(([a, b, n, v, c]) => (
        <g key={n}>
          <rect x={X(a)} y={40} width={X(b) - X(a)} height={56} fill={c} fillOpacity={0.3} stroke={c} strokeWidth={2} />
          <Txt x={(X(a) + X(b)) / 2} y={64} bold size={11.5}>{n}</Txt><Txt x={(X(a) + X(b)) / 2} y={82} size={10} color={C.grey}>{v}</Txt>
        </g>
      ))}
      {[1.0, 1.01, 1.015, 1.02, 1.025, 1.03].map((g) => <g key={g}><line x1={X(g)} y1={96} x2={X(g)} y2={104} stroke="currentColor" /><Txt x={X(g)} y={118} size={9.5}>{g.toFixed(3).replace(".", ",")}</Txt></g>)}
      <path d={`M${X(1.01)},34 L${X(1.01)},138`} stroke={C.violet} strokeWidth={2.4} strokeDasharray="6 4" /><Txt x={X(1.01)} y={152} bold size={10.5} color={DEEP.violet}>isosthénurie ≈ 1,010 (≈ plasma)</Txt>
      <Card x={30} y={180} w={210} h={112} color={DEEP.blue} title="Hyposthénurie" lines={["urine diluée < 1,015", "hyperhydratation", "diabète insipide"]} />
      <Card x={260} y={180} w={210} h={112} color={DEEP.violet} title="Isosthénurie" lines={["≈ 1,010, proche du plasma", "insuffisance rénale chronique", "le rein ne concentre plus"]} />
      <Card x={490} y={180} w={220} h={112} color={DEEP.red} title="Hypersthénurie" lines={["> 1,025 : excès de solutés", "(glucose, protéines, cétones,", "Hb, myoglobine) ou déshydratation"]} />
      <Card x={30} y={306} w={680} h={110} color={DEEP.green} title="Composition de l'urine" lines={["eau + solutés : composés azotés (urée, créatinine), ions Na⁺ K⁺ Cl⁻ HPO₄²⁻, urobilinogène, acide urique", "normosthénurie 1,015-1,025 : rein capable d'ajuster la concentration à l'état d'hydratation", "hypersthénurie aussi : brûlures, restriction hydrique, acidocétose diabétique"]} />
    </Figure>
  );
}

// ─── Tampons biologiques du sang ─────────────────────────────────────────
export function BloodBuffersDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Les quatre systèmes tampons du sang" caption="Le pH sanguin est maintenu à 7,35-7,45 ([H⁺] ≈ 40 nM) ; le système bicarbonate (pKa ≈ 6,1, rapport HCO₃⁻/CO₂ ≈ 20:1) est le tampon extracellulaire majeur, ajusté par les poumons (CO₂) et les reins (HCO₃⁻) ; le phosphate (pKa ≈ 6,8) tamponne surtout l'urine">
      <rect x={250} y={10} width={240} height={50} rx={12} fill={C.green} fillOpacity={0.2} stroke={C.green} strokeWidth={2.4} />
      <Txt x={370} y={32} bold size={13}>pH sanguin 7,35 – 7,45</Txt><Txt x={370} y={50} size={10} color={C.grey}>[H⁺] ≈ 40 nM</Txt>
      {arrow("M370,62 L370,86")}
      <Box x={20} y={90} w={165} h={110} t="Protéines (albumine)" c={C.violet} size={11.5} />
      <Txt x={102} y={166} size={9.5} color={C.grey}>chaînes latérales</Txt><Txt x={102} y={180} size={9.5} color={C.grey}>(histidine, NH₂, COOH)</Txt><Txt x={102} y={194} size={9.5} color={C.grey}>captent / libèrent H⁺</Txt>
      <Box x={195} y={90} w={165} h={110} t="Hémoglobine" c={C.red} size={12} />
      <Txt x={277} y={166} size={9.5} color={C.grey}>tamponne les H⁺ de</Txt><Txt x={277} y={180} size={9.5} color={C.grey}>l'hydratation du CO₂</Txt><Txt x={277} y={194} size={9.5} color={C.grey}>(effet Bohr)</Txt>
      <Box x={370} y={90} w={165} h={110} t="Phosphate" c={C.amber} size={12} />
      <Txt x={452} y={166} size={9.5} color={C.grey}>pKa ≈ 6,8</Txt><Txt x={452} y={180} size={9.5} color={C.grey}>HPO₄²⁻ / H₂PO₄⁻ ≈ 4:1</Txt><Txt x={452} y={194} size={9.5} color={C.grey}>surtout dans l'urine</Txt>
      <Box x={545} y={90} w={175} h={110} t="Bicarbonate" c={C.blue} size={12} />
      <Txt x={632} y={166} size={9.5} color={C.grey}>pKa ≈ 6,1 · tampon</Txt><Txt x={632} y={180} size={9.5} color={C.grey}>extracellulaire majeur</Txt><Txt x={632} y={194} size={9.5} color={C.grey}>HCO₃⁻ / CO₂ dissous ≈ 20:1</Txt>
      <Txt x={370} y={240} bold size={12} color={DEEP.blue}>CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺</Txt>
      <Txt x={370} y={258} size={10} color={C.grey}>catalysée par l'anhydrase carbonique</Txt>
      <Card x={30} y={284} w={330} h={90} color={DEEP.blue} title="Poumons : ajustent le CO₂" lines={["↑ ventilation → ↓ CO₂ → pH ↑", "↓ ventilation → ↑ CO₂ → pH ↓"]} />
      <Card x={380} y={284} w={330} h={90} color={DEEP.green} title="Reins : ajustent le HCO₃⁻" lines={["réabsorption et régénération du HCO₃⁻", "élimination des H⁺ (phosphate, NH₄⁺)"]} />
      <Card x={30} y={386} w={680} h={54} color={DEEP.amber} title="Henderson-Hasselbalch" lines={["pH = pKa + log([base] / [acide]) : le pH dépend du rapport, pas des concentrations absolues"]} />
    </Figure>
  );
}

// ─── Chromatographie : cinq mécanismes ───────────────────────────────────
export function ChromatographyDiagram() {
  const mech: [string, string, string, string][] = [
    ["Adsorption", "polarité", "SP solide · MP liquide", C.blue],
    ["Partition", "solubilité relative", "SP et MP liquides non miscibles", C.green],
    ["Échange d'ions", "charge", "résine échangeuse · MP liquide", C.red],
    ["Exclusion stérique", "taille", "gel poreux · grosses éluées d'abord", C.amber],
    ["Affinité", "reconnaissance spécifique", "ligand · partenaire spécifique", C.violet],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Chromatographie : les cinq mécanismes de séparation" caption="Chaque mécanisme retient les analytes selon une propriété différente : polarité (adsorption), solubilité (partition), charge (échange d'ions), taille (exclusion stérique) ou reconnaissance spécifique (affinité) ; SP = phase stationnaire, MP = phase mobile">
      {mech.map(([n, base, phase, c], i) => {
        const x = 20 + (i % 3) * 235, y = 16 + Math.floor(i / 3) * 210;
        return (
          <g key={n}>
            <rect x={x} y={y} width={225} height={196} rx={12} fill={c} fillOpacity={0.1} stroke={c} strokeWidth={2} />
            <Txt x={x + 112} y={y + 24} bold size={12.5}>{n}</Txt>
            <rect x={x + 62} y={y + 40} width={100} height={70} rx={6} fill="currentColor" fillOpacity={0.05} stroke="currentColor" strokeOpacity={0.4} />
            {[0, 1, 2, 3, 4, 5].map((k) => <circle key={k} cx={x + 76 + (k % 3) * 34} cy={y + 60 + Math.floor(k / 3) * 34} r={i === 3 ? (k % 2 ? 4 : 9) : 6} fill={String(c)} fillOpacity={k % 2 ? 0.9 : 0.4} />)}
            <path d={`M${x + 112},${y + 112} L${x + 112},${y + 132}`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
            <Txt x={x + 112} y={y + 152} bold size={10.5} color={String(c)}>base : {base}</Txt>
            <Txt x={x + 112} y={y + 170} size={9} color={C.grey}>{phase.length > 34 ? phase.slice(0, phase.indexOf("·") > 0 ? phase.indexOf("·") : 34).trim() : phase}</Txt>
            {phase.includes("·") && phase.length > 34 && <Txt x={x + 112} y={y + 184} size={9} color={C.grey}>{phase.slice(phase.indexOf("·") + 1).trim()}</Txt>}
          </g>
        );
      })}
      <Card x={490} y={226} w={230} h={196} color={DEEP.blue} title="Rétention / élution" lines={["adsorption : retenu si polarité", "proche de la SP", "partition : retenu si plus soluble", "dans la SP", "échange d'ions : retenu si charge", "opposée à la SP", "exclusion : petites molécules", "retenues (entrent dans les pores)", "affinité : élution par excès de", "ligand libre"]} />
    </Figure>
  );
}

// ─── Spectrophotométrie : trois méthodes de dosage ───────────────────────
export function ConcentrationMethodsDiagram() {
  const X = (c: number) => 470 + c * 42;
  const Y = (a: number) => 240 - a * 120;
  return (
    <Figure viewBox="0 0 740 450" title="Déterminer une concentration : trois méthodes" caption="Calcul direct par la loi de Beer-Lambert (C = A / ε·L), comparaison à un standard de concentration connue, ou lecture sur une courbe d'étalonnage tracée avec plusieurs standards">
      <Box x={20} y={20} w={210} h={92} t="1. Calcul direct" s="C = A / (ε · L)" c={C.blue} size={12.5} />
      <Txt x={125} y={98} size={9.5} color={C.grey}>ε (absorptivité molaire) connu</Txt>
      <Box x={20} y={128} w={210} h={92} t="2. Référence à un standard" s="C éch. = (A éch. / A std) × C std" c={C.green} size={12} />
      <Txt x={125} y={206} size={9.5} color={C.grey}>rapport A = rapport C</Txt>
      <Box x={20} y={236} w={210} h={92} t="3. Courbe d'étalonnage" s="A = f(C) : lecture par interpolation" c={C.amber} size={12} />
      <Txt x={125} y={314} size={9.5} color={C.grey}>plusieurs standards croissants</Txt>
      <Ax x={X(0)} y={Y(0)} w={230} h={Y(0) - 60} xl="Concentration" yl="Absorbance" />
      <path d={`M${X(0)},${Y(0)} L${X(5)},${Y(1.5)}`} stroke={C.amber} strokeWidth={3} />
      {[1, 2, 3, 4, 5].map((c) => <circle key={c} cx={X(c)} cy={Y(c * 0.3)} r={4.5} fill={C.amber} />)}
      <path d={`M${X(0)},${Y(0.9)} L${X(3)},${Y(0.9)} L${X(3)},${Y(0)}`} stroke={C.red} strokeWidth={2} strokeDasharray="6 4" fill="none" markerEnd="url(#fig-arrow)" />
      <Txt x={X(3) + 6} y={Y(0) - 8} anchor="start" bold size={10} color={DEEP.red}>C inconnue</Txt><Txt x={X(0) + 6} y={Y(0.9) - 6} anchor="start" size={10} bold color={DEEP.red}>A mesurée</Txt>
      <Card x={20} y={350} w={340} h={84} color={DEEP.green} title="Application : protéines totales du sérum" lines={["méthode colorimétrique lue au spectrophotomètre", "comparée à un standard ou à une droite d'étalonnage"]} />
      <Card x={380} y={350} w={330} h={84} color={DEEP.amber} title="À retenir" lines={["A = ε · L · C (Beer-Lambert)", "la droite d'étalonnage évite d'avoir à connaître ε"]} />
    </Figure>
  );
}

// ─── Tests optiques enzymatiques ─────────────────────────────────────────
export function OpticalTestsDiagram() {
  const chain = (y: number, title: string, c: string, steps: string[], note: string) => (
    <g key={title}>
      <rect x={20} y={y} width={700} height={116} rx={12} fill={c} fillOpacity={0.08} stroke={c} strokeWidth={1.8} />
      <Txt x={34} y={y + 22} anchor="start" bold size={12} color={c}>{title}</Txt>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={34 + i * 232} y={y + 34} width={196} height={44} rx={8} fill={c} fillOpacity={0.2} stroke={c} strokeWidth={1.6} />
          <Txt x={132 + i * 232} y={y + 60} bold size={10}>{s}</Txt>
          {i < steps.length - 1 && <path d={`M${230 + i * 232},${y + 56} L${264 + i * 232},${y + 56}`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />}
        </g>
      ))}
      <Txt x={34} y={y + 100} anchor="start" size={10} color={C.grey}>{note}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Le test optique à 340 nm : trois montages" caption="L'activité d'une déshydrogénase se suit à 340 nm (absorption du NADH) : 1 U/L = 1 µmol transformée par minute ; test simple (LDH, MDH, GDH), test avec réaction indicatrice (transaminases GPT/GOT), test avec réaction auxiliaire puis indicatrice (créatine kinase)">
      {chain(14, "1. Test optique simple", C.blue, ["Pyruvate + NADH", "LDH", "Lactate + NAD⁺"], "suivi direct : la baisse d'A340 (consommation de NADH) est proportionnelle à l'activité de la LDH")}
      {chain(140, "2. Test + réaction indicatrice (transaminases)", C.green, ["Ala + α-cétoglutarate", "GPT / ALAT → pyruvate", "indicatrice : LDH ↔ NADH"], "GOT / ASAT : Asp + α-cétoglutarate → oxaloacétate + glutamate ; GOT + GPT ↑ : hépatite ; GOT seule ↑ : muscle, cœur, hémolyse")}
      {chain(266, "3. Test + réaction auxiliaire + indicatrice (créatine kinase)", C.amber, ["Créatine kinase (CK)", "réaction auxiliaire", "réaction indicatrice"], "CK = dimère de sous-unités B et M : CK1 (BB) cerveau · CK2 (MB) myocarde")}
      <Card x={20} y={396} w={340} h={64} color={DEEP.violet} title="LDH : 5 isoenzymes" lines={["tétramère de sous-unités H et M"]} />
      <Card x={380} y={396} w={340} h={64} color={DEEP.blue} title="Unité d'activité" lines={["1 unité/L = 1 µmol de substrat par minute"]} />
    </Figure>
  );
}

// ─── Facteurs influençant la vitesse enzymatique ─────────────────────────
export function EnzymeFactorsDiagram() {
  const panel = (x: number, y0: number, title: string, path: (x: number) => string, c: string, xl: string, note: string) => (
    <g key={title} transform={`translate(0 ${y0 - 14})`}>
      <rect x={x} y={14} width={350} height={200} rx={12} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={1.8} />
      <Txt x={x + 175} y={34} bold size={12} color={c}>{title}</Txt>
      <line x1={x + 40} y1={180} x2={x + 320} y2={180} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
      <line x1={x + 40} y1={180} x2={x + 40} y2={50} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
      <Txt x={x + 180} y={198} size={10} bold>{xl}</Txt><text transform={`translate(${x + 24} 120) rotate(-90)`} textAnchor="middle" fontSize={10} fontWeight={700} fill="currentColor">v₀</text>
      <path d={path(x)} fill="none" stroke={c} strokeWidth={3} />
      <Txt x={x + 175} y={212} size={9} color={C.grey}>{note}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 570" title="Facteurs qui modifient la vitesse initiale v₀" caption="[S] : la vitesse sature (Vmax) ; pH : optimum en cloche (ionisation de l'enzyme) ; température : augmentation jusqu'à un optimum puis dénaturation ; effecteurs : activateurs (↑ activité) et inhibiteurs (↓ activité)">
      {panel(20, 14, "Concentration en substrat [S]", (x) => `M${x + 40},175 C${x + 80},110 ${x + 130},80 ${x + 200},68 C${x + 260},62 ${x + 300},60 ${x + 318},60`, C.blue, "[S]", "hyperbole vers Vmax")}
      {panel(380, 14, "pH", (x) => `M${x + 50},175 C${x + 100},170 ${x + 130},70 ${x + 180},68 C${x + 230},66 ${x + 250},170 ${x + 310},175`, C.green, "pH", "optimum en cloche : ionisation de l'enzyme")}
      {panel(20, 230, "Température", (x) => `M${x + 50},176 C${x + 120},150 ${x + 190},90 ${x + 220},66 L${x + 240},70 C${x + 250},120 ${x + 256},160 ${x + 262},176`, C.red, "Température", "optimum puis dénaturation")}
      <g>
        <rect x={380} y={230} width={350} height={200} rx={12} fill={C.violet} fillOpacity={0.06} stroke={C.violet} strokeWidth={1.8} />
        <Txt x={555} y={250} bold size={12} color={C.violet}>Effecteurs</Txt>
        <line x1={420} y1={396} x2={700} y2={396} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" /><line x1={420} y1={396} x2={420} y2={266} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
        <path d="M420,392 C460,330 520,300 560,292 C620,286 660,286 690,286" fill="none" stroke={C.green} strokeWidth={3} /><Txt x={640} y={278} size={10} bold color={DEEP.green}>activateur</Txt>
        <path d="M420,392 C460,350 520,326 560,320 C620,314 660,314 690,314" fill="none" stroke={C.blue} strokeWidth={3} /><Txt x={640} y={334} size={10} bold color={DEEP.blue}>sans effecteur</Txt>
        <path d="M420,392 C460,376 520,364 560,360 C620,358 660,358 690,358" fill="none" stroke={C.red} strokeWidth={3} /><Txt x={640} y={376} size={10} bold color={DEEP.red}>inhibiteur</Txt>
        <Txt x={555} y={416} size={10} bold>[S]</Txt>
      </g>
      <Card x={20} y={450} w={700} h={104} color={DEEP.blue} title="Lineweaver-Burk et Michaelis-Menten" lines={["v₀ = Vmax [S] / (Km + [S])", "1 / v₀ = (Km / Vmax)(1 / [S]) + 1 / Vmax", "Km : [S] pour v₀ = Vmax / 2", "les 4 facteurs (S, pH, T, effecteurs)", "se mesurent à v₀ (vitesse initiale)"]} />
    </Figure>
  );
}
