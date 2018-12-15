function preloadFoodItemImg() {
    let bananasImg = loadImage('./assets/resized_bananas.png');
    let limeImg = loadImage('./assets/resized_lime.png');
    let pizzaImg = loadImage('./assets/resized_pizza.png');
    let popcornImg = loadImage('./assets/resized_popcorn.png');
    let popsicleImg = loadImage('./assets/resized_popsicle.png');
    let summertimeImg = loadImage('./assets/resized_summertime.png');

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
        let food = createSprite(random(width), random(height), 50, 50);
        food.addImage(foodItemImgList[i]);
        foodItems.add(food);
    }
}

function drawFoodItems() {
    foodItems.collide(walls);
    foodItems.displace(foodItems);
}
