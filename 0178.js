//https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray) {
	let result = numbersArray.filter((number) => number % 2 === 0);
	console.log(result);
}

getEvenNumbers([12, 14, 15]);
