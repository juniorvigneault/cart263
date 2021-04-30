class Life {
  // this is the main simulation part, it where the user interacts with Life
  constructor() {
    // add the baby class to the simulation. The baby is the interactive ellipse.
    baby = new Baby();
    // add waves to the simulation. They are in the background and moving.
    this.waves = [];
    for (let i = 0; i < 10; i++) {
      let wave = new Wave( i * 200, - 100, 62);
      this.waves.push(wave);
    }
    for (let i = 0; i < 0; i++) {
      let wave = new Wave(width - 270 - i * 200, height, -62);
      this.waves.push(wave);
    }

    // add typewriter class. This typewriter will narrate the story and help the user interact with Life
    this.typewriter = new Typewriter(mainFont);
    // write life when starting
    this.typewriter.typewrite(`...Life...`, width / 2 - 30, height - 200)
    // play watery like background ambiance
    ambianceRumble.loop();
  }

  // acts like the draw function. Calls the function for the baby like move and displays the typewriter.
  update() {
    background(255);
    // display and move the wave
    for (let i = this.waves.length - 1; i >= 0; i--) {
      this.waves[i].update();
    }
    // background(0,52,100);
    baby.update();
    this.typewriter.display()

  }

  // press '/' to swith to death state which is not much yet
  keyPressed() {
    if (keyCode === 191) {
      currentState = new Death();
    }
    // press enter to start the typewriter effect
    if (keyCode === 13) {
      this.typewriter.typewrite(`...Life...`, width / 2 - 30, height - 200)
    }
  }
  // Give love to the baby by clicking on it
  mousePressed() {
    baby.mousePressed()
  }
}
