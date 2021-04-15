class Simulation {
  constructor() {
    this.start = false;
    this.days = 0;

    this.baby = new Baby();


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
        "submit": function() {
          $(this).dialog(`close`);
          setTimeout(() => {
            $("#question_1").dialog("open");
          }, 3000);
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
      height: 500,
      draggable: false,
      closeOnEscape: false,
    });

    // choice
    $(`#question_1`).dialog({
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: "#p5js-canvas"
      },
      autoOpen: false,
      modal: true,
      height: 500,
      draggable: false,
      closeOnEscape: false,
    });

    $(`.ui-dialog-titlebar-close`).remove();


    // set timeouts
    // Add play function
    setTimeout(() => {
      $("#play_progressbar").show();
      $("#play").show();
      $("#play_added").dialog("open");
    }, 3000);

    // set timeout


  }

  update() {
    this.baby.update();
    if (frameCount % 90 === 0) {
      this.days = this.days + 1
      $("#day").text(this.days)
    }
    this.feedProgressBar();
    this.playProgressBar();
    this.changeProgressBar();

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

  keyPressed() {

  }
}
