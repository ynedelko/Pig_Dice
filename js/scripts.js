function Player(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = turnScore || 0;
  this.totalScore = totalScore || 0;
}

Player.prototype.addScore = function (die1) {
  this.turnScore = die1 + this.turnScore;
  return this.turnScore;
};

Player.prototype.hold = function() {
  this.totalScore = this.turnScore + this.totalScore;
  return this.totalScore;
};

function Die(name, value) {
  this.name = name;
  this.value = value;
}

Die.prototype.roll = function() {
  this.value = Math.floor(Math.random() * (7 - 1)) + 1;
  return this.value;
};

function Computer(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

$(document).ready(function() {
  $("form#player").submit(function(event) {
    event.preventDefault();

    var player1Name = $("input#player1Name").val();
    var player2Name = $("input#player2Name").val();
    var Player1 = new Player(player1Name);
    var Player2 = new Player(player2Name);

    var dice = [];
    var diceValue = [];
    var diceTotal = 0;

    $(".player1").text(Player1.name);
    $(".player2").text(Player2.name);
    $("#player1score").text(Player1.totalScore);
    $("#player1turn").text(Player1.turnScore);
    $("#player2score").text(Player2.totalScore);
    $("#player2turn").text(Player2.turnScore);

    $("#dice").show();
    //moved down to when they enter dice number.
    $("#player1roll").show();
    $("#player2roll").show();
    $("#player1hold").show();
    $("#player2hold").show();

    $("#diceButton").click(function(event){
      event.preventDefault();
      var diceTotal = parseInt($("#numberOfDice").val());
      for (i = 0; i < diceTotal; i++) {
        dice.push(new Die(("die" + i), 1));
      }
    });

    $("#player1roll").off();
    $("#player1roll").click(function() {
      dice.forEach(function(die) {
        die.roll();
        diceValue.push(die.value);
      });

      if (diceValue.indexOf(1) != -1 ) {
        alert("Sucks to be you. Turn over. You get nothing. Player 2's turn.");
        Player1.turnScore = 0;
        $("#player1turn").text(Player1.turnScore);
        diceValue = [];
      } else {
        diceValue.forEach(function(val) {
          diceTotal += val
        });

        Player1.addScore(diceTotal);
        $("#player1turn").text(Player1.turnScore);
        alert("Roll again.");
      }
    });

    $("#player2roll").off();
    $("#player2roll").click(function() {
      dice.forEach(function(die) {
        die.roll();
        diceValue.push(die.value);
      });
      debugger;

      if (diceValue.indexOf(1) != -1 ) {
        alert("Sucks to be you. Turn over. You get nothing. Player 1's turn.");
        Player2.turnScore = 0;
        $("#player2turn").text(Player2.turnScore);
        diceValue = [];
      } else {
        diceValue.forEach(function(val) {
          diceTotal += val
        });
        debugger;
        Player2.addScore(diceTotal);
        $("#player2turn").text(Player2.turnScore);
        alert("Roll again.");
      }
    });
  });





  $("#player1hold").off();
  $("#player1hold").click(function() {
    Player1.hold();
    if (Player1.totalScore >= 10) {
      alert(Player1.name + " Has Won!")
      if (window.confirm("Play again?")) {
        Player1.turnScore = 0;
        Player1.totalScore = 0;
        $("#player1score").text(Player1.totalScore);
        $("#player1turn").text(Player1.turnScore);
        Player2.turnScore = 0;
        Player2.totalScore = 0;
        $("#player2score").text(Player2.totalScore);
        $("#player2turn").text(Player2.turnScore);

      } else {
        Player1.turnScore = 0;
        Player1.totalScore = 0;
        $("#player1score").text(Player1.totalScore);
        $("#player1turn").text(Player1.turnScore);
        $(".player1").text("Player 1");
        $(".player2").text("Player 2");
        $("#player1roll").hide();
        $("#player2roll").hide();
        $("#player1hold").hide();
        $("#player2hold").hide();
      }
    }
  });

  $("#player2hold").off();
  $("#player2hold").click(function() {
    Player2.hold();
    if (Player2.totalScore >= 100) {
      alert(Player2.name + " Has Won!");
      if (window.confirm("Play again?")) {
        Player2.turnScore = 0;
        Player2.totalScore = 0;
        $("#player2score").text(Player2.totalScore);
        $("#player2turn").text(Player2.turnScore);
        Player1.turnScore = 0;
        Player1.totalScore = 0;
        $("#player1score").text(Player1.totalScore);
        $("#player1turn").text(Player1.turnScore);

      } else {
        Player2.turnScore = 0;
        Player2.totalScore = 0;
        $("#player2score").text(Player2.totalScore);
        $("#player2turn").text(Player2.turnScore);
        $(".player2").text("Player 2");
        $(".player1").text("Player 1");
        $("#player2roll").hide();
        $("#player1roll").hide();
        $("#player2hold").hide();
        $("#player1hold").hide();
      }
    }
  });
  $("input#player1Name").val("")
  $("input#player2Name").val("")
});
