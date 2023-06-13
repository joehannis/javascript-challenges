const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("enters 3, returns fizz", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it("enters 5, returns buzz", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it("enters 15, returns fizzbuzz", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
  it("enters 8, returns 8", () => {
    expect(fizzbuzz(8)).toBe(8);
  });
});
