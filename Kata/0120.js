//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
	let newN = n.toString().split("");
	while (newN[newN.length - 1] == 0) {
		newN.pop();
	}
	console.log(Number(newN.join("")));
}

noBoringZeros(1450);
