const validChoices = ["rock", "paper", "scissors"];
const scoreBoard = [0, 0];
const validityChecker = function(input) {
    if (!validChoices.includes(input)) {
        alert("Invalid input, retry");
        input = playerSelection();
    }
    return input;
}

const playerSelection = function() {
    let input = prompt("Rock, Paper, or Scissors?");
    input = input.toLowerCase();
    let output = validityChecker(input);
    return output;
}

const computerSelection = function() {
    let randomIndex = Math.floor(Math.random() * validChoices.length);
    return randomIndex;
}

const playGame = function(){
    const computerChoice = computerSelection();
    const playerChoice = playerSelection();
    let hasWinner = false;
    if (playerChoice === validChoices[computerChoice]){
        alert("It's a Tie!  Play Again");
        playGame();
        return;
    } else if(validChoices[(computerChoice + 1) % 3] === playerChoice){
        scoreBoard[1]++;
        alert(`player wins.  scoreBoard[1] = ${scoreBoard[1]}`);
    } else {
        scoreBoard[0]++;
        alert(`computer wins.  scoreBoard[0] = ${scoreBoard[0]}`);
    }
    if(scoreBoard.includes(2)){
        hasWinner = true;
        if(scoreBoard[0] == 2){
            console.log("Computer Wins!");
        } else {
            console.log("Player Wins!");
        }
    }
    console.log(`player choice: ${playerChoice}, computer choice: ${validChoices[computerChoice]}`);
    console.log(`player score: ${scoreBoard[1]}, computer score: ${scoreBoard[0]}`)
    if (!hasWinner){
        playGame();
    }
    return;
}

playGame();
