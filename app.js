
//Get the inputs from html
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll("#button");
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
const endGame = document.querySelector("#endGame");

//Declare the variables 
let playerSelection;
let computerSelection;
let result;
let cScore = 0;
let pScore = 0;

choiceBtns.forEach(button => button.addEventListener('click',() => {

    playerSelection = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${playerSelection}`;
    computerText.textContent = `computer: ${computerSelection}`;
    resultText.textContent = checkWinner();
    computerScore.textContent = `Score: ${cScore}`;
    playerScore.textContent = `Score: ${pScore}`;
    endGame.textContent = gameOver();

}));

// Function for computer play
function computerTurn(){

    let randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computerSelection = "ROCK";
            break;
        case 2:
            computerSelection = "PAPER";
            break;
        case 3:
            computerSelection = "SCISSORS";
            break;
    }
}

//Add score and give comments for winner
function checkWinner(){
    if (playerSelection === computerSelection){
        return('Draw!')
    }
    else if (playerSelection == "ROCK" && computerSelection =="PAPER"){
        cScore++
        return('You lose!,Paper beats Rock.')
    }
    else if (playerSelection == "ROCK" && computerSelection =="SCISSORS"){
        pScore++
        return('You Win!,Rock beats Scissors.')
    }
    else if (playerSelection == "PAPER" && computerSelection =="ROCK"){
        pScore++
        return('You Win!,Paper beats Rock.')
    }
    else if (playerSelection == "PAPER" && computerSelection =="SCISSORS"){
        cScore++
        return('You Lose!,Scissors beats Paper.')
    } 
    else if (playerSelection == "SCISSORS" && computerSelection =="ROCK"){
        cScore++
        return('You Lose!,Rock beats Scissors.')
    }  
    else if (playerSelection == "SCISSORS" && computerSelection =="PAPER"){
        pScore++
        return('You Win!,Scissors beats Paper.')
    }

//Verify the winner and refresh the page
}
 function gameOver(){

    if(pScore == 6){
        alert('GAME OVER! YOU WON THE MATCH')
        location.reload()
        
        
    }
    else if( cScore == 6) {
        alert('GAME OVER! YOU LOST THE MATCH')
        location.reload()
    }
        
}


    

 


   
    

    

