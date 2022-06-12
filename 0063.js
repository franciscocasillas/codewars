//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
	let nums = numbers
		.split(" ")
		.sort((a, b) => a - b)
		.reverse();
	if (nums.length > 1) {
		nums.splice(1, nums.length - 2);
		let whatever = nums.map(Number).join(" ");
		console.log(whatever);
	} else {
		let other = [numbers, numbers];
		console.log(other.map(Number).join(" "));
	}
}

highAndLow("42");
