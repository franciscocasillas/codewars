function calculateYears(principal, interest, tax, desired) {
	let sum = principal;
	let years = 1;
	while (sum < desired) {
		years++;
		sum = sum + sum * interest - sum * tax;
	}
	console.log(years);
}

calculateYears(1000, 0.05, 0.18, 1100);
