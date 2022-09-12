//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
	let finalArray = [];
	for (let i = 0; i < array.length; i++) {
		finalArray.push(i + 1 + ": " + array[i]);
	}
	console.log(finalArray);
};

number(["a", "b", "c"]);
