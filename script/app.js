var myGame = new DrumGame();


$(document).ready(function() {

  $("#intro")[0].play();
  $("#start-button").on("click", function() {
    myGame.startGame();
  });

  $("#stop-button").on("click", function() {
    myGame.startMusic();
  });
})

$(".kits LI").click(function() {
  $(".kits LI").removeClass("selected");
  $(this).addClass("selected");
  myGame.kit = $(this).attr("id");
});


$(document).keydown(function(event) {

  var keycode = event.keyCode || event.which;

  switch (keycode) {
    case 65:
      myGame.playSound("crash");
      myGame.userSequence("crash");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      break;
    case 83:
      myGame.playSound("snare");
      myGame.userSequence("snare");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      break;
    case 75:
      myGame.playSound("kick");
      myGame.userSequence("kick");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      console.log(myGame.userSounds);
      break;
    case 32:
      myGame.playSound("charly");
      myGame.userSequence("charly");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      console.log(myGame.userSounds);
      break;
    case 89:
      myGame.playSound("tom1");
      myGame.userSequence("tom1");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      console.log(myGame.userSounds);
      break;
    case 84:
      myGame.playSound("tom2");
      myGame.userSequence("tom2");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      console.log(myGame.userSounds);
      break;
    case 81:
      myGame.playSound("ride");
      myGame.userSequence("ride");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      console.log(myGame.userSounds);
      break;
    case 87:
      myGame.playSound("clap");
      myGame.userSequence("clap");
      if (myGame.compareLengthSequence()) {
        myGame.compareSequence()
      }
      console.log(myGame.userSounds);
      break;

      case 76:
        myGame.playSound("synth");
        myGame.userSequence("synth");
        if (myGame.compareLengthSequence()) {
          myGame.compareSequence()
        }
        console.log(myGame.userSounds);
        break;


  }
  


  if (keycode === 76 || keycode === 87 || keycode === 81 || keycode === 65 || keycode === 83 || keycode === 75 || keycode === 32 || keycode === 89 || keycode === 84) {
    event.stopPropagation();
    return false;
  }
});
