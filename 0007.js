//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
	let one = String(num).split("");
	let total = "";
	for (let i = 0; i < one.length; i++) {
		square = String(Math.pow(one[i], 2));
		total = `${total}${square}`;
	}
	console.log(Number(total));
}

squareDigits(3212);
