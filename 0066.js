//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
	let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	for (let i = 0; i < birds.length; i++) {
		for (let x = 0; x < geese.length; x++) {
			if (birds[i] === geese[x]) {
				birds.splice(i, 1);
				i--;
			}
		}
	}
	console.log(birds);
}

gooseFilter([
	"Mallard",
	"Hook Bill",
	"African",
	"Crested",
	"Pilgrim",
	"Toulouse",
	"Blue Swedish",
]);
