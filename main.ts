// The Funniest Toaster Error Message — one line, at most 120 characters.
// The toaster reports expired bread the way a deadpan appliance would:
// it declines the job on the grounds that the bread is now archaeology.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "ERROR: Bread expired 3 days ago. I toast food, not archaeology.";

// Gate from the competition rules: /output/entry.txt must be UTF-8 text
// of 1 to 120 characters, a single line, not only white space.
if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry violates the 1-120 character single-line gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
