
const getIndexTillUniqueSubSequence = (sequence, subSequenceLength) => {
	if (!sequence) {
		throw new Error("sequence not provided")
	}
	if (!subSequenceLength) {
		throw new Error("sub sequence length not provided")
	}
	if (sequence.length < subSequenceLength){
		throw new Error("sequence does not contain minimum number of characters")
	}
	for (let i=0; i<sequence.length - subSequenceLength; i++){
		const subSequence = sequence.slice(i, i+subSequenceLength);
		if (subSequence.split('').length === new Set(subSequence.split('')).size){
			return i + subSequenceLength;
		}
	}

	throw new Error("sequence does not have unique sub sequence");
}


module.exports = {
	getIndexTillUniqueSubSequence
}
