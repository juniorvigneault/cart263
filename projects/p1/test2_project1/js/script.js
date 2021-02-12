"use strict";


// canvas variable
let cnvX = 700;
let cnvY = 700;

let title;

let featureSFX;
let blood;
let gunshotSFX;
let babySFX;

function preload() {
  featureSFX = loadSound(`assets/sounds/feature.mp3`);
  blood = loadImage(`assets/images/blood.png`);
  gunshotSFX = loadSound(`assets/sounds/gunshot.mp3`);
  babySFX = loadSound(`assets/sounds/baby_shot_me_down.mp3`);
}

function setup() {
  createCanvas(cnvX, cnvY)
  title = new Title();
  featureSFX.play();
}

function draw() {
  title.update();
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
