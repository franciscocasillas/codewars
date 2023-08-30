//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
	let y = x.split("").map(Number);
	for (let i = 0; i < y.length; i++) {
		if (y[i] < 5) {
			y.splice(i, 1, 0);
		} else if (y[i] >= 5) {
			y.splice(i, 1, 1);
		}
	}
	console.log(y.join(""));
}

fakeBin("45385593107843568");
