import { useEffect, useId, useState } from "react";

// Dessin d'une structure moléculaire (formule topologique) à partir d'un SMILES,
// avec OpenChemLib. La bibliothèque (≈ 1 Mo) n'est chargée qu'à la première
// molécule affichée, puis les SVG sont mis en cache.
type Ocl = typeof import("openchemlib");

let oclPromise: Promise<Ocl> | null = null;
const svgCache = new Map<string, string>();

function loadOcl(): Promise<Ocl> {
  oclPromise ??= import("openchemlib");
  return oclPromise;
}

// Rend le SVG indépendant de la taille fixe d'origine et compatible thème
// clair / sombre (les liaisons noires passent en couleur du texte).
function buildSvg(ocl: Ocl, smiles: string, id: string): string {
  const molecule = ocl.Molecule.fromSmiles(smiles);
  const raw = molecule.toSVG(300, 220, id, {
    autoCrop: true,
    autoCropMargin: 10,
    suppressChiralText: true,
    suppressCIPParity: true,
    suppressESR: true,
    noStereoProblem: true,
    fontWeight: 600,
    strokeWidth: 1.7,
  });
  const box = /viewBox="[-\d.]+ [-\d.]+ ([\d.]+) ([\d.]+)"/.exec(raw);
  const width = box ? Math.round(Number(box[1]) * 1.7) : 320;
  return raw
    .replace(/ width="[^"]*"/, "")
    .replace(/ height="[^"]*"/, "")
    .replace("<svg ", `<svg style="width:min(100%,${width}px);height:auto;max-height:340px" `)
    .replace(/rgb\(0,0,0\)/g, "currentColor");
}

export function MoleculeStructure({ smiles, label }: { smiles: string; label?: string }) {
  const id = "mol" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState<string | null>(() => svgCache.get(smiles) ?? null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const cached = svgCache.get(smiles);
    if (cached) {
      setSvg(cached);
      return;
    }
    setSvg(null);
    setFailed(false);
    loadOcl()
      .then((ocl) => {
        if (cancelled) return;
        const built = buildSvg(ocl, smiles, id);
        svgCache.set(smiles, built);
        setSvg(built);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [smiles, id]);

  if (failed) return <p className="hint">Structure indisponible.</p>;
  if (!svg) return <div className="molecule-structure molecule-loading" aria-hidden="true">…</div>;
  // Le SVG vient exclusivement de la bibliothèque de dessin, à partir de nos SMILES.
  return <div className="molecule-structure" role="img" aria-label={label ?? "Structure moléculaire"} dangerouslySetInnerHTML={{ __html: svg }} />;
}
