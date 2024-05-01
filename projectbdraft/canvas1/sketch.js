

let colorArray = ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white'];

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("p5-canvas-container");
  background("white");
  for (let i = 0; i < colorArray.length; i++) {
    fill(colorArray[i]);
    circle(30 + 30 * i, 30, 20);
  }
}

function draw() {
}

function mouseClicked() {
  // Check if mouse clicked on any color circle
  for (let i = 0; i < colorArray.length; i++) {
    if (dist(mouseX, mouseY, 30 + 30 * i, 30) < 10) {
      selectedColor = colorArray[i];
      break; // No need to check further
    }
  }
}

function mouseDragged() {
  stroke(selectedColor);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed() {
  // Reset sketch when spacebar is pressed
  if (keyCode === 32) {
    clear();
    for (let i = 0; i < colorArray.length; i++) {
      fill(colorArray[i]);
      circle(30 + 30 * i, 30, 20);
    }
  }
}

