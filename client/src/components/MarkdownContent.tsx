import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { resolveVisualKey } from "../library-widgets/visual-registry";
import { CourseImage } from "./CourseImage";

// Un schéma ou une image s'insère dans un cours avec un marqueur seul sur sa ligne :
//   [[visual:anatomy/planes]]   schéma SVG (visual-registry)
//   [[image:gray-411]]          image libre de droits (course-images)
// Clé inconnue -> rien n'est affiché.
const FIGURE_MARKER = /^\[\[(visual|image):([\w/-]+)\]\][ \t\r]*$/gm;

type Segment =
  | { kind: "text"; value: string }
  | { kind: "visual" | "image"; key: string };

function splitSegments(content: string): Segment[] {
  const segments: Segment[] = [];
  let last = 0;
  for (const match of content.matchAll(FIGURE_MARKER)) {
    const index = match.index ?? 0;
    if (index > last) segments.push({ kind: "text", value: content.slice(last, index) });
    segments.push({ kind: match[1] as "visual" | "image", key: match[2] });
    last = index + match[0].length;
  }
  if (last < content.length) segments.push({ kind: "text", value: content.slice(last) });
  return segments;
}

export function MarkdownContent({ content, className }: { content: string; className?: string }) {
  return (
    <div className={`markdown-body${className ? ` ${className}` : ""}`}>
      {splitSegments(content).map((segment, i) =>
        segment.kind === "text" ? (
          <ReactMarkdown
            key={i}
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ children }) => (
                <div className="table-scroll">
                  <table>{children}</table>
                </div>
              ),
            }}
          >
            {segment.value}
          </ReactMarkdown>
        ) : (
          <div className="course-visual" key={i}>
            {segment.kind === "image" ? <CourseImage imageKey={segment.key} /> : resolveVisualKey(segment.key)}
          </div>
        ),
      )}
    </div>
  );
}
