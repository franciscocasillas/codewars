//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
	let strong = value.toString().split("");
	let sum = 0;
	for (let i = 0; i < strong.length; i++) {
		sum += Number(strong[i]) ** strong.length;
	}
	return sum === value ? true : false;
}

narcissistic(371);
