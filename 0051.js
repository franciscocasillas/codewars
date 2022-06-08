//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
	let s11 = s1.split("").sort();
	console.log(s11.join(""));
	let s12 = s2.split("").sort();
	console.log(s12.join(""));
	for (let i = 0; i < s11.length; i++) {
		if (s11[i] === s11[i + 1]) {
			s11.splice(i + 1, 1);
			i--;
		}
	}
	for (let i = 0; i < s12.length; i++) {
		if (s12[i] === s12[i + 1]) {
			s12.splice(i + 1, 1);
			i--;
		}
	}
	if (s11.length > s12.length) {
		console.log(s11.join(""));
	} else {
		console.log(s12.join(""));
	}
}

longest("loopingisfunbutdangerous", "lessdangerousthancoding");
