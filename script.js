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
        return "It's a TIE!";
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
    while (playerCounter < 5 && computerCounter < 5) {
        let playerSelection = prompt("Pick your weapon: rock, paper, scissors");
        // let playerSelection = "rock";
        let computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("PLAYER: " + playerCounter + " - " + "COMPUTER: " + computerCounter);
    }
    if (playerCounter >= 5) {
        console.log("--------------------");
        console.log("Player WINS!!!! " + playerCounter + " to " + computerCounter);
    } else if (computerCounter >= 5) {
        console.log("--------------------");
        console.log("Computer WINS!!!! " + computerCounter + " to " + playerCounter);
    }
}
game();

