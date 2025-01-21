// Declare global variables
let humanScore = 0;
let computerScore = 0;



// Get the computer choice
function getComputerChoice (){
    const randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Tets the function
console.log(getComputerChoice());



// Get the Human choice
function getHumanChoice () {
    let userChoice;
    while (true) {
        userChoice = prompt("Please enter a choice: rock, paper or scissors").toLowerCase();
        if (userChoice === "rock" || userChoice === "paper" || userChoice ==="scissors") {
            return userChoice;
        } else {
            alert("Invalid choice. Please enter rock, paper or scissors.");
        }
    }
}
// Test the function
console.log(getComputerChoice());



// Get the logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Getting the winner and increment the score.
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

// Get variable to call the function
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Get the logic for the entire game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Get the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        // Getting the winner and increment the score.
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            alert("It's a tie");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            alert(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }


    // Play 5 rounds
    for (let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1} Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    // Declare the winner
    if (humanScore > computerScore)
    {
        console.log(`Congratulations! You won the game with score of ${humanScore} to ${computerScore}.`);
        alert(`Congratulations! You won the game with score of ${humanScore} to ${computerScore}.`);
    }
    else if (computerScore > humanScore)
    {
        console.log(`Sorry, you lost the game. The computer won with a score of ${computerScore} to ${humanScore}.`);
        alert(`Sorry, you lost the game. The computer won with a score of ${computerScore} to ${humanScore}.`);
    }
    else
    {
        console.log("The game ended in a tie!");
        alert("The game ended in a tie!");
    }
}


playGame();
