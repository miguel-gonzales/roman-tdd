import { toRoman } from "./roman.js"

describe("toRoman", () => {
  it("should convert number 1 to roman number I", () => {
    expect(toRoman(1)).toBe("I")
  });
  
  it("should convert number 2 to roman number II", () => {
    expect(toRoman(2)).toBe("II")
  });

  it("should convert number 3 to roman number III", () => {
    expect(toRoman(3)).toBe("III")
  });

  it("should convert number 4 to roman number IV", () => {
    expect(toRoman(4)).toBe("IV")
  });

  it("should convert number 5 to roman number V", () => {
    expect(toRoman(5)).toBe("V")
  });

  it("should convert number 6 to roman number VI", () => {
    expect(toRoman(6)).toBe("VI")
  });
  it("should convert number 7 to roman number VII", () => {
    expect(toRoman(7)).toBe("VII")
  });
  it("should convert number 8 to roman number VIII", () => {
    expect(toRoman(8)).toBe("VIII")
  });
});
