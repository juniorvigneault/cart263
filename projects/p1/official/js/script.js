"use strict";

// Project 1 : A Night At The Movies
// KILL BILL, The Play
// By Junior Vigneault for CART 263
// Prof : Pippin Barr
// March 6th 2021

// **********************************************
// Kill Bill, The Play is an experimental project that explores the relationship between art and entertainement.
// Through the artist performing on stage, the user attemps to put on a show for the audience.
// The goal is to make the user feel the pressure of having to perform live

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
let openingSFX;
let gunshotSFX;
let babySFX;

// ambiance sounds
let roomToneSFX;
let stepSFX;
let spotSFX;
let spotbuzzSFX;
let crowdSFX;
let gunClickSFX;

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
let actorSprite;
let animationSprite;



// Load Images and Sounds
function preload() {
  // LOAD SOUNDS

  // Ambiance sounds
  roomToneSFX = loadSound(`assets/sounds/ambiance/roomtone.wav`);
  spotSFX = loadSound(`assets/sounds/ambiance/spot.wav`);
  spotbuzzSFX = loadSound(`assets/sounds/ambiance/spotbuzz.wav`);
  crowdSFX = loadSound(`assets/sounds/ambiance/crowd.wav`);


  // The bride sounds (actor)
  // Preload Sounds from library SoundData.js
  // made with the help of Pippin Barr (I'm not actually using it in my program but i'm still happy I made it work and will definetly be using again)
  sfxLibrary.theBride[0] = {act1 : []};
  for (let i = 0; i < soundData.theBride[0].act1.length; i++) {
    let name = soundData.theBride[0].act1[i].name;
    let sound = loadSound(soundData.theBride[0].act1[i].path);
    sfxLibrary.theBride[0].act1[name] = sound;
}
  // footstep sound walking on stage
  stepSFX = loadSound(`assets/sounds/the_bride/steps.wav`);

  // MUSIC
  openingSFX = loadSound(`assets/sounds/ambiance/opening_trumpets.wav`);
  gunshotSFX = loadSound(`assets/sounds/ambiance/gunshot.wav`);
  babySFX = loadSound(`assets/sounds/ambiance/baby_shot_me_down.mp3`);
  // title poster gun click sfx
  gunClickSFX = loadSound(`assets/sounds/ambiance/gun_click.wav`);


  // LOAD IMAGES
  // Title Poster
  bloodPNG = loadImage(`assets/images/blood.png`);

  // Theatre assets
  // Curtain PNG
  curtainPNG = loadImage(`assets/images/curtain.png`);
  // Crowd PNG
  donaldPNG = loadImage(`assets/images/donald.png`);
  jordanPNG = loadImage(`assets/images/jordan.png`);
  lindaPNG = loadImage(`assets/images/linda.png`);

  // Act1 title
  act1PNG = loadImage(`assets/images/act1.png`);

  // Animation sprites using play.js
  // create sprite positionned outside canvas at beginning (so it doesn't appear on title poster)
  actorSprite = createSprite(-100, -100);
  // add first animation (front) when not moving
  animationSprite = actorSprite.addAnimation(`straight`, `assets/images/test/01.png`, `assets/images/test/06.png`);
  // Second animation when walking right or left
  actorSprite.addAnimation(`rightWalk`, `assets/images/test/side01.png`, `assets/images/test/side12.png`);
  actorSprite.addAnimation(`sword`, `assets/images/test/hit1.png`, `assets/images/test/hit5.png`);

}

function setup() {
  createCanvas(cnvX, cnvY);
  userStartAudio();
  // reverb setup
  reverb = new p5.Reverb();
  reverb.process(roomToneSFX, 3,15);
  reverb.process(stepSFX, 3,15);


  // MATTER.JS
  // create engine
  engine = Engine.create();
  // run the engine
  Engine.run(engine);
  // create the physics in the world
  world = engine.world;

  // Set the current state of the simulation
  currentState = new TitlePoster(bloodPNG);
  // currentState = new Act1(300, 610, 700, 125, world, 0, curtainPNG, donaldPNG, jordanPNG, lindaPNG, act1PNG);
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
