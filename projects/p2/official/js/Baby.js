class Baby {
  // this is all the alien related stuff. It's appearance and how you can interact with it
  // to change their appearance and attitude. Using play.js library.
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
    // creating the sprite of the alien using p5.play
    stretchy = createSprite(this.x, this.y, this.size, this.size);
    // override(overwrite) the draw function of the sprite
    //and make it display anything you want in its current position.
    //In javascript function and methods can be assigned like variables
    stretchy.draw = function() {
      //make the ellipse stretch in the sprite direction
      //proportionally to its speed
      //this.deltaX and this.deltaY are the position increment
      //since the last frame, move the face image toward the direction
      image(face, this.deltaX * 3, this.deltaY * 3);
      push();
      stroke(0);
      strokeWeight(2);
      fill(255);
      rotate(radians(this.getDirection()));
      let w = 150 + this.getSpeed()
      let h = 150 - this.getSpeed()
      ellipse(x, y, w, h);
      pop();
    }
  }

  // updates in the draw function of the script
  // displays the baby and makes it move accordingly to interactions
  // display the alien move them randomly (Taken from Pippin Barr CART 253 Example)
  update() {
    this.move();
    // draw sprites of alien from play.js
    drawSprites();
    // if distance from the mouse is under 100 then the alien stops moving
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 100) {
      this.distance = true;
    } else {
      this.distance = false;
    }
  }
  // Alien moving randomly
  move() {
    // the speed is inversely proportional to distance
    stretchy.velocity.x = (this.x - stretchy.position.x) / 10;
    stretchy.velocity.y = (this.y - stretchy.position.y) / 10;
    // constrain the position of the alien in the canvas
    this.x = constrain(this.x, 40 + this.size / 2, width - 40 - this.size / 2);
    this.y = constrain(this.y, 40 + this.size / 2, height - 40 - this.size / 2);

    // move randomly if distance between mouse and alien is above 100
    if (this.distance == false) {
      this.changeDirection = random(0, 0.9);
      // change direction randomly and move on random speeds
      if (this.changeDirection < .01) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      // speed of alien
      this.speed = 7;
    }
  }

  mousePressed() {}
}
