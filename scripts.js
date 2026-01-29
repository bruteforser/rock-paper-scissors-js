const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Define choices
const CHOICES = ["rock", "paper", "scissors"];

function computerChoice() {
  const pick = Math.floor(Math.random() * CHOICES.length);
  const choice = CHOICES[pick];
  return choice;
}

function getResult(player, cpu) {
  if (player === cpu) {
    return "tie";
  } else if (player === "rock" && cpu === "paper" ||
             player === "paper" && cpu === "rock" ||
             player === "scissors" && cpu === "paper") {
    return "player win";
  } else {
    return "player lose";
  }
}


rock.addEventListener("click", () => {
  getResult(rock, computerChoice());
})
paper.addEventListener("click", () => {
  computerChoice = gameRNG();
  playerChoice = paper;
})
scissors.addEventListener("click", () => {
  computerChoice = gameRNG();
  playerChoice = scissors;
})