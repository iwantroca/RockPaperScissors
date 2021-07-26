// create a function to check if any of the player have registered 5 wins
// if that then 'computer beats the '

let computerItem;
let playerItem;
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
let gameComment = document.querySelector(".game_result").firstElementChild;
let gameScore = document.querySelector(".game_score");
let playerScoreText = gameScore.firstElementChild.firstElementChild;
let computerScoreText = gameScore.lastElementChild.firstElementChild;

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

// plays the one round and increments the score of winner
function roundPlay(computerMove, humanMove) {
  if (
    (computerMove === "rock" && humanMove === "scissors") ||
    (computerMove === "paper" && humanMove === "rock") ||
    (computerMove === "scissors" && humanMove === "paper")
  ) {
    gameComment.textContent = `Computer Wins!! ${computerItem} beats the ${playerItem}`;
    computerScore += 1;
    computerScoreText.textContent = computerScore;
  } else if (computerMove == humanMove) {
    gameComment.textContent = `Draw!! Both parties pick the ${computerItem}`;
    computerScore += 0;
    playerScore += 0;
  } else {
    gameComment.textContent = `Player Wins!! ${playerItem} beats the ${computerItem}`;
    playerScore += 1;
    playerScoreText.textContent = playerScore;
  }
  return gameComment;
}

buttons.forEach((button) => button.addEventListener("click", computerPick));
buttons.forEach((button) => button.addEventListener("click", playerPick));
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    roundPlay(computerItem, playerItem);
  })
);

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}
function winChecker() {
  if (computerScore == 5 || playerScore == 5) {
    disableButtons();
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    winChecker();
  })
);
