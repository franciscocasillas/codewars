//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = (n) => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(n - i);
	}
	console.log(arr);
};

reverseSeq(5);
