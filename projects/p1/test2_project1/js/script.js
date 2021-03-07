"use strict";

// Project 1 : A Night At The Movies
// KILL BILL, The Play
// By Junior Vigneault for CART 263
// Prof : Pippin Barr
// March 6th 2021

// **********************************************
// Kill Bill, The Play is an experimental project that explores the relationship between art and entertainement.
// Through the artist performing, the user attemps to put on a show for the audience.
// The goal is to make the user feel the pressure of having to perform



// module aliases // create engine variable
let Engine = Matter.Engine;
// let Render = Matter.Render
let World = Matter.World;
let Bodies = Matter.Bodies;

// create an engine variable for the physics engine
let engine;

// create a world variable in which bodies will exist
let world;

// canvas size variable
let cnvX = 600;
let cnvY = 780;

// blood variables for the title poster
let blood;
let bloodDrops = [];

// block variables for static ground (stage)
let block;
let blocks = [];

// SOUND VARIABLES
// Music variables
let featureSFX;
let gunshotSFX;
let babySFX;

// ambiance sounds
let roomToneSFX;
let stepSFX;
let spotSFX;
let spotbuzzSFX;

// sound Library
// main charachter
let sfxLibrary = {theBride:[]};
let reverb;


// crowd images variables
let donaldPNG;
let jordanPNG;
let lindaPNG;

// STATES VARIABLES
// state names
let currentState;
let title;
let act1;
let test;

// State 1 / title poster
let bloodPNG;
let writtenBy;

// State 2 / act 1
let act1PNG;
let curtainPNG;
let curtain2PNG;

// Characher sprite animation variables
let man;
let myAnimation;



// Load Images and Sounds
function preload() {
  // LOAD SOUNDS

  // Ambiance sounds
  roomToneSFX = loadSound(`assets/sounds/ambiance/roomtone.wav`)
  spotSFX = loadSound(`assets/sounds/ambiance/spot.wav`)
  spotbuzzSFX = loadSound(`assets/sounds/ambiance/spotbuzz.wav`)


  // The bride sounds (actor)
  // Preload Sounds from library SoundData.js
  sfxLibrary.theBride[0] = {act1 : []};
  for (let i = 0; i < soundData.theBride[0].act1.length; i++) {
    let name = soundData.theBride[0].act1[i].name;
    let sound = loadSound(soundData.theBride[0].act1[i].path);
    sfxLibrary.theBride[0].act1[name] = sound;
}
  // footstep sound walking on stage
  stepSFX = loadSound(`assets/sounds/the_bride/steps.wav`)

  // MUSIC
  // featureSFX = loadSound(`assets/sounds/feature.mp3`);
  // gunshotSFX = loadSound(`assets/sounds/gunshot.mp3`);
  // babySFX = loadSound(`assets/sounds/baby_shot_me_down.mp3`);

  // LOAD IMAGES
  // Title Poster
  bloodPNG = loadImage(`assets/images/blood.png`);

  // Theatre assets
  // Curtain PNG
  curtainPNG = loadImage(`assets/images/curtain.png`)
  // Crowd PNG
  donaldPNG = loadImage(`assets/images/donald.png`)
  jordanPNG = loadImage(`assets/images/jordan.png`)
  lindaPNG = loadImage(`assets/images/linda.png`)

  // Act1 title
  act1PNG = loadImage(`assets/images/act1.png`);

  // Animation sprites using play.js
  // create sprite positionned outside canvas at beginning (so it doesn't appear on title poster)
  man = createSprite(-100, -100);
  // add first animation (front) when not moving
  myAnimation = man.addAnimation(`straight`, `assets/images/test/01.png`, `assets/images/test/06.png`);
  // Second animation when walking right or left
  man.addAnimation(`rightWalk`, `assets/images/test/side01.png`, `assets/images/test/side12.png`)
  man.addAnimation(`sword`, `assets/images/test/hit1.png`, `assets/images/test/hit5.png`)
  
}

function setup() {
  createCanvas(cnvX, cnvY);
  userStartAudio();
  // reverb setup
  reverb = new p5.Reverb();
  reverb.process(roomToneSFX, 3,15)
  reverb.process(stepSFX, 3,15)


  // MATTER.JS
  // create engine
  engine = Engine.create();
  // run the engine
  Engine.run(engine);
  // create the physics in the world
  world = engine.world;

  // Set the current state of the simulation
  // currentState = new TitlePoster(bloodPNG);
  currentState = new Act1(300, 610, 700, 125, world, 0, curtainPNG, donaldPNG, jordanPNG, lindaPNG, act1PNG);
  // currentState = new Test();
  // featureSFX.play();

}

function draw() {
  // call the update method in the current state
  currentState.update();
  // make the sprites appear on screen (Actor)
  drawSprites();
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
  // call mouse pressed in the current state
  currentState.mousePressed();
}

function keyPressed() {
  // call key pressed in the current state
  currentState.keyPressed()
}
