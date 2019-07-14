class Menu {
  constructor(battle, imageLoader, audioLoader, viewport, selectedPokemon) {
    this.battle = battle;
    this.imageLoader = imageLoader;
    this.audioLoader = audioLoader;
    this.viewport = viewport;
    this.selectedPokemon = selectedPokemon;
    canvas.addEventListener('click', this.selectPokemon);
  }

  //Draw the Pokemon Game Menu and Set of Choosable Pokemons
  drawMenu = () => {
    ctx.clearRect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);

    ctx.drawImage(this.imageLoader.images.menubg, 0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    ctx.drawImage(this.imageLoader.images.pokemonLogo, this.viewport.width / 2 - 300 / 2, 15, 300, 250);
    ctx.drawImage(this.imageLoader.images.selectPokemon, this.viewport.width / 2 - 500 / 2, this.viewport.height - 150, 500, 50);
    ctx.font = '18px sans-serif';
    ctx.fillText(this.selectedPokemon, this.viewport.width / 2 - 300 / 2, this.viewport.height - 50, 200);

    //Displaying Start option after selecting the required number of pokemons
    if (this.selectedPokemon.length === TOTAL_PLAYER_POKEMONS) {
      ctx.font = '24px sans-serif';
      ctx.fillText('Start', this.viewport.width - 100, this.viewport.height - 50, 200);
    }

    ctx.drawImage(this.imageLoader.images.charizardFront, MENU_POKEMON_X * 0, MENU_POKEMON_Y, 100, 100);
    ctx.drawImage(this.imageLoader.images.blastoiseFront, MENU_POKEMON_X * 1, MENU_POKEMON_Y, 100, 100);
    ctx.drawImage(this.imageLoader.images.venusaurFront, MENU_POKEMON_X * 2, MENU_POKEMON_Y, 100, 100);
    ctx.drawImage(this.imageLoader.images.machampFront, MENU_POKEMON_X * 3, MENU_POKEMON_Y, 100, 100);
    ctx.drawImage(this.imageLoader.images.raichuFront, MENU_POKEMON_X * 4, MENU_POKEMON_Y, 100, 100);
    ctx.drawImage(this.imageLoader.images.scytherFront, MENU_POKEMON_X * 5, MENU_POKEMON_Y, 100, 100);
    ctx.drawImage(this.imageLoader.images.onixFront, MENU_POKEMON_X * 6, MENU_POKEMON_Y, 100, 100);
    ctx.drawImage(this.imageLoader.images.gengarFront, MENU_POKEMON_X * 7, MENU_POKEMON_Y, 100, 100);
  };

  //Select Event Function for the Menu
  selectPokemon = event => {
    let posX = event.clientX;
    let posY = event.clientY;

    if (this.selectedPokemon.length < TOTAL_PLAYER_POKEMONS) {
      if (posX >= MENU_POKEMON_X * 0 && posX <= MENU_POKEMON_X * 1 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Charizard') === -1) {
          this.selectedPokemon.push('Charizard');
        } else {
          let i = this.selectedPokemon.indexOf('Charizard');
          this.selectedPokemon.splice(i, 1);
        }
      }
      if (posX >= MENU_POKEMON_X * 1 && posX <= MENU_POKEMON_X * 2 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Blastoise') === -1) {
          this.selectedPokemon.push('Blastoise');
        } else {
          let i = this.selectedPokemon.indexOf('Blastoise');
          this.selectedPokemon.splice(i, 1);
        }
      }
      if (posX >= MENU_POKEMON_X * 2 && posX <= MENU_POKEMON_X * 3 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Venusaur') === -1) {
          this.selectedPokemon.push('Venusaur');
        } else {
          let i = this.selectedPokemon.indexOf('Venusaur');
          this.selectedPokemon.splice(i, 1);
        }
      }
      if (posX >= MENU_POKEMON_X * 3 && posX <= MENU_POKEMON_X * 4 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Machamp') === -1) {
          this.selectedPokemon.push('Machamp');
        } else {
          let i = this.selectedPokemon.indexOf('Machamp');
          this.selectedPokemon.splice(i, 1);
        }
      }
      if (posX >= MENU_POKEMON_X * 4 && posX <= MENU_POKEMON_X * 5 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Raichu') === -1) {
          this.selectedPokemon.push('Raichu');
        } else {
          let i = this.selectedPokemon.indexOf('Raichu');
          this.selectedPokemon.splice(i, 1);
        }
      }
      if (posX >= MENU_POKEMON_X * 5 && posX <= MENU_POKEMON_X * 6 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Scyther') === -1) {
          this.selectedPokemon.push('Scyther');
        } else {
          let i = this.selectedPokemon.indexOf('Scyther');
          this.selectedPokemon.splice(i, 1);
        }
      }
      if (posX >= MENU_POKEMON_X * 6 && posX <= MENU_POKEMON_X * 7 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Onix') === -1) {
          this.selectedPokemon.push('Onix');
        } else {
          let i = this.selectedPokemon.indexOf('Onix');
          this.selectedPokemon.splice(i, 1);
        }
      }
      if (posX >= MENU_POKEMON_X * 7 && posX <= MENU_POKEMON_X * 8 && posY >= MENU_POKEMON_Y && posY <= MENU_POKEMON_Y + 100) {
        if (this.selectedPokemon.indexOf('Gengar') === -1) {
          this.selectedPokemon.push('Gengar');
        } else {
          let i = this.selectedPokemon.indexOf('Gengar');
          this.selectedPokemon.splice(i, 1);
        }
      }
    }

    //Start option Event
    if (this.selectedPokemon.length === TOTAL_PLAYER_POKEMONS) {
      if (posX >= this.viewport.width - 120 && posX <= this.viewport.width && posY >= this.viewport.height - 80 && posY <= this.viewport.height) {
        game.currentState = 'battleStart';
      }
    }
  };
}
