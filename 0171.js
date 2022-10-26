//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(numbers) {
	numbers.sort((a, b) => a - b).reverse();
	console.log(numbers[0] + numbers[1]);
}

largestPairSum([10, 14, 2, 23, 19]);
