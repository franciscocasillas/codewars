//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
	let reverted = queue.reverse();
	let index = reverted.indexOf("wolf");
	if (index === 0) {
		return "Pls go away and stop eating my sheep";
	} else {
		return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
	}
}
