class BlackMamba {
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
    this.body = Bodies.rectangle(x, y, h, w, options);
    // converts radius to diameter
    // this.r = r * 2;

    this.w = w;
    this.h = h;

    World.add(world, this.body);
    console.log(this.body)
  }

  update() {
    this.display();
  }

  display() {
    // display blood
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    rectMode(CENTER);
    noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(200,200,0)
    rect(0, 0, this.w, this.h)
    pop();


  }

  moveActor() {
    if(keyIsDown(RIGHT_ARROW)) {
      Matter.Body.applyForce(this.body, this.body.position, {x: .007, y: 0})
      man.changeAnimation(`rightWalk`)    }
    else if (keyIsDown(LEFT_ARROW)) {
      Matter.Body.applyForce(this.body, this.body.position, {x: -.007, y: 0})
      man.changeAnimation(`leftWalk`);
    }
    // else if (keyIsDown(UP_ARROW)) {
    //   Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -.3})
    //   man.changeAnimation(`jumpUp`)
    // }
    else {
      man.changeAnimation(`straight`)
    }
  }

  keyPressed() {
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -.3})
      man.changeAnimation(`jumpUp`)
      console.log(man.changeAnimation(`jumpUp`))
    }
  }
}
