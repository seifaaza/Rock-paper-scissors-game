
function getComputerChoice(){
  let choices = ["rock", "paper", "scisors"]
  const random = Math.floor(Math.random() * choices.length);
  return choices[random]
}

function playRound(playerSelection, computerSelection){
  return computerSelection == "rock" && playerSelection == "scisors" ?  "You lose !"
  : computerSelection == "rock" && playerSelection == "paper" ? "You win !"
  : computerSelection == "paper" && playerSelection == "scisors" ? "You win !"
  : computerSelection == "paper" && playerSelection == "rock" ? "You lose !"
  : computerSelection == "scisors" && playerSelection == "paper" ? "You lose !"
  : computerSelection == "scisors" && playerSelection == "rock" ? "You win !"
  : computerSelection == playerSelection ? "No winner !"
  : "Invalid choice !!"
}

function game(){
    let score = 0
    for(i=0 ; i<5; i++){
      playRound(prompt("play"),  getComputerChoice()) == "You win !" ? score += 1 : null
    }
    console.log(score)
    score > 2 ? console.log("You win !") : console.log("You lose !") 
}

game()




