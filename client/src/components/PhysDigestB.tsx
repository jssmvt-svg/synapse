import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Card, dash } from "./PhysCardio";
import { Box, arrow } from "./PhysRespEndo";

// Physiologie S1 — digestion : absorption et motricité.

// ─── Surface d'absorption ────────────────────────────────────────────────
export function AbsorptionSurfaceDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="L'intestin grêle : trois amplifications de la surface (≈ 200 m²)" caption="Valvules conniventes (× 3), villosités (× 30) et microvillosités de la bordure en brosse (3 000 à 6 000 par cellule) portent la surface d'absorption à ≈ 200 m² ; deux voies : transcellulaire (principale) et paracellulaire (secondaire, maximale au jéjunum)">
      {[["Valvules conniventes", "plis de la muqueuse", "× 3", C.blue], ["Villosités", "0,5-1 mm · 20-40 / mm²", "× 30", C.green], ["Microvillosités", "bordure en brosse", "× 600", C.amber]].map(([n, s, x, c], i) => (
        <g key={String(n)}>
          <rect x={20 + i * 240} y={20} width={228} height={92} rx={12} fill={String(c)} fillOpacity={0.14} stroke={String(c)} strokeWidth={2} />
          <Txt x={134 + i * 240} y={46} bold size={12.5}>{String(n)}</Txt><Txt x={134 + i * 240} y={64} size={10} color={C.grey}>{String(s)}</Txt>
          <Txt x={134 + i * 240} y={98} bold size={18} color={String(c)}>{String(x)}</Txt>
          {i < 2 && <path d={`M${248 + i * 240},66 L${258 + i * 240},66`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />}
        </g>
      ))}
      <path d="M170,150 C160,150 150,240 170,300 C190,340 250,340 260,300 C270,240 260,150 250,150 Z" fill={C.green} fillOpacity={0.16} stroke={C.green} strokeWidth={2.4} />
      <path d="M210,168 L210,290" stroke={C.amber} strokeWidth={5} /><Txt x={278} y={196} anchor="start" size={10} bold color={DEEP.amber}>chylifère (lymphe)</Txt>
      <path d="M232,178 L232,290" stroke={C.red} strokeWidth={3} /><Txt x={278} y={224} anchor="start" size={10} bold color={DEEP.red}>capillaires sanguins</Txt>
      <Txt x={210} y={352} bold size={11} color={DEEP.green}>villosité</Txt>
      <path d="M170,150 L250,150" stroke={C.amber} strokeWidth={5} strokeDasharray="3 2" /><Txt x={278} y={158} anchor="start" size={10} bold color={DEEP.amber}>bordure en brosse</Txt>
      <Card x={400} y={140} w={320} h={100} color={DEEP.blue} title="Circulation intestinale" lines={["1 000 mL/min au repos (20 % du débit cardiaque)", "75 % pour la muqueuse", "augmente en digestion · double système capillaire"]} />
      <Card x={20} y={376} w={340} h={84} color={DEEP.green} title="Voie transcellulaire (principale)" lines={["lumière → bordure en brosse → pôle basal →", "espace paracellulaire → capillaire ou lymphatique"]} />
      <Card x={380} y={256} w={340} h={84} color={DEEP.amber} title="Voie paracellulaire (secondaire)" lines={["par les jonctions intercellulaires", "minimale au duodénum et côlon (serrées),", "maximale au jéjunum (lâches)"]} />
      <Card x={380} y={376} w={340} h={84} color={DEEP.violet} title="Sites d'absorption" lines={["duodénum-jéjunum : site principal", "estomac : eau, alcool, aspirine", "iléon : sels biliaires, vitamine B12"]} />
    </Figure>
  );
}

// ─── Transports de l'entérocyte ──────────────────────────────────────────
export function EnterocyteTransportDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="L'entérocyte : transports apicaux et basaux" caption="Pôle apical : cotransporteurs (Na⁺ / monosaccharides, acides aminés, phosphate, vitamines ; H⁺ / Fe²⁺), échangeurs, diffusion facilitée ; pôle basal : pompe Na⁺/K⁺ (moteur du gradient de Na⁺), pompe Ca²⁺, diffusion facilitée, exocytose (chylomicrons)">
      <rect x={140} y={70} width={460} height={250} rx={24} fill={C.green} fillOpacity={0.1} stroke={C.green} strokeWidth={3} />
      <Txt x={370} y={102} bold size={13} color={DEEP.green}>Entérocyte</Txt>
      <rect x={140} y={40} width={460} height={22} rx={6} fill={C.amber} fillOpacity={0.3} /><Txt x={370} y={56} size={10} bold color={DEEP.amber}>lumière · bordure en brosse (pôle apical)</Txt>
      <rect x={140} y={330} width={460} height={22} rx={6} fill={C.red} fillOpacity={0.3} /><Txt x={370} y={346} size={10} bold color={DEEP.red}>pôle basal → sang (veine porte) ou lymphe</Txt>
      {[["Na⁺ + glucose", 190], ["Na⁺ + acides aminés", 300], ["H⁺ + Fe²⁺", 410], ["Vitamines + Na⁺", 520]].map(([t, x]) => (
        <g key={String(t)}><rect x={Number(x) - 40} y={62} width={80} height={16} rx={4} fill={C.blue} fillOpacity={0.6} /><path d={`M${Number(x)},30 L${Number(x)},80`} stroke={C.blue} strokeWidth={2} markerEnd="url(#fig-arrow)" /><Txt x={Number(x)} y={26} size={9} bold color={DEEP.blue}>{String(t)}</Txt></g>
      ))}
      <Txt x={370} y={196} size={10.5} bold>cotransport actif secondaire (gradient de Na⁺)</Txt>
      <Txt x={370} y={214} size={10} color={C.grey}>échangeurs apicaux : HCO₃⁻/Cl⁻ · Na⁺/H⁺</Txt>
      <circle cx={190} cy={300} r={17} fill={C.red} fillOpacity={0.5} stroke={C.red} strokeWidth={2} /><Txt x={190} y={304} bold size={9.5}>Na⁺/K⁺</Txt>
      <circle cx={280} cy={300} r={17} fill={C.red} fillOpacity={0.5} stroke={C.red} strokeWidth={2} /><Txt x={280} y={304} bold size={9.5}>Ca²⁺</Txt>
      <rect x={340} y={286} width={70} height={28} rx={6} fill={C.violet} fillOpacity={0.5} stroke={C.violet} strokeWidth={2} /><Txt x={375} y={304} bold size={9.5}>GLUT2</Txt>
      <rect x={430} y={286} width={70} height={28} rx={6} fill={C.violet} fillOpacity={0.4} stroke={C.violet} strokeWidth={2} /><Txt x={465} y={304} bold size={9}>Na⁺/Ca²⁺</Txt>
      
      <Card x={20} y={368} w={225} h={88} color={DEEP.blue} title="Transport passif" lines={["diffusion simple : lipides, vitamines", "liposolubles ; eau, NaCl (paracell.)", "facilitée : fructose"]} />
      <Card x={255} y={368} w={225} h={88} color={DEEP.red} title="Transport actif primaire" lines={["pompes Na⁺/K⁺ et Ca²⁺ (pôle basal)", "limité et compétitif"]} />
      <Card x={490} y={368} w={230} h={88} color={DEEP.violet} title="Transport vésiculaire" lines={["endocytose : complexe B12 + FI", "exocytose : chylomicrons,", "complexe B12/transcobalamine II"]} />
    </Figure>
  );
}

// ─── Glucides ────────────────────────────────────────────────────────────
export function CarbDigestionDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Digestion et absorption des glucides" caption="Amylase salivaire (5 %, active jusqu'à pH 4) puis amylase pancréatique (95 %) → dextrines, maltose ; disaccharidases de la bordure en brosse → glucose, galactose, fructose ; absorption : Na⁺/glucose et Na⁺/galactose (SGLT), fructose par diffusion facilitée ; sortie par GLUT2 vers la veine porte">
      <Box x={20} y={20} w={190} h={54} t="Amidon, glycogène" s="6 g/kg/jour d'apport" c={C.amber} size={11.5} />
      {arrow("M210,47 L250,47")}<Txt x={230} y={36} size={9} bold color={DEEP.red}>amylase</Txt>
      <Box x={252} y={20} w={190} h={54} t="Dextrines, maltose" s="maltotriose" c={C.blue} size={11.5} />
      {arrow("M442,47 L482,47")}<Txt x={462} y={36} size={9} bold color={DEEP.red}>disaccharidases</Txt>
      <Box x={484} y={20} w={236} h={54} t="Glucose · galactose · fructose" c={C.green} size={11} />
      <Card x={20} y={92} w={340} h={92} color={DEEP.amber} title="α-amylases (liaisons α-1,4)" lines={["salivaire : 5 % de l'activité, active jusqu'à pH 4", "pancréatique : 95 %, aussi α-1,6, milieu alcalin", "amidon → α-dextrines → maltose"]} />
      <Card x={380} y={92} w={340} h={92} color={DEEP.blue} title="Bordure en brosse" lines={["saccharase : saccharose → glucose + fructose", "maltase / glucoamylase : maltose → glucose", "isomaltase · lactase : lactose → glucose + galactose"]} />
      <Txt x={370} y={214} bold size={12}>Absorption (duodénum et début du jéjunum)</Txt>
      {[["Glucose", "80 %", C.green], ["Galactose", "10 %", C.blue], ["Fructose", "10 %", C.amber]].map(([n, p, c], i) => (
        <g key={String(n)}><rect x={40 + i * 224} y={226} width={200} height={38} rx={8} fill={String(c)} fillOpacity={0.3} stroke={String(c)} strokeWidth={2} /><Txt x={140 + i * 224} y={250} bold size={11.5}>{String(n)} · {String(p)}</Txt></g>
      ))}
      <Card x={20} y={282} w={340} h={78} color={DEEP.green} title="Pôle apical" lines={["glucose, galactose : cotransport Na⁺ (actif secondaire)", "fructose : diffusion facilitée"]} />
      <Card x={380} y={282} w={340} h={78} color={DEEP.violet} title="Pôle basal" lines={["diffusion facilitée (GLUT2) pour tous", "→ veine porte → foie (glycogène ou glycémie)"]} />
      <Card x={20} y={374} w={700} h={84} color={DEEP.red} title="Rendement et facteurs" lines={["90-94 % digérés et absorbés ; 6-10 % fermentés par la flore dans les fèces", "↓ absorption : muqueuse inflammée, péristaltisme exacerbé (temps de contact réduit)"]} />
    </Figure>
  );
}

// ─── Protéines ───────────────────────────────────────────────────────────
export function ProteinDigestionDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Digestion et absorption des protéines" caption="Pepsine gastrique (10-20 %), enzymes pancréatiques activées par l'entérokinase (50 %) et peptidases de la bordure en brosse (30-40 %) ; forme principale d'absorption : di- et tripeptides (cotransport H⁺, jéjunum) ; formes secondaires : acides aminés libres (cotransport Na⁺, iléon)">
      {[["Estomac", "pepsine (HCl, autocatalyse)", "10-20 %", "protéines → acide-métaprotéines → oligopeptides", C.red], ["Lumière duodénale", "enzymes pancréatiques (entérokinase)", "50 %", "polypeptides → oligopeptides, tri-, dipeptides", C.amber], ["Bordure en brosse", "peptidases", "30-40 %", "oligopeptides → di-, tripeptides, acides aminés", C.green]].map(([n, e, p, d, c], i) => (
        <g key={String(n)}>
          <rect x={20} y={16 + i * 78} width={520} height={68} rx={10} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={2} />
          <Txt x={34} y={38 + i * 78} anchor="start" bold size={12}>{String(n)}</Txt><Txt x={34} y={56 + i * 78} anchor="start" size={10} color={C.grey}>{String(e)}</Txt><Txt x={34} y={74 + i * 78} anchor="start" size={10} color={C.grey}>{String(d)}</Txt>
          <rect x={556} y={30 + i * 78} width={164} height={40} rx={20} fill={String(c)} fillOpacity={0.4} /><Txt x={638} y={56 + i * 78} bold size={15}>{String(p)}</Txt>
          {i < 2 && <path d={`M280,${84 + i * 78} L280,${94 + i * 78}`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />}
        </g>
      ))}
      <Txt x={370} y={266} bold size={12}>Absorption</Txt>
      <Card x={20} y={278} w={350} h={102} color={DEEP.green} title="Principale : di- et tripeptides (jéjunum proximal)" lines={["apical : cotransport dipeptide/tripeptide–H⁺", "intracellulaire : hydrolyse en acides aminés", "basal : diffusion facilitée des acides aminés"]} />
      <Card x={380} y={278} w={340} h={102} color={DEEP.blue} title="Secondaire : acides aminés libres (iléon)" lines={["apical : cotransport Na⁺/AA", "3-4 types de transporteurs selon la classe", "basal : diffusion facilitée"]} />
      <Card x={20} y={394} w={700} h={62} color={DEEP.amber} title="Apport : 0,8 g/kg/jour" lines={["le trypsinogène est activé par l'entérokinase, qui active à son tour les autres zymogènes"]} />
    </Figure>
  );
}

// ─── Lipides : enzymes et micelles ───────────────────────────────────────
export function LipidDigestionDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Digestion des lipides : lipases, émulsification et micelles" caption="La lipase pancréatique, enzyme principale, exige l'émulsification préalable par les sels biliaires : triglycéride → 2 acides gras + 1 monoglycéride ; les micelles (amphipathiques, 20-30 molécules lipidiques) sont la seule forme d'absorption des lipides ; concentration micellaire critique des sels biliaires">
      <Box x={20} y={20} w={180} h={54} t="Triglycérides" s="apport : 1 g/kg/jour" c={C.amber} size={12} />
      {arrow("M200,47 L250,47")}<Txt x={225} y={36} size={9} bold color={DEEP.green}>sels biliaires</Txt>
      <Box x={252} y={20} w={200} h={54} t="Gouttelettes émulsionnées" s="surface accrue" c={C.blue} size={11.5} />
      {arrow("M452,47 L502,47")}<Txt x={477} y={36} size={9} bold color={DEEP.red}>lipase pancréatique</Txt>
      <Box x={504} y={20} w={216} h={54} t="2 AGL + monoglycéride" c={C.green} size={11.5} />
      {/* micelle */}
      <circle cx={140} cy={210} r={72} fill={C.violet} fillOpacity={0.12} stroke={C.violet} strokeWidth={2.4} />
      {Array.from({ length: 14 }, (_, i) => { const a = (i / 14) * Math.PI * 2; return (<g key={i}><line x1={140 + Math.cos(a) * 44} y1={210 + Math.sin(a) * 44} x2={140 + Math.cos(a) * 68} y2={210 + Math.sin(a) * 68} stroke={C.violet} strokeWidth={3} /><circle cx={140 + Math.cos(a) * 72} cy={210 + Math.sin(a) * 72} r={5} fill={C.blue} /></g>); })}
      <circle cx={140} cy={210} r={40} fill={C.amber} fillOpacity={0.4} /><Txt x={140} y={206} size={9.5} bold>cholestérol,</Txt><Txt x={140} y={220} size={9.5} bold>MG, AGL,</Txt><Txt x={140} y={234} size={9.5} bold>vit. A D E K</Txt>
      <Txt x={140} y={306} bold size={11} color={DEEP.violet}>Micelle mixte</Txt><Txt x={140} y={322} size={9.5} color={C.grey}>face polaire (●) vers l'extérieur,</Txt><Txt x={140} y={336} size={9.5} color={C.grey}>face hydrophobe vers l'intérieur</Txt>
      <Card x={250} y={100} w={470} h={92} color={DEEP.red} title="Enzymes lipolytiques" lines={["lipases linguale et gastrique (estomac, surtout chez l'enfant)", "lipase pancréatique (active en pH alcalin, la plus importante)", "cholestérol-estérase · phospholipase A2 (lécithine → lysolécithine + AGL)"]} />
      <Card x={250} y={204} w={470} h={92} color={DEEP.violet} title="Micelles : seule forme d'absorption" lines={["sels biliaires amphipathiques ; au-dessus de la concentration", "micellaire critique ils s'agrègent (20-30 molécules lipidiques)", "→ transport jusqu'à la bordure en brosse"]} />
      <Card x={20} y={356} w={340} h={100} color={DEEP.green} title="Après l'absorption" lines={["dans l'entérocyte : resynthèse des triglycérides,", "chylomicrons → exocytose → lymphe (chylifère)", "vitamines liposolubles : diffusion simple"]} />
      <Card x={380} y={316} w={340} h={140} color={DEEP.amber} title="Formes alimentaires" lines={["triglycérides (forme majeure)", "cholestérol estérifié", "phospholipides (lécithine)", "vitamines liposolubles A D E K dans les micelles"]} />
    </Figure>
  );
}

// ─── Bilan hydrique digestif ─────────────────────────────────────────────
export function GutWaterBalanceDiagram() {
  const secr: [string, number, string][] = [["Salivaire", 1500, C.amber], ["Gastrique", 1500, C.red], ["Pancréatique", 1500, C.blue], ["Biliaire", 1000, C.green], ["Intestinale", 1500, C.violet]];
  return (
    <Figure viewBox="0 0 740 470" title="Bilan hydrique du tube digestif" caption="Entrées : 9 000 mL/jour (2 600 mL ingérés + 7 000 mL de sécrétions) ; absorption : 8 900 mL (intestin grêle 8 500 mL, gros intestin 400 mL) ; seuls 100 mL sont éliminés dans les fèces ; le cotransport Na⁺/glucose entraîne l'eau par voie paracellulaire (diffusion iso-osmotique)">
      <rect x={20} y={20} width={220} height={40} rx={8} fill={C.blue} fillOpacity={0.3} stroke={C.blue} strokeWidth={2} /><Txt x={130} y={45} bold size={11.5}>Liquides ingérés : 2 600 mL</Txt>
      {secr.map(([n, v, c], i) => (
        <g key={n}><rect x={20} y={70 + i * 34} width={v * 0.14} height={26} rx={5} fill={c} fillOpacity={0.5} stroke={c} strokeWidth={1.6} /><Txt x={30} y={88 + i * 34} anchor="start" size={10} bold>{n} {v} mL</Txt></g>
      ))}
      <Txt x={130} y={254} bold size={11} color={DEEP.violet}>sécrétions digestives : 7 000 mL</Txt>
      {arrow("M250,150 L330,150")}
      <Box x={332} y={110} w={150} h={80} t="Total : 9 000 mL/jour" c={C.violet} size={12} />
      {arrow("M482,150 L540,150")}
      <Box x={542} y={30} w={178} h={54} t="Intestin grêle" s="absorbe 8 500 mL" c={C.green} size={12} />
      <Box x={542} y={110} w={178} h={54} t="Gros intestin" s="absorbe 400 mL" c={C.amber} size={12} />
      <Box x={542} y={190} w={178} h={54} t="Fèces" s="100 mL/jour" c={C.red} size={12} />
      <path d="M482,150 C512,90 520,60 540,58 M482,150 C512,170 520,190 540,214" fill="none" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />
      <Card x={20} y={284} w={340} h={100} color={DEEP.blue} title="Eau : intestin proximal" lines={["diffusion iso-osmotique paracellulaire couplée", "à l'absorption des nutriments", "1 Na⁺/glucose entraîne ≈ 250 molécules d'eau"]} />
      <Card x={380} y={284} w={340} h={100} color={DEEP.green} title="NaCl et HCO₃⁻" lines={["apport 5-8 g/jour + sécrétions 20-30 g/jour", "absorption ≈ 25-35 g/jour · fèces : 0,5 %", "[Na⁺] cellule 50 mEq/L vs chyme 142 mEq/L"]} />
      <Card x={20} y={396} w={700} h={62} color={DEEP.amber} title="Côlon" lines={["eau absorbée sous l'effet de l'ADH, NaCl sous l'effet de l'aldostérone"]} />
    </Figure>
  );
}

// ─── Fer, calcium, vitamines ─────────────────────────────────────────────
export function MineralVitaminAbsorptionDiagram() {
  return (
    <Figure viewBox="0 0 740 520" title="Absorption du calcium, du fer et des vitamines" caption="Calcium : 30-80 % absorbé, 1/3 par voie paracellulaire passive et 2/3 par voie transcellulaire active régulée par la vitamine D3 (calbindine) ; fer : 5-10 % absorbé, réduit en Fe²⁺ par le HCl, la vitamine C et la fer-réductase, régulé par l'hepcidine ; vitamines liposolubles par diffusion, hydrosolubles par cotransport, B12 à l'iléon">
      <Txt x={190} y={22} bold size={12} color={DEEP.blue}>Calcium</Txt>
      <Box x={20} y={34} w={340} h={44} t="HCl libère le Ca²⁺ des complexes insolubles" c={C.red} size={10.5} />
      {arrow("M190,80 L120,112")}{arrow("M190,80 L270,112")}
      <Box x={20} y={114} w={200} h={80} t="Voie paracellulaire" s="1/3 · passive, non régulée" c={C.blue} size={11} />
      <Box x={240} y={114} w={120} h={80} t="Transcellulaire" s="2/3 · active" c={C.green} size={11} />
      <Txt x={300} y={216} size={9.5} color={C.grey}>canal apical → calbindine →</Txt><Txt x={300} y={230} size={9.5} color={C.grey}>pompe Ca²⁺ / Na⁺/Ca²⁺ basaux</Txt>
      <Txt x={300} y={246} size={9.5} bold color={DEEP.violet}>régulée par la vitamine D3</Txt>
      <Txt x={550} y={22} bold size={12} color={DEEP.red}>Fer (5-10 % absorbé)</Txt>
      <Box x={380} y={34} w={340} h={44} t="Fe³⁺ alimentaire → Fe²⁺" s="HCl · vitamine C · fer-réductase" c={C.amber} size={10.5} />
      {arrow("M550,80 L550,106")}
      <Box x={380} y={108} w={340} h={44} t="Apical : cotransport H⁺/Fe²⁺ (hème : diffusion facilitée)" c={C.blue} size={10} />
      {arrow("M550,154 L550,178")}
      <Box x={380} y={180} w={160} h={54} t="Ferritine" s="stockage (Fe³⁺)" c={C.violet} size={11.5} />
      <Box x={560} y={180} w={160} h={54} t="Transferrine" s="→ plasma → foie, moelle" c={C.green} size={11} />
      <Card x={380} y={250} w={340} h={64} color={DEEP.red} title="Rétrocontrôle : hepcidine" lines={["réserves suffisantes → hepcidine ↑ → ferroportine ↓", "→ absorption du fer ↓"]} />
      <g transform="translate(0 40)">
      <Txt x={370} y={296} bold size={12}>Vitamines</Txt>
      {[["Liposolubles A D E K", "micelles · diffusion simple", "duodénum-jéjunum", C.amber], ["B, C, folates", "cotransport Na⁺ · diffusion facilitée", "duodénum-jéjunum", C.green], ["Vitamine B12", "FI + endocytose (récepteur)", "iléon", C.red]].map(([n, m, s, c], i) => (
        <g key={String(n)}><rect x={20 + i * 235} y={308} width={225} height={76} rx={10} fill={String(c)} fillOpacity={0.14} stroke={String(c)} strokeWidth={2} /><Txt x={132 + i * 235} y={332} bold size={11.5}>{String(n)}</Txt><Txt x={132 + i * 235} y={350} size={9.5} color={C.grey}>{String(m)}</Txt><Txt x={132 + i * 235} y={366} size={9.5} bold color={String(c)}>{String(s)}</Txt></g>
      ))}
      <Card x={20} y={398} w={700} h={68} color={DEEP.blue} title="Calcium et fer : maximaux dans l'intestin proximal" lines={["l'acidité gastrique conditionne l'absorption du calcium et du fer (achlorhydrie, inhibiteurs de la pompe à protons : ↓ absorption)"]} />
      </g>
    </Figure>
  );
}

// ─── Contrôle nerveux et hormonal du tube digestif ───────────────────────
export function GIControlDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Les trois niveaux de contrôle du tube digestif" caption="Nerveux intrinsèque (système nerveux entérique : plexus d'Auerbach pour la motilité, de Meissner pour la sécrétion et l'absorption), nerveux extrinsèque (parasympathique stimulateur, sympathique inhibiteur) et endocrine/paracrine (gastrine, CCK, sécrétine, motiline ; somatostatine, histamine, sérotonine)">
      <rect x={20} y={20} width={230} height={180} rx={12} fill={C.green} fillOpacity={0.1} stroke={C.green} strokeWidth={2} />
      <Txt x={135} y={44} bold size={12} color={DEEP.green}>Système nerveux entérique</Txt>
      <rect x={38} y={56} width={194} height={36} rx={8} fill={C.green} fillOpacity={0.3} /><Txt x={135} y={72} bold size={10.5}>Auerbach (myentérique)</Txt><Txt x={135} y={85} size={9} color={C.grey}>motilité, sphincters</Txt>
      <rect x={38} y={100} width={194} height={36} rx={8} fill={C.blue} fillOpacity={0.3} /><Txt x={135} y={116} bold size={10.5}>Meissner (sous-muqueux)</Txt><Txt x={135} y={129} size={9} color={C.grey}>sécrétion, absorption, flux</Txt>
      <Txt x={135} y={158} size={9.5} bold>ACh : stimule</Txt><Txt x={135} y={172} size={9.5} bold>NA, NO : inhibent · SP, VIP</Txt><Txt x={135} y={188} size={9} color={C.grey}>axe intestin-cerveau</Txt>
      <rect x={260} y={20} width={230} height={180} rx={12} fill={C.blue} fillOpacity={0.1} stroke={C.blue} strokeWidth={2} />
      <Txt x={375} y={44} bold size={12} color={DEEP.blue}>Innervation extrinsèque</Txt>
      <Txt x={375} y={70} bold size={10.5} color={DEEP.green}>Parasympathique (ACh, muscarinique)</Txt><Txt x={375} y={86} size={9.5} color={C.grey}>vague X + nerfs pelviens S2-S4</Txt><Txt x={375} y={100} size={9.5} bold color={DEEP.green}>stimulateur du muscle</Txt>
      <Txt x={375} y={132} bold size={10.5} color={DEEP.red}>Sympathique (noradrénaline)</Txt><Txt x={375} y={148} size={9.5} color={C.grey}>T5-L3 → ganglions paravertébraux</Txt><Txt x={375} y={162} size={9.5} bold color={DEEP.red}>inhibiteur du muscle</Txt>
      <rect x={500} y={20} width={220} height={180} rx={12} fill={C.amber} fillOpacity={0.1} stroke={C.amber} strokeWidth={2} />
      <Txt x={610} y={44} bold size={12} color={DEEP.amber}>Endocrine et paracrine</Txt>
      {[["Gastrine", "acide ↑ · motilité ↑"], ["CCK", "enzymes ↑ · bile ↑ · estomac ↓"], ["Sécrétine", "HCO₃⁻ ↑ · acide ↓ · motilité ↓"], ["Motiline", "motilité intestinale ↑"]].map(([a, b], i) => (<g key={a}><Txt x={512} y={70 + i * 24} anchor="start" bold size={10}>{a}</Txt><Txt x={572} y={70 + i * 24} anchor="start" size={9.3} color={C.grey}>{b}</Txt></g>))}
      <Txt x={610} y={172} size={9.3} bold color={DEEP.violet}>paracrine : somatostatine ↓,</Txt><Txt x={610} y={186} size={9.3} bold color={DEEP.violet}>histamine, sérotonine</Txt>
      <Card x={20} y={216} w={340} h={112} color={DEEP.violet} title="Muscle lisse viscéral" lines={["couches longitudinale, circulaire (+ oblique gastrique)", "syncytium : connexons (jonctions gap)", "cellules pacemaker de Cajal (plexus d'Auerbach)", "tonus myogénique : potentiel de repos ≈ −50 mV"]} />
      <Card x={380} y={216} w={340} h={112} color={DEEP.red} title="Somatostatine : frein général" lines={["gastrine → sécrétion et motilité gastriques ↓", "sécrétine → sécrétion pancréatique ↓", "motiline → motilité intestinale ↓"]} />
      <Card x={20} y={342} w={700} h={124} color={DEEP.green} title="Loi de l'intestin (Starling)" lines={["la distension d'un segment déclenche une onde contractile en amont (ACh, substance P)", "et un relâchement en aval (NO, VIP) : le péristaltisme propulse le contenu vers l'aval", "le contrôle extrinsèque et hormonal module cette autonomie du SNE"]} />
    </Figure>
  );
}

// ─── Mastication ─────────────────────────────────────────────────────────
export function MasticationReflexDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Le réflexe masticateur : deux réflexes qui alternent" caption="Réflexe myotatique : l'ouverture de la bouche étire le masséter (fibres Ia, nerf V) et déclenche sa contraction ; réflexe myotatique inversé : la contraction stimule l'organe tendineux de Golgi (fibres Ib) qui relâche le masséter : abaissement de la mandibule ; le cortex (aire 4) le contrôle volontairement">
      <Box x={20} y={20} w={200} h={60} t="Ouverture de la bouche" s="abaissement de la mandibule" c={C.blue} size={11.5} />
      {arrow("M120,82 L120,112")}
      <Box x={20} y={114} w={200} h={60} t="Étirement du masséter" s="fuseaux neuromusculaires" c={C.green} size={11.5} />
      {arrow("M120,176 L120,206")}<Txt x={130} y={196} anchor="start" size={9.5} bold color={DEEP.blue}>fibres Ia · nerf V</Txt>
      <Box x={20} y={208} w={200} h={60} t="Noyau moteur pontique du V" c={C.violet} size={11} />
      {arrow("M120,270 L120,300")}
      <Box x={20} y={302} w={200} h={60} t="Contraction du masséter" s="élévation → fermeture" c={C.red} size={11.5} />
      {arrow("M220,332 L290,332")}
      <Box x={292} y={302} w={200} h={60} t="Organe tendineux de Golgi" s="fibres Ib · nerf V" c={C.amber} size={11} />
      {arrow("M392,300 L392,268")}
      <Box x={292} y={208} w={200} h={60} t="Noyau moteur pontique" s="relâchement du masséter" c={C.violet} size={11} />
      <path d="M392,206 C392,150 240,100 224,90" fill="none" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" strokeDasharray="6 4" />
      <Txt x={340} y={146} size={9.5} bold color={DEEP.green}>bouche s'ouvre à nouveau</Txt>
      <Card x={510} y={20} w={210} h={130} color={DEEP.blue} title="Contrôle volontaire" lines={["aire frontale 4 → tractus", "cortico-nucléaire → noyaux", "moteurs du V (mandibule),", "VII (oro-facial), XII (langue)"]} />
      <Card x={510} y={166} w={210} h={126} color={DEEP.green} title="Muscles et nerfs" lines={["masticateurs : nerf V", "langue : nerf XII", "oro-faciaux : nerf VII"]} />
      <Card x={20} y={378} w={700} h={64} color={DEEP.amber} title="Valeur fonctionnelle" lines={["digestive (broyage, mélange à la salive → bol alimentaire) · trophique (os faciaux, sécrétion salivaire)"]} />
    </Figure>
  );
}

// ─── Motricité gastrique ─────────────────────────────────────────────────
export function GastricMotilityDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Motricité de l'estomac : stockage, mélange, vidange" caption="Relaxation réceptive (réflexe vago-vagal) : distension jusqu'à 1 000-1 500 mL sans hausse de pression ; contractions rétropulsives (3-4 /min, pacemaker gastrique) pour le mélange ; pompe pylorique (50-70 cm H₂O) pour la vidange ; régulation par la distension (stimulant) et par le pH et les lipides duodénaux (inhibiteurs)">
      <path d="M140,30 C90,50 70,120 90,190 C110,250 190,290 270,270 C330,255 340,220 380,220 L380,180 C340,180 320,120 280,70 C240,30 190,20 140,30 Z" fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={2.4} />
      <Txt x={160} y={120} bold size={11} color={DEEP.green}>fundus</Txt><Txt x={160} y={136} size={9.5} color={C.grey}>stockage · relaxation réceptive</Txt>
      <Txt x={210} y={210} bold size={11} color={DEEP.amber}>corps</Txt><Txt x={210} y={226} size={9.5} color={C.grey}>mélange · rétropulsion</Txt>
      <Txt x={340} y={244} bold size={11} color={DEEP.red}>antre</Txt>
      <rect x={380} y={180} width={16} height={40} rx={4} fill={C.blue} fillOpacity={0.6} /><Txt x={388} y={238} size={9.5} bold color={DEEP.blue}>pylore</Txt>
      <path d="M270,210 C300,190 330,190 360,200" fill="none" stroke={C.red} strokeWidth={2.4} markerEnd="url(#fig-arrow)" />
      <Card x={420} y={20} w={300} h={110} color={DEEP.green} title="Stockage" lines={["relaxation réceptive : réflexe vago-vagal +", "plexus d'Auerbach", "1 000-1 500 mL sans hausse de pression", "séjour ≈ 1 h, stratification du contenu"]} />
      <Card x={420} y={142} w={300} h={110} color={DEEP.amber} title="Mélange" lines={["contractions toniques : 6-10 cm H₂O,", "évacuation des liquides", "péristaltiques rétropulsives : 3-4 /min", "(pacemaker gastrique du corps)"]} />
      <Card x={20} y={296} w={340} h={92} color={DEEP.red} title="Vidange : pompe pylorique" lines={["péristaltisme propulsif 50-70 cm H₂O", "vainc le sphincter pylorique (relâché par le vague)", "relaxation réceptive du bulbe duodénal"]} />
      <Card x={380} y={266} w={340} h={122} color={DEEP.blue} title="Régulation de l'évacuation" lines={["stimulent : distension gastrique (vague, Auerbach),", "produits protéiques (gastrine)", "inhibent : distension et hypertonie duodénales,", "pH duodénal 3,5 (sécrétine), lipides (CCK)"]} />
      <Card x={20} y={402} w={700} h={58} color={DEEP.violet} title="Contractions de la faim" lines={["12-24 h après la vidange complète · tétanisation 2-3 min · hypoglycémie et ghréline (antre) · maximum à 3-4 jours de jeûne"]} />
    </Figure>
  );
}

// ─── Motricité de l'intestin grêle ───────────────────────────────────────
export function SmallIntestineMotilityDiagram() {
  const X = (t: number) => 40 + t * 3.4;
  return (
    <Figure viewBox="0 0 740 460" title="Intestin grêle : segmentation (repas) et complexe moteur migrant (jeûne)" caption="Après un repas : segmentation et mouvements des villosités (mélange, absorption) ; à jeun : complexe moteur migrant toutes les ≈ 90 min, de l'antre au côlon, stimulé par la motiline et inhibé par l'érythromycine, qui balaie l'intestin (passage en 3-5 h) et empêche la migration bactérienne du côlon vers le grêle">
      <Txt x={190} y={22} bold size={12} color={DEEP.green}>Après le repas : segmentation</Txt>
      <rect x={20} y={36} width={340} height={56} rx={28} fill={C.green} fillOpacity={0.1} stroke={C.green} strokeWidth={2} />
      {[60, 120, 180, 240, 300].map((x) => <path key={x} d={`M${x},36 L${x},92`} stroke={C.green} strokeWidth={3} />)}
      {[[90, 1], [150, -1], [210, 1], [270, -1]].map(([x, d], i) => <path key={i} d={`M${x - 14},64 L${x + 14},64`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" markerStart="url(#fig-arrow)" />)}
      <Txt x={190} y={112} size={10} color={C.grey}>contractions annulaires : propulsion locale bidirectionnelle et mélange</Txt>
      <Txt x={550} y={22} bold size={12} color={DEEP.amber}>À jeun : complexe moteur migrant</Txt>
      <rect x={380} y={36} width={340} height={56} rx={28} fill={C.amber} fillOpacity={0.1} stroke={C.amber} strokeWidth={2} />
      <path d="M410,64 L690,64" stroke={C.amber} strokeWidth={5} markerEnd="url(#fig-arrow)" />
      <Txt x={550} y={112} size={10} color={C.grey}>onde qui se déplace vers l'anus, toutes les ≈ 90 min</Txt>
      <Ax2 />
      <Card x={20} y={250} w={230} h={100} color={DEEP.green} title="Mélange et absorption" lines={["villosités : relâchement → absorption,", "contraction → propulsion", "musculaire muqueuse : mélange local"]} />
      <Card x={260} y={250} w={230} h={100} color={DEEP.amber} title="CMM : rôles" lines={["évacue aliments non digérés,", "sécrétions, bactéries, cellules", "passage intestinal en 3-5 h"]} />
      <Card x={500} y={250} w={220} h={100} color={DEEP.violet} title="Modulation du CMM" lines={["motiline : stimule le CMM", "érythromycine : l'inhibe"]} />
      <Card x={20} y={364} w={700} h={88} color={DEEP.blue} title="Régulation" lines={["nerveux intrinsèque (principal) ; parasympathique stimulateur, sympathique inhibiteur ; hormones : gastrine, CCK, motiline", "réflexe gastro-entérique : la distension gastrique stimule le grêle ; réflexe gastro-iléal ; valve iléo-cæcale"]} />
    </Figure>
  );
}
function Ax2() {
  return (
    <g>
      <Txt x={370} y={150} bold size={11.5}>Fréquence de segmentation décroissante du duodénum vers l'iléon</Txt>
      <path d="M40,168 L690,168" stroke="currentColor" strokeWidth={2.2} markerEnd="url(#fig-arrow)" />
      {[["Duodénum", 12, 60], ["Jéjunum", 0, 300], ["Iléon", 0, 540]].map(([n, , x]) => <Txt key={String(n)} x={Number(x)} y={192} bold size={10.5}>{String(n)}</Txt>)}
      <Txt x={60} y={212} size={9.5} color={C.grey}>≈ 12 /min</Txt><Txt x={300} y={212} size={9.5} color={C.grey}>↓</Txt><Txt x={540} y={212} size={9.5} color={C.grey}>↓↓</Txt>
    </g>
  );
}

// ─── Côlon et défécation ─────────────────────────────────────────────────
export function ColonDefecationDiagram() {
  return (
    <Figure viewBox="0 0 740 490" title="Motricité du côlon et défécation" caption="Côlon proximal : haustrations et péristaltisme inversé (absorption de NaCl et d'eau) ; côlon distal : stockage (8-15 h) ; transport de masse 1 à 3 fois par jour ; défécation : distension rectale (≈ 20 mmHg) → centre spinal S2-S4 → nerfs pelviens ; temporisation volontaire, contrôle complet dès 15 mois">
      <Box x={20} y={20} w={220} h={60} t="Cæcum" s="relaxation réceptive" c={C.blue} size={12} />
      <Box x={20} y={100} w={220} h={70} t="Côlon proximal" s="haustrations 3-10 /h · péristaltisme inversé" c={C.green} size={11} />
      <Txt x={130} y={188} size={9.5} color={C.grey}>mélange et absorption de NaCl et d'eau</Txt>
      <Box x={20} y={202} w={220} h={70} t="Côlon distal" s="stockage temporaire (8-15 h)" c={C.amber} size={11.5} />
      <Txt x={130} y={290} size={9.5} color={C.grey}>haustrations 11-17 /h</Txt>
      <Box x={20} y={304} w={220} h={62} t="Transport de masse" s="1 à 3 fois par jour · émotions" c={C.red} size={11.5} />
      {arrow("M130,368 L130,392")}
      <Box x={20} y={394} w={220} h={44} t="Rectum" c={C.violet} size={12} />
      <Txt x={520} y={22} bold size={12} color={DEEP.red}>Réflexe de défécation</Txt>
      {[["Distension du rectum", "pression ≈ 20 mmHg : « appel à la défécation »", C.blue], ["Centre spinal anal S2-S4", "nerfs pelviens (parasympathique)", C.violet], ["Ondes péristaltiques", "côlon et rectum → propulsion vers l'anus", C.green], ["Sphincter anal interne relâché", "évacuation du contenu rectal", C.red]].map(([t, s, c], i) => (
        <g key={String(t)}>
          <Box x={300} y={36 + i * 68} w={420} h={54} t={String(t)} s={String(s)} c={String(c)} size={11} />
          {i < 3 && <path d={`M510,${90 + i * 68} L510,${104 + i * 68}`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />}
        </g>
      ))}
      <Card x={300} y={314} w={420} h={94} color={DEEP.amber} title="Temporisation volontaire" lines={["contraction du sphincter anal externe", "relâchement adaptatif du rectum (Auerbach + sympathique)", "contrôle cortical complet à partir du 15e mois"]} />
      <Card x={20} y={448} w={700} h={36} color={DEEP.blue} title="Réflexe myentérique intrinsèque : efficacité réduite ; réflexe parasympathique extrinsèque : dominant" lines={[]} />
    </Figure>
  );
}
