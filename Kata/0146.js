//https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

function getSize(width, height, depth) {
	let result = [];
	let area = 2 * width * height + 2 * width * depth + 2 * depth * height;
	result.push(area);
	result.push(width * height * depth);
	console.log(result);
}

getSize(10, 10, 10);
