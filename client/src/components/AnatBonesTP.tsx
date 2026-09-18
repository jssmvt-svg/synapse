import { Figure, C, Txt } from "./Figure";
import { DEEP, leader } from "./FigKit";

// TP d'ostéologie : os dessinés avec les reliefs à repérer, numérotés comme dans les fiches.

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

export function HumerusLandmarksDiagram() {
  return (
    <Figure viewBox="0 0 740 520" title="Humérus droit, vue antérieure : reliefs à identifier" caption="Extrémité proximale : tête, col anatomique, tubercules majeur et mineur, gouttière intertuberculaire, col chirurgical ; diaphyse : tubérosité deltoïdienne ; extrémité distale : épicondyles, capitulum, trochlée, fosses coronoïdienne et radiale">
      <path d="M120,60 C90,40 60,74 74,110 C90,140 150,140 176,112 C186,90 160,68 120,60z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M170,116 C200,110 214,130 208,160 L200,170 C180,150 174,136 170,116z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <path d="M70,120 C60,140 84,160 104,152 L126,146 L96,180 L92,340 L200,340 L196,190 L172,144 C130,150 90,150 70,120z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M92,340 C60,370 50,410 74,440 L104,470 L192,470 L228,440 C244,410 226,370 200,340z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M92,376 C64,392 60,424 84,438 L96,430z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <path d="M200,376 C232,390 238,424 214,438 L204,430z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <ellipse cx={122} cy={444} rx={22} ry={22} fill="#f5edd8" stroke={BS} strokeWidth={2.5} />
      <path d="M156,420 C170,412 184,424 182,450 L166,462z" fill="#f5edd8" stroke={BS} strokeWidth={2.5} />
      <ellipse cx={120} cy={330} rx={10} ry={8} fill="#fff" stroke={BS} strokeWidth={1.5} opacity={0.7} />
      <path d="M146,150 C150,164 148,178 150,196" fill="none" stroke={BS} strokeWidth={5} strokeLinecap="round" opacity={0.6} />
      <path d="M100,230 L128,264 L132,290" fill="none" stroke={BS} strokeWidth={0} />
      <path d="M96,232 C110,238 124,256 130,280" fill="none" stroke="#c4a55e" strokeWidth={8} strokeLinecap="round" opacity={0.7} />
      <Pin n={1} x={120} y={90} /><Pin n={2} x={162} y={118} /><Pin n={3} x={82} y={134} /><Pin n={4} x={184} y={138} /><Pin n={5} x={148} y={172} />
      <Pin n={6} x={140} y={200} /><Pin n={7} x={116} y={248} /><Pin n={8} x={130} y={324} /><Pin n={9} x={82} y={410} /><Pin n={10} x={224} y={410} />
      <Pin n={11} x={120} y={450} /><Pin n={12} x={172} y={436} />
      <Legend x={400} y={16} title="À montrer sur la pièce osseuse" items={["Tête de l'humérus", "Col anatomique", "Tubercule majeur (grand)", "Tubercule mineur (petit)", "Gouttière intertuberculaire (long chef du biceps)", "Col chirurgical (fractures fréquentes)", "Tubérosité deltoïdienne", "Fosses coronoïdienne et radiale", "Épicondyle latéral", "Épicondyle médial (nerf ulnaire derrière)", "Capitulum (articule avec le radius)", "Trochlée (articule avec l'ulna)"]} />
      <Txt x={556} y={396} bold size={11} color={DEEP.blue}>Repères de palpation</Txt>
      {["épicondyle médial : palpable, nerf ulnaire juste derrière", "tête : palpée dans le creux axillaire", "tubérosité deltoïdienne : insertion du deltoïde"].map((t, i) => <Txt key={i} x={556} y={416 + i * 18} size={10}>{t}</Txt>)}
      <Txt x={556} y={484} size={9.5} color={C.grey}>face antérieure ; postérieurement : sillon du nerf radial, fosse olécrânienne</Txt>
      <line x1={0} y1={0} x2={0} y2={0} {...leader} />
    </Figure>
  );
}

export function ScapulaLandmarksDiagram() {
  return (
    <Figure viewBox="0 0 740 500" title="Scapula droite, vue postérieure : reliefs à identifier" caption="Épine de la scapula (fosses supra- et infra-épineuse), acromion, processus coracoïde, cavité glénoïdale, angles supérieur et inférieur, bords médial et latéral ; l'incisure suprascapulaire livre passage au nerf suprascapulaire">
      <path d="M70,120 L250,110 C260,140 270,180 270,220 C240,300 200,400 180,460 C130,440 90,360 74,260 C66,220 64,160 70,120z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M70,196 C130,190 190,176 268,150 L292,138 C310,130 320,142 306,156 C260,186 190,214 70,230z" fill="#e6d7b0" stroke={BS} strokeWidth={3} />
      <path d="M292,138 C320,120 350,124 356,146 L340,156 C330,144 312,146 300,156z" fill="#e6d7b0" stroke={BS} strokeWidth={3} />
      <path d="M250,110 C270,96 286,100 286,116 L272,128 C264,120 258,116 250,110z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <ellipse cx={272} cy={236} rx={20} ry={34} fill="#f5edd8" stroke={BS} strokeWidth={3} />
      <path d="M156,116 C160,124 168,124 170,116" fill="none" stroke={C.grey} strokeWidth={4} />
      <Pin n={1} x={160} y={150} /><Pin n={2} x={160} y={288} /><Pin n={3} x={72} y={196} /><Pin n={4} x={256} y={310} /><Pin n={5} x={186} y={452} />
      <Pin n={6} x={62} y={130} /><Pin n={7} x={330} y={132} /><Pin n={8} x={272} y={104} /><Pin n={9} x={272} y={236} /><Pin n={10} x={160} y={108} />
      <Legend x={400} y={16} title="À montrer sur la pièce osseuse" items={["Fosse supra-épineuse", "Fosse infra-épineuse", "Épine de la scapula (à peine médiale)", "Bord latéral (petit rond, long chef du triceps)", "Angle inférieur (grand rond, grand dorsal)", "Angle supérieur (élévateur)", "Acromion (articule avec la clavicule)", "Processus coracoïde (petit pectoral, coracobrachial, court biceps)", "Cavité glénoïdale (tête de l'humérus)", "Incisure suprascapulaire (nerf)"]} />
      <Txt x={556} y={356} bold size={11} color={DEEP.blue}>Muscles qui s'y attachent</Txt>
      {["fosses supra/infra-épineuses : supra- et infra-épineux", "fosse subscapulaire (face antérieure) : subscapulaire", "épine : trapèze (dessus), deltoïde (dessous)"].map((t, i) => <Txt key={i} x={556} y={376 + i * 18} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

export function FemurLandmarksDiagram() {
  return (
    <Figure viewBox="0 0 740 540" title="Fémur droit, vue antérieure : reliefs à identifier" caption="Tête (fovéa), col (angle d'inclinaison), grand et petit trochanters, ligne intertrochantérique, diaphyse (ligne âpre en arrière), condyles médial et latéral, surface patellaire ; le col est le siège des fractures de hanche">
      <circle cx={210} cy={80} r={42} fill="#f5edd8" stroke={BS} strokeWidth={3} />
      <path d="M180,110 C150,110 120,118 100,140 C90,160 96,180 116,190 L200,196 L250,120z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M116,190 C130,240 130,300 130,420 L196,420 C200,300 200,240 198,196z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M130,420 C100,440 92,490 124,514 L196,514 C230,490 226,440 196,420z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M120,446 C100,462 100,494 126,504 L142,504 L142,450z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <path d="M196,446 C220,462 220,494 196,504 L178,504 L178,450z" fill="#e6d7b0" stroke={BS} strokeWidth={2.5} />
      <path d="M142,450 C154,436 168,436 178,450 L178,504 L142,504z" fill="#f5edd8" stroke={BS} strokeWidth={2.5} />
      <path d="M116,186 L200,198" stroke="#c4a55e" strokeWidth={5} opacity={0.8} />
      <Pin n={1} x={210} y={76} /><Pin n={2} x={150} y={126} /><Pin n={3} x={104} y={152} /><Pin n={4} x={130} y={206} /><Pin n={5} x={172} y={192} />
      <Pin n={6} x={164} y={320} /><Pin n={7} x={110} y={480} /><Pin n={8} x={210} y={480} /><Pin n={9} x={160} y={476} />
      <Legend x={400} y={16} title="À montrer sur la pièce osseuse" items={["Tête du fémur (fovéa : lig. rond)", "Col du fémur (angle d'inclinaison ≈ 125°)", "Grand trochanter (moyen et petit fessiers)", "Petit trochanter (psoas-iliaque)", "Ligne intertrochantérique (lig. ilio-fémoral)", "Diaphyse (ligne âpre en arrière)", "Condyle latéral", "Condyle médial", "Surface patellaire (trochlée fémorale)"]} />
      <Txt x={550} y={296} bold size={11} color={DEEP.blue}>À retenir</Txt>
      {["col du fémur : fracture fréquente (ostéoporose, sujet âgé)", "vascularisation de la tête : a. circonflexe médiale", "angle d'inclinaison ≈ 125° et de torsion ≈ 15°", "grand trochanter : palpable sous la peau (latéral)"].map((t, i) => <Txt key={i} x={550} y={318 + i * 18} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

export function HipBoneLandmarksDiagram() {
  return (
    <Figure viewBox="0 0 740 500" title="Os coxal droit, vue latérale : reliefs à identifier" caption="Trois os soudés au niveau du cotyle : ilium (crête iliaque, épines iliaques), ischium (tubérosité ischiatique, épine ischiatique) et pubis (branche supérieure, symphyse) ; le foramen obturé est fermé par une membrane">
      <path d="M100,40 C160,10 280,20 320,80 C336,120 300,170 270,196 L200,196 L140,150 C90,120 70,80 100,40z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M200,196 L270,196 L290,260 C296,300 270,330 250,340 L220,330 C230,296 210,250 200,196z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M140,150 L200,196 L140,240 C120,250 110,220 120,196z" fill={BONE} stroke={BS} strokeWidth={0} />
      <circle cx={210} cy={214} r={38} fill="#f5edd8" stroke={BS} strokeWidth={3} /><Txt x={210} y={218} bold size={9.5}>cotyle</Txt>
      <ellipse cx={170} cy={310} rx={34} ry={42} fill="#fff" fillOpacity={0.5} stroke={BS} strokeWidth={2.5} strokeDasharray="4 3" /><Txt x={170} y={314} bold size={9}>foramen obturé</Txt>
      <path d="M240,340 C250,380 230,430 180,420 C150,410 130,380 140,350 L156,340z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M140,260 C110,300 96,340 110,380 L140,360z" fill={BONE} stroke={BS} strokeWidth={3} />
      <Pin n={1} x={100} y={44} /><Pin n={2} x={70} y={100} /><Pin n={3} x={318} y={100} /><Pin n={4} x={210} y={214} /><Pin n={5} x={268} y={300} />
      <Pin n={6} x={200} y={410} /><Pin n={7} x={130} y={376} /><Pin n={8} x={170} y={296} /><Pin n={9} x={272} y={196} /><Pin n={10} x={124} y={190} />
      <Legend x={400} y={16} title="À montrer sur la pièce osseuse" items={["Crête iliaque", "Épine iliaque antéro-supérieure (lig. inguinal)", "Épine iliaque postéro-supérieure", "Cotyle (acétabulum) : tête du fémur", "Épine ischiatique (petite/grande incisure)", "Tubérosité ischiatique (position assise)", "Branche ischio-pubienne / symphyse", "Foramen obturé (membrane, nerf obturateur)", "Bord antérieur : épine iliaque antéro-inférieure", "Ligne arquée (limite du petit bassin)"]} />
      <Txt x={556} y={314} bold size={11} color={DEEP.blue}>Un os, trois parties</Txt>
      {["ilium : haut, aile large (fosse iliaque)", "ischium : bas et postérieur (position assise)", "pubis : bas et antérieur (symphyse pubienne)", "ils fusionnent au centre du cotyle (cartilage en Y)"].map((t, i) => <Txt key={i} x={556} y={336 + i * 18} size={9.5}>{t}</Txt>)}
      <line x1={0} y1={0} x2={0} y2={0} {...leader} />
    </Figure>
  );
}
