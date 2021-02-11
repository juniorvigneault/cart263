"use strict";

// users webcam
let video = undefined;
// the handpose model
let handpose = undefined;
// the current set of predictions
let predictions = [];
// the Bubble
let balloons = [];
// number of balloons
let numBalloons = undefined;
// offset so the balloons start off screen
let balloonOffSet = - 200;
// number of bubbles popped
let score = 0;
// balloon pop sound
let popSFX;


function preload() {
  popSFX = loadSound(`assets/sounds/pop.mp3`)
}

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

  // create balloons
  let numBalloons = random(1,10);
  for (let i = 0; i < numBalloons; i++) {
let x = random(0, width);
let y = height - balloonOffSet;
let balloon = new Balloon(x, y);
balloons.push(balloon);
}
}

function draw() {
  background(0,200,255);
  predictionsInfo();
  displayScore();
  displayBalloons();
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
    for (let i = 0; i < balloons.length; i++) {
      let balloon = balloons[i];
    let d = dist(tipX, tipY, balloon.x, balloon.y);
    if (d < balloon.size / 2) {
      balloon.x = random(width);
      balloon.y = height;
      // make the score up by 1 when balloon popped
      score += 1;
      // trigger balloon pop sound
      popSFX.play();
    }
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

function displayBalloons() {
  for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons[i];
    if (balloon.active)
    balloon.move();
    balloon.display();
  }
}


function displayScore() {
  push();
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(score, width/2, height/2)
  pop();
}
