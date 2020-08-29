const header = document.querySelector("header");
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const searchIcon = document.querySelector(".search-icon");
const closeIcon = document.querySelector(".close-icon");
const search = document.getElementById("search");
const menuItems = document.querySelectorAll(".item");

// Animate on Scroll initiakization
AOS.init();

// responsive navbar
function navbar() {
  nav.classList.toggle("active");
}

// Sticky navbar
function sticky() {
  header.classList.toggle("sticky", window.scrollY > 0);
}

// open Search bar
function openSearch() {
  search.classList.add("expand");
}

// close search bar
function closeSearch() {
  search.classList.remove("expand");
}

function toggleNav() {
  nav.classList.remove("active");
}

window.addEventListener("scroll", sticky);

menu.addEventListener("click", navbar);

searchIcon.addEventListener("click", openSearch);

closeIcon.addEventListener("click", closeSearch);

menuItems.forEach((item) => {
  item.addEventListener("click", toggleNav);
});
