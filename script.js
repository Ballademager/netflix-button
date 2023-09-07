document.querySelector(".startBtn").addEventListener("click", startAni);
const bgDiv = document.querySelector(".bgDiv");
const netflixBtn = document.querySelector(".netflixBtn");

function startAni() {
  bgDiv.classList.add("ani");
  bgDiv.addEventListener("animationend", nyEpisode);
  document.addEventListener("mousemove", vent);
}

function nyEpisode() {
  document.querySelector("h1").textContent = "Ny episode";
  document.querySelector("body").style.setProperty("background-color", "bisque");
}

function vent() {
  console.log("**************");
  bgDiv.classList.remove("ani");
  netflixBtn.style.setProperty("background-color", "rgb(235, 235, 235)");
  netflixBtn.addEventListener("click", nyEpisode);
}
