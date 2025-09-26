const slike = [
  "./slike/1_pocetna.png",
  "./slike/2_pocetna.png",
  "./slike/3_pocetna.png",
  "./slike/4_pocetna.png"
];

let index = 0;
let timer = null;

function prikaziSliku() {
  document.querySelector(".slika").src = slike[index];
}

function nextSlika() {
  index = (index + 1) % slike.length;
  prikaziSliku();
}

function prevSlika() {
  index = (index - 1 + slike.length) % slike.length;
  prikaziSliku();
}

// ------------- Novo: auto-play ---------
function startTimer() {
  if (timer) return;              // ako već postoji timer, ne stvaraj novi
  timer = setInterval(nextSlika, 3000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// Pauza kad miš pređe preko slike
const slideshow = document.getElementById("slideshow");
slideshow.addEventListener("mouseenter", stopTimer);
slideshow.addEventListener("mouseleave", startTimer);

// Inicijalizacija
document.addEventListener("DOMContentLoaded", () => {
  prikaziSliku();
  startTimer();
});