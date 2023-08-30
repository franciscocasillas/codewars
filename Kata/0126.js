//https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

function race(v1, v2, g) {
	let time = 3.1823;
	console.log(time);
	let hours = Math.floor(time);
	console.log(hours);
	let minutes = (time - hours) * 60;
	console.log(Math.floor(minutes));
	let seconds = (minutes - Math.floor(minutes)) * 60;
	console.log(Math.floor(seconds));
	console.log([hours, Math.floor(minutes), Math.floor(seconds)]);
}

race(80, 91, 37);
