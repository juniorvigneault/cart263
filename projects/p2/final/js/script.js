// Project 2 : Anything
// Parent Simulator by Junior Vigneault
// CART 263 / Prof : Pippin Barr
// This is a parenting simulator project taking you along the incredible journey of taking care of your child
// until they turn 18 years old. Desicions will have to be made, situations will have to be forgiven
// and nothing you will do will make a difference (or will it?).

// variables for the state
let currentState;

let babyName;

function setup() {
  // Create the canvas
  let canvas = createCanvas(800, 600);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  currentState = new Instructions();
}

function draw() {
  background(0);
  currentState.update();
};


function keyPressed() {
  currentState.keyPressed();
}
