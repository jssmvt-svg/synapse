import { Figure, C, Txt } from "./Figure";
import { RED, DEEP, leader } from "./FigKit";

// Anatomie S1 — compléments : reliefs osseux des TP (fiches de repérage), viscères pelviens.

const split2 = (s: string, n: number): [string, string] => { if (s.length <= n) return [s, ""]; const i = s.lastIndexOf(" ", n); return [s.slice(0, i), s.slice(i + 1)]; };

type Relief = [string, string];
function ReliefSheet({ title, caption, bones }: { title: string; caption: string; bones: { name: string; c: string; items: Relief[] }[] }) {
  const rows = Math.max(...bones.map((b) => b.items.length));
  const h = 60 + rows * 46;
  const w = 730 / bones.length;
  return (
    <Figure viewBox={`0 0 740 ${h + 20}`} title={title} caption={caption}>
      {bones.map((b, k) => (
        <g key={b.name} transform={`translate(${5 + k * w} 4)`}>
          <rect x={0} y={0} width={w - 10} height={h} rx={10} fill={b.c} fillOpacity={0.07} stroke={b.c} strokeWidth={1.8} />
          <rect x={0} y={0} width={w - 10} height={30} rx={10} fill={b.c} fillOpacity={0.85} />
          <Txt x={(w - 10) / 2} y={20} bold size={13} color="#fff">{b.name}</Txt>
          {b.items.map(([r, a], i) => {
            const n = Math.floor((w - 40) / 5.6);
            const [a1, a2] = split2(a, n);
            return (
              <g key={r}>
                <circle cx={16} cy={54 + i * 46} r={9} fill={RED} /><Txt x={16} y={57.5 + i * 46} bold size={10} color="#fff">{i + 1}</Txt>
                <Txt x={32} y={52 + i * 46} anchor="start" bold size={11}>{r}</Txt>
                <Txt x={32} y={66 + i * 46} anchor="start" size={9.5} color={C.grey}>{a1}</Txt>
                {a2 && <Txt x={32} y={77 + i * 46} anchor="start" size={9.5} color={C.grey}>{a2}</Txt>}
              </g>
            );
          })}
        </g>
      ))}
    </Figure>
  );
}

export function ScapulaReliefsSheet() {
  return (
    <ReliefSheet title="Scapula : reliefs à repérer sur la pièce" caption="Os plat triangulaire : de haut en bas, l'épine sépare la fosse supra-épineuse de la fosse infra-épineuse ; à l'angle supéro-latéral se trouvent l'acromion, le processus coracoïde et la cavité glénoïdale"
      bones={[{ name: "Face postérieure", c: C.blue, items: [["Épine de la scapula", "sépare les deux fosses, prolongée par l'acromion"], ["Fosse supra-épineuse", "supra-épineux"], ["Fosse infra-épineuse", "infra-épineux"], ["Bord latéral (axillaire)", "petit rond, long chef du triceps"], ["Angle inférieur", "grand rond, repère de palpation"]] },
        { name: "Angle latéral", c: C.green, items: [["Cavité glénoïdale", "articule la tête humérale"], ["Acromion", "articule la clavicule"], ["Processus coracoïde", "court biceps, coracobrachial, petit pectoral"], ["Incisure scapulaire", "passage du nerf suprascapulaire"], ["Tubercules supra/infra-glénoïdaux", "chef long biceps / triceps"]] },
        { name: "Face antérieure", c: C.amber, items: [["Fosse subscapulaire", "muscle subscapulaire"], ["Bord médial (spinal)", "rhomboïdes, dentelé antérieur"], ["Angle supérieur", "élévateur de la scapula"], ["Bord supérieur", "omo-hyoïdien"], ["Col de la scapula", "sous la glène"]] }]} />
  );
}
export function ForearmBonesSheet() {
  return (
    <ReliefSheet title="Radius et ulna : reliefs à repérer" caption="Radius latéral (côté du pouce) et ulna médial ; aux deux extrémités, les articulations radio-ulnaires proximale et distale permettent la pronation et la supination"
      bones={[{ name: "Radius", c: C.blue, items: [["Tête radiale", "disque : capitulum + incisure radiale de l'ulna"], ["Col du radius", "sous la tête"], ["Tubérosité radiale", "insertion du biceps brachial"], ["Processus styloïde radial", "distal, latéral (tabatière)"], ["Incisure ulnaire", "articule la tête de l'ulna"]] },
        { name: "Ulna", c: C.green, items: [["Olécrâne", "pointe du coude, insertion du triceps"], ["Processus coronoïde", "antéro-proximal"], ["Incisure trochléaire", "articule la trochlée humérale"], ["Incisure radiale", "articule la tête radiale"], ["Tête et styloïde ulnaires", "extrémité distale"]] }]} />
  );
}
export function CarpusDiagram() {
  const cell = (x: number, y: number, t: string, c: string, note?: string) => (
    <g key={t}>
      <rect x={x} y={y} width={96} height={54} rx={12} fill={c} fillOpacity={0.35} stroke={c} strokeWidth={2.2} />
      <Txt x={x + 48} y={y + 26} bold size={12}>{t}</Txt>{note && <Txt x={x + 48} y={y + 42} size={9}>{note}</Txt>}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 400" title="Os de la main : carpe en deux rangées (vue palmaire, main droite)" caption="Rangée proximale (de latéral à médial) : scaphoïde, lunatum, triquétrum, pisiforme ; rangée distale : trapèze, trapézoïde, capitatum, hamatum (crochet) ; puis 5 métacarpiens et 14 phalanges (2 au pouce, 3 aux autres doigts)">
      <Txt x={200} y={20} bold size={11} color={C.grey}>Radius (latéral)</Txt><Txt x={420} y={20} bold size={11} color={C.grey}>Ulna (médial)</Txt>
      <rect x={140} y={28} width={120} height={22} rx={8} fill="#eadfc8" stroke="#a78c5b" strokeWidth={2} /><rect x={370} y={28} width={100} height={22} rx={8} fill="#eadfc8" stroke="#a78c5b" strokeWidth={2} />
      {cell(90, 64, "Scaphoïde", C.red, "fracture fréquente")}{cell(196, 64, "Lunatum", C.blue)}{cell(302, 64, "Triquétrum", C.green)}{cell(408, 64, "Pisiforme", C.amber)}
      <Txt x={560} y={96} anchor="start" size={10} bold color={C.grey}>rangée proximale</Txt>
      {cell(60, 130, "Trapèze", C.violet)}{cell(166, 130, "Trapézoïde", C.pink)}{cell(272, 130, "Capitatum", C.blue, "le plus grand")}{cell(378, 130, "Hamatum", C.green, "crochet")}
      <Txt x={560} y={162} anchor="start" size={10} bold color={C.grey}>rangée distale</Txt>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}><rect x={44 + i * 84} y={202} width={44} height={70} rx={14} fill="#eadfc8" stroke="#a78c5b" strokeWidth={2} /><Txt x={66 + i * 84} y={242} bold size={11}>{["I", "II", "III", "IV", "V"][i]}</Txt></g>
      ))}
      <Txt x={500} y={240} anchor="start" size={10} bold>5 métacarpiens (base, corps, tête)</Txt>
      {[0, 1, 2, 3, 4].map((i) => [0, 1, 2].filter((j) => !(i === 0 && j === 2)).map((j) => <rect key={`${i}${j}`} x={50 + i * 84} y={284 + j * 34} width={32} height={26} rx={10} fill="#f5edd8" stroke="#a78c5b" strokeWidth={1.8} />))}
      <Txt x={500} y={300} anchor="start" size={10} bold>phalanges : proximale, moyenne, distale</Txt>
      <Txt x={500} y={316} anchor="start" size={9.5} color={C.grey}>le pouce n'a pas de phalange moyenne</Txt>
      <Txt x={500} y={350} anchor="start" size={9.5} color={RED}>scaphoïde : nécrose du pôle proximal</Txt>
      <Txt x={500} y={364} anchor="start" size={9.5} color={C.grey}>crochet de l'hamatum : proche du nerf ulnaire</Txt>
    </Figure>
  );
}
export function HipBoneReliefsSheet() {
  return (
    <ReliefSheet title="Os coxal : reliefs à repérer" caption="Ilium (en haut), ischium (en bas et en arrière), pubis (en bas et en avant) fusionnent au fond du cotyle ; chaque relief donne un repère de palpation ou une insertion"
      bones={[{ name: "Ilium", c: C.blue, items: [["Crête iliaque", "insertion des muscles larges de l'abdomen"], ["Épine iliaque antéro-sup.", "ligament inguinal, sartorius"], ["Épine iliaque postéro-sup.", "repère cutané (fossettes)"], ["Fosse iliaque", "muscle iliaque"], ["Ligne arquée", "limite du grand et du petit bassin"]] },
        { name: "Ischium", c: C.green, items: [["Tubérosité ischiatique", "position assise, ischio-jambiers"], ["Épine ischiatique", "sépare les deux incisures"], ["Grande incisure", "foramen grand ischiatique"], ["Petite incisure", "foramen petit ischiatique"], ["Branche de l'ischium", "rejoint le pubis"]] },
        { name: "Pubis", c: C.amber, items: [["Corps du pubis", "symphyse pubienne"], ["Tubercule pubien", "attache du ligament inguinal"], ["Branche supérieure", "crête pectinée"], ["Branche inférieure", "arcade pubienne"], ["Foramen obturé", "fermé par la membrane obturatrice"]] }]} />
  );
}
export function LegBonesSheet() {
  return (
    <ReliefSheet title="Tibia et fibula : reliefs à repérer" caption="Tibia médial, porteur ; fibula latérale, surtout d'insertion musculaire ; leur cheville forme la malléole médiale (tibia) et la malléole latérale (fibula)"
      bones={[{ name: "Tibia", c: C.blue, items: [["Plateau tibial", "condyles médial et latéral (glènes du genou)"], ["Éminence intercondylaire", "insertion des ligaments croisés"], ["Tubérosité tibiale", "ligament patellaire"], ["Crête antérieure", "bord sous-cutané (« tibia »)"], ["Malléole médiale", "distal, articule avec le talus"]] },
        { name: "Fibula", c: C.green, items: [["Tête de la fibula", "lig. collatéral fibulaire, biceps fémoral"], ["Col de la fibula", "nerf fibulaire commun (fragile)"], ["Diaphyse", "insertions des muscles de la jambe"], ["Malléole latérale", "plus basse que la médiale"], ["Membrane interosseuse", "relie tibia et fibula"]] }]} />
  );
}
export function FootBonesDiagram() {
  const b = (x: number, y: number, w: number, h: number, t: string, c: string, s = 10.5) => (
    <g key={t}><rect x={x} y={y} width={w} height={h} rx={14} fill={c} fillOpacity={0.35} stroke={c} strokeWidth={2.2} /><Txt x={x + w / 2} y={y + h / 2 + 4} bold size={s}>{t}</Txt></g>
  );
  return (
    <Figure viewBox="0 0 740 440" title="Os du pied : tarse, métatarse, phalanges (vue dorsale, pied droit)" caption="Tarse postérieur : talus (astragale) et calcanéus ; tarse antérieur : naviculaire, cuboïde, trois cunéiformes ; puis 5 métatarsiens et 14 phalanges ; le talus transmet le poids de la jambe au pied">
      {b(230, 20, 120, 70, "Talus", C.blue, 12)}{b(350, 96, 110, 110, "Calcanéus", C.red, 12)}
      {b(120, 100, 100, 50, "Naviculaire", C.violet)}{b(258, 150, 80, 60, "Cuboïde", C.green)}
      {b(50, 160, 64, 44, "Cun. méd.", C.amber, 9.5)}{b(118, 160, 64, 44, "Cun. int.", C.pink, 9.5)}{b(186, 160, 64, 44, "Cun. lat.", C.blue, 9.5)}
      {[0, 1, 2, 3, 4].map((i) => <g key={i}><rect x={60 + i * 80} y={220} width={40} height={90} rx={14} fill="#eadfc8" stroke="#a78c5b" strokeWidth={2} /><Txt x={80 + i * 80} y={268} bold size={11}>{["I", "II", "III", "IV", "V"][i]}</Txt></g>)}
      {[0, 1, 2, 3, 4].map((i) => [0, 1, 2].filter((j) => !(i === 0 && j === 2)).map((j) => <rect key={`${i}${j}`} x={64 + i * 80} y={322 + j * 30} width={32} height={24} rx={10} fill="#f5edd8" stroke="#a78c5b" strokeWidth={1.8} />))}
      <Txt x={520} y={60} anchor="start" bold size={12}>Tarse (7 os)</Txt>
      {["postérieur : talus, calcanéus", "antérieur : naviculaire, cuboïde,", "3 cunéiformes (médial, intermédiaire, latéral)"].map((t, i) => <Txt key={i} x={520} y={82 + i * 16} anchor="start" size={10}>{t}</Txt>)}
      <Txt x={520} y={180} anchor="start" bold size={12}>Métatarse et phalanges</Txt>
      {["5 métatarsiens (I à V), base, corps, tête", "hallux : 2 phalanges ; autres orteils : 3", "tubérosité du 5ᵉ métatarsien : palpable, fibulaires"].map((t, i) => <Txt key={i} x={520} y={202 + i * 16} anchor="start" size={10}>{t}</Txt>)}
      <Txt x={520} y={290} anchor="start" bold size={12} color={RED}>À retenir</Txt>
      {["le calcanéus forme le talon (tendon calcanéen)", "sustentaculum tali : soutient le talus", "arches : médiale, latérale, transversale"].map((t, i) => <Txt key={i} x={520} y={312 + i * 16} anchor="start" size={10}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Rectum et canal anal ────────────────────────────────────────────────
export function RectumAnalDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Rectum et canal anal : coupe frontale" caption="Le rectum a trois courbures latérales (avec valvules de Houston) et une ampoule ; la ligne pectinée sépare la muqueuse glandulaire (au-dessus) de la muqueuse malpighienne (au-dessous) ; sphincters interne (lisse, involontaire) et externe (strié, volontaire)">
      <path d="M260,20 C290,20 300,60 270,90 C240,120 300,150 290,190 C280,230 250,240 254,270 L254,330 L326,330 L326,270 C330,240 340,220 320,190 C300,150 350,120 320,90 C300,60 320,20 290,20z" fill={C.amber} fillOpacity={0.35} stroke={DEEP.amber} strokeWidth={3} />
      <Txt x={290} y={70} bold size={11} color={DEEP.amber}>Rectum</Txt>
      {[[286, 100], [296, 154]].map(([x, y], i) => <path key={i} d={`M${x - 24},${y} L${x + 20},${y}`} stroke={DEEP.amber} strokeWidth={3} strokeDasharray="4 3" />)}
      <Txt x={220} y={104} anchor="end" size={9} bold color={C.grey}>valvules de Houston</Txt>
      <path d="M254,270 L326,270" stroke={RED} strokeWidth={3} strokeDasharray="4 3" /><Txt x={224} y={274} anchor="end" size={9} bold color={RED}>ligne pectinée</Txt>
      <Txt x={360} y={200} anchor="start" size={10} bold>ampoule rectale</Txt>
      <path d="M254,330 L254,400 M326,330 L326,400" stroke={DEEP.amber} strokeWidth={3} /><Txt x={290} y={310} bold size={10} color={DEEP.amber}>canal anal</Txt>
      <rect x={236} y={286} width={18} height={70} rx={8} fill={C.violet} fillOpacity={0.7} /><rect x={326} y={286} width={18} height={70} rx={8} fill={C.violet} fillOpacity={0.7} />
      <rect x={220} y={330} width={26} height={70} rx={10} fill={C.red} fillOpacity={0.6} /><rect x={334} y={330} width={26} height={70} rx={10} fill={C.red} fillOpacity={0.6} />
      <path d="M190,260 C230,290 246,300 254,296 M390,260 C350,290 336,300 326,296" fill="none" stroke={C.green} strokeWidth={7} strokeLinecap="round" />
      <Txt x={186} y={258} anchor="end" size={9} bold color={DEEP.green}>élévateur de l'anus</Txt>
      <line x1={244} y1={310} x2={150} y2={340} {...leader} /><Txt x={20} y={344} anchor="start" size={10} bold color="#6a45b0">sphincter interne (lisse)</Txt>
      <line x1={222} y1={380} x2={150} y2={400} {...leader} /><Txt x={20} y={404} anchor="start" size={10} bold color={RED}>sphincter externe (strié)</Txt>
      <rect x={400} y={240} width={330} height={216} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={262} bold size={12}>À retenir</Txt>
      {["rectum : ~12 cm, rétropéritonéal en bas, sacrum-coccyx", "3 courbures latérales, 2 courbures sagittales", "artères rectales sup. (mésentérique inf.), moy., inf.", "drainage : portal (haut) ↔ cave (bas) : anastomose", "canal anal : ~4 cm, ligne pectinée = limite", "hémorroïdes : plexus veineux sous-muqueux"].map((t, i) => <Txt key={i} x={565} y={286 + i * 26} size={10}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Vessie et urètre ────────────────────────────────────────────────────
export function BladderUrethraDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Vessie et urètre : configuration interne" caption="Trigone vésical (deux orifices urétéraux et l'orifice urétral interne) ; urètre masculin en 4 segments (pré-prostatique, prostatique, membraneux, spongieux) ; urètre féminin court (≈ 4 cm), avec sphincter externe strié">
      <path d="M120,140 C110,60 250,40 260,120 C266,190 250,230 210,246 C160,250 122,210 120,140z" fill={C.blue} fillOpacity={0.3} stroke={DEEP.blue} strokeWidth={3} />
      <path d="M140,190 L240,190 L190,246z" fill={C.amber} fillOpacity={0.5} stroke={DEEP.amber} strokeWidth={2.5} /><Txt x={190} y={214} bold size={9.5}>trigone</Txt>
      <circle cx={140} cy={190} r={6} fill={C.green} stroke="#fff" strokeWidth={1.5} /><circle cx={240} cy={190} r={6} fill={C.green} stroke="#fff" strokeWidth={1.5} />
      <path d="M120,150 C100,120 96,80 84,40 M260,150 C280,120 284,80 296,40" fill="none" stroke={C.green} strokeWidth={6} strokeLinecap="round" />
      <Txt x={80} y={34} anchor="end" size={9.5} bold color={DEEP.green}>uretère gauche</Txt><Txt x={300} y={34} anchor="start" size={9.5} bold color={DEEP.green}>uretère droit</Txt>
      <path d="M190,246 L190,320" stroke={C.amber} strokeWidth={8} strokeLinecap="round" />
      <path d="M170,250 C160,290 220,290 210,250z" fill={C.violet} fillOpacity={0.4} stroke={DEEP.violet} strokeWidth={2} /><Txt x={238} y={276} anchor="start" size={9} bold color="#6a45b0">prostate</Txt>
      <path d="M190,320 L190,380 C190,420 250,420 262,400" fill="none" stroke={C.amber} strokeWidth={8} strokeLinecap="round" />
      <Txt x={170} y={352} anchor="end" size={9} bold color={DEEP.amber}>urètre membraneux</Txt><Txt x={170} y={372} anchor="end" size={9} color={C.grey}>+ sphincter externe</Txt>
      <Txt x={190} y={120} bold size={13} color={DEEP.blue}>Vessie</Txt>
      <Txt x={190} y={136} size={9.5} color={C.grey}>détrusor (muscle lisse)</Txt>
      <line x1={190} y1={190} x2={320} y2={120} {...leader} /><Txt x={326} y={122} anchor="start" size={10} bold color={DEEP.amber}>trigone : 2 orifices urétéraux</Txt><Txt x={326} y={136} anchor="start" size={9.5} color={C.grey}>+ orifice urétral interne</Txt>
      <rect x={400} y={190} width={330} height={260} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={212} bold size={12}>Urètre masculin (≈ 16-20 cm)</Txt>
      {[["1. Pré-prostatique", "col vésical, sphincter interne"], ["2. Prostatique", "crête urétrale, colliculus séminal"], ["3. Membraneux", "traverse le diaphragme urogénital"], ["4. Spongieux", "dans le corps spongieux du pénis"]].map(([a, b], i) => (
        <g key={a}><Txt x={412} y={236 + i * 24} anchor="start" bold size={10.5}>{a}</Txt><Txt x={720} y={236 + i * 24} anchor="end" size={9.5} color={C.grey}>{b}</Txt></g>
      ))}
      <Txt x={565} y={350} bold size={12}>Urètre féminin (≈ 4 cm)</Txt>
      {["court, direct, en avant de la paroi antérieure du vagin", "sphincter externe strié : continence volontaire", "explique la plus grande fréquence des cystites"].map((t, i) => <Txt key={i} x={565} y={374 + i * 20} size={10}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Appareil génital masculin ───────────────────────────────────────────
export function MaleGenitalDiagram() {
  return (
    <Figure viewBox="0 0 740 490" title="Voies génitales masculines : du testicule à l'urètre" caption="Le sperme produit dans les tubes séminifères passe par l'épididyme, le canal déférent (dans le cordon spermatique), rejoint la vésicule séminale pour former le canal éjaculateur, qui traverse la prostate et s'ouvre dans l'urètre prostatique">
      <ellipse cx={110} cy={340} rx={60} ry={80} fill={C.violet} fillOpacity={0.4} stroke={DEEP.violet} strokeWidth={3} /><Txt x={110} y={344} bold size={11}>Testicule</Txt>
      <path d="M156,290 C180,300 184,380 150,400 C136,408 130,396 138,386" fill="none" stroke={C.amber} strokeWidth={14} strokeLinecap="round" opacity={0.7} /><Txt x={196} y={350} anchor="start" size={9.5} bold color={DEEP.amber}>épididyme</Txt>
      <path d="M150,400 C210,410 250,340 250,250 C250,170 260,130 320,110 C380,90 400,140 380,190" fill="none" stroke={C.blue} strokeWidth={5} strokeLinecap="round" /><Txt x={236} y={200} anchor="end" size={9.5} bold color={DEEP.blue}>canal déférent</Txt>
      <Txt x={236} y={214} anchor="end" size={8.5} color={C.grey}>(cordon spermatique, canal inguinal)</Txt>
      <path d="M380,190 C410,200 420,240 400,260" fill="none" stroke={C.blue} strokeWidth={5} />
      <ellipse cx={430} cy={210} rx={34} ry={52} fill={C.green} fillOpacity={0.35} stroke={DEEP.green} strokeWidth={2.5} transform="rotate(-20 430 210)" /><Txt x={470} y={190} anchor="start" size={9.5} bold color={DEEP.green}>vésicule séminale</Txt>
      <path d="M380,270 C420,270 440,300 420,340 C400,360 350,350 350,310z" fill={C.pink} fillOpacity={0.4} stroke={DEEP.pink} strokeWidth={2.5} /><Txt x={452} y={320} anchor="start" size={9.5} bold color={DEEP.pink}>prostate</Txt>
      <path d="M400,250 L390,290 M404,262 L396,300" stroke={RED} strokeWidth={4} /><Txt x={470} y={260} anchor="start" size={9.5} bold color={RED}>canal éjaculateur</Txt>
      <path d="M380,340 L380,440 C380,456 300,456 260,436" fill="none" stroke={C.amber} strokeWidth={8} strokeLinecap="round" /><Txt x={300} y={478} bold size={9.5} color={DEEP.amber}>urètre → pénis</Txt>
      <path d="M340,60 C380,20 440,40 440,80 C440,120 380,130 340,100z" fill={C.blue} fillOpacity={0.3} stroke={DEEP.blue} strokeWidth={2.5} /><Txt x={390} y={82} bold size={10.5} color={DEEP.blue}>Vessie</Txt>
      <rect x={520} y={270} width={210} height={190} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={625} y={292} bold size={12}>Sécrétions</Txt>
      {["testicule : spermatozoïdes + testostérone", "vésicules séminales : ~60 % du sperme", "prostate : liquide prostatique (riche en antigène prostatique spécifique)", "glandes bulbo-urétrales : liquide pré-éjaculatoire"].map((t, i) => { const [a, b] = split2(t, 32); return <g key={i}><Txt x={625} y={314 + i * 34} size={9.5}>{a}</Txt><Txt x={625} y={326 + i * 34} size={9.5}>{b}</Txt></g>; })}
    </Figure>
  );
}

// ─── Plexus cœliaque ─────────────────────────────────────────────────────
export function CoeliacTrunkDiagram() {
  const box = (x: number, y: number, w: number, t: string, s: string, c: string) => (
    <g key={t}><rect x={x} y={y} width={w} height={46} rx={8} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={2} /><Txt x={x + w / 2} y={y + 20} bold size={11}>{t}</Txt><Txt x={x + w / 2} y={y + 36} size={9.5} color={C.grey}>{s}</Txt></g>
  );
  return (
    <Figure viewBox="0 0 740 400" title="Tronc cœliaque et ses trois branches" caption="Le tronc cœliaque naît de l'aorte à T12 et se divise en artère gastrique gauche, artère splénique et artère hépatique commune ; il irrigue estomac, rate, foie, vésicule biliaire, pancréas et duodénum ; le plexus cœliaque en assure l'innervation autonome">
      {box(280, 10, 180, "Aorte abdominale", "T12", C.red)}
      <path d="M370,56 L370,90" stroke={C.red} strokeWidth={4} markerEnd="url(#fig-arrow)" />
      {box(280, 92, 180, "Tronc cœliaque", "court, ≈ 1-2 cm", C.red)}
      <path d="M370,138 L370,160 M120,160 L620,160 M120,160 L120,190 M370,160 L370,190 M620,160 L620,190" stroke={C.red} strokeWidth={3} fill="none" />
      {box(20, 192, 200, "A. gastrique gauche", "petite courbure, œsophage", C.blue)}
      {box(270, 192, 200, "A. splénique", "rate, pancréas, grande courbure", C.violet)}
      {box(520, 192, 200, "A. hépatique commune", "foie, vésicule, duodénum", C.green)}
      <path d="M120,238 L120,262" stroke={C.blue} strokeWidth={2.5} /><Txt x={120} y={280} size={10}>anastomose avec la</Txt><Txt x={120} y={294} size={10}>gastrique droite</Txt>
      <path d="M370,238 L370,262" stroke={C.violet} strokeWidth={2.5} /><Txt x={370} y={280} size={10}>pancréatique dorsale, gastro-</Txt><Txt x={370} y={294} size={10}>omentale gauche, gastriques courtes</Txt>
      <path d="M620,238 L620,262" stroke={C.green} strokeWidth={2.5} /><Txt x={620} y={280} size={10}>gastro-duodénale, puis hépatique</Txt><Txt x={620} y={294} size={10}>propre → cystique (vésicule)</Txt>
      <rect x={20} y={316} width={700} height={70} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={338} bold size={11.5}>Plexus cœliaque</Txt>
      <Txt x={370} y={356} size={10}>ganglions cœliaques autour de la naissance du tronc ; reçoit les nerfs splanchniques (sympathique) et le vague (parasympathique)</Txt>
      <Txt x={370} y={372} size={10} color={C.grey}>innerve les viscères de l'étage sus-mésocolique (estomac, foie, pancréas, rate)</Txt>
    </Figure>
  );
}
