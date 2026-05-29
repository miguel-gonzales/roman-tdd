import { ROMAN_VALUES } from "./romanConstants.js";

export function assertValidToRomanInput(value: number): number {
  const num = typeof value === "string" ? Number(value) : value;

  if (!Number.isInteger(num)) {
    throw new Error("Input must be an integer");
  }
  if (num <= 0 || num >= 4000) {
    throw new Error("Input must be between 1 and 3999");
  }

  return num;
}

export function assertValidRomanNumeral(rNum: string): string {
  if (rNum.length === 0) {
    throw new Error("Input cannot be empty, please provide a valid Roman numeral string");
  }

  if (rNum !== rNum.toUpperCase()) {
    throw new Error("Input must contain only uppercase letters, please provide a valid Roman numeral string");
  }

  if (rNum.split("").some(char => !ROMAN_VALUES[char])) {
    throw new Error("Input contains invalid characters, please provide a valid Roman numeral string");
  }

  if (/I{4,}|X{4,}|C{4,}|M{4,}/.test(rNum)) {
    throw new Error("Invalid Roman numeral: too many repetitions");
  }

  return rNum;
}
