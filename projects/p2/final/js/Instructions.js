class Instructions {
  constructor(){
    $("#p5js-canvas").hide();
    $("#progress_bars").hide();
    $("#ui").hide();
    $("#day_in_life").hide();
    $("#play_added").hide();
    $("#question_1").hide();

    $(`#baby_name_box`).dialog({
      buttons: {
        "submit": function() {
          $(this).dialog(`close`);
          babyName = $(`#nameInput`).val();
          $(".baby_name").text(babyName);
          $("#instructions").dialog("open");
        }
      },
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: window
      },
      modal: true,
      height: 300,
      draggable: false,
      closeOnEscape: false,
    });

    $(`#instructions`).dialog({
      buttons: {
        "submit": function() {
          $(this).dialog(`close`);
          currentState = new Simulation();
          $("#p5js-canvas").show();
          $("#progress_bars").show();
          $("#ui").show();
          $("#day_in_life").show();
        }
      },
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: window
      },
      autoOpen: false,
      modal: true,
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

}
