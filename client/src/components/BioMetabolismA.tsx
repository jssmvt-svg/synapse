import { Figure, C, Txt, Dot, Seq } from "./Figure";
import { RED, OK, DEEP, arrow, box } from "./FigKit";

// Biochimie S2 — glycolyse, décarboxylation du pyruvate, Krebs, chaîne respiratoire, glycogène.

const pill = (x: number, y: number, t: string, c: string, w = 52) => (
  <g><rect x={x - w / 2} y={y - 10} width={w} height={20} rx={10} fill={c} /><Txt x={x} y={y + 4} bold size={10} color="#fff">{t}</Txt></g>
);

// ─── 1. Glycolyse ────────────────────────────────────────────────────────
export function GlycolysisDiagram() {
  const steps: [string, string, string, boolean, string][] = [
    ["Glucose", "", "", false, ""],
    ["Glucose-6-phosphate", "Hexokinase / glucokinase", "ATP", true, "−ATP"],
    ["Fructose-6-phosphate", "Phosphoglucose isomérase", "", false, ""],
    ["Fructose-1,6-bisphosphate", "PFK-1", "ATP", true, "−ATP"],
    ["DHAP ⇌ glycéraldéhyde-3-P", "Aldolase • triose-P isomérase", "", false, ""],
    ["1,3-bisphosphoglycérate", "GAPDH (× 2)", "NADH", false, "+NADH"],
    ["3-phosphoglycérate", "Phosphoglycérate kinase", "ATP", false, "+ATP"],
    ["2-phosphoglycérate", "Phosphoglycérate mutase", "", false, ""],
    ["Phosphoénolpyruvate (PEP)", "Énolase", "H₂O", false, ""],
    ["Pyruvate", "Pyruvate kinase", "ATP", true, "+ATP"],
  ];
  return (
    <Figure viewBox="0 0 740 620" title="Glycolyse : les 10 réactions" caption="Glycolyse : glucose (6C) → 2 pyruvates (3C) ; investissement de 2 ATP (étapes 1-5) puis rendement de 4 ATP et 2 NADH (étapes 6-10) : bilan net +2 ATP, +2 NADH">
      <rect x={20} y={40} width={10} height={250} rx={5} fill={C.blue} fillOpacity={0.7} /><Txt x={54} y={168} size={10} bold color={DEEP.blue}>{""}</Txt>
      <text transform="translate(12 165) rotate(-90)" textAnchor="middle" fontSize={11} fontWeight={700} fill={DEEP.blue}>Investissement (2 ATP)</text>
      <rect x={20} y={300} width={10} height={290} rx={5} fill={C.green} fillOpacity={0.7} />
      <text transform="translate(12 445) rotate(-90)" textAnchor="middle" fontSize={11} fontWeight={700} fill={DEEP.green}>Rendement (× 2)</text>
      {steps.map(([t, e, cof, irrev, tag], i) => {
        const y = 20 + i * 60;
        return (
          <g key={t}>
            <rect x={60} y={y} width={220} height={32} rx={8} fill={i < 5 ? C.blue : C.green} fillOpacity={0.14} stroke={i < 5 ? C.blue : C.green} strokeWidth={2} />
            <Txt x={170} y={y + 21} bold size={11.5}>{t}</Txt>
            {i > 0 && <>
              <path d={`M170,${y - 26} L170,${y - 2}`} stroke={irrev ? RED : "currentColor"} strokeWidth={irrev ? 3.5 : 2} markerEnd="url(#fig-arrow)" fill="none" />
              <Txt x={292} y={y - 8} anchor="start" size={10.5} bold color={irrev ? RED : "currentColor"}>{`${i}. ${e}`}</Txt>
              {tag && pill(512, y - 8, tag, tag.startsWith("−") ? C.red : tag.includes("NADH") ? C.amber : C.green, 58)}
            </>}
          </g>
        );
      })}
      <Dot path="M170,30 L170,590" dur={10} r={8} color={RED} />
      <line x1={540} y1={20} x2={540} y2={600} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={640} y={30} bold size={12.5}>Bilan par glucose</Txt>
      {[["ATP consommé", "− 2", RED], ["ATP produit", "+ 4", OK], ["Net", "+ 2 ATP", C.blue], ["NADH", "+ 2", C.amber]].map(([t, v, c], i) => (
        <g key={String(t)}><rect x={556} y={44 + i * 40} width={168} height={32} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} /><Txt x={610} y={65 + i * 40} bold size={11}>{String(t)}</Txt><Txt x={690} y={65 + i * 40} bold size={12} color={String(c)}>{String(v)}</Txt></g>
      ))}
      <Txt x={640} y={238} bold size={12}>Devenir du pyruvate</Txt>
      {[["Aérobiose", "→ acétyl-CoA → Krebs", C.green], ["Anaérobiose", "→ lactate (LDH) : régénère le NAD⁺", C.amber], ["Levure", "→ éthanol + CO₂", C.violet]].map(([t, s, c], i) => (
        <g key={String(t)}><rect x={556} y={252 + i * 62} width={168} height={52} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} /><Txt x={640} y={272 + i * 62} bold size={11} color={String(c)}>{String(t)}</Txt><Txt x={640} y={290 + i * 62} size={9.5}>{String(s)}</Txt></g>
      ))}
      <Txt x={640} y={460} size={10.5} bold color={RED}>3 étapes irréversibles</Txt><Txt x={640} y={476} size={10} color={C.grey}>hexokinase • PFK-1 • pyruvate kinase</Txt>
      <Txt x={640} y={492} size={10} color={C.grey}>(flèches rouges : points de régulation)</Txt>
      <Txt x={640} y={524} size={10.5} bold>Localisation : cytosol</Txt><Txt x={640} y={540} size={10} color={C.grey}>tous les tissus, sans oxygène</Txt>
    </Figure>
  );
}

// ─── 2. Régulation de la glycolyse ───────────────────────────────────────
export function GlycolysisRegulationDiagram() {
  const enzyme = (y: number, name: string, act: string[], inh: string[], note: string, c: string) => (
    <g transform={`translate(0 ${y})`}>
      <rect x={20} y={0} width={700} height={118} rx={10} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={2} />
      <rect x={40} y={16} width={170} height={86} rx={10} fill={c} fillOpacity={0.2} stroke={c} strokeWidth={2.5} />
      <Txt x={125} y={50} bold size={14}>{name}</Txt><Txt x={125} y={70} size={10} color={C.grey}>{note}</Txt>
      <Txt x={340} y={30} bold size={11} color={OK}>+ activateurs</Txt>
      {act.map((a, i) => <g key={a}><rect x={240} y={38 + i * 24} width={200} height={20} rx={10} fill={OK} fillOpacity={0.2} stroke={OK} /><Txt x={340} y={52 + i * 24} size={10.5} bold>{a}</Txt></g>)}
      <Txt x={590} y={30} bold size={11} color={RED}>− inhibiteurs</Txt>
      {inh.map((a, i) => <g key={a}><rect x={490} y={38 + i * 24} width={200} height={20} rx={10} fill={RED} fillOpacity={0.15} stroke={RED} /><Txt x={590} y={52 + i * 24} size={10.5} bold>{a}</Txt></g>)}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Régulation de la glycolyse aux trois étapes irréversibles" caption="PFK-1 : point de contrôle majeur (ATP, citrate inhibent ; AMP, F2,6BP activent) ; hexokinase inhibée par le G6P ; pyruvate kinase activée par le F1,6BP et inhibée par l'ATP">
      {enzyme(10, "Hexokinase", ["glucose (glucokinase : insuline)"], ["glucose-6-phosphate (hexokinase)", "glucokinase : protéine régulatrice"], "glucose → G6P", C.blue)}
      {enzyme(138, "PFK-1", ["AMP, ADP", "fructose-2,6-bisphosphate"], ["ATP (site allostérique)", "citrate, H⁺ (acidose)"], "F6P → F1,6BP", RED)}
      {enzyme(266, "Pyruvate kinase", ["fructose-1,6-bisphosphate (feed-forward)", "insuline (déphosphorylation, foie)"], ["ATP, alanine", "glucagon (phosphorylation, foie)"], "PEP → pyruvate", C.green)}
      <rect x={20} y={394} width={700} height={66} rx={10} fill={C.amber} fillOpacity={0.09} stroke={C.amber} strokeWidth={2} />
      <Txt x={370} y={416} bold size={12} color="#a3701a">Régulation hormonale hépatique par le F2,6BP</Txt>
      <Txt x={370} y={436} size={10.5}>insuline → PFK-2 active → ↑ F2,6BP → active PFK-1 (glycolyse ↑)</Txt>
      <Txt x={370} y={452} size={10.5}>glucagon → cAMP → PKA → FBPase-2 active → ↓ F2,6BP (glycolyse ↓, néoglucogenèse ↑)</Txt>
    </Figure>
  );
}

// ─── 3. Complexe pyruvate déshydrogénase ─────────────────────────────────
export function PdhComplexDiagram() {
  const steps: [string, string, string, string][] = [
    ["E1", "Pyruvate déshydrogénase", "TPP (vit. B1)", "décarboxylation : pyruvate → hydroxyéthyl-TPP + CO₂"],
    ["E2", "Dihydrolipoyl transacétylase", "lipoamide, CoA (B5)", "oxydation et transfert : acétyl-lipoamide → acétyl-CoA"],
    ["E2", "Transfert de l'acétyle sur le CoA", "CoA-SH", "formation de l'acétyl-CoA, lipoamide réduit"],
    ["E3", "Dihydrolipoyl déshydrogénase", "FAD (vit. B2)", "réoxydation du lipoamide : FAD → FADH₂"],
    ["E3", "Régénération du FAD", "NAD⁺ (vit. B3)", "FADH₂ + NAD⁺ → FAD + NADH"],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Complexe de la pyruvate déshydrogénase (PDH)" caption="Stade de transition : pyruvate + CoA + NAD⁺ → acétyl-CoA + CO₂ + NADH, catalysé par les trois enzymes E1, E2, E3 et cinq cofacteurs ; réaction irréversible dans la matrice mitochondriale">
      {box(20, 20, 130, 50, "Pyruvate", "3C", C.amber, 13)}
      {arrow("M154,45 L206,45")}
      <Txt x={180} y={34} size={10} bold color={RED}>CO₂ ↑</Txt>
      {box(210, 20, 150, 50, "Acétyl-CoA", "2C → Krebs", C.green, 13)}
      <Txt x={450} y={40} bold size={12}>Bilan : pyruvate + NAD⁺ + CoA</Txt><Txt x={450} y={58} bold size={12}>→ acétyl-CoA + CO₂ + NADH</Txt>
      {steps.map(([e, n, cof, d], i) => (
        <Seq key={i} i={i} n={5}>
          <g transform={`translate(20 ${94 + i * 66})`}>
            <rect x={0} y={0} width={700} height={56} rx={10} fill={[C.blue, C.violet, C.violet, C.amber, C.amber][i]} fillOpacity={0.09} stroke={[C.blue, C.violet, C.violet, C.amber, C.amber][i]} strokeWidth={2} />
            <circle cx={30} cy={28} r={16} fill={[C.blue, C.violet, C.violet, C.amber, C.amber][i]} /><Txt x={30} y={33} bold size={13} color="#fff">{String(i + 1)}</Txt>
            <rect x={56} y={12} width={38} height={32} rx={8} fill="currentColor" fillOpacity={0.12} /><Txt x={75} y={33} bold size={13}>{e}</Txt>
            <Txt x={110} y={24} anchor="start" bold size={11.5}>{n}</Txt><Txt x={110} y={42} anchor="start" size={10.5} color={C.grey}>{d}</Txt>
            <rect x={540} y={14} width={150} height={28} rx={14} fill="currentColor" fillOpacity={0.1} /><Txt x={615} y={33} bold size={11}>{cof}</Txt>
          </g>
        </Seq>
      ))}
      <Txt x={370} y={434} size={10.5} color={C.grey}>carence en thiamine : ↓ activité PDH → acidose lactique, béribéri</Txt>
    </Figure>
  );
}

// ─── 4. Régulation de la PDH ─────────────────────────────────────────────
export function PdhRegulationDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Régulation de la pyruvate déshydrogénase" caption="La PDH est inactivée par phosphorylation (PDH kinase) et réactivée par déphosphorylation (PDH phosphatase) ; les produits (acétyl-CoA, NADH) et l'ATP inhibent, le pyruvate et l'ADP activent">
      <Seq i={0} n={2}>
        <g transform="translate(60 120)">
          <rect x={0} y={0} width={170} height={100} rx={14} fill={C.green} fillOpacity={0.3} stroke={C.green} strokeWidth={3} />
          <Txt x={85} y={44} bold size={15}>PDH active</Txt><Txt x={85} y={66} size={11} color="#2a7a55" bold>déphosphorylée</Txt>
        </g>
      </Seq>
      <Seq i={1} n={2}>
        <g transform="translate(510 120)">
          <rect x={0} y={0} width={170} height={100} rx={14} fill={C.grey} fillOpacity={0.3} stroke={C.grey} strokeWidth={3} />
          <Txt x={85} y={44} bold size={15}>PDH inactive</Txt><Txt x={85} y={66} size={11} color={C.grey} bold>phosphorylée (P)</Txt>
          <circle cx={172} cy={0} r={15} fill={RED} /><Txt x={172} y={4} bold size={11} color="#fff">P</Txt>
        </g>
      </Seq>
      {arrow("M240,150 C320,110 420,110 500,150")}
      <Txt x={370} y={104} bold size={12} color={RED}>PDH kinase (ATP → ADP)</Txt>
      {arrow("M500,190 C420,230 320,230 240,190")}
      <Txt x={370} y={252} bold size={12} color={C.blue}>PDH phosphatase (Pi)</Txt>
      <Dot path="M240,150 C320,110 420,110 500,150" dur={3.5} r={8} color={C.amber} label="ATP" />
      <rect x={20} y={278} width={340} height={112} rx={10} fill={RED} fillOpacity={0.07} stroke={RED} strokeWidth={2} />
      <Txt x={190} y={300} bold size={12} color={RED}>Active la kinase → PDH inhibée</Txt>
      {["ATP, NADH, acétyl-CoA (produits)", "cellule bien alimentée en énergie", "acides gras : ↑ acétyl-CoA, ↑ NADH"].map((t, i) => <Txt key={t} x={190} y={322 + i * 20} size={10.5}>{t}</Txt>)}
      <rect x={380} y={278} width={340} height={112} rx={10} fill={OK} fillOpacity={0.07} stroke={OK} strokeWidth={2} />
      <Txt x={550} y={300} bold size={12} color="#2a7a55">Active la PDH (kinase inhibée / phosphatase activée)</Txt>
      {["pyruvate, ADP, NAD⁺, CoA (substrats)", "insuline et Ca²⁺ (phosphatase)", "besoin en énergie : glycolyse → Krebs"].map((t, i) => <Txt key={t} x={550} y={322 + i * 20} size={10.5}>{t}</Txt>)}
      <Txt x={370} y={26} bold size={13}>Modification covalente : phosphorylation réversible</Txt>
      <Txt x={370} y={46} size={10.5} color={C.grey}>régulation croisée : le jeûne inactive la PDH pour épargner le glucose</Txt>
    </Figure>
  );
}

// ─── 5. Cycle de Krebs ───────────────────────────────────────────────────
export function KrebsDetailedDiagram() {
  const cx = 320, cy = 250, R = 165;
  const nodes: [string, string, string][] = [
    ["Citrate", "citrate synthase", ""],
    ["Isocitrate", "aconitase", ""],
    ["α-Cétoglutarate", "isocitrate DH", "NADH + CO₂"],
    ["Succinyl-CoA", "α-cétoglutarate DH", "NADH + CO₂"],
    ["Succinate", "succinyl-CoA synthétase", "GTP"],
    ["Fumarate", "succinate DH", "FADH₂"],
    ["Malate", "fumarase", ""],
    ["Oxaloacétate", "malate DH", "NADH"],
  ];
  const pos = (i: number) => {
    const a = (-90 + i * 45) * (Math.PI / 180);
    return [cx + R * Math.cos(a), cy + R * Math.sin(a)] as [number, number];
  };
  return (
    <Figure viewBox="0 0 740 520" title="Cycle de Krebs (cycle de l'acide citrique)" caption="Acétyl-CoA (2C) + oxaloacétate (4C) → citrate (6C) ; par tour : 3 NADH, 1 FADH₂, 1 GTP et 2 CO₂ ; étapes régulatrices : citrate synthase, isocitrate DH, α-cétoglutarate DH">
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={3} />
      <Dot path={`M${cx},${cy - R} A${R},${R} 0 0 1 ${cx},${cy + R} A${R},${R} 0 0 1 ${cx},${cy - R}`} dur={9} r={8} color={RED} />
      {nodes.map(([t, e, out], i) => {
        const [x, y] = pos(i);
        const irrev = i === 0 || i === 2 || i === 3;
        return (
          <g key={t}>
            <rect x={x - 62} y={y - 15} width={124} height={30} rx={15} fill={irrev ? RED : C.blue} fillOpacity={0.15} stroke={irrev ? RED : C.blue} strokeWidth={2} />
            <Txt x={x} y={y + 4} bold size={11}>{t}</Txt>
            {(() => {
              const a = (-90 + i * 45 - 22.5) * (Math.PI / 180);
              const ex = cx + (R + 20) * Math.cos(a), ey = cy + (R + 20) * Math.sin(a);
              return <Txt x={ex + (Math.cos(a) > 0 ? 8 : -8)} y={ey} anchor={Math.cos(a) > 0 ? "start" : "end"} size={9.5} bold color={irrev ? RED : C.grey}>{e}</Txt>;
            })()}
            {out && (() => {
              const a = (-90 + i * 45 - 22.5) * (Math.PI / 180);
              const ex = cx + (R - 32) * Math.cos(a), ey = cy + (R - 32) * Math.sin(a);
              return <Txt x={ex} y={ey + 12} size={9.5} bold color={out.includes("FADH") ? C.violet : out.includes("GTP") ? OK : "#a3701a"}>{out}</Txt>;
            })()}
          </g>
        );
      })}
      <Txt x={cx} y={cy - 6} bold size={15}>Krebs</Txt><Txt x={cx} y={cy + 14} size={10.5} color={C.grey}>matrice mitochondriale</Txt>
      {box(20, 20, 130, 44, "Acétyl-CoA", "2C", C.green, 12)}{arrow("M154,50 L262,84")}
      {box(590, 20, 140, 44, "Oxaloacétate", "régénéré", C.blue, 12)}
      <rect x={560} y={200} width={170} height={240} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={645} y={222} bold size={12}>Bilan par tour</Txt>
      {[["3 NADH", C.amber], ["1 FADH₂", C.violet], ["1 GTP (≈ ATP)", OK], ["2 CO₂", C.grey], ["≈ 10 ATP / acétyl-CoA", C.blue]].map(([t, c], i) => <g key={String(t)}><rect x={572} y={234 + i * 38} width={146} height={28} rx={8} fill={String(c)} fillOpacity={0.15} stroke={String(c)} strokeWidth={1.8} /><Txt x={645} y={253 + i * 38} bold size={11}>{String(t)}</Txt></g>)}
      <Txt x={645} y={456} size={10} color={C.grey}>rôle amphibolique : catabolisme et anabolisme</Txt>
      <Txt x={370} y={500} size={10.5} color={C.grey}>rouge : étapes irréversibles et régulées • ATP, NADH inhibent ; ADP, Ca²⁺ activent</Txt>
    </Figure>
  );
}

// ─── 6. Chaîne respiratoire ──────────────────────────────────────────────
export function EtcDiagram() {
  const memY = 210;
  const cx = (i: number) => 70 + i * 118;
  const comp = (i: number, t: string, sub: string, c: string, h: number, top = 120) => (
    <g>
      <rect x={cx(i) - 40} y={top} width={80} height={h} rx={14} fill={c} fillOpacity={0.35} stroke={c} strokeWidth={3} />
      <Txt x={cx(i)} y={top + 28} bold size={14}>{t}</Txt><Txt x={cx(i)} y={top + 46} size={9.5}>{sub}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Chaîne de transport des électrons et phosphorylation oxydative" caption="Les électrons du NADH et du FADH₂ traversent les complexes I à IV jusqu'à l'O₂ ; les protons pompés créent un gradient qui actionne l'ATP synthase (NADH ≈ 2,5 ATP, FADH₂ ≈ 1,5 ATP)">
      <rect x={10} y={60} width={720} height={64} fill={C.red} fillOpacity={0.08} /><Txt x={22} y={82} anchor="start" size={11} bold color={RED}>Espace intermembranaire (H⁺ élevé, pH bas)</Txt>
      <rect x={10} y={286} width={720} height={100} fill={C.blue} fillOpacity={0.08} /><Txt x={22} y={376} anchor="start" size={11} bold color={C.blue}>Matrice mitochondriale</Txt>
      <rect x={10} y={124} width={720} height={162} fill={C.amber} fillOpacity={0.12} />
      <Txt x={718} y={144} anchor="end" size={10} bold color="#a3701a">membrane interne</Txt>
      {comp(0, "I", "NADH DH", C.blue, 150, 124)}{comp(1, "II", "succinate DH", C.green, 150, 124)}
      {comp(2, "III", "cyt bc₁", C.violet, 150, 124)}{comp(3, "IV", "cyt c oxydase", C.red, 150, 124)}
      <rect x={cx(4) - 46} y={110} width={92} height={190} rx={14} fill={C.pink} fillOpacity={0.3} stroke={C.pink} strokeWidth={3} />
      <Txt x={cx(4)} y={144} bold size={13}>V</Txt><Txt x={cx(4)} y={162} size={9.5}>ATP synthase</Txt>
      <circle cx={cx(4)} cy={228} r={26} fill={C.amber} fillOpacity={0.6} className="fig-pulse" /><Txt x={cx(4)} y={232} size={9.5} bold>ADP + Pi → ATP</Txt>
      {/* électrons */}
      <Dot path={`M${cx(0)},300 L${cx(0)},240 L${cx(2) - 20},150 L${cx(3)},150 L${cx(3)},290`} dur={5} r={7} color={C.amber} label="e⁻" />
      <Dot path={`M${cx(1)},300 L${cx(1)},240 L${cx(2)},150`} dur={5} delay={2.5} r={7} color={C.amber} label="e⁻" />
      <Txt x={cx(0)} y={330} bold size={11} color="#a3701a">NADH → NAD⁺</Txt>
      <Txt x={cx(1)} y={330} bold size={11} color="#6a45b0">succinate → fumarate (FADH₂)</Txt>
      <circle cx={cx(0) + 60} cy={170} r={13} fill="#fff" stroke={C.amber} strokeWidth={2} /><Txt x={cx(0) + 60} y={174} size={10} bold>Q</Txt>
      <circle cx={cx(2) + 60} cy={100} r={13} fill="#fff" stroke={C.amber} strokeWidth={2} /><Txt x={cx(2) + 60} y={104} size={9} bold>cyt c</Txt>
      <Txt x={cx(3)} y={352} bold size={11} color={RED}>½ O₂ + 2 H⁺ → H₂O</Txt>
      {/* protons */}
      {[[0, 4], [2, 4], [3, 2]].map(([i, n]) => <g key={i}>{Array.from({ length: n }).map((_, k) => <Dot key={k} path={`M${cx(i) - 20 + k * 12},280 L${cx(i) - 20 + k * 12},80`} dur={3} delay={k * 0.5} r={5} color={RED} label="H" />)}<Txt x={cx(i)} y={68} size={10.5} bold color={RED}>{`${n} H⁺`}</Txt></g>)}
      {[0, 1, 2].map((k) => <Dot key={k} path={`M${cx(4) - 20 + k * 20},80 L${cx(4) - 20 + k * 20},290`} dur={3} delay={k * 0.7} r={5} color={RED} label="H" />)}
      <rect x={20} y={398} width={700} height={62} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      {[["Roténone", "bloque I", C.blue], ["Antimycine A", "bloque III", C.violet], ["Cyanure, CO", "bloquent IV", RED], ["Oligomycine", "bloque V", C.pink], ["Découplants (DNP)", "dissipent le gradient", C.amber]].map(([t, s, c], i) => (
        <g key={String(t)}><Txt x={80 + i * 140} y={420} bold size={10.5} color={String(c)}>{String(t)}</Txt><Txt x={80 + i * 140} y={438} size={10} color={C.grey}>{String(s)}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── 7. ATP synthase ─────────────────────────────────────────────────────
export function AtpSynthaseDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="ATP synthase : rotor F₀ et catalyse F₁" caption="Le flux de protons fait tourner le rotor F₀ et l'axe γ ; chaque sous-unité β de F₁ passe successivement par trois conformations et synthétise l'ATP">
      <rect x={20} y={40} width={330} height={40} fill={C.red} fillOpacity={0.1} /><Txt x={186} y={64} bold size={11} color={RED}>espace intermembranaire : H⁺ élevé</Txt>
      <rect x={20} y={80} width={330} height={40} fill={C.amber} fillOpacity={0.3} /><Txt x={330} y={104} anchor="end" size={10} bold color="#a3701a">membrane</Txt>
      <rect x={20} y={120} width={330} height={150} fill={C.blue} fillOpacity={0.1} /><Txt x={186} y={256} bold size={11} color={C.blue}>matrice</Txt>
      <g style={{ transformOrigin: "186px 100px", animation: "fig-spin 4s linear infinite" }}>
        <circle cx={186} cy={100} r={36} fill={C.pink} fillOpacity={0.5} stroke={C.pink} strokeWidth={3} />
        {[0, 60, 120, 180, 240, 300].map((a) => <circle key={a} cx={186 + Math.cos((a * Math.PI) / 180) * 26} cy={100 + Math.sin((a * Math.PI) / 180) * 26} r={6} fill={C.pink} />)}
        <line x1={186} y1={100} x2={186} y2={70} stroke="#fff" strokeWidth={4} />
      </g>
      <Txt x={186} y={158} size={10.5} bold color={DEEP.pink}>F₀ : anneau c (rotor)</Txt>
      <g style={{ transformOrigin: "186px 180px", animation: "fig-spin 4s linear infinite" }}>
        <path d="M186,180 L186,128" stroke={C.violet} strokeWidth={9} strokeLinecap="round" />
        <path d="M186,180 L140,206" stroke={C.violet} strokeWidth={0} />
      </g>
      <Txt x={186} y={204} size={10} bold color="#6a45b0">axe γ</Txt>
      {[[186, 226], [140, 200], [232, 200]].map(([x, y], i) => <g key={i}><circle cx={Number(x)} cy={Number(y)} r={28} fill={[C.green, C.amber, C.red][i]} fillOpacity={0.45} stroke={[C.green, C.amber, C.red][i]} strokeWidth={2.5} /><Txt x={Number(x)} y={Number(y) + 4} bold size={12}>β</Txt></g>)}
      {[0, 1, 2].map((k) => <Dot key={k} path={`M${150 + k * 36},44 L${150 + k * 36},112`} dur={2.4} delay={k * 0.7} r={6} color={RED} label="H" />)}
      <Txt x={186} y={292} bold size={11.5}>F₁ : 3 sous-unités β catalytiques</Txt>
      <line x1={370} y1={30} x2={370} y2={400} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={550} y={30} bold size={12.5}>Les 3 conformations de β</Txt>
      {[["Ouverte (O)", "libère l'ATP", C.green], ["Lâche (L)", "fixe ADP + Pi", C.amber], ["Serrée (T)", "forme l'ATP (Pi + ADP → ATP)", C.red]].map(([t, s, c], i) => (
        <Seq key={String(t)} i={i} n={3}>
          <g transform={`translate(390 ${50 + i * 74})`}>
            <rect x={0} y={0} width={330} height={62} rx={10} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={2} />
            <circle cx={36} cy={31} r={22} fill={String(c)} fillOpacity={0.55} /><Txt x={36} y={36} bold size={14}>β</Txt>
            <Txt x={200} y={26} bold size={12} color={String(c)}>{String(t)}</Txt><Txt x={200} y={46} size={10.5}>{String(s)}</Txt>
          </g>
        </Seq>
      ))}
      <Txt x={550} y={290} bold size={11.5}>Chaque rotation de 120° :</Txt><Txt x={550} y={308} size={11}>changement de conformation des 3 β</Txt>
      <Txt x={550} y={326} size={11}>≈ 3 ATP par tour complet (360°)</Txt>
      <Txt x={550} y={350} size={10} color={C.grey}>mécanisme de catalyse rotationnelle (Boyer)</Txt>
      <Txt x={550} y={366} size={10} color={C.grey}>force proton-motrice = gradient de pH + potentiel membranaire</Txt>
    </Figure>
  );
}

// ─── 8. Glycogénogenèse ──────────────────────────────────────────────────
export function GlycogenesisDiagram() {
  const step = (x: number, y: number, t: string, e: string, c: string) => (
    <g>{box(x, y, 150, 44, t, e, c, 11.5)}</g>
  );
  return (
    <Figure viewBox="0 0 740 400" title="Glycogénogenèse : synthèse du glycogène" caption="Glucose → G6P → G1P → UDP-glucose ; la glycogène synthase allonge la chaîne (α1→4) sur un amorce de glycogénine ; l'enzyme branchante crée les ramifications α1→6">
      {step(20, 30, "Glucose", "", C.blue)}{arrow("M174,52 L214,52")}<Txt x={194} y={24} size={9.5} bold color={RED}>hexo-/gluco-kinase • ATP</Txt>
      {step(220, 30, "Glucose-6-P", "", C.blue)}{arrow("M374,52 L414,52")}<Txt x={394} y={24} size={9.5} bold color={C.grey}>phosphoglucomutase</Txt>
      {step(420, 30, "Glucose-1-P", "", C.blue)}{arrow("M574,52 L610,52")}<Txt x={592} y={24} size={9.5} bold color={C.grey}>UTP → PPi</Txt>
      {box(614, 30, 116, 44, "UDP-glucose", "forme activée", C.violet, 11.5)}
      <Txt x={370} y={106} size={10.5} color={C.grey}>UDP-glucose pyrophosphorylase : PPi hydrolysé → réaction irréversible</Txt>
      <rect x={20} y={124} width={700} height={186} rx={10} fill={C.amber} fillOpacity={0.07} stroke={C.amber} strokeWidth={2} />
      <Txt x={370} y={146} bold size={12}>Élongation et ramification</Txt>
      <circle cx={80} cy={210} r={16} fill={C.violet} /><Txt x={80} y={214} bold size={9} color="#fff">Gn</Txt>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <g key={i}><line x1={96 + i * 32} y1={210} x2={112 + i * 32} y2={210} stroke="currentColor" strokeWidth={3} /><circle cx={128 + i * 32} cy={210} r={11} fill={C.amber} stroke="#fff" /></g>)}
      <Txt x={200} y={186} size={10.5} bold color="#a3701a">glycogène synthase : α(1→4) — enzyme limitante</Txt>
      <Dot path="M614,74 L560,160 L360,196 L330,208" dur={4} r={7} color={C.violet} label="UDP" />
      <line x1={288} y1={210} x2={318} y2={262} stroke={RED} strokeWidth={3} /><g>{[0, 1, 2, 3].map((i) => <circle key={i} cx={330 + i * 26} cy={266 + i * 0} r={10} fill={C.amber} stroke="#fff" />)}</g>
      <Txt x={510} y={276} anchor="start" size={10.5} bold color={RED}>enzyme branchante : α(1→6)</Txt>
      <Txt x={510} y={294} anchor="start" size={10} color={C.grey}>ramification tous les 8-12 résidus</Txt>
      <Txt x={80} y={250} size={10} bold color="#6a45b0">glycogénine (amorce)</Txt>
      <rect x={20} y={324} width={700} height={62} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={346} bold size={11.5}>Régulation : insuline → glycogène synthase active (déphosphorylée) ; glucagon / adrénaline → inactive (phosphorylée)</Txt>
      <Txt x={370} y={366} size={10.5} color={C.grey}>allostérique : G6P active la glycogène synthase b • foie et muscle : stockage postprandial</Txt>
      <Txt x={370} y={382} size={10} color={C.grey}>déficits enzymatiques : glycogénoses</Txt>
    </Figure>
  );
}

// ─── 9. Glycogénolyse ────────────────────────────────────────────────────
export function GlycogenolysisDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Glycogénolyse : mobilisation du glycogène" caption="La glycogène phosphorylase libère le glucose-1-phosphate (≈ 90 %) ; l'enzyme débranchante libère du glucose libre (≈ 10 %) ; le foie a la glucose-6-phosphatase, pas le muscle">
      <path d="M40,150 L300,150" stroke="currentColor" strokeWidth={3} />
      {Array.from({ length: 9 }).map((_, i) => <circle key={i} cx={50 + i * 30} cy={150} r={11} fill={C.amber} stroke="#fff" />)}
      <line x1={140} y1={150} x2={160} y2={100} stroke={RED} strokeWidth={3} />{[0, 1, 2, 3].map((i) => <circle key={i} cx={170 + i * 24} cy={96} r={10} fill={C.amber} stroke="#fff" />)}
      <Txt x={170} y={72} size={10} bold color={RED}>branche α(1→6)</Txt>
      <Dot path="M300,150 L340,150 L420,150" dur={3} r={9} color={C.blue} label="G1P" />
      <Txt x={170} y={186} bold size={11.5}>Glycogène</Txt>
      {arrow("M310,150 L400,150")}<Txt x={355} y={134} size={10} bold color={C.blue}>glycogène phosphorylase</Txt><Txt x={355} y={172} size={9.5} color={C.grey}>phosphorolyse (Pi) — PLP</Txt>
      {box(410, 128, 130, 44, "Glucose-1-P", "≈ 90 %", C.blue, 12)}
      {arrow("M545,150 L590,150")}<Txt x={568} y={138} size={9.5} bold color={C.grey}>mutase</Txt>
      {box(596, 128, 130, 44, "Glucose-6-P", undefined, C.violet, 12)}
      <path d="M660,176 L660,220" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" />
      <rect x={410} y={222} width={316} height={82} rx={10} fill={C.green} fillOpacity={0.08} stroke={C.green} strokeWidth={2} />
      <Txt x={568} y={244} bold size={12} color="#2a7a55">Foie : glucose-6-phosphatase</Txt>
      <Txt x={568} y={262} size={10.5}>G6P → glucose libre → sang (glycémie)</Txt>
      <Txt x={568} y={282} bold size={11} color={RED}>Muscle : pas de G6Pase</Txt><Txt x={568} y={298} size={10.5}>G6P → glycolyse pour la contraction</Txt>
      <rect x={20} y={222} width={370} height={82} rx={10} fill={C.red} fillOpacity={0.07} stroke={C.red} strokeWidth={2} />
      <Txt x={205} y={244} bold size={12} color={RED}>Enzyme débranchante</Txt>
      <Txt x={205} y={262} size={10.5}>transférase (déplace 3 résidus) + α(1→6) glucosidase</Txt>
      <Txt x={205} y={282} size={10.5}>→ glucose libre (≈ 10 %) au niveau de la branche</Txt>
      <rect x={20} y={322} width={700} height={84} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={344} bold size={11.5}>Hormones : glucagon (foie) et adrénaline (foie, muscle) → phosphorylase active</Txt>
      <Txt x={370} y={364} size={10.5}>muscle : AMP et Ca²⁺ activent la phosphorylase (contraction)</Txt>
      <Txt x={370} y={384} size={10} color={C.grey}>maladie de Cori, maladie de McArdle (déficit en phosphorylase musculaire : crampes à l'effort)</Txt>
    </Figure>
  );
}

// ─── 10. Régulation hormonale du glycogène ───────────────────────────────
export function GlycogenRegulationDiagram() {
  const b = (x: number, y: number, w: number, t: string, s: string | undefined, c: string) => box(x, y, w, 40, t, s, c, 11);
  return (
    <Figure viewBox="0 0 740 470" title="Cascade hormonale de régulation du métabolisme du glycogène" caption="Glucagon / adrénaline : récepteur → Gs → adénylate cyclase → AMPc → PKA → phosphorylase kinase → glycogène phosphorylase active et glycogène synthase inactive ; l'insuline agit en sens inverse">
      {b(20, 20, 130, "Glucagon / adrénaline", undefined, C.red)}{arrow("M154,40 L184,40")}
      {b(188, 20, 100, "Récepteur", "RCPG → Gs", C.violet)}{arrow("M292,40 L322,40")}
      {b(326, 20, 112, "Adénylate cyclase", "ATP → AMPc", C.amber)}{arrow("M442,40 L472,40")}
      {b(476, 20, 60, "PKA", undefined, C.green)}
      {arrow("M506,64 L506,96", true)}
      {b(410, 100, 190, "Phosphorylase kinase (P)", "active — intégrateur (Ca²⁺)", C.blue)}
      {arrow("M440,144 L340,186", true)}{arrow("M580,144 L640,186", true)}
      {b(220, 190, 230, "Glycogène phosphorylase b → a (P)", "ACTIVE : glycogénolyse ↑", C.green)}
      {b(520, 190, 200, "Glycogène synthase (P)", "INACTIVE : synthèse ↓", C.grey)}
      <rect x={20} y={266} width={700} height={80} rx={10} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={2} />
      <Txt x={370} y={288} bold size={12} color={C.blue}>Insuline (état nourri)</Txt>
      <Txt x={370} y={308} size={10.5}>récepteur tyrosine kinase → protéine phosphatase 1 (PP1) → déphosphorylation</Txt>
      <Txt x={370} y={326} size={10.5} bold>phosphorylase inactive • glycogène synthase ACTIVE → stockage du glycogène</Txt>
      <rect x={20} y={358} width={700} height={100} rx={10} fill={C.amber} fillOpacity={0.07} stroke={C.amber} strokeWidth={2} />
      <Txt x={370} y={380} bold size={12} color="#a3701a">Régulation allostérique selon le tissu</Txt>
      <Txt x={200} y={402} bold size={11}>Foie</Txt><Txt x={200} y={420} size={10.5}>glucose inhibe la phosphorylase a</Txt><Txt x={200} y={436} size={10.5}>(glycémie élevée → arrêt de la libération)</Txt>
      <Txt x={540} y={402} bold size={11}>Muscle</Txt><Txt x={540} y={420} size={10.5}>AMP et Ca²⁺ activent • ATP, G6P inhibent</Txt><Txt x={540} y={436} size={10.5}>(besoin énergétique local)</Txt>
      <Dot path="M154,40 L188,40 L292,40 L326,40 L442,40 L476,40 L506,64 L506,100" dur={5} r={7} color={C.red} />
    </Figure>
  );
}
