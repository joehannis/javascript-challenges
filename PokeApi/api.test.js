const fetchPokemon = require("./api");

describe("Pokedex", () => {
  it("Can fetch the data for Pikachu", (done) => {
    fetchPokemon("pikachu").then((pokemon) => {
      expect(pokemon.name).toEqual("pikachu");
      done();
    });
  });
});
