function preloadSafeZone() {
    safeZoneImg = loadImage('./assets/image/resized_bus.png');
}

function setupSafeZone() {
    //Safe zone
    safeZones = new Group();

    let safeZone = createSprite(
        width, height/2-130,
        50, height/2-20);
    safeZone.shapeColor = color('#3ecc57');
    safeZone.addImage(safeZoneImg);
    safeZones.add(safeZone);
}
