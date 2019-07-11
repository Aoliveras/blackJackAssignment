class Card {
  constructor(suit, weight) {
    this.suit = suit || '';
    this.weight = weight || '';
  }
}
// We could use a random gen function in card

class Deck {
  constructor() {}
  // put a generate deck function inside?
}

class CardHolder {
  constructor(name, hand) {
    this.name = name || '';
    this.hand = hand || '';
  }
}
const suit = ['♠️', '♣️', '♥️', '♦️'];
const weight = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const dealer = new CardHolder('Dealer', handGenerator(suit, weight));
const player = new CardHolder('Player', handGenerator(suit, weight));

function handGenerator(suitArr, weightArr) {
  const newHand = [
    `${suit[randomNumberGenerator(suitArr)]} ${
      weight[randomNumberGenerator(weightArr)]
    }`,
    `${suit[randomNumberGenerator(suitArr)]} ${
      weight[randomNumberGenerator(weightArr)]
    }`,
  ];
  return newHand;
}

function randomNumberGenerator(arr) {
  return Math.floor(Math.random() * arr.length);
}

// console.log(handGenerator(suit, weight));

console.log('-------------------------------');
console.log('--Welcome to Black Jack 3000!--');
console.log('-------------------------------');
console.log(`${dealer.name} has:`);
console.log(`${dealer.hand}`);
console.log(`${player.name} has:`);
console.log(`${player.hand}`);
console.log('-------------------------------');
