class Instructions {
  constructor(){
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

    $(`#baby_name_box`).dialog({
      buttons: {
        "name": function() {
          $(this).dialog(`close`);
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

    $(`.ui-dialog-titlebar-close`).remove();

  }
  update(){

  }

  keyPressed(){

  }

  mousePressed(){

  }

}
