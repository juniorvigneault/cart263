class Box1 {
  constructor(x, y, w, h, world) {
    let options = {
      // friction against the rectangles 0 = hey slide off each other
      // 1 = they stick more together
      friction: 1,
      // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
      restitution: 0
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.fill = {
      r: random(0,250),
      g: 100,
      b: random(60,80)
    }
  }

  update() {
    this.display();
  }

  display() {
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(this.fill.r, this.fill.g, this.fill.b)
    rect(0,0, this.w, this.h)
    pop();
  }
}
