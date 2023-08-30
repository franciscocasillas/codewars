//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

// function howMuchILoveYou(nbPetals) {
// 	let petals = nbPetals % 6;
// 	if (petals === 1) {
// 		return "I love you";
// 	} else if (petals === 2) {
// 		return "a little";
// 	} else if (petals === 3) {
// 		return "a lot";
// 	} else if (petals === 4) {
// 		return "passionately";
// 	} else if (petals === 5) {
// 		return "madly";
// 	} else if (petals === 0) {
// 		return "not at all";
// 	}
// }

// howMuchILoveYou(6);

function howMuchILoveYou(nbPetals) {
	return nbPetals % 6 === 1
		? "I love you"
		: nbPetals % 6 === 2
		? "a little"
		: nbPetals % 6 === 3
		? "a lot"
		: nbPetals % 6 === 4
		? "passionately"
		: nbPetals % 6 === 5
		? "madly"
		: "not at all";
}
