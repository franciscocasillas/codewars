//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

function hello(name) {
	if (name === "" || name === undefined) {
		console.log("Hello, World!");
	} else {
		let cuteName = name.toLowerCase().split("");
		let first = cuteName[0].toUpperCase();
		console.log(first);
		cuteName.splice(0, 1);
		cuteName.unshift(first);

		console.log("Hello, " + cuteName.join("") + "!");
	}
}

hello("aliCE");
