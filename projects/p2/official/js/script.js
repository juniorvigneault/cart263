// Project 2 : Anything
// Parent Simulator by Junior Vigneault
// CART 263 / Prof : Pippin Barr
// This is a parenting simulator project taking you along the incredible journey of taking care of a baby alien
// in a filled tank with unknown alien-esque fluids.
// Take care of them until they turn 18 years old. You will need to keep them alive by feeding, washing and
// playing with them or they will die

// variables for the state in the p5js canvas. Starting state is the instructions and alien name.
let currentState;

// alien name variable used at different stages of the game
let babyName;

// variables for the alien position
let face;
let stretchy;
let x;
let y;
let x2;
let y2;
let color;
let babyEllipse;

// variable for the color of the wave in the alien tank
let waveColor;
// array for the bubbles when washing the alien
let bubble = [];

// SOUNDS SOUNDS !! Designed by me.
let bgRumbleSFX;
let clickSFX;
let feedSFX;
let playSFX;
let laserSFX;
let bubblesSFX;

// preload the sounds triggered with mouse as well as backroung ambiance
// preload image of the alien (invisble, just used to move the alien with the override draw function in the baby class)
function preload() {
  // alien face
  face = loadImage("assets/images/face.png")
// background ambiance
  bgRumbleSFX = loadSound(`assets/sounds/rumble.wav`);
  // SFX trigerred by clicking on different elements
  clickSFX = loadSound('assets/sounds/click.mp3');
  feedSFX = loadSound('assets/sounds/feed.wav');
  playSFX = loadSound(`assets/sounds/play.wav`)
  laserSFX = loadSound(`assets/sounds/laser.wav`)
  bubblesSFX = loadSound(`assets/sounds/bubbles.wav`)
}
// setting up the p5 canvas and the starting state of the program
function setup() {
  // Create the p5 canvas
  let canvas = createCanvas(750, 750);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  // Setting up the first state where you name the alien
  currentState = new Instructions();
}

// call each states update functions (acts like the draw function in each class)
function draw() {
  currentState.update();
};
// call each states mousePressed functions
function mousePressed() {
  currentState.mousePressed();
}
