class Opponent {
  constructor() {
    this.pokemonArray = Object.keys(PokemonData);
    this.randomPokemon = [];
    this.hitPoints = [];
    this.level = [];
    this.getPlayerPokemon();
    this.getHitPoints();
    this.getLevel();
    console.log(this.randomPokemon);
  }

  getPlayerPokemon = () => {
    for (let i = 0; i < TOTAL_OPPONENT_POKEMONS; i++) {
      this.randomPokemon.push(this.pokemonArray[Math.floor(Math.random() * this.pokemonArray.length)]);
    }
  };

  getHitPoints = () => {
    for (let i = 0; i < TOTAL_OPPONENT_POKEMONS; i++) {
      this.hitPoints.push(PokemonData[this.randomPokemon[i]].hitPoints);
    }
  };

  getLevel = () => {
    for (let i = 0; i < TOTAL_OPPONENT_POKEMONS; i++) {
      this.level.push(PokemonData[this.randomPokemon[i]].level);
    }
  };

  getEnemyPokemonImage = index => {
    return this.randomPokemon[index].toLowerCase() + 'Front';
  };

  getOpponentEffectiveness = (randomPokemonAttack, playerType) => {
    //strong against
    if (TypeData[playerType].strengths.indexOf(MoveData[randomPokemonAttack].type) != -1) {
      return 0.5;
    }
    //weak against
    else if (TypeData[playerType].weaknesses.indexOf(MoveData[randomPokemonAttack].type) != -1) {
      return 2;
    }
    //normal damage
    else {
      return 1;
    }
  };
}
