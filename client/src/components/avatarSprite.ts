// Générateur de sprites pixel-art d'avatars personnalisables.
// Un avatar est décrit par un code « peau-coiffure-couleur-tenue-bas-élément »
// (ex. « 1-spiky-5-0-p-0 ») que le serveur valide et transmet à l'adversaire.
// Le sprite fait 18 colonnes x 27 lignes, tourné vers la droite.

export const HAIR_STYLES = ["spiky", "long", "twin", "pony", "short", "afro", "braids", "bun", "hijab"] as const;
export type HairStyle = (typeof HAIR_STYLES)[number];
export type Pose = "idle" | "attack";

export interface AvatarConfig {
  skin: number;
  hair: HairStyle;
  hairColor: number;
  outfit: number;
  bottom: "p" | "s"; // p = pantalon, s = jupe
  element: number;
}

// Teintes de peau, du plus clair au plus foncé : [peau, ombre].
export const SKIN_TONES: Array<[string, string]> = [
  ["#fbd9bd", "#e6b592"],
  ["#f0c08f", "#d99e6c"],
  ["#d9a066", "#b97d45"],
  ["#b97a4b", "#96592d"],
  ["#8a5a36", "#6b3f20"],
  ["#5c3a24", "#43261a"],
];

// Couleurs de cheveux (ou de voile) : [couleur, reflet].
export const HAIR_COLORS: Array<[string, string]> = [
  ["#2a2430", "#54496a"],
  ["#6b4226", "#98643a"],
  ["#e6c25a", "#fbe38a"],
  ["#d63a2a", "#ff7a5c"],
  ["#ff8fc0", "#ffc2dc"],
  ["#2f6fe4", "#6fa2ff"],
  ["#9fd8ff", "#e0f4ff"],
  ["#e8ecf5", "#ffffff"],
  ["#8a5cf0", "#c4a8ff"],
];

interface OutfitPalette {
  O: string;
  o: string;
  A: string;
  P: string;
  p: string;
  B: string;
}

export const OUTFITS: OutfitPalette[] = [
  { O: "#f08a2c", o: "#c3651a", A: "#f5f0d8", P: "#26305a", p: "#1a2244", B: "#3a2a20" },
  { O: "#2a2a36", o: "#181822", A: "#d63a3a", P: "#1f1f2b", p: "#14141c", B: "#111118" },
  { O: "#3f9a5a", o: "#2c7040", A: "#f5f5f5", P: "#33333f", p: "#22222c", B: "#5a3a22" },
  { O: "#f4f4ff", o: "#c9c9e0", A: "#d63a5a", P: "#2b3f9a", p: "#1f2d72", B: "#4a2a2a" },
  { O: "#8a5fd0", o: "#6a45a8", A: "#f5f5ff", P: "#6a45a8", p: "#4e3182", B: "#f5f5ff" },
  { O: "#d83a3a", o: "#a82828", A: "#f5c842", P: "#22222e", p: "#161620", B: "#f5f5f5" },
  { O: "#2fb5b0", o: "#1f8783", A: "#f5f5f5", P: "#2a3a5a", p: "#1c2a44", B: "#2a2a30" },
  { O: "#f2c531", o: "#c99a12", A: "#2b2b3a", P: "#2b2b3a", p: "#1c1c28", B: "#f5f5f5" },
];

// Tenue de chirurgien (mode « bloc opératoire »).
const SCRUBS: OutfitPalette = { O: "#2fa8a0", o: "#1f7d78", A: "#e8f6f5", P: "#2fa8a0", p: "#1f7d78", B: "#e8f6f5" };

export const ELEMENTS = [
  { name: "Feu", attacks: ["Coup de flamme", "Vague de feu", "Dragon céleste"], color: "#ff9d2e", glow: "#ffd27a" },
  { name: "Ombre", attacks: ["Lame d'ombre", "Croix spectrale", "Tempête noire"], color: "#8a5cf0", glow: "#d1b8ff" },
  { name: "Foudre", attacks: ["Coup de tonnerre", "Onde électrique", "Poing du titan"], color: "#f2c531", glow: "#fff2a0" },
  { name: "Pétales", attacks: ["Gifle pétale", "Tempête de pétales", "Cerisier ultime"], color: "#ff6fae", glow: "#ffc1dc" },
  { name: "Glace", attacks: ["Éclat de givre", "Lance de glace", "Blizzard éternel"], color: "#5cc8ff", glow: "#c9f0ff" },
  { name: "Vent", attacks: ["Souffle vif", "Tornade verte", "Ouragan ultime"], color: "#4fd36b", glow: "#b6ffc4" },
] as const;

export const DEFAULT_AVATAR_CODE = "1-spiky-5-0-p-0";

export function encodeAvatar(config: AvatarConfig): string {
  return `${config.skin}-${config.hair}-${config.hairColor}-${config.outfit}-${config.bottom}-${config.element}`;
}

export function parseAvatar(code: string | null | undefined): AvatarConfig {
  const match = /^(\d)-([a-z]+)-(\d)-(\d)-([ps])-(\d)$/.exec(code ?? "");
  if (!match) return defaultConfig();
  const [, skin, hair, hairColor, outfit, bottom, element] = match;
  const valid =
    Number(skin) < SKIN_TONES.length &&
    (HAIR_STYLES as readonly string[]).includes(hair) &&
    Number(hairColor) < HAIR_COLORS.length &&
    Number(outfit) < OUTFITS.length &&
    Number(element) < ELEMENTS.length;
  if (!valid) return defaultConfig();
  return {
    skin: Number(skin),
    hair: hair as HairStyle,
    hairColor: Number(hairColor),
    outfit: Number(outfit),
    bottom: bottom as "p" | "s",
    element: Number(element),
  };
}

function defaultConfig(): AvatarConfig {
  return { skin: 1, hair: "spiky", hairColor: 5, outfit: 0, bottom: "p", element: 0 };
}

const W = 18;
const H = 27;
const OY = 3; // les pointes / le chignon montent au-dessus de la tête

class Canvas {
  grid: string[][] = Array.from({ length: H }, () => Array<string>(W).fill("."));

  px(x: number, y: number, c: string) {
    const row = y + OY;
    if (x >= 0 && x < W && row >= 0 && row < H) this.grid[row][x] = c;
  }

  rect(x0: number, y0: number, x1: number, y1: number, c: string) {
    for (let y = y0; y <= y1; y += 1) for (let x = x0; x <= x1; x += 1) this.px(x, y, c);
  }

  rows(): string[] {
    return this.grid.map((row) => row.join(""));
  }
}

function backHair(c: Canvas, style: HairStyle) {
  if (style === "long") {
    c.rect(2, 4, 13, 15, "H");
    c.rect(2, 15, 13, 15, "h");
  } else if (style === "twin") {
    c.rect(0, 5, 2, 15, "H");
    c.rect(13, 5, 15, 15, "H");
    c.rect(0, 14, 2, 15, "h");
    c.rect(13, 14, 15, 15, "h");
    c.rect(0, 5, 2, 6, "A");
    c.rect(13, 5, 15, 6, "A");
  } else if (style === "pony") {
    c.rect(0, 4, 3, 5, "A");
    c.rect(0, 6, 2, 13, "H");
    c.rect(1, 13, 2, 15, "h");
  } else if (style === "braids") {
    for (const x of [1, 13]) {
      for (let y = 4; y <= 17; y += 1) {
        c.rect(x, y, x + 1, y, y % 3 === 0 ? "h" : "H");
      }
      c.rect(x, 18, x + 1, 18, "A");
    }
  }
}

function drawHead(c: Canvas, skirt: boolean) {
  c.rect(3, 2, 12, 10, "K");
  for (const [x, y] of [[3, 2], [12, 2], [3, 10], [12, 10]]) c.px(x, y, ".");
  c.rect(4, 3, 11, 9, "S");
  for (const x of [4, 5, 10, 11]) c.px(x, 10, ".");
  c.rect(6, 10, 9, 10, "s");
  c.px(4, 9, "K");
  c.px(11, 9, "K");
  for (const ex of [6, 9]) {
    c.rect(ex, 6, ex + 1, 6, "K");
    c.px(ex, 7, "I");
    c.px(ex + 1, 7, "W");
    c.px(ex, 8, "I");
    c.px(ex + 1, 8, "I");
  }
  if (skirt) {
    c.px(5, 8, "s");
    c.px(11, 8, "s");
  } else {
    c.rect(6, 5, 7, 5, "K");
    c.rect(9, 5, 10, 5, "K");
  }
  c.px(8, 9, "s");
}

function frontHair(c: Canvas, style: HairStyle) {
  if (style === "spiky") {
    c.rect(3, 1, 12, 4, "H");
    c.rect(3, 0, 5, 0, "H"); c.rect(4, -1, 5, -1, "H"); c.px(4, -2, "H");
    c.rect(6, 0, 8, 0, "H"); c.rect(7, -1, 8, -1, "H"); c.px(7, -2, "H"); c.px(7, -3, "H");
    c.rect(9, 0, 11, 0, "H"); c.rect(10, -1, 11, -1, "H"); c.px(11, -2, "H");
    c.rect(2, 3, 3, 5, "H"); c.px(1, 5, "H"); c.px(2, 6, "H");
    c.rect(12, 3, 13, 4, "H"); c.px(13, 5, "H");
    for (const x of [4, 5, 6, 8, 9, 10, 11]) c.px(x, 5, "H");
    c.rect(5, 1, 9, 1, "L"); c.px(4, 0, "L"); c.px(7, -1, "L"); c.px(10, 0, "L");
    c.px(6, 3, "L"); c.px(10, 3, "L");
  } else if (style === "long" || style === "pony" || style === "twin" || style === "braids") {
    c.rect(3, 2, 12, 3, "H");
    c.rect(4, 1, 11, 1, "H");
    c.rect(3, 4, 4, 8, "H");
    c.rect(11, 4, 12, 7, "H");
    for (const x of [5, 6, 7, 8, 9, 10]) c.px(x, 4, "H");
    c.px(6, 5, "H");
    c.px(9, 5, "H");
    c.rect(5, 1, 9, 1, "L");
    c.px(6, 2, "L");
    c.px(10, 2, "L");
    if (style === "twin") {
      c.px(3, 4, "A");
      c.px(12, 4, "A");
    }
  } else if (style === "short") {
    c.rect(3, 1, 12, 3, "H");
    c.rect(4, 0, 11, 0, "H");
    c.rect(3, 4, 3, 6, "H");
    c.rect(12, 4, 12, 6, "H");
    for (const x of [4, 5, 10, 11]) c.px(x, 4, "H");
    c.rect(5, 0, 9, 0, "L");
    c.px(5, 1, "L");
    c.px(9, 1, "L");
  } else if (style === "afro") {
    c.rect(4, -2, 11, -2, "H");
    c.rect(2, -1, 13, -1, "H");
    c.rect(1, 0, 14, 2, "H");
    c.rect(1, 3, 3, 7, "H");
    c.rect(12, 3, 14, 7, "H");
    c.rect(4, 3, 11, 3, "H");
    c.px(4, 4, "H");
    c.px(11, 4, "H");
    c.rect(4, -2, 8, -2, "L");
    c.rect(3, -1, 5, -1, "L");
    for (const [x, y] of [[6, 1], [9, 0], [3, 2], [12, 1]]) c.px(x, y, "L");
    for (const [x, y] of [[2, 5], [13, 4], [2, 3], [13, 6]]) c.px(x, y, "h");
  } else if (style === "bun") {
    c.rect(6, -3, 9, -1, "H");
    c.rect(5, -2, 10, -2, "H");
    c.rect(6, -3, 7, -3, "L");
    c.rect(3, 1, 12, 3, "H");
    c.rect(4, 0, 11, 0, "H");
    c.rect(3, 4, 3, 6, "H");
    c.rect(12, 4, 12, 6, "H");
    for (const x of [4, 5, 10, 11]) c.px(x, 4, "H");
    c.rect(6, 0, 9, 0, "A");
    c.px(5, 1, "L");
    c.px(9, 1, "L");
  } else if (style === "hijab") {
    // voile : couvre les cheveux et le cou, le visage reste dégagé
    c.rect(4, 0, 11, 0, "H");
    c.rect(3, 1, 12, 3, "H");
    c.rect(2, 4, 4, 10, "H");
    c.rect(11, 4, 13, 10, "H");
    c.rect(2, 3, 3, 3, "H");
    c.rect(12, 3, 13, 3, "H");
    for (const x of [5, 6, 7, 8, 9, 10]) c.px(x, 4, "H");
    c.rect(2, 11, 13, 13, "H");
    c.rect(2, 13, 13, 13, "h");
    c.rect(4, 0, 8, 0, "L");
    c.px(5, 2, "L");
    c.px(10, 2, "L");
    c.rect(3, 11, 4, 11, "L");
  }
}

function drawBody(c: Canvas, skirt: boolean, pose: Pose, style: HairStyle) {
  c.rect(7, 10, 9, 11, "S");
  c.rect(4, 11, 11, 16, "K");
  c.rect(5, 11, 10, 15, "O");
  c.rect(9, 12, 10, 15, "o");
  c.rect(5, 11, 10, 11, skirt ? "A" : "O");
  c.rect(7, 11, 8, 11, "S");
  if (skirt) c.rect(7, 12, 8, 13, "A");
  else c.rect(4, 15, 11, 16, "A");

  if (skirt) {
    c.rect(3, 16, 12, 18, "P");
    c.rect(3, 18, 12, 18, "p");
    for (const x of [4, 6, 8, 10]) c.px(x, 17, "p");
    c.rect(5, 19, 6, 21, "S");
    c.rect(9, 19, 10, 21, "S");
    c.rect(5, 21, 6, 21, "A");
    c.rect(9, 21, 10, 21, "A");
  } else {
    c.rect(5, 17, 10, 19, "P");
    c.rect(5, 19, 10, 19, "p");
    c.rect(5, 20, 6, 21, "P");
    c.rect(9, 20, 10, 21, "P");
  }

  if (pose === "idle") {
    c.rect(4, 22, 7, 23, "B");
    c.rect(8, 22, 11, 23, "B");
    c.rect(3, 12, 4, 14, "O");
    c.rect(2, 13, 3, 14, "S");
    c.rect(11, 12, 12, 13, "O");
    c.rect(12, 13, 14, 14, "S");
  } else {
    c.rect(2, 22, 6, 23, "B");
    c.rect(9, 22, 13, 23, "B");
    if (skirt) {
      c.rect(4, 19, 5, 21, "S");
      c.rect(11, 19, 12, 21, "S");
    } else {
      c.rect(3, 20, 5, 21, "P");
      c.rect(11, 20, 12, 21, "P");
    }
    c.rect(3, 12, 4, 14, "O");
    c.rect(2, 14, 3, 15, "S");
    c.rect(11, 12, 15, 13, "O");
    c.rect(15, 12, 17, 14, "S");
    c.rect(16, 13, 17, 13, "s");
  }
  void style;
}

export interface Sprite {
  rows: string[];
  palette: Record<string, string>;
}

const cache = new Map<string, Sprite>();

export function buildSprite(code: string, pose: Pose, surgeon = false): Sprite {
  const key = `${code}|${pose}|${surgeon ? 1 : 0}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const config = parseAvatar(code);
  const skirt = config.bottom === "s";
  const c = new Canvas();
  backHair(c, config.hair);
  drawBody(c, skirt, pose, config.hair);
  drawHead(c, skirt);
  frontHair(c, config.hair);
  if (surgeon) {
    // masque chirurgical : bas du visage + élastiques
    c.rect(5, 8, 10, 9, "M");
    c.rect(6, 7, 9, 7, "M");
    c.px(4, 7, "m");
    c.px(11, 7, "m");
    c.rect(5, 9, 10, 9, "m");
  }

  const outfit = surgeon ? SCRUBS : OUTFITS[config.outfit];
  const [skin, skinShadow] = SKIN_TONES[config.skin];
  const [hair, hairLight] = HAIR_COLORS[config.hairColor];
  const palette: Record<string, string> = {
    K: "#1d1b2b",
    W: "#ffffff",
    S: skin,
    s: skinShadow,
    H: hair,
    L: hairLight,
    h: shade(hair, 0.72),
    I: ELEMENTS[config.element].color,
    M: "#cfeff5",
    m: "#8cc4d0",
    ...outfit,
  };
  const sprite = { rows: c.rows(), palette };
  cache.set(key, sprite);
  return sprite;
}

function shade(hex: string, factor: number): string {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const to = (v: number) => Math.round(v * factor).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}
