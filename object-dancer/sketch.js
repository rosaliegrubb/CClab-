/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancers = [];

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  //createCanvas(400, 400);
  for (let i = 0; i < 1; i++) {
    dancers.push(new Dancer(width / 2, height / 2));
  }
}

function draw() {
  background(0);
  for (let dancer of dancers) {
    dancer.update();
    dancer.display();
  }
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Dancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.color = "coral";
    this.angle = 0;
    this.amplitude = 50; 
  }
  update() {
    this.angle += 0.05;
    this.y = height / 2 + sin(this.angle) * this.amplitude; 
  }
  
  display() {
    push();
    translate(this.x - 200, this.y - 200);
    fill('#F37333');
    noStroke();
    triangle(330, 215, 175, 60, 20, 215);
    // Body
    fill('#F37333');
    noStroke();
    ellipse(175, 230, 60, 70);
    ellipse(165, 263, 10, 20);
    ellipse(185, 263, 10, 20);
    ellipse(150, 235, 20, 10);
    ellipse(200, 235, 20, 10);
    // Ears with side to side movement
    let earOffset = sin(frameCount * 0.1) * 10;
    push();
    translate(earOffset, 0);
    push();
    rotate(PI / 3.0);
    rectMode(CENTER);
    rect(150, -70, 30, 20);
    pop();
    circle(135, 70, 30);
    circle(115, 80, 30);
    circle(120, 60, 30);
    pop();
    push();
    translate(-earOffset, 0);
    push();
    rotate(PI / 1.5);
    rectMode(CENTER);
    rect(-25, -225, 30, 20);
    pop();
    circle(210, 62, 30);
    circle(227, 72, 30);
    circle(224, 55, 30);
    pop();
    // Eyes
    let pupilX1 = map(sin(frameCount * 0.1), -1, 1, 120, 130);
    let pupilX2 = map(sin(frameCount * 0.1), -1, 1, 220, 230);
    fill('white');
    stroke('black');
    circle(pupilX1, 150, 50);
    circle(pupilX2, 150, 50);
    // Pupils 
    fill('#6A351A');
    noStroke();
    circle(pupilX1, 155, 40);
    circle(pupilX2, 155, 40);
    noStroke();
    circle(125, 155, 40);
    circle(225, 155, 40);
    fill('black');
    circle(125, 160, 30);
    circle(225, 160, 30);
    fill('white');
    noStroke();
    circle(130, 158, 10);
    circle(230, 158, 10);
    circle(122, 165, 5);
    circle(222, 165, 5);
    // Smile
    noFill();
    stroke('black');
    arc(175, 190, 18, 18, 0, PI);
    pop();
  }
}

    // ******** //
    // ⬇️ draw your dancer from here ⬇️






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
//     this.drawReferenceShapes()

//     pop();
//   }
//   drawReferenceShapes() {
//     noFill();
//     stroke(255, 0, 0);
//     line(-5, 0, 5, 0);
//     line(0, -5, 0, 5);
//     stroke(255);
//     rect(-100, -100, 200, 200);
//     fill(255);
//     stroke(0);
//   }
// }



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/