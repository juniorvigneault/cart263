class Blood {
  constructor(x, y, w, h, world) {
    // Dripping blood
    let options = {
      // friction against the drops 0 = hey slide off each other
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
      r: 255,
      g: 0,
      b: 0
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
    fill(this.fill.r, this.fill.g, this.fill.b)
    rect(0, 0, this.w, this.h)
    pop();
  }

// remove droplets from the engine
  removeFromWorld() {
    World.remove(world, this.body);
  }

  offScreen() {
    let pos = this.body.position;
    return (pos.y > this.screenLimit);
  }
}
