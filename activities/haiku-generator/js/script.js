/**
HAIKU GENERATOR
JUNIOR VIGNEAULT

Generates a random HAIKU
*/

"use strict";

let fiveSyllableLines = [
  `O, squishy promise`,
  `Then feared and now loved`,
  `We shall thus wonder`,
  `Eggs and nostalgia`,
  `Her Je ne sais quoi `,
  `Creamy and quiet`,
  `Warm unheard secrets`,
  `It's finally here`,
  `Gracious daffodil`,
  `I feel like maybe`,
  `Never speak those words`,
  `The wet fish flout`,
];

let sevenSyllableLines = [
  `Grey are the ones who don't laugh`,
  `Dinner is served, for Christ's sake`,
  `Best believe this dream is real`,
  `I'm screaming 'cause I love you`,
  `Great, now everything is ruined`,
  `I'm okay with just kissing`,
  `Meeting you has been dreadful`,
  `I said no shoes inside sir`,
];

// line 1 will be at index 0, line 2 at index 1, and line 3 at index 2
let lines = [];



function lineClicked(event) {
  fadeOut(event.target, 1)
}

function fadeOut(element, opacity) {
  opacity -= 0.05;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  } else {
    setNewLine(element);
    fadeIn(element, 0);
  }
}

function fadeIn(element, opacity) {
  opacity += 0.05;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}


function setNewLine(element) {
  // p elements are now in the lines array
  if (element === lines[0] || element === lines[2]) {
    element.innerText = random(fiveSyllableLines);
  } else if (element === lines[1]) {
    element.innerText = random(sevenSyllableLines);
  }
};

// mirror the new parameters of lineGenerator
lineGenerator(0, fiveSyllableLines, `line-1`);
lineGenerator(1, sevenSyllableLines, `line-2`);
lineGenerator(2, fiveSyllableLines, `line-3`);


// deal with the idea that the lines are in an array
function lineGenerator(index, syllableLine, lineString) {
  let line = random(syllableLine);
  lines[index] = document.getElementById(lineString);
  lines[index].innerText = line;
  lines[index].addEventListener(`click`, lineClicked);
}

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
