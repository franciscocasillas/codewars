//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
	let arr = [];
	str = str.split(" ");
	let whole = "";
	for (let i = 0; i < str.length; i++) {
		whole = str[i] + " " + str[i].length;
		arr.push(whole);
	}
	console.log(arr);
}

addLength("apple ban");
