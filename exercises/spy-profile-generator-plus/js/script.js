"use strict";

// Spy profile generator
// Junior Vigneault //

// Generates a randomized spy profile for the user, and password protects it.

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`
}

let instrumentData = undefined;
let objectData = undefined;
let tarotData

// loading json files from Corpora by Darius Kazemi
function preload() {
tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`)
instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`)
objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`)
}

function setup() {
  createCanvas(1000, 1000);
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data!== null) {
    let password = prompt(`Agent! What's your password?`)
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
  }
  else {
    generateSpyProfile();
  };
}

function generateSpyProfile() {
  spyProfile.name = prompt(`Agent! What is your name?`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords)

  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

function draw() {
  background(255);

  let profile = `** SECRET SPY PROFILE **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}`;

  push();
  textFont(`Courier, monospace`);
  textSize(24);
  textAlign(LEFT,TOP);
  fillHsluv(0,0,0);
  text(profile, 100,100);
  pop();
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
