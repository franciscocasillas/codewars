//https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

function noOdds(values) {
	for (let i = 0; i < values.length; i++) {
		if (values[i] % 2 !== 0) {
			values.splice(i, 1);
		}
	}
	console.log(values);
}

function two(values) {
	let result = values.filter((x) => x % 2 === 0);
	console.log(result);
}

noOdds([0, 1, 2, 3]);
two([0, 1, 2, 3]);
