//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
	let strong = strng.split("");
	let digits = [];
	for (let i = 0; i < strong.length; i++) {
		if (isNaN(strong[i])) {
			digits = [];
		} else {
			digits.push(strong[i]);
			strong.splice(i, 1);
			i--;
		}
	}
	console.log(digits);
	if (digits.length > 0) {
		let lastDigit = Number(digits.join("")) + 1;
		console.log(lastDigit.toString().length);
		if (lastDigit.toString().length > 1) {
			let digitSize = lastDigit.toString().length;
			digits.splice(
				digits.length - lastDigit.toString().length,
				digitSize,
				lastDigit
			);
			console.log(strong.concat(digits).join(""));
		} else {
			digits.splice(digits.length - 1, 1, lastDigit);
			console.log(strong.concat(digits).join(""));
		}
	} else {
		strong.push("1");
		console.log(strong.join(""));
	}
}

//Make good splice!!!

incrementString("foobar99");
