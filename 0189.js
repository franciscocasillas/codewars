//https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

function dataReverse(data) {
	let subArrays = [];
	for (let i = 0; i < data.length; i += 8) {
		subArrays.push(data.slice(i, i + 8));
	}
	console.log(subArrays);
}

dataReverse([
	1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
	1, 0, 1, 0, 1, 0,
]);
