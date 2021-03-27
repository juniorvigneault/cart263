"use strict";

let baby;
let babyFace;

let currentState;

function setup() {
  // Create the canvas
  let canvas = createCanvas(600,500);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  currentState = new Life();
}

function draw() {
  background(0);
  currentState.update();
  // baby.update();
};

function keyPressed(){
  currentState.keyPressed();
}

function mousePressed(){
  currentState.mousePressed();
}

// functions to translate RGB to HSLuv for fill and stroke
function fillHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
