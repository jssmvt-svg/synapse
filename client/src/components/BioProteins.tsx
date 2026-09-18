import { Figure, C, Txt, Dot, Seq } from "./Figure";
import { RED, OK, DEEP, leader, arrow, box, Axes, fnPath } from "./FigKit";

// Biochimie S1 — chapitres 2 à 4 : acides aminés, structure des protéines, hémoglobine.

const POS = "#d9414f";
const NEG = "#4f7be8";

// ─── 1. Structure générale d'un acide aminé ──────────────────────────────
export function AminoAcidStructureDiagram() {
  const atom = (x: number, y: number, t: string, c: string, r = 15) => (
    <g><circle cx={x} cy={y} r={r} fill={c} fillOpacity={0.85} stroke="#fff" strokeWidth={1.5} /><Txt x={x} y={y + 4} bold size={t.length > 3 ? 9 : 11} color="#fff">{t}</Txt></g>
  );
  const states: [string, string, string, string, string, string][] = [
    ["pH < pKa₁ (≈ 2)", "cation", "H₃N⁺ – CHR – COOH", "charge nette +1", POS, "NH₃⁺   COOH"],
    ["pH ≈ pI", "zwitterion (amphion)", "H₃N⁺ – CHR – COO⁻", "charge nette 0", OK, "NH₃⁺   COO⁻"],
    ["pH > pKa₂ (≈ 9-10)", "anion", "H₂N – CHR – COO⁻", "charge nette −1", NEG, "NH₂   COO⁻"],
  ];
  return (
    <Figure viewBox="0 0 740 400" title="Structure générale et ionisation d'un acide aminé" caption="Acide aminé α : carbone α portant NH₃⁺, COO⁻, H et la chaîne latérale R (forme L dans les protéines) ; la charge dépend du pH">
      <Txt x={150} y={24} bold size={13}>Acide aminé α (forme L)</Txt>
      <path d="M150,170 L150,110 M150,170 L84,170 M150,170 L216,170 M150,170 L150,236" stroke="currentColor" strokeWidth={3} />
      <circle cx={150} cy={170} r={20} fill={C.amber} fillOpacity={0.9} stroke="#fff" strokeWidth={2} /><Txt x={150} y={175} bold size={13} color="#fff">Cα</Txt>
      {atom(150, 96, "H", C.grey, 14)}
      {atom(70, 170, "NH₃⁺", POS, 22)}
      {atom(232, 170, "COO⁻", NEG, 22)}
      <rect x={122} y={236} width={56} height={34} rx={8} fill={C.violet} fillOpacity={0.5} stroke={DEEP.violet} strokeWidth={2} />
      <Txt x={150} y={258} bold size={13}>R</Txt>
      <Txt x={70} y={206} size={10} bold color={POS}>amine</Txt><Txt x={232} y={206} size={10} bold color={NEG}>carboxylate</Txt>
      <Txt x={150} y={290} size={10.5} bold color="#a3701a">chaîne latérale : 20 possibilités</Txt>
      <line x1={172} y1={148} x2={196} y2={120} {...leader} /><Txt x={204} y={116} anchor="start" size={10} color={C.grey}>carbone chiral</Txt>
      <Txt x={150} y={318} size={10.5} color={C.grey}>Gly : R = H (seul acide aminé non chiral)</Txt>
      <Txt x={150} y={336} size={10.5} color={C.grey}>autres : configuration L</Txt>
      <line x1={310} y1={30} x2={310} y2={380} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={530} y={24} bold size={13}>Ionisation selon le pH</Txt>
      {states.map(([ph, name, f, q, c], i) => (
        <g key={name} transform={`translate(0 ${44 + i * 86})`}>
          <rect x={330} y={0} width={396} height={74} rx={10} fill={c} fillOpacity={0.08} stroke={c} strokeWidth={2} />
          <Txt x={410} y={22} bold size={11.5} color={c}>{ph}</Txt>
          <Txt x={410} y={40} size={11} bold>{name}</Txt>
          <Txt x={410} y={58} size={10.5} color={c} bold>{q}</Txt>
          <Txt x={600} y={40} bold size={15}>{f}</Txt>
          <Txt x={600} y={60} size={10} color={C.grey}>{i === 1 ? "forme dominante à pH physiologique" : i === 0 ? "COOH protoné" : "NH₃⁺ déprotoné"}</Txt>
        </g>
      ))}
      {arrow("M528,116 L528,132")}{arrow("M528,202 L528,218")}
      <Txt x={530} y={318} bold size={11}>pI = (pKa₁ + pKa₂) / 2</Txt>
      <Txt x={530} y={336} size={10.5} color={C.grey}>exemple : glycine pKa 2,34 et 9,60 → pI = 5,97</Txt>
      <Txt x={530} y={354} size={10.5} color={C.grey}>au pI : charge nette nulle, migration nulle en électrophorèse</Txt>
    </Figure>
  );
}

// ─── 2. Les 20 acides aminés par classes ─────────────────────────────────
export function AminoAcidClassesDiagram() {
  const groups: [string, string, string, [string, string][]][] = [
    ["Apolaires aliphatiques", "hydrophobes", C.amber, [["Gly", "G"], ["Ala", "A"], ["Val", "V"], ["Leu", "L"], ["Ile", "I"], ["Met", "M"], ["Pro", "P"]]],
    ["Aromatiques", "absorbent l'UV (280 nm)", C.violet, [["Phe", "F"], ["Tyr", "Y"], ["Trp", "W"]]],
    ["Polaires non chargés", "hydrophiles, liaisons H", C.green, [["Ser", "S"], ["Thr", "T"], ["Cys", "C"], ["Asn", "N"], ["Gln", "Q"]]],
    ["Acides", "chargés −", C.blue, [["Asp", "D"], ["Glu", "E"]]],
    ["Basiques", "chargés +", C.red, [["Lys", "K"], ["Arg", "R"], ["His", "H"]]],
  ];
  let y = 8;
  return (
    <Figure viewBox="0 0 740 430" title="Classification des 20 acides aminés selon la chaîne latérale" caption="Les 20 acides aminés des protéines regroupés par propriétés de leur chaîne latérale R (code à 3 lettres et à 1 lettre)">
      {groups.map(([t, s, c, list]) => {
        const yy = y;
        y += 82;
        return (
          <g key={t} transform={`translate(0 ${yy})`}>
            <rect x={6} y={0} width={728} height={74} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
            <Txt x={110} y={30} bold size={12.5} color={c}>{t}</Txt>
            <Txt x={110} y={48} size={10} color={C.grey}>{s}</Txt>
            {list.map(([a, b], i) => (
              <g key={a}>
                <rect x={216 + i * 72} y={12} width={64} height={50} rx={10} fill={c} fillOpacity={0.85} />
                <Txt x={248 + i * 72} y={34} bold size={15} color="#fff">{a}</Txt>
                <Txt x={248 + i * 72} y={52} size={11} color="#fff">{b}</Txt>
              </g>
            ))}
          </g>
        );
      })}
      <Txt x={370} y={420} size={10.5} color={C.grey}>Cys : formation de ponts disulfure • Pro : cycle, coude dans la chaîne • Gly : plus petit, flexibilité • His : pKa ≈ 6 (tampon)</Txt>
    </Figure>
  );
}

// ─── 3. Liaison peptidique ───────────────────────────────────────────────
export function PeptideBondDiagram() {
  const at = (x: number, y: number, t: string, c: string, r = 14) => (
    <g><circle cx={x} cy={y} r={r} fill={c} stroke="#fff" strokeWidth={1.5} /><Txt x={x} y={y + 4} bold size={11} color="#fff">{t}</Txt></g>
  );
  return (
    <Figure viewBox="0 0 740 420" title="Formation de la liaison peptidique" caption="Réaction de condensation : le COOH d'un acide aminé et le NH₂ du suivant libèrent une molécule d'eau ; la liaison C–N est plane, rigide et trans">
      <Txt x={110} y={24} bold size={12}>Acide aminé 1</Txt><Txt x={340} y={24} bold size={12}>Acide aminé 2</Txt>
      <rect x={20} y={36} width={200} height={70} rx={10} fill={C.blue} fillOpacity={0.12} stroke={C.blue} strokeWidth={2} />
      <Txt x={120} y={64} bold size={14}>H₃N⁺ – CH(R₁) – COO⁻</Txt><Txt x={120} y={86} size={10} color={C.grey}>extrémité C-terminale libre</Txt>
      <Txt x={250} y={78} bold size={24}>+</Txt>
      <rect x={280} y={36} width={200} height={70} rx={10} fill={C.green} fillOpacity={0.12} stroke={C.green} strokeWidth={2} />
      <Txt x={380} y={64} bold size={14}>H₃N⁺ – CH(R₂) – COO⁻</Txt><Txt x={380} y={86} size={10} color={C.grey}>extrémité N-terminale libre</Txt>
      {arrow("M490,70 L560,70")}
      <Txt x={525} y={58} size={10} bold color={C.violet}>− H₂O</Txt>
      <Dot path="M300,110 L300,150 L480,150 L680,150" dur={4} r={9} color={C.blue} label="H₂O" />
      <rect x={570} y={36} width={150} height={70} rx={10} fill={C.violet} fillOpacity={0.12} stroke={C.violet} strokeWidth={2} />
      <Txt x={645} y={64} bold size={13}>Dipeptide</Txt><Txt x={645} y={86} size={10} color={C.grey}>+ H₂O libérée</Txt>

      <line x1={20} y1={172} x2={720} y2={172} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={196} bold size={12.5}>Dipeptide : squelette et plan peptidique</Txt>
      <rect x={228} y={218} width={170} height={110} rx={12} fill={C.amber} fillOpacity={0.15} stroke={C.amber} strokeWidth={2} strokeDasharray="6 4" />
      <path d="M80,300 L140,260 L200,300 L260,260 L320,300 L380,260 L440,300 L500,260 L560,300" fill="none" stroke="currentColor" strokeWidth={4} />
      {at(80, 300, "N", NEG)}{at(140, 260, "Cα", C.grey)}{at(200, 300, "C", C.grey)}{at(260, 260, "N", NEG)}{at(320, 300, "Cα", C.grey)}{at(380, 260, "C", C.grey)}{at(440, 300, "N", NEG)}
      {at(200, 350, "O", RED, 12)}<line x1={200} y1={314} x2={200} y2={338} stroke="currentColor" strokeWidth={3} />
      {at(380, 210, "O", RED, 12)}<line x1={380} y1={246} x2={380} y2={222} stroke="currentColor" strokeWidth={3} />
      {at(260, 212, "H", C.grey, 11)}<line x1={260} y1={246} x2={260} y2={222} stroke="currentColor" strokeWidth={2} />
      <Txt x={313} y={212} size={10} bold color="#a3701a">liaison peptidique C–N</Txt>
      <Txt x={313} y={412} size={10} color={C.grey}>{""}</Txt>
      <Txt x={620} y={230} bold size={11}>Propriétés</Txt>
      {["plane et rigide (résonance)", "configuration trans", "pas de rotation autour de C–N", "rotation φ et ψ autour de Cα"].map((t, i) => <Txt key={t} x={620} y={250 + i * 18} size={10.5}>{t}</Txt>)}
      <Txt x={70} y={392} bold size={11} color={NEG}>N-terminal</Txt><Txt x={560} y={392} bold size={11} color={C.grey}>→ C-terminal</Txt>
      <Txt x={320} y={410} size={10.5} color={C.grey}>la séquence se lit toujours de l'extrémité N-terminale vers l'extrémité C-terminale</Txt>
    </Figure>
  );
}

// ─── 4. Les quatre niveaux de structure ──────────────────────────────────
export function ProteinStructureLevelsDiagram() {
  const panel = (x: number, n: string, t: string, sub: string, c: string, body: React.ReactNode, foot: string) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={6} width={176} height={350} rx={10} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={2} />
      <circle cx={24} cy={30} r={14} fill={c} /><Txt x={24} y={35} bold size={14} color="#fff">{n}</Txt>
      <Txt x={104} y={30} bold size={12} color={c}>{t}</Txt>
      <Txt x={88} y={52} size={10} color={C.grey}>{sub}</Txt>
      {body}
      <Txt x={88} y={336} size={10} bold>{foot}</Txt>
    </g>
  );
  const cols = [C.blue, C.green, C.amber, C.violet, C.red, C.pink, C.blue, C.green, C.amber, C.violet];
  return (
    <Figure viewBox="0 0 740 366" title="Les quatre niveaux d'organisation des protéines" caption="Structure primaire (séquence), secondaire (hélices α, feuillets β), tertiaire (repliement global) et quaternaire (assemblage de sous-unités)">
      {panel(6, "1", "Primaire", "séquence d'acides aminés", C.blue, (
        <>
          <path d="M28,120 C60,90 80,150 100,120 C120,90 140,150 152,180 C140,210 100,200 90,230 C80,260 130,270 148,290" fill="none" stroke={C.grey} strokeWidth={3} />
          {[[28, 120], [60, 104], [92, 132], [116, 112], [144, 150], [150, 188], [120, 208], [92, 230], [104, 264], [148, 290]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11} fill={cols[i]} stroke="#fff" strokeWidth={1.5} />)}
          <Txt x={28} y={100} size={10} bold color={DEEP.blue}>N</Txt><Txt x={148} y={314} size={10} bold color={C.grey}>C</Txt>
        </>
      ), "liaisons peptidiques")}
      {panel(188, "2", "Secondaire", "hélice α et feuillet β", C.green, (
        <>
          <path d="M26,96 q10,-22 20,0 t20,0 t20,0 t20,0 t20,0 M26,120 q10,22 20,0 t20,0 t20,0 t20,0 t20,0" fill="none" stroke={C.green} strokeWidth={5} />
          <Txt x={88} y={148} size={10} bold color={DEEP.green}>hélice α</Txt>
          {[190, 222, 254].map((y, i) => (
            <g key={y}>
              <path d={i % 2 ? `M148,${y} L24,${y}` : `M24,${y} L148,${y}`} stroke={C.amber} strokeWidth={12} strokeLinecap="butt" />
              <path d={i % 2 ? `M24,${y - 12} L4,${y} L24,${y + 12}z` : `M148,${y - 12} L168,${y} L148,${y + 12}z`} fill={C.amber} />
            </g>
          ))}
          <path d="M60,196 v20 M100,196 v20 M60,228 v20 M100,228 v20" stroke="currentColor" strokeWidth={1.4} strokeDasharray="3 2" />
          <Txt x={88} y={290} size={10} bold color={DEEP.amber}>feuillet β</Txt>
        </>
      ), "liaisons H du squelette")}
      {panel(370, "3", "Tertiaire", "repliement d'une chaîne", C.amber, (
        <>
          <path d="M40,130 C30,90 90,84 110,110 C140,100 156,140 140,170 C160,200 130,250 96,246 C70,270 34,250 44,216 C20,190 30,150 40,130z" fill={C.amber} fillOpacity={0.25} stroke={C.amber} strokeWidth={3} />
          <rect x={60} y={130} width={20} height={52} rx={8} fill={C.green} fillOpacity={0.6} transform="rotate(-20 70 156)" />
          <path d="M100,196 l28,-8 l-4,-10 M100,214 l28,-8" stroke={C.amber} strokeWidth={9} />
          <path d="M60,120 L118,232" stroke={C.red} strokeWidth={2.5} strokeDasharray="5 3" />
          <circle cx={60} cy={120} r={5} fill={C.red} /><circle cx={118} cy={232} r={5} fill={C.red} />
          <Txt x={88} y={276} size={9.5} bold color={C.red}>pont disulfure</Txt>
          <Txt x={88} y={294} size={9.5} color={C.grey}>cœur hydrophobe</Txt>
        </>
      ), "chaînes latérales")}
      {panel(552, "4", "Quaternaire", "plusieurs sous-unités", C.violet, (
        <>
          {[[62, 108, C.red], [116, 108, C.blue], [62, 190, C.blue], [116, 190, C.red]].map(([x, y, c], i) => (
            <path key={i} d={`M${Number(x) - 26},${Number(y)} C${Number(x) - 30},${Number(y) - 40} ${Number(x) + 30},${Number(y) - 44} ${Number(x) + 30},${Number(y) - 4} C${Number(x) + 34},${Number(y) + 40} ${Number(x) - 24},${Number(y) + 46} ${Number(x) - 26},${Number(y)}z`} fill={String(c)} fillOpacity={0.5} stroke={String(c)} strokeWidth={3} />
          ))}
          <Txt x={88} y={264} size={10} bold>ex. hémoglobine α₂β₂</Txt>
          <Txt x={88} y={282} size={9.5} color={C.grey}>4 sous-unités + 4 hèmes</Txt>
        </>
      ), "interactions non covalentes")}
    </Figure>
  );
}

// ─── 5. Hélice α et feuillet β ───────────────────────────────────────────
export function SecondaryStructureDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Hélice α et feuillet β : liaisons hydrogène du squelette" caption="Hélice α : 3,6 résidus par tour, liaison H entre C=O du résidu i et N–H du résidu i+4 ; feuillet β : liaisons H entre brins voisins (antiparallèles ou parallèles)">
      <Txt x={190} y={24} bold size={13} color={DEEP.green}>Hélice α</Txt>
      <path d="M100,60 q80,14 160,0 M100,90 q80,-14 160,0 M100,120 q80,14 160,0 M100,150 q80,-14 160,0 M100,180 q80,14 160,0 M100,210 q80,-14 160,0 M100,240 q80,14 160,0" fill="none" stroke={C.green} strokeWidth={9} strokeLinecap="round" opacity={0.85} />
      <path d="M100,90 q80,-14 160,0 M100,150 q80,-14 160,0 M100,210 q80,-14 160,0" fill="none" stroke="#fff" strokeWidth={2} opacity={0.6} />
      {[0, 1, 2].map((k) => <path key={k} d={`M${130 + k * 50},${66 + k * 4} L${130 + k * 50},${146 + k * 4}`} stroke={C.red} strokeWidth={2.2} strokeDasharray="4 3" />)}
      <Txt x={190} y={290} bold size={11}>3,6 résidus par tour • pas 5,4 Å</Txt>
      <Txt x={190} y={308} size={10.5} color={C.grey}>C=O (i) ··· H–N (i+4) : liaisons H intra-chaîne</Txt>
      <Txt x={190} y={326} size={10.5} color={C.grey}>chaînes latérales dirigées vers l'extérieur</Txt>
      <line x1={368} y1={30} x2={368} y2={380} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={555} y={24} bold size={13} color={DEEP.amber}>Feuillet β</Txt>
      <Txt x={555} y={50} size={11} bold>antiparallèle</Txt>
      {[80, 118, 156].map((y, i) => (
        <g key={y}>
          <path d={i % 2 ? `M700,${y} L410,${y}` : `M410,${y} L700,${y}`} stroke={C.amber} strokeWidth={14} />
          <path d={i % 2 ? `M420,${y - 14} L398,${y} L420,${y + 14}z` : `M690,${y - 14} L712,${y} L690,${y + 14}z`} fill={C.amber} />
        </g>
      ))}
      {[470, 540, 610].map((x) => <path key={x} d={`M${x},88 v22 M${x + 20},126 v22`} stroke={C.red} strokeWidth={2.2} strokeDasharray="4 3" />)}
      <Txt x={555} y={196} size={10.5} color={C.grey}>brins en sens opposés : liaisons H rectilignes</Txt>
      <Txt x={555} y={232} size={11} bold>parallèle</Txt>
      {[262, 300].map((y) => (
        <g key={y}>
          <path d={`M410,${y} L700,${y}`} stroke={C.violet} strokeWidth={14} />
          <path d={`M690,${y - 14} L712,${y} L690,${y + 14}z`} fill={C.violet} />
        </g>
      ))}
      {[470, 540, 610].map((x) => <path key={x} d={`M${x},270 v22`} stroke={C.red} strokeWidth={2.2} strokeDasharray="4 3" />)}
      <Txt x={555} y={336} size={10.5} color={C.grey}>brins dans le même sens : liaisons H obliques</Txt>
      <Txt x={555} y={362} size={10.5} bold>chaînes latérales alternées au-dessus et au-dessous du feuillet</Txt>
    </Figure>
  );
}

// ─── 6. Repliement et maladies ───────────────────────────────────────────
export function ProteinFoldingDiagram() {
  const funnel = "M100,60 C150,190 200,240 260,250 C320,258 370,258 420,250";
  return (
    <Figure viewBox="0 0 740 440" title="Repliement des protéines, chaperons et mauvais repliement" caption="La séquence dicte la structure native (expérience d'Anfinsen) ; un mauvais repliement mène à des agrégats (amyloïde, prions)">
      <path d="M60,44 C110,190 190,262 300,272 C380,280 430,272 470,250 L470,296 L60,296z" fill={C.blue} fillOpacity={0.08} />
      <path d="M60,44 C110,190 190,262 300,272 C380,280 430,272 470,250" fill="none" stroke={C.blue} strokeWidth={4} />
      <path d="M470,250 C500,232 520,260 540,300 L470,296" fill="none" stroke={C.red} strokeWidth={4} />
      <Dot path="M80,60 C120,180 190,250 300,264" dur={5} r={9} color={OK} />
      <Dot path="M100,60 C130,150 170,230 250,254 C330,272 420,262 470,246 C500,236 512,262 520,290" dur={6} delay={2} r={9} color={C.red} />
      <Txt x={90} y={30} bold size={11}>Chaîne dépliée</Txt><Txt x={90} y={46} size={9.5} color={C.grey} anchor="start">{""}</Txt>
      <Txt x={90} y={72} size={10} color={C.grey} anchor="start">haute énergie • grande entropie</Txt>
      <Txt x={230} y={216} anchor="start" size={10.5} bold color={C.violet}>globule fondu</Txt>
      <Txt x={300} y={308} bold size={12} color="#2a7a55">État natif : énergie minimale</Txt>
      <Txt x={300} y={324} size={10} color={C.grey}>structure fonctionnelle</Txt>
      <Txt x={520} y={322} bold size={11.5} color={RED}>Agrégats / amyloïde</Txt>
      <Txt x={520} y={338} size={10} color={C.grey}>mauvais repliement</Txt>
      <rect x={180} y={104} width={78} height={40} rx={8} fill={C.amber} fillOpacity={0.2} stroke={C.amber} strokeWidth={2} />
      <Txt x={219} y={121} bold size={10.5}>Chaperons</Txt><Txt x={219} y={135} size={9} color={C.grey}>aident le repliement</Txt>
      <Txt x={620} y={30} bold size={12} color={RED}>Maladies conformationnelles</Txt>
      {[["Prions", "PrPᶜ (hélices α) → PrPˢᶜ (feuillets β)"], ["Alzheimer", "peptide Aβ : plaques amyloïdes"], ["Amyloses", "dépôts fibrillaires de feuillets β"]].map(([t, s], i) => (
        <g key={t}>
          <rect x={548} y={44 + i * 54} width={186} height={46} rx={8} fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={1.8} />
          <Txt x={641} y={62 + i * 54} bold size={11}>{t}</Txt><Txt x={641} y={78 + i * 54} size={9} color={C.grey}>{s}</Txt>
        </g>
      ))}
      <line x1={20} y1={360} x2={720} y2={360} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={382} bold size={12}>Expérience d'Anfinsen (ribonucléase)</Txt>
      {box(30, 394, 150, 36, "RNase native", "active", OK, 11)}
      {arrow("M184,412 L256,412")}
      <Txt x={220} y={390} size={9.5} bold color={RED}>urée + β-mercaptoéthanol</Txt>
      {box(260, 394, 150, 36, "RNase dépliée", "inactive", C.red, 11)}
      {arrow("M414,412 L486,412")}
      <Txt x={450} y={390} size={9.5} bold color="#2a7a55">élimination des agents</Txt>
      {box(490, 394, 150, 36, "RNase native", "activité retrouvée", OK, 11)}
      <Txt x={720} y={436} anchor="end" size={9.5} color={C.grey}>séquence → structure</Txt>
    </Figure>
  );
}

// ─── 7. Hème et fixation de l'oxygène ────────────────────────────────────
export function HemeDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Le groupe hème et la fixation de l'oxygène" caption="L'ion Fe²⁺ est coordonné par 4 azotes de la porphyrine et par l'histidine proximale F8 ; l'O₂ se fixe sur la 6ᵉ position, stabilisé par l'histidine distale E7">
      <rect x={130} y={110} width={180} height={180} rx={34} fill={C.red} fillOpacity={0.12} stroke={DEEP.red} strokeWidth={3} />
      {[[160, 140], [280, 140], [160, 260], [280, 260]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={26} fill={C.red} fillOpacity={0.3} stroke={DEEP.red} strokeWidth={2.5} />)}
      {[[190, 172], [250, 172], [190, 230], [250, 230]].map(([x, y], i) => <g key={i}><line x1={x} y1={y} x2={220} y2={200} stroke={C.blue} strokeWidth={2.5} /><circle cx={x} cy={y} r={9} fill={C.blue} /></g>)}
      <circle cx={220} cy={200} r={20} fill={C.amber} stroke="#fff" strokeWidth={2} /><Txt x={220} y={205} bold size={13} color="#fff">Fe²⁺</Txt>
      <Txt x={20} y={60} bold size={11.5} color={DEEP.red} anchor="start">Hème (protoporphyrine IX + Fe²⁺)</Txt>
      {/* His proximale */}
      <line x1={220} y1={220} x2={220} y2={318} stroke={C.violet} strokeWidth={4} />
      <circle cx={220} cy={330} r={22} fill={C.violet} fillOpacity={0.5} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={220} y={334} bold size={11}>His</Txt>
      <Txt x={220} y={372} bold size={11} color={DEEP.violet}>histidine proximale F8</Txt>
      {/* O2 */}
      <line x1={220} y1={180} x2={236} y2={132} stroke="currentColor" strokeWidth={2.5} />
      <circle cx={236} cy={120} r={13} fill={RED} /><circle cx={262} cy={104} r={13} fill={RED} /><Txt x={268} y={84} bold size={12} color={RED}>O₂</Txt>
      <circle cx={320} cy={70} r={20} fill={C.green} fillOpacity={0.5} stroke={DEEP.green} strokeWidth={2.5} /><Txt x={320} y={74} bold size={10}>His</Txt>
      <path d="M302,80 L272,96" stroke={C.green} strokeWidth={2} strokeDasharray="4 3" />
      <Txt x={356} y={62} anchor="start" bold size={10.5} color={DEEP.green}>histidine distale E7</Txt>
      <Txt x={356} y={78} anchor="start" size={9.5} color={C.grey}>stabilise O₂, limite CO</Txt>
      <line x1={400} y1={30} x2={400} y2={380} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={570} y={34} bold size={13}>Points clés</Txt>
      {[["Oxygénation, pas oxydation", "Fe²⁺ reste Fe²⁺ : réaction réversible", C.blue], ["Coordination du fer", "4 N de la porphyrine + His F8 (+ O₂)", C.amber], ["Fe³⁺ = méthémoglobine", "ne fixe plus l'oxygène", RED], ["CO et affinité", "CO se fixe ≈ 200 fois mieux que O₂", C.violet]].map(([t, s, c], i) => (
        <g key={t}>
          <rect x={420} y={54 + i * 76} width={310} height={64} rx={10} fill={c} fillOpacity={0.09} stroke={c} strokeWidth={1.8} />
          <Txt x={575} y={80 + i * 76} bold size={12} color={c}>{t}</Txt><Txt x={575} y={100 + i * 76} size={10.5}>{s}</Txt>
        </g>
      ))}
      <Txt x={575} y={372} size={10} color={C.grey}>1 g d'Hb transporte 1,34 mL d'O₂ — 4 hèmes par hémoglobine</Txt>
    </Figure>
  );
}

// ─── 8. Coopérativité de l'hémoglobine ───────────────────────────────────
export function HbCooperativityDiagram() {
  const X = (p: number) => 70 + (p / 100) * 320;
  const Y = (y: number) => 300 - y * 240;
  const hb = (p: number) => Math.pow(p, 2.8) / (Math.pow(26, 2.8) + Math.pow(p, 2.8));
  const mb = (p: number) => p / (p + 2.8);
  return (
    <Figure viewBox="0 0 740 400" title="Fixation coopérative de l'oxygène par l'hémoglobine" caption="La myoglobine a une courbe hyperbolique ; l'hémoglobine une courbe sigmoïde (coopérativité) : la fixation d'O₂ fait passer les sous-unités de l'état T (tendu) à l'état R (relâché)">
      <Axes x={70} y={60} w={320} h={240} xl="PO₂ (mmHg)" yl="Saturation en O₂" />
      {[0, 0.5, 1].map((v) => <g key={v}><line x1={64} y1={Y(v)} x2={70} y2={Y(v)} stroke="currentColor" /><Txt x={58} y={Y(v) + 4} anchor="end" size={10}>{`${v * 100} %`}</Txt></g>)}
      {[0, 20, 40, 60, 80, 100].map((v) => <g key={v}><line x1={X(v)} y1={300} x2={X(v)} y2={306} stroke="currentColor" /><Txt x={X(v)} y={320} size={10}>{String(v)}</Txt></g>)}
      <line x1={70} y1={Y(0.5)} x2={X(26)} y2={Y(0.5)} stroke="currentColor" strokeOpacity={0.4} strokeDasharray="4 3" />
      <line x1={X(26)} y1={Y(0.5)} x2={X(26)} y2={300} stroke="currentColor" strokeOpacity={0.4} strokeDasharray="4 3" />
      <Txt x={X(26)} y={288} size={10} bold color={C.red} anchor="start">{""}</Txt>
      <path d={fnPath(mb, 0, 100, 60, X, Y)} fill="none" stroke={C.blue} strokeWidth={3.5} />
      <path d={fnPath(hb, 0, 100, 60, X, Y)} fill="none" stroke={RED} strokeWidth={4} />
      <Dot path={fnPath(hb, 0, 100, 60, X, Y)} dur={6} r={6} color="#a02030" />
      <Txt x={X(14)} y={Y(1) - 14} bold size={11} color={C.blue} anchor="start">Myoglobine (hyperbole)</Txt><Txt x={X(14)} y={Y(1) + 0} size={10} color={C.grey} anchor="start">P50 ≈ 2,8 mmHg</Txt>
      <Txt x={X(58)} y={Y(0.38)} bold size={11} color={RED} anchor="start">Hémoglobine (sigmoïde)</Txt><Txt x={X(58)} y={Y(0.38) + 14} size={10} color={C.grey} anchor="start">P50 ≈ 26 mmHg</Txt>
      <line x1={420} y1={30} x2={420} y2={380} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={580} y={30} bold size={13}>Transition T → R</Txt>
      {[["État T (tendu)", "faible affinité pour O₂", 0, C.blue], ["État R (relâché)", "forte affinité pour O₂", 4, RED]].map(([t, s, n, c], i) => (
        <g key={String(t)} transform={`translate(${i ? 578 : 430} 60)`}>
          <rect x={0} y={0} width={140} height={150} rx={10} fill={String(c)} fillOpacity={0.08} stroke={String(c)} strokeWidth={2} />
          <Txt x={70} y={20} bold size={11.5} color={String(c)}>{String(t)}</Txt>
          {[[34, 56], [104, 56], [34, 106], [104, 106]].map(([x, y], k) => (
            <g key={k}>
              <circle cx={x} cy={y} r={i ? 24 : 20} fill={String(c)} fillOpacity={0.35} stroke={String(c)} strokeWidth={2.5} />
              <circle cx={x} cy={y} r={5} fill={C.amber} />
              {Number(n) > 0 && <circle cx={x + 11} cy={y - 11} r={5} fill={RED} className="fig-pulse" />}
            </g>
          ))}
          <Txt x={70} y={142} size={9.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      {arrow("M572,130 L586,130")}
      {["1ᵉʳ O₂ : difficile", "2ᵉ, 3ᵉ : plus facile", "4ᵉ : très facile"].map((t, i) => <Txt key={t} x={580} y={240 + i * 18} size={10.5}>{t}</Txt>)}
      <Txt x={580} y={310} size={10.5} bold color="#a02030">chaque O₂ fixé augmente l'affinité des sous-unités voisines</Txt>
      <Txt x={580} y={332} size={10} color={C.grey}>effet allostérique : libération facile dans les tissus (PO₂ ≈ 40)</Txt>
    </Figure>
  );
}

// ─── 9. Effet Bohr ───────────────────────────────────────────────────────
export function BohrEffectDiagram() {
  const X = (p: number) => 70 + (p / 100) * 330;
  const Y = (y: number) => 300 - y * 240;
  const f = (p50: number) => (p: number) => Math.pow(p, 2.8) / (Math.pow(p50, 2.8) + Math.pow(p, 2.8));
  const norm = f(26), right = f(35), left = f(20);
  return (
    <Figure viewBox="0 0 740 400" title="Effet Bohr : H⁺, CO₂ et 2,3-BPG favorisent la libération d'O₂" caption="Le déplacement de la courbe vers la droite (↓ pH, ↑ CO₂, ↑ 2,3-BPG, ↑ température) diminue l'affinité de l'hémoglobine et facilite la libération d'O₂ dans les tissus">
      <Axes x={70} y={60} w={330} h={240} xl="PO₂ (mmHg)" yl="Saturation en O₂" />
      {[0, 0.5, 1].map((v) => <g key={v}><line x1={64} y1={Y(v)} x2={70} y2={Y(v)} stroke="currentColor" /><Txt x={58} y={Y(v) + 4} anchor="end" size={10}>{`${v * 100}`}</Txt></g>)}
      {[0, 20, 40, 60, 80, 100].map((v) => <g key={v}><line x1={X(v)} y1={300} x2={X(v)} y2={306} stroke="currentColor" /><Txt x={X(v)} y={320} size={10}>{String(v)}</Txt></g>)}
      <rect x={X(35)} y={56} width={X(45) - X(35)} height={244} fill={C.blue} fillOpacity={0.1} />
      <rect x={X(95)} y={56} width={X(105) - X(95)} height={244} fill={C.amber} fillOpacity={0.12} />
      <Txt x={X(40)} y={52} size={10} bold color={C.blue}>tissus</Txt><Txt x={X(100)} y={52} size={10} bold color="#a3701a">poumons</Txt>
      <path d={fnPath(left, 0, 100, 60, X, Y)} fill="none" stroke={C.green} strokeWidth={3} strokeDasharray="6 4" />
      <path d={fnPath(norm, 0, 100, 60, X, Y)} fill="none" stroke={RED} strokeWidth={4} />
      <path d={fnPath(right, 0, 100, 60, X, Y)} fill="none" stroke={C.violet} strokeWidth={3.5} />
      <Txt x={X(62)} y={Y(0.28) + 24} bold size={10.5} color="#6a45b0" anchor="start">déplacement à droite</Txt><Txt x={X(62)} y={Y(0.28) + 38} size={9.5} color={C.grey} anchor="start">P50 ≈ 35 (↓ pH, ↑ CO₂, ↑ 2,3-BPG)</Txt>
      <Txt x={X(44)} y={Y(0.62)} bold size={10.5} color={RED} anchor="end">normale P50 ≈ 26</Txt>
      <Txt x={X(4)} y={Y(0.9)} bold size={10.5} color="#2a7a55" anchor="start">à gauche P50 ≈ 20 (↑ pH, ↓ CO₂, HbF)</Txt>
      {[[40, norm(40), RED], [40, right(40), "#6a45b0"]].map(([p, y, c], i) => <circle key={i} cx={X(Number(p))} cy={Y(Number(y))} r={5} fill={String(c)} />)}
      <line x1={420} y1={30} x2={420} y2={380} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={580} y={30} bold size={13}>Échanges gazeux</Txt>
      <rect x={436} y={48} width={290} height={150} rx={10} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} />
      <Txt x={581} y={70} bold size={12} color={DEEP.blue}>Tissus (↑ CO₂, ↓ pH)</Txt>
      {[0, 1, 2].map((d) => <Dot key={d} path="M470,104 L690,104" dur={3} delay={d} r={7} color={RED} label="O₂" />)}
      <Txt x={581} y={140} size={10.5}>H⁺ et CO₂ se lient à l'Hb → état T</Txt>
      <Txt x={581} y={158} size={10.5} bold>→ libération d'O₂</Txt>
      <Txt x={581} y={180} size={9.5} color={C.grey}>flèche : de l'Hb vers les tissus</Txt>
      <rect x={436} y={210} width={290} height={150} rx={10} fill={C.amber} fillOpacity={0.09} stroke={C.amber} strokeWidth={2} />
      <Txt x={581} y={232} bold size={12} color="#a3701a">Poumons (↓ CO₂, ↑ pH)</Txt>
      {[0, 1, 2].map((d) => <Dot key={d} path="M690,266 L470,266" dur={3} delay={d} r={7} color={RED} label="O₂" />)}
      <Txt x={581} y={302} size={10.5}>H⁺ et CO₂ libérés → état R</Txt>
      <Txt x={581} y={320} size={10.5} bold>→ fixation d'O₂</Txt>
      <Txt x={581} y={342} size={9.5} color={C.grey}>flèche : de l'air alvéolaire vers l'Hb</Txt>
    </Figure>
  );
}

// ─── 10. Drépanocytose ───────────────────────────────────────────────────
export function SickleCellDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Drépanocytose : mutation de l'hémoglobine β et polymérisation" caption="La substitution Glu6 → Val6 de la chaîne β crée une zone hydrophobe : l'HbS désoxygénée polymérise en fibres qui déforment le globule rouge">
      <Txt x={190} y={26} bold size={13} color={OK}>Hémoglobine normale (HbA)</Txt>
      <Txt x={550} y={26} bold size={13} color={RED}>Hémoglobine S (HbS)</Txt>
      {[[190, C.green, "Glu", "hydrophile (chargé −)"], [550, C.red, "Val", "hydrophobe"]].map(([x, c, aa, t]) => (
        <g key={String(aa)}>
          <path d={`M${Number(x) - 90},130 C${Number(x) - 100},60 ${Number(x) + 60},48 ${Number(x) + 80},110 C${Number(x) + 100},180 ${Number(x) - 70},200 ${Number(x) - 90},130z`} fill={String(c)} fillOpacity={0.2} stroke={String(c)} strokeWidth={3} />
          <circle cx={Number(x) + 40} cy={100} r={18} fill={String(c)} fillOpacity={0.85} /><Txt x={Number(x) + 40} y={105} bold size={11} color="#fff">{String(aa)}</Txt>
          <Txt x={Number(x)} y={222} bold size={11}>{`β6 : ${aa}`}</Txt><Txt x={Number(x)} y={238} size={10} color={C.grey}>{String(t)}</Txt>
        </g>
      ))}
      {arrow("M300,128 L400,128")}
      <Txt x={350} y={116} size={10} bold color={RED}>mutation ponctuelle</Txt>
      <line x1={20} y1={258} x2={720} y2={258} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <ellipse cx={130} cy={330} rx={62} ry={44} fill={C.red} fillOpacity={0.6} stroke="#8f2530" strokeWidth={3} /><ellipse cx={130} cy={330} rx={26} ry={18} fill="#fff" fillOpacity={0.5} />
      <Txt x={130} y={392} bold size={11} color={OK}>globule biconcave, déformable</Txt>
      {arrow("M214,330 L290,330")}
      <Txt x={252} y={316} size={9.5} bold color={RED}>désoxygénation</Txt>
      <g transform="translate(300 290)">
        <ellipse cx={100} cy={40} rx={90} ry={34} fill={C.red} fillOpacity={0.15} stroke="#8f2530" strokeWidth={2} strokeDasharray="4 3" />
        {[14, 30, 46, 62].map((y) => <path key={y} d={`M22,${y} L178,${y}`} stroke={C.violet} strokeWidth={5} strokeLinecap="round" />)}
        <Txt x={100} y={100} size={10.5} bold color="#6a45b0">fibres de polymères d'HbS</Txt>
      </g>
      {arrow("M508,330 L580,330")}
      <path d="M600,306 C640,270 700,300 720,340 C690,330 650,336 620,356 C600,346 596,326 600,306z" fill={C.red} fillOpacity={0.75} stroke="#8f2530" strokeWidth={3} />
      <Txt x={650} y={392} bold size={11} color={RED}>globule en faucille</Txt>
      <Txt x={520} y={270} anchor="start" size={10.5} bold>Conséquences</Txt>
      <Txt x={520} y={286} anchor="start" size={10} color={C.grey}>vaso-occlusion, douleur</Txt>
      <Txt x={520} y={300} anchor="start" size={10} color={C.grey}>hémolyse (anémie)</Txt>
    </Figure>
  );
}

