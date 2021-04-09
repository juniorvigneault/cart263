class Simulation {
  constructor() {
    this.start = false;

    baby = new Baby();

    $(`#baby_name_box`).dialog({
      buttons: {
        "submit": function() {
          $(this).dialog(`close`);
          babyName = $(`#nameInput`).val();
          $("#baby_name2").text(babyName);
          this.start = true;
        }
      },
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: "#p5js-canvas"
      },
      modal: true,
      height: 240,
      draggable: false,
      closeOnEscape: false,
    });

    $(`.ui-dialog-titlebar-close`).remove();

    $(`#feed`).on(`click`, function(event) {
      console.log(`You fed the baby`);
      baby.feed(baby);
    });

    $(`#play`).on(`click`, function(event) {
      console.log(`You played with baby`);
      baby.play(baby);
    });

    $(`#change`).on(`click`, function(event) {
      console.log(`You changed baby`);
      baby.change(baby);
    });
  }

  update() {
    baby.update();
    if (this.start) {
      if (frameCount % 80 === 0) {
        days = days + 1
        $("#day").text(days)
      }
    }
  }

  feed(baby) {
    baby.color.g = baby.color.g - 200;
  }

  play(baby) {
    baby.speed = 0
  }

  change(baby) {
    baby.size = 100;
    baby.nameSize = 32;
  }

  love(baby) {}

}
