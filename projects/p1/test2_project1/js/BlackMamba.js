class BlackMamba {
  constructor(x, y, w, h, world) {
    // black mamba body
    let options = {
      // friction against the rectangles 0 = hey slide off each other
      // 1 = they stick more together
      friction: 1,
      // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
      restitution: 1
    }
    this.body = Bodies.rectangle(x, y, h, w, options);
    // converts radius to diameter
    // this.r = r * 2;

    this.w = w;
    this.h = h;

    World.add(world, this.body);
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
    Matter.Body.setVelocity(this.body, {x: 0, y: -5})
  }
}
