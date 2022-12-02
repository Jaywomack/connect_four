// DOM SELECTORS
const squares = document.querySelectorAll('.square')
const newGameBtn = document.querySelector('.new-game-btn')

// Global Variables
let currentPlayer = 0
let moves = 0
let winningArray = [
	// East West
	[1, 2, 3, 4],
	[2, 3, 4, 5],
	[3, 4, 5, 6],
	[4, 5, 6, 7],
	[8, 9, 10, 11],
	[9, 10, 11, 12],
	[10, 11, 12, 13],
	[11, 12, 13, 14],
	[15, 16, 17, 18],
	[16, 17, 18, 19],
	[17, 18, 19, 20],
	[18, 19, 20, 21],
	[22, 23, 24, 25],
	[23, 24, 25, 26],
	[24, 25, 26, 27],
	[25, 26, 27, 28],
	[29, 30, 31, 32],
	[30, 31, 32, 33],
	[31, 32, 33, 34],
	[32, 33, 34, 35],
	[36, 37, 38, 39],
	[37, 38, 39, 40],
	[38, 39, 40, 41],
	[39, 40, 41, 42],
	[43, 44, 45, 46],
	[44, 45, 46, 47],
	[45, 46, 47, 48],
	[46, 47, 48, 49],
	// North South
	[1, 8, 15, 22],
	[2, 9, 16, 23],
	[3, 10, 17, 24],
	[4, 11, 18, 25],
	[5, 12, 19, 26],
	[6, 13, 20, 27],
	[7, 14, 21, 28],
	[8, 15, 22, 29],
	[9, 16, 23, 30],
	[10, 17, 24, 31],
	[11, 18, 25, 32],
	[12, 19, 26, 33],
	[13, 20, 27, 34],
	[14, 21, 28, 35],
	[15, 22, 29, 36],
	[16, 23, 30, 37],
	[17, 24, 31, 38],
	[18, 25, 32, 39],
	[19, 26, 33, 40],
	[20, 27, 34, 41],
	[21, 28, 35, 42],
	[22, 29, 35, 43],
	[23, 30, 36, 44],
	[24, 31, 37, 45],
	[25, 32, 38, 46],
	[26, 33, 39, 47],
	[27, 34, 40, 48],
	[28, 35, 41, 49],
	// Diagonal left => right
	[1, 9, 17, 25],
	[2, 10, 18, 26],
	[3, 11, 19, 27],
	[4, 12, 20, 28],
	[8, 16, 24, 32],
	[9, 17, 25, 33],
	[10, 18, 26, 34],
	[11, 19, 27, 35],
	[15, 23, 31, 39],
	[16, 24, 32, 40],
	[17, 25, 33, 41],
	[18, 26, 34, 42],
	[22, 30, 38, 46],
	[23, 31, 38, 47],
	[24, 32, 39, 48],
	[25, 33, 40, 49],
	//Diagonal right to left
	[7, 13, 19, 25],
	[6, 12, 18, 24],
	[5, 11, 17, 23],
	[4, 10, 16, 22],
	[14, 20, 26, 32],
	[13, 19, 25, 31],
	[12, 18, 24, 30],
	[11, 17, 23, 29],
	[21, 27, 33, 39],
	[20, 26, 32, 38],
	[19, 25, 31, 37],
	[18, 24, 30, 36],
	[28, 34, 40, 46],
	[27, 33, 39, 45],
	[26, 32, 38, 44],
	[25, 31, 37, 43],
]
let playerOne = [1, 2, 3]
let playerTwo = [25, 31, 37, 43]
function winCond() {
	winningArray.forEach((i) => {
		if (i.every((j) => playerOne.includes(j))) {
			console.log('player one wins')
		} else if (i.every((j) => playerTwo.includes(j))) {
			console.log('player two wins')
		}
	})
}
winCond()
// Helper functions
const setSquareColor = (event, currentPlayer) => {
	if (currentPlayer === 0) {
		event.target.style.color = 'black'
		event.target.disabled = true
	} else if (currentPlayer === 1) {
		event.target.style.color = 'red'
		event.target.disabled = true
	}
}

// Set Player UI to Current Player
const setUI = (currentPlayer, moves) => {
	let player = currentPlayer === 0 ? 'Black' : 'Red'
	document.querySelector('.player-turn').textContent = player
	document.querySelector('.moves').textContent = moves
}

// random int helper function
function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// Iterate over all squares and attach an click event listener
squares.forEach((square) => {
	square.title = square.id
	square.addEventListener('click', (e) => {
		setSquareColor(e, currentPlayer)
		moves++
		currentPlayer = moves % 2 === 0 ? 0 : 1
		setUI(currentPlayer, moves)

		console.log(moves)
	})
})
