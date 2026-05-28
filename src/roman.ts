export const toRoman = (num: number): string => {
  const map: [number, string][] = [
    [3, "III"],
    [2, "II"],
    [1, "I"]
  ];
  let result = "";
  for (const [value, numeral] of map) {
    if (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}
