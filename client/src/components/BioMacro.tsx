import { Figure, C, Txt, Dot } from "./Figure";
import { RED, OK, DEEP, leader, arrow, box, hexPoints } from "./FigKit";

// Biochimie S1 — glucides, lipides et membranes, vitamines.

// Anneau pyranose de Haworth : substituants (true = vers le haut) pour C1..C5.
function Pyranose({ cx, cy, r = 34, up, label, c = C.blue }: { cx: number; cy: number; r?: number; up: boolean[]; label?: string; c?: string }) {
  const h = r * 0.62;
  // O (haut droite), C1 (droite), C2 (bas droite), C3 (bas gauche), C4 (gauche), C5 (haut gauche)
  const order: [number, number][] = [[cx + r * 0.5, cy - h], [cx + r, cy], [cx + r * 0.5, cy + h], [cx - r * 0.5, cy + h], [cx - r, cy], [cx - r * 0.5, cy - h]];
  return (
    <g>
      <polygon points={order.map((p) => p.join(",")).join(" ")} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={2.5} />
      <circle cx={order[0][0]} cy={order[0][1]} r={8} fill="#fff" stroke={c} strokeWidth={2} />
      <Txt x={order[0][0]} y={order[0][1] + 3.5} bold size={9.5} color={RED}>O</Txt>
      {[1, 2, 3, 4, 5].map((k) => {
        const [x, y] = order[k];
        const dy = up[k - 1] ? -16 : 16;
        return (
          <g key={k}>
            <line x1={x} y1={y} x2={x} y2={y + dy} stroke="currentColor" strokeWidth={1.6} />
            <Txt x={x} y={y + dy + (dy > 0 ? 11 : -3)} size={9.5} color={k === 1 ? RED : "currentColor"} bold={k === 1}>{k === 5 ? "CH₂OH" : "OH"}</Txt>
          </g>
        );
      })}
      {label && <Txt x={cx} y={cy + r + 44} bold size={11} color={c}>{label}</Txt>}
    </g>
  );
}

// ─── 1. Monosaccharides ──────────────────────────────────────────────────
export function MonosaccharidesDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Glucose : forme linéaire, cyclisation et anomères α et β" caption="Le D-glucose se cyclise en pyranose : le nouveau carbone anomérique C1 porte un OH vers le bas (α) ou vers le haut (β) ; mutarotation à l'équilibre">
      <Txt x={84} y={22} bold size={12}>D-glucose (Fischer)</Txt>
      <line x1={84} y1={36} x2={84} y2={230} stroke="currentColor" strokeWidth={3} />
      {[["CHO", 0, "", ""], ["", 1, "H", "OH"], ["", 2, "HO", "H"], ["", 3, "H", "OH"], ["", 4, "H", "OH"], ["CH₂OH", 5, "", ""]].map(([t, i, l, r], k) => {
        const y = 44 + k * 36;
        return (
          <g key={k}>
            {t ? <Txt x={84} y={y + (k === 0 ? 0 : 20)} bold size={11} color={k === 0 ? RED : "currentColor"}>{String(t)}</Txt> : (
              <>
                <line x1={62} y1={y + 12} x2={106} y2={y + 12} stroke="currentColor" strokeWidth={2} />
                <Txt x={52} y={y + 16} size={10.5} anchor="end">{String(l)}</Txt><Txt x={116} y={y + 16} size={10.5} anchor="start">{String(r)}</Txt>
                <Txt x={84} y={y + 10} size={8} color={C.grey}>{`C${Number(i) + 1}`}</Txt>
              </>
            )}
          </g>
        );
      })}
      <Txt x={84} y={252} size={10} color={C.grey}>aldohexose</Txt>
      {arrow("M150,140 L214,140")}
      <Txt x={182} y={128} size={9.5} bold color={C.violet}>C5–OH attaque C1=O</Txt>
      <g transform="translate(0 0)">
        <Pyranose cx={300} cy={110} up={[false, false, true, false, true]} label="α-D-glucopyranose" c={C.blue} />
        <Pyranose cx={300} cy={286} up={[true, false, true, false, true]} label="β-D-glucopyranose" c={C.green} />
      </g>
      <path d="M300,176 L300,204" stroke="currentColor" strokeWidth={2} markerStart="url(#fig-arrow)" markerEnd="url(#fig-arrow)" />
      <Txt x={316} y={188} anchor="start" size={10.5} bold color="#6a45b0">mutarotation</Txt>
      <Txt x={316} y={202} anchor="start" size={10} color={C.grey}>α ≈ 36 % ⇌ β ≈ 64 %</Txt>
      <line x1={452} y1={30} x2={452} y2={420} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={596} y={22} bold size={12}>Classification et isomères</Txt>
      {[
        ["Aldoses / cétoses", "aldose : CHO (glucose)|cétose : C=O interne (fructose)", C.blue],
        ["Nombre de carbones", "triose, tétrose, pentose (ribose)|hexose (glucose)", C.green],
        ["Épimères", "galactose : épimère en C4|mannose : épimère en C2", C.amber],
        ["Anomères", "α et β : configuration|du carbone anomérique (C1)", C.violet],
        ["Sucres réducteurs", "carbone anomérique libre :|réducteur (glucose)", RED],
      ].map(([t, s, c], i) => (
        <g key={String(t)}>
          <rect x={462} y={38 + i * 72} width={268} height={62} rx={10} fill={String(c)} fillOpacity={0.09} stroke={String(c)} strokeWidth={1.8} />
          <Txt x={596} y={60 + i * 72} bold size={11.5} color={String(c)}>{String(t)}</Txt>
          <Txt x={596} y={80 + i * 72} size={9.5} color={C.grey}>{String(s).split("|")[0]}</Txt>
          <Txt x={596} y={92 + i * 72} size={9.5} color={C.grey}>{String(s).split("|")[1] ?? ""}</Txt>
        </g>
      ))}
      <Txt x={220} y={420} size={10.5} color={C.grey}>le fructose forme surtout un cycle furanose à 5 chaînons</Txt>
    </Figure>
  );
}

// ─── 2. Liaisons glycosidiques et disaccharides ──────────────────────────
export function GlycosidicBondsDiagram() {
  const di = (y: number, name: string, sub: string, l: { up: boolean[]; c: string }, r: { up: boolean[]; c: string; furan?: boolean }, bond: string, red: string, redC: string) => (
    <g transform={`translate(0 ${y})`}>
      <rect x={6} y={0} width={728} height={122} rx={10} fill={C.grey} fillOpacity={0.05} stroke="currentColor" strokeOpacity={0.2} />
      <Txt x={90} y={26} bold size={13}>{name}</Txt><Txt x={90} y={44} size={10} color={C.grey}>{sub}</Txt>
      <Pyranose cx={250} cy={62} r={28} up={l.up} c={l.c} />
      {r.furan ? (
        <g>
          <polygon points="452,40 484,54 472,90 432,90 420,54" fill={r.c} fillOpacity={0.15} stroke={r.c} strokeWidth={2.5} />
          <Txt x={452} y={78} size={9.5} bold>fructose</Txt>
        </g>
      ) : <Pyranose cx={450} cy={62} r={28} up={r.up} c={r.c} />}
      <circle cx={350} cy={62} r={12} fill={RED} /><Txt x={350} y={66} bold size={10} color="#fff">O</Txt>
      <line x1={282} y1={64} x2={338} y2={62} stroke="currentColor" strokeWidth={2.5} /><line x1={362} y1={62} x2={420} y2={62} stroke="currentColor" strokeWidth={2.5} />
      <Txt x={350} y={38} bold size={11} color={RED}>{bond}</Txt>
      <Txt x={640} y={54} bold size={11} color={redC}>{red}</Txt>
      <Txt x={640} y={72} size={9.5} color={C.grey}>{red.startsWith("non") ? "les 2 carbones anomériques engagés" : "1 carbone anomérique libre"}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 420" title="Liaisons glycosidiques : maltose, lactose et saccharose" caption="Liaison O-glycosidique : condensation entre un OH anomérique et un OH d'un autre sucre (− H₂O) ; maltose et lactose sont réducteurs, le saccharose ne l'est pas">
      {di(6, "Maltose", "glucose + glucose", { up: [false, false, true, false, true], c: C.blue }, { up: [true, false, true, false, true], c: C.blue }, "α(1→4)", "réducteur", C.green)}
      {di(136, "Lactose", "galactose + glucose", { up: [true, false, true, true, true], c: C.amber }, { up: [true, false, true, false, true], c: C.blue }, "β(1→4)", "réducteur", C.green)}
      {di(266, "Saccharose", "glucose + fructose", { up: [false, false, true, false, true], c: C.blue }, { up: [], c: C.red, furan: true }, "α(1→β2)", "non réducteur", RED)}
      <Txt x={370} y={404} size={10.5} color={C.grey}>lactase : hydrolyse le lactose (β) — maltase / saccharase : maltose / saccharose (α) — intolérance au lactose = déficit en lactase</Txt>
    </Figure>
  );
}

// ─── 3. Polysaccharides ──────────────────────────────────────────────────
export function PolysaccharidesDiagram() {
  const chain = (x: number, y: number, n: number, c: string, dx = 22) => (
    <g>
      <line x1={x} y1={y} x2={x + (n - 1) * dx} y2={y} stroke={c} strokeWidth={3} />
      {Array.from({ length: n }).map((_, i) => <circle key={i} cx={x + i * dx} cy={y} r={7} fill={c} fillOpacity={0.85} stroke="#fff" />)}
    </g>
  );
  const panel = (x: number, y: number, t: string, s: string, c: string, body: React.ReactNode, foot: string) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={0} width={356} height={196} rx={10} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={2} />
      <Txt x={178} y={26} bold size={13} color={c}>{t}</Txt><Txt x={178} y={42} size={10} color={C.grey}>{s}</Txt>
      {body}
      <Txt x={178} y={184} size={10} bold>{foot}</Txt>
    </g>
  );
  return (
    <Figure viewBox="0 0 740 420" title="Polysaccharides : amylose, amylopectine, glycogène, cellulose" caption="Amidon (amylose, amylopectine) et glycogène : réserves (liaisons α) ; cellulose : rôle structural (liaisons β)">
      {panel(6, 6, "Amylose", "α(1→4), chaîne linéaire enroulée en hélice", C.blue, (
        <path d="M40,100 q20,-50 40,0 t40,0 t40,0 t40,0 t40,0 t40,0" fill="none" stroke={C.blue} strokeWidth={6} strokeLinecap="round" />
      ), "amidon (végétaux) • hydrolysé par l'amylase")}
      {panel(374, 6, "Amylopectine", "α(1→4) + branches α(1→6) tous les 24-30 résidus", C.green, (
        <g>
          {chain(40, 110, 12, C.green)}
          {[3, 8].map((i) => <g key={i}><line x1={40 + i * 22} y1={110} x2={40 + i * 22 + 12} y2={70} stroke={C.red} strokeWidth={2.5} />{chain(40 + i * 22 + 12, 70, 5, C.green, 20)}</g>)}
          <Txt x={126} y={62} size={9.5} bold color={RED}>α(1→6)</Txt>
        </g>
      ), "amidon (végétaux) — ≈ 80 % de l'amidon")}
      {panel(6, 216, "Glycogène", "α(1→4) + branches α(1→6) tous les 8-12 résidus", C.amber, (
        <g>
          {chain(40, 130, 12, C.amber)}
          {[1, 3, 5, 7, 9].map((i) => <g key={i}><line x1={40 + i * 22} y1={130} x2={40 + i * 22 + 10} y2={96} stroke={C.red} strokeWidth={2.5} />{chain(40 + i * 22 + 10, 96, 3, C.amber, 18)}<line x1={40 + i * 22} y1={130} x2={40 + i * 22 + 10} y2={164} stroke={C.red} strokeWidth={2} />{chain(40 + i * 22 + 10, 164, 2, C.amber, 18)}</g>)}
        </g>
      ), "réserve animale : foie et muscle — très ramifié")}
      {panel(374, 216, "Cellulose", "β(1→4), chaînes droites reliées par liaisons H", C.violet, (
        <g>
          {[86, 110, 134].map((y) => chain(50, y, 12, C.violet, 24))}
          {[86, 110].map((y) => [80, 160, 240].map((x) => <line key={`${y}${x}`} x1={x} y1={y + 8} x2={x} y2={y + 16} stroke={C.red} strokeWidth={2} strokeDasharray="3 2" />))}
        </g>
      ), "structural (paroi végétale) • non digérée (pas de β-glucosidase)")}
      <Txt x={370} y={422} size={10.5} color={C.grey}>α → forme des hélices, réserve, digestible • β → chaînes linéaires rigides, rôle structural</Txt>
    </Figure>
  );
}

// ─── 4. Acides gras ──────────────────────────────────────────────────────
export function FattyAcidsDiagram() {
  const zig = (x0: number, y0: number, n: number, kinkAt?: number, trans = false) => {
    const pts: [number, number][] = [[x0, y0]];
    let x = x0, y = y0, up = false;
    for (let i = 0; i < n; i++) {
      x += 26;
      const isKink = kinkAt !== undefined && (i === kinkAt || i === kinkAt + 1);
      y += up ? -16 : 16;
      up = !up;
      if (isKink && !trans) { y += up ? 8 : -8; }
      pts.push([x, y]);
    }
    return pts;
  };
  const draw = (pts: [number, number][], c: string) => <polyline points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke={c} strokeWidth={3.5} strokeLinejoin="round" />;
  return (
    <Figure viewBox="0 0 740 400" title="Acides gras saturés et insaturés" caption="Les doubles liaisons cis créent des coudes qui empêchent l'empilement compact des chaînes : les acides gras insaturés sont plus fluides et ont un point de fusion plus bas">
      <Txt x={370} y={20} bold size={12.5}>Structure : COOH terminal + chaîne hydrocarbonée (C1 → oméga)</Txt>
      {[
        ["Acide stéarique (18:0)", "saturé — chaîne droite", C.blue, zig(90, 62, 16), false, "point de fusion élevé (≈ 70 °C)"],
        ["Acide oléique (18:1 cis Δ9)", "monoinsaturé — coude cis", C.green, zig(90, 168, 16, 8), true, "point de fusion ≈ 13 °C"],
        ["Acide élaïdique (18:1 trans)", "insaturé trans — presque droit", C.red, zig(90, 274, 16, 8, true), false, "empilement proche du saturé"],
      ].map(([t, s, c, pts, kink, note], i) => {
        const y = 62 + i * 106;
        return (
          <g key={String(t)}>
            <Txt x={20} y={y - 24} anchor="start" bold size={11.5} color={String(c)}>{String(t)}</Txt>
            <Txt x={20} y={y - 10} anchor="start" size={9.5} color={C.grey}>{String(s)}</Txt>
            <circle cx={64} cy={y + 8} r={13} fill={RED} /><Txt x={64} y={y + 12} bold size={9} color="#fff">COOH</Txt>
            {draw(pts as [number, number][], String(c))}
            {kink && <circle cx={(pts as [number, number][])[8][0] + 13} cy={(pts as [number, number][])[8][1] + 4} r={9} fill="none" stroke={C.amber} strokeWidth={2.5} />}
            <Txt x={470} y={y - 18} anchor="start" size={10} color={C.grey}>{String(note)}</Txt>
          </g>
        );
      })}
      {[["Numérotation", "C1 = carboxyle • Δ9 : double liaison au carbone 9 depuis le COOH", C.blue], ["Oméga", "ω-3 (α-linolénique) et ω-6 (linoléique) : acides gras essentiels", C.amber], ["Fluidité", "↑ insaturation, ↓ longueur → ↑ fluidité de la membrane", C.green]].map(([t, s, c], i) => (
        <g key={String(t)}>
          <rect x={20 + i * 236} y={334} width={226} height={56} rx={8} fill={String(c)} fillOpacity={0.09} stroke={String(c)} strokeWidth={1.6} />
          <Txt x={133 + i * 236} y={352} bold size={11} color={String(c)}>{String(t)}</Txt>
          <Txt x={133 + i * 236} y={368} size={9} color={C.grey}>{String(s).slice(0, 38)}</Txt>
          <Txt x={133 + i * 236} y={380} size={9} color={C.grey}>{String(s).slice(38).trim()}</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 5. Lipides membranaires ─────────────────────────────────────────────
export function MembraneLipidsDiagram() {
  const head = (x: number, y: number, c: string, t: string) => <g><circle cx={x} cy={y} r={20} fill={c} fillOpacity={0.85} stroke="#fff" strokeWidth={2} /><Txt x={x} y={y + 4} bold size={9.5} color="#fff">{t}</Txt></g>;
  const tails = (x: number, y: number, c: string) => (
    <>
      <path d={`M${x - 8},${y} q-8,20 0,40 q8,20 0,40 q-8,20 0,40`} fill="none" stroke={c} strokeWidth={4} />
      <path d={`M${x + 8},${y} q8,20 0,40 q-8,20 0,40 q8,20 0,40`} fill="none" stroke={c} strokeWidth={4} />
    </>
  );
  const panel = (x: number, t: string, s: string, c: string, body: React.ReactNode, lines: string[]) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={6} width={238} height={388} rx={10} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={2} />
      <Txt x={119} y={30} bold size={13} color={c}>{t}</Txt><Txt x={119} y={46} size={10} color={C.grey}>{s}</Txt>
      {body}
      {lines.map((l, i) => <Txt key={l} x={119} y={288 + i * 17} size={10.5}>{l}</Txt>)}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 400" title="Les trois grands types de lipides membranaires" caption="Glycérophospholipides (glycérol), sphingolipides (sphingosine) et cholestérol : lipides amphiphiles à tête polaire et queues hydrophobes">
      {panel(6, "Glycérophospholipide", "squelette de glycérol", C.blue, (
        <g>
          {head(119, 88, C.blue, "tête")}
          <rect x={104} y={112} width={30} height={22} rx={4} fill={C.violet} fillOpacity={0.8} /><Txt x={119} y={127} size={9} bold color="#fff">P</Txt>
          <rect x={92} y={136} width={54} height={20} rx={4} fill={C.amber} fillOpacity={0.7} /><Txt x={119} y={150} size={9} bold>glycérol</Txt>
          {tails(119, 158, C.amber)}
          <Txt x={190} y={200} anchor="start" size={9} color={C.grey}>saturé</Txt><Txt x={190} y={230} anchor="start" size={9} color={C.grey}>insaturé (cis)</Txt>
        </g>
      ), ["glycérol + 2 acides gras + phosphate", "+ tête : choline, éthanolamine, sérine…", "phosphatidylcholine = majoritaire"])}
      {panel(252, "Sphingolipide", "squelette de sphingosine", C.green, (
        <g>
          {head(119, 88, C.green, "tête")}
          <rect x={94} y={112} width={50} height={22} rx={4} fill={C.violet} fillOpacity={0.6} /><Txt x={119} y={127} size={9} bold color="#fff">phosphate / sucre</Txt>
          <rect x={92} y={136} width={54} height={20} rx={4} fill={C.green} fillOpacity={0.7} /><Txt x={119} y={150} size={9} bold color="#fff">sphingosine</Txt>
          {tails(119, 158, C.green)}
          <Txt x={190} y={200} anchor="start" size={9} color={C.grey}>acide gras (amide)</Txt>
        </g>
      ), ["sphingosine + 1 acide gras (amide)", "sphingomyéline (phosphocholine)", "glycolipides : cérébrosides, gangliosides"])}
      {panel(498, "Cholestérol", "stérol rigide", C.amber, (
        <g>
          {[[86, 130], [118, 112], [150, 130], [118, 148]].map(([x, y], i) => <polygon key={i} points={hexPoints(x, y, 20)} fill={C.amber} fillOpacity={0.5} stroke={DEEP.amber} strokeWidth={2} />)}
          <circle cx={70} cy={104} r={11} fill={RED} /><Txt x={70} y={108} bold size={9} color="#fff">OH</Txt>
          <path d="M170,132 q14,-8 18,8 q4,16 20,6 q10,-8 14,8" fill="none" stroke={DEEP.amber} strokeWidth={4} strokeLinecap="round" />
          <Txt x={119} y={210} size={10} color={C.grey}>noyau à 4 cycles + courte queue</Txt>
        </g>
      ), ["s'insère entre les phospholipides", "↑ rigidité à haute température", "↓ cristallisation à basse température"])}
      <Txt x={370} y={392} size={10.5} color={C.grey}>tous amphiphiles : tête polaire hydrophile + queues hydrophobes → auto-assemblage en bicouche</Txt>
    </Figure>
  );
}

// ─── 6. Auto-assemblage en membranes ─────────────────────────────────────
export function LipidAssemblyDiagram() {
  const ring = (cx: number, cy: number, r: number, n: number, c: string, inner = false) =>
    Array.from({ length: n }).map((_, i) => {
      const a = (i / n) * Math.PI * 2;
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      const x2 = cx + Math.cos(a) * (r - 22), y2 = cy + Math.sin(a) * (r - 22);
      return (
        <g key={`${r}${i}`}>
          <line x1={x} y1={y} x2={x2} y2={y2} stroke={C.amber} strokeWidth={3.5} />
          <circle cx={x} cy={y} r={7} fill={c} stroke="#fff" />
          {inner && <><line x1={cx + Math.cos(a) * (r - 30)} y1={cy + Math.sin(a) * (r - 30)} x2={cx + Math.cos(a) * (r - 52)} y2={cy + Math.sin(a) * (r - 52)} stroke={C.amber} strokeWidth={3.5} /><circle cx={cx + Math.cos(a) * (r - 30)} cy={cy + Math.sin(a) * (r - 30)} r={7} fill={c} stroke="#fff" /></>}
        </g>
      );
    });
  return (
    <Figure viewBox="0 0 740 400" title="Auto-assemblage des lipides : micelle, bicouche, liposome" caption="Effet hydrophobe : les queues se regroupent à l'abri de l'eau ; les phospholipides forment spontanément des bicouches et des vésicules fermées (liposomes)">
      <Txt x={110} y={22} bold size={13} color={C.blue}>Micelle</Txt><Txt x={110} y={38} size={10} color={C.grey}>lipides à une queue (savons)</Txt>
      {ring(110, 130, 56, 14, C.blue)}
      <Txt x={110} y={216} size={10} color={C.grey}>queues au centre, têtes vers l'eau</Txt>
      <Txt x={370} y={22} bold size={13} color={C.green}>Bicouche</Txt><Txt x={370} y={38} size={10} color={C.grey}>phospholipides à deux queues</Txt>
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i}>
          <circle cx={264 + i * 20} cy={92} r={7} fill={C.green} stroke="#fff" /><line x1={264 + i * 20 - 2.5} y1={98} x2={264 + i * 20 - 2.5} y2={130} stroke={C.amber} strokeWidth={2.4} /><line x1={264 + i * 20 + 2.5} y1={98} x2={264 + i * 20 + 2.5} y2={130} stroke={C.amber} strokeWidth={2.4} />
          <circle cx={264 + i * 20} cy={168} r={7} fill={C.green} stroke="#fff" /><line x1={264 + i * 20 - 2.5} y1={162} x2={264 + i * 20 - 2.5} y2={132} stroke={C.amber} strokeWidth={2.4} /><line x1={264 + i * 20 + 2.5} y1={162} x2={264 + i * 20 + 2.5} y2={132} stroke={C.amber} strokeWidth={2.4} />
        </g>
      ))}
      <Txt x={370} y={216} size={10} color={C.grey}>feuillets externe et interne, cœur hydrophobe</Txt>
      <Txt x={620} y={22} bold size={13} color={C.violet}>Liposome</Txt><Txt x={620} y={38} size={10} color={C.grey}>vésicule fermée (cavité aqueuse)</Txt>
      {ring(620, 130, 62, 18, C.violet, true)}
      <circle cx={620} cy={130} r={26} fill={C.blue} fillOpacity={0.15} /><Txt x={620} y={134} size={10} bold color={C.blue}>eau</Txt>
      <Txt x={620} y={216} size={10} color={C.grey}>transport de médicaments, modèle de membrane</Txt>
      <line x1={20} y1={240} x2={720} y2={240} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={370} y={262} bold size={12.5}>Mouvements des lipides dans la bicouche</Txt>
      <rect x={60} y={278} width={300} height={100} rx={8} fill={C.green} fillOpacity={0.07} stroke={C.green} strokeWidth={2} />
      <Txt x={210} y={298} bold size={11.5} color="#2a7a55">Diffusion latérale : rapide</Txt>
      <circle cx={130} cy={330} r={8} fill={C.green} /><Dot path="M130,330 L290,330" dur={3} r={8} color={C.green} />
      <Txt x={210} y={362} size={10} color={C.grey}>≈ 2 µm/s : fluidité de la membrane</Txt>
      <rect x={380} y={278} width={300} height={100} rx={8} fill={C.red} fillOpacity={0.07} stroke={C.red} strokeWidth={2} />
      <Txt x={530} y={298} bold size={11.5} color={RED}>Flip-flop : très lent</Txt>
      <Dot path="M530,318 L530,354" dur={5} r={8} color={C.red} />
      <Txt x={530} y={372} size={10} color={C.grey}>nécessite des flippases (ATP)</Txt>
    </Figure>
  );
}

// ─── 7. Vitamines hydrosolubles ──────────────────────────────────────────
export function WaterVitaminsDiagram() {
  const cards: [string, string, string, string, string][] = [
    ["B1 Thiamine", "TPP", "décarboxylation (PDH, α-cétoglutarate DH), transcétolase", "béribéri, Wernicke-Korsakoff", C.blue],
    ["B2 Riboflavine", "FMN / FAD", "oxydoréductions (flavoprotéines, succinate DH)", "ariboflavinose : chéilite, glossite", C.amber],
    ["B3 Niacine (PP)", "NAD⁺ / NADP⁺", "déshydrogénases, transfert d'hydrure", "pellagre : dermatite, diarrhée, démence", C.green],
    ["B5 Ac. pantothénique", "Coenzyme A", "transfert de groupes acyles (acétyl-CoA)", "rare", C.violet],
    ["B6 Pyridoxine", "PLP", "transamination, décarboxylation des acides aminés", "neuropathie, anémie", C.pink],
    ["B7 Biotine", "biocytine", "carboxylations (pyruvate carboxylase, ACC)", "rare (avidine de l'œuf cru)", "#4b8f9e"],
    ["B9 Folate", "tétrahydrofolate", "transfert d'unités à un carbone (nucléotides)", "anémie mégaloblastique, tube neural", C.red],
    ["B12 Cobalamine", "méthyl-, adénosylcobalamine", "méthionine synthase, méthylmalonyl-CoA mutase", "anémie pernicieuse, atteinte neurologique", C.blue],
    ["C Ascorbate", "acide ascorbique", "hydroxylation Pro/Lys du collagène, antioxydant", "scorbut", C.green],
  ];
  return (
    <Figure viewBox="0 0 740 480" title="Vitamines hydrosolubles, coenzymes et carences" caption="Les vitamines du groupe B sont les précurseurs de coenzymes ; la vitamine C intervient dans l'hydroxylation du collagène et comme antioxydant">
      {cards.map(([t, co, fn, def, c], i) => {
        const x = 6 + (i % 3) * 246;
        const y = 6 + Math.floor(i / 3) * 158;
        return (
          <g key={t} transform={`translate(${x} ${y})`}>
            <rect x={0} y={0} width={236} height={150} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
            <rect x={0} y={0} width={236} height={28} rx={10} fill={c} fillOpacity={0.3} />
            <Txt x={118} y={19} bold size={12}>{t}</Txt>
            <Txt x={118} y={46} size={10} color={C.grey}>coenzyme</Txt>
            <Txt x={118} y={62} bold size={12} color={c}>{co}</Txt>
            <Txt x={118} y={82} size={9} color={C.grey}>rôle</Txt>
            <Txt x={118} y={95} size={9.5}>{fn.split(",")[0].slice(0, 40)}</Txt>
            <Txt x={118} y={108} size={9.5}>{(fn.split(",").slice(1).join(",").trim() || "").slice(0, 40)}</Txt>
            <Txt x={118} y={128} size={9} color={RED} bold>carence</Txt>
            <Txt x={118} y={141} size={9.5} color={RED}>{def.slice(0, 42)}</Txt>
          </g>
        );
      })}
    </Figure>
  );
}

// ─── 8. Vitamines liposolubles ───────────────────────────────────────────
export function FatVitaminsDiagram() {
  return (
    <Figure viewBox="0 0 740 480" title="Vitamines liposolubles A, D, E, K" caption="A : vision et différenciation ; D : absorption du calcium (activation peau, foie, rein) ; E : antioxydant ; K : γ-carboxylation des facteurs de coagulation">
      {/* D : activation */}
      <rect x={6} y={6} width={728} height={200} rx={10} fill={C.amber} fillOpacity={0.07} stroke={C.amber} strokeWidth={2} />
      <Txt x={110} y={28} bold size={13} color="#a3701a">Vitamine D : voie d'activation</Txt>
      {[["Peau", "7-déhydrocholestérol", "UVB", C.amber, 20], ["Cholécalciférol", "vitamine D₃", "", C.blue, 196], ["Foie", "25-OH-D₃ (calcidiol)", "25-hydroxylase", C.green, 372], ["Rein", "1,25-(OH)₂-D₃ (calcitriol)", "1α-hydroxylase", C.red, 548]].map(([t, s, e, c, x], i) => (
        <g key={String(t)}>
          {box(Number(x), 52, 166, 56, String(t), String(s), String(c), 11.5)}
          {i < 3 && arrow(`M${Number(x) + 168},80 L${Number(x) + 206},80`, true)}
          {e && i > 0 && <Txt x={Number(x) - 12} y={46} size={9.5} bold color="#555">{String(e)}</Txt>}
        </g>
      ))}
      <Txt x={104} y={46} size={9.5} bold color="#a3701a">{""}</Txt>
      <Dot path="M100,130 L300,130 L460,130 L640,130" dur={5} r={8} color={C.amber} />
      <Txt x={370} y={158} bold size={11.5}>↑ absorption intestinale de Ca²⁺ et de phosphate • ↑ minéralisation osseuse</Txt>
      <Txt x={370} y={176} size={10} color={C.grey}>régulée par la PTH • carence : rachitisme (enfant), ostéomalacie (adulte)</Txt>
      <Txt x={370} y={194} size={10} color={C.grey}>rein : forme active — insuffisance rénale = déficit en calcitriol</Txt>
      {[["A", "rétinol → rétinal", "vision (11-cis-rétinal / rhodopsine), différenciation (acide rétinoïque, récepteurs nucléaires)", "héméralopie, xérophtalmie", C.blue],
        ["E", "α-tocophérol", "antioxydant membranaire : protège les acides gras polyinsaturés des radicaux libres", "hémolyse, neuropathie", C.green],
        ["K", "phylloquinone", "γ-carboxylation des Glu : facteurs II, VII, IX, X (coagulation) — antagonisée par la warfarine", "hémorragies", C.red]].map(([t, s, fn, def, c], i) => {
        const x = 6 + i * 246;
        return (
          <g key={String(t)} transform={`translate(${x} 222)`}>
            <rect x={0} y={0} width={236} height={252} rx={10} fill={String(c)} fillOpacity={0.07} stroke={String(c)} strokeWidth={2} />
            <circle cx={118} cy={40} r={28} fill={String(c)} fillOpacity={0.85} /><Txt x={118} y={49} bold size={24} color="#fff">{String(t)}</Txt>
            <Txt x={118} y={86} bold size={12} color={String(c)}>{String(s)}</Txt>
            {String(fn).match(/.{1,34}(\s|$)/g)?.map((l, k) => <Txt key={k} x={118} y={110 + k * 15} size={10}>{l.trim()}</Txt>)}
            <Txt x={118} y={214} bold size={10.5} color={RED}>carence</Txt><Txt x={118} y={230} size={10.5} color={RED}>{String(def)}</Txt>
          </g>
        );
      })}
    </Figure>
  );
}

