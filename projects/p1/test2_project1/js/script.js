"use strict";


// module aliases // create engine variable
let Engine = Matter.Engine;
// let Render = Matter.Render
let World = Matter.World;
let Bodies = Matter.Bodies;

// create an engine variable for the physics engine
let engine;

// create a world variable in which bodies will exist
let world;

// canvas variable
let cnvX = 600;
let cnvY = 780;

// blood variables for the title poster
let blood;
let bloodDrops = [];

// block varibles for static ground
let block;
let blocks = [];

let currentState;
let title;
let act1;
let test;

let featureSFX;
let gunshotSFX;
let babySFX;

// crowd
let donaldPNG;
let jordanPNG;

function preload() {
  featureSFX = loadSound(`assets/sounds/feature.mp3`);
  gunshotSFX = loadSound(`assets/sounds/gunshot.mp3`);
  babySFX = loadSound(`assets/sounds/baby_shot_me_down.mp3`);

  // crowd
  donaldPNG = loadImage(`assets/images/donald.png`)
  jordanPNG = loadImage(`assets/images/jordan.png`)
}

function setup() {
  createCanvas(cnvX, cnvY);
  // MATTER.JS
  // create engine
  engine = Engine.create();
  // run the engine
  Engine.run(engine);
  // create the physics in the world
  world = engine.world;

  currentState = new TitlePoster();
  // currentState = new Act1(width/2, 610, 700, 80, world, 0, donaldPNG, jordanPNG);
  // currentState = new Test();
  // featureSFX.play();
}

function draw() {
  currentState.update();
  // console.log(bloodDrops.push())
}

function mouseDragged() {
  boxes.push(new Box1(mouseX, mouseY, random(1,100), world));
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

function mousePressed(){
  currentState.mousePressed();
}

function mouseDragged() {
  currentState.mouseDragged();
}
