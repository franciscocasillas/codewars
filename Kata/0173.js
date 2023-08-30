//https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

function shortcut(string) {
	let noVowels = string.replace(/[aeiou]/g, "");
	console.log(noVowels);
}

shortcut("whAtever");
