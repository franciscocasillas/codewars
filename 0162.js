//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

function pipeFix(numbers) {
	let n = numbers[0];
	let arr = [];
	while (n <= numbers[numbers.length - 1]) {
		arr.push(n);
		n++;
	}
	console.log(arr);
}

pipeFix([6, 9]);
