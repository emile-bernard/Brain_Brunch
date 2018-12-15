function preloadPlayerImg() {
    playerImg = loadImage('./assets/resized_donut.png');
}

function setupPlayer() {
    player = createSprite(50, 50);
    player.addImage(playerImg);
}

function drawPlayer() {
    player.velocity.x = (mouseX-player.position.x)*0.1;
    player.velocity.y = (mouseY-player.position.y)*0.1;

    player.collide(walls);
    player.collide(zombies);
    player.displace(foodItems);
}
