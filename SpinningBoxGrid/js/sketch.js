let boxes = [];
const boxSize = 40;
const spacing = 70;


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    const cols = floor(width / spacing);
    const rows = floor(height / spacing);
    const startX = -cols * spacing / 2 + spacing / 2;
    const startZ = -rows * spacing / 2 + spacing / 2;

    for (let x = 0; x < cols; x++) {
        for (let z = 0; z < rows; z++) {
            boxes.push({
                x: startX + x * spacing,
                y: startZ + z * spacing,
                z: 0,
                rotX: 0,
                rotY: 0,
                // Different rotation speeds for each box
                rotSpeedX: random(0.01, 0.02),
                rotSpeedY: random(0.01, 0.02)
            })

        }
    }
}

function draw() {
    background(250, 180, 200);


    // Add some ambient light
    // ambientLight(150);
    orbitControl();

    // Update and draw each box with its own rotation
    for (let b of boxes) {
        // Update rotation angles
        b.rotX += b.rotSpeedX;
        b.rotY += b.rotSpeedY;

        push(); // Save the current transformation state
        translate(b.x, b.y, b.z);
        rotateX(b.rotX);
        rotateY(b.rotY);

        // Draw box
        strokeWeight(2);
        stroke(32, 8, 64);
        // noFill();
        box(boxSize); // This line could be causing issues if 'box' variable name conflicts
        pop(); // Restore previous transformation state
    }
}