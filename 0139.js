//https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

function remainder(n, m) {
	// Divide the larger argument by the smaller argument and return the remainder
	if (n > m && m !== 0) {
		console.log(n % m);
	} else if (n < m && n !== 0) {
		console.log(m % n);
	} else if (n === m && n !== 0) {
		console.log(Math.abs(m % n));
	} else {
		console.log("NaN");
	}
}

remainder(-13, 0);
