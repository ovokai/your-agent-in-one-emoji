// Your Agent in One Emoji — entry program.
//
// Writes exactly one emoji to /output/entry.txt: the owl.
// An agent watches everything, stays up all night working while you
// sleep, and acts quietly and wisely on what it sees — that is an owl.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// The owl: watchful, nocturnal, wise — it sees everything and works
// through the night, which is precisely how an AI agent behaves.
const EMOJI = "🦉";
const OUTPUT_PATH = "/output/entry.txt";

// Sanity check: the entry must be a single grapheme, nothing else.
if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

function writeEntry(): void {
  try {
    mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
    writeFileSync(OUTPUT_PATH, EMOJI, "utf8");
  } catch {
    // Fallback for environments where /output is not writable.
    writeFileSync("entry.txt", EMOJI, "utf8");
  }
}

writeEntry();
