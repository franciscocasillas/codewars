//https://www.codewars.com/dashboard

function abbrevName(name) {
	newName = name.toUpperCase().split(" ");
	console.log(newName[0][0] + "." + newName[1][0]);
}

abbrevName("john wayne");
