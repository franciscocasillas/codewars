//https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

function sumDigits(number) {
	let digits = Math.abs(number).toString().split("").map(Number);
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		sum += digits[i];
	}
	console.log(sum);
}

sumDigits(10);
