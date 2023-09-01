const power = (base, exponent) => {
	let result = 1;
	for (let count = 1; count < exponent; count++) {
		result *= base;
	}
	return result;
};