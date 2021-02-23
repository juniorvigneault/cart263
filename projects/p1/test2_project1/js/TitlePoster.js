class TitlePoster {
  // title poster for the game. Click on play to start the game

  constructor(bloodPNG) {
    // create blocks for letters in poster and add them to the world
    // blocks.push(new Block(200, 500, 200, 100, world, 0));

    // pixel blood stain
    this.blood = {
      image: bloodPNG,
      x: 137,
      y: 200
    }
    // yellow bg
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
        size: 200
      },
      bill: {
        x: 300,
        y: 480,
        string: `BILL`,
        size: 200
      },
      the: {
        x: 275,
        y: 800,
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
        y: 800,
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

    this.fade = {
      x: 0,
      y: 0,
      fadeIn: 0,
      speed: 1.5,
      active: false,
      color : {
        r: 255,
        g: 0,
        b: 0
      },

    }
  }

  update() {
    // display yellow bg
    this.display();

    // display blocks for letters
    // this.displayBlocks();

    this.mouseOverPlay();

    // bloodDrops.push(new Blood(random(130, 230), 200, 50,50, world));
    // this.displayText();
    this.mouseOverPlay();

    this.moveTitle();

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
    // `The` from The Play text
    this.displayText(this.text.the.size, this.text.the.string, this.text.the.x, this.text.the.y);
    this.displayText(this.text.kill.size, this.text.kill.string, this.text.kill.x, this.text.kill.y)
    this.displayText(this.text.bill.size, this.text.bill.string, this.text.bill.x, this.text.bill.y)
  }

  displayText(size, string, x, y) {
    push();
    fill(0)
    textFont(`Impact`)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
  }

  moveTitle() {

    this.text.the.y = this.text.the.y += this.text.the.vy;
    this.text.play.y = this.text.play.y += this.text.play.vy;

    if (this.text.the.y < this.text.the.limit) {
      this.text.the.vy = this.text.the.speed;
      this.text.play.vy = this.text.play.speed;
    }
    if (this.text.the.y < this.text.the.final) {
      this.text.the.vy = this.text.the.stop
      this.text.play.vy = this.text.the.stop
    }
  }

  mouseOverPlay() {
    let w = textWidth(this.text.play.string);
    let h = textAscent();
    if (mouseX > this.text.play.x - w / 2 &&
      mouseX < this.text.play.x + w / 2 &&
      mouseY > this.text.play.y - h / 2 &&
      mouseY < this.text.play.y + h / 2) {
        console.log(`HELLO`)
      fill(this.text.play.mouseOverColor.r, this.text.play.mouseOverColor.g, this.text.play.mouseOverColor.b);
    } else {
      fill(this.text.play.color);
    }

    // display moving `Play` from The Play
    this.displayText(this.text.play.size, this.text.play.string, this.text.play.x, this.text.play.y)
  }

  mousePressed() {
    let w = textWidth(this.text.play.string);
    let h = textAscent();
    if (mouseX > this.text.play.x - w / 2 &&
      mouseX < this.text.play.x + w / 2 &&
      mouseY > this.text.play.y - h / 2 &&
      mouseY < this.text.play.y + h / 2) {
      this.fade.active = true;
      // gunshotSFX.play();
      // babySFX.play();
      setTimeout(function() {
        currentState = new Act1(width / 2, 610, 700, 80, world, 0, donaldPNG, jordanPNG);
      }, 9000);
    }
  }

  displayBlackout() {
    if (this.fade.active) {
      push();
      this.fade.fadeIn = this.fade.fadeIn + this.fade.speed;
      noStroke();
      fill(this.fade.color.r, this.fade.color.g, this.fade.color.b, this.fade.fadeIn);
      rect(this.fade.x, this.fade.y, cnvX, cnvY);
      pop();
    }
  }

  // displayBlood() {
  //   for (let i = 0; i < bloodDrops.length; i++) {
  //     bloodDrops[i].update();
  //     if (bloodDrops[i].offScreen()) {
  //       // remove boxes from the world so the physics engine stops taking care of them when they leave screen
  //       bloodDrops[i].removeFromWorld();
  //       // remove box from the array
  //       bloodDrops.splice(i, 1);
  //       // prevents the skipping of a box when removed from the array by backing up 1
  //       i--;
  //     }
  //   }
  // }

  // displayBlocks() {
  //   // draw the blocks
  //   for (let i = 0; i < blocks.length; i++) {
  //     blocks[i].update();
  //   }
  // }
}
