//
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

  $(`#play`).on(`click`, function(event) {
    console.log(`You fed the baby`);
    play(baby);
  });

  $(`#change`).on(`click`, function(event) {
    console.log(`You fed the baby`);
    change(baby);
  });

  $(`#baby_name`).dialog({
  buttons: {
    "close": function(){
      $(this).dialog(`close`);
    }
  },
  resizable: false,
  position: { my: "center", at: "center", of: window },
  modal: true,
  height: 400,
  draggable: false,
  closeOnEscape: false,

});
}

function draw() {
  background(200);
  baby.update();
};


function keyPressed() {

  if (key === `f`) {
    feed(baby);
    console.log(`You fed the baby`);
  } else if (key === `p`) {
    play(baby);
    console.log(`You played with the baby`)
  } else if (key === `c`) {
    change(baby);
    console.log(`You changed the diaper of the baby`)
  } else if (key === `l`) {
    love(baby);
    console.log(`You gave love to the baby`)
  }
}

// when feeding the baby, it returns to its original state (black)
function feed(baby) {
  baby.color.g = baby.color.g - 200;
}

function play(baby) {
  baby.speed = 0
}

function change(baby) {
  baby.size = 100;
  baby.nameSize = 32;
}

function love(baby) {}



// // resizes the canvas
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
