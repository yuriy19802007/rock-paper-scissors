"use strict";

const btnGroup = document.querySelector(".btn-group");
const resultCard = document.querySelector(".card");

let humanScore = 0;
let computerScore = 0;
let countGames = 5;

function getRandomNumber(start = 0, end = 100) {
  return Math.floor(Math.random() * end + start);
}

// console.log(getRandomNumber(1, 3));

function getComputerChoice() {
  let choice = getRandomNumber(1, 3);

  switch (choice) {
    case 1: {
      return "paper";
    }
    case 2: {
      return "scissors";
    }
    case 3: {
      return "rock";
    }
    default: {
      return "error";
    }
  }
}

// console.log(getComputerChoice());

function getUserChoice(num) {
  let userChoice;

  while (true) {
    userChoice = num;
    if (userChoice == 1 || userChoice == 2 || userChoice == 3) {
      break;
    } else {
      resultCard.textContent = ("Invalid input.");
    }
  }

  switch (userChoice) {
    case 1: {
      return "paper";
    }
    case 2: {
      return "scissors";
    }
    case 3: {
      return "rock";
    }
    default: {
      return "error";
    }
  }
}

// console.log(getUserChoice());

function playRound(humanChoice, computerChoice) {
  let human = humanChoice.toLowerCase();
  let comp = computerChoice.toLowerCase();

  if (human == "error") {
    return "Invalid input";
  }

  if (human == comp) {
    return "Draw";
  } else if (human == "paper" && comp == "rock") {
    return `You win. ${human} beats ${comp}.`;
  } else if (human == "rock" && comp == "scissors") {
    return `You win. ${human} beats ${comp}.`;
  } else if (human == "scissors" && comp == "paper") {
    return `You win. ${human} beats ${comp}.`;
  } else {
    return `Comp win. ${comp} beats ${human}.`;
  }
}

btnGroup.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  console.log(btn);
  if (!btn) return;
  let userChoice = btn.dataset.id;
  if(userChoice==1){
    userChoice = "paper";
  }else if(userChoice==2){
    userChoice = "scissors";
  }else if(userChoice==3){
    userChoice = "rock";
  }
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  const result = playRound(userChoice, computerChoice);
  resultCard.textContent = result;
});




// let singleGame = playRound(getUserChoice(), getComputerChoice());
// console.log(singleGame);

// function playGame() {
//   
//   let message;
//   do {
//     let comp = getComputerChoice();
//     let user = getUserChoice();

//     message = playRound(user, comp);
//     console.log(message);
//     --countGames;
//   } while (countGames > 0);
// }

// playGame();
