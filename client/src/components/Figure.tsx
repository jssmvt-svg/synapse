import type { ReactNode } from "react";

// Cadre commun des schémas de cours : SVG vectoriel original (aucun droit
// d'auteur à gérer), themable via currentColor, avec légende accessible.
export function Figure({
  viewBox,
  title,
  caption,
  children,
}: {
  viewBox: string;
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="course-figure">
      <svg viewBox={viewBox} role="img" aria-label={title} className="course-svg">
        <defs>
          <marker id="fig-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>
        {children}
      </svg>
      <figcaption>{caption ?? title}</figcaption>
    </figure>
  );
}

// Palette pédagogique partagée par tous les schémas (lisible en clair et en sombre).
export const C = {
  blue: "#4f7be8",
  red: "#e0566b",
  green: "#3fa877",
  amber: "#e0a030",
  violet: "#8a63d2",
  pink: "#e88bb0",
  grey: "#8b93a7",
  skin: "#f0c9a8",
} as const;

// ─── Outils communs aux schémas de physiologie ───────────────────────────
export function Txt({
  x, y, children, anchor = "middle", bold = false, color, size = 12, opacity,
}: {
  x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end";
  bold?: boolean; color?: string; size?: number; opacity?: number;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={bold ? 700 : 400} fill={color ?? "currentColor"} opacity={opacity}>
      {children}
    </text>
  );
}

// Particule qui parcourt un chemin SVG en boucle (transport, diffusion, flux ioniques).
export function Dot({ path, dur = 3, delay = 0, r = 4, color = C.blue, label }: {
  path: string; dur?: number; delay?: number; r?: number; color?: string; label?: string;
}) {
  return (
    <g className="fig-dot" style={{ offsetPath: `path("${path}")`, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
      <circle r={r} fill={color} />
      {label && <text y={r * 0.4} textAnchor="middle" fontSize={r * 1.3} fontWeight={700} fill="#fff">{label}</text>}
    </g>
  );
}

// Étape d'un cycle : s'illumine à tour de rôle (index i sur n étapes, 1,5 s par étape).
export function Seq({ i, n, children }: { i: number; n: number; children: ReactNode }) {
  return (
    <g className={`fig-seq fig-seq-${n}`} style={{ animationDuration: `${n * 1.5}s`, animationDelay: `${i * 1.5}s` }}>
      {children}
    </g>
  );
}
