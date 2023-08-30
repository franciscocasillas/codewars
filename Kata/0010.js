//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript
function descendingOrder(n) {
	console.log(
		Number(
			n
				.toString()
				.split("")
				.sort((a, b) => b - a)
				.join("")
		)
	);
}

descendingOrder(123456789);
