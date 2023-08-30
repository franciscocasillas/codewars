//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
//Square all the numbers between 0 and n
//Check how many of those squared numbers include the digit d
// Give result as number of squared numbers and the number of those digits that include the d

function nbDig(n, d) {
	let arr = [];
	let counter = 0;
	for (i = 0; i < n; i++) {
		arr.push(Math.pow(i, 2));
	}
	for (i = 0; i < arr.length; i++) {
		if (String(arr[i]).split("").map(Number).includes(d) === true) {
			counter += 1;
		}
	}
	console.log(arr.length);
	console.log(counter);
}

nbDig(5750, 0);
