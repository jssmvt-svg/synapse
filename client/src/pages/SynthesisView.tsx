import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, type Synthesis } from "../api";
import { useLang } from "../i18n";

export function SynthesisView() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const [synthesis, setSynthesis] = useState<Synthesis | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    api
      .getSynthesis(Number(id))
      .then(setSynthesis)
      .catch((err) => setError((err as Error).message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!synthesis) return <p>...</p>;

  const content = lang === "fr" ? synthesis.content_fr : synthesis.content_en;

  return (
    <div className="synthesis-view">
      <Link to="/dashboard">← {t.dashboard}</Link>
      <div className="synthesis-content">
        {content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
