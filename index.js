var Card = require('./Card.js')
var prompt = require('prompt')
var Player =  require('./Player.js')
var Deck = require('./Deck.js')

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']


//console.log(Card);

var player1 = new Player()
var player2 = new Player()
var deck = new Deck(suits,ranks)
deck.createNewDeck()

prompt.start()

prompt.get(['username1', 'username2'], function(err, result){

  console.log("Input received");
  console.log(result.username1);
  console.log(result.username2);
  player1.username = result.username1
  player2.username = result.username2
});


player1.deck = deck.dealHand(26)
player2.deck = deck.dealHand(26)

console.log("Player1: ", player1.deck);
console.log("Player2: ", player2.deck);

 do {
  var player1Play = player1.deck.pop()
  var player2Play = player2.deck.pop()

  console.log("Play1: ", player1Play);
  console.log("Play2: ", player2Play);
  //console.log(player1Play[0].score);

  if (player1Play[0].score > player2Play[0].score) {
    player1.deck.push(player1Play)
    player1.deck.push(player2Play)
  } else if (player1Play[0].score === player2Play[0].score)) {
    console.log('War!!!');
    var warDeck = []
    warDeck.push(player1Play)
    warDeck.push(player2Play)

    do {
      player1Play = player1.deck.pop()
      player2Play = player2.deck.pop()

    } while (player1Play[0].score === player2Play[0].score);

  } else {
    player2.deck.push(player1Play)
    player2.deck.push(player2Play)
  }


 } while ((player1.deck.lenth !== 0) && (player2.deck.length !== 0));

//Shuffle Deck
