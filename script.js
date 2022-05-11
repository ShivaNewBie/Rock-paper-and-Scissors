choices = ['rock','paper','scissor']
playerScore = 0
computerScore = 0


function game(){
  while(playerScore != 5 || computerScore != 5){
    playRound()
    if(playerScore == 5 || computerScore == 5){
      break
    }
  }
}

// function game(){
//     for (let i = 1; i < 5; i++) {
//       playRound(i);
//     }
//     playRound()
//  }

function playRound(){
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
    if (playerSelection == computerSelection) {
      console.log("tie");
    } else if (
      (playerSelection == "rock" && computerSelection == "scissor") ||
      (playerSelection == "scissor" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
    ) {
       
       playerScore++
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
  
function playerChoice(){
    let input = prompt('Please type rock, paper, and scissor')
    while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
 }
    input = input.toLowerCase()
    while (choices.includes(input) == false){ //if input is not equal to choices the boolean will return false thus executing the while loop
            input = prompt('Please type rock, paper, and scissor')
    };
    while (input == null) {
      break
    }     
    input = input.toLowerCase()
    return input  
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}




