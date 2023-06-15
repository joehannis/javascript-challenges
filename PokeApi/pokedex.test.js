const Pokedex = require("./pokedex");

describe("Pokedex", () => {
  it("Can fetch the data for Pikachu and add to pokedex. Example of different syntax", async () => {
    const pokedex = new Pokedex();
    await pokedex.catch("pikachu");
    expect(pokedex.my_pokedex[0].name).toContain("pikachu");
  });

  it("Can fetch the data for Pikachu and add to pokedex, then add Jigglypuff", (done) => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu");
    pokedex.catch("jigglypuff").then((result) => {
      expect(result[0].name).toContain("pikachu");
      expect(result[1].name).toContain("jigglypuff");
      done();
    });
  });
  it("Can fetch the data for Pikachu and add to pokedex, then add Jigglypuff, then run the all function to return", (done) => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu");
    pokedex.catch("jigglypuff").then(() => {
      expect(pokedex.all()[0].name).toContain("pikachu");
      done();
    });
  });
});
