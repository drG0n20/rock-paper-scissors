//function computerPlay

let computerCounter = 0;
let playerCounter = 0;

function computerPlay() {
    {
        let ran = Math.floor(Math.random() * 3);
        var choice;

        switch (ran) {
            case 0:
                choice = "paper";
                break;
            case 1:
                choice = "rock";
                break;
            default:
                choice = "scissors";
        }
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("It's a TIE!");
    } else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
        playerCounter++;
        return "Player WINs!";
    } else {
        computerCounter++;
        return "Computer WINs!";
    }
}

function game() {
    while (playerCounter < 5) {
        let playerSelection = prompt("What is your pick? Rock, paper, or scissors???");
        let computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("PLAYER: " + playerCounter + " - " + "COMPUTER: " + computerCounter);
    }
}
game();

