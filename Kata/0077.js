//https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

function finalGrade(exam, projects) {
	return exam > 90 || projects > 10
		? 100
		: exam > 75 && projects >= 5
		? 90
		: exam > 50 && projects >= 2
		? 75
		: 0;
}
