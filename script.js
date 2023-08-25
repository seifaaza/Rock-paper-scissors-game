
function getComputerChoice(){
    let choices = ["rock", "paper", "scisors"]
  const random = Math.floor(Math.random() * choices.length);
  return choices[random]
}
  
function playRound(playerSelection, computerSelection){
  if(computerSelection == "rock" && playerSelection == "scisors") {
    return "You lose !"
  } else if(computerSelection == "rock" && playerSelection == "paper") {
    return  "You win !"
  } else if(computerSelection == "paper" && playerSelection == "scisors") {
    return  "You win !"
  } else if(computerSelection == "paper" && playerSelection == "rock") {
    return "You lose !"
  } else if(computerSelection == "scisors" && playerSelection == "paper") {
    return "You lose !"
  } else if(computerSelection == "scisors" && playerSelection == "rock") {
    return  "You win !"
  } 
  else if(computerSelection == playerSelection) {
    return ( "No winner !")
  } 
    else return ("Invalid choice !!")
}

function game(){
    let score = 0
    for(i=0 ; i<5; i++){
      if(playRound(prompt("play"),  getComputerChoice()) == "You win !"){
          score += 1
        }else score = score
    }
    if (score > 2) { console.log("You win")} else console.log("You lose") 
  console.log(score)
}

game()




