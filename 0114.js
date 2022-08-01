//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
	var chari,
		arr = [],
		alphabet = "abcdefghijklmnopqrstuvwxyz",
		i;

	for (var i = 0; i < text.length; i++) {
		chari = text[i].toLowerCase();
		if (alphabet.indexOf(chari) !== -1) {
			arr.push(alphabet.indexOf(chari) + 1);
		}
	}
	return arr;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
