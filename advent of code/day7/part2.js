const { directoryTree, fileSystemSize } = require("./input");

const allSizes = directoryTree.traverseNode();

const sizeOfOuterMostDirectory = allSizes[0];
const remainingSpace = fileSystemSize - sizeOfOuterMostDirectory;
const neededSpace = 30000000 - remainingSpace;
const deleteWorthySizes = allSizes.filter(size => (size >= neededSpace))
console.log(deleteWorthySizes.sort((a, b) => a - b )[0]);

