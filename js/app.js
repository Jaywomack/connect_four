// DOM SELECTORS
const squares = document.querySelectorAll('.square')
const newGameBtn = document.querySelector('.new-game-btn')

// Global Variables
let currentPlayer = 0
let moves = 0

// Helper functions
const setSquareColor = (event, currentPlayer) => {
	if (currentPlayer === 0) {
		event.target.style.color = 'black'
	} else if (currentPlayer === 1) {
		event.target.style.color = 'red'
	}
}

// Set Player UI to Current Player
const playerUI = (currentPlayer) => {
	let player = currentPlayer === 0 ? 'Black' : 'Red'
	document.querySelector('.player-turn').textContent = player
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
		setSquareColor(e, currentPlayer)
		moves++
		currentPlayer = moves % 2 === 0 ? 0 : 1
		playerUI(currentPlayer)
		console.log(moves)
	})
})
