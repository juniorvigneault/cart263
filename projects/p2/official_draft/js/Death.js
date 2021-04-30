class Death {
  // death state... nothing much is happening here yet
  constructor(){
    playSFX.stop()
    bubblesSFX.stop();
  }

  update(){
    background(0);
    push();
    textAlign(CENTER,CENTER);
    fill(255);
    textSize(40);
    text(`DEATH`, width/2, height/2);
    pop();
  }

  keyPressed(){
  }
}
