function preloadZombieImg() {
    let zombieImg = loadImage('./assets/resized_zombie.png');

    for(let i = 0; i < zombieCount; i++) {
        zombieImgList.push(zombieImg);
    }
}

function setupZombies() {
    zombies = new Group();

    for (let i = 0; i < zombieCount; i++) {
        let zombie = createSprite(random(width), random(height), 50, 80);
        zombie.addImage(zombieImgList[i]);
        zombie.friction = random(0.97, 0.99);
        zombie.maxSpeed = random(1, 4);
        zombie.rotateToDirection = true;
        zombies.add(zombie);
    }
}

function drawZombies() {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].attractionPoint(0.2, mouseX, mouseY);
    }

    zombies.collide(walls);
    zombies.displace(foodItems);
}
