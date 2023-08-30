// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
	let text2 = text.toLowerCase();
	let counter = 0;
	let exceptions = [];
	for (let i = 0; i < text2.length; i++) {
		if (text2.indexOf(text2[i]) !== text2.lastIndexOf(text2[i])) {
			if (exceptions.includes(text2[i]) === false) {
				counter += 1;
				exceptions.push(text2[i]);
			}
		}
	}
	console.log(counter);
}

duplicateCount("Indivisibility");
