export const toRoman = (num: number): string => {
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
  };

  let total = 0;
  
  for (const char of rNum) {
    total += values[char];
  }
  
  return total;
};
