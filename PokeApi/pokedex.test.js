const Pokedex = require("./pokedex");

describe("Pokedex", () => {
  xit("Can fetch the data for Pikachu and add to pokedex, then add Jigglypuff", async () => {
    const pokedex = new Pokedex();
    await pokedex.catch("pikachu");
    expect(pokedex.my_pokedex).toContain("pikachu");
  });

  it("Can fetch the data for Pikachu and add to pokedex, then add Jigglypuff", () => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu").then(() => {
      pokedex.all.then((result) => {
        expect(result[0]).toContain("pikachu");
      });
    });
  });
});
