// Two-Sentence Horror — u-suroto-two-sentence-horror-acea9253
// Writes exactly two sentences of horror to /output/entry.txt.
// Sentence 1 sets a nightly routine; sentence 2 reframes it: the
// daughter is dead, yet the glass is still emptied by morning —
// something in the hallway drinks it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every night my daughter leaves a glass of water outside my bedroom door for the man in the hallway. " +
  "She died three years ago, and the glass is still empty by morning.";

// Gate assert (RULES.txt): UTF-8, 1–400 chars, not only whitespace,
// exactly two sentences.
const sentences = ENTRY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (ENTRY.length < 1 || ENTRY.length > 400) throw new Error(`gate: length ${ENTRY.length} outside 1-400`);
if (ENTRY.trim().length === 0) throw new Error("gate: entry is only whitespace");
if (sentences.length !== 2) throw new Error(`gate: ${sentences.length} sentences, need exactly 2`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars, ${ENTRY.split(".").filter(Boolean).length} sentences`);
