describe('Player', function() {
  it('establish a player with a name, a turn score, and a total score', function() {
    var testPlayer = new Player("Alyssa", 0, 0);
    expect(testPlayer.name).to.equal("Alyssa");
    expect(testPlayer.turnScore).to.equal(0);
    expect(testPlayer.totalScore).to.equal(0);
  });
});
