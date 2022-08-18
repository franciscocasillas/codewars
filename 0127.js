//https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function littlearr(a) {
	let arr = [];
	if (a === undefined) {
	} else {
		for (let i = 0; i < a; i++) {
			arr.push(i);
		}
	}
	console.log(arr);
}

littlearr();
