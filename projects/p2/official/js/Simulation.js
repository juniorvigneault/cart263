class Simulation {
  // main game simulation. Your baby is in a box and you have to take care ot it by
  // giving different items and answering hard questions

  constructor() {
    // the days in the life of your child! Starts at 0
    this.days = 6570;

    this.withBackground = true;
    // When turned to true, your child is being washed
    this.wash = false;
    // waves of the bath of your baby!
    this.waves = [];

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
    // how the bath is filled with water
    this.fill = -100;
    // Add baby class to program (displays and move the baby)
    this.baby = new Baby();
    this.numBubbles = 40;

    this.eating = false;
    this.playing = false;
    this.eatingFlash;

    this.hunger = 0;
    this.happiness = false;
    this.sadness = 0;
    this.dirtyness = 0;

    // bgRumbleSFX.loop();
    $(".baby_name").text(babyName);



    // When clicking on each PILL something happens

    $(`#food-pill`).on(`click`, (event) => {

    });

    //
    $(`#clean-button`).on(`click`, (event) => {
      this.eating = true;
      laserSFX.play();
      bubblesSFX.play();
      this.wash = true;
    });

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



    // setTimeout(() => {
    //   $("#play_added").dialog('open')
    // }, 4000);

    // dialog boxes
    // $(`#play_added`).dialog({
    //   buttons: {
    //     "ok": function() {
    //       $(this).dialog(`close`);
    //       // setTimeout(() => {
    //       //   $("#question_1").dialog("open");
    //       // }, 2000);
    //       // $(`#play-button`).hide();
    //       clickSFX.play();
    //     }
    //   },
    //   resizable: false,
    //   position: {
    //     my: "center",
    //     at: "center",
    //     of: "#p5js-canvas"
    //   },
    //   autoOpen: false,
    //   modal: true,
    //   height: 300,
    //   draggable: false,
    //   closeOnEscape: false,
    // });

    // choice
    // $(`#question_1`).dialog({
    //   buttons: {
    //     "Bring in your bed": function() {
    //       $(this).dialog(`close`);
    //       clickSFX.play();
    //
    //     },
    //     "Stay awake": function() {
    //       $(this).dialog(`close`);
    //       clickSFX.play();
    //     }
    //   },
    //   resizable: false,
    //   position: {
    //     my: "center",
    //     at: "center",
    //     of: "#p5js-canvas"
    //   },
    //   autoOpen: false,
    //   modal: true,
    //   height: 500,
    //   draggable: false,
    //   closeOnEscape: false,
    // });

    $(`.ui-dialog-titlebar-close`).remove();

    //make food draggable
    $("#foodimg").on('mouseover', function(event) {
      $(this).draggable({
        classes: {
          "ui-draggable": "food-highlight"
        },
        revert: true
      })
    });

    // //make food draggable
    // $("#cleanimg").on('mouseover', function(event) {
    //   $(this).draggable({
    //     classes: {
    //       "ui-draggable": "food-highlight"
    //     },
    //     revert: true,
    //   })
    // });
    //
    // //make food draggable
    // $("#playimg").on('mouseover', function(event) {
    //   $(this).draggable({
    //     classes: {
    //       "ui-draggable": "food-highlight"
    //     },
    //     revert: true
    //   })
    // });

    // make canvas droppable
    $("#p5js-canvas").droppable({

      classes: {
        "ui-droppable-hover": "canvas-highlight"
      },
      drop: (event, ui) => {
        ui.draggable.effect(`pulsate`);
        this.eating = true;
        feedSFX.play();
        laserSFX.play();
        this.hunger = 0;

      },

    })


      $("#hunger_progressbar").progressbar()
      $("#sadness_progressbar").progressbar()
      $("#dirtyness_progressbar").progressbar()


  }

  update() {
    if (this.withBackground) {
      background(255);
      // display and move the wave
      for (let i = this.waves.length - 1; i >= 0; i--) {
        this.waves[i].update(waveColor);

      }
      if (this.wash) {
        this.bubbles();
        this.dirtyness = 0;
        setTimeout(() => {
          this.numBubbles = this.numBubbles - .2
          setTimeout(() => {
            this.wash = false;
            this.numBubbles = 40;
            this.dirtyness = this.dirtyness + 0.04;
          }, 4000);
        }, 3000);
        console.log(this.wash)
      }

      if (this.eating) {
        this.eatingFlash = random(0, 255)
        this.isEating(this.eatingFlash)
        setTimeout(() => {
          this.eating = false
          waveColor = 0
        }, 300);
      }

      if (this.playing) {
        this.eatingFlash = random(0, 255)
        this.isEating(this.eatingFlash);
        setTimeout(() => {
          this.playing = false
          waveColor = 255
        }, 300);
      }
      if (this.happiness){
        this.sadness = 0;
        setTimeout(() => {
          this.happiness = false
        }, 10000);
      }
      else {
        this.sadness = this.sadness + 0.02;
      }
    }

    if (frameCount % 2 === 0) {
      this.days = this.days - 1
      $("#day").text(this.days)
    }

    this.feedProgressBar();
    this.sadnessProgressBar();
    this.dirtynessProgressBar();
    this.baby.update();

    if (this.days == 6500) {
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

      $("#congradulations").show();
    }
  }
  //
  feedProgressBar() {
    this.hunger = this.hunger + 0.05;
    $("#hunger_progressbar").progressbar({
      value: this.hunger,
      complete: function (event, ui) {
        $(this).effect('pulsate',{times:5}, 3000);
        setTimeout(() => {
          currentState = new Death();
        }, 1000);
      }
    });
  }

  sadnessProgressBar() {
    $("#sadness_progressbar").progressbar({
      value: this.sadness,
      complete: function(event, ui) {
        $(this).effect('pulsate',{times:5}, 3000);
        setTimeout(() => {
          currentState = new Death();
        }, 1000);
      }
    });
  }

  dirtynessProgressBar() {
    this.dirtyness = this.dirtyness + 0.04;
    $("#dirtyness_progressbar").progressbar({
      value: this.dirtyness,
      complete: function(event, ui) {
        $(this).effect('pulsate',{times:5}, 3000);
        setTimeout(() => {
          currentState = new Death();
        }, 1000);
      }
    });
  }

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
