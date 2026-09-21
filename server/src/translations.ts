import type { NextFunction, Request, Response } from "express";
import { existsSync, readFileSync } from "node:fs";

// Traductions du contenu des cours (arabe, italien, et anglais là où il manque).
// Les fichiers server/translations/content.<langue>.json sont produits par
// `npm run translate` ; clé = texte français exact, valeur = traduction.
// Le serveur les applique aux réponses JSON : pour l'arabe et l'italien, le champ
// « X_en » (ou « xEn ») reçoit la traduction, donc le client n'a rien à changer.

export type ContentLang = "fr" | "en" | "ar" | "it";
type Dictionary = Record<string, string>;

const cache = new Map<string, Dictionary>();

function dictionaryPath(lang: string): URL {
  return new URL(`../translations/content.${lang}.json`, import.meta.url);
}

export function loadDictionary(lang: string): Dictionary {
  const cached = cache.get(lang);
  if (cached) return cached;
  const file = dictionaryPath(lang);
  let dictionary: Dictionary = {};
  if (existsSync(file)) {
    try {
      dictionary = JSON.parse(readFileSync(file, "utf8")) as Dictionary;
    } catch (error) {
      console.error(`[translations] ${lang} illisible :`, error instanceof Error ? error.message : error);
    }
  }
  cache.set(lang, dictionary);
  return dictionary;
}

export function parseLang(value: unknown): ContentLang {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw === "en" || raw === "ar" || raw === "it" ? raw : "fr";
}

// « titre_fr » -> « titre_en », « promptFr » -> « promptEn ».
function siblingEnglishKey(key: string): string | null {
  if (key.endsWith("_fr")) return `${key.slice(0, -3)}_en`;
  if (key.endsWith("Fr") && key.length > 2) return `${key.slice(0, -2)}En`;
  return null;
}

const MAX_DEPTH = 12;

// Copie transformée : ne modifie jamais l'objet d'origine (il peut être mis en cache).
export function localize<T>(value: T, lang: ContentLang, dictionary: Dictionary = loadDictionary(lang), depth = 0): T {
  if (lang === "fr" || depth > MAX_DEPTH) return value;
  if (Array.isArray(value)) return value.map((item) => localize(item, lang, dictionary, depth + 1)) as unknown as T;
  if (value === null || typeof value !== "object") return value;
  const proto = Object.getPrototypeOf(value);
  if (proto !== Object.prototype && proto !== null) return value; // Date, Buffer…

  const source = value as Record<string, unknown>;
  const result: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(source)) result[key] = localize(child, lang, dictionary, depth + 1);

  for (const [key, french] of Object.entries(source)) {
    if (typeof french !== "string" || !french) continue;
    const englishKey = siblingEnglishKey(key);
    if (!englishKey) continue;
    const translated = dictionary[french];
    if (!translated) continue;
    // Anglais : on ne remplace jamais une traduction écrite à la main.
    if (lang === "en" && typeof source[englishKey] === "string" && source[englishKey]) continue;
    result[englishKey] = translated;
  }
  return result as T;
}

export function localizeResponses(req: Request, res: Response, next: NextFunction): void {
  const lang = parseLang(req.headers["x-lang"]);
  if (lang === "fr") return next();
  const json = res.json.bind(res);
  res.json = ((body: unknown) => json(localize(body, lang))) as Response["json"];
  next();
}
