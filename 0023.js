// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr(n, s) {
	let plusString = "";
	for (let i = 1; i <= n; i++) {
		plusString += s;
	}
	console.log(plusString);
}

repeatStr(5, "Hello");
