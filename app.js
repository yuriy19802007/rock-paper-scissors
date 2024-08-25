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
  let userChoice = Number(
    prompt("Enter a number 1 : paper, 2 : scissors, 3 : rock")
  );
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

let singleGame = playRound(getUserChoice(), getComputerChoice());
console.log(singleGame);
