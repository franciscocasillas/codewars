//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
	let arr = [];
	for (let i = a; i <= b; i++) {
		let num = i;
		let DigPow = 0;
		let sub = i.toString().split("");
		for (let i = 0; i < sub.length; i++) {
			DigPow += Math.pow(sub[i], i + 1);
		}
		if (DigPow === num) {
			arr.push(num);
		}
	}
	console.log(arr);
}

sumDigPow(10, 150);
