const p1 = document.getElementById('player1')
const p2 = document.getElementById('player2')
const img = document.getElementById('diceImage')


class Player {
    constructor(player, position) {
        this.player = player
        this.position = position
    }

    movePlayer(steps) {
        this.position += steps
        this.player.style.top = this.position * 40 + 'px'
    }
}

const player1 = new Player(p1, 0)
const player2 = new Player(p2, 0)

let player1Win = 0
let player2Win = 0

let currentPlayer = player1
function rollDice() {
    let steps = Math.floor(Math.random() * 6) + 1
    info.textContent = 'rolled ' + steps
    currentPlayer.movePlayer(steps)

    if (steps === 1) {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/480px-Dice-1.svg.png";
    } else if (steps === 2) {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/600px-Dice-2.svg.png";
    } else if (steps === 3) {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dice-3a.svg/800px-Dice-3a.svg.png";
    } else if (steps === 4) {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/600px-Dice-4.svg.png"
    } else if (steps === 5) {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/1200px-Dice-5.svg.png"
    } else if (steps === 6) {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/1200px-Dice-6.svg.png"
    }

    // alert(`Dice rolled: ${steps}`)
}

    if (currentPlayer.position === 9) {
        console.log(`${currentPlayer.player.id} wins the round`)
        if (currentPlayer === player1) {
            player1Win++
        } else {
            player2Win++
        }
    }


function rounds() {
    for (let round = 1; round <= 3; round++) {
        rollDice()
    }
    compareWinners()
}

function compareWinners() {
    if (player1Win > player2Win) {
        console.log('Player 1 wins the game')
    } else {
        console.log('Player 2 wins the game')
    }
}

const rollDiceButton = document.querySelector('.roll')
const restartButton = document.querySelector('.restart')
const info = document.querySelector('.info')

// Add event listeners
rollDiceButton.addEventListener('click', rounds)
restartButton.addEventListener('click', startAgain)

function startAgain() {
    player1.position = 0
    player2.position = 0
    player1.player.style.top = '0px'
    player2.player.style.top = '0px'
    info.textContent = 'info'
    currentPlayer = player1
    player1Win = 0
    player2Win = 0
}
