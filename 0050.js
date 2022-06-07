//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].toLowerCase() === "north") {
			arr[i] = +1;
		} else if (arr[i].toLowerCase() === "south") {
			arr[i] = -1;
		} else if (arr[i].toLowerCase() === "west") {
			arr[i] = -2;
		} else if (arr[i].toLowerCase() === "east") {
			arr[i] = +2;
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + arr[i + 1] === 0) {
			arr.splice(i, 2);
			i -= 2;
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === +1) {
			arr[i] = "NORTH";
		} else if (arr[i] === -1) {
			arr[i] = "SOUTH";
		} else if (arr[i] === -2) {
			arr[i] = "WEST";
		} else if (arr[i] === +2) {
			arr[i] = "EAST";
		}
	}
	console.log(arr);
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
