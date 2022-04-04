const computerSelectionDisplay = document.getElementById("computer");
const playerSelectionDisplay = document.getElementById("player");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");
const verdictDisplay = document.getElementById("verdict");
const plvscomDisplay = document.getElementById("plvscom");
let playerChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let verdict = "";
let plvscom = "";

choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerSelectionDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    playRound();
    if (playerScore == 5) {
        verdict = "PLAYER WON!!!!";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore == 5) {
        verdict = "COMPUTER WON!!!!";
      playerScore = 0;
      computerScore = 0;
    }
    verdictDisplay.innerHTML = verdict;
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "papper";
  } else {
    computerChoice = "scissors";
  }
  computerSelectionDisplay.innerHTML = computerChoice;
}

function playRound() {
  if (playerChoice === computerChoice) {
    result = "It's a TIE!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice == "papper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "papper")
  ) {
    playerScore += 1;
    plvscom = "Player " + playerScore + " - " + computerScore + " Computer";
    result = "Player WINs!";
  } else {
    computerScore += 1;
    plvscom = "Player " + playerScore + " - " + computerScore + " Computer";
    result = "Computer WINs!";
  }
  resultDisplay.innerHTML = result;
  plvscomDisplay.innerHTML = plvscom;
}
