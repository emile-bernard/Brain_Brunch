function drawScore() {
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);

    let winCount = 3;
    if (foodItems.length > winCount) {
        text(score, width/2, height/2);
    }
    else {
        text("you win!", width/2, height/2);
    }
}

function savedFoodItem(foodItem, safeZone) {
    foodItem.remove();
    score += 1;
}
