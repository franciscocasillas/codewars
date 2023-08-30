//https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript

function sayHello(name, city, state) {
	let salute = "Hello,";
	for (let i = 0; i < name.length; i++) {
		salute += " " + name[i];
	}
	salute += `! Welcome to ${city}, ${state}!`;
	console.log(salute);
}

sayHello(["Former", "John", "Smith", "Roosevelt"], "Phoenix", "Arizona");
