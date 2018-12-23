function drawScore() {
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);

    if(isGameOver) {
        fill(255);
        noStroke();
        textSize(72);
        textAlign(CENTER, CENTER);
        text("Game Over", width/2, height/2);
    } else {
        if (foodItems.length > winCount) {
            text(score, width/2, height/2);
        }
        else {
            text("You Won!", width/2, height/2);
        }
    }
}

function savedFoodItem(foodItem) {
    foodItem.remove();
    score += 1;
}

function gameOver(zombie) {
    isGameOver = true;
}
