//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x) {
	let multiplication = x.reduce((acc, x) => acc * x);
	console.log(multiplication);
}

grow([1, 2, 3]);
