"use strict";

/**************************************************
Exercise 2 : Slamina-new-game-plus
by Junior Vigneault for CART 263

**************************************************/
const NUM_BALLOONS = 100;
let balloons = [];
let gravityForce = 0.0025;

let stage = undefined;

let congratulationsSFX = undefined;
let congratulationsGif = undefined;

let state = `title`;
let animal = `I scream you scream we all scream for ice cream`;
let currentAnimal = '';

function preload() {
  congratulationsSFX = loadSound(`assets/sounds/congratulation.mp3`);
  congratulationsGif = loadImage(`assets/images/congratulations.gif`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
// if annyang is working
  if (annyang) {
    let commands = {
      'hello': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

    // check if annyang is getting any info
    annyang.addCallback(`resultNoMatch`, function (speech) {
  console.log(speech);
});
  }

  // create balloons
  for (let i = 0; i < NUM_BALLOONS; i++) {
  let x = random(0, width);
  let y = random(-1000, 0);
  let balloon = new Balloon(x, y);
  balloons.push(balloon);
  }
  
  // create stage
  stage = new Stage(width, 100);
}

function draw() {
  background(255);
// switching between states
  stateSwitch();
}

function mousePressed() {
// switch between title and game
  if (state === `title`) {
    state = `gamePlay`;
    currentAnimal = `hello`
    };
  }

function guessAnimal() {
    state = `congratulations`;
    congratulationsSFX.play();
    responsiveVoice.speak(`Congratulations!`, `UK English Female`)
};
// main title
function title() {
  push();
  background(0);
  textSize(32);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`Thank you for participating to our latest
    Human Computer Interaction research

    Click to continue `, width/2, height/2)
  pop();
}
// gameplay with hello written
function gamePlay() {
  background(0);
  push();
  background(0);
  textSize(32);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`Hello! `, width/2, height/2)
  pop();
};
// stage with balloons bouncing to congratulate
function congratulations() {
  background(congratulationsGif)
  // stage display
  stage.display();

  // balloons active
  for (let i = 0; i < NUM_BALLOONS; i++) {
    let balloon = balloons[i];
    if (balloon.active)
    balloon.gravity(gravityForce);
    balloon.move();
    balloon.bounce(stage);
    balloon.display();
  }
}

// switching between states

function stateSwitch() {
  if (state === `title`) {
    title();
  }
  else if (state === `gamePlay`) {
    gamePlay();
  }
  else if (state === `congratulations`) {
    congratulations();
  }
}
