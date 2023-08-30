//https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript

function xor(a, b) {
	return (a === true) & (b === true)
		? false
		: a === true || b === true
		? true
		: false;
}

xor(false, true);
