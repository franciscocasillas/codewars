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
	if (digits.length > 0) {
		let lastDigit = Number(digits[digits.length - 1]) + 1;
		digits.pop();
		digits.push(lastDigit);
		console.log(strong.concat(digits).join(""));
	} else {
		strong.push("1");
		console.log(strong.join(""));
	}
}

//Not pay attention to zeros!!!!

incrementString("foobar99");
