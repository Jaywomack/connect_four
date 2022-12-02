// DOM SELECTORS
const squares = document.querySelectorAll('.square')
const newGameBtn = document.querySelector('.new-game-btn')
const title = document.querySelector('.title')
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
	[22, 29, 36, 43],
	[23, 30, 37, 44],
	[24, 31, 38, 45],
	[25, 32, 39, 46],
	[26, 33, 40, 47],
	[27, 34, 41, 48],
	[28, 35, 42, 49],
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
	[23, 31, 39, 47],
	[24, 32, 40, 48],
	[25, 33, 41, 49],
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
// Store square.id in player arrays
let playerOne = []
let playerTwo = []
let playerOneAndTwoArray = []
let enabledButtons = new Set()

// Enable squares when square below them is clicked
function enableSquare(event) {
	// when a square is clicked enable the square with id -7
	playerOneAndTwoArray.forEach(() => {
		if (event.target.id > 7) {
			let id = Number(event.target.id) - 7
			enabledButtons.add(id)
		}
		;[...enabledButtons].forEach((id) => {
			document.getElementById(`${String(id)}`).disabled = false
		})
	})
}
// Reset UI
function resetUI() {
	location.reload()
}
// disable board
function disableBoard() {
	squares.forEach((s) => {
		s.disabled = true
	})
	console.log('board disabled')
}
// Check player arrays for winning condition match
function winCond() {
	winningArray.forEach((i) => {
		if (i.every((j) => playerOne.includes(j))) {
			title.textContent = 'Black Wins'
			title.style.color = 'black'
			disableBoard()
		} else if (i.every((j) => playerTwo.includes(j))) {
			title.textContent = 'Red Wins'
			title.style.color = 'red'
			disableBoard()
		} else if (moves === 49) {
			title.textContent = 'Tie Game'
			title.style.color = 'yellow'
			disableBoard()
		}
	})
}

// Set the color of the square based on current player
function setSquareColor(event, currentPlayer) {
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

	let playerTurn = document.querySelector('.player-turn')
	playerTurn.textContent = player
	playerTurn.style.color = player.toLowerCase()
	document.querySelector('.moves').textContent = moves
}

// Iterate over all squares and attach an click event listener
squares.forEach((square) => {
	square.addEventListener('click', (e) => {
		if (
			document.querySelector('.right-aside').classList.contains('hidden')
		) {
			document.querySelector('.right-aside').classList.remove('hidden')
		}
		e.preventDefault()

		moves++
		if (currentPlayer === 0) {
			playerOne.push(Number(e.target.id))
			playerOneAndTwoArray.push(e.target.id)
			enableSquare(e)
			setSquareColor(e, currentPlayer)
			winCond()
			console.log(enabledButtons)
			console.log(playerOneAndTwoArray)

			// console.log(`player one array ${playerOne}`)
		} else if (currentPlayer === 1) {
			playerTwo.push(Number(e.target.id))
			playerOneAndTwoArray.push(e.target.id)
			enableSquare(e)
			setSquareColor(e, currentPlayer)
			winCond()
			console.log(enabledButtons)
			console.log(playerOneAndTwoArray)

			// console.log(`player two array ${playerTwo}`)
		}

		currentPlayer = moves % 2 === 0 ? 0 : 1
		setUI(currentPlayer, moves)
	})
})

document.querySelector('.menu-btn').addEventListener('click', (e) => {
	e.preventDefault()
	document.querySelectorAll('.menu').forEach((menu) => {
		menu.classList.toggle('hidden')
	})
})

newGameBtn.addEventListener('click', (e) => {
	e.preventDefault()
	resetUI()
})
