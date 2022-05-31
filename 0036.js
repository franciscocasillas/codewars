//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

let humanYearsCatYearsDogYears = function (humanYears) {
	let result = [0, 0, 0];
	result[0] = humanYears;
	if (humanYears === 1) {
		result[1] += 15;
		result[2] += 15;
	} else if (humanYears === 2) {
		result[1] += 15 + 9;
		result[2] += 15 + 9;
	} else if (humanYears > 2) {
		result[1] += 15 + 9 + (humanYears - 2) * 4;
		result[2] += 15 + 9 + (humanYears - 2) * 5;
	}
	console.log(result);
};

humanYearsCatYearsDogYears(10);
