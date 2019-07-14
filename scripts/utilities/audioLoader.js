class AudioLoader {
  constructor() {
    this.audios = {};
    this.numberOfAudios = 0;
    this.numberOfLoadedAudios = 0;
    this.init();
  }

  init() {
    this.loadAudio('battle', './assets/audios/battle.mp3');
    this.loadAudio('beep', './assets/audios/beep.mp3');

    this.loadAudio('normalhit', './assets/audios/normalhit.mp3');
    this.loadAudio('lesseffectivehit', './assets/audios/lesseffectivehit.mp3');
    this.loadAudio('supereffectivehit', './assets/audios/supereffectivehit.mp3');

    this.loadAudio('victory', './assets/audios/victory.mp3');

    this.numberOfAudios = Object.keys(this.audios).length;
  }

  loadAudio(identifier, source) {
    let audio = new Audio();
    audio.src = source;
    audio.addEventListener('canplay', () => this.numberOfLoadedAudios++);
    this.audios[identifier] = audio;
  }

  hasAllAudiosLoaded() {
    return this.numberOfLoadedAudios == this.numberOfAudios ? true : false;
  }

  play(keyword) {
    this.audios[keyword].play();
  }

  stop(keyword) {
    this.audios[keyword].pause();
    this.audios[keyword].currentTime = 0;
  }
}
