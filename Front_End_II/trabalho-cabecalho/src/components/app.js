// Seleciona o botão e o menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
