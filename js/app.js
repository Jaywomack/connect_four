// DOM SELECTORS
const squares = document.querySelectorAll('.square')

// Global Variables
let currentPlayer = 1
let moves = 0

// Helper functions
const selectSquare = (event, currentPlayer) => {
	if (currentPlayer === 0) {
		event.target.style.color = 'black'
	} else if (currentPlayer === 1) {
		event.target.style.color = 'red'
	}
}

// Iterate over all squares and attach an click event listener
squares.forEach((square) => {
	square.addEventListener('click', (e) => {
		selectSquare(e, currentPlayer)
	})
})
