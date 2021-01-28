class GoldenFly extends Fly {
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.notEaten = true;
  }

update() {
  super.update();
  this.display();

  if (this.found) {
    this.x = mouseX;
    this.y = mouseY;

  }
}

display() {
  if (this.notEaten) {
  push()
  imageMode(CENTER);
  translate(this.x, this.y);
  rotate(this.angle);
  image(this.image, 0, 0);
  pop()
  }
}

mousePressed() {
  if (mouseX > this.x - this.image.width / 2 &&
    mouseX < this.x + this.image.width / 2 &&
    mouseY > this.y - this.image.height / 2 &&
    mouseY < this.y + this.image.height / 2) {
      this.found = true;
    }
  }
}
