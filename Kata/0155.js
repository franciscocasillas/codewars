//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
	let arr = dna.split("");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "A") {
			arr.splice(i, 1, "T");
		} else if (arr[i] === "T") {
			arr.splice(i, 1, "A");
		} else if (arr[i] === "G") {
			arr.splice(i, 1, "C");
		} else if (arr[i] === "C") {
			arr.splice(i, 1, "G");
		}
	}
	console.log(arr.join(""));
}

DNAStrand("TAGC");
