// Project 2 : Anything
// Parent Simulator by Junior Vigneault
// CART 263 / Prof : Pippin Barr
// This is a parenting simulator project taking you along the incredible journey of taking care of your child
// until they turn 18 years old. Desicions will have to be made, situations will have to be forgiven
// and nothing you will do will make a difference (or will it?).

// variables for the state
let currentState;

let babyName;

let face;
let stretchy;
let x;
let y;
let x2;
let y2;

let color;

let waveColor;

let babyEllipse;

let bubble = [];

let bgRumbleSFX;
let clickSFX;
let feedSFX;
let playSFX;
let laserSFX;
let bubblesSFX;



function preload() {
  face = loadImage("assets/images/face.png")

  bgRumbleSFX = loadSound(`assets/sounds/rumble.wav`);
  clickSFX = loadSound('assets/sounds/click.mp3');
  feedSFX = loadSound('assets/sounds/feed.wav');
  playSFX = loadSound(`assets/sounds/play.wav`)
  laserSFX = loadSound(`assets/sounds/laser.wav`)
  bubblesSFX = loadSound(`assets/sounds/bubbles.wav`)
}

function setup() {
  // Create the canvas
  let canvas = createCanvas(750, 750);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  // currentState = new Simulation();
  currentState = new Instructions();

  $(document).bind('mousemove', function(e) {
    $('.mycursor').css({
      top: e.pageY + 2,
      left: e.pageX - 28
    });
  });
}

function draw() {
  // background(0);
  currentState.update();
};

function mousePressed() {
  currentState.mousePressed();
}

function keyPressed() {
  currentState.keyPressed();
}
