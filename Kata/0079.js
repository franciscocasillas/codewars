//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str) {
	let arr = [];
	for (let i = 0; i < str.length; i++) {
		wave = str.toLowerCase().split("");
		if (wave[i] !== " ") {
			wave.splice(i, 1, wave[i].toUpperCase());
			arr.push(wave.join(""));
		}
	}
	console.log(arr);
}

wave(" hello");
