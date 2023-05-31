const { data } = require('./input')

console.log(data[0]);

const repeatingLetters = data.map((string) => {
	const firstHalf = string.slice(0, string.length/2);
	const secondHalf = string.slice(string.length/2);
	const repeatingLetter = [...secondHalf].filter( letter => firstHalf.includes(letter) )[0];
	return repeatingLetter;
});

console.log(repeatingLetters);

const repeatingLettersPriorities = repeatingLetters.map((letter) => {
	if (letter.toLowerCase() === letter) {
		return 1 + (letter.charCodeAt(0) - 'a'.charCodeAt(0))
	}
	if (letter.toUpperCase() === letter) {
		return 27 + (letter.charCodeAt(0) - 'A'.charCodeAt(0))
	}
})

console.log(repeatingLettersPriorities);

const sum = repeatingLettersPriorities.reduce( (accumulator, priority) => {
	return accumulator + priority;
}, 0)

console.log(sum);
