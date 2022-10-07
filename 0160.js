//https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript

function calculateAge(a, b) {
	if (a === b) {
		return `You were born this very year!`;
	} else if (a < b) {
		if (b - a > 1) {
			return `You are ${b - a} years old.`;
		} else {
			return `You are 1 year old.`;
		}
	} else if (a > b) {
		if (a - b > 1) {
			return `You will be born in ${a - b} years.`;
		} else {
			return `You will be born in 1 year.`;
		}
	}
}

calculateAge(2021, 2016);
