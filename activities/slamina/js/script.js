"use strict";

// exrecise by just junior

function setup() {
  createCanvas(1000, 1000)
  background(0);

  if (annyang) {
    let commands = {
      'hello': function () {
        alert(`Howdy!`)
      },
      'goodbye': function() {
        alert(`ciao bella!`);
      }
    }
    annyang.addCommands(commands);
    annyang.start();
  }
}


function mousePressed() {

}
