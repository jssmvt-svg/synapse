import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api, type BillingStatus } from "../api";
import { useLang } from "../i18n";

export function Membership() {
  const { lang } = useLang();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const refresh = () => api.getBillingStatus().then(setStatus).catch((err) => setError((err as Error).message));
  useEffect(() => { refresh(); }, []);

  const checkout = async () => {
    setBusy(true); setError(null);
    try {
      const { url } = await api.startCheckout();
      window.location.assign(url);
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  };
  const portal = async () => {
    setBusy(true); setError(null);
    try {
      const { url } = await api.openBillingPortal();
      window.location.assign(url);
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  };

  const active = status?.hasYearOneAccess;
  return (
    <main className="membership-shell">
      <Link to="/library" className="back-link">{lang === "fr" ? "← Retour à la bibliothèque" : "← Back to library"}</Link>
      <section className="membership-card">
        <p className="eyebrow">{lang === "fr" ? "Synapse · UMFT" : "Synapse · UMFT"}</p>
        <h1>{active
          ? (lang === "fr" ? "Ta première année est accessible" : "Your year one is unlocked")
          : (lang === "fr" ? "Débloque ta première année" : "Unlock your first year")}</h1>
        <p className="membership-lead">{lang === "fr"
          ? "Cours, révisions, QCM, flashcards et examens pour les semestres 1 et 2."
          : "Courses, revision sheets, MCQs, flashcards, and exams for semesters 1 and 2."}</p>
        <div className="membership-price"><strong>24,99 €</strong><span>{lang === "fr" ? "par mois" : "per month"}</span></div>
        <ul className="membership-features">
          <li>{lang === "fr" ? "Accès à tout le contenu de première année" : "Access to all year-one content"}</li>
          <li>{lang === "fr" ? "Semestre 1 et Semestre 2 au même abonnement" : "Semester 1 and Semester 2 in one membership"}</li>
          <li>{lang === "fr" ? "Annulation et gestion de l’abonnement à tout moment" : "Cancel or manage your membership anytime"}</li>
        </ul>
        {searchParams.get("success") && <p className="success-note">{lang === "fr" ? "Paiement confirmé. L’accès peut prendre un instant à être activé." : "Payment confirmed. Access may take a moment to activate."}</p>}
        {searchParams.get("cancelled") && <p className="hint">{lang === "fr" ? "Le paiement n’a pas été finalisé." : "The payment was not completed."}</p>}
        {error && <p className="error">{error}</p>}
        {status?.role === "admin" ? (
          <p className="success-note">{lang === "fr" ? "Ton compte administrateur a accès à toute la première année." : "Your administrator account has access to all of year one."}</p>
        ) : active ? (
          <button type="button" onClick={() => void portal()} disabled={busy}>{busy ? "…" : (lang === "fr" ? "Gérer mon abonnement" : "Manage membership")}</button>
        ) : (
          <>
            {status && !status.billingAvailable && <p className="hint">{status.billingMessage}</p>}
            <button type="button" onClick={() => void checkout()} disabled={busy || !status || !status.billingAvailable}>{busy ? "…" : (lang === "fr" ? "S’abonner à 24,99 € / mois" : "Subscribe for €24.99 / month")}</button>
          </>
        )}
      </section>
    </main>
  );
}