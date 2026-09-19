import { buildSprite, type Sprite } from "./avatarSprite";

export type FighterAction = "idle" | "attack" | "ko";

interface PixelFighterProps {
  // Code d'avatar (peau-coiffure-couleur-tenue-bas-élément).
  avatar: string;
  facing: "right" | "left";
  action?: FighterAction;
  // Force la pose d'attaque (bras tendu) sans l'animation d'élan.
  stance?: "idle" | "attack";
  // Tenue et masque de chirurgien.
  surgeon?: boolean;
  // Subit un coup : secousse + flash rouge, après `hitDelayMs`.
  hit?: boolean;
  hitDelayMs?: number;
  label: string;
  // Taille d'un pixel du sprite, en pixels d'écran.
  scale?: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  color: string;
}

// Fusionne les pixels voisins de même couleur sur une ligne : bien moins de
// <rect> à afficher qu'un rectangle par pixel.
export function spriteRects(sprite: Sprite, maxRow = Infinity): Rect[] {
  const rects: Rect[] = [];
  sprite.rows.forEach((row, y) => {
    if (y >= maxRow) return;
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      if (key === "." || !sprite.palette[key]) {
        x += 1;
        continue;
      }
      let end = x + 1;
      while (end < row.length && row[end] === key) end += 1;
      rects.push({ x, y, width: end - x, color: sprite.palette[key] });
      x = end;
    }
  });
  return rects;
}

const rectCache = new Map<string, Rect[]>();

function rectsFor(code: string, pose: "idle" | "attack", surgeon: boolean): Rect[] {
  const key = `${code}|${pose}|${surgeon}`;
  let rects = rectCache.get(key);
  if (!rects) {
    rects = spriteRects(buildSprite(code, pose, surgeon));
    rectCache.set(key, rects);
  }
  return rects;
}

const COLUMNS = 18;
const ROWS = 27;

export function PixelFighter({
  avatar,
  facing,
  action = "idle",
  stance,
  surgeon = false,
  hit = false,
  hitDelayMs = 0,
  label,
  scale = 6,
}: PixelFighterProps) {
  const pose = stance ?? (action === "attack" ? "attack" : "idle");
  const rects = rectsFor(avatar, pose, surgeon);

  return (
    <div
      className={`pixel-fighter pixel-fighter-${facing} pixel-action-${action}`}
      role="img"
      aria-label={label}
    >
      <div
        className={hit ? "pixel-body pixel-is-hit" : "pixel-body"}
        style={hit ? { animationDelay: `${hitDelayMs}ms` } : undefined}
      >
        <svg
          viewBox={`0 0 ${COLUMNS} ${ROWS}`}
          width={COLUMNS * scale}
          height={ROWS * scale}
          shapeRendering="crispEdges"
        >
          {rects.map((rect, index) => (
            <rect key={index} x={rect.x} y={rect.y} width={rect.width} height="1" fill={rect.color} />
          ))}
        </svg>
      </div>
    </div>
  );
}
