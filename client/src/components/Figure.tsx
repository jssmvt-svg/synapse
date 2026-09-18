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
