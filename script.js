choices = ["rock", "paper", "scissor"];
let playerSelection;
let computerSelection;
playerScore = 0;
computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerSelection = e.target.innerText;
    // console.log(playerSelection);
    playRound(playerSelection);
    DeclareWinner();
  });
});

function playRound(playerSelection) {
  const computerSelection = computerChoice();
  if (playerSelection == computerSelection) {
    console.log("tie");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore++;
    console.log("player win: " + playerScore);
  } else if (
    (computerSelection == "rock" && playerSelection == "scissor") ||
    (computerSelection == "scissor" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore++;
    console.log("computer win: " + computerScore);
  }
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function DeclareWinner() {
  if (playerScore == 5) {
    console.log("Player wins");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    console.log("Computer wins");
    playerScore = 0;
    computerScore = 0;
  }
}
