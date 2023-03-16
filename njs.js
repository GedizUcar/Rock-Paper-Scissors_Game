function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "win";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "lose";
  } else {
    return "tie";
  }
}
function playAgain() {
  const playAgain = prompt("Do you want to play again? Type 'yes' or 'no'");
  if (playAgain.toLowerCase() === "yes") {
    startGame();
  } else {
    console.log("Thanks for playing!");
  }
}
function starting() {
  console.log(`Let's play Rock, Paper, Scissors,`);
  console.log(`-------------------------------`);
}

function getPlayerInput() {
  while (true) {
    let playerSelection = prompt("Choose rock, paper, or scissors:");
    
    if (playerSelection === null) {
      console.log("Game canceled.");
      alert("Game canceled.");
      return null;
    }
    
    playerSelection = playerSelection.trim().toLowerCase();
    
    if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      return playerSelection;
    } else {
      alert("Invalid choice. Please choose rock, paper, or scissors.");
    }
  }
}

function startGame() {
  starting();
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerInput();
    
    if (playerSelection === null) {
      return;
    }
    
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === "win") {
      playerScore++;
    } else if (result === "lose") {
      computerScore++;
    }

    console.log(
      `You played ${playerSelection}. Computer played ${computerSelection}.`
    );

    if (result === "win") {
      console.log(
        `You win this round! ${playerSelection} beats ${computerSelection}.`
      );
    } else if (result === "lose") {
      console.log(
        `You lose this round! ${computerSelection} beats ${playerSelection}.`
      );
    } else {
      console.log(`It's a tie this round! You both played ${playerSelection}.`);
    }
    console.log(`----- ROUND: ${round++} OVER -----`);
  }
  console.log(`------ FINAL SCORE ------`);

  if (playerScore > computerScore) {
    console.log(
      `You win the game! You scored ${playerScore} and the computer scored ${computerScore}.`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lose the game! You scored ${playerScore} and the computer scored ${computerScore}.`
    );
  } else {
    console.log(`It's a tie game! You both scored ${playerScore}.`);
  }
  console.log(`------ GAME OVER ------`);

  playAgain();
  
}
startGame();
