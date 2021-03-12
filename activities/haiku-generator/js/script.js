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


let line1;
let line2;
let line3;
let line1p;
let line2p;
let line3p;


function lineClicked(event) {
  fadeOut(event.target, 1)
}

function fadeOut(element, opacity) {
  opacity -= 0.05;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function(){
      fadeOut(element, opacity);
    });
  }
  else {
     setNewLine(element);
     fadeIn(element, 0);
  }
}

function fadeIn(element, opacity) {
  opacity += 0.05;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function(){
      fadeIn(element, opacity);
    });
  }
}


function setNewLine(element) {
  if (element === line1p || element === line3p) {
    element.innerText = random(fiveSyllableLines);
  }
  else if (element === line2p) {
    element.innerText = random(sevenSyllableLines);
  }
};

lineGenerator(line1, fiveSyllableLines, line1p, `line-1`);
lineGenerator(line2, sevenSyllableLines, line2p, `line-2`);
lineGenerator(line3, fiveSyllableLines, line3p, `line-3`);


function lineGenerator(line, syllableLine, linep, lineString){
  line = random(syllableLine);
  linep = document.getElementById(lineString);
  linep.innerText = line;
  linep.addEventListener(`click`, lineClicked);
}

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
