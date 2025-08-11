function getcomputerchoice() {
const choice = ["rock","paper","scissors"]
const random = Math.floor(Math.random()*3);
return choice[random].toLowerCase();


}
function Getplayerchoice(){
    return prompt("rock paper scissor").toLowerCase()
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function round(player, computer) {
        if (player === computer) {
        return "tie";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return `human`;
    }
    return `computer`;
}
    for (let i= 1;i<= 5;i++){
        const humanChoice = Getplayerchoice();
        const computerChoice = getcomputerchoice();
        const winner = round(humanChoice,computerChoice);
        console.log(`Round ${i}`);
        console.log(`Player: ${humanChoice} --- Computer: ${computerChoice}`);
        if (winner === "human") {
            console.log("You win this round!");
            humanScore++;
        } else if (winner === "computer") {
            console.log("Computer wins this round!");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
         console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
        console.log("-------------");
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }

    
}
playGame();
