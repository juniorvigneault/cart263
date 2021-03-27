class Life {
  constructor(){
  baby = new Baby();
  this.typewriter = new Typewriter();
  // $(`#popup`).dialog({
  //   modal:true,
  //   buttons: [
  //     {
  //     text: "ok",
  //     icon: "ui-icon-heart",
  //     closeOnEscape: false,
  //     click: function(){
  //       $(this).dialog("close");
  //     }
  //   }
  // ],
  // position: {my: "center", at: "center", of: `#p5js-canvas`}
  // });
  // $(`.ui-dialog-titlebar`).remove();

  $(`#feed`).on(`click`, function(event){
    baby.feed();
    setTimeout(function(){
      baby.beingFed = false
    }, 5000);
  });
  }

  update(){
    background(0,52,100);
    baby.update();
    this.typewriter.display()
  }

  keyPressed(){
    if (keyCode === 191) {
      currentState = new Death();
    }
    if (keyCode === 13) {
      this.typewriter.typewrite(`Isn't it beautiful...Life?`, 150, 460)
    }
  }

  mousePressed(){
    baby.mousePressed()
  }
}
