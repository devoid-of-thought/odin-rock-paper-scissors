console.log("Hello World!")
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice(){
    let input =     prompt("Enter rock, paper, or scissors:");
    input = input.toLowerCase();
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return null;
    }
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if  ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') ||(humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;     
    }
}
function playGame() {
    while (true){
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            continue; 
        }
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        if (humanScore === 5) {
            console.log("Congratulations! You won the game!");
            break;
        } else if (computerScore === 5) {
            console.log("Sorry, the computer won the game.");
            break;
        }
    }
}
game();