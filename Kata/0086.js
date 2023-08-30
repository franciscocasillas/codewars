//https://www.codewars.com/dashboard

function order(words) {
	let bigWords = words.split(" ");
	let sortByNumbers = [];
	for (let counter = 1; counter < 10; counter++) {
		for (let i = 0; i < bigWords.length; i++) {
			if (bigWords[i].includes(counter)) {
				sortByNumbers.push(bigWords[i]);
			}
		}
	}
	console.log(sortByNumbers.join(" "));
}

order("is2 Thi1s T4est 3a");
