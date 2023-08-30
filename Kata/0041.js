//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
	let result = "";
	for (let i = 0; i < s.length; i++) {
		result += s[i].toUpperCase();
		for (let x = 0; x < i; x++) {
			result += s[i].toLowerCase();
		}
		result += "-";
	}
	console.log(result.slice(0, -1));
}

accum("ZpglnRxqenU");
