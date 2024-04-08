// CCLab Mini Project - 9.R Flowers Sprinkle Template

let NUM_OF_FLOWERS = 100; // Decide the initial number of flowers.

let flowers = [];
let rain = [];
let img;

function preload() {
  // Load the image before setup()
  img = loadImage('MagicEraser_240407_154917.png'); // Replace 'your_image_url.jpg' with the path to your image
}  

function setup() {
  let canvas = createCanvas(600, 600);
  colorMode(HSB, 100);
  canvas.parent("canvasWrapper");
  background(220);

  // generate flowers
  for (let i = 0; i < NUM_OF_FLOWERS; i++) {
    flowers[i] = new Flower(random(width), random(height));
  }
}

function draw() {
  background(250);
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    flowers[i].checkBoundaries();
  }
  
  // Draw the image on top of the flowers
  image(img, 0, height - img.height);

  // Check for collisions and create raindrops
  for (let i = 0; i < flowers.length; i++) {
    for (let j = 0; j < flowers.length; j++) {
      if (i !== j) {
        flowers[i].detectCollision(flowers[j]);
      }
    }
    if (flowers[i].isRaining) {
      rain.push(new Rain(flowers[i].x, flowers[i].y, random(100)));
    }
  }

  // Display raindrops
  for (let i = rain.length - 1; i >= 0; i--) {
    rain[i].display();
    rain[i].move();
    if (rain[i].offscreen()) {
      rain.splice(i, 1);
    }
  }
}

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.numPetals = round(random(5, 10));
    this.petalSize = random(10, 20);
    this.color = color(random(360), 80, 100);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.isGone = false;
    this.isRaining = false;
  }

  show() {
    noStroke();
    fill(this.color);

    // Draw flower petals
    for (let i = 0; i < this.numPetals; i++) {
      let angle = map(i, 0, this.numPetals, 0, TWO_PI);
      let xOff = cos(angle) * this.petalSize;
      let yOff = sin(angle) * this.petalSize;
      ellipse(this.x + xOff, this.y + yOff, this.petalSize, this.petalSize);
    }

    // Draw flower center
    fill(50, 80, 100);
    ellipse(this.x, this.y, this.petalSize / 2, this.petalSize / 2);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  checkBoundaries() {
    if (this.x > width + this.petalSize || this.y > height + this.petalSize) {
      this.isGone = true;
    }
  }

  detectCollision(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < (this.petalSize + other.petalSize) * 0.8) {
      this.isRaining = true;
    }
  }
}

class Rain {
  constructor(x, y, h) {
    this.x = random(x - 20, x + 20);
    this.y = y;
    this.h = h;
  }

  display() {
    strokeWeight(2);
    stroke(this.h, 20, 100);
    line(this.x, this.y, this.x, this.y + 5);
  }

  move() {
    this.y += 10;
  }

  offscreen() {
    return this.y > height;
  }
}



