import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type AccountOverview } from "../api";
import { useLang } from "../i18n";

// Page « Mon compte » de l'étudiant : profil, statut Premium, prochains
// prélèvements, historique des paiements et résiliation de l'abonnement.

// Même jour, i mois plus tard (prélèvements mensuels Stripe).
function addMonths(ms: number, months: number): number {
  // Le 31 devient le dernier jour des mois plus courts (comme Stripe).
  const d = new Date(ms);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
  return d.getTime();
}

export function Account() {
  const { tx, locale } = useLang();
  const [account, setAccount] = useState<AccountOverview | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const load = () => api.getAccount().then(setAccount).catch((err: Error) => setError(err.message));
  useEffect(() => {
    void load();
  }, []);

  const date = (ms: number | null | undefined) =>
    ms ? new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(ms) : "—";
  const month = (ms: number) => new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(ms);
  const money = (cents: number, currency: string) =>
    new Intl.NumberFormat(locale, { style: "currency", currency: currency.toUpperCase() }).format(cents / 100);

  async function run(action: () => Promise<unknown>) {
    setBusy(true);
    setError(null);
    try {
      await action();
      await load();
      setConfirming(false);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function subscribe() {
    setBusy(true);
    setError(null);
    try {
      const { url } = await api.createCheckoutSession();
      window.location.href = url;
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  if (!account) {
    return (
      <main className="account-page">
        {error ? <p className="error">{error}</p> : <p className="loading-state">…</p>}
      </main>
    );
  }

  const { profile, access, subscription, payments } = account;
  const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(" ") || profile.email;
  const trackLabel = profile.track === "medecine" ? tx("Médecine", "Medicine") : profile.track === "dentaire" ? tx("Médecine dentaire", "Dentistry") : "—";
  const langLabel = profile.studyLang ? { fr: "Français", en: "English", ro: "Română" }[profile.studyLang] : "—";
  const trialing = access.subscriptionStatus === "trialing" && access.trialEndsAt && access.trialEndsAt > Date.now();
  const active = subscription && (subscription.status === "active" || subscription.status === "past_due");
  const upcoming =
    active && !subscription.cancelAtPeriodEnd && subscription.currentPeriodEnd
      ? [0, 1, 2].map((i) => addMonths(subscription.currentPeriodEnd!, i))
      : [];

  return (
    <main className="account-page">
      <Link to="/dashboard" className="back-link">{tx("← Tableau de bord", "← Dashboard")}</Link>
      <header className="account-header">
        <p className="eyebrow">{tx("Mon compte", "My account")}</p>
        <h1>{fullName}</h1>
        {access.premium && <span className="admin-premium-badge">⭐ Premium</span>}
      </header>
      {error && <p className="error">{error}</p>}

      <section className="account-card">
        <h2>{tx("Mon profil", "My profile")}</h2>
        <dl className="account-facts">
          <div><dt>{tx("E-mail", "Email")}</dt><dd>{profile.email}</dd></div>
          <div><dt>{tx("Année", "Year")}</dt><dd>{tx("1re année", "1st year")}</dd></div>
          <div><dt>{tx("Études", "Studies")}</dt><dd>{trackLabel}</dd></div>
          <div><dt>{tx("Langue d'études", "Study language")}</dt><dd>{langLabel}</dd></div>
          <div><dt>{tx("Inscrit(e) le", "Joined on")}</dt><dd>{date(profile.createdAt)}</dd></div>
          <div>
            <dt>{tx("Statut", "Status")}</dt>
            <dd>
              {access.premium
                ? tx("Premium — abonnement payé", "Premium — paid subscription")
                : trialing
                  ? tx(`Essai gratuit jusqu'au ${date(access.trialEndsAt)}`, `Free trial until ${date(access.trialEndsAt)}`)
                  : access.subscriptionStatus === "active"
                    ? tx("Accès offert", "Complimentary access")
                    : tx("Pas d'accès actif", "No active access")}
            </dd>
          </div>
        </dl>
      </section>

      <section className="account-card">
        <h2>{tx("Mon abonnement", "My subscription")}</h2>
        {active ? (
          <>
            <p className="account-price">
              <strong>{money(subscription.amount, subscription.currency)}</strong> {tx("/ mois, sans engagement", "/ month, no commitment")}
            </p>
            {subscription.status === "past_due" && (
              <p className="account-warning">
                {tx(
                  "Le dernier prélèvement a échoué : Stripe va réessayer. Vérifie ta carte bancaire pour garder ton accès.",
                  "The last payment failed: Stripe will retry. Check your bank card to keep your access.",
                )}
              </p>
            )}
            {subscription.cancelAtPeriodEnd ? (
              <div className="account-notice">
                <p>
                  {tx(
                    `Abonnement résilié : plus aucun prélèvement. Tu gardes l'accès jusqu'au ${date(subscription.currentPeriodEnd)} (fin du mois déjà payé), puis l'accès aux cours sera coupé.`,
                    `Subscription cancelled: no more payments. You keep access until ${date(subscription.currentPeriodEnd)} (end of the month already paid), then course access will stop.`,
                  )}
                </p>
                <button type="button" disabled={busy} onClick={() => void run(api.resumeSubscription)}>
                  {busy ? "…" : tx("Reprendre mon abonnement", "Resume my subscription")}
                </button>
              </div>
            ) : (
              <>
                <h3>{tx("Prochains prélèvements", "Upcoming payments")}</h3>
                <ul className="account-upcoming">
                  {upcoming.map((when, i) => (
                    <li key={when}>
                      <span>{date(when)}{i > 0 ? tx(" (prévu)", " (expected)") : ""}</span>
                      <strong>{money(subscription.amount, subscription.currency)}</strong>
                    </li>
                  ))}
                </ul>
                {!confirming ? (
                  <button type="button" className="account-cancel" onClick={() => setConfirming(true)}>
                    {tx("Résilier mon abonnement", "Cancel my subscription")}
                  </button>
                ) : (
                  <div className="account-confirm">
                    <p>
                      {tx(
                        `Résilier ? Tu ne seras plus prélevé(e). Ton accès reste ouvert jusqu'au ${date(subscription.currentPeriodEnd)}, puis il sera coupé. L'essai gratuit ne pourra pas être réutilisé.`,
                        `Cancel? You won't be charged again. Your access stays open until ${date(subscription.currentPeriodEnd)}, then it stops. The free trial can't be used again.`,
                      )}
                    </p>
                    <div className="account-confirm-actions">
                      <button type="button" className="account-cancel" disabled={busy} onClick={() => void run(api.cancelSubscription)}>
                        {busy ? "…" : tx("Oui, résilier", "Yes, cancel")}
                      </button>
                      <button type="button" className="nav-secondary" disabled={busy} onClick={() => setConfirming(false)}>
                        {tx("Non, garder mon abonnement", "No, keep my subscription")}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <div className="account-notice">
            <p>
              {trialing
                ? tx(
                    "Tu es en essai gratuit (semestre 1). Abonne-toi pour débloquer les deux semestres : 10 € par mois, sans engagement.",
                    "You're on a free trial (semester 1). Subscribe to unlock both semesters: €10 per month, no commitment.",
                  )
                : access.formerSubscriber
                  ? tx(
                      "Ton abonnement est terminé. Pour retrouver l'accès à tous les cours, réabonne-toi : 10 € par mois, sans engagement.",
                      "Your subscription has ended. To get access to all courses again, subscribe again: €10 per month, no commitment.",
                    )
                  : access.subscriptionStatus === "active"
                    ? tx("Ton accès t'a été offert : rien à payer.", "Your access is complimentary: nothing to pay.")
                    : tx(
                        "Ton essai gratuit a déjà été utilisé. Pour continuer à réviser, abonne-toi : 10 € par mois, sans engagement.",
                        "Your free trial has already been used. To keep studying, subscribe: €10 per month, no commitment.",
                      )}
            </p>
            {access.role !== "admin" && access.subscriptionStatus !== "active" && (
              <button type="button" disabled={busy} onClick={() => void subscribe()}>
                {busy ? tx("Redirection…", "Redirecting…") : access.formerSubscriber ? tx("Me réabonner", "Subscribe again") : tx("M'abonner", "Subscribe")}
              </button>
            )}
          </div>
        )}
      </section>

      <section className="account-card">
        <h2>{tx("Historique des paiements", "Payment history")}</h2>
        {payments.length === 0 ? (
          <p className="hint">{tx("Aucun paiement pour l'instant.", "No payments yet.")}</p>
        ) : (
          <ul className="account-payments">
            {payments.map((payment) => (
              <li key={payment.id}>
                <span className="account-payment-month">
                  <strong>{month(payment.periodStart ?? payment.date)}</strong>
                  <small>{payment.status === "paid" ? tx("Payé le ", "Paid on ") : tx("Émis le ", "Issued on ")}{date(payment.date)}</small>
                </span>
                <span className={`account-payment-status is-${payment.status}`}>
                  {payment.status === "paid" ? tx("Payé", "Paid") : payment.status === "open" ? tx("En attente", "Pending") : tx("Impayé", "Unpaid")}
                </span>
                <strong>{money(payment.amount, payment.currency)}</strong>
                {(payment.pdfUrl || payment.url) && (
                  <a href={payment.pdfUrl ?? payment.url ?? "#"} target="_blank" rel="noreferrer">
                    {tx("Facture", "Invoice")}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
