import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { resolveVisualKey } from "../library-widgets/visual-registry";

// Un schéma s'insère dans un cours avec un marqueur seul sur sa ligne :
//   [[visual:anatomy/planes]]
// La clé est résolue par visual-registry ; clé inconnue -> rien n'est affiché.
const VISUAL_MARKER = /^\[\[visual:([\w/-]+)\]\][ \t\r]*$/gm;

type Segment = { kind: "text"; value: string } | { kind: "visual"; key: string };

function splitSegments(content: string): Segment[] {
  const segments: Segment[] = [];
  let last = 0;
  for (const match of content.matchAll(VISUAL_MARKER)) {
    const index = match.index ?? 0;
    if (index > last) segments.push({ kind: "text", value: content.slice(last, index) });
    segments.push({ kind: "visual", key: match[1] });
    last = index + match[0].length;
  }
  if (last < content.length) segments.push({ kind: "text", value: content.slice(last) });
  return segments;
}

export function MarkdownContent({ content, className }: { content: string; className?: string }) {
  return (
    <div className={`markdown-body${className ? ` ${className}` : ""}`}>
      {splitSegments(content).map((segment, i) =>
        segment.kind === "visual" ? (
          <div className="course-visual" key={i}>
            {resolveVisualKey(segment.key)}
          </div>
        ) : (
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
        ),
      )}
    </div>
  );
}
