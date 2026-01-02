console.log("Hello World!")
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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

let rock = document.createElement('button');
rock.innerText = 'Rock';
let paper = document.createElement('button');
paper.innerText = 'Paper';
let scissors = document.createElement('button');
scissors.innerText = 'Scissors';
let container = document.createElement('div');
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
document.body.appendChild(container);
let resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);
function updateResult(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    resultDiv.innerText = `${result}\nHuman Score: ${humanScore} | Computer Score: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
    let finalResult = document.createElement('div');
    if (humanScore === 5) {
        finalResult.innerText = "Congratulations! You won the game!";
    } else {
        finalResult.innerText = "Sorry! The computer won the game!";
    }
    document.body.appendChild(finalResult);
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}   
}
rock.addEventListener('click', () => updateResult('rock'));
paper.addEventListener('click', () => updateResult('paper'));
scissors.addEventListener('click', () => updateResult('scissors'));


