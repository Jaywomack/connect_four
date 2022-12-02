// DOM SELECTORS
const squares = document.querySelectorAll('.square')
const newGameBtn = document.querySelector('.new-game-btn')

// Global Variables
let currentPlayer = 0
let moves = 0

// Helper functions
const selectSquare = (event, currentPlayer) => {
	if (currentPlayer === 0) {
		event.target.style.color = 'black'
	} else if (currentPlayer === 1) {
		event.target.style.color = 'red'
	}
}

// random int helper function
function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// Iterate over all squares and attach an click event listener
squares.forEach((square) => {
	square.addEventListener('click', (e) => {
		selectSquare(e, currentPlayer)
		moves++
		currentPlayer = moves % 2 === 0 ? 0 : 1
		console.log(moves)
	})
})

let totalHeight = 100
let staticGap = 10

let box1Height = getRandomInt(1, 85)
console.log(box1Height)
let box2Height = remainder
