function Player(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = turnScore || 0;
  this.totalScore = totalScore || 0;
}

Player.prototype.addScore = function (die1) {
  this.turnScore = die1.value + this.turnScore;
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
};

$(document).ready(function() {
  $("form#player").submit(function(event) {
    event.preventDefault();

    var player1Name = $("input#player1Name").val();
    var player2Name = $("input#player2Name").val();
    var Player1 = new Player(player1Name);
    var Player2 = new Player(player2Name);
    var die1 = new Die("die1", 1);

    $(".player1").text(Player1.name);
    $(".player2").text(Player2.name);
    $("#player1score").text(Player1.totalScore);
    $("#player1turn").text(Player1.turnScore);
    $("#player2score").text(Player2.totalScore);
    $("#player2turn").text(Player2.turnScore);

    $("#player1roll").show();
    $("#player2roll").show();

    $("#player1roll").off();
    $("#player1roll").click(function() {
      die1.roll();

      if (die1.value === 1) {
        alert("Sucks to be you. Turn over. You get nothing. Player 2's turn.");
        Player1.turnScore = 0;
        $("#player1turn").text(Player1.turnScore);
      } else {
        Player1.addScore(die1);
        $("#player1turn").text(Player1.turnScore);
        alert("Roll again.");

      }
    });

    $("#player2roll").off();
    $("#player2roll").click(function() {
      die1.roll();

      if (die1.value === 1) {
        alert("Sucks to be you. Turn over. You get nothing. Player 1's turn.");
        Player2.turnScore = 0;
        $("#player2turn").text(Player2.turnScore);
      } else {
        Player2.addScore(die1);
        $("#player2turn").text(Player2.turnScore);
        alert("Roll again.");

      }
    });

  });

});
