//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
	let counter = 0;
	for (let i = 0; i <= n; i++) {
		let square = i ** 2;
		let arr = square.toString().split("");
		for (let x = 0; x < arr.length; x++) {
			if (Number(arr[x]) === d) {
				counter++;
			}
		}
	}
	console.log(counter);
}

nbDig(5750, 0);
