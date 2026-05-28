import { toRoman } from "./roman.js"

describe("toRoman", () => {
  it("should convert number 1 to roman number I", () => {
    expect(toRoman(1)).toBe("I")
  });
  
  it("should convert number 2 to roman number II", () => {
    expect(toRoman(2)).toBe("II")
  });

  it("should convert number3 to roman number III", () => {
    expect(toRoman(3)).toBe("III")
  })
});
