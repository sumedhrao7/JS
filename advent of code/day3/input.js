fs = require('fs')
path = require('path')


const data = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
	.toString()
	.trim()
	.split('\n')
	
const groupSize = 3;

module.exports = { data , groupSize }
