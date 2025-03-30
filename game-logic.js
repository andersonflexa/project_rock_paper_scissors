document.addEventListener('DOMContentLoaded', () => {
    // Select buttons and result elements
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const outcomeDisplay = document.getElementById('outcome');
    const userScoreDisplay = document.getElementById('user-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const resetButton = document.getElementById('reset-button');

    let userScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Function to determine the winner
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        }
        if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') ||
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            userScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    }

    // Function to handle user choice
    function handleUserChoice(userChoice) {
        const computerChoice = getComputerChoice();
        const outcome = determineWinner(userChoice, computerChoice);

        // Update the UI
        userChoiceDisplay.textContent = `You chose: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
        outcomeDisplay.textContent = outcome;
        userScoreDisplay.textContent = `User Score: ${userScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }

    // Add event listeners to buttons
    rockButton.addEventListener('click', () => handleUserChoice('Rock'));
    paperButton.addEventListener('click', () => handleUserChoice('Paper'));
    scissorsButton.addEventListener('click', () => handleUserChoice('Scissors'));

    // Reset game
    resetButton.addEventListener('click', () => {
        userScore = 0;
        computerScore = 0;
        userChoiceDisplay.textContent = '';
        computerChoiceDisplay.textContent = '';
        outcomeDisplay.textContent = '';
        userScoreDisplay.textContent = 'User Score: 0';
        computerScoreDisplay.textContent = 'Computer Score: 0';
    });
});
