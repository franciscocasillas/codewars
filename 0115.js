//https://www.codewars.com/dashboard

function sumPairs(ints, s) {
	let result = [];
	while (result.length < 2) {
		for (let i = 0; i < ints.length; i++) {
			for (let x = 0; i < ints.length; i++) {
				if (ints[i] + ints[x] === s && ints[i] !== ints[x]) {
					result.push(ints[x]);
					result.push(ints[i]);
				}
			}
		}
	}
	console.log(result);
}

sumPairs([1, 4, 8, 7, 3, 15], 8);
