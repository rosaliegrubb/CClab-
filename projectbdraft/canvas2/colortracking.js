var colors;
var capture;
var trackingData;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5-canvas-container");
    capture = createCapture(VIDEO); //capture the webcam
    capture.position(0, 0); //move the capture to the top left
    capture.style("opacity", 0); // use this to hide the capture later on (change to 0 to hide)...
    capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.
  
    //for adding a color for example purple
    tracking.ColorTracker.registerColor("purple", function (r, g, b) {
      var dx = r - 120;
      var dy = g - 60;
      var dz = b - 210;
  
      if (b - g >= 100 && r - g >= 60) {
        return true;
      }
      return dx * dx + dy * dy + dz * dz < 3500;
    });
    
      //for adding a color for example green
    tracking.ColorTracker.registerColor("green", function (r, g, b) {
      var dx = r - 60;
      var dy = g - 200;
      var dz = b - 60;
  
      if (b - g >= 100 && r - g >= 100 && r - b >= 60) {
        return true;
      }
      return dx * dx + dy * dy + dz * dz < 3500;
    });
  
    colors = new tracking.ColorTracker(["magenta", "cyan", "yellow", "purple", "green"]);
  
    tracking.track("#myVideo", colors); // start the tracking of the colors above on the camera in p5
  
    //start detecting the tracking
    colors.on("track", function (event) {
      //this happens each time the tracking happens
      trackingData = event.data; // break the trackingjs data into a global so we can access it with p5
    });
    background(0);
  }
  
  function draw() {
    // console.log(trackingData);
  
    if (trackingData) {
      //if there is tracking data to look at, then...
      for (var i = 0; i < trackingData.length; i++) {
        noStroke();
        console.log(trackingData[i].color);
        if (trackingData[i].color == "black") {
          fill(0);
          push();
          translate(width,0);
          scale(-1,1);
          circle(
            trackingData[i].x,
            trackingData[i].y,
            trackingData[i].width*0.5,
            trackingData[i].height*0.5
            //loop through each of the detected colors
          );
          pop();
        } else {
          //paint with the color that is tracked
          fill(trackingData[i].color);
          push();
          translate(width,0);
          scale(-1,1);
          circle(
            trackingData[i].x,
            trackingData[i].y,
            trackingData[i].width,
            trackingData[i].height
            //loop through each of the detected colors
          );
          pop();
        }
      }
    }
  }
  