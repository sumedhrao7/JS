const { data } = require('./input')
const { getIndexTillUniqueSubSequence } = require('./markerDetector')

console.log(getIndexTillUniqueSubSequence(data, 14));
