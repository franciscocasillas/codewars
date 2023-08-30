//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values) {
	values.sort();
	let digits = [];
	for (let i = 0; i < values.length; i++) {
		if (digits.includes(values[i]) !== true) {
			digits.push(values[i]);
		}
	}
	console.log(Number(digits.join("")));
}

minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]);
