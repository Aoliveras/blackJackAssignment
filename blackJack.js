// card object

// deck object

// table object
class Card {
  constructor(suit, weight) {
    this.suit = suit || '';
    this.weight = weight || '';
  }
}

class CardHolder {
  constructor(name) {
    this.name = name || '';
    this.hand = ['', ''];
    this.suit = ['♠️', '♣️', '♥️', '♦️'];
    this.weight = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }

  randomizedCards() {
    const suitLength = this.suit.length;
    const randomSuit = Math.floor(Math.random() * suitLength);

    const weightLength = this.weight.length;
    const randomWeight = Math.floor(Math.random() * weightLength);
    return this.suit[randomSuit] + this.weight[randomWeight];
  }

  generateHand() {
    const newHand = [];
    this.hand.forEach(element => {
        element = this.randomizedCards();
        newHand.push(element);
    }
    return newHand;
  }


const player = new CardHolder();

console.log(player.randomizedCards());

const dealer = new CardHolder('dealer');

// function randomizedCards(card) {
//   const cardLength = card.length;
//   const cardRand = Math.floor(Math.random() * cardLength);
//   console.log(card[cardRand]);
// }
