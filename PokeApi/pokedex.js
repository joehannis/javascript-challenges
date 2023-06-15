const fetchPokemon = require("./api");

class Pokedex {
  constructor() {
    this.my_pokedex = [];
  }

  catch(name) {
    return fetchPokemon(name).then((data) => {
      this.my_pokedex.push(data);
      return this.my_pokedex;
    });
  }

  all() {
    return this.my_pokedex;
  }
}

module.exports = Pokedex;
