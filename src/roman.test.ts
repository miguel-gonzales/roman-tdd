import { toRoman } from "./roman.js"
import { fromRoman } from "./roman.js"

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

  it("should convert number 9 to roman number IX", () => {
    expect(toRoman(9)).toBe("IX")
  });

  it("should convert number 10 to roman number X", () => {
    expect(toRoman(10)).toBe("X")
  });

  it("should convert number 11 to roman number XI", () => {
    expect(toRoman(11)).toBe("XI")
  });

  it("should convert number 14 to roman number XIV", () => {
    expect(toRoman(14)).toBe("XIV")
  });

  it("should convert number 19 to roman number XIX", () => {
    expect(toRoman(19)).toBe("XIX")
  });

  it("should convert number 40 to roman number XL", () => {
    expect(toRoman(40)).toBe("XL")
  });

  it("should convert number 50 to roman number L", () => {
    expect(toRoman(50)).toBe("L")
  });

  it("should convert number 90 to roman number XC", () => {
    expect(toRoman(90)).toBe("XC")
  });

  it("should convert number 100 to roman number C", () => {
    expect(toRoman(100)).toBe("C")
  });

  it("should convert number 400 to roman number CD", () => {
    expect(toRoman(400)).toBe("CD")
  });

  it("should convert number 500 to roman number D", () => {
    expect(toRoman(500)).toBe("D")
  });

  it("should convert number 900 to roman number CM", () => {
    expect(toRoman(900)).toBe("CM")
  });

  it("should convert number 1000 to roman number M", () => {
    expect(toRoman(1000)).toBe("M")
  });

  it('converts 1987 to "MCMLXXXVII"', () => {
    expect(toRoman(1987)).toBe('MCMLXXXVII');
  });

  it('converts 3000 to "MMM"', () => {
    expect(toRoman(3000)).toBe('MMM');
  });
  
  it('converts 3999 to "MMMCMXCIX"', () => {
    expect(toRoman(3999)).toBe('MMMCMXCIX');
  });
});

describe("fromRoman", () => {
  it("converts roman number I to number 1", () => {
    expect(fromRoman("I")).toBe(1)
  });

  it("converts roman number II to number 2", () => {
    expect(fromRoman("II")).toBe(2  )
  });

  it("converts roman number III to number 3", () => {
    expect(fromRoman("III")).toBe(3)
  });

  it("converts roman number IV to number 4", () => {
    expect(fromRoman("IV")).toBe(4)
  });

  it("converts roman number V to number 5", () => {
    expect(fromRoman("V")).toBe(5)
  });

  it("converts roman number VI to number 6", () => {
    expect(fromRoman("VI")).toBe(6)
  });

  it("converts roman number VII to number 7", () => {
    expect(fromRoman("VII")).toBe(7)
  });

  it("converts roman number X to number 10", () => {
    expect(fromRoman("X")).toBe(10)
  });
});