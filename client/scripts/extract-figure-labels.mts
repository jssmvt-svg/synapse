// Liste tous les textes français affichés dans les schémas SVG (balises <text>).
// Sortie : ../server/translations/figures.source.json (lu par `npm run translate`).
// Usage : npx tsx scripts/extract-figure-labels.mts
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LangProvider } from "../src/i18n";
import { mkdirSync, writeFileSync } from "node:fs";
import { ACRONYMS } from "../src/library-data/acronyms";
import { AMINO_ACIDS } from "../src/library-data/amino-acids";
import { VITAMINS } from "../src/library-data/vitamins";
import { MOLECULES } from "../src/library-data/molecules";
import { COURSE_FIGURES, resolveVisualKey } from "../src/library-widgets/visual-registry";

const decode = (text: string) =>
  text
    .replace(/<[^>]+>/g, "")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();

const keys = [
  ...Object.keys(COURSE_FIGURES),
  ...AMINO_ACIDS.map((a) => `amino/${a.code3}`),
  ...VITAMINS.map((v) => `vitamin/${v.code}`),
  ...Object.keys(MOLECULES).map((id) => `mol/${id}`),
  "hb-quaternary",
];
const labels = new Set<string>();
const originalError = console.error;
console.error = () => {}; // avertissements React sur les clés : sans intérêt ici
for (const key of keys) {
  const node = resolveVisualKey(key);
  if (!node) continue;
  const html = renderToStaticMarkup(createElement(LangProvider, null, node as never));
  for (const match of html.matchAll(/<(?:text|tspan)[^>]*>([^<]*(?:<(?!\/(?:text|tspan)>)[^<]*)*)<\/(?:text|tspan)>/gs)) {
    const text = decode(match[1]);
    if (text && /[A-Za-zÀ-ÿ]{2,}/.test(text)) labels.add(text);
  }
  for (const match of html.matchAll(/<figcaption>([^<]*)<\/figcaption>/g)) {
    const text = decode(match[1]);
    if (text) labels.add(text);
  }
}
for (const definition of Object.values(ACRONYMS)) labels.add(definition);
console.error = originalError;
mkdirSync(new URL("../../server/translations/", import.meta.url), { recursive: true });
writeFileSync(new URL("../../server/translations/figures.source.json", import.meta.url), JSON.stringify([...labels].sort(), null, 0));
console.log(`${keys.length} schémas, ${labels.size} textes distincts.`);
