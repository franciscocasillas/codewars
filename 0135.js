//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s) {
	let sSplit = s.split("");
	let upperCase = 0;
	let lowerCase = 0;
	for (let i = 0; i < sSplit.length; i++) {
		if (sSplit[i] !== sSplit[i].toLowerCase()) {
			upperCase += 1;
		} else {
			lowerCase += 1;
		}
	}
	if (upperCase > lowerCase) {
		console.log(sSplit.join("").toUpperCase());
	} else {
		console.log(sSplit.join("").toLowerCase());
	}
}

solve("code");
