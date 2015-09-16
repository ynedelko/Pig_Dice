describe('Player', function() {
  it('establish a player with a name, a turn score, and a total score', function() {
    var testPlayer = new Player("Alyssa", 0, 0);
    expect(testPlayer.name).to.equal("Alyssa");
    expect(testPlayer.turnScore).to.equal(0);
    expect(testPlayer.totalScore).to.equal(0);
  });

  it('add the die value to the turn score', function() {
    var testPlayer = new Player("Alyssa", 0, 0);
    var testDie = new Die("dice1", 4);
    testPlayer.addScore(testDie);
    expect(testPlayer.turnScore).to.equal(4);
  });

  it('allows player to hold turn and pass to second player', function() {
    var testPlayer = new Player("Alyssa", 5, 0);
    var testDie = new Die("dice1", 4)
    testPlayer.hold();
    expect(testPlayer.totalScore).to.equal(5);
  });

});

describe('Die', function() {
  it('establishes dice for players to roll', function() {
    var testDie = new Die("dice1", 6);
    expect(testDie.name).to.equal("dice1");
    expect(testDie.value).to.equal(6);
  });

  it('rolls a dice for a random number', function() {
    var testDie = new Die("dice1", 1);
    testDie.roll();
    expect(testDie.name).to.equal('dice1');
    debugger;
    expect(testDie.value).to.exist;
  });

});
