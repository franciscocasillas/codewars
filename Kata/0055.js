// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
	let n2 = String(n).split("").reverse().map(Number);
	console.log(n2);
}

digitize(35231);
