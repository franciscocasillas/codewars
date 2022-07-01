//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

function roundToNext5(n) {
	while (n % 5 !== 0) {
		n++;
	}
	console.log(n);
}

roundToNext5(2);
