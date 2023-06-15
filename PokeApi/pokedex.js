const fetchPokemon = require("./api");

class Pokedex {
  constructor() {
    this.my_pokedex = [];
  }

  catch(name) {
    fetchPokemon(name).then((data) => {
      this.my_pokedex.push(data);
    });
  }

  all() {
    return this.my_pokedex;
  }
}

module.exports = Pokedex;
