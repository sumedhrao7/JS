const fs = require("fs")
const path = require("path")

const fileSystemSize = 70000000;
const data = fs
		.readFileSync(path.join(__dirname, "input.txt"), 'utf-8')
		.toString()
		.trim()
		.split("\n");


const { DirectoryTree } = require('./Tree')

function isNumeric(value) {
    return !isNaN(value - parseFloat(value));
}

const directoryTree = new DirectoryTree();
data.forEach( command => {
	if (command.includes("$ cd")) {
		directoryTree.executeCommand(command);
	}

	if (isNumeric(command.split(" ")[0])){
		directoryTree.addToSize(parseInt(command.split(" ")[0]));
	}

});


module.exports = {
	directoryTree,
	fileSystemSize
}
