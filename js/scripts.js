function Die() {
  this.dieValue = 0;
}

Die.prototype.value = function() {
  this.dieValue = Math.floor(Math.random() * (6)) + 1;
  return this.dieValue;
};

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.turn = false;
}

Player.prototype.roll = function() {
  var die = new Die();
  var rollResult = die.value()
  if (rollResult !== 1) {
    this.turnScore += rollResult;
  } else {
    this.turnScore = 0;
    this.turn = false;
  }
};

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  this.turn = false;
};


$(document).ready(function() {
  var player1 = new Player ("player1");
  player1.turn = true;
  var player2 = new Player ("player2");
  player2.turn = false;

$("#player1roll").click(function() {
  player1.roll();

  var newTurnScore = player1.turnScore;
  var newTotalScore = player1.totalScore;
  $(".player1TotalScore").text(newTotalScore);
  $(".player1TurnScore").text(newTurnScore);
  if(player1.turn === false) {
    player2.turn = true;
    }
});

$("#player1hold").click(function() {
  player1.hold();

  var newTurnScore = 0;
  var newTotalScore = player1.totalScore;
  $(".player1TotalScore").text(newTotalScore);
  $(".player1TurnScore").text(newTurnScore);
  if(player1.turn === false) {
    player2.turn = true;
    }
});


$("#player2roll").click(function() {
  player2.roll();

  var newTurnScore = player2.turnScore;
  var newTotalScore = player2.totalScore;
  $(".player2TotalScore").text(newTotalScore);
  $(".player2TurnScore").text(newTurnScore);
  if(player2.turn === false) {
    player1.turn = true;
    }
});

$("#player2hold").click(function() {
  player2.hold();

  var newTurnScore = 0;
  var newTotalScore = player2.totalScore;
  $(".player2TotalScore").text(newTotalScore);
  $(".player2TurnScore").text(newTurnScore);
  if(player2.turn === false) {
    player1.turn = true;
    }
});
});

    // $(".player1").text(Player1.name);
    // $(".player2").text(Player2.name);
    // $("#player1score").text(Player1.totalScore);
    // $("#player1turn").text(Player1.turnScore);
    // $("#player2score").text(Player2.totalScore);
    // $("#player2turn").text(Player2.turnScore);

    // $("#dice").show();
    //moved down to when they enter dice number.
    // $("#player1roll").show();
    // $("#player2roll").show();
    // $("#player1hold").show();
    // $("#player2hold").show();

    // $("#diceButton").click(function(event){
    //   event.preventDefault();
    //   var totalNumberofDice = parseInt($("#numberOfDice").val());
    //   for (i = 0; i < totalNumberofDice; i++) {
    //     dice.push(new Die(("die" + i), 1));
    //   }
    // });

    // $("#player1roll").off();
//     $("#player1roll").click(function() {
//       dice.forEach(function(die) {
//         die.roll();
//         diceValue.push(die.value);
//       });
//
//
//       if (diceValue.indexOf(1) != -1 ) {
//         alert("Sucks to be you. Turn over. You get nothing. Player 2's turn.");
//         Player1.turnScore = 0;
//         $("#player1turn").text(Player1.turnScore);
//         diceValue = [];
//       } else {
//         diceValue.forEach(function(val) {
//           sumOfDice += val
//         });
//
//         Player1.addScore(sumOfDice);
//         $("#player1turn").text(Player1.turnScore);
//         alert("Roll again.");
//       }
//     });
//
//     // $("#player2roll").off();
//     $("#player2roll").click(function() {
//       dice.forEach(function(die) {
//         die.roll();
//         diceValue.push(die.value);
//       });
//
//       if (diceValue.indexOf(1) != -1 ) {
//         alert("Sucks to be you. Turn over. You get nothing. Player 1's turn.");
//         Player2.turnScore = 0;
//         $("#player2turn").text(Player2.turnScore);
//         diceValue = [];
//       } else {
//         diceValue.forEach(function(val) {
//           sumOfDice += val
//         });
//
//         Player2.addScore(sumOfDice);
//         $("#player2turn").text(Player2.turnScore);
//         alert("Roll again.");
//       }
//     });
// //toook the ending off here
//
//
//
//
//
//   // $("#player1hold").off();
//   $("#player1hold").click(function() {
//     Player1.hold();
//     if (Player1.totalScore >= 100) {
//       alert(Player1.name + " Has Won!")
//       if (window.confirm("Play again?")) {
//         Player1.turnScore = 0;
//         Player1.totalScore = 0;
//         $("#player1score").text(Player1.totalScore);
//         $("#player1turn").text(Player1.turnScore);
//         Player2.turnScore = 0;
//         Player2.totalScore = 0;
//         $("#player2score").text(Player2.totalScore);
//         $("#player2turn").text(Player2.turnScore);
//
//       } else {
//         //it keeps going back to 0 after hold. we need to save our scores b/f the hold.
//         // Player1.turnScore = 0;
//         // Player1.totalScore = 0;
//         $("#player1score").text(Player1.totalScore);
//         $("#player1turn").text(Player1.turnScore);
//         $(".player1").text("Player 1");
//         $(".player2").text("Player 2");
//         $("#player1roll").hide();
//         $("#player2roll").hide();
//         $("#player1hold").hide();
//         $("#player2hold").hide();
//       }
//     }
//   });
//
//   // $("#player2hold").off();
//   $("#player2hold").click(function() {
//     Player2.hold();
//     if (Player2.totalScore >= 100) {
//       alert(Player2.name + " Has Won!");
//       if (window.confirm("Play again?")) {
//         Player2.turnScore = 0;
//         Player2.totalScore = 0;
//         $("#player2score").text(Player2.totalScore);
//         $("#player2turn").text(Player2.turnScore);
//         Player1.turnScore = 0;
//         Player1.totalScore = 0;
//         $("#player1score").text(Player1.totalScore);
//         $("#player1turn").text(Player1.turnScore);
//
//       } else {
//         // Player2.turnScore = 0;
//         // Player2.totalScore = 0;
//         $("#player2score").text(Player2.totalScore);
//         $("#player2turn").text(Player2.turnScore);
//         $(".player2").text("Player 2");
//         $(".player1").text("Player 1");
//         $("#player2roll").hide();
//         $("#player1roll").hide();
//         $("#player2hold").hide();
//         $("#player1hold").hide();
//       }
//     }
//   });
//   $("input#player1Name").val("")
//   $("input#player2Name").val("")
// });
// });
