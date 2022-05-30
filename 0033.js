//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
function doubleChar(str) {
	let strong = str.split("");
	let number = strong.length * 2;
	for (let i = 0; i < number; i++) {
		strong.splice(i + 1, 0, strong[i]);
		i++;
	}
	console.log(strong.join(""));
}

doubleChar("Hello world");
