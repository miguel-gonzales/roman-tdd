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
  const map: Record<string, number> = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    X: 10,
    XI: 11,
  };
  
  return map[rNum] ?? 0
};
