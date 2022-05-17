//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
	if (b.length > 0) {
		const result = a.filter((word) => !b.includes(word));
		console.log(result);
	} else {
		console.log(a);
	}
}

arrayDiff([1, 2, 2, 4], [1, 2]);
