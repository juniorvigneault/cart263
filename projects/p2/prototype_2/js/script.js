/**
Code Taker
Junior Vigneault

DA VINCI?
*/

"use strict";

$(`#log-in-box`).dialog({
  buttons: {
    "log in": function(){
      $(this).dialog(`close`);
    }
  },
  show: { effect: "blind", duration: 1000},
  resizable: false,
  position: { my: "center", at: "center", of: window },
  modal: true,
  height: 400,
  draggable: false,
  closeOnEscape: false,
})
