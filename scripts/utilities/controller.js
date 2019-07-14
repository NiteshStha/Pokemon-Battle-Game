class Controller {
  constructor() {
    this.left = false;
    this.up = false;
    this.right = false;
    this.down = false;
    this.enter = false;
    this.esc = false;
    this.s = false;
    window.addEventListener('keydown', () => this.handleKeyDown(event));
    window.addEventListener('keyup', () => this.handleKeyUp(event));
  }

  handleKeyDown = event => {
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.left = true;
        this.up = false;
        this.right = false;
        this.down = false;
        break;

      case UP_ARROW:
        this.up = true;
        this.down = false;
        this.left = false;
        this.right = false;
        break;

      case RIGHT_ARROW:
        this.right = true;
        this.left = false;
        this.up = false;
        this.down = false;
        break;

      case DOWN_ARROW:
        this.down = true;
        this.up = false;
        this.left = false;
        this.right = false;
        break;

      case ENTER_KEY:
        this.enter = true;
        break;

      case ESC_KEY:
        this.esc = true;
        break;

      case S_KEY:
        this.s = true;
        break;
    }
  };

  handleKeyUp(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.enter = false;
        break;

      case ESC_KEY:
        this.esc = false;
        break;

      case S_KEY:
        this.s = false;
        break;
    }
    this.keyDownDuration = 0;
  }
}
