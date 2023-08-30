//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let regex = /\s/g;
	let lowercase = string.toLowerCase().replace(regex, "");
	for (let i = 0; i < alphabet.length; i++) {
		if (lowercase.indexOf(alphabet[i]) === -1) {
			return false;
		}
	}
	return true;
}

isPangram("The quick brown fox jumps over the lazy dog.");
