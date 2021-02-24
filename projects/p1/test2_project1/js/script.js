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
let lindaPNG;

// title poster
let bloodPNG;
let writtenBy;

// act 1
let act1PNG;
let curtainPNG;
let curtain2PNG;

function preload() {
  featureSFX = loadSound(`assets/sounds/feature.mp3`);
  gunshotSFX = loadSound(`assets/sounds/gunshot.mp3`);
  babySFX = loadSound(`assets/sounds/baby_shot_me_down.mp3`);
  // Act1
  // crowd
  donaldPNG = loadImage(`assets/images/donald.png`)
  jordanPNG = loadImage(`assets/images/jordan.png`)
  lindaPNG = loadImage(`assets/images/linda.png`)
  // theatre assets
  curtainPNG = loadImage(`assets/images/curtain.png`)
  // curtain2PNG = loadImage(`assets/images/curtain2.png`)

  // act1 title
  act1PNG = loadImage(`assets/images/act1.png`);

  // title poster
  bloodPNG = loadImage(`assets/images/blood.png`)
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

  // currentState = new TitlePoster(bloodPNG);
  currentState = new Act1(300, 610, 700, 125, world, 0, curtainPNG, donaldPNG, jordanPNG, lindaPNG, act1PNG);
  // currentState = new Test();
  // featureSFX.play();
}

function draw() {
  currentState.update();
  // console.log(bloodDrops.push())
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
