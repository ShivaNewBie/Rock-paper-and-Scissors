choices = ['rock','paper','scissor']
playerWon = 0
computerWon = 0




function game(){
    // for (let i = 1; i < 5; i++) {
    //   playRound(i);
    // }
    playRound()
 }

function playRound(){
    const playerSelection = playerChoice()
    const computerSelection = computerChoice() 
}
  
function playerChoice(){
    let input = prompt('Please type rock, paper, and scissor')
    while (choices.includes(input) == false){ //if input is not equal to choices the boolean will return false thus executing the while loop
        input = prompt('Please type rock, paper, and scissor')
    }
    input = input.toLowerCase()
    // console.log(input)
}

function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    } else{
        return false
    }
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}


game()


