class Box1 {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h);
    this.pos = this.body.position;
    this.angle = this.body.angle;
    this.w = w;
    this.h = h;
    this.add2World = World.add(engine.world, box1)
  }

  update() {
    this.display();
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rect(0,0, this.w, this.h)
    pop();
  }
}
