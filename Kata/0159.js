//https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript

var findAverage = function (nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	console.log(sum / nums.length);
};

findAverage([1, 3, 5, 7]);
