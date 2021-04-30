class Instructions {
  // first state of the program. Hiding all the elements later appearing
  // in the simulation class. This state is when you name your alien.
  constructor() {
    $("#p5js-canvas").hide();
    $("#progress_bars").hide();
    $("#ui").hide();
    $("#day_in_life").hide();
    $("#play_added").hide();
    $("#question_1").hide();
    $("#food-pill").hide();
    $("#clean").hide();
    $("#play").hide();
    $("#congradulations").hide();
    // dialog box to name your alien
    $(`#baby_name_box`).dialog({
      buttons: {
        "name": function() {
          $(this).dialog(`close`);
          // put the name of the alien into a variable to make it appear at other places in the program
          babyName = $(`#nameInput`).val();
          $(".baby_name").text(babyName);
          $("#instructions").dialog("open");
          clickSFX.play();
        }
      },
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: window
      },
      height: 300,
      draggable: false,
      closeOnEscape: false,
    });

    // information dialog box oppened when closing the first box telling that you have to take care of the alien
    $(`#instructions`).dialog({
      buttons: {
        "ok": function() {
          $(this).dialog(`close`);
          currentState = new Simulation();
          $("#p5js-canvas").show();
          $("#progress_bars").show();
          $("#ui").show();
          $("#day_in_life").show();
          $("#food-pill").show();
          $("#clean").show();
          $("#play").show();
          clickSFX.play();
        }
      },
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: window
      },
      autoOpen: false,
      height: 400,
      draggable: false,
      closeOnEscape: false,
    });

    // remove title bar in all dialog boxes
    $(`.ui-dialog-titlebar-close`).remove();

  }
  update() {

  }


  mousePressed() {

  }

}
