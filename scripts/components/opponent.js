class Opponent {
  constructor() {
    this.pokemonArray = Object.keys(PokemonData);
    this.randomPokemon = [];
    this.hitPoints = [];
    this.level = [];
    this.getPlayerPokemon();
    this.getHitPoints();
    this.getLevel();
  }

  //Get the random Pokemon for Opponent
  getPlayerPokemon = () => {
    for (let i = 0; i < TOTAL_OPPONENT_POKEMONS; i++) {
      this.randomPokemon.push(this.pokemonArray[Math.floor(Math.random() * this.pokemonArray.length)]);
    }
  };

  //Get the hitpoints of the random selected pokemon
  getHitPoints = () => {
    for (let i = 0; i < TOTAL_OPPONENT_POKEMONS; i++) {
      this.hitPoints.push(PokemonData[this.randomPokemon[i]].hitPoints);
    }
  };

  //Get the level of the random selected pokemon
  getLevel = () => {
    for (let i = 0; i < TOTAL_OPPONENT_POKEMONS; i++) {
      this.level.push(PokemonData[this.randomPokemon[i]].level);
    }
  };

  //Get the pokemon image of the random selected pokemon
  getEnemyPokemonImage = index => {
    return this.randomPokemon[index].toLowerCase() + 'Front';
  };

  //Get the Effectiveness of the Opponent Attacks
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
