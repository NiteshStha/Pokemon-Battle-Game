class Battle {
  constructor(imageLoader, audioLoader, opponent, playerPokemon) {
    this.imageLoader = imageLoader;
    this.audioLoader = audioLoader;
    this.opponent = opponent;
    this.playerPokemon = playerPokemon;
    this.animation = new Animation(this.imageLoader, this);

    this.playerPokemonIndex = 0;

    this.getPlayerPokemonBack();

    this.movesHighlightX = 40;
    this.movesHighlightY = BATTLEBG_HEIGHT + 40;
    this.attackPosition = 1;
    this.countA = 0;
    this.countB = 0;
    this.countC = 0;
    this.countD = 0;

    this.count = 0;

    this.opponentPokemonIndex = 0;

    this.getPlayerHealthBar();

    this.getOpponentHealthBar();

    this.playerTurn = true;
    this.battleState = 'option';
    this.attackInitialState = true;
    this.attackOption = false;
    this.bagOption = false;
    this.victor = '';
  }

  getPlayerPokemonBack = () => {
    this.pokemonBack = this.playerPokemon[this.playerPokemonIndex].name.toLowerCase();
  };

  getPlayerHealthBar = () => {
    this.playerHitPoints = this.playerPokemon[this.playerPokemonIndex].hitPoints;
    this.playerHealthBar = (this.playerHitPoints / this.playerPokemon[this.playerPokemonIndex].hitPoints) * 165;
  };

  getOpponentHealthBar = () => {
    this.enemyHitPoints = this.opponent.hitPoints[this.opponentPokemonIndex];
    this.enemyHealthBar = (this.enemyHitPoints / this.opponent.hitPoints[this.opponentPokemonIndex]) * 165;
  };

  drawBattleStart = () => {
    this.audioLoader.play('battle');

    //Draw Trainers Intro
    ctx.drawImage(this.imageLoader.images.battleBG, 0, 0, BATTLEBG_WIDTH, BATTLEBG_HEIGHT);
    ctx.drawImage(this.imageLoader.images.movesBG, 0, 0, 160, 48, 0, BATTLEBG_HEIGHT, MOVESBG_WIDTH, MOVESBG_HEIGHT);
    ctx.drawImage(this.imageLoader.images.playerImg, PLAYER_X, PLAYER_Y, PLAYER_WIDTH, PLAYER_HEIGHT);
    ctx.drawImage(this.imageLoader.images.opponentImg, OPPONENT_X, OPPONENT_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

    ctx.font = '28px sans-serif';
    ctx.fillText('Lets Battle', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
  };

  drawBattlePokemon = () => {
    //Draw Player Pokemon
    ctx.drawImage(this.imageLoader.images.battleBG, 0, 0, BATTLEBG_WIDTH, BATTLEBG_HEIGHT);
    if (!game.animationState) {
      ctx.drawImage(this.imageLoader.images.movesBG, 0, BATTLEBG_HEIGHT, MOVESBG_WIDTH, MOVESBG_HEIGHT);
    }
    ctx.drawImage(this.imageLoader.images[this.pokemonBack + 'Back'], PLAYER_X, PLAYER_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

    ctx.drawImage(this.imageLoader.images.healthBarLine, 180, 50, this.enemyHealthBar, 50);
    ctx.drawImage(this.imageLoader.images.healthBarBox, 40, 20, 350, 100);
    ctx.font = '28px sans-serif';
    ctx.fillText(this.opponent.randomPokemon[this.opponentPokemonIndex], 70, 60, 150);
    ctx.font = '20px sans-serif';
    ctx.fillText('Lvl. ' + this.opponent.level[this.opponentPokemonIndex], 270, 60, 150);

    ctx.drawImage(this.imageLoader.images.healthBarLine, BATTLEBG_WIDTH - 210, BATTLEBG_HEIGHT - 100, this.playerHealthBar, 50);
    ctx.drawImage(this.imageLoader.images.healthBarBox, BATTLEBG_WIDTH - 350, BATTLEBG_HEIGHT - 120, 350, 100);
    ctx.font = '28px sans-serif';
    ctx.fillText(this.playerPokemon[this.playerPokemonIndex].name, BATTLEBG_WIDTH - 320, BATTLEBG_HEIGHT - 80, 150);
    ctx.font = '20px sans-serif';
    ctx.fillText('Lvl. ' + this.playerPokemon[this.playerPokemonIndex].level, BATTLEBG_WIDTH - 120, BATTLEBG_HEIGHT - 80, 150);

    ctx.drawImage(this.imageLoader.images[this.opponent.getEnemyPokemonImage(this.opponentPokemonIndex)], OPPONENT_X, OPPONENT_Y, PLAYER_WIDTH, PLAYER_HEIGHT);
  };

  drawBattleMenu = () => {
    ctx.font = '30px sans-serif';
    ctx.fillText('Choose Action', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, 350);

    ctx.fillText('Attack', MOVESBG_WIDTH - 250, BATTLEBG_HEIGHT + 70, 150);
    ctx.fillText('Bag', MOVESBG_WIDTH - 250, BATTLEBG_HEIGHT + 120, 150);

    if (this.battleState === 'option') {
      if (game.menuController.down) {
        this.bagOption = true;
        this.attackOption = false;
        ctx.strokeRect(MOVESBG_WIDTH - 260, BATTLEBG_HEIGHT + 80, 120, 50);
      }

      if (game.menuController.up) {
        this.attackOption = true;
        this.bagOption = false;
        ctx.strokeRect(MOVESBG_WIDTH - 260, BATTLEBG_HEIGHT + 40, 120, 50);
      }
    }
  };

  chooseBattleOption = () => {
    if (this.attackOption === true) {
      ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 250, 100);
      ctx.fillText(this.playerPokemon[this.playerPokemonIndex].movesdata[0], 50, BATTLEBG_HEIGHT + 70, 150);
      ctx.fillText(this.playerPokemon[this.playerPokemonIndex].movesdata[1], 300, BATTLEBG_HEIGHT + 70, 150);
      ctx.fillText(this.playerPokemon[this.playerPokemonIndex].movesdata[2], 50, BATTLEBG_HEIGHT + 140, 150);
      ctx.fillText(this.playerPokemon[this.playerPokemonIndex].movesdata[3], 300, BATTLEBG_HEIGHT + 140, 150);
    }

    if (this.bagOption === true) {
      ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 250, 100);
      ctx.fillText('Full Restore', 50, BATTLEBG_HEIGHT + 70, 150);
      ctx.fillText('Hyper Potion', 300, BATTLEBG_HEIGHT + 70, 150);
    }

    if (this.battleState === 'option' && this.count < 1) {
      if (game.menuController.enter) {
        if (this.attackOption === true) {
          this.battleState = 'attack';
          game.menuController.down = false;
          game.menuController.up = false;
          this.count++;
        }

        if (this.bagOption === true) {
          this.battleState = 'bag';
          game.menuController.down = false;
          game.menuController.up = false;
          this.count++;
        }
      }
    }

    if (game.menuController.esc) {
      this.battleState = 'option';
      this.attackInitialState = true;
      this.count = 0;
      this.movesHighlightX = 40;
      this.movesHighlightY = BATTLEBG_HEIGHT + 40;
    }

    if (this.battleState === 'attack') {
      if (this.attackInitialState === true) {
        ctx.strokeRect(this.movesHighlightX, this.movesHighlightY, 200, 40);
      }

      this.selectAttack();
    }

    if (this.battleState === 'bag') {
      ctx.strokeRect(this.movesHighlightX, this.movesHighlightY, 200, 40);
    }

    this.selectBagItem();
  };

  selectBagItem = () => {};

  selectAttack = () => {
    if (game.menuController.down) {
      this.attackInitialState = false;
      if (this.countA < 1 && this.movesHighlightY <= BATTLEBG_HEIGHT + 40) {
        this.audioLoader.play('beep');
        this.movesHighlightY += 70;
        this.countA++;
        this.countB = 0;
        this.countC = 0;
        this.countD = 0;
      }
      ctx.strokeRect(this.movesHighlightX, this.movesHighlightY, 200, 40);
    }

    if (game.menuController.up) {
      this.attackInitialState = false;
      if (this.countB < 1 && this.movesHighlightY >= BATTLEBG_HEIGHT + 50) {
        this.audioLoader.play('beep');
        this.movesHighlightY -= 70;
        this.countB++;
        this.countA = 0;
        this.countC = 0;
        this.countD = 0;
      }
      ctx.strokeRect(this.movesHighlightX, this.movesHighlightY, 200, 40);
    }

    if (game.menuController.left) {
      this.attackInitialState = false;
      if (this.countC < 1 && this.movesHighlightX >= 50) {
        this.audioLoader.play('beep');
        this.movesHighlightX -= 250;
        this.countC++;
        this.countB = 0;
        this.countA = 0;
        this.countD = 0;
      }
      ctx.strokeRect(this.movesHighlightX, this.movesHighlightY, 200, 40);
    }

    if (game.menuController.right) {
      this.attackInitialState = false;
      if (this.countD < 1 && this.movesHighlightX <= 250) {
        this.audioLoader.play('beep');
        this.movesHighlightX += 250;
        this.countD++;
        this.countB = 0;
        this.countC = 0;
        this.countA = 0;
      }
      ctx.strokeRect(this.movesHighlightX, this.movesHighlightY, 200, 40);
    }
    this.useAttack();
  };

  useAttack = () => {
    if (this.playerTurn) {
      if (this.battleState === 'attack') {
        if (game.menuController.s) {
          let attack = this.getAttack();
          let pkMove;
          let damageMultiplier;
          switch (attack) {
            case 'MOVE_A':
              pkMove = this.playerPokemon[this.playerPokemonIndex].movesdata[0];
              damageMultiplier = this.playerPokemon[this.playerPokemonIndex].getPlayerEffectiveness(pkMove, this.opponent.randomPokemon[this.opponentPokemonIndex]);
              this.enemyHitPoints = this.enemyHitPoints - MoveData[pkMove].damage * damageMultiplier;
              this.enemyHealthBar = (this.enemyHitPoints / PokemonData[this.opponent.randomPokemon[this.opponentPokemonIndex]].hitPoints) * 165;
              this.animation.displayAnimation(pkMove);
              this.playerTurn = false;
              this.displayPlayerAttack(pkMove, damageMultiplier);
              break;
            case 'MOVE_B':
              pkMove = this.playerPokemon[this.playerPokemonIndex].movesdata[1];
              damageMultiplier = this.playerPokemon[this.playerPokemonIndex].getPlayerEffectiveness(pkMove, this.opponent.randomPokemon[this.opponentPokemonIndex]);
              this.enemyHitPoints = this.enemyHitPoints - MoveData[pkMove].damage * damageMultiplier;
              this.enemyHealthBar = (this.enemyHitPoints / PokemonData[this.opponent.randomPokemon[this.opponentPokemonIndex]].hitPoints) * 165;
              this.animation.displayAnimation(pkMove);
              this.playerTurn = false;
              this.displayPlayerAttack(pkMove, damageMultiplier);
              break;
            case 'MOVE_C':
              pkMove = this.playerPokemon[this.playerPokemonIndex].movesdata[2];
              damageMultiplier = this.playerPokemon[this.playerPokemonIndex].getPlayerEffectiveness(pkMove, this.opponent.randomPokemon[this.opponentPokemonIndex]);
              this.enemyHitPoints = this.enemyHitPoints - MoveData[pkMove].damage * damageMultiplier;
              this.enemyHealthBar = (this.enemyHitPoints / PokemonData[this.opponent.randomPokemon[this.opponentPokemonIndex]].hitPoints) * 165;
              this.animation.displayAnimation(pkMove);
              this.playerTurn = false;
              this.displayPlayerAttack(pkMove, damageMultiplier);
              break;
            case 'MOVE_D':
              pkMove = this.playerPokemon[this.playerPokemonIndex].movesdata[3];
              damageMultiplier = this.playerPokemon[this.playerPokemonIndex].getPlayerEffectiveness(pkMove, this.opponent.randomPokemon[this.opponentPokemonIndex]);
              this.enemyHitPoints = this.enemyHitPoints - MoveData[pkMove].damage * damageMultiplier;
              this.enemyHealthBar = (this.enemyHitPoints / PokemonData[this.opponent.randomPokemon[this.opponentPokemonIndex]].hitPoints) * 165;
              this.animation.displayAnimation(pkMove);
              this.playerTurn = false;
              this.displayPlayerAttack(pkMove, damageMultiplier);
              break;
          }
        }
      }
    }
  };

  getAttack = () => {
    if (this.movesHighlightX === 40 && this.movesHighlightY === BATTLEBG_HEIGHT + 40) {
      return 'MOVE_A';
    }
    if (this.movesHighlightX === 40 + 250 && this.movesHighlightY === BATTLEBG_HEIGHT + 40) {
      return 'MOVE_B';
    }
    if (this.movesHighlightX === 40 && this.movesHighlightY === BATTLEBG_HEIGHT + 40 + 70) {
      return 'MOVE_C';
    }
    if (this.movesHighlightX === 40 + 250 && this.movesHighlightY === BATTLEBG_HEIGHT + 40 + 70) {
      return 'MOVE_D';
    }
  };

  displayPlayerAttack = (pkMove, damageMultiplier) => {
    window.cancelAnimationFrame(game.gameEngine);
    game.animationState = true;
    ctx.drawImage(this.imageLoader.images.movesBG, 0, 0, 160, 48, 0, BATTLEBG_HEIGHT, MOVESBG_WIDTH, MOVESBG_HEIGHT);
    ctx.font = '28px sans-serif';
    ctx.fillText(this.playerPokemon[this.playerPokemonIndex].name + ' used ' + pkMove, PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
    setTimeout(() => {
      if (this.victor === '') {
        if (damageMultiplier === 2) {
          this.audioLoader.play('supereffectivehit');
          ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 450, 100);
          ctx.font = '28px sans-serif';
          ctx.fillText('It is very Effective', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
        } else if (damageMultiplier === 0.5) {
          this.audioLoader.play('lesseffectivehit');
          ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 450, 100);
          ctx.font = '28px sans-serif';
          ctx.fillText('It is not very Effective', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
        } else {
          this.audioLoader.play('normalhit');
          ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 450, 100);
          ctx.font = '28px sans-serif';
          ctx.fillText('It hits ' + this.opponent.randomPokemon[this.opponentPokemonIndex], PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
        }
      }
      if (this.enemyHitPoints <= 0) {
        this.victor = 'player';
        game.runGame();
        this.displayVictor();
      }
      if (this.victor === '') {
        setTimeout(() => {
          game.runGame();
          this.getOpponentAttack();
        }, 1500);
      }
    }, 1500);
  };

  getOpponentAttack = () => {
    if (!this.playerTurn) {
      let randomPokemonAttack = PokemonData[this.opponent.randomPokemon[this.opponentPokemonIndex]].moves[Math.floor(Math.random() * PokemonData.Charizard.moves.length)];
      this.useOpponenetAttack(randomPokemonAttack);
      this.playerTurn = true;
    }
  };

  displayOpponentAttack = (randomPokemonAttack, opponentDamageMultiplier) => {
    window.cancelAnimationFrame(game.gameEngine);
    ctx.drawImage(this.imageLoader.images.movesBG, 0, 0, 160, 48, 0, BATTLEBG_HEIGHT, MOVESBG_WIDTH, MOVESBG_HEIGHT);
    ctx.font = '28px sans-serif';
    ctx.fillText(PokemonData[this.opponent.randomPokemon[this.opponentPokemonIndex]].name + ' used ' + randomPokemonAttack, PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
    setTimeout(() => {
      if (this.victor === '') {
        if (opponentDamageMultiplier === 2) {
          this.audioLoader.play('supereffectivehit');
          ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 450, 100);
          ctx.font = '28px sans-serif';
          ctx.fillText('It is very Effective', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
        } else if (opponentDamageMultiplier === 0.5) {
          this.audioLoader.play('lesseffectivehit');
          ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 450, 100);
          ctx.font = '28px sans-serif';
          ctx.fillText('It is not very Effective', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
        } else {
          this.audioLoader.play('normalhit');
          ctx.clearRect(PLAYER_X, BATTLEBG_HEIGHT + 50, 450, 100);
          ctx.font = '28px sans-serif';
          ctx.fillText('It hits ' + this.playerPokemon[this.playerPokemonIndex].name, PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
        }
      }
      if (this.playerHitPoints <= 0) {
        this.victor = 'enemy';
        game.runGame();
        this.displayVictor();
      }
      if (this.victor === '') {
        setTimeout(() => {
          game.runGame();
        }, 1500);
      }
    }, 1500);
  };

  useOpponenetAttack = randomPokemonAttack => {
    let opponentDamageMultiplier = this.opponent.getOpponentEffectiveness(randomPokemonAttack, this.playerPokemon[this.playerPokemonIndex].type);
    this.playerHitPoints = this.playerHitPoints - MoveData[randomPokemonAttack].damage * opponentDamageMultiplier;
    this.playerHealthBar = (this.playerHitPoints / this.playerPokemon[this.playerPokemonIndex].hitPoints) * 165;
    this.displayOpponentAttack(randomPokemonAttack, opponentDamageMultiplier);
    this.animation.displayOpponentAnimation();
  };

  displayVictor = () => {
    if (this.victor === 'player') {
      cancelAnimationFrame(game.gameEngine);
      ctx.drawImage(this.imageLoader.images.movesBG, 0, 0, 160, 48, 0, BATTLEBG_HEIGHT, MOVESBG_WIDTH, MOVESBG_HEIGHT);
      ctx.font = '28px sans-serif';
      ctx.fillText(this.opponent.randomPokemon[this.opponentPokemonIndex] + ' has fainted', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
      setTimeout(() => {
        if (this.opponentPokemonIndex < TOTAL_OPPONENT_POKEMONS - 1) {
          this.opponentPokemonIndex++;
          this.getOpponentHealthBar();
          this.playerTurn = true;
          game.animationState = false;
          this.victor = '';
          setTimeout(() => {
            game.runGame();
          }, 2000);
        } else {
          wins++;
          game.updateScores();
          this.audioLoader.stop('battle');
          this.audioLoader.play('victory');
          canvas.addEventListener('click', this.playAgain);
          ctx.clearRect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
          ctx.drawImage(this.imageLoader.images.menubg, 0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
          ctx.drawImage(this.imageLoader.images.win, VIEWPORT_WIDTH / 2 - 500 / 2, VIEWPORT_HEIGHT / 2 - 120 / 2, 500, 120);
          ctx.drawImage(this.imageLoader.images.playAgain, PLAY_AGAIN_X, PLAY_AGAIN_Y, PLAY_AGAIN_WIDTH, PLAY_AGAIN_HEIGHT);
        }
      }, 1000);
    }
    if (this.victor === 'enemy') {
      cancelAnimationFrame(game.gameEngine);
      ctx.drawImage(this.imageLoader.images.movesBG, 0, 0, 160, 48, 0, BATTLEBG_HEIGHT, MOVESBG_WIDTH, MOVESBG_HEIGHT);
      ctx.font = '28px sans-serif';
      ctx.fillText(this.playerPokemon[this.playerPokemonIndex].name + ' has fainted', PLAYER_X, BATTLEBG_HEIGHT + MOVESBG_HEIGHT / 2, MOVESBG_WIDTH);
      setTimeout(() => {
        if (this.playerPokemonIndex < TOTAL_PLAYER_POKEMONS - 1) {
          this.playerPokemonIndex++;
          this.getPlayerPokemonBack();
          this.getPlayerHealthBar();
          this.playerTurn = true;
          game.animationState = false;
          this.victor = '';
          setTimeout(() => {
            game.runGame();
          }, 2000);
        } else {
          losses++;
          game.updateScores();
          this.audioLoader.stop('battle');
          canvas.addEventListener('click', this.playAgain);
          ctx.clearRect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
          ctx.drawImage(this.imageLoader.images.menubg, 0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
          ctx.drawImage(this.imageLoader.images.lose, VIEWPORT_WIDTH / 2 - 500 / 2, VIEWPORT_HEIGHT / 2 - 120 / 2, 500, 120);
          ctx.drawImage(this.imageLoader.images.playAgain, PLAY_AGAIN_X, PLAY_AGAIN_Y, PLAY_AGAIN_WIDTH, PLAY_AGAIN_HEIGHT);
        }
      }, 1000);
    }
  };

  playAgain = () => {
    let posX = event.clientX;
    let posY = event.clientY;

    if (posX >= PLAY_AGAIN_X && posX <= PLAY_AGAIN_X + PLAY_AGAIN_WIDTH && posY >= PLAY_AGAIN_Y && posY <= PLAY_AGAIN_Y + PLAY_AGAIN_HEIGHT) {
      game.resetGame();
      canvas.removeEventListener('click', this.playAgain);
    }
  };
}
