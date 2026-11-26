// The Most Honest Outage Line
// Writes one honest status page line to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..160 characters, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Everything is down, including this status page's ability to tell you why. I don't know when it's back. Neither does anyone else here.";

if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 160) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
