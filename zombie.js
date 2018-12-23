function preloadZombieImg() {
    let zombieImg = loadImage('./assets/image/resized_zombie.png');

    for(let i = 0; i < zombieCount; i++) {
        zombieImgList.push(zombieImg);
    }
}

function setupZombies() {
    zombies = new Group();

    for (let i = 0; i < zombieCount; i++) {
        let zombie = createSprite(random(width), random(height));
        zombie.addImage(zombieImgList[i]);
        zombie.friction = random(0.3, 0.5);
        zombie.rotateToDirection = true;
        zombie.velocity.x = random(0, 0.5);
        zombie.velocity.y = random(0, 0.5);
        zombies.add(zombie);
    }
}

function drawZombies() {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].attractionPoint(0.2, player.position.x, player.position.y);
    }

    zombies.collide(walls);
    zombies.displace(foodItems);
    zombies.collide(player, gameOver);
}
