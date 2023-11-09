const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
const img = document.getElementById("diceImage");
const steps = document.querySelectorAll(".step");
const rollDiceButton = document.querySelector(".roll");
const restartButton = document.querySelector(".restart");
const info = document.querySelector(".info");
const roundInfo = document.querySelector(".round-info");

class Player {
  constructor(player, position) {
    this.player = player;
    this.position = position;
    this.startingPosition = position;
    this.wins = 0; 
  }

  movePlayer(steps) {
    this.position += steps;
    this.player.style.bottom = this.position * 60 + "px";

    if (this.position === 9) {
      this.wins++; 
      alert(this.player.id + " wins the round");
      this.player.style.bottom = '0px';
      changeRound();
    } else if (this.position > 9) {
      alert(this.player.id + " loses the round");
      this.player.style.bottom = "0px";
      changeRound();
    }

    if (round === 3) {
      compareWinners();
    } else {
      switchPlayer();
    }
  }
}

const player1 = new Player(p1, 0);
const player2 = new Player(p2, 0);
let startingPosition = 0;
let player1Win = 0;
let player2Win = 0;
let round = 1;
let currentPlayer = player1;

function rollDice() {
  let steps = Math.floor(Math.random() * 6) + 1;
  // if (steps === 4) {
  //   return 5;
  // } else if ( steps === 6){
  //   return 3;
  // }
  info.textContent = "Dice rolled: " + steps;
  currentPlayer.movePlayer(steps);
  if (steps === 1) {
    diceImage.src = "resources/dice1.png";
  } else if (steps === 2) {
    diceImage.src = "resources/dice2.png";
  } else if (steps === 3) {
    diceImage.src = "resources/dice3.png";
  } else if (steps === 4) {
    diceImage.src = "resources/dice4.png";
  } else if (steps === 5) {
    diceImage.src = "resources/dice5.png";
  } else if (steps === 6) {
    diceImage.src = "resources/dice6.png";
  }
}

function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

function changeRound() {
  round++;
}
function updateRoundInfo() {
  roundInfo.textContent = "Round: " + round;
}

function compareWinners() {
  if (player1Win > player2Win) {
    alert("Player 1 wins the game");
  } else {
    alert("Player 2 wins the game");
  }
}

// Add event listeners
rollDiceButton.addEventListener("click", rollDice);
restartButton.addEventListener("click", startAgain);

function startAgain() {
  player1.position = 0;
  player2.position = 0;
  player1.player.style.bottom = "0px";
  player2.player.style.bottom = "0px";
  info.textContent = "Game Info: Round 1, Player 1's Turn";
  player1Win = 0;
  player2Win = 0;
  currentPlayer = player1;
  updateRoundInfo();
}
