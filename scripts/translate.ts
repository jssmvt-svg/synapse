// Traduit le contenu de Synapse (cours, QCM, flashcards, schémas) avec l'API Claude.
//
//   npm run translate --workspace=server -- --dry-run          estimation sans rien envoyer
//   npm run translate --workspace=server -- --lang ar --limit 20   petit essai
//   npm run translate --workspace=server -- --lang ar,it,en   traduction complète
//
// Prérequis : DEEPL_API_KEY (gratuit, 500 000 caractères/mois) ou ANTHROPIC_API_KEY (payant),
// dans les Secrets Replit ou le fichier .env à la racine. --provider deepl|claude pour choisir ;
// par défaut DeepL si seule sa clé est présente.
// Le script reprend là où il s'est arrêté : les textes déjà traduits sont conservés
// dans server/translations/content.<langue>.json (cours, QCM…) et figures.<langue>.json
// (légendes des schémas, copié aussi dans client/public/translations/).
import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LIBRARY_SUBJECTS } from "../server/src/libraryCatalogue.js";
import { addMoleculeCards } from "../server/src/library-content/biochimie-molecules.js";
import { ANATOMIE_S1 } from "../server/src/library-content/anatomie-s1.js";
import { BIOCHIMIE_S1 } from "../server/src/library-content/biochimie-s1.js";
import { BIOCHIMIE_S2 } from "../server/src/library-content/biochimie-s2.js";
import { PHYSIOLOGIE_S1 } from "../server/src/library-content/physiologie-s1.js";
import { PHYSIOLOGIE_S2 } from "../server/src/library-content/physiologie-s2.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: path.join(root, ".env") });

type Lang = "ar" | "it" | "en";
type Kind = "content" | "figures";
interface Source {
  fr: string;
  en?: string; // traduction anglaise déjà écrite à la main (on ne la remplace pas)
}

// --- Arguments ---------------------------------------------------------------
const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const option = (name: string, fallback: string) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const LANGS = option("lang", "ar,it,en").split(",").map((l) => l.trim()) as Lang[];
const ONLY = option("only", "all"); // content | figures | all
const LIMIT = Number(option("limit", "0")) || Infinity;
const CONCURRENCY = Math.max(1, Number(option("concurrency", "3")));
const MODEL = option("model", "claude-opus-5");
const DRY_RUN = flag("dry-run");
// deepl : gratuit jusqu'à 500 000 caractères/mois (DEEPL_API_KEY) ; claude : payant, meilleur en vocabulaire médical.
// Par défaut DeepL (gratuit) : le mode payant Claude doit être demandé explicitement avec --provider claude.
const PROVIDER = option("provider", "deepl") as "deepl" | "claude";

const PRICES: Record<string, [number, number]> = { "claude-opus-5": [5, 25], "claude-sonnet-5": [2, 10], "claude-haiku-4-5": [1, 5] };

// --- Sources -------------------------------------------------------------------
function collectContent(): Source[] {
  const found = new Map<string, Source>();
  const walk = (node: unknown): void => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== "object") return;
    const record = node as Record<string, unknown>;
    for (const [key, value] of Object.entries(record)) {
      const englishKey = key.endsWith("_fr") ? `${key.slice(0, -3)}_en` : key.endsWith("Fr") ? `${key.slice(0, -2)}En` : null;
      if (englishKey && typeof value === "string") {
        const fr = value.trim() ? value : "";
        if (!fr) continue;
        const en = typeof record[englishKey] === "string" && (record[englishKey] as string).trim() ? (record[englishKey] as string) : undefined;
        const previous = found.get(fr);
        found.set(fr, { fr, en: en ?? previous?.en });
      } else walk(value);
    }
  };
  [addMoleculeCards(BIOCHIMIE_S1, 1), addMoleculeCards(BIOCHIMIE_S2, 2), PHYSIOLOGIE_S1, PHYSIOLOGIE_S2, ANATOMIE_S1, LIBRARY_SUBJECTS].forEach(walk);
  return [...found.values()];
}

function collectFigures(): Source[] {
  const file = path.join(root, "server/translations/figures.source.json");
  if (!existsSync(file)) {
    console.warn("figures.source.json absent : lance d'abord `npx tsx scripts/extract-figure-labels.mts` dans client/.");
    return [];
  }
  return (JSON.parse(readFileSync(file, "utf8")) as string[]).map((fr) => ({ fr }));
}

// --- Fichiers de sortie ---------------------------------------------------------
const outFile = (kind: Kind, lang: Lang) => path.join(root, "server/translations", `${kind}.${lang}.json`);
const publicFile = (lang: Lang) => path.join(root, "client/public/translations", `figures.${lang}.json`);

function readDictionary(kind: Kind, lang: Lang): Record<string, string> {
  const file = outFile(kind, lang);
  return existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as Record<string, string>) : {};
}

function writeDictionary(kind: Kind, lang: Lang, dictionary: Record<string, string>): void {
  const write = (file: string) => {
    mkdirSync(path.dirname(file), { recursive: true });
    const temp = `${file}.tmp`;
    writeFileSync(temp, JSON.stringify(dictionary));
    renameSync(temp, file);
  };
  write(outFile(kind, lang));
  if (kind === "figures") write(publicFile(lang));
}

// --- Consignes -------------------------------------------------------------------
const LANGUAGE_RULES: Record<Lang, string> = {
  ar: [
    "Target language: Arabic as written and taught in Saudi Arabia (Modern Standard Arabic, natural for Saudi medical students).",
    "Medical terms: use the standard Arabic term when one is widely used; when it is not, or when Saudi medical schools normally keep the English term, write the English term as it is (for example: ATP, NADH, GLUT4, Krebs cycle names may stay in English or appear as Arabic followed by the English term in parentheses).",
    "Never leave French words in the output. Latin anatomical names may stay in Latin. Keep abbreviations, gene/molecule symbols, units and chemical formulas in Latin script.",
    "Use Western digits (0-9). Write natural right-to-left Arabic; do not reverse or transliterate the text.",
  ].join(" "),
  it: "Target language: Italian, with standard Italian medical terminology used in Italian universities. Never leave French words in the output. Latin anatomical names may stay in Latin.",
  en: "Target language: English, with standard international medical terminology. Never leave French words in the output. Latin anatomical names may stay in Latin.",
};

function systemPrompt(lang: Lang, kind: Kind): string {
  return [
    "You are a professional medical translator. You translate French course material for first-year medical students (anatomy, physiology, biochemistry, lab practicals) at a Romanian university.",
    LANGUAGE_RULES[lang],
    "Rules:",
    "1. Translate faithfully and completely. Do not add, remove, summarise or explain anything.",
    "2. Preserve the formatting exactly: Markdown (headings, lists, tables, bold, italics, blockquotes), line breaks, blank lines, HTML and LaTeX.",
    "3. Copy unchanged every marker of the form [[visual:...]] or [[image:...]], every URL, number, unit, chemical formula, symbol and abbreviation (ATP, NADH, pO₂, HbA1c...).",
    "4. Questions stay questions and answers stay answers, with the same level of detail. Keep option letters and numbering.",
    kind === "figures"
      ? "5. These texts are short labels drawn inside diagrams where space is tight: keep each translation as short as the original, with no explanations."
      : "5. Keep the register of a clear university course.",
    'Return JSON only: {"items":[{"id":<same id>,"text":"<translation>"}]} with one entry per input item, same ids, same order.',
  ].join("\n");
}

const SCHEMA = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: { type: "object", properties: { id: { type: "integer" }, text: { type: "string" } }, required: ["id", "text"], additionalProperties: false },
    },
  },
  required: ["items"],
  additionalProperties: false,
} as const;

// --- Traduction -------------------------------------------------------------------
interface Job {
  kind: Kind;
  lang: Lang;
  items: Source[];
}

const markers = (text: string) => (text.match(/\[\[[^\]]+\]\]/g) ?? []).sort().join("|");
function looksValid(fr: string, translated: string): boolean {
  if (!translated.trim()) return false;
  if (markers(fr) !== markers(translated)) return false;
  const ratio = translated.length / Math.max(1, fr.length);
  return fr.length < 40 ? ratio < 8 : ratio > 0.25 && ratio < 4;
}

function makeBatches(items: Source[]): Source[][] {
  const batches: Source[][] = [];
  let current: Source[] = [];
  let size = 0;
  for (const item of items) {
    if (item.fr.length >= 6000) {
      batches.push([item]);
      continue;
    }
    if (current.length >= 50 || size + item.fr.length > 6000) {
      batches.push(current);
      current = [];
      size = 0;
    }
    current.push(item);
    size += item.fr.length;
  }
  if (current.length) batches.push(current);
  return batches;
}

let inputTokens = 0;
let outputTokens = 0;
let useFallbacks = process.env.TRANSLATE_FALLBACKS !== "0";
const client = DRY_RUN || PROVIDER !== "claude" ? null : new Anthropic();

async function callModel(job: Job, batch: Source[]): Promise<Map<number, string>> {
  const chars = batch.reduce((sum, item) => sum + item.fr.length, 0);
  const request = {
    model: MODEL,
    max_tokens: Math.min(64000, Math.max(4000, Math.ceil(chars / 1.2) + 2000)),
    thinking: { type: "adaptive" },
    output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
    system: systemPrompt(job.lang, job.kind),
    messages: [{ role: "user", content: JSON.stringify(batch.map((item, id) => ({ id, text: item.fr }))) }],
    ...(useFallbacks ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" } : {}),
  };
  const message = await client!.beta.messages.stream(request as unknown as Anthropic.Beta.MessageCreateParams).finalMessage();
  inputTokens += message.usage.input_tokens;
  outputTokens += message.usage.output_tokens;
  if (message.stop_reason === "refusal") throw new Error("refus du modèle");
  if (message.stop_reason === "max_tokens") throw new Error("réponse tronquée");
  const block = message.content.find((b) => b.type === "text");
  const parsed = JSON.parse(block && block.type === "text" ? block.text : "{}") as { items?: Array<{ id: number; text: string }> };
  return new Map((parsed.items ?? []).map((entry) => [entry.id, entry.text]));
}

// --- DeepL ------------------------------------------------------------------------
const DEEPL_KEY = process.env.DEEPL_API_KEY ?? "";
const DEEPL_BASE = DEEPL_KEY.endsWith(":fx") ? "https://api-free.deepl.com" : "https://api.deepl.com";
const DEEPL_CODES: Record<Lang, string> = { ar: "AR", it: "IT", en: "EN-GB" };
let deeplRemaining = Infinity;

async function deeplUsage(): Promise<void> {
  const response = await fetch(`${DEEPL_BASE}/v2/usage`, { headers: { Authorization: `DeepL-Auth-Key ${DEEPL_KEY}` } });
  if (!response.ok) throw new Error(`DeepL /usage : ${response.status}`);
  const usage = (await response.json()) as { character_count: number; character_limit: number };
  deeplRemaining = usage.character_limit - usage.character_count;
}

const escapeXml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const unescapeXml = (text: string) => text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");

// Les marqueurs [[visual:...]] deviennent des balises que DeepL ne traduit pas, puis sont remis en place.
function protect(text: string): { xml: string; saved: string[] } {
  const saved: string[] = [];
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  const xml = parts
    .map((part) => {
      if (/^\[\[[^\]]+\]\]$/.test(part)) {
        saved.push(part);
        return `<m id="${saved.length - 1}"/>`;
      }
      return escapeXml(part);
    })
    .join("");
  return { xml, saved };
}

const restore = (xml: string, saved: string[]) => unescapeXml(xml.replace(/<m id="(\d+)"\s*\/>|<m id="(\d+)">\s*<\/m>/g, (_all, a, b) => saved[Number(a ?? b)] ?? ""));

async function translateBatchDeepL(job: Job, batch: Source[]): Promise<Record<string, string>> {
  const chars = batch.reduce((sum, item) => sum + item.fr.length, 0);
  if (chars > deeplRemaining) throw new Error("QUOTA");
  const prepared = batch.map((item) => protect(item.fr));
  const response = await fetch(`${DEEPL_BASE}/v2/translate`, {
    method: "POST",
    headers: { Authorization: `DeepL-Auth-Key ${DEEPL_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      text: prepared.map((p) => p.xml),
      source_lang: "FR",
      target_lang: DEEPL_CODES[job.lang],
      tag_handling: "xml",
      preserve_formatting: true,
      split_sentences: "nonewlines",
    }),
  });
  if (response.status === 456) throw new Error("QUOTA");
  if (response.status === 403) throw new Error("Clé DeepL refusée.");
  if (!response.ok) throw new Error(`DeepL ${response.status}`);
  const data = (await response.json()) as { translations: Array<{ text: string }> };
  deeplRemaining -= chars;
  const good: Record<string, string> = {};
  batch.forEach((item, index) => {
    const text = restore(data.translations[index]?.text ?? "", prepared[index].saved);
    const sameLines = item.fr.split("\n").length === text.split("\n").length;
    if (sameLines && looksValid(item.fr, text)) good[item.fr] = text;
    else console.warn(`  ! texte ignoré (${job.lang}, structure modifiée) : ${item.fr.slice(0, 50).replace(/\s+/g, " ")}…`);
  });
  return good;
}

async function translateBatch(job: Job, batch: Source[]): Promise<Record<string, string>> {
  if (PROVIDER === "deepl") {
    for (let attempt = 1; ; attempt++) {
      try {
        return await translateBatchDeepL(job, batch);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (message === "QUOTA" || attempt >= 3 || message.includes("refusée")) throw error;
        await new Promise((resolve) => setTimeout(resolve, 2000 * attempt));
      }
    }
  }
  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const answers = await callModel(job, batch);
      const good: Record<string, string> = {};
      const bad: Source[] = [];
      batch.forEach((item, id) => {
        const text = answers.get(id);
        if (text !== undefined && looksValid(item.fr, text)) good[item.fr] = text;
        else bad.push(item);
      });
      // Les éléments douteux sont retentés un par un ; s'ils échouent encore, ils seront réessayés à la prochaine exécution.
      if (bad.length && batch.length > 1) {
        for (const item of bad) Object.assign(good, await translateBatch(job, [item]).catch(() => ({})));
      } else if (bad.length) console.warn(`  ! texte ignoré (${job.lang}) : ${bad[0].fr.slice(0, 60).replace(/\s+/g, " ")}…`);
      return good;
    } catch (error) {
      lastError = error;
      if (error instanceof Anthropic.BadRequestError && useFallbacks && /fallback/i.test(error.message)) {
        console.warn("  Repli automatique indisponible sur ce compte : désactivé.");
        useFallbacks = false;
        continue;
      }
      if (error instanceof Anthropic.AuthenticationError) throw error;
      await new Promise((resolve) => setTimeout(resolve, 2000 * attempt));
    }
  }
  throw lastError;
}

function pending(kind: Kind, lang: Lang, sources: Source[]): { todo: Source[]; done: number } {
  const dictionary = readDictionary(kind, lang);
  const todo = sources.filter((s) => !(s.fr in dictionary) && !(lang === "en" && kind === "content" && s.en));
  return { todo, done: sources.length - todo.length };
}

const dollars = (inTok: number, outTok: number) => {
  const [inPrice, outPrice] = PRICES[MODEL] ?? PRICES["claude-opus-5"];
  return (inTok * inPrice + outTok * outPrice) / 1_000_000;
};

async function main() {
  if (!DRY_RUN && PROVIDER === "claude" && !process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY manquante (Secrets Replit ou fichier .env à la racine du projet).");
    process.exit(1);
  }
  if (!DRY_RUN && PROVIDER === "deepl") {
    if (!DEEPL_KEY) {
      console.error("DEEPL_API_KEY manquante (Secrets Replit ou fichier .env à la racine du projet).");
      process.exit(1);
    }
    await deeplUsage();
    console.log(`DeepL : il reste ${deeplRemaining.toLocaleString("fr-FR")} caractères ce mois-ci.`);
  }
  const sources: Record<Kind, Source[]> = { content: ONLY === "figures" ? [] : collectContent(), figures: ONLY === "content" ? [] : collectFigures() };
  const jobs: Job[] = [];
  let estIn = 0;
  let estOut = 0;
  for (const lang of LANGS) {
    for (const kind of ["content", "figures"] as Kind[]) {
      const { todo, done } = pending(kind, lang, sources[kind]);
      const items = todo.slice(0, LIMIT);
      const chars = items.reduce((sum, s) => sum + s.fr.length, 0);
      console.log(`${lang} / ${kind} : ${items.length} à traduire (${done} déjà faits), ${Math.round(chars / 1000)}k caractères`);
      estIn += chars / 3 + 400 * makeBatches(items).length;
      estOut += chars / (lang === "ar" ? 1.8 : 2.6);
      for (const batch of makeBatches(items)) jobs.push({ kind, lang, items: batch });
    }
  }
  if (PROVIDER === "deepl") {
    const total = jobs.reduce((sum, job) => sum + job.items.reduce((n, item) => n + item.fr.length, 0), 0);
    console.log(`\nDeepL : ${total.toLocaleString("fr-FR")} caractères à traduire (quota gratuit : 500 000 par mois, soit ~${Math.ceil(total / 500_000)} mois au total).`);
  } else {
    console.log(`\nEstimation (${MODEL}) : ~${Math.round(estIn / 1000)}k tokens envoyés, ~${Math.round(estOut / 1000)}k tokens reçus, environ ${dollars(estIn, estOut).toFixed(0)} $.`);
  }
  if (DRY_RUN || jobs.length === 0) return;
  // Avec un quota mensuel, on traduit d'abord les légendes des schémas (courtes, utiles partout).
  if (PROVIDER === "deepl") jobs.sort((a, b) => Number(a.kind === "content") - Number(b.kind === "content"));

  const dictionaries = new Map<string, Record<string, string>>();
  const dictionaryOf = (job: Job) => {
    const key = `${job.kind}.${job.lang}`;
    if (!dictionaries.has(key)) dictionaries.set(key, readDictionary(job.kind, job.lang));
    return dictionaries.get(key)!;
  };

  let finished = 0;
  let quotaReached = false;
  let cursor = 0;
  const worker = async () => {
    while (cursor < jobs.length && !quotaReached) {
      const job = jobs[cursor++];
      try {
        const translated = await translateBatch(job, job.items);
        const dictionary = dictionaryOf(job);
        Object.assign(dictionary, translated);
        writeDictionary(job.kind, job.lang, dictionary);
      } catch (error) {
        if (error instanceof Error && error.message === "QUOTA") {
          quotaReached = true;
          break;
        }
        if (error instanceof Error && error.message.includes("refusée")) {
          console.error(error.message);
          process.exit(1);
        }
        if (error instanceof Anthropic.AuthenticationError) {
          console.error("Clé API refusée.");
          process.exit(1);
        }
        console.warn(`  ! lot ${job.lang}/${job.kind} échoué : ${error instanceof Error ? error.message : error}`);
      }
      finished++;
      if (finished % 5 === 0 || finished === jobs.length) {
        const spent = PROVIDER === "claude" ? `${dollars(inputTokens, outputTokens).toFixed(2)} $ dépensés` : `${deeplRemaining.toLocaleString("fr-FR")} caractères restants`;
        console.log(`  ${finished}/${jobs.length} lots — ${spent}`);
      }
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  if (quotaReached) console.log("\nQuota DeepL du mois atteint : ce qui est traduit est sauvegardé. Relance la même commande le mois prochain.");
  else if (PROVIDER === "claude") console.log(`\nTerminé : ${inputTokens} tokens envoyés, ${outputTokens} reçus (~${dollars(inputTokens, outputTokens).toFixed(2)} $).`);
  else console.log("\nTerminé.");
  console.log("Relance la commande pour réessayer les textes ignorés, puis commite server/translations et client/public/translations.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
