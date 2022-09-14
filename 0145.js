//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function (lowerCase) {
	let sentence = [];
	let words = lowerCase.split(" ");
	for (let i = 0; i < words.length; i++) {
		let arr = words[i].split("");
		let capital = arr[0].toUpperCase();
		arr.splice(0, 1, capital);
		sentence.push(arr.join(""));
	}
	console.log(sentence.join(" "));
};

String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real");
