function zeropad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = "0" + string;
	}
	return string;
}

function printFarmInventor(cows, chickens, pigs) {
	console.log(`${zeropad(cows, 3)} Cows`);
	console.log(`${zeropad(chickens, 3)} Chickens`);
	console.log(`${zeropad(pigs, 3)} Pigs`);
}

printFarmInventor(7, 16, 3);