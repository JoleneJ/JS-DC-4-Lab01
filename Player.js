module.exports = function Player(username, hand) {
  this.username = username
  this.deck = hand || [] 
}
