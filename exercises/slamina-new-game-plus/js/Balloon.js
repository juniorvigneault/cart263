class Balloon {

  constructor(x, y, note) {
    // balloon
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 4;
    this.growth = 2;
    this.size = 100;
    this.active = true;
    this.fill = {
      r: random(10, 255),
      g: random(10, 255),
      b: random(10, 255),
    }

    // balloon attach
    this.attach = undefined;
    this.attach2 = undefined;
    this.attach3 = undefined;
    this.attach4 = undefined;
    this.attach5 = undefined;
    this.attach6 = undefined;
  }

  // make the balloon move according to position
  gravity(force) {
    this.ay = this.ay + force;
  }

  // move the balloon
  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

  }

  // make the balloon bounce on stage
  bounce(stage) {
    if (this.x > stage.x - stage.width / 2 &&
      this.x < stage.x + stage.width / 2 &&
      this.y + this.size / 2 > stage.y - stage.height / 2 &&
      this.y + this.size / 2 < stage.y + stage.height / 2) {

      let dx = this.x - stage.x;
      this.vx = this.vx + map(dx, -stage.width / 2, stage.width / 2, -10, 10);

      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  // display the balloon
  display() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();

    // balloon attach
    this.attach = this.x + 50;
    this.attach2 = this.y - 50;
    this.attach3 = this.x + 70;
    this.attach4 = this.y - 30;
    this.attach5 = this.x + 44;
    this.attach6 = this.y - 20;

    // display balloon attach
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    triangle(this.attach, this.attach2, this.attach3, this.attach4, this.attach5, this.attach6);
    pop();
  }
}
