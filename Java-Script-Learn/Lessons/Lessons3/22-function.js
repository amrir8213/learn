function printZeroPaddedWithLabel(number, label) {
	let numberStrin = String(number);
	while (numberStrin.length < 3) {
		numberStrin = "0" + numberStrin;
	}
	console.log(`${numberStrin} ${label}`)
}

function printFarmInventor(cows, chickens, pigs) {
	printZeroPaddedWithLabel(cows, "Cows");
	printZeroPaddedWithLabel(chickens, "Chickens");
	printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventor(7, 11, 3);