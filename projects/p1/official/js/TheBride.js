class TheBride {
  // Main character, The Bride. Actor on stage, controlled by the user

  constructor(x, y, w, h, world) {
    // The bride body
    let options = {
      // friction against the stage
      friction: 0.2,
      // not bouncing
      restitution: 0,
      // weight
      density: 0.0019,
      // friction against air
      frictionAir: 0.2
        }

    this.body = Bodies.rectangle(x, y, w, h, options);

    this.w = w;
    this.h = h;

    World.add(world, this.body);
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
    fillHsluv(99,44,94);
    rect(0, 0, this.w, this.h);
    actorSprite.position.x = pos.x;
    actorSprite.position.y = pos.y - 40;
    pop();
  }

// make the bride (actor) move and change animation
  moveActor() {
    if(keyIsDown(RIGHT_ARROW)) {
      // walk right
      Matter.Body.applyForce(this.body, this.body.position, {x: .003, y: 0});
      // change animation to walking
      actorSprite.changeAnimation(`rightWalk`);
      // make the animation face right
      actorSprite.mirrorX(1);
          }
    else if (keyIsDown(LEFT_ARROW)) {
      // walk left
      Matter.Body.applyForce(this.body, this.body.position, {x: -.003, y: 0});
      // change animation to walking
      actorSprite.changeAnimation(`rightWalk`);
      // mirror animation to the left
      actorSprite.mirrorX(-1);
    }
    else if (this.body.velocity.y > 0.1) {
      // if jumping, change animation to jump
      // man.changeAnimation(`sword`)
    }
    else if (keyIsDown(32)) {
        actorSprite.changeAnimation(`sword`);
    }
    else {
      // if nothing is moving, animation is set to front
      actorSprite.changeAnimation(`straight`);
    }
  }

  keyPressed() {
    if (keyCode === UP_ARROW && this.body.velocity.y < 0.1) {
      Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -.2});
      // man.changeAnimation(`jumpUp`);
    }


  }

  // play footsteps when walking
  playStep(){
  if (this.stepSFXIsPlaying === false) {
    stepSFX.loop();
    this.stepSFXIsPlaying = true;
  }
}
}
