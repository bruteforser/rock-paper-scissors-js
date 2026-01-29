const gameRNG = () => Math.floor(Math.random() * 3);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
  gameRNG();
})
paper.addEventListener("click", () => {
  gameRNG();
})
scissors.addEventListener("click", () => {
  gameRNG();
})