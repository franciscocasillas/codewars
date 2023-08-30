//https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript

var SequenceSum = (function () {
	function SequenceSum() {}

	SequenceSum.showSequence = function (count) {
		let arr = [];
		if (count === 0) {
			return "0=0";
		} else if (count < 0) {
			return `${count}<0`;
		} else {
			for (let i = 0; i <= count; i++) {
				arr.push(i);
			}
			let sum = arr.reduce((acc, value) => acc + value);
			console.log(arr.join("+") + " = " + sum);
		}
	};

	return SequenceSum;
})();

SequenceSum.showSequence(6);
