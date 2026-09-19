import { Figure, C, Txt } from "./Figure";
import { RED, DEEP } from "./FigKit";

// TP d'ostéologie (suite) : avant-bras, poignet, os coxal, jambe, cheville et pied dessinés,
// avec reliefs numérotés, faces et bords.

const BONE = "#eadfc8";
const BS = "#a78c5b";

function Pin({ n, x, y }: { n: number; x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={9} fill={C.red} stroke="#fff" strokeWidth={1.5} />
      <Txt x={x} y={y + 3.5} bold size={10} color="#fff">{n}</Txt>
    </g>
  );
}
function Legend({ x, y, items, title }: { x: number; y: number; items: string[]; title: string }) {
  return (
    <g>
      <rect x={x} y={y} width={300} height={22 + items.length * 24 + 12} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={x + 150} y={y + 20} bold size={12}>{title}</Txt>
      {items.map((t, i) => (
        <g key={i}>
          <circle cx={x + 20} cy={y + 42 + i * 24} r={8} fill={C.red} /><Txt x={x + 20} y={y + 45.5 + i * 24} bold size={9.5} color="#fff">{i + 1}</Txt>
          <Txt x={x + 36} y={y + 46 + i * 24} anchor="start" size={10.5}>{t}</Txt>
        </g>
      ))}
    </g>
  );
}

// ─── Avant-bras : radius et ulna dessinés, avec faces et bords ───────────
export function ForearmBonesDiagram() {
  return (
    <Figure viewBox="0 0 740 560" title="Radius et ulna, vue antérieure : reliefs, faces et bords" caption="Radius latéral et ulna médial reliés par la membrane interosseuse ; chaque diaphyse est triangulaire, avec trois faces (antérieure, postérieure, latérale pour le radius, médiale pour l'ulna) et trois bords (antérieur, postérieur, interosseux) ; le bord interosseux regarde toujours l'autre os">
      <path d="M154,140 L216,140 L222,392 L166,392z" fill={C.blue} fillOpacity={0.15} stroke={C.blue} strokeWidth={1.5} strokeDasharray="5 4" />
      <g transform="translate(40 0)">
        <ellipse cx={100} cy={52} rx={30} ry={12} fill="#f5edd8" stroke={BS} strokeWidth={2.5} />
        <path d="M88,64 L114,64 L110,86 C110,100 112,110 112,130 C112,190 114,260 120,330 C126,380 140,410 148,440 L58,440 C66,410 82,380 88,320 C94,250 92,190 90,130 C90,100 88,90 88,64z" fill={BONE} stroke={BS} strokeWidth={3} />
        <ellipse cx={116} cy={104} rx={9} ry={11} fill="#e6d7b0" stroke={BS} strokeWidth={2} />
        <path d="M58,440 L52,460 L76,446z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
        <path d="M100,150 C102,230 104,300 108,380" fill="none" stroke="#c4a55e" strokeWidth={4} strokeLinecap="round" opacity={0.7} />
      </g>
      <g transform="translate(24 0)">
        <path d="M172,34 C186,12 234,12 246,36 L244,84 C240,100 222,108 208,112 L188,116 C176,104 168,64 172,34z" fill={BONE} stroke={BS} strokeWidth={3} />
        <path d="M190,116 C192,180 196,300 198,404 L222,404 C222,300 226,180 232,110z" fill={BONE} stroke={BS} strokeWidth={3} />
        <ellipse cx={196} cy={98} rx={16} ry={10} fill="#e6d7b0" stroke={BS} strokeWidth={2} />
        <ellipse cx={178} cy={88} rx={6} ry={12} fill="#f5edd8" stroke={BS} strokeWidth={2} />
        <ellipse cx={210} cy={418} rx={16} ry={13} fill="#f5edd8" stroke={BS} strokeWidth={2.5} />
        <path d="M222,424 L230,446 L218,440z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      </g>
      <Pin n={1} x={140} y={52} /><Pin n={2} x={140} y={76} /><Pin n={3} x={156} y={104} /><Pin n={4} x={182} y={432} /><Pin n={5} x={96} y={456} /><Pin n={6} x={128} y={438} />
      <Pin n={7} x={234} y={34} /><Pin n={8} x={222} y={72} /><Pin n={9} x={220} y={98} /><Pin n={10} x={202} y={78} /><Pin n={11} x={234} y={418} /><Pin n={12} x={256} y={440} />
      <Txt x={130} y={488} bold size={11} color={C.grey}>Radius (latéral)</Txt><Txt x={230} y={506} bold size={11} color={C.grey}>Ulna (médial)</Txt>
      <Txt x={190} y={270} bold size={9.5} color={DEEP.blue}>membrane</Txt><Txt x={190} y={282} bold size={9.5} color={DEEP.blue}>interosseuse</Txt>
      <Legend x={400} y={16} title="À montrer sur la pièce osseuse" items={["Tête radiale (disque)", "Col du radius", "Tubérosité radiale (biceps)", "Incisure ulnaire du radius", "Processus styloïde radial", "Surface articulaire carpienne", "Olécrâne (triceps)", "Incisure trochléaire", "Processus coronoïde", "Incisure radiale de l'ulna", "Tête de l'ulna", "Processus styloïde ulnaire"]} />
      <rect x={400} y={352} width={330} height={196} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={374} bold size={11.5} color={DEEP.blue}>Faces et bords de la diaphyse</Txt>
      {["radius : faces antérieure, postérieure, latérale", "radius : bords antérieur, postérieur, interosseux (médial)", "ulna : faces antérieure, postérieure, médiale", "ulna : bords antérieur, postérieur, interosseux (latéral)", "bord interosseux : insertion de la membrane interosseuse", "la diaphyse radiale s'élargit vers le bas, l'ulnaire s'affine", "pronosupination : le radius tourne autour de l'ulna"].map((t, i) => <Txt key={i} x={565} y={396 + i * 19} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Poignet : radius, ulna, carpe et interlignes articulaires ───────────
export function WristJointDiagram() {
  const cell = (x: number, y: number, w: number, t: string, c: string, h = 50) => (
    <g key={t}><rect x={x} y={y} width={w} height={h} rx={12} fill={c} fillOpacity={0.4} stroke={c} strokeWidth={2.2} /><Txt x={x + w / 2} y={y + h / 2 + 4} bold size={10.5}>{t}</Txt></g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Poignet : radius, ulna, carpe et interlignes articulaires (vue palmaire)" caption="L'articulation radio-carpienne unit le radius et le disque articulaire aux trois premiers os de la rangée proximale (scaphoïde, lunatum, triquétrum) ; l'ulna n'y participe pas directement ; l'articulation médio-carpienne sépare les deux rangées du carpe">
      <rect x={60} y={20} width={140} height={86} rx={14} fill={BONE} stroke={BS} strokeWidth={3} /><Txt x={130} y={58} bold size={12}>Radius</Txt><Txt x={130} y={74} size={9.5} color={C.grey}>extrémité distale</Txt>
      <path d="M60,90 L46,112 L78,106z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <rect x={250} y={20} width={90} height={72} rx={14} fill={BONE} stroke={BS} strokeWidth={3} /><Txt x={295} y={54} bold size={12}>Ulna</Txt><Txt x={295} y={70} size={9.5} color={C.grey}>tête</Txt>
      <rect x={204} y={96} width={42} height={12} rx={4} fill={C.blue} fillOpacity={0.5} stroke={DEEP.blue} strokeWidth={1.8} />
      {cell(50, 124, 88, "Scaphoïde", C.red)}{cell(142, 124, 76, "Lunatum", C.blue)}{cell(222, 124, 76, "Triquétrum", C.green)}{cell(302, 124, 66, "Pisiforme", C.amber)}
      {cell(34, 192, 82, "Trapèze", C.violet)}{cell(120, 192, 68, "Trapézoïde", C.pink)}{cell(192, 192, 88, "Capitatum", C.blue)}{cell(284, 192, 90, "Hamatum", C.green)}
      {[0, 1, 2, 3, 4].map((i) => <g key={i}><rect x={30 + i * 70} y={260} width={56} height={70} rx={14} fill={BONE} stroke={BS} strokeWidth={2} /><Txt x={58 + i * 70} y={300} bold size={11}>{["I", "II", "III", "IV", "V"][i]}</Txt></g>)}
      <line x1={24} y1={114} x2={384} y2={114} stroke={RED} strokeWidth={2.5} strokeDasharray="6 4" />
      <line x1={24} y1={184} x2={384} y2={184} stroke={DEEP.green} strokeWidth={2.5} strokeDasharray="6 4" />
      <line x1={24} y1={252} x2={384} y2={252} stroke={DEEP.blue} strokeWidth={2.5} strokeDasharray="6 4" />
      <Txt x={396} y={112} anchor="start" bold size={11} color={RED}>Radio-carpienne (poignet)</Txt><Txt x={396} y={126} anchor="start" size={9.5}>radius + disque ↔ scaphoïde, lunatum, triquétrum</Txt>
      <Txt x={396} y={182} anchor="start" bold size={11} color={DEEP.green}>Médio-carpienne</Txt><Txt x={396} y={196} anchor="start" size={9.5}>entre la rangée proximale et la rangée distale</Txt>
      <Txt x={396} y={250} anchor="start" bold size={11} color={DEEP.blue}>Carpo-métacarpiennes</Txt><Txt x={396} y={264} anchor="start" size={9.5}>rangée distale ↔ bases des métacarpiens</Txt>
      <Txt x={396} y={228} anchor="start" size={9.5} color={C.grey}>disque articulaire (bleu) : sépare l'ulna du carpe</Txt>
      <Txt x={200} y={352} bold size={11.5}>Métacarpiens (base, corps, tête)</Txt>
      <rect x={20} y={372} width={710} height={90} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      {["rangée proximale (latéral → médial) : scaphoïde, lunatum, triquétrum, pisiforme", "rangée distale : trapèze, trapézoïde, capitatum, hamatum (crochet)", "tunnel carpien : pisiforme et hamulus (médial), scaphoïde et trapèze (latéral) ; nerf médian à l'intérieur", "chaque os du carpe a des faces palmaire et dorsale, proximale et distale ; le capitatum est le plus grand"].map((t, i) => <Txt key={i} x={375} y={394 + i * 18} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Os coxal : ilium, ischium et pubis en trois couleurs ────────────────
const HIP_OUTLINE = "M96,110 C100,60 160,40 230,44 C290,46 340,50 356,84 C350,130 322,168 304,196 L330,236 C350,262 356,300 340,330 L300,352 C280,380 270,400 246,420 C220,440 170,440 148,410 C128,380 132,330 150,300 L140,260 C120,230 110,200 100,170 C90,150 96,140 96,110z";
export function HipBoneDiagram() {
  return (
    <Figure viewBox="0 0 740 520" title="Os coxal droit, vue latérale : ilium, ischium et pubis" caption="Les trois os se rejoignent au fond de l'acétabulum en un cartilage en Y (fusion vers 16 ans) : ilium en bleu (aile, crête, épines), ischium en vert (tubérosité, épine, branche), pubis en jaune (corps, branches, symphyse) ; l'os a deux faces (latérale et médiale) et quatre bords (supérieur ou crête, antérieur, postérieur, inférieur)">
      <defs>
        <clipPath id="hip-clip-ilium"><polygon points="0,0 740,0 740,214 318,214 230,272 140,262 0,262" /></clipPath>
        <clipPath id="hip-clip-pubis"><polygon points="318,214 740,214 740,420 300,372 268,330 230,272" /></clipPath>
        <clipPath id="hip-clip-ischium"><polygon points="140,262 230,272 268,330 300,372 740,420 740,700 0,700 0,262" /></clipPath>
      </defs>
      <path d={HIP_OUTLINE} fill={C.blue} fillOpacity={0.4} clipPath="url(#hip-clip-ilium)" />
      <path d={HIP_OUTLINE} fill={C.green} fillOpacity={0.42} clipPath="url(#hip-clip-ischium)" />
      <path d={HIP_OUTLINE} fill={C.amber} fillOpacity={0.5} clipPath="url(#hip-clip-pubis)" />
      <path d={HIP_OUTLINE} fill="none" stroke={BS} strokeWidth={3} />
      <path d="M230,272 L318,214 M230,272 L140,262 M230,272 L300,372" stroke="#fff" strokeWidth={2} strokeDasharray="5 4" opacity={0.85} />
      <ellipse cx={275} cy={352} rx={24} ry={34} fill="#fff" fillOpacity={0.6} stroke={BS} strokeWidth={2.5} />
      <circle cx={230} cy={272} r={44} fill="#fff" fillOpacity={0.45} stroke={BS} strokeWidth={3} />
      <Txt x={230} y={276} bold size={10.5}>Acétabulum</Txt>
      <Txt x={220} y={130} bold size={17} color={DEEP.blue}>ILIUM</Txt>
      <Txt x={186} y={392} bold size={14} color={DEEP.green}>ISCHIUM</Txt>
      <Txt x={334} y={292} bold size={12} color={DEEP.amber}>PUBIS</Txt>
      <Txt x={372} y={110} anchor="start" size={9.5} color={C.grey}>▶ avant</Txt>
      <Pin n={1} x={230} y={56} /><Pin n={2} x={350} y={86} /><Pin n={3} x={104} y={100} /><Pin n={4} x={130} y={218} /><Pin n={5} x={142} y={258} />
      <Pin n={6} x={182} y={426} /><Pin n={7} x={275} y={352} /><Pin n={8} x={330} y={238} /><Pin n={9} x={346} y={312} /><Pin n={10} x={230} y={224} />
      <Legend x={400} y={16} title="Repères de l'os coxal" items={["Crête iliaque (bord supérieur)", "Épine iliaque antéro-supérieure", "Épine iliaque postéro-supérieure", "Grande incisure ischiatique (bord postérieur)", "Épine ischiatique", "Tubérosité ischiatique (assise)", "Foramen obturé", "Éminence ilio-pubienne (jonction ilium-pubis)", "Symphyse pubienne (face symphysaire)", "Bord supérieur de l'acétabulum (sourcil)"]} />
      <rect x={400} y={300} width={330} height={210} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={322} bold size={11.5}>Comment distinguer les trois os</Txt>
      {[[C.blue, "ILIUM : aile large au-dessus de l'acétabulum ; face glutéale (latérale),", "fosse iliaque (médiale), crête iliaque, épines antérieures et postérieures"], [C.green, "ISCHIUM : partie postéro-inférieure ; corps, épine, incisures,", "tubérosité, branche ischiatique qui rejoint le pubis"], [C.amber, "PUBIS : partie antéro-inférieure ; corps (symphyse), branche supérieure", "(crête pectinée), branche inférieure (arcade) autour du foramen obturé"]].map(([c, a, b], i) => (
        <g key={i}><rect x={412} y={336 + i * 54} width={306} height={48} rx={8} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={1.6} /><Txt x={565} y={356 + i * 54} size={9}>{a}</Txt><Txt x={565} y={370 + i * 54} size={9}>{b}</Txt></g>
      ))}
      <Txt x={565} y={504} size={9.5} color={C.grey}>cartilage en Y dans l'acétabulum, ossifié vers 16 ans</Txt>
    </Figure>
  );
}

// ─── Tibia et fibula dessinés (vue antérieure) ───────────────────────────
export function LegBonesDiagram() {
  return (
    <Figure viewBox="0 0 740 570" title="Tibia et fibula, vue antérieure : reliefs, faces et bords" caption="Tibia médial et porteur, fibula latérale et grêle, reliées par la membrane interosseuse ; la diaphyse tibiale est triangulaire : trois faces (médiale, latérale, postérieure) et trois bords (antérieur ou crête tibiale, interosseux, médial) ; la malléole latérale descend plus bas que la médiale">
      <path d="M158,150 L232,150 L236,400 L152,420z" fill={C.blue} fillOpacity={0.15} stroke={C.blue} strokeWidth={1.5} strokeDasharray="5 4" />
      <path d="M180,44 C200,30 340,30 360,44 L362,84 C350,104 320,110 296,112 L228,112 C204,110 184,100 178,84z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M232,112 L292,112 C294,200 290,330 288,420 L236,420 C232,330 232,200 232,112z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M236,416 L290,416 C300,436 316,452 322,476 C300,490 250,492 226,480 C220,460 232,440 236,416z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M290,440 C312,444 330,462 326,494 L296,494z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <path d="M250,44 L260,24 L270,44z M276,44 L286,24 L296,44z" fill="#f5edd8" stroke={BS} strokeWidth={2.5} />
      <ellipse cx={268} cy={128} rx={16} ry={14} fill="#e6d7b0" stroke={BS} strokeWidth={2} />
      <path d="M268,142 C266,240 264,330 262,410" fill="none" stroke="#c4a55e" strokeWidth={5} strokeLinecap="round" opacity={0.8} />
      <path d="M112,92 C116,76 170,76 176,96 L176,116 C170,132 118,132 112,116z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M128,132 L158,132 C156,200 152,330 150,440 L128,440 C126,330 126,200 128,132z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M124,436 L164,436 C182,460 194,490 190,514 C176,522 146,522 134,514 C122,490 116,460 124,436z" fill="#e6d7b0" stroke={BS} strokeWidth={3} />
      <Pin n={1} x={276} y={18} /><Pin n={2} x={342} y={66} /><Pin n={3} x={208} y={66} /><Pin n={4} x={268} y={128} /><Pin n={5} x={268} y={260} /><Pin n={6} x={312} y={470} /><Pin n={7} x={252} y={476} />
      <Pin n={8} x={144} y={102} /><Pin n={9} x={140} y={148} /><Pin n={10} x={160} y={500} /><Pin n={11} x={194} y={300} />
      <Txt x={138} y={548} bold size={11} color={C.grey}>Fibula (latérale)</Txt><Txt x={276} y={548} bold size={11} color={C.grey}>Tibia (médial)</Txt>
      <Legend x={400} y={16} title="À montrer sur la pièce osseuse" items={["Éminence intercondylaire (épines tibiales)", "Condyle médial du tibia", "Condyle latéral du tibia", "Tubérosité tibiale (lig. patellaire)", "Crête tibiale : bord antérieur, sous-cutané", "Malléole médiale", "Surface articulaire inférieure (talus)", "Tête de la fibula", "Col de la fibula (nerf fibulaire commun)", "Malléole latérale (plus basse)", "Membrane interosseuse"]} />
      <rect x={400} y={332} width={330} height={222} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={354} bold size={11.5} color={DEEP.blue}>Faces et bords de la diaphyse</Txt>
      {["tibia : face médiale (sous-cutanée, toute nue)", "tibia : face latérale (loge antérieure) et face postérieure", "tibia : bord antérieur (crête), bord médial, bord interosseux", "fibula : faces médiale, latérale et postérieure ;", "bords antérieur, postérieur et interosseux", "le tibia porte le poids ; la fibula stabilise la cheville", "la crête tibiale et la face médiale se palpent sous la peau"].map((t, i) => <Txt key={i} x={565} y={376 + i * 19} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Cheville : articulation talo-crurale en coupe frontale ──────────────
export function AnkleJointDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Cheville : articulation talo-crurale (coupe frontale)" caption="La mortaise tibio-fibulaire (plafond tibial + malléoles médiale et latérale) enserre la trochlée du talus ; le talus repose sur le calcanéus (articulation subtalaire) ; ligament collatéral médial (deltoïde) en rouge, ligament collatéral latéral en vert">
      <path d="M172,10 L336,10 L338,196 C336,220 302,224 294,204 L294,152 L172,152z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M112,10 L164,10 L164,140 C170,156 170,190 168,222 C166,240 140,244 124,234 C112,222 114,180 112,120z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M176,158 L290,158 C294,170 298,196 296,214 C290,240 260,262 236,262 C204,262 176,240 170,216 C168,190 172,172 176,158z" fill={C.blue} fillOpacity={0.4} stroke={DEEP.blue} strokeWidth={2.5} />
      <path d="M150,270 C190,262 290,262 320,276 C350,296 360,340 340,376 C300,400 190,400 150,380 C126,360 128,300 150,270z" fill={C.red} fillOpacity={0.3} stroke={DEEP.red} strokeWidth={2.5} />
      <Txt x={250} y={44} bold size={12}>Tibia</Txt><Txt x={138} y={44} bold size={12}>Fibula</Txt>
      <Txt x={234} y={206} bold size={11}>Talus</Txt><Txt x={240} y={340} bold size={12}>Calcanéus</Txt>
      <path d="M316,222 L286,238 M320,224 L322,284 M312,224 L266,256" stroke={RED} strokeWidth={3} strokeLinecap="round" />
      <path d="M140,238 L172,224 M148,242 L160,292 M154,244 L196,256" stroke={C.green} strokeWidth={3} strokeLinecap="round" />
      <Pin n={1} x={316} y={186} /><Pin n={2} x={138} y={210} /><Pin n={3} x={230} y={146} /><Pin n={4} x={234} y={180} /><Pin n={5} x={234} y={372} /><Pin n={6} x={168} y={84} /><Pin n={7} x={346} y={250} /><Pin n={8} x={116} y={272} /><Pin n={9} x={234} y={266} />
      <Legend x={400} y={16} title="Repères de la cheville" items={["Malléole médiale (tibia)", "Malléole latérale (fibula), plus basse", "Plafond tibial (surface articulaire)", "Trochlée du talus", "Calcanéus", "Syndesmose tibio-fibulaire", "Lig. collatéral médial (deltoïde)", "Lig. collatéral latéral (LTFA, LCF, LTFP)", "Articulation subtalaire"]} />
      <rect x={400} y={270} width={330} height={196} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={292} bold size={11.5} color={DEEP.blue}>À retenir</Txt>
      {["mortaise = plafond tibial + deux malléoles ; le talus s'y encastre", "trochlée du talus plus large en avant : stable en flexion dorsale", "entorse fréquente en inversion : lig. talo-fibulaire antérieur", "le deltoïde (médial) est plus puissant que le collatéral latéral", "talus : aucune insertion musculaire ; vascularisation fragile", "subtalaire : inversion et éversion du pied"].map((t, i) => <Txt key={i} x={565} y={316 + i * 22} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Tarse et pied : vue médiale des os ─────────────────────────────────
export function FootMedialBonesDiagram() {
  const bone = (x: number, y: number, w: number, h: number, c: string, r = 14) => (
    <rect x={x} y={y} width={w} height={h} rx={r} fill={c} fillOpacity={0.42} stroke={c} strokeWidth={2.2} />
  );
  return (
    <Figure viewBox="0 0 740 640" title="Pied, vue médiale : tarse, métatarse et phalanges" caption="Le talus, sous le tibia, repose sur le calcanéus ; en avant, le naviculaire, les cunéiformes, puis le 1er métatarsien et les deux phalanges de l'hallux ; l'arche longitudinale médiale s'élève du calcanéus à la tête du 1er métatarsien ; chaque os du tarse a une face dorsale (supérieure) et une face plantaire (inférieure)">
      <rect x={100} y={16} width={110} height={90} rx={14} fill={BONE} stroke={BS} strokeWidth={3} /><Txt x={155} y={64} bold size={12}>Tibia</Txt>
      <path d="M212,60 C230,66 236,96 216,106 L212,96z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      {bone(84, 116, 130, 62, C.blue, 26)}
      {bone(40, 190, 150, 88, C.red, 26)}
      {bone(220, 138, 46, 74, C.violet, 12)}
      {bone(270, 168, 44, 64, C.amber, 12)}
      {bone(318, 196, 190, 34, C.green, 14)}
      {bone(512, 200, 52, 28, C.pink, 12)}
      {bone(568, 202, 44, 24, C.blue, 12)}
      <path d="M60,300 C200,340 400,340 590,270" fill="none" stroke={C.grey} strokeWidth={3} strokeDasharray="7 5" />
      <Txt x={330} y={338} size={10} bold color={C.grey}>arche longitudinale médiale</Txt>
      <Pin n={1} x={150} y={150} /><Pin n={2} x={110} y={240} /><Pin n={3} x={243} y={175} /><Pin n={4} x={292} y={200} /><Pin n={5} x={412} y={214} /><Pin n={6} x={538} y={214} /><Pin n={7} x={590} y={214} /><Pin n={8} x={150} y={274} />
      <Legend x={20} y={360} title="Tarse, métatarse, phalanges" items={["Talus (col, tête, corps)", "Calcanéus (tubérosité du talon)", "Naviculaire (tubérosité)", "Cunéiforme médial", "Métatarsien I (base, corps, tête)", "Phalange proximale de l'hallux", "Phalange distale de l'hallux", "Sustentaculum tali (soutient le talus)"]} />
      <rect x={340} y={360} width={380} height={252} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={530} y={382} bold size={11.5} color={DEEP.blue}>Le tarse : 7 os, faces et bords</Txt>
      {["postérieur : talus (dessus) et calcanéus (dessous)", "antérieur : naviculaire (médial), cuboïde (latéral)", "3 cunéiformes : médial, intermédiaire, latéral", "face dorsale : convexe, sous les tendons extenseurs", "face plantaire : concave, creuse la voûte plantaire", "bord médial : naviculaire, cunéiforme médial, métatarsien I", "bord latéral : calcanéus, cuboïde, métatarsien V", "l'hallux a 2 phalanges ; les autres orteils en ont 3", "arches : longitudinales médiale et latérale + transversale"].map((t, i) => <Txt key={i} x={530} y={406 + i * 22} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}
