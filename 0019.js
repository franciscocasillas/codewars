//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
	let word = str.split(" ");
	let reversedArray = [];
	for (let i = 0; i < word.length; i++) {
		let reversed = word[i].split("").reverse().join("");
		reversedArray.push(reversed);
	}
	console.log(reversedArray.join(" "));
}

reverseWords("The quick brown fox jumps over the lazy dog.");
