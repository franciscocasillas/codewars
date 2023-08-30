function calculateYears(principal, interest, tax, desired) {
	let sum = principal;
	let years = 1;
	while (sum < desired) {
		years++;
		sum = sum + sum * interest - sum * tax;
	}
	console.log(years);
}

calculateYears(20, 0.5, 0.3, 10);
