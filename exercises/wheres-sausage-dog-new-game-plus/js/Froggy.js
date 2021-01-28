class Froggy {
  // gif frog at the bottom left corner waiting for the golden fly

  constructor(x,y,image1, image2) {
    this.x = x;
    this.y = y;
    this.image1 = image1;

    this.image2 = image2;

    // image switch when but is caught
    this.eating = false;
  }

  update(){
    // display froggy
    this.display();
  }

  display(){
    push();
    // if the golden fly is not eaten then its the green frog
    imageMode(CENTER);
    if (this.eating) {
      // if it is eating the golden fly its the rainbow frog
    image(this.image2, this.x, this.y);
  }
  else {
    image(this.image1, this.x, this.y);
  }
    pop()

  }

  move(){

  }
  wrap(){

  }
}
