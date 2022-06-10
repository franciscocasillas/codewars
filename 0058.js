//https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
	let arr = [];
	for (i = 0; i <= n; i++) {
		arr.push(Math.pow(2, i));
	}
	console.log(arr);
}

powersOfTwo(1);
