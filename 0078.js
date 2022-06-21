//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN(pin) {
	if (pin.split("").length === 4 || pin.split("").length === 6) {
		let counter = 0;
		let arr = pin.split("");
		console.log(arr);
		for (let i = 0; i < arr.length; i++) {
			if (isNaN(arr[i]) || arr.includes("\t")) {
				counter += 1;
			}
		}
		console.log(counter);
		if (counter > 0) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

validatePIN("a123");
