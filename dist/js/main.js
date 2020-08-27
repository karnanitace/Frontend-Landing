const header = document.querySelector("header");
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

function navbar() {
  nav.classList.toggle("active");
}

function sticky() {
  header.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener("scroll", sticky);

menu.addEventListener("click", navbar);
