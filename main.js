const openers = [
	'Did you know,',
	'Fun fact:',
	"Here's something they don't teach you in school:",
	'It is a fact that',
	'A little known fact is that',
	"I shouldn't tell you this, but",
	'A secret I know is that',
]

const facts = [
	'chickens have large talons',
	'you can learn to fly',
	'a mattress is made of nails',
	'styrofoam is not recyclable',
	'french fries are good for your soul',
	'sleeping is good for your health',
	'people who run are faster than people who walk',
]

const conditions = [
	'at nighttime',
	"but only when it's warm out",
	'as long as you paid for it',
	'if someone near you is wearing a sweater',
	'after the accident',
	'in January',
	'if the left foot is bigger than the right',
]

function createMessage() {
	const openerIndex = Math.floor(Math.random() * 7)
	const factIndex = Math.floor(Math.random() * 7)
	const conditionIndex = Math.floor(Math.random() * 7)
	let punctuation = '.'
	if (openerIndex === 0) {
		punctuation = '?'
	}
	return `${openers[openerIndex]} ${facts[factIndex]} ${conditions[conditionIndex]}${punctuation}`
}

const printMessage = () => console.log(createMessage())

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`What's your name?\n`, (name) => {
	console.log(`Hi ${name}! Here's a random 'fact'!`)
	printMessage()
	readline.close()
})

// printMessage()
