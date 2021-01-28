class Fly {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
  // make the flies appear at a random angle
    this.angle = random(0, 100);

    this.changeDirection = undefined;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.dx = undefined;
    this.dy = undefined;
    this.moving = false;

    this.found = false;
    this.notEaten = true;
  }

  update() {
    this.display();
    this.wrap();
    this.move();

    // if the golden fly is found the it follows the mouse
    if (this.found) {
      this.x = mouseX;
      this.y = mouseY;

    }
  }

  display() {
    // if the fly is not eaten it appears and if it is fed to froggy then dissapears
    if (this.notEaten) {
    push()
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop()
  }
  }

  // example of natural random movement by Dr. Pippin Barr from Cart 253 notes on automated movement
  move() {

    this.changeDirection = random();
    if (this.changeDirection < .04) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

  // spin randombly sometimes to another direction to make the movement more fluid
    if (this.changeDirection < .07) {
      this.angle = random(1,7)
    }
  // }
  }

 // when fly leaves the screen appears on the opposite side
  wrap() {
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    } else if (this.y > width) {
      this.y -= width;
    } else if (this.y < 0) {
      this.y += width;
    }
  }

// if you click on fly!
  mousePressed() {
    if (mouseX > this.x - this.image.width / 2 &&
      mouseX < this.x + this.image.width / 2 &&
      mouseY > this.y - this.image.height / 2 &&
      mouseY < this.y + this.image.height / 2) {
        this.found = true;
      }
  }
}
