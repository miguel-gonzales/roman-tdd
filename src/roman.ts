import {
  assertValidRomanNumeral,
  assertValidToRomanInput,
  ROMAN_VALUES,
} from "./romanValidators.js";

export const toRoman = (value: number): string => {
  const romanNumbers: [number, string][] = [
    [1000, "M"],
    [900, 'CM'],
    [500, "D"],
    [400, 'CD'],
    [100, "C"],
    [90, 'XC'],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let num = assertValidToRomanInput(value);

  let result = "";
  for (const [value, numeral] of romanNumbers) {
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
