let canvas;

let score = 0;
let winCount = 3;
let isGameOver = false;

let backgroundSong;

let wallImg;

let player;
let playerImg;

const zombieCount = 5;
let zombieImgList = [];
let zombies;

let walls;

let safeZones;
let safeZoneImg;

const foodItemsCount = 6;
let foodItemImgList = [];
let foodItems;

function preload() {
    preloadBackgroundSong();
    preloadWallImg();
    preloadFoodItemImg();
    preloadPlayerImg();
    preloadZombieImg();
    preloadSafeZone();
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

