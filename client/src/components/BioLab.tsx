import { Figure, C, Txt, Dot } from "./Figure";
import { RED, OK, DEEP, arrow, box, Axes, fnPath } from "./FigKit";

// Biochimie — travaux pratiques du semestre 1 (laboratoires 2 à 13).

// ─── 1. Mesures : unités, instruments, densité urinaire ──────────────────
export function LabMeasuresDiagram() {
  const X = (d: number) => 60 + ((d - 1.0) / 0.04) * 620;
  return (
    <Figure viewBox="0 0 740 420" title="Mesures de masse, de volume et de densité" caption="Unités du système international, instruments de mesure et densité urinaire (SG) : normosthénurie 1,015-1,025">
      <Txt x={130} y={22} bold size={12.5}>Unités SI</Txt>
      {[["Masse", "kg → g → mg → µg", C.blue], ["Volume", "m³ → L → mL → µL", C.green], ["Quantité de matière", "mol → mmol → µmol", C.amber], ["Densité", "sans dimension (eau = 1,000)", C.violet]].map(([t, s, c], i) => (
        <g key={String(t)}>
          <rect x={10} y={34 + i * 50} width={240} height={42} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={130} y={52 + i * 50} bold size={11.5} color={String(c)}>{String(t)}</Txt><Txt x={130} y={68 + i * 50} size={10}>{String(s)}</Txt>
        </g>
      ))}
      <Txt x={130} y={246} size={10} color={C.grey}>préfixes : k (10³) • m (10⁻³) • µ (10⁻⁶) • n (10⁻⁹)</Txt>
      <line x1={266} y1={26} x2={266} y2={260} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={500} y={22} bold size={12.5}>Instruments : précision croissante →</Txt>
      {[["Éprouvette", "volume approximatif", 34], ["Pipette graduée", "volume variable", 84], ["Pipette jaugée / micropipette", "volume précis", 134], ["Balance analytique", "masse au dixième de mg", 184]].map(([t, s, y], i) => (
        <g key={String(t)}>
          <rect x={282} y={Number(y)} width={440} height={40} rx={8} fill={C.blue} fillOpacity={0.06 + i * 0.05} stroke={C.blue} strokeWidth={1.6} />
          <Txt x={370} y={Number(y) + 24} bold size={11.5}>{String(t)}</Txt><Txt x={600} y={Number(y) + 24} size={10.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      <line x1={20} y1={272} x2={720} y2={272} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={294} bold size={12.5}>Densité urinaire (SG)</Txt>
      <rect x={X(1.0)} y={314} width={X(1.015) - X(1.0)} height={26} fill={C.blue} fillOpacity={0.4} />
      <rect x={X(1.015)} y={314} width={X(1.025) - X(1.015)} height={26} fill={OK} fillOpacity={0.55} />
      <rect x={X(1.025)} y={314} width={X(1.04) - X(1.025)} height={26} fill={C.amber} fillOpacity={0.5} />
      {[1.0, 1.015, 1.025, 1.04].map((d) => <g key={d}><line x1={X(d)} y1={340} x2={X(d)} y2={350} stroke="currentColor" /><Txt x={X(d)} y={366} size={10.5}>{d.toFixed(3).replace(".", ",")}</Txt></g>)}
      <Txt x={(X(1.0) + X(1.015)) / 2} y={332} bold size={11} color={DEEP.blue}>hyposthénurie</Txt>
      <Txt x={(X(1.015) + X(1.025)) / 2} y={332} bold size={11} color="#2a7a55">normosthénurie</Txt>
      <Txt x={(X(1.025) + X(1.04)) / 2} y={332} bold size={11} color={DEEP.amber}>hypersthénurie</Txt>
      <Txt x={(X(1.0) + X(1.015)) / 2} y={388} size={9.5} color={C.grey}>hyperhydratation, diabète insipide</Txt>
      <Txt x={(X(1.025) + X(1.04)) / 2} y={388} size={9.5} color={C.grey}>déshydratation, glycosurie</Txt>
    </Figure>
  );
}

// ─── 2. Dilutions ────────────────────────────────────────────────────────
export function LabDilutionDiagram() {
  const tube = (x: number, y: number, fill: number, c: string, label: string, sub: string) => (
    <g>
      <path d={`M${x},${y} L${x},${y + 70} Q${x + 20},${y + 86} ${x + 40},${y + 70} L${x + 40},${y}`} fill="#fff" fillOpacity={0.5} stroke="currentColor" strokeWidth={2.5} />
      <path d={`M${x + 1.5},${y + 70 - fill} L${x + 1.5},${y + 70} Q${x + 20},${y + 84} ${x + 38.5},${y + 70} L${x + 38.5},${y + 70 - fill}z`} fill={c} fillOpacity={0.8} />
      <Txt x={x + 20} y={y + 106} bold size={11}>{label}</Txt><Txt x={x + 20} y={y + 120} size={9.5} color={C.grey}>{sub}</Txt>
    </g>
  );
  const alphas = [0.9, 0.55, 0.3, 0.15, 0.07];
  return (
    <Figure viewBox="0 0 740 420" title="Solutions, concentrations et dilutions" caption="Dilution : C₁V₁ = C₂V₂ ; dilutions en série de facteur 10 : la concentration est divisée par 10 à chaque tube">
      <rect x={20} y={12} width={700} height={110} rx={10} fill={C.blue} fillOpacity={0.06} stroke={C.blue} strokeWidth={2} />
      <Txt x={370} y={38} bold size={16}>C₁ · V₁ = C₂ · V₂</Txt>
      <Txt x={370} y={60} size={11} color={C.grey}>quantité de soluté conservée : ajouter du solvant diminue la concentration</Txt>
      {[["Facteur de dilution", "F = C₁ / C₂ = V₂ / V₁"], ["Molarité", "C (mol/L) = n / V"], ["Concentration massique", "C (g/L) = m / V"]].map(([t, f], i) => (
        <g key={String(t)}><Txt x={130 + i * 240} y={88} bold size={11} color={C.blue}>{String(t)}</Txt><Txt x={130 + i * 240} y={106} size={11}>{String(f)}</Txt></g>
      ))}
      <Txt x={370} y={152} bold size={12.5}>Dilutions en série (facteur 10)</Txt>
      {alphas.map((a, i) => (
        <g key={i}>
          {tube(60 + i * 132, 170, 50, C.blue, i === 0 ? "solution mère" : `1/${Math.pow(10, i)}`, i === 0 ? "C₀" : `C₀ / ${Math.pow(10, i)}`)}
          <rect x={61.5 + i * 132} y={170 + 70 - 50} width={37} height={50} fill={C.blue} fillOpacity={0} />
          <rect x={62 + i * 132} y={190} width={36} height={50} rx={4} fill={C.blue} fillOpacity={a} />
          {i < 4 && arrow(`M${106 + i * 132},210 L${178 + i * 132},210`, true)}
        </g>
      ))}
      <Txt x={370} y={340} size={11} bold>1 mL de solution + 9 mL de solvant → dilution au 1/10</Txt>
      <Dot path="M100,180 L100,215" dur={3} r={6} color={C.blue} />
      <rect x={20} y={356} width={700} height={52} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={376} size={10.5}>exemple : passer de 2 mol/L à 0,2 mol/L → F = 10 : prélever V₁, compléter jusqu'à V₂ = 10 × V₁</Txt>
      <Txt x={370} y={394} size={10} color={C.grey}>la concentration finale est toujours inférieure à la concentration initiale</Txt>
    </Figure>
  );
}

// ─── 3. Isotonicité ──────────────────────────────────────────────────────
export function LabIsotonicDiagram() {
  const cell = (cx: number, cy: number, mode: "hypo" | "iso" | "hyper") => (
    <g>
      {mode === "hypo" && <circle cx={cx} cy={cy} r={46} fill="#e9a0aa" fillOpacity={0.8} stroke="#8f2530" strokeWidth={3} className="fig-pulse" />}
      {mode === "iso" && <><ellipse cx={cx} cy={cy} rx={44} ry={34} fill="#d9414f" fillOpacity={0.85} stroke="#8f2530" strokeWidth={3} /><ellipse cx={cx} cy={cy} rx={18} ry={13} fill="#fff" fillOpacity={0.5} /></>}
      {mode === "hyper" && <path d={`M${cx - 36},${cy} l8,-14 l8,10 l10,-16 l10,14 l10,-12 l8,12 l-6,12 l8,8 l-14,6 l-8,-10 l-12,14 l-10,-12 l-10,12 l-4,-14z`} fill="#d9414f" fillOpacity={0.85} stroke="#8f2530" strokeWidth={3} />}
    </g>
  );
  const cols: [string, string, string, string, string, "hypo" | "iso" | "hyper"][] = [
    ["Hypotonique", "osmolarité < plasma", "eau distillée", "entrée d'eau : gonflement → hémolyse", C.blue, "hypo"],
    ["Isotonique", "osmolarité = plasma", "NaCl 0,9 %, glucose 5 %", "aucun échange net : forme normale", OK, "iso"],
    ["Hypertonique", "osmolarité > plasma", "NaCl 3 %, glucose 30 %", "sortie d'eau : rétraction (crénelure)", C.amber, "hyper"],
  ];
  return (
    <Figure viewBox="0 0 740 400" title="Solutions isotoniques, hypotoniques et hypertoniques" caption="L'osmose déplace l'eau vers le compartiment le plus concentré : effet sur les globules rouges selon la tonicité de la solution">
      {cols.map(([t, s, ex, eff, c, m], i) => (
        <g key={t} transform={`translate(${6 + i * 246} 0)`}>
          <rect x={0} y={6} width={236} height={388} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
          <Txt x={118} y={30} bold size={13.5} color={c}>{t}</Txt><Txt x={118} y={48} size={10.5} color={C.grey}>{s}</Txt>
          <circle cx={118} cy={140} r={70} fill={C.blue} fillOpacity={0.08} stroke={c} strokeOpacity={0.5} strokeDasharray="4 3" />
          {cell(118, 140, m)}
          {m === "hypo" && [0, 1, 2].map((d) => <Dot key={d} path={`M${50 + d * 24},70 L${90 + d * 14},110`} dur={2.4} delay={d * 0.6} r={5} color={C.blue} />)}
          {m === "hyper" && [0, 1, 2].map((d) => <Dot key={d} path={`M${90 + d * 14},110 L${50 + d * 24},70`} dur={2.4} delay={d * 0.6} r={5} color={C.blue} />)}
          <Txt x={118} y={236} bold size={11}>Exemples</Txt><Txt x={118} y={254} size={10.5}>{ex}</Txt>
          <Txt x={118} y={290} bold size={11} color={c}>Effet sur le globule rouge</Txt>
          <Txt x={118} y={310} size={10}>{eff.split(":")[0]}</Txt><Txt x={118} y={326} size={10} color={C.grey}>{eff.split(":")[1]?.trim() ?? ""}</Txt>
          <Txt x={118} y={366} size={9.5} color={C.grey}>{m === "iso" ? "1 NaCl = 2 particules (Na⁺ + Cl⁻)" : "l'osmolarité dépend du nombre de particules"}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 4. Titration acide-base ─────────────────────────────────────────────
export function LabTitrationDiagram() {
  const pKa = 4.76;
  const X = (v: number) => 340 + (v / 2) * 300;
  const Y = (ph: number) => 330 - ((ph - 1) / 12) * 270;
  const ph = (v: number) => {
    if (v < 0.001) return 2.9;
    if (v < 1) return pKa + Math.log10(v / (1 - v));
    if (v === 1) return 8.7;
    return 12.3 + Math.log10(Math.min(v - 1, 1) + 0.2) * 0.5;
  };
  const pts = Array.from({ length: 90 }).map((_, i) => {
    const v = 0.02 + (i / 89) * 1.98;
    const p = v < 0.985 ? pKa + Math.log10(v / (1 - v)) : v < 1.015 ? 4.76 + 4 * (v - 0.985) / 0.03 + 3 : 11.6 + Math.log10(v - 0.9) * 0.9;
    return [X(v), Y(Math.max(2.5, Math.min(12.6, p)))] as [number, number];
  });
  return (
    <Figure viewBox="0 0 740 430" title="Titration acide-base : acide faible par une base forte" caption="Courbe de titration : la zone tampon est centrée sur le pKa (pH = pKa à la demi-équivalence) ; le saut de pH marque le point d'équivalence">
      {/* burette */}
      <rect x={60} y={20} width={22} height={150} fill="#fff" fillOpacity={0.6} stroke="currentColor" strokeWidth={2.5} /><rect x={62} y={22} width={18} height={80} fill={C.blue} fillOpacity={0.5} />
      <path d="M62,170 L76,170 L71,190 L67,190z" fill="currentColor" />
      <Dot path="M71,194 L71,236" dur={1.8} r={4} color={C.blue} />
      <Txt x={71} y={12} size={10.5} bold>Burette : base (NaOH)</Txt>
      <path d="M40,240 L102,240 L88,300 Q71,318 54,300z" fill="none" stroke="currentColor" strokeWidth={2.5} />
      <path d="M46,272 L96,272 L88,298 Q71,314 54,298z" fill={C.amber} fillOpacity={0.6} />
      <Txt x={71} y={342} size={10.5} bold>Erlenmeyer : acide + indicateur</Txt>
      <Axes x={340} y={60} w={300} h={270} xl="Volume de base ajoutée" yl="pH" />
      {[3, 5, 7, 9, 11].map((v) => <g key={v}><line x1={334} y1={Y(v)} x2={340} y2={Y(v)} stroke="currentColor" /><Txt x={328} y={Y(v) + 4} anchor="end" size={10}>{String(v)}</Txt></g>)}
      <rect x={X(0.15)} y={Y(pKa + 1)} width={X(0.85) - X(0.15)} height={Y(pKa - 1) - Y(pKa + 1)} fill={OK} fillOpacity={0.15} />
      <Txt x={X(0.5)} y={Y(pKa - 1) + 16} size={10.5} bold color="#2a7a55">zone tampon (pKa ± 1)</Txt>
      <path d={pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ")} fill="none" stroke={C.blue} strokeWidth={4} />
      <Dot path={pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ")} dur={6} r={6} color={RED} />
      <line x1={X(0.5)} y1={Y(pKa)} x2={X(0.5)} y2={330} stroke="currentColor" strokeOpacity={0.5} strokeDasharray="4 3" />
      <line x1={340} y1={Y(pKa)} x2={X(0.5)} y2={Y(pKa)} stroke="currentColor" strokeOpacity={0.5} strokeDasharray="4 3" />
      <circle cx={X(0.5)} cy={Y(pKa)} r={6} fill={C.violet} />
      <Txt x={X(0.5) + 10} y={Y(pKa) + 22} anchor="start" size={10.5} bold color="#6a45b0">pH = pKa (½ équivalence)</Txt>
      <line x1={X(1)} y1={Y(11.6)} x2={X(1)} y2={330} stroke={RED} strokeOpacity={0.6} strokeDasharray="4 3" />
      <circle cx={X(1)} cy={Y(8.4)} r={6} fill={RED} />
      <Txt x={X(1) + 12} y={Y(8.4) + 4} anchor="start" size={10.5} bold color={RED}>point d'équivalence</Txt>
      <Txt x={X(1)} y={352} size={10} color={C.grey}>n(OH⁻) = n(acide)</Txt>
      <rect x={20} y={384} width={700} height={36} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={406} size={11}>Henderson-Hasselbalch : pH = pKa + log([A⁻] / [HA]) • pH = −log [H⁺] • à 25 °C : Ke = [H⁺][OH⁻] = 10⁻¹⁴</Txt>
    </Figure>
  );
}

// ─── 5. pH des fluides biologiques ───────────────────────────────────────
export function LabPhScaleDiagram() {
  const X = (p: number) => 50 + (p / 14) * 640;
  const fluids: [string, number, number, string][] = [
    ["Suc gastrique", 1, 1, RED],
    ["Urine, sécrétions vaginales", 5.5, 6.5, C.amber],
    ["Sueur, salive, lait maternel", 6, 6, "#9aa53a"],
    ["Sang, LEC, LIC", 7.35, 7.45, OK],
    ["Sécrétions pancréatiques, bile", 8, 8, C.blue],
  ];
  return (
    <Figure viewBox="0 0 740 400" title="Échelle de pH et pH des fluides biologiques" caption="pH de 0 à 14 : chaque unité correspond à un facteur 10 de [H⁺] ; le sang est maintenu à 7,35-7,45">
      {Array.from({ length: 141 }).map((_, i) => {
        const p = i / 10;
        const h = 8 + (p / 14) * 0;
        return <rect key={i} x={X(p)} y={40} width={640 / 140 + 0.5} height={44} fill={`hsl(${(p / 14) * 250},75%,58%)`} />;
      })}
      {Array.from({ length: 15 }).map((_, p) => <g key={p}><line x1={X(p)} y1={84} x2={X(p)} y2={92} stroke="currentColor" /><Txt x={X(p)} y={108} size={11} bold>{String(p)}</Txt></g>)}
      <Txt x={X(3)} y={30} bold size={12} color={RED}>acide : [H⁺] &gt; [OH⁻]</Txt>
      <Txt x={X(7)} y={30} bold size={12} color="#2a7a55">neutre</Txt>
      <Txt x={X(11)} y={30} bold size={12} color={C.blue}>basique : [H⁺] &lt; [OH⁻]</Txt>
      {fluids.map(([t, a, b, c], i) => {
        const y = 140 + i * 44;
        return (
          <g key={t}>
            <line x1={X(a)} y1={112} x2={X(a)} y2={y - 6} stroke={c} strokeWidth={2} strokeDasharray="3 3" />
            <rect x={X(a) - 6} y={y - 10} width={Math.max(X(b) - X(a), 0) + 12} height={20} rx={10} fill={c} />
            <Txt x={X(b) + 18} y={y + 4} anchor="start" size={11} bold>{t}</Txt>
            <Txt x={X(b) + 18 + t.length * 5.6 + 8} y={y + 4} anchor="start" size={10.5} color={C.grey}>{a === b ? `≈ ${a}` : `${String(a).replace(".", ",")}–${String(b).replace(".", ",")}`}</Txt>
          </g>
        );
      })}
      <rect x={20} y={356} width={700} height={36} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={378} size={11}>pH 7 : [H⁺] = 10⁻⁷ mol/L • une unité de pH = facteur 10 • mesure : pH-mètre, papier indicateur, indicateurs colorés</Txt>
    </Figure>
  );
}

// ─── 6. Point isoélectrique ──────────────────────────────────────────────
export function LabIsoelectricDiagram() {
  const X = (p: number) => 70 + (p / 14) * 400;
  const Y = (q: number) => 170 - q * 56;
  const gly = (p: number) => 1 / (1 + Math.pow(10, p - 2.34)) - 1 / (1 + Math.pow(10, 9.6 - p));
  const asp = (p: number) => 1 / (1 + Math.pow(10, p - 1.99)) - 1 / (1 + Math.pow(10, 3.9 - p)) - 1 / (1 + Math.pow(10, 9.9 - p));
  // Charge de la lysine : +2 → +1 → 0 → −1 (pKa 2,18 ; 8,95 ; 10,53)
  const lysCharge2 = (p: number) => 1 / (1 + Math.pow(10, p - 2.18)) + 1 / (1 + Math.pow(10, p - 8.95)) + 1 / (1 + Math.pow(10, p - 10.53)) - 1;
  return (
    <Figure viewBox="0 0 740 400" title="Charge nette des acides aminés selon le pH et point isoélectrique" caption="Le pI est le pH où la charge nette est nulle : pI(Gly) = (2,34 + 9,60)/2 = 5,97 ; pI(Asp) = (1,99 + 3,90)/2 = 2,95 ; pour un acide aminé dibasique, pI > 7">
      <Axes x={70} y={40} w={400} h={240} xl="pH" yl="charge nette" />
      <line x1={70} y1={Y(0)} x2={470} y2={Y(0)} stroke="currentColor" strokeOpacity={0.5} />
      {[0, 2, 4, 6, 8, 10, 12, 14].map((p) => <g key={p}><line x1={X(p)} y1={280} x2={X(p)} y2={286} stroke="currentColor" /><Txt x={X(p)} y={298} size={10}>{String(p)}</Txt></g>)}
      {[-1, 0, 1, 2].map((q) => <Txt key={q} x={62} y={Y(q) + 4} anchor="end" size={10}>{q > 0 ? `+${q}` : String(q)}</Txt>)}
      <path d={fnPath(gly, 0, 14, 80, X, (q) => Y(q))} fill="none" stroke={C.blue} strokeWidth={3.5} />
      <path d={fnPath(asp, 0, 14, 80, X, (q) => Y(q))} fill="none" stroke={RED} strokeWidth={3.5} />
      <path d={fnPath(lysCharge2, 0, 14, 80, X, (q) => Y(q))} fill="none" stroke={C.green} strokeWidth={3.5} />
      {[[5.97, C.blue], [2.95, RED], [9.74, C.green]].map(([p, c]) => <g key={String(p)}><circle cx={X(Number(p))} cy={Y(0)} r={6} fill={String(c)} /><line x1={X(Number(p))} y1={Y(0)} x2={X(Number(p))} y2={280} stroke={String(c)} strokeDasharray="3 3" /></g>)}
      <Dot path={fnPath(gly, 0, 14, 80, X, (q) => Y(q))} dur={6} r={6} color={C.blue} />
      <rect x={490} y={40} width={240} height={250} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={610} y={62} bold size={12}>Points isoélectriques</Txt>
      {[["Glycine", "pI = 5,97", "monoamino-monocarboxylique", C.blue], ["Aspartate", "pI = 2,95", "diacide : 2 pKa les plus acides", RED], ["Lysine", "pI ≈ 9,7", "dibasique : pI > 7", C.green]].map(([t, v, s, c], i) => (
        <g key={String(t)}>
          <rect x={502} y={76 + i * 68} width={216} height={58} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={610} y={96 + i * 68} bold size={11.5} color={String(c)}>{`${t} — ${v}`}</Txt><Txt x={610} y={114 + i * 68} size={10} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      <Txt x={610} y={282} size={9.5} color={C.grey}>pH &lt; pI : cation • pH = pI : neutre • pH &gt; pI : anion</Txt>
      <Txt x={370} y={336} bold size={11.5}>à pH = pI : solubilité minimale, pas de migration dans un champ électrique</Txt>
      <Txt x={370} y={356} size={10.5} color={C.grey}>monoamino-monocarboxylique : pI = (pKa₁ + pKa₂)/2 • diacide : moyenne des 2 pKa acides • dibasique : moyenne des 2 pKa basiques</Txt>
    </Figure>
  );
}

// ─── 7. Systèmes tampons ─────────────────────────────────────────────────
export function LabBufferDiagram() {
  const X = (r: number) => 70 + ((r + 2) / 4) * 360;
  const Y = (p: number) => 290 - ((p - 4) / 5) * 240;
  return (
    <Figure viewBox="0 0 740 420" title="Systèmes tampons : équation de Henderson-Hasselbalch" caption="Un tampon résiste aux variations de pH dans la zone pKa ± 1 ; tampon bicarbonate : pH = 6,1 + log ([HCO₃⁻] / (0,03 × PCO₂)), rapport 20/1 à pH 7,4">
      <Axes x={70} y={50} w={360} h={240} xl="log ([A⁻] / [HA])" yl="pH" />
      <rect x={X(-1)} y={50} width={X(1) - X(-1)} height={240} fill={OK} fillOpacity={0.12} />
      <Txt x={X(0)} y={44} size={10.5} bold color="#2a7a55">zone tampon (pKa ± 1)</Txt>
      <path d={`M${X(-2)},${Y(5)} L${X(2)},${Y(7)}`} stroke={C.blue} strokeWidth={4} />
      <line x1={70} y1={Y(6)} x2={X(0)} y2={Y(6)} stroke="currentColor" strokeOpacity={0.5} strokeDasharray="4 3" />
      <line x1={X(0)} y1={Y(6)} x2={X(0)} y2={290} stroke="currentColor" strokeOpacity={0.5} strokeDasharray="4 3" />
      <circle cx={X(0)} cy={Y(6)} r={6} fill={C.violet} />
      <Txt x={X(0) + 10} y={Y(6) + 18} anchor="start" size={10.5} bold color="#6a45b0">pH = pKa si [A⁻] = [HA]</Txt>
      <Dot path={`M${X(-2)},${Y(5)} L${X(2)},${Y(7)}`} dur={5} r={6} color={RED} />
      {[[-2, "−2"], [-1, "−1"], [0, "0"], [1, "+1"], [2, "+2"]].map(([v, l]) => <Txt key={String(v)} x={X(Number(v))} y={306} size={10}>{String(l)}</Txt>)}
      <line x1={450} y1={40} x2={450} y2={400} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={590} y={36} bold size={12.5}>Tampons du sang</Txt>
      {[["Bicarbonate", "HCO₃⁻ / H₂CO₃ (CO₂)", "pKa 6,1 • 24 / 1,2 = 20 / 1", "principal tampon extracellulaire ; poumons + reins", C.blue],
        ["Phosphate", "HPO₄²⁻ / H₂PO₄⁻", "pKa 6,8", "tampon intracellulaire et urinaire", C.amber],
        ["Protéines / hémoglobine", "chaînes latérales (His, pKa ≈ 6)", "", "tampon intracellulaire majeur (globule rouge)", C.violet]].map(([t, s, k, u, c], i) => (
        <g key={String(t)}>
          <rect x={462} y={52 + i * 92} width={268} height={82} rx={10} fill={String(c)} fillOpacity={0.08} stroke={String(c)} strokeWidth={2} />
          <Txt x={596} y={74 + i * 92} bold size={12} color={String(c)}>{String(t)}</Txt><Txt x={596} y={92 + i * 92} size={10.5}>{String(s)}</Txt>
          <Txt x={596} y={108 + i * 92} size={10} bold>{String(k)}</Txt><Txt x={596} y={124 + i * 92} size={9.5} color={C.grey}>{String(u)}</Txt>
        </g>
      ))}
      <rect x={20} y={338} width={420} height={72} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={230} y={358} bold size={11}>Déséquilibres acido-basiques</Txt>
      <Txt x={230} y={376} size={10.5}>acidose : pH &lt; 7,35 • alcalose : pH &gt; 7,45</Txt>
      <Txt x={230} y={394} size={10} color={C.grey}>métabolique (HCO₃⁻) ou respiratoire (PCO₂) — compensation par l'autre système</Txt>
    </Figure>
  );
}

// ─── 8. Centrifugation et tubes de prélèvement ───────────────────────────
export function LabCentrifugeDiagram() {
  const tubes: [string, string, string, string][] = [
    ["Jaune / rouge", "#e9c53a", "sérum", "aucun anticoagulant ± gel"],
    ["Vert", "#3fa877", "plasma", "héparine"],
    ["Violet", "#8a63d2", "sang total", "EDTA (hémogramme, HbA1c)"],
    ["Bleu", "#4f7be8", "plasma", "citrate (coagulation)"],
    ["Gris", "#8b93a7", "plasma", "fluorure (glycémie)"],
  ];
  return (
    <Figure viewBox="0 0 740 420" title="Centrifugation, fluides biologiques et tubes de prélèvement" caption="La centrifugation sépare les composants selon leur densité : globules rouges au fond, couche leuco-plaquettaire, puis plasma (ou sérum en l'absence d'anticoagulant)">
      <g style={{ transformOrigin: "110px 110px", animation: "fig-spin 2.4s linear infinite" }}>
        <circle cx={110} cy={110} r={72} fill={C.grey} fillOpacity={0.15} stroke={C.grey} strokeWidth={3} />
        {[0, 90, 180, 270].map((a) => <g key={a} transform={`rotate(${a} 110 110)`}><rect x={102} y={44} width={16} height={38} rx={4} fill={RED} fillOpacity={0.7} /></g>)}
        <circle cx={110} cy={110} r={10} fill="currentColor" />
      </g>
      <Txt x={110} y={210} bold size={12}>Rotor de centrifugeuse</Txt><Txt x={110} y={226} size={10} color={C.grey}>force centrifuge : g = ω² r</Txt>
      <Txt x={330} y={26} bold size={12.5}>Sang après centrifugation</Txt>
      {[["Sang total", 0], ["Sang centrifugé", 1]].map(([t, k]) => (
        <g key={String(t)} transform={`translate(${260 + Number(k) * 110} 44)`}>
          <path d="M0,0 L0,140 Q26,168 52,140 L52,0" fill="#fff" fillOpacity={0.4} stroke="currentColor" strokeWidth={2.5} />
          {Number(k) === 0 ? <path d="M2,20 L2,140 Q26,166 50,140 L50,20z" fill="#b83a48" fillOpacity={0.8} /> : (
            <>
              <rect x={2} y={20} width={48} height={64} fill={C.amber} fillOpacity={0.45} />
              <rect x={2} y={84} width={48} height={6} fill="#f2ece0" />
              <path d="M2,90 L2,140 Q26,166 50,140 L50,90z" fill="#b83a48" fillOpacity={0.85} />
            </>
          )}
          <Txt x={26} y={190} size={10} bold>{String(t)}</Txt>
        </g>
      ))}
      <Txt x={464} y={72} anchor="start" size={10.5} bold color={DEEP.amber}>plasma</Txt><Txt x={464} y={86} anchor="start" size={9.5} color={C.grey}>(sérum si coagulé : sans fibrinogène)</Txt>
      <Txt x={464} y={134} anchor="start" size={10.5} bold>couche leuco-plaquettaire</Txt>
      <Txt x={464} y={176} anchor="start" size={10.5} bold color="#b83a48">globules rouges</Txt>
      <line x1={20} y1={244} x2={720} y2={244} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={266} bold size={12}>Code couleur des tubes</Txt>
      {tubes.map(([col, hex, spec, use], i) => (
        <g key={col} transform={`translate(${16 + i * 144} 280)`}>
          <rect x={20} y={0} width={30} height={60} rx={6} fill="#fff" fillOpacity={0.6} stroke="currentColor" strokeWidth={2} /><rect x={16} y={-8} width={38} height={14} rx={4} fill={hex} />
          <Txt x={35} y={78} bold size={11}>{col}</Txt><Txt x={35} y={94} size={10} bold color={C.grey}>{spec}</Txt><Txt x={35} y={108} size={9} color={C.grey}>{use.slice(0, 22)}</Txt><Txt x={35} y={120} size={9} color={C.grey}>{use.slice(22).trim()}</Txt>
        </g>
      ))}
      <Txt x={370} y={412} size={10} color={C.grey}>LCR : liquide céphalo-rachidien, autre fluide biologique analysé</Txt>
    </Figure>
  );
}

// ─── 9. Chromatographie ──────────────────────────────────────────────────
export function LabChromatographyDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Chromatographie sur papier et coefficient de rétention Rf" caption="Le solvant migre par capillarité : chaque acide aminé migre selon son affinité pour les phases stationnaire et mobile ; Rf = distance du composé / distance du front du solvant">
      <rect x={60} y={40} width={220} height={310} fill="#fbf8ee" stroke="currentColor" strokeWidth={2} />
      <line x1={60} y1={318} x2={280} y2={318} stroke="currentColor" strokeDasharray="4 3" /><Txt x={70} y={334} anchor="start" size={10} color={C.grey}>ligne de dépôt (origine)</Txt>
      <line x1={60} y1={66} x2={280} y2={66} stroke={C.blue} strokeWidth={2} /><Txt x={286} y={70} anchor="start" size={10} bold color={C.blue}>front du solvant</Txt>
      {[[100, 130, "Leu", C.violet], [160, 210, "Ala", C.amber], [220, 262, "Gly", C.green]].map(([x, y, t, c]) => (
        <g key={String(t)}>
          <ellipse cx={Number(x)} cy={Number(y)} rx={14} ry={11} fill={String(c)} fillOpacity={0.6} stroke={String(c)} strokeWidth={2} />
          <ellipse cx={Number(x)} cy={318} rx={9} ry={7} fill={String(c)} fillOpacity={0.35} />
          <Txt x={Number(x)} y={Number(y) + 4} size={10} bold>{String(t)}</Txt>
          <Dot path={`M${Number(x)},318 L${Number(x)},${Number(y)}`} dur={4} r={4} color={String(c)} />
        </g>
      ))}
      <path d="M60,350 L280,350 L280,388 L60,388z" fill={C.blue} fillOpacity={0.25} stroke={C.blue} strokeWidth={2} /><Txt x={170} y={374} size={10.5} bold color={C.blue}>solvant (phase mobile)</Txt>
      <Txt x={170} y={28} bold size={12}>Papier : phase stationnaire</Txt>
      <line x1={334} y1={318} x2={334} y2={66} stroke="currentColor" strokeWidth={1.5} markerEnd="url(#fig-arrow)" />
      <Txt x={344} y={200} anchor="start" size={10} bold>d (front) = 252</Txt>
      <Txt x={440} y={40} bold size={13}>Rf = d(composé) / d(front)</Txt>
      {[["Leu", "0,75", C.violet], ["Ala", "0,57", C.amber], ["Gly", "0,22", C.green]].map(([t, v, c], i) => (
        <g key={String(t)}>
          <rect x={430} y={62 + i * 54} width={280} height={44} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={480} y={90 + i * 54} bold size={13} color={String(c)}>{String(t)}</Txt><Txt x={620} y={90 + i * 54} size={12}>{`Rf ≈ ${v} (exemple)`}</Txt>
        </g>
      ))}
      <Txt x={570} y={244} bold size={11.5}>Les 5 mécanismes de séparation</Txt>
      {["adsorption (polarité)", "partage (solubilité)", "échange d'ions (charge)", "exclusion de taille (tamisage)", "affinité (interaction spécifique)"].map((t, i) => <Txt key={t} x={570} y={264 + i * 20} size={10.5}>{t}</Txt>)}
      <Txt x={570} y={378} size={10} color={C.grey}>révélation des acides aminés : ninhydrine (spots violets)</Txt>
    </Figure>
  );
}

// ─── 10. Dialyse et électrophorèse ───────────────────────────────────────
export function LabElectrophoresisDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Dialyse et électrophorèse des protéines" caption="Dialyse : une membrane semi-perméable retient les grosses molécules (albumine) et laisse passer les petites ; électrophorèse : migration selon la charge et la taille dans un champ électrique">
      <Txt x={170} y={24} bold size={12.5} color={C.blue}>Dialyse</Txt>
      <rect x={20} y={40} width={300} height={150} rx={8} fill={C.blue} fillOpacity={0.06} stroke="currentColor" strokeWidth={2} />
      <rect x={20} y={40} width={150} height={150} rx={0} fill={C.violet} fillOpacity={0.08} />
      <line x1={170} y1={40} x2={170} y2={190} stroke={C.amber} strokeWidth={4} strokeDasharray="6 4" />
      <Txt x={170} y={206} size={10} bold color="#a3701a">membrane semi-perméable</Txt>
      {[[50, 80], [90, 130], [130, 90], [60, 160]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={14} fill={C.violet} fillOpacity={0.7} />)}
      {[[50, 100], [110, 160], [140, 130]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={C.green} />)}
      {[0, 1, 2].map((d) => <Dot key={d} path={`M${120 + d * 10},${100 + d * 20} L250,${90 + d * 24}`} dur={3.2} delay={d * 0.9} r={4} color={C.green} />)}
      <Txt x={95} y={58} bold size={10.5} color="#6a45b0">albumine (retenue)</Txt><Txt x={245} y={58} bold size={10.5} color="#2a7a55">(NH₄)₂SO₄ diffuse</Txt>
      <Txt x={170} y={226} size={10} color={C.grey}>séparation des petites molécules • applications : hémodialyse, désalage</Txt>
      <line x1={340} y1={30} x2={340} y2={400} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={540} y={24} bold size={12.5} color={C.red}>Électrophorèse</Txt>
      <rect x={370} y={44} width={340} height={30} rx={6} fill={C.red} fillOpacity={0.12} stroke={C.red} strokeWidth={2} /><Txt x={390} y={64} anchor="start" size={11} bold color={RED}>cathode −</Txt>
      <rect x={370} y={276} width={340} height={30} rx={6} fill={C.blue} fillOpacity={0.12} stroke={C.blue} strokeWidth={2} /><Txt x={390} y={296} anchor="start" size={11} bold color={C.blue}>anode +</Txt>
      <rect x={380} y={82} width={320} height={186} fill="#efe9dc" stroke="currentColor" strokeWidth={2} />
      {[420, 470, 520, 570, 620, 670].map((x) => <rect key={x} x={x - 12} y={92} width={24} height={9} fill="#333" />)}
      {[["Alb", 226, 22, C.blue], ["α1", 190, 10, C.green], ["α2", 172, 14, C.amber], ["β", 150, 16, C.violet], ["γ", 128, 20, C.red]].map(([t, y, h, c], i) => (
        <g key={String(t)}>
          {[420, 470, 520, 570, 620, 670].map((x) => <rect key={x} x={x - 14} y={Number(y) - Number(h) / 2 - 20} width={28} height={Number(h) * 0.5 + 4} fill={String(c)} fillOpacity={0.7} />)}
          <Txt x={392} y={Number(y) - 12} size={9.5} bold anchor="start" color={String(c)}>{i === 0 ? "" : ""}</Txt>
        </g>
      ))}
      <Dot path="M545,102 L545,240" dur={4} r={7} color={C.blue} label="−" />
      <Txt x={545} y={258} size={10} bold color={C.blue}>protéines chargées − : migrent vers l'anode</Txt>
      <Txt x={540} y={330} bold size={11}>Facteurs de migration</Txt>
      <Txt x={540} y={348} size={10.5}>charge nette (pH vs pI) • taille • forme</Txt>
      <Txt x={540} y={364} size={10.5}>voltage • pH du tampon • nature du support</Txt>
      <Txt x={540} y={386} size={10} color={C.grey}>sérum : albumine (la plus rapide), α1, α2, β, γ (la plus lente)</Txt>
    </Figure>
  );
}

// ─── 11. Spectrophotométrie ──────────────────────────────────────────────
export function LabSpectroDiagram() {
  const X = (c: number) => 470 + (c / 10) * 240;
  const Y = (a: number) => 260 - a * 190;
  return (
    <Figure viewBox="0 0 740 420" title="Spectrophotométrie, loi de Beer-Lambert et droite d'étalonnage" caption="A = ε · l · c : l'absorbance est proportionnelle à la concentration ; la concentration d'un échantillon se lit sur la droite d'étalonnage">
      <rect x={20} y={40} width={64} height={54} rx={8} fill={C.amber} fillOpacity={0.5} stroke={DEEP.amber} strokeWidth={2} /><Txt x={52} y={64} bold size={10.5}>Source</Txt><Txt x={52} y={80} size={9.5}>lumineuse</Txt>
      <rect x={120} y={40} width={64} height={54} rx={8} fill={C.violet} fillOpacity={0.4} stroke={DEEP.violet} strokeWidth={2} /><Txt x={152} y={64} bold size={10.5}>Mono-</Txt><Txt x={152} y={80} size={10}>chromateur</Txt>
      <rect x={230} y={30} width={44} height={74} fill="#fff" fillOpacity={0.7} stroke="currentColor" strokeWidth={2.5} /><rect x={232} y={50} width={40} height={52} fill={C.blue} fillOpacity={0.45} />
      <Txt x={252} y={22} size={10.5} bold>Cuvette</Txt>
      <rect x={330} y={40} width={64} height={54} rx={8} fill={C.green} fillOpacity={0.4} stroke={DEEP.green} strokeWidth={2} /><Txt x={362} y={64} bold size={10.5}>Détecteur</Txt><Txt x={362} y={80} size={10}>A = log I₀/I</Txt>
      {arrow("M86,67 L118,67")}{arrow("M186,67 L228,67")}{arrow("M276,67 L328,67")}
      <path d="M186,67 L228,67" stroke={C.amber} strokeWidth={5} opacity={0.6} />
      <Dot path="M90,67 L228,67" dur={2.4} r={5} color={C.amber} />
      <Txt x={200} y={124} size={10.5} bold color={C.amber}>I₀</Txt><Txt x={316} y={124} size={10.5} bold color={C.amber}>I</Txt>
      <Txt x={200} y={150} bold size={12}>Beer-Lambert</Txt>
      <Txt x={200} y={172} bold size={17}>A = ε · l · c</Txt>
      {[["A", "absorbance (sans unité)"], ["ε", "coefficient d'extinction molaire"], ["l", "trajet optique (cm)"], ["c", "concentration"]].map(([s, t], i) => <Txt key={s} x={200} y={198 + i * 18} size={10.5}><tspan fontWeight={700}>{`${s} `}</tspan>{`: ${t}`}</Txt>)}
      <Txt x={200} y={284} size={10.5} color={C.grey}>T = I / I₀ • A = −log T</Txt>
      <line x1={410} y1={30} x2={410} y2={400} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Axes x={470} y={60} w={240} h={200} xl="concentration" yl="absorbance" />
      <path d={`M${X(0)},${Y(0)} L${X(9)},${Y(0.9)}`} stroke={C.blue} strokeWidth={4} />
      {[1, 2.5, 4, 6, 8].map((c) => <circle key={c} cx={X(c)} cy={Y(c / 10 + (c % 2 ? 0.01 : -0.012))} r={5} fill={C.blue} />)}
      <line x1={70} y1={0} x2={70} y2={0} stroke="none" />
      <line x1={470} y1={Y(0.55)} x2={X(5.5)} y2={Y(0.55)} stroke={RED} strokeDasharray="4 3" strokeWidth={2} />
      <line x1={X(5.5)} y1={Y(0.55)} x2={X(5.5)} y2={260} stroke={RED} strokeDasharray="4 3" strokeWidth={2} />
      <circle cx={X(5.5)} cy={Y(0.55)} r={6} fill={RED} />
      <Txt x={X(5.5) + 10} y={Y(0.55) - 8} anchor="start" size={10.5} bold color={RED}>échantillon inconnu</Txt>
      <rect x={20} y={320} width={700} height={88} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={342} bold size={11.5}>Détermination de la concentration</Txt>
      <Txt x={370} y={362} size={10.5}>1) courbe d'étalonnage • 2) comparaison avec un étalon : c = c_étalon × A / A_étalon • 3) coefficient ε connu</Txt>
      <Txt x={370} y={382} size={10.5}>application : protéines totales du sérum (réaction du biuret)</Txt>
      <Txt x={370} y={398} size={10} color={C.grey}>loi valable pour des solutions diluées ; blanc = référence sans le composé dosé</Txt>
    </Figure>
  );
}

// ─── 12. Test optique de la LDH ──────────────────────────────────────────
export function LabLdhDiagram() {
  const X = (t: number) => 480 + (t / 5) * 230;
  const Y = (a: number) => 260 - a * 190;
  return (
    <Figure viewBox="0 0 740 420" title="Dosage de la lactate déshydrogénase par test optique" caption="Lactate + NAD⁺ ⇌ pyruvate + NADH : le NADH absorbe à 340 nm ; la vitesse d'augmentation de l'absorbance mesure l'activité de l'enzyme">
      {box(20, 30, 100, 44, "Lactate", undefined, C.blue, 12.5)}
      <Txt x={132} y={58} bold size={18}>+</Txt>
      {box(150, 30, 80, 44, "NAD⁺", undefined, C.violet, 12.5)}
      {arrow("M240,52 L330,52")}{arrow("M330,66 L240,66")}
      <Txt x={286} y={42} bold size={11} color="#6a45b0">LDH</Txt>
      {box(340, 30, 100, 44, "Pyruvate", undefined, C.green, 12.5)}
      <Txt x={452} y={58} bold size={18}>+</Txt>
      {box(470, 30, 90, 44, "NADH", "absorbe à 340 nm", C.amber, 12.5)}
      <Txt x={620} y={44} bold size={11.5}>réaction réversible</Txt><Txt x={620} y={62} size={10} color={C.grey}>enzyme + cofacteur (NAD⁺)</Txt>
      <Axes x={70} y={120} w={300} h={140} xl="longueur d'onde (nm)" yl="absorbance" />
      <path d="M70,240 C120,236 150,150 190,150 C230,150 250,240 370,245" fill="none" stroke={C.blue} strokeWidth={3.5} strokeDasharray="6 3" />
      <path d="M70,246 C120,246 150,246 190,246 C250,246 280,250 370,252" fill="none" stroke={C.violet} strokeWidth={3.5} />
      <path d="M70,246 C90,246 130,240 150,190 C170,140 200,130 240,148 C270,160 290,240 370,246" fill="none" stroke={C.amber} strokeWidth={3.5} />
      <line x1={218} y1={126} x2={218} y2={260} stroke={RED} strokeDasharray="4 3" /><Txt x={218} y={116} size={10.5} bold color={RED}>340 nm</Txt>
      <Txt x={300} y={150} anchor="start" size={10.5} bold color={DEEP.amber}>NADH</Txt><Txt x={300} y={230} anchor="start" size={10.5} bold color={DEEP.violet}>NAD⁺ (n'absorbe pas)</Txt>
      <line x1={410} y1={110} x2={410} y2={340} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Axes x={480} y={120} w={230} h={140} xl="temps (min)" yl="A340" />
      <path d={`M${X(0)},${Y(0.1)} L${X(4.6)},${Y(0.82)}`} stroke={C.amber} strokeWidth={4} />
      <Dot path={`M${X(0)},${Y(0.1)} L${X(4.6)},${Y(0.82)}`} dur={4} r={6} color={RED} />
      <path d={`M${X(1)},${Y(0.26)} L${X(3)},${Y(0.26)} L${X(3)},${Y(0.58)}`} fill="none" stroke="currentColor" strokeDasharray="4 3" />
      <Txt x={X(3) + 8} y={Y(0.42)} anchor="start" size={10.5} bold>ΔA / Δt</Txt>
      <rect x={20} y={318} width={700} height={92} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={340} bold size={11.5}>Activité enzymatique = ΔA / Δt / (ε · l)</Txt>
      <Txt x={370} y={360} size={10.5}>la pente de A340 en fonction du temps est proportionnelle à la vitesse de la réaction</Txt>
      <Txt x={370} y={380} size={10.5}>test optique : on suit l'apparition (ou la disparition) du NADH</Txt>
      <Txt x={370} y={398} size={10} color={C.grey}>LDH élevée : lésions cellulaires (cœur, foie, muscles, hémolyse)</Txt>
    </Figure>
  );
}

// ─── 13. Vitamine C par iodométrie ───────────────────────────────────────
export function LabIodometryDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Dosage de la vitamine C par iodométrie" caption="L'acide ascorbique est oxydé par l'iode en acide déshydroascorbique ; quand il est épuisé, l'excès d'iode donne avec l'amidon une coloration bleu foncé : fin du dosage">
      <Txt x={130} y={22} bold size={12.5}>Titration redox</Txt>
      <rect x={112} y={34} width={22} height={100} fill="#fff" fillOpacity={0.6} stroke="currentColor" strokeWidth={2.5} /><rect x={114} y={36} width={18} height={56} fill={C.amber} fillOpacity={0.6} />
      <path d="M114,134 L132,134 L126,150 L120,150z" fill="currentColor" />
      <Dot path="M123,154 L123,204" dur={1.6} r={4} color={C.amber} />
      <Txt x={123} y={28} size={10} bold anchor="middle">{""}</Txt>
      <Txt x={200} y={80} anchor="start" size={10.5} bold color={DEEP.amber}>burette : solution d'iode I₂</Txt>
      <path d="M70,210 L176,210 L156,290 Q123,312 90,290z" fill="none" stroke="currentColor" strokeWidth={2.5} />
      <path d="M78,250 L168,250 L154,288 Q123,308 92,288z" fill={C.green} fillOpacity={0.35} className="fig-pulse" />
      <Txt x={123} y={330} size={10.5} bold>vitamine C + amidon</Txt><Txt x={123} y={346} size={10} color={C.grey}>solution incolore</Txt>
      {arrow("M200,270 L286,270")}
      <Txt x={243} y={258} size={10} bold color={RED}>ajout d'I₂</Txt>
      <path d="M300,210 L406,210 L386,290 Q353,312 320,290z" fill="none" stroke="currentColor" strokeWidth={2.5} />
      <path d="M308,250 L398,250 L384,288 Q353,308 322,288z" fill="#22284d" fillOpacity={0.85} />
      <Txt x={353} y={330} size={10.5} bold color="#22284d">complexe amidon-iode</Txt><Txt x={353} y={346} size={10} color={C.grey}>bleu foncé = point d'équivalence</Txt>
      <line x1={440} y1={30} x2={440} y2={380} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={585} y={30} bold size={12.5}>Réaction</Txt>
      {box(456, 44, 128, 54, "Acide ascorbique", "réducteur (2 e⁻)", C.green, 11.5)}
      <Txt x={600} y={76} bold size={16}>+ I₂ →</Txt>
      {box(632, 44, 100, 54, "Acide déshydro-", "ascorbique + 2 I⁻", C.amber, 11)}
      <Txt x={594} y={128} size={11} bold>oxydoréduction : I₂ + 2 e⁻ → 2 I⁻</Txt>
      {[["Avant l'équivalence", "I₂ réduit en I⁻ : solution incolore", C.green], ["À l'équivalence", "plus de vitamine C : I₂ en excès", C.amber], ["Après", "I₂ + amidon : bleu foncé persistant", "#22284d"]].map(([t, s, c], i) => (
        <g key={String(t)}>
          <rect x={456} y={148 + i * 62} width={276} height={52} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={594} y={168 + i * 62} bold size={11.5} color={String(c)}>{String(t)}</Txt><Txt x={594} y={186 + i * 62} size={10.5}>{String(s)}</Txt>
        </g>
      ))}
      <Txt x={594} y={352} size={10.5} bold>m(vit. C) = n(I₂) × M(acide ascorbique)</Txt>
      <Txt x={594} y={370} size={10} color={C.grey}>1 mol d'I₂ oxyde 1 mol d'acide ascorbique</Txt>
      <Txt x={230} y={382} size={10} color={C.grey}>vitamine C : antioxydant, hydroxylation du collagène, scorbut en cas de carence</Txt>
    </Figure>
  );
}
