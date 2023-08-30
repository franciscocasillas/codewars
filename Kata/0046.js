//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
	let number = strng.match(/\d+/g);
	if (number === null) {
		strng = strng + "1";
		console.log(strng);
	} else {
		let array = strng.split("");
		let num = array.findIndex((element) => !isNaN(element));
		number = Number(number) + 1;
		array.splice(num);
		array = array.join("") + number;
		console.log(array);
	}
}

incrementString("foo99");
