//https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

function replace(s) {
	let newWord = s.replace(/[aeiou]/gi, "!");
	console.log(newWord);
}

replace("Hi!");
