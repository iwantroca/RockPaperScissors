let computerPick;
let computerItem;

// Computer Picks a random item
let computerPlay = () => {
  computerPick = Math.floor(Math.random() * 3);
  switch (computerPick) {
    case 0:
      computerItem = "Rock";
      break;
    case 1:
      computerItem = "Paper";
      break;
    case 2:
      computerItem = "Scissors";
      break;
  }
  return computerItem;
};
computerPlay();

// Human picks an item
let weapons = document.querySelectorAll(".weapon");
let humanMove;
weapons.forEach((weapon) => {
  weapon.addEventListener("click", () => {
    humanMove = weapon.classList[0];
    console.log(humanMove);
  });
});

let counter = 1;
let humanScore = 0;
let computerScore = 0;

// initiates the one round game
let roundPlay = (computerMove, humanMove) => {
  if (
    (computerMove === "Rock" && humanMove === "Paper") ||
    (computerMove === "Paper" && humanMove === "Scissors") ||
    (computerMove === "Scissors" && humanMove === "Rock")
  ) {
    alert("Human Wins");
    alert(`Human: ${humanMove} beats the Computer: ${computerMove}`);
    counter += 1;
    humanScore += 1;
  } else if (computerMove === humanMove) {
    alert("It is a draw");
    alert(`Both players pick the ${humanMove}`);

    counter += 0;
  } else {
    alert("Computer Wins");
    alert(`Computer: ${computerMove} bests the Human: ${humanMove}`);
    computerScore += 1;

    counter += 1;
  }
};

// tracks the counter and if number of rounds is less than 5 then
//      keeps the rounds of game going.

// while (counter < 6) {
//   computerPlay();
//   newHumanPlay = humanPlay();
//   roundPlay(computerItem, newHumanPlay);
// }

// let result =
//   humanScore > computerScore
//     ? alert(`Human is the real champion ${humanScore}-${computerScore}`)
//     : alert(
//         `Computer beats the hell out of human ${computerScore}-${humanScore}`
//       );
