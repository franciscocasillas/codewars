//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
	s.sort();
	let result = s[0].split("").join("***");
	console.log(result);
}

twoSort([
	"turns",
	"out",
	"random",
	"test",
	"cases",
	"are",
	"easier",
	"than",
	"writing",
	"out",
	"basic",
	"ones",
]);
