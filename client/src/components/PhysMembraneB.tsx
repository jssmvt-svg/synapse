import type { ReactNode } from "react";
import { Figure, C, Txt, Dot } from "./Figure";

// Physiologie générale — Lecture 1 (suite) : structures spécialisées, transports.

const MEM = "#e0a030";

// ─── 1. Structures spécialisées ──────────────────────────────────────────
export function SpecializedStructuresDiagram() {
  const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;
  return (
    <Figure viewBox="0 0 800 400" title="Structures spécialisées de la membrane cellulaire" caption="Microvillosités, cils, flagelle et jonctions intercellulaires (serrée, desmosome, communicante)">
      {/* deux cellules épithéliales */}
      <rect x={90} y={150} width={200} height={190} rx={12} fill={C.blue} fillOpacity={0.12} stroke={C.blue} strokeWidth={2} />
      <rect x={300} y={150} width={200} height={190} rx={12} fill={C.violet} fillOpacity={0.12} stroke={C.violet} strokeWidth={2} />
      <circle cx={190} cy={270} r={26} fill={C.blue} fillOpacity={0.3} stroke={C.blue} />
      <circle cx={400} cy={270} r={26} fill={C.violet} fillOpacity={0.3} stroke={C.violet} />
      {/* microvillosités */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={98 + i * 16} y={108} width={8} height={42} rx={4} fill={C.blue} fillOpacity={0.5} stroke={C.blue} />
      ))}
      {/* cils */}
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={i} d={`M${318 + i * 32},150 q${i % 2 ? 10 : -10},-30 0,-60 q${i % 2 ? -8 : 8},-20 0,-40`} fill="none" stroke={C.violet} strokeWidth={4} strokeLinecap="round" />
      ))}
      {/* jonctions intercellulaires */}
      <rect x={288} y={156} width={14} height={26} fill="#333" fillOpacity={0.7} />
      <g>
        <ellipse cx={295} cy={225} rx={12} ry={16} fill={C.red} fillOpacity={0.5} stroke={C.red} strokeWidth={2} />
        {[-8, 0, 8].map((d) => <path key={d} d={`M${283 - 28},${225 + d} L283,${225 + d} M${307},${225 + d} L${307 + 28},${225 + d}`} stroke={C.red} strokeWidth={1.5} />)}
      </g>
      <g fill={C.green} fillOpacity={0.6} stroke="#2a7a55">
        <rect x={290} y={280} width={10} height={9} /><rect x={290} y={294} width={10} height={9} /><rect x={290} y={308} width={10} height={9} />
      </g>
      {/* spermatozoïde */}
      <ellipse cx={560} cy={110} rx={22} ry={14} fill={C.green} fillOpacity={0.5} stroke="#2a7a55" strokeWidth={2} />
      <path d="M582,110 C610,130 630,90 660,110 C690,130 710,92 740,112" fill="none" stroke="#2a7a55" strokeWidth={3} strokeLinecap="round" />

      {/* légendes */}
      <line x1={170} y1={120} x2={130} y2={62} {...leader} />
      <Txt x={130} y={54} bold size={12}>Microvillosités</Txt>
      <Txt x={130} y={40} size={10} color={C.grey}>↑ surface d'absorption (intestin, rein)</Txt>
      <line x1={400} y1={90} x2={430} y2={62} {...leader} />
      <Txt x={440} y={30} anchor="start" bold size={12}>Cils</Txt>
      <Txt x={440} y={44} anchor="start" size={10} color={C.grey}>mouvement rythmique (voies respiratoires)</Txt>
      <Txt x={660} y={78} bold size={12}>Flagelle</Txt>
      <Txt x={660} y={92} size={10} color={C.grey}>propulsion (spermatozoïde)</Txt>
            <Txt x={520} y={190} anchor="start" bold size={12}>Jonction serrée</Txt>
      <line x1={514} y1={186} x2={306} y2={168} {...leader} />
      <Txt x={520} y={204} anchor="start" size={10} color={C.grey}>imperméable : barrière mécanique</Txt>
      <Txt x={520} y={262} anchor="start" bold size={12} color={C.red}>Desmosome</Txt>
      <line x1={512} y1={258} x2={312} y2={228} {...leader} />
      <Txt x={520} y={276} anchor="start" size={10} color={C.grey}>ancrage, résistance mécanique</Txt>
      <Txt x={520} y={330} anchor="start" bold size={12} color={C.green}>Jonction communicante</Txt>
      <line x1={512} y1={326} x2={306} y2={300} {...leader} />
      <Txt x={520} y={344} anchor="start" size={10} color={C.grey}>connexons : passage d'ions et de petites molécules</Txt>
      <Txt x={190} y={376} size={11} color={C.blue} bold>Cellule 1</Txt>
      <Txt x={400} y={376} size={11} color={C.violet} bold>Cellule 2</Txt>
    </Figure>
  );
}

// ─── 2. Transports passifs ───────────────────────────────────────────────
function Panel({ x, y, title, sub, children }: { x: number; y: number; title: string; sub?: string; children: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={0} width={230} height={210} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.18} />
      <rect x={1} y={34} width={228} height={62} fill={C.blue} fillOpacity={0.07} />
      <rect x={1} y={110} width={228} height={99} fill={C.blue} fillOpacity={0.02} />
      <Txt x={115} y={16} bold size={12}>{title}</Txt>
      {sub && <Txt x={115} y={29} size={9.5} color={C.grey}>{sub}</Txt>}
      {children}
    </g>
  );
}

const ptsTop: [number, number][] = [[24, 48], [58, 70], [92, 46], [130, 72], [170, 50], [204, 74], [40, 84], [150, 88]];
const ptsBot: [number, number][] = [[44, 150], [180, 168]];

function Solutes({ color = MEM }: { color?: string }) {
  return (
    <>
      {ptsTop.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={color} fillOpacity={0.85} />)}
      {ptsBot.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={color} fillOpacity={0.85} />)}
    </>
  );
}

export function PassiveTransportDiagram() {
  const band = (gap?: [number, number]) => (
    <g>
      <rect x={1} y={96} width={gap ? gap[0] - 1 : 228} height={14} fill={MEM} fillOpacity={0.35} stroke={MEM} />
      {gap && <rect x={gap[1]} y={96} width={229 - gap[1]} height={14} fill={MEM} fillOpacity={0.35} stroke={MEM} />}
    </g>
  );
  const arrowDown = (x: number) => <path d={`M${x},124 L${x},176`} stroke={C.red} strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" />;
  return (
    <Figure viewBox="0 0 720 440" title="Transport passif" caption="Transport passif : sans ATP, dans le sens du gradient (des concentrations élevées vers les faibles)">
      <Panel x={5} y={5} title="Diffusion simple" sub="à travers la bicouche (O₂, CO₂, liposolubles)">
        {band()}<Solutes />
        {[60, 115, 170].map((x, i) => <Dot key={x} path={`M${x},44 L${x + 8},176`} dur={3} delay={i * 1} r={4} color={MEM} />)}
        {arrowDown(206)}
        <Txt x={30} y={30} size={9} color={C.grey} anchor="start">{""}</Txt>
        <Txt x={115} y={204} size={9.5} color={C.red}>[ ] élevée → [ ] faible</Txt>
      </Panel>
      <Panel x={245} y={5} title="Diffusion simple par canal" sub="ions selon le gradient électrochimique">
        {band([98, 132])}
        <rect x={90} y={92} width={8} height={22} rx={3} fill={C.violet} /><rect x={132} y={92} width={8} height={22} rx={3} fill={C.violet} />
        <Solutes color={C.green} />
        {[0, 1.2].map((d) => <Dot key={d} path="M115,44 L115,176" dur={2.4} delay={d} r={4} color={C.green} />)}
        {arrowDown(206)}
        <Txt x={115} y={204} size={9.5} color={C.red}>protéine canal : sans énergie</Txt>
      </Panel>
      <Panel x={485} y={5} title="Diffusion facilitée" sub="glucose, acides aminés — transporteur, Tmax">
        {band([90, 140])}
        <path d="M84,92 h12 q10,10 0,22 h-12z M134,92 h12 v22 h-12 q-10,-10 0,-22z" fill={C.pink} stroke="#b0507a" strokeWidth={1.5} />
        <Solutes color={C.pink} />
        {[0, 1.5].map((d) => <Dot key={d} path="M115,44 L115,176" dur={3} delay={d} r={4.5} color={C.pink} />)}
        {arrowDown(206)}
        <Txt x={115} y={204} size={9.5} color={C.red}>spécifique, saturable (Tmax)</Txt>
      </Panel>
      <Panel x={125} y={225} title="Osmose" sub="l'eau va vers la plus forte pression osmotique">
        <rect x={1} y={96} width={228} height={14} fill="none" stroke={C.grey} strokeDasharray="4 3" strokeWidth={2} />
        {[[30, 46], [70, 70], [110, 50], [150, 76], [190, 52], [50, 84], [170, 88], [206, 78]].map(([x, y], i) => (
          <rect key={i} x={x - 5} y={y - 5} width={10} height={10} fill={C.violet} fillOpacity={0.7} />
        ))}
        {[54, 100, 146, 190].map((x, i) => <Dot key={x} path={`M${x},176 L${x},44`} dur={2.8} delay={i * 0.7} r={3.5} color={C.blue} />)}
        <path d="M20,150 L20,120" stroke={C.blue} strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" />
        <Txt x={125} y={190} size={9.5} color={C.blue}>H₂O ↑ solutés non diffusibles</Txt>
        <Txt x={125} y={204} size={9.5} color={C.grey}>285-295 mOsm/L (plasma)</Txt>
      </Panel>
      <Panel x={365} y={225} title="Filtration" sub="gradient de pression hydrostatique">
        <rect x={1} y={96} width={228} height={14} fill={C.grey} fillOpacity={0.2} />
        {[30, 70, 110, 150, 190].map((x) => <rect key={x} x={x - 3} y={96} width={6} height={14} fill="#fff" fillOpacity={0.9} />)}
        <rect x={60} y={38} width={110} height={8} fill={C.red} fillOpacity={0.8} />
        <path d="M115,20 L115,36" stroke={C.red} strokeWidth={3} markerEnd="url(#fig-arrow)" fill="none" />
        {[36, 74, 112, 150, 186].map((x, i) => <Dot key={x} path={`M${x},60 L${x},176`} dur={2.2} delay={i * 0.45} r={3.5} color={C.blue} />)}
        <circle cx={90} cy={78} r={9} fill={C.violet} fillOpacity={0.6} /><circle cx={140} cy={82} r={9} fill={C.violet} fillOpacity={0.6} />
        <Txt x={115} y={190} size={9.5} color={C.red}>Ph = ρ × g × h</Txt>
        <Txt x={115} y={204} size={9.5} color={C.grey}>eau + petites molécules passent</Txt>
      </Panel>
    </Figure>
  );
}

// ─── 3. Canaux ioniques ──────────────────────────────────────────────────
export function IonChannelsDiagram() {
  const cols = [
    { t: "Canal de fuite", l: ["toujours ouvert", "Na⁺ / K⁺ de fuite", "→ potentiel de repos"], c: C.grey },
    { t: "Voltage-dépendant", l: ["portes m / h (Na⁺ rapide)", "K⁺ : porte n", "Ca²⁺ lents (L, T, N)"], c: C.blue },
    { t: "Ligand-dépendant", l: ["nicotinique : Na⁺", "GABA / glycine : Cl⁻", "glutamate : cations"], c: C.green },
    { t: "Couplé aux protéines G", l: ["sous-unité βγ : canal K⁺", "sous-unité α : enzyme", "(adénylate / guanylate cyclase)"], c: C.violet },
    { t: "Connexon", l: ["jonction entre 2 cellules", "synapse électrique", "(cœur, muscle lisse)"], c: C.red },
  ];
  return (
    <Figure viewBox="0 0 720 280" title="Types de canaux ioniques membranaires" caption="Classification des canaux selon la dynamique : fuite, voltage-dépendants, ligand-dépendants, couplés aux protéines G, connexons">
      {cols.map((col, i) => {
        const x = 8 + i * 142;
        const cx = x + 66;
        return (
          <g key={col.t}>
            <rect x={x} y={8} width={134} height={262} rx={10} fill={col.c} fillOpacity={0.06} stroke={col.c} strokeOpacity={0.5} />
            <Txt x={cx} y={28} bold size={col.t.length > 18 ? 10.5 : 12} color={col.c}>{col.t}</Txt>
            {col.l.map((l, k) => <Txt key={l} x={cx} y={204 + k * 15} size={10}>{l}</Txt>)}
            {i < 4 ? (
              <>
                <rect x={x + 6} y={116} width={122} height={30} fill={MEM} fillOpacity={0.3} />
                <rect x={cx - 26} y={104} width={20} height={54} rx={7} fill={col.c} fillOpacity={0.6} />
                <rect x={cx + 6} y={104} width={20} height={54} rx={7} fill={col.c} fillOpacity={0.6} />
              </>
            ) : (
              <>
                <rect x={x + 6} y={88} width={122} height={20} fill={MEM} fillOpacity={0.3} />
                <rect x={x + 6} y={160} width={122} height={20} fill={MEM} fillOpacity={0.3} />
                <rect x={cx - 18} y={84} width={12} height={100} rx={5} fill={col.c} fillOpacity={0.6} />
                <rect x={cx + 6} y={84} width={12} height={100} rx={5} fill={col.c} fillOpacity={0.6} />
                <Txt x={x + 18} y={104} size={9}>cellule 1</Txt>
                <Txt x={x + 18} y={176} size={9}>cellule 2</Txt>
              </>
            )}
            {i === 0 && [0, 1.3].map((d) => <Dot key={d} path={`M${cx},50 L${cx},210`} dur={3.2} delay={d} r={4} color={C.amber} />)}
            {i === 1 && (
              <>
                <rect x={cx - 6} y={116} width={12} height={5} fill="#333" className="fig-pulse" />
                <rect x={cx - 6} y={140} width={12} height={5} fill="#666" className="fig-pulse" />
                <Txt x={cx - 14} y={80} size={9} color={C.grey}>dépolarisation</Txt>
                <path d={`M${cx},86 L${cx},100`} stroke={C.red} strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" />
                <Dot path={`M${cx},50 L${cx},210`} dur={2.4} delay={0.6} r={4} color={C.amber} />
              </>
            )}
            {i === 2 && (
              <>
                <circle cx={cx - 34} cy={82} r={7} fill={C.red} className="fig-pulse" />
                <Txt x={cx - 34} y={64} size={9} color={C.red}>ligand</Txt>
                {[0, 1.3].map((d) => <Dot key={d} path={`M${cx},50 L${cx},210`} dur={3} delay={d} r={4} color={C.amber} />)}
              </>
            )}
            {i === 3 && (
              <>
                <rect x={cx - 66} y={104} width={26} height={54} rx={7} fill={C.amber} fillOpacity={0.6} />
                <ellipse cx={cx - 53} cy={174} rx={13} ry={9} fill={C.green} fillOpacity={0.6} stroke="#2a7a55" />
                <Txt x={cx - 53} y={192} size={9} color="#2a7a55">G</Txt>
                <path d={`M${cx - 44},174 Q${cx - 10},206 ${cx + 6},166`} stroke={C.violet} strokeWidth={2} strokeDasharray="4 3" fill="none" className="fig-flow" markerEnd="url(#fig-arrow)" />
                {[0, 1.3].map((d) => <Dot key={d} path={`M${cx},50 L${cx},210`} dur={3} delay={d} r={4} color={C.amber} />)}
              </>
            )}
            {i === 4 && [0, 1.2].map((d) => <Dot key={d} path={`M${cx},60 L${cx},210`} dur={2.6} delay={d} r={3.5} color={C.green} />)}
          </g>
        );
      })}
    </Figure>
  );
}

// ─── 4. Transport actif ──────────────────────────────────────────────────
type Flow = { ion: string; dir: "in" | "out"; n: number; color: string; x: number };

function PumpPanel({ x, y, title, sub, flows, atp, protein = C.violet }: {
  x: number; y: number; title: string; sub: string; flows: Flow[]; atp?: boolean; protein?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={0} width={230} height={196} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.18} />
      <Txt x={115} y={16} bold size={12}>{title}</Txt>
      <Txt x={115} y={29} size={9.5} color={C.grey}>{sub}</Txt>
      <Txt x={8} y={48} anchor="start" size={9} color={C.grey}>extérieur</Txt>
      <Txt x={8} y={188} anchor="start" size={9} color={C.grey}>intérieur</Txt>
      <rect x={1} y={88} width={228} height={24} fill={MEM} fillOpacity={0.3} />
      <rect x={82} y={78} width={66} height={44} rx={10} fill={protein} fillOpacity={0.6} stroke={protein} strokeWidth={2} />
      {flows.map((f) =>
        Array.from({ length: f.n }).map((_, k) => (
          <Dot
            key={f.ion + k}
            path={f.dir === "out" ? `M${f.x + k * 6},160 L${f.x + k * 6},44` : `M${f.x + k * 6},44 L${f.x + k * 6},160`}
            dur={3.2} delay={k * 0.7 + (f.dir === "in" ? 0.3 : 0)} r={7} color={f.color} label={f.ion}
          />
        )),
      )}
      {atp && (
        <g>
          <Txt x={172} y={160} size={9.5} bold color={C.amber}>ATP → ADP + Pi</Txt>
          <path d="M170,150 L148,120" stroke={C.amber} strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" />
        </g>
      )}
    </g>
  );
}

export function ActiveTransportDiagram() {
  const na = C.amber, k = C.green, ca = C.violet, h = C.red, gl = C.pink;
  return (
    <Figure viewBox="0 0 720 470" title="Transport actif primaire et secondaire" caption="Actif primaire : pompes ATPase. Actif secondaire : utilise le gradient de Na⁺ créé par la pompe Na⁺/K⁺ (cotransport et contre-transport)">
      <Txt x={10} y={16} anchor="start" bold size={13} color={C.violet}>Transport actif primaire (consommation directe d'ATP)</Txt>
      <PumpPanel x={5} y={24} title="Pompe Na⁺/K⁺-ATPase" sub="3 Na⁺ dehors / 2 K⁺ dedans — électrogène" atp flows={[
        { ion: "Na", dir: "out", n: 3, color: na, x: 92 }, { ion: "K", dir: "in", n: 2, color: k, x: 118 },
      ]} />
      <PumpPanel x={245} y={24} title="Pompe Ca²⁺ (sarcolemme, SERCA)" sub="expulse / recapture le Ca²⁺ — relaxation" atp flows={[
        { ion: "Ca", dir: "out", n: 2, color: ca, x: 100 },
      ]} protein={C.blue} />
      <PumpPanel x={485} y={24} title="Pompe H⁺/K⁺-ATPase" sub="cellules pariétales, néphrocytes" atp flows={[
        { ion: "H", dir: "out", n: 1, color: h, x: 96 }, { ion: "K", dir: "in", n: 1, color: k, x: 126 },
      ]} protein={C.red} />

      <Txt x={10} y={246} anchor="start" bold size={13} color={C.green}>Transport actif secondaire (gradient de Na⁺, sans ATP direct)</Txt>
      <PumpPanel x={5} y={254} title="Cotransport Na⁺/glucose" sub="même sens : entrent ensemble" flows={[
        { ion: "Na", dir: "in", n: 2, color: na, x: 92 }, { ion: "G", dir: "in", n: 1, color: gl, x: 128 },
      ]} protein={C.green} />
      <PumpPanel x={245} y={254} title="Échangeur Na⁺/H⁺" sub="contre-transport : sens opposés" flows={[
        { ion: "Na", dir: "in", n: 1, color: na, x: 98 }, { ion: "H", dir: "out", n: 1, color: h, x: 126 },
      ]} protein={C.green} />
      <PumpPanel x={485} y={254} title="Échangeur Na⁺/Ca²⁺" sub="3 Na⁺ entrent, 1 Ca²⁺ sort" flows={[
        { ion: "Na", dir: "in", n: 3, color: na, x: 88 }, { ion: "Ca", dir: "out", n: 1, color: ca, x: 128 },
      ]} protein={C.green} />
      <Txt x={360} y={462} size={11} color={C.grey}>Tous : contre ou grâce au gradient, protéine spécifique, limités par le Tmax, saturables, compétitifs</Txt>
    </Figure>
  );
}

// ─── 5. Endocytose et exocytose ──────────────────────────────────────────
export function EndoExocytosisDiagram() {
  const membrane = (d: string) => <path d={d} fill="none" stroke={MEM} strokeWidth={9} strokeLinecap="round" />;
  const P = ({ x, title, sub, children }: { x: number; title: string; sub: string; children: ReactNode }) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={4} width={172} height={310} rx={10} fill="none" stroke="currentColor" strokeOpacity={0.18} />
      <Txt x={86} y={24} bold size={12}>{title}</Txt>
      <Txt x={86} y={38} size={9.5} color={C.grey}>{sub}</Txt>
      <Txt x={10} y={60} anchor="start" size={9} color={C.grey}>extérieur</Txt>
      <Txt x={10} y={306} anchor="start" size={9} color={C.grey}>cytoplasme</Txt>
      {children}
    </g>
  );
  return (
    <Figure viewBox="0 0 720 330" title="Endocytose et exocytose" caption="Endocytose (phagocytose, pinocytose, médiée par récepteur) et exocytose : l'équilibre entre les deux maintient la taille de la membrane">
      <P x={5} title="Phagocytose" sub="grosses particules solides">
        {membrane("M8,150 L40,150 C48,150 50,200 86,200 C122,200 124,150 132,150 L164,150")}
        <circle cx={86} cy={128} r={22} fill={C.red} fillOpacity={0.6} stroke="#b03a4a" strokeWidth={2} />
        <path d="M60,150 C56,120 64,106 70,104 M112,104 C118,106 118,120 112,150" fill="none" stroke={MEM} strokeWidth={7} strokeLinecap="round" />
        <circle cx={86} cy={252} r={22} fill={C.red} fillOpacity={0.6} stroke="#b03a4a" strokeWidth={2} />
        <path d="M86,206 L86,224" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" className="fig-flow" />
        <Txt x={86} y={288} size={10} color={C.grey}>vacuole de phagocytose</Txt>
      </P>
      <P x={182} title="Pinocytose" sub="liquide, petites molécules">
        {membrane("M8,150 L60,150 C64,150 66,180 86,180 C106,180 108,150 112,150 L164,150")}
        {[[70, 110], [96, 96], [122, 118]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={C.blue} />)}
        <circle cx={86} cy={252} r={10} fill={C.blue} fillOpacity={0.35} stroke={MEM} strokeWidth={4} />
        <path d="M86,190 L86,232" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" className="fig-flow" />
        <Txt x={86} y={288} size={10} color={C.grey}>petite vésicule</Txt>
      </P>
      <P x={359} title="Médiée par récepteur" sub="ligand + récepteur, puits recouvert">
        {membrane("M8,150 L56,150 C60,150 62,182 86,182 C110,182 112,150 116,150 L164,150")}
        {[64, 86, 108].map((x) => (
          <g key={x}>
            <path d={`M${x - 5},150 v-14 M${x + 5},150 v-14 M${x - 5},136 h10`} stroke={C.violet} strokeWidth={2} fill="none" />
            <circle cx={x} cy={120} r={5} fill={C.red} />
          </g>
        ))}
        <path d="M60,184 C60,196 112,196 112,184" fill="none" stroke={C.grey} strokeWidth={4} strokeDasharray="3 2" />
        <Txt x={86} y={208} size={9} color={C.grey}>clathrine</Txt>
        <circle cx={86} cy={258} r={11} fill="none" stroke={C.grey} strokeWidth={3} strokeDasharray="3 2" />
        <circle cx={86} cy={258} r={5} fill={C.red} />
        <Txt x={86} y={288} size={10} color={C.grey}>vésicule spécifique</Txt>
      </P>
      <P x={536} title="Exocytose" sub="fusion d'une vésicule à la membrane">
        {membrane("M8,150 L44,150 C44,150 44,150 44,150 M128,150 L164,150")}
        <path d="M44,150 C48,196 124,196 128,150" fill="none" stroke={MEM} strokeWidth={9} strokeLinecap="round" />
        <circle cx={86} cy={252} r={12} fill={C.green} fillOpacity={0.3} stroke={MEM} strokeWidth={4} />
        <path d="M86,238 L86,210" stroke="currentColor" strokeWidth={2} markerEnd="url(#fig-arrow)" fill="none" className="fig-flow" />
        {[62, 86, 110].map((x, i) => <Dot key={x} path={`M${x},176 L${x + (i - 1) * 16},70`} dur={2.6} delay={i * 0.6} r={4} color={C.green} />)}
        <Txt x={86} y={288} size={10} color={C.grey}>contenu libéré à l'extérieur</Txt>
      </P>
    </Figure>
  );
}
