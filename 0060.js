//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i - 1]) {
			console.log(numbers[i]);
		}
	}
}

stray([1, 1, 2]);
