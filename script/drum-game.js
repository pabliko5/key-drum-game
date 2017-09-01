function DrumGame() {
  this.sounds = [
    ["kick", "kick", "snare", "kick", "kick", "snare", ],
    ["kick", "kick","snare" ,"kick", "kick", "kick", "snare", "kick"],
    ["snare", "snare", "snare", "kick", "snare", "kick"],
    ["kick", "kick", "kick", "snare", "kick", "snare"]
  ];
  this.sequence = [];
  this.userSounds = [];
  this.userKeyDownCount = 0;
  this.round = 1;
  this.life = 30;
  this.kit = 'gmkit';
}


DrumGame.prototype.startGame = function() {
  $("#intro")[0].pause();
  this.addSounds();
  this.playSequence();
};

DrumGame.prototype.startMusic = function() {
  $("#demo")[0].play();
}


DrumGame.prototype.addSounds = function() {
  var randomSounds = Math.floor(Math.random() * 4);
  for (i = 0; i < this.sounds.length; i++) {
    this.sequence.push(this.sounds[randomSounds][i]);
  }
};

DrumGame.prototype.playSound = function(sound) {
  var audio = new Audio('audio/' + this.kit + '/' + sound + '.flac');
  audio.play();

  $("#" + sound).addClass("pressed");
  setTimeout(function() {
    $("#" + sound).removeClass("pressed");
  }, 70);
};


DrumGame.prototype.playSequence = function() {
  var that = this;
  i = 0;
  var soundInterval = setInterval(function() {
    that.playSound(that.sequence[i]);
    i++;
    if (i >= that.sequence.length) {
      clearInterval(soundInterval);
    }
  }, 1000);
  /*
    Modificar valor batuta
  */
  var valueBattuta = document.getElementById("battuta");
  valueBattuta.innerHTML = "8";
}

DrumGame.prototype.userSequence = function(soundinput) {
    this.userSounds.push(soundinput);
}

DrumGame.prototype.compareLengthSequence = function(){
  if(this.sequence.length == this.userSounds.length) {
    return true;
  } else {
    return false;
  }
}

DrumGame.prototype.compareSequence = function (){
  var controler = false
  for (var i = 0; i < this.sequence.length; i++) {
    this.sequence[i] == this.userSounds[i] ? controler=true : controler=false;
  }
  controler ? this.userSounds = [] : this.lifeDown();
}

DrumGame.prototype.lifeDown = function() {
  this.userSounds = []
  if(this.life > 0) {
    this.life -= 1
    $("#score").text(this.life)
  } else {
    this.gameOver()
  }
}

DrumGame.prototype.gameOver = function() {
  alert("Game Over!")
  location.reload();
}
