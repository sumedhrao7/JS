const fs = require('fs');

const inputFilePath = './advent of code/day1/input.txt';
const numberOfTopElfsToChoose = 3;

const fileInputData = fs.readFileSync(inputFilePath, 'utf-8', (err, data) => {
	if (err) {
		throw new Error(err);
	}
	return data
});

elfsFood = fileInputData.split("\n\n")
elfsFoodTotals = [];
elfsFood.forEach((elfFood) => {
	let elfFoodSum = elfFood.split('\n');
	elfFoodSum = elfFoodSum.reduce((accumulator, currentValue) => {
		return accumulator + (parseInt(currentValue) || 0)
	}, 0); 	
	elfsFoodTotals.push(elfFoodSum);
});

const sortedElfsFoodTotals = elfsFoodTotals.sort((prev, next) => {
	return prev - next
})

const topMaxN = sortedElfsFoodTotals.reverse().slice(0, numberOfTopElfsToChoose);

const topSumN = topMaxN.reduce((accumulator, currentValue) => {
	return accumulator + parseInt(currentValue);
}, 0);

console.log(topSumN);
