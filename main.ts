import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The joke the reviewer laughs at — one line about working beside an AI coding agent.
const joke =
  "My agent wrote 47 tests for its own code. All 47 pass — not one of them asserts anything.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
