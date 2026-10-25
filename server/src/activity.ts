import { db } from "./db.js";

/**
 * Journal d'activité des comptes (connexions, visites, pages vues), consulté
 * par Jessica depuis /admin et par l'étudiant lui-même depuis /account.
 *
 * Le JWT dure 30 jours : presque personne ne repasse par /login. Une « visite »
 * est donc comptée à chaque retour sur le site après au moins 30 min
 * d'inactivité, en plus des connexions explicites. Aucune adresse IP n'est
 * stockée ; seul un libellé d'appareil grossier (« Chrome · Windows ») l'est.
 */

export type ActivityKind = "register" | "login" | "logout" | "visit" | "page";

export const VISIT_GAP_MS = 30 * 60 * 1000;
export const ACTIVITY_RETENTION_MS = 180 * 24 * 60 * 60 * 1000;
const MAX_PATH_LENGTH = 200;

/** Nouvelle visite si l'étudiant n'avait rien fait depuis au moins 30 min. */
export function shouldRecordVisit(previousSeenAt: number | null | undefined, now: number): boolean {
  if (!previousSeenAt) return true;
  return now - previousSeenAt >= VISIT_GAP_MS;
}

/** Chemin interne uniquement, sans query string ni fragment, borné en longueur. */
export function sanitizeActivityPath(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const path = value.split(/[?#]/)[0].trim();
  if (!path.startsWith("/") || path.startsWith("//")) return null;
  if (!/^[\w\-./%~]+$/.test(path)) return null;
  return path.slice(0, MAX_PATH_LENGTH);
}

/** Libellé d'appareil grossier, sans version ni identifiant : « Chrome · Android ». */
export function deviceLabel(userAgent: string | undefined): string | null {
  if (!userAgent) return null;
  const ua = userAgent;
  const os = /iPhone|iPad|iPod/.test(ua)
    ? "iOS"
    : /Android/.test(ua)
      ? "Android"
      : /Windows/.test(ua)
        ? "Windows"
        : /Mac OS X|Macintosh/.test(ua)
          ? "macOS"
          : /Linux/.test(ua)
            ? "Linux"
            : null;
  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /OPR\/|Opera/.test(ua)
      ? "Opera"
      : /SamsungBrowser/.test(ua)
        ? "Samsung Internet"
        : /Firefox\/|FxiOS/.test(ua)
          ? "Firefox"
          : /Chrome\/|CriOS/.test(ua)
            ? "Chrome"
            : /Safari\//.test(ua)
              ? "Safari"
              : null;
  const label = [browser, os].filter(Boolean).join(" · ");
  return label || null;
}

/** Enregistre un événement sans jamais faire échouer la requête appelante. */
export function recordActivity(
  userId: number,
  kind: ActivityKind,
  options: { path?: string | null; userAgent?: string } = {},
): void {
  void db
    .prepare("INSERT INTO user_activity (user_id, kind, path, device, created_at) VALUES (?, ?, ?, ?, ?)")
    .run(userId, kind, options.path ?? null, deviceLabel(options.userAgent), Date.now())
    .catch((error) => console.error("[activité] Enregistrement impossible.", error));
}

/**
 * Met à jour « vu pour la dernière fois » et compte une visite si l'étudiant
 * revient après une pause. Fire-and-forget, comme recordActivity.
 */
export function touchUser(userId: number, userAgent?: string): void {
  const now = Date.now();
  void db
    .prepare(
      `UPDATE users u SET last_seen_at = ?
       FROM (SELECT id, last_seen_at AS previous FROM users WHERE id = ? FOR UPDATE) p
       WHERE u.id = p.id
       RETURNING p.previous`,
    )
    .get(now, userId)
    .then((row) => {
      if (row && shouldRecordVisit(row.previous, now)) recordActivity(userId, "visit", { userAgent });
    })
    .catch((error) => console.error("[activité] Mise à jour de la dernière visite impossible.", error));
}

export async function purgeOldActivity(): Promise<void> {
  const result = await db
    .prepare("DELETE FROM user_activity WHERE created_at < ?")
    .run(Date.now() - ACTIVITY_RETENTION_MS);
  if (result.rowCount) console.log(`[activité] ${result.rowCount} événement(s) de plus de 180 jours supprimé(s).`);
}

export function startActivityRetention(intervalMs = 24 * 60 * 60 * 1000): void {
  void purgeOldActivity().catch((error) => console.error("[activité] Échec de la purge initiale.", error));
  setInterval(() => {
    void purgeOldActivity().catch((error) => console.error("[activité] Échec de la purge.", error));
  }, intervalMs);
}
