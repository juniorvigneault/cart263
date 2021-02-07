"use strict";

// first experiments with matter.js for project 1 in CART 263
// done while following Daniel Shiffman's introduction to matter.js
// https://www.youtube.com/watch?v=urR596FsU68


// module aliases
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

function setup() {
  createCanvas(1000, 1000)
  // create engine
  engine = Engine.create();
  // run the engine (apparently doesn't need to be in draw)
  Engine.run(engine);
  // create the physics in the world
  world = engine.world;
  // options for bodies
  let options = {
    isStatic: true
  };
  // create ground
  ground = Bodies.rectangle(200,height,width,100, options)
  World.add(world, ground);
}

function mouseDragged() {
  boxes.push(new Box1(mouseX, mouseY, 30, 30, world));
}

function draw() {
  background(0);
  for (let i = 0; i < boxes.length; i++ ) {
  boxes[i].update();
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
