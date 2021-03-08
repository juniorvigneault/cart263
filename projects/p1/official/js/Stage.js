class Stage {
  constructor(x, y, w, h, world, a) {
  let options = {
    // option that makes the ground static
    isStatic: true,
    angle: a,
    // friction against the rectangles 0 = hey slide off each other
    // 1 = they stick more together
    friction: 0,
    // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
    restitution: 0
  };
  // create the body of stage
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  // add the stage to the world
  World.add(world, this.body)

  // this.stage = new Stage(width/2, height, 800, 200, world, 0);
}

update(x,y){
  this.display(x,y);
}

display(x, y) {
  let pos = this.body.position;
  let angle = this.body.angle;
  // draw the stage (black rectangle) at the same position than the body
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
