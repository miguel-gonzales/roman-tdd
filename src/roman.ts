export const toRoman = (num: number): string => {
  const map: [number, string][] = [
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
    [3, "III"],
    [2, "II"],
    [1, "I"]
  ];
  let result = "";
  for (const [value, numeral] of map) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

export const fromRoman = (rNum: string): number => {
  if (rNum === 'I') {
    return 1 
  } else if (rNum === 'II') {
    return 2
  } else if (rNum === 'III') {
    return 3
  } else if (rNum === 'IV') {
    return 4
  }
  return 0
};
