class TitlePoster {
  contructor() {


    // create blocks for letters in poster and add them to the world
    blocks.push(new Block(200, 500, 200, 100, world, 0));

  }

  update() {
    // display yellow bg
    this.display();
    // display blood droplets falling on top of canvas
    this.displayBlood();
    // display blocks for letters
    this.displayBlocks();

    bloodDrops.push(new Blood(width/2, -10, 2, world));

  }

  display() {
    // yellow bg
    push();
    fillHsluv(89, 100, 87);
    noStroke();
    rect(0, 0, cnvX, cnvY)
    pop();
  }

  mouseDragged() {
  }

  mousePressed() {

  }

  displayBlood() {
    for (let i = 0; i < bloodDrops.length; i++) {
      bloodDrops[i].update();
      if (bloodDrops[i].offScreen()) {
        // remove boxes from the world so the physics engine stops taking care of them when they leave screen
        bloodDrops[i].removeFromWorld();
        // remove box from the array
        bloodDrops.splice(i, 1);
        // prevents the skipping of a box when removed from the array by backing up 1
        i--;
      }
    }
  }

displayBlocks(){
  // draw the blocks
    for (let i = 0; i < blocks.length; i++ ) {
    blocks[i].update();
  }
}

}
