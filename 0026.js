//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
	for (let i = 0; i < arr.length; i++) {
		let number = arr[i];
		let counter = 0;
		for (let i = 0; i < arr.length; i++) {
			if (number === arr[i]) {
				counter += 1;
				if (counter > n) {
					arr.splice(i, 1);
					i--;
				}
			}
		}
	}
	console.log(arr);
}

deleteNth([43, 37, 43, 43, 39, 39, 22, 39, 43, 43, 37, 39, 39, 39, 43, 39], 1);
