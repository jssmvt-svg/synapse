import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  api,
  type PersonalDeckCard,
  type PersonalDeckContext,
  type PersonalDeckPreview,
  type PersonalDeckPreviewCard,
} from "../api";
import { useLang } from "../i18n";

type Step = "source" | "prompt" | "import" | "review";

const copy = {
  fr: {
    back: "← Retour au chapitre",
    eyebrow: "MON DECK PRIVÉ",
    title: "Fabrique tes flashcards",
    lead: "Utilise l’IA de ton choix, puis importe et vérifie chaque carte avant de l’ajouter à ton deck.",
    official: "À partir de la fiche Synapses",
    officialCopy: "Le cours officiel de ce chapitre est utilisé pour composer le prompt.",
    own: "À partir de mon cours",
    ownCopy: "Colle ton polycopié, tes notes ou un extrait de cours.",
    courseLabel: "Mon cours",
    coursePlaceholder: "Colle ici ton cours…",
    continue: "Créer le prompt",
    long: "Ce cours dépasse 15 000 caractères. Découpe-le en deux parties plutôt que de le tronquer.",
    promptTitle: "Copie ce prompt dans ton IA",
    promptHelp: "Synapses ne contacte aucune IA et ne stocke aucune clé. Colle ce prompt dans ChatGPT, Claude ou Gemini, puis reviens avec sa réponse.",
    copyPrompt: "Copier le prompt",
    copied: "Prompt copié",
    importTitle: "Importe la réponse de ton IA",
    responseLabel: "Réponse de l’IA",
    responsePlaceholder: "Colle ici les lignes de flashcards générées…",
    analyze: "Analyser les cartes",
    detected: (count: number, included: number) => `${count} cartes détectées, ${included} seront ajoutées`,
    warnings: "Points à vérifier",
    include: "Inclure",
    front: "Recto",
    backLabel: "Verso",
    notion: "Notion",
    noNotion: "Aucune / autre",
    remove: "Supprimer",
    add: (count: number) => `Ajouter ${count} carte${count > 1 ? "s" : ""} à mon deck`,
    saved: (count: number) => `${count} carte${count > 1 ? "s" : ""} ajoutée${count > 1 ? "s" : ""} à ton deck privé.`,
    skipped: (count: number) => `${count} doublon${count > 1 ? "s" : ""} n’a pas été ajouté.`,
    review: "Réviser mon deck",
    myCards: "Mes cartes personnelles",
    empty: "Aucune carte personnelle dans ce chapitre pour le moment.",
    unverified: "Généré par IA — non vérifié",
    flip: "Retourner la carte",
    difficult: "Difficile",
    later: "À revoir",
    known: "Je connais",
    progress: "Progression par notion",
    reviewed: "révisées",
    createMore: "Créer d’autres cartes",
  },
  en: {
    back: "← Back to chapter",
    eyebrow: "MY PRIVATE DECK",
    title: "Build your flashcards",
    lead: "Use the AI tool of your choice, then import and check every card before adding it to your deck.",
    official: "From the Synapses sheet",
    officialCopy: "The official course for this chapter is used to compose the prompt.",
    own: "From my course",
    ownCopy: "Paste your handout, notes, or a course extract.",
    courseLabel: "My course",
    coursePlaceholder: "Paste your course here…",
    continue: "Create prompt",
    long: "This course exceeds 15,000 characters. Split it into two parts instead of silently trimming it.",
    promptTitle: "Copy this prompt into your AI",
    promptHelp: "Synapses never contacts an AI or stores a key. Paste this prompt into ChatGPT, Claude, or Gemini, then return with its answer.",
    copyPrompt: "Copy prompt",
    copied: "Prompt copied",
    importTitle: "Import your AI response",
    responseLabel: "AI response",
    responsePlaceholder: "Paste the generated flashcard lines here…",
    analyze: "Analyze cards",
    detected: (count: number, included: number) => `${count} cards detected, ${included} will be added`,
    warnings: "Things to check",
    include: "Include",
    front: "Front",
    backLabel: "Back",
    notion: "Notion",
    noNotion: "None / other",
    remove: "Remove",
    add: (count: number) => `Add ${count} card${count > 1 ? "s" : ""} to my deck`,
    saved: (count: number) => `${count} card${count > 1 ? "s" : ""} added to your private deck.`,
    skipped: (count: number) => `${count} duplicate${count > 1 ? "s" : ""} was not added.`,
    review: "Review my deck",
    myCards: "My personal cards",
    empty: "No personal cards in this chapter yet.",
    unverified: "AI generated — unverified",
    flip: "Flip card",
    difficult: "Difficult",
    later: "Review",
    known: "I know it",
    progress: "Progress by notion",
    reviewed: "reviewed",
    createMore: "Create more cards",
  },
} as const;

function PersonalReview({
  chapterId,
  cards,
  onRated,
}: {
  chapterId: number;
  cards: PersonalDeckCard[];
  onRated: () => void;
}) {
  const { lang } = useLang();
  const text = copy[lang];
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [saving, setSaving] = useState(false);
  const card = cards[index];

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(cards.length - 1, 0)));
  }, [cards.length]);

  if (!card) return <p className="hint">{text.empty}</p>;

  const rate = async (mastery: number) => {
    setSaving(true);
    try {
      await api.ratePersonalDeckCard(chapterId, card.id, mastery);
      setFlipped(false);
      setIndex((current) => (cards.length ? (current + 1) % cards.length : 0));
      onRated();
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="personal-review">
      <div className="panel-topline">
        <span className="ai-unverified-badge">{text.unverified}</span>
        <span className="progress-label">{index + 1} / {cards.length}</span>
      </div>
      <button type="button" className={`study-flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped((value) => !value)}>
        <span className="flashcard-face">{flipped ? card.back : card.front}</span>
        <span className="flip-hint">{text.flip}</span>
      </button>
      <div className="mastery-actions">
        <button type="button" className="mastery-difficult" disabled={saving || !flipped} onClick={() => void rate(1)}>{text.difficult}</button>
        <button type="button" className="mastery-review" disabled={saving || !flipped} onClick={() => void rate(3)}>{text.later}</button>
        <button type="button" className="mastery-known" disabled={saving || !flipped} onClick={() => void rate(5)}>{text.known}</button>
      </div>
    </section>
  );
}

export function MyDeck() {
  const { id } = useParams<{ id: string }>();
  const chapterId = Number(id);
  const { lang } = useLang();
  const text = copy[lang];
  const [context, setContext] = useState<PersonalDeckContext | null>(null);
  const [step, setStep] = useState<Step>("source");
  const [source, setSource] = useState<"official" | "own">("official");
  const [ownCourse, setOwnCourse] = useState("");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [preview, setPreview] = useState<PersonalDeckPreview | null>(null);
  const [cards, setCards] = useState<PersonalDeckPreviewCard[]>([]);
  const [personalCards, setPersonalCards] = useState<PersonalDeckCard[]>([]);
  const [progress, setProgress] = useState<Array<{ notionSlug: string; label: string; total: number; reviewed: number; mastered: number; toReview: number }>>([]);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadCards = async () => {
    const result = await api.getPersonalDeckCards(chapterId);
    setPersonalCards(result.cards);
    setProgress(result.progress);
  };

  useEffect(() => {
    if (!Number.isInteger(chapterId) || chapterId < 1) return;
    Promise.all([api.getPersonalDeckContext(chapterId), api.getPersonalDeckCards(chapterId)])
      .then(([nextContext, personal]) => {
        setContext(nextContext);
        setPersonalCards(personal.cards);
        setProgress(personal.progress);
      })
      .catch((err) => setError((err as Error).message));
  }, [chapterId]);

  const activeCourse = source === "official" ? context?.courseText ?? "" : ownCourse;
  const includedCount = cards.filter((card) => card.included).length;
  const warnings = preview?.warnings ?? [];
  const overLimit = activeCourse.length > 15_000;

  const createPrompt = async () => {
    setBusy(true);
    setError(null);
    try {
      const result = await api.createPersonalDeckPrompt(chapterId, activeCourse);
      setPrompt(result.prompt);
      setNotice(result.warning);
      setStep("prompt");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setError("Impossible de copier automatiquement. Sélectionne le texte et copie-le manuellement.");
    }
  };

  const analyze = async () => {
    setBusy(true);
    setError(null);
    try {
      const result = await api.previewPersonalDeckImport(chapterId, response);
      setPreview(result);
      setCards(result.cards);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const save = async () => {
    if (!preview) return;
    setBusy(true);
    setError(null);
    try {
      const result = await api.savePersonalDeckCards(chapterId, preview.previewToken, cards.filter((card) => card.included));
      setNotice(`${text.saved(result.addedCount)}${result.skippedCount ? ` ${text.skipped(result.skippedCount)}` : ""}`);
      await loadCards();
      setPreview(null);
      setCards([]);
      setStep("review");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const updateCard = (index: number, patch: Partial<PersonalDeckPreviewCard>) => {
    setCards((current) => current.map((card, itemIndex) => (itemIndex === index ? { ...card, ...patch } : card)));
  };

  if (error && !context) return <main className="my-deck-shell"><p className="error">{error}</p></main>;
  if (!context) return <main className="my-deck-shell"><p className="loading-state">…</p></main>;

  return (
    <main className="my-deck-shell">
      <header className="my-deck-header">
        <Link to={`/library/chapter/${chapterId}`} className="back-link">{text.back}</Link>
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.lead}</p>
      </header>

      <ol className="deck-steps" aria-label="Étapes">
        <li className={step === "source" ? "active" : ""}>1. Source</li>
        <li className={step === "prompt" ? "active" : ""}>2. Prompt</li>
        <li className={step === "import" ? "active" : ""}>3. Import</li>
      </ol>
      {error && <p className="error">{error}</p>}
      {notice && <p className="success-note">{notice}</p>}

      {step === "source" && (
        <section className="my-deck-panel">
          <h2>{context.chapter.titre_fr}</h2>
          <div className="source-choice-grid">
            <button type="button" className={`source-choice ${source === "official" ? "selected" : ""}`} onClick={() => setSource("official")}>
              <strong>{text.official}</strong><span>{text.officialCopy}</span>
            </button>
            <button type="button" className={`source-choice ${source === "own" ? "selected" : ""}`} onClick={() => setSource("own")}>
              <strong>{text.own}</strong><span>{text.ownCopy}</span>
            </button>
          </div>
          {source === "own" ? (
            <label className="deck-field">
              <span>{text.courseLabel}</span>
              <textarea value={ownCourse} onChange={(event) => setOwnCourse(event.target.value)} placeholder={text.coursePlaceholder} rows={12} />
            </label>
          ) : (
            <div className="official-source-note"><strong>{text.official}</strong><p>{context.courseText ? `${context.courseText.length.toLocaleString()} caractères seront utilisés.` : "Aucun texte officiel n’est encore disponible dans ce chapitre."}</p></div>
          )}
          {(overLimit || context.courseWarning) && <p className="warning-note">{overLimit ? text.long : context.courseWarning}</p>}
          <button type="button" onClick={() => void createPrompt()} disabled={busy || !activeCourse.trim()}>{busy ? "…" : text.continue}</button>
        </section>
      )}

      {step === "prompt" && (
        <section className="my-deck-panel">
          <h2>{text.promptTitle}</h2>
          <p className="hint">{text.promptHelp}</p>
          <textarea className="prompt-output" value={prompt} readOnly rows={18} />
          <div className="deck-actions">
            <button type="button" onClick={() => void copyPrompt()}>{copied ? text.copied : text.copyPrompt}</button>
            <a href="https://chatgpt.com/" target="_blank" rel="noreferrer">ChatGPT</a>
            <a href="https://claude.ai/" target="_blank" rel="noreferrer">Claude</a>
            <a href="https://gemini.google.com/" target="_blank" rel="noreferrer">Gemini</a>
          </div>
          <button type="button" className="text-button deck-next" onClick={() => { setError(null); setStep("import"); }}>{text.importTitle} →</button>
        </section>
      )}

      {step === "import" && (
        <section className="my-deck-panel">
          <h2>{text.importTitle}</h2>
          {!preview ? (
            <>
              <label className="deck-field">
                <span>{text.responseLabel}</span>
                <textarea value={response} onChange={(event) => setResponse(event.target.value)} placeholder={text.responsePlaceholder} rows={14} />
              </label>
              <button type="button" onClick={() => void analyze()} disabled={busy || !response.trim()}>{busy ? "…" : text.analyze}</button>
            </>
          ) : (
            <>
              <div className="preview-summary"><strong>{text.detected(cards.length, includedCount)}</strong><span className="ai-unverified-badge">{text.unverified}</span></div>
              {warnings.length > 0 && <div className="warning-list"><strong>{text.warnings}</strong><ul>{warnings.map((warning, index) => <li key={`${warning}-${index}`}>{warning}</li>)}</ul></div>}
              <div className="preview-card-list">
                {cards.map((card, index) => (
                  <article key={`${card.front}-${index}`} className={`preview-card ${card.included ? "" : "excluded"}`}>
                    <div className="preview-card-topline">
                      <label><input type="checkbox" checked={card.included} onChange={(event) => updateCard(index, { included: event.target.checked })} /> {text.include}</label>
                      <button type="button" className="text-button delete-card" onClick={() => setCards((current) => current.filter((_, itemIndex) => itemIndex !== index))}>{text.remove}</button>
                    </div>
                    {card.duplicate && <span className="duplicate-note">Doublon détecté</span>}
                    <label className="deck-field"><span>{text.front}</span><textarea value={card.front} onChange={(event) => updateCard(index, { front: event.target.value })} rows={2} /></label>
                    <label className="deck-field"><span>{text.backLabel}</span><textarea value={card.back} onChange={(event) => updateCard(index, { back: event.target.value })} rows={3} /></label>
                    <label className="deck-field"><span>{text.notion}</span><select value={card.notionSlug ?? ""} onChange={(event) => updateCard(index, { notionSlug: event.target.value || null })}><option value="">{text.noNotion}</option>{context.notions.map((notion) => <option key={notion.slug} value={notion.slug}>{notion.label}</option>)}</select></label>
                  </article>
                ))}
              </div>
              <button type="button" onClick={() => void save()} disabled={busy || includedCount === 0}>{busy ? "…" : text.add(includedCount)}</button>
            </>
          )}
        </section>
      )}

      <section className="my-cards-panel">
        <div className="my-cards-heading"><div><p className="eyebrow">{text.eyebrow}</p><h2>{text.myCards}</h2></div><span className="ai-unverified-badge">{text.unverified}</span></div>
        {personalCards.length === 0 ? <p className="hint">{text.empty}</p> : (
          <>
            {step !== "review" ? <button type="button" onClick={() => setStep("review")}>{text.review}</button> : <PersonalReview chapterId={chapterId} cards={personalCards} onRated={() => void loadCards()} />}
            {progress.some((item) => item.total > 0) && <div className="notion-progress"><h3>{text.progress}</h3>{progress.filter((item) => item.total > 0).map((item) => <p key={item.notionSlug}><strong>{item.label}</strong><span>{item.reviewed}/{item.total} {text.reviewed}</span></p>)}</div>}
          </>
        )}
        {step === "review" && <button type="button" className="text-button deck-next" onClick={() => { setNotice(null); setStep("source"); }}>{text.createMore}</button>}
      </section>
    </main>
  );
}