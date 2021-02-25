class Theatre {
  constructor(x, y, w, h, world, a, curtain, donald, jordan, linda) {
    // STAGE Matter.js setup
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
    World.add(world, this.body);

    // THEATRE VISUALS // Seats + Curtains
    // common characteristics
    this.numSeatsPerRow = 20;

    // front row
    this.frontRow = {
      x: undefined,
      y: 675,
      w: 105,
      h: 140,
      roundCorners: 10,
      stroke: .2,
      distance: 107,
      color: {
        h: 11,
        s: 97,
        l: 5
      },
      colorStroke: {
        h: 100,
        s: 100,
        l: 100
      }
    };
    // middle row
    this.middleRow = {
      x: undefined,
      y: 698,
      w: 125,
      h: 140,
      roundCorners: 10,
      stroke: .5,
      distance: 127,
      color: {
        h: 11,
        s: 97,
        l: 10
      },
      colorStroke: {
        h: 100,
        s: 100,
        l: 100
      }
    };
    // back row
    this.backRow = {
      x: undefined,
      y: 730,
      w: 140,
      h: 140,
      roundCorners: 10,
      stroke: 1,
      distance: 145,
      color: {
        h: 11,
        s: 97,
        l: 19
      },
      colorStroke: {
        h: 100,
        s: 100,
        l: 100
      }
    };


    this.stage = {
      x: 0,
      y: 0,
      color: {
        h: 350,
        s: 2,
        l: 5
      }
    };

    this.curtain = {
      x: 300,
      y: 260,
      image: curtain,
      vy: 0,
      speed:-1,
      isMoving: true
    }

    this.attendee = {
      donald: {
        png: donald,
        x: 145,
        y: 730,
      },
      jordan: {
        png: jordan,
        x: 438,
        y: 720,
      },
      linda: {
        png: linda,
        x: 290,
        y: 725,
      }
    }
  };

  update() {
    this.display();
  }

  display() {
    // this.displayCurtain(this.curtain.image, this.curtain.x, this.curtain.y);
    this.displayStage();
    this.displaySeats();
  }
  // display stage
  displayStage(x, y) {
    let pos = this.body.position;
    let angle = this.body.angle;
    // draw the stage (black rectangle) at the same position than the body
    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(this.stage.color.h, this.stage.color.s, this.stage.color.l);
    noStroke();
    rect(this.stage.x, this.stage.y, this.w, this.h);
    pop();
  };

  displaySeats() {
    // front row
    this.frontRow.x = -10;
    for (let i = 0; i < this.numSeatsPerRow; i++) {
      push();
      rectMode(CENTER);
      noStroke();
      // strokeWeight(this.frontRow.stroke);
      // strokeHsluv(this.frontRow.colorStroke.h, this.frontRow.colorStroke.s, this.frontRow.colorStroke.l);
      fillHsluv(this.frontRow.color.h, this.frontRow.color.s, this.frontRow.color.l);
      rect(this.frontRow.x, this.frontRow.y, this.frontRow.w, this.frontRow.h, this.frontRow.roundCorners);
      // draw seats in a row on the right at a distance from each other
      this.frontRow.x = this.frontRow.x + this.frontRow.distance;
      pop();
    }

    // middle row
    this.middleRow.x = -40;
    for (let i = 0; i < this.numSeatsPerRow; i++) {
      push();
      rectMode(CENTER);
      noStroke();
      // strokeWeight(this.middleRow.stroke);
      // strokeHsluv(this.middleRow.colorStroke.h, this.middleRow.colorStroke.s, this.middleRow.colorStroke.l);
      fillHsluv(this.middleRow.color.h, this.middleRow.color.s, this.middleRow.color.l);
      rect(this.middleRow.x, this.middleRow.y, this.middleRow.w, this.middleRow.h, this.middleRow.roundCorners);
      // draw seats in a row on the right at a distance from each other
      this.middleRow.x = this.middleRow.x + this.middleRow.distance;
      pop();
    }

    // crowd last row
    // DONALD
    this.displayAttendee(this.attendee.donald.png, this.attendee.donald.x, this.attendee.donald.y);
    // JORDAN
    this.displayAttendee(this.attendee.jordan.png, this.attendee.jordan.x, this.attendee.jordan.y);
    // LINDA
    this.displayAttendee(this.attendee.linda.png, this.attendee.linda.x, this.attendee.linda.y);

    // back row
    this.backRow.x = 0;
    for (let i = 0; i < this.numSeatsPerRow; i++) {
      push();
      rectMode(CENTER)
      noStroke();
      // strokeWeight(this.backRow.stroke)
      // strokeHsluv(this.backRow.colorStroke.h, this.backRow.colorStroke.s, this.backRow.colorStroke.l);
      fillHsluv(this.backRow.color.h, this.backRow.color.s, this.backRow.color.l)
      rect(this.backRow.x, this.backRow.y, this.backRow.w, this.backRow.h, this.backRow.roundCorners);
      // draw seats in a row on the right at a distance from each other
      this.backRow.x = this.backRow.x + this.backRow.distance;
      pop();
    };
  };

  displayCurtain(img, x, y) {
    push();
    imageMode(CENTER);
    image(img, x, y);
    pop();
  }
  // displayCurtain() {
  //   // curtain for loop variables
  //   this.curtain.x = 0;
  //   this.curtain.y = 0;
  //   this.curtain.color.l = 32;
  //   this.curtain.width = 22;
  //   this.curtain.end = 10.4;
  //   // drawing the curtain out of squished ellipses
  //   for (let j = 0; j < this.curtain.length; j++) {
  //     for (let i = 0; i < this.curtain.length; i++) {
  //       push();
  //       ellipseMode(CENTER);
  //       noStroke();
  //       fillHsluv(this.curtain.color.h, this.curtain.color.s, this.curtain.color.l);
  //       ellipse(this.curtain.x, this.curtain.y, this.curtain.ellipseW, this.curtain.ellipseH);
  //       // shape the curtain with ellipses a row
  //       this.curtain.x = this.curtain.x + this.curtain.width;
  //       pop();
  //     };
  //     // shape the curtain by repeating the first row of ellipses
  //     this.curtain.y = this.curtain.y + this.curtain.end;
  //     this.curtain.x = 0;
  //     // red to dark red gradient in curtain
  //     this.curtain.color.l = this.curtain.color.l - this.curtain.gradient;
  //   };
  // }

  curtainLift() {
    if (this.curtain.isMoving) {
    this.curtain.y = this.curtain.y += this.curtain.vy
    this.curtain.vy = this.curtain.speed
  }
  if (this.curtain.isMoving && this.curtain.y < - 200) {
    this.curtain.isMoving = false;
  }

  }

  displayAttendee(img, x, y) {
    // donald
    push();
    imageMode(CENTER);
    // this.donald.png.resize(112,308)
    image(img, x, y);
    pop();
  }
};
