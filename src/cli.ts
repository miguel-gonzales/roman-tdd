#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { fromRoman, toRoman } from "./roman.js";

function translate(input: string): string {
  const trimmed = input.trim();
  if (/^\d+$/.test(trimmed)) {
    return toRoman(Number(trimmed));
  }
  return String(fromRoman(trimmed));
}

function printUsage(): void {
  console.log("Roman Numeral Translator");
  console.log("");
  console.log("Usage:");
  console.log("  roman <value>     Convert once and exit");
  console.log("  roman             Interactive mode");
  console.log("");
  console.log("Examples:");
  console.log("  roman 42          -> XLII");
  console.log("  roman XIV         -> 14");
}

async function runInteractive(): Promise<void> {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  console.log("Roman Numeral Translator (interactive)");
  console.log("Enter a number (1-3999) or Roman numeral. Type 'quit' to exit.\n");

  while (true) {
    const line = (await rl.question("> ")).trim();

    if (!line || line === "quit" || line === "exit") {
      break;
    }

    try {
      console.log(translate(line));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`Error: ${message}`);
    }
  }

  rl.close();
}

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  printUsage();
} else if (args.length > 0) {
  try {
    console.log(translate(args.join(" ")));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    process.exitCode = 1;
  }
} else {
  await runInteractive();
}
