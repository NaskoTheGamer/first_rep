let posoka1X = 0, posoka1Y = 0, posoka2X = 60, posoka2Y = 0, posoka3X = 120, posoka3Y = 0;
function init() {
    
}
function update() {
    posoka1X = posoka3X - 120;
    posoka2X = posoka3X - 60;
    if (posoka3Y == posoka2Y - 60) {
        posoka2Y = posoka3Y - 60;
        posoka2X = posoka3X;
    }
    if (posoka3Y == posoka2Y + 60) {
        
    }
}
function draw() {
    drawImage(ballOrTree, posoka1X, posoka1Y, 50, 50);
    drawImage(ballOrTree, posoka2X, posoka2Y, 50, 50);
    drawImage(ballOrTree, posoka3X, posoka3Y, 50, 50);
}
function mouseup() {
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    console.log("Pressed", key);
    if (key == 40) {
        console.log("Snake is on:", posoka3X, posoka3Y);
        posoka3Y = posoka3Y + 10;
    }
    if (key == 38) {
        console.log("Snake is on:", posoka3X, posoka3Y);
        posoka3Y = posoka3Y - 10;
    }
    if (key == 37) {
        posoka3X = posoka3X - 10;
    }
    if (key == 39) {
        posoka3X = posoka3X + 10;
    }
}