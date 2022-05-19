//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr) {
	for (let i = 1; i < arr.length; i++) {
		arr.splice(i, 1);
	}
	console.log(arr);
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
