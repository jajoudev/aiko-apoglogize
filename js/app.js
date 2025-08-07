const $intro = document.querySelector(".intro");
const $main = document.querySelector("main");
const $buttonHeart = document.querySelector("#heart-button");
const $apologize = document.querySelector(".apologize-container");
const container = document.getElementById("flowers-containers");

const animations = ["animate-fall", "animate-fall-slow", "animate-fall-slower"];
const colors = ["text-pink-200", "text-pink-300", "text-pink-400"];
const opacities = ["opacity-50", "opacity-60", "opacity-70", "opacity-75"];

const music = document.getElementById("background-music");
const button = document.getElementById("heart-button");

// Crée des fleurs et des coeurs qui tombent
for (let i = 0; i < 40; i++) {
  let flower = document.createElement("div");
  let heart = document.createElement("div");

  flower.textContent = "🌸";
  heart.textContent = "❤️";

  flower.className = `
    absolute
    w-6 h-6
    ${animations[Math.floor(Math.random() * animations.length)]}
    ${colors[Math.floor(Math.random() * colors.length)]}
    ${opacities[Math.floor(Math.random() * opacities.length)]}
  `.trim();

  heart.className = `
    absolute
    w-6 h-6
    ${animations[Math.floor(Math.random() * animations.length)]}
    ${colors[Math.floor(Math.random() * colors.length)]}
    ${opacities[Math.floor(Math.random() * opacities.length)]}
  `.trim();

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = -Math.random() * 100 + "vh";

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.top = -Math.random() * 100 + "vh";

  container.appendChild(flower);
  container.appendChild(heart);
}

// Quand on clique sur le bouton cœur
$buttonHeart.addEventListener("click", () => {
  music.muted = false;
  music.volume = 0.5;
  music.play();

  $buttonHeart.style.position = "relative";
  $buttonHeart.style.zIndex = "20";

  // Créer le loader autour du bouton
  let loader = document.createElement("div");
  loader.classList.add("loader");
  $buttonHeart.appendChild(loader);

  // Après 2 secondes, enlever le loader et faire exploser les coeurs
  setTimeout(() => {
    loader.remove();

    for (let i = 0; i < 60; i++) {
      let heartExplosion = document.createElement("div");
      heartExplosion.textContent = "❤️";
      heartExplosion.className = "heart-explode";

      // Positionner au centre du bouton
      const rect = $buttonHeart.getBoundingClientRect();
      heartExplosion.style.left = rect.left + rect.width / 2 + "px";
      heartExplosion.style.top = rect.top + rect.height / 2 + "px";

      // Trajectoire aléatoire
      let x = (Math.random() - 0.5) * 300 + "px";
      let y = (Math.random() - 0.5) * 600 + "px";

      heartExplosion.style.setProperty("--x", x);
      heartExplosion.style.setProperty("--y", y);

      document.body.appendChild(heartExplosion);

      setTimeout(() => heartExplosion.remove(), 7500);
    }

    $buttonHeart.style.transition = "opacity 1s ease";
    $buttonHeart.style.opacity = "0";

    setTimeout(() => {
      $buttonHeart.remove();

      $intro.classList.add("opacity-0");
      $intro.classList.add("hidden");

      $apologize.classList.remove("hidden");
      $apologize.style.opacity = "0";
      $apologize.style.transition = "opacity 1s ease";

      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';

      setTimeout(() => {
        $apologize.style.opacity = "1";
      }, 50);
    }, 1000);

  }, 2000);
});
