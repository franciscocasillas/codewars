//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function adjacentelementsProduct(array) {
	let top = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] * array[i + 1] > top) {
			top = array[i] * array[i + 1];
		}
	}
	console.log(top);
}

adjacentelementsProduct([5, 8]);
