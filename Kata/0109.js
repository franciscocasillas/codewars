//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
	let arr = [a, b];
	arr.sort((a, b) => a - b);
	let result = 0;
	for (let i = arr[0]; i <= arr[1]; i++) {
		result += i;
	}
	console.log(result);
}

getSum(3, -2);
