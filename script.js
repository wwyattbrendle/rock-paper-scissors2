//Adding DOM selectors here
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");
const playerScore = document.getElementById("p1");
const computerScore = document.getElementById("p2");

//arrays for playGame function
const validChoices = ["rock", "paper", "scissors"];
const scoreBoard = [0, 0];

//setting default choice to rock
let playerChoice;
const computerSelection = function() {
    let randomIndex = Math.floor(Math.random() * validChoices.length);
    return randomIndex;
}

//add events
const addEvents = () => {
    rockButton.addEventListener("click", function() {
        playerChoice = "rock";
        playGame(playerChoice);
    });
    paperButton.addEventListener("click", function() {
        playerChoice = "paper";
        playGame(playerChoice);
    });
    scissorsButton.addEventListener("click", function() {
        playerChoice = "scissors";
        playGame(playerChoice);
    });
    resetButton.addEventListener("click", function() {
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        scoreBoard[0] = 0;
        scoreBoard[1] = 0;
    })
}

//logic for play game
const playGame = function(playerChoice){
    const computerChoice = computerSelection();
    if (playerChoice === validChoices[computerChoice]){
        message.textContent = "It's a tie!  Choose again.";
    } else if(validChoices[(computerChoice + 1) % 3] === playerChoice){
        scoreBoard[1]++;
        playerScore.textContent = `${scoreBoard[1]}`;
        message.innerHTML = `You Win! <br> <br> You chose ${playerChoice}, computer chose ${validChoices[computerChoice]}`;
    } else {
        scoreBoard[0]++;
        computerScore.textContent = `${scoreBoard[0]}`
        message.innerHTML = `Computer Wins! <br> <br> You chose ${playerChoice}, computer chose ${validChoices[computerChoice]}`;
    }
    return;
}

addEvents();