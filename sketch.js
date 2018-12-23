let canvas;

let score = 0;

let backgroundSong;

let wallImg;

let playerImg;
let player;

const zombieCount = 5;
let zombieImgList = [];
let zombies;

let walls;
let safeZones;

const foodItemsCount = 6;
let foodItemImgList = [];
let foodItems;

let winCount = 3;
let isGameOver = false;

function preload() {
    preloadBackgroundSong();
    preloadWallImg();
    preloadFoodItemImg();
    preloadPlayerImg();
    preloadZombieImg();
}

function setup() {
    canvas = createCanvas(1220, 580);

    registerButtons();

    setupBackgroundSong();
    setupFoodItems();
    setupWalls();
    setupSafeZone();
    setupPlayer();
    setupZombies();
}

function draw() {
    drawBackground();

    drawFoodItems();
    drawPlayer();
    drawZombies();
    drawScore();

    drawSprites();
}

