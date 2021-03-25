"use strict";

let baby;

function setup() {
  // Create the canvas
  let canvas = createCanvas(800, 600);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  baby = new Baby();

  $(`#feed`).on(`click`, function(event) {
    console.log(`You fed the baby`);
    feed(baby);
  });
}

function draw() {
  background(200);
  baby.update();
};

// to feed the baby, press f
// to play with baby, press p
// to change the baby, press c
// to give love to baby, press l



function keyPressed(){

  if(key === `f`) {
    feed(baby);
    console.log(`You fed the baby`);
  }
  else if (key === `p`){
    play(baby);
    console.log(`You played with the baby`)
  }
  else if (key === `c`){
    change(baby);
    console.log(`You changed the diaper of the baby`)
  }
  else if (key === `l`){
    love(baby);
    console.log(`You gave love to the baby`)
  }
}

// when feeding the baby, it returns to its original state (black)
function feed(baby){
  baby.color.g = baby.color.g - 200;
}

function play(baby){
  baby.speed = 0
}

function change(baby){
  baby.size = 100;
  baby.nameSize = 32;
}

function love(baby){
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
