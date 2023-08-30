//https://www.codewars.com/dashboard

function squareSum(numbers) {
	let squareSum = numbers.reduce((acc, x) => acc + x ** 2);
	console.log(squareSum);
}

squareSum([0, 3, 4, 5]);
