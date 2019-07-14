class GameAnimation {
  constructor(canvasElement) {
    this.canvasElement = canvasElement;
    this.viewPort = new ViewPort(VIEWPORT_WIDTH, VIEWPORT_HEIGHT, this.canvasElement);
    this.viewPort.createViewPort();
    this.playerPokemon = [];
    this.battle;
    this.currentState = 'menu';
    this.animationState = false;
    this.countBattleStart = 0;
    this.init();
  }

  init = () => {
    this.imageLoader = new ImageLoader();
    this.audioLoader = new AudioLoader();
    this.opponent = new Opponent();
    this.menuController = new Controller();
    this.selectedPokemon = [];
    this.menu = new Menu(this.battle, this.imageLoader, this.audioLoader, this.viewPort, this.selectedPokemon);
    this.start();
  };

  start = () => {
    let interval = setInterval(() => {
      if (this.imageLoader.hasAllImagesLoaded() && this.audioLoader.hasAllAudiosLoaded()) {
        clearInterval(interval);
        this.runGame();
      } else {
        ctx.font = '36px sans-serif';
        ctx.fillText('loading....', VIEWPORT_WIDTH / 2 - 200 / 2, VIEWPORT_HEIGHT / 2, 200);
      }
    });
  };

  runGame = () => {
    this.gameEngine = requestAnimationFrame(() => this.runGame());

    ctx.imageSmoothingEnabled = false;

    switch (this.currentState) {
      case 'menu':
        this.menu.drawMenu();
        if (this.selectedPokemon.length >= TOTAL_PLAYER_POKEMONS) {
          for (let i = 0; i < this.selectedPokemon.length; i++) {
            this.playerPokemon[i] = new Pokemon(this.selectedPokemon[i], PokemonData[this.selectedPokemon[i]].hitPoints, PokemonData[this.selectedPokemon[i]].moves, PokemonData[this.selectedPokemon[i]].level, PokemonData[this.selectedPokemon[i]].type, this.imageLoader);
          }
          this.battle = new Battle(this.imageLoader, this.audioLoader, this.opponent, this.playerPokemon);
        }
        break;

      case 'battleStart':
        canvas.removeEventListener('click', this.menu.selectedPokemon);
        this.battle.drawBattleStart();
        setTimeout(() => {
          this.currentState = 'battle';
        }, 2000);
        break;

      case 'battle':
        this.battle.drawBattlePokemon();
        if (!this.animationState) {
          this.battle.drawBattleMenu();
          this.battle.chooseBattleOption();
        }
    }
  };

  resetGame = () => {
    game = new GameAnimation(canvas);
    this.audioLoader.stop('victory');
  };

  updateScores = () => {
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
  };
}

let game = new GameAnimation(canvas);
