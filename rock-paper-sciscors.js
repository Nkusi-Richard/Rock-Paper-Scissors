
console.log("Hello");

const computerChoicePool = ["rock", "paper", "scissors"];


function getComputerChoice () {

    let computerChoice = computerChoicePool[Math.floor(Math.random()*3)];
    return computerChoice;
}

// console.log(getComputerChoice ())
let play_output = "Start of the Game"
let player_score = 0;
let computer_score = 0;

function playRound(playerSelection, computerSelection) {
    

    if (computerSelection == "rock" && playerSelection == "rock") {

        play_output= "It's a Rock tie" ;
        console.log(play_output);
        return player_score, computer_score;
    }

    else if (computerSelection == "rock" && playerSelection == "paper") {
        play_output= "You Win. Paper beats Rock";
        console.log(play_output);
        return ++player_score, computer_score;
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        play_output= "You lose. Rock beats Scissors";
        console.log(play_output);
        return player_score, ++computer_score;
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        play_output= "You lose. Paper beats Rock" ;
        console.log(play_output);
        return player_score, ++computer_score;
    }

    else if (computerSelection == "paper" && playerSelection == "scissors") {
        play_output= "You Win. scissors beats paper" ;
        console.log(play_output);
        return ++player_score, computer_score;
    }

    else if (computerSelection == "paper" && playerSelection == "paper") {
        play_output= "It's a Paper tie";
        console.log(play_output);
        return player_score, computer_score;
    }

    else if (computerSelection == "scissors" && playerSelection == "rock") {
        play_output= "You Win. Rock beats Scissors.";
        console.log(play_output);
        return ++player_score, computer_score;
    }

    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        play_output= "It's a Scissors tie" ;
        console.log(play_output);
        return player_score, computer_score;
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        play_output= "You lose. Scissors beats Paper" ;
        console.log(play_output);
        return player_score, ++computer_score;
    }
    
  }

  function game () {

    let playerSelection = prompt("What's your choice");
    let computerSelection = getComputerChoice();

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice");
        let computerSelection = getComputerChoice();

        player_score, computer_score = playRound(playerSelection, computerSelection);

        console.log(player_score, computer_score);
      }

      if (player_score > computer_score) {
        console.log("You win "+ player_score +" "+computer_score);
      }
      else{
        console.log("You lost "+ player_score +" "+computer_score);
      }

  }

  game()




