const gameContainer = document.querySelector("#game-wrapper");
const drawGameResult = document.createElement("div");
const playerIconCell = document.getElementById("player-icon");
const cpuIconCell = document.getElementById("cpu-icon");

const ICONS = {
  rock: "fa-hand-back-fist",
  paper: "fa-hand",
  scissors: "fa-hand-scissors",
};

function drawChoice(cell, choice) {
  cell.textContent = "";
  const icon = document.createElement("i");
  icon.classList.add("fa-regular", ICONS[choice]);
  cell.appendChild(icon);
}

const CHOICES = ["rock", "paper", "scissors"];

function computerChoice() {
  const pick = Math.floor(Math.random() * CHOICES.length);
  const choice = CHOICES[pick];
  return choice;
}

function getResult(player, cpu) {
  if (player === cpu) {
    return "tie";
  } else if (player === "rock" && cpu === "scissors" ||
    player === "paper" && cpu === "rock" ||
    player === "scissors" && cpu === "paper") {
    return "player win";
  } else if (player === "rock" && cpu === "paper" ||
    player === "paper" && cpu === "scissors" ||
    player === "scissors" && cpu === "rock") {
    return "player lose";
  }
}

gameContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const playerChoice = btn.value;
  const cpuChoice = computerChoice();

  const result = getResult(playerChoice, cpuChoice);
  drawGameResult.textContent = result;
  gameContainer.appendChild(drawGameResult);
  drawChoice(playerIconCell, playerChoice);
  drawChoice(cpuIconCell, cpuChoice);

});
