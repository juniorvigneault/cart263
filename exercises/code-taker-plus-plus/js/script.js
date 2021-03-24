/**
Code Taker
Junior Vigneault

DA VINCI?
*/

// start dialog modal box “solve the code”
"use strict";
$(`#start`).dialog({
  modal: true,
  buttons: {
    "GOTCHA": function(){
      $(this).dialog(`close`);
      $(`#poem`).dialog(`open`)
    }
  }
})

// when code is solved show dialog box that says you're smart
$(`#solved-dialog`).dialog({
  buttons: {
    "I know.": function(){
      $(this).dialog(`close`);
    }
  },
  autoOpen: false
})

// reveal the secret letters
$(`.secret`).on(`mouseover`, function(event){
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

// not opening the riddle at first
$(`#poem`).dialog({
  autoOpen: false

})

// make letters be dropped on target
$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // check if the code is right
    if ($(this).text() === `seven`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
