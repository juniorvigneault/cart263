class Death {
  // death state... triggered when you dont take care of your Alien
  // and the progress bars are complete. Obviously extremely simple verison
  // of something extremely grand in my head. I HATE TIME.
  constructor() {
    // stop ongoing sounds if they are playing
    playSFX.stop()
    bubblesSFX.stop();
  }
  // Write death in the middle of the p5js canvas
  update() {
    background(0);
    push();
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    text(`DEATH`, width / 2, height / 2);
    pop();
  }

  mousePressed(){

  }
}
