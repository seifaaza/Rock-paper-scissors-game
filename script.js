
function getComputerChoice(){
    let choices = ["hajra", "war9a", "m9as"]
  const random = Math.floor(Math.random() * choices.length);
  return choices[random]
}
  
function playRound(playerSelection, computerSelection){
  if(computerSelection == "hajra" && playerSelection == "m9as") {
    return "You lose !"
  } else if(computerSelection == "hajra" && playerSelection == "war9a") {
    return  "You win !"
  } else if(computerSelection == "war9a" && playerSelection == "m9as") {
    return  "You win !"
  } else if(computerSelection == "war9a" && playerSelection == "hajra") {
    return "You lose !"
  } else if(computerSelection == "m9as" && playerSelection == "war9a") {
    return "You lose !"
  } else if(computerSelection == "m9as" && playerSelection == "hajra") {
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




