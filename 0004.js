function findNeedle(haystack) {
	const needle = haystack.indexOf("needle");
	console.log(`found the needle at position ${needle}`);
}

findNeedle([
	"3",
	"123124234",
	undefined,
	"needle",
	"world",
	"hay",
	2,
	"3",
	true,
	false,
]);
