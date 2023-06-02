const { stacks : stackArrays, stepsInfo } = require("./input")

const { Stack } = require("./Stack")


const stacks = stackArrays.map( stackArray => {

	const stack = new Stack();

	stackArray.forEach( ele => {
		stack.addElement(ele);
	});

	return stack;
});

stepsInfo.forEach( step => {
	step = step.split(" ");
	const fromStack = stacks[parseInt(step[3]) - 1]
	const toStack = stacks[parseInt(step[5]) - 1]
	numberOfElements = parseInt(step[1])
	for (let i=0; i<numberOfElements; i++) {
		poppedElement = fromStack.popElement();
		toStack.addElement(poppedElement);
	}
});

stacks.map( stack => {
	process.stdout.write(stack.getTopElement())
});

console.log();
