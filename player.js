function preloadPlayerImg() {
    playerImg = loadImage('./assets/image/resized_donut.png');
}

function setupPlayer() {
    player = createSprite(50, 50);
    player.addImage(playerImg);
}

function drawPlayer() {
    player.collide(walls);
    player.collide(safeZones);
    player.collide(zombies);
    player.displace(foodItems);
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        player.setSpeed(2.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
        player.setSpeed(2.5, 90);
    }
    else if (keyCode == LEFT_ARROW) {
        player.setSpeed(2.5, 180);
    }
    else if (keyCode == UP_ARROW) {
        player.setSpeed(2.5, 270);
    }
    else if (key == ' ') {
        player.setSpeed(0, 0);
    }
    return false;
}