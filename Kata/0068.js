//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript

function countPositivesSumNegatives(input) {
	let arr = [];
	if (input === null) {
		console.log(arr);
	} else if (input.length < 1) {
		console.log(arr);
	} else {
		let positiveCount = 0;
		let negativeSum = 0;
		for (let i = 0; i < input.length; i++) {
			console.log(input[i]);
			if (input[i] > 0) {
				positiveCount += 1;
			} else if (input[i] < 0) {
				negativeSum += input[i];
			}
		}
		let result = [positiveCount, negativeSum];
		console.log(result);
	}
}

countPositivesSumNegatives(null);
