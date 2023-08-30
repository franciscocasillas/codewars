//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
	for (let i = 0; i < A.length; i++) {
		let counter = 0;
		for (let x = 0; x < A.length; x++) {
			if (A[i] === A[x]) {
				counter += 1;
			}
		}
		if (counter % 2 !== 0) {
			console.log(A[i]);
			break;
		}
	}
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
