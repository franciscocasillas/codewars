function likes(names) {
	if (names.length === 0) {
		console.log("no one likes this");
	} else if (names.length === 1) {
		console.log(`${names[0]} likes this`);
	} else if (names.length === 2) {
		console.log(`${names[0]} and ${names[1]} like this`);
	} else if (names.length === 3) {
		console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
	} else if (names.length > 3) {
		console.log(
			`${names[0]}, ${names[1]} and ${names.length - 2} others like this`
		);
	}
}

// function likes(names) {
// 	return names.length === 0
// 		? "no one likes this"
// 		: names.length === 1
// 		? `${names[0]} likes this`
// 		: names.length === 2
// 		? `${names[0]} and ${names[1]} like this`
// 		: names.length === 3
// 		? `${names[0]}, ${names[1]} and ${names[2]} like this`
// 		: names.length > 3
// 		? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// 		: "Yay";
// }

likes([]);
likes(["Peter"]);
likes(["John", "Max"]);
likes(["Max", "Benji", "Anto"]);
likes(["Alex", "Jacob", "Mark", "Max"]);
likes(["Jonah", "Mary", "Kate", "Aspen", "Rocky", "Larson"]);
