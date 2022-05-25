// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
	let array3 = array1.map((element) => element * element);
	let counter = 0;
	for (let i = 0; i < array2.length; i++) {
		if (array2.includes(array3[i]) === true) {
			counter += 1;
		}
	}
	if (counter === array2.length) {
		console.log(true);
	} else {
		console.log(false);
	}
}

comp(
	[11, 144, 19, 161, 19, 144, 19, 11],
	[121, 14641, 20736, 361, 25921, 361, 20736, 361]
);
