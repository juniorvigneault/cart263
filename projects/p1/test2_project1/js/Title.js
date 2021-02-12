class Title {
  constructor(blood) {

    this.killTextx = width * 0.59;
    this.killTexty = (height * 0.35) * 3.5;

    this.billTextx = width * 0.599;
    this.billTexty = (height * 0.60) * 2.5;

    this.theTextx = width * 0.5;
    this.theTexty = (height * 0.75) * 2.6;
    this.playTextx = width * 0.58;
    this.playTexty = (height * 0.75) * 2.6;

    this.vx;
    this.vy1 = -0.8;
    this.vy2 = -0.8;
    this.bloodImage = blood;
    this.bloodSpatter = false;

    // play gunshot
    this.gunshot = setTimeout(function() {
      gunshotSFX.play();
      babySFX.play();
      this.bloodSpatter = true;
    }, 17600);
  }

  update() {
    this.display();
    this.moveTitle();
  }


  display() {
    // yellow bg
    push();
    fillHsluv(89, 100, 87);
    noStroke();
    rect(0,0,cnvX,cnvY)
    pop();

    // Kill Bill title
    push();
    fill(0)
    textFont(`Impact`)
    textAlign(RIGHT, CENTER);
    textSize(200);
    this.killTextx = width * 0.58
    // killTexty = height * 0.35
    this.billTextx = width * 0.588
    // billTexty = height * 0.60
    text(`KILL`, this.killTextx, this.killTexty);
    text(`BILL`, this.billTextx, this.billTexty);

    // the play text
    push();
    fill(0)
    textFont(`Impact`)
    textAlign(RIGHT, CENTER);
    textSize(30);
    text(`The`, this.theTextx, this.theTexty);
    pop();

    push();
    textFont(`Impact`)
    textAlign(RIGHT, CENTER);
    textSize(30);
    text(`Play`, this.playTextx, this.playTexty);
    pop();

    // black stripe right of screen
    push();
    fill(0);
    noStroke();
    rect(500, 0, 100, height);
    pop();

    // blood spatter when gun is shot
    if (this.bloodSpatter) {
    push();
    imageMode(CENTER);
    image(this.bloodImage, width * 0.3, height * 0.3);
    pop();
    }
  }

  moveTitle() {

    this.killTexty = this.killTexty += this.vy1;
    this.billTexty = this.billTexty += this.vy1;
    this.theTexty = this.theTexty += this.vy2;
    this.playTexty = this.playTexty += this.vy2;

    if (this.killTexty < height * 0.345) {
      this.vy1 = 0;
    }
    if (this.theTexty < height * 0.769) {
      this.vy2 = 0;
    }
  }
}
