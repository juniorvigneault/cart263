class Baby {
  constructor() {
    this.x = width/2;
    this.y = 200;
    this.size = 100;
    this.name = `BABY`;
    this.color = {
      r: 0,
      g: 200,
      b: 0
    };
    this.nameColor = 255;
    this.nameSize = 32;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.changeDirection = undefined;
    this.angle = undefined;
    this.ax = 0;
    this.ay = 0;
    this.acceleration = 0.07;
    this.offset = 0;
    this.strum = 1;

    this.beingFed = false;
  }

  update() {
    this.displayBaby()
    this.move();

    if (this.beingFed){
      push();
      noStroke();
      fill(200);
      beginShape();
      vertex(0, height);
      for (var x = 0; x < width; x++) {
        //var angle = map(x, 0, width, 0, TWO_PI);
        var angle = this.offset + x * 0.01;
        // map x between 0 and width to 0 and Two Pi
        var y = map(sin(angle), -this.strum, this.strum, 150, 10);
        vertex(x, y);
      }
      vertex(width, height);
      endShape();
      this.offset += random(0.1, 0.04);
      pop();
    }
  }

// code taken from https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg
  feed() {
  this.beingFed = true;
  };


  hunger() {
    let hungerSpeed = random(0, 0.5);
    this.color.g = constrain(this.color.g, 0, 255);
    this.color.g = this.color.g + hungerSpeed;

    $("#progressbar").progressbar({
      value: map(this.color.g, 0, 255, 0, 100),
      complete: function(event, ui) {}
    });

  };

  mousePressed() {
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.size / 2) {

      console.log(`love!`)
    }
  }

  move() {
    // if (random(300,350) < this.x) {
    //   this.ax = -this.acceleration;
    // } else {
    //   this.ax = this.acceleration;
    // }

    if (height/ 2 < this.y) {
      this.ay = -this.acceleration;
    } else {
      this.ay = this.acceleration;
    }
    this.vx = this.vx + this.ax
    this.vx = constrain(this.vx, -this.speed, this.speed);
    this.vy = this.vy + this.ay
    this.vy = constrain(this.vy, -this.speed, this.speed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.x = constrain(this.x, 1 + this.size/2, width - 1 - this.size/2);
    this.y = constrain(this.y, 1 + this.size/2, height - 1 - this.size/2);
  }

  // moving randomly
  // move() {
  //   this.changeDirection = random(0, 0.5);
  //   this.x = constrain(this.x, 1 + this.size / 2, width - 1 - this.size / 2);
  //   this.y = constrain(this.y, 1 + this.size / 2, height - 1 - this.size / 2);
  //
  //   if (this.changeDirection < .01) {
  //     this.vx = random(-this.speed, this.speed);
  //     this.vy = random(-this.speed, this.speed);
  //   }
  //
  //   this.x = this.x + this.vx;
  //   this.y = this.y + this.vy;
  // }

  displayBaby() {
    push();
    // baby body
    ellipseMode(CENTER);
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
    // baby name on body
    textSize(this.nameSize);
    fill(this.nameColor);
    textAlign(CENTER, CENTER);
    text(this.name, this.x, this.y);
    pop();
  }
}
