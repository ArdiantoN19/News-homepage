const hamburgerButton = document.querySelector(".hamburger-button");
const navMenu = document.querySelector(".nav-menu");
const iconHamburger = hamburgerButton.querySelector("img");

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("backdrop");
  if (navMenu.classList.contains("active")) {
    iconHamburger.src = "/assets/images/icon-menu-close.svg";
  } else {
    iconHamburger.src = "/assets/images/icon-menu.svg";
  }
});
