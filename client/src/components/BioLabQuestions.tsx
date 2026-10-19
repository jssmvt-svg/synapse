import { Figure, C, Txt } from "./Figure";
import { OK, DEEP, arrow, box, Axes, fnPath } from "./FigKit";

// Biochimie S1 — schémas des questions de fin de labo (rotors, hémodialyse,
// évolution de [S] et [P] au cours d'une réaction enzymatique).

// ─── Lab 7 : les trois types de rotors ───────────────────────────────────
export function LabRotorsDiagram() {
  const tube = (x: number, y: number, angle: number, c: string) => (
    <g transform={`rotate(${angle} ${x} ${y})`}>
      <rect x={x - 11} y={y} width={22} height={74} rx={10} fill="#fff" fillOpacity={0.6} stroke="currentColor" strokeWidth={2} />
      <rect x={x - 9.5} y={y + 46} width={19} height={26} rx={8} fill={c} fillOpacity={0.75} />
    </g>
  );
  const axis = (x: number) => <line x1={x} y1={52} x2={x} y2={250} stroke="currentColor" strokeOpacity={0.45} strokeDasharray="6 5" strokeWidth={1.6} />;
  return (
    <Figure viewBox="0 0 740 360" title="Types de rotors de centrifugeuse" caption="Angle fixe : sédimentation rapide (trajet court) ; godets oscillants : tubes horizontaux, meilleure séparation ; vertical : tubes parallèles à l'axe (ultracentrifugation)">
      {[["Angle fixe", "25-45° par rapport à l'axe", 125, C.blue], ["Godets oscillants", "tubes horizontaux en rotation", 370, C.green], ["Vertical", "tubes parallèles à l'axe", 615, C.violet]].map(([t, s, x, c]) => (
        <g key={String(t)}>
          <Txt x={Number(x)} y={26} bold size={13} color={String(c)}>{String(t)}</Txt>
          <Txt x={Number(x)} y={44} size={10.5} color={C.grey}>{String(s)}</Txt>
        </g>
      ))}
      {axis(125)}
      {tube(70, 100, -35, C.blue)}
      {tube(180, 100, 35, C.blue)}
      {axis(370)}
      {tube(250, 140, -90, C.green)}
      {tube(490, 140, 90, C.green)}
      {axis(615)}
      {tube(560, 105, 0, C.violet)}
      {tube(670, 105, 0, C.violet)}
      <Txt x={370} y={280} size={11} color={C.grey}>axe de rotation (pointillés) • culot coloré au fond du tube</Txt>
      {box(30, 296, 190, 46, "Trajet court", "sédimentation rapide", C.blue, 11)}
      {box(275, 296, 190, 46, "Trajet long", "meilleure séparation", C.green, 11)}
      {box(520, 296, 190, 46, "Haute vitesse", "suivi optique possible", C.violet, 11)}
    </Figure>
  );
}

// ─── Lab 9 : circuit d'hémodialyse ───────────────────────────────────────
export function LabHemodialysisDiagram() {
  return (
    <Figure viewBox="0 0 740 400" title="Circuit d'hémodialyse" caption="Le sang prélevé sur la fistule artério-veineuse est pompé vers le dialyseur ; le dialysat circule à contre-courant et emporte urée, créatinine et excès d'eau ; le sang épuré retourne au patient">
      {box(20, 160, 150, 60, "Fistule artério-veineuse", "abord vasculaire (bras)", C.red, 11)}
      {box(230, 40, 140, 54, "Pompe à sang", "+ héparine", C.amber, 11.5)}
      <rect x={430} y={80} width={110} height={240} rx={18} fill={C.blue} fillOpacity={0.08} stroke={C.blue} strokeWidth={2} />
      {[450, 470, 490, 510, 520].map((x) => <line key={x} x1={x} y1={100} x2={x} y2={300} stroke={C.red} strokeOpacity={0.55} strokeWidth={3} />)}
      <Txt x={485} y={70} bold size={12.5} color={DEEP.blue}>Dialyseur</Txt>
      <Txt x={556} y={340} anchor="start" size={10.5} color={C.grey}>fibres creuses semi-perméables</Txt>
      {arrow("M95,160 L95,67 L222,67", true)}
      <Txt x={150} y={58} size={10.5} bold color={C.red}>sang à épurer</Txt>
      {arrow("M370,67 L470,67 L470,92", true)}
      <Txt x={410} y={38} size={10.5} color={C.red}>sang impur entre</Txt>
      {arrow("M500,308 L500,372 L95,372 L95,228", true)}
      <Txt x={300} y={364} size={10.5} bold color={OK}>sang épuré retourne au patient</Txt>
      {arrow("M690,290 L548,290", true)}
      <Txt x={640} y={280} size={10.5} bold color={DEEP.blue}>dialysat frais</Txt>
      {arrow("M548,110 L690,110", true)}
      <Txt x={640} y={100} size={10.5} bold color={DEEP.amber}>dialysat + déchets</Txt>
      <Txt x={640} y={130} size={10} color={C.grey}>urée, créatinine, eau</Txt>
      <Txt x={640} y={200} size={10.5} color={C.grey}>contre-courant</Txt>
      <line x1={640} y1={250} x2={640} y2={150} stroke={C.grey} strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
    </Figure>
  );
}

// ─── Lab 13 : [S] et [P] en fonction du temps ────────────────────────────
export function LabReactionTimeDiagram() {
  const X = (t: number) => 90 + t * 52;
  const Y = (c: number) => 300 - c * 230;
  const substrate = (t: number) => Math.exp(-t / 3.2);
  const product = (t: number) => 1 - Math.exp(-t / 3.2);
  return (
    <Figure viewBox="0 0 740 380" title="Évolution du substrat et du produit au cours du temps" caption="[S] diminue et [P] augmente ; la vitesse (pente) est maximale au départ : on mesure la vitesse initiale v₀, avant que l'épuisement du substrat, l'inhibition par le produit ou la dénaturation ne la fassent baisser">
      <Axes x={90} y={60} w={540} h={240} xl="Temps (t)" yl="Concentration" />
      <path d={fnPath(substrate, 0, 10.4, 60, X, Y)} fill="none" stroke={C.blue} strokeWidth={3} />
      <path d={fnPath(product, 0, 10.4, 60, X, Y)} fill="none" stroke={C.red} strokeWidth={3} />
      <Txt x={X(10.4) + 12} y={Y(substrate(10.4)) - 8} anchor="start" bold size={12} color={DEEP.blue}>[S] substrat</Txt>
      <Txt x={X(10.4) + 12} y={Y(product(10.4)) + 4} anchor="start" bold size={12} color={DEEP.red}>[P] produit</Txt>
      <line x1={X(0)} y1={Y(0)} x2={X(2.6)} y2={Y(2.6 / 3.2)} stroke={OK} strokeWidth={2.4} strokeDasharray="7 5" />
      <Txt x={X(2.7) + 6} y={Y(0.82) - 4} anchor="start" bold size={11.5} color={OK}>pente initiale = v₀</Txt>
      <Txt x={X(6.5)} y={Y(0.55)} size={10.5} color={C.grey}>la pente diminue : vitesse plus faible</Txt>
    </Figure>
  );
}
