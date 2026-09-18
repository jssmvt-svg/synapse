import type { ReactNode } from "react";
import { Figure, C, Txt, Dot, Seq } from "./Figure";

// Physiologie générale — Lecture 2 : récepteurs, signalisation, régulation.

const MEM = "#e0a030";
const G = "#2a7a55";

function Band({ x = 0, w, y = 0, h = 22 }: { x?: number; w: number; y?: number; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} fill={MEM} fillOpacity={0.35} stroke={MEM} />;
}

function Box({ x, y, w, h, t, sub, color, size = 12 }: { x: number; y: number; w: number; h: number; t: string; sub?: string; color: string; size?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={color} fillOpacity={0.16} stroke={color} strokeWidth={1.8} />
      <Txt x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} bold size={size}>{t}</Txt>
      {sub && <Txt x={x + w / 2} y={y + h / 2 + 13} size={size - 2} color={C.grey}>{sub}</Txt>}
    </g>
  );
}

const arrow = (d: string, flow = true) => (
  <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={flow ? "fig-flow" : undefined} markerEnd="url(#fig-arrow)" />
);

// ─── 1. Trois grandes familles de récepteurs ─────────────────────────────
export function ReceptorTypesDiagram() {
  const col = (x: number, title: string, sub: string, color: string, children: ReactNode, foot: string[]) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={6} width={230} height={330} rx={10} fill={color} fillOpacity={0.06} stroke={color} strokeOpacity={0.5} />
      <Txt x={115} y={28} bold size={13} color={color}>{title}</Txt>
      <Txt x={115} y={43} size={10} color={C.grey}>{sub}</Txt>
      {children}
      {foot.map((f, i) => <Txt key={f} x={115} y={272 + i * 15} size={10}>{f}</Txt>)}
    </g>
  );
  return (
    <Figure viewBox="0 0 720 345" title="Les trois classes de récepteurs membranaires" caption="Récepteurs-canaux, récepteurs catalytiques et récepteurs couplés aux protéines G (RCPG)">
      {col(5, "Récepteur-canal ionique", "effet direct, très rapide", C.green, (
        <>
          <Txt x={115} y={64} size={9.5} color={C.grey}>extérieur</Txt>
          <Band x={1} w={228} y={120} />
          <rect x={78} y={108} width={26} height={70} rx={9} fill={C.green} fillOpacity={0.6} />
          <rect x={126} y={108} width={26} height={70} rx={9} fill={C.green} fillOpacity={0.6} />
          <circle cx={115} cy={84} r={8} fill={C.red} className="fig-pulse" />
          <Txt x={115} y={100} size={9} color={C.red} bold>ACh</Txt>
          {[0, 1.2].map((d) => <Dot key={d} path="M115,70 L115,220" dur={2.6} delay={d} r={4.5} color={C.amber} label="Na" />)}
          <Txt x={115} y={236} size={9.5} color={C.grey}>cytoplasme</Txt>
        </>
      ), ["Ex. récepteur nicotinique", "→ influx de Na⁺ : dépolarisation"])}
      {col(245, "Récepteur catalytique", "activité enzymatique (tyrosine kinase)", C.blue, (
        <>
          <Band x={1} w={228} y={120} />
          <rect x={72} y={92} width={34} height={90} rx={9} fill={C.blue} fillOpacity={0.55} />
          <rect x={124} y={92} width={34} height={90} rx={9} fill={C.blue} fillOpacity={0.55} />
          <circle cx={115} cy={78} r={9} fill={C.red} className="fig-pulse" />
          <Txt x={115} y={60} size={9.5} color={C.red} bold>insuline</Txt>
          {[89, 141].map((x) => <rect key={x} x={x - 12} y={190} width={24} height={16} rx={5} fill={C.amber} fillOpacity={0.7} />)}
          {[89, 141].map((x, i) => <g key={x} className="fig-pulse"><circle cx={x} cy={222} r={8} fill={C.violet} /><Txt x={x} y={226} size={9} color="#fff" bold>P</Txt></g>)}
          <Txt x={115} y={246} size={9.5} color={C.grey}>autophosphorylation</Txt>
        </>
      ), ["Ligand : facteur de croissance,", "hormone (insuline) → dimérisation"])}
      {col(485, "Récepteur couplé à une protéine G", "RCPG — effet indirect, amplifié", C.violet, (
        <>
          <Band x={1} w={228} y={120} />
          <path d="M60,108 q10,-6 20,0 v50 q-10,6 -20,0z M84,108 q10,-6 20,0 v50 q-10,6 -20,0z M108,108 q10,-6 20,0 v50 q-10,6 -20,0z" fill={C.violet} fillOpacity={0.55} />
          <circle cx={90} cy={80} r={8} fill={C.red} className="fig-pulse" />
          <Txt x={90} y={62} size={9.5} color={C.red} bold>NA</Txt>
          <circle cx={78} cy={180} r={12} fill={C.violet} fillOpacity={0.6} /><Txt x={78} y={184} size={10} bold>α</Txt>
          <ellipse cx={112} cy={182} rx={16} ry={11} fill={C.blue} fillOpacity={0.6} /><Txt x={112} y={186} size={10} bold>βγ</Txt>
          <rect x={150} y={110} width={64} height={54} rx={8} fill={C.amber} fillOpacity={0.5} stroke={C.amber} strokeWidth={2} />
          <Txt x={182} y={134} size={9.5} bold>Effecteur</Txt><Txt x={182} y={148} size={9}>(enzyme / canal)</Txt>
          {arrow("M92,196 Q150,226 184,170")}
          <Txt x={165} y={232} size={9.5} color={C.grey}>→ messager (cAMP…)</Txt>
        </>
      ), ["Ex. β1-adrénergique → Gs", "→ adénylate cyclase → AMPc"])}
    </Figure>
  );
}

// ─── 2. Interaction ligand-récepteur (animée) ────────────────────────────
export function LigandReceptorDiagram() {
  const panel = (x: number, title: string, sub: string, pct: number, color: string, kind: "agonist" | "partial" | "comp" | "allo") => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={6} width={172} height={356} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.18} />
      <Txt x={86} y={26} bold size={12} color={color}>{title}</Txt>
      <Txt x={86} y={40} size={9.5} color={C.grey}>{sub}</Txt>
      <Band x={1} w={170} y={150} />
      {/* récepteur en cuvette */}
      <path d="M50,150 v-32 q0,-14 14,-14 h0 q6,16 22,16 q16,0 22,-16 h0 q14,0 14,14 v32 z" fill={C.violet} fillOpacity={0.55} stroke="#6a45b0" strokeWidth={2} transform={kind === "allo" ? "rotate(0)" : undefined} />
      <rect x={66} y={172} width={40} height={40} rx={12} fill={C.violet} fillOpacity={0.35} />
      {kind === "allo" && <path d="M36,124 l14,-10 v40 l-14,-6z" fill={C.amber} stroke="#a3701a" strokeWidth={2} />}
      {/* ligand */}
      {kind === "agonist" && <Dot path="M86,64 C60,80 76,100 86,118" dur={3} r={9} color={C.green} />}
      {kind === "partial" && <Dot path="M86,64 C60,80 76,100 86,118" dur={3} r={9} color={C.amber} />}
      {kind === "comp" && (
        <>
          <circle cx={86} cy={120} r={9} fill={C.red} stroke="#a02030" strokeWidth={2} />
          <Dot path="M150,60 C140,90 110,80 100,100" dur={3} delay={0.5} r={9} color={C.green} />
          <Txt x={126} y={64} size={9} color={C.green} bold>agoniste</Txt>
        </>
      )}
      {kind === "allo" && <Dot path="M86,64 C60,80 76,100 86,118" dur={3} r={9} color={C.green} />}
      {/* réponse */}
      <Txt x={86} y={244} size={10} bold>Réponse cellulaire</Txt>
      <rect x={20} y={254} width={132} height={16} rx={6} fill="none" stroke="currentColor" strokeOpacity={0.4} />
      <rect x={20} y={254} width={Math.max(pct * 1.32, 1)} height={16} rx={6} fill={color} className="fig-pulse" />
      <Txt x={86} y={288} bold size={13} color={color}>{`${pct === 0 ? "0 %" : pct === 30 ? "10-40 %" : "80-100 %"}`}</Txt>
      <Txt x={86} y={308} size={10} color={C.grey}>{kind === "agonist" ? "change la conformation" : kind === "partial" ? "réponse limitée" : kind === "comp" ? "occupe le site : pas de complexe" : "autre site : modifie la forme"}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 720 372" title="Interaction ligand-récepteur : agoniste, agoniste partiel, antagoniste" caption="Le ligand (jaune/vert) se fixe au récepteur : selon sa nature, la réponse cellulaire est complète, partielle ou nulle">
      {panel(5, "Agoniste", "ligand naturel ou mimétique", 100, C.green, "agonist")}
      {panel(185, "Agoniste partiel", "effet maximal réduit", 30, C.amber, "partial")}
      {panel(365, "Antagoniste compétitif", "empêche la liaison", 0, C.red, "comp")}
      {panel(545, "Antagoniste allostérique", "modifie la configuration", 0, C.violet, "allo")}
    </Figure>
  );
}

// ─── 3. Cycle des protéines G (animé) ────────────────────────────────────
export function GProteinCycleDiagram() {
  const steps = [
    { t: "1. Repos", s: "Gα liée au GDP, associée à βγ", ligand: false, split: false, eff: false },
    { t: "2. Liaison du ligand", s: "changement de conformation du RCPG", ligand: true, split: false, eff: false },
    { t: "3. Échange GDP → GTP", s: "α-GTP se dissocie de βγ", ligand: true, split: true, eff: false },
    { t: "4. Activation de l'effecteur", s: "enzyme ou canal (K⁺, Ca²⁺)", ligand: true, split: true, eff: true },
    { t: "5. Hydrolyse du GTP", s: "α-GDP se réassocie à βγ", ligand: false, split: false, eff: false },
  ];
  return (
    <Figure viewBox="0 0 740 330" title="Cycle d'activation de la protéine G" caption="Cycle de la protéine G : chaque étape s'illumine à tour de rôle (α : sous-unité GTPase ; βγ : complexe)">
      {steps.map((st, i) => (
        <Seq key={st.t} i={i} n={5}>
          <g transform={`translate(${6 + i * 146} 0)`}>
            <rect x={0} y={6} width={138} height={296} rx={10} fill={C.violet} fillOpacity={0.06} stroke={C.violet} strokeOpacity={0.5} />
            <Txt x={69} y={26} bold size={11}>{st.t}</Txt>
            <Band x={1} w={136} y={116} h={18} />
            <path d="M40,116 q6,-5 12,0 v34 q-6,5 -12,0z M54,116 q6,-5 12,0 v34 q-6,5 -12,0z M68,116 q6,-5 12,0 v34 q-6,5 -12,0z" fill={C.violet} fillOpacity={0.6} />
            {st.ligand && <circle cx={58} cy={92} r={8} fill={C.red} />}
            {!st.ligand && i === 0 && <circle cx={100} cy={70} r={8} fill={C.red} opacity={0.4} />}
            {/* α et βγ */}
            <circle cx={st.split ? 24 : 46} cy={st.split ? 190 : 170} r={13} fill={C.violet} fillOpacity={0.75} stroke="#6a45b0" strokeWidth={2} />
            <Txt x={st.split ? 24 : 46} y={st.split ? 194 : 174} size={10} color="#fff" bold>α</Txt>
            <Txt x={st.split ? 24 : 46} y={st.split ? 212 : 194} size={9} color={st.split ? C.green : C.grey} bold>{st.split ? "GTP" : "GDP"}</Txt>
            <ellipse cx={st.split ? 116 : 76} cy={170} rx={17} ry={11} fill={C.blue} fillOpacity={0.7} stroke="#2f56b8" strokeWidth={2} />
            <Txt x={st.split ? 116 : 76} y={174} size={10} color="#fff" bold>βγ</Txt>
            {st.eff && (
              <>
                <rect x={10} y={224} width={118} height={26} rx={8} fill={C.amber} fillOpacity={0.6} stroke={C.amber} strokeWidth={2} />
                <Txt x={69} y={241} size={10} bold>effecteur → réponse</Txt>
              </>
            )}
            <Txt x={69} y={272} size={9.5} color={C.grey}>{st.s.slice(0, 26)}</Txt>
            {st.s.length > 26 && <Txt x={69} y={285} size={9.5} color={C.grey}>{st.s.slice(26).trim()}</Txt>}
          </g>
        </Seq>
      ))}
      {[0, 1, 2, 3].map((i) => <path key={i} d={`M${144 + i * 146},150 h6`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />)}
      <path d="M700,306 Q700,322 366,322 Q34,322 34,306" fill="none" stroke={C.violet} strokeWidth={2} strokeDasharray="6 4" className="fig-flow" markerEnd="url(#fig-arrow)" />
    </Figure>
  );
}

// ─── 4. Gs, Gi, Gq ───────────────────────────────────────────────────────
export function GProteinTypesDiagram() {
  const col = (x: number, name: string, color: string, rec: string, eff: string, effUp: string, m2: string, res: string[], up: boolean) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={6} width={230} height={350} rx={10} fill={color} fillOpacity={0.06} stroke={color} strokeOpacity={0.5} />
      <Txt x={115} y={30} bold size={16} color={color}>{name}</Txt>
      <Box x={25} y={44} w={180} h={36} t={rec} color={C.grey} size={11} />
      {arrow("M115,82 L115,102")}
      <Box x={25} y={104} w={180} h={40} t={eff} sub={effUp} color={color} size={11} />
      {arrow("M115,146 L115,166")}
      <Box x={25} y={168} w={180} h={40} t={m2} color={C.amber} size={11} />
      {arrow("M115,210 L115,230")}
      <Box x={25} y={232} w={180} h={36} t={up ? "Protéine kinase active" : "Kinase inhibée / K⁺ sort"} color={C.violet} size={11} />
      <Txt x={115} y={292} size={10.5} bold color={color}>Effet</Txt>
      {res.map((r, i) => <Txt key={r} x={115} y={308 + i * 14} size={10}>{r}</Txt>)}
    </g>
  );
  return (
    <Figure viewBox="0 0 720 366" title="Protéines G : Gs, Gi, Gq et leurs effets" caption="Selon la sous-unité α : Gs stimule, Gi inhibe l'adénylate cyclase, Gq active la phospholipase C">
      {col(5, "Gs", C.green, "β1-adrénergique", "Adénylate cyclase ↑", "ATP → AMPc", "↑ AMPc", ["cœur : ↑ fréquence et force", "(noradrénaline / adrénaline)"], true)}
      {col(245, "Gi", C.red, "M2-cholinergique", "Adénylate cyclase ↓", "moins d'AMPc", "↓ AMPc", ["cœur : ↓ fréquence (ACh)", "efflux de K⁺ (hyperpolarisation)"], false)}
      {col(485, "Gq", C.violet, "α1-adrénergique, M1 / M3", "Phospholipase C ↑", "PIP₂ → IP₃ + DAG", "↑ Ca²⁺ (IP₃) et PKC (DAG)", ["muscle lisse vasculaire : contraction", "glandes exocrines : sécrétion"], true)}
    </Figure>
  );
}

// ─── 5. Cascade de signalisation et amplification ────────────────────────
export function SignalCascadeDiagram() {
  const stages = [
    { x: 8, t: "Messager primaire", s: "ordre I :|neurotransmetteur, hormone", c: C.red, n: 1, amp: "" },
    { x: 152, t: "Récepteur membranaire", s: "reçoit, amplifie|et module", c: C.blue, n: 4, amp: "× 10" },
    { x: 296, t: "Messager secondaire", s: "ordre II :|AMPc, GMPc, IP₃, Ca²⁺", c: C.violet, n: 8, amp: "" },
    { x: 440, t: "Messager tertiaire", s: "ordre III :|protéine kinase", c: C.amber, n: 14, amp: "× 100 – 1000" },
    { x: 584, t: "Réponse cellulaire", s: "contraction, sécrétion,|transcription", c: C.green, n: 22, amp: "" },
  ];
  return (
    <Figure viewBox="0 0 730 250" title="Cascade de signalisation intracellulaire et amplification" caption="L'information est amplifiée à chaque niveau : ×10 au récepteur, ×100 à ×1000 par la masse critique de protéines activées">
      {stages.map((st, i) => (
        <g key={st.t}>
          <rect x={st.x} y={20} width={138} height={150} rx={10} fill={st.c} fillOpacity={0.1} stroke={st.c} strokeWidth={2} />
          <Txt x={st.x + 69} y={40} bold size={11}>{st.t}</Txt>
          <Txt x={st.x + 69} y={54} size={9} color={C.grey}>{st.s.split("|")[0]}</Txt>
          <Txt x={st.x + 69} y={66} size={9} color={C.grey}>{st.s.split("|")[1] ?? ""}</Txt>
          {Array.from({ length: st.n }).map((_, k) => (
            <circle key={k} cx={st.x + 22 + (k % 6) * 19} cy={92 + Math.floor(k / 6) * 19} r={6} fill={st.c} fillOpacity={0.8} className={k % 3 === 0 ? "fig-pulse" : undefined} />
          ))}
          {i < 4 && arrow(`M${st.x + 140},96 L${st.x + 152 + 0},96`, false)}
          {st.amp && <Txt x={st.x + 80} y={196} bold size={12} color={st.c}>{st.amp}</Txt>}
        </g>
      ))}
      <Txt x={365} y={226} size={11} color={C.grey}>Chaque point représente une molécule activée : leur nombre augmente le long de la cascade</Txt>
    </Figure>
  );
}

// ─── 6. Rétroaction négative et positive ─────────────────────────────────
export function FeedbackDiagram() {
  const loop = (x: number, title: string, color: string, boxes: string[], foot: string) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={6} width={350} height={330} rx={10} fill={color} fillOpacity={0.05} stroke={color} strokeOpacity={0.5} />
      <Txt x={175} y={30} bold size={14} color={color}>{title}</Txt>
      <Box x={110} y={46} w={130} h={40} t={boxes[0]} color={C.grey} size={11} />
      {arrow("M240,66 L296,66 L296,120", true)}
      <Box x={226} y={124} w={112} h={44} t={boxes[1]} sub="détecte" color={C.blue} size={11} />
      {arrow("M282,170 L282,206", true)}
      <Box x={226} y={210} w={112} h={44} t={boxes[2]} sub="compare" color={C.violet} size={11} />
      {arrow("M226,232 L120,232", true)}
      <Box x={8} y={210} w={110} h={44} t={boxes[3]} sub="exécute" color={C.green} size={11} />
      {arrow("M62,208 L62,110 L108,70", true)}
      <Txt x={175} y={290} size={10.5} bold color={color}>{foot}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 720 346" title="Rétroaction négative et positive" caption="Circuit de rétroaction : récepteur → centre de contrôle → effecteur ; la réponse s'oppose (négative) ou amplifie (positive) le changement initial">
      {loop(5, "Rétroaction négative", C.green, ["↑ pression artérielle", "Barorécepteurs", "Centre bulbaire", "Cœur, vaisseaux"], "réponse opposée : ↓ PA → stabilisation")}
      {loop(365, "Rétroaction positive", C.red, ["Hémorragie : ↓ PA", "Récepteurs", "Centre de contrôle", "Cœur (ischémie)"], "réponse amplifiée : ↓ débit → ↓ PA (choc)")}
      <text x={360} y={338} textAnchor="middle" fontSize={10} fill={C.grey}>Homéostasie : point de consigne maintenu par les boucles négatives</text>
    </Figure>
  );
}

// ─── 7. Arc réflexe ──────────────────────────────────────────────────────
export function ReflexArcDiagram() {
  const num = (x: number, y: number, n: number, c: string) => (
    <g><circle cx={x} cy={y} r={11} fill={c} /><Txt x={x} y={y + 4} size={12} bold color="#fff">{String(n)}</Txt></g>
  );
  return (
    <Figure viewBox="0 0 720 340" title="Arc réflexe à 5 éléments" caption="Arc réflexe somatique : 1 récepteur, 2 voie afférente, 3 centre nerveux, 4 voie efférente, 5 effecteur">
      {/* moelle */}
      <circle cx={360} cy={140} r={78} fill={C.grey} fillOpacity={0.12} stroke={C.grey} strokeWidth={2} />
      <path d="M360,140 c-10,-40 -50,-50 -50,-20 c0,20 30,20 50,20 c20,0 50,0 50,-20 c0,-30 -40,-20 -50,20z" fill={C.violet} fillOpacity={0.3} stroke={C.violet} />
      <path d="M360,140 c-10,40 -50,52 -50,22 c0,-20 30,-20 50,-20 c20,0 50,0 50,20 c0,30 -40,18 -50,-22z" fill={C.violet} fillOpacity={0.3} stroke={C.violet} />
      <Txt x={360} y={240} bold size={11}>Moelle épinière</Txt>
      {/* récepteur */}
      <circle cx={70} cy={70} r={26} fill={C.amber} fillOpacity={0.4} stroke={C.amber} strokeWidth={2} />
      <path d="M60,80 l10,-20 l10,20" fill="none" stroke="#a3701a" strokeWidth={2} />
      {/* voie afférente */}
      <path d="M96,72 C170,60 220,110 282,92 L340,116" fill="none" stroke={C.blue} strokeWidth={5} strokeLinecap="round" />
      <circle cx={210} cy={88} r={12} fill={C.blue} fillOpacity={0.6} /><Txt x={210} y={70} size={9} color={C.blue}>ganglion rachidien</Txt>
      {/* voie efférente */}
      <path d="M382,140 C430,170 470,190 560,168" fill="none" stroke={C.red} strokeWidth={5} strokeLinecap="round" />
      <circle cx={345} cy={128} r={5} fill={C.violet} />
      {/* effecteur */}
      <rect x={560} y={140} width={120} height={58} rx={26} fill={C.red} fillOpacity={0.35} stroke={C.red} strokeWidth={2} />
      <path d="M572,168 h96" stroke={C.red} strokeWidth={2} strokeDasharray="6 3" />
      <Dot path="M96,72 C170,60 220,110 282,92 L340,116 L382,140 C430,170 470,190 560,168" dur={4} r={6} color={C.green} />
      {num(70, 30, 1, C.amber)}{num(200, 40, 2, C.blue)}{num(360, 30, 3, C.violet)}{num(470, 150, 4, C.red)}{num(620, 120, 5, C.red)}
      <g fontSize={11}>
        <Txt x={70} y={126} bold>Récepteur</Txt><Txt x={70} y={140} size={9.5} color={C.grey}>extéro-, proprio-, intéro-</Txt>
        <Txt x={160} y={148} bold color={C.blue}>Voie afférente</Txt><Txt x={160} y={162} size={9.5} color={C.grey}>neurone sensitif</Txt>
        <Txt x={360} y={270} size={10} color={C.grey}>cornes antérieures (somatique)</Txt>
        <Txt x={500} y={222} bold color={C.red}>Voie efférente</Txt><Txt x={500} y={236} size={9.5} color={C.grey}>motoneurone (ACh)</Txt>
        <Txt x={620} y={214} bold>Effecteur</Txt><Txt x={620} y={228} size={9.5} color={C.grey}>fibre striée</Txt>
      </g>
      <Txt x={360} y={318} size={10.5} color={C.grey}>Réflexe autonome : 2 neurones efférents (pré- et post-ganglionnaire) — sympathique T1-L2, parasympathique S2-S4</Txt>
    </Figure>
  );
}
