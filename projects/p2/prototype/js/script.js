"use strict";

// Prototype for Project 2 : ANYTHING
// Tests using ml5.js
// Project by Junior Vigneault

let mobileNet;

function setup() {
  createCanvas(1000, 750)
  mobileNet = ml5.imageClassifier(`MobileNet`, modelReady);
}

function draw() {
  background(0);
}

function modelReady(){
  console.log(`MODEL IS READY`)
}
