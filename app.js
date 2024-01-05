const button = document.getElementById("button");

button.onclick = () => {
  location.href = "./game.html";
};

let scoreBoard = localStorage.getItem("score")
let spanScore = document.getElementById("scoreId")

spanScore.textContent = `${scoreBoard}!`