import { Figure, C, Txt, Dot } from "./Figure";
import { RED, OK, DEEP, leader, arrow, box } from "./FigKit";

// Anatomie S1 — membre supérieur : schémas de synthèse fidèles au texte des cours.

const SKIN = "#f0c9a8";
const BONE = "#eadfc8";
const BONE_STROKE = "#a78c5b";
const NERVE = "#e0a030";
const ART = "#d9414f";
const VEIN = "#4f7be8";

const dotLabel = (x: number, y: number, r: number, c: string, t: string, ts = 9) => (
  <g><circle cx={x} cy={y} r={r} fill={c} stroke="#fff" strokeWidth={1.5} /><Txt x={x} y={y + ts / 3} bold size={ts} color="#fff">{t}</Txt></g>
);

// ─── 1. Compartiments du bras ────────────────────────────────────────────
export function ArmCompartmentsDiagram() {
  return (
    <Figure viewBox="0 0 740 424" title="Coupe transversale du bras : compartiments antérieur et postérieur" caption="Le bras est divisé par les septa intermusculaires : compartiment antérieur (fléchisseurs, nerf musculo-cutané) et compartiment postérieur (triceps, nerf radial) ; le paquet vasculo-nerveux principal longe le bord médial">
      <ellipse cx={210} cy={210} rx={150} ry={140} fill={SKIN} fillOpacity={0.45} stroke="#b98c68" strokeWidth={3} />
      <Txt x={210} y={52} bold size={11} color={C.grey}>ANTÉRIEUR</Txt><Txt x={210} y={378} bold size={11} color={C.grey}>POSTÉRIEUR</Txt>
      <Txt x={40} y={214} bold size={10} color={C.grey}>latéral</Txt><Txt x={380} y={214} bold size={10} color={C.grey} anchor="end">médial</Txt>
      {/* compartiment antérieur */}
      <ellipse cx={200} cy={132} rx={84} ry={44} fill={C.blue} fillOpacity={0.55} stroke={DEEP.blue} strokeWidth={2.5} /><Txt x={200} y={130} bold size={12}>Biceps brachial</Txt><Txt x={200} y={146} size={9.5}>chefs long et court</Txt>
      <ellipse cx={200} cy={186} rx={66} ry={24} fill={C.green} fillOpacity={0.5} stroke={DEEP.green} strokeWidth={2.5} /><Txt x={200} y={190} bold size={11}>Brachial</Txt>
      <ellipse cx={288} cy={166} rx={26} ry={16} fill={C.violet} fillOpacity={0.55} stroke={DEEP.violet} strokeWidth={2.5} /><Txt x={288} y={170} bold size={9}>Coraco-B.</Txt>
      {/* humérus */}
      <circle cx={196} cy={236} r={30} fill={BONE} stroke={BONE_STROKE} strokeWidth={3} /><circle cx={196} cy={236} r={13} fill="#f7f1e2" stroke={BONE_STROKE} /><Txt x={196} y={240} bold size={10}>Humérus</Txt>
      {/* compartiment postérieur : triceps */}
      <path d="M96,246 C96,340 200,352 300,320 C320,276 290,266 250,262 C232,262 232,290 200,290 C170,290 162,262 140,258 C112,254 96,246 96,246z" fill={C.amber} fillOpacity={0.55} stroke={DEEP.amber} strokeWidth={2.5} />
      <Txt x={200} y={318} bold size={12}>Triceps brachial</Txt><Txt x={200} y={338} size={9.5}>3 chefs : long, latéral, médial</Txt>
      {/* septa */}
      <path d="M62,214 L130,214 M338,204 L300,204" stroke={C.grey} strokeWidth={3} strokeDasharray="5 3" />
      <Txt x={76} y={232} size={9} color={C.grey}>septum lat.</Txt><Txt x={330} y={196} size={9} color={C.grey} anchor="end">septum méd.</Txt>
      {/* paquet vasculo-nerveux */}
      <circle cx={298} cy={210} r={9} fill={ART} /><circle cx={318} cy={214} r={7} fill={VEIN} /><circle cx={280} cy={222} r={6} fill={NERVE} /><circle cx={310} cy={196} r={6} fill={NERVE} />
      {/* nerf radial */}
      <circle cx={150} cy={274} r={7} fill={NERVE} stroke="#fff" strokeWidth={1.5} /><circle cx={140} cy={286} r={5} fill={ART} />
      <line x1={318} y1={196} x2={396} y2={78} {...leader} /><Txt x={402} y={74} anchor="start" size={10.5} bold color={DEEP.amber}>nerf ulnaire</Txt>
      <line x1={298} y1={210} x2={396} y2={118} {...leader} /><Txt x={402} y={114} anchor="start" size={10.5} bold color={ART}>artère et veines brachiales</Txt>
      <line x1={280} y1={222} x2={396} y2={158} {...leader} /><Txt x={402} y={154} anchor="start" size={10.5} bold color={DEEP.amber}>nerf médian</Txt>
      <line x1={150} y1={274} x2={60} y2={392} {...leader} /><Txt x={20} y={404} anchor="start" size={10.5} bold color={DEEP.amber}>nerf radial + a. brachiale profonde</Txt>
      <Txt x={20} y={416} anchor="start" size={9.5} color={C.grey}>dans le sillon radial de l'humérus</Txt>
      <rect x={410} y={190} width={320} height={190} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={570} y={214} bold size={12}>À retenir</Txt>
      {[["Compartiment antérieur", "biceps, coracobrachial, brachial", "nerf musculo-cutané", C.blue], ["Compartiment postérieur", "triceps brachial (3 chefs)", "nerf radial", C.amber]].map(([t, m, n, c], i) => (
        <g key={String(t)}><rect x={422} y={226 + i * 70} width={296} height={60} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} /><Txt x={570} y={246 + i * 70} bold size={11.5} color={String(c)}>{String(t)}</Txt><Txt x={570} y={262 + i * 70} size={10.5}>{String(m)}</Txt><Txt x={570} y={277 + i * 70} size={10.5} bold>{String(n)}</Txt></g>
      ))}
      <Dot path="M200,130 L200,186" dur={3} r={0} />
    </Figure>
  );
}

// ─── 2. Compartiments de l'avant-bras ────────────────────────────────────
export function ForearmCompartmentsDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Coupe transversale de l'avant-bras : quatre groupes musculaires" caption="La membrane interosseuse et les septa délimitent le compartiment antérieur (superficiel et profond) et le compartiment postérieur (superficiel et profond) ; chaque groupe a son innervation">
      <ellipse cx={220} cy={220} rx={160} ry={150} fill={SKIN} fillOpacity={0.4} stroke="#b98c68" strokeWidth={3} />
      <Txt x={220} y={50} bold size={11} color={C.grey}>ANTÉRIEUR (palmaire)</Txt><Txt x={220} y={408} bold size={11} color={C.grey}>POSTÉRIEUR (dorsal)</Txt>
      <Txt x={50} y={224} bold size={10} color={C.grey}>radial</Txt><Txt x={390} y={224} bold size={10} color={C.grey} anchor="end">ulnaire</Txt>
      {/* os */}
      <ellipse cx={150} cy={226} rx={22} ry={18} fill={BONE} stroke={BONE_STROKE} strokeWidth={3} /><Txt x={150} y={230} bold size={10}>Radius</Txt>
      <ellipse cx={290} cy={230} rx={22} ry={18} fill={BONE} stroke={BONE_STROKE} strokeWidth={3} /><Txt x={290} y={234} bold size={10}>Ulna</Txt>
      <path d="M170,226 L268,230" stroke={BONE_STROKE} strokeWidth={4} strokeDasharray="4 3" /><Txt x={220} y={246} size={9} color={C.grey}>membrane interosseuse</Txt>
      {/* antérieur superficiel */}
      <path d="M90,150 C150,90 290,90 350,160 C310,170 270,166 220,180 C170,170 120,176 90,150z" fill={C.blue} fillOpacity={0.55} stroke={DEEP.blue} strokeWidth={2.5} />
      <Txt x={220} y={128} bold size={11.5}>Antérieur superficiel</Txt>
      {/* antérieur profond */}
      <path d="M130,182 C170,176 270,176 316,186 C316,206 296,208 290,208 L150,204 C140,204 130,196 130,182z" fill={C.green} fillOpacity={0.55} stroke={DEEP.green} strokeWidth={2.5} />
      <Txt x={220} y={196} bold size={10.5}>Antérieur profond</Txt>
      {/* postérieur profond */}
      <path d="M126,250 C170,262 270,262 318,252 C316,282 290,290 220,290 C160,290 128,280 126,250z" fill={C.violet} fillOpacity={0.55} stroke={DEEP.violet} strokeWidth={2.5} />
      <Txt x={220} y={272} bold size={10.5}>Postérieur profond</Txt>
      {/* postérieur superficiel */}
      <path d="M100,270 C120,330 300,360 350,290 C320,300 260,304 220,304 C170,304 128,290 100,270z" fill={C.amber} fillOpacity={0.55} stroke={DEEP.amber} strokeWidth={2.5} />
      <Txt x={220} y={334} bold size={11.5}>Postérieur superficiel</Txt>
      {[[200, 172, NERVE, "médian"], [326, 186, NERVE, "ulnaire"]].map(([x, y, c, t]) => <g key={String(t)}><circle cx={Number(x)} cy={Number(y)} r={6} fill={String(c)} stroke="#fff" strokeWidth={1.5} /></g>)}
      <circle cx={144} cy={266} r={5} fill={NERVE} stroke="#fff" strokeWidth={1.5} />
      <circle cx={176} cy={160} r={6} fill={ART} /><circle cx={314} cy={168} r={6} fill={ART} />
      <rect x={410} y={30} width={320} height={390} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={570} y={54} bold size={12}>Muscles et innervation par compartiment</Txt>
      {[["Antérieur superficiel", "nerf médian (sauf fléchisseur ulnaire du carpe : ulnaire)", ["rond pronateur, fléchisseur radial du carpe,", "long palmaire, fléchisseur superficiel des doigts,", "fléchisseur ulnaire du carpe"], C.blue], ["Antérieur profond", "nerf interosseux antérieur (médian) + ulnaire", ["long fléchisseur du pouce, carré pronateur,", "fléchisseur profond des doigts"], C.green], ["Postérieur superficiel", "nerf radial", ["brachioradial, extenseurs radiaux du carpe,", "extenseur des doigts, extenseur ulnaire du carpe, anconé"], C.amber], ["Postérieur profond", "nerf interosseux postérieur (branche du radial)", ["supinateur, long abducteur du pouce,", "courts et longs extenseurs du pouce, extenseur de l'index"], C.violet]].map(([t, n, m, c], i) => (
        <g key={String(t)}>
          <rect x={420} y={64 + i * 84} width={300} height={78} rx={8} fill={String(c)} fillOpacity={0.12} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={570} y={82 + i * 84} bold size={11.5} color={String(c)}>{String(t)}</Txt>
          <Txt x={570} y={97 + i * 84} size={9.5} bold>{String(n)}</Txt>
          {(m as string[]).map((line, k) => <Txt key={k} x={570} y={110 + k * 12 + i * 84} size={9.5} color={C.grey}>{line}</Txt>)}
        </g>
      ))}
    </Figure>
  );
}

// ─── 3. Innervation des muscles de l'avant-bras ──────────────────────────
export function ForearmInnervationDiagram() {
  const col = (x: number, nerve: string, sub: string, c: string, muscles: string[]) => (
    <g>
      {box(x, 16, 214, 54, nerve, sub, c, 13)}
      {muscles.map((m, i) => (
        <g key={m}>
          <path d={`M${x + 107},72 L${x + 107},${88 + i * 34}`} stroke={c} strokeWidth={0} />
          <rect x={x + 6} y={88 + i * 34} width={202} height={28} rx={8} fill={c} fillOpacity={0.12} stroke={c} strokeWidth={1.6} />
          <Txt x={x + 107} y={106 + i * 34} bold size={10.5}>{m}</Txt>
        </g>
      ))}
      <line x1={x + 107} y1={70} x2={x + 107} y2={86} stroke={c} strokeWidth={2.5} />
    </g>
  );
  return (
    <Figure viewBox="0 0 740 440" title="Qui innerve quoi dans l'avant-bras" caption="Nerf médian et interosseux antérieur : fléchisseurs et pronateurs ; nerf ulnaire : fléchisseur ulnaire du carpe et moitié médiale du fléchisseur profond ; nerf radial : extenseurs ; interosseux postérieur : groupe profond">
      {col(6, "Nerf médian", "+ interosseux antérieur", C.blue, ["Rond pronateur", "Fléchisseur radial du carpe", "Long palmaire", "Fléchisseur superficiel des doigts", "Long fléchisseur du pouce *", "Fléchisseur profond (moitié latérale) *", "Carré pronateur *"])}
      {col(256, "Nerf ulnaire", "passe entre les 2 chefs du FUC", C.green, ["Fléchisseur ulnaire du carpe", "Fléchisseur profond (moitié médiale)"])}
      {col(506, "Nerf radial", "puis interosseux postérieur †", C.amber, ["Brachioradial, ERCL, ERCC", "Extenseur des doigts et du 5ᵉ doigt", "Extenseur ulnaire du carpe, anconé", "Supinateur †", "Long abducteur du pouce †", "Courts et longs extenseurs du pouce †", "Extenseur de l'index †"])}
      <Txt x={370} y={352} size={10.5} bold>* innervés par le nerf interosseux antérieur (branche du médian)</Txt>
      <Txt x={370} y={370} size={10.5} bold>† innervés par le nerf interosseux postérieur (branche profonde du radial)</Txt>
      <rect x={20} y={384} width={700} height={44} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={404} size={10.5}>le médian innerve presque tout le compartiment antérieur, l'ulnaire seulement 1½ muscle, le radial tout le postérieur</Txt>
      <Txt x={370} y={420} size={10} color={C.grey}>aucun muscle du compartiment antérieur n'est innervé par le nerf radial</Txt>
    </Figure>
  );
}

// ─── 4. Classification des articulations ─────────────────────────────────
export function JointTypesDiagram() {
  const syn: [string, string, string][] = [
    ["Plane", "glissements", "acromio-claviculaire, intercarpiennes"],
    ["Charnière (trochléenne)", "flexion / extension", "coude, interphalangiennes"],
    ["Pivot (trochoïde)", "rotation autour d'un axe", "radio-ulnaire proximale"],
    ["Condylienne (ellipsoïde)", "2 axes : flexion/extension, abduction/adduction", "radio-carpienne, métacarpo-phalangiennes"],
    ["En selle", "2 axes, opposition", "trapézo-métacarpienne du pouce"],
    ["Sphéroïde (énarthrose)", "3 axes, tous les mouvements", "épaule, hanche"],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Classification des articulations" caption="Fonctionnelle : synarthrose (immobile), amphiarthrose (peu mobile), diarthrose (mobile) ; structurale : fibreuse, cartilagineuse, synoviale (cavité, capsule, liquide synovial)">
      <Txt x={130} y={22} bold size={12.5} color={C.blue}>Fibreuses</Txt><Txt x={130} y={38} size={10} color={C.grey}>synarthroses (immobiles)</Txt>
      <rect x={20} y={48} width={220} height={88} rx={10} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} />
      <path d="M40,80 L100,80 M104,80 L160,80" stroke={BONE_STROKE} strokeWidth={14} strokeLinecap="round" /><path d="M96,74 L108,86" stroke="#fff" strokeWidth={0} />
      <Txt x={130} y={106} size={10.5} bold>sutures du crâne</Txt><Txt x={130} y={122} size={9.5} color={C.grey}>syndesmoses (tibio-fibulaire)</Txt>
      <Txt x={370} y={22} bold size={12.5} color={C.green}>Cartilagineuses</Txt><Txt x={370} y={38} size={10} color={C.grey}>amphiarthroses (peu mobiles)</Txt>
      <rect x={260} y={48} width={220} height={88} rx={10} fill={C.green} fillOpacity={0.08} stroke={C.green} strokeWidth={2} />
      <rect x={290} y={68} width={70} height={14} fill={BONE} stroke={BONE_STROKE} /><rect x={290} y={84} width={70} height={14} rx={6} fill={C.green} fillOpacity={0.6} /><rect x={290} y={100} width={70} height={14} fill={BONE} stroke={BONE_STROKE} />
      <Txt x={422} y={90} size={10} bold>disque interv.</Txt><Txt x={422} y={106} size={9.5} color={C.grey}>symphyse pubienne</Txt>
      <Txt x={610} y={22} bold size={12.5} color={C.red}>Synoviales</Txt><Txt x={610} y={38} size={10} color={C.grey}>diarthroses (mobiles)</Txt>
      <rect x={500} y={48} width={230} height={88} rx={10} fill={C.red} fillOpacity={0.08} stroke={C.red} strokeWidth={2} />
      <path d="M534,70 L534,96 Q560,112 586,96 L586,70z" fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /><path d="M534,116 L586,116 L586,124 L534,124z" fill={BONE} stroke={BONE_STROKE} />
      <path d="M526,64 C520,90 520,110 530,124 M594,64 C600,90 600,110 590,124" fill="none" stroke={C.red} strokeWidth={2.5} /><rect x={540} y={102} width={40} height={10} fill={C.blue} fillOpacity={0.4} />
      {[["capsule", 606, 78], ["cartilage", 606, 96], ["liquide synovial", 606, 114]].map(([t, x, y]) => <Txt key={String(t)} x={Number(x)} y={Number(y)} anchor="start" size={9.5}>{String(t)}</Txt>)}
      <line x1={20} y1={158} x2={720} y2={158} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={180} bold size={12.5} color={C.red}>Six sous-types d'articulations synoviales</Txt>
      {syn.map(([t, m, e], i) => {
        const x = 8 + (i % 3) * 246;
        const y = 194 + Math.floor(i / 3) * 132;
        return (
          <g key={t} transform={`translate(${x} ${y})`}>
            <rect x={0} y={0} width={236} height={122} rx={10} fill={C.red} fillOpacity={0.05} stroke={C.red} strokeWidth={1.8} />
            <Txt x={118} y={20} bold size={11.5} color={RED}>{t}</Txt>
            <g transform="translate(0 4)">
              {i === 0 && <><rect x={78} y={34} width={80} height={16} fill={BONE} stroke={BONE_STROKE} /><rect x={78} y={54} width={80} height={16} fill={BONE} stroke={BONE_STROKE} /><path d="M100,46 L136,46" stroke={C.red} strokeWidth={2} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" transform="translate(0 16)" /></>}
              {i === 1 && <><circle cx={118} cy={58} r={16} fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /><rect x={80} y={44} width={78} height={12} fill={BONE} stroke={BONE_STROKE} /><path d="M160,56 C176,44 176,72 160,60" fill="none" stroke={C.red} strokeWidth={2.5} markerEnd="url(#fig-arrow)" /></>}
              {i === 2 && <><rect x={108} y={32} width={22} height={52} rx={8} fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /><circle cx={118} cy={58} r={24} fill="none" stroke={C.red} strokeWidth={2.5} strokeDasharray="5 3" /></>}
              {i === 3 && <><ellipse cx={118} cy={70} rx={30} ry={14} fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /><ellipse cx={118} cy={50} rx={24} ry={12} fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /><path d="M80,58 L156,58 M118,38 L118,84" stroke={C.red} strokeWidth={2} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" /></>}
              {i === 4 && <><path d="M84,66 Q118,86 152,66 L152,74 Q118,94 84,74z" fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /><path d="M92,46 Q118,26 144,46 L144,54 Q118,34 92,54z" fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /></>}
              {i === 5 && <><circle cx={118} cy={54} r={22} fill={BONE} stroke={BONE_STROKE} strokeWidth={2} /><path d="M96,86 Q118,60 140,86" fill="none" stroke={BONE_STROKE} strokeWidth={5} /><path d="M78,60 C90,30 146,30 158,60" fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="4 3" /></>}
            </g>
            <Txt x={118} y={98} size={9.5} bold>{m}</Txt><Txt x={118} y={113} size={9} color={C.grey}>{e}</Txt>
          </g>
        );
      })}
      <Txt x={370} y={462} size={10} color={C.grey}>caractéristiques d'une synoviale : cavité articulaire, capsule (fibreuse + synoviale), cartilage hyalin, liquide synovial, ligaments</Txt>
    </Figure>
  );
}

// ─── 5. Articulation de l'épaule ─────────────────────────────────────────
export function ShoulderJointDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Articulation gléno-humérale (épaule)" caption="Sphéroïde très mobile mais peu stable : grosse tête humérale contre cavité glénoïdale peu profonde (labrum) ; stabilisée par la capsule, les ligaments et surtout la coiffe des rotateurs ; arche coraco-acromiale et bourse sous-acromiale au-dessus">
      {/* acromion, coracoïde, clavicule */}
      <path d="M40,80 L250,64 C270,62 290,72 282,92 L230,100 L60,108z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
      <Txt x={110} y={90} bold size={10.5}>Clavicule</Txt>
      <path d="M250,64 C300,50 340,52 348,72 L340,86 L282,92z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} /><Txt x={318} y={72} bold size={10}>Acromion</Txt>
      <path d="M180,100 C176,132 190,150 214,152 L222,132 L216,100z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} /><Txt x={170} y={130} anchor="end" bold size={10}>Coracoïde</Txt>
      <path d="M180,96 L340,72" stroke={C.violet} strokeWidth={3} strokeDasharray="5 3" /><Txt x={250} y={60} size={9} bold color="#6a45b0">lig. coraco-acromial</Txt>
      {/* scapula */}
      <path d="M282,92 C330,104 372,130 374,190 C376,250 352,300 320,320 C300,306 300,250 296,200 C292,150 282,120 282,92z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
      <Txt x={352} y={240} bold size={11}>Scapula</Txt>
      <path d="M282,150 C270,172 270,206 282,228" fill="none" stroke={C.blue} strokeWidth={9} strokeLinecap="round" /><Txt x={338} y={196} size={9.5} bold color={DEEP.blue} anchor="end">cavité glénoïdale</Txt>
      <path d="M278,146 C262,150 260,160 274,166 M278,232 C262,228 260,222 274,216" fill="none" stroke={C.green} strokeWidth={6} /><Txt x={300} y={264} size={9} bold color="#2a7a55" anchor="end">labrum</Txt>
      {/* humérus */}
      <circle cx={214} cy={190} r={48} fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
      <path d="M170,214 L160,410 L230,410 L214,238z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
      <Txt x={214} y={196} bold size={11}>Tête</Txt><Txt x={214} y={210} size={9}>humérale</Txt>
      {/* capsule et coiffe */}
      <path d="M262,150 C236,132 190,132 168,160 M262,236 C236,254 200,252 176,226" fill="none" stroke={C.red} strokeWidth={5} opacity={0.75} />
      <Txt x={150} y={150} anchor="end" size={9.5} bold color={RED}>capsule articulaire</Txt>
      {[["Supra-épineux", 250, 124, C.amber], ["Infra-épineux / petit rond", 300, 152, C.amber], ["Subscapulaire", 150, 190, C.violet]].map(([t, x, y, c]) => <g key={String(t)}><circle cx={Number(x)} cy={Number(y)} r={7} fill={String(c)} /></g>)}
      <line x1={250} y1={124} x2={402} y2={116} {...leader} /><Txt x={408} y={112} anchor="start" size={10.5} bold color={DEEP.amber}>supra-épineux (abduction 0-15°)</Txt>
      <line x1={300} y1={152} x2={402} y2={150} {...leader} /><Txt x={408} y={148} anchor="start" size={10.5} bold color={DEEP.amber}>infra-épineux et petit rond (rotation latérale)</Txt>
      <line x1={150} y1={190} x2={50} y2={210} {...leader} /><Txt x={20} y={226} anchor="start" size={10.5} bold color={DEEP.violet}>subscapulaire (rotation médiale)</Txt>
      <path d="M232,118 L288,104" stroke={C.blue} strokeWidth={9} strokeLinecap="round" opacity={0.45} /><Txt x={224} y={112} anchor="end" size={9} bold color={DEEP.blue}>bourse sous-acromiale</Txt>
      <rect x={400} y={176} width={330} height={250} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={565} y={200} bold size={12}>Stabilité et mouvements</Txt>
      {["coiffe des rotateurs (supra-épineux, infra-épineux, petit rond, subscapulaire) : stabilisateur principal", "ligaments gléno-huméraux, lig. coraco-huméral", "tendon du long chef du biceps dans la gouttière", "luxation la plus fréquente : antéro-inférieure (nerf axillaire menacé)"].map((t, i) => <Txt key={t} x={565} y={224 + i * 20} size={10.5}>{t}</Txt>)}
      <Txt x={565} y={318} bold size={11.5}>Mouvements (3 axes)</Txt>
      {["flexion / extension", "abduction / adduction", "rotations médiale et latérale", "circumduction"].map((t, i) => <Txt key={t} x={565} y={338 + i * 20} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── 6. Articulation du coude ────────────────────────────────────────────
export function ElbowJointDiagram() {
  return (
    <Figure viewBox="0 0 740 430" title="Articulation du coude : trois articulations dans une capsule" caption="Huméro-ulnaire (charnière : flexion/extension), huméro-radiale et radio-ulnaire proximale (pivot : pronation/supination) ; renforcées par les ligaments collatéraux médial et latéral et le ligament annulaire">
      <path d="M130,20 L206,20 L212,150 C260,160 260,220 222,232 L128,232 C90,222 90,160 130,150z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
      <Txt x={170} y={70} bold size={11.5}>Humérus</Txt>
      <circle cx={140} cy={210} r={22} fill="#f5edd8" stroke={BONE_STROKE} strokeWidth={2.5} /><Txt x={140} y={214} bold size={9.5}>Capitulum</Txt>
      <path d="M170,196 C190,190 206,206 200,228 L170,232z" fill="#f5edd8" stroke={BONE_STROKE} strokeWidth={2.5} /><Txt x={196} y={214} bold size={9.5}>Trochlée</Txt>
      {/* ulna */}
      <path d="M172,236 C210,236 242,250 244,290 L226,420 L182,420 L174,300 C172,270 164,252 172,236z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
      <path d="M232,190 C264,190 270,250 240,262 L216,244 C236,232 236,206 232,190z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} /><Txt x={266} y={206} anchor="start" size={10} bold>Olécrane</Txt>
      <path d="M180,236 C176,262 192,268 206,266 L206,238z" fill="#e0cf9e" stroke={BONE_STROKE} strokeWidth={2} /><Txt x={248} y={312} anchor="start" size={9.5} bold>proc. coronoïde</Txt>
      {/* radius */}
      <path d="M92,248 L162,248 L156,284 L146,420 L118,420 L108,284z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
      <Txt x={130} y={352} bold size={11}>Radius</Txt><Txt x={124} y={266} bold size={9.5}>tête</Txt>
      {/* ligaments */}
      <path d="M74,190 C64,230 70,262 96,262" fill="none" stroke={C.red} strokeWidth={6} strokeLinecap="round" /><Txt x={4} y={176} anchor="start" size={10} bold color={RED}>lig. collatéral</Txt><Txt x={4} y={189} anchor="start" size={10} bold color={RED}>radial</Txt>
      <path d="M246,228 C262,250 254,268 236,276" fill="none" stroke={C.violet} strokeWidth={6} strokeLinecap="round" /><Txt x={268} y={246} anchor="start" size={9.5} bold color="#6a45b0">lig. collat. ulnaire</Txt>
      <path d="M100,254 Q130,244 158,254" fill="none" stroke={C.green} strokeWidth={5} /><Txt x={130} y={244} size={9} bold color="#2a7a55">lig. annulaire</Txt>
      <rect x={360} y={20} width={370} height={396} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={545} y={44} bold size={12}>Trois articulations</Txt>
      {[["Huméro-ulnaire", "trochlée ↔ incisure trochléaire", "charnière : flexion / extension", C.blue], ["Huméro-radiale", "capitulum ↔ fovéa de la tête radiale", "flexion / extension, rotation", C.green], ["Radio-ulnaire proximale", "tête radiale ↔ incisure radiale de l'ulna", "pivot : pronation / supination", C.amber]].map(([t, s, m, c], i) => (
        <g key={String(t)}><rect x={374} y={58 + i * 84} width={342} height={74} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} /><Txt x={545} y={80 + i * 84} bold size={11.5} color={String(c)}>{String(t)}</Txt><Txt x={545} y={98 + i * 84} size={10}>{String(s)}</Txt><Txt x={545} y={116 + i * 84} size={10.5} bold>{String(m)}</Txt></g>
      ))}
      <Txt x={545} y={330} bold size={11.5}>Points cliniques</Txt>
      {["angle de portage : cubitus valgus physiologique", "subluxation de la tête radiale de l'enfant (« pronation douloureuse »)", "nerf ulnaire en arrière de l'épicondyle médial"].map((t, i) => <Txt key={t} x={545} y={350 + i * 20} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── 7. Innervation de la main ───────────────────────────────────────────
export function HandInnervationDiagram() {
  const finger = (x: number, y: number, h: number, c: string, w = 30) => <rect x={x - w / 2} y={y} width={w} height={h} rx={w / 2} fill={c} fillOpacity={0.55} stroke="#b98c68" strokeWidth={2} />;
  return (
    <Figure viewBox="0 0 740 440" title="Muscles de la main et territoires du médian et de l'ulnaire" caption="Nerf médian : muscles thénariens (sauf l'adducteur et le chef médial du court fléchisseur) et 2 lombricaux latéraux ; nerf ulnaire : muscles hypothénariens, adducteur du pouce, interosseux et 2 lombricaux médiaux">
      {/* doigts */}
      {finger(120, 30, 110, C.blue, 32)}{finger(170, 16, 120, C.blue, 32)}{finger(222, 30, 108, C.green, 32)}{finger(272, 50, 92, C.green, 30)}
      <path d="M92,190 C50,180 32,140 44,110 C60,98 84,112 96,150z" fill={C.blue} fillOpacity={0.55} stroke="#b98c68" strokeWidth={2} />
      {/* paume */}
      <path d="M92,140 L292,140 C300,220 280,300 240,326 L140,326 C96,300 88,220 92,140z" fill={SKIN} fillOpacity={0.35} stroke="#b98c68" strokeWidth={3} />
      <path d="M100,220 C120,190 150,196 154,240 C154,280 130,300 108,290 C92,270 92,240 100,220z" fill={C.blue} fillOpacity={0.5} stroke={DEEP.blue} strokeWidth={2.5} /><Txt x={124} y={266} bold size={10}>thénar</Txt>
      <path d="M232,190 C270,190 286,230 280,280 C270,308 244,320 226,316 C218,270 222,230 232,190z" fill={C.green} fillOpacity={0.5} stroke={DEEP.green} strokeWidth={2.5} /><Txt x={256} y={256} bold size={8.5}>hypothén.</Txt>
      <path d="M156,160 L228,160 L228,200 L156,200z" fill={C.blue} fillOpacity={0.35} stroke={DEEP.blue} strokeWidth={1.5} /><Txt x={192} y={184} size={9} bold>lombricaux 1-2</Txt>
      <path d="M156,204 L228,204 L228,240 L156,240z" fill={C.green} fillOpacity={0.35} stroke={DEEP.green} strokeWidth={1.5} /><Txt x={192} y={226} size={9} bold>lombricaux 3-4</Txt>
      <path d="M156,248 L226,248 L226,296 L156,296z" fill={C.green} fillOpacity={0.3} stroke={DEEP.green} strokeWidth={1.5} strokeDasharray="4 3" /><Txt x={192} y={270} size={9} bold>interosseux</Txt><Txt x={192} y={283} size={8.5}>(profonds)</Txt>
      <path d="M100,210 L140,240" stroke={C.green} strokeWidth={5} opacity={0.7} /><Txt x={8} y={196} anchor="start" size={9.5} bold color={DEEP.green}>adducteur</Txt><Txt x={8} y={208} anchor="start" size={9.5} bold color={DEEP.green}>du pouce</Txt>
      <Txt x={190} y={352} bold size={11.5}>Paume (face palmaire)</Txt>
      <rect x={330} y={20} width={400} height={400} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <rect x={344} y={34} width={372} height={150} rx={8} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} />
      <Txt x={530} y={56} bold size={12.5} color={C.blue}>Nerf médian</Txt>
      {["abducteur court du pouce", "opposant du pouce", "court fléchisseur du pouce (chef latéral)", "lombricaux 1 et 2 (latéraux)", "sensitif : face palmaire des 3½ premiers doigts"].map((t, i) => <Txt key={t} x={530} y={80 + i * 20} size={10.5} bold={i === 4}>{t}</Txt>)}
      <rect x={344} y={196} width={372} height={150} rx={8} fill={C.green} fillOpacity={0.08} stroke={C.green} strokeWidth={2} />
      <Txt x={530} y={218} bold size={12.5} color="#2a7a55">Nerf ulnaire</Txt>
      {["tous les muscles hypothénariens", "adducteur du pouce + chef médial du court fléchisseur", "interosseux (dorsaux et palmaires)", "lombricaux 3 et 4 (médiaux)", "sensitif : 1½ doigts médiaux (5ᵉ et moitié du 4ᵉ)"].map((t, i) => <Txt key={t} x={530} y={242 + i * 20} size={10.5} bold={i === 4}>{t}</Txt>)}
      <Txt x={530} y={372} bold size={11.5}>Nerf radial</Txt><Txt x={530} y={390} size={10.5}>aucun muscle intrinsèque • sensitif : dos de la main, côté radial</Txt>
      <Txt x={530} y={408} size={10} color={C.grey}>muscles extrinsèques (avant-bras) : force • intrinsèques (main) : motricité fine</Txt>
    </Figure>
  );
}

// ─── 8. Coiffe des rotateurs et muscles de l'épaule ──────────────────────
export function ShoulderMusclesDiagram() {
  const rows: [string, string, string, string, string][] = [
    ["Supra-épineux", "fosse supra-épineuse", "tubercule majeur (facette sup.)", "suprascapulaire", "abduction 0-15°"],
    ["Infra-épineux", "fosse infra-épineuse", "tubercule majeur (facette moy.)", "suprascapulaire", "rotation latérale"],
    ["Petit rond", "bord latéral de la scapula", "tubercule majeur (facette inf.)", "axillaire", "rotation latérale"],
    ["Subscapulaire", "fosse subscapulaire", "tubercule mineur", "subscapulaires sup. et inf.", "rotation médiale"],
    ["Deltoïde", "clavicule, acromion, épine", "tubérosité deltoïdienne", "axillaire", "abduction (15-90°)"],
    ["Grand rond", "angle inférieur", "lèvre médiale de la gouttière", "subscapulaire inférieur", "adduction, rotation médiale"],
  ];
  const cols = [C.amber, C.amber, C.amber, C.violet, C.red, C.green];
  return (
    <Figure viewBox="0 0 740 470" title="Muscles de l'épaule : coiffe des rotateurs, deltoïde et grand rond" caption="Coiffe des rotateurs (supra-épineux, infra-épineux, petit rond, subscapulaire) : insertions sur les tubercules de l'humérus ; chaque muscle a sa zone d'origine sur la scapula et son nerf">
      <g transform="translate(14 8) scale(0.92)">
        {/* scapula droite, vue postérieure : le supra-épineux est AU-DESSUS de l'épine, l'infra-épineux EN DESSOUS */}
        <path d="M60,68 L190,52 C210,50 224,64 214,84 L206,130 C200,200 170,290 130,340 C100,330 78,220 60,68z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
        <path d="M66,76 L188,58 C204,60 208,72 204,84 L198,92 L62,126z" fill={C.amber} fillOpacity={0.6} stroke={DEEP.amber} strokeWidth={2} />
        <path d="M64,150 L206,114 C204,170 180,250 142,296 C104,272 76,214 64,150z" fill={C.amber} fillOpacity={0.4} stroke={DEEP.amber} strokeWidth={2} />
        <path d="M206,116 C204,150 194,190 178,224 L160,208 C176,172 186,142 190,118z" fill={C.amber} fillOpacity={0.9} stroke={DEEP.amber} strokeWidth={2} />
        <path d="M178,226 C170,262 152,292 134,310 L114,298 C132,272 150,248 160,208z" fill={C.green} fillOpacity={0.75} stroke={DEEP.green} strokeWidth={2} />
        <path d="M60,124 L200,92 L246,66 C258,62 264,72 256,82 L206,112 L62,148z" fill="#e0cf9e" stroke={BONE_STROKE} strokeWidth={3} />
        <circle cx={252} cy={124} r={36} fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
        <path d="M232,158 L228,330 L290,330 L274,156z" fill={BONE} stroke={BONE_STROKE} strokeWidth={3} />
        <circle cx={236} cy={112} r={8} fill="#e0cf9e" stroke={BONE_STROKE} strokeWidth={2} />
        <Txt x={112} y={98} bold size={10.5}>Supra-épineux</Txt><Txt x={112} y={110} size={8.5} color={C.grey}>(au-dessus de l'épine)</Txt>
        <Txt x={112} y={186} bold size={10.5}>Infra-épineux</Txt><Txt x={112} y={198} size={8.5} color={C.grey}>(sous l'épine)</Txt>
        <line x1={110} y1={128} x2={40} y2={150} {...leader} /><Txt x={4} y={162} anchor="start" size={9.5} bold color="#6a4a20">épine de la scapula</Txt>
        <line x1={248} y1={70} x2={290} y2={40} {...leader} /><Txt x={294} y={36} anchor="start" size={9.5} bold color="#6a4a20">acromion</Txt>
        <line x1={186} y1={170} x2={20} y2={260} {...leader} /><Txt x={4} y={272} anchor="start" size={9.5} bold color={DEEP.amber}>petit rond</Txt>
        <line x1={140} y1={290} x2={20} y2={330} {...leader} /><Txt x={4} y={342} anchor="start" size={9.5} bold color={DEEP.green}>grand rond</Txt>
        <Txt x={258} y={200} size={9.5} bold>humérus</Txt>
        <Txt x={140} y={372} bold size={11}>Scapula droite, vue postérieure</Txt>
      </g>
      <rect x={330} y={16} width={400} height={440} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      {rows.map(([m, o, ins, n, a], i) => (
        <g key={m} transform={`translate(340 ${26 + i * 71})`}>
          <rect x={0} y={0} width={380} height={64} rx={8} fill={cols[i]} fillOpacity={0.1} stroke={cols[i]} strokeWidth={1.8} />
          <Txt x={12} y={20} anchor="start" bold size={11.5} color={cols[i] === C.amber ? DEEP.amber : cols[i]}>{m}</Txt>
          <Txt x={12} y={38} anchor="start" size={9.5} color={C.grey}>{o}</Txt><Txt x={12} y={54} anchor="start" size={9.5} color={C.grey}>{"→ " + ins}</Txt>
          <Txt x={370} y={20} anchor="end" bold size={10.5}>{n}</Txt><Txt x={370} y={38} anchor="end" size={9.5} bold color={DEEP.blue}>{a}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 9. Muscles de la ceinture scapulaire ────────────────────────────────
export function GirdleMusclesDiagram() {
  const torso = (x: number) => <path d={`M${x + 20},30 C${x + 60},10 ${x + 120},10 ${x + 160},30 L${x + 180},80 L${x + 170},240 L${x + 150},330 L${x + 30},330 L${x + 10},240 L${x},80z`} fill={SKIN} fillOpacity={0.35} stroke="#b98c68" strokeWidth={3} />;
  return (
    <Figure viewBox="0 0 740 460" title="Muscles reliant le membre supérieur au tronc" caption="Dos : trapèze (nerf accessoire), grand dorsal (thoraco-dorsal), rhomboïdes et élévateur de la scapula (dorsal de la scapula) ; face antérieure : grand et petit pectoraux, dentelé antérieur (nerf thoracique long), subclavier">
      {torso(20)}{torso(240)}
      <Txt x={110} y={352} bold size={11.5}>Vue postérieure</Txt><Txt x={330} y={352} bold size={11.5}>Vue antérieure</Txt>
      {/* dos */}
      <path d="M110,26 L60,90 L110,200 L160,90z" fill={C.blue} fillOpacity={0.5} stroke={DEEP.blue} strokeWidth={2.5} /><Txt x={110} y={100} bold size={11}>Trapèze</Txt>
      <path d="M86,140 L134,140 L154,300 L66,300z" fill={C.green} fillOpacity={0.5} stroke={DEEP.green} strokeWidth={2.5} transform="translate(0 0)" /><Txt x={110} y={230} bold size={10.5}>Grand dorsal</Txt>
      <path d="M82,84 L108,112 L100,132 L76,110z M112,112 L140,86 L146,110 L120,134z" fill={C.amber} fillOpacity={0.75} stroke={DEEP.amber} strokeWidth={2} /><Txt x={110} y={146} size={9} bold color={DEEP.amber}>rhomboïdes</Txt>
      <path d="M44,60 L70,50 L76,80 L54,84z" fill={C.violet} fillOpacity={0.7} stroke={DEEP.violet} strokeWidth={2} /><Txt x={4} y={44} anchor="start" size={9} bold color={DEEP.violet}>élévateur</Txt>
      {/* face antérieure */}
      <path d="M330,64 L410,64 L410,150 L342,120 C324,100 322,80 330,64z" fill={C.red} fillOpacity={0.5} stroke={DEEP.red} strokeWidth={2.5} /><Txt x={366} y={104} bold size={10.5}>Grand pectoral</Txt>
      <path d="M270,110 L326,76 L340,130 L276,150z" fill={C.red} fillOpacity={0.5} stroke={DEEP.red} strokeWidth={2.5} />
      <path d="M300,142 L336,132 L334,176 L296,170z" fill={C.pink} fillOpacity={0.7} stroke={DEEP.pink} strokeWidth={2} /><Txt x={284} y={170} anchor="end" size={9} bold color={DEEP.pink}>petit pectoral</Txt>
      <path d="M274,176 L326,190 L322,260 L268,240z" fill={C.green} fillOpacity={0.5} stroke={DEEP.green} strokeWidth={2.5} /><Txt x={296} y={228} bold size={9.5}>Dentelé ant.</Txt>
      <rect x={342} y={54} width={70} height={9} rx={4} fill={C.violet} fillOpacity={0.8} /><Txt x={346} y={50} anchor="start" size={9} bold color={DEEP.violet}>subclavier</Txt>
      <rect x={460} y={16} width={270} height={430} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      {[["Trapèze", "nerf accessoire (XI)", "élève, rétracte, abaisse la scapula", C.blue], ["Grand dorsal", "nerf thoraco-dorsal", "adduction, extension, rotation médiale", C.green], ["Rhomboïdes, élévateur", "nerf dorsal de la scapula", "rétraction, élévation de la scapula", C.amber], ["Grand et petit pectoraux", "nerfs pectoraux latéral et médial", "adduction, rotation médiale, abaissement", C.red], ["Dentelé antérieur", "nerf thoracique long", "protraction ; sa lésion = scapula alata", C.green], ["Subclavier", "nerf du subclavier", "stabilise et abaisse la clavicule", C.violet]].map(([t, n, a, c], i) => (
        <g key={String(t)} transform={`translate(468 ${26 + i * 70})`}>
          <rect x={0} y={0} width={254} height={62} rx={8} fill={String(c)} fillOpacity={0.1} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={127} y={20} bold size={11.5}>{String(t)}</Txt><Txt x={127} y={37} size={10} bold color={DEEP.blue}>{String(n)}</Txt><Txt x={127} y={53} size={9.5} color={C.grey}>{String(a)}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 10. Artères du membre supérieur ─────────────────────────────────────
export function UpperLimbArteriesDiagram() {
  const seg = (x: number, y1: number, y2: number, c = ART, w = 10) => <line x1={x} y1={y1} x2={x} y2={y2} stroke={c} strokeWidth={w} strokeLinecap="round" />;
  return (
    <Figure viewBox="0 0 740 520" title="Arbre artériel du membre supérieur" caption="Subclavière → axillaire (3 parties par rapport au petit pectoral) → brachiale (artère brachiale profonde) → radiale et ulnaire → arcades palmaires superficielle et profonde ; anastomose péri-articulaire du coude">
      {seg(200, 30, 100)}<Txt x={200} y={22} bold size={11}>Subclavière</Txt>
      {seg(200, 100, 190, ART, 10)}
      <rect x={176} y={100} width={48} height={26} rx={6} fill="none" stroke={C.red} strokeDasharray="4 3" /><Txt x={150} y={118} anchor="end" size={9} bold color={C.grey}>petit pectoral</Txt>
      {[["1ʳᵉ partie", "thoracique sup.", 108], ["2ᵉ partie", "thoraco-acromiale, thor. latérale", 138], ["3ᵉ partie", "subscapulaire, circonflexes", 172]].map(([t, b, y]) => <g key={String(t)}><line x1={210} y1={Number(y)} x2={236} y2={Number(y)} stroke={ART} strokeWidth={2.5} /><Txt x={242} y={Number(y) + 4} anchor="start" size={9} bold>{`${t} : ${b}`}</Txt></g>)}
      <Txt x={150} y={150} anchor="end" size={10} bold color={ART}>Axillaire</Txt>
      <circle cx={200} cy={192} r={5} fill="#fff" stroke={ART} strokeWidth={2} /><Txt x={150} y={196} anchor="end" size={9} color={C.grey}>bord inférieur du grand rond</Txt>
      {seg(200, 192, 300)}<Txt x={150} y={250} anchor="end" size={10.5} bold color={ART}>Brachiale</Txt>
      <line x1={200} y1={214} x2={250} y2={230} stroke={ART} strokeWidth={3} /><Txt x={256} y={236} anchor="start" size={9} bold>brachiale profonde</Txt><Txt x={256} y={248} anchor="start" size={8.5} color={C.grey}>(avec le nerf radial)</Txt>
      <circle cx={200} cy={300} r={6} fill={C.amber} /><Txt x={150} y={304} anchor="end" size={9.5} bold color={DEEP.amber}>pli du coude</Txt>
      <path d="M200,300 L140,360" stroke={ART} strokeWidth={8} strokeLinecap="round" /><path d="M200,300 L262,360" stroke={ART} strokeWidth={8} strokeLinecap="round" />
      <Txt x={110} y={340} anchor="end" size={10.5} bold color={ART}>Radiale</Txt><Txt x={280} y={340} anchor="start" size={10.5} bold color={ART}>Ulnaire</Txt>
      <path d="M262,360 L262,400" stroke={ART} strokeWidth={8} /><path d="M232,330 L232,380" stroke={C.violet} strokeWidth={4} /><Txt x={236} y={396} anchor="start" size={9} bold color="#6a45b0">interosseuse</Txt>
      <path d="M140,360 L140,410" stroke={ART} strokeWidth={8} />
      <path d="M140,410 C160,440 244,440 262,410" fill="none" stroke={ART} strokeWidth={5} /><Txt x={200} y={462} bold size={10.5} color={ART}>arcades palmaires</Txt>
      <Txt x={200} y={478} size={9.5} color={C.grey}>superficielle (ulnaire) • profonde (radiale)</Txt>
      {[[188, 326], [214, 320]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={C.amber} />)}
      <line x1={400} y1={20} x2={400} y2={500} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={560} y={30} bold size={12.5}>Repères pratiques</Txt>
      {[["Axillaire", "3 parties, 6 branches ;", "la subscapulaire est la plus grosse"], ["Brachiale", "pouls au pli du coude ;", "le nerf médian la croise"], ["Radiale", "pouls au poignet, tabatière ;", "arcade palmaire profonde"], ["Ulnaire", "la plus volumineuse ;", "arcade palmaire superficielle"], ["Anastomose du coude", "4 systèmes : collatérales ↔", "récurrentes radiale, ulnaire, interosseuse"]].map(([t, s1, s2], i) => (
        <g key={t}><rect x={412} y={44 + i * 80} width={318} height={70} rx={8} fill={ART} fillOpacity={0.07} stroke={ART} strokeWidth={1.6} /><Txt x={571} y={64 + i * 80} bold size={11.5} color={RED}>{t}</Txt><Txt x={571} y={82 + i * 80} size={10}>{s1}</Txt><Txt x={571} y={97 + i * 80} size={10}>{s2}</Txt></g>
      ))}
      <Dot path="M200,30 L200,190 L200,300 L140,360 L140,410" dur={7} r={6} color="#fff" />
    </Figure>
  );
}

// ─── 11. Plexus brachial ─────────────────────────────────────────────────
export function BrachialPlexusDiagram() {
  const roots: [string, number][] = [["C5", 50], ["C6", 110], ["C7", 170], ["C8", 230], ["T1", 290]];
  const trunk = [[70, 70, "Supérieur", "C5-C6"], [175, 170, "Moyen", "C7"], [275, 260, "Inférieur", "C8-T1"]] as const;
  return (
    <Figure viewBox="0 0 760 470" title="Plexus brachial : racines, troncs, divisions, cordons, nerfs" caption="Rameaux ventraux de C5 à T1 : racines → 3 troncs → divisions antérieures et postérieures → 3 cordons (latéral, postérieur, médial) → 5 nerfs terminaux ; 17 branches (5 terminales, 12 collatérales)">
      {roots.map(([t, y]) => <g key={t}>{dotLabel(24, y + 10, 16, C.blue, t, 11)}</g>)}
      {[[40, 60, 70], [126, 60, 70], [126, 110, 70], [186, 170, 175], [246, 230, 275], [306, 290, 275]].map(([yy, a, b], i) => <line key={i} x1={40} y1={Number(a) + 10} x2={110} y2={Number(b) + 10} stroke={C.blue} strokeWidth={4} />)}
      {trunk.map(([ya, yb, t, r]) => <g key={t}><rect x={110} y={Number(yb) - 6} width={70} height={30} rx={8} fill={C.green} fillOpacity={0.3} stroke={C.green} strokeWidth={2.5} /><Txt x={145} y={Number(yb) + 8} bold size={10}>{t}</Txt><Txt x={145} y={Number(yb) + 20} size={8.5} color={C.grey}>{r}</Txt></g>)}
      {/* divisions */}
      {[[70, 60, "A"], [70, 100, "P"], [170, 140, "A"], [170, 180, "P"], [260, 230, "A"], [260, 270, "P"]].map(([from, y, t], i) => (
        <g key={i}><line x1={180} y1={Number(from) + 10} x2={230} y2={Number(y)} stroke={C.green} strokeWidth={3} /><rect x={230} y={Number(y) - 12} width={42} height={24} rx={6} fill={C.amber} fillOpacity={0.3} stroke={C.amber} strokeWidth={2} /><Txt x={251} y={Number(y) + 4} bold size={10}>{t === "A" ? "ant." : "post."}</Txt></g>
      ))}
      <Txt x={251} y={30} bold size={10} color={C.grey}>divisions</Txt><Txt x={145} y={30} bold size={10} color={C.grey}>troncs</Txt><Txt x={24} y={30} bold size={10} color={C.grey}>racines</Txt>
      {/* cordons */}
      {[[130, 90, "Latéral", "C5-C7", C.blue, [60, 140]], [230, 180, "Postérieur", "C5-T1", C.violet, [100, 180, 270]], [330, 262, "Médial", "C8-T1", C.red, [230]]].map(([x, y, t, r, c, from]) => (
        <g key={String(t)}>
          {(from as number[]).map((f, k) => <line key={k} x1={272} y1={Number(f)} x2={330} y2={Number(y) + 30} stroke={String(c)} strokeWidth={3} />)}
          <rect x={330} y={Number(y) + 14} width={78} height={34} rx={8} fill={String(c)} fillOpacity={0.3} stroke={String(c)} strokeWidth={2.5} /><Txt x={369} y={Number(y) + 30} bold size={10.5}>{String(t)}</Txt><Txt x={369} y={Number(y) + 42} size={8.5} color={C.grey}>{String(r)}</Txt>
        </g>
      ))}
      <Txt x={369} y={30} bold size={10} color={C.grey}>cordons</Txt>
      {[[110, "Musculo-cutané", C.blue, "flexion du bras et du coude"], [70, "Médian (racine latérale)", C.blue, "avant-bras antérieur, thénar"], [210, "Axillaire", C.violet, "deltoïde, petit rond"], [250, "Radial", C.violet, "triceps, extenseurs"], [340, "Ulnaire", C.red, "hypothénar, interosseux"], [305, "Médian (racine médiale)", C.red, ""]].map(([y, t, c, s], i) => (
        <g key={i}>
          <line x1={408} y1={[122, 122, 212, 212, 296, 296][i]} x2={450} y2={Number(y) + 4} stroke={String(c)} strokeWidth={3} />
          <rect x={450} y={Number(y) - 12} width={150} height={32} rx={8} fill={String(c)} fillOpacity={0.15} stroke={String(c)} strokeWidth={2} />
          <Txt x={525} y={Number(y) + 2} bold size={10.5}>{String(t)}</Txt><Txt x={525} y={Number(y) + 14} size={8.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      <Txt x={525} y={30} bold size={10} color={C.grey}>5 nerfs terminaux</Txt>
      <rect x={620} y={16} width={130} height={438} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={685} y={38} bold size={10.5}>12 collatérales</Txt>
      {["Racines :", "dorsal de la scapula", "thoracique long", "Tronc supérieur :", "suprascapulaire", "nerf du subclavier", "Cordon latéral :", "pectoral latéral", "Cordon postérieur :", "subscapulaires sup./inf.", "thoraco-dorsal", "Cordon médial :", "pectoral médial", "cutané médial du bras", "cutané méd. avant-bras"].map((t, i) => <Txt key={i} x={628} y={62 + i * 26} anchor="start" size={9} bold={t.endsWith(":")} color={t.endsWith(":") ? DEEP.blue : undefined}>{t}</Txt>)}
      <rect x={20} y={372} width={590} height={82} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={315} y={392} bold size={11}>Règle : cordons nommés par rapport à l'artère axillaire</Txt>
      <Txt x={315} y={410} size={10}>latéral = divisions antérieures des troncs supérieur et moyen • médial = division antérieure du tronc inférieur</Txt>
      <Txt x={315} y={426} size={10}>postérieur = les trois divisions postérieures • le médian naît de deux racines (latérale et médiale)</Txt>
      <Txt x={315} y={444} size={9.5} color={C.grey}>lésion du tronc supérieur : paralysie d'Erb • lésion du tronc inférieur : paralysie de Klumpke</Txt>
    </Figure>
  );
}

// ─── 12. Trajet et lésions des nerfs du membre supérieur ─────────────────
export function UpperLimbNervesCourseDiagram() {
  const cards: [string, string, string, string, string][] = [
    ["Musculo-cutané", "C5-C7", "traverse le coracobrachial, passe entre biceps et brachial", "flexion du bras et du coude ; sensitif : face latérale de l'avant-bras", C.blue],
    ["Axillaire", "C5-C6", "espace quadrangulaire, avec l'a. circonflexe humérale postérieure", "deltoïde, petit rond ; fracture du col chirurgical → paralysie du deltoïde", C.violet],
    ["Radial", "C5-T1", "sillon radial de l'humérus, puis supinateur (interosseux postérieur)", "triceps et extenseurs ; fracture de la diaphyse → « main tombante »", C.amber],
    ["Médian", "C5-T1", "entre les deux chefs du rond pronateur, canal carpien", "fléchisseurs, thénar ; syndrome du canal carpien → « main de singe »", C.green],
    ["Ulnaire", "C8-T1", "derrière l'épicondyle médial, canal de Guyon", "hypothénar, interosseux ; lésion → « main en griffe »", C.red],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Les cinq nerfs terminaux du plexus brachial : trajet et lésions" caption="Rapports osseux et musculaires de chaque nerf : ils expliquent les déficits observés en cas de fracture ou de compression">
      {cards.map(([n, r, t, d, c], i) => (
        <g key={n} transform={`translate(6 ${6 + i * 92})`}>
          <rect x={0} y={0} width={728} height={84} rx={10} fill={c} fillOpacity={0.08} stroke={c} strokeWidth={2} />
          <rect x={0} y={0} width={150} height={84} rx={10} fill={c} fillOpacity={0.85} />
          <Txt x={75} y={38} bold size={14} color="#fff">{n}</Txt><Txt x={75} y={58} size={11} color="#fff">{r}</Txt>
          <Txt x={165} y={30} anchor="start" bold size={10.5} color={c === C.amber ? DEEP.amber : c}>trajet</Txt><Txt x={215} y={30} anchor="start" size={10.5}>{t}</Txt>
          <Txt x={165} y={60} anchor="start" bold size={10.5} color={RED}>clinique</Txt><Txt x={215} y={60} anchor="start" size={10.5}>{d.slice(0, 78)}</Txt>
          {d.length > 78 && <Txt x={215} y={74} anchor="start" size={10.5}>{d.slice(78).trim()}</Txt>}
        </g>
      ))}
    </Figure>
  );
}

export function _unused() { return [OK, arrow]; }
