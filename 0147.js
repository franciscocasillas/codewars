//https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript

function isPalindrome(line) {
	if (typeof line === "number") {
		line = String(line);
	}
	let newLine = line.split("").reverse().join("");
	return newLine === line ? true : false;
}

isPalindrome("anna");
