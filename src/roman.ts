import { ROMAN_NUMERALS, ROMAN_VALUES } from "./romanConstants.js";
import {
  assertValidRomanNumeral,
  assertValidToRomanInput,
} from "./romanValidators.js";

export const toRoman = (value: number): string => {
  let num = assertValidToRomanInput(value);

  let result = "";
  for (const [value, numeral] of ROMAN_NUMERALS) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

export const fromRoman = (rNum: string): number => {
  const normalized = assertValidRomanNumeral(rNum);

  let total = 0;

  for (let i = 0; i < normalized.length; i++) {
    const current = ROMAN_VALUES[normalized.charAt(i)]!;
    const next = ROMAN_VALUES[normalized.charAt(i + 1)];
    if (next !== undefined && current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }

  return total;
};
