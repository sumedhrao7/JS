const fs = require('fs')

inputFilePath = "./advent of code/day2/input.txt"

let data = fs.readFileSync(inputFilePath,'utf-8',(err, data) =>{
	if (err) {
		console.log(err);
	}
	return data;
})

let optionMap = {
	'X' : 1,
	'Y' : 2,
	'Z' : 3
}

let pointsMatrix = {
	'AX' : 3,
	'AY' : 6,
	'AZ' : 0,
	'BX' : 0,
	'BY' : 3,
	'BZ' : 6,
	'CX' : 6,
	'CY' : 0,
	'CZ' : 3
}

let totalScore = 0
data.split("\n").filter(ele => ele.length > 0).forEach((ele) => {
	let [elfPlayed, responseChosen] = ele.split(' ');
	let optionWeight = optionMap[responseChosen];
	pointsWeight = pointsMatrix[elfPlayed + responseChosen];
	roundScore = optionWeight + pointsWeight;
	totalScore += (roundScore)
})

console.log('The total points earned when innput was option: ' + totalScore)

let outcomeMap = {
	'X' : 0,
	'Y' : 3,
	'Z' : 6
}

totalScore = 0;
data.split("\n").filter(ele => ele.length > 0).forEach((ele) => {
	let [elfPlayed, desiredOutcome] = ele.split(' ');
	roundScore = outcomeMap[desiredOutcome];
	Object.keys(pointsMatrix).forEach((key) => {
		let [elfPossibilitiy, responsePossibility] = key.split('')
		if ((elfPossibilitiy == elfPlayed) && (pointsMatrix[key] == roundScore)){
			optionWeight = optionMap[responsePossibility]
			totalScore += (roundScore + optionMap[responsePossibility])
		}
	})
})

console.log('The total points earned when innput was outcome: ' + totalScore)
