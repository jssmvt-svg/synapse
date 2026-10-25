import { Link } from "react-router-dom";
import { useLang, Fwd, LanguageSwitcher } from "../i18n";

export function Landing() {
  const { t, lang, setLang, tx } = useLang();

  return (
    <main className="landing-page">
      <div className="landing-announcement">
        <span className="status-dot" aria-hidden="true" />
        {tx("Pré-rentrée UMFT en ligne · découvre ta première année avant la rentrée", "Online UMFT pre-term · discover your first year before classes begin")}
      </div>

      <header className="landing-header">
        <Link to="/" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span><strong>{t.appName}</strong></span>
        </Link>
        <nav className="landing-nav" aria-label="Navigation">
          <a href="#program">{t.landingProgram}</a>
          <a href="#method">{t.landingMethod}</a>
          <a href="#prearrival">{tx("Pré-rentrée", "Pre-term")}</a>
          <a href="#pricing">{tx("Tarifs", "Pricing")}</a>
          <a href="#trust">{tx("Sécurité", "Security")}</a>
        </nav>
        <div className="landing-actions">
          <LanguageSwitcher />
          <Link to="/login" className="landing-login">{t.login}</Link>
        </div>
      </header>

      <section className="landing-hero">
        <div className="landing-copy">
          <p className="landing-pill">UMFT · Timișoara · {tx("Première année", "Year one")}</p>
          <h1>{tx("Prépare ta première année de médecine avec confiance.", "Start your first year of medicine with confidence.")}</h1>
          <p>{tx("Synapse réunit un parcours de pré-rentrée, des cours guidés et des entraînements pour progresser du premier au second semestre.", "Synapse brings together a pre-term pathway, guided courses, and practice to help you progress from semester one to semester two.")}</p>
          <a href="#prearrival" className="landing-primary">{tx("Découvrir la pré-rentrée", "Explore the pre-term")} <span aria-hidden="true"><Fwd /></span></a>
          <p className="landing-offer">{tx("8 jours gratuits · puis 10 €/mois · sans engagement", "8 days free · then €10/month · no commitment")}<br />{tx("Cours, QCM, examens blancs, questions ouvertes", "Courses, QCMs, mock exams, open questions")}</p>
        </div>
        <div className="landing-figures" aria-label={t.landingProgram}>
          <article><strong>01</strong><span>{t.landingFigureChapter}</span></article>
          <article><strong>60</strong><span>{t.landingFigureQcm}</span></article>
          <article><strong>03</strong><span>{t.landingFigureModes}</span></article>
        </div>
      </section>

      <section className="landing-features" id="program">
        <Link to="/library" className="landing-feature">
          <span className="feature-index">01</span>
          <h2>{t.landingFeatureCourse}</h2>
          <p>{t.landingFeatureCourseCopy}</p>
          <small>{t.landingExplore} <Fwd /></small>
        </Link>
        <Link to="/library" className="landing-feature">
          <span className="feature-index">02</span>
          <h2>{t.landingFeaturePractice}</h2>
          <p>{t.landingFeaturePracticeCopy}</p>
          <small>{t.landingExplore} <Fwd /></small>
        </Link>
        <Link to="/library" className="landing-feature">
          <span className="feature-index">03</span>
          <h2>{t.landingFeatureExam}</h2>
          <p>{t.landingFeatureExamCopy}</p>
          <small>{t.landingExplore} <Fwd /></small>
        </Link>
      </section>

      <section className="landing-story" id="story">
        <div className="story-copy">
          <p className="eyebrow">{tx("Créé par une étudiante", "Made by a student")}</p>
          <h2>{tx("Une étudiante a fait Synapse pour les étudiants.", "A student built Synapse for students.")}</h2>
          <blockquote>
            {tx(
              "Je suis étudiante, et j'ai créé Synapse pour aider les autres étudiants à réviser beaucoup plus vite et plus efficacement. Je l'utilise moi-même : j'ai eu 8 sur 10 dans les trois matières.",
              "I'm a student, and I built Synapse to help other students revise much faster and more effectively. I use it myself: I scored 8 out of 10 in all three subjects.",
            )}
          </blockquote>
        </div>
        <ul className="story-scores" aria-label={tx("Mes notes", "My grades")}>
          <li><strong>8/10</strong><span>{tx("Anatomie", "Anatomy")}</span></li>
          <li><strong>8/10</strong><span>{tx("Physiologie", "Physiology")}</span></li>
          <li><strong>8/10</strong><span>{tx("Biochimie", "Biochemistry")}</span></li>
        </ul>
      </section>

      <section className="prearrival-section" id="prearrival">
        <div>
          <p className="eyebrow">{tx("Pré-rentrée en ligne", "Online pre-term")}</p>
          <h2>{tx("Tes premiers repères, avant le premier cours.", "Your first bearings, before your first class.")}</h2>
          <p>{tx("Découvre comment utiliser Synapse, comment s’organise la première année à l’UMFT et comment lancer une routine de travail réaliste.", "Learn how to use Synapse, how UMFT year one is structured, and how to begin a realistic study routine.")}</p>
        </div>
        <ol className="prearrival-steps">
          <li><strong>01</strong><span>{tx("Comprendre la plateforme", "Understand the platform")}</span></li>
          <li><strong>02</strong><span>{tx("Explorer le semestre 1 gratuitement", "Explore semester 1 for free")}</span></li>
          <li><strong>03</strong><span>{tx("Construire ton rythme", "Build your routine")}</span></li>
        </ol>
        <Link to="/register" className="landing-outline">{tx("Créer mon accès", "Create my access")} <Fwd /></Link>
      </section>

      <section className="landing-pricing" id="pricing">
        <div>
          <p className="eyebrow">{tx("Tarifs", "Pricing")}</p>
          <h2>{tx("8 jours gratuits, puis 10 €/mois.", "8 days free, then €10/month.")}</h2>
          <p>
            {tx(
              "8 jours d'essai gratuit dès l'inscription, sans carte bancaire, pour découvrir tout le semestre 1. Ensuite, 10 € par mois, sans engagement, pour les deux semestres.",
              "8 days of free trial right after signup, no card needed, to explore all of semester 1. After that, €10 per month, no commitment, for both semesters.",
            )}
          </p>
        </div>
        <div className="pricing-card">
          <p className="pricing-trial">{tx("8 jours gratuits", "8 days free")}</p>
          <p className="pricing-amount"><strong>10 €</strong><span>/{tx("mois", "month")}</span></p>
          <ul className="pricing-includes">
            <li>{tx("Cours complets des deux semestres", "Full courses for both semesters")}</li>
            <li>{tx("QCM corrigés", "QCMs with corrections")}</li>
            <li>{tx("Examens blancs chronométrés", "Timed mock exams")}</li>
            <li>{tx("Questions ouvertes avec réponses modèles et schémas", "Open questions with model answers and diagrams")}</li>
            <li>{tx("Mini-jeux de révision et statistiques", "Study mini-games and statistics")}</li>
            <li>{tx("Sans engagement", "No commitment")}</li>
          </ul>
          <Link to="/register" className="landing-primary">{tx("Commencer mes 8 jours gratuits", "Start my 8 free days")} <Fwd /></Link>
        </div>
      </section>

      <section className="landing-trust" id="trust">
        <div className="landing-trust-intro">
          <p className="eyebrow">{tx("Paiement & données", "Payment & data")}</p>
          <h2>{tx("Ce qui se passe avec ton argent et tes données.", "What happens with your money and your data.")}</h2>
          <p>
            {tx(
              "Synapse est un outil de révision créé par une étudiante, rien d'autre. Voici concrètement comment ton compte et ton paiement sont protégés.",
              "Synapse is a study tool built by a student, nothing more. Here is exactly how your account and your payment are protected.",
            )}
          </p>
        </div>
        <ul className="landing-trust-grid">
          <li>
            <strong>{tx("Paiement géré par Stripe", "Payment handled by Stripe")}</strong>
            <span>{tx("Tu paies sur la page sécurisée de Stripe, le prestataire de paiement utilisé par des millions d'entreprises. Synapse ne voit et ne stocke jamais ton numéro de carte ; ta banque peut te demander une validation (3D Secure).", "You pay on Stripe's secure page, the payment provider used by millions of businesses. Synapse never sees or stores your card number; your bank may ask you to confirm (3D Secure).")}</span>
          </li>
          <li>
            <strong>{tx("Essai sans carte bancaire", "Trial without a card")}</strong>
            <span>{tx("Les 8 jours gratuits ne demandent aucune carte. Tant que tu ne t'abonnes pas, tu ne paies rien.", "The 8 free days need no card. Until you subscribe, you pay nothing.")}</span>
          </li>
          <li>
            <strong>{tx("Sans engagement", "No commitment")}</strong>
            <span>{tx("Tu résilies toi-même depuis « Mon compte », en deux clics. Ton accès reste ouvert jusqu'à la fin du mois payé, et tes factures sont téléchargeables.", "You cancel yourself from \"My account\" in two clicks. Your access stays open until the end of the paid month, and your invoices can be downloaded.")}</span>
          </li>
          <li>
            <strong>{tx("Compte protégé", "Protected account")}</strong>
            <span>{tx("Connexion chiffrée (HTTPS), mot de passe stocké haché (bcrypt), une seule session active à la fois et blocage automatique après plusieurs mots de passe faux.", "Encrypted connection (HTTPS), password stored hashed (bcrypt), one active session at a time and automatic lock after several wrong passwords.")}</span>
          </li>
          <li>
            <strong>{tx("Données jamais vendues", "Data never sold")}</strong>
            <span>{tx("Ton nom, ton email et ton téléphone servent uniquement à gérer ton compte. Tu peux demander la suppression de ton compte à tout moment par email.", "Your name, email and phone are used only to run your account. You can ask for your account to be deleted at any time by email.")}</span>
          </li>
          <li>
            <strong>{tx("Une vraie personne derrière", "A real person behind it")}</strong>
            <span>
              {tx("Synapse est édité par Jessica Mvetimbo Tambo (voir les ", "Synapse is published by Jessica Mvetimbo Tambo (see the ")}
              <Link to="/legal">{tx("mentions légales", "legal notice")}</Link>
              {tx("). Une question ? Écris-moi : ", "). A question? Email me: ")}
              <a href="mailto:jessica@medbyjes.com">jessica@medbyjes.com</a>
            </span>
          </li>
        </ul>
      </section>

      <section className="landing-method" id="method">
        <div>
          <p className="eyebrow">{t.landingMethod}</p>
          <h2>{t.landingMethodTitle}</h2>
        </div>
        <p>{t.landingMethodCopy}</p>
        <Link to="/register" className="landing-outline">{t.register} <Fwd /></Link>
      </section>

      <footer className="landing-footer">
        <span>© {new Date().getFullYear()} {t.appName}</span>
        <Link to="/legal">{tx("Mentions légales", "Legal notice")}</Link>
      </footer>
    </main>
  );
}