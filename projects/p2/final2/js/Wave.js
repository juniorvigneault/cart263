class Wave {
  // Moving sine wave appearing in background
  // code taken from https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg
  constructor(x, y, angle){
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.offset = 0;

    this.bath = false;
  }

  update(){
    push();

    noStroke();
    fill(0)
    strokeWeight(2);
    translate(this.x,this.y);
    rotate(radians(this.angle))

    beginShape();
    // vertex(0, 0);
    for (let x = 0; x < width + 1000; x += 2) {
      //var angle = map(x, 0, width, 0, TWO_PI);
      let angle = this.offset + x * 0.006;
      // map x between 0 and width to 0 and Two Pi
      let y = map(sin(angle), -1, 1, 40, 10);
      vertex(x, y);
    }
    vertex(width,height);
    vertex(0, height);
    endShape();
    this.offset += random(0.1, 0.04);
    pop();
  }

  fillBath(){

  }

}
