class TitlePoster {
  // Title poster for the play (and game). Click on play to start.
  // Yellow background with KILL BILL title
  // Blood Stain with blood dripping

  constructor(bloodPNG) {

    // pixel blood stain image
    this.blood = {
      image: bloodPNG,
      x: 137,
      y: 200
    }
    // yellow background
    this.bg = {
      r: 254,
      g: 230,
      b: 0,
      x: 0,
      y: 0
    }
    // Black text on poster (KILL BILL The Play)
    this.text = {
      kill: {
        x: 300,
        y: 300,
        string: `KILL`,
        size: 200,
        vx: 0,
        speed: -.5
      },
      bill: {
        x: 300,
        y: 480,
        string: `BILL`,
        size: 200
      },
      the: {
        x: 275,
        y: 600,
        string: `The`,
        size: 30,
        vy: 0,
        limit: 900,
        final: 600,
        speed: -.5,
        stop: 0
      },
      play: {
        x: 328,
        y: 600,
        string: `Play`,
        size: 30,
        vy: 0,
        speed: -.5,
        stop: 0,
        mouseOverColor: {
          r: 255,
          g: 0,
          b: 0
        },
        color: 0
      }
    };
    // red color fade when play is clicked
    this.fade = {
      x: 0,
      y: 0,
      fadeIn: 0,
      speed: .5,
      active: false,
      color: {
        r: 255,
        g: 0,
        b: 0
      },
    }
  }

  // method that calls everything happening in the class
  update() {
    // display yellow bg
    this.display();

    // mouse over the play title so it becomes red
    this.mouseOverPlay();

    // display the fade out in red when play title is clicked
    this.displayBlackout();
  }


  display() {
    // yellow bg
    push();
    fill(this.bg.r, this.bg.g, this.bg.b);
    noStroke();
    // draw rectangle size of canvas
    rect(this.bg.x, this.bg.y, cnvX, cnvY)
    pop();
    // pixel blood stain png
    push();
    imageMode(CENTER);
    image(this.blood.image, this.blood.x, this.blood.y);
    pop();

    // blood drops fall from the stain
    this.bloodDrop();

    // display 'KILL', 'BILL' and 'The' title text
    this.displayText(this.text.the.size, this.text.the.string, this.text.the.x, this.text.the.y);
    this.displayText(this.text.kill.size, this.text.kill.string, this.text.kill.x, this.text.kill.y);
    this.displayText(this.text.bill.size, this.text.bill.string, this.text.bill.x, this.text.bill.y);
  }

  // display text method
  displayText(size, string, x, y, color = {
    r: 0,
    g: 0,
    b: 0
  }) {
    push();
    fill(color.r, color.g, color.b)
    textFont(`Impact`)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
  }

  // move the 'The Play' from the bottom of the screen to just under KILL BILL
  moveTitle() {

    this.text.the.y = this.text.the.y += this.text.the.vy;
    this.text.play.y = this.text.play.y += this.text.play.vy;

    if (this.text.the.y < this.text.the.limit) {
      this.text.the.vy = this.text.the.speed;
      this.text.play.vy = this.text.play.speed;
    }
    if (this.text.the.y < this.text.the.final) {
      this.text.the.vy = this.text.the.stop;
      this.text.play.vy = this.text.the.stop;
    }
  }

  // method that turns 'Play' red when mouse is over
  mouseOverPlay() {
    let color = {
      r: 0,
      g: 0,
      b: 0
    };
    if (this.mouseIsOverPlay()) {
      color = this.text.play.mouseOverColor;
    }

    // display moving `Play` from 'The Play'
    this.displayText(this.text.play.size, this.text.play.string, this.text.play.x, this.text.play.y, color);
  }

  // method that turns 'Play' red when mouse is over (Created with Pippin Barr)
  mouseIsOverPlay() {
    textFont(`Impact`)
    textSize(this.text.play.size);
    let w = textWidth(this.text.play.string);
    let h = textAscent();
    // if mouse is over text
    if (mouseX > this.text.play.x - w / 2 &&
      mouseX < this.text.play.x + w / 2 &&
      mouseY > this.text.play.y - h / 2 &&
      mouseY < this.text.play.y + h / 2) {
      return true;
    } else {
      return false;
    };
  }

  mousePressed() {
    if (this.mouseIsOverPlay()) {
      // activate the fade into red
      this.fade.active = true;
      this.text.kill.vx = 1
      gunshotSFX.play();
      babySFX.play();
      // Make the act 1 appear after 9 seconds
      setTimeout(function() {
        currentState = new Act1(width / 2, 610, 700, 80, world, 0, curtainPNG, donaldPNG, jordanPNG, lindaPNG);
      }, 12000);
    };
  }

  // fade to red method
  displayBlackout() {
    if (this.fade.active) {
      push();
      this.fade.fadeIn = this.fade.fadeIn + this.fade.speed;
      noStroke();
      fill(this.fade.color.r, this.fade.color.g, this.fade.color.b, this.fade.fadeIn);
      rect(this.fade.x, this.fade.y, cnvX, cnvY);
      pop();
    };
  }

  // method for the droplets of blood
  bloodDrop() {
    this.displayBlood()
    if (frameCount % 80 === 0) {
      bloodDrops.push(new Blood(random(65, 210), 200, 22, 22, world));
    };
  }

  // display the droplets of blood
  displayBlood() {
    for (let i = 0; i < bloodDrops.length; i++) {
      bloodDrops[i].update();
      if (bloodDrops[i].offScreen()) {
        // remove drops from the world so the physics engine stops taking care of them when they leave screen
        bloodDrops[i].removeFromWorld();
        // remove drops from the array
        bloodDrops.splice(i, 1);
        // prevents the skipping of a drop when removed from the array by backing up 1 // Daniel Shiffman tip
        i--;
      };
    };
  }
}
