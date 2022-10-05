//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
	let year = 0;
	while (p0 < p) {
		p0 = p0 + p0 * (percent / 100) + aug;
		year++;
	}
	console.log(year);
}

nbYear(1500, 5, 100, 5000);
