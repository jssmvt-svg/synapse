import { useEffect, useState } from "react";
import { COURSE_IMAGES } from "../library-data/course-images";
import { getToken } from "../api";

// Les images servies par l'API (captures privées de l'année 2) exigent le jeton :
// une balise <img> ne l'envoie pas, on passe donc par fetch + URL blob.
function useImageSrc(src: string | undefined): string | undefined {
  const isPrivate = Boolean(src?.startsWith("/api/"));
  const [blobUrl, setBlobUrl] = useState<string>();
  useEffect(() => {
    if (!src || !isPrivate) return;
    let url: string | undefined;
    let cancelled = false;
    const token = getToken();
    fetch(src, { headers: token ? { Authorization: `Bearer ${token}` } : {} })
      .then((res) => (res.ok ? res.blob() : Promise.reject(new Error(String(res.status)))))
      .then((blob) => {
        if (cancelled) return;
        url = URL.createObjectURL(blob);
        setBlobUrl(url);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, [src, isPrivate]);
  return isPrivate ? blobUrl : src;
}

// Image d'un cours avec légende et crédit obligatoires (licence libre).
// Un clic ouvre l'image en grand (plein écran), fermeture par clic ou Échap.
export function CourseImage({ imageKey }: { imageKey: string }) {
  const image = COURSE_IMAGES[imageKey];
  const [open, setOpen] = useState(false);
  const src = useImageSrc(image?.src);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!image || !src) return null;
  return (
    <>
      <figure className="course-figure course-photo">
        <button type="button" className="course-photo-button" onClick={() => setOpen(true)} aria-label={`Agrandir : ${image.caption}`}>
          <img src={src} alt={image.caption} loading="lazy" />
          <span className="course-photo-zoom">🔍 Agrandir</span>
        </button>
        <figcaption>
          {image.caption}
          <span className="course-credit">
            {" "}
            — {image.sourceUrl ? <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">{image.credit}</a> : image.credit}, {image.license}
          </span>
        </figcaption>
      </figure>
      {open && (
        <div className="course-lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <img src={src} alt={image.caption} />
          <p>{image.caption} — cliquez ou appuyez sur Échap pour fermer</p>
        </div>
      )}
    </>
  );
}
