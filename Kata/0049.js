//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum(numbers) {
	if (numbers.length > 0) {
		let result = numbers.reduce((acc, x) => acc + x);
		console.log(result);
	} else {
		console.log(0);
	}
}

sum([]);
