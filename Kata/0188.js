//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

function elevator(left, right, call) {
	if (Math.abs(left - call) < Math.abs(right - call)) {
		console.log("left");
	} else {
		console.log("right");
	}
}

elevator(0, 2, 1);
