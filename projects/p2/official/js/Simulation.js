class Simulation {
  // main game simulation. Your alien is in a filled tank and you have to take care ot it by
  // giving different items and clicking different buttons
  constructor() {
    // the days in the life of your alien before it reaches 18 years old!
    this.days = 6570;
    // starts with having a background so when playing with alien background dissapears
    this.withBackground = true;
    // When turned to true, your alien is being washed
    this.wash = false;
    // wave in the tank of alien!
    this.waves = [];
    // wave
    this.waveColor = 255;
    // creating the waves using sinewave in the wave classe.
    for (let i = 0; i < 1; i++) {
      waveColor = 0;
      let wave = new Wave(width, height + this.fill, 0, waveColor);
      this.waves.push(wave);
    }
    // creating the bubbles of the bath using the bubble class
    for (let i = 0; i < 40; i++) {
      bubble[i] = new Bubble();
    }
    this.numBubbles = 40;

    // how the bath is filled with water
    this.fill = -100;
    // Add baby class to program (displays and move the baby)
    this.baby = new Baby();

    // when eating and playing then turned to true and triggers different events
    // activated when clicking on buttons
    this.eating = false;
    this.playing = false;

    // restart the progress bars when clicking on buttons and feeding
    this.hunger = 0;
    this.happiness = false;
    this.sadness = 0;
    this.dirtyness = 0;

    // remove title bar dialog boxes
    $(`.ui-dialog-titlebar-close`).remove();


    // starting the background ambiance
    bgRumbleSFX.loop();
    // make the name of alien appear with the name input from instrucions
    $(".baby_name").text(babyName);


    // when clicking clean button, triggers sounds and turns the bubbles on
    $(`#clean-button`).on(`click`, (event) => {
      // turns eating true because of triggers the flashing effect created in eating
      this.eating = true;
      laserSFX.play();
      bubblesSFX.play();
      this.wash = true;
    });

    // when clicking play button, triggers sounds and making the background dissappear
    // and leave alien traces to create a playful vibe for 15 seconds
    $(`#play-button`).on(`click`, (event) => {
      this.playing = true;
      this.happiness = true;
      laserSFX.play();
      bgRumbleSFX.stop();
      setTimeout(() => {
        this.withBackground = false;
        playSFX.play();
      }, 500);
      setTimeout(() => {
        this.withBackground = true;
        this.eating = true;
        bgRumbleSFX.loop();
        laserSFX.play();
      }, 15000);
    });

    //make food draggable
    $("#foodimg").on('mouseover', function(event) {
      $(this).draggable({
        classes: {
          "ui-draggable": "food-highlight"
        },
        revert: true
      })
    });

    // make p5 canvas droppable
    $("#p5js-canvas").droppable({
      classes: {
        // make the p5 canvas border dotted and blue when pill is hovering
        "ui-droppable-hover": "canvas-highlight"
      },
      drop: (event, ui) => {
        // make food pill pulse when dropped on canvas
        ui.draggable.effect(`pulsate`);
        this.eating = true;
        feedSFX.play();
        laserSFX.play();
        // resseting the progressbar
        this.hunger = 0;
      },
    })

    // display 3 progress bars
    $("#hunger_progressbar").progressbar()
    $("#sadness_progressbar").progressbar()
    $("#dirtyness_progressbar").progressbar()
  }

  // displaying alien, wave in tank, bubbles when washing, background or no background when playing
  update() {
    // if not playing = background is there with black wave in tank
    if (this.withBackground) {
      background(255);
      // display and move the wave
      for (let i = this.waves.length - 1; i >= 0; i--) {
        this.waves[i].update(waveColor);
      }
      // if the alien is being washed
      if (this.wash) {
        // display bubbles
        this.bubbles();
        // reset progressbar
        this.dirtyness = 0;
        // remove bubbles after 4 seconds
        setTimeout(() => {
          // remove bubbles gradually
          this.numBubbles = this.numBubbles - .2
          setTimeout(() => {
            this.wash = false;
            this.numBubbles = 40;
            this.dirtyness = this.dirtyness + 0.04;
          }, 4000);
        }, 3000);
      }
      // if eating button is pressed then eating (flashing white background for 300 ms)
      if (this.eating) {
        this.eatingFlash = random(0, 255)
        this.isEating(this.eatingFlash)
        setTimeout(() => {
          this.eating = false
          waveColor = 0
        }, 300);
      }
      // if playing button is pressed the background flashes then dissappears
      // so the alien leaves playful traces
      if (this.playing) {
        // random flashing before effect (used also when feeding and washing)
        this.eatingFlash = random(0, 255)
        this.isEating(this.eatingFlash);
        setTimeout(() => {
          this.playing = false
          waveColor = 255
        }, 300);
      }
      // when pressing the play button, resets the progress bar to 0 and keeps it at 0
      // until the background is back and the playing time is done
      if (this.happiness) {
        this.sadness = 0;
        setTimeout(() => {
          this.happiness = false
        }, 10000);
      } else {
        this.sadness = this.sadness + 0.02;
      }
    }
    // Countdown of days going down from 18 years old to 0
    if (frameCount % 2 === 0) {
      this.days = this.days - 1
      $("#day").text(this.days)
    }
    // functions controlling the progress bars
    this.feedProgressBar();
    this.sadnessProgressBar();
    this.dirtynessProgressBar();
    this.baby.update();
    // if alien is 18 years old, hide everything (canvas, progressbars and buttons)
    // and show congradulations message (YOU WON!)
    if (this.days == 0) {
      $('body').addClass('ending')
      $("#p5js-canvas").hide();
      $("#progress_bars").hide();
      $("#ui").hide();
      $("#day_in_life").hide();
      $("#play_added").hide();
      $("#question_1").hide();
      $("#food-pill").hide();
      $("#clean").hide();
      $("#play").hide();
      // congradulations appears. The end! Its very simple, I wish it was funnier!
      $("#congradulations").show();
    }
  }

  // map the hunger progressbar
  feedProgressBar() {
    this.hunger = this.hunger + 0.05;
    $("#hunger_progressbar").progressbar({
      // map the value with how hungry alien is
      value: this.hunger,
      complete: function(event, ui) {
        // progressbar pulses when complete
        $(this).effect('pulsate', {
          times: 5
        }, 3000);
        // Death when failing to take care of the alien and progressbar is full
        setTimeout(() => {
          currentState = new Death();
        }, 1000);
      }
    });
  }

  // map the sadness progressbar
  sadnessProgressBar() {
    $("#sadness_progressbar").progressbar({
      // map the value with how sad the alien is
      value: this.sadness,
      complete: function(event, ui) {
        // progressbar pulses when complete
        $(this).effect('pulsate', {
          times: 5
        }, 3000);
        // Death when failing to take care of the alien and progressbar is full
        setTimeout(() => {
          currentState = new Death();
        }, 1000);
      }
    });
  }

  // map the dirtyness progressbar
  dirtynessProgressBar() {
    this.dirtyness = this.dirtyness + 0.04;
    $("#dirtyness_progressbar").progressbar({
      // map the value with how dirty the alien is
      value: this.dirtyness,
      complete: function(event, ui) {
        // progressbar pulses when complete
        $(this).effect('pulsate', {
          times: 5
        }, 3000);
        setTimeout(() => {
          // Death when failing to take care of the alien and progressbar is full
          currentState = new Death();
        }, 1000);
      }
    });
  }

  // display and move bubbles
  bubbles() {
    push();
    for (let i = 0; i < this.numBubbles; i++) {
      bubble[i].display();
      bubble[i].move();
    }
    pop();
  }

  isEating(color) {
    console.log(waveColor)
    waveColor = color;
  }

  keyPressed() {

  }

  mousePressed() {
    this.baby.mousePressed();
  }
}
