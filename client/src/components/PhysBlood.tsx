import { Figure, C, Txt, Dot } from "./Figure";

// Physiologie du sang : globules rouges, volémie, hématopoïèse, leucocytes, hémostase.

const RED = "#d9414f";
const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;
const arrow = (d: string, flow = false) => (
  <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={flow ? "fig-flow" : undefined} markerEnd="url(#fig-arrow)" />
);
const box = (x: number, y: number, w: number, h: number, t: string, sub: string | undefined, c: string, size = 11.5) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={8} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={1.8} />
    <Txt x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} bold size={size}>{t}</Txt>
    {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 2} color={C.grey}>{sub}</Txt>}
  </g>
);

// Globule rouge vu de dessus (disque biconcave).
function Rbc({ x, y, r = 16, pallor = 0.45, ry, color = RED }: { x: number; y: number; r?: number; pallor?: number; ry?: number; color?: string }) {
  return (
    <g>
      <ellipse cx={x} cy={y} rx={r} ry={ry ?? r} fill={color} fillOpacity={0.85} stroke="#8f2530" strokeWidth={1.2} />
      <ellipse cx={x} cy={y} rx={r * pallor} ry={(ry ?? r) * pallor} fill="#fff" fillOpacity={0.55} />
    </g>
  );
}

// ─── 1. Globule rouge ────────────────────────────────────────────────────
export function RedBloodCellDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Le globule rouge (érythrocyte) et ses caractéristiques" caption="Érythrocyte adulte : disque biconcave anucléé de 6,8 à 7,7 µm, riche en hémoglobine, durée de vie de 100 à 120 jours">
      {/* vue de dessus */}
      <Txt x={130} y={26} bold size={13}>Vue de dessus</Txt>
      <ellipse cx={130} cy={130} rx={92} ry={92} fill={RED} fillOpacity={0.85} stroke="#8f2530" strokeWidth={3} />
      <ellipse cx={130} cy={130} rx={40} ry={40} fill="#fff" fillOpacity={0.5} />
      <line x1={38} y1={240} x2={222} y2={240} stroke="currentColor" strokeWidth={1.5} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
      <Txt x={130} y={258} bold size={12}>diamètre 6,8 – 7,7 µm</Txt>
      {/* coupe */}
      <Txt x={130} y={290} bold size={13}>Coupe</Txt>
      <path d="M40,346 C40,310 78,318 98,336 C112,346 148,346 162,336 C182,318 220,310 220,346 C220,382 182,374 162,356 C148,346 112,346 98,356 C78,374 40,382 40,346z" fill={RED} fillOpacity={0.85} stroke="#8f2530" strokeWidth={3} />
      <Txt x={130} y={404} size={10.5} color={C.grey}>disque biconcave : grande surface pour un petit volume</Txt>

      {/* caractéristiques */}
      <g fontSize={12}>
        {[
          ["Cellule anucléée", "sans organites ni synthèse protéique", C.violet],
          ["Riche en hémoglobine", "donne la couleur : normochrome", RED],
          ["Membrane déformable", "cytosquelette (spectrine) : traverse les capillaires", C.blue],
          ["Métabolisme anaérobie", "glycolyse : pas de mitochondries", C.amber],
          ["Durée de vie 100 – 120 jours", "détruit dans la rate (macrophages)", C.green],
        ].map(([t, s, c], i) => (
          <g key={String(t)}>
            <circle cx={286} cy={54 + i * 56} r={15} fill={String(c)} fillOpacity={0.25} stroke={String(c)} strokeWidth={2} />
            <Txt x={286} y={59 + i * 56} bold size={13} color={String(c)}>{String(i + 1)}</Txt>
            <Txt x={312} y={52 + i * 56} anchor="start" bold size={12}>{String(t)}</Txt>
            <Txt x={312} y={68 + i * 56} anchor="start" size={10.5} color={C.grey}>{String(s)}</Txt>
          </g>
        ))}
      </g>
      {/* constantes */}
      <rect x={300} y={336} width={430} height={74} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={515} y={354} bold size={11}>Valeurs normales de l'hémogramme</Txt>
      <Txt x={400} y={372} size={10.5}>GR ≈ 4,5 M/mm³</Txt><Txt x={515} y={372} size={10.5}>Hb H 15 ± 2 • F 14 ± 2 g%</Txt><Txt x={650} y={372} size={10.5}>Hct H 45 % • F 42 %</Txt>
      <Txt x={400} y={392} size={10.5}>VGM 80-100 µm³</Txt><Txt x={515} y={392} size={10.5}>CCMH 32-36 g%</Txt><Txt x={650} y={392} size={10.5}>TCMH 27-31 pg</Txt>
    </Figure>
  );
}

// ─── 2. L'anémie ─────────────────────────────────────────────────────────
export function AnemiaDiagram() {
  const fields = [
    { x: 6, t: "Sang normal", s: "normocytaire, normochrome", hct: 45, c: C.green, cells: [[30, 34], [76, 28], [116, 44], [50, 78], [96, 84], [138, 76], [28, 118], [74, 126], [118, 118], [144, 110]], r: 16, pallor: 0.4, ry: 16, vgm: "VGM 80-100", note: "Hct H 45 % — F 42 %" },
    { x: 186, t: "Anémie ferriprive", s: "microcytaire, hypochrome", hct: 28, c: C.amber, cells: [[34, 30], [70, 40], [106, 26], [140, 44], [48, 74], [88, 82], [126, 76], [30, 116], [70, 120], [108, 112], [144, 124]], r: 10, pallor: 0.7, ry: 10, vgm: "VGM ↓ (< 80), TCMH ↓", note: "carence en fer — réticulocytes N" },
    { x: 366, t: "Anémie mégaloblastique", s: "macrocytaire, normochrome", hct: 28, c: C.violet, cells: [[40, 40], [104, 36], [68, 92], [130, 96], [34, 124], [98, 128]], r: 22, pallor: 0.35, ry: 20, vgm: "VGM ↑ (> 100)", note: "carence B12 / folates — réticulocytes ↓" },
    { x: 546, t: "Anémie aplasique", s: "normocytaire, normochrome", hct: 18, c: C.red, cells: [[38, 44], [112, 90], [60, 124]], r: 16, pallor: 0.4, ry: 16, vgm: "VGM N, GR ↓↓", note: "insuffisance médullaire — réticulocytes ↓" },
  ];
  return (
    <Figure viewBox="0 0 740 484" title="L'anémie : comparaison des types d'anémie avec le sang normal" caption="Anémie = baisse de l'hémoglobine, des globules rouges et de l'hématocrite ; le VGM et le TCMH orientent vers la cause">
      {fields.map((f) => (
        <g key={f.t} transform={`translate(${f.x} 0)`}>
          <rect x={0} y={6} width={176} height={454} rx={10} fill={f.c} fillOpacity={0.05} stroke={f.c} strokeOpacity={0.5} />
          <Txt x={88} y={28} bold size={12} color={f.c}>{f.t}</Txt>
          <Txt x={88} y={43} size={10} color={C.grey}>{f.s}</Txt>
          {/* frottis */}
          <circle cx={88} cy={135} r={82} fill="#fbeff0" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} />
          <g transform="translate(14 60)">
            {f.cells.map(([x, y], i) => <Rbc key={i} x={x} y={y} r={f.r} ry={f.ry} pallor={f.pallor} />)}
          </g>
          {/* tube hématocrite */}
          <rect x={64} y={236} width={48} height={140} rx={10} fill="#fff" fillOpacity={0.6} stroke="currentColor" strokeWidth={2} />
          <rect x={65} y={376 - (f.hct / 60) * 138 - 1} width={46} height={(f.hct / 60) * 138} rx={8} fill={RED} fillOpacity={0.85} />
          <rect x={65} y={238} width={46} height={376 - (f.hct / 60) * 138 - 239} rx={8} fill={C.amber} fillOpacity={0.2} />
          <Txt x={144} y={330} size={10.5} bold color={RED}>{`Hct ${f.hct} %`}</Txt>
          <Txt x={30} y={268} size={9.5} color={C.grey}>plasma</Txt>
          <Txt x={88} y={396} bold size={11}>{f.vgm}</Txt>
          <Txt x={88} y={414} size={10} color={C.grey}>{f.note.split("—")[0].trim()}</Txt>
          <Txt x={88} y={430} size={10} color={C.grey}>{f.note.split("—")[1]?.trim() ?? ""}</Txt>
        </g>
      ))}
      <Txt x={370} y={478} size={10} color={C.grey}>Anémie : ↓ Hb, ↓ GR, ↓ Hct — polyglobulie : ↑ Hb, ↑ GR, ↑ Hct</Txt>
    </Figure>
  );
}

// ─── 3. Cinétique érythrocytaire ─────────────────────────────────────────
export function RbcLifecycleDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Cinétique érythrocytaire : production, vie et destruction du globule rouge" caption="Érythropoïèse médullaire (5-7 j, EPO), circulation (100-120 j), hémolyse extravasculaire dans les macrophages de la rate et catabolisme de l'hémoglobine">
      {box(20, 20, 170, 66, "Moelle osseuse", "érythropoïèse 5-7 jours", C.amber, 12)}
      {box(20, 130, 170, 50, "Rein : EPO", "stimulée par l'hypoxie", C.blue, 12)}
      {arrow("M105,130 L105,90", true)}
      {box(260, 20, 200, 66, "Sang circulant", "100 – 120 jours", RED, 12)}
      {arrow("M192,52 L258,52", true)}
      <Rbc x={300} y={140} r={18} /><Rbc x={340} y={150} r={18} /><Rbc x={380} y={140} r={18} /><Rbc x={420} y={150} r={16} />
      <Dot path="M260,240 L460,240" dur={5} r={8} color={RED} />
      <Txt x={360} y={182} size={10} color={C.grey}>réticulocytes 0,5-1,5 % → érythrocytes</Txt>
      {arrow("M460,52 L540,52 L540,110", true)}
      {box(470, 116, 230, 66, "Rate (« cimetière »)", "macrophages : hémolyse extravasculaire", C.violet, 12)}
      {arrow("M585,184 L585,220", true)}
      {box(470, 224, 230, 44, "Hémoglobine dégradée", undefined, C.grey, 12)}
      {arrow("M520,270 L420,310", true)}{arrow("M585,270 L585,310", true)}{arrow("M650,270 L700,310", true)}
      {box(310, 314, 130, 60, "Globine", "→ acides aminés réutilisés", C.green, 11.5)}
      {box(520, 314, 130, 60, "Fer", "transferrine, ferritine", C.amber, 11.5)}
      {box(620, 314, 110, 60, "Bilirubine", "→ bile, urobilinogène", C.red, 11)}
      <Txt x={110} y={230} size={10.5} bold color={C.amber}>Hémolyse pathologique :</Txt>
      <Txt x={110} y={246} size={10} color={C.grey}>durée de vie ↓ → hépato-splénomégalie,</Txt>
      <Txt x={110} y={260} size={10} color={C.grey}>hémoglobinurie, ictère</Txt>
      <Txt x={170} y={350} size={10.5} color={C.grey}>Le fer est recyclé vers la moelle pour l'érythropoïèse</Txt>
      {arrow("M520,344 L200,344", true)}
      <Txt x={110} y={300} size={9.5} color={C.amber}>{""}</Txt>
    </Figure>
  );
}

// ─── 4. Transport du CO₂ dans le globule rouge ───────────────────────────
export function Co2TransportDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Transport du CO₂ et rôle du globule rouge" caption="Au niveau tissulaire : 90 % du CO₂ est transporté sous forme de HCO₃⁻ (anhydrase carbonique), 5 % lié à l'Hb (carbhémoglobine), 5 % dissous">
      <circle cx={340} cy={200} r={150} fill={RED} fillOpacity={0.18} stroke="#8f2530" strokeWidth={6} />
      <Txt x={340} y={72} bold size={12} color="#8f2530">Globule rouge</Txt>
      <Txt x={80} y={60} bold size={12}>Tissu (PCO₂ = 46 mmHg)</Txt>
      <Txt x={620} y={60} bold size={12}>Plasma</Txt>
      {[0, 1, 2].map((d) => <Dot key={d} path={`M40,${170 + d * 20} L260,${190 + d * 10}`} dur={3} delay={d * 0.9} r={9} color={C.grey} label="CO₂" />)}
      {/* réactions */}
      {box(230, 150, 90, 34, "CO₂ + H₂O", undefined, C.violet, 11)}
      {arrow("M275,186 L275,212")}
      <Txt x={340} y={204} anchor="start" size={10} bold color={C.violet}>anhydrase carbonique</Txt>
      {box(230, 216, 90, 34, "H₂CO₃", undefined, C.violet, 11)}
      {arrow("M262,252 L256,264")}{arrow("M292,252 L330,264")}
      {box(226, 266, 60, 30, "H⁺", undefined, C.red, 11)}
      {box(300, 266, 70, 30, "HCO₃⁻", undefined, C.blue, 11)}
      {/* Hb */}
      {box(400, 210, 100, 56, "Hémoglobine", "tampon du H⁺", C.amber, 11)}
      {arrow("M286,272 L402,256")}
      {box(400, 146, 100, 44, "CarbHb", "CO₂ + Hb (5 %)", C.green, 11)}
      {/* échangeur */}
      <rect x={478} y={300} width={26} height={44} rx={8} fill={C.blue} />
      <Txt x={491} y={366} size={10} bold color={C.blue}>échangeur HCO₃⁻/Cl⁻</Txt>
      <Dot path="M372,290 L491,320 L600,320" dur={3.4} r={8} color={C.blue} label="HCO₃" />
      <Dot path="M600,336 L491,336 L420,336" dur={3.4} delay={1.6} r={7} color={C.green} label="Cl" />
      <Txt x={640} y={324} size={10.5} color={C.blue} bold>HCO₃⁻ ↗ plasma</Txt>
      <Txt x={640} y={340} size={10.5} color="#2a7a55" bold>Cl⁻ ↙ globule</Txt>
      <Txt x={340} y={392} size={10.5} color={C.grey}>Au niveau pulmonaire (PCO₂ = 40 mmHg) : réaction inverse, le CO₂ est libéré et expiré</Txt>
    </Figure>
  );
}

// ─── 5. Volémie ──────────────────────────────────────────────────────────
export function BloodVolumeDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Volémie : volume plasmatique, volume globulaire et réservoirs sanguins" caption="VST = VP + VG = 3000 + 2000 = 5000 mL ; hématocrite = VG × 100 / VST ; réservoirs : hépatique, splénique, plexus sous-papillaire, volume central">
      <Txt x={130} y={22} bold size={13}>Volume sanguin total : 5000 mL</Txt>
      <rect x={70} y={36} width={120} height={300} rx={14} fill="#fff" fillOpacity={0.5} stroke="currentColor" strokeWidth={2.5} />
      <rect x={72} y={38} width={116} height={162} rx={12} fill={C.amber} fillOpacity={0.35} />
      <rect x={72} y={202} width={116} height={132} rx={12} fill={RED} fillOpacity={0.6} />
      {[[98, 318], [130, 324], [162, 316], [110, 226], [156, 228]].map(([x, y], i) => <Rbc key={i} x={x} y={y} r={11} />)}
      <Txt x={130} y={118} bold size={12}>Plasma</Txt><Txt x={130} y={134} size={10.5}>VP ≈ 3000 mL (55 %)</Txt>
      <Txt x={130} y={264} bold size={12} color="#fff">Volume globulaire</Txt><Txt x={130} y={282} size={10.5} color="#fff">VG ≈ 2000 mL (45 %)</Txt>
      <line x1={196} y1={202} x2={230} y2={202} {...leader} />
      <Txt x={236} y={196} anchor="start" size={11} bold>Hématocrite = VG × 100 / VST</Txt>
      <Txt x={236} y={212} anchor="start" size={11}>= 2000 × 100 / 5000 = 40 %</Txt>
      <Txt x={236} y={232} anchor="start" size={10} color={C.grey}>normal : H 45 ± 7 % — F 42 ± 5 %</Txt>
      <Txt x={130} y={360} size={10.5} color={C.grey}>VG : 99 % d'érythrocytes, 1 % leucocytes + plaquettes</Txt>
      <Txt x={130} y={376} size={10.5} color={C.grey}>VST ≈ 7-8 % du poids corporel</Txt>

      <Txt x={555} y={22} bold size={13}>Réservoirs sanguins</Txt>
      {[
        ["Foie", "500-600 mL", 55, C.green],
        ["Rate", "200-300 mL", 28, C.violet],
        ["Plexus dermique", "~1500 mL", 150, C.red],
        ["Volume central", "600-1000 mL", 80, C.blue],
      ].map(([t, v, w, c], i) => (
        <g key={String(t)}>
          <Txt x={436} y={56 + i * 46} anchor="start" bold size={11.5}>{String(t)}</Txt>
          <rect x={436} y={62 + i * 46} width={Number(w) * 1.7} height={14} rx={6} fill={String(c)} fillOpacity={0.7} />
          <Txt x={436 + Number(w) * 1.7 + 8} y={74 + i * 46} anchor="start" size={10.5} color={C.grey}>{String(v)}</Txt>
        </g>
      ))}
      <rect x={340} y={262} width={390} height={148} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={535} y={282} bold size={11.5}>Interprétation croisée VST + Hct</Txt>
      {[
        ["Normovolémie + ↓ GR", "anémie"],
        ["Normovolémie + ↑ GR", "polyglobulie"],
        ["Hypervolémie + ↓ GR", "hyperhydratation"],
        ["Hypovolémie + ↑ GR", "déshydratation"],
      ].map(([a, b], i) => (
        <g key={a}>
          <Txt x={356} y={306 + i * 24} anchor="start" size={11}>{a}</Txt>
          <Txt x={560} y={306 + i * 24} anchor="start" size={11} bold color={C.red}>{`→ ${b}`}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 6. Hématopoïèse ─────────────────────────────────────────────────────
export function HematopoiesisDiagram() {
  const b = (x: number, y: number, w: number, t: string, c: string, sub?: string) => box(x, y, w, sub ? 44 : 34, t, sub, c, 11);
  return (
    <Figure viewBox="0 0 780 470" title="Hématopoïèse : de la cellule souche aux cellules sanguines" caption="La cellule souche pluripotente de la moelle osseuse donne les lignées myéloïde et lymphoïde">
      {b(10, 200, 130, "Cellule souche", C.violet, "pluripotente (moelle)")}
      {arrow("M142,222 L190,150")}{arrow("M142,222 L190,300")}
      {b(192, 128, 130, "Progéniteur myéloïde", C.blue)}
      {b(192, 290, 130, "Progéniteur lymphoïde", C.green)}
      {[[40, "Érythroblaste", "→ réticulocyte → GR", RED, "EPO"], [88, "Mégacaryocyte", "→ plaquettes", C.amber, "TPO"], [136, "Granulocytes", "neutrophiles, éosinophiles, basophiles", C.blue, ""], [184, "Monocytes", "→ macrophages", C.violet, ""]].map(([y, t, s, c, f], i) => (
        <g key={String(t)}>
          {arrow(`M324,145 L${380},${Number(y) + 20}`)}
          {box(382, Number(y) - 2, 230, 44, String(t), String(s), String(c), 11)}
          {f && <Txt x={650} y={Number(y) + 24} anchor="start" size={11} bold color={String(c)}>{`+ ${f}`}</Txt>}
          <Rbc x={720} y={Number(y) + 20} r={i === 0 ? 14 : 9} color={String(c)} />
        </g>
      ))}
      {[[300, "Lymphocytes B", "→ plasmocytes (anticorps)", C.green], [350, "Lymphocytes T", "CD4+ auxiliaires, CD8+ cytotoxiques", C.blue], [400, "Cellules NK", "cytotoxicité sans restriction CMH", C.violet]].map(([y, t, s, c]) => (
        <g key={String(t)}>
          {arrow(`M324,312 L380,${Number(y) + 20}`)}
          {box(382, Number(y) - 2, 230, 44, String(t), String(s), String(c), 11)}
          <circle cx={720} cy={Number(y) + 20} r={11} fill={String(c)} fillOpacity={0.7} />
        </g>
      ))}
      <Txt x={130} y={72} size={11} bold color={C.violet}>Érythropoïèse : 5-7 j, EPO</Txt>
      <Txt x={130} y={88} size={10} color={C.grey}>Thrombopoïèse : thrombopoïétine</Txt>
      <Txt x={130} y={104} size={10} color={C.grey}>Leucopoïèse : facteurs de croissance</Txt>
    </Figure>
  );
}

// ─── 7. Leucocytes ───────────────────────────────────────────────────────
export function LeukocytesDiagram() {
  const cell = (x: number, t: string, pct: string, fn: string, c: string, nucleus: React.ReactNode, granules: string) => (
    <g key={t}>
      <circle cx={x} cy={100} r={54} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={2.5} />
      {granules === "many" && Array.from({ length: 16 }).map((_, i) => <circle key={i} cx={x + Math.cos(i * 2.4) * (12 + (i % 4) * 9)} cy={100 + Math.sin(i * 2.4) * (12 + (i % 4) * 9)} r={2.6} fill={c} />)}
      {nucleus}
      <Txt x={x} y={186} bold size={12} color={c}>{t}</Txt>
      <Txt x={x} y={202} bold size={11}>{pct}</Txt>
      <Txt x={x} y={220} size={10} color={C.grey}>{fn.split("|")[0]}</Txt>
      <Txt x={x} y={233} size={10} color={C.grey}>{fn.split("|")[1] ?? ""}</Txt>
    </g>
  );
  const nuc = (d: string, c: string) => <path d={d} fill={c} fillOpacity={0.75} stroke="#3b2f5e" strokeWidth={1.5} />;
  return (
    <Figure viewBox="0 0 780 300" title="Les leucocytes : morphologie, proportion et fonction" caption="Formule leucocytaire : neutrophiles 56-68 %, éosinophiles 1-3 %, basophiles 0-1 %, monocytes 4-10 % ; lymphocytes B, T et NK dans la défense spécifique">
      {cell(78, "Neutrophile", "56-68 %", "phagocytose, explosion|respiratoire", C.blue, <g fill="#4b3a8a" fillOpacity={0.75} stroke="#3b2f5e"><circle cx={62} cy={92} r={9} /><circle cx={82} cy={88} r={9} /><circle cx={94} cy={106} r={9} /><circle cx={72} cy={112} r={9} /></g>, "few")}
      {cell(216, "Éosinophile", "1-3 %", "anti-parasitaire,|allergie", C.red, nuc("M196,92 a10,10 0 1,1 0,16 z M216,88 a10,10 0 1,1 0,24 z", "#4b3a8a"), "many")}
      {cell(354, "Basophile", "0-1 %", "histamine, héparine|(IgE)", C.violet, nuc("M330,94 q24,-22 46,0 q-6,26 -24,28 q-22,-6 -22,-28z", "#4b3a8a"), "many")}
      {cell(492, "Monocyte", "4-10 %", "macrophagocytose,|présentation d'antigène", C.green, nuc("M470,88 q30,-22 46,4 q4,24 -16,30 q-8,-14 -14,-4 q-16,-2 -16,-30z", "#4b3a8a"), "few")}
      {cell(630, "Lymphocyte", "B • T • NK", "défense spécifique|(anticorps, cytotoxicité)", C.amber, <circle cx={630} cy={100} r={34} fill="#4b3a8a" fillOpacity={0.75} stroke="#3b2f5e" strokeWidth={1.5} />, "few")}
      <Txt x={390} y={272} size={10.5} color={C.grey}>Défense non spécifique (innée, rapide) : neutrophiles, macrophages, complément — spécifique : lymphocytes B (humorale), T et NK (cellulaire)</Txt>
    </Figure>
  );
}

// ─── 8. Hémostase ────────────────────────────────────────────────────────
export function HemostasisDiagram() {
  const steps = [
    { x: 6, t: "1. Hémostase primaire", s: "clou plaquettaire", c: C.amber },
    { x: 190, t: "2. Hémostase secondaire", s: "coagulation → fibrine", c: RED },
    { x: 374, t: "3. Fibrinolyse", s: "dissolution du caillot", c: C.blue },
  ];
  return (
    <Figure viewBox="0 0 740 420" title="Les temps de l'hémostase physiologique" caption="Vasoconstriction, clou plaquettaire (adhésion, activation, agrégation), coagulation (fibrine) puis fibrinolyse">
      {/* vaisseau lésé */}
      <rect x={20} y={40} width={700} height={16} fill={C.grey} fillOpacity={0.5} />
      <rect x={20} y={190} width={700} height={16} fill={C.grey} fillOpacity={0.5} />
      <rect x={340} y={40} width={80} height={16} fill="#fff" />
      <rect x={20} y={56} width={700} height={134} fill={RED} fillOpacity={0.08} />
      <Txt x={40} y={34} anchor="start" size={10.5} bold color={C.grey}>Endothélium lésé : collagène exposé</Txt>
      <Txt x={40} y={224} anchor="start" size={10.5} color={C.grey}>vaisseau</Txt>
      {/* plaquettes */}
      {[[350, 66], [380, 66], [410, 66], [366, 82], [396, 82], [380, 98]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={10} ry={6} fill={C.amber} fillOpacity={0.85} stroke="#a3701a" />)}
      {[[120, 110], [200, 140], [260, 100], [560, 130], [630, 100], [520, 90]].map(([x, y], i) => <Rbc key={i} x={x} y={y} r={13} />)}
      {[0, 1, 2].map((d) => <Dot key={d} path="M60,150 L680,150" dur={9} delay={d * 3} r={6} color={C.amber} />)}
      {/* fibrine */}
      {[[346, 60, 470, 130], [376, 60, 500, 96], [410, 60, 520, 156], [350, 92, 470, 172], [420, 90, 560, 120]].map(([a, b, c, d], i) => <line key={i} x1={a} y1={b} x2={c} y2={d} stroke={RED} strokeWidth={2} opacity={0.6} />)}
      <Txt x={380} y={116} size={10} bold color="#a3701a">clou</Txt>
      {steps.map((st) => (
        <g key={st.t} transform={`translate(${st.x} 246)`}>
          <rect x={0} y={0} width={176} height={168} rx={10} fill={st.c} fillOpacity={0.08} stroke={st.c} strokeWidth={2} />
          <Txt x={88} y={22} bold size={12} color={st.c}>{st.t}</Txt>
          <Txt x={88} y={38} size={10.5} color={C.grey}>{st.s}</Txt>
        </g>
      ))}
      <g fontSize={10.5}>
        <Txt x={94} y={296} size={10.5}>a. Vasoconstriction</Txt>
        <Txt x={94} y={314} size={10.5}>b. Adhésion (vWF, GPIb)</Txt>
        <Txt x={94} y={332} size={10.5}>c. Activation (ADP, TxA₂)</Txt>
        <Txt x={94} y={350} size={10.5}>d. Agrégation (fibrinogène)</Txt>
        <Txt x={94} y={374} size={10} color={C.grey}>clou plaquettaire instable</Txt>
        <Txt x={278} y={296} size={10.5}>Cascade des facteurs :</Txt>
        <Txt x={278} y={314} size={10.5}>voie intrinsèque et extrinsèque</Txt>
        <Txt x={278} y={332} size={10.5}>→ voie commune (Xa)</Txt>
        <Txt x={278} y={350} size={10.5}>prothrombine → thrombine</Txt>
        <Txt x={278} y={368} size={10.5}>fibrinogène → fibrine</Txt>
        <Txt x={278} y={388} size={10} color={C.grey}>caillot stable</Txt>
        <Txt x={462} y={296} size={10.5}>Plasminogène → plasmine</Txt>
        <Txt x={462} y={314} size={10.5}>(activateur tissulaire, t-PA)</Txt>
        <Txt x={462} y={332} size={10.5}>plasmine dégrade la fibrine</Txt>
        <Txt x={462} y={350} size={10.5}>→ produits de dégradation</Txt>
        <Txt x={462} y={388} size={10} color={C.grey}>rétablit la circulation</Txt>
      </g>
      {arrow("M182,330 L188,330")}{arrow("M366,330 L372,330")}
      <rect x={558} y={246} width={176} height={168} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={646} y={268} bold size={11}>Plaquettes</Txt>
      <Txt x={646} y={286} size={10}>anucléées, 150 000-350 000/mm³</Txt>
      <Txt x={646} y={304} size={10}>durée de vie ≈ 8-10 j</Txt>
      <Txt x={646} y={330} size={10} color={C.grey}>issues des mégacaryocytes</Txt>
      <Txt x={646} y={346} size={10} color={C.grey}>(thrombopoïétine)</Txt>
    </Figure>
  );
}

// ─── 9. Cascade de la coagulation ────────────────────────────────────────
export function CoagulationCascadeDiagram() {
  const f = (x: number, y: number, t: string, c: string, w = 84) => box(x, y, w, 30, t, undefined, c, 11);
  return (
    <Figure viewBox="0 0 740 470" title="Cascade de la coagulation" caption="Voies intrinsèque (contact) et extrinsèque (facteur tissulaire) convergeant vers la voie commune : Xa, thrombine, fibrine">
      <Txt x={150} y={22} bold size={13} color={C.blue}>Voie intrinsèque</Txt>
      <Txt x={590} y={22} bold size={13} color={C.red}>Voie extrinsèque</Txt>
      {f(108, 32, "XII → XIIa", C.blue)}{arrow("M150,64 L150,88")}
      {f(108, 90, "XI → XIa", C.blue)}{arrow("M150,122 L150,146")}
      {f(108, 148, "IX → IXa", C.blue)}{arrow("M150,180 L150,206")}
      {f(46, 208, "VIIIa + Ca²⁺", C.violet, 100)}{arrow("M96,240 L200,278")}
      {f(548, 32, "Facteur tissulaire", C.red, 130)}{arrow("M613,64 L613,88")}
      {f(566, 90, "VII → VIIa", C.red, 94)}{arrow("M613,122 L400,272")}
      {arrow("M150,180 L330,272")}
      <path d="M100,170 L60,170 L60,200" fill="none" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Txt x={330} y={250} bold size={13} color={C.green}>Voie commune</Txt>
      {f(300, 278, "X → Xa", C.green)}{arrow("M342,310 L342,340")}
      {f(300, 342, "Va + Ca²⁺", C.violet)}{arrow("M342,374 L342,398")}
      {f(230, 400, "Prothrombine (II) → Thrombine (IIa)", C.amber, 224)}
      {arrow("M342,432 L342,446")}
      {box(230, 448, 224, 20, "Fibrinogène (I) → Fibrine (Ia) — XIII : caillot stable", undefined, RED, 10)}
      <Txt x={640} y={200} anchor="middle" size={10.5} color={C.grey}>Ca²⁺ = facteur IV</Txt>
      <Txt x={640} y={216} anchor="middle" size={10.5} color={C.grey}>phospholipides plaquettaires</Txt>
      <Dot path="M150,60 L150,180 L340,278 L342,398 L342,446" dur={7} r={7} color={C.red} />
    </Figure>
  );
}
