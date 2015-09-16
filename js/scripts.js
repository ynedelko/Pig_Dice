function Player(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = turnScore || 0;
  this.totalScore = totalScore || 0;
};

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
};

Die.prototype.roll = function() {
  return this.value = Math.floor(Math.random() * (7 - 1)) + 1;
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
    var newPlayer1 = new Player(player1Name, 0, 0);
    var newPlayer2 = new Player(player2Name, 0, 0);

    $(".player1").text(newPlayer1.name);
    $(".player2").text(newPlayer2.name);
    $("#player1score").text(newPlayer1.totalScore);
    $("#player1turn").text(newPlayer1.turnScore);
    $("#player2score").text(newPlayer2.totalScore);
    $("#player2turn").text(newPlayer2.turnScore);

  });

});
