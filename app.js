"use strict";

let humanScore = 0;
let computerScore = 0;

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

function getUserChoice() {
  let userChoice;

  while (true) {
    userChoice = Number(
      prompt("Enter a number 1 : paper, 2 : scissors, 3 : rock")
    );
    if (userChoice == 1 || userChoice == 2 || userChoice == 3) {
      break;
    } else {
      console.log("Invalid input.");
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

// let singleGame = playRound(getUserChoice(), getComputerChoice());
// console.log(singleGame);

function playGame() {
  let countGames = 5;
  let message;
  do {
    let comp = getComputerChoice();
    let user = getUserChoice();

    message = playRound(user, comp);
    console.log(message);
    --countGames;
  } while (countGames > 0);
}

playGame();
