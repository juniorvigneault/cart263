class Act1 extends Theatre {
  // first act of the play. Incorporates all the elements from theatre class
  constructor(x, y, w, h, world, a, curtain, donald, jordan, linda) {
    super(x, y, w, h, world, a, curtain, donald, jordan, linda)


    this.x = 300;
    this.y = 500;

    this.theBride = new TheBride(this.x, this.y, 50, 100, world);

    this.roomToneSFXIsPlaying = false;

    this.flashingLight = false;

    this.spotlightON = false;


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
    // make the light flash after 3 seconds
    setTimeout(() => {
      this.flashingLight = true;
    }, 3000);
    // make the light flash again after 4.5 seconds
    setTimeout(() => {
      this.flashingLight = true;

    }, 4500);
    // make the opening song play while the curtain lifts
    setTimeout(() => {
      openingSFX.play();
    }, 6000);
    // turn on spotlight and reveal actor after 13 seconds
    setTimeout(() => {
      this.spotlightON = true;
      spotSFX.play();
      spotbuzzSFX.loop();
    }, 21200);
  }

  update() {
    background(0);

    // if the spotlight is on than the actor is displayed on stage with the light of projector
    if (this.spotlightON === true) {
      this.displaySpotlight()
      this.theBride.update();
    }

    // play room tone on loop and crowd chatting just at the beggining of the act
    if (this.roomToneSFXIsPlaying === false) {
      roomToneSFX.loop();
      crowdSFX.play();
      this.roomToneSFXIsPlaying = true;
    }

    // move the actor during act 1
    this.theBride.moveActor();

    super.update();
    // make the curtain lift
    super.curtainLift();

    if (this.flashingLight) {
      // if the light is flashing, make black rectangle appear on top of everything for half a second twice
      push();
      // black rectangle with opacity to make it look like a closed light
      fill(0,0,0,99);
      noStroke();
      rect(0,0,width, height);
      pop();
      // lights back on after half a second
      setTimeout(() => {
        this.flashingLight = false;
      }, 500);
    }

  }


  keyPressed() {
    // if actor is appearing on stage and user presses space bar, sword sound is triggered
    if (keyCode === 32 && this.spotlightON === true) {
      // Play sword swoop sound in the sound data library
      sfxLibrary.theBride[0].act1.fight_sound.play();
    }
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
