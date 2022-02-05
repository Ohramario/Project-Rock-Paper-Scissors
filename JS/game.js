
const options = ['rock', 'paper', 'scissors'];

function computerPlay(variable) {

    return options[Math.floor(Math.random() * options.length)];
}


function playRound(playerSelection, computerSelection) {


   

    //Tie condition
    if (playerSelection == computerSelection) {
        alert ("Tie, please try again");
    }
    //winning conditions
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        alert ("You win ! " + playerSelection + " is greater than " + computerSelection);
    }
    //losing 
    else {
        alert ("You lose ! " + computerSelection + " is greater than " + playerSelection);

    }

}
//play game 5 times in a row
function game() {
    for (let i = 0; i < 5; i++) {

        while (true) {
            let sign = prompt("Please type one of the following three option: Rock, Paper, Scissors");
            if ((sign.toLowerCase() == "rock") || (sign.toLowerCase() == "paper") || (sign.toLowerCase() == "scissors")) {

                let playerSelection = sign.toLowerCase();
                let computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);

                break;
            }
            alert("You have inputted the wrong option, please try again")
        }

    }
}


console.log(game());
