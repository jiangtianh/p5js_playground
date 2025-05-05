let blocks = [];
let size = 10;
let offset = 4;
let cols; let rows;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);

    cols = width / size;
    rows = height / size;

    for (let i = 0; i < cols; i++) {
        blocks.push([]);
        for (let j = 0; j < rows; j++) {
            blocks[i].push(new Block(i * size, j * size));
        }
    }

}

function draw() {
    background(0);
    frameRate(60);
    for (let i = 0; i < blocks.length; i++) {
        for (let j = 0; j < blocks[i].length; j++) {
            blocks[i][j].move();
            blocks[i][j].display();

        }
    }

}