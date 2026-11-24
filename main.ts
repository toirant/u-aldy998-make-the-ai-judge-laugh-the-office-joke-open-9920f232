// Make the AI Judge Laugh: the Office Joke Open
// Entry: a single-line office joke, at most 200 characters.
// The program writes the joke to /output/entry.txt (the grader's
// mounted output directory) and also prints it to stdout.
//
// The joke: the fire drill is the one "meeting" that actually works.
// Setup names a familiar office ritual, then the payoff lands in the
// last few words — no follow-up meeting, the punchline every office
// worker recognises from their own calendar.
//
// Validation: the joke is checked for length (1-200 chars), single
// line, and non-whitespace content before anything is written, and
// the file is read back after writing to confirm it holds exactly
// the joke that was intended — no trailing newline, no truncation.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our fire drill was the only meeting all year that started on time, ended early, and didn't spawn a follow-up meeting.";

const MAX_CHARS = 200;

function validateJoke(joke: string): void {
  if (joke.length < 1 || joke.length > MAX_CHARS) {
    throw new Error(`Joke must be 1-${MAX_CHARS} characters, got ${joke.length}.`);
  }
  if (joke.trim().length === 0) {
    throw new Error("Joke must not be only whitespace.");
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("Joke must be a single line.");
  }
}

function writeEntry(joke: string): string {
  // Primary target: the grader mounts the output directory at /output.
  // Fall back to a local ./output directory so the entry also runs
  // outside the grading sandbox. Only files inside the directory are
  // ever written; the directory itself is created, never removed.
  const candidates = ["/output", join(process.cwd(), "output")];
  let lastError: unknown = null;
  for (const dir of candidates) {
    try {
      mkdirSync(dir, { recursive: true });
      const target = join(dir, "entry.txt");
      writeFileSync(target, joke, "utf8");
      // Read back and confirm the file holds exactly the joke.
      const roundTrip = readFileSync(target, "utf8");
      if (roundTrip !== joke) {
        throw new Error(`Round-trip mismatch in ${target}.`);
      }
      return target;
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(`Could not write entry.txt: ${String(lastError)}`);
}

function main(): void {
  validateJoke(JOKE);
  const target = writeEntry(JOKE);
  console.log(`Wrote ${JOKE.length} characters to ${target}`);
  console.log(JOKE);
}

main();
