"use strict";

// Spy profile generator
// Junior Vigneault //

// Generates a randomized spy profile for the user, and password protects it
// can make the program explode when in danger

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
  weakness: `**REDACTED**`
}

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let chemicalsData = undefined;

let spySFX;

let explosionGif;
let explosionSFX;

let terminate = false;

// loading json files from Corpora by Darius Kazemi
function preload() {
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  chemicalsData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/science/toxic_chemicals.json`)
  spySFX = loadSound(`assets/sounds/impossible.mp3`);
// loading sound and images
  explosionGif = loadImage(`assets/images/explosion.gif`);
  explosionSFX = loadSound(`assets/sounds/explosion.mp3`);

}

function setup() {
  createCanvas(800, 800);
  // make the data be remembered and stored in string
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data !== null) {
    // if password is is right the show data previously saved
    let password = prompt(`Agent! What's your password?`)
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
      spyProfile.weakness = data.weakness;
    }
  } else {
    generateSpyProfile();
  };
}

// pick random spy characteristics
function generateSpyProfile() {
  spyProfile.name = prompt(`Agent! What is your name?`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
  spyProfile.weakness = random(chemicalsData.chemicals);
  console.log(spyProfile.weakness);
}

function draw() {
  background(0);
  // rectangle as background
  push();
  fillHsluv(30, 100, 67);
  strokeHsluv(50, 100, 67);
  strokeWeight(200)
  rect(0, 0, 800, 800)
  pop();

// display secret spy info
  let profile = `** SECRET SPY PROFILE **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}
Weakness: ${spyProfile.weakness}`;

  push();
  fillHsluv(19, 100, 67);
  rectMode(CENTER);
  strokeWeight(2);
  rect(width / 2, height / 2, 430, 430);
  pop();

  push();
  textFont(`Courier, monospace`);
  textSize(24);
  textAlign(CENTER, CENTER);
  fillHsluv(0, 0, 0);
  text(profile, width / 2, height / 2);
  pop();

  push();
  textFont(`Courier, monospace`);
  textSize(24);
  textAlign(CENTER, CENTER);
  fillHsluv(0, 0, 0);
  text(`PRESS t TO TERMINATE`, width / 2, height * 0.95);
  pop();
// make the program explode if terminated
  if (terminate === true) {
    explosion();
  }
}

// explosion gif when terminated
function explosion() {
  push();
  fill(0);
  rect(0,0, 800,800);
  imageMode(CENTER);
  image(explosionGif, width/2, height/2)
  pop();
  localStorage.removeItem(`spy-profile-data`);
}

// press t to terminate program
function keyPressed() {
  if (key === `t`) {
terminate = true;
explosionSFX.play();
spySFX.play();
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

// resizes the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
