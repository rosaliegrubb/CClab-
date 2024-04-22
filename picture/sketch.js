
let img;
let img2;
let r = 100;
let g = 100;
let b = 100;
let n=20;
// pixel[];

function preload(){
  img = loadImage("mooncake.jpg");
  img2 = loadImage("love.png");
}
function setup() {
  let canvas = createCanvas(1400, 1400);
  canvas.parent("p5-canvas-container");
  //cam = createCapture(VIDEO);
  background(220);
}

function draw() {
  //
  // r = map(mouseX, 0, width, 0, 255);
  // g = 0;
  // b = map(mouseY, 0, height, 255, 0);

  // tint(r, g, b);
  image(img, 0, 0, 600, 700);
  image(img2, 700, 500, 200, 200);
  let x = random(width);
  let y = random(height);
  let c = img.get(x, y);
  fill(c);
  noStroke();
  for (let x = 0; x<width; x=x+n);
  for (let y = 0; y<width; y=y+n);
  rect(x, y, 20, 20);
  //circle(x, y, 30);
}

