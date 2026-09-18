import { COURSE_IMAGES } from "../library-data/course-images";

// Image d'un cours avec légende et crédit obligatoires (licence libre).
export function CourseImage({ imageKey }: { imageKey: string }) {
  const image = COURSE_IMAGES[imageKey];
  if (!image) return null;
  return (
    <figure className="course-figure course-photo">
      <img src={image.src} alt={image.caption} loading="lazy" />
      <figcaption>
        {image.caption}
        <span className="course-credit">
          {" "}
          — <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">{image.credit}</a>, {image.license}
        </span>
      </figcaption>
    </figure>
  );
}
