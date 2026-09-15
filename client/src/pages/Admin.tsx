import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type AdminSemester, type AdminUser } from "../api";
import { useLang } from "../i18n";

function formatDate(lang: "fr" | "en", value: number | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleString(lang === "fr" ? "fr-FR" : "en-GB", { dateStyle: "medium", timeStyle: "short" });
}

function trackLabel(lang: "fr" | "en", track: AdminUser["track"]): string {
  if (track === "medecine") return lang === "fr" ? "Médecine" : "Medicine";
  if (track === "dentaire") return lang === "fr" ? "Dentaire" : "Dentistry";
  return "—";
}

function statusLabel(lang: "fr" | "en", user: AdminUser): string {
  if (user.role === "admin") return lang === "fr" ? "Administrateur" : "Administrator";
  if (user.subscriptionStatus === "active") return lang === "fr" ? "Abonné (payant)" : "Subscribed (paying)";
  if (user.trialStatus === "granted" && user.subscriptionStatus === "trialing") {
    return lang === "fr" ? "Essai gratuit actif" : "Free trial active";
  }
  if (user.trialStatus === "requested") return lang === "fr" ? "Demande d'essai en attente" : "Trial request pending";
  if (user.trialStatus === "expired") return lang === "fr" ? "Essai gratuit terminé" : "Free trial ended";
  if (user.trialStatus === "denied") return lang === "fr" ? "Essai refusé" : "Trial denied";
  return lang === "fr" ? "Aucun accès" : "No access";
}

export function Admin() {
  const { lang } = useLang();
  const [semesters, setSemesters] = useState<AdminSemester[] | null>(null);
  const [users, setUsers] = useState<AdminUser[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<number | null>(null);
  const [userActionId, setUserActionId] = useState<number | null>(null);

  const loadUsers = () => api.getAdminUsers().then(setUsers).catch((err) => setError((err as Error).message));

  useEffect(() => {
    api.getAdminSemesters().then(setSemesters).catch((err) => setError((err as Error).message));
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

  const grantTrial = async (user: AdminUser) => {
    setUserActionId(user.id); setError(null);
    try {
      await api.grantTrial(user.id);
      await loadUsers();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUserActionId(null);
    }
  };

  const denyTrial = async (user: AdminUser) => {
    setUserActionId(user.id); setError(null);
    try {
      await api.denyTrial(user.id);
      await loadUsers();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUserActionId(null);
    }
  };

  const pendingCount = users?.filter((u) => u.trialStatus === "requested").length ?? 0;

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

      <header className="admin-users-header">
        <h1>{lang === "fr" ? "Comptes étudiants" : "Student accounts"}</h1>
        <p>{lang === "fr"
          ? `Valide ou refuse les demandes d'accès gratuit de 48h. ${pendingCount > 0 ? `${pendingCount} demande(s) en attente.` : ""}`
          : `Approve or deny 48h free-access requests. ${pendingCount > 0 ? `${pendingCount} pending request(s).` : ""}`}</p>
      </header>
      {!users ? <p className="loading-state">…</p> : (
        <section className="admin-users-table-wrap">
          <table className="admin-users-table">
            <thead>
              <tr>
                <th>{lang === "fr" ? "Nom" : "Name"}</th>
                <th>{lang === "fr" ? "Contact" : "Contact"}</th>
                <th>{lang === "fr" ? "Filière" : "Track"}</th>
                <th>{lang === "fr" ? "Statut" : "Status"}</th>
                <th>{lang === "fr" ? "Inscrit le" : "Registered"}</th>
                <th>{lang === "fr" ? "Action" : "Action"}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className={u.trialStatus === "requested" ? "is-pending-row" : ""}>
                  <td>{[u.firstName, u.lastName].filter(Boolean).join(" ") || "—"}</td>
                  <td>
                    <div>{u.email}</div>
                    <div className="admin-users-phone">{u.phoneCountryCode ?? ""} {u.phoneNumber ?? ""}</div>
                  </td>
                  <td>{trackLabel(lang, u.track)}</td>
                  <td>{statusLabel(lang, u)}</td>
                  <td>{formatDate(lang, u.createdAt)}</td>
                  <td className="admin-users-actions">
                    {u.trialStatus === "requested" ? (
                      <>
                        <button type="button" onClick={() => void grantTrial(u)} disabled={userActionId === u.id}>
                          {userActionId === u.id ? "…" : (lang === "fr" ? "Accorder 48h" : "Grant 48h")}
                        </button>
                        <button type="button" className="secondary" onClick={() => void denyTrial(u)} disabled={userActionId === u.id}>
                          {userActionId === u.id ? "…" : (lang === "fr" ? "Refuser" : "Deny")}
                        </button>
                      </>
                    ) : (
                      <span className="admin-users-noop">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}
