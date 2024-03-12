let x;
let y;
let x1;
let y1;
let s = 50;
let angle = 0;
let x2 = [];
let y2 = [];
let s1 = [];
let n = 1;
let speedX = [];
let speedY = [];
let drawingFinished = false; 
let isBlack = false;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  colorMode(HSB, 100);
  resetSketch();
}

function resetSketch() {
  x = width / 2;
  y = 0;
  x1 = width / 2;
  y1 = random(0, height);
  background('#19088B');
  for (let i = 0; i < n; i++) {
    x2[i] = random(width);
    y2[i] = random(height);
    s1[i] = random(80, 100);
    speedX[i] = random(0.001, 0.01);
    speedY[i] = random(0.001, 0.01);
  }
  drawingFinished = false;
}

function draw() {
  if (!drawingFinished) {
  noFill();
  fill('black');
  x1 = x1 + random(-frameCount * 1, frameCount * 1);
  y1 = y1 + random(-frameCount * 1, frameCount * 1);
  stroke(random(100), 50, 100);
  noFill();
  circle(x1, y1, random(1, 100));

  x1 = x1 + random(-frameCount * 0.01, frameCount * 0.01);
  y1 = y1 + random(-frameCount * 0.01, frameCount * 0.01);
  stroke(random(100), 50, 100);
  noFill();
  circle(x1 + 200, y1 + 200, random(1, 40));

  translate(0, 250);
  for (let i = 0; i < width; i += s) {
    for (let j = 0; j < height; j += s) {
      fill('white');
      rect(i, j, s, s);
    }
  }

  //black squares
  push();
  translate(width / 2, height / 3);
   if (isBlack) {
  fill('black');
  } else 
  fill('green');
  rotate(angle);
  rect(0, 0, 30, 30);
  pop();

  push();
  translate(width / 6, height / 10);
  if (isBlack) {
    fill('black');
  } else 
  fill('purple');
  rotate(angle);
  rect(0, 0, 30, 30);
  pop();

  push();
  translate(width / 2, height / 6);
  rotate(angle);
    if (isBlack) {
    fill('black');
  } else 
  fill('orange');
  rect(0, 0, 50, 50);
  pop();

  push();
  translate(width / 4, height / 4);
  rotate(angle);
  rectMode(CENTER);
  if (isBlack) {
    fill('black');
  } else {
    fill('red');
  }
  rect(0, 0, 100, 100);
  angle += 0.05;
  pop();

  for (let i = 0; i < n; i++) {
    drawDoodlebop(x2[i], y2[i], s1[i]);
  }
  move();
}
}
function drawDoodlebop(x2, y2, s1) {
  let x = map(sin(frameCount * 0.1), -1, 1, 0, 200);
  let y = map(cos(frameCount * 0.1), -1, 1, 0, 200);
  fill('lightblue');
  push();
  translate(x2 - 200, y2 - 100);
  circle(0, 0, s1);
  stroke('black');
  arc(s1 * 0.02, s1 * 0.2, 18, 18, 0, PI);
  fill("white");
  circle(s1 * 0.02, s1 * -0.095, 50);
  fill("black");
  circle(s1 * 0.02, s1 * -0.05, 40);
  fill("white");
  circle(s1 * 0.02, s1 * -0.1, 20);
  fill("white");
  circle(s1 * 0.02, s1 * 0.1, 10);
  fill("black");
  //line(s1*0.5, s1*0.05, 30, 20, 30, 30);
  fill("pink");
  noStroke();
  ellipse(s1 * -0.3, s1 * 0.15, 10, 7);
  fill("pink");
  noStroke();
  ellipse(s1 * 0.3, s1 * 0.15, 10, 7);
  fill('lightblue');
  ellipse(s1 * 0.09, s1 * 0.5, 10, 20);
  fill('lightblue');
  ellipse(s1 * 0.03, s1 * 0.5, 10, 20);
  pop();
}


function move() {
  for (let i = 0; i < n; i++) {
    if (mouseIsPressed) {
      x2[i] = mouseX + 200; // Adjusted for translation
      y2[i] = mouseY - 150; // Adjusted for translation
    } else {
      x2[i] = width * noise(frameCount * speedX[i]);
      y2[i] = height * noise(frameCount * speedY[i]);
    }
  }
}

function mouseClicked() {
  // Check for collisions with black squares
  for (let i = 0; i < width; i += s) {
    for (let j = 0; j < height; j += s) {
      if (mouseX > i && mouseX < i + s && mouseY > j && mouseY < j + s) {
        // Toggle isBlack variable for black square
        if (isBlack) {
          isBlack = false;
          // Restore original color of Doodle Bop
          fill('lightblue');
        } else {
          isBlack = true;
          // Change Doodle Bop color to grey
          fill(150); // Grey color
        }
        // Draw Doodle Bop with updated color
        drawDoodlebop(x, y, s1);
      }
    }
  }
}


function keyPressed() {
  if (key === ' ') {
    resetSketch();
  }
}