const gameRNG = () => Math.floor(Math.random() * 3);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerChoice;
let computerChoice
function computerChoice() {
const CHOICES = ["rock", "paper", "scissors"];
const pick = Math.floor(Math.random() * CHOICES.length);
const choice = CHOICES[pick];
return choice;
}
function castDie(playerChoice, computerChoice) {
  
}


rock.addEventListener("click", () => {
  castDie(rock, computerChoice());
})
paper.addEventListener("click", () => {
  computerChoice = gameRNG();
  playerChoice = paper;
})
scissors.addEventListener("click", () => {
  computerChoice = gameRNG();
  playerChoice = scissors;
})