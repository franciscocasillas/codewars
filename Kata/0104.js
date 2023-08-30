//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

function isUpperCase(str) {
	let wordByWord = str.split("");
	let result = true;
	for (let i = 0; i < wordByWord.length; i++) {
		if (wordByWord[i] !== wordByWord[i].toUpperCase()) {
			result = false;
		}
	}
	console.log(result);
}

isUpperCase("HACKERYSFAS");
