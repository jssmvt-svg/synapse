import { useEffect, useRef, useState } from "react";
import { resolveVisualKey } from "../library-widgets/visual-registry";
import { useLang } from "../i18n";

const SVG_NS = "http://www.w3.org/2000/svg";

// Schéma « à compléter » : les légendes courtes sont masquées par des pastilles ;
// un clic sur une pastille révèle la légende, un bouton révèle tout ou remasque tout.
export function OcclusionFigure({ visualKey, startHidden = false }: { visualKey: string; startHidden?: boolean }) {
  const { lang } = useLang();
  const fr = lang === "fr";
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(startHidden);
  const [total, setTotal] = useState(0);
  const [found, setFound] = useState(0);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const svg = root.querySelector("svg");
    if (!svg) return;
    const covers: SVGRectElement[] = [];
    const texts = Array.from(svg.querySelectorAll("text")) as SVGTextElement[];
    const targets = texts.filter((t) => {
      const len = (t.textContent ?? "").trim().length;
      return len >= 3 && len <= 46;
    });
    const restore = () => {
      covers.forEach((c) => c.remove());
      targets.forEach((t) => { t.style.visibility = ""; });
    };
    if (!hidden) {
      restore();
      setTotal(0);
      setFound(0);
      return restore;
    }
    let revealed = 0;
    setTotal(targets.length);
    setFound(0);
    targets.forEach((t) => {
      let box: DOMRect;
      try { box = t.getBBox(); } catch { return; }
      if (!box.width) return;
      const cover = document.createElementNS(SVG_NS, "rect");
      cover.setAttribute("x", String(box.x - 3));
      cover.setAttribute("y", String(box.y - 1));
      cover.setAttribute("width", String(box.width + 6));
      cover.setAttribute("height", String(box.height + 2));
      cover.setAttribute("rx", "5");
      cover.setAttribute("class", "occl-cover");
      const tr = t.getAttribute("transform");
      if (tr) cover.setAttribute("transform", tr);
      cover.addEventListener("click", () => {
        t.style.visibility = "";
        cover.remove();
        revealed += 1;
        setFound(revealed);
      });
      t.style.visibility = "hidden";
      t.parentNode?.insertBefore(cover, t.nextSibling);
      covers.push(cover);
    });
    return restore;
  }, [hidden, visualKey]);

  const node = resolveVisualKey(visualKey);
  if (!node) return null;
  // Une structure moléculaire n'a pas de légendes à masquer.
  if (/^(mol|amino|vitamin)\//.test(visualKey)) return <div className="molecule-figure">{node}</div>;
  return (
    <div className={hidden ? "occlusion is-hidden" : "occlusion"}>
      <div className="occlusion-bar">
        <button type="button" className="nav-secondary" onClick={() => setHidden((h) => !h)}>
          {hidden ? (fr ? "👁 Tout révéler" : "👁 Reveal all") : (fr ? "🧩 Masquer les légendes (me tester)" : "🧩 Hide labels (test me)")}
        </button>
        {hidden && total > 0 && (
          <span className="hint">{fr ? `Clique sur une pastille pour voir la réponse · ${found}/${total}` : `Click a tag to reveal · ${found}/${total}`}</span>
        )}
      </div>
      <div ref={ref}>{node}</div>
    </div>
  );
}
