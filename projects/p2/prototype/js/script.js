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

    console.log(results)
  });
}

function draw() {
  background(0);
  // image(video, width/2, height/2, 1000, 750);
  image(video, 0,0);
  keypoints();

}

// go through the array of points in and draw green ellipses on each
function keypoints() {
  for (let i = 0; i < predictions.length; i++) {
    const keypoints = predictions[i].scaledMesh;

    // Log facial keypoints.
    for (let i = 0; i < keypoints.length; i++) {
      const [x, y, z] = keypoints[i];
    }
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

function modelReady(){
  console.log(`MODEL IS READY`);
}
