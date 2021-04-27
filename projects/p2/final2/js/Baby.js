class Baby {
  // this is all the baby related stuff. It's appearance and how you can interact with it
  // to change his appearance and attitude
  constructor() {
    this.x = 400;
    this.y = 300;
    this.size = 100;
    this.name = `BABY`;
    this.color = 255
    this.nameColor = 0;
    this.nameSize = 32;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    this.changeDirection = undefined;
    this.angle = undefined;
    this.wiggle = false;
    this.distance = true;

    x = 0;
    y = 0;

    stretchy = createSprite(400, 200, 10, 10);

    stretchy.draw = function() {
      push();
      stroke(0);
      strokeWeight(2);
      fill(this.color, this.color, this.color);
      rotate(radians(this.getDirection()));
      ellipse(x, y, 150 + this.getSpeed(), 150 - this.getSpeed())


      pop();
      image(face, this.deltaX * 3, this.deltaY * 3 );
    }

    stretchy.maxSpeed = 6;

  }

  // updates in the draw function of the script
  // displays the baby and makes it move accordingly to interactions



  update() {
    // this.displayBaby()
    this.hunger();
    this.move();
    this.bored();
    this.dirty();

    drawSprites();

    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 100) {
      this.distance = true;
    } else {
      this.distance = false;
    }
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
    // let hungerSpeed = random(0, 0.3);
    // this.color.g = constrain(this.color.g, 0, 255);
    // this.color.g = this.color.g + hungerSpeed;
  };

  bored() {
    // let boreSpeed = random(0, 0.01);
    // this.speed = this.speed + boreSpeed;
  }

  move() {
    stretchy.velocity.x = (this.x - stretchy.position.x) / 10;
    stretchy.velocity.y = (this.y - stretchy.position.y) / 10;

    this.x = constrain(this.x, 4 + this.size / 2, width - 10 - this.size / 2);
    this.y = constrain(this.y, 4 + this.size / 2, height - 10 - this.size / 2);
    if (this.distance) {

    }
    if (this.distance == false) {
      this.changeDirection = random(0, 0.9);
      // this.x = constrain(this.x, 4 + this.size / 2, width - 4 - this.size / 2);
      // this.y = constrain(this.y, 4 + this.size / 2, height - 4 - this.size / 2);

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

  feed() {}

  play() {
    this.speed = 0
  }

  change() {
    this.size = 100;
    this.nameSize = 32;
  }

  love() {}

  mousePressed() {
    // // if the distance between the mouse and Life
    // let d = dist(mouseX, mouseY, x, y)
    // if (d < 100 / 2) {
    //   console.log(`I love u`);
    //   // it wiggles!
    //   this.wiggle = true;
    //   // it stops wiggling after half a second
    //   setTimeout(() => {
    //     this.wiggle = false;
    //   }, 500);
    // }
  }
}
