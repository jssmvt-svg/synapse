import { Figure, C, Txt } from "./Figure";
import { DEEP, RED } from "./FigKit";

// Biochimie S1 — schémas complémentaires (membranes, structure des protéines, glucides, enzymes de restriction).

const chip = (x: number, y: number, w: number, h: number, t: string, c: string, size = 11, sub?: string) => (
  <g key={`${x}-${y}-${t}`}>
    <rect x={x} y={y} width={w} height={h} rx={9} fill={c} fillOpacity={0.16} stroke={c} strokeWidth={2} />
    <Txt x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} bold size={size}>{t}</Txt>
    {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 1.5} color={C.grey}>{sub}</Txt>}
  </g>
);
const heads = (x0: number, x1: number, y: number, n: number, up: boolean) =>
  Array.from({ length: n }).map((_, i) => {
    const x = x0 + ((x1 - x0) * (i + 0.5)) / n;
    return (
      <g key={`${y}-${i}`}>
        <circle cx={x} cy={y} r={6} fill={C.amber} stroke="#a3701a" strokeWidth={1.2} />
        <path d={`M${x - 2},${y + (up ? 6 : -6)} l0,${up ? 22 : -22} M${x + 2},${y + (up ? 6 : -6)} l0,${up ? 22 : -22}`} stroke="#a3701a" strokeWidth={1.4} />
      </g>
    );
  });

// ─── Protéines membranaires ──────────────────────────────────────────────
export function MembraneProteinTypesDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Quatre modes d'association des protéines à la membrane" caption="Intégrales (traversent la bicouche, souvent en hélices α), périphériques (attachées aux têtes polaires ou à une autre protéine), à ancrage lipidique (liées de façon covalente à un lipide), partiellement insérées (ne traversent pas)">
      <Txt x={26} y={116} anchor="start" size={10.5} bold color={C.grey}>extérieur</Txt><Txt x={26} y={352} anchor="start" size={10.5} bold color={C.grey}>cytoplasme</Txt>
      <rect x={20} y={130} width={700} height={100} rx={4} fill={C.amber} fillOpacity={0.08} />
      {heads(30, 710, 148, 26, true)}
      {heads(30, 710, 214, 26, false)}
      <rect x={20} y={176} width={700} height={0} />
      <Txt x={370} y={196} size={10} color={C.grey}>cœur hydrophobe (chaînes d'acides gras)</Txt>
      <path d="M120,60 C100,70 100,100 120,120 L120,128 L120,232 L120,240 C100,260 100,290 120,300 C160,300 160,260 150,240 L150,232 L150,128 C160,110 160,80 150,60z" fill={C.blue} fillOpacity={0.4} stroke={DEEP.blue} strokeWidth={2.5} />
      <rect x={120} y={130} width={30} height={102} fill="none" stroke={DEEP.blue} strokeWidth={2} strokeDasharray="4 3" />
      <Txt x={135} y={396} bold size={11.5} color={DEEP.blue}>1. Intégrale</Txt><Txt x={135} y={412} size={9.5} color={C.grey}>hélice α transmembranaire</Txt>
      <ellipse cx={290} cy={112} rx={44} ry={26} fill={C.green} fillOpacity={0.4} stroke={DEEP.green} strokeWidth={2.5} />
      <Txt x={290} y={396} bold size={11.5} color={DEEP.green}>2. Périphérique</Txt><Txt x={290} y={412} size={9.5} color={C.grey}>liée aux têtes polaires</Txt>
      <ellipse cx={450} cy={272} rx={44} ry={26} fill={C.violet} fillOpacity={0.4} stroke={DEEP.violet} strokeWidth={2.5} />
      <path d="M440,246 C440,236 444,240 446,226 M456,246 C456,236 452,240 454,228" stroke={DEEP.violet} strokeWidth={3} fill="none" />
      <Txt x={450} y={396} bold size={11.5} color={DEEP.violet}>3. Ancrage lipidique</Txt><Txt x={450} y={412} size={9.5} color={C.grey}>attache covalente à un lipide</Txt>
      <path d="M590,60 C560,80 560,140 590,150 L590,176 L630,176 L630,150 C660,140 660,80 630,60z" fill={C.red} fillOpacity={0.4} stroke={DEEP.red} strokeWidth={2.5} />
      <Txt x={610} y={396} bold size={11.5} color={DEEP.red}>4. Partiellement insérée</Txt><Txt x={610} y={412} size={9.5} color={C.grey}>ne traverse pas la membrane</Txt>
    </Figure>
  );
}

// ─── Fluidité membranaire ────────────────────────────────────────────────
export function MembraneFluidityDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Fluidité de la membrane : mosaïque fluide" caption="Diffusion latérale rapide, flip-flop très lent sans flippase ; la fluidité dépend de la longueur et de l'insaturation des chaînes d'acides gras et du cholestérol (tampon de fluidité) ; les radeaux lipidiques sont des microdomaines riches en cholestérol">
      <rect x={10} y={20} width={350} height={170} rx={10} fill={C.amber} fillOpacity={0.07} stroke={C.amber} strokeWidth={2} />
      {heads(30, 340, 60, 8, true)}{heads(30, 340, 150, 8, false)}
      <path d="M52,60 l0,-0 M52,44 L150,44" stroke={C.blue} strokeWidth={0} />
      <path d="M100,32 L170,32" stroke={C.blue} strokeWidth={3} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" /><Txt x={135} y={26} size={10} bold color={DEEP.blue}>latéral : rapide</Txt>
      <path d="M210,72 L210,140" stroke={C.red} strokeWidth={3} strokeDasharray="4 3" markerEnd="url(#fig-arrow)" /><Txt x={224} y={112} anchor="start" size={10} bold color={DEEP.red}>flip-flop : très lent</Txt>
      <Txt x={185} y={182} size={10} color={C.grey}>(accéléré par les flippases)</Txt>
      <rect x={380} y={20} width={350} height={170} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={555} y={42} bold size={12}>Ce qui rend la membrane plus fluide</Txt>
      {[["chaînes courtes", "moins d'interactions entre chaînes"], ["insaturation cis", "coudes qui écartent les chaînes"], ["température élevée", "au-dessus de la température de fusion Tm"]].map(([a, b], i) => <g key={a}><Txt x={396} y={72 + i * 38} anchor="start" bold size={11}>{"↑ " + a}</Txt><Txt x={396} y={88 + i * 38} anchor="start" size={9.5} color={C.grey}>{b}</Txt></g>)}
      <rect x={10} y={206} width={720} height={204} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={228} bold size={12}>Rôles du cholestérol et des radeaux lipidiques</Txt>
      {chip(24, 244, 220, 70, "À température élevée", C.blue, 11.5, "le cholestérol rigidifie (limite le mouvement)")}
      {chip(260, 244, 220, 70, "À basse température", C.red, 11.5, "il empêche le gel (sépare les chaînes)")}
      {chip(496, 244, 220, 70, "Radeaux lipidiques", C.violet, 11.5, "cholestérol + sphingolipides")}
      <Txt x={370} y={344} size={10.5}>asymétrie : les feuillets externe et interne diffèrent en lipides et en enzymes</Txt>
      <Txt x={370} y={364} size={10.5}>technique de mesure de la mobilité : récupération de fluorescence après photoblanchiment (FRAP)</Txt>
      <Txt x={370} y={384} size={10.5} color={C.grey}>{"pompe Na⁺/K⁺-ATPase : 3 Na⁺ sortent, 2 K⁺ entrent, avec hydrolyse d'ATP"}</Txt>
    </Figure>
  );
}

// ─── Structures tertiaire et quaternaire ─────────────────────────────────
export function TertiaryQuaternaryDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Structures tertiaire et quaternaire des protéines" caption="La structure tertiaire est le repliement 3D d'une chaîne, stabilisé par des liaisons faibles et des ponts disulfure ; la structure quaternaire est l'association de plusieurs chaînes (sous-unités)">
      <Txt x={185} y={22} bold size={12.5} color={DEEP.blue}>Structure tertiaire (une chaîne)</Txt>
      <path d="M60,190 C40,120 90,60 150,80 C210,100 240,60 290,110 C330,160 270,230 220,210 C180,190 160,250 110,240 C80,232 70,210 60,190z" fill={C.blue} fillOpacity={0.2} stroke={DEEP.blue} strokeWidth={4} />
      {[[100, 130, "hydrophobe", C.amber], [220, 120, "ionique", C.red], [180, 200, "pont disulfure", C.green], [130, 200, "liaison H", C.violet]].map(([x, y, t, c], i) => <g key={i}><circle cx={Number(x)} cy={Number(y)} r={6} fill={String(c)} /></g>)}
      <rect x={10} y={264} width={350} height={146} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={185} y={284} bold size={11.5}>Forces stabilisantes</Txt>
      {[["hydrophobes", "acides aminés apolaires vers le cœur", C.amber], ["ioniques", "charges + et −", C.red], ["ponts disulfure", "liaisons covalentes cystéine–cystéine", C.green], ["liaisons hydrogène", "entre groupes polaires", C.violet]].map(([a, b, c], i) => (
        <g key={String(a)}><circle cx={26} cy={306 + i * 26} r={6} fill={String(c)} /><Txt x={40} y={310 + i * 26} anchor="start" bold size={10.5}>{String(a)}</Txt><Txt x={150} y={310 + i * 26} anchor="start" size={9.5} color={C.grey}>{String(b)}</Txt></g>
      ))}
      <Txt x={555} y={22} bold size={12.5} color={DEEP.violet}>Structure quaternaire (plusieurs chaînes)</Txt>
      {[[460, 60, "α", C.red], [560, 60, "β", C.blue], [460, 140, "β", C.blue], [560, 140, "α", C.red]].map(([x, y, t, c]) => <g key={`${x}${y}`}><circle cx={Number(x) + 40} cy={Number(y) + 30} r={40} fill={String(c)} fillOpacity={0.3} stroke={String(c)} strokeWidth={3} /><Txt x={Number(x) + 40} y={Number(y) + 36} bold size={18}>{String(t)}</Txt></g>)}
      <Txt x={555} y={230} bold size={12}>Hémoglobine : α₂β₂</Txt>
      <rect x={380} y={252} width={350} height={158} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={555} y={274} bold size={11.5}>Exemples de protéines à plusieurs sous-unités</Txt>
      {["hémoglobine : 4 chaînes (2 α + 2 β)", "Cro (virus) : homodimère", "capside du rhinovirus : nombreuses sous-unités", "collagène : triple hélice, glycine tous les 3 résidus", "α-kératine : deux hélices α enroulées"].map((t, i) => <Txt key={t} x={555} y={298 + i * 22} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Disaccharides ───────────────────────────────────────────────────────
export function DisaccharidesDiagram() {
  const ring = (x: number, y: number, c: string, t: string) => (
    <g key={x + t}><path d={`M${x},${y} l22,-14 l26,0 l16,20 l-22,16 l-30,0z`} fill={c} fillOpacity={0.3} stroke={c} strokeWidth={2.5} /><Txt x={x + 32} y={y + 4} bold size={9}>{t}</Txt></g>
  );
  const rows: [string, string, string, string, string, string, string][] = [
    ["Saccharose", "Glucose", "Fructose", "α1→β2", "non", C.blue, C.amber],
    ["Lactose", "Galactose", "Glucose", "β1→4", "oui", C.green, C.blue],
    ["Maltose", "Glucose", "Glucose", "α1→4", "oui", C.blue, C.blue],
  ];
  return (
    <Figure viewBox="0 0 740 330" title="Trois disaccharides à connaître" caption="Un disaccharide est formé de deux oses unis par une liaison glycosidique ; il est réducteur si le carbone anomérique d'un des oses reste libre (le saccharose ne l'est pas : les deux carbones anomériques sont engagés)">
      {rows.map(([n, a, b, l, r, c1, c2], i) => (
        <g key={n} transform={`translate(0 ${i * 96})`}>
          <rect x={10} y={10} width={720} height={84} rx={10} fill={c1} fillOpacity={0.05} stroke={c1} strokeWidth={1.6} />
          <Txt x={90} y={44} bold size={13}>{n}</Txt>
          {ring(190, 58, c1, a)}
          <path d="M254,50 L290,50" stroke="currentColor" strokeWidth={3} /><Txt x={272} y={40} bold size={9.5}>{l}</Txt>
          {ring(300, 58, c2, b)}
          <Txt x={400} y={44} anchor="start" size={10.5}>{a + " + " + b}</Txt>
          <rect x={600} y={28} width={110} height={40} rx={10} fill={r === "oui" ? C.green : C.red} fillOpacity={0.2} stroke={r === "oui" ? C.green : C.red} strokeWidth={2} /><Txt x={655} y={44} bold size={10.5}>réducteur ?</Txt><Txt x={655} y={60} bold size={11.5} color={r === "oui" ? DEEP.green : RED}>{r}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── Glycoconjugués ──────────────────────────────────────────────────────
export function GlycoconjugatesDiagram() {
  return (
    <Figure viewBox="0 0 740 420" title="Glycoconjugués : glycoprotéines et protéoglycanes" caption="Glycoprotéine : moins de 15 % de sucres ; protéoglycane : plus de 15 % de sucres, en longues chaînes de glycosaminoglycanes ; deux types de glycosylation : N-liée sur l'asparagine, O-liée sur la sérine ou la thréonine">
      <rect x={10} y={10} width={352} height={210} rx={12} fill={C.blue} fillOpacity={0.07} stroke={C.blue} strokeWidth={2} />
      <Txt x={186} y={32} bold size={12.5} color={DEEP.blue}>Glycoprotéine (moins de 15 % de sucre)</Txt>
      <ellipse cx={186} cy={130} rx={70} ry={54} fill={C.blue} fillOpacity={0.3} stroke={DEEP.blue} strokeWidth={3} /><Txt x={186} y={134} bold size={11}>Protéine</Txt>
      {[[96, 100], [280, 100], [240, 70]].map(([x, y], i) => <g key={i}><path d={`M${x < 186 ? x + 20 : x - 20},${y + 8} L${x},${y}`} stroke={C.green} strokeWidth={3} />{[0, 1, 2].map((k) => <circle key={k} cx={x + (x < 186 ? -k * 12 : k * 12)} cy={y - k * 4} r={6} fill={C.green} stroke="#fff" strokeWidth={1} />)}</g>)}
      <Txt x={186} y={210} size={10} color={C.grey}>courtes chaînes glucidiques ramifiées</Txt>
      <rect x={378} y={10} width={352} height={210} rx={12} fill={C.violet} fillOpacity={0.07} stroke={C.violet} strokeWidth={2} />
      <Txt x={554} y={32} bold size={12.5} color={DEEP.violet}>Protéoglycane (plus de 15 % de sucre)</Txt>
      <path d="M554,190 L554,60" stroke={C.violet} strokeWidth={9} strokeLinecap="round" />
      {[80, 108, 136, 164].map((y, i) => <g key={y}><path d={`M554,${y} L${i % 2 ? 660 : 450},${y - 6}`} stroke={C.amber} strokeWidth={5} strokeLinecap="round" /></g>)}
      <Txt x={454} y={72} size={9.5} bold color={DEEP.amber} anchor="middle">glycosaminoglycanes</Txt>
      <Txt x={554} y={210} size={10} color={C.grey}>exemple : agrécane du cartilage (chondroïtine sulfate)</Txt>
      <rect x={10} y={234} width={352} height={176} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={186} y={256} bold size={12}>Glycosylation N-liée</Txt>
      {["fixée sur l'azote amide de l'asparagine (Asn)", "motif consensus : Asn – X – Ser/Thr", "la chaîne commence par la N-acétylglucosamine", "ajout de résidus par les glycosyltransférases"].map((t, i) => <Txt key={t} x={186} y={282 + i * 24} size={10.5}>{t}</Txt>)}
      <rect x={378} y={234} width={352} height={176} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={554} y={256} bold size={12}>Glycosylation O-liée</Txt>
      {["fixée sur l'oxygène de l'hydroxyle de", "la sérine (Ser) ou de la thréonine (Thr)", "exemples de GAG : héparine (anticoagulant),", "chondroïtine sulfate (cartilage), acide hyaluronique"].map((t, i) => <Txt key={t} x={554} y={282 + i * 24} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}

// ─── Enzyme de restriction ───────────────────────────────────────────────
export function RestrictionEnzymeDiagram() {
  const bases = "GAATTC";
  return (
    <Figure viewBox="0 0 740 380" title="Enzyme de restriction : coupure d'un site palindromique" caption="L'endonucléase de type II (dimère) reconnaît une séquence à symétrie d'ordre 2 (ici GAATTC, exemple d'EcoRI) et coupe les deux brins avec un ion magnésium ; la bactérie protège son propre ADN en méthylant ces sites">
      <Txt x={370} y={22} bold size={12}>Avant la coupure</Txt>
      {bases.split("").map((b, i) => <g key={i}><rect x={230 + i * 46} y={36} width={42} height={36} rx={6} fill={["A", "T"].includes(b) ? C.amber : C.blue} fillOpacity={0.3} stroke="#888" strokeWidth={1.5} /><Txt x={251 + i * 46} y={60} bold size={15}>{b}</Txt></g>)}
      {[..."CTTAAG"].map((b, i) => <g key={i}><rect x={230 + i * 46} y={78} width={42} height={36} rx={6} fill={["A", "T"].includes(b) ? C.amber : C.blue} fillOpacity={0.3} stroke="#888" strokeWidth={1.5} /><Txt x={251 + i * 46} y={102} bold size={15}>{b}</Txt></g>)}
      <Txt x={220} y={60} anchor="end" bold size={10.5}>5′</Txt><Txt x={510} y={60} anchor="start" bold size={10.5}>3′</Txt><Txt x={220} y={102} anchor="end" bold size={10.5}>3′</Txt><Txt x={510} y={102} anchor="start" bold size={10.5}>5′</Txt>
      <path d="M252,34 L252,116 M482,34 L482,116" stroke={RED} strokeWidth={3} strokeDasharray="5 3" /><Txt x={252} y={132} bold size={9.5} color={RED}>coupure</Txt><Txt x={482} y={132} bold size={9.5} color={RED}>coupure</Txt>
      <Txt x={370} y={168} bold size={12}>Après la coupure : extrémités « collantes »</Txt>
      {[..."G"].map((b, i) => <g key={i}><rect x={110} y={182} width={42} height={36} rx={6} fill={C.blue} fillOpacity={0.3} stroke="#888" strokeWidth={1.5} /><Txt x={131} y={206} bold size={15}>G</Txt></g>)}
      {[..."CTTAA"].map((b, i) => <g key={i}><rect x={110 - 4 * 0 + i * 46 - (i > 0 ? 0 : 0)} y={224} width={42} height={36} rx={6} fill={["A", "T"].includes(b) ? C.amber : C.blue} fillOpacity={0.3} stroke="#888" strokeWidth={1.5} /><Txt x={131 + i * 46} y={248} bold size={15}>{b}</Txt></g>)}
      <Txt x={340} y={210} anchor="start" size={10.5} bold>fragments avec extrémités sortantes AATT (5′)</Txt>
      <Txt x={340} y={230} anchor="start" size={10.5} color={C.grey}>ils se réassocient facilement : outil du clonage</Txt>
      <rect x={10} y={286} width={720} height={84} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      {["reconnaissance : répétition inversée (lue de même dans les deux sens sur les deux brins)", "catalyse : eau activée par Mg²⁺ ; liaison phosphodiester rompue, phosphate en 5′", "protection : les méthylases marquent l'ADN de l'hôte : le site méthylé n'est plus coupé"].map((t, i) => <Txt key={t} x={370} y={310 + i * 22} size={10.5}>{t}</Txt>)}
    </Figure>
  );
}
