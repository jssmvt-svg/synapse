import { useLang } from "../i18n";

type Group = {
  key: string;
  title: string;
  color: string;
  codes: string[];
};

const GROUPS: Group[] = [
  { key: "aliphatic", title: "Aliphatiques", color: "#e29a2d", codes: ["Gly", "Ala", "Val", "Leu", "Ile", "Met", "Pro"] },
  { key: "aromatic", title: "Aromatiques", color: "#8d62d9", codes: ["Phe", "Tyr", "Trp"] },
  { key: "acid", title: "Acides", color: "#d65262", codes: ["Asp", "Glu"] },
  { key: "polar", title: "Polaires non chargés", color: "#2499c7", codes: ["Ser", "Thr", "Cys", "Asn", "Gln"] },
  { key: "basic", title: "Basiques", color: "#4e64ce", codes: ["Lys", "Arg", "His"] },
];

const NAMES: Record<string, { short: string; name: string; note: string }> = {
  Gly: { short: "G", name: "Glycine", note: "R = H" },
  Ala: { short: "A", name: "Alanine", note: "R = CH₃" },
  Val: { short: "V", name: "Valine", note: "R = CH(CH₃)₂" },
  Leu: { short: "L", name: "Leucine", note: "R = CH₂CH(CH₃)₂" },
  Ile: { short: "I", name: "Isoleucine", note: "R = CH(CH₃)CH₂CH₃" },
  Met: { short: "M", name: "Méthionine", note: "R = CH₂CH₂SCH₃" },
  Pro: { short: "P", name: "Proline", note: "cycle pyrrolidine" },
  Phe: { short: "F", name: "Phénylalanine", note: "R = CH₂–phényle" },
  Tyr: { short: "Y", name: "Tyrosine", note: "phényle–OH" },
  Trp: { short: "W", name: "Tryptophane", note: "R = CH₂–indole" },
  Ser: { short: "S", name: "Sérine", note: "R = CH₂OH" },
  Thr: { short: "T", name: "Thréonine", note: "R = CH(OH)CH₃" },
  Cys: { short: "C", name: "Cystéine", note: "R = CH₂SH" },
  Asn: { short: "N", name: "Asparagine", note: "R = CH₂CONH₂" },
  Gln: { short: "Q", name: "Glutamine", note: "R = CH₂CH₂CONH₂" },
  Asp: { short: "D", name: "Acide aspartique", note: "R = CH₂COOH" },
  Glu: { short: "E", name: "Acide glutamique", note: "R = CH₂CH₂COOH" },
  Lys: { short: "K", name: "Lysine", note: "R = (CH₂)₄NH₂" },
  Arg: { short: "R", name: "Arginine", note: "guanidinium" },
  His: { short: "H", name: "Histidine", note: "imidazole" },
};

function Bond({ x1, y1, x2, y2, color = "#26344b", double = false }: { x1: number; y1: number; x2: number; y2: number; color?: string; double?: boolean }) {
  if (!double) return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeLinecap="round" />;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy) || 1;
  const ox = (-dy / length) * 2.4;
  const oy = (dx / length) * 2.4;
  return (
    <g stroke={color} strokeWidth="1.7" strokeLinecap="round">
      <line x1={x1 + ox} y1={y1 + oy} x2={x2 + ox} y2={y2 + oy} />
      <line x1={x1 - ox} y1={y1 - oy} x2={x2 - ox} y2={y2 - oy} />
    </g>
  );
}

function Label({ x, y, children, color = "#26344b", size = 12, weight = 600 }: { x: number; y: number; children: string; color?: string; size?: number; weight?: number }) {
  return <text x={x} y={y} fill={color} fontSize={size} fontWeight={weight} textAnchor="middle" dominantBaseline="middle">{children}</text>;
}

function Ring({ x, y, kind, color }: { x: number; y: number; kind: "phenyl" | "imidazole" | "indole"; color: string }) {
  if (kind === "phenyl") {
    const points = `${x},${y - 27} ${x + 24},${y - 13} ${x + 24},${y + 14} ${x},${y + 28} ${x - 24},${y + 14} ${x - 24},${y - 13}`;
    return (
      <g>
        <polygon points={points} fill={`${color}18`} stroke={color} strokeWidth="2" />
        <Bond x1={x - 15} y1={y - 18} x2={x + 9} y2={y - 18} color={color} double />
        <Bond x1={x + 15} y1={y - 5} x2={x + 15} y2={y + 10} color={color} double />
        <Bond x1={x - 15} y1={y + 18} x2={x - 3} y2={y + 25} color={color} double />
      </g>
    );
  }
  if (kind === "imidazole") {
    const points = `${x},${y - 24} ${x + 24},${y - 8} ${x + 15},${y + 21} ${x - 15},${y + 21} ${x - 24},${y - 8}`;
    return (
      <g>
        <polygon points={points} fill={`${color}18`} stroke={color} strokeWidth="2" />
        <Bond x1={x - 12} y1={y - 18} x2={x + 9} y2={y - 12} color={color} double />
        <Bond x1={x + 16} y1={y + 5} x2={x + 9} y2={y + 18} color={color} double />
        <Label x={x - 10} y={y + 13} color={color} size={11}>N</Label>
        <Label x={x + 8} y={y - 13} color={color} size={11}>N</Label>
      </g>
    );
  }
  return (
    <g>
      <polygon points={`${x - 31},${y - 13} ${x - 7},${y - 27} ${x + 17},${y - 13} ${x + 17},${y + 14} ${x - 7},${y + 28} ${x - 31},${y + 14}`} fill={`${color}18`} stroke={color} strokeWidth="2" />
      <polygon points={`${x + 17},${y - 13} ${x + 39},${y - 4} ${x + 39},${y + 18} ${x + 17},${y + 28}`} fill={`${color}10`} stroke={color} strokeWidth="2" />
      <Bond x1={x - 23} y1={y - 17} x2={x - 8} y2={y - 22} color={color} double />
      <Bond x1={x - 31} y1={y + 4} x2={x - 31} y2={y + 13} color={color} double />
      <Bond x1={x + 26} y1={y + 0} x2={x + 26} y2={y + 16} color={color} double />
      <Label x={x - 7} y={y + 15} color={color} size={11}>N–H</Label>
    </g>
  );
}

function SideChain({ code, color }: { code: string; color: string }) {
  const atom = (x: number, y: number, label: string, atomColor = "#26344b") => <Label x={x} y={y} color={atomColor}>{label}</Label>;
  const terminal = (x: number, y: number, label: string) => <Label x={x} y={y} color={color} size={11}>{label}</Label>;
  switch (code) {
    case "Gly":
      return <><Bond x1={105} y1={52} x2={105} y2={84} color={color} />{terminal(105, 95, "H")}</>;
    case "Ala":
      return <><Bond x1={105} y1={52} x2={105} y2={102} color={color} />{atom(105, 112, "C", color)}<Bond x1={105} y1={122} x2={82} y2={142} color={color} />{terminal(75, 150, "H₃C")}<Bond x1={105} y1={122} x2={128} y2={142} color={color} />{terminal(135, 150, "H₃C")}<Bond x1={105} y1={122} x2={105} y2={150} color={color} />{terminal(105, 160, "H")}</>;
    case "Val":
      return <><Bond x1={105} y1={52} x2={105} y2={103} color={color} />{atom(105, 113, "CH")}<Bond x1={93} y1={119} x2={70} y2={140} color={color} />{terminal(60, 150, "CH₃")}<Bond x1={117} y1={119} x2={140} y2={140} color={color} />{terminal(150, 150, "CH₃")}</>;
    case "Leu":
      return <><Bond x1={105} y1={52} x2={105} y2={92} color={color} />{atom(105, 102, "CH₂")}<Bond x1={105} y1={113} x2={105} y2={128} color={color} />{atom(105, 137, "CH")}<Bond x1={93} y1={143} x2={70} y2={158} color={color} />{terminal(59, 164, "CH₃")}<Bond x1={117} y1={143} x2={140} y2={158} color={color} />{terminal(151, 164, "CH₃")}</>;
    case "Ile":
      return <><Bond x1={105} y1={52} x2={105} y2={92} color={color} />{atom(105, 102, "CH")}<Bond x1={94} y1={108} x2={72} y2={126} color={color} />{terminal(61, 133, "CH₃")}<Bond x1={116} y1={108} x2={138} y2={126} color={color} />{atom(145, 136, "CH₂")}<Bond x1={157} y1={142} x2={180} y2={157} color={color} />{terminal(190, 164, "CH₃")}</>;
    case "Met":
      return <><Bond x1={105} y1={52} x2={105} y2={88} color={color} />{atom(105, 98, "CH₂")}<Bond x1={117} y1={104} x2={145} y2={104} color={color} />{atom(157, 104, "CH₂")}<Bond x1={169} y1={104} x2={195} y2={104} color={color} />{atom(207, 104, "S", color)}<Bond x1={219} y1={104} x2={245} y2={104} color={color} />{terminal(257, 104, "CH₃")}</>;
    case "Ser":
      return <><Bond x1={105} y1={52} x2={105} y2={100} color={color} />{atom(105, 111, "CH₂")}<Bond x1={117} y1={118} x2={145} y2={118} color={color} />{atom(157, 118, "O", color)}<Bond x1={169} y1={118} x2={195} y2={118} color={color} />{terminal(207, 118, "H")}</>;
    case "Thr":
      return <><Bond x1={105} y1={52} x2={105} y2={99} color={color} />{atom(105, 109, "CH")}<Bond x1={94} y1={114} x2={72} y2={134} color={color} />{atom(61, 142, "O", color)}<Bond x1={50} y1={142} x2={30} y2={142} color={color} />{terminal(20, 142, "H")}<Bond x1={116} y1={114} x2={140} y2={134} color={color} />{terminal(151, 142, "CH₃")}</>;
    case "Cys":
      return <><Bond x1={105} y1={52} x2={105} y2={98} color={color} />{atom(105, 108, "CH₂")}<Bond x1={117} y1={114} x2={145} y2={114} color={color} />{atom(157, 114, "S", color)}<Bond x1={169} y1={114} x2={195} y2={114} color={color} />{terminal(207, 114, "H")}</>;
    case "Asp":
    case "Glu": {
      const second = code === "Glu";
      return <><Bond x1={105} y1={52} x2={105} y2={second ? 84 : 100} color={color} />{second && atom(105, 94, "CH₂")} {second && <Bond x1={105} y1={105} x2={105} y2={116} color={color} />}{atom(105, second ? 128 : 111, "CH₂")}<Bond x1={117} y1={second ? 134 : 117} x2={150} y2={second ? 134 : 117} color={color} />{atom(162, second ? 134 : 117, "C", color)}<Bond x1={162} y1={second ? 122 : 105} x2={162} y2={second ? 105 : 88} color={color} double /><Label x={162} y={second ? 96 : 79} color={color}>O</Label><Bond x1={174} y1={second ? 134 : 117} x2={201} y2={second ? 134 : 117} color={color} />{atom(213, second ? 134 : 117, "O", color)}<Bond x1={225} y1={second ? 134 : 117} x2={246} y2={second ? 134 : 117} color={color} />{terminal(258, second ? 134 : 117, "H")}</>;
    }
    case "Asn":
    case "Gln": {
      const second = code === "Gln";
      return <><Bond x1={105} y1={52} x2={105} y2={second ? 84 : 100} color={color} />{second && atom(105, 94, "CH₂")} {second && <Bond x1={105} y1={105} x2={105} y2={116} color={color} />}{atom(105, second ? 128 : 111, "CH₂")}<Bond x1={117} y1={second ? 134 : 117} x2={150} y2={second ? 134 : 117} color={color} />{atom(162, second ? 134 : 117, "C", color)}<Bond x1={162} y1={second ? 122 : 105} x2={162} y2={second ? 105 : 88} color={color} double /><Label x={162} y={second ? 79 : 79} color={color}>O</Label><Bond x1={174} y1={second ? 134 : 117} x2={204} y2={second ? 134 : 117} color={color} />{atom(216, second ? 134 : 117, "NH₂", color)}</>;
    }
    case "Lys":
      return <><Bond x1={105} y1={52} x2={105} y2={80} color={color} />{atom(105, 90, "CH₂")}<Bond x1={105} y1={99} x2={105} y2={108} color={color} />{atom(105, 118, "CH₂")}<Bond x1={105} y1={127} x2={105} y2={136} color={color} />{atom(105, 146, "CH₂")}<Bond x1={105} y1={155} x2={105} y2={164} color={color} />{terminal(105, 174, "CH₂–NH₂")}</>;
    case "Arg":
      return <><Bond x1={105} y1={52} x2={105} y2={78} color={color} />{atom(105, 88, "CH₂")}<Bond x1={105} y1={97} x2={105} y2={106} color={color} />{atom(105, 116, "CH₂")}<Bond x1={105} y1={125} x2={105} y2={134} color={color} />{atom(105, 144, "CH₂")}<Bond x1={117} y1={144} x2={147} y2={144} color={color} />{atom(159, 144, "NH")}<Bond x1={171} y1={144} x2={196} y2={144} color={color} />{atom(208, 144, "C", color)}<Bond x1={208} y1={132} x2={208} y2={112} color={color} double />{terminal(208, 101, "NH₂")}<Bond x1={220} y1={144} x2={248} y2={126} color={color} />{terminal(259, 119, "NH₂⁺")}</>;
    case "His":
      return <><Bond x1={105} y1={52} x2={105} y2={103} color={color} />{atom(105, 113, "CH₂")}<Bond x1={117} y1={113} x2={151} y2={113} color={color} /><Ring x={180} y={113} kind="imidazole" color={color} /></>;
    case "Phe":
    case "Tyr":
      return <><Bond x1={105} y1={52} x2={105} y2={103} color={color} />{atom(105, 113, "CH₂")}<Bond x1={117} y1={113} x2={145} y2={113} color={color} /><Ring x={180} y={113} kind="phenyl" color={color} />{code === "Tyr" && <><Bond x1={204} y1={113} x2={230} y2={113} color={color} />{atom(242, 113, "O", color)}<Bond x1={254} y1={113} x2={276} y2={113} color={color} />{terminal(288, 113, "H")}</>}</>;
    case "Trp":
      return <><Bond x1={105} y1={52} x2={105} y2={103} color={color} />{atom(105, 113, "CH₂")}<Bond x1={117} y1={113} x2={145} y2={113} color={color} /><Ring x={176} y={113} kind="indole" color={color} /></>;
    case "Pro":
      return <><Bond x1={105} y1={52} x2={105} y2={72} color={color} />{atom(105, 82, "CH₂")}<Bond x1={105} y1={91} x2={105} y2={106} color={color} />{atom(105, 116, "CH₂")}<Bond x1={94} y1={122} x2={70} y2={138} color={color} />{atom(60, 145, "CH₂")}<Bond x1={51} y1={145} x2={35} y2={119} color={color} /><Bond x1={35} y1={119} x2={35} y2={91} color={color} /><Bond x1={35} y1={91} x2={44} y2={82} color={color} /><Label x={57} y={75} color={color}>NH</Label><Bond x1={69} y1={78} x2={94} y2={60} color={color} /></>;
    default:
      return null;
  }
}

function Molecule({ code, color, name }: { code: string; color: string; name: string }) {
  return (
    <svg className="amino-molecule" viewBox="0 0 330 205" role="img" aria-label={`Structure développée de ${name}`}>
      <title>{`Structure développée de ${name}`}</title>
      <desc>Squelette H₂N–CH(R)–COOH et groupement latéral dessiné avec ses atomes et liaisons.</desc>
      <g fill="none">
        <Bond x1={32} y1={44} x2={88} y2={44} />
        <Bond x1={122} y1={44} x2={177} y2={44} />
        <Bond x1={105} y1={35} x2={105} y2={14} />
        <Bond x1={193} y1={44} x2={224} y2={44} />
        <Bond x1={201} y1={34} x2={201} y2={12} double />
        <Bond x1={105} y1={50} x2={105} y2={52} color={color} />
      </g>
      <Label x={18} y={44} color="#26344b" size={13}>H₂N</Label>
      <Label x={105} y={44} color="#26344b" size={12}>Cα</Label>
      <Label x={105} y={5} color="#26344b" size={11}>H</Label>
      <Label x={201} y={5} color="#26344b" size={12}>O</Label>
      <Label x={190} y={44} color="#26344b" size={11}>C</Label>
      <Label x={242} y={44} color="#26344b" size={12}>OH</Label>
      <SideChain code={code} color={color} />
    </svg>
  );
}

export function AminoAcidGallery() {
  const { lang } = useLang();
  const isEnglish = lang !== "fr";
  return (
    <section className="amino-gallery learning-panel" aria-labelledby="amino-gallery-title">
      <div className="amino-gallery-heading">
        <div>
          <p className="eyebrow">{isEnglish ? "ORIGINAL SCHEMATIC" : "SCHÉMA ORIGINAL"}</p>
          <h2 id="amino-gallery-title">{isEnglish ? "The 20 proteinogenic amino acids" : "Les 20 acides aminés protéinogènes"}</h2>
          <p>{isEnglish ? "Developed side-chain structures, grouped by chemical behavior. The backbone is shown in the neutral H₂N–CH(R)–COOH form." : "Structures développées des chaînes latérales, regroupées par comportement chimique. Le squelette est présenté sous forme neutre H₂N–CH(R)–COOH."}</p>
        </div>
        <div className="amino-legend" aria-label={isEnglish ? "Color legend" : "Légende des couleurs"}>
          {GROUPS.map((group) => <span key={group.key}><i style={{ backgroundColor: group.color }} />{isEnglish && group.key === "polar" ? "Polar, uncharged" : isEnglish && group.key === "basic" ? "Basic" : isEnglish && group.key === "acid" ? "Acidic" : isEnglish && group.key === "aliphatic" ? "Aliphatic" : isEnglish && group.key === "aromatic" ? "Aromatic" : group.title}</span>)}
        </div>
      </div>
      <p className="amino-gallery-note">{isEnglish ? "Each panel draws the bonds and key atoms of R; Tyr is placed with aromatics and visibly retains its phenolic OH. Proline is the cyclic exception." : "Chaque vignette dessine les liaisons et les atomes clés de R ; Tyr est classée parmi les aromatiques tout en montrant son OH phénolique. La proline est l’exception cyclique."}</p>
      <div className="amino-groups">
        {GROUPS.map((group) => (
          <section key={group.key} className="amino-group" style={{ "--group-color": group.color } as React.CSSProperties}>
            <div className="amino-group-title"><span className="amino-group-dot" /> <h3>{isEnglish && group.key === "polar" ? "Polar, uncharged" : isEnglish && group.key === "basic" ? "Basic" : isEnglish && group.key === "acid" ? "Acidic" : isEnglish && group.key === "aliphatic" ? "Aliphatic" : isEnglish && group.key === "aromatic" ? "Aromatic" : group.title}</h3><span>{group.codes.length}</span></div>
            <div className="amino-grid">
              {group.codes.map((code) => {
                const item = NAMES[code];
                return <article className="amino-card" key={code}><div className="amino-card-label"><strong>{item.short}</strong><span>{item.name}</span></div><Molecule code={code} color={group.color} name={item.name} /><small>{item.note}</small></article>;
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}