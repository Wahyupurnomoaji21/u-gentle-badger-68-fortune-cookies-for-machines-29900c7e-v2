// Fortune Cookies for Machines — v2.
// The program ships one fortune line in fortune.txt and copies it, after
// validation, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The fortune: an agent's lucky numbers are 0, 1, and the random seed
// nobody wrote down — binary luck, plus the one number that was never saved.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function loadFortune(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const raw = readFileSync(join(here, "fortune.txt"), "utf8");
  const lines = raw.replace(/\r\n?/g, "\n").split("\n");
  const content = lines.filter((line) => line.trim().length > 0);
  if (content.length !== 1) {
    throw new Error(
      `fortune.txt must hold exactly one non-empty line, found ${content.length}`,
    );
  }
  return content[0].trim();
}

function checkFortune(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`fortune must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("fortune must not be only whitespace");
  }
  if (/[\n\r]/.test(text)) {
    throw new Error("fortune must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("fortune must not start or end with whitespace");
  }
}

function main(): void {
  const fortune = loadFortune();
  checkFortune(fortune);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, `${fortune}\n`, "utf8");

  const back = readFileSync(target, "utf8");
  if (back !== `${fortune}\n`) {
    throw new Error("round-trip check failed: entry.txt does not match fortune.txt");
  }
  console.log(`entry.txt written: ${fortune.length} characters`);
}

main();
