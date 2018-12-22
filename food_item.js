function preloadFoodItemImg() {
    let bananasImg = loadImage('./assets/image/resized_bananas.png');
    let limeImg = loadImage('./assets/image/resized_lime.png');
    let pizzaImg = loadImage('./assets/image/resized_pizza.png');
    let popcornImg = loadImage('./assets/image/resized_popcorn.png');
    let popsicleImg = loadImage('./assets/image/resized_popsicle.png');
    let summertimeImg = loadImage('./assets/image/resized_summertime.png');

    foodItemImgList.push(bananasImg);
    foodItemImgList.push(limeImg);
    foodItemImgList.push(pizzaImg);
    foodItemImgList.push(popcornImg);
    foodItemImgList.push(popsicleImg);
    foodItemImgList.push(summertimeImg);
}

function setupFoodItems() {
    foodItems = new Group();

    for (let i = 0; i < foodItemsCount; i++) {
        let food = createSprite(random(250, width-20), random(0, height-20), 50, 50);
        food.addImage(foodItemImgList[i]);
        foodItems.add(food);
    }
}

function drawFoodItems() {
    foodItems.collide(walls);
    foodItems.displace(foodItems);
    foodItems.collide(safeZones, savedFoodItem);
}
