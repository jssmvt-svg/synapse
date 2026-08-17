import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, type DocumentSummary } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

export function Dashboard() {
  const { t, lang, setLang } = useLang();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<DocumentSummary[]>([]);
  const [selectedDocId, setSelectedDocId] = useState<number | null>(null);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  async function refresh() {
    setDocuments(await api.listDocuments());
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

  async function onGenerateFlashcards() {
    if (selectedDocId === null || generating) return;
    setError(null);
    setGenerating(true);
    try {
      const { deckId } = await api.generate(selectedDocId);
      navigate(`/deck/${deckId}`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{t.appName}</h1>
        <div className="header-actions">
          <Link to="/library" className="library-link">
            {t.libraryTitle}
          </Link>
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

      <div className="workspace">
        <section className="col col-sources">
          <h2>{t.sourcesTitle}</h2>
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
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  className={`document-row${doc.id === selectedDocId ? " selected" : ""}`}
                  onClick={() => setSelectedDocId(doc.id)}
                >
                  <span>{doc.filename}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="col col-chat">
          <h2>{t.chatTitle}</h2>
          <div className="mascot-card">
            <div className="mascot-avatar" aria-hidden="true">
              🐱
            </div>
            <p className="mascot-bubble">{t.sageIntro}</p>
          </div>
          <div className="chat-input-row">
            <input disabled placeholder={t.chatPlaceholder} aria-label={t.chatPlaceholder} />
            <button disabled>{t.chatSend}</button>
          </div>
          <span className="badge">{t.comingSoon}</span>
        </section>

        <section className="col col-studio">
          <h2>{t.studioTitle}</h2>
          <div className="studio-grid">
            <button
              className="studio-action"
              disabled={selectedDocId === null || generating}
              onClick={onGenerateFlashcards}
            >
              {t.studioFlashcards}
              {generating ? (
                <span className="badge">{t.generating}</span>
              ) : selectedDocId === null ? (
                <span className="hint">{t.selectDocumentHint}</span>
              ) : null}
            </button>
            <button disabled className="studio-action">
              {t.studioAudio}
              <span className="badge">{t.comingSoon}</span>
            </button>
            <button disabled className="studio-action">
              {t.studioVideo}
              <span className="badge">{t.comingSoon}</span>
            </button>
            <button disabled className="studio-action">
              {t.studioQuiz}
              <span className="badge">{t.comingSoon}</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
