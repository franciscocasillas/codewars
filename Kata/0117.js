//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
	let encryption = [];
	let counter = 0;

	while (counter < n) {
		let arr = text.split("");
		encryption = [];
		for (let i = 1; i < arr.length; i++) {
			encryption.push(arr[i]);
			i++;
		}
		for (let i = 0; i < arr.length; i++) {
			encryption.push(arr[i]);
			i++;
		}
		counter++;
		text = encryption.join("");
	}
	console.log(text);
}

function decrypt(encryptedText, n) {}

encrypt("This is a test!", 2);
decrypt("hsi  etTi sats!", 1);
