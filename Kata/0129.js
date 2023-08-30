//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
	let odds = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			odds.push(array[i]);
		}
	}

	let sortedOdds = odds.sort((a, b) => a - b);
	console.log(sortedOdds);

	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			array.splice(i, 1, sortedOdds[counter]);
			counter++;
		}
	}
	console.log(array);
}

sortArray([-29, -31, 1, 22, -22, 21]);
