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

    this.x = 300;
    this.y = 500;

    this.blackMamba = new BlackMamba(this.x, this.y, 50, 130, world);

  }

  update() {
    background(0);
    // middle spot
    push();
    let x1 = map(mouseX, 0, 600,0,600)
    let x2 = map(mouseX, 0, 600,0,600)
    fillHsluv(99,44,94)
    noStroke();
    triangle(300, -100, x1, 600, x2 + 300, 600)
    pop();
    // right spot
    // push();
    // let x3 = map(x1, 0, 600, 0,600)
    // let x4 = map(x2, 0, 600,0,600)
    // fillHsluv(99,44,94)
    // noStroke();
    // triangle(600, -100, x3, 600, x4 + 300, 600)
    // pop();

    this.blackMamba.update();

    // push();
    // rectMode(CENTER);
    // noStroke();
    // fill(0)
    // rect(300, -50, 300, 300)
    // pop();
    this.blackMamba.moveActor()

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
//  SOLUTION BY PIPPIN ======
  // setTimeout(() => {
  //   this.act1.moving = true;
  //  }, 4000);


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

  keyPressed() {
    this.blackMamba.keyPressed()
  }

  mousePressed(){

  }
}
