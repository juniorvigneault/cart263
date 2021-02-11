class Balloon {

  constructor(x, y) {
    // balloon
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = random(-3, -5);
    this.maxSpeed = 4;
    this.size = 100;
    this.active = true;
    this.fill = {
      r: random(0, 255),
      g: random(0, 255),
      b: random(0, 255),
    }

    // balloon attach
    this.attach = undefined;
    this.attach2 = undefined;
    this.attach3 = undefined;
    this.attach4 = undefined;
    this.attach5 = undefined;
    this.attach6 = undefined;
  }

  // move the balloon
  move() {
    // move Bubble
    this.x = this.x += this.vx;
    this.y = this.y += this.vy;
    // wrap bubble to the bottom of the screen when goin off screen
    if (this.y < - 200) {
      this.x = random(width);
      this.y = height + 200;
      score -= 1
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
