//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
	let arr = str.split("");
	arr.pop();
	arr.shift();
	console.log(arr.join(""));
}

removeChar("hello");
