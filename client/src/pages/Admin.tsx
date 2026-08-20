import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type AdminSemester } from "../api";
import { useLang } from "../i18n";

export function Admin() {
  const { lang } = useLang();
  const [semesters, setSemesters] = useState<AdminSemester[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<number | null>(null);
  useEffect(() => { api.getAdminSemesters().then(setSemesters).catch((err) => setError((err as Error).message)); }, []);

  const toggle = async (semester: AdminSemester) => {
    setSaving(semester.semester_number); setError(null);
    try {
      const updated = await api.setSemesterPublished(semester.semester_number, !semester.is_published);
      setSemesters((current) => current?.map((item) => item.semester_number === updated.semester_number ? updated : item) ?? null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(null);
    }
  };

  return (
    <main className="admin-shell">
      <Link to="/library" className="back-link">{lang === "fr" ? "← Retour à la bibliothèque" : "← Back to library"}</Link>
      <header><p className="eyebrow">{lang === "fr" ? "Espace Jessica" : "Jessica workspace"}</p><h1>{lang === "fr" ? "Administration de première année" : "Year-one administration"}</h1><p>{lang === "fr" ? "Ouvre ou ferme un semestre pour les étudiants ayant un abonnement actif." : "Open or close a semester for students with an active membership."}</p></header>
      {error && <p className="error">{error}</p>}
      {!semesters ? <p className="loading-state">…</p> : (
        <section className="admin-semester-list">
          {semesters.map((semester) => (
            <article key={semester.id} className="admin-semester-row">
              <div><span className={`status-dot ${semester.is_published ? "is-open" : ""}`} /><p className="eyebrow">{lang === "fr" ? "Première année" : "Year one"}</p><h2>{lang === "fr" ? semester.title_fr : semester.title_en}</h2><p>{lang === "fr" ? semester.description_fr : semester.description_en}</p></div>
              <div className="admin-actions"><strong>{semester.is_published ? (lang === "fr" ? "Accessible" : "Open") : (lang === "fr" ? "Fermé" : "Closed")}</strong><button type="button" onClick={() => void toggle(semester)} disabled={saving === semester.semester_number}>{saving === semester.semester_number ? "…" : semester.is_published ? (lang === "fr" ? "Fermer le semestre" : "Close semester") : (lang === "fr" ? "Ouvrir le semestre" : "Open semester")}</button></div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}