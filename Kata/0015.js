//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript

class SmallestIntegerFinder {
	findSmallestInt(args) {
		args.sort((a, b) => a - b);
		this.minimum = args[0];
	}
	speak() {
		console.log(this.minimum);
	}
}

const GiveMeResult = new SmallestIntegerFinder();
GiveMeResult.findSmallestInt([78, 56, 232, 12, 8]);
GiveMeResult.speak();
