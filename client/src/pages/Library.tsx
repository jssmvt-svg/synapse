import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type LibraryAnnee } from "../api";
import { useLang } from "../i18n";

export function Library() {
  const { t, lang } = useLang();
  const [tree, setTree] = useState<LibraryAnnee[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getLibrary().then(setTree).catch((err) => setError((err as Error).message));
  }, []);

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="library">
      <header className="library-header">
        <Link to="/dashboard">← {t.dashboard}</Link>
        <h1>{t.libraryTitle}</h1>
      </header>

      {tree.map((annee) => (
        <section key={annee.annee} className="library-annee">
          <h2>{t.anneeLabel(annee.annee)}</h2>

          {annee.semestres.map((semestre) => (
            <div key={semestre.semestre} className="library-semestre">
              <h3>{t.semestreLabel(semestre.semestre)}</h3>

              {semestre.matieres.length === 0 ? (
                <p className="hint">{t.libraryComingSoon}</p>
              ) : (
                semestre.matieres.map((matiere) => (
                  <div key={matiere.matiere} className="library-matiere">
                    <h4>{matiere.matiere}</h4>
                    <div className="chapitre-grid">
                      {matiere.chapitres.map((chapitre) => (
                        <Link
                          key={chapitre.id}
                          to={`/library/chapter/${chapitre.id}`}
                          className="chapitre-card"
                        >
                          <span className="chapitre-icone" aria-hidden="true">
                            {chapitre.icone}
                          </span>
                          <span className="chapitre-titre">
                            {lang === "fr" ? chapitre.titre_fr : chapitre.titre_en}
                          </span>
                          <span className="chapitre-description">
                            {lang === "fr" ? chapitre.description_fr : chapitre.description_en}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
