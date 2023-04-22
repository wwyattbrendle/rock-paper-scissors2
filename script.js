const validChoices = ["rock", "paper", "scissors"];

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
    if (playerChoice === validChoices[computerChoice]){
        alert("It's a Tie!  Play Again");
        playGame();
        return;
    } else if(validChoices[computerChoice + 1] % 3 === playerChoice){
        alert("Player Wins")
    } else {
        alert("Computer Wins")
    }
    console.log(`player choice: ${playerChoice}, computer choice: ${validChoices[computerChoice]}`);
}
playGame();
