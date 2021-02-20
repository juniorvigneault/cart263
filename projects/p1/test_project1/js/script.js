"use strict";

// first experiments with matter.js for project 1 in CART 263
// done while following Daniel Shiffman's introduction to matter.js
// https://www.youtube.com/watch?v=urR596FsU68


// module aliases // create engine variable
let Engine = Matter.Engine;
// let Render = Matter.Render
let World = Matter.World;
let Bodies = Matter.Bodies;

// create an engine variable for the physics engine
let engine;

// create a world variable in which bodies will exist
let world;

// box variable
let box1;
let boxes = [];

// ground variable
let ground;
let grounds = [];

function setup() {
  createCanvas(1000, 1000)
  // create engine
  engine = Engine.create();
  // run the engine (apparently doesn't need to be in draw)
  Engine.run(engine);
  // create the physics in the world
  world = engine.world;
  // create grounds
  // grounds.push(new Ground(400, 400, 600, 50, world, 0.3));
  // grounds.push(new Ground(700, 800, 600, 50, world, - 0.3));
  grounds.push(new Ground(width/2, height, 300, 50, world, 0));
  grounds.push(new Ground(0, height/2, 1000, 100, world, 1.5));
  grounds.push(new Ground(width, height/2, 1000, 100, world, - 1.5));





}

function mouseDragged() {
  boxes.push(new Box1(mouseX, mouseY, random(1,100), world));
}

function draw() {
  background(255);
  for (let i = 0; i < boxes.length; i++ ) {
  boxes[i].update();
  if (boxes[i].offScreen()) {
    // remove boxes from the world so the physics engine stops taking care of them when they leave screen
   boxes[i].removeFromWorld();
    // remove box from the array
    boxes.splice(i, 1);
    // prevents the skipping of a box when removed from the array by backing up 1
    i--;

  }
}
// draw the ground
  for (let i = 0; i < grounds.length; i++ ) {
  grounds[i].update();
}
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
