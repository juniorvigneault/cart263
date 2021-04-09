//
let baby;
let babyName;
let currentState;

let days = 1;

function setup() {
  // Create the canvas
  let canvas = createCanvas(800, 600);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  currentState = new Simulation();
}

function draw() {
  background(200);
  currentState.update();
};


function keyPressed() {

  // if (key === `f`) {
  //   feed(baby);
  //   console.log(`You fed the baby`);
  // } else if (key === `p`) {
  //   play(baby);
  //   console.log(`You played with the baby`)
  // } else if (key === `c`) {
  //   change(baby);
  //   console.log(`You changed the diaper of the baby`)
  // } else if (key === `l`) {
  //   love(baby);
  //   console.log(`You gave love to the baby`)
  // }
}

// when feeding the baby, it returns to its original state (black)



// // resizes the canvas
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
