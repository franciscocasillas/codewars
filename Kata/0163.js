//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
	let arr3 = [];
	for (let i = 0; i < arr1.length; i++) {
		arr3.push(arr1[i]);
	}
	for (let i = 0; i < arr2.length; i++) {
		if (arr3.includes(arr2[i]) === false) {
			arr3.push(arr2[i]);
		}
	}
	console.log(arr3.sort((a, b) => a - b));
}

mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
