//function computerPlay

const computerSelectionDisplay = document.getElementById('computer');
const playerSelectionDisplay = document.getElementById('player');
const result = document.getElementById('result');
const choices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;

choices.forEach((choice) =>
  choice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerSelectionDisplay.innerHTML = playerChoice;
    generateComputerChoice();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'papper';
  } else {
    computerChoice = 'scissors';
  }
  computerSelectionDisplay.innerHTML = computerChoice;
}

// function playRound() {
//   if (playerSelection === computerSelection) {
//     result = "It's a TIE!";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection == "paper" && computerSelection == "rock") ||
//     (playerSelection == "scissors" && computerSelection == "paper")
//   ) {
//     playerCounter++;
//     result = "Player WINs!";
//   } else {
//     computerCounter++;
//     result = "Computer WINs!";
//   }
// }

// function game() {
//     while (true) {
//         // let playerSelection = prompt("Pick your weapon: rock, paper, scissors");
//         // let playerSelection = "rock";
//         let computerSelection = computerPlay();
//         console.log("computerSelection: " + computerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("PLAYER: " + playerCounter + " - " + "COMPUTER: " + computerCounter);
//     }
//     if (playerCounter >= 5) {
//         console.log("--------------------");
//         console.log("Player WINS!!!! " + playerCounter + " to " + computerCounter);
//     } else if (computerCounter >= 5) {
//         console.log("--------------------");
//         console.log("Computer WINS!!!! " + computerCounter + " to " + playerCounter);
//     }
// }
// game();

// const btn = document.querySelector('button');

// function logText(e){
//     console.log(this,classList.value);
// }

// btn.forEach(btn => btn.addEventListener('click', logText));
