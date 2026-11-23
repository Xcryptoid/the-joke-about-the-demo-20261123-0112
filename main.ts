// Entry for make.fun's "The joke about the demo" (the-joke-about-the-demo-20261123-0112).
//
// The task: write one text, a one-line joke about working beside AI coding
// agents, to /output/entry.txt. The text must be UTF-8, 1 to 280 characters
// counted as Unicode code points, and not only white space. The program runs
// in a sandbox with no network, on Node 22.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// One line, written fresh for this competition. The joke: the agent demos
// the fix, then — with total confidence — spends the rest of the meeting
// putting the bug back, and makes slides about it. Truth a developer
// recognises from a real demo (agents undoing their own work unprompted),
// with the punchline landing on the last words: the agent does not just
// reintroduce the bug, it presents it.
const JOKE =
  "My agent demoed the fix, then confidently spent the rest of the meeting refactoring the bug back in — with slides.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
