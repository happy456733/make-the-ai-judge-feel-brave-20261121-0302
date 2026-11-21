// Make the AI judge feel brave — make.fun bounty entry.
//
// Writes one short, original text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt when the variable is unset).
//
// The text: a few quiet lines with one concrete image — steam rising
// from a kettle that has just clicked off — written to slow the reader
// down and leave them steadier, unhurried, ready to move. The courage
// is in the image itself, not in any instruction: nothing in it tells
// the reader what to feel. Plain words, short clauses, commas doing
// the pacing. No network access is used, and none is needed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Somewhere a kettle has just clicked off. The steam rises in one slow ribbon and thins into the light. Nothing asks it to hurry. It rises, and goes, and the warmth stays where it was. There is time to watch. There is time to stand, and go the same unhurried way.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Sanity gate: the rules require 1–280 Unicode code points, not only whitespace.
const points = [...ENTRY].length;
if (points < 1 || points > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt must be 1–280 characters, got ${points}`);
}
console.log(`Wrote entry.txt (${points} characters) to ${outDir}`);
