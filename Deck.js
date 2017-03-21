var Card =  require('./Card.js')

module.exports = function Deck(suits, ranks) {

  this.createNewDeck = function() {
    var deck = []

    for (var rank in ranks) {
        for (var suit in suits) {
          deck.push(new Card(suits[suit],ranks[rank]))
        }
      }
    //console.log("deck: ", deck);
    return deck

  }

  this.cards = this.createNewDeck()

  this.dealHand = function (length) {

    if(this.cards.length === 0){
      this.cards = this.createNewDeck()
    }
    //var hand = lenth || 1
    var hand = []

    for (var i = 0; i < length; i++) {
      var card = this.cards.splice(Math.floor(Math.random() * this.cards.lenth), 1)
      //console.log(card);
      hand.push(card)
    }
    //console.log(hand);
    return hand

  }

}
