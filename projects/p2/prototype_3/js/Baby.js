class Baby {
  constructor() {
    this.x = width/2;
    this.y = 200;
    this.size = 100;
    this.name = `BABY`;
    this.color = {
      r: 255,
      g: 0,
      b: 250
    };
    this.nameColor = 255;
    this.nameSize = 32;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.changeDirection = undefined;
    this.angle = undefined;
    this.ax = 0;
    this.ay = 0;
    this.acceleration = 0.02;
    this.accelerationX = 0.02;
    this.offset = 0;
    this.strum = 1;
    this.offset2 = 0;
    this.strum2 = 1;
    this.wiggle = 300;
    this.upDown = height/2;

  }

  update() {
    this.displayBaby()
    this.move();
    this.wave();



  }

// code taken from https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg
  feed() {
  this.beingFed = true;
  };

  wave() {
    push();
    noStroke();
    translate(0,0);
    rotate(radians(0))
    fill(0,30,100);
    beginShape();
    vertex(x, this.y);
    for (var x = 0; x < width; x++) {
      //var angle = map(x, 0, width, 0, TWO_PI);
      var angle = this.offset + x * 0.01;
      // map x between 0 and width to 0 and Two Pi
      var y = map(sin(angle), -this.strum, this.strum, 150, 10);
      vertex(this.x, this.y);
    }
    vertex(width, height);
    endShape();
    this.offset += random(0.08, 0.04);
    pop();
  }

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
      this.wiggle = 303;
      this.accelerationX = 0.06
      console.log(`I love u`)
      color =


      setTimeout(() => {
        this.wiggle = 300;
        this.accelerationX = 0
        this.x = width/2
      }, 2000);
    }
  }

  move() {
    if (this.wiggle < this.x) {
      this.ax = -this.accelerationX;
    } else {
      this.ax = this.accelerationX;
    }

    if (this.upDown < this.y) {
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
    noStroke();
    ellipseMode(CENTER);
    color = map(this.y,199,300,80,50)
    fillHsluv(224,97,color)
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}
