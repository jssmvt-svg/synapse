import { Link } from "react-router-dom";
import { useLang } from "../i18n";

// Identité reprise de Medbyjes V2 (même éditrice, même statut). Le statut
// juridique était volontairement masqué là-bas tant que l'immatriculation
// n'était pas faite (conseil de l'expert-comptable) — on garde la même
// honnêteté ici plutôt que de prétendre un statut définitif.
export function Legal() {
  const { tx } = useLang();

  return (
    <main className="legal-page">
      <Link to="/" className="brand-lockup">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span><strong>Synapse</strong></span>
      </Link>

      <h1>{tx("Mentions légales", "Legal notice")}</h1>

      <p className="legal-note" style={{ marginBottom: "1.8rem" }}>
        ⚠️ {tx(
          "Statut juridique en cours d'immatriculation. Ces mentions seront mises à jour dès l'obtention du numéro SIREN ou équivalent roumain.",
          "Legal status currently being registered. This notice will be updated once registration is complete.",
        )}
      </p>

      <section>
        <h2>{tx("Éditrice", "Publisher")}</h2>
        <p>
          <strong>{tx("Nom : ", "Name: ")}</strong>Jessica Mvetimbo Tambo<br />
          <strong>{tx("Statut : ", "Status: ")}</strong>
          {tx("Personne physique — immatriculation en cours", "Individual — registration in progress")}<br />
          <strong>{tx("Pays : ", "Country: ")}</strong>{tx("Roumanie", "Romania")}<br />
          <strong>Email : </strong>jessica@medbyjes.com
        </p>
      </section>

      <section>
        <h2>{tx("Hébergement", "Hosting")}</h2>
        <p><strong>Replit, Inc.</strong> — 655 Mission Street, San Francisco, CA 94105, USA</p>
      </section>

      <section>
        <h2>{tx("Propriété intellectuelle", "Intellectual Property")}</h2>
        <p>
          {tx(
            "Tout le contenu de Synapse (cours, QCM, flashcards, schémas, structure pédagogique) est la propriété exclusive de Jessica Mvetimbo Tambo. Toute reproduction sans autorisation écrite est interdite.",
            "All content on Synapse (courses, MCQs, flashcards, diagrams, pedagogical structure) is the exclusive property of Jessica Mvetimbo Tambo. Any reproduction without written authorisation is prohibited.",
          )}
        </p>
      </section>

      <section>
        <h2>{tx("Données personnelles", "Personal data")}</h2>
        <p>
          {tx(
            "Les données collectées à l'inscription (nom, email, téléphone) servent uniquement à la gestion des comptes et à l'accès aux contenus de Synapse. Elles ne sont ni vendues ni partagées avec des tiers à des fins commerciales.",
            "Data collected at signup (name, email, phone) is used solely to manage accounts and access to Synapse content. It is never sold or shared with third parties for commercial purposes.",
          )}
        </p>
      </section>

      <section>
        <h2>{tx("Prix et paiement", "Pricing and payment")}</h2>
        <p>
          <strong>{tx("Abonnement : ", "Subscription: ")}</strong>
          {tx("15 €/mois, facturé par cycle de 4 mois (~60 €), sans engagement.", "€15/month, billed in 4-month cycles (~€60), no commitment.")}
          <br />
          <strong>{tx("Paiement : ", "Payment: ")}</strong>Stripe, Inc.<br />
          <strong>TVA : </strong>{tx("Non applicable — statut en cours", "Not applicable — registration in progress")}
        </p>
        <p>
          {tx(
            "Les paiements sont traités par Stripe. Synapse ne stocke aucune donnée de carte bancaire.",
            "Payments are processed by Stripe. Synapse never stores card details.",
          )}
        </p>
      </section>

      <section>
        <h2>{tx("Nature et durée de l'accès", "Nature and Duration of Access")}</h2>
        <p>
          {tx(
            "Synapse est un accès par abonnement, renouvelé automatiquement à chaque cycle de 4 mois tant qu'il n'est pas annulé. Le contenu est susceptible d'évoluer (corrections, ajouts, mises à jour) et n'est pas figé.",
            "Synapse is a subscription access, automatically renewed every 4-month cycle unless cancelled. The content may evolve (corrections, additions, updates) and is not final.",
          )}
        </p>
      </section>

      <section>
        <h2>{tx("Droit de rétractation", "Right of Withdrawal")}</h2>
        <p>
          {tx(
            "Conformément à la Directive 2011/83/UE, tu disposes de 14 jours pour te rétracter après ton premier paiement, sauf si l'accès numérique a déjà été activé avec ton accord explicite.",
            "Under Directive 2011/83/EU, you have 14 days to withdraw after your first payment, unless digital access has already been activated with your explicit consent.",
          )}
        </p>
      </section>

      <section>
        <h2>{tx("Utilisation autorisée", "Permitted Use")}</h2>
        <ul>
          <li>{tx("Usage strictement personnel, non commercial", "Strictly personal, non-commercial use")}</li>
          <li>{tx("Ne pas partager ses identifiants de connexion", "Do not share login credentials")}</li>
        </ul>
      </section>

      <section>
        <h2>{tx("Responsabilité", "Liability")}</h2>
        <p>
          {tx(
            "Les contenus sont fournis à titre pédagogique uniquement et ne constituent pas un avis médical.",
            "Content is provided for educational purposes only and does not constitute medical advice.",
          )}
        </p>
      </section>
    </main>
  );
}
