"use strict";

function getRandomNumber(start = 0, end = 100) {
  return Math.floor(Math.random() * end + start);
}

console.log(getRandomNumber(1, 3));

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

console.log(getComputerChoice());

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

console.log(getUserChoice());
