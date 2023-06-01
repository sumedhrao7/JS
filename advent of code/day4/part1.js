const { data } = require('./input') 


counter = 0;

data.forEach((ele) => {
	const [ section1, section2 ] = [...ele.split(",")]
	const [ section1First, section1Second ] = [...section1.split("-")].map( ele => parseInt(ele))
	const [ section2First, section2Second ] = [...section2.split("-")].map( ele => parseInt(ele))
	if ((section1First >= section2First) && (section1Second <= section2Second)){
		counter++;	
	}
	else if ((section2First >= section1First) && (section2Second <= section1Second)){
		counter++;
	}
})

console.log(counter);
