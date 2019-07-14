const canvas = document.getElementById('canvasElement');
const ctx = canvas.getContext('2d');

const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const ENTER_KEY = 13;
const ESC_KEY = 27;
const S_KEY = 83;

const TOTAL_PLAYER_POKEMONS = 2;
const TOTAL_OPPONENT_POKEMONS = 2;

const VIEWPORT_WIDTH = 960;
const VIEWPORT_HEIGHT = 600;

const MENU_POKEMON_X = 120;
const MENU_POKEMON_Y = 250;

const BATTLEBG_WIDTH = 960;
const BATTLEBG_HEIGHT = 420;

const MOVESBG_WIDTH = 960;
const MOVESBG_HEIGHT = 180;

const PLAYER_WIDTH = 128 * 2;
const PLAYER_HEIGHT = 128 * 2;

const PLAYER_X = 100;
const PLAYER_Y = BATTLEBG_HEIGHT - PLAYER_HEIGHT;

const OPPONENT_X = BATTLEBG_WIDTH - 128 * 3;
const OPPONENT_Y = 0;

const PLAY_AGAIN_WIDTH = 200;
const PLAY_AGAIN_HEIGHT = 80;
const PLAY_AGAIN_X = VIEWPORT_WIDTH / 2 - 500 / 2 + 200 / 2;
const PLAY_AGAIN_Y = VIEWPORT_HEIGHT - 60 * 2;

let wins = 0;
let losses = 0;
