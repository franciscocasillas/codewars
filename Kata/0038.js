//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h, bounce, window) {
	if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
		let number = 1;
		while (h * bounce > window) {
			number += 2;
			h = h * bounce;
		}
		return number;
	} else {
		return -1;
	}
}

bouncingBall(30.0, 0.66, 1.5);
