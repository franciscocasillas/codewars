//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength(array) {
	array.sort((a, b) => a.length - b.length);
	console.log(array);
}

sortByLength(["Beg", "Life", "I", "To"]);
