//https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

function alternatingCase(string) {
	let strong = string.split("");
	for (let i = 0; i < strong.length; i++) {
		if (strong[i] === strong[i].toUpperCase()) {
			strong.splice(i, 1, strong[i].toLowerCase());
		} else {
			strong.splice(i, 1, strong[i].toUpperCase());
		}
	}
	console.log(strong.join(""));
}

alternatingCase("hello WORLD");
