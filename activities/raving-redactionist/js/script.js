"use strict"

// probablitly of secrets being revealed
let probability = 0.08;
// variable to store the probability
let r = undefined;
// time to reveal or redact
let revealedTime = 500;
// variable to store the number of secrets currently reveiled
let secretsRevealed = 0;
// variable to add or substract a secret to the counter
let addSecret = 1;
// click input to reveal the secrets
$(`.top-secret`).on(`click`, redact);
setInterval(revelation, revealedTime);

// redact the secrets if revealed
function redact() {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
  secretsRevealed -= addSecret;
}
// secrets are revealed if attempt works
function revelation() {
  $(`.redacted`).each(attemptReveal);
}
// attempts to hack the secrets
function attemptReveal() {
  r = Math.random();
  if (r < probability) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
    // add 1 if secret is revealed
    secretsRevealed += addSecret;
  }
// make the number in footer store the amount of secrets revealed
  $(`#number`).text(secretsRevealed);

}
