const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
const img = document.getElementById("diceImage");
const steps = document.querySelectorAll(".step");
const rollDiceButton = document.querySelector(".roll");
const restartButton = document.querySelector(".restart");
const info = document.querySelector(".info");
const roundInfo = document.querySelector(".round-info");
const effect = document.getElementById('celebration-effect');

class Player {
  constructor(player, position) {
    this.player = player;
    this.position = position;
    this.startingPosition = position;
    this.wins = 0;
  }
  movePlayer(steps) {
    this.position += steps;
    this.player.style.bottom = this.position * 68 + "px";
  
    if (this.position === 9) {
      this.position = 9;
      if (this === player1) {
        alert("Player 1 wins the round");
        player1.wins++;
      } else if (this === player2) {
        alert("Player 2 wins the round");
        player2.wins++;
      }
      player1.player.style.bottom = "0px";
      player2.player.style.bottom = "0px";
      updateRoundInfo();
      changeRound();
      
    } else if (this.position > 9) {
      if (this === player1) {
        alert("Player 1 loses the round");
        player1.style.bottom = "0px";
      } else if (this === player2) {
        alert("Player 2 loses the round");
        player2.style.bottom = "0px";
      }
  
      changeRound();
      updateRoundInfo();
    }
    switchPlayer();

  
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
  if (round <= 3) {
    let steps = Math.floor(Math.random() * 6) + 1;
    info.textContent = "Dice rolled: " + steps;
    // console.log("Current player:", currentPlayer);
    // console.log("Player 1 Wins:", player1Win);
    // console.log("Player 2 Wins:", player2Win);
    
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
}

function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

function changeRound() {
  if (round >= 3) {
    compareWinners();
    rollDiceButton.disabled = true;
  } else {
    round++;
    currentPlayer = player1; 
    player1.position = 0;
    player2.position = 0;
    player1.player.style.bottom = "0px";
    player2.player.style.bottom = "0px";
    updateRoundInfo();
  }
}

function updateRoundInfo() {
  roundInfo.textContent = "Round: " + round;
}
function compareWinners() {
  if (round >= 3) {
    if (player1.wins > player2.wins) {
      alert("Player 1 wins the game");
    } else if (player1.wins < player2.wins) {
      alert("Player 2 wins the game");
    } else {
      alert("It's a tie. No one wins the game.Restart the game ");
    }
    effect.classList.remove('hidden')

  }
}


rollDiceButton.addEventListener("click", rollDice);
restartButton.addEventListener("click", startAgain);

function startAgain() {
  player1.position = 0;
  player2.position = 0;
  player1.player.style.bottom = "0px";
  player2.player.style.bottom = "0px";
  player1Win = 0;
  player2Win = 0;
  round = 1;
  currentPlayer = player1;
  updateRoundInfo();
  rollDiceButton.disabled = false;
  effect.classList.add('hidden')

}
