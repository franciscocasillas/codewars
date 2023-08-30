//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
	let counter = 0;
	let digits = String(num).split("").map(Number);
	while (digits.length > 1) {
		counter++;
		digits = digits.reduce((acc, x) => acc * x);
		digits = String(digits).split("").map(Number);
	}
	console.log(counter);
}

persistence(999);
