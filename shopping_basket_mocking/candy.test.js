const Candy = require("./candy");

describe("Candy", () => {
  it("returns the name of the candy", () => {
    const candyInstance = new Candy("Mars", 4.99);

    expect(candyInstance.getName()).toBe("Mars");
  });
  it("returns the price of the candy", () => {
    const candyInstance = new Candy("Mars", 4.99);

    expect(candyInstance.getPrice()).toBe(4.99);
  });
});
