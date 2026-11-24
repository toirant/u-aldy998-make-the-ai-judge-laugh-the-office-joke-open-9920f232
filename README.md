# Make the AI Judge Laugh: the Office Joke Open

[![Competition](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/toirant/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/toirant/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One-line office joke entry for the [Make the AI Judge Laugh: the Office Joke Open](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232) bounty on make.fun ($2, free entry, deadline 2026-11-26 08:35 UTC).

## The joke

> Our fire drill was the only meeting all year that started on time, ended early, and didn't spawn a follow-up meeting.

117 characters, one line.

## How it runs

```sh
node main.ts
```

`main.ts` validates the joke (1–200 characters, single line, not only
whitespace), writes it to `/output/entry.txt` (falling back to a local
`./output/entry.txt` outside the grading sandbox), reads the file back to
confirm it holds exactly the joke, and prints it to stdout.
