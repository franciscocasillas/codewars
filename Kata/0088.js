//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
	let arr = [];
	let split = word.split("");
	console.log(split);
	for (let i = 0; i < word.length; i++) {
		if (split[i].toUpperCase() === split[i]) {
			arr.push(i);
		}
	}
	console.log(arr);
};

capitals("WoRds");
