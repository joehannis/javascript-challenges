const searchCandies = require("./search_candies");

describe("searchcandies", () => {
  it("enters 'Ma' and 10, returns [ 'Mars', 'Maltesers' ]", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("enters 'Ma' and 2, returns [ 'Mars' ]", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("enters 'S' and 10, returns [ 'Skitties', 'Skittles', 'Starburst' ]", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("enters 'S' and 4, returns [ 'Skitties', 'Skittles' ]", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
  it("enters 'ma' and 10, returns [ 'Mars', 'Maltesers' ]", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
