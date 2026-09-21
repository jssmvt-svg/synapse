import { useLang } from "../i18n";
import { Fragment, type CSSProperties, type ReactNode } from "react";

type Group = {
  key: string;
  title: string;
  color: string;
  cards: Card[];
};

type Card = {
  code: string;
  name: string;
  nameEn: string;
  note: string;
  formula?: string;
  kind: string;
};

const INK = "#26344b";

function Bond({
  x1,
  y1,
  x2,
  y2,
  color = INK,
  double = false,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  double?: boolean;
  dashed?: boolean;
}) {
  if (!double) {
    return (
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={dashed ? "4 4" : undefined}
      />
    );
  }
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy) || 1;
  const ox = (-dy / length) * 2.3;
  const oy = (dx / length) * 2.3;
  return (
    <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
      <line x1={x1 + ox} y1={y1 + oy} x2={x2 + ox} y2={y2 + oy} />
      <line x1={x1 - ox} y1={y1 - oy} x2={x2 - ox} y2={y2 - oy} />
    </g>
  );
}

function Label({
  x,
  y,
  children,
  color = INK,
  size = 11,
  weight = 650,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: string;
  color?: string;
  size?: number;
  weight?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fill={color}
      fontSize={size}
      fontWeight={weight}
      textAnchor={anchor}
      dominantBaseline="middle"
    >
      {children}
    </text>
  );
}

function CardHeader({ card, color, english }: { card: Card; color: string; english: boolean }) {
  return (
    <div className="chem-card-label">
      <strong style={{ color }}>{card.code}</strong>
      <span>{english ? card.nameEn : card.name}</span>
    </div>
  );
}

function Ring({
  x,
  y,
  size = 25,
  color,
  sides = 6,
  hetero,
  aromatic = false,
}: {
  x: number;
  y: number;
  size?: number;
  color: string;
  sides?: 5 | 6;
  hetero?: string;
  aromatic?: boolean;
}) {
  const points = Array.from({ length: sides }, (_, index) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / sides;
    return `${x + Math.cos(angle) * size},${y + Math.sin(angle) * size}`;
  }).join(" ");
  return (
    <g>
      <polygon points={points} fill={`${color}16`} stroke={color} strokeWidth="2" />
      {aromatic && sides === 6 ? (
        <>
          <Bond x1={x - 13} y1={y - 19} x2={x + 13} y2={y - 19} color={color} double />
          <Bond x1={x + 21} y1={y - 2} x2={x + 12} y2={y + 19} color={color} double />
          <Bond x1={x - 13} y1={y + 19} x2={x - 21} y2={y - 2} color={color} double />
        </>
      ) : aromatic ? (
        <>
          <Bond x1={x - 14} y1={y - 14} x2={x + 10} y2={y - 19} color={color} double />
          <Bond x1={x + 20} y1={y - 3} x2={x + 8} y2={y + 18} color={color} double />
        </>
      ) : null}
      {hetero && <Label x={x} y={y - size + 1} color={color} size={10}>{hetero}</Label>}
    </g>
  );
}

function SugarStructure({ card, color }: { card: Card; color: string }) {
  if (card.kind === "fructose") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label={`Structure simplifiée du ${card.name}`}>
        <title>{`Structure simplifiée du ${card.name}`}</title>
        <desc>Cycle furanose avec oxygène du cycle et groupes hydroxyle caractéristiques.</desc>
        <Ring x={145} y={91} color={color} sides={5} hetero="O" />
        <Bond x1={124} y1={71} x2={83} y2={47} color={color} />
        <Label x={62} y={42} color={color}>CH₂OH</Label>
        <Bond x1={166} y1={71} x2={207} y2={47} color={color} />
        <Label x={222} y={42} color={color}>OH</Label>
        <Bond x1={165} y1={111} x2={205} y2={140} color={color} />
        <Label x={220} y={147} color={color}>CH₂OH</Label>
        <Bond x1={124} y1={111} x2={84} y2={140} color={color} />
        <Label x={69} y={147} color={color}>OH</Label>
        <Label x={145} y={173} color={INK} size={10}>cycle à 5 — cétose</Label>
      </svg>
    );
  }
  if (card.kind === "ribose" || card.kind === "deoxyribose") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label={`Structure simplifiée du ${card.name}`}>
        <title>{`Structure simplifiée du ${card.name}`}</title>
        <desc>Cycle furanose à cinq atomes, avec hydroxyles et groupement CH₂OH.</desc>
        <Ring x={147} y={91} color={color} sides={5} hetero="O" />
        <Bond x1={126} y1={72} x2={84} y2={46} color={color} />
        <Label x={61} y={41} color={color}>CH₂OH</Label>
        <Bond x1={169} y1={70} x2={212} y2={47} color={color} />
        <Label x={226} y={42} color={color}>{card.kind === "deoxyribose" ? "H" : "OH"}</Label>
        <Bond x1={169} y1={112} x2={211} y2={139} color={color} />
        <Label x={226} y={146} color={color}>OH</Label>
        <Bond x1={126} y1={112} x2={84} y2={139} color={color} />
        <Label x={68} y={146} color={color}>{card.kind === "deoxyribose" ? "H" : "OH"}</Label>
        <Label x={147} y={173} color={INK} size={10}>cycle à 5 — pentose</Label>
      </svg>
    );
  }
  if (card.kind === "disaccharide") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label={`Structure simplifiée du ${card.name}`}>
        <title>{`Structure simplifiée du ${card.name}`}</title>
        <desc>Deux cycles osidiques reliés par une liaison glycosidique.</desc>
        <Ring x={91} y={88} size={27} color={color} hetero="O" />
        <Ring x={239} y={88} size={27} color={color} hetero="O" />
        <Bond x1={117} y1={88} x2={145} y2={88} color={color} />
        <Label x={165} y={88} color={color} size={12}>O</Label>
        <Bond x1={183} y1={88} x2={212} y2={88} color={color} />
        <Label x={91} y={147} color={INK} size={10}>{card.code === "S" ? "glucose" : card.code === "L" ? "galactose" : "glucose"}</Label>
        <Label x={239} y={147} color={INK} size={10}>{card.code === "S" ? "fructose" : "glucose"}</Label>
        <Label x={165} y={168} color={color} size={10}>{card.code === "S" ? "α1↔β2" : card.code === "L" ? "β1→4" : "α1→4"}</Label>
      </svg>
    );
  }
  const isGalactose = card.kind === "galactose";
  return (
    <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label={`Structure simplifiée du ${card.name}`}>
      <title>{`Structure simplifiée du ${card.name}`}</title>
      <desc>Cycle pyranose avec oxygène du cycle et groupes hydroxyle caractéristiques.</desc>
      <Ring x={145} y={88} color={color} hetero="O" />
      <Bond x1={124} y1={68} x2={82} y2={42} color={color} />
      <Label x={57} y={37} color={color}>CH₂OH</Label>
      <Bond x1={166} y1={68} x2={208} y2={42} color={color} />
      <Label x={223} y={37} color={color}>OH</Label>
      <Bond x1={166} y1={109} x2={209} y2={137} color={color} />
      <Label x={224} y={144} color={color}>OH</Label>
      <Bond x1={124} y1={109} x2={82} y2={137} color={color} />
      <Label x={65} y={144} color={color}>{isGalactose ? "OH ↑" : "OH ↓"}</Label>
      <Label x={145} y={170} color={INK} size={10}>cycle à 6 — aldose</Label>
    </svg>
  );
}

function PolysaccharideStructure({ card, color }: { card: Card; color: string }) {
  const branch = card.kind === "glycogen";
  const cellulose = card.kind === "cellulose";
  const centers = [54, 105, 156, 207, 258];
  return (
    <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label={`Chaîne simplifiée de ${card.name}`}>
      <title>{`Chaîne simplifiée de ${card.name}`}</title>
      <desc>Chaîne de motifs glucidiques répétitifs montrant l'orientation des liaisons et les ramifications éventuelles.</desc>
      {centers.map((center, index) => (
        <g key={center}>
          {index > 0 && <Bond x1={centers[index - 1] + 22} y1={88} x2={center - 22} y2={88} color={color} />}
          <Ring x={center} y={88} size={23} color={color} hetero="O" />
        </g>
      ))}
      {branch && (
        <>
          <Bond x1={156} y1={65} x2={156} y2={33} color={color} />
          <Ring x={156} y={20} size={16} color={color} hetero="O" />
          <Bond x1={207} y1={111} x2={235} y2={140} color={color} />
          <Ring x={252} y={157} size={16} color={color} hetero="O" />
        </>
      )}
      <Label x={165} y={151} color={color} size={11}>{cellulose ? "β(1→4), chaîne linéaire" : branch ? "α(1→4) + α(1→6), ramifié" : "α(1→4), quelques α(1→6)"}</Label>
    </svg>
  );
}

const CARBOHYDRATE_GROUPS: Group[] = [
  {
    key: "mono",
    title: "Monosaccharides",
    color: "#e29a2d",
    cards: [
      { code: "Glc", name: "Glucose", nameEn: "Glucose", note: "Aldohexose · cycle pyranose", kind: "glucose" },
      { code: "Fru", name: "Fructose", nameEn: "Fructose", note: "Cétohexose · cycle furanose", kind: "fructose" },
      { code: "Gal", name: "Galactose", nameEn: "Galactose", note: "Épimère du glucose en C4", kind: "galactose" },
      { code: "Rib", name: "Ribose", nameEn: "Ribose", note: "Pentose de l’ARN · 2′-OH", kind: "ribose" },
      { code: "dRib", name: "Désoxyribose", nameEn: "Deoxyribose", note: "Pentose de l’ADN · 2′-H", kind: "deoxyribose" },
    ],
  },
  {
    key: "di",
    title: "Disaccharides",
    color: "#d65262",
    cards: [
      { code: "Suc", name: "Saccharose", nameEn: "Sucrose", note: "Glucose + fructose · α1↔β2", kind: "disaccharide" },
      { code: "Lac", name: "Lactose", nameEn: "Lactose", note: "Galactose + glucose · β1→4", kind: "disaccharide" },
      { code: "Mal", name: "Maltose", nameEn: "Maltose", note: "Glucose + glucose · α1→4", kind: "disaccharide" },
    ],
  },
  {
    key: "poly",
    title: "Polysaccharides",
    color: "#4e64ce",
    cards: [
      { code: "Am", name: "Amidon", nameEn: "Starch", note: "Réserve végétale · amylose + amylopectine", kind: "starch" },
      { code: "Gly", name: "Glycogène", nameEn: "Glycogen", note: "Réserve animale · très ramifié", kind: "glycogen" },
      { code: "Cel", name: "Cellulose", nameEn: "Cellulose", note: "Structure végétale · chaînes linéaires", kind: "cellulose" },
    ],
  },
];

function CarbohydrateCard({ card, color, english }: { card: Card; color: string; english: boolean }) {
  return (
    <article className="chem-card" style={{ "--group-color": color } as CSSProperties}>
      <CardHeader card={card} color={color} english={english} />
      {card.kind === "starch" || card.kind === "glycogen" || card.kind === "cellulose" ? (
        <PolysaccharideStructure card={card} color={color} />
      ) : (
        <SugarStructure card={card} color={color} />
      )}
      <small>{english ? card.note.replace("Chaîne", "Chain").replace("ramifié", "branched").replace("linéaire", "linear") : card.note}</small>
    </article>
  );
}

export function CarbohydrateGallery() {
  return (
    <ChemistryGallery
      id="carbohydrate-gallery"
      kicker="SCHÉMA ORIGINAL"
      title="Les glucides essentiels"
      titleEn="Essential carbohydrates"
      description="Cycles osidiques et liaisons caractéristiques des sucres étudiés en Biochimie S1."
      descriptionEn="Sugar rings and characteristic linkages from the Biochemistry S1 curriculum."
      note="Les polysaccharides sont volontairement représentés par leurs motifs répétitifs et leurs liaisons principales, sans détailler chaque unité."
      noteEn="Polysaccharides are intentionally shown through their repeating motifs and main linkages, without detailing every unit."
      groups={CARBOHYDRATE_GROUPS}
      renderCard={(card, color, english) => <CarbohydrateCard card={card} color={color} english={english} />}
    />
  );
}

function FattyAcid({ unsaturated, color }: { unsaturated: boolean; color: string }) {
  const points = unsaturated ? "56,110 91,110 119,91 147,110 182,110 218,110 260,110" : "56,110 91,110 126,110 161,110 196,110 231,110 266,110";
  return (
    <g>
      <Label x={35} y={110} color={color} anchor="end">COOH</Label>
      <Bond x1={45} y1={110} x2={56} y2={110} color={color} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {unsaturated && <Bond x1={119} y1={91} x2={147} y2={110} color={color} double />}
      <Label x={281} y={110} color={color} anchor="start">CH₃</Label>
      <Label x={165} y={151} color={INK} size={10}>{unsaturated ? "C18:1 · double liaison cis" : "C16:0 · aucune double liaison"}</Label>
    </g>
  );
}

function LipidStructure({ card, color }: { card: Card; color: string }) {
  if (card.kind === "palmitic" || card.kind === "oleic") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label={`Structure simplifiée de ${card.name}`}>
        <title>{`Structure simplifiée de ${card.name}`}</title>
        <desc>Chaîne hydrocarbonée terminée par un carboxyle, avec ou sans double liaison cis.</desc>
        <FattyAcid unsaturated={card.kind === "oleic"} color={color} />
      </svg>
    );
  }
  if (card.kind === "triglyceride") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée d’un triglycéride">
        <title>Structure simplifiée d’un triglycéride</title>
        <desc>Glycérol central estérifié par trois chaînes d’acides gras.</desc>
        <Label x={44} y={52} color={color} anchor="end">CH₂</Label>
        <Label x={44} y={95} color={color} anchor="end">CH</Label>
        <Label x={44} y={138} color={color} anchor="end">CH₂</Label>
        <Bond x1={54} y1={52} x2={84} y2={52} color={color} />
        <Bond x1={54} y1={95} x2={84} y2={95} color={color} />
        <Bond x1={54} y1={138} x2={84} y2={138} color={color} />
        {[52, 95, 138].map((y) => (
          <g key={y}>
            <Label x={98} y={y} color={color}>O</Label>
            <Bond x1={110} y1={y} x2={141} y2={y} color={color} />
            <Label x={153} y={y} color={color}>C=O</Label>
            <Bond x1={169} y1={y} x2={194} y2={y} color={color} />
            <Label x={236} y={y} color={INK} size={10}>chaîne R</Label>
          </g>
        ))}
        <Label x={165} y={171} color={color} size={10}>glycérol + 3 acides gras</Label>
      </svg>
    );
  }
  if (card.kind === "phospholipid") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée d’un phospholipide membranaire">
        <title>Structure simplifiée d’un phospholipide membranaire</title>
        <desc>Tête polaire phosphate et deux queues hydrophobes d’acides gras.</desc>
        <circle cx="237" cy="43" r="24" fill={`${color}22`} stroke={color} strokeWidth="2" />
        <Label x={237} y={43} color={color} size={10}>tête</Label>
        <Label x={237} y={57} color={color} size={9}>P⁻</Label>
        <Bond x1={216} y1={61} x2={178} y2={88} color={color} />
        <Bond x1={216} y1={72} x2={178} y2={126} color={color} />
        <Label x={163} y={88} color={color} anchor="end">O</Label>
        <Label x={163} y={126} color={color} anchor="end">O</Label>
        <polyline points="151,88 126,78 102,88 78,78 54,88 31,78" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <polyline points="151,126 126,116 102,126 78,116 54,126 31,116" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <Label x={248} y={126} color={INK} size={10}>glycérol</Label>
        <Label x={93} y={162} color={color} size={10}>2 queues hydrophobes</Label>
      </svg>
    );
  }
  return (
    <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée du cholestérol">
      <title>Structure simplifiée du cholestérol</title>
      <desc>Noyau stéroïdien à quatre cycles, hydroxyle polaire et chaîne latérale hydrocarbonée.</desc>
      <Ring x={73} y={91} size={25} color={color} sides={6} />
      <Ring x={119} y={91} size={25} color={color} sides={6} />
      <Ring x={165} y={91} size={25} color={color} sides={6} />
      <Ring x={207} y={102} size={22} color={color} sides={5} />
      <Bond x1={229} y1={94} x2={262} y2={76} color={color} />
      <polyline points="262,76 280,91 298,82" fill="none" stroke={color} strokeWidth="2" />
      <Bond x1={51} y1={72} x2={33} y2={48} color={color} />
      <Label x={26} y={38} color={color}>OH</Label>
      <Label x={151} y={164} color={color} size={10}>4 cycles stéroïdiens + chaîne C8</Label>
    </svg>
  );
}

const LIPID_GROUPS: Group[] = [
  {
    key: "fatty-acids",
    title: "Acides gras",
    color: "#e29a2d",
    cards: [
      { code: "16:0", name: "Acide palmitique", nameEn: "Palmitic acid", note: "Saturé · chaîne rectiligne", kind: "palmitic" },
      { code: "18:1", name: "Acide oléique", nameEn: "Oleic acid", note: "Insaturé cis · chaîne coudée", kind: "oleic" },
    ],
  },
  {
    key: "complex",
    title: "Lipides complexes",
    color: "#2499c7",
    cards: [
      { code: "TAG", name: "Triglycéride", nameEn: "Triglyceride", note: "Glycérol estérifié par 3 acides gras", kind: "triglyceride" },
      { code: "PL", name: "Phospholipide", nameEn: "Membrane phospholipid", note: "Tête polaire + 2 queues hydrophobes", kind: "phospholipid" },
    ],
  },
  {
    key: "sterols",
    title: "Stérols",
    color: "#8d62d9",
    cards: [
      { code: "Chol", name: "Cholestérol", nameEn: "Cholesterol", note: "Noyau stéroïdien · régulateur de fluidité", kind: "cholesterol" },
    ],
  },
];

function LipidCard({ card, color, english }: { card: Card; color: string; english: boolean }) {
  return (
    <article className="chem-card" style={{ "--group-color": color } as CSSProperties}>
      <CardHeader card={card} color={color} english={english} />
      <LipidStructure card={card} color={color} />
      <small>{english ? card.note.replace("Acide", "Acid").replace("Saturé", "Saturated").replace("Insaturé", "Unsaturated").replace("chaîne", "chain").replace("Tête", "Polar head").replace("Noyau", "Steroid") : card.note}</small>
    </article>
  );
}

export function LipidGallery() {
  return (
    <ChemistryGallery
      id="lipid-gallery"
      kicker="SCHÉMA ORIGINAL"
      title="Les lipides et membranes"
      titleEn="Lipids and membranes"
      description="Des chaînes d’acides gras aux architectures amphipathiques et au noyau stéroïdien."
      descriptionEn="From fatty-acid chains to amphipathic architectures and the steroid nucleus."
      note="Les queues hydrocarbonées sont condensées en zigzag pour rendre lisibles la saturation, le coude cis et l’organisation amphipathique."
      noteEn="Hydrocarbon tails are condensed into zigzags to make saturation, the cis kink, and amphipathic organization readable."
      groups={LIPID_GROUPS}
      renderCard={(card, color, english) => <LipidCard card={card} color={color} english={english} />}
    />
  );
}

function VitaminStructure({ card, color }: { card: Card; color: string }) {
  if (card.kind === "b1") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine B1">
        <title>Structure simplifiée de la vitamine B1</title>
        <desc>Noyau pyrimidine relié à un noyau thiazolium.</desc>
        <Ring x={93} y={91} size={29} color={color} hetero="N" aromatic />
        <Label x={77} y={101} color={color} size={9}>N</Label>
        <Bond x1={122} y1={91} x2={164} y2={91} color={color} />
        <Label x={183} y={91} color={color} size={10}>CH₂</Label>
        <Bond x1={201} y1={91} x2={220} y2={91} color={color} />
        <Ring x={251} y={91} size={27} color={color} sides={5} hetero="S⁺" aromatic />
        <Label x={93} y={155} color={color} size={10}>pyrimidine</Label>
        <Label x={251} y={155} color={color} size={10}>thiazolium</Label>
      </svg>
    );
  }
  if (card.kind === "b2") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine B2">
        <title>Structure simplifiée de la vitamine B2</title>
        <desc>Noyau isoalloxazine tricyclique relié à une chaîne ribitol.</desc>
        <Ring x={78} y={84} size={24} color={color} hetero="N" aromatic />
        <Ring x={125} y={84} size={24} color={color} hetero="N" aromatic />
        <Ring x={172} y={84} size={24} color={color} hetero="N" aromatic />
        <Bond x1={196} y1={84} x2={231} y2={84} color={color} />
        <polyline points="231,84 251,105 271,92 291,111" fill="none" stroke={color} strokeWidth="2" />
        <Label x={268} y={139} color={color} size={10}>ribitol</Label>
        <Label x={124} y={154} color={color} size={10}>isoalloxazine</Label>
      </svg>
    );
  }
  if (card.kind === "b3") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine B3">
        <title>Structure simplifiée de la vitamine B3</title>
        <desc>Cycle pyridine portant un carboxyle, précurseur du NAD.</desc>
        <Ring x={132} y={88} size={34} color={color} hetero="N" aromatic />
        <Bond x1={157} y1={112} x2={208} y2={140} color={color} />
        <Label x={235} y={148} color={color}>COOH</Label>
        <Label x={132} y={158} color={color} size={10}>pyridine</Label>
        <Label x={132} y={30} color={INK} size={10}>→ NAD⁺ / NADP⁺</Label>
      </svg>
    );
  }
  if (card.kind === "b5") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine B5">
        <title>Structure simplifiée de la vitamine B5</title>
        <desc>Acide pantoïque relié à une bêta-alanine et à un thiol terminal.</desc>
        <Label x={63} y={88} color={color}>OH</Label>
        <Bond x1={76} y1={88} x2={108} y2={88} color={color} />
        <Label x={125} y={88} color={color}>C(CH₃)₂</Label>
        <Bond x1={145} y1={88} x2={174} y2={88} color={color} />
        <Label x={191} y={88} color={color}>CH₂</Label>
        <Bond x1={208} y1={88} x2={238} y2={88} color={color} />
        <Label x={257} y={88} color={color}>CH₂</Label>
        <Bond x1={272} y1={88} x2={302} y2={88} color={color} />
        <Label x={315} y={88} color={color} anchor="start">SH</Label>
        <Label x={165} y={145} color={color} size={10}>pantoate + β-alanine</Label>
      </svg>
    );
  }
  if (card.kind === "b6") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine B6">
        <title>Structure simplifiée de la vitamine B6</title>
        <desc>Noyau pyridine substitué par des groupes hydroxyle, méthyle et hydroxyméthyle.</desc>
        <Ring x={145} y={88} size={34} color={color} hetero="N" aromatic />
        <Bond x1={120} y1={65} x2={77} y2={39} color={color} />
        <Label x={53} y={34} color={color}>OH</Label>
        <Bond x1={171} y1={65} x2={216} y2={39} color={color} />
        <Label x={237} y={34} color={color}>CH₂OH</Label>
        <Bond x1={171} y1={111} x2={216} y2={137} color={color} />
        <Label x={239} y={144} color={color}>CH₃</Label>
        <Label x={145} y={159} color={color} size={10}>pyridine — PLP actif</Label>
      </svg>
    );
  }
  if (card.kind === "b9") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine B9">
        <title>Structure simplifiée de la vitamine B9</title>
        <desc>Noyau ptéridine relié au PABA puis à un ou plusieurs glutamates.</desc>
        <Ring x={63} y={88} size={25} color={color} hetero="N" aromatic />
        <Ring x={106} y={88} size={25} color={color} hetero="N" aromatic />
        <Bond x1={131} y1={88} x2={158} y2={88} color={color} />
        <Label x={174} y={88} color={color} size={10}>PABA</Label>
        <Bond x1={194} y1={88} x2={220} y2={88} color={color} />
        <Label x={249} y={88} color={color}>Glu</Label>
        <Bond x1={263} y1={88} x2={291} y2={88} color={color} dashed />
        <Label x={308} y={88} color={color} anchor="start">Glu…</Label>
        <Label x={165} y={151} color={color} size={10}>ptéridine — acide folique</Label>
      </svg>
    );
  }
  if (card.kind === "b12") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine B12">
        <title>Structure simplifiée de la vitamine B12</title>
        <desc>Noyau corrine macrocyclique entourant un ion cobalt central.</desc>
        <circle cx="151" cy="88" r="57" fill={`${color}12`} stroke={color} strokeWidth="2" />
        <circle cx="151" cy="88" r="17" fill={`${color}28`} stroke={color} strokeWidth="2" />
        <Label x={151} y={88} color={color} size={13}>Co</Label>
        <Bond x1={151} y1={31} x2={151} y2={12} color={color} />
        <Label x={151} y={6} color={color} size={10}>CN</Label>
        <Bond x1={208} y1={88} x2={250} y2={88} color={color} />
        <Label x={273} y={88} color={color}>base</Label>
        <Label x={151} y={164} color={color} size={10}>noyau corrine</Label>
      </svg>
    );
  }
  return (
    <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine C">
      <title>Structure simplifiée de la vitamine C</title>
      <desc>Lactone à cinq chaînons riche en hydroxyles et système énediol réducteur.</desc>
      <Ring x={141} y={87} size={35} color={color} sides={5} hetero="O" />
      <Bond x1={117} y1={64} x2={75} y2={39} color={color} />
      <Label x={52} y={34} color={color}>OH</Label>
      <Bond x1={166} y1={64} x2={211} y2={39} color={color} double />
      <Label x={233} y={34} color={color}>O</Label>
      <Bond x1={166} y1={111} x2={211} y2={138} color={color} />
      <Label x={231} y={146} color={color}>OH</Label>
      <Label x={141} y={159} color={color} size={10}>lactone — C₆H₈O₆</Label>
    </svg>
  );
}

const WATER_SOLUBLE_GROUPS: Group[] = [
  {
    key: "b-vitamins",
    title: "Vitamines du groupe B",
    color: "#2499c7",
    cards: [
      { code: "B1", name: "Thiamine", nameEn: "Thiamine", note: "Pyrimidine + thiazolium · TPP", kind: "b1" },
      { code: "B2", name: "Riboflavine", nameEn: "Riboflavin", note: "Isoalloxazine + ribitol · FAD/FMN", kind: "b2" },
      { code: "B3", name: "Niacine", nameEn: "Niacin", note: "Acide nicotinique · NAD⁺/NADP⁺", kind: "b3" },
      { code: "B5", name: "Acide pantothénique", nameEn: "Pantothenic acid", note: "Pantoate + β-alanine · CoA", kind: "b5" },
      { code: "B6", name: "Pyridoxine", nameEn: "Pyridoxine", note: "Dérivé de la pyridine · PLP", kind: "b6" },
      { code: "B9", name: "Acide folique", nameEn: "Folic acid", note: "Ptéridine + PABA + glutamate", kind: "b9" },
      { code: "B12", name: "Cobalamine", nameEn: "Cobalamin", note: "Corrine + cobalt central", kind: "b12" },
    ],
  },
  {
    key: "vitamin-c",
    title: "Antioxydant hydrosoluble",
    color: "#4e64ce",
    cards: [{ code: "C", name: "Acide ascorbique", nameEn: "Ascorbic acid", note: "Lactone énediol · agent réducteur", kind: "c", formula: "C₆H₈O₆" }],
  },
];

function VitaminCard({ card, color, english }: { card: Card; color: string; english: boolean }) {
  return (
    <article className="chem-card" style={{ "--group-color": color } as CSSProperties}>
      <CardHeader card={card} color={color} english={english} />
      <VitaminStructure card={card} color={color} />
      <small>{english ? card.note.replace("Acide", "Acid").replace("Dérivé", "Pyridine").replace("central", "center").replace("agent réducteur", "reducing agent") : card.note}</small>
    </article>
  );
}

export function WaterSolubleVitaminGallery() {
  return (
    <ChemistryGallery
      id="water-soluble-vitamin-gallery"
      kicker="SCHÉMA ORIGINAL"
      title="Les vitamines hydrosolubles"
      titleEn="Water-soluble vitamins"
      description="Les noyaux structuraux des vitamines B principales et de la vitamine C, avec leurs formes coenzymatiques repères."
      descriptionEn="Structural motifs of the main B vitamins and vitamin C, with their key coenzyme forms."
      note="Les hétérocycles et groupements fonctionnels sont conservés ; les chaînes latérales sont condensées lorsque leur détail dépasserait l’objectif pédagogique."
      noteEn="Heterocycles and functional groups are retained; side chains are condensed when their detail would exceed the teaching goal."
      groups={WATER_SOLUBLE_GROUPS}
      renderCard={(card, color, english) => <VitaminCard card={card} color={color} english={english} />}
    />
  );
}

function FatSolubleStructure({ card, color }: { card: Card; color: string }) {
  if (card.kind === "a") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine A">
        <title>Structure simplifiée de la vitamine A</title>
        <desc>Cycle bêta-ionone relié à une chaîne polyénique terminée par un alcool.</desc>
        <Ring x={62} y={91} size={32} color={color} />
        <Bond x1={89} y1={75} x2={122} y2={91} color={color} />
        <polyline points="122,91 151,74 180,91 209,74 238,91 267,74" fill="none" stroke={color} strokeWidth="2.5" />
        <Bond x1={122} y1={91} x2={151} y2={74} color={color} double />
        <Bond x1={180} y1={91} x2={209} y2={74} color={color} double />
        <Label x={294} y={73} color={color}>CH₂OH</Label>
        <Label x={165} y={158} color={color} size={10}>rétinol · chaîne polyénique</Label>
      </svg>
    );
  }
  if (card.kind === "d") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine D">
        <title>Structure simplifiée de la vitamine D</title>
        <desc>Sécostéroïde à cycle ouvert, deux hydroxyles et chaîne latérale.</desc>
        <Ring x={70} y={91} size={29} color={color} />
        <Bond x1={96} y1={76} x2={132} y2={91} color={color} dashed />
        <polyline points="132,91 157,70 184,92 211,70 239,92" fill="none" stroke={color} strokeWidth="2.5" />
        <Bond x1={157} y1={70} x2={184} y2={92} color={color} double />
        <Bond x1={239} y1={92} x2={272} y2={70} color={color} />
        <Label x={281} y={62} color={color}>OH</Label>
        <Bond x1={70} y1={61} x2={70} y2={34} color={color} />
        <Label x={70} y={26} color={color}>OH</Label>
        <Label x={165} y={158} color={color} size={10}>sécostéroïde · calcitriol actif</Label>
      </svg>
    );
  }
  if (card.kind === "e") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine E">
        <title>Structure simplifiée de la vitamine E</title>
        <desc>Noyau chromanol avec hydroxyle phénolique et longue chaîne phytyle.</desc>
        <Ring x={77} y={88} size={29} color={color} aromatic />
        <Ring x={126} y={88} size={29} color={color} sides={6} hetero="O" />
        <Label x={77} y={44} color={color}>OH</Label>
        <Bond x1={151} y1={88} x2={180} y2={88} color={color} />
        <polyline points="180,88 201,72 222,88 243,72 264,88 285,72" fill="none" stroke={color} strokeWidth="2.5" />
        <Label x={165} y={158} color={color} size={10}>tocophérol · chaîne phytyle</Label>
      </svg>
    );
  }
  if (card.kind === "k") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la vitamine K">
        <title>Structure simplifiée de la vitamine K</title>
        <desc>Noyau naphtoquinone relié à une chaîne isoprénoïde.</desc>
        <Ring x={78} y={88} size={29} color={color} aromatic />
        <Ring x={127} y={88} size={29} color={color} aromatic />
        <Label x={54} y={40} color={color}>O</Label>
        <Label x={151} y={40} color={color}>O</Label>
        <Bond x1={151} y1={88} x2={182} y2={88} color={color} />
        <polyline points="182,88 204,72 226,88 248,72 270,88 292,72" fill="none" stroke={color} strokeWidth="2.5" />
        <Label x={165} y={158} color={color} size={10}>naphtoquinone · chaîne isoprénoïde</Label>
      </svg>
    );
  }
  if (card.kind === "coq10") {
    return (
      <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la coenzyme Q10">
        <title>Structure simplifiée de la coenzyme Q10</title>
        <desc>Noyau benzoquinone portant deux oxygènes et une longue chaîne isoprénoïde.</desc>
        <Ring x={79} y={88} size={33} color={color} aromatic />
        <Label x={61} y={43} color={color}>O</Label>
        <Label x={98} y={43} color={color}>O</Label>
        <Bond x1={108} y1={88} x2={145} y2={88} color={color} />
        <polyline points="145,88 167,73 189,88 211,73 233,88 255,73 277,88 299,73" fill="none" stroke={color} strokeWidth="2.5" />
        <Label x={165} y={158} color={color} size={10}>benzoquinone + 10 unités isopréniques</Label>
      </svg>
    );
  }
  return (
    <svg className="chem-molecule" viewBox="0 0 330 190" role="img" aria-label="Structure simplifiée de la carnitine">
      <title>Structure simplifiée de la carnitine</title>
      <desc>Ammonium quaternaire, hydroxyle et carboxylate reliés par une chaîne courte.</desc>
      <Label x={67} y={88} color={color}>N⁺(CH₃)₃</Label>
      <Bond x1={113} y1={88} x2={150} y2={88} color={color} />
      <Label x={168} y={88} color={color}>CH₂</Label>
      <Bond x1={187} y1={88} x2={218} y2={88} color={color} />
      <Label x={236} y={88} color={color}>CH</Label>
      <Bond x1={236} y1={72} x2={236} y2={43} color={color} />
      <Label x={236} y={34} color={color}>OH</Label>
      <Bond x1={253} y1={88} x2={285} y2={88} color={color} />
      <Label x={306} y={88} color={color} anchor="start">COO⁻</Label>
      <Label x={165} y={158} color={color} size={10}>navette mitochondriale des acyl-CoA</Label>
    </svg>
  );
}

const FAT_SOLUBLE_GROUPS: Group[] = [
  {
    key: "fat-soluble",
    title: "Vitamines liposolubles",
    color: "#e29a2d",
    cards: [
      { code: "A", name: "Rétinol", nameEn: "Retinol", note: "Cycle β-ionone + chaîne polyénique", kind: "a" },
      { code: "D", name: "Calciférol", nameEn: "Calciferol", note: "Sécostéroïde · pro-hormone", kind: "d" },
      { code: "E", name: "Tocophérol", nameEn: "Tocopherol", note: "Chromanol + chaîne phytyle", kind: "e" },
      { code: "K", name: "Phylloquinone", nameEn: "Phylloquinone", note: "Naphtoquinone + chaîne isoprénoïde", kind: "k" },
    ],
  },
  {
    key: "cofactors",
    title: "Cofacteurs apparentés",
    color: "#8d62d9",
    cards: [
      { code: "Q10", name: "Coenzyme Q10", nameEn: "Coenzyme Q10", note: "Benzoquinone + 10 unités isopréniques", kind: "coq10" },
      { code: "Carn", name: "L-carnitine", nameEn: "L-carnitine", note: "Transport des acyl-CoA vers la mitochondrie", kind: "carnitine" },
    ],
  },
];

function FatSolubleCard({ card, color, english }: { card: Card; color: string; english: boolean }) {
  return (
    <article className="chem-card" style={{ "--group-color": color } as CSSProperties}>
      <CardHeader card={card} color={color} english={english} />
      <FatSolubleStructure card={card} color={color} />
      <small>{english ? card.note.replace("Cycle", "β-ionone ring").replace("chaîne", "chain").replace("Transport", "Transport").replace("vers la mitochondrie", "to mitochondria") : card.note}</small>
    </article>
  );
}

export function FatSolubleVitaminGallery() {
  return (
    <ChemistryGallery
      id="fat-soluble-vitamin-gallery"
      kicker="SCHÉMA ORIGINAL"
      title="Les vitamines liposolubles et cofacteurs"
      titleEn="Fat-soluble vitamins and cofactors"
      description="Les motifs structuraux de A, D, E et K, complétés par la coenzyme Q10 et la carnitine."
      descriptionEn="Structural motifs of vitamins A, D, E, and K, complemented by coenzyme Q10 and carnitine."
      note="Les cycles fusionnés et les chaînes isoprénoïdes sont schématisés pour faire ressortir les familles, les fonctions oxygénées et la lipophilie."
      noteEn="Fused rings and isoprenoid chains are schematized to highlight families, oxygenated functions, and lipophilicity."
      groups={FAT_SOLUBLE_GROUPS}
      renderCard={(card, color, english) => <FatSolubleCard card={card} color={color} english={english} />}
    />
  );
}

function ChemistryGallery({
  id,
  kicker,
  title,
  titleEn,
  description,
  descriptionEn,
  note,
  noteEn,
  groups,
  renderCard,
}: {
  id: string;
  kicker: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  note: string;
  noteEn: string;
  groups: Group[];
  renderCard: (card: Card, color: string, english: boolean) => ReactNode;
}) {
  const { lang } = useLang();
  const english = lang !== "fr";
  return (
    <section className="chem-gallery learning-panel" aria-labelledby={`${id}-title`}>
      <div className="chem-gallery-heading">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h2 id={`${id}-title`}>{english ? titleEn : title}</h2>
          <p>{english ? descriptionEn : description}</p>
        </div>
        <div className="chem-legend" aria-label={english ? "Color legend" : "Légende des couleurs"}>
          {groups.map((group) => (
            <span key={group.key}>
              <i style={{ backgroundColor: group.color }} />
              {english ? group.title.replace("Acides gras", "Fatty acids").replace("Lipides complexes", "Complex lipids").replace("Stérols", "Sterols").replace("Monosaccharides", "Monosaccharides").replace("Disaccharides", "Disaccharides").replace("Polysaccharides", "Polysaccharides").replace("Vitamines du groupe B", "B vitamins").replace("Antioxydant hydrosoluble", "Water-soluble antioxidant").replace("Vitamines liposolubles", "Fat-soluble vitamins").replace("Cofacteurs apparentés", "Related cofactors") : group.title}
            </span>
          ))}
        </div>
      </div>
      <p className="chem-gallery-note">{english ? noteEn : note}</p>
      <div className="chem-groups">
        {groups.map((group) => (
          <section key={group.key} className="chem-group" style={{ "--group-color": group.color } as CSSProperties}>
            <div className="chem-group-title">
              <span className="chem-group-dot" />
              <h3>{english ? group.title.replace("Acides gras", "Fatty acids").replace("Lipides complexes", "Complex lipids").replace("Stérols", "Sterols").replace("Vitamines du groupe B", "B vitamins").replace("Antioxydant hydrosoluble", "Water-soluble antioxidant").replace("Vitamines liposolubles", "Fat-soluble vitamins").replace("Cofacteurs apparentés", "Related cofactors") : group.title}</h3>
              <span>{group.cards.length}</span>
            </div>
            <div className="chem-grid">
              {group.cards.map((card) => (
                <Fragment key={card.code}>{renderCard(card, group.color, english)}</Fragment>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}