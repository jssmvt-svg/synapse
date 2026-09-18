import type { ReactNode } from "react";
import { Figure, C } from "./Figure";

// Schémas originaux d'Embryologie humaine générale (Lecture 2).

function L({ x, y, children, anchor = "middle", bold = false, color, size = 12 }: {
  x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; bold?: boolean; color?: string; size?: number;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={bold ? 700 : 400} fill={color ?? "currentColor"}>
      {children}
    </text>
  );
}

// ─── 1. Frise du développement ───────────────────────────────────────────
export function DevelopmentTimeline() {
  const prenatal = [
    { x: 20, w: 130, label: "Pré-embryonnaire", sub: "Semaines 1-2", color: C.violet },
    { x: 150, w: 200, label: "Embryonnaire", sub: "Semaines 3-8", color: C.blue },
    { x: 350, w: 230, label: "Fœtale", sub: "Semaine 9 → naissance", color: C.green },
  ];
  const events = [
    { x: 30, t: "Fécondation" },
    { x: 78, t: "Segmentation" },
    { x: 126, t: "Implantation" },
    { x: 190, t: "Gastrulation" },
    { x: 270, t: "Organogenèse" },
    { x: 470, t: "Croissance" },
  ];
  const post = [
    { x: 20, w: 90, label: "Nourrisson", sub: "0-1 an" },
    { x: 110, w: 130, label: "Enfance", sub: "2-12 ans" },
    { x: 240, w: 90, label: "Puberté", sub: "13-16 ans" },
    { x: 330, w: 110, label: "Adolescence", sub: "17-18 ans" },
    { x: 440, w: 140, label: "Âge adulte", sub: "19-25 ans" },
  ];
  return (
    <Figure viewBox="0 0 600 270" title="Frise du développement prénatal et postnatal" caption="Frise chronologique : développement prénatal (3 périodes) puis postnatal (5 périodes)">
      <L x={20} y={22} anchor="start" bold size={14}>Développement prénatal</L>
      {prenatal.map((p) => (
        <g key={p.label}>
          <rect x={p.x} y={34} width={p.w} height={50} fill={p.color} fillOpacity={0.22} stroke={p.color} strokeWidth={2} />
          <L x={p.x + p.w / 2} y={57} bold>{p.label}</L>
          <L x={p.x + p.w / 2} y={74} size={11}>{p.sub}</L>
        </g>
      ))}
      {events.map((e, i) => (
        <g key={e.t}>
          <line x1={e.x} y1={84} x2={e.x} y2={i % 2 ? 122 : 100} stroke="currentColor" strokeOpacity={0.5} />
          <circle cx={e.x} cy={84} r={4} fill={C.red} />
          <L x={e.x} y={i % 2 ? 136 : 114} size={11}>{e.t}</L>
        </g>
      ))}
      <L x={20} y={162} anchor="start" size={11} color={C.grey}>Embryogenèse = segmentation + gastrulation + organogenèse</L>

      <L x={20} y={186} anchor="start" bold size={14}>Développement postnatal (jusqu'à ~25 ans)</L>
      {post.map((p, i) => (
        <g key={p.label}>
          <rect x={p.x} y={198} width={p.w} height={50} fill={C.amber} fillOpacity={0.12 + i * 0.07} stroke={C.amber} strokeWidth={2} />
          <L x={p.x + p.w / 2} y={220} bold size={11}>{p.label}</L>
          <L x={p.x + p.w / 2} y={237} size={11}>{p.sub}</L>
        </g>
      ))}
    </Figure>
  );
}

// ─── 2. Appareils reproducteurs ──────────────────────────────────────────
export function ReproductiveSystems() {
  const stroke = { stroke: "#b06a86", strokeWidth: 2 } as const;
  const male = { stroke: "#5f7fb0", strokeWidth: 2 } as const;
  const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;
  return (
    <Figure viewBox="0 0 760 400" title="Appareils reproducteurs féminin et masculin" caption="À gauche : appareil féminin (vue de face). À droite : appareil masculin (coupe sagittale)">
      <L x={150} y={20} bold size={14}>Appareil féminin</L>
      {/* utérus */}
      <path d="M150,120 C110,120 100,170 120,230 C128,255 140,270 150,270 C160,270 172,255 180,230 C200,170 190,120 150,120z" fill={C.pink} fillOpacity={0.4} {...stroke} />
      <path d="M150,180 C138,205 138,235 150,262 C162,235 162,205 150,180z" fill="#ffffff" fillOpacity={0.55} stroke="#b06a86" strokeWidth={1} />
      {/* col + vagin */}
      <rect x={138} y={268} width={24} height={20} fill={C.pink} fillOpacity={0.55} {...stroke} />
      <path d="M134,288 h32 v82 q-16,10 -32,0z" fill={C.pink} fillOpacity={0.25} {...stroke} />
      {/* trompes + ovaires */}
      <path d="M122,140 C95,112 70,118 58,146 C52,162 60,176 70,174" fill="none" {...stroke} strokeWidth={7} strokeLinecap="round" opacity={0.7} />
      <path d="M178,140 C205,112 230,118 242,146 C248,162 240,176 230,174" fill="none" {...stroke} strokeWidth={7} strokeLinecap="round" opacity={0.7} />
      <ellipse cx={72} cy={190} rx={18} ry={26} fill={C.amber} fillOpacity={0.5} stroke="#b0812a" strokeWidth={2} />
      <ellipse cx={228} cy={190} rx={18} ry={26} fill={C.amber} fillOpacity={0.5} stroke="#b0812a" strokeWidth={2} />
      <line x1={150} y1={132} x2={150} y2={60} {...leader} /><L x={150} y={54} bold>Utérus</L>
      <line x1={66} y1={122} x2={30} y2={80} {...leader} /><L x={30} y={74} anchor="start" bold>Trompe utérine</L>
      <line x1={72} y1={216} x2={40} y2={250} {...leader} /><L x={12} y={264} anchor="start" bold>Ovaire</L>
      <line x1={162} y1={278} x2={230} y2={290} {...leader} /><L x={234} y={294} anchor="start" bold>Col de l'utérus</L>
      <line x1={166} y1={340} x2={230} y2={350} {...leader} /><L x={234} y={354} anchor="start" bold>Vagin</L>
      <L x={168} y={228} size={10} color={C.grey}>cavité utérine</L>

      <L x={480} y={20} bold size={14}>Appareil masculin</L>
      {/* vessie, prostate, vésicule séminale */}
      <ellipse cx={450} cy={100} rx={44} ry={38} fill={C.blue} fillOpacity={0.18} {...male} />
      <ellipse cx={490} cy={150} rx={26} ry={18} fill={C.green} fillOpacity={0.35} stroke="#3a8a62" strokeWidth={2} />
      <ellipse cx={498} cy={112} rx={14} ry={26} fill={C.violet} fillOpacity={0.3} stroke="#7a56b8" strokeWidth={2} />
      {/* urètre + pénis */}
      <path d="M484,164 C484,210 500,230 540,250 L580,290" fill="none" {...male} strokeWidth={14} strokeLinecap="round" opacity={0.35} />
      <path d="M484,164 C484,210 500,230 540,250 L580,290" fill="none" stroke="#5f7fb0" strokeWidth={4} strokeLinecap="round" />
      {/* canal déférent -> testicule */}
      <path d="M500,104 C540,90 552,150 520,200 C505,240 520,270 520,300" fill="none" stroke="#7a56b8" strokeWidth={3} />
      <ellipse cx={518} cy={332} rx={30} ry={40} fill={C.amber} fillOpacity={0.45} stroke="#b0812a" strokeWidth={2} />
      <path d="M534,302 C550,320 550,344 532,362" fill="none" stroke="#7a3a2a" strokeWidth={5} strokeLinecap="round" />
      <path d="M340,60 h20 v120" fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={0} />
      <line x1={410} y1={90} x2={360} y2={70} {...leader} /><L x={356} y={66} anchor="end" bold>Vessie</L>
      <line x1={470} y1={152} x2={410} y2={170} {...leader} /><L x={406} y={174} anchor="end" bold>Prostate</L>
      <line x1={510} y1={92} x2={560} y2={60} {...leader} /><L x={564} y={56} anchor="start" bold>Vésicule séminale</L>
      <line x1={548} y1={200} x2={600} y2={190} {...leader} /><L x={604} y={194} anchor="start" bold>Canal déférent</L>
      <line x1={544} y1={344} x2={590} y2={356} {...leader} /><L x={594} y={360} anchor="start" bold>Épididyme</L>
      <line x1={488} y1={332} x2={420} y2={340} {...leader} /><L x={416} y={344} anchor="end" bold>Testicule</L>
      <line x1={560} y1={272} x2={604} y2={250} {...leader} /><L x={608} y={254} anchor="start" bold>Urètre / pénis</L>
    </Figure>
  );
}

// ─── 3. Cycle ovarien et menstruel ───────────────────────────────────────
export function MenstrualCycle() {
  const x = (d: number) => 50 + (d - 1) * 18.5;
  const phases = [
    { from: 1, to: 4.99, label: "Menstruelle", sub: "j1-4", color: C.red },
    { from: 5, to: 14.99, label: "Proliférative (folliculaire)", sub: "j5-14", color: C.blue },
    { from: 15, to: 25.99, label: "Sécrétoire (lutéale)", sub: "j15-25", color: C.amber },
    { from: 26, to: 29, label: "Prémens.", sub: "j26-28", color: C.violet },
  ];
  return (
    <Figure viewBox="0 0 600 470" title="Cycle ovarien et cycle menstruel sur 28 jours" caption="Frise du cycle de 28 jours : phases, événements ovariens, hormones et épaisseur de l'endomètre">
      {phases.map((p) => (
        <g key={p.label}>
          <rect x={x(p.from)} y={12} width={x(p.to) - x(p.from)} height={38} fill={p.color} fillOpacity={0.22} stroke={p.color} strokeWidth={1.5} />
          <L x={(x(p.from) + x(p.to)) / 2} y={28} bold size={p.label.length > 14 ? 11 : 12}>{p.label}</L>
          <L x={(x(p.from) + x(p.to)) / 2} y={43} size={10}>{p.sub}</L>
        </g>
      ))}

      {/* cycle ovarien */}
      <L x={6} y={74} anchor="start" bold size={11}>Ovaire</L>
      {[2, 5, 8, 11].map((d, i) => (
        <circle key={d} cx={x(d)} cy={100} r={5 + i * 2.5} fill="#fff" fillOpacity={0.6} stroke="#b0812a" strokeWidth={2} />
      ))}
      <circle cx={x(13.5)} cy={100} r={17} fill="#fff" fillOpacity={0.6} stroke="#b0812a" strokeWidth={2.5} />
      <circle cx={x(13.5)} cy={100} r={5} fill={C.amber} />
      <L x={x(13.5)} y={132} bold size={11} color={C.red}>Ovulation (j14)</L>
      <circle cx={x(18)} cy={100} r={13} fill={C.amber} fillOpacity={0.8} />
      <circle cx={x(22)} cy={100} r={12} fill={C.amber} fillOpacity={0.65} />
      <L x={x(20)} y={132} size={11}>Corps jaune</L>
      <circle cx={x(27)} cy={100} r={7} fill={C.grey} fillOpacity={0.7} />
      <L x={x(26.5)} y={118} size={10}>c. blanc</L>
      <L x={x(6.5)} y={132} size={11}>Follicules en maturation</L>

      {/* hormones */}
      <L x={6} y={158} anchor="start" bold size={11}>Hormones</L>
      <line x1={50} y1={168} x2={50} y2={290} stroke="currentColor" strokeOpacity={0.35} />
      <line x1={50} y1={290} x2={x(29)} y2={290} stroke="currentColor" strokeOpacity={0.35} />
      {/* œstrogène */}
      <path d={`M${x(1)},278 C${x(5)},270 ${x(9)},230 ${x(13)},178 C${x(14)},176 ${x(14.5)},238 ${x(15.5)},248 C${x(18)},226 ${x(21)},214 ${x(22)},222 C${x(25)},250 ${x(27)},276 ${x(29)},280`} fill="none" stroke={C.red} strokeWidth={2.5} />
      {/* progestérone */}
      <path d={`M${x(1)},284 L${x(14)},284 C${x(16)},270 ${x(19)},205 ${x(21)},198 C${x(23)},204 ${x(26)},262 ${x(29)},284`} fill="none" stroke={C.green} strokeWidth={2.5} />
      {/* LH */}
      <path d={`M${x(1)},282 L${x(12)},278 C${x(13)},250 ${x(13.5)},172 ${x(14)},172 C${x(14.5)},172 ${x(15)},250 ${x(16)},278 L${x(29)},282`} fill="none" stroke={C.violet} strokeWidth={2.5} />
      {/* FSH */}
      <path d={`M${x(1)},262 C${x(4)},250 ${x(7)},262 ${x(11)},276 C${x(13)},262 ${x(14)},234 ${x(14.5)},234 C${x(15.5)},250 ${x(17)},280 ${x(29)},284`} fill="none" stroke={C.blue} strokeWidth={2.5} strokeDasharray="6 4" />
      <line x1={x(14)} y1={168} x2={x(14)} y2={290} stroke={C.red} strokeOpacity={0.5} strokeDasharray="3 3" />
      <g fontSize={11}>
        <text x={x(3)} y={176} fill={C.red}>— Œstrogène</text>
        <text x={x(9)} y={176} fill={C.green}>— Progestérone</text>
        <text x={x(16)} y={176} fill={C.violet}>— LH (pic j14)</text>
        <text x={x(22.5)} y={176} fill={C.blue}>-- FSH</text>
      </g>

      {/* endomètre */}
      <L x={6} y={322} anchor="start" bold size={11}>Endomètre</L>
      <path d={`M${x(1)},392 L${x(1)},380 L${x(4)},386 L${x(5)},386 C${x(9)},372 ${x(12)},360 ${x(15)},346 L${x(25)},342 C${x(26)},346 ${x(26.5)},364 ${x(27.5)},380 L${x(29)},386 L${x(29)},392z`} fill={C.pink} fillOpacity={0.5} stroke="#b06a86" strokeWidth={2} />
      <L x={x(3)} y={412} size={10}>desquamation</L>
      <L x={x(10)} y={412} size={10}>reconstitution</L>
      <L x={x(20)} y={412} size={10}>endomètre sécrétoire, épais</L>
      <L x={x(27.5)} y={412} size={10}>ischémie</L>

      {/* axe des jours */}
      {[1, 7, 14, 21, 28].map((d) => (
        <g key={d}>
          <line x1={x(d)} y1={425} x2={x(d)} y2={431} stroke="currentColor" />
          <L x={x(d)} y={445} size={11}>{`J${d}`}</L>
        </g>
      ))}
      <line x1={50} y1={425} x2={x(29)} y2={425} stroke="currentColor" strokeOpacity={0.5} />
      <L x={300} y={464} size={10} color={C.grey}>GnRH → FSH/LH → œstrogène (phase proliférative) → pic LH → ovulation → progestérone (phase sécrétoire)</L>
    </Figure>
  );
}

// ─── 4. Gamétogenèse ─────────────────────────────────────────────────────
function Cell({ x, y, r, label, sub, fill = C.blue, dots = 0 }: { x: number; y: number; r: number; label?: string; sub?: string; fill?: string; dots?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} fillOpacity={0.25} stroke={fill} strokeWidth={2} />
      {Array.from({ length: dots }).map((_, i) => (
        <rect key={i} x={x - r / 2 + i * (r / Math.max(dots - 1, 1)) - 1.5} y={y - 6} width={3} height={12} rx={1.5} fill={fill} />
      ))}
      {label && <L x={x + r + 8} y={y - 1} anchor="start" bold size={11}>{label}</L>}
      {sub && <L x={x + r + 8} y={y + 12} anchor="start" size={10} color={C.grey}>{sub}</L>}
    </g>
  );
}

function Step({ x1, y1, x2, y2, label }: { x1: number; y1: number; x2: number; y2: number; label?: string }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.5} markerEnd="url(#fig-arrow)" />
      {label && <L x={x1 + 8} y={(y1 + y2) / 2 + 4} anchor="start" size={10} color={C.violet}>{label}</L>}
    </g>
  );
}

export function Gametogenesis() {
  return (
    <Figure viewBox="0 0 640 470" title="Spermatogenèse, spermiogenèse et ovogenèse" caption="À gauche : spermatogenèse (4 spermatozoïdes par spermatocyte I). À droite : ovogenèse (1 ovule + 3 globules polaires)">
      <L x={150} y={18} bold size={14}>Spermatogenèse</L>
      <Cell x={100} y={50} r={16} label="Spermatogonie" sub="2n (46) — mitoses" dots={2} />
      <Step x1={100} y1={68} x2={100} y2={92} label="croissance" />
      <Cell x={100} y={112} r={20} label="Spermatocyte I" sub="2n (46, 2 chromatides)" dots={3} />
      <Step x1={100} y1={134} x2={100} y2={160} label="Méiose I" />
      <Cell x={70} y={182} r={15} dots={2} />
      <Cell x={130} y={182} r={15} dots={2} />
      <L x={185} y={186} anchor="start" bold size={11}>2 Spermatocytes II</L>
      <L x={185} y={200} anchor="start" size={10} color={C.grey}>n (23)</L>
      <Step x1={70} y1={198} x2={56} y2={226} />
      <L x={160} y={220} anchor="start" size={10} color={C.violet}>Méiose II</L>
      <Step x1={70} y1={198} x2={84} y2={226} />
      <Step x1={130} y1={198} x2={116} y2={226} />
      <Step x1={130} y1={198} x2={144} y2={226} />
      {[56, 84, 116, 144].map((x, i) => <Cell key={x} x={x} y={242} r={10} fill={i % 2 ? C.green : C.blue} />)}
      <L x={185} y={244} anchor="start" bold size={11}>4 Spermatides</L>
      <L x={185} y={258} anchor="start" size={10} color={C.grey}>2 × (22+X) et 2 × (22+Y)</L>
      {[56, 84, 116, 144].map((x, i) => <Step key={x} x1={x} y1={254} x2={x} y2={290} />)}
      {[56, 84, 116, 144].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy={302} rx={5} ry={7} fill={i % 2 ? C.green : C.blue} />
          <path d={`M${x},309 q-6,14 0,26 q6,12 0,22`} fill="none" stroke={i % 2 ? C.green : C.blue} strokeWidth={2} />
        </g>
      ))}
      <L x={160} y={276} anchor="start" size={10} color={C.violet}>Spermiogenèse</L>
      <L x={185} y={312} anchor="start" bold size={11}>4 Spermatozoïdes</L>
      <L x={185} y={326} anchor="start" size={10} color={C.grey}>tête, col, pièce intermédiaire, flagelle</L>

      <L x={480} y={18} bold size={14}>Ovogenèse</L>
      <Cell x={420} y={50} r={16} label="Ovogonie" sub="2n — vie fœtale" dots={2} />
      <Step x1={420} y1={68} x2={420} y2={92} label="avant la naissance" />
      <Cell x={420} y={114} r={22} label="Ovocyte I" sub="bloqué en prophase I jusqu'à la puberté" fill={C.red} dots={3} />
      <Step x1={420} y1={138} x2={420} y2={166} label="Méiose I" />
      <Cell x={420} y={192} r={22} label="Ovocyte II" sub="n — bloqué en métaphase II" fill={C.red} dots={2} />
      <Cell x={470} y={170} r={7} fill={C.grey} />
      <L x={484} y={162} anchor="start" size={10}>1ᵉʳ globule polaire</L>
      <Step x1={420} y1={216} x2={420} y2={252} label="Ovulation → fécondation → méiose II" />
      <Cell x={420} y={276} r={22} label="Ovule (22+X)" sub="ovocyte mature" fill={C.red} dots={2} />
      <Cell x={470} y={254} r={7} fill={C.grey} />
      <L x={484} y={258} anchor="start" size={10}>2ᵉ globule polaire</L>
      <L x={320} y={356} anchor="middle" size={11} bold>Bilan</L>
      <L x={320} y={374} anchor="middle" size={11}>1 spermatocyte I → 4 spermatozoïdes  |  1 ovocyte I → 1 ovule + 3 globules polaires</L>
      <L x={320} y={394} anchor="middle" size={10} color={C.grey}>Ovules : cytoplasme concentré dans l'ovocyte ; globules polaires dégénèrent</L>
      <L x={320} y={420} anchor="middle" size={11} bold>Follicule ovarien</L>
      {["primordial", "primaire", "secondaire", "de De Graaf"].map((n, i) => (
        <g key={n}>
          <circle cx={100 + i * 145} cy={442} r={6 + i * 3} fill="#fff" fillOpacity={0.5} stroke="#b0812a" strokeWidth={2} />
          <circle cx={100 + i * 145} cy={442} r={3} fill={C.red} fillOpacity={0.7} />
          <L x={100 + i * 145 + 22} y={446} anchor="start" size={10}>{n}</L>
        </g>
      ))}
    </Figure>
  );
}

// ─── 5. Fécondation ──────────────────────────────────────────────────────
function Sperm({ x, y, rot = 0, color = C.blue }: { x: number; y: number; rot?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse cx={0} cy={0} rx={4} ry={5.5} fill={color} />
      <path d="M0,5 q-5,8 0,14 q5,7 0,14" fill="none" stroke={color} strokeWidth={1.6} />
    </g>
  );
}

export function Fertilization() {
  const cx = (i: number) => 60 + i * 120;
  return (
    <Figure viewBox="0 0 640 330" title="Étapes de la fécondation" caption="De la rencontre des gamètes au zygote : corona radiata, zone pellucide, réaction acrosomiale, pronucléi puis fusion">
      {/* 1 : corona radiata */}
      <circle cx={cx(0)} cy={130} r={46} fill="none" stroke={C.pink} strokeWidth={9} strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx={cx(0)} cy={130} r={34} fill="none" stroke={C.amber} strokeWidth={5} opacity={0.6} />
      <circle cx={cx(0)} cy={130} r={29} fill={C.red} fillOpacity={0.25} stroke={C.red} strokeWidth={2} />
      <circle cx={cx(0)} cy={130} r={9} fill={C.red} fillOpacity={0.6} />
      <Sperm x={cx(0) - 36} y={64} rot={200} />
      <Sperm x={cx(0) + 30} y={52} rot={170} />
      <L x={cx(0)} y={214} bold size={11}>1. Traversée de la</L>
      <L x={cx(0)} y={228} bold size={11}>corona radiata</L>

      {/* 2 : zone pellucide */}
      <circle cx={cx(1)} cy={130} r={46} fill="none" stroke={C.pink} strokeWidth={9} strokeDasharray="1 6" strokeLinecap="round" opacity={0.5} />
      <circle cx={cx(1)} cy={130} r={34} fill="none" stroke={C.amber} strokeWidth={7} />
      <circle cx={cx(1)} cy={130} r={29} fill={C.red} fillOpacity={0.25} stroke={C.red} strokeWidth={2} />
      <Sperm x={cx(1) + 6} y={78} rot={175} />
      <text x={cx(1) + 16} y={70} fontSize={10} fill={C.green}>acrosome : enzymes</text>
      <L x={cx(1)} y={214} bold size={11}>2. Lyse de la zone</L>
      <L x={cx(1)} y={228} bold size={11}>pellucide (acrosome)</L>

      {/* 3 : fusion + réaction zonale */}
      <circle cx={cx(2)} cy={130} r={34} fill="none" stroke={C.amber} strokeWidth={7} />
      <circle cx={cx(2)} cy={130} r={29} fill={C.red} fillOpacity={0.25} stroke={C.red} strokeWidth={2} />
      <Sperm x={cx(2)} y={100} rot={180} />
      <circle cx={cx(2) - 46} cy={130} r={4} fill={C.grey} />
      <L x={cx(2) - 46} y={148} size={9} color={C.grey}>2ᵉ GP</L>
      <L x={cx(2)} y={214} bold size={11}>3. Fusion des membranes</L>
      <L x={cx(2)} y={228} bold size={11}>+ réaction zonale</L>

      {/* 4 : pronucléi */}
      <circle cx={cx(3)} cy={130} r={34} fill="none" stroke={C.amber} strokeWidth={7} />
      <circle cx={cx(3)} cy={130} r={29} fill={C.red} fillOpacity={0.2} stroke={C.red} strokeWidth={2} />
      <circle cx={cx(3) - 11} cy={130} r={10} fill={C.pink} fillOpacity={0.7} stroke="#b06a86" strokeWidth={2} />
      <circle cx={cx(3) + 11} cy={130} r={10} fill={C.blue} fillOpacity={0.6} stroke="#3a5db0" strokeWidth={2} />
      <L x={cx(3) - 11} y={110} size={10} color="#b06a86" bold>♀</L>
      <L x={cx(3) + 11} y={110} size={10} color="#3a5db0" bold>♂</L>
      <L x={cx(3)} y={214} bold size={11}>4. Pronucléus</L>
      <L x={cx(3)} y={228} bold size={11}>féminin et masculin</L>

      {/* 5 : zygote */}
      <circle cx={cx(4)} cy={130} r={34} fill="none" stroke={C.amber} strokeWidth={7} />
      <circle cx={cx(4)} cy={130} r={29} fill={C.red} fillOpacity={0.2} stroke={C.red} strokeWidth={2} />
      <circle cx={cx(4)} cy={130} r={13} fill={C.violet} fillOpacity={0.5} stroke={C.violet} strokeWidth={2} />
      <L x={cx(4)} y={134} size={10} bold>46</L>
      <L x={cx(4)} y={214} bold size={11}>5. Zygote</L>
      <L x={cx(4)} y={228} bold size={11}>diploïde (46)</L>

      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={cx(i) + 52} y1={130} x2={cx(i + 1) - 52} y2={130} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} markerEnd="url(#fig-arrow)" />
      ))}
      <g fontSize={11}>
        <text x={20} y={272} fill={C.pink}>▪ Corona radiata</text>
        <text x={150} y={272} fill={C.amber}>▪ Zone pellucide</text>
        <text x={280} y={272} fill={C.red}>▪ Ovocyte</text>
        <text x={370} y={272} fill={C.grey}>GP = globule polaire</text>
      </g>
      <L x={320} y={300} size={11} color={C.grey}>Fécondation dans l'ampoule de la trompe utérine, dans les 24 h suivant l'ovulation</L>
    </Figure>
  );
}

// ─── 6. Segmentation → blastocyste ───────────────────────────────────────
function packedCells(n: number, R: number) {
  const r = (0.86 * R) / Math.sqrt(n) * (n === 1 ? 1.05 : 1);
  return Array.from({ length: n }, (_, i) => {
    const rad = n === 1 ? 0 : 0.8 * R * Math.sqrt((i + 0.5) / n) - r * 0.15;
    const ang = i * 2.399963;
    return { x: Math.cos(ang) * Math.max(rad, 0), y: Math.sin(ang) * Math.max(rad, 0), r: Math.min(r, 0.95 * R) };
  });
}

export function Cleavage() {
  const stages = [
    { n: 1, label: "Zygote", sub: "J1" },
    { n: 2, label: "2 cellules", sub: "J2" },
    { n: 4, label: "4 cellules", sub: "J2-3" },
    { n: 8, label: "8 cellules", sub: "J3" },
    { n: 16, label: "Morula", sub: "J3-4" },
  ];
  const R = 38;
  return (
    <Figure viewBox="0 0 660 350" title="Segmentation du zygote jusqu'au blastocyste" caption="Segmentation : divisions mitotiques sans croissance → morula (J4) → blastocyste (J5) avec embryoblaste et trophoblaste">
      {stages.map((s, i) => {
        const cx = 56 + i * 104;
        return (
          <g key={s.label} transform={`translate(${cx} 90)`}>
            <circle r={R + 6} fill="none" stroke={C.amber} strokeWidth={4} opacity={0.7} />
            {packedCells(s.n, R).map((c, k) => (
              <circle key={k} cx={c.x} cy={c.y} r={c.r} fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={1.5} />
            ))}
            <L x={0} y={76} bold size={12}>{s.label}</L>
            <L x={0} y={92} size={11} color={C.grey}>{s.sub}</L>
          </g>
        );
      })}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={56 + i * 104 + 48} y1={90} x2={56 + (i + 1) * 104 - 48} y2={90} stroke="currentColor" strokeOpacity={0.5} markerEnd="url(#fig-arrow)" strokeWidth={1.5} />
      ))}

      {/* blastocyste */}
      <g transform="translate(230 272)">
        <circle r={50} fill="none" stroke={C.amber} strokeWidth={4} opacity={0.7} />
        <circle r={44} fill={C.blue} fillOpacity={0.06} stroke={C.green} strokeWidth={6} strokeDasharray="14 2" />
        {[[-26, -12], [-14, -22], [-30, 4], [-16, -4], [-2, -14], [-10, 10]].map(([x, y], k) => (
          <circle key={k} cx={x} cy={y} r={9} fill={C.red} fillOpacity={0.4} stroke={C.red} strokeWidth={1.5} />
        ))}
        <L x={12} y={22} size={11} color={C.blue}>blastocèle</L>
      </g>
      <L x={330} y={196} anchor="start" bold size={12} color={C.red}>Embryoblaste</L>
      <L x={330} y={210} anchor="start" size={10} color={C.grey}>masse cellulaire interne → embryon</L>
      <L x={330} y={230} anchor="start" bold size={12} color={C.green}>Trophoblaste</L>
      <L x={330} y={244} anchor="start" size={10} color={C.grey}>masse externe → placenta</L>
      <L x={330} y={264} anchor="start" bold size={12} color={C.blue}>Blastocèle</L>
      <L x={330} y={278} anchor="start" size={10} color={C.grey}>cavité remplie de liquide</L>
      <L x={520} y={272} anchor="start" size={11} color={C.amber}>▪ zone pellucide</L>
      <L x={520} y={290} anchor="start" size={11} color={C.grey}>disparaît avant l'implantation</L>
    </Figure>
  );
}

// ─── 7. Implantation et disque didermique ────────────────────────────────
export function Implantation() {
  const days = [
    { x: 40, d: "J6", t: "Adhésion à l'endomètre" },
    { x: 150, d: "J7", t: "Cyto- et syncytiotrophoblaste" },
    { x: 260, d: "J8", t: "Cavité amniotique" },
    { x: 370, d: "J9", t: "Sac vitellin primaire" },
    { x: 480, d: "J10-11", t: "Fin de l'implantation" },
    { x: 590, d: "J12+", t: "Cœlome extra-embryonnaire" },
  ];
  return (
    <Figure viewBox="0 0 700 470" title="Implantation et disque embryonnaire bilaminaire" caption="Frise de l'implantation (J6-J12) et schéma du disque didermique vers J9">
      <line x1={30} y1={40} x2={610} y2={40} stroke="currentColor" strokeOpacity={0.5} strokeWidth={2} markerEnd="url(#fig-arrow)" />
      {days.map((d) => (
        <g key={d.d}>
          <circle cx={d.x} cy={40} r={6} fill={C.violet} />
          <L x={d.x} y={24} bold size={12}>{d.d}</L>
          <text x={d.x} y={64} textAnchor="middle" fontSize={10} fill="currentColor">
            {d.t.split(" ").reduce<string[]>((acc, w) => {
              const last = acc[acc.length - 1];
              if (last && (last + " " + w).length <= 14) acc[acc.length - 1] = last + " " + w;
              else acc.push(w);
              return acc;
            }, []).map((line, i) => <tspan key={i} x={d.x} dy={i === 0 ? 0 : 12}>{line}</tspan>)}
          </text>
        </g>
      ))}

      {/* endomètre */}
      <path d="M20,330 C120,318 200,340 320,326 C440,312 520,338 620,326 L620,460 L20,460z" fill={C.pink} fillOpacity={0.3} stroke="#b06a86" strokeWidth={2} />
      <L x={40} y={420} anchor="start" size={11} color="#b06a86" bold>Endomètre (phase sécrétoire)</L>
      {/* blastocyste implanté */}
      <ellipse cx={320} cy={250} rx={150} ry={90} fill={C.green} fillOpacity={0.12} stroke={C.green} strokeWidth={10} strokeDasharray="20 3" />
      <ellipse cx={320} cy={250} rx={138} ry={80} fill="none" stroke={C.amber} strokeWidth={4} />
      {/* cavité amniotique */}
      <path d="M270,222 q50,-46 100,0z" fill="#8bb8ff" fillOpacity={0.5} stroke={C.blue} strokeWidth={1.5} />
      {/* disque */}
      <line x1={258} y1={224} x2={382} y2={224} stroke={C.blue} strokeWidth={6} />
      <line x1={258} y1={231} x2={382} y2={231} stroke={C.amber} strokeWidth={6} />
      {/* sac vitellin */}
      <path d="M262,234 q58,70 116,0z" fill={C.amber} fillOpacity={0.35} stroke={C.amber} strokeWidth={1.5} />

      {/* légendes */}
      <g fontSize={11} fontWeight={700}>
        <line x1={320} y1={190} x2={320} y2={110} stroke="currentColor" strokeOpacity={0.4} /><text x={320} y={104} textAnchor="middle" fill={C.blue}>Cavité amniotique</text>
        <line x1={382} y1={224} x2={470} y2={170} stroke="currentColor" strokeOpacity={0.4} /><text x={474} y={168} fill={C.blue}>Épiblaste (ectoderme primitif)</text>
        <line x1={382} y1={232} x2={470} y2={222} stroke="currentColor" strokeOpacity={0.4} /><text x={474} y={226} fill="#b0812a">Hypoblaste (endoderme primitif)</text>
        <line x1={340} y1={258} x2={470} y2={280} stroke="currentColor" strokeOpacity={0.4} /><text x={474} y={284} fill="#b0812a">Sac vitellin primaire</text>
        <line x1={455} y1={190} x2={526} y2={128} stroke="currentColor" strokeOpacity={0.4} /><text x={470} y={120} fill={C.green}>Syncytiotrophoblaste (externe)</text>
        <line x1={186} y1={270} x2={110} y2={296} stroke="currentColor" strokeOpacity={0.4} /><text x={20} y={300} fill={C.green}>Cytotrophoblaste (interne)</text>
        <line x1={200} y1={216} x2={120} y2={190} stroke="currentColor" strokeOpacity={0.4} /><text x={20} y={186} fill={C.amber}>Mésoderme extra-embryonnaire</text>
      </g>
      <L x={320} y={452} size={10} color={C.grey}>Le disque bilaminaire se trouve entre la cavité amniotique (au-dessus) et le sac vitellin (en dessous)</L>
    </Figure>
  );
}

// ─── 8. Gastrulation ─────────────────────────────────────────────────────
export function Gastrulation() {
  return (
    <Figure viewBox="0 0 660 400" title="Gastrulation : ligne primitive et formation du mésoderme" caption="Gauche : disque vu de dessus (3ᵉ semaine). Droite : coupe transversale au niveau de la ligne primitive. Les flèches animées montrent la migration cellulaire.">
      {/* vue dorsale */}
      <L x={150} y={20} bold size={13}>Vue dorsale du disque</L>
      <path d="M150,36 C215,36 235,120 220,200 C210,270 180,340 150,362 C120,340 90,270 80,200 C65,120 85,36 150,36z" fill={C.blue} fillOpacity={0.14} stroke={C.blue} strokeWidth={2} />
      {/* ligne primitive */}
      <rect x={144} y={190} width={12} height={130} rx={5} fill={C.red} fillOpacity={0.45} stroke={C.red} strokeWidth={2} />
      <circle cx={150} cy={190} r={13} fill={C.amber} fillOpacity={0.55} stroke="#b0812a" strokeWidth={2} />
      <circle cx={150} cy={190} r={4} fill="#5d3f0a" />
      {/* notochorde */}
      <line x1={150} y1={178} x2={150} y2={80} stroke={C.green} strokeWidth={7} strokeLinecap="round" opacity={0.7} className="fig-flow" />
      {/* migration */}
      {[[102, 250, 140, 250], [198, 250, 160, 250], [104, 296, 140, 296], [196, 296, 160, 296]].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.red} strokeWidth={2} markerEnd="url(#fig-arrow)" className="fig-flow" />
      ))}
      <ellipse cx={150} cy={62} rx={22} ry={12} fill={C.violet} fillOpacity={0.4} stroke={C.violet} strokeWidth={2} />
      <ellipse cx={150} cy={352} rx={16} ry={8} fill={C.grey} fillOpacity={0.5} stroke={C.grey} strokeWidth={2} />
      <g fontSize={11} fontWeight={700}>
        <text x={182} y={56} fill={C.violet}>Plaque prochordale</text>
        <text x={182} y={70} fill={C.violet} fontWeight={400}>(future bouche)</text>
        <text x={170} y={128} fill={C.green}>Notochorde</text>
        <text x={172} y={184} fill="#b0812a">Nœud de Hensen</text>
        <text x={172} y={226} fill={C.red}>Ligne primitive</text>
        <text x={182} y={356} fill={C.grey}>Membrane cloacale</text>
      </g>
      <L x={40} y={70} size={11} color={C.grey}>Crânial ↑</L>
      <L x={40} y={352} size={11} color={C.grey}>Caudal ↓</L>

      {/* coupe */}
      <L x={500} y={20} bold size={13}>Coupe au niveau de la ligne primitive</L>
      <path d="M350,120 L470,120 Q500,120 500,148 Q500,120 530,120 L650,120" fill="none" stroke={C.blue} strokeWidth={9} strokeLinecap="round" />
      <path d="M350,262 L650,262" fill="none" stroke={C.amber} strokeWidth={9} strokeLinecap="round" />
      {/* mésoderme */}
      <path d="M492,158 C470,190 420,196 372,190" fill="none" stroke={C.red} strokeWidth={8} strokeLinecap="round" opacity={0.55} />
      <path d="M508,158 C530,190 580,196 628,190" fill="none" stroke={C.red} strokeWidth={8} strokeLinecap="round" opacity={0.55} />
      <path d="M500,132 L500,176" stroke={C.red} strokeWidth={2.5} markerEnd="url(#fig-arrow)" className="fig-flow" />
      <path d="M496,180 C470,200 430,204 396,200" fill="none" stroke={C.red} strokeWidth={2} markerEnd="url(#fig-arrow)" className="fig-flow" />
      <path d="M504,180 C530,200 570,204 604,200" fill="none" stroke={C.red} strokeWidth={2} markerEnd="url(#fig-arrow)" className="fig-flow" />
      <g fontSize={12} fontWeight={700}>
        <text x={350} y={106} fill={C.blue}>Ectoderme (épiblaste)</text>
        <text x={520} y={172} fill={C.red}>Gouttière primitive</text>
        <text x={352} y={182} fill={C.red}>Mésoderme</text>
        <text x={350} y={290} fill="#b0812a">Endoderme (hypoblaste)</text>
      </g>
      <L x={500} y={330} size={11} color={C.grey}>L'épiblaste migre par la ligne primitive :</L>
      <L x={500} y={346} size={11} color={C.grey}>→ endoderme + mésoderme ; le reste = ectoderme</L>
      <L x={500} y={370} size={11} bold>3 feuillets : ectoderme · mésoderme · endoderme</L>
    </Figure>
  );
}

// ─── 9. Neurulation et mésoderme ─────────────────────────────────────────
const NEURAL_STEPS = [
  { label: "Plaque neurale", ecto: "M-70,120 H70", plate: "M-32,120 H32", tube: false, soma: false },
  { label: "Replis neuraux", ecto: "M-70,120 L-42,120 Q-32,98 -22,112 Q0,132 22,112 Q32,98 42,120 L70,120", plate: "", tube: false, soma: true },
  { label: "Gouttière neurale", ecto: "M-70,120 L-46,120 Q-38,82 -20,104 Q0,152 20,104 Q38,82 46,120 L70,120", plate: "", tube: false, soma: true },
  { label: "Tube neural", ecto: "M-70,120 L-22,120 Q0,113 22,120 L70,120", plate: "", tube: true, soma: true },
];

export function Neurulation() {
  return (
    <Figure viewBox="0 0 680 320" title="Neurulation : plaque neurale, gouttière neurale et tube neural" caption="Neurulation (3ᵉ-4ᵉ semaine) : la notochorde induit la plaque neurale qui se plisse en gouttière puis se ferme en tube neural">
      <g fontSize={11} fontWeight={700}>
        <text x={16} y={30} fill={C.blue}>▪ Ectoderme</text>
        <text x={16} y={48} fill={C.violet}>▪ Neuro-ectoderme / tube neural</text>
        <text x={280} y={30} fill={C.green}>▪ Notochorde</text>
        <text x={280} y={48} fill={C.red}>▪ Mésoderme paraxial (somites)</text>
        <text x={520} y={30} fill={C.amber}>▪ Endoderme</text>
      </g>
      {NEURAL_STEPS.map((st, i) => (
        <g key={st.label} transform={`translate(${85 + i * 170} 0)`}>
          <path d={st.ecto} fill="none" stroke={C.blue} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
          {st.plate && <path d={st.plate} fill="none" stroke={C.violet} strokeWidth={12} strokeLinecap="round" />}
          {st.tube && (
            <>
              <circle cx={0} cy={138} r={18} fill={C.violet} fillOpacity={0.15} stroke={C.violet} strokeWidth={6} />
              <circle cx={0} cy={138} r={6} fill={C.violet} fillOpacity={0.35} />
            </>
          )}
          <ellipse cx={0} cy={186} rx={12} ry={11} fill={C.green} fillOpacity={0.6} stroke={C.green} strokeWidth={2} />
          {[-50, 50].map((dx) => (
            <ellipse key={dx} cx={dx} cy={st.soma ? 178 : 184} rx={st.soma ? 17 : 22} ry={st.soma ? 15 : 9} fill={C.red} fillOpacity={0.45} stroke={C.red} strokeWidth={2} />
          ))}
          <path d="M-70,224 H70" stroke={C.amber} strokeWidth={8} strokeLinecap="round" />
          <L x={0} y={254} bold size={12}>{st.label}</L>
        </g>
      ))}
      <L x={340} y={296} size={11} color={C.grey}>Somite → sclérotome (vertèbres) · myotome (muscles) · dermatome (derme)</L>
    </Figure>
  );
}
