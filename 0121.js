//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x) {
	let sum = x.reduce((acc, y) => acc + +y, 0);
	console.log(sum);
}

sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);
