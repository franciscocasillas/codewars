//https://www.codewars.com/dashboard

function basicOp(operation, value1, value2) {
	return operation === "+"
		? value1 + value2
		: operation === "-"
		? value1 - value2
		: operation === "*"
		? value1 * value2
		: value1 / value2;
}

basicOp("+", 4, 7);
