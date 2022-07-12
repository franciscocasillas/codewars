//https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a, b) {
	let sum = a + b;
	let remainder = 0;
	let binary = [];
	while (sum / 2 !== 0) {
		remainder = sum % 2;
		sum = Math.floor(sum / 2);
		binary.unshift(remainder);
	}
	console.log(binary.join(""));
}

addBinary(1, 2);
