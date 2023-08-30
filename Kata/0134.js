//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
	let remainder = 10;
	let strong = [];
	let lastNumber = 0;
	for (let i = 0; i < String(num).split("").length; i++) {
		let result = (num % remainder) - lastNumber;
		lastNumber += result;
		if (result !== 0) {
			strong.unshift(result);
		}
		remainder *= 10;
	}
	console.log(strong.join(" + "));
}

expandedForm(42);
