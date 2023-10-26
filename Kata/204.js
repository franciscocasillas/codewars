// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
	let letters = str.toLowerCase().split("");
	let arr = [];
	for (let i = 0; i < letters.length; i++) {
		if (arr.includes(letters[i])) {
		} else {
			arr.push(letters[i]);
		}
	}
	if (arr.length === letters.length) {
		console.log("true");
	} else {
		console.log("false");
	}
}

isIsogram("Maximiliano");
