//https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

function sequenceSum(begin, end, step) {
	let result = 0;
	for (let i = begin; i <= end; i += step) {
		result += i;
	}
	console.log(result);
}

sequenceSum(2, 6, 2);
