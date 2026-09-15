import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type AdminSemester, type AdminStudent, type AdminChapter } from "../api";
import { useLang } from "../i18n";

function studentStatusBadge(student: AdminStudent, lang: string): { label: string; className: string } {
  const now = Date.now();
  if (student.subscription_status === "active") {
    return { label: lang === "fr" ? "Abonné" : "Subscribed", className: "badge-active" };
  }
  if (student.subscription_status === "trialing" && student.trial_ends_at && student.trial_ends_at > now) {
    return { label: lang === "fr" ? "Essai actif" : "Trial active", className: "badge-trial" };
  }
  if (student.trial_used && student.trial_ends_at && student.trial_ends_at <= now) {
    return { label: lang === "fr" ? "Essai expiré" : "Trial expired", className: "badge-expired" };
  }
  if (student.access_revoked_at) {
    return { label: lang === "fr" ? "Accès révoqué" : "Access revoked", className: "badge-expired" };
  }
  if (student.access_requested_at && !student.access_revoked_at && !student.trial_used) {
    return { label: lang === "fr" ? "Demande en attente" : "Access requested", className: "badge-pending" };
  }
  return { label: lang === "fr" ? "Aucun accès" : "No access", className: "badge-none" };
}

function trialCountdown(trialEndsAt: number, lang: string): string {
  const remaining = Math.max(0, trialEndsAt - Date.now());
  if (remaining === 0) return lang === "fr" ? "Terminé" : "Ended";
  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  return lang === "fr" ? `${hours} h ${minutes} min restantes` : `${hours}h ${minutes}m remaining`;
}

function formatDate(value: number | null | undefined, lang: string): string {
  if (!value) return "—";
  return new Date(value).toLocaleString(lang === "fr" ? "fr-FR" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function Admin() {
  const { lang } = useLang();
  const [semesters, setSemesters] = useState<AdminSemester[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<number | null>(null);
  useEffect(() => { api.getAdminSemesters().then(setSemesters).catch((err) => setError((err as Error).message)); }, []);
  const [students, setStudents] = useState<AdminStudent[] | null>(null);
  const [chapters, setChapters] = useState<AdminChapter[] | null>(null);
  const [expandedStudent, setExpandedStudent] = useState<number | null>(null);
  const [grants, setGrants] = useState<Record<number, number[]>>({});
  const [grantSaving, setGrantSaving] = useState<string | null>(null);
  const [accessSaving, setAccessSaving] = useState<number | null>(null);

  function refreshStudents() {
    api.getAdminStudents().then((data) => setStudents(data.students)).catch((err) => setError((err as Error).message));
  }

  useEffect(() => {
    refreshStudents();
    api.getAdminChapters().then(setChapters).catch((err) => setError((err as Error).message));
  }, []);

  const toggleStudent = async (studentId: number) => {
    if (expandedStudent === studentId) { setExpandedStudent(null); return; }
    setExpandedStudent(studentId);
    if (!grants[studentId]) {
      const data = await api.getAdminGrants(studentId);
      setGrants((current) => ({ ...current, [studentId]: data.chapterIds }));
    }
  };
  const toggleGrant = async (studentId: number, chapterId: number, grantValue: boolean) => {
    const key = `${studentId}-${chapterId}`;
    setGrantSaving(key);
    try {
      await api.setAdminGrant(studentId, chapterId, grantValue);
      setGrants((current) => {
        const existing = current[studentId] ?? [];
        const next = grantValue ? [...existing, chapterId] : existing.filter((id) => id !== chapterId);
        return { ...current, [studentId]: next };
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setGrantSaving(null);
    }
  };

  const grantTrial = async (studentId: number) => {
    setAccessSaving(studentId);
    try {
      await api.grantTrial(studentId);
      refreshStudents();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setAccessSaving(null);
    }
  };

  const revokeAccess = async (studentId: number) => {
    setAccessSaving(studentId);
    try {
      await api.revokeAccess(studentId);
      refreshStudents();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setAccessSaving(null);
    }
  };

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

  const pendingCount = students?.filter((student) => !student.subscription_status || student.subscription_status === "inactive")
    .filter((student) => student.access_requested_at).length ?? 0;

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
      <section className="admin-students">
        <header>
          <p className="eyebrow">{lang === "fr" ? "Étudiants" : "Students"}</p>
          <h2>
            {lang === "fr"
              ? `${students?.length ?? 0} étudiant(s) inscrit(s)`
              : `${students?.length ?? 0} registered student(s)`}
          </h2>
          {pendingCount > 0 && (
            <p className="admin-pending-alert">
              {lang === "fr"
                ? `${pendingCount} demande(s) d'accès en attente`
                : `${pendingCount} pending access request(s)`}
            </p>
          )}
        </header>
        {!students ? (
          <p className="loading-state">…</p>
        ) : (
          <ul className="admin-student-list">
            {students.map((student) => {
              const badge = studentStatusBadge(student, lang);
              const fullName = [student.first_name, student.last_name].filter(Boolean).join(" ") || student.email;
              return (
                <li key={student.id} className="admin-student-row">
                  <button type="button" className="admin-student-toggle" onClick={() => void toggleStudent(student.id)}>
                    <span className="admin-student-identity">
                      <strong>{fullName}</strong>
                      <small>{student.email}</small>
                    </span>
                    <span className={`admin-status-badge ${badge.className}`}>{badge.label}</span>
                  </button>
                  <div className="admin-student-meta">
                    {student.track && <span className="admin-meta-chip">{student.track}</span>}
                    {student.phone && <span className="admin-meta-chip">{student.phone}</span>}
                    {student.subscription_status === "trialing" && student.trial_ends_at && (
                      <span className="admin-meta-chip">
                        {lang === "fr" ? "Fin d'essai : " : "Trial ends: "}
                        {formatDate(student.trial_ends_at, lang)} · {trialCountdown(student.trial_ends_at, lang)}
                      </span>
                    )}
                  </div>
                  <div className="admin-student-actions">
                    {student.subscription_status !== "active" && !student.trial_used && Boolean(student.access_requested_at) && (
                      <button type="button" onClick={() => void grantTrial(student.id)} disabled={accessSaving === student.id}>
                        {accessSaving === student.id ? "…" : lang === "fr" ? "Accorder 48h" : "Grant 48h"}
                      </button>
                    )}
                    {student.subscription_status === "trialing" && student.trial_ends_at && student.trial_ends_at > Date.now() && (
                      <button type="button" className="btn-secondary" onClick={() => void revokeAccess(student.id)} disabled={accessSaving === student.id}>
                        {accessSaving === student.id ? "…" : lang === "fr" ? "Révoquer" : "Revoke"}
                      </button>
                    )}
                  </div>
                  {expandedStudent === student.id && (
                    <div className="admin-student-grants">
                      {!chapters ? (
                        <p className="loading-state">...</p>
                      ) : (
                        Array.from(new Set(chapters.map((chapter) => chapter.matiere))).map((matiere) => (
                          <div key={matiere} className="admin-grant-subject">
                            <h3>{matiere}</h3>
                            {chapters.filter((chapter) => chapter.matiere === matiere).map((chapter) => {
                              const checked = (grants[student.id] ?? []).includes(chapter.id);
                              const rowKey = `${student.id}-${chapter.id}`;
                              return (
                                <label key={chapter.id} className="admin-grant-row">
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    disabled={grantSaving === rowKey}
                                    onChange={(e) => void toggleGrant(student.id, chapter.id, e.target.checked)}
                                  />
                                  {lang === "fr" ? chapter.titre_fr : chapter.titre_en}
                                </label>
                              );
                            })}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
