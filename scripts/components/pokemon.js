class Pokemon {
  constructor(name, hitPoints, movesdata, level, type, imageLoader) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.movesdata = movesdata;
    this.level = level;
    this.type = type;
    this.imageLoader = imageLoader;
  }

  //Get the Effectiveness of the Player Pokemon Attacks
  getPlayerEffectiveness = (pkMove, opponentPokemon) => {
    //strong against
    if (TypeData[PokemonData[opponentPokemon].type].strengths.indexOf(MoveData[pkMove].type) != -1) {
      return 0.5;
    }
    //weak against
    else if (TypeData[PokemonData[opponentPokemon].type].weaknesses.indexOf(MoveData[pkMove].type) != -1) {
      return 2;
    }
    //normal damage
    else {
      return 1;
    }
  };
}
