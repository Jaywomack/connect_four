# Connect Four

---

---

## The Pitch

---

The perfect time for a board game can materialize out of nowhere. For my wife and I it is always when the power gets knocked out by winter storms. We have a few games that we play: Monopoly, Catan and a few other family favorites. But the real choice is always connect four.

It usually starts with her and I splitting the games 50/50 ish. But then something happens and she keeps outwitting me (or cheating)... However you look at it. She is winning more than her fair share.

Connect Four For Desktop is going to be the new rage. All the cool kids will be practicing and preparing for the next storm of the century.

And...

The beauty of connect four. It's simple. Get four in a row, while callously thwarting your opponents intrusions into your territory. Don't let them connect four! And while your at it, try to win in as few moves as possible.

## The Aesthetic

---

![Connect Four Wireframe](./img/wireframe.png)

## MVP

---

> User Stories

> Create a browser based two player version of connect four that will show a win condition when a player connects four squares and disables the board.

> Switch between players and display turn and win conditions in the UI programmatically

> Implement a board reset that does not use location.reload()

> Use development best practices to create UI that is intuitive and accessible.

> Create menu button that when clicked will display game rules to the screen

> Create html with semantic markup

> Create game logic and implement it with vanilla JS with no alerts

> Deploy Game

## Stretch Goals

---

> set each aside to a different player and their stats. Have an indicator move from side to side to indicate whose turn it is.

> Alternate between players or have a cpu opponent

> Persistent win loss between users

> login and authentication

> Smart AI that doesn't just choose a random available square. Maybe by prioritizing finishing a win condition array if move is available.

> Players can choose colors and the background will change to create contrast if the color does not have enough contrast from the chosen color.

> Refactor to OOP

> Build CLI version of game

## Roadblocks

---

> The hardest part will be creating win conditions that do not require manually updating arrays with every win condition in a switch statement. There is probably a way to do it with math that would be a more programmatically elegant solution.

### Technical Requirements

---

> Display a game in the browser

> Switch turns between two players, or have the user play the computer (AI or obstacles)

> Design logic for winning & visually display which player won

> Include separate HTML / CSS / JavaScript files

> Stick with KISS (Keep It Simple Silly) and DRY (Don't Repeat Yourself) principles

> Use Javascript for DOM manipulation

> Deploy your game online, where the rest of the world can access it

> Inlcude in game instructions on how to play

> Not use any alerts

> Use semantic markup for HTML and CSS (adhere to best practices)

> Have a way to reset the game on game over that does not rely on a page refresh

### Necessary Deliverables

---

> A working game, built by you, hosted somewhere on the internet

> A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project

> A readme.md file with explanations of the following:

> a description of the app

> a link to the deployed live site

> the approach taken

> explanations of the technologies used

> wireframes

> a post-project reflection with any unsolved problems or growth areas you may have had

> any sources used

### Tech Stack

---

> HTML

> CSS

> JS

> GIT

> GITHUB (Repo & Kanban Board)

# The only code i referenced for this assignment that is not my own, is the winning arrays, and the random math helper function

> https://dev.to/fakorededamilola/building-a-connect-four-game-with-javascript-1f45

let winningArray = [
[0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10],
[34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24],
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31],
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22],
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18],
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24],
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10],
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17],
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18],
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25],
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32],
[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4],
[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25],
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30],
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
];

> https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#answer-1527820

// random int helper function
function getRandomInt(min, max) {
min = Math.ceil(min)
max = Math.floor(max)
return Math.floor(Math.random() \* (max - min + 1)) + min
}
