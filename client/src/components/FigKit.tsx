import { C, Txt } from "./Figure";

// Petits éléments partagés par les schémas de biochimie.

export const RED = "#d9414f";
export const OK = "#3fa877";
export const DEEP = { blue: "#2f56b8", violet: "#6a45b0", green: "#2a7a55", amber: "#a3701a", red: "#a02030", pink: "#b0507a" } as const;

export const leader = { stroke: "currentColor", strokeOpacity: 0.45, strokeWidth: 1 } as const;

export const arrow = (d: string, flow = false) => (
  <path d={d} fill="none" stroke="currentColor" strokeWidth={2} className={flow ? "fig-flow" : undefined} markerEnd="url(#fig-arrow)" />
);

export function box(x: number, y: number, w: number, h: number, t: string, sub: string | undefined, c: string, size = 11.5) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={c} fillOpacity={0.15} stroke={c} strokeWidth={1.8} />
      <Txt x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} bold size={size}>{t}</Txt>
      {sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 2} color={C.grey}>{sub}</Txt>}
    </g>
  );
}

// Courbe lissée passant par des points (Bézier avec tangentes horizontales).
export function smooth(pts: [number, number][]) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const mx = (x0 + x1) / 2;
    d += ` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  return d;
}

// Tracé d'une fonction sur un repère : renvoie un chemin SVG.
export function fnPath(f: (x: number) => number, x0: number, x1: number, n: number, mapX: (x: number) => number, mapY: (y: number) => number) {
  let d = "";
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    d += `${i === 0 ? "M" : "L"}${mapX(x).toFixed(1)},${mapY(f(x)).toFixed(1)} `;
  }
  return d;
}

// Axes fléchés avec légendes.
export function Axes({ x, y, w, h, xl, yl }: { x: number; y: number; w: number; h: number; xl: string; yl: string }) {
  return (
    <g>
      <line x1={x} y1={y + h} x2={x} y2={y - 8} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
      <line x1={x} y1={y + h} x2={x + w + 8} y2={y + h} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#fig-arrow)" />
      <Txt x={x + w / 2} y={y + h + 34} size={11} bold>{xl}</Txt>
      <text transform={`translate(${x - 34} ${y + h / 2}) rotate(-90)`} textAnchor="middle" fontSize={11} fontWeight={700} fill="currentColor">{yl}</text>
    </g>
  );
}

// Hexagone (cycle glucidique) : sommets à partir du centre.
export function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }).map((_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}
