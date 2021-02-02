class Stage {

  constructor(w, h, image) {
    this.width = w;
    this.height = h;
    this.x = width / 2;
    this.y = height - this.height / 2;
    this.strokeWeight = 1;
    this.fill = {
      r: 200,
      g: 200,
      b: 200
    }

    // congratulation gif
    this.congratulationsImage = image;
    this.congratulationsx = width/2;
    this.congratulationsy = height/2;
    this.congratulationsSize = 1040;
    this.congratulationsSize2 = 520;
  }

  // display the stage
  display() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    strokeWeight(this.strokeWeight);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  congratulationsGif() {
    imageMode(CENTER);
    image(this.congratulationsImage, this.congratulationsx, this.congratulationsy, this.congratulationsSize, this.congratulationsSize2);
  }
}
