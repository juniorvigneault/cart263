class Act1 extends Theatre {
  constructor(x, y, w, h, world, a, curtain, donald, jordan, linda, act1) {
    super(x, y, w, h, world, a, curtain, donald, jordan, linda)

    this.act1 = {
      image : act1,
      x : 300,
      y : -40,
      vy : 0,
      speed : 1,
      isMoving: true
    }

    this.blackMamba = new BlackMamba(300, 200, 50, 160, world);

  }

  update() {
    background(0);

    push();
    fillHsluv(99,44,94)
    noStroke();
    triangle(300, -100, 180, 600, 420, 600)
    pop();

    this.blackMamba.update();

    // push();
    // rectMode(CENTER);
    // noStroke();
    // fill(0)
    // rect(300, -50, 300, 300)
    // pop();

    super.update();
    super.curtainLift();



    // push();
    // imageMode(CENTER);
    // image(this.act1.image, this.act1.x, this.act1.y);
    // pop();


    // if (this.act1.isMoving) {
    //   this.act1.y = this.act1.y += this.act1.vy;
    //   this.act1.vy = this.act1.speed;
    //   this.moveact1()
    // }
  }


  // moveact1(){
  //   if (this.act1.y > 299) {
  //     this.act1.isMoving = false
  //
  //     setTimeout(function() {
  //       this.act1.isMoving = true;
  //
  //     }, 4000);
  //   }
  //
  // }



  mousePressed(){
    this.blackMamba.moveActor()
  }
}
