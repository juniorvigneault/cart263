class Blood {
  constructor(x, y, r, world) {
    // Dripping blood
    let options = {
      // friction against the rectangles 0 = hey slide off each other
      // 1 = they stick more together
      friction: 1,
      // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
      restitution: 0
    }
    this.body = Bodies.circle(x, y, r, options);
    // converts radius to diameter
    this.r = r * 2;
    World.add(world, this.body);
    this.fill = {
      h: 12,
      s: 100,
      l: 50
    }
    // stop handling the blood when offscreen limit
    this.screenLimit = height + 200;
  }

  update() {
    this.display();
  }

  display() {
    // display blood
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    ellipseMode(CENTER);
    noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(this.fill.h, this.fill.s, this.fill.l)
    ellipse(0, 0, this.r)
    pop();
  }

  removeFromWorld() {
    World.remove(world, this.body);
  }

  offScreen() {
    let pos = this.body.position;
    return (pos.y > this.screenLimit);
  }
}
