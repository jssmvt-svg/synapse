import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { api, type DeckSummary, type DocumentSummary } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

export function Dashboard() {
  const { t, lang, setLang } = useLang();
  const { user, logout } = useAuth();
  const [documents, setDocuments] = useState<DocumentSummary[]>([]);
  const [decks, setDecks] = useState<DeckSummary[]>([]);
  const [busyDocId, setBusyDocId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  async function refresh() {
    const [docs, deckList] = await Promise.all([api.listDocuments(), api.listDecks()]);
    setDocuments(docs);
    setDecks(deckList);
  }

  useEffect(() => {
    refresh().catch((err) => setError((err as Error).message));
  }, []);

  async function onFileChosen(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    try {
      await api.uploadDocument(file);
      await refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  async function onGenerate(documentId: number) {
    setBusyDocId(documentId);
    setError(null);
    try {
      await api.generate(documentId);
      await refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusyDocId(null);
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{t.appName}</h1>
        <div className="header-actions">
          <button
            className="lang-toggle"
            onClick={() => {
              const next = lang === "fr" ? "en" : "fr";
              setLang(next);
              api.setLang(next).catch(() => {});
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <span>{user?.email}</span>
          <button onClick={logout}>{t.logout}</button>
        </div>
      </header>

      <h2>{t.dashboard}</h2>
      <p>{t.uploadPrompt}</p>
      <input
        ref={fileInput}
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={onFileChosen}
        aria-label={t.uploadButton}
      />
      {error && <p className="error">{error}</p>}

      {documents.length === 0 ? (
        <p>{t.noDocuments}</p>
      ) : (
        <ul className="document-list">
          {documents.map((doc) => {
            const deck = decks.find((d) => d.document_id === doc.id);
            return (
              <li key={doc.id} className="document-row">
                <span>{doc.filename}</span>
                {deck ? (
                  <div className="row-actions">
                    <Link to={`/deck/${deck.id}`}>{t.viewDeck}</Link>
                    <Link to={`/document/${doc.id}/synthesis`}>{t.viewSynthesis}</Link>
                  </div>
                ) : (
                  <button onClick={() => onGenerate(doc.id)} disabled={busyDocId === doc.id}>
                    {busyDocId === doc.id ? t.generating : t.generate}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
