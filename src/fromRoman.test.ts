import { fromRoman } from "./roman.js"

describe("fromRoman", () => {
  it("converts roman number I to number 1", () => {
    expect(fromRoman("I")).toBe(1)
  });

  it("converts roman number II to number 2", () => {
    expect(fromRoman("II")).toBe(2)
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

  it("converts roman number XI to number 11", () => {
    expect(fromRoman("XI")).toBe(11)
  });

  it("converts roman number XIV to number 14", () => {
    expect(fromRoman("XIV")).toBe(14)
  });

  it("converts roman number XIX to number 19", () => {
    expect(fromRoman("XIX")).toBe(19)
  });

  it("converts roman number XL to number 40", () => {
    expect(fromRoman("XL")).toBe(40)
  });

  it("converts roman number L to number 50", () => {
    expect(fromRoman("L")).toBe(50)
  });

  it("converts roman number XC to number 90", () => {
    expect(fromRoman("XC")).toBe(90)
  });

  it("converts roman number XCIX to number 99", () => {
    expect(fromRoman("XCIX")).toBe(99)
  })

  it("converts roman number CD to number 400", () => {
    expect(fromRoman("CD")).toBe(400)
  });

  it("converts roman number CM to number 900", () => {
    expect(fromRoman("CM")).toBe(900)
  })

  it("converts roman number CMXL to number 940", () => {
    expect(fromRoman("CMXL")).toBe(940)
  })

  it("converts roman number MCMXCIX to number 1999", () => {
    expect(fromRoman("MCMXCIX")).toBe(1999)
  });

  it("converts roman number MCMLXXXVII to number 1987", () => {
    expect(fromRoman("MCMLXXXVII")).toBe(1987)
  });

  it("converts roman number 2024 to number MMXXIV", () => {
    expect(fromRoman("MMXXIV")).toBe(2024)
  });

  it("converts roman number MMMCMXCIX to number 3999", () => {
    expect(fromRoman("MMMCMXCIX")).toBe(3999)
  });

  // Edge cases
  it("should throw an error for an empty string", () => {
    expect(() => fromRoman("")).toThrow()
  });

  it("should throw an error for lowercase input", () => {
    expect(() => fromRoman("iv")).toThrow()
  });

  it("should throw an error for mixed case input", () => {
    expect(() => fromRoman("Iv")).toThrow()
  });

  it("should throw an error for invalid characters", () => {
    expect(() => fromRoman("ABC")).toThrow()
  });
});
