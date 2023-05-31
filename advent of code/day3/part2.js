const { data, groupSize } = require('./input');

const allGroups = []

for (let i=0; i < data.length; i += groupSize) {
	const slicedArray = data.slice(i, i + groupSize);
	allGroups.push(slicedArray);
}

const groupIdentifiers = allGroups.map((group) => {
	const firstRucksack = [...new Set([...group[0]])];
	const secondRucksack = group[1];
	const thirdRucksack = group[2];
	const commonIdentifier = firstRucksack.filter( identifier => {
		return (secondRucksack.includes(identifier) && thirdRucksack.includes(identifier))
	});
	return commonIdentifier[0];	
});

const groupIdentifierPriorities = groupIdentifiers.map(  letter => {
	  
	if (letter.toLowerCase() === letter) {
		return 1 + (letter.charCodeAt(0) - 'a'.charCodeAt(0))
	}
	if (letter.toUpperCase() === letter) {
		return 27 + (letter.charCodeAt(0) - 'A'.charCodeAt(0))
	}
}, 0)

const sum = groupIdentifierPriorities.reduce( (accumulator, priority) => {
	return accumulator + priority;
}, 0);

console.log(sum);
