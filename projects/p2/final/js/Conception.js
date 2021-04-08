class Conception {
// introduction animation before the game starts
  constructor(){
  }

  update(){
    background(0);
  }

  keyPressed(){
    if (keyCode === 191) {
      currentState = new Life();
    }
  }
}
