import { Figure, C, Txt } from "./Figure";
import { DEEP, arrow, box } from "./FigKit";

// Année 2 — Génétique médicale : schémas originaux des Lectures 1 et 2.

// ─── L1 : classification des maladies génétiques ─────────────────────────
export function GeneticDisordersDiagram() {
  const col = (x: number, title: string, c: string, lines: string[], freq: string) => (
    <g>
      <rect x={x} y={70} width={220} height={250} rx={14} fill={c} fillOpacity={0.08} stroke={c} strokeWidth={2} />
      <Txt x={x + 110} y={98} bold size={14} color={c}>{title}</Txt>
      {lines.map((line, i) => (
        <Txt key={line} x={x + 110} y={130 + i * 24} size={11.5}>{line}</Txt>
      ))}
      <rect x={x + 12} y={262} width={196} height={44} rx={10} fill={c} fillOpacity={0.18} />
      <Txt x={x + 110} y={289} bold size={11.5}>{freq}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 340" title="Classification des maladies génétiques" caption="Trois grands groupes : monogéniques (dont mitochondriales, transmission maternelle), chromosomiques (numériques ou structurales), multifactorielles (gènes + environnement)">
      <Txt x={370} y={34} bold size={15}>Maladies génétiques</Txt>
      {arrow("M330,44 L130,66")}
      {arrow("M370,44 L370,66")}
      {arrow("M410,44 L610,66")}
      {col(20, "Monogéniques", DEEP.blue, ["1 seule erreur critique", "1 allèle ou les 2 allèles", "+ mitochondriales :", "transmission maternelle"], "1/300 enfants · 1/50 vie")}
      {col(260, "Chromosomiques", DEEP.violet, ["excès ou déficit de gènes", "chromosome entier ou segment", "numériques ou structurales", "autosomes / gonosomes"], "7/1000 · ½ des FC du T1")}
      {col(500, "Multifactorielles", DEEP.green, ["plusieurs mutations", "+ facteurs d'environnement", "agrégation familiale", "HTA, diabète, cancer…"], "5 % enfants → > 60 %")}
    </Figure>
  );
}

// ─── L1 : frise historique ───────────────────────────────────────────────
export function GeneticsTimelineDiagram() {
  const events: [number, string, string][] = [
    [1866, "Mendel", "dominant / récessif"],
    [1900, "de Vries, Correns, Tschermak", "redécouverte"],
    [1902, "Bateson · Garrod", "« Genetics » · erreurs innées"],
    [1909, "Johannsen", "facteur = gène"],
    [1911, "Morgan", "gènes sur chromosomes"],
    [1953, "Watson & Crick", "double hélice"],
    [1956, "Tjio & Levan", "46 chromosomes"],
    [1996, "Wilmut", "1er mammifère cloné"],
  ];
  const x = (year: number) => 40 + ((year - 1860) / (2000 - 1860)) * 660;
  return (
    <Figure viewBox="0 0 740 300" title="Brève histoire de la génétique médicale" caption="De Mendel (1866) au premier clonage d'un mammifère (1996)">
      <line x1={30} y1={150} x2={712} y2={150} stroke="currentColor" strokeWidth={2.5} markerEnd="url(#fig-arrow)" />
      {events.map(([year, who, what], i) => {
        const up = i % 2 === 0;
        const cx = x(year);
        return (
          <g key={year + who}>
            <circle cx={cx} cy={150} r={6} fill={up ? C.blue : C.violet} />
            <line x1={cx} y1={up ? 144 : 156} x2={cx} y2={up ? 104 : 196} stroke="currentColor" strokeOpacity={0.4} />
            <Txt x={cx} y={up ? 96 : 212} bold size={12} color={up ? DEEP.blue : DEEP.violet}>{String(year)}</Txt>
            <Txt x={cx} y={up ? 78 : 230} size={10.5} bold>{who}</Txt>
            <Txt x={cx} y={up ? 62 : 246} size={10} color={C.grey}>{what}</Txt>
          </g>
        );
      })}
    </Figure>
  );
}

// ─── L2 : double hélice et appariement ───────────────────────────────────
export function DnaDoubleHelixDiagram() {
  const pairs: [string, string][] = [["A", "T"], ["G", "C"], ["T", "A"], ["C", "G"], ["A", "T"], ["G", "C"]];
  const color = (b: string) => (b === "A" ? C.red : b === "T" ? C.amber : b === "G" ? C.green : C.blue);
  return (
    <Figure viewBox="0 0 740 380" title="Structure de l'ADN : brins antiparallèles et bases complémentaires" caption="A–T (2 liaisons H) et G–C (3 liaisons H) ; un brin 5'→3', l'autre 3'→5' ; squelette sucre-phosphate à l'extérieur">
      <Txt x={150} y={30} bold size={13} color={DEEP.blue}>5'</Txt>
      <Txt x={150} y={362} bold size={13} color={DEEP.blue}>3'</Txt>
      <Txt x={430} y={30} bold size={13} color={DEEP.red}>3'</Txt>
      <Txt x={430} y={362} bold size={13} color={DEEP.red}>5'</Txt>
      {arrow("M120,50 L120,340")}
      {arrow("M460,340 L460,50")}
      <rect x={138} y={40} width={24} height={300} rx={8} fill={C.blue} fillOpacity={0.2} stroke={C.blue} />
      <rect x={418} y={40} width={24} height={300} rx={8} fill={C.red} fillOpacity={0.2} stroke={C.red} />
      {pairs.map(([l, r], i) => {
        const y = 66 + i * 48;
        const hb = l === "G" || l === "C" ? 3 : 2;
        return (
          <g key={i}>
            <circle cx={150} cy={y} r={7} fill={C.amber} />
            <circle cx={430} cy={y} r={7} fill={C.amber} />
            <rect x={164} y={y - 13} width={100} height={26} rx={6} fill={color(l)} fillOpacity={0.85} />
            <Txt x={214} y={y + 5} bold size={13} color="#fff">{l}</Txt>
            <rect x={316} y={y - 13} width={100} height={26} rx={6} fill={color(r)} fillOpacity={0.85} />
            <Txt x={366} y={y + 5} bold size={13} color="#fff">{r}</Txt>
            {Array.from({ length: hb }).map((_, k) => (
              <line key={k} x1={268} x2={312} y1={y - 6 + k * (12 / (hb - 1))} y2={y - 6 + k * (12 / (hb - 1))} stroke="currentColor" strokeDasharray="3 3" />
            ))}
          </g>
        );
      })}
      <Txt x={590} y={70} bold size={12}>Légende</Txt>
      <circle cx={520} cy={96} r={7} fill={C.amber} />
      <Txt x={536} y={100} anchor="start" size={11}>phosphate (squelette)</Txt>
      <line x1={510} x2={532} y1={124} y2={124} stroke="currentColor" strokeDasharray="3 3" />
      <Txt x={540} y={128} anchor="start" size={11}>liaison hydrogène</Txt>
      <Txt x={510} y={160} anchor="start" size={11} bold color={C.red}>A – T : 2 liaisons H</Txt>
      <Txt x={510} y={182} anchor="start" size={11} bold color={C.green}>G – C : 3 liaisons H</Txt>
      <Txt x={510} y={214} anchor="start" size={11}>purine (A, G) en face</Txt>
      <Txt x={510} y={230} anchor="start" size={11}>d'une pyrimidine (T, C)</Txt>
      <Txt x={510} y={262} anchor="start" size={11} color={C.grey}>%A = %T ; %G = %C</Txt>
      <Txt x={510} y={290} anchor="start" size={11} color={C.grey}>B-ADN : 0,34 nm entre paires,</Txt>
      <Txt x={510} y={306} anchor="start" size={11} color={C.grey}>3,4 nm par tour, Ø ≈ 2 nm</Txt>
    </Figure>
  );
}

// ─── L2 : formes A, B, Z ─────────────────────────────────────────────────
export function DnaFormsDiagram() {
  const helix = (cx: number, width: number, turns: number, c: string, left = false) => {
    const top = 70;
    const height = 220;
    const n = 80;
    const strand = (phase: number) => {
      let d = "";
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const angle = (left ? -1 : 1) * t * turns * 2 * Math.PI + phase;
        const x = cx + (width / 2) * Math.sin(angle);
        const y = top + t * height;
        d += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)} `;
      }
      return d;
    };
    return (
      <g>
        <path d={strand(0)} fill="none" stroke={c} strokeWidth={4} />
        <path d={strand(Math.PI * 0.75)} fill="none" stroke={c} strokeOpacity={0.5} strokeWidth={4} />
      </g>
    );
  };
  const info = (x: number, title: string, c: string, lines: string[]) => (
    <g>
      <Txt x={x} y={36} bold size={14} color={c}>{title}</Txt>
      {lines.map((line, i) => <Txt key={line} x={x} y={318 + i * 18} size={11}>{line}</Txt>)}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 380" title="Polymorphisme de l'ADN : formes A, B et Z" caption="B = forme physiologique (droite, 10 pb/tour) ; A = déshydratée (droite, 11 pb/tour, plus large) ; Z = riche en GC (gauche, 12 pb/tour, fine et en zigzag)">
      {helix(130, 110, 2, C.amber)}
      {helix(370, 84, 2.2, C.blue)}
      {helix(610, 60, 2.6, C.violet, true)}
      {info(130, "A-ADN", DEEP.amber, ["hélice droite · 11 pb/tour", "cations ↑ ou hydratation < 65 %", "2 sillons (grand étroit/profond)"])}
      {info(370, "B-ADN", DEEP.blue, ["hélice droite · 10 pb/tour", "forme physiologique", "grand + petit sillon"])}
      {info(610, "Z-ADN", DEEP.violet, ["hélice GAUCHE · 12 pb/tour", "riche en G-C (purine/pyrimidine)", "1 seul sillon, zigzag"])}
    </Figure>
  );
}

// ─── L2 : fourche de réplication ─────────────────────────────────────────
export function ReplicationForkDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Fourche de réplication de l'ADN" caption="L'hélicase ouvre la fourche, les SSB stabilisent les simples brins, la topoisomérase évite les torsions ; brin continu vers la fourche, brin discontinu en fragments d'Okazaki soudés par la ligase">
      {/* ADN parental */}
      <line x1={560} y1={190} x2={720} y2={190} stroke={C.grey} strokeWidth={5} />
      <line x1={560} y1={206} x2={720} y2={206} stroke={C.grey} strokeWidth={5} />
      <Txt x={650} y={176} size={11} color={C.grey}>ADN parental</Txt>
      {box(600, 220, 110, 40, "Topoisomérase", "anti-torsion", C.violet, 11)}
      {/* brins parentaux ouverts */}
      <path d="M560,190 L330,90 L40,90" fill="none" stroke={C.grey} strokeWidth={5} />
      <path d="M560,206 L330,306 L40,306" fill="none" stroke={C.grey} strokeWidth={5} />
      <circle cx={560} cy={198} r={20} fill={C.amber} fillOpacity={0.9} />
      <Txt x={560} y={246} bold size={12} color={DEEP.amber}>Hélicase</Txt>
      {[[420, 129], [470, 151], [420, 267], [470, 245]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={7} fill={C.pink} />
      ))}
      <Txt x={445} y={110} size={11} bold color={DEEP.pink}>SSB</Txt>
      {/* brin continu (haut) */}
      <line x1={60} y1={108} x2={360} y2={108} stroke={C.blue} strokeWidth={5} markerEnd="url(#fig-arrow)" />
      <Txt x={200} y={132} bold size={12} color={DEEP.blue}>Brin continu (direct) 5'→3' →</Txt>
      <Txt x={40} y={80} size={11}>3'</Txt>
      <Txt x={60} y={128} size={11}>5'</Txt>
      {/* brin discontinu (bas) */}
      {[[60, 150], [175, 265], [290, 345]].map(([a, b], i) => (
        <g key={i}>
          <line x1={b} y1={288} x2={a + 12} y2={288} stroke={C.red} strokeWidth={5} markerEnd="url(#fig-arrow)" />
          <rect x={b - 22} y={281} width={22} height={14} rx={3} fill={C.green} />
        </g>
      ))}
      <Txt x={40} y={330} size={11}>5'</Txt>
      <Txt x={200} y={330} bold size={12} color={DEEP.red}>← Brin discontinu : fragments d'Okazaki</Txt>
      <Txt x={164} y={270} bold size={11} color={DEEP.green}>ligase</Txt>
      <line x1={164} y1={274} x2={164} y2={282} stroke="currentColor" />
      <rect x={30} y={354} width={14} height={12} rx={2} fill={C.green} />
      <Txt x={50} y={364} anchor="start" size={11}>amorce d'ARN (retirée par l'ADN pol I)</Txt>
      <Txt x={380} y={364} anchor="start" size={11}>matrice lue 3'→5' · synthèse 5'→3'</Txt>
    </Figure>
  );
}
