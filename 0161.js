//https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript

function preFizz(n) {
	let m = 1;
	let arr = [];
	while (m <= n) {
		arr.push(m);
		m++;
	}
	console.log(arr);
}

preFizz(4);
