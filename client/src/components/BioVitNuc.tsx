import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Card, dash } from "./PhysCardio";
import { Box, arrow } from "./PhysRespEndo";

// Biochimie — vitamines liposolubles et hydrosolubles, nucléotides, acides aminés.

// ─── Vitamine A ──────────────────────────────────────────────────────────
export function VitaminADiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Vitamine A : du β-carotène au contrôle des gènes" caption="Le β-carotène est clivé en rétinal dans l'intestin, réduit en rétinol, estérifié et transporté par les chylomicrons jusqu'au foie (stockage) ; vers les tissus le rétinol circule lié à la RBP (complexée à la transthyrétine) ; l'acide rétinoïque agit sur des récepteurs nucléaires qui se fixent sur les RARE">
      <Box x={20} y={20} w={150} h={50} t="β-carotène" s="végétaux (provitamine)" c={C.amber} size={12} />
      {arrow("M170,45 L200,45")}
      <Box x={202} y={20} w={150} h={50} t="Rétinal" s="clivage (muqueuse intestinale)" c={C.red} size={12} />
      {arrow("M352,45 L382,45")}
      <Box x={384} y={20} w={150} h={50} t="Rétinol" s="réduction, puis estérification" c={C.green} size={12} />
      {arrow("M534,45 L564,45")}
      <Box x={566} y={20} w={154} h={50} t="Chylomicrons" s="vers le foie" c={C.violet} size={12} />
      {arrow("M640,72 L640,120")}
      <Box x={520} y={122} w={200} h={54} t="Foie : esters de rétinyle" s="stockage" c={C.blue} size={12} />
      {arrow("M520,150 L400,150")}
      <Box x={200} y={122} w={200} h={54} t="RBP + transthyrétine" s="transport foie → tissus" c={C.amber} size={12} />
      {arrow("M300,178 L300,220")}
      <Box x={200} y={222} w={200} h={54} t="Rétinol → acide rétinoïque" s="cellule cible" c={C.red} size={12} />
      {arrow("M300,278 L300,320")}
      <Box x={170} y={322} w={260} h={54} t="Récepteur nucléaire + RARE" s="facteur de transcription ligand-dépendant" c={C.violet} size={11.5} />
      {arrow("M300,378 L300,410")}
      <Txt x={300} y={432} bold size={11.5} color={DEEP.green}>croissance, différenciation, embryogenèse précoce</Txt>
      <Card x={500} y={220} w={220} h={156} color={DEEP.blue} title="Autres rôles" lines={["synthèse des glycoprotéines et", "du mucus (rétinyl-phosphate)", "limite la kératinisation excessive", "nécessaire à la synthèse hépatique", "de la transferrine"]} />
      <Card x={20} y={220} w={140} h={110} color={DEEP.red} title="Sources" lines={["rétinoïdes : produits", "animaux (foie, huile de", "poisson, jaune d'œuf)"]} />
    </Figure>
  );
}

// ─── Vitamine D ──────────────────────────────────────────────────────────
export function VitaminDDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Vitamine D : une pro-hormone activée en deux hydroxylations" caption="Synthétisée dans la peau sous UV (7-déhydrocholestérol → cholécalciférol D3), elle est 25-hydroxylée dans le foie puis 1-hydroxylée dans le rein (stimulée par la PTH) en calcitriol ; le calcitriol induit la calbindine et favorise l'absorption intestinale du calcium">
      <Box x={20} y={20} w={170} h={56} t="Peau + UV" s="7-déhydrocholestérol" c={C.amber} size={12} />
      {arrow("M190,48 L226,48")}
      <Box x={228} y={20} w={150} h={56} t="Vitamine D3" s="cholécalciférol" c={C.green} size={12} />
      {arrow("M378,48 L410,48")}
      <Box x={412} y={20} w={150} h={56} t="Foie" s="25-hydroxylation" c={C.blue} size={12} />
      {arrow("M562,48 L590,48")}
      <Box x={592} y={20} w={128} h={56} t="Rein" s="1-hydroxylation" c={C.violet} size={12} />
      <Txt x={656} y={94} size={10} bold color={DEEP.red}>stimulée par la PTH</Txt>
      {arrow("M656,98 L656,140")}
      <Box x={520} y={142} w={200} h={56} t="Calcitriol" s="1,25-(OH)₂ vitamine D3" c={C.red} size={13} />
      <Txt x={110} y={100} size={10} color={C.grey}>D2 (ergocalciférol) :</Txt><Txt x={110} y={114} size={10} color={C.grey}>origine végétale</Txt>
      {arrow("M520,170 L400,214")}
      <Box x={180} y={214} w={220} h={56} t="Récepteur nucléaire" s="↑ calbindine (intestin)" c={C.violet} size={11.5} />
      {arrow("M290,272 L290,308")}
      <Box x={150} y={310} w={280} h={56} t="↑ absorption intestinale du Ca²⁺" s="+ minéralisation osseuse" c={C.green} size={11.5} />
      <Card x={470} y={222} w={250} h={144} color={DEEP.red} title="Effets et pathologies" lines={["agit avec la PTH et la calcitonine", "↓ excrétion rénale de Ca²⁺ / phosphate", "carence : rachitisme (enfant)", "ostéomalacie (adulte)", "excès : hypercalcémie, calcinose"]} />
      <Txt x={370} y={400} size={10} color={C.grey}>Le soleil seul n'intoxique pas : la synthèse cutanée du précurseur est limitée</Txt>
    </Figure>
  );
}

// ─── Vitamines E et C ────────────────────────────────────────────────────
export function VitaminECDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Vitamines E et C : antioxydants et collagène" caption="L'α-tocophérol neutralise les radicaux peroxyles des acides gras polyinsaturés membranaires puis est régénéré par la vitamine C (avec le sélénium et le glutathion) ; la vitamine C est aussi le cofacteur de l'hydroxylation de la proline du collagène (scorbut en cas de carence)">
      <Txt x={200} y={22} bold size={12} color={DEEP.amber}>Vitamine E dans la membrane</Txt>
      <rect x={20} y={36} width={360} height={60} rx={10} fill={C.amber} fillOpacity={0.1} stroke={C.amber} strokeWidth={2} /><Txt x={200} y={60} bold size={11}>acides gras polyinsaturés</Txt><Txt x={200} y={78} size={10} color={C.grey}>membranes cellulaires, cibles de la peroxydation</Txt>
      <Box x={30} y={126} w={140} h={52} t="Radical peroxyle" s="ROO•" c={C.red} size={12} />
      {arrow("M170,152 L210,152")}
      <Box x={212} y={126} w={160} h={52} t="α-tocophérol (E)" s="piège le radical" c={C.amber} size={12} />
      {arrow("M292,180 L292,214")}
      <Box x={212} y={216} w={160} h={52} t="Radical tocophéryle" s="stable, peu réactif" c={C.violet} size={11.5} />
      {arrow("M212,242 L172,242")}
      <Box x={30} y={216} w={140} h={52} t="Vitamine C" s="acide ascorbique" c={C.green} size={12} />
      <Txt x={200} y={296} size={10} bold color={DEEP.green}>le radical tocophéryle est régénéré par la vitamine C</Txt><Txt x={200} y={310} size={10} color={C.grey}>synergie avec le sélénium (glutathion peroxydase)</Txt>
      <Card x={20} y={322} w={360} h={110} color={DEEP.red} title="Carence en vitamine E" lines={["fragilité des globules rouges → anémie hémolytique", "myopathie, ataxie, dégénérescence rétinienne", "stockage : tissu adipeux, membranes"]} />
      <Txt x={555} y={22} bold size={12} color={DEEP.green}>Vitamine C et collagène</Txt>
      <Box x={420} y={40} w={300} h={50} t="Proline du procollagène" c={C.blue} size={12} />
      {arrow("M570,92 L570,130")}
      <Box x={420} y={132} w={300} h={56} t="Prolyl-hydroxylase" s="cofacteur : vitamine C (ascorbate)" c={C.green} size={12} />
      {arrow("M570,190 L570,228")}
      <Box x={420} y={230} w={300} h={50} t="Hydroxyproline → triple hélice stable" c={C.violet} size={11.5} />
      <Card x={420} y={300} w={300} h={132} color={DEEP.red} title="Vitamine C : rôles et scorbut" lines={["réducteur, antioxydant hydrosoluble", "↑ absorption du fer · catabolisme de la tyrosine", "carence ≈ 70 mg/j : scorbut (ecchymoses,", "gencives saignantes, cicatrisation retardée)"]} />
    </Figure>
  );
}

// ─── Vitamine K ──────────────────────────────────────────────────────────
export function VitaminKDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Vitamine K : γ-carboxylation et anticoagulants" caption="La glutamyl-carboxylase, dont la vitamine K sous forme hydroquinone est le cofacteur, carboxyle des glutamates des facteurs II, VII, IX, X et des protéines C et S (chélation du calcium) ; la warfarine et le dicoumarol bloquent la régénération de la forme hydroquinone">
      <Box x={20} y={30} w={200} h={60} t="Facteurs II, VII, IX, X" s="glutamate (Glu) non carboxylé" c={C.grey} size={11.5} />
      {arrow("M220,60 L290,60")}
      <Box x={292} y={30} w={190} h={60} t="Glutamyl-carboxylase" s="γ-carboxylation post-traductionnelle" c={C.blue} size={11} />
      {arrow("M482,60 L520,60")}
      <Box x={522} y={30} w={200} h={60} t="Gla (γ-carboxyglutamate)" s="chélate le Ca²⁺ → coagulation" c={C.red} size={11.5} />
      <Txt x={387} y={116} size={10} color={C.grey}>cofacteur : vitamine K hydroquinone (KH₂)</Txt>
      <path d="M330,120 L330,150 L305,150 L305,172" fill="none" stroke={C.amber} strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      {/* cycle */}
      <Box x={230} y={174} w={150} h={50} t="K hydroquinone" s="forme active (KH₂)" c={C.amber} size={11.5} />
      <Box x={230} y={290} w={150} h={50} t="K époxyde" s="après carboxylation" c={C.violet} size={11.5} />
      <path d="M305,226 L305,286" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <path d="M232,318 C170,318 170,200 226,200" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Txt x={138} y={262} bold size={10.5} color={DEEP.green}>régénération</Txt>
      <rect x={90} y={296} width={100} height={30} rx={7} fill={C.red} fillOpacity={0.3} stroke={C.red} strokeWidth={2} /><Txt x={140} y={316} bold size={10.5} color={DEEP.red}>warfarine ✕</Txt>
      <Card x={420} y={170} w={300} h={130} color={DEEP.blue} title="Formes de la vitamine K" lines={["K1 phylloquinone : légumes verts", "K2 ménaquinone : synthèse bactérienne intestinale", "K3 ménadione : forme synthétique, hydrosoluble", "aussi : γ-carboxylation de l'ostéocalcine"]} />
      <Card x={20} y={366} w={340} h={86} color={DEEP.red} title="Carence" lines={["rare chez l'adulte (flore intestinale) ; risque après", "antibiothérapie prolongée · nouveau-né : intestin stérile", "→ maladie hémorragique sans supplémentation"]} />
      <Card x={380} y={330} w={340} h={122} color={DEEP.amber} title="Anticoagulants oraux" lines={["dicoumarol, warfarine : bloquent la régénération", "de la forme hydroquinone de la vitamine K", "→ facteurs de coagulation non fonctionnels"]} />
    </Figure>
  );
}

// ─── Folates et B12 ──────────────────────────────────────────────────────
export function FolateB12Diagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Folates et vitamine B12 : le carrefour homocystéine-méthionine" caption="La méthionine synthase (cofacteur B12) transforme l'homocystéine en méthionine en régénérant le tétrahydrofolate à partir du N⁵-méthyl-THF ; en cas de carence en B12 le folate reste piégé sous forme de N⁵-méthyl-THF et la synthèse de dTMP baisse : anémie mégaloblastique">
      <Box x={20} y={30} w={170} h={50} t="Acide folique" s="apport alimentaire" c={C.amber} size={12} />
      {arrow("M190,55 L224,55")}
      <Box x={226} y={30} w={190} h={50} t="Tétrahydrofolate (FolH₄)" s="DHFR, NADPH-dépendante" c={C.green} size={11.5} />
      <Txt x={320} y={100} size={10} color={C.grey}>transporte des groupements à un carbone</Txt>
      {arrow("M320,106 L320,140")}
      <Box x={200} y={142} w={240} h={50} t="N⁵,N¹⁰-méthylène-THF" c={C.blue} size={11.5} />
      {arrow("M200,168 L120,168")}
      <Box x={20} y={142} w={100} h={50} t="dTMP" s="ADN" c={C.red} size={12} />
      {arrow("M320,194 L320,228")}
      <Box x={200} y={230} w={240} h={50} t="N⁵-méthyl-THF" s="forme réservoir (piège)" c={C.violet} size={11.5} />
      {arrow("M440,255 L490,255")}
      <Box x={492} y={224} w={228} h={62} t="Méthionine synthase" s="cofacteur : vitamine B12" c={C.amber} size={11.5} />
      <path d="M606,288 L606,340" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" /><Txt x={618} y={318} anchor="start" size={10} bold>homocystéine</Txt><Txt x={618} y={331} anchor="start" size={10} bold>→ méthionine</Txt>
      <path d="M492,264 C470,330 350,330 322,282" fill="none" stroke={C.green} strokeWidth={2.2} strokeDasharray="5 4" markerEnd="url(#fig-arrow)" />
      <Txt x={392} y={350} bold size={10.5} color={DEEP.green}>régénère le FolH₄</Txt>
      <Box x={492} y={30} w={228} h={62} t="Méthylmalonyl-CoA mutase" s="2e réaction dépendante de B12" c={C.violet} size={11} />
      <Txt x={606} y={110} size={10} color={C.grey}>méthylmalonyl-CoA → succinyl-CoA</Txt>
      <Card x={20} y={380} w={340} h={86} color={DEEP.red} title="Piège des folates" lines={["carence en B12 : méthionine synthase bloquée", "→ folate piégé en N⁵-méthyl-THF, dTMP ↓", "→ anémie mégaloblastique / macrocytaire"]} />
      <Card x={380} y={380} w={340} h={86} color={DEEP.blue} title="Repères cliniques" lines={["folate 400 µg/j en périconceptionnel : ↓ spina bifida", "B12 : origine animale, facteur intrinsèque (iléon)", "réserves hépatiques : carence en 3 à 5 ans (Biermer)"]} />
    </Figure>
  );
}

// ─── Nucléotides : purines de novo ───────────────────────────────────────
export function PurineDeNovoDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Synthèse de novo des purines : le cycle est construit sur le PRPP" caption="Le ribose-5-phosphate est activé en PRPP par la PRPP synthétase ; le noyau purique est bâti pas à pas sur le PRPP (glutamine, glycine, aspartate, CO₂, N¹⁰-formyl-THF) jusqu'à l'inosine monophosphate (IMP), puis converti en AMP ou GMP ; la glutamine PRPP amidotransférase est l'étape engagée">
      <Box x={20} y={30} w={160} h={54} t="Ribose-5-phosphate" c={C.amber} size={12} />
      {arrow("M180,57 L228,57")}
      <Txt x={204} y={22} size={9.5} bold color={DEEP.blue}>PRPP synthétase</Txt>
      <Box x={230} y={30} w={150} h={54} t="PRPP" s="ribose activé" c={C.blue} size={13} />
      {arrow("M380,57 L428,57")}
      <Txt x={404} y={22} size={9.5} bold color={DEEP.red}>Gln PRPP amidotransférase</Txt>
      <Box x={430} y={30} w={290} h={54} t="5-phosphoribosylamine" s="étape engagée de la voie purique" c={C.red} size={11.5} />
      <path d="M575,86 L575,140" stroke={C.red} strokeWidth={2.4} strokeDasharray="6 4" markerEnd="url(#fig-arrow)" />
      <Txt x={590} y={118} anchor="start" size={9.5} color={C.grey}>≈ 10 étapes : le noyau</Txt><Txt x={590} y={131} anchor="start" size={9.5} color={C.grey}>purique se construit sur le PRPP</Txt>
      <Box x={430} y={142} w={290} h={60} t="IMP" s="inosine monophosphate : 1er nucléotide purique" c={C.violet} size={13} />
      {arrow("M480,204 L410,260")}{arrow("M670,204 L640,260")}
      <Box x={280} y={262} w={200} h={54} t="AMP" s="adénylosuccinate (aspartate)" c={C.green} size={11.5} />
      <Box x={560} y={262} w={160} h={54} t="GMP" s="XMP (NAD⁺, glutamine)" c={C.amber} size={11.5} />
      <Card x={20} y={130} w={380} h={126} color={DEEP.blue} title="Origine des atomes du noyau purique" lines={["glycine : carbone et azote (C4, C5, N7)", "glutamine : azotes N3 et N9", "aspartate : azote N1", "CO₂ : carbone C6", "N¹⁰-formyl-THF : carbones C2 et C8"]} />
      <Card x={20} y={340} w={340} h={112} color={DEEP.red} title="Points à retenir" lines={["purines : cycle construit directement sur le PRPP", "pyrimidines : anneau construit séparément puis", "attaché au PRPP", "1er nucléotide purique = IMP"]} />
      <Card x={380} y={340} w={340} h={112} color={DEEP.green} title="Voie de récupération (HGPRT)" lines={["recycle hypoxanthine et guanine libres → IMP / GMP", "économise l'énergie de la synthèse de novo"]} />
    </Figure>
  );
}

// ─── Nucléotides : pyrimidines de novo ───────────────────────────────────
export function PyrimidineDeNovoDiagram() {
  const step = (x: number, y: number, w: number, t: string, s: string | undefined, c: string) => <Box x={x} y={y} w={w} h={52} t={t} s={s} c={c} size={11.5} />;
  return (
    <Figure viewBox="0 0 740 450" title="Synthèse de novo des pyrimidines : l'anneau est construit avant le ribose" caption="Contrairement aux purines, l'anneau pyrimidique est bâti séparément (carbamoyl phosphate cytosolique + aspartate) puis attaché au PRPP ; le premier nucléotide est l'orotate → OMP → UMP ; l'étape limitante, la CPS2, est activée par l'ATP et le PRPP et inhibée par l'UTP">
      {step(20, 30, 200, "Glutamine + CO₂ + 2 ATP", undefined, C.grey)}
      {arrow("M220,56 L268,56")}<Txt x={244} y={22} size={9.5} bold color={DEEP.red}>CPS2 (cytosol)</Txt>
      {step(270, 30, 190, "Carbamoyl phosphate", "≠ CPS1 mitochondriale", C.blue)}
      {arrow("M460,56 L508,56")}<Txt x={484} y={22} size={9.5} bold color={DEEP.amber}>+ aspartate</Txt>
      {step(510, 30, 210, "Anneau pyrimidique", "construit séparément", C.amber)}
      {arrow("M615,84 L615,124")}
      {step(510, 126, 210, "Acide orotique (orotate)", "1er composé pyrimidique", C.violet)}
      {arrow("M615,180 L615,214")}<Txt x={630} y={202} anchor="start" size={9.5} bold color={DEEP.blue}>+ PRPP</Txt>
      {step(510, 216, 210, "OMP", "orotidine monophosphate", C.green)}
      {arrow("M510,242 L470,242")}
      {step(270, 216, 190, "UMP", "précurseur des pyrimidines", C.red)}
      {arrow("M365,270 L365,304")}
      {step(270, 306, 190, "UTP → CTP", "CTP synthétase (Gln)", C.blue)}
      <Card x={20} y={130} w={190} h={110} color={DEEP.green} title="Régulation de la CPS2" lines={["activée : ATP, PRPP", "inhibée : produit final UTP"]} />
      <Card x={490} y={306} w={230} h={124} color={DEEP.amber} title="Comparer aux purines" lines={["purines : bâties sur le PRPP", "pyrimidines : anneau d'abord,", "puis ribose (PRPP)", "1er nucléotide : UMP (via orotate)"]} />
      <Card x={20} y={306} w={230} h={124} color={DEEP.blue} title="Deux carbamoyl phosphate synthétases" lines={["CPS2 : cytosol, pyrimidines", "CPS1 : mitochondrie, cycle de l'urée"]} />
    </Figure>
  );
}

// ─── Nucléotides : désoxyribonucléotides ─────────────────────────────────
export function DeoxynucleotideDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Désoxyribonucléotides : ribonucléotide réductase et thymidylate synthase" caption="La ribonucléotide réductase réduit le 2′-OH du ribose des NDP (donneur d'électrons : thiorédoxine) ; la thymidylate synthase méthyle le dUMP en dTMP grâce au N⁵,N¹⁰-méthylène-THF ; le 5-fluorouracile inhibe cette enzyme et le méthotrexate la DHFR">
      <Box x={20} y={30} w={150} h={54} t="NDP" s="ribonucléotide diphosphate" c={C.blue} size={12} />
      {arrow("M170,57 L250,57")}
      <Box x={252} y={30} w={190} h={54} t="Ribonucléotide réductase" s="réduit le 2′-OH du ribose" c={C.red} size={11.5} />
      {arrow("M442,57 L520,57")}
      <Box x={522} y={30} w={198} h={54} t="dNDP" s="désoxyribonucléotide" c={C.green} size={12} />
      <Txt x={347} y={104} size={10} color={C.grey}>donneur d'électrons : thiorédoxine</Txt>
      <path d="M347,110 C347,130 430,130 430,110" fill="none" stroke={C.violet} strokeWidth={0} />
      <Box x={20} y={160} w={150} h={54} t="dUMP" c={C.amber} size={13} />
      {arrow("M170,187 L250,187")}
      <Box x={252} y={160} w={190} h={54} t="Thymidylate synthase" s="méthylation du dUMP" c={C.red} size={11.5} />
      {arrow("M442,187 L520,187")}
      <Box x={522} y={160} w={198} h={54} t="dTMP" s="synthèse de l'ADN" c={C.green} size={13} />
      <Box x={252} y={252} w={190} h={46} t="N⁵,N¹⁰-méthylène-THF" s="donneur de méthyle" c={C.blue} size={11} />
      {arrow("M347,250 L347,218")}
      <path d="M442,276 L560,276 L560,340" fill="none" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Txt x={500} y={292} size={10} bold color={DEEP.amber}>→ DHF (dihydrofolate)</Txt>
      <Box x={460} y={342} w={200} h={46} t="DHFR (NADPH)" s="régénère le THF" c={C.violet} size={11.5} />
      <Card x={20} y={250} w={210} h={124} color={DEEP.red} title="5-fluorouracile" lines={["inhibe la thymidylate synthase", "→ ↓ dTMP, ↓ ADN", "chimiothérapie"]} />
      <Card x={20} y={386} w={330} h={70} color={DEEP.blue} title="Méthotrexate" lines={["inhibe la DHFR → ↓ THF régénéré"]} />
      <Card x={380} y={400} w={340} h={56} color={DEEP.green} title="Cellules à renouvellement rapide" lines={["thymidylate synthase et DHFR très actives"]} />
    </Figure>
  );
}

// ─── Nucléotides : voies de récupération ─────────────────────────────────
export function SalvageDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Voie de récupération des purines : HGPRT et maladies associées" caption="La HGPRT recycle l'hypoxanthine et la guanine libres en IMP / GMP ; son déficit complet (lié à l'X) fait s'accumuler de l'acide urique (syndrome de Lesch-Nyhan) ; le déficit en adénosine désaminase (ADA) accumule la désoxyadénosine, toxique pour les lymphocytes (SCID)">
      <Box x={20} y={40} w={170} h={54} t="Acides nucléiques" s="dégradation" c={C.grey} size={12} />
      {arrow("M190,67 L240,67")}
      <Box x={242} y={40} w={200} h={54} t="Bases puriques libres" s="hypoxanthine · guanine" c={C.amber} size={11.5} />
      {arrow("M442,67 L500,67")}
      <Txt x={470} y={56} size={9.5} bold color={DEEP.green}>+ PRPP</Txt>
      <Box x={502} y={40} w={218} h={54} t="IMP / GMP" s="nucléotides récupérés" c={C.green} size={12} />
      <Txt x={471} y={112} size={10.5} bold color={DEEP.green}>HGPRT</Txt>
      <path d="M342,96 L342,150" stroke={C.red} strokeWidth={2.4} strokeDasharray="6 4" markerEnd="url(#fig-arrow)" />
      <Box x={242} y={152} w={200} h={54} t="Acide urique" s="si bases non recyclées" c={C.red} size={12} />
      <Card x={20} y={250} w={340} h={168} color={DEEP.red} title="Déficit en HGPRT : syndrome de Lesch-Nyhan" lines={["transmission liée à l'X", "accumulation d'acide urique (recyclage impossible)", "hyperuricémie sévère, goutte précoce", "automutilation compulsive", "retard neurodéveloppemental"]} />
      <Card x={380} y={250} w={340} h={168} color={DEEP.violet} title="Déficit en adénosine désaminase (ADA)" lines={["accumulation toxique de désoxyadénosine", "délétère pour les lymphocytes", "déficit immunitaire combiné sévère (SCID)", "", "voie de récupération : économise l'énergie"]} />
    </Figure>
  );
}

// ─── Acides aminés : devenir des squelettes carbonés ─────────────────────
export function AminoAcidFateDiagram() {
  const ent: [string, string, string][] = [
    ["Pyruvate", "Ala · Ser · Cys · Gly · Thr", C.green],
    ["Oxaloacétate", "Asp · Asn", C.green],
    ["α-cétoglutarate", "Glu · Gln · His · Pro · Arg", C.green],
    ["Succinyl-CoA", "Val · Ile · Met · Thr", C.green],
    ["Fumarate", "Phe · Tyr", C.green],
    ["Acétyl-CoA / acétoacétyl-CoA", "Leu · Lys (exclusivement cétogènes)", C.amber],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Devenir du squelette carboné : acides aminés glucoformateurs et cétogènes" caption="Les glucoformateurs (majorité) sont convertis en pyruvate ou en intermédiaires du cycle de Krebs et alimentent la néoglucogenèse ; les cétogènes (leucine, lysine, seuls exclusifs) donnent de l'acétyl-CoA ou de l'acétoacétyl-CoA ; les mixtes (Phe, Tyr, Trp, Ile) sont les deux à la fois">
      {ent.map(([t, aa, c], i) => (
        <g key={t}>
          <rect x={20} y={20 + i * 60} width={250} height={50} rx={10} fill={String(c)} fillOpacity={0.14} stroke={String(c)} strokeWidth={2} />
          <Txt x={145} y={42 + i * 60} bold size={11.5}>{aa}</Txt><Txt x={145} y={58 + i * 60} size={9.5} color={C.grey}>acides aminés</Txt>
          {arrow(`M270,${45 + i * 60} L340,${45 + i * 60}`)}
          <rect x={344} y={20 + i * 60} width={230} height={50} rx={10} fill={String(c)} fillOpacity={0.3} stroke={String(c)} strokeWidth={2} />
          <Txt x={459} y={50 + i * 60} bold size={12}>{t}</Txt>
        </g>
      ))}
      <path d="M580,45 L620,45 L620,200 M580,105 L620,105 M580,165 L620,165 M580,225 L620,225 L620,200 M580,285 L620,285 L620,200" fill="none" stroke={C.green} strokeWidth={2.2} />
      <Box x={630} y={150} w={90} h={100} t="Glucose" s="néoglucogenèse" c={C.green} size={11.5} />
      <path d="M580,345 L640,345 L640,400" fill="none" stroke={C.amber} strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      <Box x={590} y={402} w={130} h={50} t="Corps cétoniques" s="pas de glucose net" c={C.amber} size={11} />
      <Card x={20} y={390} w={310} h={70} color={DEEP.blue} title="Mixtes : glucoformateurs et cétogènes" lines={["Phe, Tyr, Trp, Ile (selon la partie du squelette)"]} />
      <Card x={340} y={390} w={240} h={70} color={DEEP.violet} title="À noter" lines={["Thr apparaît aussi en succinyl-CoA"]} />
    </Figure>
  );
}

// ─── Acides aminés : convergence de l'azote ──────────────────────────────
export function NitrogenConvergenceDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Convergence de l'azote aminé : transamination, désamination, urée" caption="Les transaminases regroupent l'azote de nombreux acides aminés dans le glutamate ; la glutamate déshydrogénase mitochondriale libère alors l'ammoniac (NH₃) et régénère l'α-cétoglutarate avec production de NADH ou NADPH ; l'ammoniac est détoxifié par le cycle de l'urée">
      <Box x={20} y={30} w={190} h={54} t="Acide aminé" s="+ α-cétoglutarate" c={C.blue} size={12} />
      {arrow("M210,57 L260,57")}
      <Txt x={235} y={22} size={9.5} bold color={DEEP.amber}>transaminase</Txt>
      <Box x={262} y={30} w={190} h={54} t="α-cétoacide" s="+ GLUTAMATE" c={C.amber} size={12} />
      <Txt x={357} y={106} size={10} color={C.grey}>les transaminases (ALAT / ASAT) rassemblent l'azote dans le glutamate</Txt>
      {arrow("M357,114 L357,160")}
      <Box x={230} y={162} w={254} h={64} t="Glutamate déshydrogénase" s="mitochondrie · désamination oxydative" c={C.red} size={11.5} />
      {arrow("M230,194 L150,194")}
      <Box x={20} y={168} w={130} h={52} t="α-cétoglutarate" s="régénéré" c={C.blue} size={11.5} />
      {arrow("M484,180 L560,180")}
      <Box x={562} y={154} w={158} h={54} t="NH₃ (ammoniac)" s="libre, toxique" c={C.red} size={12} />
      <Txt x={357} y={252} size={10.5} bold color={DEEP.violet}>+ NAD(P)⁺ → NADH (ou NADPH selon le sens)</Txt>
      {arrow("M641,210 L641,268")}
      <Box x={520} y={270} w={200} h={58} t="Cycle de l'urée" s="détoxification → urée" c={C.green} size={12} />
      <Card x={20} y={300} w={460} h={112} color={DEEP.blue} title="Bilan" lines={["principale voie de convergence de l'azote aminé vers l'ammoniac", "puis élimination par le cycle de l'urée (foie)", "ALAT / ASAT : marqueurs hépatiques"]} />
      <Txt x={620} y={370} size={10} color={C.grey}>Ala, Glu, Asp… : chaque transamination</Txt><Txt x={620} y={384} size={10} color={C.grey}>échange un groupe aminé</Txt>
    </Figure>
  );
}
