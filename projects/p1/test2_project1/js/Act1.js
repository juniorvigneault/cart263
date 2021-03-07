class Act1 extends Theatre {
  // first act of the play. Incorporates all the elements from theatre class
  constructor(x, y, w, h, world, a, curtain, donald, jordan, linda) {
    super(x, y, w, h, world, a, curtain, donald, jordan, linda)


    this.x = 300;
    this.y = 500;

    this.theBride = new TheBride(this.x, this.y, 50, 100, world);

    this.roomToneSFXIsPlaying = false;

// for some reason this doesn't work so that's why there is still hard coded numbers for spotlight
    // this.spotlight = {
    //   topCorner : {
    //     x : 300,
    //     y : - 100
    //   },
    //   letfCorner : {
    //     x : - 150,
    //     y : 600
    //   },
    //   rightCorner : {
    //     x : 150,
    //     y : 600
    //   },
    // }
    this.spotlightON = false;

    setTimeout(() => {
      this.spotlightON = true;
      spotSFX.play();
      // spotbuzzSFX.loop();
    }, 7500);
  }

  update() {
    background(0);


    if (this.spotlightON === true) {
      this.displaySpotlight()
      this.theBride.update();
    }

    // play room tone
    if (this.roomToneSFXIsPlaying === false) {
      roomToneSFX.loop();
      this.roomToneSFXIsPlaying = true;
    }


    this.theBride.moveActor()

    super.update();
    super.curtainLift();

  }


  keyPressed() {
    if (keyCode === 32) {
      // sfxLibrary.theBride[0].act1.its_not_my_intention.play();
    }
    console.log(`sword`)
        this.theBride.keyPressed()
  }

  mousePressed(){

  }

  displaySpotlight() {
    // middle spotlight that follows the actor when moving
    push();
    let actorPosition1 = map(this.theBride.body.position.x, 0, 600,0,600)
    let actorPosition2 = map(this.theBride.body.position.x, 0, 600,0,600)
    fillHsluv(99,44,94)
    noStroke();
    triangle(300, -100, actorPosition1 - 150, 600, actorPosition2 + 150, 600)
    pop();
  }
}
