const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay= [];
function flipCard(cardId) {
	console.log("User flipped "+ cards[cardId])
	cardsInPlay.push(cards[cardId])
	checkForMatch()
}
function checkForMatch(){
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
  			console.log("You found a match!");
	} else {
  			console.log("Sorry, try again.");
	}
}
}

flipCard(0)
flipCard(1)