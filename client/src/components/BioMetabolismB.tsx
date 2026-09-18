import { Figure, C, Txt, Dot, Seq } from "./Figure";
import { RED, OK, DEEP, leader, arrow, box } from "./FigKit";

// Biochimie S2 — néoglucogenèse, lipides, acides aminés, corps cétoniques, PPP, cholestérol, nucléotides, cartes.

const tag = (x: number, y: number, t: string, c: string, w = 60) => (
  <g><rect x={x - w / 2} y={y - 10} width={w} height={20} rx={10} fill={c} /><Txt x={x} y={y + 4} bold size={9.5} color="#fff">{t}</Txt></g>
);

// ─── 1. Néoglucogenèse ───────────────────────────────────────────────────
export function GluconeogenesisDiagram() {
  const nodes: [string, number][] = [["Glucose", 24], ["Glucose-6-P", 100], ["Fructose-6-P", 170], ["Fructose-1,6-bisP", 240], ["DHAP ⇌ G3P", 310], ["Phosphoénolpyruvate", 390], ["Oxaloacétate", 460], ["Pyruvate", 530]];
  const byp: [number, string, string, string][] = [
    [62, "Glucose-6-phosphatase", "H₂O → Pi (réticulum, foie/rein)", "4"],
    [205, "Fructose-1,6-bisphosphatase", "H₂O → Pi", "3"],
    [427, "PEP carboxykinase (PEPCK)", "GTP → GDP + CO₂", "2"],
    [497, "Pyruvate carboxylase", "biotine • ATP + CO₂ (mitochondrie)", "1"],
  ];
  return (
    <Figure viewBox="0 0 740 580" title="Néoglucogenèse : de 2 pyruvates à 1 glucose" caption="Elle contourne les trois étapes irréversibles de la glycolyse par 4 réactions spécifiques ; coût : 4 ATP + 2 GTP + 2 NADH (≈ 6 NTP) par glucose ; foie et cortex rénal">
      {nodes.map(([t, y], i) => (
        <g key={t}>
          <rect x={60} y={y} width={190} height={32} rx={8} fill={i === 6 ? C.violet : C.blue} fillOpacity={0.15} stroke={i === 6 ? C.violet : C.blue} strokeWidth={2} />
          <Txt x={155} y={y + 21} bold size={11.5}>{t}</Txt>
          {i > 0 && <path d={`M155,${y + 66 - (nodes[i][1] - nodes[i - 1][1]) + 32} L155,${y + 2}`} stroke="none" />}
        </g>
      ))}
      {[62, 131, 205, 275, 351, 427, 497].map((y, i) => {
        const bp = byp.find((b) => b[0] === y);
        return (
          <g key={y}>
            <path d={`M155,${y + 24} L155,${y - 6}`} stroke={bp ? RED : "currentColor"} strokeWidth={bp ? 4 : 2} markerEnd="url(#fig-arrow)" fill="none" />
            {bp ? <><Txt x={268} y={y + 8} anchor="start" bold size={11} color={RED}>{bp[1]}</Txt><Txt x={268} y={y + 24} anchor="start" size={10} color={C.grey}>{bp[2]}</Txt>{tag(40, y + 8, bp[3], RED, 22)}</> : i === 3 ? <Txt x={268} y={y + 10} anchor="start" size={10} color={C.grey}>réactions réversibles de la glycolyse (à l'envers)</Txt> : null}
          </g>
        );
      })}
      <Dot path="M155,548 L155,470 L155,410 L155,330 L155,260 L155,190 L155,120 L155,44" dur={9} r={8} color={RED} />
      <line x1={540} y1={20} x2={540} y2={560} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={640} y={30} bold size={12.5}>Précurseurs</Txt>
      {[["Lactate", "cycle de Cori : muscle → foie", C.amber], ["Alanine", "cycle glucose-alanine (ALT)", C.green], ["Glycérol", "lipolyse → DHAP", C.blue], ["Acides aminés glucoformateurs", "→ intermédiaires de Krebs → OAA", C.violet]].map(([t, s, c], i) => (
        <g key={String(t)}><rect x={552} y={44 + i * 62} width={176} height={52} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} /><Txt x={640} y={64 + i * 62} bold size={11} color={String(c)}>{String(t)}</Txt><Txt x={640} y={82 + i * 62} size={9.5}>{String(s)}</Txt></g>
      ))}
      <Txt x={640} y={320} bold size={11.5}>Coût énergétique</Txt>
      <Txt x={640} y={338} size={10.5}>4 ATP + 2 GTP + 2 NADH</Txt><Txt x={640} y={354} size={10.5} color={C.grey}>≈ 6 NTP par glucose</Txt>
      <Txt x={640} y={392} bold size={11.5}>À jeun : maintien de la glycémie</Txt><Txt x={640} y={410} size={10} color={C.grey}>cerveau et globules rouges</Txt><Txt x={640} y={424} size={10} color={C.grey}>dépendent du glucose</Txt>
      <Txt x={640} y={468} size={10} color={C.grey}>numéros rouges : 4 réactions de contournement</Txt>
    </Figure>
  );
}

// ─── 2. Bascule glycolyse / néoglucogenèse ───────────────────────────────
export function GlycolysisGluconeogenesisSwitchDiagram() {
  const state = (i: number, t: string, sub: string, c: string, glyc: boolean) => (
    <Seq i={i} n={2}>
      <g transform={`translate(${i * 372 + 6} 10)`}>
        <rect x={0} y={0} width={356} height={340} rx={12} fill={c} fillOpacity={0.08} stroke={c} strokeWidth={2.5} />
        <Txt x={178} y={30} bold size={14} color={c}>{t}</Txt><Txt x={178} y={48} size={10.5} color={C.grey}>{sub}</Txt>
        <rect x={40} y={68} width={276} height={44} rx={10} fill={C.blue} fillOpacity={glyc ? 0.3 : 0.06} stroke={C.blue} strokeWidth={glyc ? 3 : 1} />
        <Txt x={178} y={96} bold size={13} color={glyc ? DEEP.blue : C.grey}>{glyc ? "GLYCOLYSE ↑ (PFK-1 active)" : "glycolyse ↓"}</Txt>
        <rect x={40} y={128} width={276} height={44} rx={10} fill={C.green} fillOpacity={glyc ? 0.06 : 0.3} stroke={C.green} strokeWidth={glyc ? 1 : 3} />
        <Txt x={178} y={156} bold size={13} color={glyc ? C.grey : DEEP.green}>{glyc ? "néoglucogenèse ↓" : "NÉOGLUCOGENÈSE ↑ (FBPase-1 active)"}</Txt>
        {(glyc
          ? [["insuline ↑", "PFK-2 active → F2,6BP ↑"], ["F2,6BP ↑", "active PFK-1, inhibe FBPase-1"], ["pyruvate kinase", "activée (déphosphorylée)"], ["PDH active", "pyruvate → acétyl-CoA"]]
          : [["glucagon ↑ (cAMP, PKA)", "FBPase-2 active → F2,6BP ↓"], ["acétyl-CoA ↑", "active la pyruvate carboxylase"], ["pyruvate kinase", "inhibée (phosphorylée)"], ["PEPCK ↑", "transcription (glucagon, cortisol)"]]
        ).map(([a, b], k) => <g key={a}><rect x={20} y={192 + k * 34} width={316} height={28} rx={8} fill={c} fillOpacity={0.1} /><Txt x={110} y={210 + k * 34} bold size={10.5}>{a}</Txt><Txt x={250} y={210 + k * 34} size={10} color={C.grey}>{b}</Txt></g>)}
        <Txt x={178} y={334} size={10.5} bold color={c}>{glyc ? "le foie utilise et stocke le glucose" : "le foie produit et libère du glucose"}</Txt>
      </g>
    </Seq>
  );
  return (
    <Figure viewBox="0 0 740 380" title="Régulation croisée : glycolyse et néoglucogenèse" caption="Les deux voies ne sont jamais actives ensemble : l'état nourri (insuline) favorise la glycolyse ; le jeûne (glucagon) favorise la néoglucogenèse ; le fructose-2,6-bisphosphate est le régulateur croisé">
      {state(0, "État nourri (insuline)", "F2,6BP élevé", C.blue, true)}
      {state(1, "Jeûne (glucagon)", "F2,6BP bas", C.green, false)}
      <Txt x={370} y={372} size={10.5} color={C.grey}>les deux états s'illuminent à tour de rôle • éviter un cycle futile (dépense d'ATP inutile)</Txt>
    </Figure>
  );
}

// ─── 3. Navette du citrate et ACC ────────────────────────────────────────
export function FattyAcidShuttleDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Synthèse des acides gras : navette du citrate et acétyl-CoA carboxylase" caption="L'acétyl-CoA mitochondrial sort sous forme de citrate ; l'ATP-citrate lyase le régénère dans le cytosol ; l'ACC forme le malonyl-CoA (étape limitante, biotine, régulée par l'insuline, le citrate et le palmitoyl-CoA)">
      <rect x={10} y={20} width={300} height={280} rx={16} fill={C.amber} fillOpacity={0.1} stroke={C.amber} strokeWidth={3} strokeDasharray="8 4" />
      <Txt x={160} y={44} bold size={12.5} color="#a3701a">Mitochondrie</Txt>
      {box(30, 62, 120, 40, "Pyruvate", undefined, C.amber, 11.5)}{arrow("M90,104 L90,132")}<Txt x={100} y={122} anchor="start" size={9.5} color={C.grey}>PDH</Txt>
      {box(30, 134, 120, 40, "Acétyl-CoA", undefined, C.green, 11.5)}
      {box(190, 134, 110, 40, "Oxaloacétate", undefined, C.blue, 11)}
      {arrow("M154,154 L188,154")}
      {box(80, 214, 150, 44, "Citrate", "citrate synthase", C.violet, 12)}
      {arrow("M160,178 L160,210")}
      <Txt x={410} y={44} bold size={12.5} color={C.blue}>Cytosol</Txt>
      {arrow("M234,236 L372,236", true)}<Txt x={300} y={224} size={9.5} bold color="#6a45b0">transporteur du citrate</Txt>
      {box(376, 214, 130, 44, "Citrate", undefined, C.violet, 12)}
      {arrow("M440,260 L440,296")}
      <Txt x={510} y={282} anchor="start" size={10} bold color={RED}>ATP-citrate lyase • ATP + CoA</Txt>
      {box(376, 300, 130, 44, "Acétyl-CoA", "+ oxaloacétate", C.green, 12)}
      {arrow("M510,322 L560,322")}
      <Txt x={528} y={310} size={9.5} bold color={RED}>ACC</Txt>
      {box(564, 300, 160, 44, "Malonyl-CoA", "biotine • ATP + CO₂", C.red, 12)}
      {arrow("M644,346 L644,384")}
      {box(564, 388, 160, 44, "Palmitate (16C)", "acide gras synthase", C.blue, 12)}
      <Dot path="M160,178 L160,236 L440,236 L440,322 L644,322 L644,410" dur={7} r={7} color={C.green} />
      <path d="M376,236 L376,200 L340,150 L316,150" fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="4 3" />
      <Txt x={470} y={190} size={9.5} color={C.grey}>OAA → malate → pyruvate : retour + NADPH (enzyme malique)</Txt>
      <rect x={20} y={340} width={340} height={116} rx={10} fill={OK} fillOpacity={0.07} stroke={OK} strokeWidth={2} />
      <Txt x={190} y={362} bold size={11.5} color="#2a7a55">Active l'ACC</Txt>
      {["insuline (déphosphorylation)", "citrate (polymérisation)", "état nourri : glucides abondants"].map((t, i) => <Txt key={t} x={190} y={384 + i * 20} size={10.5}>{t}</Txt>)}
      <rect x={380} y={444} width={344} height={20} rx={4} fill="none" />
      <Txt x={550} y={462} size={10} bold color={RED}>inhibent : palmitoyl-CoA, glucagon, AMPK (P)</Txt>
    </Figure>
  );
}

// ─── 4. Cycle de la FAS ──────────────────────────────────────────────────
export function FasCycleDiagram() {
  const steps: [string, string, string, string][] = [
    ["1. Condensation", "acyl-ACP + malonyl-ACP", "→ β-cétoacyl-ACP + CO₂", C.blue],
    ["2. Réduction", "β-cétoacyl-ACP", "+ NADPH → β-hydroxyacyl-ACP", C.green],
    ["3. Déshydratation", "β-hydroxyacyl-ACP", "− H₂O → énoyl-ACP", C.amber],
    ["4. Réduction", "énoyl-ACP", "+ NADPH → acyl-ACP (n + 2 C)", C.violet],
  ];
  const pos: [number, number][] = [[210, 20], [420, 130], [210, 240], [0, 130]];
  return (
    <Figure viewBox="0 0 740 440" title="Cycle d'élongation de l'acide gras synthase (FAS)" caption="Chaque tour ajoute 2 carbones (fournis par le malonyl-CoA) au moyen de 2 NADPH ; 7 tours à partir d'un acétyl-CoA donnent le palmitate (16C)">
      {steps.map(([t, s, r, c], i) => (
        <Seq key={t} i={i} n={4}>
          <g transform={`translate(${pos[i][0] + 40} ${pos[i][1] + 10})`}>
            <rect x={0} y={0} width={230} height={72} rx={12} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={2.5} />
            <Txt x={115} y={24} bold size={12.5} color={c}>{t}</Txt><Txt x={115} y={44} size={10.5}>{s}</Txt><Txt x={115} y={60} size={10.5} bold>{r}</Txt>
          </g>
        </Seq>
      ))}
      <path d="M470,70 C540,100 560,180 540,210" fill="none" stroke={C.grey} strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <path d="M540,250 C520,290 470,310 440,318" fill="none" stroke={C.grey} strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <path d="M240,318 C160,300 100,250 90,210" fill="none" stroke={C.grey} strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <path d="M90,160 C110,110 170,80 246,70" fill="none" stroke={C.grey} strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Dot path="M470,70 C540,100 560,180 540,210 C520,290 470,310 440,318 L240,318 C160,300 100,250 90,210 C90,160 110,110 246,70 L470,70" dur={9} r={8} color={RED} />
      <circle cx={340} cy={170} r={60} fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={2} />
      <Txt x={340} y={160} bold size={12}>7 tours</Txt><Txt x={340} y={178} size={10.5}>C₂ → C₁₆</Txt><Txt x={340} y={194} size={10} color={C.grey}>palmitate</Txt>
      <rect x={20} y={356} width={700} height={78} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={378} bold size={11.5}>Bilan du palmitate : 1 acétyl-CoA + 7 malonyl-CoA + 14 NADPH → palmitate + 7 CO₂</Txt>
      <Txt x={370} y={398} size={10.5}>consomme 7 ATP (formation des 7 malonyl-CoA par l'ACC) et 14 NADPH (voie des pentoses phosphates, enzyme malique)</Txt>
      <Txt x={370} y={418} size={10} color={C.grey}>les intermédiaires restent fixés à la protéine porteuse d'acyles (ACP) • cytosol, foie, tissu adipeux</Txt>
    </Figure>
  );
}

// ─── 5. Triglycérides : synthèse et lipolyse ─────────────────────────────
export function TriglycerideDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Synthèse et mobilisation des triglycérides" caption="Synthèse : glycérol-3-phosphate + 3 acyl-CoA → triglycéride ; lipolyse : ATGL, lipase hormono-sensible (HSL) et MGL libèrent 3 acides gras et du glycérol ; HSL est activée par le glucagon et l'adrénaline, inhibée par l'insuline">
      <Txt x={186} y={24} bold size={13} color={C.green}>Synthèse (état nourri)</Txt>
      {box(30, 40, 150, 40, "Glycérol-3-phosphate", "DHAP (glycolyse)", C.blue, 11)}
      {arrow("M105,82 L105,108")}<Txt x={116} y={100} anchor="start" size={9.5} color={C.grey}>+ acyl-CoA</Txt>
      {box(30, 110, 150, 36, "Acide lysophosphatidique", undefined, C.violet, 10.5)}
      {arrow("M105,148 L105,172")}<Txt x={116} y={164} anchor="start" size={9.5} color={C.grey}>+ acyl-CoA</Txt>
      {box(30, 174, 150, 36, "Phosphatidate", undefined, C.violet, 11)}
      {arrow("M105,212 L105,236")}<Txt x={116} y={228} anchor="start" size={9.5} color={C.grey}>phosphatase</Txt>
      {box(30, 238, 150, 36, "Diacylglycérol", undefined, C.amber, 11)}
      {arrow("M105,276 L105,300")}<Txt x={116} y={292} anchor="start" size={9.5} color={C.grey}>+ acyl-CoA</Txt>
      {box(30, 302, 150, 40, "Triglycéride", "gouttelette lipidique", C.green, 12)}
      <Txt x={250} y={80} anchor="start" size={10.5} bold>glycérol kinase :</Txt><Txt x={250} y={98} anchor="start" size={10.5} color={C.grey}>foie, pas le tissu adipeux</Txt>
      <Txt x={250} y={140} anchor="start" size={10.5} bold>→ VLDL (foie)</Txt><Txt x={250} y={158} anchor="start" size={10.5} color={C.grey}>→ stockage (adipocytes)</Txt>
      <line x1={340} y1={30} x2={340} y2={350} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={540} y={24} bold size={13} color={RED}>Lipolyse (jeûne, effort)</Txt>
      {box(400, 40, 120, 38, "Triglycéride", undefined, C.green, 12)}
      {arrow("M460,80 L460,108")}<Txt x={472} y={100} anchor="start" size={9.5} bold color={RED}>ATGL</Txt>
      {box(400, 110, 120, 34, "Diacylglycérol", undefined, C.amber, 11.5)}
      {arrow("M460,146 L460,174")}<Txt x={472} y={166} anchor="start" size={9.5} bold color={RED}>HSL</Txt>
      {box(400, 176, 120, 34, "Monoacylglycérol", undefined, C.amber, 11)}
      {arrow("M460,212 L460,240")}<Txt x={472} y={232} anchor="start" size={9.5} bold color={RED}>MGL</Txt>
      {box(380, 242, 90, 40, "Glycérol", "→ foie", C.blue, 11.5)}{box(480, 242, 110, 40, "3 acides gras", "→ albumine", C.violet, 11.5)}
      {["FFA → β-oxydation", "glycérol → néoglucogenèse"].map((t, i) => <Txt key={t} x={540} y={306 + i * 18} size={10.5} color={C.grey}>{t}</Txt>)}
      <Dot path="M460,80 L460,180 L525,262" dur={4} r={7} color={C.violet} />
      <rect x={604} y={40} width={124} height={182} rx={10} fill={C.red} fillOpacity={0.07} stroke={C.red} strokeWidth={2} />
      <Txt x={666} y={62} bold size={11} color={RED}>HSL</Txt>
      {["glucagon, adrénaline :", "AMPc → PKA → HSL (P)", "ACTIVE", "", "insuline :", "déphosphoryle → INHIBE"].map((t, i) => <Txt key={i} x={666} y={84 + i * 20} size={9.5} bold={t === "ACTIVE"} color={t === "ACTIVE" ? RED : "currentColor"}>{t}</Txt>)}
      <rect x={20} y={372} width={700} height={82} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={394} bold size={11.5}>Devenir des produits de la lipolyse</Txt>
      <Txt x={370} y={414} size={10.5}>acides gras libres : transportés par l'albumine vers muscle, cœur, foie (β-oxydation) • glycérol : foie (glycérol kinase) → néoglucogenèse</Txt>
      <Txt x={370} y={434} size={10} color={C.grey}>le tissu adipeux ne peut pas réutiliser le glycérol (pas de glycérol kinase)</Txt>
    </Figure>
  );
}

// ─── 6. β-oxydation ──────────────────────────────────────────────────────
export function BetaOxidationDiagram() {
  const steps: [string, string, string, string][] = [
    ["1. Déshydrogénation", "acyl-CoA déshydrogénase", "FAD → FADH₂", C.violet],
    ["2. Hydratation", "énoyl-CoA hydratase", "+ H₂O", C.blue],
    ["3. Déshydrogénation", "3-hydroxyacyl-CoA DH", "NAD⁺ → NADH", C.amber],
    ["4. Thiolyse", "thiolase", "+ CoA → acétyl-CoA + acyl-CoA (n − 2)", C.green],
  ];
  return (
    <Figure viewBox="0 0 740 520" title="Oxydation des acides gras : navette de la carnitine et β-oxydation" caption="Activation dans le cytosol, entrée dans la matrice par la carnitine (CPT-I inhibée par le malonyl-CoA), puis 4 réactions répétées qui raccourcissent la chaîne de 2 carbones et libèrent un acétyl-CoA">
      <rect x={10} y={20} width={330} height={100} fill={C.blue} fillOpacity={0.07} /><Txt x={20} y={38} anchor="start" size={11} bold color={C.blue}>Cytosol</Txt>
      <rect x={10} y={120} width={330} height={40} fill={C.amber} fillOpacity={0.25} /><Txt x={20} y={144} anchor="start" size={10} bold color="#a3701a">membranes mitochondriales</Txt>
      <rect x={10} y={160} width={330} height={200} fill={C.green} fillOpacity={0.07} /><Txt x={20} y={178} anchor="start" size={11} bold color={C.green}>Matrice</Txt>
      {box(24, 40, 120, 34, "Acide gras", undefined, C.violet, 11.5)}{arrow("M148,57 L182,57")}
      <Txt x={165} y={44} size={9} bold color={RED}>ATP → AMP</Txt>
      {box(186, 40, 120, 34, "Acyl-CoA", "acyl-CoA synthétase", C.blue, 11)}
      {arrow("M246,78 L246,118")}<Txt x={256} y={100} anchor="start" size={9.5} bold color={RED}>CPT-I</Txt>
      <Txt x={200} y={106} anchor="end" size={9} bold color="#a3701a">malonyl-CoA inhibe</Txt>
      <g><rect x={186} y={124} width={120} height={30} rx={8} fill={C.amber} fillOpacity={0.4} stroke={C.amber} strokeWidth={2} /><Txt x={246} y={144} bold size={10.5}>Acyl-carnitine</Txt></g>
      {arrow("M246,158 L246,192")}<Txt x={256} y={178} anchor="start" size={9.5} bold color={RED}>translocase • CPT-II</Txt>
      {box(186, 196, 120, 34, "Acyl-CoA", "dans la matrice", C.blue, 11)}
      <Dot path="M84,74 L84,110 L246,110 L246,140 L246,210" dur={6} r={7} color={C.violet} />
      <Txt x={175} y={272} bold size={11.5}>Palmitate (16C)</Txt>
      <Txt x={175} y={292} size={10.5}>7 cycles → 8 acétyl-CoA</Txt><Txt x={175} y={310} size={10.5}>7 FADH₂ + 7 NADH</Txt>
      <Txt x={175} y={334} bold size={11} color="#2a7a55">≈ 106 ATP nets</Txt>
      {steps.map(([t, e, r, c], i) => (
        <Seq key={t} i={i} n={4}>
          <g transform={`translate(360 ${30 + i * 92})`}>
            <rect x={0} y={0} width={370} height={80} rx={12} fill={c} fillOpacity={0.12} stroke={c} strokeWidth={2.5} />
            <circle cx={30} cy={40} r={16} fill={c} /><Txt x={30} y={45} bold size={14} color="#fff">{String(i + 1)}</Txt>
            <Txt x={60} y={28} anchor="start" bold size={12.5}>{t.slice(3)}</Txt><Txt x={60} y={48} anchor="start" size={10.5} color={C.grey}>{e}</Txt><Txt x={60} y={66} anchor="start" size={10.5} bold color={c}>{r}</Txt>
          </g>
        </Seq>
      ))}
      <path d="M545,398 C600,410 700,380 700,300 C700,200 700,140 730,100" fill="none" stroke={C.grey} strokeWidth={2} strokeDasharray="5 3" />
      <Txt x={545} y={420} size={10.5} bold>acyl-CoA raccourci de 2C : nouveau cycle</Txt>
      <rect x={20} y={432} width={700} height={76} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={454} bold size={11}>acétyl-CoA → Krebs (≈ 10 ATP chacun) ou cétogenèse (foie, jeûne)</Txt>
      <Txt x={370} y={474} size={10.5}>chaînes impaires : dernier cycle → propionyl-CoA → succinyl-CoA (glucoformateur)</Txt>
      <Txt x={370} y={494} size={10} color={C.grey}>déficit en carnitine ou en CPT : intolérance à l'effort, stéatose, hypoglycémie hypocétosique</Txt>
    </Figure>
  );
}

// ─── 7. Métabolisme des acides aminés ────────────────────────────────────
export function AminoAcidMetabolismDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Transamination, désamination oxydative et destin des acides aminés" caption="Les aminotransférases (PLP) transfèrent le groupe aminé sur l'α-cétoglutarate pour donner du glutamate ; la glutamate déshydrogénase libère NH₄⁺ ; ALT et AST sont des marqueurs hépatiques">
      <Txt x={370} y={22} bold size={13}>1. Transamination (aminotransférases, cofacteur PLP)</Txt>
      {box(20, 40, 120, 44, "Acide aminé", "R–CH(NH₂)–COOH", C.blue, 11.5)}<Txt x={152} y={68} bold size={18}>+</Txt>
      {box(170, 40, 120, 44, "α-Cétoglutarate", undefined, C.amber, 11.5)}
      {arrow("M300,54 L400,54")}{arrow("M400,70 L300,70")}
      <Txt x={350} y={44} size={10} bold color="#6a45b0">PLP (vit. B6)</Txt>
      {box(410, 40, 130, 44, "α-Cétoacide", "→ Krebs / glucose", C.green, 11.5)}<Txt x={552} y={68} bold size={18}>+</Txt>
      {box(570, 40, 150, 44, "Glutamate", "collecteur d'amines", C.violet, 12)}
      <Txt x={370} y={116} bold size={13}>2. Désamination oxydative du glutamate (foie, matrice)</Txt>
      {box(240, 130, 130, 44, "Glutamate", undefined, C.violet, 12)}{arrow("M374,152 L450,152")}
      <Txt x={412} y={142} size={10} bold color="#6a45b0">glutamate DH</Txt><Txt x={412} y={172} size={9} color={C.grey}>NAD(P)⁺ → NAD(P)H</Txt>
      {box(454, 130, 130, 44, "α-Cétoglutarate", "+ NH₄⁺ → urée", C.amber, 12)}
      <rect x={20} y={196} width={700} height={70} rx={10} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={2} />
      <Txt x={110} y={218} bold size={11.5} color={C.blue}>ALT (GPT)</Txt><Txt x={110} y={238} size={10.5}>alanine + α-KG ⇌ pyruvate + glutamate</Txt><Txt x={110} y={254} size={10} color={C.grey}>plus spécifique du foie</Txt>
      <Txt x={470} y={218} bold size={11.5} color={C.violet}>AST (GOT)</Txt><Txt x={470} y={238} size={10.5}>aspartate + α-KG ⇌ oxaloacétate + glutamate</Txt><Txt x={470} y={254} size={10} color={C.grey}>foie, cœur, muscle</Txt>
      <Txt x={370} y={294} bold size={13}>3. Devenir du squelette carboné</Txt>
      {[["Glucoformateurs", "Ala, Gly, Ser, Cys, Asp, Asn, Glu, Gln, Pro, Arg, His, Val, Met", "→ pyruvate / Krebs → glucose", C.green], ["Cétogènes purs", "Leu, Lys", "→ acétyl-CoA / acétoacétate", C.amber], ["Mixtes", "Ile, Phe, Tyr, Trp, Thr", "glucoformateurs et cétogènes", C.violet]].map(([t, l, s, c], i) => (
        <g key={String(t)}><rect x={20 + i * 240} y={308} width={230} height={90} rx={10} fill={String(c)} fillOpacity={0.08} stroke={String(c)} strokeWidth={2} /><Txt x={135 + i * 240} y={330} bold size={11.5} color={String(c)}>{String(t)}</Txt><Txt x={135 + i * 240} y={350} size={9.5}>{String(l).slice(0, 38)}</Txt><Txt x={135 + i * 240} y={364} size={9.5}>{String(l).slice(38).trim()}</Txt><Txt x={135 + i * 240} y={386} size={10} bold color={C.grey}>{String(s)}</Txt></g>
      ))}
      <Txt x={370} y={424} bold size={11}>9 acides aminés essentiels : His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val</Txt>
      <Txt x={370} y={444} size={10} color={C.grey}>non synthétisables par l'organisme : apport alimentaire indispensable</Txt>
      <Dot path="M240,52 L540,52 L640,52" dur={5} r={7} color={C.violet} label="NH₂" />
    </Figure>
  );
}

// ─── 8. Cycle de l'urée ──────────────────────────────────────────────────
export function UreaCycleDiagram() {
  return (
    <Figure viewBox="0 0 740 500" title="Cycle de l'urée" caption="Foie : NH₄⁺ + HCO₃⁻ + 2 ATP → carbamoyl-phosphate (CPS1) ; 5 réactions, 2 dans la mitochondrie et 3 dans le cytosol ; 2 azotes (NH₃ et aspartate) + CO₂ → 1 urée, coût de 4 liaisons phosphate riches en énergie">
      <rect x={10} y={20} width={300} height={330} rx={16} fill={C.amber} fillOpacity={0.09} stroke={C.amber} strokeWidth={3} strokeDasharray="8 4" />
      <Txt x={160} y={44} bold size={12.5} color="#a3701a">Matrice mitochondriale</Txt>
      <rect x={330} y={20} width={400} height={330} rx={16} fill={C.blue} fillOpacity={0.06} stroke={C.blue} strokeWidth={3} strokeDasharray="8 4" />
      <Txt x={530} y={44} bold size={12.5} color={C.blue}>Cytosol</Txt>
      {box(28, 60, 150, 48, "NH₄⁺ + HCO₃⁻", "+ 2 ATP", C.grey, 11.5)}
      {arrow("M104,110 L104,140")}<Txt x={114} y={130} anchor="start" size={10} bold color={RED}>1. CPS1 (NAG active)</Txt>
      {box(28, 144, 150, 40, "Carbamoyl-phosphate", undefined, C.violet, 11)}
      {arrow("M104,188 L104,228")}<Txt x={114} y={212} anchor="start" size={10} bold color={RED}>2. OTC (+ ornithine)</Txt>
      {box(28, 232, 150, 40, "Citrulline", undefined, C.green, 12)}
      {arrow("M182,252 L360,252", true)}<Txt x={270} y={242} size={9.5} bold color={C.grey}>export</Txt>
      {box(364, 232, 130, 40, "Citrulline", undefined, C.green, 12)}
      {arrow("M430,232 L430,196")}<Txt x={440} y={222} anchor="start" size={10} bold color={RED}>3. ASS • + Asp + ATP</Txt>
      {box(364, 152, 150, 44, "Argininosuccinate", undefined, C.amber, 11)}
      {arrow("M514,174 L570,150")}<Txt x={550} y={186} anchor="start" size={10} bold color={RED}>4. ASL</Txt>
      {box(574, 120, 130, 40, "Arginine", undefined, C.blue, 12)}
      <Txt x={640} y={82} size={10.5} bold color={RED}>+ fumarate → Krebs</Txt>
      {arrow("M640,164 L640,204")}<Txt x={650} y={192} anchor="start" size={10} bold color={RED}>5. Arginase</Txt>
      {box(574, 208, 130, 44, "Urée", "→ sang → rein", C.red, 13)}
      <path d="M574,250 C500,300 300,300 182,180" fill="none" stroke={C.violet} strokeWidth={2.5} strokeDasharray="5 3" markerEnd="url(#fig-arrow)" />
      <Txt x={380} y={318} size={10.5} bold color="#6a45b0">ornithine (retourne dans la mitochondrie)</Txt>
      <Dot path="M104,110 L104,186 L104,232 L360,252 L430,232 L430,174 L514,174 L640,140 L640,230" dur={9} r={8} color={RED} />
      <rect x={20} y={366} width={700} height={124} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={388} bold size={11.5}>Bilan : 2 NH₃ (dont 1 via l'aspartate) + CO₂ + 3 ATP → urée</Txt>
      <Txt x={370} y={408} size={10.5}>coût : 4 liaisons phosphate riches en énergie (2 ATP pour la CPS1, 2 pour l'ASS)</Txt>
      <Txt x={370} y={428} size={10.5}>régulation : N-acétylglutamate active la CPS1 (stimulé par l'arginine et le glutamate)</Txt>
      <Txt x={370} y={448} size={10.5} color={RED} bold>déficits enzymatiques : hyperammoniémie (troubles neurologiques, encéphalopathie)</Txt>
      <Txt x={370} y={470} size={10} color={C.grey}>l'ammoniac est toxique pour le cerveau : détoxification exclusivement hépatique en urée</Txt>
    </Figure>
  );
}

// ─── 9. Corps cétoniques ─────────────────────────────────────────────────
export function KetoneBodiesDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Métabolisme des corps cétoniques" caption="Cétogenèse hépatique (mitochondrie) à partir de l'acétyl-CoA du jeûne ; utilisation par les tissus extra-hépatiques via la thiophorase (absente du foie)">
      <rect x={10} y={20} width={350} height={340} rx={14} fill={C.amber} fillOpacity={0.08} stroke={C.amber} strokeWidth={2.5} />
      <Txt x={185} y={44} bold size={12.5} color="#a3701a">Foie : cétogenèse</Txt>
      {box(30, 60, 140, 36, "2 acétyl-CoA", undefined, C.green, 11.5)}
      {arrow("M100,98 L100,124")}<Txt x={110} y={116} anchor="start" size={9.5} bold color={RED}>thiolase</Txt>
      {box(30, 126, 140, 36, "Acétoacétyl-CoA", undefined, C.violet, 11.5)}
      {arrow("M100,164 L100,190")}<Txt x={110} y={182} anchor="start" size={9.5} bold color={RED}>HMG-CoA synthase (+ acétyl-CoA)</Txt>
      {box(30, 192, 140, 36, "HMG-CoA", undefined, C.blue, 11.5)}
      {arrow("M100,230 L100,256")}<Txt x={110} y={248} anchor="start" size={9.5} bold color={RED}>HMG-CoA lyase</Txt>
      {box(30, 258, 140, 40, "Acétoacétate", undefined, C.red, 12)}
      {arrow("M174,278 L226,278")}<Txt x={200} y={266} size={9.5} bold color="#a3701a">NADH</Txt>
      {box(230, 258, 120, 40, "β-Hydroxybutyrate", undefined, C.red, 10.5)}
      {arrow("M100,300 L100,330")}<Txt x={110} y={320} anchor="start" size={9.5} color={C.grey}>décarboxylation spontanée</Txt>
      <Txt x={100} y={348} bold size={11} color={C.grey}>acétone (expirée)</Txt>
      {arrow("M356,278 L400,278", true)}
      <rect x={404} y={20} width={326} height={340} rx={14} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={2.5} />
      <Txt x={567} y={44} bold size={12.5} color={C.blue}>Cerveau, muscle, cœur : cétolyse</Txt>
      {box(424, 60, 130, 40, "β-Hydroxybutyrate", undefined, C.red, 10.5)}{arrow("M556,80 L586,80")}
      {box(590, 60, 120, 40, "Acétoacétate", undefined, C.red, 11.5)}
      {arrow("M650,102 L650,140")}<Txt x={660} y={124} anchor="start" size={9.5} bold color={RED}>thiophorase (SCOT)</Txt>
      {box(590, 144, 120, 36, "Acétoacétyl-CoA", undefined, C.violet, 10.5)}
      {arrow("M650,182 L650,212")}<Txt x={660} y={202} anchor="start" size={9.5} color={C.grey}>thiolase</Txt>
      {box(590, 214, 120, 36, "2 acétyl-CoA", undefined, C.green, 11.5)}
      {arrow("M650,252 L650,284")}
      {box(590, 288, 120, 40, "Krebs → ATP", undefined, C.amber, 12)}
      <Txt x={490} y={210} size={10.5} bold color={RED}>le foie ne peut pas</Txt><Txt x={490} y={226} size={10.5} bold color={RED}>utiliser les corps</Txt><Txt x={490} y={242} size={10.5} bold color={RED}>cétoniques (pas de SCOT)</Txt>
      <Dot path="M100,78 L100,144 L100,210 L100,278 L226,278 L400,278 L490,80 L640,80 L650,160 L650,230" dur={9} r={8} color={RED} />
      <rect x={20} y={376} width={700} height={82} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={398} bold size={11.5}>Jeûne prolongé, régime pauvre en glucides, diabète de type 1 : ↑ cétogenèse (glucagon, ↓ insuline)</Txt>
      <Txt x={370} y={418} size={10.5}>le cerveau utilise les corps cétoniques comme carburant alternatif au glucose</Txt>
      <Txt x={370} y={438} size={10.5} color={RED} bold>acidocétose diabétique : corps cétoniques acides → acidose métabolique, haleine acétonique</Txt>
    </Figure>
  );
}

// ─── 10. Voie des pentoses phosphates ────────────────────────────────────
export function PentosePhosphateDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Voie des pentoses phosphates" caption="Phase oxydative irréversible : 2 NADPH par glucose-6-phosphate (G6PD, enzyme limitante) et ribulose-5-phosphate ; phase non oxydative réversible : interconversions de sucres (transcétolase, transaldolase)">
      <rect x={10} y={20} width={330} height={300} rx={14} fill={C.red} fillOpacity={0.07} stroke={C.red} strokeWidth={2.5} />
      <Txt x={175} y={44} bold size={12.5} color={RED}>Phase oxydative (irréversible)</Txt>
      {box(50, 60, 150, 36, "Glucose-6-phosphate", undefined, C.blue, 11.5)}
      {arrow("M125,98 L125,126")}<Txt x={136} y={116} anchor="start" size={9.5} bold color={RED}>G6PD • NADP⁺ → NADPH</Txt>
      {box(50, 128, 150, 36, "6-Phosphogluconolactone", undefined, C.violet, 10.5)}
      {arrow("M125,166 L125,192")}<Txt x={136} y={182} anchor="start" size={9.5} color={C.grey}>lactonase (H₂O)</Txt>
      {box(50, 194, 150, 36, "6-Phosphogluconate", undefined, C.violet, 11.5)}
      {arrow("M125,232 L125,258")}<Txt x={136} y={248} anchor="start" size={9.5} bold color={RED}>6-PGDH • NADPH + CO₂</Txt>
      {box(50, 260, 150, 40, "Ribulose-5-phosphate", undefined, C.amber, 11.5)}
      {tag(280, 118, "NADPH", C.green, 58)}{tag(280, 246, "NADPH", C.green, 58)}{tag(280, 282, "CO₂", C.grey, 44)}
      {arrow("M204,280 L360,280")}
      <rect x={360} y={20} width={370} height={300} rx={14} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={2.5} />
      <Txt x={545} y={44} bold size={12.5} color={C.blue}>Phase non oxydative (réversible)</Txt>
      {box(380, 60, 130, 36, "Ribose-5-P", "→ nucléotides", C.green, 11.5)}
      {box(530, 60, 180, 36, "Xylulose-5-P", undefined, C.amber, 11.5)}
      {arrow("M445,98 L445,132")}
      <Txt x={545} y={130} size={10.5} bold color={RED}>transcétolase (TPP, vit. B1)</Txt>
      {box(380, 138, 130, 36, "Sédoheptulose-7-P", undefined, C.violet, 10.5)}{box(530, 138, 180, 36, "Glycéraldéhyde-3-P", undefined, C.violet, 11)}
      <Txt x={545} y={196} size={10.5} bold color={RED}>transaldolase</Txt>
      {box(380, 204, 130, 36, "Érythrose-4-P", undefined, C.blue, 11.5)}{box(530, 204, 180, 36, "Fructose-6-P", undefined, C.blue, 11.5)}
      <Txt x={545} y={268} size={10.5} bold>→ retour vers la glycolyse (F6P, G3P)</Txt>
      <Txt x={545} y={288} size={10} color={C.grey}>adaptation aux besoins : plus de NADPH ou plus de ribose</Txt>
      <Dot path="M125,80 L125,146 L125,212 L125,280 L360,280 L445,80 L445,156 L445,222 L620,222" dur={9} r={7} color={C.amber} />
      <rect x={20} y={334} width={700} height={132} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={200} y={356} bold size={11.5} color="#2a7a55">Rôles du NADPH</Txt>
      {["synthèse des acides gras et des stéroïdes", "glutathion réduit : protection contre H₂O₂ (globule rouge)", "explosion respiratoire des phagocytes, cytochromes P450"].map((t, i) => <Txt key={t} x={200} y={378 + i * 18} size={10}>{t}</Txt>)}
      <Txt x={540} y={356} bold size={11.5} color={C.blue}>Tissus à forte activité</Txt>
      {["foie, tissu adipeux, glande surrénale", "globules rouges, gonades, glande mammaire", "déficit en G6PD : anémie hémolytique à l'oxydant"].map((t, i) => <Txt key={t} x={540} y={378 + i * 18} size={10} color={i === 2 ? RED : "currentColor"} bold={i === 2}>{t}</Txt>)}
    </Figure>
  );
}

// ─── 11. Synthèse du cholestérol ─────────────────────────────────────────
export function CholesterolSynthesisDiagram() {
  const chain: [string, string][] = [
    ["Acétyl-CoA (× 3)", ""],
    ["HMG-CoA", "HMG-CoA synthase"],
    ["Mévalonate", "HMG-CoA réductase • 2 NADPH"],
    ["Isopentényl-pyrophosphate", "5C (unités isoprène)"],
    ["Squalène", "30C"],
    ["Lanostérol", "cyclisation"],
    ["Cholestérol", "27C"],
  ];
  return (
    <Figure viewBox="0 0 740 540" title="Synthèse et régulation du cholestérol" caption="L'HMG-CoA réductase (étape limitante) est inhibée par les statines et régulée par les stérols (SREBP-2), l'insuline, le glucagon et l'AMPK ; le cholestérol donne les sels biliaires, les hormones stéroïdes et la vitamine D">
      {chain.map(([t, e], i) => {
        const y = 20 + i * 62;
        const hot = i === 2;
        return (
          <g key={t}>
            <rect x={60} y={y} width={210} height={34} rx={9} fill={hot ? C.red : C.blue} fillOpacity={hot ? 0.28 : 0.13} stroke={hot ? C.red : C.blue} strokeWidth={hot ? 3 : 2} />
            <Txt x={165} y={y + 22} bold size={11.5}>{t}</Txt>
            {i > 0 && <path d={`M165,${y - 26} L165,${y - 2}`} stroke={hot ? RED : "currentColor"} strokeWidth={hot ? 4 : 2} markerEnd="url(#fig-arrow)" fill="none" />}
            {e && <Txt x={282} y={y - 10} anchor="start" size={10.5} bold color={hot ? RED : C.grey}>{e}</Txt>}
          </g>
        );
      })}
      <Dot path="M165,36 L165,470" dur={8} r={8} color={C.amber} />
      <line x1={470} y1={20} x2={470} y2={520} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={600} y={26} bold size={12.5} color={RED}>Régulation de l'HMG-CoA réductase</Txt>
      {[["Cholestérol ↑", "SREBP-2 inactif → ↓ transcription, ↑ dégradation", C.red], ["Insuline", "active la réductase (déphosphorylation)", C.green], ["Glucagon, AMPK", "phosphorylation → inhibition", C.red], ["Statines", "inhibiteurs compétitifs (analogues du HMG-CoA)", C.violet]].map(([t, s, c], i) => (
        <g key={String(t)}><rect x={484} y={40 + i * 60} width={246} height={50} rx={8} fill={String(c)} fillOpacity={0.09} stroke={String(c)} strokeWidth={1.8} /><Txt x={607} y={60 + i * 60} bold size={11} color={String(c)}>{String(t)}</Txt><Txt x={607} y={78 + i * 60} size={9.5}>{String(s).slice(0, 44)}</Txt></g>
      ))}
      <Txt x={600} y={306} bold size={12.5}>Devenir du cholestérol</Txt>
      {[["Membranes", "fluidité, structure"], ["Sels biliaires", "7α-hydroxylase → digestion des lipides"], ["Hormones stéroïdes", "cortisol, aldostérone, sexuelles"], ["Vitamine D", "à partir du 7-déhydrocholestérol"], ["Esters de cholestérol", "ACAT / LCAT : stockage, transport"]].map(([t, s], i) => (
        <g key={String(t)}><Txt x={496} y={330 + i * 34} anchor="start" bold size={10.5} color={DEEP.blue}>{String(t)}</Txt><Txt x={496} y={344 + i * 34} anchor="start" size={9.5} color={C.grey}>{String(s)}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── 12. Lipoprotéines ───────────────────────────────────────────────────
export function LipoproteinsDiagram() {
  const particle = (x: number, y: number, r: number, name: string, sub: string, c: string) => (
    <g>
      <circle cx={x} cy={y} r={r} fill={c} fillOpacity={0.22} stroke={c} strokeWidth={4} />
      <circle cx={x} cy={y} r={r * 0.62} fill={C.amber} fillOpacity={0.5} />
      <Txt x={x} y={y + 4} bold size={r > 30 ? 12 : 10.5}>{name}</Txt>
      <Txt x={x} y={y + r + 16} size={9.5} color={C.grey}>{sub}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 540" title="Lipoprotéines et voies du transport des lipides" caption="Chylomicrons (voie exogène), VLDL → IDL → LDL (voie endogène) et HDL (transport inverse du cholestérol) ; taille décroissante, densité croissante">
      {particle(70, 60, 48, "CM", "chylomicron • TG 90 %", C.amber)}
      {particle(190, 60, 36, "VLDL", "TG endogènes", C.violet)}
      {particle(290, 60, 28, "LDL", "cholestérol", C.red)}
      {particle(376, 60, 20, "HDL", "cholestérol retour", C.green)}
      <path d="M20,124 L420,124" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Txt x={220} y={140} size={10.5} bold>taille ↓ • densité ↑ • proportion de protéines ↑</Txt>
      <rect x={440} y={20} width={290} height={118} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={585} y={40} bold size={11.5}>Structure d'une lipoprotéine</Txt>
      <circle cx={500} cy={88} r={34} fill={C.blue} fillOpacity={0.2} stroke={C.blue} strokeWidth={3} /><circle cx={500} cy={88} r={20} fill={C.amber} fillOpacity={0.6} />
      {["cœur : TG + esters de cholestérol", "enveloppe : phospholipides, cholestérol libre", "apolipoprotéines (apoB, apoA-I, apoC-II, apoE)"].map((t, i) => <Txt key={t} x={545} y={68 + i * 20} anchor="start" size={9.5}>{t}</Txt>)}
      {/* voie exogène */}
      <Txt x={130} y={172} bold size={12} color="#a3701a">Voie exogène</Txt>
      {box(20, 184, 100, 40, "Intestin", "chylomicrons", C.amber, 11)}{arrow("M124,204 L156,204")}
      {box(160, 184, 100, 40, "Lymphe → sang", "apoB-48, apoC-II", C.amber, 10)}{arrow("M264,204 L296,204")}
      {box(300, 184, 130, 40, "LPL (capillaires)", "TG → acides gras", C.red, 11)}{arrow("M366,228 L366,254")}
      {box(280, 258, 150, 40, "Remnants → foie", "récepteur apoE", C.green, 11)}
      {/* voie endogène */}
      <Txt x={130} y={322} bold size={12} color="#6a45b0">Voie endogène</Txt>
      {box(20, 334, 90, 40, "Foie", "VLDL (apoB-100)", C.violet, 10.5)}{arrow("M114,354 L140,354")}
      {box(144, 334, 90, 40, "LPL", "→ IDL", C.red, 11)}{arrow("M238,354 L264,354")}
      {box(268, 334, 90, 40, "LDL", "cholestérol", C.red, 11)}{arrow("M362,354 L388,354")}
      {box(392, 334, 130, 40, "Récepteur LDL", "cellules, foie (endocytose)", C.blue, 10)}
      {/* HDL */}
      <Txt x={130} y={412} bold size={12} color="#2a7a55">Transport inverse (HDL)</Txt>
      {box(20, 424, 110, 40, "HDL naissant", "foie, intestin (apoA-I)", C.green, 10.5)}{arrow("M134,444 L164,444")}
      {box(168, 424, 130, 40, "Tissus", "prend le cholestérol libre", C.blue, 10.5)}{arrow("M302,444 L332,444")}
      {box(336, 424, 100, 40, "LCAT", "esterifie le cholestérol", C.amber, 10.5)}{arrow("M440,444 L470,444")}
      {box(474, 424, 100, 40, "Foie", "→ bile", C.green, 11)}
      <Dot path="M120,204 L160,204 L300,204 L366,240 L366,278" dur={6} r={7} color={C.amber} />
      <Dot path="M110,354 L144,354 L268,354 L392,354" dur={6} delay={2} r={7} color={C.violet} />
      <Dot path="M130,444 L168,444 L336,444 L474,444" dur={6} delay={4} r={7} color={C.green} />
      <rect x={550} y={172} width={180} height={296} rx={10} fill={C.red} fillOpacity={0.06} stroke={C.red} strokeWidth={2} />
      <Txt x={640} y={194} bold size={11.5} color={RED}>Importance clinique</Txt>
      {[["LDL élevé", "athérosclérose (« mauvais »)"], ["HDL élevé", "protecteur (« bon »)"], ["TG élevés", "pancréatite, risque CV"], ["Hypercholestérolémie familiale", "déficit du récepteur LDL"], ["Statines", "↓ synthèse, ↑ récepteurs LDL"]].map(([t, s], i) => <g key={String(t)}><Txt x={640} y={220 + i * 48} bold size={10.5}>{String(t)}</Txt><Txt x={640} y={236 + i * 48} size={9.5} color={C.grey}>{String(s)}</Txt></g>)}
    </Figure>
  );
}

// ─── 13. Nucléotides ─────────────────────────────────────────────────────
export function NucleotideSynthesisDiagram() {
  return (
    <Figure viewBox="0 0 740 520" title="Synthèse et catabolisme des nucléotides" caption="PRPP → purines (IMP → AMP, GMP) ; carbamoyl-phosphate + aspartate → pyrimidines (UMP → UTP, CTP, dTMP) ; ribonucléotide réductase → désoxyribonucléotides ; catabolisme des purines → acide urique">
      {box(290, 14, 160, 44, "Ribose-5-phosphate", "voie des pentoses phosphates", C.green, 11)}
      {arrow("M370,60 L370,86")}<Txt x={380} y={78} anchor="start" size={9.5} bold color={RED}>PRPP synthétase (ATP → AMP)</Txt>
      {box(300, 90, 140, 40, "PRPP", "5-phosphoribosyl-1-pyrophosphate", C.violet, 10.5)}
      <Txt x={130} y={160} bold size={12.5} color={C.blue}>Purines (de novo)</Txt>
      {arrow("M300,116 L130,150")}
      {box(50, 170, 160, 50, "IMP", "Gly, Gln × 2, Asp, CO₂, formyl-THF × 2", C.blue, 11)}
      {arrow("M100,222 L80,254")}{arrow("M170,222 L200,254")}
      {box(20, 258, 100, 36, "AMP", "+ Asp", C.blue, 11.5)}{box(150, 258, 100, 36, "GMP", "+ Gln", C.blue, 11.5)}
      <Txt x={610} y={160} bold size={12.5} color="#a3701a">Pyrimidines (de novo)</Txt>
      {arrow("M440,116 L610,150")}
      {box(500, 164, 180, 34, "Carbamoyl-P (CPS II) + Asp", undefined, C.amber, 10.5)}
      {arrow("M590,200 L590,220")}<Txt x={600} y={214} anchor="start" size={9.5} color={C.grey}>→ orotate</Txt>
      {box(500, 224, 180, 34, "Orotate + PRPP → OMP", undefined, C.amber, 10.5)}
      {arrow("M590,260 L590,278")}
      {box(500, 282, 100, 36, "UMP → UTP", undefined, C.amber, 11)}{box(610, 282, 90, 36, "CTP", "+ Gln", C.amber, 11)}
      <line x1={20} y1={344} x2={720} y2={344} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={200} y={366} bold size={12} color={C.red}>Désoxyribonucléotides</Txt>
      {box(30, 376, 130, 40, "NDP", undefined, C.blue, 12)}{arrow("M164,396 L214,396")}<Txt x={190} y={384} size={9.5} bold color={RED}>ribonucléotide réductase</Txt>
      {box(218, 376, 110, 40, "dNDP", undefined, C.blue, 12)}
      <Txt x={30} y={444} anchor="start" size={10.5} bold>dTMP : thymidylate synthase (THF) — cible du 5-fluorouracile et du méthotrexate</Txt>
      <Txt x={30} y={462} anchor="start" size={10} color={C.grey}>voies de récupération : HGPRT (hypoxanthine-guanine) — déficit : syndrome de Lesch-Nyhan</Txt>
      <Txt x={30} y={480} anchor="start" size={10} color={C.grey}>cellules à division rapide : forte demande en nucléotides</Txt>
      <rect x={370} y={352} width={360} height={150} rx={10} fill={C.red} fillOpacity={0.07} stroke={C.red} strokeWidth={2} />
      <Txt x={550} y={374} bold size={11.5} color={RED}>Catabolisme des purines</Txt>
      {["AMP, GMP → inosine, guanosine", "→ hypoxanthine, xanthine", "xanthine oxydase → ACIDE URIQUE", "élimination rénale"].map((t, i) => <Txt key={t} x={550} y={396 + i * 20} size={10.5} bold={i === 2} color={i === 2 ? RED : "currentColor"}>{t}</Txt>)}
      <Txt x={550} y={480} size={10} color={C.grey}>excès : goutte (cristaux d'urate) • allopurinol inhibe la xanthine oxydase</Txt>
    </Figure>
  );
}

// ─── 14. Cartes métaboliques intégrées ───────────────────────────────────
type NodeId = "glycogen" | "glucose" | "g6p" | "ppp" | "lactate" | "pyruvate" | "acetyl" | "krebs" | "malonyl" | "fa" | "tg" | "ketone" | "chol" | "aa" | "urea";

export function MetabolicMapDiagram({ focus }: { focus: "carbs" | "lipids" | "proteins" }) {
  const nodes: Record<NodeId, [number, number, string, string]> = {
    glycogen: [90, 46, "Glycogène", C.amber],
    glucose: [90, 140, "Glucose", C.blue],
    g6p: [90, 234, "Glucose-6-P", C.blue],
    ppp: [90, 328, "Pentoses-P • NADPH", C.green],
    lactate: [320, 140, "Lactate", C.amber],
    pyruvate: [320, 234, "Pyruvate", C.violet],
    acetyl: [320, 328, "Acétyl-CoA", C.red],
    krebs: [320, 430, "Krebs • chaîne respiratoire", C.violet],
    malonyl: [520, 328, "Malonyl-CoA", C.red],
    fa: [520, 234, "Acides gras", C.green],
    tg: [650, 234, "Triglycérides", C.green],
    ketone: [520, 430, "Corps cétoniques", C.amber],
    chol: [650, 328, "Cholestérol", C.pink],
    aa: [520, 140, "Acides aminés", C.violet],
    urea: [650, 140, "Urée", C.grey],
  };
  const sets: Record<string, NodeId[]> = {
    carbs: ["glycogen", "glucose", "g6p", "ppp", "lactate", "pyruvate", "acetyl", "krebs"],
    lipids: ["acetyl", "malonyl", "fa", "tg", "ketone", "chol", "krebs", "g6p", "ppp"],
    proteins: ["aa", "urea", "pyruvate", "acetyl", "krebs", "glucose", "g6p", "ketone", "lactate"],
  };
  const on = new Set(sets[focus]);
  const edges: [NodeId, NodeId, string][] = [
    ["glycogen", "g6p", "glycogénolyse / -génèse"], ["glucose", "g6p", "hexokinase"], ["g6p", "ppp", "G6PD"], ["g6p", "pyruvate", "glycolyse"],
    ["pyruvate", "lactate", "LDH"], ["pyruvate", "acetyl", "PDH"], ["acetyl", "krebs", "citrate synthase"], ["acetyl", "malonyl", "ACC"],
    ["malonyl", "fa", "FAS"], ["fa", "tg", ""], ["fa", "acetyl", "β-oxydation"], ["acetyl", "ketone", "cétogenèse"], ["acetyl", "chol", ""],
    ["aa", "pyruvate", "transamination"], ["aa", "urea", "cycle de l'urée"], ["aa", "krebs", ""], ["pyruvate", "glucose", "néoglucogenèse"],
  ];
  const cap = { carbs: "Carte métabolique des glucides", lipids: "Carte métabolique des lipides", proteins: "Carte métabolique des protéines" }[focus];
  return (
    <Figure viewBox="0 0 740 500" title={cap} caption={`${cap} : carrefours du glucose-6-phosphate, du pyruvate et de l'acétyl-CoA ; les voies en surbrillance correspondent au chapitre ; le malonyl-CoA est l'interrupteur entre synthèse et oxydation des acides gras`}>
      {edges.map(([a, b, l], i) => {
        const [x1, y1] = nodes[a], [x2, y2] = nodes[b];
        const hot = on.has(a) && on.has(b);
        return (
          <g key={i} opacity={hot ? 1 : 0.13}>
            <path d={`M${x1},${y1 + 16} L${x2},${y2 - 16}`} stroke="currentColor" strokeWidth={hot ? 2.4 : 1.4} markerEnd="url(#fig-arrow)" fill="none" className={hot ? "fig-flow" : undefined} />
            {l && hot && <Txt x={(x1 + x2) / 2 + 6} y={(y1 + y2) / 2 + 2} anchor="start" size={9} color={C.grey}>{l}</Txt>}
          </g>
        );
      })}
      {(Object.keys(nodes) as NodeId[]).map((id) => {
        const [x, y, t, c] = nodes[id];
        return (
          <g key={id} opacity={on.has(id) ? 1 : 0.2}>
            <rect x={x - 66} y={y - 17} width={132} height={34} rx={17} fill={c} fillOpacity={0.22} stroke={c} strokeWidth={on.has(id) ? 3 : 1.5} />
            <Txt x={x} y={y + 4} bold size={id === "krebs" ? 10 : 11}>{t}</Txt>
          </g>
        );
      })}
      <rect x={20} y={462} width={700} height={30} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={482} size={10.5}>{focus === "carbs" ? "carrefours : G6P (glycolyse, glycogène, PPP) et pyruvate (lactate, acétyl-CoA, OAA) — insuline / glucagon" : focus === "lipids" ? "le malonyl-CoA inhibe la CPT-I : pas de synthèse et d'oxydation simultanées des acides gras" : "acides aminés → pyruvate / Krebs (glucose ou énergie) ou acétyl-CoA (corps cétoniques) ; azote → urée"}</Txt>
    </Figure>
  );
}

export const MetabolicMapCarbs = () => <MetabolicMapDiagram focus="carbs" />;
export const MetabolicMapLipids = () => <MetabolicMapDiagram focus="lipids" />;
export const MetabolicMapProteins = () => <MetabolicMapDiagram focus="proteins" />;

