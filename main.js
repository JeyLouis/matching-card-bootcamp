document.querySelectorAll('.box').forEach((item, i) => {
  item.addEventListener('click', clickOnCard)
});


let nbaCards = []
let selectedCard = null
const nbaImages = ['card0.gif', 'card8.gif', 'card10.gif', 'card13.gif', 'card14.gif', 'card15.gif']
const NUM_CARDS = 12
class Card {
  constructor(image) {
    this.image = image
    this.is_visible = false
    this.select = false
  }
}
//initilize array of cards
for (var i = 0; i < NUM_CARDS; i++) {
  //image variable is the nbaImages divided by 2
  const image = nbaImages[Math.floor(i / 2)];
  //create a new card object
  nbaCards.push(new Card(image));
}
console.log(nbaCards);
nbaCards = shuffle(nbaCards);
//event handler for when user clicks on a card
function clickOnCard(e) {
  e.target.classList.toggle('flip');

  let cardIndex = +e.target.id - 1;
  e.target.style.backgroundImage = `url("${nbaCards[cardIndex].image}")`
  // console.log(cardIndex);
  //initilize array of cards
  for (var i = 0; i < NUM_CARDS.length; i++) {
    //image variable is the nbaImages divided by 2
    let image = nbaImages[Math.floor(i / 2)];
    console.log(image);
    //create a new card object
    nbaCards[i] = new Card(image);
    console.log(new Card(image));
  }
  //currentCard is the nbaCards the user clicked on
  let currentCard = nbaCards[cardIndex]
  // console.log(currentCard);
  //if currentCard.is_visable then do nothing
  if (!currentCard.is_visible) {
    currentCard.is_visible = true;
  }

  //if second cards selected is null
  if (selectedCard === null) {
    //selectCard is the currentCard
    selectedCard = currentCard;
  }

  // if select card === currentCard.image then set is_visable to currentCard
  else {
    //one card is already selected

    //we have a match!
    setTimeout(() => {
      if (selectedCard.image !== currentCard.image) {
        selectedCard.is_visible = false;
        currentCard.is_visible = false;
        e.target.style.backgroundImage = `url('logo.gif')`
        document.querySelectorAll('.box')[nbaCards.indexOf(selectedCard)].style.backgroundImage = `url('logo.gif')`
        nbaCards.indexOf(selectedCard)
        console.log('selectCard' + nbaCards.indexOf(selectedCard));
        console.log('currentCard' + nbaCards.indexOf(currentCard));
        e.target.classList.toggle('flip');
        document.querySelectorAll('.box')[nbaCards.indexOf(selectedCard)].classList.toggle('flip');

      }
      selectedCard = null;

    }, 1000)
  }
  // else is_visable = false
  // if no currentCard.selected = true
}
document.querySelectorAll('.box').forEach((item, i) => {
  const card = nbaCards[i];
  //if card is hidden and doesnt equal selected card then hide interval

});


function shuffle(cards) {
  var j, x, i;
  for (i = cards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = cards[i];
    cards[i] = cards[j];
    cards[j] = x;
  }
  return cards;
  console.log('shuffle');
}
console.log(shuffle);
