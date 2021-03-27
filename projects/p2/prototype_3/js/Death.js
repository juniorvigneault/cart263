class Death {
  constructor(){
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
