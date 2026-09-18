import { useEffect, useState } from "react";
import { COURSE_IMAGES } from "../library-data/course-images";

// Image d'un cours avec légende et crédit obligatoires (licence libre).
// Un clic ouvre l'image en grand (plein écran), fermeture par clic ou Échap.
export function CourseImage({ imageKey }: { imageKey: string }) {
  const image = COURSE_IMAGES[imageKey];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!image) return null;
  return (
    <>
      <figure className="course-figure course-photo">
        <button type="button" className="course-photo-button" onClick={() => setOpen(true)} aria-label={`Agrandir : ${image.caption}`}>
          <img src={image.src} alt={image.caption} loading="lazy" />
          <span className="course-photo-zoom">🔍 Agrandir</span>
        </button>
        <figcaption>
          {image.caption}
          <span className="course-credit">
            {" "}
            — <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">{image.credit}</a>, {image.license}
          </span>
        </figcaption>
      </figure>
      {open && (
        <div className="course-lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <img src={image.src} alt={image.caption} />
          <p>{image.caption} — cliquez ou appuyez sur Échap pour fermer</p>
        </div>
      )}
    </>
  );
}
