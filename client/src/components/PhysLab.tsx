import type { ReactNode } from "react";
import { Figure, C, Txt, Dot } from "./Figure";

// Travaux pratiques de physiologie (semestre 1) : schémas d'interprétation.

const RED = "#d9414f";
const OK = "#3fa877";
const arrow = (d: string, flow = false) => (
  <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={flow ? "fig-flow" : undefined} markerEnd="url(#fig-arrow)" />
);
const box = (x: number, y: number, w: number, h: number, t: string, sub: string | undefined, c: string, size = 11.5) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={8} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={1.8} />
    <Txt x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} bold size={size}>{t}</Txt>
    {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 2} color={C.grey}>{sub}</Txt>}
  </g>
);

// Jauge horizontale : plage normale surlignée sur une échelle min-max.
function Gauge({ x, y, w, min, max, lo, hi, label, unit, color = OK, valueFmt, marker }: {
  x: number; y: number; w: number; min: number; max: number; lo: number; hi: number;
  label: string; unit: string; color?: string; valueFmt?: string; marker?: number;
}) {
  const px = (v: number) => x + ((v - min) / (max - min)) * w;
  return (
    <g>
      <Txt x={x - 10} y={y + 4} anchor="end" bold size={12}>{label}</Txt>
      <rect x={x} y={y - 7} width={w} height={14} rx={7} fill={C.grey} fillOpacity={0.15} stroke="currentColor" strokeOpacity={0.25} />
      <rect x={px(lo)} y={y - 7} width={px(hi) - px(lo)} height={14} rx={7} fill={color} fillOpacity={0.8} />
      <Txt x={x - 2} y={y + 24} anchor="start" size={9.5} color={C.grey}>{`↓ ${min}`}</Txt>
      <Txt x={x + w + 2} y={y + 24} anchor="end" size={9.5} color={C.grey}>{`${max} ↑`}</Txt>
      <Txt x={(px(lo) + px(hi)) / 2} y={y - 12} size={10.5} bold color={color}>{valueFmt ?? `${lo} – ${hi} ${unit}`}</Txt>
      {marker !== undefined && <path d={`M${px(marker)},${y + 12} l-5,10 h10z`} fill={RED} />}
    </g>
  );
}

// ─── 1. Osmolarité ───────────────────────────────────────────────────────
export function OsmolarityLabDiagram() {
  const s = 2;
  const x0 = 60;
  const parts = [
    { v: 280, c: C.blue, t: "Na⁺ × 2", s: "140 × 2 = 280" },
    { v: 10, c: C.amber, t: "Glucose / 18", s: "180 / 18 = 10" },
    { v: 5, c: C.violet, t: "Urée / 6", s: "30 / 6 = 5" },
  ];
  let acc = 0;
  return (
    <Figure viewBox="0 0 720 380" title="Calcul de l'osmolarité plasmatique" caption="Cosm = Na⁺ × 2 + glycémie / 18 + urée / 6 (mg/dL) — norme 285 à 295 mOsm/L ; exemple : 280 + 10 + 5 = 295 mOsm/L">
      {box(20, 16, 150, 46, "Na⁺ × 2", "cation + anions associés", C.blue, 13)}
      <Txt x={186} y={44} bold size={20}>+</Txt>
      {box(206, 16, 160, 46, "Glycémie / 18", "mg/dL → mOsm/L", C.amber, 13)}
      <Txt x={382} y={44} bold size={20}>+</Txt>
      {box(402, 16, 130, 46, "Urée / 6", "mg/dL → mOsm/L", C.violet, 13)}
      <Txt x={548} y={44} bold size={20}>=</Txt>
      {box(568, 16, 132, 46, "Cosm", "mOsm/L", OK, 14)}
      <Txt x={360} y={100} bold size={12}>Exemple : Na⁺ 140 mEq/L, glycémie 180 mg/dL, urée 30 mg/dL</Txt>
      {parts.map((p) => {
        const px = x0 + acc * s;
        acc += p.v;
        return (
          <g key={p.t}>
            <rect x={px} y={124} width={p.v * s} height={44} fill={p.c} fillOpacity={0.6} stroke={p.c} strokeWidth={2} />
            {p.v > 100 && <Txt x={px + (p.v * s) / 2} y={152} bold size={13} color="#fff">{p.t}</Txt>}
          </g>
        );
      })}
      <Txt x={x0 + 140 * s} y={190} size={11} bold color={C.blue}>Na⁺ : 280</Txt>
      <Txt x={x0 + 283 * s} y={110} size={10.5} bold color="#a3701a">glucose : 10</Txt>
      <Txt x={x0 + 292 * s} y={190} size={10.5} bold color="#6a45b0">urée : 5</Txt>
      <line x1={x0 + 295 * s} y1={118} x2={x0 + 295 * s} y2={174} stroke="currentColor" strokeWidth={2} strokeDasharray="4 3" />
      <Txt x={x0 + 295 * s + 6} y={100} anchor="start" size={12} bold>295</Txt>
      {/* échelle */}
      <line x1={x0} y1={230} x2={x0 + 320 * s - 100} y2={230} stroke="none" />
      <line x1={x0 + 240 * s} y1={230} x2={x0 + 320 * s} y2={230} stroke="currentColor" strokeWidth={1.5} />
      <rect x={x0 + 285 * s} y={220} width={10 * s} height={20} fill={OK} fillOpacity={0.6} />
      {[240, 260, 285, 295, 320].map((v) => <g key={v}><line x1={x0 + v * s} y1={226} x2={x0 + v * s} y2={236} stroke="currentColor" /><Txt x={x0 + v * s} y={252} size={10.5}>{String(v)}</Txt></g>)}
      <Txt x={x0 + 290 * s} y={214} bold size={11} color={OK}>285 – 295 mOsm/L : normal</Txt>
      <Txt x={x0 + 250 * s} y={272} size={10.5} color={C.blue} bold>↓ hypo-osmolaire</Txt>
      <Txt x={x0 + 312 * s - 20} y={272} size={10.5} color={RED} bold>↑ hyper-osmolaire</Txt>
      <rect x={20} y={296} width={680} height={70} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={360} y={318} bold size={11.5}>Pourquoi Na⁺ × 2 ?</Txt>
      <Txt x={360} y={336} size={10.5}>chaque Na⁺ est associé à un anion (surtout Cl⁻) : ×2 estime la contribution osmotique du sodium et de ses anions</Txt>
      <Txt x={360} y={354} size={10.5} color={C.grey}>valeurs de référence : glycémie 70-110 mg/dL • urée 15-45 mg/dL</Txt>
    </Figure>
  );
}

// ─── 2. Ionogramme ───────────────────────────────────────────────────────
export function IonogramLabDiagram() {
  const rows: [string, number, number, number, number, string][] = [
    ["Na⁺", 120, 160, 136, 145, C.blue],
    ["K⁺", 2, 7, 3.5, 5, C.green],
    ["Cl⁻", 85, 120, 98, 106, C.violet],
    ["Ca²⁺", 1.5, 3.5, 2.2, 2.8, C.amber],
    ["Mg²⁺", 1, 3, 1.6, 2.4, C.pink],
  ];
  return (
    <Figure viewBox="0 0 720 400" title="Valeurs normales de l'ionogramme plasmatique" caption="Ionogramme : Na⁺, K⁺, Cl⁻, Ca²⁺, Mg²⁺ en mEq/L ; le trou anionique urinaire = Na⁺ − (Cl⁻ + HCO₃⁻) vaut 12 ± 2 mEq/L">
      {rows.map(([l, min, max, lo, hi, c], i) => (
        <Gauge key={l} x={110} y={52 + i * 56} w={470} min={min} max={max} lo={lo} hi={hi} label={l} unit="mEq/L" color={c} />
      ))}
      <Txt x={640} y={54} bold size={11} color={C.grey}>mEq/L</Txt>
      <rect x={20} y={318} width={680} height={70} rx={8} fill={C.violet} fillOpacity={0.08} stroke={C.violet} strokeWidth={1.8} />
      <Txt x={360} y={340} bold size={12} color="#6a45b0">Trou anionique urinaire (urine anion gap)</Txt>
      <Txt x={360} y={360} bold size={13}>AG = Na⁺ − (Cl⁻ + HCO₃⁻) = 12 ± 2 mEq/L</Txt>
      <Txt x={360} y={378} size={10.5} color={C.grey}>orienter le diagnostic des acidoses métaboliques hyperchlorémiques — le Na⁺ intervient aussi dans l'osmolarité (× 2)</Txt>
    </Figure>
  );
}

// ─── 3. Hématogramme ─────────────────────────────────────────────────────
export function HematogramLabDiagram() {
  const bars: [string, string, number, number, number, number, number][] = [
    ["Hémoglobine", "g/dL", 15, 2, 14, 2, 18],
    ["Globules rouges", "M/mm³", 4.9, 0.7, 4.3, 0.6, 6],
    ["Hématocrite", "%", 45, 7, 42, 5, 55],
  ];
  return (
    <Figure viewBox="0 0 740 440" title="Hématogramme : hémoglobine, globules rouges, hématocrite et indices" caption="Hb, GR et Ht sont plus bas chez la femme ; les indices érythrocytaires (VGM, TCMH, CCMH, IDR) et les réticulocytes orientent le diagnostic">
      <Txt x={170} y={22} bold size={13}>Homme / Femme</Txt>
      {bars.map(([t, u, hm, sm, hf, sf, max], i) => {
        const y = 48 + i * 82;
        const w = 240;
        const px = (v: number) => 20 + (v / max) * w;
        return (
          <g key={t}>
            <Txt x={20} y={y - 6} anchor="start" bold size={11.5}>{`${t} (${u})`}</Txt>
            <rect x={20} y={y} width={px(hm)-20} height={16} rx={5} fill={C.blue} fillOpacity={0.7} />
            <rect x={px(hm - sm)} y={y - 3} width={px(hm + sm) - px(hm - sm)} height={22} fill="none" stroke={C.blue} strokeWidth={2} />
            <Txt x={px(hm + sm) + 6} y={y + 13} anchor="start" size={10.5} bold color={C.blue}>{`♂ ${hm} ± ${sm}`}</Txt>
            <rect x={20} y={y + 28} width={px(hf)-20} height={16} rx={5} fill={C.pink} fillOpacity={0.8} />
            <rect x={px(hf - sf)} y={y + 25} width={px(hf + sf) - px(hf - sf)} height={22} fill="none" stroke="#b0507a" strokeWidth={2} />
            <Txt x={px(hf + sf) + 6} y={y + 41} anchor="start" size={10.5} bold color="#b0507a">{`♀ ${hf} ± ${sf}`}</Txt>
          </g>
        );
      })}
      <line x1={420} y1={10} x2={420} y2={300} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={575} y={22} bold size={13}>Indices érythrocytaires</Txt>
      <Gauge x={500} y={62} w={220} min={60} max={120} lo={80} hi={100} label="VGM" unit="µm³" color={C.violet} />
      <Gauge x={500} y={116} w={220} min={20} max={40} lo={27} hi={32} label="TCMH" unit="pg" color={C.amber} />
      <Gauge x={500} y={170} w={220} min={28} max={40} lo={32} hi={36} label="CCMH" unit="g/dL" color={C.blue} />
      <Gauge x={500} y={224} w={220} min={8} max={20} lo={11.5} hi={14.5} label="IDR" unit="%" color={C.green} />
      <Gauge x={500} y={278} w={220} min={0} max={5} lo={0.5} hi={1.5} label="Réticul." unit="%" color={RED} />
      <rect x={20} y={322} width={700} height={104} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <g fontSize={10.5}>
        <Txt x={190} y={344} bold size={11}>VGM</Txt><Txt x={190} y={360} size={10} color={C.grey}>taille : normo-, micro-, macrocytose</Txt>
        <Txt x={360} y={344} bold size={11}>TCMH / CCMH</Txt><Txt x={360} y={360} size={10} color={C.grey}>teneur en Hb : hypo- / normochromie</Txt>
        <Txt x={530} y={344} bold size={11}>IDR</Txt><Txt x={530} y={360} size={10} color={C.grey}>↑ = anisocytose</Txt>
        <Txt x={640} y={344} bold size={11}>Réticulocytes</Txt><Txt x={640} y={360} size={10} color={C.grey}>↑ : anémie régénérative</Txt>
      </g>
      <Txt x={370} y={392} size={11} bold>Hb, GR et Ht : toujours plus bas chez la femme</Txt>
      <Txt x={370} y={410} size={10} color={C.grey}>l'hématocrite est la proportion du volume sanguin occupée par les globules rouges</Txt>
    </Figure>
  );
}

// ─── 4. Équilibre acido-basique ──────────────────────────────────────────
export function AcidBaseLabDiagram() {
  const X = (v: number) => 90 + ((v - 20) / 50) * 430;
  const Y = (v: number) => 380 - ((v - 8) / 34) * 320;
  const iso = (ph: number) => {
    const k = Math.pow(10, ph - 6.1) * 0.03;
    return `M${X(20)},${Y(k * 20)} L${X(70)},${Y(k * 70)}`;
  };
  return (
    <Figure viewBox="0 0 740 440" title="Équilibre acido-basique : pH, PCO₂ et HCO₃⁻" caption="Valeurs normales : pH 7,35-7,45, PCO₂ 38-42 mmHg (composante respiratoire), HCO₃⁻ 23-27 mEq/L (composante métabolique) ; les 4 troubles simples autour de la zone normale">
      <rect x={90} y={60} width={430} height={320} fill="#fff" fillOpacity={0.4} stroke="currentColor" strokeOpacity={0.3} />
      {/* bande pH normal */}
      <path d={`${iso(7.35)} L${X(70)},${Y(0.03 * Math.pow(10, 1.25) * 70)}`} stroke="none" />
      <polygon points={`${X(20)},${Y(0.03 * Math.pow(10, 1.25) * 20)} ${X(70)},${Y(0.03 * Math.pow(10, 1.25) * 70)} ${X(70)},${Y(0.03 * Math.pow(10, 1.35) * 70)} ${X(20)},${Y(0.03 * Math.pow(10, 1.35) * 20)}`} fill={OK} fillOpacity={0.18} />
      <path d={iso(7.35)} stroke={OK} strokeWidth={2} strokeDasharray="5 4" fill="none" />
      <path d={iso(7.45)} stroke={OK} strokeWidth={2} strokeDasharray="5 4" fill="none" />
      <Txt x={X(64)} y={Y(0.03 * Math.pow(10, 1.25) * 64) + 26} size={10} bold color="#2a7a55">pH 7,35</Txt>
      <Txt x={X(58)} y={Y(0.03 * Math.pow(10, 1.35) * 58) - 10} size={10} bold color="#2a7a55">pH 7,45</Txt>
      <Txt x={X(30)} y={Y(0.03 * Math.pow(10, 1.4) * 30) - 28} size={10.5} bold color={C.blue}>pH ↑ alcalémie</Txt>
      <Txt x={X(56)} y={Y(0.03 * Math.pow(10, 1.2) * 56) + 44} size={10.5} bold color={RED}>pH ↓ acidémie</Txt>
      {/* normal */}
      <rect x={X(38)} y={Y(27)} width={X(42) - X(38)} height={Y(23) - Y(27)} fill={OK} fillOpacity={0.6} stroke="#2a7a55" strokeWidth={2} />
      <Txt x={X(40) + 40} y={Y(25) + 4} anchor="start" size={10.5} bold color="#2a7a55">normal</Txt>
      {/* flèches */}
      {arrow(`M${X(40)},${Y(27)} L${X(40)},${Y(38)}`, true)}
      {arrow(`M${X(40)},${Y(23)} L${X(40)},${Y(12)}`, true)}
      {arrow(`M${X(42)},${Y(25)} L${X(64)},${Y(25)}`, true)}
      {arrow(`M${X(38)},${Y(25)} L${X(24)},${Y(25)}`, true)}
      <Txt x={X(40)} y={Y(40) - 2} bold size={11} color={C.blue}>Alcalose métabolique</Txt><Txt x={X(40)} y={Y(40) + 12} size={10} color={C.grey}>HCO₃⁻ ↑</Txt>
      <Txt x={X(40)} y={Y(10) + 16} bold size={11} color={RED}>Acidose métabolique</Txt><Txt x={X(40)} y={Y(10) + 30} size={10} color={C.grey}>HCO₃⁻ ↓</Txt>
      <Txt x={X(65)} y={Y(27) - 14} bold size={11} color={RED}>Acidose respiratoire</Txt><Txt x={X(65)} y={Y(27)} size={10} color={C.grey}>PCO₂ ↑</Txt>
      <Txt x={X(26)} y={Y(27) - 14} bold size={11} color={C.blue}>Alcalose respiratoire</Txt><Txt x={X(26)} y={Y(27)} size={10} color={C.grey}>PCO₂ ↓</Txt>
      {/* axes */}
      {[20, 30, 40, 50, 60, 70].map((v) => <g key={v}><line x1={X(v)} y1={380} x2={X(v)} y2={386} stroke="currentColor" /><Txt x={X(v)} y={400} size={10}>{String(v)}</Txt></g>)}
      {[10, 20, 30, 40].map((v) => <g key={v}><line x1={84} y1={Y(v)} x2={90} y2={Y(v)} stroke="currentColor" /><Txt x={78} y={Y(v) + 4} anchor="end" size={10}>{String(v)}</Txt></g>)}
      <Txt x={305} y={420} bold size={11}>PCO₂ (mmHg) — composante respiratoire</Txt>
      <Txt x={36} y={200} bold size={11}>HCO₃⁻</Txt><Txt x={36} y={214} size={10} color={C.grey}>(mEq/L)</Txt>
      {/* légende */}
      <rect x={540} y={60} width={190} height={320} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={635} y={82} bold size={12}>Bulletin de référence</Txt>
      {[["pH artériel", "7,35 – 7,45", "acidité globale"], ["PCO₂", "38 – 42 mmHg", "respiratoire"], ["HCO₃⁻", "23 – 27 mEq/L", "métabolique"]].map(([t, v, s], i) => (
        <g key={t}>
          <Txt x={635} y={112 + i * 62} bold size={11.5}>{t}</Txt>
          <Txt x={635} y={130 + i * 62} bold size={13} color="#2a7a55">{v}</Txt>
          <Txt x={635} y={146 + i * 62} size={10} color={C.grey}>{s}</Txt>
        </g>
      ))}
      <Txt x={635} y={318} size={10} color={C.grey}>pH = 6,1 + log [HCO₃⁻] / (0,03 × PCO₂)</Txt>
      <Txt x={635} y={336} size={10} color={C.grey}>trouble simple : une seule</Txt><Txt x={635} y={350} size={10} color={C.grey}>composante dévie, le pH sort</Txt><Txt x={635} y={364} size={10} color={C.grey}>de la bande verte</Txt>
    </Figure>
  );
}

// ─── 5. Doubles troubles acido-basiques ──────────────────────────────────
export function AcidBaseMixedLabDiagram() {
  const cases: [string, string, string, string, string, string, string][] = [
    ["Acidose métabolique + alcalose respiratoire", "N", "↓↓↓", "↓↓↓", "Compensation", C.blue, "le trouble respiratoire contrebalance le métabolique"],
    ["Alcalose métabolique + acidose respiratoire", "N", "↑↑↑", "↑↑↑", "Compensation", C.blue, "compensation inverse, valeurs très anormales"],
    ["Acidose métabolique + alcalose métabolique", "N", "N", "N", "Neutralisation", C.grey, "association mixte sur le même axe métabolique"],
    ["Acidose respiratoire + alcalose respiratoire", "N", "N", "N", "Neutralisation", C.grey, "association mixte sur le même axe respiratoire"],
    ["Acidose métabolique + acidose respiratoire", "↓↓", "↑", "↓", "Addition", RED, "même sens : l'acidémie est aggravée"],
    ["Alcalose métabolique + alcalose respiratoire", "↑↑", "↓", "↑", "Addition", C.violet, "même sens : l'alcalémie est aggravée"],
  ];
  return (
    <Figure viewBox="0 0 740 470" title="Doubles troubles acido-basiques : compensation, neutralisation, addition" caption="Deux troubles de sens opposés se compensent ou se neutralisent (pH normal) ; deux troubles de même sens s'additionnent (pH très anormal)">
      {cases.map(([t, ph, pco2, hco3, kind, c, expl], i) => {
        const x = 8 + (i % 2) * 366;
        const y = 8 + Math.floor(i / 2) * 152;
        return (
          <g key={t} transform={`translate(${x} ${y})`}>
            <rect x={0} y={0} width={356} height={142} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
            <rect x={0} y={0} width={356} height={30} rx={10} fill={c} fillOpacity={0.25} />
            <Txt x={178} y={20} bold size={11.5}>{t}</Txt>
            {[["pH", ph], ["PCO₂", pco2], ["HCO₃⁻", hco3]].map(([l, v], k) => (
              <g key={l}>
                <rect x={20 + k * 108} y={44} width={96} height={46} rx={8} fill="#fff" fillOpacity={0.6} stroke="currentColor" strokeOpacity={0.25} />
                <Txt x={68 + k * 108} y={60} size={10.5} color={C.grey}>{l}</Txt>
                <Txt x={68 + k * 108} y={82} bold size={18} color={v === "N" ? OK : v.startsWith("↑") ? RED : C.blue}>{v}</Txt>
              </g>
            ))}
            <rect x={20} y={100} width={92} height={24} rx={12} fill={c} fillOpacity={0.9} />
            <Txt x={66} y={116} bold size={11} color="#fff">{kind}</Txt>
            <Txt x={124} y={116} anchor="start" size={10} color={C.grey}>{expl}</Txt>
          </g>
        );
      })}
    </Figure>
  );
}

// ─── 6. Bilan d'hémostase ────────────────────────────────────────────────
export function HemostasisLabDiagram() {
  const col = (x: number, title: string, sub: string, c: string, tests: [string, string][], note: string[]) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={8} width={228} height={318} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
      <Txt x={114} y={30} bold size={13} color={c}>{title}</Txt>
      <Txt x={114} y={46} size={10.5} color={C.grey}>{sub}</Txt>
      {tests.map(([t, v], i) => (
        <g key={t}>
          <rect x={14} y={62 + i * 54} width={200} height={44} rx={8} fill="#fff" fillOpacity={0.7} stroke={c} strokeOpacity={0.6} />
          <Txt x={114} y={80 + i * 54} bold size={11.5}>{t}</Txt>
          <Txt x={114} y={97 + i * 54} size={10.5} bold color={OK}>{v}</Txt>
        </g>
      ))}
      {note.map((n, i) => <Txt key={n} x={114} y={236 + i * 16} size={10.5} color={C.grey}>{n}</Txt>)}
    </g>
  );
  return (
    <Figure viewBox="0 0 740 440" title="Bilan d'hémostase : quel test explore quel temps ?" caption="Hémostase primaire (vaisseau, plaquettes), voie intrinsèque (TCA/APTT) et voie extrinsèque (TP/Quick) ; temps de Howell : coagulation globale">
      {col(6, "Hémostase primaire", "vaisseau + plaquettes", C.amber, [["Test du lacet", "négatif"], ["Numération plaquettaire", "150 000 – 350 000/mm³"], ["Temps de saignement (TS)", "1,5 – 4 min"]], ["allongé si vitamine C ↓", "ou thrombopénie"])}
      {col(256, "Voie intrinsèque", "XII, XI, IX, VIII", C.blue, [["TCA / APTT", "20 – 50 s"]], ["allongé : hémophilie,", "traitement par héparine", "(cible de l'héparine)"])}
      {col(506, "Voie extrinsèque", "facteur tissulaire, VII", RED, [["TP / Temps de Quick", "12 – 15 s"], ["INR", "0,9 – 1,2"]], ["facteurs vit. K : II, VII, IX, X", "synthèse hépatique :", "↑ si insuffisance hépatique,", "avitaminose K, antivitamine K"])}
      <rect x={6} y={340} width={728} height={90} rx={10} fill={C.violet} fillOpacity={0.08} stroke={C.violet} strokeWidth={2} />
      <Txt x={370} y={362} bold size={12.5} color="#6a45b0">Voie commune → thrombine → fibrine</Txt>
      <Txt x={370} y={382} bold size={12}>Temps de Howell : 60 – 120 s (coagulation d'un plasma recalcifié)</Txt>
      <Txt x={370} y={402} size={10.5} color={C.grey}>Thrombocytose (plaquettes ↑) → clou plaquettaire plus rapide → temps de saignement raccourci</Txt>
      <Dot path="M120,336 L370,340" dur={4} r={5} color={C.amber} />
      <Dot path="M370,336 L370,340" dur={4} delay={1} r={5} color={C.blue} />
      <Dot path="M620,336 L370,340" dur={4} delay={2} r={5} color={RED} />
    </Figure>
  );
}

// ─── 7. Cartes d'interprétation (matrices colorées) ──────────────────────
function Matrix({ x, y, cols, rows, cw, rh, firstW, firstHead }: {
  x: number; y: number; cols: string[]; rows: string[][]; cw: number; rh: number; firstW: number; firstHead: string;
}) {
  const tone = (v: string) => (v.startsWith("↑") || v.startsWith("+") ? [RED, 0.28] : v.startsWith("↓") ? [C.blue, 0.28] : v === "N" || v.startsWith("N ") ? [OK, 0.18] : [C.grey, 0.08]);
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={0} width={firstW} height={rh} fill={C.grey} fillOpacity={0.25} />
      <Txt x={firstW / 2} y={rh / 2 + 4} bold size={11}>{firstHead}</Txt>
      {cols.map((c, i) => (
        <g key={c}>
          <rect x={firstW + i * cw} y={0} width={cw} height={rh} fill={C.grey} fillOpacity={0.25} stroke="#fff" />
          <Txt x={firstW + i * cw + cw / 2} y={rh / 2 + 4} bold size={11}>{c}</Txt>
        </g>
      ))}
      {rows.map((r, j) => (
        <g key={r[0]}>
          <rect x={0} y={(j + 1) * rh} width={firstW} height={rh} fill={C.grey} fillOpacity={0.1} stroke="#fff" />
          <Txt x={8} y={(j + 1) * rh + rh / 2 + 4} anchor="start" bold size={10.5}>{r[0]}</Txt>
          {r.slice(1).map((v, i) => {
            const [c, o] = tone(v) as [string, number];
            return (
              <g key={i}>
                <rect x={firstW + i * cw} y={(j + 1) * rh} width={cw} height={rh} fill={c} fillOpacity={o} stroke="#fff" />
                <Txt x={firstW + i * cw + cw / 2} y={(j + 1) * rh + rh / 2 + 5} bold size={v.length > 4 ? 10 : 14} color={v === "—" ? C.grey : "currentColor"}>{v}</Txt>
              </g>
            );
          })}
        </g>
      ))}
    </g>
  );
}

export function HemostasisPatternsLabDiagram() {
  return (
    <Figure viewBox="0 0 740 380" title="Interprétation du bilan d'hémostase" caption="Chaque cause modifie un profil de tests : ↑ allongé/augmenté, ↓ diminué, N normal, + test du lacet positif">
      <Matrix x={10} y={10} firstW={250} cw={82} rh={44} firstHead="Cause fréquente (défaut)" cols={["Lacet", "Plaquettes", "TS", "APTT", "PT"]} rows={[
        ["Avitaminose C (temps vasculaire)", "+++", "N", "↑", "N", "N"],
        ["Thrombopénie (temps plaquettaire)", "+", "↓", "↑", "N", "N"],
        ["Hémophilie / héparine (intrinsèque)", "−", "N", "N", "↑", "N"],
        ["Insuffisance hépatique / vit. K (extrinsèque)", "−", "N", "N", "N", "↑"],
        ["Hypercoagulation (thrombocytose)", "−", "↑", "↓", "N", "N"],
      ]} />
      <Txt x={370} y={300} size={11} bold>TS explore l'hémostase primaire • APTT la voie intrinsèque • PT/Quick la voie extrinsèque</Txt>
      <Txt x={370} y={320} size={10.5} color={C.grey}>les facteurs II, VII, IX, X (vitamine K) sont synthétisés par le foie</Txt>
      <Txt x={370} y={352} size={10.5} color={C.grey}>↑ rouge • ↓ bleu • N vert</Txt>
    </Figure>
  );
}

// ─── 8. Protéinogramme ───────────────────────────────────────────────────
function smooth(pts: [number, number][]) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const mx = (x0 + x1) / 2;
    d += ` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  return d;
}

function proteinCurve(h: { alb: number; a1: number; a2: number; b: number; g: number; spike?: number }, base: number, x0: number, w: number, scale: number) {
  const px = (t: number) => x0 + t * w;
  const y = (v: number) => base - v * scale;
  const pts: [number, number][] = [
    [px(0), base], [px(0.04), base - 1], [px(0.12), y(h.alb)], [px(0.22), y(h.alb * 0.98)], [px(0.3), y(2)],
    [px(0.36), y(h.a1)], [px(0.42), y(1.6)],
    [px(0.5), y(h.a2)], [px(0.57), y(2)],
    [px(0.66), y(h.b)], [px(0.73), y(2)],
    [px(0.82), y(h.g)], [px(0.94), y(2)], [px(1), base],
  ];
  return smooth(pts);
}

export function ProteinogramLabDiagram() {
  const zones = [
    { t: 0.13, l: "Albumine", v: "50 – 60 %", c: C.blue },
    { t: 0.36, l: "α1", v: "4,2 – 7,2 %", c: C.green },
    { t: 0.5, l: "α2", v: "6,8 – 12 %", c: C.amber },
    { t: 0.66, l: "β", v: "9,3 – 15 %", c: C.violet },
    { t: 0.82, l: "γ", v: "13 – 23 %", c: C.red },
  ];
  const x0 = 60, w = 640;
  const base = 250;
  return (
    <Figure viewBox="0 0 740 420" title="Protéinogramme : électrophorèse des protéines sériques" caption="Électrophorèse : 5 fractions selon leur mobilité ; albumine (la plus abondante), α1, α2, β, γ ; protéinémie totale 55 à 80 g/L">
      <rect x={x0} y={24} width={w} height={34} rx={6} fill="#fff" fillOpacity={0.7} stroke="currentColor" strokeOpacity={0.4} />
      {zones.map((z) => <rect key={z.l} x={x0 + z.t * w - (z.l === "Albumine" ? 50 : 22)} y={30} width={z.l === "Albumine" ? 100 : 44} height={z.l === "Albumine" ? 22 : 10} rx={3} fill={z.c} fillOpacity={0.7} />)}
      <Txt x={30} y={46} size={9.5} color={C.grey}>gel</Txt>
      <path d={`${proteinCurve({ alb: 10, a1: 1.9, a2: 3, b: 3.6, g: 4.4 }, base, x0, w, 17)} L${x0 + w},${base} L${x0},${base}z`} fill={C.blue} fillOpacity={0.18} stroke="none" />
      <path d={proteinCurve({ alb: 10, a1: 1.9, a2: 3, b: 3.6, g: 4.4 }, base, x0, w, 17)} fill="none" stroke="#1f3d99" strokeWidth={4} />
      <Dot path={proteinCurve({ alb: 10, a1: 1.9, a2: 3, b: 3.6, g: 4.4 }, base, x0, w, 17)} dur={6} r={6} color={RED} />
      <line x1={x0} y1={base} x2={x0 + w + 10} y2={base} stroke="currentColor" strokeWidth={1.5} markerEnd="url(#fig-arrow)" />
      <Txt x={x0 + w} y={base + 32} anchor="end" size={10} color={C.grey}>migration → anode (+)</Txt>
      {zones.map((z) => (
        <g key={z.l}>
          <line x1={x0 + z.t * w} y1={base + 4} x2={x0 + z.t * w} y2={base + 14} stroke="currentColor" />
          <rect x={x0 + z.t * w - 50} y={base + 44} width={100} height={52} rx={8} fill={z.c} fillOpacity={0.15} stroke={z.c} strokeWidth={2} />
          <Txt x={x0 + z.t * w} y={base + 64} bold size={13} color={z.c}>{z.l}</Txt>
          <Txt x={x0 + z.t * w} y={base + 84} bold size={11}>{z.v}</Txt>
        </g>
      ))}
      <Txt x={370} y={396} bold size={11.5}>Protéinémie totale : 55 – 80 g/L (5,5 – 8 %) • % × 10 = g/L</Txt>
      <Txt x={370} y={412} size={10.5} color={C.grey}>albumine = fraction majoritaire • γ = 2ᵉ fraction • α1 = plus petite fraction</Txt>
    </Figure>
  );
}

export function ProteinPatternsLabDiagram() {
  const cards: [string, string, { alb: number; a1: number; a2: number; b: number; g: number }, string, string][] = [
    ["Normal", "", { alb: 10, a1: 1.9, a2: 3, b: 3.6, g: 4.4 }, C.green, "P N"],
    ["Inflammation aiguë", "α1 ↑, α2 ↑, albumine ↓", { alb: 7, a1: 3.6, a2: 5.4, b: 3.6, g: 4.4 }, C.amber, "P N"],
    ["Inflammation chronique", "γ ↑, albumine ↓", { alb: 7.4, a1: 1.9, a2: 3, b: 3.6, g: 7.6 }, C.violet, "P N"],
    ["Syndrome néphrotique", "albumine ↓, α2 ↑↑, β ↑", { alb: 5.6, a1: 1.9, a2: 7, b: 5.4, g: 3 }, C.blue, "P ↓"],
    ["Hépatopathie chronique", "albumine ↓↓, γ ↑↑", { alb: 5, a1: 1.6, a2: 2.4, b: 4.4, g: 9 }, C.red, "P ↓"],
    ["Myélome multiple", "pic monoclonal γ, albumine ↓", { alb: 7, a1: 1.6, a2: 2.4, b: 3.2, g: 11 }, "#8a3b6a", "P ↑"],
  ];
  return (
    <Figure viewBox="0 0 740 420" title="Profils du protéinogramme dans les dysprotéinémies" caption="Dysprotéinémies : profils caractéristiques de l'électrophorèse (P = protéinémie totale) ; le myélome est la seule situation où la protéinémie totale augmente">
      {cards.map(([t, s, h, c, p], i) => {
        const x = 6 + (i % 3) * 246;
        const y = 6 + Math.floor(i / 3) * 206;
        return (
          <g key={t} transform={`translate(${x} ${y})`}>
            <rect x={0} y={0} width={236} height={198} rx={10} fill={c} fillOpacity={0.06} stroke={c} strokeWidth={2} />
            <Txt x={118} y={22} bold size={12} color={c}>{t}</Txt>
            <Txt x={118} y={38} size={9.5} color={C.grey}>{s}</Txt>
            <path d={`${proteinCurve(h, 158, 16, 204, 10)} L220,158 L16,158z`} fill={c} fillOpacity={0.2} stroke="none" />
            <path d={proteinCurve(h, 158, 16, 204, 10)} fill="none" stroke={c} strokeWidth={3} />
            <line x1={16} y1={158} x2={222} y2={158} stroke="currentColor" strokeOpacity={0.5} />
            {["Alb", "α1", "α2", "β", "γ"].map((l, k) => <Txt key={l} x={[42, 90, 116, 152, 190][k]} y={174} size={9.5} color={C.grey}>{l}</Txt>)}
            <Txt x={118} y={192} bold size={10.5}>{`protéinémie ${p.slice(2)}`}</Txt>
          </g>
        );
      })}
    </Figure>
  );
}

// ─── 9. Formules rénales ─────────────────────────────────────────────────
export function RenalFormulasLabDiagram() {
  return (
    <Figure viewBox="0 0 740 440" title="Débit sanguin rénal, débit plasmatique, filtration et clairance du PAH" caption="RPF total = ClPAH / 0,9 ; FF = DFG / RPF × 100 = 20 ± 2 % ; le débit sanguin rénal (FSR) inclut les globules rouges, contrairement au RPF">
      <Txt x={370} y={24} bold size={13}>Sang entrant dans le rein : FSR</Txt>
      <rect x={30} y={40} width={680} height={44} rx={8} fill={RED} fillOpacity={0.3} stroke={RED} strokeWidth={2} />
      <rect x={30} y={40} width={378} height={44} rx={8} fill={C.amber} fillOpacity={0.5} stroke="#a3701a" strokeWidth={2} />
      <Txt x={220} y={60} bold size={12}>Plasma : RPF total</Txt><Txt x={220} y={76} size={10.5}>♂ 650 ± 150 • ♀ 600 ± 150 mL/min</Txt>
      <Txt x={560} y={60} bold size={12}>Globules rouges</Txt><Txt x={560} y={76} size={10.5}>FSR ♂ 1200 ± 250 • ♀ 980 ± 180 mL/min</Txt>
      {arrow("M220,88 L220,124", true)}
      {/* glomérule */}
      <circle cx={220} cy={166} r={40} fill="#fff" fillOpacity={0.6} stroke={C.blue} strokeWidth={5} />
      <path d="M204,160 c8,-14 24,-6 18,8 c-6,14 -22,6 -14,-6 c8,-8 18,0 12,8" fill="none" stroke={RED} strokeWidth={4} />
      <Txt x={220} y={222} size={10.5} bold color={C.blue}>glomérule</Txt>
      {arrow("M262,166 L360,166", true)}
      <rect x={364} y={140} width={160} height={52} rx={8} fill={C.blue} fillOpacity={0.18} stroke={C.blue} strokeWidth={2} />
      <Txt x={444} y={162} bold size={12}>Filtrat : DFG</Txt><Txt x={444} y={180} size={10.5}>≈ 20 % du plasma</Txt>
      <Txt x={620} y={156} bold size={16} color={C.blue}>FF = DFG / RPF × 100</Txt><Txt x={620} y={178} bold size={15} color="#2a7a55">= 20 ± 2 %</Txt>
      {/* PAH */}
      <rect x={30} y={240} width={330} height={190} rx={10} fill={C.violet} fillOpacity={0.08} stroke={C.violet} strokeWidth={2} />
      <Txt x={195} y={262} bold size={12.5} color="#6a45b0">Clairance du PAH</Txt>
      <Txt x={195} y={284} size={11.5}>ClPAH = (U_PAH × V) / P_PAH</Txt>
      <Txt x={195} y={306} size={10.5} color={C.grey}>PAH épuré presque totalement en un passage</Txt>
      <Txt x={195} y={322} size={10.5} color={C.grey}>(filtration + sécrétion tubulaire)</Txt>
      <rect x={60} y={340} width={270} height={20} rx={6} fill={C.violet} fillOpacity={0.3} /><rect x={60} y={340} width={243} height={20} rx={6} fill={C.violet} fillOpacity={0.7} />
      <Txt x={181} y={354} size={10} bold color="#fff">RPF efficace ≈ 90 %</Txt>
      <Txt x={195} y={386} bold size={13}>RPF total = ClPAH / 0,9</Txt>
      <Txt x={195} y={410} size={10.5} color={C.grey}>une petite fraction du sang rénal n'est pas épurée</Txt>
      <rect x={380} y={240} width={330} height={190} rx={10} fill={C.green} fillOpacity={0.08} stroke={C.green} strokeWidth={2} />
      <Txt x={545} y={262} bold size={12.5} color="#2a7a55">Trou anionique urinaire</Txt>
      <Txt x={545} y={290} bold size={14}>AG = Na⁺ − (Cl⁻ + HCO₃⁻)</Txt>
      <Txt x={545} y={314} bold size={13} color="#2a7a55">12 ± 2 mEq/L</Txt>
      <Txt x={545} y={342} size={10.5} color={C.grey}>concentrations urinaires : aide à différencier</Txt>
      <Txt x={545} y={358} size={10.5} color={C.grey}>une cause rénale d'une cause extrarénale</Txt>
      <Txt x={545} y={374} size={10.5} color={C.grey}>d'acidose métabolique hyperchlorémique</Txt>
    </Figure>
  );
}

// ─── 10. Stades du DFG ───────────────────────────────────────────────────
export function GfrStagesLabDiagram() {
  const X = (v: number) => 40 + (v / 150) * 660;
  const zones: [number, number, string, string, string][] = [
    [0, 15, RED, "< 15", "insuffisance rénale terminale (dialyse)"],
    [15, 60, "#e0703a", "15 – 60", "maladie rénale chronique (si > 3 mois)"],
    [60, 90, C.amber, "60 – 90", "altération légère, pas encore MRC"],
    [90, 150, OK, "> 90", "fonction rénale normale"],
  ];
  return (
    <Figure viewBox="0 0 740 330" title="Stades de la fonction rénale selon le DFG" caption="DFG normal > 90 mL/min/1,73 m² ; < 60 pendant plus de 3 mois : maladie rénale chronique ; < 15 : insuffisance rénale terminale">
      {zones.map(([a, b, c, v]) => <rect key={v} x={X(a)} y={70} width={X(b) - X(a)} height={56} fill={c} fillOpacity={0.55} stroke="#fff" strokeWidth={2} />)}
      {zones.map(([a, b, c, v, s]) => <Txt key={v} x={(X(a) + X(b)) / 2} y={104} bold size={14} color="#fff">{v}</Txt>)}
      {[0, 15, 30, 60, 90, 120, 150].map((v) => <g key={v}><line x1={X(v)} y1={126} x2={X(v)} y2={136} stroke="currentColor" /><Txt x={X(v)} y={152} size={10.5}>{String(v)}</Txt></g>)}
      <Txt x={370} y={176} size={11} color={C.grey}>DFG (mL/min/1,73 m²)</Txt>
      {zones.map(([a, b, c, v, s], i) => (
        <g key={v}>
          <circle cx={30 + (i % 2) * 360 + 6} cy={210 + Math.floor(i / 2) * 44} r={8} fill={c} />
          <Txt x={50 + (i % 2) * 360} y={214 + Math.floor(i / 2) * 44} anchor="start" size={11} bold>{`${v} : `}</Txt>
          <Txt x={50 + (i % 2) * 360 + (v.length > 5 ? 74 : 44)} y={214 + Math.floor(i / 2) * 44} anchor="start" size={10.5}>{s.length > 40 ? s.slice(0, 40) + "…" : s}</Txt>
        </g>
      ))}
      <Dot path={`M${X(120)},60 L${X(120)},60`} dur={3} r={0} />
      <path d={`M${X(120)},52 l-6,-12 h12z`} fill={OK} className="fig-pulse" />
      <Txt x={X(120)} y={34} size={10.5} bold color="#2a7a55">rein sain (jusqu'à ≈ 150)</Txt>
      <rect x={20} y={290} width={700} height={30} rx={6} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={310} size={10.5}>à ne pas confondre avec le débit sanguin rénal FSR ≈ 1200 ± 250 mL/min : le DFG mesure la filtration, pas le débit de sang</Txt>
    </Figure>
  );
}

// ─── 11. Leucogramme ─────────────────────────────────────────────────────
export function LeukogramLabDiagram() {
  const cells: [string, number, number, number, number, string][] = [
    ["Neutrophiles", 56, 68, 25, 40, C.blue],
    ["Lymphocytes", 20, 40, 50, 70, C.amber],
    ["Monocytes", 4, 10, 4, 8, C.green],
    ["Éosinophiles", 1, 3, 1, 4, RED],
    ["Basophiles", 0, 1, 0, 1, C.violet],
  ];
  const W = 340;
  const X = (v: number) => 130 + (v / 80) * W;
  const ages: [string, number, number][] = [["Adulte", 5, 9], ["Nouveau-né", 8, 30], ["1-2 ans", 6, 17.5], ["3-7 ans", 5.5, 15.5], ["8-16 ans", 4.5, 13.5]];
  return (
    <Figure viewBox="0 0 740 420" title="Leucogramme normal : adulte et enfant" caption="Adulte : neutrophiles dominants ; enfant : lymphocytes dominants (profil inversé) et nombre total de leucocytes plus élevé">
      <Txt x={300} y={22} bold size={13}>Formule leucocytaire (%)</Txt>
      {cells.map(([t, a1, a2, c1, c2, c], i) => {
        const y = 60 + i * 56;
        return (
          <g key={t}>
            <Txt x={120} y={y + 8} anchor="end" bold size={11.5} color={c}>{t}</Txt>
            <rect x={130} y={y - 8} width={W} height={12} rx={6} fill={C.grey} fillOpacity={0.12} />
            <rect x={X(a1)} y={y - 8} width={Math.max(X(a2) - X(a1), 5)} height={12} rx={6} fill={c} />
            <Txt x={X(a2) + 6} y={y + 2} anchor="start" size={10} bold color={c}>{`${a1}–${a2} %`}</Txt>
            <rect x={130} y={y + 8} width={W} height={12} rx={6} fill={C.grey} fillOpacity={0.12} />
            <rect x={X(c1)} y={y + 8} width={Math.max(X(c2) - X(c1), 5)} height={12} rx={6} fill={c} fillOpacity={0.4} stroke={c} strokeDasharray="3 2" />
            <Txt x={X(c2) + 6} y={y + 18} anchor="start" size={10} color={C.grey}>{`${c1}–${c2} %`}</Txt>
          </g>
        );
      })}
      <rect x={20} y={334} width={12} height={10} fill={C.blue} /><Txt x={38} y={343} anchor="start" size={10.5}>adulte</Txt>
      <rect x={100} y={334} width={12} height={10} fill={C.blue} fillOpacity={0.4} stroke={C.blue} strokeDasharray="3 2" /><Txt x={118} y={343} anchor="start" size={10.5}>enfant</Txt>
      <line x1={500} y1={20} x2={500} y2={330} stroke="currentColor" strokeOpacity={0.2} strokeDasharray="5 5" />
      <Txt x={620} y={22} bold size={13}>Leucocytes totaux (× 1000/mm³)</Txt>
      {ages.map(([t, a, b], i) => {
        const y = 70 + i * 52;
        const px = (v: number) => 560 + (v / 30) * 170;
        return (
          <g key={t}>
            <Txt x={552} y={y + 4} anchor="end" bold size={11}>{t}</Txt>
            <rect x={560} y={y - 8} width={170} height={14} rx={7} fill={C.grey} fillOpacity={0.12} />
            <rect x={px(a)} y={y - 8} width={px(b) - px(a)} height={14} rx={7} fill={i === 0 ? OK : C.amber} fillOpacity={0.8} />
            <Txt x={(px(a) + px(b)) / 2} y={y + 22} size={10} bold>{`${a} – ${b}`}</Txt>
          </g>
        );
      })}
      <rect x={20} y={362} width={700} height={48} rx={8} fill="none" stroke="currentColor" strokeOpacity={0.25} />
      <Txt x={370} y={382} size={11} bold>Chez l'enfant le système immunitaire est très actif : ↑ leucocytes, ↑ lymphocytes, ↓ neutrophiles relatifs</Txt>
      <Txt x={370} y={400} size={10.5} color={C.grey}>chez l'adulte, les neutrophiles dominent (56-68 %)</Txt>
    </Figure>
  );
}

export function LeukogramPatternsLabDiagram() {
  return (
    <Figure viewBox="0 0 740 380" title="Interprétation du leucogramme selon le contexte clinique" caption="Bactérien : neutrophiles ↑ ; viral : lymphocytes et monocytes ↑ ; éosinophilie : parasitose ou allergie ; basophilie : maladie contagieuse (référentiel du cours)">
      <Matrix x={10} y={10} firstW={280} cw={72} rh={40} firstHead="Contexte" cols={["Total", "NE", "EO", "BA", "LY", "MO"]} rows={[
        ["Enfant (physiologique)", "↑", "↓", "—", "—", "↑", "—"],
        ["Infection bactérienne aiguë", "↑", "↑", "—", "—", "↓", "—"],
        ["Parasitose, allergie, dermatose", "N ou ↑", "—", "↑", "—", "—", "—"],
        ["Mononucléose, tuberculose", "↑", "↓↓", "—", "—", "↑↑", "↑↑"],
        ["Infection virale aiguë", "↑", "↓", "—", "—", "↑", "↑"],
        ["Maladie contagieuse", "N", "—", "—", "↑", "—", "—"],
      ]} />
      <Txt x={370} y={304} size={11} bold>Bactérien : NE ↑, LY ↓ • Viral : NE ↓, LY ↑, MO ↑ • Éosinophilie ≠ infection bactérienne</Txt>
      <Txt x={370} y={324} size={10.5} color={C.grey}>une basophilie avec un total normal est le marqueur d'une maladie contagieuse (référentiel du cours)</Txt>
      <Txt x={370} y={356} size={10.5} color={C.grey}>↑ rouge • ↓ bleu • N vert • — sans changement notable</Txt>
    </Figure>
  );
}

// ─── 12. Diagnostic différentiel des anémies ─────────────────────────────
export function AnemiaDifferentialLabDiagram() {
  const branches: [number, string, string, string, string, string, [number, number, number, number][], string][] = [
    [8, "VGM ↓", "microcytaire", "TCMH ↓, CCMH ↓ : hypochrome", "Réticulocytes N", C.amber, [[-22, -16, 11, 0.7], [10, -22, 11, 0.7], [26, 8, 11, 0.7], [-8, 14, 11, 0.7], [-30, 24, 11, 0.7], [4, 34, 11, 0.7]], "Anémie ferriprive"],
    [252, "VGM ↑", "macrocytaire", "TCMH, CCMH N : normochrome", "Réticulocytes ↓", C.violet, [[-18, -14, 22, 0.35], [20, 14, 22, 0.35]], "Anémie mégaloblastique"],
    [496, "VGM N", "normocytaire", "TCMH, CCMH N : normochrome", "Réticulocytes ↓", C.red, [[-14, -10, 16, 0.4], [22, 22, 16, 0.4]], "Anémie aplasique"],
  ];
  const causes = ["carence en fer • moelle normo-régénérative", "carence B12 / folates • moelle hypo-régénérative", "insuffisance médullaire • moelle hypo-régénérative"];
  return (
    <Figure viewBox="0 0 740 440" title="Diagnostic différentiel des anémies par les indices érythrocytaires" caption="Anémie (↓ Ht, Hb, GR) : le VGM sépare micro-, macro- et normocytaire ; les réticulocytes distinguent moelle régénérative et hypo-régénérative">
      {box(220, 10, 300, 46, "Ht ↓, Hb ↓, GR ↓ : anémie", "VGM 80-100 • TCMH 27-31 • CCMH 32-36 • réticulocytes 0,5-1,5 %", RED, 13)}
      {branches.map(([x, vgm, morph, color, retic, c, cells, dx], i) => (
        <g key={dx}>
          {arrow(`M370,58 L${x + 114},98`, true)}
          <g transform={`translate(${x} 98)`}>
            <rect x={0} y={0} width={228} height={330} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
            <Txt x={114} y={26} bold size={15} color={c}>{vgm}</Txt>
            <Txt x={114} y={44} bold size={11.5}>{morph}</Txt>
            <Txt x={114} y={64} size={10.5}>{color}</Txt>
            <Txt x={114} y={82} size={10.5} bold color={c}>{retic}</Txt>
            <circle cx={114} cy={146} r={52} fill="#fbeff0" stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} />
            {cells.map(([dx2, dy2, r, p], k) => (
              <g key={k}><circle cx={114 + dx2} cy={146 + dy2} r={r} fill={RED} fillOpacity={0.85} stroke="#8f2530" strokeWidth={1.5} /><circle cx={114 + dx2} cy={146 + dy2} r={r * p} fill="#fff" fillOpacity={0.55} /></g>
            ))}
            <rect x={14} y={230} width={200} height={40} rx={8} fill={c} fillOpacity={0.9} />
            <Txt x={114} y={255} bold size={13} color="#fff">{dx}</Txt>
            <Txt x={114} y={292} size={10} color={C.grey}>{causes[i].split("•")[0].trim()}</Txt>
            <Txt x={114} y={308} size={10} color={C.grey}>{causes[i].split("•")[1].trim()}</Txt>
          </g>
        </g>
      ))}
    </Figure>
  );
}

// ─── 13. Fonction rénale : DFG, RPF, FF ──────────────────────────────────
export function RenalPatternsLabDiagram() {
  const cols: [string, string, [string, string][], string, string][] = [
    ["Néphropathie glomérulaire", "atteinte de la filtration", [["DFG", "↓"], ["RPF", "N"], ["FF", "↓"]], C.blue, "la filtration baisse, le débit plasmatique reste normal"],
    ["Néphropathie tubulo-interstitielle", "atteinte vasculo-tubulaire", [["DFG", "N"], ["RPF", "↓"], ["FF", "N/↑"]], C.amber, "le RPF baisse, le DFG est préservé : FF normale ou ↑"],
    ["Néphropathie mixte", "les deux atteintes", [["DFG", "↓"], ["RPF", "↓"], ["FF", "N/↓"]], RED, "DFG et RPF ↓ ; FF selon la prédominance"],
  ];
  return (
    <Figure viewBox="0 0 740 380" title="Appréciation de la fonction rénale par DFG, RPF et fraction de filtration" caption="Néphropathie glomérulaire : DFG ↓, RPF N, FF ↓ ; tubulo-interstitielle : DFG N, RPF ↓, FF N/↑ ; mixte : DFG ↓, RPF ↓">
      {cols.map(([t, s, vals, c, note], i) => (
        <g key={t} transform={`translate(${8 + i * 244} 0)`}>
          <rect x={0} y={8} width={236} height={362} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
          <Txt x={118} y={30} bold size={12} color={c}>{t}</Txt>
          <Txt x={118} y={46} size={10} color={C.grey}>{s}</Txt>
          {/* néphron simplifié */}
          <circle cx={70} cy={92} r={20} fill="#fff" fillOpacity={0.6} stroke={i === 1 ? C.grey : c} strokeWidth={i === 1 ? 3 : 6} />
          <path d="M90,92 C130,92 130,140 170,140" fill="none" stroke={i === 0 ? C.grey : c} strokeWidth={i === 0 ? 5 : 9} strokeLinecap="round" />
          <Txt x={70} y={124} size={9.5} bold color={i === 1 ? C.grey : c}>glomérule</Txt>
          <Txt x={170} y={164} size={9.5} bold color={i === 0 ? C.grey : c}>tubule / vaisseaux</Txt>
          {vals.map(([l, v], k) => (
            <g key={l}>
              <rect x={20 + k * 70} y={192} width={64} height={70} rx={8} fill="#fff" fillOpacity={0.7} stroke={c} strokeOpacity={0.6} />
              <Txt x={52 + k * 70} y={212} size={11} bold>{l}</Txt>
              <Txt x={52 + k * 70} y={248} bold size={24} color={v.startsWith("↓") ? C.blue : v.includes("↑") && v !== "N/↓" ? RED : OK}>{v}</Txt>
            </g>
          ))}
          <Txt x={118} y={298} size={10.5} bold>{note.split(",")[0]}</Txt>
          <Txt x={118} y={316} size={10.5} color={C.grey}>{note.split(",")[1]?.trim() ?? ""}</Txt>
          <Txt x={118} y={352} size={10} color={C.grey}>FF = DFG / RPF total × 100 (normale 20 ± 2 %)</Txt>
        </g>
      ))}
    </Figure>
  );
}

// ─── 14. Valeurs de référence : fiche de synthèse ────────────────────────
export function ReferenceValuesLabDiagram() {
  const cards: [string, string, string[]][] = [
    ["Ionogramme (mEq/L)", C.blue, ["Na⁺ 136-145", "K⁺ 3,5-5", "Cl⁻ 98-106", "Ca²⁺ 2,2-2,8", "Mg²⁺ 1,6-2,4"]],
    ["Osmolarité", C.violet, ["285-295 mOsm/L", "Na⁺×2 + glyc./18 + urée/6", "glycémie 70-110 mg/dL", "urée 15-45 mg/dL"]],
    ["Hémogramme", RED, ["GR ♂ 4,9 ± 0,7 • ♀ 4,3 ± 0,6", "Hb ♂ 15 ± 2 • ♀ 14 ± 2 g/dL", "Ht ♂ 45 ± 7 • ♀ 42 ± 5 %", "VGM 80-100 • TCMH 27-32", "CCMH 32-36 • Réticul. 0,5-1,5 %"]],
    ["Leucogramme (adulte)", C.amber, ["WBC 5000-9000/mm³", "NE 56-68 % • LY 20-40 %", "MO 4-10 % • EO 1-3 %", "BA 0-1 %"]],
    ["Acido-basique", C.green, ["pH 7,35-7,45", "PCO₂ 38-42 mmHg", "HCO₃⁻ 23-27 mEq/L"]],
    ["Hémostase", C.pink, ["Lacet négatif", "Plaquettes 150-350 000/mm³", "TS 1,5-4 min • Howell 60-120 s", "TCA 20-50 s • Quick 12-15 s", "INR 0,9-1,2"]],
    ["Protéinogramme", C.blue, ["Protéines 55-80 g/L", "Alb 50-60 % • α1 4,2-7,2 %", "α2 6,8-12 % • β 9,3-15 %", "γ 13-23 %"]],
    ["Rein", C.violet, ["FF 20 ± 2 % • AG urinaire 12 ± 2", "RPF ♂ 650 ± 150 • ♀ 600 ± 150", "FSR ♂ 1200 ± 250 • ♀ 980 ± 180", "DFG > 90 mL/min/1,73 m²"]],
  ];
  return (
    <Figure viewBox="0 0 740 510" title="Valeurs de référence de physiologie : fiche de synthèse" caption="Synthèse des valeurs de référence utilisées en travaux pratiques (ionogramme, osmolarité, hémogramme, leucogramme, gaz du sang, hémostase, protéinogramme, rein)">
      {cards.map(([t, c, lines], i) => {
        const x = 6 + (i % 2) * 366;
        const y = 6 + Math.floor(i / 2) * 126;
        return (
          <g key={t} transform={`translate(${x} ${y})`}>
            <rect x={0} y={0} width={356} height={118} rx={10} fill={c} fillOpacity={0.07} stroke={c} strokeWidth={2} />
            <rect x={0} y={0} width={356} height={26} rx={10} fill={c} fillOpacity={0.3} />
            <Txt x={178} y={18} bold size={12}>{t}</Txt>
            {lines.map((l, k) => <Txt key={l} x={14} y={46 + k * 15} anchor="start" size={10.5}>{l}</Txt>)}
          </g>
        );
      })}
    </Figure>
  );
}
