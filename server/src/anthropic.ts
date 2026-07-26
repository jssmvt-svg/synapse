import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const MODEL = "claude-opus-4-8";

const OUTPUT_SCHEMA = {
  type: "json_schema",
  schema: {
    type: "object",
    properties: {
      deck_title_fr: { type: "string" },
      deck_title_en: { type: "string" },
      flashcards: {
        type: "array",
        items: {
          type: "object",
          properties: {
            question_fr: { type: "string" },
            question_en: { type: "string" },
            answer_fr: { type: "string" },
            answer_en: { type: "string" },
          },
          required: ["question_fr", "question_en", "answer_fr", "answer_en"],
          additionalProperties: false,
        },
      },
      synthesis: {
        type: "object",
        properties: {
          content_fr: { type: "string" },
          content_en: { type: "string" },
        },
        required: ["content_fr", "content_en"],
        additionalProperties: false,
      },
    },
    required: ["deck_title_fr", "deck_title_en", "flashcards", "synthesis"],
    additionalProperties: false,
  },
} as const;

const SYSTEM_PROMPT = `Tu es un assistant pédagogique pour des étudiants en première année de médecine (PASS/LAS).
On te donne le texte extrait d'un cours. Tu dois produire, en français ET en anglais simultanément pour chaque champ :
1. Un titre de deck court et descriptif.
2. Une liste de flashcards de révision (question/réponse) couvrant les notions clés, définitions, mécanismes et
   valeurs importantes du cours. Vise entre 15 et 40 flashcards selon la densité du cours — ne néglige aucune
   notion testable, mais ne découpe pas artificiellement une même idée en plusieurs cartes redondantes.
3. Une synthèse de cours structurée (titres, points clés) qui permette de réviser rapidement sans relire le cours
   complet.
Reste rigoureusement fidèle au contenu fourni — n'invente aucune donnée médicale qui n'y figure pas.`;

interface GeneratedFlashcard {
  questionFr: string;
  questionEn: string;
  answerFr: string;
  answerEn: string;
}

export interface GeneratedContent {
  deckTitleFr: string;
  deckTitleEn: string;
  flashcards: GeneratedFlashcard[];
  synthesis: { contentFr: string; contentEn: string };
}

export async function generateFlashcardsAndSynthesis(courseText: string): Promise<GeneratedContent> {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    output_config: { effort: "high", format: OUTPUT_SCHEMA },
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Voici le texte du cours à traiter :\n\n${courseText}`,
      },
    ],
  });

  if (response.stop_reason === "refusal") {
    throw new Error("Le modèle a refusé de traiter ce contenu");
  }

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Réponse IA vide ou inattendue");
  }

  const parsed = JSON.parse(textBlock.text) as {
    deck_title_fr: string;
    deck_title_en: string;
    flashcards: Array<{ question_fr: string; question_en: string; answer_fr: string; answer_en: string }>;
    synthesis: { content_fr: string; content_en: string };
  };

  return {
    deckTitleFr: parsed.deck_title_fr,
    deckTitleEn: parsed.deck_title_en,
    flashcards: parsed.flashcards.map((c) => ({
      questionFr: c.question_fr,
      questionEn: c.question_en,
      answerFr: c.answer_fr,
      answerEn: c.answer_en,
    })),
    synthesis: { contentFr: parsed.synthesis.content_fr, contentEn: parsed.synthesis.content_en },
  };
}
