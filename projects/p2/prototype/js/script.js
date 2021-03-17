"use strict";

// Prototype for Project 2 : ANYTHING
// Tests using ml5.js
// Project by Junior Vigneault

// video variable that contains video capture
let video;
let predictions = [];

// preload sound and images
function preload(){
}

//
function setup() {
  createCanvas(1000, 750);
  video = createCapture(VIDEO);
  video.hide();

  // Loading model and connect with video
  const facemesh = ml5.facemesh(video, modelReady);

  // store results in predictions (global variable)
  facemesh.on(`predict`, results => {
    predictions = results

    // console.log(results)
  });
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(video, width/2, height/2, 1000, 750);

  keypoints()
}

// go through the array of points in and draw green ellipses on each 
function keypoints() {
  for (let i = 0; i < predictions.length; i++) {
    const face = predictions[i];
    for (let j = 0; j < face.scaledMesh.length; j ++) {
      const keypoint = face.scaledMesh[j];
      fill(0,255,0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 5,5);

    }
  }
}

function modelReady(){
  console.log(`MODEL IS READY`);
}
