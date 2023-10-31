//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
	//create counter
	let numberOfSheep = 0;
	//loop through each
	//conditional, if element is true, add one to counter
	for (let i = 0; i < sheep.length; i++) {
		if (sheep[i] === true) {
			numberOfSheep += 1;
		}
	}
	console.log(numberOfSheep);
}

countSheeps([undefined, null, false, true]); // 1
countSheeps([undefined, null, false, true, true, false, null, undefined]); //2
