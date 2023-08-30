//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

function distinct(a) {
	let arr = [];
	for (let i = 0; i < a.length; i++) {
		if (arr.includes(a[i]) === false) {
			arr.push(a[i]);
		}
	}
	console.log(arr);
}

distinct([1, 1, 2]);
