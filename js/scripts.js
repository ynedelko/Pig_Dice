function Player(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
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



});
