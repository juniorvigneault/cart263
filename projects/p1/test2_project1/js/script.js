"use strict";

let froggy;


function preload() {

  froggy = loadAnimation(`assets/images/froggy/1.png`,`assets/images/froggy/3.png`)
}

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(255);
  animation(froggy, width/2, height/2)
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

// resizes the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
