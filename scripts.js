const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameContainer = document.querySelector("#game-wrapper");
const drawGameResult = document.createElement("div");

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
  const result = getResult(rock, computerChoice());
  drawGameResult.textContent = result;
  container.appendChild(drawGameResult);
});

paper.addEventListener("click", () => {
  const result = getResult(paper, computerChoice());
  drawGameResult.textContent = result;
  container.appendChild(drawGameResult);
});
scissors.addEventListener("click", () => {
  const result = getResult(scissors, computerChoice());
  drawGameResult.textContent = result;
  container.appendChild(drawGameResult);
});