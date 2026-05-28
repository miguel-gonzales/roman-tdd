export const toRoman = (num: number): string => {
  let result = "";
  if (num === 1) {
    result = "I";
  } else if (num === 2) {
    result = "II";
  } else if (num ===3) {
    result = "III";
  }
  return result;
}
