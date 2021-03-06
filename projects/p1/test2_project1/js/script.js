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

// animation test
let man;
let myAnimation;

// ambiance sounds
let roomToneSFX;

let stepSFX;

// sound Library
let sfxLibrary = {theBride:[]};

let reverb;

function preload() {
  console.log(soundData)

  // sound load
  sfxLibrary.theBride[0] = {act1 : []};
  for (let i = 0; i < soundData.theBride[0].act1.length; i++) {
    let name = soundData.theBride[0].act1[i].name;
    let sound = loadSound(soundData.theBride[0].act1[i].path);
    sfxLibrary.theBride[0].act1[name] = sound;
}

  // featureSFX = loadSound(`assets/sounds/feature.mp3`);
  // gunshotSFX = loadSound(`assets/sounds/gunshot.mp3`);
  // babySFX = loadSound(`assets/sounds/baby_shot_me_down.mp3`);
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
  bloodPNG = loadImage(`assets/images/blood.png`);

  // right walk Test
  man = createSprite(-100, -100);

  myAnimation = man.addAnimation(`straight`, `assets/images/test/1.png`, `assets/images/test/6.png`);
  man.addAnimation(`rightWalk`, `assets/images/test/001.png`, `assets/images/test/012.png`)
  // man.addAnimation(`leftWalk`, `assets/images/test/001.png`, `assets/images/test/006.png`)
  man.addAnimation(`jumpUp`, `assets/images/test/jump01.png`, `assets/images/test/jump07.png`)
  // myAnimation.looping = false;


  // ambiance sounds
  roomToneSFX = loadSound(`assets/sounds/ambiance/roomtone.wav`)

  // step sound
  stepSFX = loadSound(`assets/sounds/the_bride/steps.wav`)




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

  // currentState = new TitlePoster(bloodPNG);
  currentState = new Act1(300, 610, 700, 125, world, 0, curtainPNG, donaldPNG, jordanPNG, lindaPNG, act1PNG);
  // currentState = new Test();
  // featureSFX.play();

}

function draw() {
  currentState.update();
  // console.log(bloodDrops.push())
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
  // responsiveVoice.speak("it's mercy, compassion and forgiveness I lack. Not Rationality!", "UK English Female", {
  //   pitch: 1.2,
  //   rate: 1,
  //   volume: 0.5
  // })
  // sfxLibrary.theBride[0].act1.its_not_my_intention.play();
  currentState.mousePressed();
}

function keyPressed() {
  currentState.keyPressed()
}
