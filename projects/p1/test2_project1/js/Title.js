class Title {
  constructor() {

    this.killTextx = width * 0.65;
    this.killTexty = (height * 0.35) * 3.5;

    this.billTextx = width * 0.655;
    this.billTexty = (height * 0.60) * 2.5;

    this.theTextx = width * 0.5;
    this.theTexty = (height * 0.75) * 2.6;
    this.playTextx = width * 0.58;
    this.playTexty = (height * 0.75) * 2.6;

    this.vx = random(-1,1);
    this.vy1 = -0.8;
    this.vy2 = -0.8;

    // play gunshot
    this.gunshot = setTimeout(function() {
      gunshotSFX.play();
      babySFX.play();
    }, 17600);
  }

  update() {
    this.display();
    this.moveTitle();
    this.filmGrain();
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

  }

  moveTitle() {

    this.killTexty = this.killTexty += this.vy1;
    this.billTexty = this.billTexty += this.vy1;
    this.theTexty = this.theTexty += this.vy2;
    this.playTexty = this.playTexty += this.vy2;

    this.vx = random(-2,2);
    this.killTextx = this.killTextx + this.vx;

    if (this.killTexty < height * 0.345) {
      this.vy1 = 0;
    }
    if (this.theTexty < height * 0.769) {
      this.vy2 = 0;
    }
  }

filmGrain(){
let grainNumber = random(0,4)
for (let i =0; i < grainNumber; i++) {
let x = random(0,width);
let y = random(0,height);
let size = random(1,2);
stroke(255);
strokeWeight(size);
point(x,y);
}
}

}
