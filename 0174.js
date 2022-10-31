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
		}
	}
	let lastDigit = Number(digits.join("")) + 1;
	strong.push(lastDigit);
	console.log(strong.join(""));
}

incrementString("foo1");
