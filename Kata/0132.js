//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
	let result = [];
	let smallWord = word.toLowerCase();
	for (let i = 0; i < word.length; i++) {
		let count = smallWord.split(word[i]).length - 1;
		if (count === 1) {
			result.push("(");
		} else {
			result.push(")");
		}
	}
	console.log(result.join(""));
}

duplicateEncode("RRP!RzRyRxRRl)JRRRu");
