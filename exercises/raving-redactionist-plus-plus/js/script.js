"use strict"

let probability = 0.1;
let r = undefined;
let revealedTime = 500;

$(`.top-secret`).on(`click`, redact);
setInterval(revelation, revealedTime);

function redact() {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  r = Math.random();
  if (r < probability) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
