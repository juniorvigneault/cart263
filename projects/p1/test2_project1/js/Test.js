class Test {
  constructor() {

  }

  update(){
    background(150);

    // stage
    push();
    rectMode(CENTER);
    rect(width/2, 610, 700, 80)
    pop();

    // front row
    let x3 = -10;

    for (let i = 0; i < 100; i++) {
      push();
      rectMode(CENTER)
      strokeHsluv(100,100,100);
      fillHsluv(0,0,0)
      rect(x3,675, 105, 140, 10);
      x3 = x3 + 107;
      pop();
    }

// middle row
    let x1 = - 40;

    for (let i = 0; i < 100; i++) {
      push();
      rectMode(CENTER)
      strokeHsluv(100,100,100);
      fillHsluv(0,0,0)
      rect(x1,698, 125, 140, 10);
      x1 = x1 + 127;
      pop();
    }

// back row
    let x2 = 0;

    for (let i = 0; i < 100; i++) {
      push();
      rectMode(CENTER)
      strokeHsluv(100,100,100);
      fillHsluv(0,0,0)
      rect(x2,730, 140, 140, 10);
      x2 = x2 + 142;
      pop();
    }

// curtain
  let x4 = 0
  let y = 0
  for (let j = 0; j < 40;  j++) {


  for (let i = 0; i < 30; i++) {
    push();
    ellipseMode(CENTER);
    strokeHsluv(0,0,0);
    fillHsluv(100,100,100);
    ellipse(x4, y, 30);
    x4 = x4 + 30
    pop();
  }
  y = y + 10;
  x4 = 0;
}

  }
}
