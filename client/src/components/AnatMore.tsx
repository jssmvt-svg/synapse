import { Figure, C, Txt } from "./Figure";
import { RED, DEEP, leader } from "./FigKit";

// Anatomie S1 (cours 2 à 5) — schémas complémentaires alignés sur le texte, légendes en toutes lettres.

const SKIN = "#f0c9a8";
const BONE = "#eadfc8";
const BS = "#a78c5b";
const ART = "#d9414f";
const VEIN = "#4f7be8";
const NERVE = "#e0a030";

const chip = (x: number, y: number, w: number, h: number, t: string, c: string, size = 11, sub?: string) => (
  <g key={`${x}-${y}-${t}`}>
    <rect x={x} y={y} width={w} height={h} rx={9} fill={c} fillOpacity={0.16} stroke={c} strokeWidth={2} />
    <Txt x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} bold size={size}>{t}</Txt>
    {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 1.5} color={C.grey}>{sub}</Txt>}
  </g>
);

// ─── Veines superficielles du membre supérieur ───────────────────────────
export function UpperLimbVeinsDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Veines superficielles du membre supérieur (face antérieure)" caption="Veine céphalique (bord latéral) et veine basilique (bord médial) naissent du réseau veineux dorsal de la main ; la veine médiane du coude les relie au pli du coude (site de prélèvement) ; les veines profondes suivent les artères">
      <path d="M170,10 L170,90" stroke={VEIN} strokeWidth={9} strokeLinecap="round" />
      <Txt x={120} y={22} anchor="end" bold size={11} color={VEIN}>Veine axillaire</Txt>
      <path d="M170,90 C140,120 130,170 126,230" stroke={VEIN} strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d="M170,90 C200,130 216,180 218,230" stroke={VEIN} strokeWidth={6} fill="none" strokeLinecap="round" />
      <Txt x={120} y={130} anchor="end" bold size={11} color={VEIN}>Veine céphalique</Txt><Txt x={120} y={144} anchor="end" size={9.5} color={C.grey}>bord latéral (côté du pouce)</Txt>
      <Txt x={226} y={130} anchor="start" bold size={11} color={VEIN}>Veine basilique</Txt><Txt x={226} y={144} anchor="start" size={9.5} color={C.grey}>bord médial (petit doigt)</Txt>
      <path d="M126,230 L218,230" stroke={VEIN} strokeWidth={4} strokeDasharray="0" />
      <path d="M126,230 L218,214" stroke={C.violet} strokeWidth={5} />
      <Txt x={230} y={244} anchor="start" bold size={10.5} color={C.violet}>Veine médiane du coude</Txt><Txt x={230} y={258} anchor="start" size={9.5} color={C.grey}>relie céphalique et basilique</Txt>
      <path d="M126,230 C124,300 120,350 128,410" stroke={VEIN} strokeWidth={5} fill="none" />
      <path d="M218,230 C222,300 216,350 210,410" stroke={VEIN} strokeWidth={5} fill="none" />
      <path d="M172,232 C170,300 172,350 168,400" stroke={C.violet} strokeWidth={4} fill="none" />
      <Txt x={230} y={320} anchor="start" bold size={10.5} color={C.violet}>Veine médiane</Txt><Txt x={230} y={334} anchor="start" bold size={10.5} color={C.violet}>de l'avant-bras</Txt>
      <path d="M128,410 C150,440 190,440 210,410" stroke={VEIN} strokeWidth={5} fill="none" />
      <Txt x={170} y={462} bold size={10.5}>Réseau veineux dorsal de la main</Txt>
      <rect x={360} y={20} width={370} height={430} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={545} y={44} bold size={12}>Superficielles et profondes</Txt>
      {chip(376, 60, 338, 66, "Veines superficielles", VEIN, 12, "dans le fascia superficiel : prélèvements et perfusions")}
      {chip(376, 138, 338, 66, "Veines profondes", C.violet, 12, "veines satellites (venae comitantes) des artères")}
      {chip(376, 216, 338, 66, "Drainage final", C.green, 12, "céphalique et basilique → veine axillaire")}
      {chip(376, 294, 338, 66, "Valvules", C.amber, 12, "présentes partout, plus nombreuses dans le réseau profond")}
      <Txt x={545} y={392} size={10.5} color={C.grey}>au pli du coude, on ponctionne la veine médiane du coude :</Txt>
      <Txt x={545} y={408} size={10.5} color={C.grey}>elle est superficielle et éloignée de l'artère brachiale</Txt>
    </Figure>
  );
}

// ─── Coupe de la cuisse ──────────────────────────────────────────────────
export function ThighCompartmentsDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Coupe transversale de la cuisse : trois compartiments" caption="Compartiment antérieur (quadriceps, sartorius : nerf fémoral), médial (adducteurs : nerf obturateur) et postérieur (ischio-jambiers : nerf sciatique) autour du fémur">
      <ellipse cx={210} cy={210} rx={168} ry={152} fill={SKIN} fillOpacity={0.4} stroke="#b98c68" strokeWidth={3} />
      <Txt x={210} y={44} bold size={11} color={C.grey}>ANTÉRIEUR</Txt><Txt x={210} y={394} bold size={11} color={C.grey}>POSTÉRIEUR</Txt>
      <Txt x={36} y={214} bold size={10} color={C.grey}>latéral</Txt><Txt x={388} y={214} bold size={10} color={C.grey} anchor="end">médial</Txt>
      <circle cx={206} cy={216} r={40} fill={BONE} stroke={BS} strokeWidth={3} /><Txt x={206} y={220} bold size={11}>Fémur</Txt>
      <path d="M110,110 C150,66 270,64 310,110 C300,150 270,166 206,168 C150,166 118,150 110,110z" fill={C.blue} fillOpacity={0.5} stroke={DEEP.blue} strokeWidth={2.5} />
      <Txt x={210} y={112} bold size={11.5}>Quadriceps fémoral</Txt><Txt x={210} y={127} size={9.5}>4 chefs, extenseur du genou</Txt>
      <ellipse cx={318} cy={158} rx={26} ry={14} fill={C.violet} fillOpacity={0.6} stroke={DEEP.violet} strokeWidth={2} /><Txt x={318} y={162} bold size={9}>Sartorius</Txt>
      <path d="M330,190 C356,204 352,258 318,268 C296,270 292,240 300,214z" fill={C.green} fillOpacity={0.55} stroke={DEEP.green} strokeWidth={2.5} /><Txt x={330} y={232} bold size={10}>Adducteurs</Txt>
      <path d="M96,246 C110,310 200,350 290,322 C316,290 292,262 262,262 C240,262 236,280 206,282 C172,282 150,262 120,258z" fill={C.amber} fillOpacity={0.55} stroke={DEEP.amber} strokeWidth={2.5} />
      <Txt x={200} y={324} bold size={11.5}>Ischio-jambiers</Txt><Txt x={200} y={339} size={9.5}>fléchisseurs du genou, extenseurs de la hanche</Txt>
      <circle cx={236} cy={278} r={7} fill={NERVE} stroke="#fff" strokeWidth={1.5} />
      <circle cx={290} cy={178} r={7} fill={ART} stroke="#fff" strokeWidth={1.5} /><circle cx={300} cy={188} r={6} fill={VEIN} stroke="#fff" strokeWidth={1.5} /><circle cx={280} cy={190} r={5} fill={NERVE} stroke="#fff" strokeWidth={1.5} />
      <rect x={410} y={30} width={320} height={390} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={570} y={54} bold size={12}>Nerf et action de chaque compartiment</Txt>
      {[["Antérieur", "nerf fémoral", "sartorius, quadriceps : extension du genou", C.blue], ["Médial", "nerf obturateur", "gracile, pectiné, adducteurs : adduction", C.green], ["Postérieur", "nerf sciatique (partie tibiale)", "semi-tendineux, semi-membraneux, biceps fémoral", C.amber]].map(([t, n, a, c], i) => (
        <g key={String(t)}><rect x={422} y={70 + i * 90} width={296} height={80} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} /><Txt x={570} y={92 + i * 90} bold size={11.5}>{String(t)}</Txt><Txt x={570} y={110 + i * 90} size={10.5} bold color={DEEP.blue}>{String(n)}</Txt><Txt x={570} y={128 + i * 90} size={9.5}>{String(a)}</Txt></g>
      ))}
      <Txt x={570} y={352} size={10} color={C.grey}>● artère et veine fémorales, nerf saphène (bord médial)</Txt>
      <Txt x={570} y={368} size={10} color={C.grey}>● nerf sciatique (à la face postérieure)</Txt>
    </Figure>
  );
}

// ─── Fiche des muscles glutéaux ──────────────────────────────────────────
export function GlutealMusclesDiagram() {
  const rows: [string, string, string, string][] = [
    ["Grand glutéal", "nerf glutéal inférieur", "extension et rotation latérale de la hanche", C.red],
    ["Moyen glutéal", "nerf glutéal supérieur", "abduction, stabilise le bassin à la marche", C.blue],
    ["Petit glutéal", "nerf glutéal supérieur", "abduction et rotation médiale", C.blue],
    ["Tenseur du fascia lata", "nerf glutéal supérieur", "soutient le fémur sur le tibia debout", C.blue],
    ["Piriforme", "rameaux ventraux S1-S2", "rotation latérale de la hanche", C.green],
    ["Obturateur interne et jumeaux", "nerf de l'obturateur interne / du carré fémoral", "rotation latérale de la hanche", C.green],
    ["Carré fémoral", "nerf du carré fémoral", "rotation latérale de la hanche", C.green],
    ["Obturateur externe", "nerf obturateur (branche postérieure)", "rotation latérale de la hanche", C.green],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Région glutéale : qui innerve quoi" caption="Rouge : nerf glutéal inférieur ; bleu : nerf glutéal supérieur (abducteurs) ; vert : rotateurs latéraux profonds de la hanche">
      <Txt x={130} y={22} bold size={11.5}>Muscle</Txt><Txt x={390} y={22} bold size={11.5}>Innervation</Txt><Txt x={610} y={22} bold size={11.5}>Action principale</Txt>
      {rows.map(([m, n, a, c], i) => (
        <g key={m}>
          <rect x={10} y={32 + i * 49} width={720} height={44} rx={8} fill={c} fillOpacity={0.1} stroke={c} strokeWidth={1.6} />
          <rect x={10} y={32 + i * 49} width={8} height={44} rx={4} fill={c} />
          <Txt x={28} y={59 + i * 49} anchor="start" bold size={11}>{m}</Txt>
          <Txt x={260} y={59 + i * 49} anchor="start" size={10}>{n}</Txt>
          <Txt x={500} y={59 + i * 49} anchor="start" size={10} color={C.grey}>{a}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── Quadriceps et ischio-jambiers ───────────────────────────────────────
export function ThighMusclesDiagram() {
  return (
    <Figure viewBox="0 0 740 430" title="Cuisse : extenseurs du genou et fléchisseurs du genou" caption="Le quadriceps (4 chefs) s'insère par le tendon patellaire sur la tubérosité tibiale ; les trois ischio-jambiers naissent de la tubérosité ischiatique et croisent la hanche et le genou">
      <rect x={10} y={10} width={355} height={410} rx={12} fill={C.blue} fillOpacity={0.06} stroke={C.blue} strokeWidth={2} />
      <Txt x={187} y={34} bold size={13} color={DEEP.blue}>Face antérieure : quadriceps</Txt>
      <Txt x={187} y={50} size={10} color={C.grey}>nerf fémoral · extension du genou</Txt>
      {chip(30, 66, 315, 46, "Droit fémoral", C.blue, 11.5, "épine iliaque antéro-inférieure · seul chef qui fléchit aussi la hanche")}
      {chip(30, 120, 315, 40, "Vaste latéral", C.blue, 11.5)}{chip(30, 166, 315, 40, "Vaste médial", C.blue, 11.5)}{chip(30, 212, 315, 40, "Vaste intermédiaire", C.blue, 11.5, undefined)}
      <path d="M187,256 L187,290" stroke={C.blue} strokeWidth={4} markerEnd="url(#fig-arrow)" />
      {chip(60, 296, 255, 34, "Tendon quadricipital → patella", C.violet, 11)}
      <path d="M187,332 L187,352" stroke={C.violet} strokeWidth={4} markerEnd="url(#fig-arrow)" />
      {chip(60, 358, 255, 46, "Tendon patellaire → tubérosité tibiale", C.violet, 11)}
      <rect x={375} y={10} width={355} height={410} rx={12} fill={C.amber} fillOpacity={0.06} stroke={C.amber} strokeWidth={2} />
      <Txt x={552} y={34} bold size={13} color={DEEP.amber}>Face postérieure : ischio-jambiers</Txt>
      <Txt x={552} y={50} size={10} color={C.grey}>nerf sciatique (partie tibiale) · flexion du genou, extension de la hanche</Txt>
      {chip(395, 66, 315, 46, "Naissance commune", C.grey, 11.5, "tubérosité ischiatique")}
      <path d="M552,116 L552,136" stroke={C.grey} strokeWidth={4} markerEnd="url(#fig-arrow)" />
      {chip(395, 142, 315, 52, "Semi-tendineux", C.amber, 11.5, "face médiale du tibia (derrière le sartorius et le gracile)")}
      {chip(395, 202, 315, 52, "Semi-membraneux", C.amber, 11.5, "condyle médial du tibia, face postérieure")}
      {chip(395, 262, 315, 60, "Biceps fémoral", C.amber, 11.5, "tête de la fibula : chef long (nerf tibial), chef court (nerf fibulaire commun)")}
      <Txt x={552} y={352} size={10.5} color={C.grey}>chef court du biceps : naît de la ligne âpre du fémur</Txt>
      <Txt x={552} y={372} size={10.5} color={C.grey}>muscles bi-articulaires : ils croisent la hanche et le genou</Txt>
    </Figure>
  );
}

// ─── Veines du membre inférieur ──────────────────────────────────────────
export function LowerLimbVeinsDiagram() {
  return (
    <Figure viewBox="0 0 740 500" title="Veines du membre inférieur : saphènes et perforantes" caption="La grande veine saphène monte en avant de la malléole médiale et se jette dans la veine fémorale (triangle fémoral) ; la petite veine saphène passe en arrière de la malléole latérale et se jette dans la veine poplitée ; les perforantes relient superficiel et profond">
      <path d="M240,10 L240,60" stroke={VEIN} strokeWidth={10} strokeLinecap="round" /><Txt x={200} y={30} anchor="end" bold size={10.5} color={VEIN}>Veine iliaque externe</Txt>
      <path d="M240,60 L240,250" stroke={C.violet} strokeWidth={8} /><Txt x={200} y={130} anchor="end" bold size={10.5} color={C.violet}>Veine fémorale</Txt>
      <circle cx={240} cy={250} r={5} fill="#fff" stroke={C.violet} strokeWidth={2} />
      <path d="M240,250 L240,330" stroke={C.violet} strokeWidth={7} /><Txt x={200} y={290} anchor="end" bold size={10.5} color={C.violet}>Veine poplitée</Txt>
      <path d="M240,330 L226,470" stroke={C.violet} strokeWidth={5} /><Txt x={200} y={410} anchor="end" size={9.5} color={C.violet} bold>veines tibiales</Txt>
      <path d="M300,66 C310,140 306,260 290,340 C280,400 280,440 290,470" stroke={VEIN} strokeWidth={5} fill="none" />
      <path d="M300,66 L244,66" stroke={VEIN} strokeWidth={5} />
      <Txt x={322} y={110} anchor="start" bold size={10.5} color={VEIN}>Grande veine saphène</Txt><Txt x={322} y={124} anchor="start" size={9.5} color={C.grey}>face médiale</Txt>
      <Txt x={322} y={452} anchor="start" size={9.5} bold color={VEIN}>malléole médiale</Txt>
      <path d="M180,470 C176,430 180,380 224,336" stroke={C.green} strokeWidth={5} fill="none" />
      <Txt x={172} y={440} anchor="end" bold size={10.5} color={DEEP.green}>Petite veine saphène</Txt><Txt x={172} y={454} anchor="end" size={9.5} color={C.grey}>en arrière de la malléole latérale</Txt>
      <path d="M290,180 L244,190 M284,300 L240,300 M186,400 L228,390" stroke={C.amber} strokeWidth={4} />
      <Txt x={300} y={186} anchor="start" size={9.5} bold color={DEEP.amber}>perforantes</Txt>
      <rect x={400} y={20} width={330} height={470} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={44} bold size={12}>Trois types de veines</Txt>
      {chip(414, 58, 302, 62, "Superficielles", VEIN, 12, "grande et petite saphènes")}
      {chip(414, 128, 302, 62, "Perforantes", C.amber, 12, "traversent le fascia : valvules anti-reflux")}
      {chip(414, 198, 302, 62, "Profondes", C.violet, 12, "satellites des artères (tibiales, poplitée, fémorale)")}
      <Txt x={565} y={296} bold size={12} color={RED}>Varices</Txt>
      {["valvules perforantes incompétentes", "reflux du sang profond → superficiel", "dilatation des veines superficielles"].map((t, i) => <Txt key={i} x={565} y={318 + i * 20} size={10.5}>{t}</Txt>)}
      <Txt x={565} y={400} size={10} color={C.grey}>retour veineux contre la gravité :</Txt><Txt x={565} y={416} size={10} color={C.grey}>valvules dans toutes les veines du membre inférieur</Txt>
    </Figure>
  );
}

// ─── Région inguinale ────────────────────────────────────────────────────
export function InguinalRegionDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Région inguinale : structures dérivées des muscles larges" caption="Le ligament inguinal tend du tubercule pubien à l'épine iliaque antéro-supérieure ; le tendon conjoint (oblique interne + transverse) arque au-dessus du cordon spermatique ; le ligament lacunaire et le ligament de Cooper prolongent l'insertion pubienne">
      <path d="M40,60 C120,20 220,20 300,60 L300,150 L40,150z" fill={BONE} stroke={BS} strokeWidth={3} opacity={0.6} />
      <path d="M50,60 L300,132" stroke={C.blue} strokeWidth={10} strokeLinecap="round" />
      <circle cx={50} cy={60} r={9} fill={C.red} stroke="#fff" strokeWidth={1.5} /><Txt x={20} y={24} anchor="start" bold size={10}>Épine iliaque</Txt><Txt x={20} y={37} anchor="start" bold size={10}>antéro-supérieure</Txt>
      <circle cx={300} cy={132} r={9} fill={C.red} stroke="#fff" strokeWidth={1.5} /><Txt x={318} y={112} anchor="start" bold size={10}>Tubercule pubien</Txt>
      <Txt x={150} y={88} bold size={11} color={DEEP.blue} anchor="middle">Ligament inguinal</Txt>
      <path d="M150,150 C170,110 240,110 290,140" stroke={C.green} strokeWidth={9} fill="none" strokeLinecap="round" />
      <Txt x={40} y={176} anchor="start" bold size={10.5} color={DEEP.green}>Tendon conjoint</Txt><line x1={110} y1={170} x2={170} y2={130} stroke="currentColor" strokeOpacity={0.45} />
      <path d="M280,146 C290,160 292,176 282,186" stroke={C.violet} strokeWidth={8} fill="none" strokeLinecap="round" />
      <path d="M170,140 C190,200 290,230 300,260" stroke={C.amber} strokeWidth={10} fill="none" strokeLinecap="round" />
      <Txt x={210} y={236} anchor="start" bold size={10.5} color={DEEP.amber}>Cordon spermatique</Txt><Txt x={210} y={250} anchor="start" size={9.5} color={C.grey}>entouré du muscle crémaster</Txt>
      <path d="M296,140 L296,170" stroke={C.pink} strokeWidth={5} />
      <line x1={300} y1={166} x2={352} y2={188} {...leader} /><Txt x={358} y={192} anchor="start" size={10.5} bold color={DEEP.pink}>Ligament lacunaire (de Gimbernat)</Txt>
      <line x1={296} y1={182} x2={352} y2={214} {...leader} /><Txt x={358} y={218} anchor="start" size={10.5} bold color={DEEP.pink}>Ligament de Cooper (pectinéal)</Txt>
      <rect x={20} y={290} width={700} height={140} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={312} bold size={12}>D'où viennent ces structures ?</Txt>
      {[["Ligament inguinal", "bord libre inférieur de l'aponévrose de l'oblique externe"], ["Ligament lacunaire", "aponévrose de l'oblique externe réfléchie en arrière"], ["Tendon conjoint", "fibres inférieures de l'oblique interne et du transverse"], ["Crémaster", "boucles musculaires de l'oblique interne"]].map(([a, b], i) => (
        <g key={a}><Txt x={40 + (i % 2) * 350} y={340 + Math.floor(i / 2) * 42} anchor="start" bold size={10.5}>{a}</Txt><Txt x={40 + (i % 2) * 350} y={355 + Math.floor(i / 2) * 42} anchor="start" size={9.5} color={C.grey}>{b}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Compartiments péritonéaux ───────────────────────────────────────────
export function PeritonealCompartmentsDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Compartiments supracolique et infracolique" caption="Le côlon transverse et son mésocôlon séparent la cavité péritonéale en étage supracolique (foie, estomac, rate) et étage infracolique (grêle) ; la poche de Morrison est le point le plus déclive en décubitus dorsal ; les gouttières pariéto-coliques relient les deux étages au pelvis">
      <rect x={60} y={20} width={300} height={430} rx={22} fill={SKIN} fillOpacity={0.25} stroke="#b98c68" strokeWidth={3} />
      <path d="M60,210 L360,210" stroke={C.green} strokeWidth={10} strokeLinecap="round" /><Txt x={210} y={204} bold size={10.5} color={DEEP.green}>côlon transverse et mésocôlon transverse</Txt>
      <Txt x={210} y={40} bold size={11.5} color={C.blue}>ÉTAGE SUPRACOLIQUE</Txt>
      <ellipse cx={130} cy={100} rx={64} ry={42} fill={C.pink} fillOpacity={0.5} stroke={DEEP.pink} strokeWidth={2.5} /><Txt x={130} y={104} bold size={11}>Foie</Txt>
      <ellipse cx={282} cy={110} rx={44} ry={34} fill={C.amber} fillOpacity={0.5} stroke={DEEP.amber} strokeWidth={2.5} /><Txt x={282} y={114} bold size={11}>Estomac</Txt>
      <ellipse cx={334} cy={140} rx={20} ry={26} fill={C.violet} fillOpacity={0.55} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={334} y={144} bold size={9.5}>Rate</Txt>
      <Txt x={210} y={240} bold size={11.5} color={C.violet}>ÉTAGE INFRACOLIQUE</Txt>
      <path d="M120,260 L300,260 L300,410 L120,410z" fill={C.blue} fillOpacity={0.15} stroke={C.blue} strokeWidth={2} strokeDasharray="5 4" />
      <Txt x={230} y={390} bold size={11}>Anses jéjuno-iléales</Txt>
      <path d="M210,270 L120,400" stroke={C.grey} strokeWidth={4} /><Txt x={110} y={430} bold size={9.5} anchor="start" color={C.grey}>racine du mésentère</Txt>
      <path d="M90,220 L90,440" stroke={C.green} strokeWidth={14} opacity={0.5} strokeLinecap="round" /><Txt x={76} y={330} anchor="end" bold size={9.5} color={DEEP.green}>côlon ascendant</Txt>
      <path d="M330,220 L330,440" stroke={C.green} strokeWidth={14} opacity={0.5} strokeLinecap="round" /><Txt x={344} y={330} anchor="start" bold size={9.5} color={DEEP.green}>côlon descendant</Txt>
      <path d="M100,160 C80,190 78,230 78,300" stroke={C.red} strokeWidth={3} strokeDasharray="4 3" fill="none" /><Txt x={4} y={250} anchor="start" size={9} bold color={RED}>gouttière</Txt><Txt x={4} y={262} anchor="start" size={9} bold color={RED}>pariéto-colique</Txt>
      <rect x={400} y={20} width={330} height={450} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={44} bold size={12}>Espaces à connaître</Txt>
      {[["Espace sous-phrénique droit", "entre le lobe droit du foie et le diaphragme", C.blue], ["Espace sous-phrénique gauche", "entre le lobe gauche et le diaphragme", C.blue], ["Bourse omentale (arrière-cavité)", "derrière l'estomac ; s'ouvre par le foramen épiploïque de Winslow", C.violet], ["Poche de Morrison", "sous le foie, devant le rein droit : point le plus déclive", C.red], ["Gouttières pariéto-coliques", "droite et gauche : voies de propagation des infections", C.amber]].map(([a, b, c], i) => { const w = String(b); const cut = w.lastIndexOf(" ", 40); const two = w.length > 40; return (
        <g key={String(a)}><rect x={412} y={56 + i * 80} width={306} height={72} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.6} /><Txt x={565} y={76 + i * 80} bold size={11}>{String(a)}</Txt><Txt x={565} y={94 + i * 80} size={9.5}>{two ? w.slice(0, cut) : w}</Txt>{two && <Txt x={565} y={108 + i * 80} size={9.5}>{w.slice(cut + 1)}</Txt>}</g>
      ); })}
    </Figure>
  );
}

// ─── Organes rétropéritonéaux ────────────────────────────────────────────
export function RetroperitonealOrgansDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Organes intrapéritonéaux, rétropéritonéaux primaires et secondaires" caption="La zygose : un organe initialement suspendu par un méso fusionne avec le péritoine pariétal ; il devient secondairement rétropéritonéal, alors que les organes primitivement rétropéritonéaux n'ont jamais eu de méso">
      {[{ x: 10, t: "Intrapéritonéaux", s: "gardent leur méso : mobiles", c: C.blue, items: ["estomac", "intestin grêle (jéjunum, iléon)", "côlon transverse", "côlon sigmoïde", "rate, foie", "queue du pancréas"] },
        { x: 254, t: "Primitivement rétropéritonéaux", s: "jamais de méso", c: C.green, items: ["reins et surrénales", "uretères", "aorte", "veine cave inférieure", "bas rectum", "canal anal"] },
        { x: 498, t: "Secondairement rétropéritonéaux", s: "méso perdu par zygose", c: C.amber, items: ["pancréas (sauf la queue)", "duodénum (sauf les 2 premiers cm)", "côlon ascendant", "côlon descendant", "rectum (2/3 supérieurs)"] }].map((g) => (
        <g key={g.t}>
          <rect x={g.x} y={10} width={232} height={340} rx={12} fill={g.c} fillOpacity={0.07} stroke={g.c} strokeWidth={2} />
          <rect x={g.x} y={10} width={232} height={58} rx={12} fill={g.c} fillOpacity={0.85} />
          <Txt x={g.x + 116} y={34} bold size={11.5} color="#fff">{g.t}</Txt><Txt x={g.x + 116} y={54} size={10} color="#fff">{g.s}</Txt>
          {g.items.map((it, i) => <g key={it}><rect x={g.x + 14} y={82 + i * 42} width={204} height={34} rx={8} fill={g.c} fillOpacity={0.16} stroke={g.c} strokeWidth={1.5} /><Txt x={g.x + 116} y={104 + i * 42} size={10.5} bold>{it}</Txt></g>)}
        </g>
      ))}
      
      <rect x={10} y={362} width={720} height={48} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={382} bold size={11.5}>Zygose : méso → accolement au péritoine pariétal → fusion → l'organe devient fixe</Txt>
      <Txt x={370} y={399} size={10} color={C.grey}>un organe rétropéritonéal est fixe : on ne peut l'atteindre qu'en passant derrière le péritoine</Txt>
    </Figure>
  );
}

// ─── Rate ────────────────────────────────────────────────────────────────
export function SpleenViewsDiagram() {
  return (
    <Figure viewBox="0 0 740 430" title="Rate : face viscérale, pôles, bords et ligaments" caption="Face viscérale concave avec ses impressions (gastrique, rénale, colique) et le hile où entrent les vaisseaux spléniques ; deux ligaments l'attachent : gastro-splénique et spléno-rénal">
      <path d="M80,60 C40,140 60,300 150,360 C230,400 300,340 290,240 C280,140 220,50 150,40 C120,36 96,44 80,60z" fill={C.violet} fillOpacity={0.4} stroke={DEEP.violet} strokeWidth={3} />
      <path d="M86,64 L96,84 M96,58 L104,74" stroke={DEEP.violet} strokeWidth={3} />
      <ellipse cx={190} cy={150} rx={54} ry={62} fill={C.amber} fillOpacity={0.4} stroke={DEEP.amber} strokeWidth={2} strokeDasharray="4 3" /><Txt x={190} y={154} bold size={10.5}>Impression</Txt><Txt x={190} y={168} bold size={10.5}>gastrique</Txt>
      <circle cx={180} cy={228} r={12} fill="#fff" stroke={RED} strokeWidth={2.5} /><Txt x={180} y={232} bold size={8.5} color={RED}>hile</Txt>
      <ellipse cx={190} cy={306} rx={50} ry={34} fill={C.blue} fillOpacity={0.4} stroke={DEEP.blue} strokeWidth={2} strokeDasharray="4 3" /><Txt x={190} y={310} bold size={10.5}>Impression rénale</Txt>
      <ellipse cx={100} cy={310} rx={28} ry={26} fill={C.green} fillOpacity={0.4} stroke={DEEP.green} strokeWidth={2} strokeDasharray="4 3" /><Txt x={100} y={314} bold size={9}>colique</Txt>
      <Txt x={84} y={30} anchor="start" bold size={10} color={DEEP.violet}>bord supérieur (encoches)</Txt>
      <Txt x={150} y={396} bold size={10} color={DEEP.violet}>bord inférieur</Txt>
      <Txt x={300} y={230} anchor="start" bold size={10} color={DEEP.violet}>bord intermédiaire</Txt>
      <Txt x={4} y={190} anchor="start" bold size={10} color={DEEP.violet}>pôle</Txt><Txt x={4} y={203} anchor="start" bold size={10} color={DEEP.violet}>antérieur</Txt>
      <Txt x={294} y={120} anchor="start" bold size={10} color={DEEP.violet}>pôle postérieur</Txt>
      <rect x={400} y={20} width={330} height={400} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={44} bold size={12}>Repères de la rate</Txt>
      {[["2 pôles", "antérieur (latéral) et postérieur (médial)"], ["3 bords", "supérieur, inférieur, intermédiaire"], ["2 faces", "diaphragmatique (lisse) et viscérale (concave)"], ["Ligament gastro-splénique", "hile → grande courbure ; vaisseaux gastriques courts"], ["Ligament spléno-rénal", "hile → rein ; artère et veine spléniques"]].map(([a, b], i) => (
        <g key={a}><rect x={412} y={58 + i * 68} width={306} height={60} rx={8} fill={C.violet} fillOpacity={0.08} stroke={C.violet} strokeWidth={1.5} /><Txt x={565} y={78 + i * 68} bold size={11}>{a}</Txt><Txt x={565} y={96 + i * 68} size={9.5}>{b}</Txt></g>
      ))}
      <Txt x={565} y={404} size={10} color={C.grey}>fonctions : détruit les globules rouges âgés, produit des lymphocytes</Txt>
    </Figure>
  );
}

// ─── Voies biliaires ─────────────────────────────────────────────────────
export function BiliaryTreeDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Voies biliaires extra-hépatiques et sphincter d'Oddi" caption="Canaux hépatiques droit et gauche → canal hépatique commun → (canal cystique vers la vésicule) → canal cholédoque → duodénum ; le cholédoque s'unit au canal de Wirsung avant la papille majeure">
      <path d="M40,60 C40,20 200,10 320,30 C360,50 360,110 300,130 C200,150 60,120 40,60z" fill={C.pink} fillOpacity={0.4} stroke={DEEP.pink} strokeWidth={3} /><Txt x={110} y={90} bold size={12} color={DEEP.pink}>Foie</Txt>
      <path d="M130,100 L200,140" stroke={C.green} strokeWidth={5} /><path d="M270,100 L210,140" stroke={C.green} strokeWidth={5} />
      <Txt x={110} y={126} bold size={9.5} color={DEEP.green} anchor="end">canal hépatique droit</Txt><Txt x={280} y={126} bold size={9.5} color={DEEP.green} anchor="start">canal hépatique gauche</Txt>
      <path d="M205,140 L205,215" stroke={C.green} strokeWidth={8} strokeLinecap="round" /><Txt x={190} y={180} anchor="end" bold size={10.5} color={DEEP.green}>canal hépatique commun</Txt>
      <path d="M205,215 C250,230 270,250 270,285" stroke={C.green} strokeWidth={5} fill="none" />
      <path d="M270,285 C300,310 320,320 320,340 C320,372 280,380 264,352 C256,326 262,300 270,285z" fill={C.green} fillOpacity={0.5} stroke={DEEP.green} strokeWidth={3} /><Txt x={332} y={340} anchor="start" bold size={10.5} color={DEEP.green}>Vésicule biliaire</Txt><Txt x={332} y={354} anchor="start" size={9.5} color={C.grey}>stocke la bile</Txt>
      <Txt x={288} y={264} anchor="start" bold size={10} color={DEEP.green}>canal cystique</Txt>
      <path d="M205,215 L205,340" stroke={C.amber} strokeWidth={9} strokeLinecap="round" /><Txt x={190} y={290} anchor="end" bold size={10.5} color={DEEP.amber}>canal cholédoque</Txt>
      <path d="M100,350 C100,390 130,420 200,420 C270,420 300,400 300,380" fill="none" stroke={C.amber} strokeWidth={0} />
      <rect x={130} y={396} width={120} height={40} rx={20} fill={C.amber} fillOpacity={0.35} stroke={DEEP.amber} strokeWidth={2.5} /><Txt x={190} y={420} bold size={11}>Duodénum (D2)</Txt>
      <path d="M205,340 L205,396" stroke={C.amber} strokeWidth={9} strokeLinecap="round" />
      <path d="M120,340 C150,340 190,350 205,356" stroke={C.violet} strokeWidth={6} fill="none" /><Txt x={8} y={330} anchor="start" bold size={10} color={DEEP.violet}>canal de Wirsung</Txt><Txt x={8} y={343} anchor="start" size={9.5} color={C.grey}>(canal du pancréas)</Txt>
      <circle cx={205} cy={396} r={8} fill={C.red} stroke="#fff" strokeWidth={1.5} /><Txt x={224} y={392} anchor="start" size={9.5} bold color={RED}>papille majeure</Txt>
      <rect x={460} y={20} width={270} height={430} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={595} y={44} bold size={12}>Parcours de la bile</Txt>
      {["1. cellules du foie", "2. canaux hépatiques droit et gauche", "3. canal hépatique commun", "4. vésicule biliaire (par le cystique)", "5. canal cystique (aller-retour)", "6. canal cholédoque", "7. duodénum, 2ᵉ partie"].map((t, i) => (
        <g key={t}><rect x={472} y={58 + i * 54} width={246} height={44} rx={8} fill={C.green} fillOpacity={0.1} stroke={C.green} strokeWidth={1.4} /><Txt x={595} y={85 + i * 54} bold size={10.5}>{t}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Système porte ───────────────────────────────────────────────────────
export function PortalSystemDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Système porte : du tube digestif au foie" caption="La veine porte naît derrière le pancréas de la réunion de la veine splénique et de la veine mésentérique supérieure (la mésentérique inférieure se jette dans l'une d'elles) ; elle apporte au foie le sang veineux riche en nutriments ; les veines hépatiques rejoignent la veine cave inférieure">
      {chip(10, 30, 170, 50, "Rate, estomac", C.violet, 11)}{chip(10, 100, 170, 50, "Intestin grêle, côlon droit", C.blue, 11)}{chip(10, 170, 170, 50, "Côlon gauche, rectum haut", C.green, 11)}
      {chip(240, 30, 170, 50, "Veine splénique", C.violet, 11.5)}{chip(240, 100, 170, 50, "Veine mésentérique supérieure", C.blue, 10.5)}{chip(240, 170, 170, 50, "Veine mésentérique inférieure", C.green, 10.5)}
      <path d="M180,55 L240,55 M180,125 L240,125 M180,195 L240,195" stroke="currentColor" strokeWidth={2.5} markerEnd="url(#fig-arrow)" />
      <path d="M410,55 L470,110 M410,125 L470,125 M410,195 L440,150" stroke="currentColor" strokeWidth={2.5} fill="none" />
      {chip(470, 90, 150, 70, "Veine porte", C.red, 13, "derrière le pancréas")}
      <path d="M545,160 L545,210" stroke="currentColor" strokeWidth={3} markerEnd="url(#fig-arrow)" />
      {chip(450, 214, 190, 56, "Foie (sinusoïdes)", C.pink, 12, "artère hépatique propre aussi")}
      <path d="M545,270 L545,300" stroke="currentColor" strokeWidth={3} markerEnd="url(#fig-arrow)" />
      {chip(450, 304, 190, 50, "3 veines hépatiques", C.green, 11.5)}
      <path d="M545,354 L545,378" stroke="currentColor" strokeWidth={3} markerEnd="url(#fig-arrow)" />
      {chip(450, 380, 190, 34, "Veine cave inférieure", C.blue, 11.5)}
      <rect x={10} y={250} width={400} height={160} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={210} y={272} bold size={12}>À retenir</Txt>
      {["le foie a une double vascularisation :", "artère hépatique propre (sang oxygéné)", "veine porte (sang riche en nutriments)", "le drainage se fait par 3 veines hépatiques", "qui s'ouvrent directement dans la veine cave"].map((t, i) => <Txt key={i} x={210} y={296 + i * 22} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Néphron ─────────────────────────────────────────────────────────────
export function AnatNephronDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Néphron : corpuscule rénal et tubule" caption="Le corpuscule rénal (glomérule dans la capsule de Bowman) est situé dans le cortex ; le tubule comprend le tube contourné proximal, l'anse de Henlé (dans la médulla), le tube contourné distal, puis le tube collecteur qui s'ouvre à la papille">
      <rect x={20} y={20} width={340} height={150} rx={12} fill={C.red} fillOpacity={0.1} stroke={C.red} strokeWidth={1.8} strokeDasharray="6 4" /><Txt x={60} y={40} anchor="start" bold size={11} color={RED}>CORTEX</Txt>
      <rect x={20} y={176} width={340} height={260} rx={12} fill={C.amber} fillOpacity={0.1} stroke={C.amber} strokeWidth={1.8} strokeDasharray="6 4" /><Txt x={60} y={196} anchor="start" bold size={11} color={DEEP.amber}>MÉDULLA</Txt>
      <circle cx={80} cy={100} r={30} fill={C.red} fillOpacity={0.25} stroke={DEEP.red} strokeWidth={3} /><circle cx={80} cy={100} r={16} fill={C.red} fillOpacity={0.5} stroke={DEEP.red} strokeWidth={2} />
      <Txt x={80} y={70} bold size={9.5} color={DEEP.red} >glomérule</Txt>
      <path d="M110,100 C150,100 150,60 190,70 C230,80 200,120 170,110" stroke={C.blue} strokeWidth={8} fill="none" strokeLinecap="round" />
      <Txt x={190} y={50} bold size={10} color={DEEP.blue}>tube contourné proximal</Txt>
      <path d="M170,112 C190,140 220,180 220,300 C220,370 250,370 250,300 C250,230 270,170 280,130" stroke={C.green} strokeWidth={8} fill="none" strokeLinecap="round" />
      <Txt x={150} y={310} anchor="end" bold size={10} color={DEEP.green}>anse de Henlé</Txt>
      <path d="M280,130 C300,100 320,110 330,140 C340,180 336,240 336,330" stroke={C.violet} strokeWidth={8} fill="none" strokeLinecap="round" />
      <Txt x={296} y={78} bold size={10} color={DEEP.violet}>tube contourné distal</Txt>
      <path d="M336,140 L336,420" stroke={C.amber} strokeWidth={12} strokeLinecap="round" opacity={0.8} /><Txt x={330} y={432} anchor="end" bold size={10} color={DEEP.amber}>tube collecteur → canal de Bellini → papille</Txt>
      <rect x={380} y={20} width={350} height={420} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={555} y={44} bold size={12}>Trajet du sang dans le rein</Txt>
      {["artère rénale", "artères segmentaires → lobaires", "artères interlobaires (colonnes rénales)", "artères arquées (base des pyramides)", "artères interlobulaires", "artériole afférente → glomérule", "artériole efférente", "capillaires péritubulaires → veines"].map((t, i) => (
        <g key={t}>
          <rect x={394} y={58 + i * 46} width={322} height={36} rx={8} fill={C.red} fillOpacity={0.09 + i * 0.015} stroke={C.red} strokeWidth={1.4} /><Txt x={555} y={81 + i * 46} bold size={10.5}>{t}</Txt>
          {i < 7 && <path d={`M555,${94 + i * 46} L555,${104 + i * 46}`} stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" />}
        </g>
      ))}
    </Figure>
  );
}

// ─── Trompe utérine ──────────────────────────────────────────────────────
export function FallopianTubeDiagram() {
  return (
    <Figure viewBox="0 0 740 360" title="Trompe utérine : quatre segments" caption="De latéral à médial : infundibulum (pavillon et franges), ampoule (site de la fécondation), isthme (paroi musculaire épaisse) et partie intramurale (dans la paroi utérine) ; les franges captent l'ovocyte à la surface de l'ovaire">
      <ellipse cx={70} cy={210} rx={48} ry={38} fill={C.violet} fillOpacity={0.5} stroke={DEEP.violet} strokeWidth={3} /><Txt x={70} y={214} bold size={11}>Ovaire</Txt>
      <path d="M40,150 L74,120 L60,160 M60,140 L92,120 L80,160 M84,140 L108,126" stroke={C.pink} strokeWidth={4} strokeLinecap="round" fill="none" />
      <path d="M100,130 C140,100 160,110 200,120" stroke={C.amber} strokeWidth={22} fill="none" strokeLinecap="round" opacity={0.85} />
      <path d="M200,120 C260,110 320,110 380,124" stroke={C.green} strokeWidth={32} fill="none" strokeLinecap="round" opacity={0.85} />
      <path d="M380,124 C420,130 450,130 480,128" stroke={C.blue} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.85} />
      <path d="M480,128 L560,140" stroke={C.red} strokeWidth={8} fill="none" strokeLinecap="round" />
      <path d="M540,60 C540,40 690,40 690,60 L680,240 L620,290 L560,240z" fill={C.pink} fillOpacity={0.4} stroke={DEEP.pink} strokeWidth={3} /><Txt x={615} y={160} bold size={11}>Utérus</Txt>
      <line x1={140} y1={100} x2={130} y2={60} {...leader} /><Txt x={130} y={50} bold size={11} color={DEEP.amber}>Infundibulum</Txt><Txt x={130} y={36} size={9.5} color={C.grey}>1 cm · pavillon et franges</Txt>
      <line x1={290} y1={94} x2={290} y2={60} {...leader} /><Txt x={290} y={50} bold size={11} color={DEEP.green}>Ampoule</Txt><Txt x={290} y={36} size={9.5} color={C.grey}>5 cm · fécondation</Txt>
      <line x1={430} y1={122} x2={430} y2={60} {...leader} /><Txt x={430} y={50} bold size={11} color={DEEP.blue}>Isthme</Txt><Txt x={430} y={36} size={9.5} color={C.grey}>2,5 à 3 cm · étroit</Txt>
      <line x1={520} y1={132} x2={500} y2={190} {...leader} /><Txt x={500} y={204} bold size={10.5} color={RED}>Partie intramurale</Txt><Txt x={500} y={218} size={9.5} color={C.grey}>dans la paroi de l'utérus</Txt>
      <rect x={20} y={260} width={500} height={90} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={270} y={280} bold size={11.5}>Trois tuniques de la trompe</Txt>
      {[["Séreuse", "péritoine"], ["Musculaire", "circulaire interne, longitudinale externe"], ["Muqueuse", "cellules ciliées battant vers l'utérus + cellules sécrétrices"]].map(([a, b], i) => <Txt key={a} x={270} y={300 + i * 16} size={10}>{`${a} : ${b}`}</Txt>)}
    </Figure>
  );
}

// ─── Ligament large ──────────────────────────────────────────────────────
export function BroadLigamentDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Ligament large : mésosalpinx, mésovarium, mésomètre" caption="Repli péritonéal du bord de l'utérus à la paroi pelvienne : le mésosalpinx entoure la trompe, le mésovarium attache l'ovaire, le mésomètre forme la base ; le ligament suspenseur contient les vaisseaux ovariens et l'artère utérine longe la base">
      <path d="M300,60 C280,50 260,70 270,100 L270,300 C270,330 300,330 320,300 L330,80 C330,60 320,50 300,60z" fill={C.pink} fillOpacity={0.4} stroke={DEEP.pink} strokeWidth={3} /><Txt x={300} y={200} bold size={11}>Utérus</Txt>
      <path d="M270,100 L110,80 C90,80 80,100 100,120 L270,140z" fill={C.grey} fillOpacity={0.3} stroke={C.grey} strokeWidth={2} />
      <Txt x={190} y={112} bold size={10.5}>Mésosalpinx</Txt>
      <path d="M86,72 C130,50 200,56 260,72" stroke={C.amber} strokeWidth={10} fill="none" strokeLinecap="round" /><Txt x={170} y={46} bold size={10.5} color={DEEP.amber}>Trompe utérine</Txt>
      <path d="M270,140 L120,190 L270,220" fill={C.grey} fillOpacity={0.25} stroke={C.grey} strokeWidth={2} /><Txt x={170} y={190} bold size={10.5}>Mésovarium</Txt>
      <ellipse cx={100} cy={196} rx={34} ry={22} fill={C.violet} fillOpacity={0.5} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={100} y={200} bold size={10.5}>Ovaire</Txt>
      <path d="M270,220 L60,300 L60,330 L270,320z" fill={C.grey} fillOpacity={0.2} stroke={C.grey} strokeWidth={2} /><Txt x={180} y={288} bold size={10.5}>Mésomètre</Txt>
      <path d="M60,330 L270,330" stroke="#b98c68" strokeWidth={6} /><Txt x={170} y={352} size={9.5} color={C.grey}>plancher pelvien</Txt>
      <path d="M296,150 C230,180 200,206 134,206" stroke={C.green} strokeWidth={4} fill="none" strokeDasharray="4 3" /><Txt x={340} y={170} anchor="start" size={9.5} bold color={DEEP.green}>ligament propre de l'ovaire</Txt>
      <path d="M270,262 L120,262" stroke={ART} strokeWidth={5} /><Txt x={170} y={256} size={9} bold color={ART}>artère utérine</Txt>
      <path d="M100,180 C70,130 60,90 54,60" stroke={C.blue} strokeWidth={4} fill="none" /><Txt x={4} y={130} anchor="start" size={9.5} bold color={DEEP.blue}>ligament</Txt><Txt x={4} y={142} anchor="start" size={9.5} bold color={DEEP.blue}>suspenseur</Txt>
      <rect x={420} y={20} width={310} height={370} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={575} y={44} bold size={12}>Contenu du ligament large</Txt>
      {["trompe et ovaire", "ligaments rond et propre de l'ovaire", "artères utérine et ovarienne", "plexus utéro-vaginal et ovarien", "vestiges embryonnaires (canal de Gartner)", "vaisseaux et nœuds lymphatiques"].map((t, i) => <Txt key={t} x={575} y={72 + i * 26} size={10.5}>{t}</Txt>)}
      <Txt x={575} y={252} bold size={12}>Soutiens de l'utérus</Txt>
      {["ligaments vrais : ronds, cardinaux (Mackenrodt),", "utéro-sacrés, pubo-cervicaux", "ligaments faux : ligaments larges, replis péritonéaux", "muscles : diaphragme pelvien, corps périnéal"].map((t, i) => <Txt key={t} x={575} y={276 + i * 20} size={10}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Prostate ────────────────────────────────────────────────────────────
export function ProstateZonesDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Prostate : zones de McNeal (coupe axiale schématique)" caption="Zone périphérique (≈ 70 %, siège du cancer, palpable au toucher rectal), zone centrale (≈ 25 %, autour des canaux éjaculateurs), zone de transition (5 à 10 %, autour de l'urètre : hypertrophie bénigne) et stroma fibromusculaire antérieur">
      <ellipse cx={200} cy={200} rx={150} ry={120} fill={C.pink} fillOpacity={0.35} stroke={DEEP.pink} strokeWidth={3} />
      <path d="M90,160 C90,110 160,100 200,100 C240,100 310,110 310,160 C300,140 250,130 200,130 C150,130 100,140 90,160z" fill={C.grey} fillOpacity={0.5} stroke={C.grey} strokeWidth={2} />
      <path d="M70,230 C80,290 140,318 200,318 C260,318 320,290 330,230 C320,270 260,280 200,280 C140,280 80,270 70,230z" fill={C.red} fillOpacity={0.45} stroke={DEEP.red} strokeWidth={2.5} />
      <ellipse cx={200} cy={240} rx={58} ry={34} fill={C.blue} fillOpacity={0.4} stroke={DEEP.blue} strokeWidth={2.5} />
      <ellipse cx={200} cy={170} rx={52} ry={36} fill={C.green} fillOpacity={0.45} stroke={DEEP.green} strokeWidth={2.5} />
      <ellipse cx={200} cy={174} rx={8} ry={16} fill="#fff" stroke={C.amber} strokeWidth={3} />
      <Txt x={200} y={124} bold size={10} color="#444">Stroma fibromusculaire (avant)</Txt>
      <Txt x={200} y={244} bold size={10.5}>Zone centrale</Txt>
      <Txt x={200} y={162} bold size={9.5}>Zone de</Txt><Txt x={200} y={186} bold size={9.5} anchor="middle">transition</Txt>
      <Txt x={200} y={302} bold size={10.5} color="#fff">Zone périphérique (arrière)</Txt>
      <Txt x={200} y={344} bold size={10.5} color={C.grey}>rectum en arrière : palpation par le toucher rectal</Txt>
      <rect x={380} y={20} width={350} height={370} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={555} y={44} bold size={12}>Zones et pathologies</Txt>
      {[["Zone périphérique", "≈ 70 % · cancer de la prostate · palpable", C.red], ["Zone centrale", "≈ 25 % · entoure les canaux éjaculateurs", C.blue], ["Zone de transition", "5 à 10 % · hypertrophie bénigne (HBP)", C.green], ["Prostate en général", "sécrète ≈ 30 % du sperme (liquide alcalin)", C.pink]].map(([a, b, c], i) => (
        <g key={String(a)}><rect x={392} y={58 + i * 80} width={326} height={70} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.6} /><Txt x={555} y={80 + i * 80} bold size={11.5}>{String(a)}</Txt><Txt x={555} y={100 + i * 80} size={10}>{String(b)}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Testicule et épididyme ──────────────────────────────────────────────
export function TestisEpididymisDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Testicule et épididyme" caption="Le testicule (spermatozoïdes et testostérone) est enveloppé de trois tuniques ; l'épididyme, tube très pelotonné accolé au bord postérieur, stocke et fait mûrir les spermatozoïdes avant le canal déférent">
      <ellipse cx={190} cy={230} rx={110} ry={140} fill="none" stroke={C.grey} strokeWidth={3} />
      <ellipse cx={190} cy={230} rx={98} ry={128} fill="none" stroke={C.amber} strokeWidth={3} />
      <ellipse cx={190} cy={230} rx={88} ry={118} fill={C.violet} fillOpacity={0.4} stroke={DEEP.violet} strokeWidth={3} />
      {[190, 214, 240, 266].map((y) => <path key={y} d={`M130,${y} C160,${y - 12} 220,${y + 12} 250,${y}`} stroke={C.pink} strokeWidth={3} fill="none" />)}
      <Txt x={190} y={240} bold size={11.5}>Tubes séminifères</Txt>
      <path d="M290,150 C330,170 330,280 290,330 C270,340 262,320 272,300" stroke={C.amber} strokeWidth={20} fill="none" strokeLinecap="round" opacity={0.8} />
      <Txt x={350} y={240} anchor="start" bold size={11} color={DEEP.amber}>Épididyme</Txt><Txt x={350} y={256} anchor="start" size={9.5} color={C.grey}>tête, corps, queue</Txt>
      <path d="M272,300 C240,400 300,410 330,392" stroke={C.blue} strokeWidth={6} fill="none" /><Txt x={340} y={396} anchor="start" size={10} bold color={DEEP.blue}>canal déférent</Txt>
      <path d="M190,90 L190,20" stroke={C.red} strokeWidth={14} strokeLinecap="round" opacity={0.6} /><Txt x={210} y={40} anchor="start" size={10} bold color={RED}>cordon spermatique (pôle supérieur)</Txt>
      <line x1={92} y1={150} x2={40} y2={100} {...leader} /><Txt x={4} y={90} anchor="start" size={10} bold color={C.grey}>tunique vaginale</Txt>
      <line x1={100} y1={190} x2={40} y2={160} {...leader} /><Txt x={4} y={150} anchor="start" size={10} bold color={DEEP.amber}>tunique albuginée</Txt>
      <line x1={110} y1={260} x2={40} y2={230} {...leader} /><Txt x={4} y={220} anchor="start" size={10} bold color={DEEP.violet}>tunique vasculaire</Txt>
      <rect x={420} y={20} width={310} height={140} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={575} y={44} bold size={12}>Trois tuniques (de dehors en dedans)</Txt>
      {["1. tunique vaginale", "2. tunique albuginée (fibreuse, blanche)", "3. tunique vasculaire"].map((t, i) => <Txt key={t} x={575} y={72 + i * 26} size={10.5} bold>{t}</Txt>)}
      <rect x={420} y={176} width={310} height={230} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={575} y={200} bold size={12}>Configuration</Txt>
      {["2 pôles : supérieur (cordon), inférieur", "2 bords : antérieur, postérieur (épididyme)", "2 surfaces : médiale, latérale", "épididyme : stockage et maturation des", "spermatozoïdes, absorption de liquide"].map((t, i) => <Txt key={t} x={575} y={226 + i * 22} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}
