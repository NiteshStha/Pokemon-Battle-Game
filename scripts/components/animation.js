class Animation {
  constructor(imageLoader, battle) {
    this.imageLoader = imageLoader;
    this.battle = battle;
  }

  //Display the Player Pokemon Attack Animation
  displayAnimation = pkMove => {
    pkMove = pkMove;
    let animationKey = pkMove.toLowerCase();
    let sx = AnimationData[pkMove].sx;
    let sy = AnimationData[pkMove].sy;
    let moveWidth = AnimationData[pkMove].sWidth;
    let moveHeight = AnimationData[pkMove].sHeight;
    let displayWidth = AnimationData[pkMove].cWidth;
    let displayHeight = AnimationData[pkMove].cHeight;
    let longAttack = AnimationData[pkMove].longAttack;
    let x = LONG_ATTACK_POSITION_X;
    let y = LONG_ATTACK_POSITION_Y;

    if (longAttack) {
      let animation = setInterval(() => {
        ctx.drawImage(this.imageLoader.images[animationKey], sx, sy, moveWidth, moveHeight, x, y, displayWidth, displayHeight);
        sx = sx + ATTACK_SINGLE_SPRITE_WIDTH;
        x += LONG_ATTACK_POSITION_X_INCREASE;
        y -= LONG_ATTACK_POSITION_Y_DECREASE;
        if (sx == ATTACK_SPRITE_WIDTH) {
          setTimeout(() => {
            this.battle.drawBattlePokemon(this.imageLoader);
          }, ATTACK_ANIMATION_DELAY);
          clearInterval(animation);
        }
      }, ATTACK_ANIMATION_SPEED);
    } else {
      let animation = setInterval(() => {
        this.battle.drawBattlePokemon(this.imageLoader);
        ctx.drawImage(this.imageLoader.images[animationKey], sx, sy, moveWidth, moveHeight, OPPONENT_X + 20, OPPONENT_Y + 20, displayWidth, displayHeight);
        sx = sx + ATTACK_SINGLE_SPRITE_WIDTH;
        if (sx == ATTACK_SPRITE_WIDTH) {
          setTimeout(() => {
            this.battle.drawBattlePokemon(this.imageLoader);
          }, ATTACK_ANIMATION_DELAY);
          clearInterval(animation);
        }
      }, ATTACK_ANIMATION_SPEED);
    }
  };

  //Display the Opponent Pokemon Attack Animation
  displayOpponentAnimation = () => {
    let sx = AnimationData['Enemy Attack'].sx;
    let sy = AnimationData['Enemy Attack'].sy;
    let moveWidth = AnimationData['Enemy Attack'].sWidth;
    let moveHeight = AnimationData['Enemy Attack'].sHeight;
    let displayWidth = AnimationData['Enemy Attack'].cWidth;
    let displayHeight = AnimationData['Enemy Attack'].cHeight;

    let animation = setInterval(() => {
      this.battle.drawBattlePokemon(this.imageLoader);
      ctx.drawImage(this.imageLoader.images['enemy attack'], sx, sy, moveWidth, moveHeight, PLAYER_X + 30, PLAYER_Y + 30, displayWidth, displayHeight);
      sx = sx + ATTACK_SINGLE_SPRITE_WIDTH;
      if (sx == ATTACK_SPRITE_WIDTH) {
        setTimeout(() => {
          this.battle.drawBattlePokemon(this.imageLoader);
          game.animationState = false;
        }, ATTACK_ANIMATION_DELAY);
        clearInterval(animation);
      }
    }, ATTACK_ANIMATION_SPEED);
  };
}
