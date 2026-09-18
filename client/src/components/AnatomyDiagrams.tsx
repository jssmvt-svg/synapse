import { Figure, C } from "./Figure";

// Schémas originaux d'Anatomie générale (Lecture 1) : plans, termes des membres,
// mouvements articulaires et reliefs osseux. Volontairement schématiques.

const T = { fontSize: 13, fill: "currentColor" } as const;

function Label({ x, y, children, anchor = "start", bold = false, color }: {
  x: number | string; y: number | string; children: string; anchor?: "start" | "middle" | "end"; bold?: boolean; color?: string;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} {...T} fontWeight={bold ? 700 : 400} fill={color ?? "currentColor"}>
      {children}
    </text>
  );
}

// ─── 1. Plans anatomiques ────────────────────────────────────────────────
export function AnatomicalPlanes() {
  return (
    <Figure
      viewBox="0 0 620 360"
      title="Plans anatomiques du corps : sagittal, coronal et transversal"
      caption="Les trois plans de référence : sagittal (gauche/droite), coronal (avant/arrière), transversal (haut/bas)"
    >
      {/* corps en position anatomique, vue de face */}
      <g fill={C.skin} stroke="#b98c68" strokeWidth="1.5">
        <circle cx="280" cy="52" r="24" />
        <rect x="270" y="72" width="20" height="14" />
        <rect x="236" y="84" width="88" height="120" rx="24" />
        <rect x="206" y="90" width="24" height="112" rx="12" />
        <rect x="330" y="90" width="24" height="112" rx="12" />
        <rect x="241" y="200" width="38" height="140" rx="17" />
        <rect x="281" y="200" width="38" height="140" rx="17" />
      </g>

      {/* plan coronal */}
      <polygon points="150,60 410,60 410,320 150,320" fill={C.blue} fillOpacity="0.16" stroke={C.blue} strokeWidth="2" strokeDasharray="6 4" />
      {/* plan sagittal (perspective) */}
      <polygon points="262,28 322,10 322,318 262,336" fill={C.red} fillOpacity="0.2" stroke={C.red} strokeWidth="2" strokeDasharray="6 4" />
      {/* plan transversal */}
      <ellipse cx="280" cy="150" rx="140" ry="26" fill={C.green} fillOpacity="0.22" stroke={C.green} strokeWidth="2" strokeDasharray="6 4" />

      <Label x="440" y="80" bold color={C.blue}>Plan coronal (frontal)</Label>
      <Label x="440" y="98">Avant ↔ arrière</Label>
      <Label x="440" y="160" bold color={C.green}>Plan transversal (axial)</Label>
      <Label x="440" y="178">Haut ↔ bas</Label>
      <Label x="340" y="28" bold color={C.red}>Plan sagittal</Label>
      <Label x="340" y="46">Gauche ↔ droite</Label>
      <Label x="20" y="150" anchor="start">Droite du patient</Label>
      <Label x="540" y="345" anchor="end" color={C.grey}>Vue de face</Label>
    </Figure>
  );
}

// ─── 2. Termes descriptifs des membres ───────────────────────────────────
export function LimbTerms() {
  const axis = { stroke: "currentColor", strokeWidth: 1.5, markerStart: "url(#fig-arrow)", markerEnd: "url(#fig-arrow)" } as const;
  return (
    <Figure
      viewBox="0 0 720 350"
      title="Termes descriptifs des membres supérieur et inférieur"
      caption="Membre supérieur (droit, position anatomique) et membre inférieur (droit) : proximal/distal, radial/ulnaire, tibial/fibulaire"
    >
      {/* membre supérieur */}
      <Label x="170" y="22" anchor="middle" bold>Membre supérieur</Label>
      <g fill={C.skin} stroke="#b98c68" strokeWidth="1.5">
        <rect x="155" y="50" width="30" height="104" rx="15" />
        <rect x="158" y="150" width="24" height="100" rx="12" />
        <rect x="156" y="246" width="28" height="46" rx="13" />
        <ellipse cx="148" cy="258" rx="7" ry="17" transform="rotate(-12 148 258)" />
      </g>
      <line x1="16" y1="58" x2="16" y2="290" {...axis} />
      <Label x="6" y="48" bold>Proximal</Label>
      <Label x="6" y="312" bold>Distal</Label>
      <Label x="28" y="176" color={C.grey}>(vers le tronc ↑)</Label>
      <Label x="140" y="204" anchor="end" bold color={C.red}>◄ Radial (latéral)</Label>
      <Label x="200" y="204" bold color={C.blue}>Ulnaire (médial) ►</Label>
      <Label x="170" y="338" anchor="middle" color={C.grey}>Face palmaire = côté de la paume</Label>

      {/* membre inférieur */}
      <Label x="520" y="22" anchor="middle" bold>Membre inférieur</Label>
      <g fill={C.skin} stroke="#b98c68" strokeWidth="1.5">
        <rect x="496" y="42" width="48" height="128" rx="24" />
        <rect x="500" y="166" width="40" height="112" rx="18" />
        <path d="M498,276 h44 q16,0 16,16 v12 h-76 v-10 q0,-18 16,-18z" />
      </g>
      <line x1="690" y1="58" x2="690" y2="300" {...axis} />
      <Label x="690" y="48" anchor="middle" bold>Proximal</Label>
      <Label x="690" y="322" anchor="middle" bold>Distal</Label>
      <Label x="490" y="224" anchor="end" bold color={C.green}>◄ Tibial (médial)</Label>
      <Label x="550" y="224" bold color={C.amber}>Fibulaire (latéral) ►</Label>
      <Label x="520" y="338" anchor="middle" color={C.grey}>Face plantaire = côté de la plante du pied</Label>
    </Figure>
  );
}

// ─── 3. Mouvements articulaires ──────────────────────────────────────────
const LIMB = { stroke: "#b98c68", strokeWidth: 12, strokeLinecap: "round" as const, fill: "none" };
const GHOST = { ...LIMB, opacity: 0.35 };

function Panel({ x, y, title, children }: { x: number; y: number; title: string; children: React.ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="190" height="190" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.15" />
      <Label x="95" y="20" anchor="middle" bold>{title}</Label>
      {children}
    </g>
  );
}

export function JointMovements() {
  return (
    <Figure
      viewBox="0 0 600 400"
      title="Mouvements articulaires : flexion, extension, abduction, adduction, rotations, pronation, supination, circumduction"
      caption="Les grands mouvements articulaires (position de départ en pâle, position atteinte en plein)"
    >
      {/* flexion / extension du coude */}
      <Panel x={5} y={5} title="Flexion / Extension">
        <line x1="60" y1="40" x2="60" y2="112" {...LIMB} />
        <line x1="60" y1="112" x2="60" y2="176" {...GHOST} />
        <line x1="60" y1="112" x2="128" y2="88" {...LIMB} />
        <path d="M60 176 A64 64 0 0 0 128 88" fill="none" stroke={C.blue} strokeWidth="2" markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
        <Label x="132" y="84" color={C.blue} bold>Flexion</Label>
        <Label x="80" y="184" color={C.blue} bold>Extension</Label>
      </Panel>

      {/* abduction / adduction */}
      <Panel x={205} y={5} title="Abduction / Adduction">
        <line x1="60" y1="36" x2="60" y2="170" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="5 4" />
        <Label x="68" y="184" color={C.grey}>ligne médiane</Label>
        <line x1="66" y1="56" x2="66" y2="130" {...GHOST} />
        <line x1="66" y1="56" x2="136" y2="96" {...LIMB} />
        <path d="M66 136 A80 80 0 0 0 140 100" fill="none" stroke={C.red} strokeWidth="2" markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
        <Label x="112" y="72" color={C.red} bold>Abduction</Label>
        <Label x="80" y="158" color={C.red} bold>Adduction</Label>
      </Panel>

      {/* rotations médiale / latérale (vue de dessus) */}
      <Panel x={405} y={5} title="Rotation méd. / lat.">
        <line x1="30" y1="34" x2="30" y2="176" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="5 4" />
        <Label x="36" y="46" color={C.grey}>ligne médiane</Label>
        <circle cx="105" cy="130" r="14" fill={C.skin} stroke="#b98c68" />
        <line x1="105" y1="130" x2="105" y2="74" {...GHOST} />
        <line x1="105" y1="130" x2="66" y2="86" {...LIMB} />
        <line x1="105" y1="130" x2="144" y2="86" {...LIMB} />
        <path d="M66 86 A56 56 0 0 1 144 86" fill="none" stroke={C.green} strokeWidth="2" markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
        <Label x="58" y="70" anchor="middle" color={C.green} bold>Médiale</Label>
        <Label x="152" y="70" anchor="middle" color={C.green} bold>Latérale</Label>
        <Label x="105" y="176" anchor="middle" color={C.grey}>vue de dessus</Label>
      </Panel>

      {/* pronation / supination */}
      <Panel x={105} y={205} title="Supination / Pronation">
        <line x1="42" y1="42" x2="42" y2="120" {...LIMB} strokeWidth="8" stroke={C.blue} />
        <line x1="70" y1="42" x2="70" y2="120" {...LIMB} strokeWidth="8" stroke={C.red} />
        <Label x="56" y="146" anchor="middle" bold>Supination</Label>
        <Label x="56" y="162" anchor="middle" color={C.grey}>paume ↑</Label>
        <line x1="120" y1="42" x2="150" y2="120" {...LIMB} strokeWidth="8" stroke={C.blue} />
        <line x1="150" y1="42" x2="120" y2="120" {...LIMB} strokeWidth="8" stroke={C.red} />
        <Label x="135" y="146" anchor="middle" bold>Pronation</Label>
        <Label x="135" y="162" anchor="middle" color={C.grey}>paume ↓</Label>
        <Label x="42" y="36" anchor="middle" color={C.blue} bold>R</Label>
        <Label x="70" y="36" anchor="middle" color={C.red} bold>U</Label>
        <Label x="120" y="36" anchor="middle" color={C.blue} bold>R</Label>
        <Label x="150" y="36" anchor="middle" color={C.red} bold>U</Label>
        <Label x="95" y="182" anchor="middle" color={C.grey}>R = radius · U = ulna</Label>
      </Panel>

      {/* circumduction */}
      <Panel x={305} y={205} title="Circumduction">
        <ellipse cx="95" cy="140" rx="56" ry="16" fill={C.violet} fillOpacity="0.15" stroke={C.violet} strokeWidth="2" strokeDasharray="5 4" />
        <line x1="95" y1="52" x2="45" y2="138" stroke={C.violet} strokeOpacity="0.4" strokeWidth="2" />
        <line x1="95" y1="52" x2="145" y2="138" stroke={C.violet} strokeOpacity="0.4" strokeWidth="2" />
        <line x1="95" y1="52" x2="128" y2="152" {...LIMB} />
        <path d="M60 130 A56 16 0 0 0 132 152" fill="none" stroke={C.violet} strokeWidth="2.5" className="fig-flow" markerEnd="url(#fig-arrow)" />
        <circle cx="95" cy="52" r="6" fill="currentColor" />
        <Label x="95" y="176" anchor="middle" color={C.violet} bold>Mouvement conique</Label>
      </Panel>
    </Figure>
  );
}

// ─── 4. Reliefs osseux ───────────────────────────────────────────────────
export function BoneLandmarks() {
  const leader = { stroke: "currentColor", strokeOpacity: 0.5, strokeWidth: 1 } as const;
  return (
    <Figure
      viewBox="0 0 680 420"
      title="Terminologie descriptive des reliefs osseux sur un os long"
      caption="Reliefs d'un os long (schéma) : tête, col, tubercule, diaphyse, fosse, condyle, épicondyle, foramen, sillon"
    >
      <g fill="#eadfc8" stroke="#a78c5b" strokeWidth="2">
        {/* diaphyse */}
        <rect x="270" y="110" width="60" height="200" />
        {/* épiphyse proximale */}
        <path d="M262,110 q0,-40 38,-40 q40,0 46,40 z" />
        <circle cx="336" cy="78" r="30" />
        {/* épiphyse distale */}
        <path d="M262,310 h76 q22,0 22,30 q0,34 -32,34 h-60 q-32,0 -32,-34 q0,-30 26,-30z" />
      </g>
      {/* détails */}
      <ellipse cx="300" cy="352" rx="14" ry="10" fill="#cdbb95" stroke="#a78c5b" />
      <path d="M296,140 q-6,60 4,120" fill="none" stroke="#a78c5b" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="316" cy="215" rx="6" ry="4" fill="#5d4a2a" />
      <path d="M262,110 l-16,10 l4,16 l16,-6z" fill="#eadfc8" stroke="#a78c5b" strokeWidth="2" />
      <ellipse cx="253" cy="338" rx="12" ry="10" fill="#eadfc8" stroke="#a78c5b" strokeWidth="2" />

      {/* légendes à droite */}
      <line x1="362" y1="70" x2="420" y2="50" {...leader} />
      <Label x="424" y="54" bold>Tête</Label>
      <Label x="424" y="70" color={C.grey}>extrémité articulaire arrondie</Label>

      <line x1="332" y1="108" x2="420" y2="108" {...leader} />
      <Label x="424" y="112" bold>Col</Label>
      <Label x="424" y="128" color={C.grey}>entre tête et diaphyse</Label>

      <line x1="330" y1="200" x2="420" y2="180" {...leader} />
      <Label x="424" y="184" bold>Diaphyse (corps)</Label>
      <Label x="424" y="200" color={C.grey}>portion longue et rectiligne</Label>

      <line x1="322" y1="215" x2="420" y2="240" {...leader} />
      <Label x="424" y="244" bold>Foramen</Label>
      <Label x="424" y="260" color={C.grey}>orifice : vaisseaux / nerfs</Label>

      <line x1="340" y1="330" x2="420" y2="320" {...leader} />
      <Label x="424" y="324" bold>Épiphyse distale</Label>

      <line x1="314" y1="352" x2="420" y2="370" {...leader} />
      <Label x="424" y="374" bold>Fosse</Label>
      <Label x="424" y="390" color={C.grey}>dépression large, peu profonde</Label>

      {/* légendes à gauche */}
      <line x1="252" y1="122" x2="160" y2="110" {...leader} />
      <Label x="156" y="114" anchor="end" bold>Tubercule</Label>
      <Label x="156" y="130" anchor="end" color={C.grey}>petite éminence rugueuse</Label>

      <line x1="298" y1="180" x2="160" y2="200" {...leader} />
      <Label x="156" y="204" anchor="end" bold>Sillon / gouttière</Label>
      <Label x="156" y="220" anchor="end" color={C.grey}>dépression longue</Label>

      <line x1="242" y1="338" x2="160" y2="330" {...leader} />
      <Label x="156" y="334" anchor="end" bold>Épicondyle</Label>
      <Label x="156" y="350" anchor="end" color={C.grey}>saillie non articulaire</Label>

      <line x1="296" y1="374" x2="160" y2="390" {...leader} />
      <Label x="156" y="394" anchor="end" bold>Condyle</Label>
      <Label x="156" y="410" anchor="end" color={C.grey}>surface articulaire arrondie</Label>
    </Figure>
  );
}
