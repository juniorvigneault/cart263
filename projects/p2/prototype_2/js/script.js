/**
Code Taker
Junior Vigneault

DA VINCI?
*/

"use strict";

$(`#solved-dialog`).dialog({
  buttons: {
    "I know.": function(){
      $(this).dialog(`close`);
    }
  },
  autoOpen: false
})

$(`.secret`).on(`mouseover`, function(event){
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // check if the code is right
    if ($(this).text() === `Theremin`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
