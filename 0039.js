//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
	let tribonacci = [];
	if (n === 0) {
		console.log(tribonacci);
	} else if (n === 1) {
		tribonacci.push(signature[0]);
		console.log(tribonacci);
	} else if (n === 2) {
		tribonacci.push(signature[0]);
		tribonacci.push(signature[1]);
		console.log(tribonacci);
	} else if (signature.length >= 3) {
		let sum = 0;
		let tribonacci = signature;
		for (let i = 0; i < n - 3; i++) {
			sum = signature[i] + signature[i + 1] + signature[i + 2];
			tribonacci.push(sum);
		}
		console.log(tribonacci);
	}
}

tribonacci([300, 200, 100], 0);
