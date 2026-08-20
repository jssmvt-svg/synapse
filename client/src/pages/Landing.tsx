import { Link } from "react-router-dom";
import { useLang } from "../i18n";

export function Landing() {
  const { t, lang, setLang } = useLang();

  return (
    <main className="landing-page">
      <div className="landing-announcement">
        <span className="status-dot" aria-hidden="true" />
        {t.landingAnnouncement}
      </div>

      <header className="landing-header">
        <Link to="/" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span><strong>{t.appName}</strong></span>
        </Link>
        <nav className="landing-nav" aria-label="Navigation">
          <a href="#program">{t.landingProgram}</a>
          <a href="#method">{t.landingMethod}</a>
        </nav>
        <div className="landing-actions">
          <div className="language-switcher" aria-label="Language">
            <button className={lang === "fr" ? "selected" : ""} onClick={() => setLang("fr")}>FR</button>
            <button className={lang === "en" ? "selected" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <Link to="/login" className="landing-login">{t.login}</Link>
        </div>
      </header>

      <section className="landing-hero">
        <div className="landing-copy">
          <p className="landing-pill">{t.landingPill}</p>
          <h1>{t.landingTitle}</h1>
          <p>{t.landingSubtitle}</p>
          <Link to="/register" className="landing-primary">{t.landingCta} <span aria-hidden="true">→</span></Link>
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
          <small>{t.landingExplore} →</small>
        </Link>
        <Link to="/library" className="landing-feature">
          <span className="feature-index">02</span>
          <h2>{t.landingFeaturePractice}</h2>
          <p>{t.landingFeaturePracticeCopy}</p>
          <small>{t.landingExplore} →</small>
        </Link>
        <Link to="/library" className="landing-feature">
          <span className="feature-index">03</span>
          <h2>{t.landingFeatureExam}</h2>
          <p>{t.landingFeatureExamCopy}</p>
          <small>{t.landingExplore} →</small>
        </Link>
      </section>

      <section className="landing-method" id="method">
        <div>
          <p className="eyebrow">{t.landingMethod}</p>
          <h2>{t.landingMethodTitle}</h2>
        </div>
        <p>{t.landingMethodCopy}</p>
        <Link to="/register" className="landing-outline">{t.register} →</Link>
      </section>
    </main>
  );
}