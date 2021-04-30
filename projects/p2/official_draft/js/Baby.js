class Baby {
  // this is all the baby related stuff. It's appearance and how you can interact with it
  // to change his appearance and attitude
  constructor() {
    this.x = 400;
    this.y = 400;
    this.size = 100;
    this.nameSize = 32;
    this.color = 255;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    this.changeDirection = undefined;
    this.angle = undefined;
    this.wiggle = false;
    this.distance = true;

    x = 0;
    y = 0;

    stretchy = createSprite(this.x, this.y, this.size, this.size);

    stretchy.draw = function() {
      image(face, this.deltaX * 3, this.deltaY * 3 );

      push();
      // noStroke();
      stroke(0);
      strokeWeight(2);
      fill(255);
      rotate(radians(this.getDirection()));
      let w = 150 + this.getSpeed()
      let h = 150 - this.getSpeed()
      ellipse(x, y, w, h);
      pop();

    }

    stretchy.maxSpeed = 7;

  }

  // updates in the draw function of the script
  // displays the baby and makes it move accordingly to interactions



  update() {
    // this.displayBaby()

    this.move();



    drawSprites();

    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 100) {
      this.distance = true;
    } else {
      this.distance = false;
    }
  }

  move() {
    stretchy.velocity.x = (this.x - stretchy.position.x) / 10;
    stretchy.velocity.y = (this.y - stretchy.position.y) / 10;

    this.x = constrain(this.x, 40 + this.size / 2, width - 40 - this.size / 2);
    this.y = constrain(this.y, 40 + this.size / 2, height - 40 - this.size / 2);

    if (this.distance) {

    }

    if (this.distance == false) {
      this.changeDirection = random(0, 0.9);

      if (this.changeDirection < .01) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }

      if (this.wiggle) {
        x = x + random(-10, 10);
      }

      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      this.speed = 7;
    }
  }

  displayBaby() {
    push();
    // baby body
    ellipseMode(CENTER);
    fill(this.color.r, this.color.g, this.color.b);
    ellipse(this.x, this.y, this.size);
    // baby name on body
    // textSize(this.nameSize);
    // fill(this.nameColor);
    // textAlign(CENTER, CENTER);
    // text(this.name, this.x, this.y);
    pop();
  }



  play() {
    this.speed = 0
  }

  change() {
    this.size = 100;
    this.nameSize = 32;
  }

  mousePressed() {
  }
}
