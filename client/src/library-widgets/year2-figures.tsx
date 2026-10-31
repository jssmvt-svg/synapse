import type { ReactNode } from "react";
import { GeneticDisordersDiagram, GeneticsTimelineDiagram, DnaDoubleHelixDiagram, DnaFormsDiagram, ReplicationForkDiagram } from "../components/Year2Genetics";

// Schémas des cours de 2e année (clés « y2/… »), fusionnés dans COURSE_FIGURES.
export const YEAR2_FIGURES: Record<string, () => ReactNode> = {
  "y2/genetic-disorders": () => <GeneticDisordersDiagram />,
  "y2/genetics-timeline": () => <GeneticsTimelineDiagram />,
  "y2/dna-double-helix": () => <DnaDoubleHelixDiagram />,
  "y2/dna-forms": () => <DnaFormsDiagram />,
  "y2/replication-fork": () => <ReplicationForkDiagram />,
};
