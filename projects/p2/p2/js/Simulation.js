class Simulation {
  constructor() {
    this.start = false;
    this.days = 0;
    this.wash = false;

    this.baby = new Baby();

    this.waves = [];
    this.fill = -100;


    for (let i = 0; i < 1; i++) {
      let wave = new Wave(width - 1000 - i * 330, height + this.fill, -3);
      this.waves.push(wave);
    }

    for (let i = 0; i < 300; i++) {
      bubble[i] = new Bubble();
    }

    $(".baby_name").text(babyName);

    $(`#feed`).on(`click`, (event) => {
      console.log(`You fed the baby`);
      this.baby.feed();
    });

    $(`#play`).on(`click`, (event) => {
      console.log(`You played with baby`);
      this.baby.play();
    });

    $(`#change`).on(`click`, (event) => {
      console.log(`You changed baby`);
      this.baby.change();
    });

    $(`#play_progressbar`).hide();
    $(`#play`).hide();


    // dialog boxes
    $(`#play_added`).dialog({
      buttons: {
        "ok": function() {
          $(this).dialog(`close`);
          // setTimeout(() => {
          //   $("#question_1").dialog("open");
          // }, 2000);
        }
      },
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: "#p5js-canvas"
      },
      autoOpen: false,
      modal: true,
      height: 200,
      draggable: false,
      closeOnEscape: false,
    });

    // choice
    $(`#question_1`).dialog({
      buttons: {
        "Bring in your bed": function() {
          $(this).dialog(`close`);
        },
        "Stay awake": function() {
          $(this).dialog(`close`);
        }
      },
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: "#p5js-canvas"
      },
      autoOpen: false,
      modal: true,
      height: 200,
      width: 400,
      draggable: false,
      closeOnEscape: false,
    });

    $(`.ui-dialog-titlebar-close`).remove();


    // set timeouts
    // Add play function
    // setTimeout(() => {
    //   $("#play_progressbar").show();
    //   $("#play").show();
    //   $("#play_added").dialog("open");
    // }, 2000);

    // set timeout

    //make apple draggable
    $("#appleimg").one('mouseover', function(event){
      $(this).draggable({
      classes: {
        "ui-draggable":"food-highlight"
      }
      })
    });

    $("#p5js-canvas").droppable({
      classes: {
        "ui-droppable-hover": "canvas-highlight"
      },
      drop: function(event, ui) {
        ui.draggable.hide({
          effect: 'pulsate'
        })
      },
    })
  }

  update() {
    background(255);

    if (this.wash) {
      this.bubbles();
      // display and move the wave
      for (let i = this.waves.length - 1; i >= 0; i--) {
        this.waves[i].update();
      }
    }

    if (frameCount % 90 === 0) {
      this.days = this.days + 1
      $("#day").text(this.days)
    }

    this.feedProgressBar();
    this.playProgressBar();
    this.changeProgressBar();
    this.baby.update();

  }

  feedProgressBar() {
    $("#feed_progressbar").progressbar({
      value: map(this.baby.color.g, 0, 255, 0, 100),
      disabled: true,
      complete: function(event, ui) {}
    });
  }
  playProgressBar() {
    $("#play_progressbar").progressbar({
      value: map(this.baby.speed, 0, 20, 0, 100),
      disabled: true,
      complete: function(event, ui) {}
    });
  }

  changeProgressBar() {
    // the size of the child is mapped to the progress bar so you can see if its dirty or clean in another way
    $("#change_progressbar").progressbar({
      value: map(this.baby.size, 100, 200, 0, 100),
      disabled: true,
      complete: function(event, ui) {}
    });
  }

  bubbles() {
    push();
    for (let i = 0; i < 10; i++) {
      bubble[i].display();
      bubble[i].move();
    }
    pop();
  }

  keyPressed() {

  }

  mousePressed() {
    this.baby.mousePressed();
  }
}
