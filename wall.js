function preloadWallImg() {
    wallImg = loadImage('./assets/image/original_box.png');
}

function setupWalls() {
    walls = new Group();

    //Middle Walls
    for (let i = 0; i < 10; i++) {
        let middleWall = createSprite(
            random(125, width-125), (height/5)*i,
            random(10, 100), random(10, 100));
        middleWall.shapeColor = color('#6e5018');

        // middleWall.addImage(wallImg);

        walls.add(middleWall);
    }

    //Surrounding Walls
    let bottomWall = createSprite(
        width, height,
        width*2, 50);
    bottomWall.shapeColor = color('#353836');
    walls.add(bottomWall);

    let upperWall = createSprite(
        width, 0,
        width*2, 50);
    upperWall.shapeColor = color('#353836');
    walls.add(upperWall);

    let leftWall = createSprite(
        0, height,
        50, height*2);
    leftWall.shapeColor = color('#353836');
    walls.add(leftWall);

    let rightWall = createSprite(
        width, height,
        50, height);
    rightWall.shapeColor = color('#353836');
    walls.add(rightWall);
}
