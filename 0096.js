//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
	let counter = 0;
	let inhabitants = p0;
	while (inhabitants < p) {
		counter++;
		inhabitants = inhabitants + inhabitants * (percent / 100) + aug;
	}
	console.log(counter);
}

nbYear(1500000, 2.5, 10000, 2000000);
