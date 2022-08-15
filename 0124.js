//https://www.codewars.com/dashboard

function dutyFree(normPrice, discount, hol) {
	let final = Math.floor((hol / (normPrice * discount)) * 100);
	console.log(final);
}

dutyFree(12, 50, 1000);
