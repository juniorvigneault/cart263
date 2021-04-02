"use strict";
// LIFE by Junior Vigneault for CART 263
// A minimalist simulation about the cycle of life
// PROTOTYPE

// variable for baby class
let baby;

let currentState;
let mainFont;

// ambiance sound of water and noise with low pass filter
let ambianceRumble;
// sound when giving love by clicking on Life
let happySFX;

// preload all the music and sounds
function preload(){
  ambianceRumble = loadSound(`assets/sounds/bg_rumble.wav`);
  happySFX = loadSound(`assets/sounds/happy.wav`);
}
// create the p5 canvas and set the first state
function setup() {
  // Create the p5 canvas
  let canvas = createCanvas(windowWidth, windowHeight);
  // Move the canvas within the HTML into the appropriate section
  currentState = new Life();
}

// call the current state animations and set the background
function draw() {
  background(0);
  currentState.update();
};

// call the key pressed function of the state the simulation is currently calling
function keyPressed() {
  currentState.keyPressed();
}

// call the mouse pressed function of the state the simulation is currently calling
function mousePressed() {
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
