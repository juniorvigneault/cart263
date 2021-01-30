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

function setup() {
  createCanvas(1000, 1000)
  // create engine
  engine = Engine.create();
  // run the engine (apparently doesn't need to be in draw)
  Engine.run(engine);
  // create the physics in the world
  world = engine.world;
  // // create a rectangle (box1) as a body
  // box1 = Bodies.rectangle(200, 100, 80, 80);
  // // add box1 in the world
  // World.add(engine.world, box1);

  box1 = new Box1(200, 100, 50, 50);

}

function draw() {
  background(0);
  box1.update();
  // rect(box1.position.x, box1.position.y, 80, 80)
}
