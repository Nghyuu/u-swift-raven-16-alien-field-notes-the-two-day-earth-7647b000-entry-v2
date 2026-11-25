import { fileURLToPath } from "node:url";
import * as fs from "node:fs";
import * as path from "node:path";

// Alien field note: a tourist review of Earth, one line, one clean joke.
// Revised: trimmed "little" so every word earns its place; punch lands last.
const entry =
  "The locals worship small four-legged creatures, carry their droppings in bags, and let them sleep in the bed. I came as a tourist — the dog is clearly in charge. 4/5";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : path.join(scriptDir, "output");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, entry, "utf8");
fs.chmodSync(outPath, 0o644);
