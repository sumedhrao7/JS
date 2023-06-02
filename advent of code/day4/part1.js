const { data } = require('./input') 


counter = 0;

const getRange = (size, startAt = 0) => {
	return [...Array(size).keys()].map( i => i + startAt);
}

const eqSetCheck = (set1, set2) => 
	[...set1].every((x) => 	set2.has(x));

data.forEach((ele) => {
	const [ section1, section2 ] = [...ele.split(",")]
	const [ section1First, section1Second ] = [...section1.split("-")].map( ele => parseInt(ele))
	const [ section2First, section2Second ] = [...section2.split("-")].map( ele => parseInt(ele))
	const set1 = new Set(getRange(((section1Second - section1First) + 1), section1First));
	const set2 = new Set(getRange(((section2Second - section2First) + 1), section2First));
	const intersection = new Set([...set1].filter( x => set2.has(x)));	
	if (eqSetCheck(set1, intersection) || eqSetCheck(set2, intersection)) {
		counter++;
	}

})

console.log({ counter });
