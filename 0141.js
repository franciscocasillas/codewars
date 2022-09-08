//https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter) {
	let counter = 0;
	let newStr = str.split("");
	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] === letter) {
			counter++;
		}
	}
	console.log(counter);
}

strCount("", "z");
