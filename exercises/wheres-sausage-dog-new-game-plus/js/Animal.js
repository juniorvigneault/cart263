class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = random(0, 100);

    this.changeDirection = undefined;
    this.vx = 0;
    this.vy = 0;
    this.speed = 6;
  }

  update() {
    this.display();
    this.move();
    // this.wrap();
    this.changeSpeed();
  }

  display() {
    push()
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop()
  }

  // example of subtle movement by DR.Pippin Barr from Cart 253
  move() {
    this.changeDirection = random();
    if (this.changeDirection < 100) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, windowWidth);
    this.y = constrain(this.y, 0, windowHeight);
  }

  // wrap() {
  //   if (this.x > width) {
  //     this.x -= width;
  //   } else if (this.x < 0) {
  //     this.x += width;
  //   } else if (this.y > width) {
  //     this.y -= width;
  //   } else if (this.y < 0) {
  //     this.y += width;
  //   }
  // }

  changeSpeed() {
    if (mouseX > this.x - this.image.width / 2 &&
      mouseX < this.x + this.image.width / 2 &&
      mouseY > this.y - this.image.height / 2 &&
      mouseY < this.y + this.image.height / 2) {
        this.speed = 100
      }
      else {
        this.speed = 6;
      }
  }
}
