class Conception {
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
