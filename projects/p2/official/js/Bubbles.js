class Bubble {
  // white bubbles bubbling from the bottom to the top from different sizes
  // when alien is being washed. Taken from https://editor.p5js.org/Chengchao/sketches/B1ypXvd3b
  // honnestly I don't fully understand what is going on and there was no comments in the
  // original code. I wanted to change stuff around but could not because I did note get
  // how it worked. Its kind of confusing.
  constructor() {
    this.x = random(width / 2 - 100, width / 2 + 100);
    this.y = height + 300;
    this.r = random(40, 80);
    this.changer = 2;
    this.speed = random(1, 5);
    this.xdis = this.x - width / 2
    if (this.xdis < 0) {
      this.xdis = -this.xdis;
    }
    this.xr = 1;
    this.trans = 0;
    this.color;
  }

// display the white bubbles
  display() {
    noStroke();
    fill(255);
    this.trans = height - this.y;
    ellipse(this.x, this.y, this.r - this.changer * 6 / this.xr);
  }

// move the white bubblesSFX
  move() {
    this.y -= this.speed;
    this.changer = map(this.y, 20, height, this.r, 0);
    this.xr = map(this.xdis, 0, 100, 6, 2);
    if ((this.r - this.changer * 6 / this.xr) < 0) {
      this.y = height;
    }
  }
}
