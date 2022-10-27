//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN(pin) {
	if (pin.length === 4 || pin.length === 6) {
		if (pin.includes(" ")) {
			console.log("false");
		} else {
			let pintwo = pin.split("");
			let counter = 0;
			for (let i = 0; i < pintwo.length; i++) {
				if (isNaN(pintwo[i]) === true) {
					counter++;
				}
			}
			console.log(counter);
			if (counter === 0) {
				console.log("true");
			} else {
				console.log("false");
			}
		}
	} else {
		console.log("false");
	}
}

validatePIN("123    ");
