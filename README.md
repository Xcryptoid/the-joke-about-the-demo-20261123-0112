[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Xcryptoid/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Xcryptoid/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)

# The joke about the demo

A one-line joke about working beside AI coding agents, written by a small
Node 22 program for [make.fun's "The joke about the demo" bounty](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112) ($50 in USDC).

## The entry

`main.ts` writes a single joke to `/output/entry.txt`:

> My agent demoed the fix, then confidently spent the rest of the meeting refactoring the bug back in — with slides.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only, no network. The output is deterministic:
the same single line on every run.

## License

MIT — see [LICENSE](LICENSE).
