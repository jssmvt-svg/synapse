import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, type LibrarySearchResult } from "../api";
import { useLang } from "../i18n";
import { libraryRoutes } from "../libraryRoutes";

// Barre de recherche : tape un mot, obtiens les cours correspondants.
export function SearchBar() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LibrarySearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const fr = lang === "fr";

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    const timer = window.setTimeout(() => {
      api.searchLibrary(query.trim()).then(setResults).catch(() => setResults([])).finally(() => setLoading(false));
    }, 250);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const go = (r: LibrarySearchResult) => {
    setOpen(false);
    navigate(libraryRoutes.recommendation(r.chapterId, "resource", r.resourceId ?? undefined));
  };

  return (
    <div className="search-bar" ref={box}>
      <input
        type="search"
        value={query}
        placeholder={fr ? "🔍 Rechercher un mot dans les cours…" : "🔍 Search a word in the courses…"}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        aria-label={fr ? "Rechercher" : "Search"}
      />
      {open && query.trim().length >= 2 && (
        <div className="search-results">
          {loading && <p className="search-empty">…</p>}
          {!loading && results.length === 0 && <p className="search-empty">{fr ? "Aucun résultat" : "No result"}</p>}
          {results.map((r, i) => (
            <button type="button" key={`${r.chapterId}-${r.resourceId}-${i}`} onClick={() => go(r)}>
              <small>S{r.semestre} · {r.matiere}</small>
              <strong>{fr ? r.titre_fr : r.titre_en || r.titre_fr}</strong>
              {r.resource_titre_fr && <em>{fr ? r.resource_titre_fr : r.resource_titre_en || r.resource_titre_fr}</em>}
              {r.snippet && <span>{r.snippet}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
