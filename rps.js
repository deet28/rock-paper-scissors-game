const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const gameResults = document.querySelector('#game-results') 


let humanCounterSection = document.querySelector('.human-counter');
let computerCounterSection = document.querySelector('.computer-counter');
let humanCounter = 0;
let computerCounter = 0; 


function playRound(playerSelection, computerSelection) {
    
let playerChoice = playerSelection.toLowerCase();
let computerChoice;

  if (computerSelection === 1){
    computerChoice = "rock";
  } else if (computerSelection === 2){
    computerChoice = "paper";
  } else {
    computerChoice = "scissors"
  } 

  if (playerChoice == computerChoice){
    gameResults.textContent = "It's a tie!"
  } else if (playerChoice == "rock" && computerChoice == "paper"){
    gameResults.textContent ="You lose! Paper beats rock."
    computerCounter++;
  } else if (playerChoice == "rock" && computerChoice == "scissors"){
    gameResults.textContent = "You win! Rock beats scissors"
    humanCounter++;
  } else if (playerChoice =="paper" && computerChoice =="scissors"){
    gameResults.textContent = "You lose! Scissors beats paper."
    computerCounter++;
  } else if (playerChoice == "paper" && computerChoice == "rock"){
    gameResults.textContent = "You win! Paper beats rock."
    humanCounter++;
  } else if (playerChoice == "scissors" && computerChoice == "rock"){
    gameResults.textContent = "You lose! Rock beats scissors"
    computerCounter++;
  } else if (playerChoice == "scissors" && computerChoice == "paper"){
    gameResults.textContent = "You win! Scissors beats paper."
    humanCounter++;
  }
  humanCounterSection.textContent = humanCounter;
  computerCounterSection.textContent = computerCounter;
  gameToFive();
}



function computerPlay(){
let num = Math.floor((Math.random()*3)+1);
    return num;
};




rockButton.addEventListener('click',() =>{
  console.log (playRound("rock",computerPlay()));
});
paperButton.addEventListener('click',() =>{
  console.log (playRound("paper",computerPlay()));
});
scissorsButton.addEventListener('click',() =>{
  console.log (playRound("scissors",computerPlay()));
});

function gameToFive(){
  if (computerCounter === 5){
    alert("Sorry, you lose. Play again?");
    window.location.reload();
  } else if (humanCounter === 5){
    alert("Hooray! You win! Play again?");
    window.location.reload();
  }
}