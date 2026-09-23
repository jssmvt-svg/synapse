import { Link } from "react-router-dom";
import { useLang } from "../i18n";

// Contenu volontairement minimal et honnête : les champs [À compléter] doivent
// être renseignés par l'opérateur du site avant publication réelle (identité
// légale, adresse, éventuel numéro d'immatriculation). Ne jamais inventer ces
// informations.
export function Legal() {
  const { tx } = useLang();

  return (
    <main className="legal-page">
      <Link to="/" className="brand-lockup">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span><strong>Synapse</strong></span>
      </Link>

      <h1>{tx("Mentions légales", "Legal notice")}</h1>

      <section>
        <h2>{tx("Éditeur du site", "Site publisher")}</h2>
        <p>
          {tx("Synapse est édité par : ", "Synapse is published by: ")}
          <strong>[{tx("À compléter : nom et statut de l'exploitant (personne physique ou société, numéro d'immatriculation le cas échéant)", "To complete: publisher's name and legal status (individual or company, registration number if applicable)")}]</strong>
        </p>
        <p>
          {tx("Adresse : ", "Address: ")}<strong>[{tx("À compléter", "To complete")}]</strong>
          <br />
          {tx("Contact : ", "Contact: ")}<strong>[{tx("À compléter (email)", "To complete (email)")}]</strong>
        </p>
      </section>

      <section>
        <h2>{tx("Hébergement", "Hosting")}</h2>
        <p>{tx("Le site est hébergé par Replit, Inc.", "The site is hosted by Replit, Inc.")}</p>
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
        <h2>{tx("Paiement", "Payment")}</h2>
        <p>
          {tx(
            "Les paiements sont traités par Stripe. Synapse ne stocke aucune donnée de carte bancaire.",
            "Payments are processed by Stripe. Synapse never stores card details.",
          )}
        </p>
      </section>

      <p className="legal-note">
        {tx(
          "Cette page sera complétée avec les informations légales définitives avant l'ouverture au public payant.",
          "This page will be completed with final legal information before opening to paying users.",
        )}
      </p>
    </main>
  );
}
