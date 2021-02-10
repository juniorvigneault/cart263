class Box1 {
  constructor(x, y, r, world) {
    let options = {
      // friction against the rectangles 0 = hey slide off each other
      // 1 = they stick more together
      friction: 1,
      // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
      restitution: 0
    }
    this.body = Bodies.circle(x, y, r, options);
    // converts radius to diameter
    this.r = r *2;
    World.add(world, this.body);
    this.fill = {
      r: random(0,250),
      g: 100,
      b: random(60,80)
    }
    this.screenLimit = height + 200;
  }

  update() {
    this.display();
  }

  display() {
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    ellipseMode(CENTER);
    noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(this.fill.r, this.fill.g, this.fill.b)
    ellipse(0,0, this.r)
    pop();
  }

  removeFromWorld(){
    World.remove(world,this.body);
  }

  offScreen(){
    let pos = this.body.position;
    return(pos.y > this.screenLimit);
  }
}
