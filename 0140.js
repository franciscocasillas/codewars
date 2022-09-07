//https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript

function reverse(string) {
	let reversed = string.split(" ").reverse().join(" ");
	console.log(reversed);
}

reverse("I am an expert at this");
