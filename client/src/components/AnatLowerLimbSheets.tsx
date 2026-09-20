import type { ReactNode } from "react";
import { Figure, C, Txt } from "./Figure";
import { DEEP } from "./FigKit";

// Anatomie S1 — membre inférieur : un schéma par sous-partie du cours.
// À gauche : dessin simplifié (os + muscle) ; à droite : fiches origine / insertion / nerf / action.

export const BONE = "#eadfc8";
export const BS = "#a78c5b";

export type Card = { title: string; lines: string[]; color: string };

// Colonne de fiches à droite du dessin.
export function Cards({ x, y, w, cards, gap = 8, lineH = 14 }: { x: number; y: number; w: number; cards: Card[]; gap?: number; lineH?: number }) {
  let cy = y;
  return (
    <g>
      {cards.map((card) => {
        const h = 26 + card.lines.length * lineH;
        const node = (
          <g key={card.title}>
            <rect x={x} y={cy} width={w} height={h} rx={9} fill={card.color} fillOpacity={0.13} stroke={card.color} strokeWidth={1.8} />
            <rect x={x} y={cy} width={7} height={h} rx={3.5} fill={card.color} />
            <Txt x={x + 16} y={cy + 17} anchor="start" bold size={11.5}>{card.title}</Txt>
            {card.lines.map((line, i) => (
              <Txt key={i} x={x + 16} y={cy + 32 + i * lineH} anchor="start" size={9.8} color={C.grey}>{line}</Txt>
            ))}
          </g>
        );
        cy += h + gap;
        return node;
      })}
    </g>
  );
}

export const Label = ({ x, y, children, anchor = "start", color }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; color?: string }) => (
  <Txt x={x} y={y} anchor={anchor} size={10.5} bold color={color}>{children}</Txt>
);

export const bone = { fill: BONE, stroke: BS, strokeWidth: 2 } as const;
export const tip = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;

// ─── 1.1 Hanche : généralités ────────────────────────────────────────────
export function HipOverviewDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Articulation coxo-fémorale : coupe frontale" caption="Énarthrose : la tête du fémur (plus d'une demi-sphère) est reçue dans l'acétabulum, approfondi par le labrum ; la capsule va du pourtour de l'acétabulum à la ligne intertrochantérienne ; le ligament rond relie la fovea capitis à l'échancrure acétabulaire">
      {/* os coxal */}
      <path d="M150,20 L400,20 L400,110 C380,120 372,140 366,150 L231,182 C226,150 200,110 150,90 Z" {...bone} />
      <Label x={170} y={62} color={DEEP.amber}>Os coxal</Label>
      {/* cartilage de l'acétabulum (surface semi-lunaire) */}
      <path d="M236,178 A66,66 0 0 1 362,150" fill="none" stroke={C.blue} strokeWidth={7} strokeLinecap="round" />
      {/* labrum */}
      <path d="M228,186 L246,196 L246,172 Z" fill={C.violet} />
      <path d="M368,152 L352,170 L374,168 Z" fill={C.violet} />
      {/* tête, col, trochanter, diaphyse */}
      <circle cx={300} cy={172} r={58} {...bone} />
      <path d="M262,222 C300,236 340,232 372,246 C405,232 440,246 446,285 L446,430 L352,430 L340,320 C320,285 292,262 262,222 Z" {...bone} />
      <circle cx={300} cy={172} r={55} fill="none" stroke={C.blue} strokeWidth={4} strokeDasharray="1 0" opacity={0.7} />
      {/* ligament rond */}
      <path d="M300,176 C290,205 286,222 284,232" fill="none" stroke={C.red} strokeWidth={4} strokeLinecap="round" />
      <circle cx={300} cy={176} r={4} fill={C.red} />
      {/* capsule */}
      <path d="M240,120 C214,190 226,236 262,250 L390,262" fill="none" stroke={C.green} strokeWidth={3} strokeDasharray="7 5" />
      <path d="M372,132 C420,170 424,220 410,262" fill="none" stroke={C.green} strokeWidth={3} strokeDasharray="7 5" />
      {/* annotations gauche */}
      <line x1={192} y1={140} x2={246} y2={168} {...tip} /><Label x={186} y={136} anchor="end" color={DEEP.violet}>Labrum acétabulaire</Label>
      <line x1={100} y1={204} x2={226} y2={190} {...tip} /><Label x={96} y={200} anchor="end" color={DEEP.blue}>Cartilage hyalin</Label>
      <line x1={180} y1={252} x2={232} y2={222} {...tip} /><Label x={176} y={256} anchor="end" color={DEEP.green}>Capsule articulaire</Label>
      <line x1={196} y1={330} x2={284} y2={228} {...tip} /><Label x={192} y={334} anchor="end" color={DEEP.red}>Ligament rond</Label><Txt x={192} y={348} anchor="end" size={9.5} color={C.grey}>(fovea capitis → échancrure)</Txt>
      {/* annotations droite */}
      <line x1={330} y1={128} x2={430} y2={92} {...tip} /><Label x={436} y={90} color={DEEP.amber}>Acétabulum (cotyle)</Label>
      <line x1={340} y1={190} x2={458} y2={190} {...tip} /><Label x={464} y={194}>Tête du fémur</Label>
      <line x1={330} y1={244} x2={458} y2={230} {...tip} /><Label x={464} y={234}>Col du fémur</Label>
      <line x1={440} y1={272} x2={520} y2={272} {...tip} /><Label x={526} y={276}>Grand trochanter</Label>
      <line x1={446} y1={360} x2={520} y2={360} {...tip} /><Label x={526} y={364}>Diaphyse fémorale</Label>
      {/* rappel */}
      <rect x={480} y={20} width={250} height={54} rx={9} fill={C.blue} fillOpacity={0.12} stroke={C.blue} strokeWidth={1.8} />
      <Txt x={605} y={42} bold size={11.5}>Synoviale sphéroïde (énarthrose)</Txt>
      <Txt x={605} y={59} size={10} color={C.grey}>3 axes : flexion · abduction · rotation</Txt>
      <rect x={480} y={112} width={250} height={54} rx={9} fill={C.green} fillOpacity={0.12} stroke={C.green} strokeWidth={1.8} />
      <Txt x={605} y={134} bold size={11.5}>Rôle : porter le poids du corps</Txt>
      <Txt x={605} y={151} size={10} color={C.grey}>et transmettre les forces à la marche</Txt>
    </Figure>
  );
}

// ─── A. Région iliaque ───────────────────────────────────────────────────
export function IliacMusclesDiagram() {
  const spine = ["T12", "L1", "L2", "L3", "L4", "L5"];
  return (
    <Figure viewBox="0 0 740 440" title="Région iliaque : psoas et iliaque (iliopsoas)" caption="Le grand psoas naît du rachis T12-L5, l'iliaque de la fosse iliaque ; ils fusionnent et passent sous le ligament inguinal pour s'insérer sur le petit trochanter : fléchisseur principal de la hanche">
      {spine.map((v, i) => (
        <g key={v}>
          <rect x={92} y={16 + i * 30} width={46} height={25} rx={5} {...bone} />
          <Txt x={115} y={33 + i * 30} size={9.5} bold>{v}</Txt>
        </g>
      ))}
      {/* fosse iliaque */}
      <path d="M150,170 C210,120 300,120 330,160 C340,200 320,250 270,268 L200,270 C170,240 160,210 150,170 Z" {...bone} />
      <Label x={296} y={146} color={DEEP.amber}>Fosse iliaque</Label>
      {/* fémur */}
      <circle cx={196} cy={286} r={22} {...bone} />
      <path d="M204,298 L258,318 L262,432 L214,432 L220,372 L204,332 Z" {...bone} />
      <circle cx={224} cy={358} r={6} fill={C.red} stroke={BS} strokeWidth={1.5} />
      {/* iliaque */}
      <path d="M170,180 C215,150 300,150 316,180 C312,235 270,262 224,354 C214,300 188,240 170,180 Z" fill={C.amber} fillOpacity={0.45} stroke={C.amber} strokeWidth={2} />
      {/* grand psoas */}
      <path d="M150,30 C122,150 170,260 220,350" fill="none" stroke={C.blue} strokeOpacity={0.75} strokeWidth={18} strokeLinecap="round" />
      {/* petit psoas */}
      <path d="M146,26 C160,110 176,190 186,246" fill="none" stroke={C.green} strokeWidth={4} strokeDasharray="8 5" strokeLinecap="round" />
      <line x1={232} y1={352} x2={352} y2={352} {...tip} /><Label x={358} y={356} color={DEEP.red}>Petit trochanter</Label>
      <Txt x={40} y={330} anchor="start" size={10} color={C.grey}>ligament inguinal :</Txt>
      <Txt x={40} y={344} anchor="start" size={10} color={C.grey}>passage sous ce ligament</Txt>
      <Cards x={400} y={20} w={330} cards={[
        { title: "Grand psoas", color: C.blue, lines: ["Origine : corps et disques T12-L5, processus transverses", "Insertion : petit trochanter", "Nerf : rameaux ventraux L2-L4", "Action : flexion de la cuisse ; tronc si fémur fixe"] },
        { title: "Petit psoas (présent chez ~50 %)", color: C.green, lines: ["Origine : disque T12-L1 · Insertion : éminence ilio-pubienne", "Nerf : rameau de L1 · faible fléchisseur du tronc"] },
        { title: "Iliaque", color: C.amber, lines: ["Origine : fosse iliaque, lèvre interne de la crête iliaque", "Insertion : fusionne avec le psoas (petit trochanter)", "Nerf : nerf fémoral · flexion de la cuisse et du rachis lombaire"] },
        { title: "Iliopsoas = psoas + iliaque", color: C.red, lines: ["Fléchisseur le plus puissant de la hanche"] },
      ]} />
    </Figure>
  );
}

// ─── B.1 Muscles antérieurs de la cuisse ─────────────────────────────────
export function ThighAnteriorDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Cuisse, face antérieure : sartorius et quadriceps" caption="Le sartorius croise la cuisse en oblique (épine iliaque antéro-supérieure → face médiale du tibia) ; le quadriceps a 4 chefs et un seul tendon : quadricipital → patella → patellaire → tubérosité tibiale">
      {/* bassin */}
      <path d="M90,14 L262,14 L262,56 L150,56 L90,44 Z" {...bone} />
      <circle cx={246} cy={40} r={5} fill={C.red} /><Label x={254} y={30} anchor="end" color={DEEP.red}>EIAS</Label>
      <circle cx={214} cy={58} r={4.5} fill={C.violet} /><Label x={200} y={72} anchor="end" color={DEEP.violet}>EIAI</Label>
      {/* fémur, patella, tibia */}
      <path d="M166,62 L214,62 L222,318 L162,318 Z" {...bone} />
      <circle cx={190} cy={338} r={15} {...bone} /><Label x={214} y={342}>Patella</Label>
      <path d="M170,362 L212,362 L206,440 L174,440 Z" {...bone} />
      <circle cx={191} cy={372} r={4} fill={C.violet} />
      {/* vaste latéral (côté latéral = droite du dessin) */}
      <path d="M216,110 C252,170 250,260 214,320 L196,320 L198,120 Z" fill={C.blue} fillOpacity={0.35} stroke={C.blue} strokeWidth={1.8} />
      {/* vaste médial */}
      <path d="M170,190 C138,240 140,290 176,322 L190,322 L190,196 Z" fill={C.blue} fillOpacity={0.35} stroke={C.blue} strokeWidth={1.8} />
      {/* droit fémoral */}
      <path d="M214,62 L188,326" stroke={C.blue} strokeWidth={13} strokeLinecap="round" opacity={0.85} />
      {/* tendons */}
      <path d="M190,326 L190,340" stroke={C.violet} strokeWidth={6} />
      <path d="M190,354 L191,368" stroke={C.violet} strokeWidth={6} />
      {/* sartorius */}
      <path d="M244,42 C232,120 160,210 170,290 C170,330 168,356 176,376" fill="none" stroke={C.green} strokeWidth={9} strokeLinecap="round" opacity={0.8} />
      {/* légendes */}
      <line x1={244} y1={120} x2={300} y2={120} {...tip} /><Label x={306} y={124} color={DEEP.green}>Sartorius</Label>
      <line x1={238} y1={200} x2={300} y2={200} {...tip} /><Label x={306} y={204} color={DEEP.blue}>Vaste latéral</Label>
      <line x1={202} y1={244} x2={300} y2={244} {...tip} /><Label x={306} y={248} color={DEEP.blue}>Droit fémoral</Label>
      <line x1={150} y1={240} x2={90} y2={240} {...tip} /><Label x={84} y={244} anchor="end" color={DEEP.blue}>Vaste médial</Label>
      <Txt x={84} y={264} anchor="end" size={9.5} color={C.grey}>vaste intermédiaire</Txt><Txt x={84} y={277} anchor="end" size={9.5} color={C.grey}>(en profondeur)</Txt>
      <line x1={191} y1={378} x2={300} y2={390} {...tip} /><Label x={306} y={394} color={DEEP.violet}>Tubérosité tibiale</Label>
      <Cards x={420} y={14} w={310} cards={[
        { title: "Sartorius (le plus long muscle du corps)", color: C.green, lines: ["EIAS → face médiale du tibia · nerf fémoral", "Flexion hanche + genou, abduction, rotation latérale", "(position du tailleur)"] },
        { title: "Quadriceps fémoral — nerf fémoral", color: C.blue, lines: ["Extenseur du genou (4 chefs, un seul tendon)", "Droit fémoral : EIAI · seul chef qui fléchit la hanche", "Vastes latéral, médial, intermédiaire : fémur"] },
        { title: "Tendon : quadricipital → patella → patellaire", color: C.violet, lines: ["Insertion finale : tubérosité tibiale"] },
        { title: "Articulaire du genou", color: C.amber, lines: ["Détaché du vaste intermédiaire : tire la synoviale", "vers le haut lors de l'extension"] },
      ]} />
    </Figure>
  );
}

// ─── B.2 Muscles médiaux : adducteurs ────────────────────────────────────
export function ThighAdductorsDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Cuisse, compartiment médial : les adducteurs" caption="Tous naissent du pubis et de l'ischion et s'insèrent sur le fémur (ligne âpre), sauf le gracile qui descend jusqu'au tibia ; nerf obturateur, sauf le pectiné (fémoral + obturateur) et la partie ischio-jambière du grand adducteur (tibial)">
      <path d="M90,14 L260,14 L260,58 L150,58 C120,54 100,40 90,14 Z" {...bone} />
      <Label x={100} y={40} anchor="start" color={DEEP.amber}>Pubis / ischion</Label>
      <path d="M204,66 L250,66 L256,316 L200,316 Z" {...bone} />
      <Txt x={230} y={200} size={9} color={BS} bold>ligne âpre</Txt>
      <path d="M186,346 L236,346 L230,440 L192,440 Z" {...bone} />
      {/* grand adducteur : éventail */}
      <path d="M160,58 L206,120 L206,310 L232,306 L250,60 Z" fill={C.red} fillOpacity={0.25} stroke={C.red} strokeWidth={1.8} />
      {/* pectiné */}
      <path d="M170,58 L206,104" stroke={C.pink} strokeWidth={9} strokeLinecap="round" />
      {/* court adducteur */}
      <path d="M166,60 L206,132" stroke={C.violet} strokeWidth={9} strokeLinecap="round" />
      {/* long adducteur */}
      <path d="M158,58 L206,208" stroke={C.blue} strokeWidth={9} strokeLinecap="round" />
      {/* gracile */}
      <path d="M130,58 C126,150 150,250 184,354" fill="none" stroke={C.green} strokeWidth={8} strokeLinecap="round" />
      <line x1={126} y1={140} x2={70} y2={140} {...tip} /><Label x={64} y={144} anchor="end" color={DEEP.green}>Gracile</Label>
      <line x1={186} y1={90} x2={300} y2={90} {...tip} /><Label x={306} y={94} color={C.pink}>Pectiné</Label>
      <line x1={192} y1={124} x2={300} y2={124} {...tip} /><Label x={306} y={128} color={DEEP.violet}>Court adducteur</Label>
      <line x1={196} y1={180} x2={300} y2={180} {...tip} /><Label x={306} y={184} color={DEEP.blue}>Long adducteur</Label>
      <line x1={236} y1={256} x2={300} y2={256} {...tip} /><Label x={306} y={260} color={DEEP.red}>Grand adducteur</Label>
      <Txt x={190} y={436} size={9.5} color={C.grey}>face médiale du tibia</Txt>
      <Cards x={420} y={14} w={310} lineH={13.5} gap={7} cards={[
        { title: "Gracile", color: C.green, lines: ["Seul adducteur non attaché au fémur → tibia", "Nerf obturateur (branche antérieure)"] },
        { title: "Pectiné", color: C.pink, lines: ["Ligne du petit trochanter → ligne âpre", "Double innervation : fémoral + obturateur"] },
        { title: "Long adducteur", color: C.blue, lines: ["Tiers moyen de la ligne âpre", "Obturateur (br. antérieure) · adducteur, rotateur médial"] },
        { title: "Court adducteur", color: C.violet, lines: ["Ligne du petit trochanter → ligne âpre", "Obturateur (branche antérieure)"] },
        { title: "Grand adducteur — muscle composite", color: C.red, lines: ["Portion adductrice (branche ischio-pubienne) : obturateur", "Portion ischio-jambière (tubérosité ischiatique) : tibial", "→ faible extenseur de la hanche"] },
      ]} />
    </Figure>
  );
}

// ─── B.4 Ischio-jambiers ─────────────────────────────────────────────────
export function HamstringsDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Cuisse, face postérieure : les ischio-jambiers" caption="Naissance commune sur la tubérosité ischiatique ; semi-tendineux et semi-membraneux vont sur le tibia (côté médial), le biceps fémoral sur la tête de la fibula (côté latéral) ; ils croisent hanche et genou">
      <g transform="translate(64 0)">
      <path d="M96,14 L262,14 L262,50 L150,66 C120,60 100,40 96,14 Z" {...bone} />
      <circle cx={150} cy={52} r={10} fill={C.red} stroke={BS} strokeWidth={1.5} />
      <Label x={170} y={36} anchor="start" color={DEEP.red}>Tubérosité ischiatique</Label>
      <path d="M162,72 L212,72 L218,322 L156,322 Z" {...bone} />
      <path d="M160,346 L200,346 L196,440 L166,440 Z" {...bone} />
      <path d="M216,352 L236,352 L234,440 L220,440 Z" {...bone} />
      <circle cx={226} cy={352} r={8} fill={C.violet} stroke={BS} strokeWidth={1.5} />
      {/* semi-tendineux */}
      <path d="M144,62 C132,150 160,270 172,358" fill="none" stroke={C.amber} strokeWidth={8} strokeLinecap="round" />
      {/* semi-membraneux */}
      <path d="M152,64 C146,160 170,260 186,348" fill="none" stroke={C.pink} strokeWidth={8} strokeLinecap="round" />
      {/* biceps long */}
      <path d="M156,60 C190,140 210,260 224,346" fill="none" stroke={C.blue} strokeWidth={10} strokeLinecap="round" />
      {/* biceps court */}
      <path d="M204,210 C214,260 222,300 226,346" fill="none" stroke={C.green} strokeWidth={6} strokeLinecap="round" />
      <line x1={140} y1={200} x2={84} y2={200} {...tip} /><Label x={78} y={204} anchor="end" color={DEEP.amber}>Semi-tendineux</Label>
      <line x1={172} y1={290} x2={84} y2={290} {...tip} /><Label x={78} y={294} anchor="end" color={C.pink}>Semi-membraneux</Label>
      <line x1={196} y1={168} x2={290} y2={168} {...tip} /><Label x={296} y={172} color={DEEP.blue}>Biceps, chef long</Label>
      <line x1={214} y1={260} x2={290} y2={260} {...tip} /><Label x={296} y={264} color={DEEP.green}>Biceps, chef court</Label>
      <line x1={236} y1={352} x2={290} y2={352} {...tip} /><Label x={296} y={356} color={DEEP.violet}>Tête de la fibula</Label>
      </g>
      <Cards x={470} y={14} w={260} cards={[
        { title: "Caractères communs", color: C.grey, lines: ["Origine : tubérosité ischiatique", "Nerf sciatique, partie tibiale", "Flexion du genou · extension de la hanche", "Muscles bi-articulaires (hanche + genou)"] },
        { title: "Semi-tendineux", color: C.amber, lines: ["Face médiale du tibia", "(derrière sartorius et gracile)"] },
        { title: "Semi-membraneux", color: C.pink, lines: ["Condyle médial du tibia, face postérieure"] },
        { title: "Biceps fémoral → tête de la fibula", color: C.blue, lines: ["Chef long : tubérosité ischiatique · nerf tibial", "Chef court : ligne âpre · nerf fibulaire commun"] },
      ]} />
    </Figure>
  );
}

// ─── C.a Compartiment antérieur de la jambe ──────────────────────────────
export function LegAnteriorDiagram() {
  return (
    <Figure viewBox="0 0 740 450" title="Jambe, compartiment antérieur (extenseur)" caption="Nerf fibulaire profond ; dorsi-flexion de la cheville. Tous naissent de la fibula sauf le tibial antérieur (tibia) ; leurs tendons passent devant la cheville vers le dos du pied">
      {/* tibia et fibula */}
      <path d="M160,14 L212,14 L204,300 L172,300 Z" {...bone} /><Txt x={186} y={160} size={10} bold color={BS}>Tibia</Txt>
      <path d="M226,30 L246,30 L240,300 L228,300 Z" {...bone} /><Txt x={236} y={170} size={9} bold color={BS}>Fibula</Txt>
      {/* pied (vue dorsale) */}
      <path d="M150,306 L250,306 C262,340 262,380 250,408 L156,408 C140,380 140,340 150,306 Z" {...bone} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={140 + i * 26} y={408} width={20} height={26} rx={9} {...bone} />
      ))}
      {/* tibial antérieur */}
      <path d="M190,50 C186,180 176,290 152,364" fill="none" stroke={C.blue} strokeWidth={8} strokeLinecap="round" />
      {/* long extenseur de l'hallux */}
      <path d="M232,140 C226,240 190,320 150,420" fill="none" stroke={C.green} strokeWidth={6} strokeLinecap="round" />
      {/* long extenseur des orteils */}
      <path d="M222,70 C232,200 236,300 226,340" fill="none" stroke={C.amber} strokeWidth={6} strokeLinecap="round" />
      <path d="M226,340 L192,420 M226,340 L218,420 M226,340 L244,420" stroke={C.amber} strokeWidth={3} fill="none" />
      {/* 3e fibulaire */}
      <path d="M238,240 C246,290 256,330 254,372" fill="none" stroke={C.violet} strokeWidth={5} strokeLinecap="round" />
      <line x1={188} y1={90} x2={110} y2={90} {...tip} /><Label x={104} y={94} anchor="end" color={DEEP.blue}>Tibial antérieur</Label>
      <line x1={236} y1={110} x2={290} y2={110} {...tip} /><Label x={296} y={114} color={DEEP.green}>Long extenseur de l'hallux</Label>
      <line x1={230} y1={160} x2={290} y2={160} {...tip} /><Label x={296} y={164} color={DEEP.amber}>Long extenseur des orteils</Label>
      <line x1={246} y1={270} x2={290} y2={270} {...tip} /><Label x={296} y={274} color={DEEP.violet}>3e fibulaire</Label>
      <Txt x={60} y={370} anchor="start" size={9.5} color={C.grey}>hallux et orteils</Txt>
      <Cards x={450} y={14} w={280} cards={[
        { title: "Nerf fibulaire profond", color: C.red, lines: ["Innerve tout le compartiment antérieur", "Dorsi-flexion de la cheville"] },
        { title: "Tibial antérieur", color: C.blue, lines: ["Né du tibia (seul) · dorsi-flexion", "Inverse aussi le pied"] },
        { title: "Long extenseur de l'hallux", color: C.green, lines: ["Fibula → hallux", "Extension de l'hallux + dorsi-flexion"] },
        { title: "Long extenseur des orteils", color: C.amber, lines: ["Fibula → orteils 2 à 5", "Extension des orteils + dorsi-flexion"] },
        { title: "3e fibulaire", color: C.violet, lines: ["Fibula distale → 5e métatarsien", "Dorsi-flexion et éversion"] },
      ]} />
    </Figure>
  );
}

// ─── D. Muscles du pied ──────────────────────────────────────────────────
export function FootMusclesDiagram() {
  const layers: [string, string, string, string][] = [
    ["1re couche", "abducteur de l'hallux · fléchisseur court des orteils · abducteur du 5e orteil", "plantaire médial (2 premiers) et latéral", C.blue],
    ["2e couche", "carré plantaire · lombricaux (+ tendons des longs fléchisseurs)", "plantaire latéral (lombrical médial : médial)", C.green],
    ["3e couche", "fléchisseur court de l'hallux · adducteur de l'hallux · fléchisseur court du 5e orteil", "plantaire médial et latéral", C.amber],
    ["4e couche", "interosseux plantaires et dorsaux (+ tendons du long fibulaire et du tibial postérieur)", "plantaire latéral", C.red],
  ];
  return (
    <Figure viewBox="0 0 740 450" title="Muscles du pied : dos et plante" caption="Extrinsèques : tendons venus de la jambe. Intrinsèques : sur le dos du pied (court extenseur des orteils et de l'hallux, nerf fibulaire profond) et sur la plante en quatre couches (nerfs plantaires médial et latéral, branches du tibial)">
      <Txt x={110} y={22} bold size={12} color={DEEP.blue}>Dos du pied (droit)</Txt>
      <path d="M62,60 L150,60 C168,110 170,170 156,260 C148,300 130,320 100,320 C70,320 56,290 58,240 C60,180 64,110 62,60 Z" {...bone} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={40 + i * 24} y={324} width={20} height={i === 0 ? 34 : 26 - Math.abs(i - 1) * 2} rx={9} {...bone} />
      ))}
      <Txt x={100} y={376} size={9.5} color={C.grey}>orteils</Txt>
      {/* court extenseur des orteils : dessus du pied, oblique */}
      <path d="M130,90 L96,230 L112,232 L146,92 Z" fill={C.green} fillOpacity={0.5} stroke={C.green} strokeWidth={1.8} />
      <path d="M100,230 L64,330 M104,232 L90,330 M110,232 L114,330" stroke={C.green} strokeWidth={2.5} fill="none" />
      {/* court extenseur de l'hallux */}
      <path d="M104,226 L46,326" stroke={C.blue} strokeWidth={5} strokeLinecap="round" />
      <line x1={148} y1={140} x2={214} y2={140} {...tip} /><Label x={220} y={144} color={DEEP.green}>Court extenseur des orteils</Label>
      <line x1={78} y1={280} x2={214} y2={290} {...tip} /><Label x={220} y={294} color={DEEP.blue}>Court extenseur de l'hallux</Label>
      <Txt x={220} y={310} anchor="start" size={9.5} color={C.grey}>nerf fibulaire profond</Txt>
      <Txt x={220} y={354} anchor="start" size={9.5} color={C.grey}>Les tendons des longs extenseurs</Txt>
      <Txt x={220} y={368} anchor="start" size={9.5} color={C.grey}>(extrinsèques) courent sur le dos du pied</Txt>
      <Txt x={560} y={22} bold size={12} color={DEEP.amber}>Plante du pied : 4 couches (de superficiel à profond)</Txt>
      {layers.map(([t, m, n, c], i) => (
        <g key={t}>
          <rect x={400} y={40 + i * 94} width={330} height={84} rx={9} fill={c} fillOpacity={0.13} stroke={c} strokeWidth={1.8} />
          <rect x={400} y={40 + i * 94} width={7} height={84} rx={3.5} fill={c} />
          <Txt x={416} y={60 + i * 94} anchor="start" bold size={11.5}>{t}</Txt>
          <foreignObject x={414} y={64 + i * 94} width={310} height={58}>
            <div style={{ fontSize: 10, lineHeight: 1.3, color: "inherit" }}>
              <div>{m}</div>
              <div style={{ opacity: 0.65 }}>{n}</div>
            </div>
          </foreignObject>
        </g>
      ))}
    </Figure>
  );
}
