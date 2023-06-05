const fs = require("fs")
const path = require('path')

const data = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
	.toString()
	.trim()
	.split('\n')
module.exports = { data }
