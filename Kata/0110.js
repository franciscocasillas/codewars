//https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

function past(h, m, s) {
	let miliseconds = h * 3600000 + m * 60000 + s * 1000;
	console.log(miliseconds);
}

past(1, 1, 1);
