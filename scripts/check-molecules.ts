// Contrôle des structures des flashcards : chaque SMILES doit se lire et donner
// la formule brute attendue. À lancer après toute modification de
// client/src/library-data/molecules.ts :  npx tsx scripts/check-molecules.ts
import { Molecule } from "openchemlib";
import { AMINO_SMILES, MOLECULES } from "../client/src/library-data/molecules";

const all: Array<[string, { smiles: string; formula: string }]> = [
  ...Object.entries(AMINO_SMILES).map(([k, v]) => [`amino/${k}`, v] as [string, { smiles: string; formula: string }]),
  ...Object.entries(MOLECULES).map(([k, v]) => [`mol/${k}`, v] as [string, { smiles: string; formula: string }]),
];

// Compare deux formules brutes indépendamment de l'ordre des éléments.
function counts(formula: string): string {
  const map = new Map<string, number>();
  for (const [, element, n] of formula.matchAll(/([A-Z][a-z]?)(\d*)/g)) map.set(element, (map.get(element) ?? 0) + (n ? Number(n) : 1));
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([e, n]) => `${e}${n}`).join("");
}

let bad = 0;
for (const [key, def] of all) {
  try {
    const molecule = Molecule.fromSmiles(def.smiles);
    const found = molecule.getMolecularFormula().formula.replace(/[+-]+$/, "");
    if (counts(found) !== counts(def.formula)) {
      bad += 1;
      console.log(`✗ ${key}: attendu ${def.formula}, obtenu ${found}`);
    }
  } catch (error) {
    bad += 1;
    console.log(`✗ ${key}: SMILES illisible (${(error as Error).message})`);
  }
}
console.log(bad === 0 ? `OK : ${all.length} structures cohérentes.` : `${bad} anomalie(s) sur ${all.length} structures.`);
process.exit(bad === 0 ? 0 : 1);
