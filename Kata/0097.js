//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
	if (walk.length === 10) {
		let counter = 0;
		for (let i = 0; i < walk.length; i++) {
			if (walk[i] === "n") {
				counter += 1;
			} else if (walk[i] === "s") {
				counter -= 1;
			} else if (walk[i] === "w") {
				counter += 2;
			} else if (walk[i] === "e") {
				counter -= 2;
			}
		}
		if (counter === 0) {
			console.log("true");
		} else {
			console.log("false");
		}
	} else {
		console.log("false");
	}
}

isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]);
