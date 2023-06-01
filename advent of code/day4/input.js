const fs = require("fs")

const inputFilePath = "./advent of code/day4/input.txt"
const data = fs
	.readFileSync(inputFilePath, 'utf-8')
	.toString()
	.trim()
	.split('\n')
module.exports = { data }
