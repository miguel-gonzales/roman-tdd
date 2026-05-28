import { toRoman } from "./roman.js"

describe("toRoman", () => {
  it("should convert number 1 to roman number I", () => {
    expect(toRoman(1)).toBe("I")
  });
});
