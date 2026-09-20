import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";
import { Cards, Label, bone, tip, BS, BONE } from "./AnatLowerLimbSheets";

// Anatomie S1 — membre supérieur (clavicule, scapula, avant-bras) et loges de la jambe.

type Row = { name: string; color: string; sub: string };

// Liste de muscles : pastille de couleur (celle du dessin), nom, puis nerf / action.
function Rows({ x, y, w, rows, h = 33, title }: { x: number; y: number; w: number; rows: Row[]; h?: number; title?: string }) {
  return (
    <g>
      {title && <Txt x={x} y={y - 8} anchor="start" bold size={11.5}>{title}</Txt>}
      {rows.map((row, i) => (
        <g key={row.name}>
          <rect x={x} y={y + i * h} width={w} height={h - 4} rx={7} fill={row.color} fillOpacity={0.13} stroke={row.color} strokeWidth={1.5} />
          <rect x={x} y={y + i * h} width={7} height={h - 4} rx={3.5} fill={row.color} />
          <Txt x={x + 15} y={y + i * h + 13} anchor="start" bold size={10.5}>{row.name}</Txt>
          <Txt x={x + 15} y={y + i * h + 25} anchor="start" size={9} color={C.grey}>{row.sub}</Txt>
        </g>
      ))}
    </g>
  );
}

// ─── Clavicule et scapula ────────────────────────────────────────────────
export function ClavicleScapulaDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Clavicule (face inférieure) et scapula (face postérieure)" caption="La clavicule est le seul lien osseux entre le membre supérieur et le squelette axial ; la scapula est un os plat triangulaire : cavité glénoïde, épine, acromion et processus coracoïde">
      {/* clavicule */}
      <Txt x={190} y={16} bold size={12} color={DEEP.amber}>Clavicule droite (face inférieure)</Txt>
      <path d="M26,70 C30,40 70,34 120,54 C170,74 230,92 300,60 C324,50 344,56 352,70 C344,86 322,84 300,92 C230,118 170,102 120,88 C72,72 34,96 26,70 Z" {...bone} />
      <circle cx={104} cy={82} r={6} fill={C.red} /><line x1={104} y1={88} x2={104} y2={128} {...tip} /><Label x={104} y={140} anchor="middle" color={DEEP.red}>Tubercule conoïde</Label>
      <path d="M232,96 L286,82" stroke={C.violet} strokeWidth={5} strokeLinecap="round" /><line x1={260} y1={92} x2={260} y2={128} {...tip} /><Label x={260} y={140} anchor="middle" color={DEEP.violet}>Ligne trapézoïde</Label>
      <Label x={26} y={30} anchor="start" color={DEEP.blue}>Extrémité sternale</Label>
      <Txt x={26} y={43} anchor="start" size={9} color={C.grey}>médiale, convexe en avant</Txt>
      <Label x={352} y={30} anchor="end" color={DEEP.green}>Extrémité acromiale</Label>
      <Txt x={352} y={43} anchor="end" size={9} color={C.grey}>latérale, concave en avant</Txt>
      {/* scapula */}
      <g transform="translate(40 0)">
      <Txt x={190} y={168} bold size={12} color={DEEP.amber}>Scapula droite (face postérieure)</Txt>
      <path d="M96,190 L236,200 L262,218 L292,290 L300,340 L266,372 L212,420 L140,462 L104,330 Z" {...bone} />
      <path d="M100,262 L250,232" stroke={BS} strokeWidth={9} strokeLinecap="round" />
      <path d="M244,224 C280,208 316,206 322,222 C318,238 286,242 256,240 Z" {...bone} />
      <ellipse cx={296} cy={318} rx={15} ry={26} fill={C.blue} fillOpacity={0.45} stroke={C.blue} strokeWidth={2} />
      <circle cx={280} cy={252} r={9} fill={C.amber} stroke={BS} strokeWidth={1.5} />
      <circle cx={104} cy={192} r={4} fill={C.red} /><circle cx={140} cy={458} r={4} fill={C.red} />
      <line x1={100} y1={222} x2={66} y2={222} {...tip} /><Label x={-18} y={218} anchor="start" color={DEEP.amber}>Fosse</Label><Label x={-18} y={230} anchor="start" color={DEEP.amber}>supra-épineuse</Label>
      <line x1={150} y1={330} x2={66} y2={342} {...tip} /><Label x={-18} y={334} anchor="start" color={DEEP.amber}>Fosse</Label><Label x={-18} y={346} anchor="start" color={DEEP.amber}>infra-épineuse</Label>
      <Label x={-18} y={174} anchor="start" color={DEEP.red}>Angle</Label><Label x={-18} y={186} anchor="start" color={DEEP.red}>supérieur</Label>
      <line x1={140} y1={456} x2={66} y2={448} {...tip} /><Label x={-18} y={446} anchor="start" color={DEEP.red}>Angle</Label><Label x={-18} y={458} anchor="start" color={DEEP.red}>inférieur</Label>
      <line x1={112} y1={400} x2={66} y2={398} {...tip} /><Label x={-18} y={396} anchor="start">Bord</Label><Label x={-18} y={408} anchor="start">médial</Label>
      <line x1={310} y1={230} x2={352} y2={200} {...tip} /><Label x={356} y={200} color={DEEP.amber}>Acromion</Label>
      <line x1={178} y1={246} x2={230} y2={286} {...tip} /><Label x={234} y={296} color={BS}>Épine</Label>
      <line x1={288} y1={252} x2={352} y2={256} {...tip} /><Label x={356} y={260} color={DEEP.amber}>Processus coracoïde</Label>
      <line x1={310} y1={320} x2={352} y2={320} {...tip} /><Label x={356} y={324} color={DEEP.blue}>Cavité glénoïde</Label>
      <line x1={250} y1={396} x2={352} y2={396} {...tip} /><Label x={356} y={400}>Bord latéral (axillaire)</Label>
      </g>
      <Cards x={530} y={14} w={200} lineH={13.5} cards={[
        { title: "Clavicule", color: C.amber, lines: ["Os long, en S", "Sternale ↔ manubrium", "Acromiale ↔ acromion", "Lig. coraco-claviculaires :", "conoïde + trapézoïde"] },
        { title: "Scapula", color: C.blue, lines: ["Os plat triangulaire", "Glénoïde ↔ tête humérale", "Acromion : épine → épaule", "Coracoïde : biceps (chef", "court), coraco-brachial,", "petit pectoral"] },
        { title: "Repères de palpation", color: C.red, lines: ["Bord médial, angle inférieur,", "épine, acromion"] },
      ]} />
    </Figure>
  );
}

// ─── Avant-bras : compartiment antérieur ─────────────────────────────────
export function ForearmAnteriorDiagram() {
  const sup: Row[] = [
    { name: "Rond pronateur", color: C.blue, sub: "épicondyle médial → radius · médian · pronation" },
    { name: "Fléchisseur radial du carpe", color: C.green, sub: "→ 2e-3e métacarpiens · médian · flexion, abduction" },
    { name: "Long palmaire", color: C.violet, sub: "→ aponévrose palmaire · médian · flexion du poignet" },
    { name: "Fléchisseur ulnaire du carpe", color: C.amber, sub: "→ pisiforme, hamulus, 5e MC · ulnaire · adduction" },
    { name: "Fléchisseur superficiel des doigts", color: C.red, sub: "→ phalanges moyennes · médian · flexion IPP" },
  ];
  const deep: Row[] = [
    { name: "Long fléchisseur du pouce", color: C.pink, sub: "radius → pouce (P. distale) · interosseux antérieur" },
    { name: "Fléchisseur profond des doigts", color: C.grey, sub: "ulna → P. distales · ulnaire + interosseux ant." },
    { name: "Carré pronateur", color: DEEP.blue, sub: "ulna → radius distal · interosseux ant. · pronation" },
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Avant-bras, compartiment antérieur (fléchisseurs et pronateurs)" caption="Cinq muscles superficiels (naissance commune à l'épicondyle médial) et trois profonds ; nerf médian pour la plupart, nerf ulnaire pour le fléchisseur ulnaire du carpe et la moitié médiale du fléchisseur profond des doigts">
      <Txt x={96} y={14} anchor="start" bold size={11.5}>Avant-bras droit, face antérieure</Txt>
      {/* os */}
      <path d="M96,26 L226,26 L226,60 L96,60 Z" {...bone} /><Txt x={150} y={48} size={9.5} bold color={BS}>humérus</Txt>
      <circle cx={244} cy={52} r={13} {...bone} /><Label x={262} y={30} anchor="start" color={DEEP.amber}>Épicondyle médial</Label>
      <path d="M112,72 C120,70 150,70 156,76 L164,330 C170,380 176,392 182,392 L118,392 C126,380 128,340 124,300 Z" {...bone} />
      <path d="M204,74 L232,74 L226,392 L206,392 Z" {...bone} />
      <Txt x={130} y={200} size={9.5} bold color={BS}>radius</Txt><Txt x={216} y={220} size={9.5} bold color={BS}>ulna</Txt>
      <path d="M182,392 L226,392 L226,414 L112,414 L118,392 Z" fill={BONE} stroke={BS} strokeWidth={2} />
      {[0, 1, 2, 3, 4].map((i) => (<rect key={i} x={108 + i * 25} y={414} width={16} height={34} rx={7} {...bone} />))}
      {/* superficiels */}
      <path d="M240,60 L128,196" stroke={C.blue} strokeWidth={10} strokeLinecap="round" opacity={0.85} />
      <path d="M238,64 L186,220 L150,400" fill="none" stroke={C.green} strokeWidth={6} strokeLinecap="round" />
      <path d="M240,66 L200,240 L196,410" fill="none" stroke={C.violet} strokeWidth={4} strokeLinecap="round" />
      <path d="M244,68 L232,220 L220,394" fill="none" stroke={C.amber} strokeWidth={7} strokeLinecap="round" />
      <path d="M236,70 C220,150 190,240 176,380 M176,380 L132,440 M176,380 L158,440 M176,380 L184,440 M176,380 L210,440" fill="none" stroke={C.red} strokeWidth={5} strokeLinecap="round" />
      {/* profonds */}
      <path d="M144,140 L150,330 L118,446" fill="none" stroke={C.pink} strokeWidth={4} strokeDasharray="7 4" />
      <path d="M212,130 L212,340 L226,394 M226,394 L164,446 M226,394 L190,446" fill="none" stroke={C.grey} strokeWidth={4} strokeDasharray="7 4" />
      <path d="M124,352 L226,340 L226,364 L124,376 Z" fill={DEEP.blue} fillOpacity={0.5} stroke={DEEP.blue} strokeWidth={1.5} />
      <Txt x={150} y={466} size={9} color={C.grey}>trait plein : superficiels · pointillés : profonds · pouce à gauche</Txt>
      <Rows x={350} y={50} w={380} rows={sup} title="Groupe superficiel (5)" h={36} />
      <Rows x={350} y={302} w={380} rows={deep} title="Groupe profond (3)" h={36} />
    </Figure>
  );
}

// ─── Avant-bras : compartiment postérieur ────────────────────────────────
export function ForearmPosteriorDiagram() {
  const sup: Row[] = [
    { name: "Brachioradial", color: C.blue, sub: "crête supra-épicondylaire → radius distal · radial · flexion du coude" },
    { name: "Long extenseur radial du carpe", color: C.green, sub: "→ base du 2e MC · extension + abduction du poignet" },
    { name: "Court extenseur radial du carpe", color: DEEP.green, sub: "épicondyle latéral → base du 3e MC · extension + abduction" },
    { name: "Extenseur des doigts", color: C.red, sub: "épicondyle latéral → 4 doigts médiaux · extension" },
    { name: "Extenseur du petit doigt", color: C.pink, sub: "→ petit doigt · extension" },
    { name: "Extenseur ulnaire du carpe", color: C.amber, sub: "→ base du 5e MC · extension + adduction du poignet" },
    { name: "Anconé", color: C.grey, sub: "épicondyle latéral → olécrane · extenseur faible du coude" },
  ];
  const deep: Row[] = [
    { name: "Supinateur", color: C.violet, sub: "→ radius proximal · supination" },
    { name: "Long abducteur du pouce", color: DEEP.blue, sub: "ulna + radius → base du 1er MC · abduction" },
    { name: "Court extenseur du pouce", color: DEEP.amber, sub: "radius → phalange proximale du pouce" },
    { name: "Long extenseur du pouce", color: DEEP.pink, sub: "ulna → phalange distale du pouce" },
    { name: "Extenseur de l'index", color: DEEP.violet, sub: "ulna → index · extension" },
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Avant-bras, compartiment postérieur (extenseurs et supinateurs)" caption="Tous innervés par le nerf radial : les muscles superficiels par le radial, le groupe profond par le nerf interosseux postérieur (branche profonde du radial) ; aucun muscle profond ne franchit le coude">
      <Txt x={120} y={14} anchor="start" bold size={11.5}>Avant-bras droit, face postérieure</Txt>
      <path d="M100,26 L232,26 L232,60 L100,60 Z" {...bone} /><Txt x={150} y={48} size={9.5} bold color={BS}>humérus</Txt>
      <circle cx={246} cy={52} r={13} {...bone} /><Label x={262} y={30} anchor="start" color={DEEP.amber}>Épicondyle latéral</Label>
      <path d="M108,66 L142,66 L138,392 L116,392 Z" {...bone} /><Txt x={126} y={220} size={9.5} bold color={BS}>ulna</Txt>
      <path d="M170,72 C182,68 216,68 228,76 L222,300 C220,350 226,384 234,392 L168,392 C164,350 166,300 168,260 Z" {...bone} /><Txt x={200} y={180} size={9.5} bold color={BS}>radius</Txt>
      <path d="M116,392 L234,392 L234,414 L112,414 Z" fill={BONE} stroke={BS} strokeWidth={2} />
      {[0, 1, 2, 3].map((i) => (<rect key={i} x={110 + i * 26} y={414} width={17} height={32} rx={8} {...bone} />))}
      <rect x={224} y={410} width={18} height={30} rx={8} transform="rotate(-25 233 425)" {...bone} />
      <Txt x={250} y={452} anchor="start" size={9} color={C.grey}>pouce</Txt>
      {/* superficiels (trait plein) */}
      <path d="M238,66 L232,384" fill="none" stroke={C.blue} strokeWidth={7} strokeLinecap="round" opacity={0.85} />
      <path d="M244,66 L206,410" fill="none" stroke={C.green} strokeWidth={4} strokeLinecap="round" />
      <path d="M244,68 L184,410" fill="none" stroke={DEEP.green} strokeWidth={4} strokeLinecap="round" />
      <path d="M240,70 L170,370 M170,370 L118,440 M170,370 L144,440 M170,370 L170,440 M170,370 L196,440" fill="none" stroke={C.red} strokeWidth={5} strokeLinecap="round" />
      <path d="M240,72 C190,150 130,300 118,440" fill="none" stroke={C.pink} strokeWidth={3} strokeLinecap="round" />
      <path d="M244,72 C200,140 140,260 128,408" fill="none" stroke={C.amber} strokeWidth={5} strokeLinecap="round" />
      <path d="M240,58 L118,64 L124,120 Z" fill={C.grey} fillOpacity={0.5} stroke={C.grey} strokeWidth={1.5} />
      {/* profonds (pointillés) */}
      <path d="M176,80 C196,80 220,96 228,140" fill="none" stroke={C.violet} strokeWidth={8} strokeLinecap="round" opacity={0.8} />
      <path d="M140,180 L200,300 L236,416" fill="none" stroke={DEEP.blue} strokeWidth={3.5} strokeDasharray="7 4" />
      <path d="M200,250 L224,340 L240,430" fill="none" stroke={DEEP.amber} strokeWidth={3.5} strokeDasharray="7 4" />
      <path d="M136,250 L180,340 L228,432" fill="none" stroke={DEEP.pink} strokeWidth={3.5} strokeDasharray="7 4" />
      <path d="M134,300 L160,370 L196,440" fill="none" stroke={DEEP.violet} strokeWidth={3.5} strokeDasharray="7 4" />
      <Txt x={120} y={468} anchor="start" size={9} color={C.grey}>trait plein : superficiels · pointillés : profonds · schéma simplifié</Txt>
      <Rows x={290} y={50} w={440} rows={sup} title="Groupe superficiel (7)" h={33} />
      <Rows x={290} y={302} w={440} rows={deep} title="Groupe profond (5)" h={33} />
    </Figure>
  );
}

// ─── Jambe : compartiment latéral ────────────────────────────────────────
export function LegLateralDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Jambe, compartiment latéral : les fibulaires" caption="Long et court fibulaires : nerf fibulaire superficiel ; ils contournent la malléole latérale et évertent le pied (le long fibulaire est le principal éverseur) ; leur tendon passe sous la plante jusqu'à la base du 1er métatarsien">
      <path d="M170,14 L214,14 L206,300 L176,300 Z" {...bone} /><Txt x={192} y={160} size={10} bold color={BS}>Fibula</Txt>
      <path d="M170,300 C160,320 158,340 176,350 L208,350 C214,330 214,310 206,300 Z" {...bone} />
      <path d="M120,356 L260,356 C268,392 256,420 236,430 L128,430 C112,410 110,380 120,356 Z" {...bone} />
      <Label x={130} y={330} anchor="end" color={BS}>Malléole latérale</Label>
      {/* corps musculaires, côté latéral de la fibula */}
      <path d="M212,30 C262,70 262,210 214,300 L206,300 Z" fill={C.blue} fillOpacity={0.45} stroke={C.blue} strokeWidth={2} />
      <path d="M212,170 C246,210 244,290 214,336 L206,336 Z" fill={C.green} fillOpacity={0.5} stroke={C.green} strokeWidth={2} />
      {/* tendons : derrière la malléole latérale */}
      <path d="M208,300 L204,346 C206,358 224,360 240,358 L262,372" fill="none" stroke={C.blue} strokeWidth={4} strokeLinecap="round" />
      <path d="M208,336 L206,350 C210,358 226,362 244,362 L264,374" fill="none" stroke={C.green} strokeWidth={4} strokeLinecap="round" />
      <path d="M204,346 C190,384 170,404 146,414" fill="none" stroke={C.blue} strokeWidth={3} strokeDasharray="6 4" />
      <Txt x={150} y={432} size={9} color={C.grey}>1er métatarsien (sous la plante)</Txt>
      <line x1={244} y1={90} x2={290} y2={90} {...tip} /><Label x={296} y={94} color={DEEP.blue}>Long fibulaire</Label>
      <line x1={238} y1={230} x2={290} y2={230} {...tip} /><Label x={296} y={234} color={DEEP.green}>Court fibulaire</Label>
      <line x1={258} y1={370} x2={290} y2={370} {...tip} /><Label x={296} y={374} color={DEEP.green}>5e métatarsien (base)</Label>
      <Cards x={450} y={14} w={280} cards={[
        { title: "Nerf fibulaire superficiel", color: C.red, lines: ["Innerve les deux fibulaires"] },
        { title: "Long fibulaire", color: C.blue, lines: ["Fibula (moitié proximale) → base du 1er métatarsien", "et cunéiforme médial (sous la plante)", "Principal éverseur du pied"] },
        { title: "Court fibulaire", color: C.green, lines: ["Fibula (moitié distale) → base du 5e métatarsien", "Éversion du pied"] },
      ]} />
    </Figure>
  );
}

// ─── Jambe : compartiment postérieur ─────────────────────────────────────
export function LegPosteriorDiagram() {
  const sup: Row[] = [
    { name: "Gastrocnémien (2 chefs fémoraux)", color: C.red, sub: "condyles fémoraux → calcanéus · triceps sural · flexion plantaire" },
    { name: "Soléaire", color: C.amber, sub: "tibia + fibula → tendon calcanéen · flexion plantaire" },
    { name: "Plantaire", color: C.grey, sub: "faible fléchisseur plantaire accessoire" },
  ];
  const deep: Row[] = [
    { name: "Poplité", color: C.violet, sub: "déverrouille le genou (rotation latérale du fémur)" },
    { name: "Long fléchisseur des orteils", color: C.green, sub: "tibia → orteils 2 à 5" },
    { name: "Long fléchisseur de l'hallux", color: C.pink, sub: "fibula → hallux" },
    { name: "Tibial postérieur", color: C.blue, sub: "membrane interosseuse → tarse · inverseur principal" },
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Jambe, compartiment postérieur (flexion plantaire)" caption="Tous innervés par le nerf tibial : groupe superficiel (gastrocnémien et soléaire = triceps sural, tendon calcanéen) et groupe profond (poplité, longs fléchisseurs, tibial postérieur derrière la malléole médiale)">
      <Txt x={150} y={16} bold size={11.5}>Jambe droite, face postérieure</Txt>
      <path d="M96,24 L200,24 L200,52 L96,52 Z" {...bone} /><Txt x={148} y={43} size={9.5} bold color={BS}>fémur</Txt>
      <path d="M118,62 L146,62 L142,382 L122,382 Z" {...bone} /><path d="M160,70 L178,70 L174,382 L164,382 Z" {...bone} />
      <path d="M96,382 L200,382 L206,420 L184,436 L106,436 L92,414 Z" {...bone} /><Label x={78} y={432} anchor="end" color={BS}>Calcanéus</Label>
      {/* soléaire (derrière) */}
      <path d="M108,128 C86,220 90,300 126,346 L166,346 C204,300 208,220 184,128 Z" fill={C.amber} fillOpacity={0.55} stroke={C.amber} strokeWidth={2} />
      {/* gastrocnémien : chefs médial et latéral */}
      <path d="M92,58 C72,110 78,200 116,270 L145,270 L145,60 Z" fill={C.red} fillOpacity={0.6} stroke={C.red} strokeWidth={2} />
      <path d="M200,58 C220,110 214,200 176,270 L148,270 L148,60 Z" fill={C.red} fillOpacity={0.6} stroke={C.red} strokeWidth={2} />
      {/* tendon calcanéen */}
      <path d="M146,270 L146,384" stroke={C.red} strokeWidth={11} strokeLinecap="round" />
      {/* groupe profond (pointillés) */}
      <path d="M116,64 L172,64 L150,118 Z" fill={C.violet} fillOpacity={0.7} stroke={C.violet} strokeWidth={1.5} />
      <path d="M126,140 L124,384" fill="none" stroke={C.green} strokeWidth={3} strokeDasharray="6 4" />
      <path d="M170,150 L134,388" fill="none" stroke={C.pink} strokeWidth={3} strokeDasharray="6 4" />
      <path d="M144,150 L116,390" fill="none" stroke={C.blue} strokeWidth={3} strokeDasharray="6 4" />
      <line x1={146} y1={380} x2={270} y2={400} {...tip} /><Label x={276} y={404} color={DEEP.red}>Tendon calcanéen (d'Achille)</Label>
      <Txt x={276} y={420} anchor="start" size={9} color={C.grey}>pointillés : groupe profond · violet : poplité</Txt>
      <Txt x={150} y={466} size={9} color={C.grey}>schéma simplifié : le soléaire est recouvert par le gastrocnémien</Txt>
      <Rows x={280} y={34} w={450} rows={sup} title="Groupe superficiel" h={36} />
      <Rows x={280} y={200} w={450} rows={deep} title="Groupe profond" h={36} />
    </Figure>
  );
}
