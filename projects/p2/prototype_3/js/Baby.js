class Baby {
  // Visual characteristics of Life
  // Functions to make it move and interactive
  constructor() {
    this.x = width / 2;
    this.swing = 100;
    this.y = height/2 + this.swing;
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
    this.speed = 2;
    this.changeDirection = undefined;
    this.angle = undefined;
    this.ax = 0;
    this.ay = 0;
    this.acceleration = 0.02;
    this.accelerationX = 0.02;
    this.offset = 0;
    this.strum = 1.7;
    this.offset2 = 0;
    this.strum2 = 100;
    this.wiggle = false;
    this.upDown = height / 2;
    this.color2 = 224;
  }
// displays life and moves it up and down
  update() {
    this.displayBaby()
    this.move();
    // Wiggles from left to right
    if (this.wiggle){
      this.x = this.x += random(-3, 3)
    }
    else {
      this.x = this.x;
    }
  }


// when hungy, Life just falls to the bottom of canvas and turns black
  hunger() {
  };

// if clicking on Life, you give it love! Check in the console log
  mousePressed() {
    // if the distance between the mouse and Life
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.size / 2) {
      console.log(`I love u`);
      // play sound of happiness
      happySFX.play();
      // it wiggles!
      this.wiggle = true;
      // it stops wiggling after half a second
      setTimeout(() => {
        this.wiggle = false;
      }, 500);
    }
  }

  move() {
    if (this.upDown < this.y) {
      this.ay = -this.acceleration;
    } else {
      this.ay = this.acceleration;
    }
    // this.vx = this.vx + this.ax
    // this.vx = constrain(this.vx, -this.speed, this.speed);
    this.vy = this.vy + this.ay
    this.vy = constrain(this.vy, -this.speed, this.speed);

    // this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    // this.x = constrain(this.x, 1 + this.size / 2, width - 1 - this.size / 2);
    this.y = constrain(this.y, 1 + this.size / 2, height - 1 - this.size / 2);
  }

// display ellipse as baby
  displayBaby() {
    push();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}
