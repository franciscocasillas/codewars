//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(array) {
	return array.length > 0
		? array.reduce((acc, x) => acc + x) / array.length
		: 0;
}

find_average([]);
