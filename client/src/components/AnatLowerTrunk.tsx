import { Figure, C, Txt, Dot } from "./Figure";
import { RED, DEEP, leader } from "./FigKit";

// Anatomie S1 — membre inférieur et paroi abdominale : schémas alignés sur le texte des cours.

const split2 = (s: string, n: number): [string, string] => { if (s.length <= n) return [s, ""]; const i = s.lastIndexOf(" ", n); return [s.slice(0, i), s.slice(i + 1)]; };
const SKIN = "#f0c9a8";
const BONE = "#eadfc8";
const BS = "#a78c5b";
const NERVE = "#e0a030";
const ART = "#d9414f";
const VEIN = "#4f7be8";

type Row = [string, string, string?];
function Panel({ x, y, w, h, title, rows, c }: { x: number; y: number; w: number; h: number; title: string; rows: Row[]; c: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={1.8} />
      <Txt x={x + w / 2} y={y + 22} bold size={12} color={c}>{title}</Txt>
      {rows.map(([a, b], i) => (
        <g key={i}>
          <Txt x={x + 12} y={y + 46 + i * 26} anchor="start" bold size={10.5}>{a}</Txt>
          <Txt x={x + w - 12} y={y + 46 + i * 26} anchor="end" size={10} color={C.grey}>{b}</Txt>
        </g>
      ))}
    </g>
  );
}

// ─── Hanche ──────────────────────────────────────────────────────────────
export function HipJointDiagram() {
  return (
    <Figure viewBox="0 0 740 430" title="Articulation coxo-fémorale (hanche) : ligaments" caption="Sphéroïde stable : cotyle profond (labrum) et tête fémorale ; trois ligaments capsulaires (ilio-fémoral, pubo-fémoral, ischio-fémoral) se vissent en tension à l'extension ; le ligament de la tête du fémur porte l'artère du ligament rond">
      <path d="M40,20 C120,10 200,30 250,70 L250,150 C210,140 150,130 40,120z" fill={BONE} stroke={BS} strokeWidth={3} />
      <Txt x={120} y={70} bold size={11}>Os coxal</Txt>
      <path d="M250,150 C210,190 210,250 250,290 L300,320 L270,250 C300,240 300,190 250,150z" fill={BONE} stroke={BS} strokeWidth={3} />
      <path d="M250,100 C310,110 340,170 300,220 C280,240 250,240 250,240" fill="none" stroke={C.blue} strokeWidth={9} strokeLinecap="round" />
      <Txt x={352} y={118} anchor="start" bold size={10} color={DEEP.blue}>cotyle (acétabulum)</Txt>
      <circle cx={310} cy={180} r={54} fill="#f5edd8" stroke={BS} strokeWidth={3} />
      <Txt x={314} y={186} bold size={11}>Tête</Txt>
      <path d="M262,222 C230,270 210,330 232,410 L330,410 C332,340 350,290 340,236z" fill={BONE} stroke={BS} strokeWidth={3} />
      <Txt x={286} y={340} bold size={11}>Fémur</Txt>
      <path d="M296,216 C330,236 360,224 372,208" fill="none" stroke={C.red} strokeWidth={6} strokeLinecap="round" />
      <path d="M296,180 L326,194" stroke={C.violet} strokeWidth={4} />
      <path d="M268,140 C230,140 220,180 240,220 M366,150 C380,190 376,220 350,240" fill="none" stroke={C.red} strokeWidth={5} opacity={0.7} />
      <line x1={366} y1={160} x2={410} y2={160} {...leader} /><Txt x={414} y={164} anchor="start" size={10} bold color={RED}>capsule + lig. ilio-fémoral</Txt>
      <line x1={340} y1={236} x2={410} y2={230} {...leader} /><Txt x={414} y={234} anchor="start" size={10} bold color={RED}>lig. pubo-fémoral</Txt>
      <line x1={250} y1={230} x2={200} y2={262} {...leader} /><Txt x={20} y={276} anchor="start" size={10} bold color={RED}>lig. ischio-fémoral</Txt>
      <line x1={310} y1={190} x2={410} y2={196} {...leader} /><Txt x={414} y={200} anchor="start" size={10} bold color="#6a45b0">lig. de la tête du fémur (rond)</Txt>
      <rect x={410} y={260} width={320} height={158} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={570} y={284} bold size={12}>À retenir</Txt>
      {["3 axes : flexion/extension, abd./adduction, rotations", "plus stable mais moins mobile que l'épaule", "vascularisation de la tête : a. circonflexe médiale +", "a. du lig. rond ; fracture du col = risque de nécrose", "innervation : nerfs fémoral, obturateur, sciatique"].map((t, i) => <Txt key={i} x={570} y={306 + i * 21} size={10}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Genou ───────────────────────────────────────────────────────────────
export function KneeJointDiagram() {
  return (
    <Figure viewBox="0 0 740 470" title="Articulation du genou, vue antérieure (patella retirée)" caption="Bicondylienne : deux articulations fémoro-tibiales et une fémoro-patellaire ; les ligaments croisés (LCA, LCP) contrôlent le tiroir antérieur/postérieur, les collatéraux (LCM, LCL) la stabilité latérale, les ménisques amortissent">
      <path d="M130,10 L240,10 L246,150 C290,150 300,210 262,232 L120,232 C82,210 90,150 126,150z" fill={BONE} stroke={BS} strokeWidth={3} />
      <Txt x={188} y={60} bold size={11.5}>Fémur</Txt>
      <path d="M100,250 L270,250 L262,290 L150,290 L120,420 L96,420 L100,290z" fill={BONE} stroke={BS} strokeWidth={0} />
      <path d="M96,250 L286,250 L278,286 L236,296 L226,458 L176,458 L164,296 L104,286z" fill={BONE} stroke={BS} strokeWidth={3} />
      <Txt x={200} y={420} bold size={11.5}>Tibia</Txt>
      <path d="M96,300 L82,458 L120,458 L130,300z" fill={BONE} stroke={BS} strokeWidth={3} /><Txt x={102} y={430} bold size={10}>Fibula</Txt>
      <path d="M100,242 C110,226 160,226 176,244 C160,252 112,252 100,242z" fill={C.green} fillOpacity={0.75} stroke={DEEP.green} strokeWidth={2.5} />
      <path d="M212,244 C222,228 270,228 284,242 C270,254 226,254 212,244z" fill={C.green} fillOpacity={0.75} stroke={DEEP.green} strokeWidth={2.5} />
      <Txt x={50} y={262} anchor="start" size={9} bold color={DEEP.green}>ménisque lat.</Txt><Txt x={300} y={262} anchor="start" size={9} bold color={DEEP.green}>ménisque méd.</Txt>
      <path d="M160,224 L198,262 M230,224 L196,262" stroke={C.red} strokeWidth={6} strokeLinecap="round" opacity={0.85} />
      <path d="M116,134 L106,290" stroke={C.violet} strokeWidth={7} strokeLinecap="round" />
      <path d="M262,134 L262,282" stroke={C.blue} strokeWidth={7} strokeLinecap="round" />
      <line x1={180} y1={240} x2={370} y2={110} {...leader} /><Txt x={376} y={112} anchor="start" size={10.5} bold color={RED}>ligaments croisés (LCA / LCP)</Txt>
      <Txt x={376} y={126} anchor="start" size={9.5} color={C.grey}>croisés dans l'échancrure intercondylienne</Txt>
      <line x1={262} y1={200} x2={370} y2={160} {...leader} /><Txt x={376} y={162} anchor="start" size={10.5} bold color={DEEP.blue}>lig. collatéral tibial (médial)</Txt>
      <line x1={110} y1={200} x2={50} y2={160} {...leader} /><Txt x={4} y={150} anchor="start" size={10} bold color="#6a45b0">lig. collatéral</Txt><Txt x={4} y={162} anchor="start" size={10} bold color="#6a45b0">fibulaire (latéral)</Txt>
      <rect x={370} y={190} width={360} height={270} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={550} y={214} bold size={12}>Rôle de chaque structure</Txt>
      {[["LCA", "empêche le tiroir antérieur du tibia", C.red], ["LCP", "empêche le tiroir postérieur", C.red], ["LCM (tibial)", "stabilité en valgus, adhère au ménisque médial", C.blue], ["LCL (fibulaire)", "stabilité en varus, libre du ménisque", C.violet], ["Ménisques", "répartissent les charges, amortissent", C.green]].map(([a, b, c], i) => (
        <g key={String(a)}><rect x={380} y={226 + i * 46} width={340} height={40} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.6} /><Txt x={392} y={244 + i * 46} anchor="start" bold size={11} color={String(c) === C.violet ? "#6a45b0" : String(c) === C.blue ? DEEP.blue : String(c) === C.green ? DEEP.green : RED}>{String(a)}</Txt><Txt x={392} y={258 + i * 46} anchor="start" size={9.5}>{String(b)}</Txt></g>
      ))}
    </Figure>
  );
}

// ─── Compartiments de la jambe ───────────────────────────────────────────
export function LegCompartmentsDiagram() {
  return (
    <Figure viewBox="0 0 740 430" title="Coupe transversale de la jambe : trois compartiments" caption="Membrane interosseuse et septa : compartiment antérieur (extenseurs, nerf fibulaire profond, a. tibiale antérieure), latéral (fibulaires, nerf fibulaire superficiel) et postérieur superficiel et profond (nerf tibial, a. tibiale postérieure et fibulaire)">
      <ellipse cx={210} cy={210} rx={165} ry={150} fill={SKIN} fillOpacity={0.4} stroke="#b98c68" strokeWidth={3} />
      <Txt x={210} y={44} bold size={11} color={C.grey}>ANTÉRIEUR</Txt><Txt x={210} y={392} bold size={11} color={C.grey}>POSTÉRIEUR</Txt>
      <Txt x={34} y={214} bold size={10} color={C.grey}>latéral</Txt><Txt x={392} y={214} bold size={10} color={C.grey} anchor="end">médial</Txt>
      <path d="M262,96 L362,122 L366,208 L276,214z" fill={BONE} stroke={BS} strokeWidth={3} /><Txt x={322} y={172} bold size={11}>Tibia</Txt>
      <circle cx={108} cy={216} r={20} fill={BONE} stroke={BS} strokeWidth={3} /><Txt x={108} y={220} bold size={10}>Fibula</Txt>
      <path d="M128,206 L242,182" stroke={BS} strokeWidth={4} strokeDasharray="4 3" />
      <path d="M118,120 C160,80 240,84 250,96 L250,176 C190,176 140,180 118,150z" fill={C.blue} fillOpacity={0.55} stroke={DEEP.blue} strokeWidth={2.5} /><Txt x={180} y={124} bold size={11}>Antérieur</Txt><Txt x={180} y={139} size={9}>tibial ant., long ext.</Txt>
      <path d="M62,190 C56,246 80,262 100,250 C88,230 90,210 90,190z" fill={C.green} fillOpacity={0.6} stroke={DEEP.green} strokeWidth={2.5} /><Txt x={64} y={280} anchor="start" bold size={10.5}>Latéral</Txt><Txt x={64} y={293} anchor="start" size={9}>fibulaires</Txt>
      <path d="M128,242 C160,232 250,228 292,222 C296,254 250,280 200,280 C150,280 128,264 128,242z" fill={C.violet} fillOpacity={0.55} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={210} y={256} bold size={10.5}>Postérieur profond</Txt><Txt x={210} y={269} size={9}>tibial post., long fléch.</Txt>
      <path d="M110,268 C120,350 300,360 330,260 C310,282 260,296 210,296 C170,296 130,286 110,268z" fill={C.amber} fillOpacity={0.6} stroke={DEEP.amber} strokeWidth={2.5} /><Txt x={220} y={330} bold size={11}>Postérieur superficiel</Txt><Txt x={220} y={345} size={9.5}>triceps sural (gastrocnémien, soléaire)</Txt>
      <circle cx={210} cy={178} r={6} fill={ART} stroke="#fff" strokeWidth={1.5} /><circle cx={220} cy={186} r={5} fill={NERVE} stroke="#fff" strokeWidth={1.5} />
      <circle cx={214} cy={244} r={6} fill={ART} stroke="#fff" strokeWidth={1.5} /><circle cx={226} cy={250} r={5} fill={NERVE} stroke="#fff" strokeWidth={1.5} />
      <rect x={410} y={30} width={320} height={380} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={570} y={54} bold size={12}>Quel nerf ? quelle action ?</Txt>
      {[["Antérieur", "nerf fibulaire profond", "dorsiflexion, extension des orteils", C.blue], ["Latéral", "nerf fibulaire superficiel", "éversion du pied", C.green], ["Postérieur", "nerf tibial", "flexion plantaire, inversion, flexion des orteils", C.amber]].map(([t, n, a, c], i) => (
        <g key={String(t)}><rect x={422} y={70 + i * 90} width={296} height={80} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} /><Txt x={570} y={92 + i * 90} bold size={11.5}>{String(t)}</Txt><Txt x={570} y={110 + i * 90} size={10.5} bold color={DEEP.blue}>{String(n)}</Txt><Txt x={570} y={128 + i * 90} size={10}>{String(a)}</Txt></g>
      ))}
      <Txt x={570} y={352} size={10} color={C.grey}>● artère • ● nerf satellite de chaque compartiment</Txt>
      <Txt x={570} y={370} size={10} color={C.grey}>syndrome de loge : pression élevée dans un compartiment</Txt>
      <Txt x={570} y={386} size={10} color={C.grey}>fibrotique inextensible → ischémie musculaire</Txt>
    </Figure>
  );
}

// ─── Artères du membre inférieur ─────────────────────────────────────────
export function LowerLimbArteriesDiagram() {
  const seg = (x1: number, y1: number, x2: number, y2: number, w = 9) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={ART} strokeWidth={w} strokeLinecap="round" />;
  return (
    <Figure viewBox="0 0 740 540" title="Arbre artériel du membre inférieur" caption="Iliaque externe → fémorale (sous le ligament inguinal) → poplitée (creux poplité) → tibiale antérieure (→ dorsale du pied) et tronc tibio-fibulaire (→ tibiale postérieure + fibulaire) → arcade plantaire">
      <Txt x={200} y={20} bold size={11}>Iliaque externe</Txt>
      {seg(200, 28, 200, 70, 11)}
      <path d="M120,72 L280,72" stroke={C.grey} strokeWidth={3} strokeDasharray="6 4" /><Txt x={108} y={76} anchor="end" size={9} color={C.grey}>lig. inguinal</Txt>
      {seg(200, 70, 200, 200, 11)}<Txt x={160} y={140} anchor="end" bold size={10.5} color={RED}>Fémorale</Txt>
      <path d="M200,86 L250,110" stroke={ART} strokeWidth={5} /><Txt x={256} y={114} anchor="start" size={9.5} bold>fémorale profonde (grosse)</Txt>
      <Txt x={256} y={128} anchor="start" size={8.5} color={C.grey}>→ perforantes, circonflexes</Txt>
      <circle cx={200} cy={200} r={6} fill="#fff" stroke={ART} strokeWidth={2} /><Txt x={160} y={204} anchor="end" size={9} color={C.grey}>hiatus des adducteurs</Txt>
      {seg(200, 200, 200, 262, 10)}<Txt x={160} y={240} anchor="end" bold size={10.5} color={RED}>Poplitée</Txt>
      {seg(200, 262, 150, 330, 8)}{seg(200, 262, 240, 320, 8)}
      <Txt x={112} y={300} anchor="end" bold size={10} color={RED}>Tibiale</Txt><Txt x={112} y={313} anchor="end" bold size={10} color={RED}>antérieure</Txt>
      <Txt x={252} y={294} anchor="start" bold size={10} color={RED}>Tronc tibio-fibulaire</Txt>
      {seg(240, 320, 268, 420, 8)}{seg(240, 320, 232, 420, 7)}
      <Txt x={286} y={390} anchor="start" bold size={10} color={RED}>Tibiale postérieure</Txt><Txt x={216} y={436} anchor="end" bold size={10} color={RED}>Fibulaire</Txt>
      {seg(150, 330, 150, 450, 7)}<Txt x={140} y={450} anchor="end" bold size={10} color={RED}>Dorsale du pied</Txt><Txt x={140} y={463} anchor="end" size={9} color={C.grey}>(pédieuse)</Txt>
      {seg(268, 420, 270, 476, 7)}
      <path d="M150,450 C160,500 250,500 270,476" fill="none" stroke={ART} strokeWidth={5} /><Txt x={210} y={520} bold size={10.5} color={RED}>arcade plantaire</Txt>
      <line x1={400} y1={20} x2={400} y2={520} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={565} y={30} bold size={12.5}>Où prendre les pouls</Txt>
      {[["Fémoral", "sous le ligament inguinal (milieu de l'arcade)"], ["Poplité", "creux poplité, genou fléchi"], ["Tibial postérieur", "derrière la malléole médiale"], ["Pédieux", "dos du pied, latéral au tendon de l'extenseur de l'hallux"]].map(([t, s], i) => (
        <g key={t}><rect x={412} y={44 + i * 86} width={318} height={76} rx={8} fill={ART} fillOpacity={0.07} stroke={ART} strokeWidth={1.6} /><Txt x={571} y={68 + i * 86} bold size={11.5} color={RED}>{t}</Txt><Txt x={571} y={90 + i * 86} size={10}>{split2(s, 40)[0]}</Txt><Txt x={571} y={105 + i * 86} size={10}>{split2(s, 40)[1]}</Txt></g>
      ))}
      <Txt x={571} y={410} bold size={11}>Anastomoses</Txt>
      <Txt x={571} y={430} size={10}>réseau péri-articulaire du genou</Txt><Txt x={571} y={446} size={10}>anastomose de la cruciate (fémorale prof. ↔ glutéales)</Txt>
      <Dot path="M200,30 L200,262 L240,320 L268,420" dur={7} r={6} color="#fff" />
    </Figure>
  );
}

// ─── Nerfs du membre inférieur ───────────────────────────────────────────
export function LowerLimbNervesDiagram() {
  const n = (x: number, y: number, w: number, t: string, s: string, c: string) => (
    <g><rect x={x} y={y} width={w} height={44} rx={8} fill={c} fillOpacity={0.14} stroke={c} strokeWidth={2} /><Txt x={x + w / 2} y={y + 20} bold size={11}>{t}</Txt><Txt x={x + w / 2} y={y + 35} size={9} color={C.grey}>{s}</Txt></g>
  );
  return (
    <Figure viewBox="0 0 740 470" title="Plexus lombaire, plexus sacré et branches terminales" caption="Plexus lombaire (L1-L4) : fémoral et obturateur ; plexus sacré (L4-S4) : nerf sciatique qui se divise à la fosse poplitée en nerf tibial et nerf fibulaire commun (fibulaire superficiel et profond)">
      <rect x={10} y={10} width={356} height={200} rx={10} fill={C.blue} fillOpacity={0.05} stroke={C.blue} strokeWidth={1.8} />
      <Txt x={188} y={32} bold size={12.5} color={DEEP.blue}>Plexus lombaire (L1-L4)</Txt>
      {n(24, 48, 150, "Fémoral (L2-L4)", "extension du genou, flexion hanche", C.blue)}
      {n(196, 48, 150, "Obturateur (L2-L4)", "adducteurs de la cuisse", C.blue)}
      {n(24, 108, 150, "Saphène", "sensitif : face médiale jambe", C.blue)}
      {n(196, 108, 150, "Génito-fémoral, ilio-inguinal", "région inguinale", C.blue)}
      <Txt x={188} y={188} size={10} color={C.grey}>le fémoral passe sous le ligament inguinal</Txt>
      <rect x={10} y={224} width={720} height={236} rx={10} fill={C.amber} fillOpacity={0.05} stroke={C.amber} strokeWidth={1.8} />
      <Txt x={370} y={246} bold size={12.5} color={DEEP.amber}>Plexus sacré (L4-S4)</Txt>
      {n(24, 262, 170, "Glutéaux sup. et inf.", "petit/moyen ; grand fessier", C.amber)}
      {n(24, 318, 170, "Pudendal", "périnée, sphincters", C.amber)}
      {n(24, 374, 170, "Cutané postérieur cuisse", "sensitif", C.amber)}
      {n(240, 290, 170, "Sciatique (L4-S3)", "grand nerf, sort sous le piriforme", C.red)}
      <path d="M194,284 L240,308 M194,340 L240,320" stroke={C.amber} strokeWidth={2.5} />
      <line x1={410} y1={312} x2={470} y2={312} stroke={C.red} strokeWidth={3} markerEnd="url(#fig-arrow)" />
      <Txt x={440} y={300} size={9} color={C.grey}>fosse poplitée</Txt>
      {n(480, 270, 240, "Tibial (L4-S3)", "postérieur jambe : flexion plantaire", C.red)}
      {n(480, 330, 240, "Fibulaire commun (L4-S2)", "col de la fibula, très exposé", C.red)}
      <path d="M472,312 L480,292 M472,312 L480,352" stroke={C.red} strokeWidth={2.5} />
      {n(490, 390, 112, "F. superficiel", "éversion", C.violet)}{n(610, 390, 110, "F. profond", "dorsiflexion", C.violet)}
      <path d="M600,374 L546,390 M600,374 L664,390" stroke={C.violet} strokeWidth={2.5} />
      <Txt x={370} y={448} size={10} color={C.grey}>lésion du fibulaire commun : « steppage » (pied tombant) • lésion du tibial : impossibilité de se mettre sur la pointe des pieds</Txt>
    </Figure>
  );
}

// ─── Paroi abdominale : couches ──────────────────────────────────────────
export function AbdominalWallDiagram() {
  return (
    <Figure viewBox="0 0 740 460" title="Paroi abdominale antérieure : muscles larges et gaine des droits" caption="Trois muscles larges (oblique externe, oblique interne, transverse) dont les aponévroses forment la gaine du grand droit ; au-dessus de la ligne arquée, l'aponévrose de l'oblique interne se divise ; au-dessous, tout passe en avant du grand droit">
      <Txt x={190} y={22} bold size={12} color={C.grey}>Coupe transversale au-dessus de la ligne arquée</Txt>
      <ellipse cx={190} cy={150} rx={170} ry={100} fill={SKIN} fillOpacity={0.3} stroke="#b98c68" strokeWidth={3} />
      <path d="M190,50 L190,250" stroke={C.grey} strokeWidth={2} strokeDasharray="4 4" /><Txt x={196} y={40} anchor="start" size={9} color={C.grey}>ligne blanche</Txt>
      {[[-1, "Grand droit"], [1, "Grand droit"]].map(([s], i) => <g key={i}><ellipse cx={190 + Number(s) * 44} cy={110} rx={30} ry={28} fill={C.red} fillOpacity={0.55} stroke={DEEP.red} strokeWidth={2.5} /></g>)}
      <Txt x={146} y={114} bold size={9.5}>droit</Txt><Txt x={234} y={114} bold size={9.5}>droit</Txt>
      <path d="M30,140 C30,100 80,60 140,54" fill="none" stroke={C.blue} strokeWidth={9} strokeLinecap="round" opacity={0.8} />
      <path d="M350,140 C350,100 300,60 240,54" fill="none" stroke={C.blue} strokeWidth={9} strokeLinecap="round" opacity={0.8} />
      <path d="M40,150 C46,110 90,72 140,64" fill="none" stroke={C.green} strokeWidth={8} strokeLinecap="round" opacity={0.8} />
      <path d="M340,150 C334,110 290,72 240,64" fill="none" stroke={C.green} strokeWidth={8} strokeLinecap="round" opacity={0.8} />
      <path d="M50,160 C56,120 96,84 140,76" fill="none" stroke={C.violet} strokeWidth={8} strokeLinecap="round" opacity={0.8} />
      <path d="M330,160 C324,120 284,84 240,76" fill="none" stroke={C.violet} strokeWidth={8} strokeLinecap="round" opacity={0.8} />
      <path d="M140,138 L140,86 L240,86 L240,138" fill="none" stroke={C.grey} strokeWidth={0} />
      <line x1={30} y1={130} x2={12} y2={180} {...leader} /><Txt x={4} y={194} anchor="start" size={10} bold color={DEEP.blue}>oblique externe</Txt>
      <line x1={56} y1={148} x2={20} y2={214} {...leader} /><Txt x={4} y={228} anchor="start" size={10} bold color={DEEP.green}>oblique interne</Txt>
      <line x1={66} y1={166} x2={80} y2={250} {...leader} /><Txt x={60} y={264} anchor="start" size={10} bold color={DEEP.violet}>transverse</Txt>
      <Txt x={190} y={278} size={10} color={C.grey}>péritoine • fascia transversalis • graisse extra-péritonéale (profond)</Txt>
      <path d="M380,20 L380,290" stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={555} y={22} bold size={12} color={C.grey}>Gaine des droits</Txt>
      <rect x={410} y={34} width={140} height={110} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.3} /><Txt x={480} y={54} bold size={10.5}>Au-dessus de la ligne arquée</Txt>
      <rect x={440} y={72} width={80} height={24} rx={6} fill={C.red} fillOpacity={0.55} stroke={DEEP.red} strokeWidth={2} />
      <path d="M436,66 L524,66 M436,100 L524,100" stroke={C.blue} strokeWidth={4} /><path d="M436,70 L436,98 M524,70 L524,98" stroke={C.green} strokeWidth={3} />
      <Txt x={480} y={122} size={9}>OE en avant, OI se divise,</Txt><Txt x={480} y={135} size={9}>transverse en arrière</Txt>
      <rect x={570} y={34} width={150} height={110} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.3} /><Txt x={645} y={54} bold size={10.5}>Sous la ligne arquée</Txt>
      <rect x={600} y={72} width={80} height={24} rx={6} fill={C.red} fillOpacity={0.55} stroke={DEEP.red} strokeWidth={2} />
      <path d="M596,66 L684,66" stroke={C.blue} strokeWidth={4} /><path d="M596,70 L684,70" stroke={C.green} strokeWidth={4} /><path d="M596,74 L684,74" stroke={C.violet} strokeWidth={4} opacity={0} />
      <Txt x={645} y={122} size={9}>les trois aponévroses passent</Txt><Txt x={645} y={135} size={9}>en avant du grand droit</Txt>
      <rect x={20} y={300} width={700} height={150} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={322} bold size={12}>Muscles larges : orientation des fibres et innervation</Txt>
      {[["Oblique externe", "vers le bas et médial (« mains dans les poches »)", C.blue], ["Oblique interne", "vers le haut et médial (perpendiculaire à l'externe)", C.green], ["Transverse", "horizontales (ceinture) ; le plus profond", C.violet]].map(([t, s, c], i) => (
        <g key={String(t)}><rect x={30 + i * 232} y={334} width={222} height={64} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} /><Txt x={141 + i * 232} y={356} bold size={11}>{String(t)}</Txt><Txt x={141 + i * 232} y={374} size={9}>{split2(String(s), 34)[0]}</Txt><Txt x={141 + i * 232} y={387} size={9}>{split2(String(s), 34)[1]}</Txt></g>
      ))}
      <Txt x={370} y={422} size={10}>nerfs : intercostaux T7-T11, subcostal T12, ilio-hypogastrique et ilio-inguinal L1</Txt>
      <Txt x={370} y={438} size={10} color={C.grey}>fonctions : flexion et rotation du tronc, compression abdominale (toux, défécation), maintien des viscères</Txt>
    </Figure>
  );
}
