function printFarmInventor(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(`${cowString} Cows`);
	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickens;
	}
	console.log(`${chickenString} Chickens`);
}

printFarmInventor(7, 11);