// computer selects a random item
// if either of the player have scored 5, stop the game
// human selects an item
// iterate through buttons
// add event listener to class of both icon and button div to get the value of 'weapon'
// as the button is clicked, also initiates a function to run the round
//
// add a score of +1 to winner

let computerItem;
let playerItem;

let buttons = document.querySelectorAll("button");

function computerPick() {
  let selectItem = Math.floor(Math.random() * 3);
  if (selectItem === 0) computerItem = "rock";
  else if (selectItem === 1) computerItem = "paper";
  else if (selectItem === 2) computerItem = "scissors";
  return computerItem;
}

function playerPick(e) {
  playerItem = e.target.classList[0];
  return playerItem;
}

// plays a round of game b/w computer and player
function roundPlay(computerMove, humanMove) {
  if (
    (computerMove === "rock" && humanMove === "scissors") ||
    (computerMove === "paper" && humanMove === "rock") ||
    (computerMove === "scissors" && humanMove === "paper")
  ) {
    console.log("Computer beats the player");
  } else if (computerMove == humanMove) {
    console.log("It is a draw");
  } else {
    console.log("Human beats the computer");
  }
}

buttons.forEach((button) => button.addEventListener("click", computerPick));
buttons.forEach((button) => button.addEventListener("click", playerPick));
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    roundPlay(computerItem, playerItem);
  })
);
