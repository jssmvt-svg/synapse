import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { api, type DocumentSummary } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

export function Dashboard() {
  const { t, lang, setLang } = useLang();
  const { user, logout } = useAuth();
  const [documents, setDocuments] = useState<DocumentSummary[]>([]);
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
          {documents.map((doc) => (
            <li key={doc.id} className="document-row">
              <span>{doc.filename}</span>
              <button disabled>{t.aiComingSoon}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
