class DirectoryTree{


	constructor() {

		this.startNode = null; 
		this.currentNode = null;
		this.resultSizes = [];
	}

	executeCommand(command) {
		if (command.includes("/")) {
			this.startNode = new Node('/', null);
			this.currentNode = this.startNode;
		}
		else if(command.includes("..")){
			this.currentNode = this.currentNode.parentNode;
		}
		else {
			const dirName = command.split(" ").slice(-1)[0];
			const newNode = new Node(dirName, this.currentNode)
			newNode.parentNode = this.currentNode;
			this.currentNode.subNodes.push(newNode);
			this.currentNode = newNode;
		}
	}

	printTree(traverseCurrentNode = null, iteration_number = 0) {
		if (traverseCurrentNode == null) {  
			traverseCurrentNode = this.startNode;
		}
		console.log(" ".repeat(iteration_number) + traverseCurrentNode.name + " -> " + traverseCurrentNode.size, " " + traverseCurrentNode.cumilativeSize);
		iteration_number++;
		if (!traverseCurrentNode.subNodes.length) {
			return;
		}
		traverseCurrentNode.subNodes.forEach( node => this.printTree(node, iteration_number));
	}

	addToSize(size) {
		this.currentNode.size += size;
		let traverseNode = this.currentNode
		while(traverseNode){
			traverseNode.cumilativeSize += size;	
			traverseNode = traverseNode.parentNode;

		}
	}

	traverseNode(startNode = this.startNode){
		this.resultSizes = [];
		this._traverseNode(startNode);
		return this.resultSizes;
	}

	_traverseNode(currentNode = null){
		this.resultSizes.push(currentNode.cumilativeSize);
		if (currentNode.subNodes.length > 0){
			currentNode.subNodes.forEach( subNode => {
				this._traverseNode(subNode);
			})
		}
		return;
	}


}


class Node {

	constructor(name, parentNode){
		this.name = name;
		this.parentNode = parentNode;
		this.subNodes = [];
		this.size = 0;
		this.cumilativeSize = 0;
	}


}

module.exports = {
	DirectoryTree
}
