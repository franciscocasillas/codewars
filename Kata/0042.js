//www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

https: function countSheeps(arrayOfSheep) {
	let counter = 0;
	for (let i = 0; i < arrayOfSheep.length; i++) {
		if (arrayOfSheep[i] === true) {
			counter += 1;
		}
	}
	console.log(counter);
}

countSheeps([
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
]);
