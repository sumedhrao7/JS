const fs = require("fs");

data = fs
  .readFileSync("./advent of code/day5/input.txt", "utf-8")
  .toString()
  .trimEnd();

const [stackInfo, stepsInfo] = data.split("\n\n").map((block) =>
  block.split("\n")
);

// Identify the locations of queues
const stackNumbers = stackInfo[stackInfo.length - 1];
indeces = [];
for (let i = 0; i < stackNumbers.length; i++) {
  if (stackNumbers[i] != " ") {
    indeces.push(i);
  }
}

stacks = indeces.map( ele => {
	let stack = []
	for (let i=stackInfo.length - 2; i >= 0; i--){
		character = stackInfo[i][ele];
		if (character != " ") {
			stack.push(stackInfo[i][ele]);
		}
	}
	return stack;
});

module.exports = {
	stacks,
	stepsInfo
}
