//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
	let arr = [];
	let split;
	if (Array.isArray(iterable) === false) {
		split = iterable.split("");
	} else {
		split = iterable.slice();
	}

	for (let i = 0; i < split.length; i++) {
		if (split[i] !== split[i - 1]) {
			arr.push(split[i]);
		}
	}
	console.log(arr);
};

uniqueInOrder(["A", "B", "C", "D", "A", "B"]);
