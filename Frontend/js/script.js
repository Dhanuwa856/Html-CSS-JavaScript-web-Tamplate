// Nav bar menu Icon function

const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const hideList = document.getElementById("menu");

openMenu.addEventListener("click", function () {
  hideList.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "flex";
});
closeMenu.addEventListener("click", function () {
  hideList.setAttribute("style", "");
  openMenu.style.display = "flex";
  closeMenu.style.display = "none";
});

// Nav bar position sticky

function handleStickyNav() {
  const header = document.querySelector(".nav-contact");
  const navbar = document.querySelector(".nav-bar");

  if (window.scrollY > header.offsetHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

// Add an event listener for scrolling
window.addEventListener("scroll", handleStickyNav);

// Initial setup
handleStickyNav();
