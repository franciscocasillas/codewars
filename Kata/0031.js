// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find largest and lowest numbers

function maxAndmin(array) {
	array.sort((a, b) => a - b);
	console.log(array[0]);
	console.log(array[array.length - 1]);
}

maxAndmin([42, 54, 65, 87, 0]);
