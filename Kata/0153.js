//https://www.codewars.com/kata/57faece99610ced690000165/train/javascript
function remove(string) {
	string = string.split("");
	while (string[string.length - 1] === "!") {
		string.pop();
	}
	console.log(string.join(""));
}

remove("Hi!!!");
