//Canvas
const canvas = document.getElementById('canvasElement');
const ctx = canvas.getContext('2d');
//Canvas

//Player and Opponent Pokemon Numbers
const TOTAL_PLAYER_POKEMONS = 2;
const TOTAL_OPPONENT_POKEMONS = 2;

//Display the text stating the total number of Pokemons to be selected
document.getElementById('totalPokemons').innerHTML = TOTAL_PLAYER_POKEMONS;

//The Keyboard Controls Key Codes
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const ENTER_KEY = 13;
const ESC_KEY = 27;
const S_KEY = 83;
//The Keyboard Controls Key Codes

//Total Wins and Losses Counter
let wins = 0;
let losses = 0;

//Canvas Width and Height
const VIEWPORT_WIDTH = 960;
const VIEWPORT_HEIGHT = 600;

//Menu Pokemon Positions
const MENU_POKEMON_X = 120;
const MENU_POKEMON_Y = 250;

//Battle Background Width and Height
const BATTLEBG_WIDTH = 960;
const BATTLEBG_HEIGHT = 420;

//Moves Selctions Background Width and Height
const MOVESBG_WIDTH = 960;
const MOVESBG_HEIGHT = 180;

//Player Pokemon Width and Height
const PLAYER_WIDTH = 128 * 2;
const PLAYER_HEIGHT = 128 * 2;

//Player Pokemon Positions
const PLAYER_X = 100;
const PLAYER_Y = BATTLEBG_HEIGHT - PLAYER_HEIGHT;

//Opponent Player Positions
const OPPONENT_X = BATTLEBG_WIDTH - 128 * 3;
const OPPONENT_Y = 0;

//Play Again POsitions
const PLAY_AGAIN_WIDTH = 200;
const PLAY_AGAIN_HEIGHT = 80;
const PLAY_AGAIN_X = VIEWPORT_WIDTH / 2 - 500 / 2 + 200 / 2;
const PLAY_AGAIN_Y = VIEWPORT_HEIGHT - 60 * 2;

//Moves Hightlight Positions
const MOVE_HIGHLIGHT_X = 40;
const MOVE_HIGHLIGHT_Y = BATTLEBG_HEIGHT + 40;

//Player Pokemon Status Positions
const PLAYER_HEALTH_BAR_LINE_X = BATTLEBG_WIDTH - 210;
const PLAYER_HEALTH_BAR_LINE_Y = BATTLEBG_HEIGHT - 100;
const PLAYER_HEALTH_BAR_LINE_HEIGHT = 50;

const PLAYER_HEALTH_BOX_X = BATTLEBG_WIDTH - 350;
const PLAYER_HEALTH_BOX_Y = BATTLEBG_HEIGHT - 120;

const PLAYER_POKEMON_NAME_X = BATTLEBG_WIDTH - 320;
const PLAYER_POKEMON_NAME_Y = BATTLEBG_HEIGHT - 80;

const PLAYER_POKEMON_LEVEL_X = BATTLEBG_WIDTH - 120;
const PLAYER_POKEMON_LEVEL_Y = BATTLEBG_HEIGHT - 80;

//Enemy Pokemon Status Positions
const ENEMY_HEALTH_BAR_LINE_X = 180;
const ENEMY_HEALTH_BAR_LINE_Y = 50;
const ENEMY_HEALTH_BAR_LINE_HEIGHT = 50;

const ENEMY_HEALTH_BOX_X = 40;
const ENEMY_HEALTH_BOX_Y = 20;

const ENEMY_POKEMON_NAME_X = 70;
const ENEMY_POKEMON_NAME_Y = 60;

const ENEMY_POKEMON_LEVEL_X = 270;
const ENEMY_POKEMON_LEVEL_Y = 60;

//For Both Status
const HEALTH_BOX_WIDTH = 350;
const HEALTH_BOX_HEIGHT = 100;

const POKEMON_NAME_WIDTH = 150;
const POKEMON_LEVEL_WIDTH = 150;

//Attack Option Position
const ATTACK_OPTION_POSITION_X = MOVESBG_WIDTH - 250;
const ATTACK_OPTION_POSITION_Y = BATTLEBG_HEIGHT + 70;

//Bag Option Position
const BAG_OPTION_POSITION_X = MOVESBG_WIDTH - 250;
const BAG_OPTION_POSITION_Y = BATTLEBG_HEIGHT + 120;

const OPTION_WIDTH = 150;

const OPTION_DOWN_POSITION_X = MOVESBG_WIDTH - 260;
const OPTION_DOWN_POSITION_Y = BATTLEBG_HEIGHT + 80;

const OPTION_UP_POSITION_X = MOVESBG_WIDTH - 260;
const OPTION_UP_POSITION_Y = BATTLEBG_HEIGHT + 40;

const OPTION_HIGHLIGHT_WIDTH = 120;
const OPTION_HIGHLIGHT_HEIGHT = 50;

// Animation Variables
const ATTACK_SPRITE_WIDTH = 960;
const ATTACK_SINGLE_SPRITE_WIDTH = 192;
const LONG_ATTACK_POSITION_X = 350;
const LONG_ATTACK_POSITION_Y = 200;
const LONG_ATTACK_POSITION_X_INCREASE = 50;
const LONG_ATTACK_POSITION_Y_DECREASE = 20;
const ATTACK_ANIMATION_SPEED = 100;
const ATTACK_ANIMATION_DELAY = 300;
// Animation Variables

//Battle Dialogue Delay

const BATTLE_DIALOGUE_DELAY = 1500;
