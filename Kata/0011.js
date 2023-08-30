function openOrSenior(data) {
	let arr = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i][0] > 54 && data[i][1] > 7) {
			arr.push("Senior");
		} else {
			arr.push("Open");
		}
	}
	console.log(arr);
}

openOrSenior([
	[45, 12],
	[55, 21],
	[19, -2],
	[104, 20],
]);
