//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
	let numbersList = l.filter((item) => typeof item === "number");
	console.log(numbersList);
}

filter_list([1, 2, "a", "b"]);
