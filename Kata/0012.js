//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		if (
			(arr[i].includes(":") || arr[i].includes(";")) &&
			(arr[i].includes(")") || arr[i].includes("D"))
		) {
			num += 1;
		}
	}
	console.log(num);
}

countSmileys([":oD", ":o>", ":~>", ";)", ";(", ";->", ":-)"]);
