//https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

function remove(string) {
	let strong = string.split("");
	if (strong[strong.length - 1] === "!") {
		strong.pop();
	}
	console.log(strong.join(""));
}

remove("Hi!!!");
