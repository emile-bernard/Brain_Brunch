let canvas;

let backgroundSong;

let playerImg;
let player;

const zombieCount = 5;
let zombieImgList = [];
let zombies;

let walls;

const foodItemsCount = 6;
let foodItemImgList = [];
let foodItems;

function preload() {
    preloadBackgroundSong();
    preloadWallImg();
    preloadFoodItemImg();
    preloadPlayerImg();
    preloadZombieImg();
}

function setup() {
    canvas = createCanvas(1220, 580);

    setupBackgroundSong();
    setupFoodItems();
    setupWalls();
    setupPlayer();
    setupZombies();
}

function draw() {
    drawBackground();

    drawFoodItems();
    drawPlayer();
    drawZombies();

    drawSprites();
}

