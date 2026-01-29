const gameRNG = () => Math.floor(Math.random() * 3);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerChoice;
let computerChoice;

rock.addEventListener("click", () => {
  computerChoice = gameRNG();
  playerChoice = rock;
})
paper.addEventListener("click", () => {
  computerChoice = gameRNG();
  playerChoice = paper;
})
scissors.addEventListener("click", () => {
  computerChoice = gameRNG();
  playerChoice = scissors;
})