class ImageLoader {
  constructor() {
    this.images = {};
    this.numberOfImages = 0;
    this.numberOfLoadedImages = 0;

    this.init();
  }

  init() {
    this.loadImage('menubg', './assets/images/menubg.png');
    this.loadImage('pokemonLogo', './assets/images/pokemon-logo.png');
    this.loadImage('selectPokemon', './assets/images/select-pokemon.png');

    this.loadImage('battleBG', './assets/images/PokemonBattleground.png');
    this.loadImage('movesBG', './assets/images/battle-moves.png');
    this.loadImage('playerImg', './assets/images/player.png');
    this.loadImage('opponentImg', './assets/images/opponent.png');

    this.loadImage('charizardBack', './assets/images/Pokemon/charizard-back.png');
    this.loadImage('charizardFront', './assets/images/Pokemon/charizard-front.png');
    this.loadImage('blastoiseBack', './assets/images/Pokemon/blastoise-back.png');
    this.loadImage('blastoiseFront', './assets/images/Pokemon/blastoise-front.png');
    this.loadImage('venusaurBack', './assets/images/Pokemon/venusaur-back.png');
    this.loadImage('venusaurFront', './assets/images/Pokemon/venusaur-front.png');
    this.loadImage('machampBack', './assets/images/Pokemon/machamp-back.png');
    this.loadImage('machampFront', './assets/images/Pokemon/machamp-front.png');
    this.loadImage('gengarBack', './assets/images/Pokemon/gengar-back.png');
    this.loadImage('gengarFront', './assets/images/Pokemon/gengar-front.png');
    this.loadImage('raichuBack', './assets/images/Pokemon/raichu-back.png');
    this.loadImage('raichuFront', './assets/images/Pokemon/raichu-front.png');
    this.loadImage('scytherBack', './assets/images/Pokemon/scyther-back.png');
    this.loadImage('scytherFront', './assets/images/Pokemon/scyther-front.png');
    this.loadImage('onixBack', './assets/images/Pokemon/onix-back.png');
    this.loadImage('onixFront', './assets/images/Pokemon/onix-front.png');

    this.loadImage('healthBarBox', './assets/images/battle-info-bar.png');
    this.loadImage('healthBarLine', './assets/images/battle-hitpoints.png');

    // Pokemon Moves Images
    this.loadImage('slash', './assets/images/slash.png');
    this.loadImage('flamethrower', './assets/images/flamethrower.png');
    this.loadImage('air slash', './assets/images/slash.png');
    this.loadImage('overheat', './assets/images/overheat.png');

    this.loadImage('headbutt', './assets/images/headbutt.png');
    this.loadImage('skull bash', './assets/images/headbutt.png');
    this.loadImage('water pulse', './assets/images/water-pulse.png');
    this.loadImage('hydro pump', './assets/images/hydro-pump.png');

    this.loadImage('razor leaf', './assets/images/leaf.png');
    this.loadImage('power whip', './assets/images/power-whip.png');
    this.loadImage('earthquake', './assets/images/rock-slide.png');
    this.loadImage('sludge bomb', './assets/images/shadow-ball.png');

    this.loadImage('quick attack', './assets/images/headbutt.png');
    this.loadImage('thunder punch', './assets/images/thunder-punch.png');
    this.loadImage('thunder shock', './assets/images/thunder-shock.png');
    this.loadImage('iron tail', './assets/images/iron-tail.png');

    this.loadImage('fury cutter', './assets/images/slash.png');

    this.loadImage('strength', './assets/images/headbutt.png');
    this.loadImage('rock slide', './assets/images/rock-slide.png');
    this.loadImage('superpower', './assets/images/superpower.png');

    this.loadImage('shadow ball', './assets/images/shadow-ball.png');
    this.loadImage('dark pulse', './assets/images/dark-pulse.png');
    this.loadImage('dream eater', './assets/images/dream-eater.png');

    this.loadImage('rock throw', './assets/images/rock-throw.png');

    this.loadImage('enemy attack', './assets/images/headbutt.png');

    // Pokemon Moves Images

    this.loadImage('win', './assets/images/win.png');
    this.loadImage('lose', './assets/images/lose.png');

    this.loadImage('playAgain', './assets/images/play-again.png');

    this.numberOfImages = Object.keys(this.images).length;
  }

  loadImage(identifier, source) {
    let that = this;
    let image = new Image();
    image.src = source;
    image.onload = () => that.numberOfLoadedImages++;
    this.images[identifier] = image;
  }

  hasAllImagesLoaded() {
    return this.numberOfLoadedImages == this.numberOfImages ? true : false;
  }
}
