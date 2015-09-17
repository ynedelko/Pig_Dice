function Die() {
  this.dieValue = 0;
}

Die.prototype.value = function() {
  this.dieValue = Math.floor(Math.random() * (6)) + 1;
  return dieValue;
};

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

Player.prototype.roll = function() {
  if (Die.value !== 1) {
    this.turnScore += Die.value();
  } else {
    this.turnScore = 0;
  }
};

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};

//Get friends! Don't play a computer--go outside!!!
// function Computer(name, turnScore, totalScore) {
//   this.name = name;
//   this.turnScore = turnScore;
//   this.totalScore = totalScore;
// }

$(document).ready(function() {
  $("form#player").submit(function(event) {
    event.preventDefault();

    var player1Name = $("input#player1Name").val();
    var player2Name = $("input#player2Name").val();
    var Player1 = new Player(player1Name);
    var Player2 = new Player(player2Name);

    var dice = [];
    var diceValue = [];
    // var sumOfDice = 0;


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

    // $("#diceButton").click(function(event){
    //   event.preventDefault();
    //   var totalNumberofDice = parseInt($("#numberOfDice").val());
    //   for (i = 0; i < totalNumberofDice; i++) {
    //     dice.push(new Die(("die" + i), 1));
    //   }
    // });

    // $("#player1roll").off();
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
          sumOfDice += val
        });

        Player1.addScore(sumOfDice);
        $("#player1turn").text(Player1.turnScore);
        alert("Roll again.");
      }
    });

    // $("#player2roll").off();
    $("#player2roll").click(function() {
      dice.forEach(function(die) {
        die.roll();
        diceValue.push(die.value);
      });

      if (diceValue.indexOf(1) != -1 ) {
        alert("Sucks to be you. Turn over. You get nothing. Player 1's turn.");
        Player2.turnScore = 0;
        $("#player2turn").text(Player2.turnScore);
        diceValue = [];
      } else {
        diceValue.forEach(function(val) {
          sumOfDice += val
        });

        Player2.addScore(sumOfDice);
        $("#player2turn").text(Player2.turnScore);
        alert("Roll again.");
      }
    });
//toook the ending off here





  // $("#player1hold").off();
  $("#player1hold").click(function() {
    Player1.hold();
    if (Player1.totalScore >= 100) {
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
        //it keeps going back to 0 after hold. we need to save our scores b/f the hold.
        // Player1.turnScore = 0;
        // Player1.totalScore = 0;
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

  // $("#player2hold").off();
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
        // Player2.turnScore = 0;
        // Player2.totalScore = 0;
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
});
