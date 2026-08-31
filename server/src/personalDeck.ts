export interface DeckNotion {
  slug: string;
  label: string;
}

export interface ParsedPersonalCard {
  front: string;
  back: string;
  notionSlug: string | null;
  included: boolean;
  duplicate: boolean;
}

export interface ParseResult {
  cards: ParsedPersonalCard[];
  warnings: string[];
}

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2018\u2019\u02bc\u00b4`]/g, "'")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function frontKey(value: string): string {
  return normalize(value);
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.replace(/\*\*/g, "").replace(/\s+/g, " ").trim() : "";
}

function notionSlug(value: string, notions: DeckNotion[]): string | null {
  const target = normalize(value);
  if (!target || target === "autre" || target === "none" || target === "aucune") return null;
  const found = notions.find((notion) => normalize(notion.slug) === target || normalize(notion.label) === target);
  return found?.slug ?? null;
}

export function buildFlashcardPrompt({
  moduleTitle,
  notions,
  courseText,
}: {
  moduleTitle: string;
  notions: DeckNotion[];
  courseText: string;
}): string {
  const notionList = notions.length
    ? notions.map((notion) => `${notion.slug} — ${notion.label}`).join("\n")
    : "autre — Aucune notion précise disponible";
  return `Tu es un assistant d'apprentissage pour un étudiant en première année de médecine.

Module : ${moduleTitle}

À partir du COURS ci-dessous, génère entre 15 et 25 flashcards de révision.

RÈGLES STRICTES :
- Utilise UNIQUEMENT le contenu du cours fourni. N'ajoute aucune information extérieure, même si tu la crois exacte. Si une notion est absente du cours, ne crée pas de carte dessus.
- Une carte = une seule idée. Recto court (une question ou un terme), verso court (2 phrases maximum).
- Privilégie les définitions, les mécanismes, les chiffres clés, les pièges et les distinctions faciles à confondre.
- Écris en français.

FORMAT DE SORTIE — une carte par ligne, exactement ainsi :
recto :: verso :: notion

Sans numérotation, sans tirets, sans texte avant ou après la liste.

NOTIONS DISPONIBLES (recopie le mot-clé exact dans la 3e colonne) :
${notionList}

Si une carte ne correspond à aucune notion de la liste, écris : autre

EXEMPLE :
Hélice alpha : entre quels résidus se fait la liaison hydrogène ? :: CO du résidu i et NH du résidu i+4. :: helice-alpha

COURS :
${courseText}`;
}

function fromJson(raw: string, notions: DeckNotion[]): ParsedPersonalCard[] | null {
  try {
    const parsed = JSON.parse(raw);
    const rows = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.cards) ? parsed.cards : null;
    if (!rows) return null;
    return (rows as unknown[])
      .map((row: unknown) => {
        if (!row || typeof row !== "object") return null;
        const item = row as Record<string, unknown>;
        const front = clean(item.front ?? item.recto ?? item.question);
        const back = clean(item.back ?? item.verso ?? item.reponse ?? item.réponse);
        const notion = clean(item.notion ?? item.notionSlug ?? item.category);
        return { front, back, notionSlug: notionSlug(notion, notions), included: true, duplicate: false };
      })
      .filter((card: ParsedPersonalCard | null): card is ParsedPersonalCard => Boolean(card));
  } catch {
    return null;
  }
}

function splitLine(line: string): string[] | null {
  for (const separator of ["::", "|", " — "]) {
    if (line.includes(separator)) return line.split(separator).map(clean);
  }
  return null;
}

export function parseFlashcardImport(rawText: string, notions: DeckNotion[]): ParseResult {
  const warnings: string[] = [];
  const cleanedRaw = rawText.replace(/```(?:json)?/gi, "").trim();
  const jsonCards = fromJson(cleanedRaw, notions);
  const candidates: ParsedPersonalCard[] = jsonCards ?? [];

  if (!jsonCards) {
    for (const originalLine of cleanedRaw.split(/\r?\n/)) {
      const line = originalLine
        .replace(/^\s*(?:(?:\d+\s*[\.\)])|(?:Q\s*\d+\s*:)|[-*•]+|[“"'`]+)\s*/i, "")
        .trim();
      if (!line) continue;
      const fields = splitLine(line);
      if (!fields) {
        warnings.push(`Ligne ignorée car aucun séparateur reconnu : « ${line.slice(0, 55)}${line.length > 55 ? "…" : ""} »`);
        continue;
      }
      const [front, back, rawNotion] = fields;
      candidates.push({
        front: clean(front),
        back: clean(back),
        notionSlug: notionSlug(clean(rawNotion), notions),
        included: true,
        duplicate: false,
      });
    }
  }

  const accepted: ParsedPersonalCard[] = [];
  const fronts = new Set<string>();
  for (const card of candidates) {
    if (!card.front || !card.back) {
      warnings.push("Une carte sans recto ou verso a été ignorée.");
      continue;
    }
    if (card.back.length > 600) {
      warnings.push(`La carte « ${card.front.slice(0, 42)}${card.front.length > 42 ? "…" : ""} » a un verso trop long et a été ignorée.`);
      continue;
    }
    const key = frontKey(card.front);
    if (fronts.has(key)) {
      warnings.push(`Le doublon « ${card.front.slice(0, 42)}${card.front.length > 42 ? "…" : ""} » a été décoché.`);
      accepted.push({ ...card, included: false, duplicate: true });
      continue;
    }
    fronts.add(key);
    accepted.push(card);
    if (accepted.length === 100) {
      if (candidates.length > accepted.length) warnings.push("L'import est limité à 100 cartes.");
      break;
    }
  }

  if (!accepted.length) {
    warnings.push("Aucune carte détectée. Utilise une ligne du type : recto :: verso :: notion");
  }
  return { cards: accepted, warnings };
}