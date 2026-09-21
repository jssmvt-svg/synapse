import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Card, dash } from "./PhysCardio";
import { Box, arrow } from "./PhysRespEndo";

// Physiologie S1 — digestion : sécrétions (salive, estomac, pancréas, bile, intestin, côlon).

// ─── Glandes salivaires : deux étapes ────────────────────────────────────
export function SalivaryGlandsDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Sécrétion salivaire : salive primaire puis salive finale hypotonique" caption="Trois paires de glandes (parotides 25 %, sous-maxillaires 70 %, sublinguales 5 %) ; l'acinus produit une salive primaire isotonique (285-295 mOsm/L) ; les canaux, imperméables à l'eau, réabsorbent Na⁺ et Cl⁻ et sécrètent K⁺ et HCO₃⁻ : salive finale hypotonique (50-100 mOsm/L)">
      {[["Parotides", "séreuse · 25 %", C.blue, 25], ["Sous-maxillaires", "mixtes · 70 %", C.green, 70], ["Sublinguales", "mixtes · 5 %", C.amber, 5]].map(([n, s, c, v], i) => (
        <g key={String(n)}>
          <rect x={20 + i * 82} y={20} width={76} height={Number(v) * 0.6 + 40} rx={8} fill={String(c)} fillOpacity={0.3} stroke={String(c)} strokeWidth={2} />
          <Txt x={58 + i * 82} y={40} bold size={9}>{String(n)}</Txt><Txt x={58 + i * 82} y={54} size={8.5} color={C.grey}>{String(s).split(" · ")[1]}</Txt>
        </g>
      ))}
      <Box x={20} y={130} w={220} h={60} t="Stade acinaire" s="salive primaire isotonique 285-295 mOsm/L" c={C.blue} size={11.5} />
      <Txt x={130} y={208} size={9.5} color={C.grey}>eau, amylase, Na⁺, Cl⁻, HCO₃⁻, K⁺, mucus</Txt>
      {arrow("M130,222 L130,244")}
      <Box x={20} y={246} w={220} h={64} t="Stade ductal" s="cellules imperméables à l'eau" c={C.green} size={11.5} />
      <Txt x={130} y={328} size={9.5} bold color={DEEP.green}>réabsorbe Na⁺ et Cl⁻ · sécrète K⁺ et HCO₃⁻</Txt>
      {arrow("M130,338 L130,358")}
      <Box x={20} y={360} w={220} h={56} t="Salive finale hypotonique" s="50-100 mOsm/L · pH 6-7 (8 stimulée)" c={C.violet} size={11.5} />
      <Txt x={130} y={436} size={9.5} color={C.grey}>≈ 1,5 L/jour (0,25 à 4 mL/min)</Txt>
      <Txt x={520} y={22} bold size={12}>Ions : salive finale / plasma</Txt>
      {[["Na⁺", "≈ 15 mEq/L", "1/7 du plasma", 0.15, C.blue], ["Cl⁻", "≈ 10 mEq/L", "1/10 du plasma", 0.1, C.red], ["K⁺", "≈ 30 mEq/L", "7 × le plasma", 1.0, C.amber], ["HCO₃⁻", "50-70 mEq/L", "2-3 × le plasma (tampon)", 0.8, C.green]].map(([n, v, r, w, c], i) => (
        <g key={String(n)}>
          <Txt x={310} y={64 + i * 62} anchor="start" bold size={12}>{String(n)}</Txt>
          <rect x={360} y={48 + i * 62} width={Number(w) * 200 + 10} height={28} rx={6} fill={String(c)} fillOpacity={0.45} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={372 + Number(w) * 200} y={67 + i * 62} anchor="start" bold size={10.5} color={String(c)}>{String(v)}</Txt>
          <Txt x={360} y={92 + i * 62} anchor="start" size={9.5} color={C.grey}>{String(r)}</Txt>
        </g>
      ))}
      <Card x={300} y={306} w={420} h={78} color={DEEP.amber} title="Composition" lines={["eau 99,5 % · minéraux 0,2 % · organiques 0,3 %", "amylase (amidon → maltose, actif jusqu'à pH 4), lipase linguale,", "lysozyme, thiocyanate (antimicrobien)"]} />
      <Card x={300} y={394} w={420} h={64} color={DEEP.blue} title="Rôles" lines={["digestif (amylase), protection, tampon HCO₃⁻/H₂CO₃,", "excrétion, trophique (émail), équilibre hydrique (soif)"]} />
    </Figure>
  );
}

// ─── Régulation de la salive ─────────────────────────────────────────────
export function SalivaryRegulationDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Régulation de la sécrétion salivaire" caption="Sécrétion continue : mécanisme cholinergique (parasympathique, noyaux salivaires du bulbe et du pont ; afférences V, VII, IX, X) ; sympathique (T1-T3, ganglion cervical supérieur) en cas de stress ; le réflexe conditionné (vue, odeur, pensée) passe par le cortex et l'hypothalamus puis la voie cholinergique">
      <Box x={20} y={20} w={220} h={64} t="Stimuli gustatifs, tactiles" s="langue, bouche, pharynx" c={C.amber} size={11.5} />
      {arrow("M130,86 L130,118")}<Txt x={140} y={108} anchor="start" size={9.5} bold color={DEEP.blue}>afférences V · VII · IX · X</Txt>
      <Box x={20} y={120} w={220} h={64} t="Noyaux salivaires" s="inférieur (bulbe) · supérieur (pont)" c={C.blue} size={11.5} />
      {arrow("M130,186 L130,224")}<Txt x={140} y={210} anchor="start" size={9.5} bold color={DEEP.blue}>ACh (muscarinique)</Txt>
      <Box x={20} y={226} w={220} h={56} t="Glandes salivaires" s="sécrétion abondante, fluide" c={C.green} size={11.5} />
      <Box x={500} y={20} w={220} h={64} t="Stress, émotions fortes" c={C.red} size={11.5} />
      {arrow("M610,86 L610,110")}
      <Box x={500} y={112} w={220} h={56} t="Cortex + hypothalamus" c={C.violet} size={11.5} />
      {arrow("M610,170 L610,194")}
      <Box x={500} y={196} w={220} h={56} t="Corne latérale T1-T3" s="ganglion cervical supérieur" c={C.red} size={11} />
      {arrow("M610,254 L610,282")}
      <Box x={500} y={284} w={220} h={64} t="Sympathique : effets" s="vasoconstriction, contraction myoépithéliale" c={C.red} size={10.5} />
      <Box x={20} y={324} w={220} h={64} t="Réflexe conditionné" s="vue, odeur, audition, pensée" c={C.pink} size={11.5} />
      <path d="M130,324 L130,300 L130,284" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Txt x={256} y={346} anchor="start" size={10} color={C.grey}>cortex → hypothalamus antérieur (appétit)</Txt><Txt x={256} y={362} anchor="start" size={10} color={C.grey}>→ mécanisme cholinergique</Txt>
      <Card x={300} y={100} w={180} h={110} color={DEEP.blue} title="Sécrétion basale" lines={["continue, minimale", "mécanisme cholinergique", "activée : exclusivement réflexe"]} />
      <Card x={300} y={228} w={180} h={78} color={DEEP.amber} title="Influences" lines={["centres de déglutition et", "du vomissement (bulbe)"]} />
      <Card x={20} y={402} w={700} h={46} color={DEEP.green} title="Sécheresse buccale et soif : en déshydratation, l'ADH ↑ la réabsorption d'eau → salive ↓" lines={[]} />
    </Figure>
  );
}

// ─── Glandes gastriques ──────────────────────────────────────────────────
export function GastricGlandsDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Les glandes gastriques : oxyntiques et pyloriques" caption="Glandes oxyntiques (fundus et corps, 80 % de la surface) : mucus, HCl et facteur intrinsèque, pepsinogène ; glandes pyloriques (antre, 20 %) : mucus, gastrine (cellules G) et somatostatine (cellules D) ; suc gastrique ≈ 1 500 mL/jour, pH 1,5-2,5">
      <path d="M170,20 C110,30 60,90 70,190 C76,270 130,320 200,326 C270,332 300,290 330,270 L440,270 L440,220 L340,220 C320,150 290,80 250,44 C230,26 200,18 170,20 Z" fill={C.red} fillOpacity={0.08} stroke={C.red} strokeWidth={2.4} />
      <Txt x={170} y={190} bold size={12} color={DEEP.red}>Fundus + corps</Txt><Txt x={170} y={206} size={10} color={C.grey}>glandes oxyntiques (80 %)</Txt>
      <Txt x={390} y={250} bold size={11} color={DEEP.blue}>Antre</Txt><Txt x={390} y={264} size={9.5} color={C.grey}>pyloriques (20 %)</Txt>
      <rect x={440} y={224} width={20} height={44} rx={4} fill={C.blue} fillOpacity={0.5} /><Txt x={452} y={286} size={9.5} bold color={DEEP.blue}>pylore</Txt>
      <Txt x={560} y={22} bold size={12} color={DEEP.red}>Glande oxyntique</Txt>
      {[["Cellules à mucus du collet", "mucus + HCO₃⁻ + eau", C.amber], ["Cellules pariétales (oxyntiques)", "HCl + facteur intrinsèque", C.red], ["Cellules principales", "pepsinogène, lipase gastrique", C.blue], ["Cellules ECL", "histamine", C.violet]].map(([n, s, c], i) => (
        <g key={String(n)}>
          <rect x={470} y={34 + i * 46} width={250} height={38} rx={8} fill={String(c)} fillOpacity={0.15} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={480} y={52 + i * 46} anchor="start" bold size={10.5}>{String(n)}</Txt><Txt x={480} y={65 + i * 46} anchor="start" size={9.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      <Txt x={560} y={228} bold size={12} color={DEEP.blue}>Glande pylorique</Txt>
      {[["Cellules à mucus", "protection", C.amber], ["Cellules G", "gastrine", C.green], ["Cellules D", "somatostatine", C.red]].map(([n, s, c], i) => (
        <g key={String(n)}>
          <rect x={490} y={286 + i * 42} width={230} height={34} rx={8} fill={String(c)} fillOpacity={0.15} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={500} y={302 + i * 42} anchor="start" bold size={10.5}>{String(n)}</Txt><Txt x={500} y={314 + i * 42} anchor="start" size={9.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      <Card x={20} y={344} w={440} h={116} color={DEEP.green} title="Suc gastrique" lines={["≈ 1 500 mL/jour · pH 1,5-2,5 · hypotonique", "eau 99 % · minéraux 0,6 % (HCl 150-160 mEq/L, KCl 15) ", "organiques 0,4 % : enzymes, mucus, facteur intrinsèque,", "lysozyme, IgA sécrétoire"]} />
    </Figure>
  );
}

// ─── Phases de la sécrétion gastrique ────────────────────────────────────
export function GastricPhasesDiagram() {
  const ph: [string, string, string[], string][] = [
    ["Phase céphalique", "40 %", ["réflexe inconditionné (goût, tact,", "hypoglycémie) et conditionné", "(vue, odeur, état psychique)", "cortex / hypothalamus → vague : ACh", "→ pepsinogène, HCl, cellules G"], C.blue],
    ["Phase gastrique", "50 %", ["distension gastrique + produits de", "digestion protéique : stimulent", "vago-vagal (ACh), gastrine, histamine", "(ECL) · pH acide : inhibe"], C.green],
    ["Phase intestinale", "10 %", ["distension duodénale (pH 3) :", "gastrine → stimule", "pH acide + produits lipidiques :", "sécrétine → HCl ↓", "somatostatine → gastrine ↓"], C.amber],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Les trois phases de la sécrétion gastrique stimulée" caption="Sécrétion basale (5-10 % du maximum, riche en mucine, cholinergique) puis sécrétion stimulée en trois phases : céphalique (40 %), gastrique (50 %), intestinale (10 %) ; trois mécanismes : nerveux, endocrine (gastrine) et paracrine (histamine, somatostatine)">
      {ph.map(([n, p, lines, c], i) => (
        <g key={n}>
          <rect x={20 + i * 235} y={20} width={225} height={234} rx={12} fill={c} fillOpacity={0.1} stroke={c} strokeWidth={2} />
          <Txt x={132 + i * 235} y={46} bold size={12.5}>{n}</Txt>
          <rect x={80 + i * 235} y={56} width={104} height={34} rx={17} fill={c} fillOpacity={0.4} /><Txt x={132 + i * 235} y={79} bold size={16}>{p}</Txt>
          {lines.map((l, k) => <Txt key={k} x={32 + i * 235} y={116 + k * 20} anchor="start" size={10} color={C.grey}>{l}</Txt>)}
        </g>
      ))}
      <Card x={20} y={274} w={225} h={92} color={DEEP.blue} title="Mécanisme nerveux" lines={["ACh (M3, Gq/IP3-Ca²⁺) : pepsinogène,", "HCl, mucus ; gastrine + histamine", "(indirect) · atropine : bloque"]} />
      <Card x={255} y={274} w={225} h={92} color={DEEP.green} title="Mécanisme endocrine" lines={["gastrine (cellules G) : direct (CCK-B)", "et via l'histamine", "GRP (bombésine) stimule la gastrine"]} />
      <Card x={490} y={274} w={230} h={92} color={DEEP.red} title="Mécanisme paracrine" lines={["histamine (ECL, H2, AMPc) :", "bloquée par la cimétidine", "somatostatine : inhibe (Gi)"]} />
      <Card x={20} y={380} w={700} h={78} color={DEEP.violet} title="Inhibiteurs" lines={["sécrétine (↑ HCO₃⁻ et mucus, ↓ HCl) · somatostatine · PGE2 (inhibe la pompe H⁺/K⁺, antagoniste de l'histamine)", "les AINS inhibent la PGE2 → hyperacidité et risque d'ulcère"]} />
    </Figure>
  );
}

// ─── Cellule pariétale : récepteurs ──────────────────────────────────────
export function ParietalControlDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Contrôle de la cellule pariétale : ACh, gastrine, histamine" caption="Trois stimulants de la cellule pariétale : l'ACh (M3, Gq/IP3-Ca²⁺), la gastrine (récepteur CCK-B) et l'histamine des cellules ECL (H2, Gs/AMPc) ; la somatostatine (Gi) et la PGE2 freinent ; atropine, cimétidine et AINS agissent à ces niveaux">
      <circle cx={370} cy={230} r={70} fill={C.red} fillOpacity={0.2} stroke={C.red} strokeWidth={3} />
      <Txt x={370} y={222} bold size={13}>Cellule</Txt><Txt x={370} y={240} bold size={13}>pariétale</Txt><Txt x={370} y={258} size={10} color={C.grey}>pompe H⁺/K⁺ → HCl</Txt>
      <Box x={20} y={30} w={190} h={54} t="Fibre vagale" s="ACh · récepteur M3" c={C.blue} size={11.5} />
      {arrow("M210,70 L318,190")}<Txt x={130} y={112} size={9.5} bold color={DEEP.blue}>Gq / PLC / IP3-Ca²⁺</Txt>
      <Box x={530} y={30} w={190} h={54} t="Cellule G" s="gastrine · récepteur CCK-B" c={C.green} size={11.5} />
      {arrow("M530,70 L422,190")}
      <Box x={275} y={20} w={190} h={54} t="Cellule ECL" s="histamine · récepteur H2" c={C.violet} size={11.5} />
      {arrow("M370,76 L370,158")}<Txt x={378} y={120} anchor="start" size={9.5} bold color={DEEP.violet}>Gs / AMPc</Txt>
      <path d="M530,50 L468,48" fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#fig-arrow)" />
      <Txt x={498} y={40} size={9} color={C.grey}>gastrine → ECL</Txt>
      <Box x={20} y={330} w={200} h={54} t="Somatostatine (cellules D)" s="Gi · ↓ AMPc" c={C.red} size={11} />
      <path d="M220,346 L316,268" fill="none" stroke={C.red} strokeWidth={2.2} strokeDasharray="6 4" /><circle cx={316} cy={268} r={5} fill={C.red} />
      <Box x={520} y={330} w={200} h={54} t="PGE2" s="inhibe la pompe H⁺/K⁺" c={C.red} size={11.5} />
      <path d="M520,346 L424,268" fill="none" stroke={C.red} strokeWidth={2.2} strokeDasharray="6 4" /><circle cx={424} cy={268} r={5} fill={C.red} />
      <Card x={20} y={396} w={225} h={58} color={DEEP.blue} title="Atropine" lines={["bloque les récepteurs M3"]} />
      <Card x={258} y={396} w={225} h={58} color={DEEP.violet} title="Cimétidine" lines={["bloque les récepteurs H2"]} />
      <Card x={496} y={396} w={224} h={58} color={DEEP.red} title="AINS" lines={["↓ PGE2 → hyperacidité"]} />
    </Figure>
  );
}

// ─── Facteur intrinsèque et mucus ────────────────────────────────────────
export function IntrinsicFactorDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Facteur intrinsèque, vitamine B12 et barrière muqueuse" caption="La cellule pariétale sécrète le facteur intrinsèque (glycoprotéine) : le complexe FI/B12 protège la vitamine B12 de la digestion et se lie à des récepteurs de l'iléon (endocytose) ; le mucus gastrique (0,2-1 mm, HCO₃⁻) maintient un pH 7 à l'épithélium ; Helicobacter pylori et l'achlorhydrie perturbent ces défenses">
      <Box x={20} y={20} w={200} h={60} t="Estomac" s="B12 liée à la protéine R" c={C.red} size={12} />
      {arrow("M220,50 L270,50")}
      <Box x={272} y={20} w={200} h={60} t="Duodénum" s="B12 + facteur intrinsèque" c={C.amber} size={12} />
      {arrow("M472,50 L522,50")}
      <Box x={524} y={20} w={196} h={60} t="Iléon terminal" s="récepteurs (cubiline)" c={C.green} size={12} />
      {arrow("M622,82 L622,116")}
      <Box x={480} y={118} w={240} h={54} t="Endocytose du complexe FI/B12" s="pôle apical de l'entérocyte" c={C.violet} size={11} />
      {arrow("M600,174 L600,206")}
      <Box x={480} y={208} w={240} h={54} t="Exocytose · transcobalamine II" s="distribution tissulaire" c={C.blue} size={11} />
      <Card x={20} y={110} w={330} h={110} color={DEEP.red} title="Absence de facteur intrinsèque" lines={["achylie / gastrite atrophique (Biermer)", "→ B12 non absorbée (et folates)", "→ anémie mégaloblastique", "réserves hépatiques : carence en 3-5 ans"]} />
      <Txt x={175} y={262} bold size={12} color={DEEP.green}>Barrière du mucus gastrique</Txt>
      <rect x={20} y={274} width={330} height={44} fill={C.amber} fillOpacity={0.35} stroke={C.amber} strokeWidth={2} /><Txt x={185} y={294} bold size={10.5}>gel de mucus : 0,2 – 1 mm · pH 7 à l'épithélium</Txt><Txt x={185} y={308} size={9.5} color={C.grey}>glycoprotéines, eau, HCO₃⁻ neutralisant le HCl</Txt>
      <rect x={20} y={318} width={330} height={36} fill={C.red} fillOpacity={0.25} stroke={C.red} strokeWidth={2} /><Txt x={185} y={340} bold size={10.5}>épithélium gastrique</Txt>
      <rect x={20} y={252} width={330} height={0} />
      <Txt x={185} y={372} size={10} color={DEEP.red}>lumière : HCl, pH 1,5-2,5</Txt>
      <Card x={370} y={286} w={350} h={90} color={DEEP.amber} title="Helicobacter pylori et AINS" lines={["l'infection fragilise la barrière muqueuse", "les AINS ↓ PGE2 → ↓ mucus, ↑ acide", "→ ulcère gastro-duodénal"]} />
      <Card x={20} y={396} w={700} h={58} color={DEEP.blue} title="HCl : rôles" lines={["active le pepsinogène · réduit Fe³⁺ en Fe²⁺ · stimule l'évacuation gastrique · hypersécrétion : ulcère · déficit : achylie"]} />
    </Figure>
  );
}

// ─── Régulation pancréatique ─────────────────────────────────────────────
export function PancreaticRegulationDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Régulation de la sécrétion pancréatique exocrine" caption="Deux sécrétions : acinaire (enzymes) stimulée par CCK, gastrine, GRP et l'ACh du vague ; canalaire (eau et HCO₃⁻) stimulée par la sécrétine et le VIP libérés par le duodénum à pH 4,5-5 ; phase intestinale = 70 % ; la somatostatine inhibe">
      <Box x={20} y={20} w={220} h={64} t="Muqueuse duodénale" s="acidité (pH 4,5-5), lipides, protéines" c={C.amber} size={11.5} />
      {arrow("M60,86 L60,150")}<Txt x={70} y={120} anchor="start" size={10} bold color={DEEP.blue}>sécrétine + VIP</Txt>
      {arrow("M190,86 L190,150")}<Txt x={200} y={120} anchor="start" size={10} bold color={DEEP.red}>CCK</Txt>
      <Box x={20} y={152} w={130} h={64} t="Canaux" s="eau + HCO₃⁻" c={C.blue} size={12} />
      <Box x={160} y={152} w={130} h={64} t="Acini" s="enzymes" c={C.red} size={12} />
      <Box x={20} y={252} w={270} h={54} t="Vague (ACh, M3)" s="stimule les acini + vasodilatation" c={C.green} size={11} />
      {arrow("M225,254 L225,218")}
      <Box x={20} y={320} w={270} h={44} t="Sympathique" s="inhibe (vasoconstriction)" c={C.grey} size={11} />
      <Box x={340} y={20} w={190} h={54} t="Estomac : gastrine, GRP" c={C.green} size={11} />
      <path d="M435,76 C400,110 300,140 250,160" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Box x={550} y={20} w={170} h={54} t="Somatostatine" s="inhibe" c={C.red} size={11.5} />
      <path d="M600,76 C560,120 400,170 296,190" fill="none" stroke={C.red} strokeWidth={2.2} strokeDasharray="6 4" /><circle cx={296} cy={190} r={4.5} fill={C.red} />
      <Txt x={350} y={150} anchor="start" bold size={12}>Phases</Txt>
      {[["Céphalique", "20 %", "nerveux exclusif (ACh)", C.blue, 0.2], ["Gastrique", "10 %", "réflexe vago-pancréatique (ACh, gastrine)", C.green, 0.1], ["Intestinale", "70 %", "CCK et sécrétine : phase principale", C.red, 0.7]].map(([n, p, d, c, w], i) => (
        <g key={String(n)}>
          <Txt x={350} y={176 + i * 52} anchor="start" bold size={11}>{String(n)} · {String(p)}</Txt>
          <rect x={350} y={182 + i * 52} width={Number(w) * 360} height={12} rx={5} fill={String(c)} fillOpacity={0.55} />
          <Txt x={350} y={210 + i * 52} anchor="start" size={9.5} color={C.grey}>{String(d)}</Txt>
        </g>
      ))}
      <Card x={20} y={384} w={350} h={72} color={DEEP.violet} title="Organisation" lines={["acini : sécrétion riche en enzymes", "canaux : sécrétion riche en HCO₃⁻"]} />
      <Card x={380} y={344} w={340} h={112} color={DEEP.amber} title="Enzymes pancréatiques" lines={["protéolytiques (zymogènes) : trypsine…", "lipolytiques : lipase (la plus puissante),", "cholestérol-estérase, phospholipase", "amylase : liaisons α-1,4 et α-1,6"]} />
    </Figure>
  );
}

// ─── Formation de la bile ────────────────────────────────────────────────
export function BileFormationDiagram() {
  return (
    <Figure viewBox="0 0 740 500" title="Formation et trajet de la bile" caption="La bile hépatique (hépatocyte → canalicules → canaux, ≈ 600-1 000 mL/jour, pH 7,8-8,6) est stockée et concentrée 5 à 20 fois dans la vésicule (bile vésiculaire, pH 7-7,4) ; deux fractions : cholalo-dépendante (sels biliaires) et cholalo-indépendante (eau et HCO₃⁻) ; trois phases : hépatique, canalaire, vésiculaire">
      <Box x={20} y={20} w={150} h={54} t="Hépatocyte" s="sécrétion canaliculaire" c={C.red} size={12} />
      {arrow("M170,47 L204,47")}
      <Box x={206} y={20} w={150} h={54} t="Canalicules et canaux" s="eau + HCO₃⁻ ajoutés" c={C.blue} size={11} />
      {arrow("M356,47 L390,47")}
      <Box x={392} y={20} w={150} h={54} t="Canal hépatique" s="bile hépatique" c={C.green} size={11.5} />
      {arrow("M542,47 L574,47")}
      <Box x={576} y={20} w={144} h={54} t="Cystique → vésicule" s="bile vésiculaire" c={C.amber} size={11} />
      <Card x={20} y={96} w={340} h={118} color={DEEP.green} title="Bile hépatique / canalaire" lines={["600-1 000 mL/jour · jaune-or · fluide (97 % eau)", "pH 7,8-8,6 · solution de NaHCO₃", "faible en composés organiques", "sécrétion continue"]} />
      <Card x={380} y={96} w={340} h={118} color={DEEP.amber} title="Bile vésiculaire" lines={["20-60 mL/jour · jaune-brun · visqueuse", "pH 7-7,4 · concentrée 5 à 20 ×", "[Na⁺] inchangé · K⁺, Cl⁻, HCO₃⁻ ↓", "sels biliaires, cholestérol, acides gras, lécithine ↑"]} />
      <Txt x={190} y={240} bold size={12}>Cholérèse : deux fractions</Txt>
      <rect x={20} y={252} width={350} height={40} rx={8} fill={C.violet} fillOpacity={0.15} stroke={C.violet} strokeWidth={2} /><Txt x={195} y={278} bold size={11}>Cholalo-dépendante : stimulée par les sels biliaires</Txt>
      <rect x={20} y={298} width={350} height={40} rx={8} fill={C.blue} fillOpacity={0.15} stroke={C.blue} strokeWidth={2} /><Txt x={195} y={324} bold size={11}>Cholalo-indépendante : eau + HCO₃⁻ (sécrétine)</Txt>
      <Txt x={555} y={240} bold size={12}>Composition organique</Txt>
      {[["Sels biliaires", 50, C.red], ["Phospholipides (lécithine)", 40, C.amber], ["Cholestérol", 4, C.blue], ["Acides gras", 4, C.green], ["Pigments biliaires", 2, C.violet]].map(([n, v, c], i) => (
        <g key={String(n)}>
          <rect x={380} y={252 + i * 26} width={Number(v) * 4.4 + 8} height={18} rx={5} fill={String(c)} fillOpacity={0.5} stroke={String(c)} strokeWidth={1.4} />
          <Txt x={392 + Number(v) * 4.4} y={265 + i * 26} anchor="start" size={10} bold>{String(v)} %</Txt><Txt x={388} y={265 + i * 26} anchor="start" size={9.5} bold color="#fff">{Number(v) > 20 ? String(n) : ""}</Txt>
          {Number(v) <= 20 && <Txt x={436 + Number(v) * 4.4} y={265 + i * 26} anchor="start" size={9.5} color={C.grey}>{String(n)}</Txt>}
        </g>
      ))}
      <Card x={20} y={392} w={700} h={98} color={DEEP.blue} title="Rôles de la bile" lines={["digestif : émulsification, solubilisation du cholestérol, micelles (absorption des lipides), stimule sa propre sécrétion et le péristaltisme", "excrétoire : pigments biliaires, excès de cholestérol, xénobiotiques (médicaments, métaux lourds, colorants)", "cycle entéro-hépatique des sels biliaires : réabsorption iléale et retour au foie"]} />
    </Figure>
  );
}

// ─── Régulation de la bile ───────────────────────────────────────────────
export function BileRegulationDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Régulation de la sécrétion et de l'évacuation de la bile" caption="Effet cholérétique : sels biliaires (principal) et sécrétine ; effet cholécystokinétique : la CCK contracte la vésicule et relâche le sphincter d'Oddi (vague en appoint, sympathique inhibiteur)">
      <Box x={20} y={20} w={200} h={54} t="Sels biliaires" s="retour entéro-hépatique" c={C.red} size={12} />
      {arrow("M120,76 L120,120")}<Txt x={130} y={104} anchor="start" size={10} bold color={DEEP.red}>cholérétique principal</Txt>
      <Box x={20} y={122} w={200} h={64} t="Foie" s="sécrétion cholalo-dépendante ↑" c={C.green} size={12} />
      <Box x={270} y={20} w={200} h={54} t="Sécrétine" s="duodénum" c={C.blue} size={12} />
      {arrow("M370,76 L370,120")}<Txt x={380} y={104} anchor="start" size={10} bold color={DEEP.blue}>cholérétique + hydrocholérétique</Txt>
      <Box x={270} y={122} w={200} h={64} t="Canaux biliaires" s="eau + HCO₃⁻ ↑" c={C.blue} size={12} />
      <Box x={520} y={20} w={200} h={54} t="CCK" s="duodénum, jéjunum" c={C.amber} size={12} />
      {arrow("M620,76 L620,120")}<Txt x={630} y={104} anchor="start" size={10} bold color={DEEP.amber}>cholécystokinétique</Txt>
      <Box x={520} y={122} w={200} h={64} t="Vésicule + sphincter d'Oddi" s="contraction / relâchement" c={C.amber} size={11.5} />
      <Card x={20} y={214} w={340} h={92} color={DEEP.green} title="Vague (secondaire)" lines={["↑ flux sanguin hépatique", "↑ libération de sécrétine", "stimule la vidange vésiculaire"]} />
      <Card x={380} y={214} w={340} h={92} color={DEEP.red} title="Sympathique" lines={["↓ flux sanguin hépatique", "inhibe l'évacuation de la bile"]} />
      <Card x={20} y={324} w={700} h={100} color={DEEP.violet} title="Trois phases de la cholérèse" lines={["1. hépatique : sécrétion canaliculaire entre les hépatocytes", "2. canalaire : eau + HCO₃⁻, double le volume, stimulée par la sécrétine", "3. vésiculaire : absorption iso-osmotique d'eau et d'électrolytes → bile concentrée"]} />
    </Figure>
  );
}

// ─── Sécrétion intestinale et bordure en brosse ──────────────────────────
export function IntestinalGlandsDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Sécrétion intestinale : glandes de Brünner et de Lieberkühn" caption="Glandes de Brünner (sous-muqueuse duodénale) : mucus et HCO₃⁻ ; glandes de Lieberkühn (cryptes) : entérocytes, cellules caliciformes, cellules endocrines ; ≈ 1 500 mL/jour isotonique, pH 7,5-8 ; enzymes de la bordure en brosse : disaccharidases et peptidases">
      <rect x={20} y={20} width={330} height={200} rx={12} fill={C.amber} fillOpacity={0.08} stroke={C.amber} strokeWidth={2} />
      <Txt x={185} y={44} bold size={12} color={DEEP.amber}>Glandes de Brünner</Txt><Txt x={185} y={60} size={10} color={C.grey}>exclusives au duodénum (pylore → ampoule de Vater)</Txt>
      {[["mucus + HCO₃⁻", "protège le duodénum"], ["stimulées par", "contact alimentaire, irritation, vague"], ["inhibées par", "le sympathique"]].map(([a, b], i) => (<g key={i}><Txt x={40} y={96 + i * 42} anchor="start" bold size={10.5}>{a}</Txt><Txt x={40} y={112 + i * 42} anchor="start" size={10} color={C.grey}>{b}</Txt></g>))}
      <rect x={380} y={20} width={340} height={200} rx={12} fill={C.green} fillOpacity={0.08} stroke={C.green} strokeWidth={2} />
      <Txt x={550} y={44} bold size={12} color={DEEP.green}>Glandes de Lieberkühn (cryptes)</Txt>
      {[["Entérocytes", "eau, électrolytes"], ["Cellules caliciformes", "mucus alcalin, barrière"], ["Cellules endocrines", "hormones digestives"]].map(([a, b], i) => (<g key={i}><Txt x={400} y={82 + i * 42} anchor="start" bold size={10.5}>{a}</Txt><Txt x={400} y={98 + i * 42} anchor="start" size={10} color={C.grey}>{b}</Txt></g>))}
      <Txt x={370} y={246} bold size={12} color={DEEP.blue}>Enzymes de la bordure en brosse</Txt>
      {[["Saccharase", "saccharose → glucose + fructose", C.blue], ["Maltase / glucoamylase", "maltose → glucose", C.green], ["α-dextrinase / isomaltase", "α-dextrines → glucose", C.amber], ["Lactase", "lactose → glucose + galactose", C.red], ["Peptidases", "oligopeptides → di/tripeptides, AA", C.violet]].map(([n, s, c], i) => (
        <g key={String(n)}>
          <rect x={20 + (i % 3) * 235} y={262 + Math.floor(i / 3) * 62} width={225} height={54} rx={8} fill={String(c)} fillOpacity={0.14} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={132 + (i % 3) * 235} y={284 + Math.floor(i / 3) * 62} bold size={10.5}>{String(n)}</Txt><Txt x={132 + (i % 3) * 235} y={302 + Math.floor(i / 3) * 62} size={9.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      <Card x={490} y={324} w={230} h={54} color={DEEP.blue} title="Lipase intestinale" lines={["action faible"]} />
      <Card x={20} y={396} w={700} h={64} color={DEEP.green} title="Sécrétion : ≈ 1 500 mL/jour, isotonique, pH 7,5-8" lines={["régulation : réflexes entériques (plexus de Meissner), vague (stimule Brünner, pas Lieberkühn), sécrétine ; sympathique inhibe Brünner"]} />
    </Figure>
  );
}

// ─── Côlon, flore et fèces ───────────────────────────────────────────────
export function ColonFloraDiagram() {
  const X = (n: number) => 60 + (n / 11) * 440;
  return (
    <Figure viewBox="0 0 740 470" title="Côlon, flore bactérienne et fèces" caption="Densité bactérienne croissante (salive 10⁶/mL, estomac quasi stérile, duodénum 10⁴/mL, côlon 10¹¹/mL) ; flore de fermentation (85 %, côlon proximal) et de putréfaction (15 %, côlon distal) ; les antibiotiques détruisent la flore de fermentation ; fèces : ¾ d'eau, 50-100 g/jour, brunes (stercobiline)">
      <Txt x={280} y={22} bold size={12}>Densité bactérienne (germes / mL, échelle log.)</Txt>
      {[["Salive", 6, C.amber], ["Estomac", 1.5, C.red], ["Duodénum", 4, C.green], ["Côlon", 11, C.violet]].map(([n, e, c], i) => (
        <g key={String(n)}>
          <Txt x={60} y={62 + i * 38} anchor="end" bold size={10.5}>{String(n)}</Txt>
          <rect x={68} y={46 + i * 38} width={X(Number(e)) - 60} height={26} rx={6} fill={String(c)} fillOpacity={0.5} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={76 + X(Number(e)) - 60} y={64 + i * 38} anchor="start" size={10} bold color={String(c)}>{Number(e) === 1.5 ? "quasi stérile (pH acide)" : `10${["", "", "", "", "⁴", "", "⁶", "", "", "", "", "¹¹"][Number(e)]}`}</Txt>
        </g>
      ))}
      <Box x={20} y={210} w={340} h={70} t="Côlon proximal" s="flore de fermentation aérobie (85 %) : glucides → CO₂ + acides organiques" c={C.green} size={11.5} />
      <Box x={380} y={210} w={340} h={70} t="Côlon distal · sigmoïde · rectum" s="flore de putréfaction anaérobie (15 %) : protéines ; stockage des fèces" c={C.amber} size={11} />
      <Card x={20} y={294} w={230} h={110} color={DEEP.green} title="Fonctions du côlon" lines={["digestive (flore), protection (mucus)", "absorption : eau (ADH), NaCl (aldostérone)", "vitamines K, B12, B1, B2 + NH₃", "sécrétion 200 mL/j, alcaline, sans enzymes"]} />
      <Card x={260} y={294} w={230} h={110} color={DEEP.violet} title="Rôles de la flore" lines={["fermentation et putréfaction", "vitamines B1, B2, B12, folate, biotine, PP", "et K · déconjugaison de la bilirubine", "antibiotiques : dysbiose"]} />
      <Card x={500} y={294} w={220} h={110} color={DEEP.amber} title="Les fèces" lines={["¾ eau + ¼ solide + 150 mL de gaz", "50-100 g/jour · pH ≈ 7,5", "brunes (stercobiline)", "odeur : indole, scatole, H₂S"]} />
      <Card x={20} y={416} w={700} h={44} color={DEEP.red} title="Antibiotiques : flore de fermentation détruite (lactobacilles, bifidus) → la putréfaction colonise le côlon proximal" lines={[]} />
    </Figure>
  );
}
