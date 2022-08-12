//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
	let s1arr = s1.split("");
	let s2arr = s2.split("");
	let newarr = [];
	for (let i = 0; i < s1arr.length; i++) {
		if (newarr.includes(s1arr[i])) {
		} else {
			newarr.push(s1arr[i]);
		}
	}
	for (let i = 0; i < s2arr.length; i++) {
		if (newarr.includes(s2arr[i])) {
		} else {
			newarr.push(s2arr[i]);
		}
	}
	console.log(newarr.sort().join(""));
}

longest("aretheyhere", "yestheyarehere");
