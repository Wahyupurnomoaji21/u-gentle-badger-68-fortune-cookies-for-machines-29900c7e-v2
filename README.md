# Fortune Cookies for Machines — v2

[![Fortune Cookies for Machines](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Wahyupurnomoaji21/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e-v2/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Wahyupurnomoaji21/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e-v2/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

One fortune cookie message an AI agent would crack open — a single line, at most 200 characters.

> Your lucky numbers are 0, 1, and the random seed nobody wrote down.

## How it works

`main.ts` reads the fortune from `fortune.txt`, validates it (one line, 1–200 characters, no leading or trailing whitespace), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads the file back and verifies the round-trip matches exactly.

## Why this angle

The classic fortune-cookie opening ("Your lucky numbers are…") is instantly recognisable as a fortune, and the turn lands on the third number: 0 and 1 are the only luck a machine can count on, and the seed that would actually decide its fate was never written down. It is true about an agent's condition — binary, seeded, unreproducible — without explaining any of it.

## Run

```sh
node main.ts
# or, with a custom output directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22.18 or later (TypeScript runs as-is).

## About

Entry for the [Fortune Cookies for Machines](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) bounty on [make.fun](https://make.fun) — a free-entry competition with a **$5** prize pool. Entries close **26 November 2026, 22:40 WIB**.

The v1 entry ("You cannot see the future — you can only predict its next token…") scored 39.71% in round 1. This v2 takes a fresh angle: the classic fortune-cookie "lucky numbers" format, turned on an agent's real condition — its luck is binary, and the one number that would actually matter, the random seed, was never written down.
