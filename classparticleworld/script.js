// CCLab Mini Project - 9.R Particle World Template
let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0


let NUM_OF_PARTICLES = 30; // Decide the initial number of particles.
let speed =-3;

let particles = [];

function setup() {
  let canvas = createCanvas(500, 900);
  canvas.parent("p5-canvas-container");


  // generate particles
  // for (let i = 0; i < 100; i++) {
  //   particles[i] = new Particle(random(width), random(height));
  // }
}


function draw() {
  background(0,0,255);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.putBack(); 
    if(p.isGone ==true){
      particles.splice(i,1);
    }
  }
    if (mouseIsPressed){
      particles.push(new Particle(mouseX, mouseY))
    }
  }


class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random (5,50)
    this.speedY = map(this.dia,5,50,5,1)
    this.env = new p5.Envelope(t1, l1, t2, l2);
    this.triOsc = new p5.Oscillator('triangle');
    this.f = map(this.dia, 5, 50, 500, 50);
    this.isGone = false;
  }
  // methods (functions): particle's behaviors
  update() {
    this.y=this.y-this.speedY; 
   
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke ();
    fill (255, 100)

    circle(0, 0, this.dia);

    pop();
    
  }
  putBack () {
    if (this.y <-this.dia) {
    this.isGone = true;
    this.triOsc.freq(this.f, 0.1); 
    this.triOsc.start();
    this.env.play(this.triOsc);
}
    }
  }