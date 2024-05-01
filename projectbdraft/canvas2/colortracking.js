var colors;
var capture;
var trackingData;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5-canvas-container");
    background(0);
    capture = createCapture(VIDEO); //capture the webcam
    capture.position(0, 0); //move the capture to the top left
    capture.style("opacity", 0); // use this to hide the capture later on (change to 0 to hide)...
    capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.
    colors = new tracking.ColorTracker(["yellow"]);
    tracking.track("#myVideo", colors); // start the tracking of the colors above on the camera in p5

    //start detecting the tracking
    colors.on("track", function (event) {
      //this happens each time the tracking happens
      trackingData = event.data; // break the trackingjs data into a global so we can access it with p5
    });
  }

  function draw() {
    
    // console.log(trackingData);
    if (trackingData) {
      //if there is tracking data to look at, then...
      for (var i = 0; i < trackingData.length; i++) {
        //loop through each of the detected colors
        // console.log( trackingData[i] )
        noStroke();
        fill(255, 255, 0);
        circle(
          trackingData[i].x,
          trackingData[i].y,
          trackingData[i].width*0.5,
          trackingData[i].height*0.5
        );
      }
    }
  }
  
  function mousePressed() {
    // Save color where the mouse is clicked in trackColor variable
    let trackColor = capture.get(mouseX,mouseY);
    console.log(trackColor);
  }
  