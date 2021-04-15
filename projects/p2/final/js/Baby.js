class Baby {
  // this is all the baby related stuff. It's appearance and how you can interact with it
  // to change his appearance and attitude
  constructor() {
    this.x = 400;
    this.y = 300;
    this.size = 100;
    this.name = `BABY`;
    this.color = {
      r: 0,
      g: 0,
      b: 0
    };
    this.nameColor = 255;
    this.nameSize = 32;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.changeDirection = undefined;
    this.angle = undefined;
  }

// updates in the draw function of the script
// displays the baby and makes it move accordingly to interactions
  update() {
    this.displayBaby()
    this.hunger();
    this.move();
    this.bored();
    this.dirty();
  }

// if the baby is dirty, it grows in size. Weird. It cannot be too big tho.
  dirty() {
    this.size = constrain(this.size, 100, 200);
    this.nameSize = constrain(this.nameSize, 32, 60);
    this.size = this.size + 0.05;
    this.nameSize = this.nameSize + 0.015;
  }
//
  hunger() {
    let hungerSpeed = random(0, 0.5);
    this.color.g = constrain(this.color.g, 0, 255);
    this.color.g = this.color.g + hungerSpeed;
  };

  bored() {
    let boreSpeed = random(0, 0.01);
    this.speed = this.speed + boreSpeed;


  }

  move() {
    this.changeDirection = random(0, 2);
    this.x = constrain(this.x, 4 + this.size / 2, width - 4 - this.size / 2);
    this.y = constrain(this.y, 4 + this.size / 2, height - 4 - this.size / 2);

    if (this.changeDirection < .01) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }




  displayBaby() {
    push();
    // baby body
    ellipseMode(CENTER);
    noStroke();
    fill(this.color.r, this.color.g, this.color.b);
    ellipse(this.x, this.y, this.size);
    // baby name on body
    textSize(this.nameSize);
    fill(this.nameColor);
    textAlign(CENTER, CENTER);
    text(this.name, this.x, this.y);
    pop();
  }

  feed() {
    this.color.g = this.color.g - 200;
  }

  play() {
    this.speed = 0
  }

  change() {
    this.size = 100;
    this.nameSize = 32;
  }

  love() {}

}
