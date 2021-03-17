"use strict";

// Prototype for Project 2 : ANYTHING
// Tests using ml5.js
// Project by Junior Vigneault

// video variable that contains video capture
let video;
let predictions = [];
let maskIMG

const NUM_FLY_IMAGES = 1;
const NUM_FLIES = 300;

let flyImages = [];
let flies = [];
let flyImage;

// preload sound and images
function preload() {
  flyImage = loadImage(`assets/images/fly.png`)
}



//
function setup() {
  createCanvas(1000, 750);
  video = createCapture(VIDEO);
  video.hide();

  // Create flies
  createFlies(NUM_FLIES);

  // Loading model and connect with video
  const facemesh = ml5.facemesh(video, modelReady);


  // store results in predictions (global variable)
  facemesh.on(`predict`, results => {
    predictions = results


    // console.log(results)
  });
}

function draw() {
  background(255);
  imageMode(CENTER)
  keypoints();
  displayFlies(NUM_FLIES)

  // image(video, width/2, height/2, 1000, 750);
  // image(video, 0,0);


}

// go through the array of points in and draw green ellipses on each
function keypoints() {
  for (let i = 0; i < predictions.length; i++) {
    const keypoints = predictions[i].scaledMesh;

    // Log facial keypoints.
    for (let i = 0; i < keypoints.length; i++) {
      let x = map(keypoints[i][0], 0, video.width, 0, width);
      let y = map(keypoints[i][1], 0, video.height, 0, height);
      let z = keypoints[i][2];
      fill(0, 255, 0);
      noStroke();
      ellipse(x, y, 3, 3);
    }
    // push();
    // fill(0);
    // let x = map(keypoints[10][0], 0, video.width, 0, width);
    // let y = map(keypoints[10][1], 0, video.height, 0, height);
    // fill(0,255,0)
    // ellipse(x, y,20,20);
    // pop();
  }
}

// function keypoints() {
//   for (let i = 0; i < predictions.length; i++) {
//     const face = predictions[i];
//     for (let j = 0; j < face.annotations.silhouette.length; j ++) {
//       const keypoint = face.annotations.silhouette[j];
//       fill(0,255,0);
//       noStroke();
//       ellipse(keypoint[0], keypoint[1], 3,3);
//     }
//   }
// }

function modelReady() {
  console.log(`MODEL IS READY`);
}

function createFlies(numberFlies) {
  for (let i = 0; i < numberFlies; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let fly = new Fly(x, y, flyImage);
    flies.push(fly);
  }
}

// function to display flies and pick them up (used both in title and game with diff numbers)
function displayFlies(numberFlies) {
  for (let i = 0; i < numberFlies; i++) {
    flies[i].update();
    // flies[i].mousePressed();
  }
}
