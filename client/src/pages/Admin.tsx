import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type AdminChapter, type AdminSemester, type AdminUser } from "../api";
import { useLang } from "../i18n";

function formatDate(lang: "fr" | "en", value: number | null | undefined): string {
  if (!value) return "—";
  return new Date(value).toLocaleString(lang === "fr" ? "fr-FR" : "en-GB", { dateStyle: "medium", timeStyle: "short" });
}

function trackLabel(lang: "fr" | "en", track: AdminUser["track"]): string {
  if (track === "medecine") return lang === "fr" ? "Médecine" : "Medicine";
  if (track === "dentaire") return lang === "fr" ? "Dentaire" : "Dentistry";
  return "—";
}

function trialCountdown(trialEndsAt: number, lang: "fr" | "en"): string {
  const remaining = Math.max(0, trialEndsAt - Date.now());
  if (remaining === 0) return lang === "fr" ? "terminé" : "ended";
  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  return lang === "fr" ? `${hours} h ${minutes} min restantes` : `${hours}h ${minutes}m remaining`;
}

function statusLabel(lang: "fr" | "en", user: AdminUser): string {
  if (user.role === "admin") return lang === "fr" ? "Administrateur" : "Administrator";
  if (user.subscriptionStatus === "active") return lang === "fr" ? "Accès permanent" : "Permanent access";
  if (user.subscriptionStatus === "trialing" && user.trialEndsAt) {
    return lang === "fr"
      ? `Essai gratuit actif — ${trialCountdown(user.trialEndsAt, lang)}`
      : `Free trial active — ${trialCountdown(user.trialEndsAt, lang)}`;
  }
  if (user.trialStatus === "expired") return lang === "fr" ? "Essai gratuit terminé" : "Free trial ended";
  return lang === "fr" ? "Aucun accès" : "No access";
}

export function Admin() {
  const { lang } = useLang();
  const [semesters, setSemesters] = useState<AdminSemester[] | null>(null);
  const [users, setUsers] = useState<AdminUser[] | null>(null);
  const [chapters, setChapters] = useState<AdminChapter[] | null>(null);
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);
  const [grants, setGrants] = useState<Record<number, number[]>>({});
  const [grantSaving, setGrantSaving] = useState<string | null>(null);
  const [accessSaving, setAccessSaving] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<number | null>(null);

  const loadUsers = () => api.getAdminUsers().then(setUsers).catch((err) => setError((err as Error).message));

  useEffect(() => {
    api.getAdminSemesters().then(setSemesters).catch((err) => setError((err as Error).message));
    api.getAdminChapters().then(setChapters).catch((err) => setError((err as Error).message));
    void loadUsers();
  }, []);

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

  const toggleUser = async (userId: number) => {
    if (expandedUserId === userId) { setExpandedUserId(null); return; }
    setExpandedUserId(userId);
    if (!grants[userId]) {
      const data = await api.getAdminGrants(userId);
      setGrants((current) => ({ ...current, [userId]: data.chapterIds }));
    }
  };

  const toggleGrant = async (userId: number, chapterId: number, grantValue: boolean) => {
    const key = `${userId}-${chapterId}`;
    setGrantSaving(key);
    try {
      await api.setAdminGrant(userId, chapterId, grantValue);
      setGrants((current) => {
        const existing = current[userId] ?? [];
        const next = grantValue ? [...existing, chapterId] : existing.filter((id) => id !== chapterId);
        return { ...current, [userId]: next };
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setGrantSaving(null);
    }
  };

  const revokeAccess = async (userId: number) => {
    setAccessSaving(userId); setError(null);
    try {
      await api.revokeAccess(userId);
      await loadUsers();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setAccessSaving(null);
    }
  };

  const grantTrial = async (userId: number) => {
    setAccessSaving(userId); setError(null);
    try {
      await api.grantTrial(userId);
      await loadUsers();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setAccessSaving(null);
    }
  };

  return (
    <main className="admin-shell">
      <Link to="/library" className="back-link">{lang === "fr" ? "← Retour à la bibliothèque" : "← Back to library"}</Link>
      <header><p className="eyebrow">{lang === "fr" ? "Espace Jessica" : "Jessica workspace"}</p><h1>{lang === "fr" ? "Administration de première année" : "Year-one administration"}</h1><p>{lang === "fr" ? "Ouvre ou ferme un semestre pour les étudiants ayant un accès actif." : "Open or close a semester for students with active access."}</p></header>
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

      <header className="admin-users-header">
        <h1>{lang === "fr" ? "Comptes étudiants" : "Student accounts"}</h1>
        <p>
          {lang === "fr"
            ? "L'essai gratuit de 48h est accordé automatiquement à l'inscription. Depuis ici, tu peux aussi réaccorder 48h à un compte (ex : après un bug du site), couper son accès, ou lui ouvrir un chapitre en particulier."
            : "The 48h free trial is granted automatically at signup. From here you can also re-grant 48h to an account (e.g. after a site outage), cut its access, or open a specific chapter for it."}
        </p>
      </header>
      {!users ? (
        <p className="loading-state">…</p>
      ) : (
        <ul className="admin-student-list">
          {users.map((u) => {
            const fullName = [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email;
            return (
              <li key={u.id} className="admin-student-row">
                <button type="button" className="admin-student-toggle" onClick={() => void toggleUser(u.id)}>
                  <span className="admin-student-identity">
                    <strong>{fullName}</strong>
                    <small>{u.email}</small>
                  </span>
                  <span className="admin-status-badge">{statusLabel(lang, u)}</span>
                </button>
                <div className="admin-student-meta">
                  <span className="admin-meta-chip">{trackLabel(lang, u.track)}</span>
                  {(u.phoneCountryCode || u.phoneNumber) && (
                    <span className="admin-meta-chip">{u.phoneCountryCode ?? ""} {u.phoneNumber ?? ""}</span>
                  )}
                  <span className="admin-meta-chip">{lang === "fr" ? "Inscrit le " : "Registered "}{formatDate(lang, u.createdAt)}</span>
                </div>
                <div className="admin-student-actions">
                  {u.role !== "admin" && (
                    <button type="button" onClick={() => void grantTrial(u.id)} disabled={accessSaving === u.id}>
                      {accessSaving === u.id ? "…" : lang === "fr" ? "Accorder 48h" : "Grant 48h"}
                    </button>
                  )}
                  {u.role !== "admin" && u.subscriptionStatus !== "inactive" && (
                    <button type="button" className="secondary" onClick={() => void revokeAccess(u.id)} disabled={accessSaving === u.id}>
                      {accessSaving === u.id ? "…" : lang === "fr" ? "Couper l'accès" : "Cut access"}
                    </button>
                  )}
                </div>
                {expandedUserId === u.id && (
                  <div className="admin-student-grants">
                    {!chapters ? (
                      <p className="loading-state">…</p>
                    ) : (
                      Array.from(new Set(chapters.map((chapter) => chapter.matiere))).map((matiere) => (
                        <div key={matiere} className="admin-grant-subject">
                          <h3>{matiere}</h3>
                          {chapters.filter((chapter) => chapter.matiere === matiere).map((chapter) => {
                            const checked = (grants[u.id] ?? []).includes(chapter.id);
                            const rowKey = `${u.id}-${chapter.id}`;
                            return (
                              <label key={chapter.id} className="admin-grant-row">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  disabled={grantSaving === rowKey}
                                  onChange={(e) => void toggleGrant(u.id, chapter.id, e.target.checked)}
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
    </main>
  );
}
