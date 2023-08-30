//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
	let arr = string.split("");
	let spaced = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i].toUpperCase()) {
			spaced.push(arr[i]);
		} else {
			spaced.push(" ");
			spaced.push(arr[i]);
		}
	}
	console.log(spaced.join(""));
}

solution("camelCasing");
