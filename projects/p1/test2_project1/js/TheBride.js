class TheBride {
  constructor(x, y, w, h, world) {
    // black mamba body
    let options = {
      // friction against the rectangles 0 = hey slide off each other
      // 1 = they stick more together
      friction: 0.2,
      // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
      restitution: 0,
      density: 0.0019,
      frictionAir: 0.2
        }
    this.body = Bodies.rectangle(x, y, w, h, options);
    // converts radius to diameter
    // this.r = r * 2;

    this.w = w;
    this.h = h;

    World.add(world, this.body);
    console.log(this.body)

    this.stepSFXIsPlaying = false;
  }

  update() {
    this.display();
  }

  display() {
    // display bride
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    rectMode(CENTER);
    noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(99,44,94)
    rect(0, 0, this.w, this.h)
    man.position.x = pos.x
    man.position.y = pos.y - 47
    pop();

  }

  moveActor() {
    if(keyIsDown(RIGHT_ARROW)) {
      Matter.Body.applyForce(this.body, this.body.position, {x: .007, y: 0})
      man.changeAnimation(`rightWalk`)
      man.mirrorX(1);
      this.playStep();
          }
    else if (keyIsDown(LEFT_ARROW)) {
      Matter.Body.applyForce(this.body, this.body.position, {x: -.007, y: 0})
      man.changeAnimation(`rightWalk`);

      man.mirrorX(-1);
      this.playStep();
    }
    else if (this.body.velocity.y > 0.1) {
    //   Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -.3})
      man.changeAnimation(`jumpUp`)
    }
    else {
      man.changeAnimation(`straight`)
      stepSFX.stop();
      this.stepSFXIsPlaying === false
    }
  }

  keyPressed() {
    if (keyCode === UP_ARROW && this.body.velocity.y < 0.1) {
      Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -.3})
      man.changeAnimation(`jumpUp`);
      // console.log(man.changeAnimation(`jumpUp`))
    }
  }

  // play room tone
  playStep(){
  if (this.stepSFXIsPlaying === false) {
    stepSFX.loop();
    this.stepSFXIsPlaying = true;
  }
}
}
