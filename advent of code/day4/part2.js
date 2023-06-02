const { data } = require('./input') 


counter = 0;

const getRange = (size, startAt = 0) => {
	return [...Array(size).keys()].map( i => i + startAt);
}

data.forEach((ele) => {
	const [ section1, section2 ] = [...ele.split(",")]
	const [ section1First, section1Second ] = [...section1.split("-")].map( ele => parseInt(ele))
	const [ section2First, section2Second ] = [...section2.split("-")].map( ele => parseInt(ele))
	const set1 = new Set(getRange(((section1Second + 1) - section1First), section1First));
	const set2 = new Set(getRange(((section2Second + 1) - section2First), section2First));
	const set3 = [...set1].filter(x => set2.has(x));
	if (set3.length > 0) {
		counter++;
	}
	
})

console.log(counter);
