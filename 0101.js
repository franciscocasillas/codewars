//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
	let reversed = str.split("").reverse();
	for (let i = 0; i < reversed.length; i++) {
		if (reversed[i].toLowerCase() !== reversed[i].toUpperCase()) {
		} else {
			reversed.splice(i, 1);
			i--;
		}
	}
	console.log(reversed.join(""));
}

reverseLetter("ultr53o?n");
