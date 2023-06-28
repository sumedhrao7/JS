const { directoryTree } = require("./input");

const allSizes = directoryTree.traverseNode();

result = allSizes.reduce((accumulator, size) => {
	if (size <= 100000){
		return accumulator += size;
	}
	return accumulator;
}, 0)

console.log(result);



