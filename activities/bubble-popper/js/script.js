"use strict";

// users webcam
let video = undefined;
// the handpose model
let handpose = undefined;
// the current set of predictions
let predictions = [];
// the Bubble
let bubble = undefined;

function setup() {
  createCanvas(640, 480);
  // access user webcam
  video = createCapture(VIDEO);
  video.hide();
  // load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`model loaded.`);
  });

  // listen for predictions
  handpose.on(`predict`, function(results) {
    // console.log(results);
    predictions = results;
  });
  // bubble object
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }
}

function draw() {
  background(0);
  predictionsInfo();
  displayBubble();
  moveBubble();
}




function predictionsInfo() {

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // check if the bubble is popped

    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
    }
    // display pin on index finger
    // draw needle
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY)
    pop();
    // draw red circle bottom pin
    push();
    fill(255, 0, 0);
    noStroke();
    ellipseMode(CENTER);
    ellipse(baseX, baseY, 20)
    pop();
  }
}

function displayBubble() {
  push();
  fill(0, 0, 255);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

function moveBubble() {
  // move Bubble
  bubble.x = bubble.x += bubble.vx;
  bubble.y = bubble.y += bubble.vy;
  // wrap bubble to the bottom of the screen when goin off screen
  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }
}
