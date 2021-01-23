"use strict";

// Where is the sausage dog activity

const NUM_ANIMAL_IMAGES = 1;
const NUM_ANIMALS = 2000;

let animalImages = [];
let animals = [];

// let sausageDogImage = undefined;
// let sausageDog = undefined;


function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal.png`)
    animalImages.push(animalImage);
  }

  // sausageDogImage = loadImage(`assets/images/sausage-dog.png`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages)
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

  // let x = random(0, width);
  // let y = random(0, height);
  // sausageDog = new SausageDog(x, y, sausageDogImage);
}

function draw() {
  background(255);

  for(let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  // sausageDog.update();
}

function mousePressed() {
  // sausageDog.mousePressed();
}

// resizes the canvas so that things appear when making bigger
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
