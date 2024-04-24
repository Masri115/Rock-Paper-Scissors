var userScore = 0;
var computerScore = 0;
var maxPoints = 5;

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "Paper";
    }       
    else if (randomNumber === 1) {
        return "Rock";
    }
    else {
        return "Scissors";
    }
}

function updateResult(message) {
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}

function playRound(playerChoice) {
    var computerChoice = getComputerChoice();

    if (userScore < maxPoints && computerScore < maxPoints) {
        playerChoice = playerChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

if (playerChoice === computerChoice) {
    updateResult("It's a tie!");
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
) {
    userScore++;
    updateResult("You Win! Mazeltoff! " + playerChoice + " beats " + computerChoice);
} else {
    computerScore++;
    updateResult("You lose! Try Again! " + computerChoice + " beats " + playerChoice);
}{}
    }

    if (userScore === maxPoints || computerScore === maxPoints) {
        var winner = userScore === maxPoints ? "You" : "Computer";
        updateResult(winner + " won the game!");
    }
}

document.getElementById('B1').addEventListener('click', function() {
    playRound("Paper");
});

document.getElementById('B2').addEventListener('click', function() {
    playRound("Rock");
});

document.getElementById('B3').addEventListener('click', function() {
    playRound("Scissors");
});
