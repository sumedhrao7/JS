class Stack {

	constructor() {
		this.stack = []
	}

	pushElement(element) {
		this.stack.push(element);
	}

	popElement() {
		return this.stack.pop();
	}

	getTopElement() {
		return this.stack[this.stack.length - 1]
	}

	display() {
		console.log(this.stack)
	}
}

module.exports = { Stack };

