//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url) {
	if (url.includes("#")) {
		let anchorIndex = url.indexOf("#");
		let newUrl = url.split("");
		newUrl.splice(anchorIndex);
		console.log(newUrl.join(""));
	} else {
		console.log(url);
	}
}

removeUrlAnchor("www.codewars.com?about");
