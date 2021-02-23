class Blood {
  constructor(x, y, w, h, world) {
    // Dripping blood
    let options = {
      // friction against the rectangles 0 = hey slide off each other
      // 1 = they stick more together
      friction: 0,
      // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
      restitution: 1
    }
    this.body = Bodies.rectangle(x, y, h, w, options);
    // converts radius to diameter
    // this.r = r * 2;

    this.w = w;
    this.h = h;

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
    rectMode(CENTER);
    noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(this.fill.h, this.fill.s, this.fill.l)
    rect(0, 0, this.w, this.h)
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
