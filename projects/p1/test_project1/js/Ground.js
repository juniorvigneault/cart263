class Ground {
  constructor(x, y, w, h, world, a) {
    let options = {
      // option that makes the ground static
      isStatic: true,
      angle: a,
      friction: 0,
      restitution: 0
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body)
  }

  update(x,y){
    this.display(x,y);
  }

  display(x, y) {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(0, 0, 100);
    noStroke();
    rect(0, 0, this.w, this.h);
    pop();
  }
}
