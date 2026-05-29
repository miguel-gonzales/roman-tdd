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
  
  // Validations
  let num = typeof value === "string" ? Number(value) : value;
  
  if (!Number.isInteger(num)) {
    throw new Error("Input must be an integer");
  }
  if (num <= 0 || num >= 4000) {
    throw new Error("Input must be between 1 and 3999");
  }


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
  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  // Validations
  if (rNum.length === 0) {
    throw new Error("Input cannot be empty, please provide a valid Roman numeral string");
  }

  if (rNum !== rNum.toUpperCase()) {
    throw new Error("Input must contain only uppercase letters, please provide a valid Roman numeral string");
  }

  if (rNum.split("").some(char => !values[char])) {
    throw new Error("Input contains invalid characters, please provide a valid Roman numeral string");
  }

  if (/I{4,}|X{4,}|C{4,}|M{4,}/.test(rNum)) {
    throw new Error("Invalid Roman numeral: too many repetitions");
  }

  let total = 0;

  for (let i = 0; i < rNum.length; i++) {
    const current = values[rNum.charAt(i)]!;
    const next = values[rNum.charAt(i + 1)];
    if (next !== undefined && current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }
  
  return total;
};
