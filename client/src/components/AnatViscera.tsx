import { Figure, C, Txt, Dot } from "./Figure";
import { RED, DEEP, leader } from "./FigKit";

// Anatomie S1 — péritoine, tube digestif, appareil urinaire et génital : schémas alignés sur le texte.

const split2 = (s: string, n: number): [string, string] => { if (s.length <= n) return [s, ""]; const i = s.lastIndexOf(" ", n); return [s.slice(0, i), s.slice(i + 1)]; };
const BONE = "#eadfc8";
const BS = "#a78c5b";

// ─── Péritoine : coupe sagittale ─────────────────────────────────────────
export function PeritoneumSagittalDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Coupe sagittale du péritoine" caption="Le péritoine pariétal tapisse la paroi, le viscéral enveloppe les organes ; la grande cavité et l'arrière-cavité des épiploons communiquent par le foramen omental ; mésentères, épiploons et ligaments sont des replis péritonéaux">
      <path d="M60,30 C30,100 30,300 80,420 L110,420 L110,30z" fill="none" stroke="#b98c68" strokeWidth={3} />
      <Txt x={40} y={20} anchor="start" size={9.5} bold color={C.grey}>paroi antérieure</Txt>
      <path d="M340,30 L340,420" stroke="#b98c68" strokeWidth={3} /><Txt x={340} y={20} size={9.5} bold color={C.grey}>rétro-péritoine</Txt>
      <ellipse cx={200} cy={78} rx={52} ry={26} fill={C.pink} fillOpacity={0.5} stroke={DEEP.pink} strokeWidth={2.5} /><Txt x={200} y={82} bold size={10.5}>Foie</Txt>
      <path d="M170,140 C130,150 130,220 190,224 C240,226 250,190 220,160 C210,146 190,140 170,140z" fill={C.amber} fillOpacity={0.5} stroke={DEEP.amber} strokeWidth={2.5} /><Txt x={186} y={188} bold size={10.5}>Estomac</Txt>
      <path d="M260,196 C300,200 320,236 300,262 C280,272 250,252 250,232z" fill={C.violet} fillOpacity={0.5} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={286} y={236} bold size={9}>Pancréas</Txt>
      <path d="M150,250 C110,262 120,330 170,340 C220,346 260,320 250,280 C240,256 180,242 150,250z" fill={C.green} fillOpacity={0.35} stroke={DEEP.green} strokeWidth={2.5} /><Txt x={180} y={298} bold size={10.5}>Côlon transverse</Txt>
      <path d="M180,350 C150,380 200,412 250,394 C290,376 280,352 260,346z" fill={C.blue} fillOpacity={0.35} stroke={DEEP.blue} strokeWidth={2.5} /><Txt x={224} y={382} bold size={9.5}>Grêle</Txt>
      <path d="M326,390 C330,410 300,430 270,430" fill="none" stroke={C.amber} strokeWidth={6} /><Txt x={296} y={444} bold size={9.5}>rectum / vessie</Txt>
      <path d="M200,224 C210,270 190,310 190,330" fill="none" stroke={C.red} strokeWidth={6} strokeLinecap="round" /><Txt x={122} y={270} anchor="end" size={9.5} bold color={RED}>grand omentum (tablier)</Txt>
      <path d="M244,180 L332,170" stroke={C.blue} strokeWidth={5} />
      <path d="M250,346 C280,338 316,340 340,352" fill="none" stroke={C.violet} strokeWidth={6} /><Txt x={330} y={372} size={8.5} bold color={DEEP.violet} anchor="end">mésentère</Txt>
      <ellipse cx={266} cy={172} rx={22} ry={14} fill={C.blue} fillOpacity={0.25} stroke={C.blue} strokeDasharray="4 3" strokeWidth={1.5} /><Txt x={300} y={150} size={8.5} bold>arrière-cavité</Txt>
      <Txt x={176} y={40} size={9} color={C.grey}>cavité péritonéale (grande cavité)</Txt>
      <rect x={400} y={20} width={330} height={430} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={44} bold size={12}>Vocabulaire à retenir</Txt>
      {[["Intrapéritonéal", "entouré de péritoine (estomac, grêle, foie...)"], ["Rétropéritonéal", "en arrière du péritoine (pancréas, reins, duodénum)"], ["Mésentère", "repli qui suspend le grêle, relie à la paroi"], ["Épiploon", "repli reliant l'estomac aux organes voisins"], ["Ligament péritonéal", "repli reliant organe ↔ organe ou paroi"], ["Mésocôlon transverse", "sépare compartiments supra- et infracolique"]].map(([a, b], i) => (
        <g key={a}><rect x={412} y={58 + i * 63} width={306} height={56} rx={8} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={1.4} /><Txt x={565} y={78 + i * 63} bold size={11}>{a}</Txt><Txt x={565} y={96 + i * 63} size={9.5}>{split2(b, 44)[0]}</Txt><Txt x={565} y={108 + i * 63} size={9.5}>{split2(b, 44)[1]}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Duodénum et pancréas ────────────────────────────────────────────────
export function DuodenumPancreasDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Duodénum en cadre et pancréas" caption="Les quatre parties du duodénum (supérieure D1, descendante D2, horizontale D3, ascendante D4) entourent la tête du pancréas ; le cholédoque et le canal de Wirsung s'ouvrent à la papille majeure sur D2 ; l'angle duodéno-jéjunal est fixé par le muscle de Treitz">
      <path d="M150,70 C230,50 330,70 350,110 L350,300 C350,360 300,400 230,400 L170,400 C130,400 110,370 110,330 L140,330 C140,352 150,370 170,372 L230,372 C280,372 320,340 320,300 L320,110 C310,86 240,80 170,96z" fill={C.amber} fillOpacity={0.45} stroke={DEEP.amber} strokeWidth={2.5} />
      <path d="M170,96 C180,84 240,76 300,90" fill="none" stroke={DEEP.amber} strokeWidth={0} />
      <path d="M200,140 C250,124 300,130 330,150 L330,230 C300,240 250,240 200,220 C170,200 170,160 200,140z" fill={C.violet} fillOpacity={0.55} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={262} y={184} bold size={11}>Tête du pancréas</Txt>
      <path d="M200,150 C130,150 90,170 60,190 L60,214 C100,200 150,196 200,206z" fill={C.violet} fillOpacity={0.4} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={124} y={188} bold size={10}>Corps → queue</Txt>
      <path d="M262,150 L300,220" stroke={C.pink} strokeWidth={4} strokeLinecap="round" /><circle cx={330} cy={220} r={6} fill={C.red} stroke="#fff" strokeWidth={1.5} />
      <path d="M250,100 L270,300" stroke={C.green} strokeWidth={5} strokeLinecap="round" opacity={0} />
      <Txt x={340} y={90} anchor="start" size={10.5} bold color={DEEP.amber}>D1 (supérieure)</Txt>
      <Txt x={356} y={270} anchor="start" size={10} bold color={DEEP.amber}>D2 (desc.)</Txt>
      <Txt x={200} y={392} bold size={10.5} color={DEEP.amber}>D3 (horizontale)</Txt>
      <Txt x={88} y={342} anchor="end" size={10.5} bold color={DEEP.amber}>D4 (ascendante)</Txt>
      <line x1={330} y1={220} x2={400} y2={210} {...leader} /><Txt x={404} y={206} anchor="start" size={10} bold color={RED}>papille majeure (ampoule de Vater)</Txt>
      <Txt x={404} y={220} anchor="start" size={9} color={C.grey}>cholédoque + Wirsung ; sphincter d'Oddi</Txt>
      <line x1={112} y1={332} x2={70} y2={300} {...leader} /><Txt x={8} y={294} anchor="start" size={9.5} bold>angle duodéno-jéjunal</Txt><Txt x={8} y={306} anchor="start" size={9} color={C.grey}>muscle de Treitz</Txt>
      <rect x={400} y={250} width={330} height={196} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={272} bold size={12}>Repères du pancréas</Txt>
      {["subdivisions : tête, col, corps, queue (+ processus unciné)", "canal principal de Wirsung → papille majeure", "canal accessoire de Santorini → papille mineure", "rétropéritonéal, en arrière de l'estomac", "vascularisation : arcades pancréatico-duodénales", "plexus cœliaque : innervation sympathique et vagale"].map((t, i) => <Txt key={i} x={565} y={296 + i * 24} size={10}>{t}</Txt>)}
      <Dot path="M170,96 L320,110 L320,300 L230,372 L140,330" dur={8} r={5} color="#fff" />
    </Figure>
  );
}

// ─── Estomac ─────────────────────────────────────────────────────────────
export function StomachPartsDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Estomac : les quatre parties et les courbures" caption="Cardia, fundus, corps et pylore (antre + canal pylorique + sphincter) ; petite courbure (petit omentum) et grande courbure (grand omentum, ligament gastro-splénique) ; vascularisation par les branches du tronc cœliaque">
      <path d="M118,30 L150,30 L154,80 C150,130 190,150 240,146 C330,142 350,230 300,290 C250,340 150,330 120,270 C100,220 110,150 118,80z" fill={C.amber} fillOpacity={0.45} stroke={DEEP.amber} strokeWidth={3} />
      <path d="M118,30 L154,30" stroke={C.grey} strokeWidth={8} />
      <path d="M300,290 C330,300 380,290 396,270 L396,240 C370,250 340,262 322,262" fill={C.green} fillOpacity={0.5} stroke={DEEP.green} strokeWidth={2.5} />
      <path d="M396,240 L420,240 L420,270 L396,270z" fill={C.red} fillOpacity={0.6} stroke={DEEP.red} strokeWidth={2.5} />
      <circle cx={158} cy={92} r={10} fill="#fff" stroke={C.grey} strokeWidth={2.5} /><Txt x={172} y={64} anchor="start" bold size={10.5}>Cardia</Txt>
      <path d="M172,110 C200,60 260,40 300,60 C320,80 300,120 240,140" fill={C.blue} fillOpacity={0.25} stroke={C.blue} strokeWidth={2} strokeDasharray="5 4" /><Txt x={262} y={86} bold size={11} color={DEEP.blue}>Fundus</Txt>
      <Txt x={200} y={230} bold size={12}>Corps</Txt>
      <Txt x={352} y={286} bold size={10.5} color={DEEP.green}>Antre</Txt>
      <Txt x={408} y={296} bold size={10.5} color={RED}>Pylore</Txt>
      <path d="M126,110 C104,200 116,280 150,304" fill="none" stroke={C.violet} strokeWidth={5} strokeLinecap="round" opacity={0.7} /><Txt x={96} y={200} anchor="end" bold size={10.5} color="#6a45b0">petite courbure</Txt><Txt x={96} y={214} anchor="end" size={9} color={C.grey}>→ petit omentum</Txt>
      <path d="M186,138 C290,110 370,200 316,300" fill="none" stroke={C.pink} strokeWidth={5} strokeLinecap="round" opacity={0.7} /><Txt x={336} y={160} anchor="start" bold size={10.5} color={DEEP.pink}>grande courbure</Txt><Txt x={336} y={174} anchor="start" size={9} color={C.grey}>→ grand omentum</Txt>
      <path d="M120,270 L100,290" stroke={C.grey} strokeWidth={0} /><Txt x={126} y={324} anchor="start" size={9.5} bold color={C.grey}>incisure angulaire</Txt>
      <rect x={440} y={20} width={290} height={410} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={585} y={44} bold size={12}>Vascularisation (tronc cœliaque)</Txt>
      {[["Petite courbure", "a. gastrique gauche (cœliaque) ↔", "a. gastrique droite (hépatique)"], ["Grande courbure", "a. gastro-omentale droite (gastro-duodénale)", "↔ gastro-omentale gauche (splénique)"], ["Fundus", "a. gastriques courtes", "(artère splénique)"]].map(([a, b, c], i) => (
        <g key={a}><rect x={452} y={60 + i * 76} width={266} height={68} rx={8} fill={C.red} fillOpacity={0.07} stroke={C.red} strokeWidth={1.5} /><Txt x={585} y={80 + i * 76} bold size={11} color={RED}>{a}</Txt><Txt x={585} y={98 + i * 76} size={9}>{b}</Txt><Txt x={585} y={112 + i * 76} size={9}>{c}</Txt></g>
      ))}
      <Txt x={585} y={310} bold size={11.5}>Structure</Txt>
      {["muqueuse : plis gastriques, glandes fundiques", "cellules pariétales : HCl + facteur intrinsèque", "cellules principales : pepsinogène", "musculeuse : 3 couches (oblique interne)"].map((t, i) => <Txt key={i} x={585} y={332 + i * 20} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Foie : lobes et pédicule ────────────────────────────────────────────
export function LiverViewsDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Foie : face viscérale, lobes et pédicule hépatique" caption="Le sillon sagittal (ligament rond, ligament veineux) sépare le lobe gauche du droit ; sur la face viscérale : lobe carré, lobe caudé et hile ; le pédicule hépatique contient la veine porte, l'artère hépatique propre et la voie biliaire principale">
      <path d="M40,150 C40,70 200,50 360,90 C420,110 420,220 340,270 C240,320 90,300 40,220z" fill={C.pink} fillOpacity={0.4} stroke={DEEP.pink} strokeWidth={3} />
      <path d="M210,70 L214,290" stroke={C.grey} strokeWidth={4} strokeDasharray="6 4" /><Txt x={212} y={62} size={9.5} bold color={C.grey}>sillon sagittal gauche</Txt>
      <Txt x={120} y={170} bold size={13} color={DEEP.pink}>Lobe droit</Txt>
      <Txt x={300} y={150} bold size={12} color={DEEP.pink}>Lobe gauche</Txt>
      <rect x={224} y={170} width={44} height={44} rx={8} fill={C.violet} fillOpacity={0.35} stroke={C.violet} strokeWidth={2} /><Txt x={246} y={196} bold size={9.5}>carré</Txt>
      <ellipse cx={150} cy={122} rx={30} ry={20} fill={C.green} fillOpacity={0.4} stroke={C.green} strokeWidth={2} /><Txt x={150} y={126} bold size={9.5}>caudé</Txt>
      <rect x={150} y={190} width={56} height={30} rx={8} fill="#fff" fillOpacity={0.6} stroke={RED} strokeWidth={2} strokeDasharray="4 3" /><Txt x={178} y={209} bold size={10} color={RED}>hile</Txt>
      <path d="M170,214 L150,250" stroke={C.blue} strokeWidth={6} /><path d="M180,214 L180,258" stroke={C.red} strokeWidth={5} /><path d="M190,214 L212,254" stroke={C.green} strokeWidth={5} />
      <path d="M110,262 C140,290 150,296 168,284" fill="none" stroke={C.green} strokeWidth={9} strokeLinecap="round" /><Txt x={98} y={284} anchor="end" size={9.5} bold color={DEEP.green}>vésicule biliaire</Txt>
      <Txt x={150} y={272} anchor="start" size={8.5} bold color={DEEP.blue}>V. porte</Txt>
      <rect x={430} y={20} width={300} height={190} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={580} y={42} bold size={12}>Pédicule hépatique (hile)</Txt>
      {[["Veine porte", "en arrière, apporte le sang digestif", C.blue], ["Artère hépatique propre", "en avant à gauche", C.red], ["Voie biliaire principale", "en avant à droite (canal hépatique commun)", C.green]].map(([a, b, c], i) => (
        <g key={String(a)}><rect x={442} y={54 + i * 50} width={276} height={44} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.6} /><Txt x={580} y={73 + i * 50} bold size={11}>{String(a)}</Txt><Txt x={580} y={88 + i * 50} size={9.5}>{String(b)}</Txt></g>
      ))}
      <rect x={20} y={320} width={710} height={110} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={375} y={342} bold size={12}>Ligaments et rapports péritonéaux</Txt>
      {["faux (falciforme) : relie le foie à la paroi ; contient le lig. rond", "petit omentum : lig. hépato-gastrique et hépato-duodénal", "lig. coronaire et lig. triangulaires : fixent au diaphragme", "aire nue du foie : zone sans péritoine, en contact avec le diaphragme"].map((t, i) => <Txt key={i} x={375} y={364 + i * 16} size={10}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Rein : coupe frontale ───────────────────────────────────────────────
export function KidneySectionDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Rein : coupe frontale et voies urinaires" caption="Cortex, médulla (pyramides de Malpighi, colonnes de Bertin), papilles s'ouvrant dans les petits calices, puis grands calices, pelvis rénal et uretère ; le hile contient artère et veine rénales et le pelvis (de l'avant vers l'arrière : veine, artère, pelvis)">
      <path d="M150,30 C40,30 20,200 70,300 C100,360 200,380 250,320 C290,270 290,190 260,120 C240,60 200,30 150,30z" fill={C.red} fillOpacity={0.3} stroke={DEEP.red} strokeWidth={3} />
      <path d="M150,54 C70,56 52,200 90,290 C120,336 190,350 226,306 C256,262 256,196 232,130 C216,84 190,54 150,54z" fill={C.amber} fillOpacity={0.45} stroke={DEEP.amber} strokeWidth={2} />
      {[[110, 130], [110, 210], [140, 280], [190, 300], [210, 220], [186, 130]].map(([x, y], i) => <path key={i} d={`M${x},${y} l14,-24 l14,24z`} fill={C.red} fillOpacity={0.55} stroke={DEEP.red} strokeWidth={2} />)}
      <path d="M250,210 C220,214 200,220 190,240 C186,270 200,280 222,284" fill="none" stroke={C.blue} strokeWidth={9} strokeLinecap="round" opacity={0.6} />
      <path d="M250,210 C254,250 258,300 260,380" fill="none" stroke={C.green} strokeWidth={9} strokeLinecap="round" /><Txt x={278} y={380} anchor="start" size={10.5} bold color={DEEP.green}>Uretère</Txt>
      <line x1={70} y1={120} x2={20} y2={70} {...leader} /><Txt x={8} y={62} anchor="start" size={10.5} bold color={DEEP.red}>Cortex</Txt>
      <line x1={100} y1={220} x2={16} y2={230} {...leader} /><Txt x={8} y={244} anchor="start" size={10.5} bold color={DEEP.amber}>Médulla (pyramides)</Txt>
      <line x1={150} y1={110} x2={310} y2={70} {...leader} /><Txt x={316} y={70} anchor="start" size={10.5} bold>papille → petit calice</Txt>
      <line x1={236} y1={210} x2={310} y2={140} {...leader} /><Txt x={316} y={140} anchor="start" size={10.5} bold color={DEEP.blue}>pelvis rénal</Txt>
      <line x1={186} y1={166} x2={310} y2={104} {...leader} /><Txt x={316} y={106} anchor="start" size={10.5} bold>colonne de Bertin</Txt>
      <rect x={430} y={190} width={300} height={240} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={580} y={212} bold size={12}>Rapports et vascularisation</Txt>
      {["situation : rétropéritonéale, de T12 à L3 (droit plus bas)", "capsule fibreuse → graisse péri-rénale → fascia rénal", "a. rénale → segmentaires → interlobaires → arquées", "→ néphrons (corpuscule + tubule) dans le cortex", "hile : veine (avant), artère, pelvis (arrière)", "le rein droit est en rapport avec le duodénum et le foie"].map((t, i) => <Txt key={i} x={580} y={236 + i * 22} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Utérus et annexes ───────────────────────────────────────────────────
export function UterusAdnexaDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Utérus, trompes et ovaires : coupe frontale" caption="Utérus : fundus, corps, isthme, col (cervix) ; trompe utérine en quatre segments (pavillon, ampoule, isthme, partie utérine) ; ovaire relié par le ligament propre et le ligament suspenseur ; le ligament large enveloppe l'ensemble">
      <path d="M300,110 C300,60 440,60 440,110 L420,250 L370,290 L320,250z" fill={C.pink} fillOpacity={0.4} stroke={DEEP.pink} strokeWidth={3} />
      <path d="M340,120 L400,120 L385,246 L370,266 L355,246z" fill="#fff" fillOpacity={0.6} stroke={DEEP.pink} strokeWidth={1.5} /><Txt x={370} y={190} size={9} bold>cavité utérine</Txt>
      <path d="M340,290 L400,290 L396,332 L344,332z" fill={C.red} fillOpacity={0.25} stroke={DEEP.red} strokeWidth={2.5} /><Txt x={370} y={316} bold size={10}>Vagin</Txt>
      <path d="M320,254 L420,254" stroke={C.grey} strokeWidth={2} strokeDasharray="3 3" /><Txt x={286} y={258} anchor="end" size={9} bold>isthme</Txt>
      <Txt x={370} y={86} bold size={10.5}>Fundus</Txt>
      <Txt x={370} y={152} bold size={10.5}>Corps</Txt>
      <Txt x={286} y={282} anchor="end" bold size={10}>Col (cervix)</Txt>
      <path d="M300,112 C250,96 200,100 170,130 C150,150 130,150 116,138" fill="none" stroke={C.amber} strokeWidth={9} strokeLinecap="round" />
      <path d="M440,112 C490,96 540,100 570,130 C590,150 610,150 624,138" fill="none" stroke={C.amber} strokeWidth={9} strokeLinecap="round" />
      <ellipse cx={120} cy={176} rx={30} ry={22} fill={C.violet} fillOpacity={0.5} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={120} y={180} bold size={10}>Ovaire</Txt>
      <ellipse cx={620} cy={176} rx={30} ry={22} fill={C.violet} fillOpacity={0.5} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={620} y={180} bold size={10}>Ovaire</Txt>
      <path d="M150,168 C220,150 268,140 300,130" fill="none" stroke={C.green} strokeWidth={4} /><Txt x={224} y={142} size={9} bold color={DEEP.green}>lig. propre de l'ovaire</Txt>
      <path d="M90,156 C70,110 90,60 120,40" fill="none" stroke={C.blue} strokeWidth={5} /><Txt x={60} y={40} anchor="end" size={9} bold color={DEEP.blue}>lig. suspenseur</Txt>
      <path d="M300,140 L200,260 M440,140 L540,260" stroke={C.grey} strokeWidth={5} opacity={0.5} /><Txt x={196} y={278} anchor="end" size={9} bold color={C.grey}>lig. large</Txt><Txt x={548} y={278} anchor="start" size={9} bold color={C.grey}>lig. large</Txt>
      <path d="M310,166 C260,190 230,230 224,290" fill="none" stroke={C.green} strokeWidth={4} /><Txt x={216} y={306} size={9} bold color={DEEP.green}>lig. rond</Txt>
      <Txt x={150} y={92} bold size={9.5} color={DEEP.amber}>pavillon → ampoule → isthme</Txt>
      <rect x={20} y={340} width={700} height={100} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={362} bold size={12}>Position et fixité de l'utérus</Txt>
      {["antéversé et antéfléchi : le corps repose sur la vessie", "moyens de fixité : lig. larges, ronds, utéro-sacrés, cardinaux (Mackenrodt) + plancher pelvien", "vascularisation : a. utérine (iliaque interne) ↔ a. ovarienne (aorte) : anastomose", "structure : périmétrium, myomètre, endomètre ; col : endocol et exocol"].map((t, i) => <Txt key={i} x={370} y={382 + i * 15} size={9.5}>{t}</Txt>)}
    </Figure>
  );
}

export function _touch() { return [BONE, BS]; }
