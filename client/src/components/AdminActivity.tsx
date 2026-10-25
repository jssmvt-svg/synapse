import { useEffect, useState } from "react";
import { api, type ActivityChapter, type ActivityKind, type AdminActivityOverview, type AdminUserActivity } from "../api";
import type { Tx } from "../i18n";

const DAY_MS = 24 * 60 * 60 * 1000;

/** « il y a 5 min », « hier », « il y a 3 jours »… */
export function timeAgo(locale: string, value: number | null | undefined, tx: Tx): string {
  if (!value) return tx("jamais", "never");
  const diff = value - Date.now();
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const minutes = Math.round(diff / 60_000);
  if (Math.abs(minutes) < 1) return tx("à l'instant", "just now");
  if (Math.abs(minutes) < 60) return rtf.format(minutes, "minute");
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return rtf.format(hours, "hour");
  const days = Math.round(hours / 24);
  if (Math.abs(days) < 30) return rtf.format(days, "day");
  return rtf.format(Math.round(days / 30), "month");
}

function formatDateTime(locale: string, value: number | null | undefined): string {
  if (!value) return "—";
  return new Date(value).toLocaleString(locale, { dateStyle: "medium", timeStyle: "short" });
}

/** Chemin technique → libellé lisible pour Jessica. */
export function pageLabel(path: string | null, chapter: ActivityChapter | null, tx: Tx, lang: string): string {
  if (chapter) return `${chapter.matiere} — ${lang === "fr" ? chapter.titleFr : chapter.titleEn}`;
  if (!path) return "—";
  const subject = /^\/library(?:\/semester\/\d+)?\/subject\/([^/]+)/.exec(path);
  if (subject) {
    let slug = subject[1];
    try { slug = decodeURIComponent(slug); } catch { /* slug laissé tel quel */ }
    return `${tx("Matière", "Subject")} : ${slug}`;
  }
  const semester = /^\/library\/semester\/(\d+)$/.exec(path);
  if (semester) return `${tx("Semestre", "Semester")} ${semester[1]}`;
  if (/^\/library\/chapter\//.test(path)) return tx("Chapitre (retiré)", "Chapter (removed)");
  if (/^\/deck\//.test(path)) return tx("Deck personnel", "Personal deck");
  if (/^\/document\/\d+\/synthesis/.test(path)) return tx("Synthèse d'un document", "Document synthesis");
  if (/^\/duel/.test(path)) return tx("Mini-jeux (duel)", "Mini-games (duel)");
  const fixed: Record<string, string> = {
    "/": tx("Accueil", "Home"),
    "/dashboard": tx("Tableau de bord", "Dashboard"),
    "/library": tx("Bibliothèque", "Library"),
    "/statistics": tx("Statistiques", "Statistics"),
    "/account": tx("Mon compte", "My account"),
    "/legal": tx("Mentions légales", "Legal notice"),
    "/admin": "Admin",
  };
  return fixed[path] ?? path;
}

function kindLabel(kind: ActivityKind, tx: Tx): string {
  switch (kind) {
    case "register": return tx("Inscription", "Sign-up");
    case "login": return tx("Connexion", "Log-in");
    case "logout": return tx("Déconnexion", "Log-out");
    case "visit": return tx("Retour sur le site", "Came back");
    case "page": return tx("Page vue", "Page view");
  }
}

/** Bandeau de chiffres en tête de la liste des comptes. */
export function ActivityOverview({ tx }: { tx: Tx }) {
  const [data, setData] = useState<AdminActivityOverview | null>(null);
  useEffect(() => {
    api.getAdminActivityOverview().then(setData).catch(() => setData(null));
  }, []);
  if (!data) return null;
  const tiles: [string, number, string][] = [
    [tx("Actifs sur 24 h", "Active in 24 h"), data.activeToday, tx(`${data.visitsToday} visite(s)`, `${data.visitsToday} visit(s)`)],
    [tx("Actifs sur 7 jours", "Active in 7 days"), data.active7d, tx(`${data.visits7d} visite(s)`, `${data.visits7d} visit(s)`)],
    [tx("Actifs sur 30 jours", "Active in 30 days"), data.active30d, tx("étudiants distincts", "distinct students")],
    [tx("Pages vues (7 j)", "Page views (7 d)"), data.pages7d, tx("toutes pages confondues", "all pages")],
  ];
  return (
    <div className="admin-activity-overview">
      {tiles.map(([label, value, hint]) => (
        <div key={label} className="admin-activity-tile">
          <span>{label}</span>
          <strong>{value}</strong>
          <small>{hint}</small>
        </div>
      ))}
    </div>
  );
}

/** Panneau détaillé, affiché quand on déplie un étudiant. */
export function StudentActivityPanel({ userId, tx, lang, locale }: { userId: number; tx: Tx; lang: string; locale: string }) {
  const [data, setData] = useState<AdminUserActivity | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setData(null);
    api.getAdminUserActivity(userId).then(setData).catch((err) => setError((err as Error).message));
  }, [userId]);

  if (error) return <p className="error">{error}</p>;
  if (!data) return <p className="loading-state">…</p>;

  const { study } = data;
  const qcmRate = study.qcm.count ? Math.round((study.qcm.correct / study.qcm.count) * 100) : null;
  const today = Math.floor(Date.now() / DAY_MS);
  const activeDays = new Map(data.daily.map((d) => [Math.floor(d.day / DAY_MS), d.count]));
  const days = Array.from({ length: 14 }, (_, i) => today - 13 + i);
  const recent = showAll ? data.recent : data.recent.slice(0, 12);

  return (
    <section className="admin-activity" aria-label={tx("Activité de l'étudiant", "Student activity")}>
      <h3>{tx("Activité", "Activity")}</h3>
      <div className="admin-activity-kpis">
        <div><strong>{data.visits}</strong><span>{tx("visites", "visits")}</span></div>
        <div><strong>{data.logins}</strong><span>{tx("connexions (mot de passe)", "log-ins (password)")}</span></div>
        <div><strong>{data.pageViews}</strong><span>{tx("pages vues", "page views")}</span></div>
        <div><strong>{timeAgo(locale, data.lastSeenAt, tx)}</strong><span>{tx("dernière visite", "last seen")}</span></div>
      </div>

      <div className="admin-activity-days" aria-label={tx("Jours actifs sur les 14 derniers jours", "Active days over the last 14 days")}>
        <span className="admin-activity-days-label">{tx("14 derniers jours", "Last 14 days")}</span>
        <div>
          {days.map((day) => {
            const count = activeDays.get(day) ?? 0;
            const date = new Date(day * DAY_MS).toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" });
            return (
              <span
                key={day}
                className={`admin-activity-day${count ? " is-active" : ""}`}
                title={`${date} : ${count} ${tx("événement(s)", "event(s)")}`}
              />
            );
          })}
        </div>
      </div>

      <h4>{tx("Ce qu'il/elle a fait", "What they did")}</h4>
      <ul className="admin-activity-study">
        <li>
          <strong>{study.courses.completed}</strong> {tx("fiches de cours terminées", "course sheets completed")}
        </li>
        <li>
          <strong>{study.qcm.count}</strong> {tx("QCM répondus", "QCMs answered")}
          {qcmRate !== null && <> · {qcmRate} % {tx("de bonnes réponses", "correct")}</>}
        </li>
        <li>
          <strong>{study.exams.count}</strong> {tx("examens blancs", "mock exams")}
          {study.exams.avgScore !== null && <> · {tx("moyenne", "average")} {Math.round(study.exams.avgScore)} %</>}
        </li>
        <li>
          <strong>{study.flashcards.cards}</strong> {tx("flashcards travaillées", "flashcards studied")}
          {study.flashcards.reviews > 0 && <> · {study.flashcards.reviews} {tx("révisions", "reviews")}</>}
        </li>
        {study.duel && (
          <li>
            <strong>{study.duel.wins + study.duel.losses + study.duel.draws}</strong> {tx("duels", "duels")} · {study.duel.wins} {tx("victoires", "wins")}
          </li>
        )}
      </ul>

      {data.topPages.length > 0 && (
        <>
          <h4>{tx("Pages les plus consultées", "Most visited pages")}</h4>
          <ol className="admin-activity-pages">
            {data.topPages.map((page) => (
              <li key={page.path}>
                <span>{pageLabel(page.path, page.chapter, tx, lang)}</span>
                <small>{page.count}× · {timeAgo(locale, page.lastAt, tx)}</small>
              </li>
            ))}
          </ol>
        </>
      )}

      <h4>{tx("Historique récent", "Recent history")}</h4>
      {data.recent.length === 0 ? (
        <p className="admin-activity-empty">{tx("Aucune activité enregistrée pour l'instant.", "No activity recorded yet.")}</p>
      ) : (
        <>
          <ul className="admin-activity-log">
            {recent.map((event, index) => (
              <li key={`${event.at}-${index}`}>
                <time dateTime={new Date(event.at).toISOString()}>{formatDateTime(locale, event.at)}</time>
                <span>
                  {event.kind === "page" ? pageLabel(event.path, event.chapter, tx, lang) : kindLabel(event.kind, tx)}
                  {event.device && event.kind !== "page" && <small> · {event.device}</small>}
                </span>
              </li>
            ))}
          </ul>
          {data.recent.length > 12 && (
            <button type="button" className="secondary" onClick={() => setShowAll((value) => !value)}>
              {showAll ? tx("Voir moins", "Show less") : tx(`Voir tout (${data.recent.length})`, `Show all (${data.recent.length})`)}
            </button>
          )}
        </>
      )}
    </section>
  );
}
