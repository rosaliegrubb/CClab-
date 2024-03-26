let cloud;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
  cloud = new Cloud (random(width), random (height))
}

function draw() {
  background(220);
  cloud.show();
  cloud.move();

  //
}

class Cloud {
  //constructor is like the setup
    constructor() {
      this.x = width/2;
      this.y = height/2;
      this.s = 100;
    }
    //what the cloud will do
    show() {
      push();
      translate(this.x, this.y);
      noStroke();
      circle(0, 0, this.s);
      //circles around the body
      for (let a = 0; a < 2 * PI; a += PI / 6) {
        push();
        rotate(a);
        circle(this.s * 0.5, this.s * 0.3, this.s * 0.5);
        pop();
      }
      
      //face
      fill(0);
      circle(-this.s * 0.3, 0, this.s * 0.05);
      circle(this.s * 0.3, 0, this.s * 0.05);
      arc(0, 0, this.s * 0.3, this.s * 0.3, 0, PI);
      pop();
    }
  
    move() {
      this.y = noise(frameCount*0.01)*height;
    }
  }