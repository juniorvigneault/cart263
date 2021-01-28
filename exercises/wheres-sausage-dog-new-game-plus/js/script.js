"use strict";
// Junior Vigneault - Activity 1
// Where is the sausage dog activity (now flies)
// Find the golden fly and feed it to the frog

// constants used in for loops
const NUM_FLY_IMAGES = 1;
const NUM_FLIES = 500;
const NUM_FLIES_TITLE = 8;

let flyImages = [];
let flies = [];

let goldenFlyImage = undefined;
let goldenFly = undefined;

let froggyImage1 = undefined;
let froggy = undefined;
let froggyX = 300;
let froggyY = undefined;
let froggyOffSet = 120;
let froggyImage2 = undefined;

let swampGif = undefined;

let handImage = undefined;

// sounds
let flySound = undefined;
let starSound = undefined;
let starSoundPlaying = false;
let stab = undefined;

// starting state
let state = `title`;

// loading different images / sounds
function preload() {
  for (let i = 0; i < NUM_FLY_IMAGES; i++) {
    let flyImage = loadImage(`assets/images/animal.png`)
    flyImages.push(flyImage);
  }

  froggyImage1 = loadImage(`assets/images/frog.gif`)
  froggyImage2 = loadImage(`assets/images/frog2.gif`)

  goldenFlyImage = loadImage(`assets/images/sausage-dog.png`)

  swampGif = loadImage(`assets/images/swamp.gif`)

  handImage = loadImage(`assets/images/hand.png`)

  flySound = loadSound(`assets/sounds/flysound.mp3`)

  starSound = loadSound(`assets/sounds/star.mp3`)

  stab = loadSound(`assets/sounds/stab.mp3`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  // Create the animals
  createFlies(NUM_FLIES);

  // display froggy in the left corner screen
  froggyY = height - froggyOffSet;

  // create froggy!
  froggy = new Froggy(froggyX, froggyY, froggyImage1, froggyImage2);

  // display golden fly
  let x = random(0, width);
  let y = random(0, height);
  // create golden fly
  goldenFly = new GoldenFly(x, y, goldenFlyImage);
}

function draw() {
  // white background
  background(255);
  // switching between title and game
  stateSwitch();
  // setting hand as cursor
  push();
  image(handImage, mouseX, mouseY - 25);
  pop();

}
// when pressing the mouse when title you switch to game
function mousePressed() {
  if (state === `title`) {
    state = `game`;
    flySound.loop();
    stab.play();
  }

}

// resizes the canvas so that things adapt when making bigger or smaller
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  froggy.y = height - 120;
}

// function to switch between title and game
function stateSwitch() {
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  }
}

// title function
function title() {
  // display golden fly in title screen
  goldenFly.update();
  // display some flies in title screen
  displayFlies(NUM_FLIES_TITLE);
  // make the frog appear apear
  // froggy.update();
}
// game function part
function game() {
// display and move flies during game
  displayFlies(NUM_FLIES)
// make the frog appear apear
  froggy.update();
// golden fly appear and move
  goldenFly.update();
// making the golden fly being picked up
  goldenFly.mousePressed();
// if golden fly is picked up and given to the frog, fly dissapears and frog becomes rainbowy
  if (goldenFly.notEaten && goldenFly.found && dist(goldenFly.x, goldenFly.y, froggy.x, froggy.y) < 100) {
    goldenFly.notEaten = false;
    froggy.eating = true;
    if (starSoundPlaying === false) {
      starSound.play();
      starSoundPlaying = true;
      // making the froggy become rainbow for the duration of Star sound
      setTimeout(function() {
        froggy.eating = false;
      }, 3500);
    }
  }
}

// function to create the flies (used both in title and game with diff numbers)
function createFlies(numberFlies) {
  for (let i = 0; i < numberFlies; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let flyImage = random(flyImages)
    let fly = new Fly(x, y, flyImage);
    flies.push(fly);
  }
}

// function to display flies and pick them up (used both in title and game with diff numbers)
function displayFlies(numberFlies) {
  for (let i = 0; i < numberFlies; i++) {
    flies[i].update();
    // flies[i].mousePressed();
  }
}
