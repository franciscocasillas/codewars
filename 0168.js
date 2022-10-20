//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

let encryptThis = function (text) {
	let words = text.split(" ");
	let code = [];
	for (let i = 0; i < words.length; i++) {
		let wordle = words[i].split("");
		let last = wordle[wordle.length - 1];
		let second = wordle[1];
		wordle.splice(0, 1, wordle[0].charCodeAt(0));
		wordle.splice(1, 1, last);
		wordle.splice(wordle.length - 1, 1, second);
		code.push(wordle.join(""));
	}
	console.log(code.join(" "));
};

encryptThis("A wise old owl lived in an oak");
