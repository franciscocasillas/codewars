//https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

function peopleWithAgeDrink(old) {
	return old < 14
		? "drink toddy"
		: old < 18
		? "drink coke"
		: old < 21
		? "drink beer"
		: "drink whisky";
}

peopleWithAgeDrink(12);
