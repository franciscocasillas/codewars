// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

function findDifference(a, b) {
	console.log(Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]));
}

findDifference([15, 20, 25], [10, 30, 25]);
